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
package com.vividsolutions.jts.index.intervalrtree;

import com.vividsolutions.jts.index.ItemVisitor;

public class IntervalRTreeLeafNode 
extends IntervalRTreeNode
{
  private Object item;
	
	public IntervalRTreeLeafNode(double min, double max, Object item)
	{
		this.min = min;
		this.max = max;
		this.item = item;
	}
	
	public void query(double queryMin, double queryMax, ItemVisitor visitor)
	{
		if (! intersects(queryMin, queryMax)) 
      return;
		
		visitor.visitItem(item);
	}

	
}
