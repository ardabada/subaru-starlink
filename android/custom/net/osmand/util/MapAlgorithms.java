package net.osmand.util;

import java.io.File;
import java.util.Collection;

import gnu.trove.list.TLongList;
import gnu.trove.list.array.TIntArrayList;
import net.osmand.gpx.GPXUtilities;
import net.osmand.gpx.GPXFile;
import net.osmand.gpx.GPXUtilities.TrkSegment;
import net.osmand.gpx.GPXUtilities.WptPt;
import net.osmand.data.LatLon;
import net.osmand.osm.edit.Node;
import net.osmand.osm.edit.OsmMapUtils;

public class MapAlgorithms {
	
	
	public static void main(String[] args) {
		int STEP = 30;
		TIntArrayList altIncs = new TIntArrayList(new int[] {0, 10, -1, 5, -3, 2, 3, -16, -1});
		
		String str = encodeIntHeightArrayGraph(STEP, altIncs, 3);
		TIntArrayList decodedSteps = decodeIntHeightArrayGraph(str, 3);
		GPXFile gpx = GPXUtilities.loadGPXFile(new File("/Users/victorshcherb/osmand/maps/tracks/rec/2015-01-19_02-43_Mon.gpx"));
		TrkSegment sgm = gpx.tracks.get(0).segments.get(0);
		
		// Algorithm begin
		double startEle = 130;
		augmentTrkSegmentWithAltitudes(sgm, decodedSteps, startEle);
		
	}

	public static void augmentTrkSegmentWithAltitudes(TrkSegment sgm, TIntArrayList decodedSteps, double startEle) {
		int stepDist = decodedSteps.get(0);
		int stepHNextInd = 1;
		double prevHDistX = 0;
		sgm.points.get(0).ele = startEle;
		for (int i = 1; i < sgm.points.size(); i++) {
			WptPt prev = sgm.points.get(i - 1);
			WptPt cur = sgm.points.get(i);
			double origHDistX = prevHDistX;
			double len = MapUtils.getDistance(prev.getLatitude(), prev.getLongitude(), cur.getLatitude(),
					cur.getLongitude()) / stepDist;
			double curHDistX = len + prevHDistX;
			double hInc = 0;
			while (curHDistX > stepHNextInd && stepHNextInd < decodedSteps.size()) {
				if (prevHDistX < stepHNextInd) {
					hInc += (stepHNextInd - prevHDistX) * decodedSteps.get(stepHNextInd);
					if (stepHNextInd - prevHDistX > 0.5) {
						// introduce extra point
						double fraction = (stepHNextInd - prevHDistX) / (curHDistX - origHDistX);
						WptPt newPt = new WptPt();
						newPt.lat = prev.getLatitude() + fraction * (cur.getLatitude() - prev.getLatitude());
						newPt.lon = prev.getLongitude() + fraction * (cur.getLongitude()- prev.getLongitude());
						newPt.ele = prev.ele + hInc;
						sgm.points.add(i, newPt);
						i++;
					}
					prevHDistX = stepHNextInd;
					
				}
				stepHNextInd++;
			}
			if (stepHNextInd < decodedSteps.size()) {
				hInc += (curHDistX - prevHDistX) * decodedSteps.get(stepHNextInd);
			}
			cur.ele = prev.ele + hInc;
			prevHDistX = curHDistX;
		}
	}
	
	
	public static TIntArrayList decodeIntHeightArrayGraph(String str, int repeatBits) {
		int maxRepeats = (1 << repeatBits) - 1;
		TIntArrayList res = new TIntArrayList();
		char[] ch = str.toCharArray();
		res.add(ch[0]);
		for (int i = 1; i < ch.length; i++) {
			char c = ch[i];
			int rept = c & maxRepeats;
			while (rept > 0) {
				res.add(0);
				rept--;
			}
			int num = c >> repeatBits;
			if (num % 2 == 0) {
				res.add(num >> 1);
			} else {
				res.add(-(num >> 1));
			}
		}
		return res;
	}
	
