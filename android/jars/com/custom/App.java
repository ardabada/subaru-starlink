package com.custom;

import java.io.File;
import java.io.IOException;
import java.io.FileOutputStream;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.List;

import gnu.trove.list.array.TIntArrayList;
import gnu.trove.map.hash.TIntObjectHashMap;

import net.osmand.util.Algorithms;
import net.osmand.util.MapUtils;
import net.osmand.ResultMatcher;
import net.osmand.binary.BinaryMapIndexReader;
import net.osmand.binary.BinaryMapDataObject;
import net.osmand.binary.BinaryMapIndexReader.TagValuePair;
import net.osmand.binary.BinaryMapIndexReader.MapIndex;
import net.osmand.binary.BinaryMapIndexReader.SearchRequest;
import net.osmand.binary.BinaryMapIndexReader.SearchFilter;

import net.osmand.data.LatLon;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.wdtinc.mapbox_vector_tile.adapt.jts.IGeometryFilter;
import com.vividsolutions.jts.geom.Envelope;
import com.wdtinc.mapbox_vector_tile.builder.MvtLayerParams;
import com.wdtinc.mapbox_vector_tile.builder.MvtLayerProps;
import com.wdtinc.mapbox_vector_tile.builder.MvtLayerBuild;
import com.wdtinc.mapbox_vector_tile.adapt.jts.JtsAdapter;
import com.wdtinc.mapbox_vector_tile.adapt.jts.TileGeomResult;
import com.wdtinc.mapbox_vector_tile.adapt.jts.UserDataKeyValueMapConverter;
import com.wdtinc.mapbox_vector_tile.adapt.jts.IUserDataConverter;
import com.wdtinc.mapbox_vector_tile.adapt.jts.UserDataIgnoreConverter;
import net.osmand.binary.VectorTile;

