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

package com.vividsolutions.jts.planargraph.algorithm;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Stack;

import com.vividsolutions.jts.planargraph.DirectedEdge;
import com.vividsolutions.jts.planargraph.DirectedEdgeStar;
import com.vividsolutions.jts.planargraph.Edge;
import com.vividsolutions.jts.planargraph.GraphComponent;
import com.vividsolutions.jts.planargraph.Node;
import com.vividsolutions.jts.planargraph.PlanarGraph;
import com.vividsolutions.jts.planargraph.Subgraph;

/**
 * Finds all connected {@link Subgraph}s of a {@link PlanarGraph}.
 * <p>
 * <b>Note:</b> uses the <code>isVisited</code> flag on the nodes.
 */
public class ConnectedSubgraphFinder
{

  private PlanarGraph graph;

  public ConnectedSubgraphFinder(PlanarGraph graph) {
    this.graph = graph;
  }

  public List getConnectedSubgraphs()
  {
    List subgraphs = new ArrayList();

    GraphComponent.setVisited(graph.nodeIterator(), false);
    for (Iterator i = graph.edgeIterator(); i.hasNext(); ) {
      Edge e = (Edge) i.next();
      Node node = e.getDirEdge(0).getFromNode();
      if (! node.isVisited()) {
        subgraphs.add(findSubgraph(node));
      }
    }
    return subgraphs;
  }

  private Subgraph findSubgraph(Node node)
  {
    Subgraph subgraph = new Subgraph(graph);
    addReachable(node, subgraph);
    return subgraph;
  }

  /**
   * Adds all nodes and edges reachable from this node to the subgraph.
   * Uses an explicit stack to avoid a large depth of recursion.
   *
   * @param node a node known to be in the subgraph
   */
  private void addReachable(Node startNode, Subgraph subgraph)
  {
    Stack nodeStack = new Stack();
    nodeStack.add(startNode);
    while (! nodeStack.empty()) {
      Node node = (Node) nodeStack.pop();
      addEdges(node, nodeStack, subgraph);
    }
  }

  /**
   * Adds the argument node and all its out edges to the subgraph.
   * @param node the node to add
   * @param nodeStack the current set of nodes being traversed
   */
  private void addEdges(Node node, Stack nodeStack, Subgraph subgraph)
  {
    node.setVisited(true);
    for (Iterator i = ((DirectedEdgeStar) node.getOutEdges()).iterator(); i.hasNext(); ) {
      DirectedEdge de = (DirectedEdge) i.next();
      subgraph.add(de.getEdge());
      Node toNode = de.getToNode();
      if (! toNode.isVisited()) nodeStack.push(toNode);
    }
  }

}