	public static String encodeIntHeightArrayGraph(int step, TIntArrayList array, int repeatBits) {
		int maxRepeats = (1 << repeatBits) - 1;
		TIntArrayList ch = new TIntArrayList();
		ch.add(step);
		int repeat = 0;
		for (int i = 0; i < array.size(); i++) {
			int altInc = array.get(i);
			if (altInc != 0 || repeat == maxRepeats) {
				int posAltInc = Math.abs(altInc);
				int sign = altInc < 0 ? 1 : 0;
				char c = (char) (((posAltInc << 1) + sign) << repeatBits);
				c += repeat;
				ch.add(c);
				repeat = 0;
			} else {
				repeat++;
			}
		}
		char[] c = new char[ch.size()];
		for (int i = 0; i < ch.size(); i++) {
			c[i] = (char) ch.get(i);
		}
		return new String(c);
	}
	
	public static boolean isClockwiseWay(TLongList c) {
		if (c.size() == 0) {
			return true;
		}

		// calculate middle Y
		long mask = 0xffffffffL;
		long middleY = 0;
		for (int i = 0; i < c.size(); i++) {
			middleY =  middleY +  (long)(c.get(i) & mask);
		}
		middleY = middleY /(long) c.size();

		double clockwiseSum = 0;

		boolean firstDirectionUp = false;
		int previousX = Integer.MIN_VALUE;
		int firstX = Integer.MIN_VALUE;

		int prevX = (int) (c.get(0) >> 32);
		int prevY = (int) (c.get(0) & mask);

		for (int i = 1; i < c.size(); i++) {
			int x = (int) (c.get(i) >> 32);
			int y = (int) (c.get(i) & mask);
			int rX = ray_intersect_x(prevX, prevY, x, y, (int) middleY);
			if (rX != Integer.MIN_VALUE) {
				boolean skipSameSide = (y <= middleY) == (prevY <= middleY);
				if (skipSameSide) {
					continue;
				}
				boolean directionUp = prevY >= middleY;
				if (firstX == Integer.MIN_VALUE) {
					firstDirectionUp = directionUp;
					firstX = rX;
				} else {
					boolean clockwise = (!directionUp) == (previousX < rX);
					if (clockwise) {
						clockwiseSum += Math.abs(previousX - rX);
					} else {
						clockwiseSum -= Math.abs(previousX - rX);
					}
				}
				previousX = rX;
			}
			prevX = x;
			prevY = y;
		}
		if (firstX != Integer.MIN_VALUE) {
			boolean clockwise = (!firstDirectionUp) == (previousX < firstX);
			if (clockwise) {
				clockwiseSum += Math.abs(previousX - firstX);
			} else {
				clockwiseSum -= Math.abs(previousX - firstX);
			}
		}

		return clockwiseSum >= 0;
	}
	
	
	public static int ray_intersect_x(int prevX, int prevY, int x, int y, int middleY) {
		// prev node above line
		// x,y node below line
		if (prevY > y) {
			int tx = x;
			int ty = y;
			x = prevX;
			y = prevY;
			prevX = tx;
			prevY = ty;
		}
		if (y == middleY || prevY == middleY) {
			middleY -= 1;
		}
		if (prevY > middleY || y < middleY) {
			return Integer.MIN_VALUE;
		} else {
			if (y == prevY) {
				// the node on the boundary !!!
				return x;
			}
			// that tested on all cases (left/right)
			double rx = x + ((double) middleY - y) * ((double) x - prevX) / (((double) y - prevY));
			return (int) rx;
		}
	}
	
	

