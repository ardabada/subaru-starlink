

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
package com.vividsolutions.jts.operation.overlay;

/**
 * @version 1.7
 */
import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geomgraph.DirectedEdgeStar;
import com.vividsolutions.jts.geomgraph.Node;
import com.vividsolutions.jts.geomgraph.NodeFactory;
import com.vividsolutions.jts.geomgraph.PlanarGraph;

/**
 * Creates nodes for use in the {@link PlanarGraph}s constructed during
 * overlay operations.
 *
 * @version 1.7
 */
public class OverlayNodeFactory
  extends NodeFactory
{
  public Node createNode(Coordinate coord)
  {
    return new Node(coord, new DirectedEdgeStar());
  }
}
