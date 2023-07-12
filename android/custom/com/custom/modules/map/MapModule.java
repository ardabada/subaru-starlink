package com.custom.modules.map;

import com.uievolution.microserver.HttpRequestInfo;

import android.content.Context;
import com.uievolution.microserver.AbstractMSModuleImpl;
import com.custom.manager.FileDownloader;
import java.io.File;
import java.util.List;
import java.util.Locale;
import java.io.IOException;
import java.text.MessageFormat;
import java.io.RandomAccessFile;
import android.os.Environment;

import gnu.trove.list.array.TIntArrayList;
import gnu.trove.map.hash.TIntObjectHashMap;

import net.osmand.ResultMatcher;
import net.osmand.binary.BinaryMapAddressReaderAdapter.AddressRegion;
import net.osmand.binary.BinaryIndexPart;
import net.osmand.binary.BinaryMapIndexReader;
import net.osmand.binary.BinaryMapDataObject;
import net.osmand.binary.BinaryMapIndexReader.MapIndex;
import net.osmand.binary.BinaryMapIndexReader.TagValuePair;
import net.osmand.binary.BinaryMapIndexReader.MapRoot;
import net.osmand.binary.BinaryMapIndexReader.SearchFilter;
import net.osmand.binary.BinaryMapIndexReader.SearchRequest;
import net.osmand.binary.BinaryMapPoiReaderAdapter.PoiRegion;
import net.osmand.binary.BinaryMapTransportReaderAdapter.TransportIndex;
import net.osmand.data.Building;
import net.osmand.data.City;
import net.osmand.data.MapObject;
import net.osmand.data.Street;
import net.osmand.osm.MapRenderingTypes;
import net.osmand.util.MapUtils;
import net.osmand.util.Algorithms;

public class MapModule extends AbstractMSModuleImpl {
    private FileDownloader fileDownloader;
	private Context context;

    public MapModule(Context context) {
		this.context = context;
        fileDownloader = new FileDownloader(context);
    }

	protected byte[] doStart() {
		try {
			if (isGetMethod()) {
				String action = getRequestInfo().getQuery("act");
				switch (action) {
					case "vector":
						processGetVectorMap();
						break;
					default:
						break;
				}
			}
		}
		catch (Exception e) {
			sendResponse(400, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, e.toString().getBytes());
		}

		return null;
	}

	private void processUnknownAction(String action) {
		sendResponse(400, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, ("unknown action " + action).getBytes());
	}