	private static long combine2Points(int x, int y) {
		return (((long) x ) <<32) | ((long)y );
	}
	/**
	 * outx,outy are the coordinates out of the box 
	 * inx,iny are the coordinates from the box (NOT IMPORTANT in/out, just one should be in second out)
	 * @return -1 if there is no instersection or x<<32 | y
	 */
	public static long calculateIntersection(int inx, int iny, int outx, int outy, int leftX, int rightX, int bottomY, int topY) {
		int by = -1;
		int bx = -1;
		// firstly try to search if the line goes in
		if (outy < topY && iny >= topY) {
			int tx = (int) (outx + ((double) (inx - outx) * (topY - outy)) / (iny - outy));
			if (leftX <= tx && tx <= rightX) {
				bx = tx;
				by = topY;
				return combine2Points(bx, by);
			}
		}
		if (outy > bottomY && iny <= bottomY) {
			int tx = (int) (outx + ((double) (inx - outx) * (outy - bottomY)) / (outy - iny));
			if (leftX <= tx && tx <= rightX) {
				bx = tx;
				by = bottomY;
				return combine2Points(bx, by);
			}
		}
		if (outx < leftX && inx >= leftX) {
			int ty = (int) (outy + ((double) (iny - outy) * (leftX - outx)) / (inx - outx));
			if (ty >= topY && ty <= bottomY) {
				by = ty;
				bx = leftX;
				return combine2Points(bx, by);
			}

		}
		if (outx > rightX && inx <= rightX) {
			int ty = (int) (outy + ((double) (iny - outy) * (outx - rightX)) / (outx - inx));
			if (ty >= topY && ty <= bottomY) {
				by = ty;
				bx = rightX;
				return combine2Points(bx, by);
			}

		}

		// try to search if point goes out
		if (outy > topY && iny <= topY) {
			int tx = (int) (outx + ((double) (inx - outx) * (topY - outy)) / (iny - outy));
			if (leftX <= tx && tx <= rightX) {
				bx = tx;
				by = topY;
				return combine2Points(bx, by);
			}
		}
		if (outy < bottomY && iny >= bottomY) {
			int tx = (int) (outx + ((double) (inx - outx) * (outy - bottomY)) / (outy - iny));
			if (leftX <= tx && tx <= rightX) {
				bx = tx;
				by = bottomY;
				return combine2Points(bx, by);
			}
		}
		if (outx > leftX && inx <= leftX) {
			int ty = (int) (outy + ((double) (iny - outy) * (leftX - outx)) / (inx - outx));
			if (ty >= topY && ty <= bottomY) {
				by = ty;
				bx = leftX;
				return combine2Points(bx, by);
			}

		}
		if (outx < rightX && inx >= rightX) {
			int ty = (int) (outy + ((double) (iny - outy) * (outx - rightX)) / (outx - inx));
			if (ty >= topY && ty <= bottomY) {
				by = ty;
				bx = rightX;
				return combine2Points(bx, by);
			}

		}
		if (outx == rightX || outx == leftX) {
			if (outy >= topY && outy <= bottomY) {
				bx = outx;
				by = outy;
				return combine2Points(bx, by);
			}
		}

		if (outy == topY || outy == bottomY) {
			if (leftX <= outx && outx <= rightX) {
				bx = outx;
				by = outy;
				return combine2Points(bx, by);
			}
		}
		return -1L;
	}
	
	/**
	 * return true if the line segment [a,b] intersects [c,d]
	 * @param a point 1
	 * @param b point 2
	 * @param c point 3
	 * @param d point 4
	 * @return true if the line segment [a,b] intersects [c,d]
	 */

	public static boolean linesIntersect(LatLon a, LatLon b, LatLon c, LatLon d){

		return linesIntersect(
				a.getLatitude(), a.getLongitude(),
				b.getLatitude(), b.getLongitude(),
				c.getLatitude(), c.getLongitude(),
				d.getLatitude(), d.getLongitude());

	}

  	/**
  	 * Return true if two line segments intersect inside the segment
  	 * 
  	 * source: http://www.java-gaming.org/index.php?topic=22590.0
  	 * @param x1 line 1 point 1 latitude
  	 * @param y1 line 1 point 1 longitude
  	 * @param x2 line 1 point 2 latitude
  	 * @param y2 line 1 point 2 longitude
  	 * @param x3 line 2 point 1 latitude
  	 * @param y3 line 2 point 1 longitude
  	 * @param x4 line 2 point 2 latitude
  	 * @param y4 line 2 point 2 longitude
  	 * @return
  	 */

