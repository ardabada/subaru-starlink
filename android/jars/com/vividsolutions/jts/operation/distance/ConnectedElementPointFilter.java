
/*
 * Copyright (c) 2016 Vivid Solutions.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v. 1.0 which accompanies this distribution.
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *
 * http://www.eclipse.org/org/documents/edl-v10.php.
 */
package com.vividsolutions.jts.operation.distance;

import java.util.ArrayList;
import java.util.List;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.GeometryFilter;
import com.vividsolutions.jts.geom.LineString;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.geom.Polygon;

/**
 * Extracts a single point
 * from each connected element in a Geometry
 * (e.g. a polygon, linestring or point)
 * and returns them in a list
 *
 * @version 1.7
 */
public class ConnectedElementPointFilter
  implements GeometryFilter
{

  /**
   * Returns a list containing a Coordinate from each Polygon, LineString, and Point
   * found inside the specified geometry. Thus, if the specified geometry is
   * not a GeometryCollection, an empty list will be returned.
   */
  public static List getCoordinates(Geometry geom)
  {
    List pts = new ArrayList();
    geom.apply(new ConnectedElementPointFilter(pts));
    return pts;
  }

  private List pts;

  ConnectedElementPointFilter(List pts)
  {
    this.pts = pts;
  }

  public void filter(Geometry geom)
  {
    if (geom instanceof Point
      || geom instanceof LineString
      || geom instanceof Polygon )
      pts.add(geom.getCoordinate());
  }

}
