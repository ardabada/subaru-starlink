
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
package com.vividsolutions.jts.index.strtree;

import java.io.Serializable;

/**
 * Boundable wrapper for a non-Boundable spatial object. Used internally by
 * AbstractSTRtree.
 *
 * @version 1.7
 */
public class ItemBoundable implements Boundable, Serializable {
  private Object bounds;
  private Object item;

  public ItemBoundable(Object bounds, Object item) {
    this.bounds = bounds;
    this.item = item;
  }

  public Object getBounds() {
    return bounds;
  }

  public Object getItem() { return item; }
}