public class App {
	public static final int SHIFT_ID = 6;
    public static void main(String[] args) {
        if (args == null || args.length != 3) {
            System.out.println("expected 3 args");
            return;
        }

        try {
            String path = "subaru-starlink\\android\\jars\\moldova.obf";
            File file = new File(path);
            if (!file.exists()) {
                System.out.println("not found");
                return;
            }

            RandomAccessFile raf = new RandomAccessFile(file.getAbsolutePath(), "r");
            BinaryMapIndexReader index = new BinaryMapIndexReader(raf, file);
            
            int z = Algorithms.parseIntSilently(args[0], 1);//12;
            int x = Algorithms.parseIntSilently(args[1], 1);//2376;
            int y = Algorithms.parseIntSilently(args[2], 1);//1440;
			//https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/12/2376/1440.vector.pbf?access_token=pk.eyJ1IjoiYXJkYWJhZGEiLCJhIjoiY2prbWxqdzh0MGNkNjN2b3p1dmlqYWQ4OSJ9.CZWcYYEp2YSB9z9u8TGO4g
            
            double latitude = MapUtils.getLatitudeFromTile(z, y);
            double longitude = MapUtils.getLongitudeFromTile(z, x);
            double latitude2 = MapUtils.getLatitudeFromTile(z, y + 1);
            double longitude2 = MapUtils.getLongitudeFromTile(z, x + 1);
            double tileSize = MapUtils.getTileDistanceWidth(z);

            System.out.println("lat1 = " + Double.toString(latitude));
            System.out.println("long1 = " + Double.toString(longitude));
            System.out.println("lat2 = " + Double.toString(latitude2));
            System.out.println("long2 = " + Double.toString(longitude2));

            SearchRequest<BinaryMapDataObject> req = buildSearchRequestForBounds(latitude, longitude, latitude2, longitude2, z);

            List<BinaryMapDataObject> itemsInRequestedRegion = index.searchMapIndex(req);

            String mvtPath = "subaru-starlink\\android\\jars\\" + z + "." + x + "." + y + ".pbf";
            generateMvt(itemsInRequestedRegion, longitude, longitude2, latitude, latitude2, mvtPath);
            // int size = itemsInRequestedRegion.size();
            // for (int i = 0; i < size; i++) {
            //     BinaryMapDataObject o = itemsInRequestedRegion.get(i);
            //     StringBuilder b = new StringBuilder();
            //     printMapDetails(o, b, true);
            //     System.out.println(b.toString());
            //     // int objectType = o.getObjectType();
            //     // String type = "unknown";
            //     // boolean multipolygon = o.getPolygonInnerCoordinates() != null && o.getPolygonInnerCoordinates().length > 0;
            //     // if (multipolygon) {
            //     //     type = "Multipolygon";
            //     // } else if (o.isArea()) {
            //     //     type = "Area";
            //     // }
            //     // else if (o.getPointsLength() > 1) {
            //     //     type = "Line";
            //     // }
            //     // else {
            //     //     type = "Point";
            //     // }
            //     // System.out.println(o.getName() + " type " + type);
            //     // for (int j = 0; j < o.getTypes().length; j++) {
			// 	// 	int wholeType = o.getTypes()[j];
			// 	// 	int layer = 0;
			// 	// 	if (o.getPointsLength() > 1) {
			// 	// 		layer = o.getSimpleLayer();
			// 	// 	}
            //     //     TagValuePair pair = o.getMapIndex().decodeType(wholeType);
            //     //     System.out.println("\t" + wholeType + " " + layer + " (" + pair.tag + "=" + pair.value + ")");
            //     // }
            // }

            // List<MapDataObjectPrimitive>  pointsArray = new ArrayList<MapDataObjectPrimitive>();
			// List<MapDataObjectPrimitive> polygonsArray = new ArrayList<MapDataObjectPrimitive>();
			// List<MapDataObjectPrimitive>  linesArray = new ArrayList<MapDataObjectPrimitive>();
            // System.out.println("Found " + itemsInRequestedRegion.size() + " items");

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void generateMvt(List<BinaryMapDataObject> objects, double left, double right, double top, double bottom, String path) {
        List<Geometry> geometries = new ArrayList<Geometry>();
        
        System.out.println("Total objects " + objects.size());
        for (int i = 0; i < objects.size(); i++) {
            Geometry geo = GeometryBuilder.createGeometryFromBinaryObject(objects.get(i));
            if (geo == null) continue;
            geometries.add(geo);
        }

        System.out.println("Total geometries " + geometries.size());

        GeometryFactory geomFactory = new GeometryFactory();

        IGeometryFilter acceptAllGeomFilter = geometry -> true;
        Envelope tileEnvelope = new Envelope(left, right, top, bottom);
        MvtLayerParams layerParams = new MvtLayerParams(); 

        TileGeomResult tileGeom = JtsAdapter.createTileGeom(
                geometries,
                tileEnvelope,
                geomFactory,
                layerParams,
                acceptAllGeomFilter);

        VectorTile.Tile mvt = encodeMvt(layerParams, tileGeom);
        // VectorTile.Tile.Builder tileBuilder = VectorTile.Tile.newBuilder();
        // VectorTile.Tile.Layer.Builder layerBuilder = MvtLayerBuild.newLayerBuilder("myLayerName", layerParams);
        // MvtLayerProps layerProps = new MvtLayerProps();
        // IUserDataConverter userDataConverter = new UserDataKeyValueMapConverter();
        // List<VectorTile.Tile.Feature> features = JtsAdapter.toFeatures(tileGeom.mvtGeoms, layerProps, userDataConverter);
        // MvtLayerBuild.writeProps(layerBuilder, layerProps);
        
        // // Build MVT layer
        // final VectorTile.Tile.Layer layer = layerBuilder.build();

        // // Add built layer to MVT
        // tileBuilder.addLayers(layer);
        // VectorTile.Tile mvt = tileBuilder.build();
        try (FileOutputStream fos = new FileOutputStream(path)) {
            fos.write(mvt.toByteArray());
            fos.close(); //There is no more need for this line since you had created the instance of "fos" inside the try. And this will automatically close the OutputStream
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    
    private static VectorTile.Tile encodeMvt(MvtLayerParams mvtParams, TileGeomResult tileGeom) {

        // Build MVT
        final VectorTile.Tile.Builder tileBuilder = VectorTile.Tile.newBuilder();

        // Create MVT layer
        final VectorTile.Tile.Layer.Builder layerBuilder = MvtLayerBuild.newLayerBuilder("my_layer", mvtParams);
        final MvtLayerProps layerProps = new MvtLayerProps();
        final UserDataIgnoreConverter ignoreUserData = new UserDataIgnoreConverter();

        // MVT tile geometry to MVT features
        final List<VectorTile.Tile.Feature> features = JtsAdapter.toFeatures(tileGeom.mvtGeoms, layerProps, ignoreUserData);
        layerBuilder.addAllFeatures(features);
        MvtLayerBuild.writeProps(layerBuilder, layerProps);

        // Build MVT layer
        final VectorTile.Tile.Layer layer = layerBuilder.build();

        // Add built layer to MVT
        tileBuilder.addLayers(layer);

        /// Build MVT
        return tileBuilder.build();
    }

    private static void extract(List<BinaryMapDataObject> objects,
        List<MapDataObjectPrimitive> pointsArray, 
        List<MapDataObjectPrimitive> polygonsArray,
        List<MapDataObjectPrimitive> linesResArray) 
    {

    }

    private static SearchRequest<BinaryMapDataObject> buildSearchRequestForBounds(double lat1, double long1, double lat2, double long2, int zoom) {
        double latitudeMin = Math.min(lat1, lat2);
        double latitudeMax = Math.max(lat1, lat2);
        double longitudeMin = Math.min(long1, long2);
        double longitudeMax = Math.max(long1, long2);

        final ResultMatcher<BinaryMapDataObject> resultMatcher = new ResultMatcher<BinaryMapDataObject>() {
			@Override
			public boolean publish(BinaryMapDataObject object) {
				if (object.getPointsLength() < 1) {
					return false;
				}
				for (int i = 0; i < object.getPointsLength(); i++) {
                    
                    double x = MapUtils.get31LongitudeX(object.getPoint31XTile(i));
                    double y = MapUtils.get31LatitudeY(object.getPoint31YTile(i));

                    if (x >= longitudeMin && x <= longitudeMax && y >= latitudeMin && y <= latitudeMax) {
                        return true;
                    }
				}
				return false;
			}

			@Override
			public boolean isCancelled() {
				return false;
			}
		};
        SearchRequest<BinaryMapDataObject> searchRequest = BinaryMapIndexReader.buildSearchRequest(
            MapUtils.get31TileNumberX(longitudeMin),
            MapUtils.get31TileNumberX(longitudeMax),
            MapUtils.get31TileNumberY(latitudeMax),
            MapUtils.get31TileNumberY(longitudeMin), 
            zoom,
            new BinaryMapIndexReader.SearchFilter() {
                @Override
                public boolean accept(TIntArrayList types, BinaryMapIndexReader.MapIndex index) {
                    return true;
                }
            }, resultMatcher
        );

        return searchRequest;
    }
    
    public static void printMapDetails(BinaryMapDataObject obj, StringBuilder b, boolean vmapCoordinates) {
		boolean multipolygon = obj.getPolygonInnerCoordinates() != null && obj.getPolygonInnerCoordinates().length > 0;
		if (multipolygon) {
			b.append("Multipolygon");
		} else {
			b.append(obj.isArea() ? "Area" : (obj.getPointsLength() > 1 ? "Way" : "Point"));
		}
		
		int[] types = obj.getTypes();
		if(obj.isLabelSpecified()) {
			b.append(" ").append(new LatLon(MapUtils.get31LatitudeY(obj.getLabelY()), 
					MapUtils.get31LongitudeX(obj.getLabelX())));
		}
		

		b.append(" types [");
		for (int j = 0; j < types.length; j++) {
			if (j > 0) {
				b.append(", ");
			}
			TagValuePair pair = obj.getMapIndex().decodeType(types[j]);
			if (pair == null) {
				System.err.println("Type " + types[j] + "was not found");
				continue;
//								throw new NullPointerException("Type " + obj.getAdditionalTypes()[j] + "was not found");
			}
			b.append(pair.toString() + " (" + types[j] + ")");
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
					System.err.println("Type " + obj.getAdditionalTypes()[j] + "was not found");
					continue;
//									throw new NullPointerException("Type " + obj.getAdditionalTypes()[j] + "was not found");
				}
				b.append(pair.toString() + "(" + obj.getAdditionalTypes()[j] + ")");

			}
			b.append("]");
		}
		TIntObjectHashMap<String> names = obj.getObjectNames();
		TIntArrayList order = obj.getNamesOrder();
		if (names != null && !names.isEmpty()) {
			b.append(" Names [");
			// int[] keys = names.keys();
			for (int j = 0; j < order.size(); j++) {
				if (j > 0) {
					b.append(", ");
				}
				TagValuePair pair = obj.getMapIndex().decodeType(order.get(j));
				if (pair == null) {
					throw new NullPointerException("Type " + order.get(j) + " was not found");
				}
				b.append(pair.toString() + "(" + order.get(j) + ")");
				b.append(" - ").append(names.get(order.get(j)));
			}
			b.append("]");
		}

		b.append(" id ").append(obj.getId());
		b.append(" osmid ").append((obj.getId() >> (SHIFT_ID + 1)));

        Geometry geo = GeometryBuilder.createGeometryFromBinaryObject(obj);
        if (geo == null) {
            b.append("geo null");
        }
        else {
            b.append("geo " + geo.getClass());
        }

		if (vmapCoordinates) {
			b.append(" lat/lon : ");
			for (int i = 0; i < obj.getPointsLength(); i++) {
				float x = (float) MapUtils.get31LongitudeX(obj.getPoint31XTile(i));
				float y = (float) MapUtils.get31LatitudeY(obj.getPoint31YTile(i));
				b.append(y).append(" / ").append(x).append(" , ");
			}
		}
		
	}
}
