package com.custom;

import net.osmand.util.MapUtils;
import net.osmand.binary.BinaryMapDataObject;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.geom.LineString;

public class GeometryBuilder {

	private static GeometryFactory factory = new GeometryFactory();

	public static Geometry createGeometryFromBinaryObject(BinaryMapDataObject binaryData) {
		boolean multipolygon = binaryData.getPolygonInnerCoordinates() != null && binaryData.getPolygonInnerCoordinates().length > 0;
		if (multipolygon) {
			return null;
		}
		if (binaryData.isArea()) {
			return null;
		}

		if (binaryData.getPointsLength() == 1) {
			return createPoint(binaryData);
		}
		else if (binaryData.getPointsLength() > 1) {
			return createLineString(binaryData);
		}

		return null;
	}

	private static Point createPoint(BinaryMapDataObject binaryData) {
		double x = MapUtils.get31LongitudeX(binaryData.getPoint31XTile(0));
		double y = MapUtils.get31LatitudeY(binaryData.getPoint31YTile(0));
		return factory.createPoint(new Coordinate(x, y));
	}

	private static LineString createLineString(BinaryMapDataObject binaryData) {
		int size = binaryData.getPointsLength();
		Coordinate[] coords = new Coordinate[size];
		for (int i = 0; i < size; i++) {
			double x = MapUtils.get31LongitudeX(binaryData.getPoint31XTile(i));
			double y = MapUtils.get31LatitudeY(binaryData.getPoint31YTile(i));
			coords[i] = new Coordinate(x, y);
		}
		return factory.createLineString(coords);
	}
}
