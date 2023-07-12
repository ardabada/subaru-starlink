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

package com.vividsolutions.jts.dissolve;

import com.vividsolutions.jts.edgegraph.EdgeGraph;
import com.vividsolutions.jts.edgegraph.HalfEdge;
import com.vividsolutions.jts.geom.Coordinate;


/**
 * A graph containing {@link DissolveHalfEdge}s.
 * 
 * @author Martin Davis
 *
 */
class DissolveEdgeGraph extends EdgeGraph
{
  protected HalfEdge createEdge(Coordinate p0)
  {
    return new DissolveHalfEdge(p0);
  }
  

}