  	public static boolean linesIntersect(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4){

  	     // Return false if either of the lines have zero length
  	     if (x1 == x2 && y1 == y2 ||
  	           x3 == x4 && y3 == y4){
  	        return false;
  	     }

  	     // Fastest method, based on Franklin Antonio's "Faster Line Segment Intersection" topic "in Graphics Gems III" book (http://www.graphicsgems.org/)

  	     double ax = x2-x1;
  	     double ay = y2-y1;
  	     double bx = x3-x4;
  	     double by = y3-y4;
  	     double cx = x1-x3;
  	     double cy = y1-y3;

  	 
  	     double alphaNumerator = by*cx - bx*cy;
  	     double commonDenominator = ay*bx - ax*by;
  	     if (commonDenominator > 0){
  	        if (alphaNumerator < 0 || alphaNumerator > commonDenominator){
  	           return false;
  	        }
        }else if (commonDenominator < 0){
  	        if (alphaNumerator > 0 || alphaNumerator < commonDenominator){
  	           return false;
  	        }
  	     }

  	     double betaNumerator = ax*cy - ay*cx;
  	     if (commonDenominator > 0){
  	        if (betaNumerator < 0 || betaNumerator > commonDenominator){
  	           return false;
  	        }
  	     }else if (commonDenominator < 0){
  	        if (betaNumerator > 0 || betaNumerator < commonDenominator){
  	          return false;
  	        }
  	     }

  	     if (commonDenominator == 0){
  	        // This code wasn't in Franklin Antonio's method. It was added by Keith Woodward.
  	        // The lines are parallel.
  	        // Check if they're collinear.
  	        double y3LessY1 = y3-y1;
  	        double collinearityTestForP3 = x1*(y2-y3) + x2*(y3LessY1) + x3*(y1-y2);   // see http://mathworld.wolfram.com/Collinear.html
  	       // If p3 is collinear with p1 and p2 then p4 will also be collinear, since p1-p2 is parallel with p3-p4

  	        if (collinearityTestForP3 == 0){
  	           // The lines are collinear. Now check if they overlap.
  	           if (x1 >= x3 && x1 <= x4 || x1 <= x3 && x1 >= x4 ||
  	                 x2 >= x3 && x2 <= x4 || x2 <= x3 && x2 >= x4 ||
  	                 x3 >= x1 && x3 <= x2 || x3 <= x1 && x3 >= x2){
  	              if (y1 >= y3 && y1 <= y4 || y1 <= y3 && y1 >= y4 ||
  	                    y2 >= y3 && y2 <= y4 || y2 <= y3 && y2 >= y4 ||
  	                    y3 >= y1 && y3 <= y2 || y3 <= y1 && y3 >= y2){
  	                 return true;
  	              }
  	           }
  	        }
  	        return false;
  	     }
  	     return true;
  	}
  	
	public static boolean containsPoint(Collection<Node> polyNodes, double latitude, double longitude) {
		return countIntersections(polyNodes, latitude, longitude) % 2 == 1;
	}
	
	/**
	 * count the intersections when going from lat, lon to outside the ring
	 * @param polyNodes2 
	 */
	public static int countIntersections(Collection<Node> polyNodes, double latitude, double longitude) {
		int intersections = 0;
		if (polyNodes.size() == 0)
			return 0;
		Node prev = null;
		Node first = null;
		Node last = null;
		for(Node n  : polyNodes) {
			if(prev == null) {
				prev = n;
				first = prev;
				continue;
			}
			if(n == null) {
				continue;
			}
			last = n;
			if (OsmMapUtils.ray_intersect_lon(prev,
					n, latitude, longitude) != -360.0d) {
				intersections++;
			}
			prev = n;
		}
		if(first == null || last == null) {
			return 0;
		}
		// special handling, also count first and last, might not be closed, but
		// we want this!
		if (OsmMapUtils.ray_intersect_lon(first,
				last, latitude, longitude) != -360.0d) {
			intersections++;
		}
		return intersections;
	}
	
}