	private void processGetVectorMap() {
		HttpRequestInfo requestInfo = getRequestInfo();
		
		int z = Algorithms.parseIntSilently(requestInfo.getQuery("z"), 1);
		int x = Algorithms.parseIntSilently(requestInfo.getQuery("x"), 0);
		int y = Algorithms.parseIntSilently(requestInfo.getQuery("y"), 0);
		
		double latitude = MapUtils.getLatitudeFromTile(z, y);
		double longitude = MapUtils.getLongitudeFromTile(z, x);
		double tileSize = MapUtils.getTileDistanceWidth(z);

		String output = "Processing tile " + z + "/" + x + "/" + y + "\nCoords: lat " + Double.toString(latitude) + " long = " + Double.toString(longitude) + " size = " + Double.toString(tileSize);
		sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, output.getBytes());
	}

    private byte[] doStartLegacy() {
//http://192.168.0.233:8008/map?act=vmap;zoom=15;bbox=28.822,47.023,28.847,47.012
        //if (isPostMethod()) {
            try {
				// String downloadUrl = "https://osmand.net/download?standard=yes&file=Moldova_europe_2.obf.zip";

				// String a = fileDownloader.download(downloadUrl);
				// sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, a.getBytes());


                String act = getRequestInfo().getQuery("act");
                // //sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, ("query: " + act).getBytes());

                String fileName = "moldova.obf";
				
        		File file = new File(context.getExternalFilesDir(null), fileName);
                // String downloadDirectory = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();
                // String filePath = downloadDirectory + "/" + fileName;

                // File file = new File(filePath);
                if (file.exists()) {
                    VerboseInfo info = new VerboseInfo(act.split(";"));
                    String xx = printFileInformation(file, info);
                    sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, xx.getBytes());
                }
                else {
                    sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, ("file " + file.getAbsolutePath() + " doesnt exist").getBytes());

                }

                    // String downloadUrl = "https://osmand.net/download?standard=yes&file=Moldova_europe_2.obf.zip";
                    // String fileName = "moldova.obf.zip";
                    // String id = Long.toString(fileDownloader.downloadFile(downloadUrl, fileName));

                // if (act == "download") {

                //     sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, id.getBytes());
                // }
                // else {
                //     sendResponse(400, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, ("unknown action (" + act + "). id = " + id).getBytes());
                // }
            }
            catch (Exception e) {
                sendResponse(400, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, e.toString().getBytes());
            }
            return null;
        //}
        //String response = "Hello, map module!";
        //sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, response.getBytes());
        //return null;
    }


	protected static class VerboseInfo {
		boolean vaddress;
		boolean vtransport;
		boolean vpoi;
		boolean vmap;
		double lattop = 85;
		double latbottom = -85;
		double lonleft = -180;
		double lonright = 180;
		int zoom = 15;
		
		public boolean isVaddress() {
			return vaddress;
		}
		
		public int getZoom() {
			return zoom;
		}
		
		public boolean isVmap() {
			return vmap;
		}
		public boolean isVpoi() {
			return vpoi;
		}
		
		public boolean isVtransport() {
			return vtransport;
		}
		
		public VerboseInfo(String[] params){
			for(int i=0;i<params.length;i++){
				if(params[i].equals("vaddress")){
					vaddress = true;
				} else if(params[i].equals("vmap")){
					vmap = true;
				} else if(params[i].equals("vpoi")){
					vpoi = true;
				} else if(params[i].equals("vtransport")){
					vtransport = true;
				} else if(params[i].startsWith("zoom=")){
					zoom = Integer.parseInt(params[i].substring("zoom=".length()));
				} else if(params[i].startsWith("bbox=")){
					String[] values = params[i].substring("bbox=".length()).split(",");
					lonleft = Double.parseDouble(values[0]);
					lattop = Double.parseDouble(values[1]);
					lonright = Double.parseDouble(values[2]);
					latbottom = Double.parseDouble(values[3]);
				}
			}
		}
		
		public boolean contains(MapObject o){
			return lattop >= o.getLocation().getLatitude() && latbottom <= o.getLocation().getLatitude()
					&& lonleft <= o.getLocation().getLongitude() && lonright >= o.getLocation().getLongitude();
			
		}
	}
    

    public static String printFileInformation(File file, VerboseInfo verbose) throws IOException {
		RandomAccessFile r = new RandomAccessFile(file.getAbsolutePath(), "r");
        String result = "";
		try {
			BinaryMapIndexReader index = new BinaryMapIndexReader(r, file);
			int i = 1;
			result += "Binary index " + file.getName() + " version = " + index.getVersion() + "\n";
			for(BinaryIndexPart p : index.getIndexes()){
				String partname = "";
				if(p instanceof MapIndex ){
					partname = "Map";
				} else if(p instanceof TransportIndex){
					partname = "Transport";
				} else if(p instanceof PoiRegion){
					partname = "Poi";
				} else if(p instanceof AddressRegion){
					partname = "Address";
				}
				String name = p.getName() == null ? "" : p.getName(); 
				result += MessageFormat.format("{0}. {1} data {3} - {2} bytes", i, partname, p.getLength(), name) + "\n";
				
				if(p instanceof MapIndex){
					MapIndex m = ((MapIndex) p);
					int j = 1;
					for(MapRoot mi : m.getRoots()){
						result += MessageFormat.format("\t{4}.{5} Map level minZoom = {0}, maxZoom = {1}, size = {2} bytes \n\t\tBounds {3}",
								mi.getMinZoom(), mi.getMaxZoom(), mi.getLength(), 
								formatBounds(mi.getLeft(), mi.getRight(), mi.getTop(), mi.getBottom()), 
								i, j++) + "\n";
					}
					if((verbose != null && verbose.isVmap())){
						final StringBuilder b = new StringBuilder();
						SearchRequest<BinaryMapDataObject> req = BinaryMapIndexReader.buildSearchRequest(
								MapUtils.get31TileNumberX(verbose.lonleft),
								MapUtils.get31TileNumberX(verbose.lonright),
								MapUtils.get31TileNumberY(verbose.lattop),
								MapUtils.get31TileNumberY(verbose.latbottom), 
								verbose.getZoom(),
								new SearchFilter() {
									@Override
									public boolean accept(TIntArrayList types, MapIndex index) {
										return true;
									}
								},
								new ResultMatcher<BinaryMapDataObject>() {
									@Override
									public boolean publish(BinaryMapDataObject obj) {
										b.append(obj.getPointsLength() > 1 ? "Way" : "Point");
										int[] types = obj.getTypes();
										b.append(" types [");
										for (int j = 0; j < types.length; j++) {
											if (j > 0) {
												b.append(", ");
											}
											TagValuePair pair = obj.getMapIndex().decodeType(types[j]);
											if (pair == null) {
												throw new NullPointerException("Type " + types[j] + "was not found");
											}
											b.append(pair.toSimpleString()).append("(").append(types[j]).append(")");
										}
										b.append("]");
										if (obj.getAdditionalTypes() != null && obj.getAdditionalTypes().length > 0) {
											b.append(" add_types [");
											for (int j = 0; j < obj.getAdditionalTypes().length; j++) {
												if (j > 0) {
													b.append(", ");
												}
												TagValuePair pair = obj.getMapIndex().decodeType(obj.getAdditionalTypes()[j]);
												if (pair == null) {
													throw new NullPointerException("Type " + obj.getAdditionalTypes()[j] + "was not found");
												}
												b.append(pair.toSimpleString()).append("(").append(obj.getAdditionalTypes()[j]).append(")");

											}
											b.append("]");
										}
										TIntObjectHashMap<String> names = obj.getObjectNames();
										if (names != null && !names.isEmpty()) {
											b.append(" Names [");
											int[] keys = names.keys();
											for (int j = 0; j < keys.length; j++) {
												if (j > 0) {
													b.append(", ");
												}
												TagValuePair pair = obj.getMapIndex().decodeType(keys[j]);
												if (pair == null) {
													throw new NullPointerException("Type " + keys[j] + "was not found");
												}
												b.append(pair.toSimpleString()).append("(").append(keys[j]).append(")");
												b.append(" - ").append(names.get(keys[j]));
											}
											b.append("]");
										}

										b.append(" id ").append((obj.getId() >> 1));
										b.append(" lat/lon : ");
										for (int i = 0; i < obj.getPointsLength(); i++) {
											float x = (float) MapUtils.get31LongitudeX(obj.getPoint31XTile(i));
											float y = (float) MapUtils.get31LatitudeY(obj.getPoint31YTile(i));
											b.append(x).append(" / ").append(y).append(" , ");
										}

										return false;
									}
									@Override
									public boolean isCancelled() {
										return false;
									}
								});
						index.searchMapIndex(req);
						result += b.toString() + "\n";
					}
				}
				
				i++;
			}
			
			
		} catch (IOException e) {
			throw e;
		}
		
        return result;
	}

	
	private static void formatTags(BinaryMapDataObject o, StringBuilder b){
		// for (int i = 0; i < o.getTypes().length; i++) {
		// 	if (i > 0) {
		// 		b.append(", ");
		// 	}
		// 	// b.append(o.getTagValue(i).tag + "=" + o.getTagValue(i).value);
		// 	if ((o.getTypes()[i] & 3) == MapRenderingTypes.MULTY_POLYGON_TYPE) {
		// 		b.append("(multipolygon)");
		// 	}
		// }
		
	}
	
	private static void formatPoint(BinaryMapDataObject o, int ind, StringBuilder b){
		b.append((float)MapUtils.get31LongitudeX(o.getPoint31XTile(ind))).append(",").append((float)MapUtils.get31LatitudeY(o.getPoint31YTile(ind)));
	}
    
	private static String getId(MapObject o ){
		return " " + (o.getId() >> 1);
	}
    
	protected static String formatBounds(int left, int right, int top, int bottom){
		double l = MapUtils.get31LongitudeX(left);
		double r = MapUtils.get31LongitudeX(right);
		double t = MapUtils.get31LatitudeY(top);
		double b = MapUtils.get31LatitudeY(bottom);
		MessageFormat format = new MessageFormat("(left top - right bottom) : {0}, {1} NE - {2}, {3} NE", Locale.US);
		return format.format(new Object[]{l, t, r, b}); 
	}
}