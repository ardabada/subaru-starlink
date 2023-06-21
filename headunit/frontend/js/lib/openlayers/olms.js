function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("ol/style/Circle.js"), require("ol/style/Fill.js"), require("ol/style/Icon.js"), require("ol/render/Feature.js"), require("ol/style/Stroke.js"), require("ol/style/Style.js"), require("ol/style/Text.js"), require("ol/render/canvas.js"), require("ol/tileurlfunction.js"), require("ol/util.js"), require("ol/format/GeoJSON.js"), require("ol/layer/Image.js"), require("ol/layer/Layer.js"), require("ol/layer/Group.js"), require("ol/format/MVT.js"), require("ol/Map.js"), require("ol/source/Raster.js"), require("ol/source/Source.js"), require("ol/tilegrid/TileGrid.js"), require("ol/source/TileJSON.js"), require("ol/layer/Tile.js"), require("ol/layer/Vector.js"), require("ol/source/Vector.js"), require("ol/layer/VectorTile.js"), require("ol/source/VectorTile.js"), require("ol/View.js"), require("ol/proj.js"), require("ol/loadingstrategy.js"), require("ol/tilegrid.js"), require("ol/extent.js")) : "function" == typeof define && define.amd ? define(["exports", "ol/style/Circle.js", "ol/style/Fill.js", "ol/style/Icon.js", "ol/render/Feature.js", "ol/style/Stroke.js", "ol/style/Style.js", "ol/style/Text.js", "ol/render/canvas.js", "ol/tileurlfunction.js", "ol/util.js", "ol/format/GeoJSON.js", "ol/layer/Image.js", "ol/layer/Layer.js", "ol/layer/Group.js", "ol/format/MVT.js", "ol/Map.js", "ol/source/Raster.js", "ol/source/Source.js", "ol/tilegrid/TileGrid.js", "ol/source/TileJSON.js", "ol/layer/Tile.js", "ol/layer/Vector.js", "ol/source/Vector.js", "ol/layer/VectorTile.js", "ol/source/VectorTile.js", "ol/View.js", "ol/proj.js", "ol/loadingstrategy.js", "ol/tilegrid.js", "ol/extent.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).olms = {}, e.ol.style.Circle, e.ol.style.Fill, e.ol.style.Icon, e.ol.render.Feature, e.ol.style.Stroke, e.ol.style.Style, e.ol.style.Text, e.ol.render.canvas, e.ol.tileurlfunction, e.ol.util, e.ol.format.GeoJSON, e.ol.layer.Image, e.ol.layer.Layer, e.ol.layer.Group, e.ol.format.MVT, e.ol.Map, e.ol.source.Raster, e.ol.source.Source, e.ol.tilegrid.TileGrid, e.ol.source.TileJSON, e.ol.layer.Tile, e.ol.layer.Vector, e.ol.source.Vector, e.ol.layer.VectorTile, e.ol.source.VectorTile, e.ol.View, e.ol.proj, e.ol.loadingstrategy, e.ol.tilegrid, e.ol.extent);
}(this, function (e, t, r, n, a, i, o, s, u, l, p, f, c, d, y, m, h, v, g, b, x, w, z, k, M, S, j, q, T, _, E) {
  "use strict";

  function C(e) {
    return e && "object" == _typeof(e) && "default" in e ? e : {
      "default": e
    };
  }
  var A,
    I = C(t),
    F = C(r),
    P = C(n),
    D = C(a),
    O = C(i),
    L = C(o),
    R = C(s),
    N = C(f),
    U = C(c),
    V = C(d),
    G = C(y),
    J = C(m),
    W = C(h),
    Z = C(v),
    $ = C(g),
    B = C(b),
    X = C(x),
    H = C(w),
    Y = C(z),
    K = C(k),
    Q = C(M),
    ee = C(S),
    te = C(j),
    re = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      rebeccapurple: [102, 51, 153, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1]
    };
  function ne(e) {
    return (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : e;
  }
  function ae(e) {
    return e < 0 ? 0 : e > 1 ? 1 : e;
  }
  function ie(e) {
    return "%" === e[e.length - 1] ? ne(parseFloat(e) / 100 * 255) : ne(parseInt(e));
  }
  function oe(e) {
    return "%" === e[e.length - 1] ? ae(parseFloat(e) / 100) : ae(parseFloat(e));
  }
  function se(e, t, r) {
    return r < 0 ? r += 1 : r > 1 && (r -= 1), 6 * r < 1 ? e + (t - e) * r * 6 : 2 * r < 1 ? t : 3 * r < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e;
  }
  try {
    A = {}.parseCSSColor = function (e) {
      var t,
        r = e.replace(/ /g, "").toLowerCase();
      if (r in re) return re[r].slice();
      if ("#" === r[0]) return 4 === r.length ? (t = parseInt(r.substr(1), 16)) >= 0 && t <= 4095 ? [(3840 & t) >> 4 | (3840 & t) >> 8, 240 & t | (240 & t) >> 4, 15 & t | (15 & t) << 4, 1] : null : 7 === r.length && (t = parseInt(r.substr(1), 16)) >= 0 && t <= 16777215 ? [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 1] : null;
      var n = r.indexOf("("),
        a = r.indexOf(")");
      if (-1 !== n && a + 1 === r.length) {
        var i = r.substr(0, n),
          o = r.substr(n + 1, a - (n + 1)).split(","),
          s = 1;
        switch (i) {
          case "rgba":
            if (4 !== o.length) return null;
            s = oe(o.pop());
          case "rgb":
            return 3 !== o.length ? null : [ie(o[0]), ie(o[1]), ie(o[2]), s];
          case "hsla":
            if (4 !== o.length) return null;
            s = oe(o.pop());
          case "hsl":
            if (3 !== o.length) return null;
            var u = (parseFloat(o[0]) % 360 + 360) % 360 / 360,
              l = oe(o[1]),
              p = oe(o[2]),
              f = p <= .5 ? p * (l + 1) : p + l - p * l,
              c = 2 * p - f;
            return [ne(255 * se(c, f, u + 1 / 3)), ne(255 * se(c, f, u)), ne(255 * se(c, f, u - 1 / 3)), s];
          default:
            return null;
        }
      }
      return null;
    };
  } catch (e) {}
  var ue = function ue(e, t, r, n) {
    void 0 === n && (n = 1), this.r = e, this.g = t, this.b = r, this.a = n;
  };
  ue.parse = function (e) {
    if (e) {
      if (e instanceof ue) return e;
      if ("string" == typeof e) {
        var t = A(e);
        if (t) return new ue(t[0] / 255 * t[3], t[1] / 255 * t[3], t[2] / 255 * t[3], t[3]);
      }
    }
  }, ue.prototype.toString = function () {
    var e = this.toArray(),
      t = e[0],
      r = e[1],
      n = e[2],
      a = e[3];
    return "rgba(" + Math.round(t) + "," + Math.round(r) + "," + Math.round(n) + "," + a + ")";
  }, ue.prototype.toArray = function () {
    var e = this,
      t = e.r,
      r = e.g,
      n = e.b,
      a = e.a;
    return 0 === a ? [0, 0, 0, 0] : [255 * t / a, 255 * r / a, 255 * n / a, a];
  }, ue.prototype.toArray01 = function () {
    var e = this,
      t = e.r,
      r = e.g,
      n = e.b,
      a = e.a;
    return 0 === a ? [0, 0, 0, 0] : [t / a, r / a, n / a, a];
  }, ue.prototype.toArray01PremultipliedAlpha = function () {
    var e = this;
    return [e.r, e.g, e.b, e.a];
  }, ue.black = new ue(0, 0, 0, 1), ue.white = new ue(1, 1, 1, 1), ue.transparent = new ue(0, 0, 0, 0), ue.red = new ue(1, 0, 0, 1), ue.blue = new ue(0, 0, 1, 1);
  var le = ue;
  function pe(e) {
    return "object" == _typeof(e) ? ["literal", e] : e;
  }
  function fe(e, t) {
    var r = e.stops;
    if (!r) return function (e, t) {
      var r = ["get", e.property];
      if (void 0 === e["default"]) return "string" === t.type ? ["string", r] : r;
      if ("enum" === t.type) return ["match", r, Object.keys(t.values), r, e["default"]];
      var n = ["color" === t.type ? "to-color" : t.type, r, pe(e["default"])];
      return "array" === t.type && n.splice(1, 0, t.value, t.length || null), n;
    }(e, t);
    var n = r && "object" == _typeof(r[0][0]),
      a = n || void 0 !== e.property,
      i = n || !a;
    return r = r.map(function (e) {
      return !a && t.tokens && "string" == typeof e[1] ? [e[0], ge(e[1])] : [e[0], pe(e[1])];
    }), n ? function (e, t, r) {
      for (var n = {}, a = {}, i = [], o = 0; o < r.length; o++) {
        var s = r[o],
          u = s[0].zoom;
        void 0 === n[u] && (n[u] = {
          zoom: u,
          type: e.type,
          property: e.property,
          "default": e["default"]
        }, a[u] = [], i.push(u)), a[u].push([s[0].value, s[1]]);
      }
      if ("exponential" === ve({}, t)) {
        for (var l = [ce(e), ["linear"], ["zoom"]], p = 0, f = i; p < f.length; p += 1) {
          var c = f[p];
          he(l, c, ye(n[c], t, a[c]), !1);
        }
        return l;
      }
      for (var d = ["step", ["zoom"]], y = 0, m = i; y < m.length; y += 1) {
        var h = m[y];
        he(d, h, ye(n[h], t, a[h]), !0);
      }
      return me(d), d;
    }(e, t, r) : i ? function (e, t, r, n) {
      void 0 === n && (n = ["zoom"]);
      var a,
        i = ve(e, t),
        o = !1;
      if ("interval" === i) a = ["step", n], o = !0;else {
        if ("exponential" !== i) throw new Error('Unknown zoom function type "' + i + '"');
        var s = void 0 !== e.base ? e.base : 1;
        a = [ce(e), 1 === s ? ["linear"] : ["exponential", s], n];
      }
      for (var u = 0, l = r; u < l.length; u += 1) {
        var p = l[u];
        he(a, p[0], p[1], o);
      }
      return me(a), a;
    }(e, t, r) : ye(e, t, r);
  }
  function ce(e) {
    switch (e.colorSpace) {
      case "hcl":
        return "interpolate-hcl";
      case "lab":
        return "interpolate-lab";
      default:
        return "interpolate";
    }
  }
  function de(e, t) {
    var r,
      n,
      a = pe((r = e["default"], n = t["default"], void 0 !== r ? r : void 0 !== n ? n : void 0));
    return void 0 === a && "resolvedImage" === t.type ? "" : a;
  }
  function ye(e, t, r) {
    var n = ve(e, t),
      a = ["get", e.property];
    if ("categorical" === n && "boolean" == typeof r[0][0]) {
      for (var i = ["case"], o = 0, s = r; o < s.length; o += 1) {
        var u = s[o];
        i.push(["==", a, u[0]], u[1]);
      }
      return i.push(de(e, t)), i;
    }
    if ("categorical" === n) {
      for (var l = ["match", a], p = 0, f = r; p < f.length; p += 1) {
        var c = f[p];
        he(l, c[0], c[1], !1);
      }
      return l.push(de(e, t)), l;
    }
    if ("interval" === n) {
      for (var d = ["step", ["number", a]], y = 0, m = r; y < m.length; y += 1) {
        var h = m[y];
        he(d, h[0], h[1], !0);
      }
      return me(d), void 0 === e["default"] ? d : ["case", ["==", ["typeof", a], "number"], d, pe(e["default"])];
    }
    if ("exponential" === n) {
      for (var v = void 0 !== e.base ? e.base : 1, g = [ce(e), 1 === v ? ["linear"] : ["exponential", v], ["number", a]], b = 0, x = r; b < x.length; b += 1) {
        var w = x[b];
        he(g, w[0], w[1], !1);
      }
      return void 0 === e["default"] ? g : ["case", ["==", ["typeof", a], "number"], g, pe(e["default"])];
    }
    throw new Error("Unknown property function type " + n);
  }
  function me(e) {
    "step" === e[0] && 3 === e.length && (e.push(0), e.push(e[3]));
  }
  function he(e, t, r, n) {
    e.length > 3 && t === e[e.length - 2] || (n && 2 === e.length || e.push(t), e.push(r));
  }
  function ve(e, t) {
    return e.type ? e.type : t.expression.interpolated ? "exponential" : "interval";
  }
  function ge(e) {
    for (var t = ["concat"], r = /{([^{}]+)}/g, n = 0, a = r.exec(e); null !== a; a = r.exec(e)) {
      var i = e.slice(n, r.lastIndex - a[0].length);
      n = r.lastIndex, i.length > 0 && t.push(i), t.push(["get", a[1]]);
    }
    if (1 === t.length) return e;
    if (n < e.length) t.push(e.slice(n));else if (2 === t.length) return ["to-string", t[1]];
    return t;
  }
  var be = function (e) {
      function t(t, r) {
        e.call(this, r), this.message = r, this.key = t;
      }
      return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t;
    }(Error),
    xe = function xe(e, t) {
      void 0 === t && (t = []), this.parent = e, this.bindings = {};
      for (var r = 0, n = t; r < n.length; r += 1) {
        var a = n[r],
          i = a[0],
          o = a[1];
        this.bindings[i] = o;
      }
    };
  xe.prototype.concat = function (e) {
    return new xe(this, e);
  }, xe.prototype.get = function (e) {
    if (this.bindings[e]) return this.bindings[e];
    if (this.parent) return this.parent.get(e);
    throw new Error(e + " not found in scope.");
  }, xe.prototype.has = function (e) {
    return !!this.bindings[e] || !!this.parent && this.parent.has(e);
  };
  var we = xe,
    ze = {
      kind: "null"
    },
    ke = {
      kind: "number"
    },
    Me = {
      kind: "string"
    },
    Se = {
      kind: "boolean"
    },
    je = {
      kind: "color"
    },
    qe = {
      kind: "object"
    },
    Te = {
      kind: "value"
    },
    _e = {
      kind: "collator"
    },
    Ee = {
      kind: "formatted"
    },
    Ce = {
      kind: "resolvedImage"
    };
  function Ae(e, t) {
    return {
      kind: "array",
      itemType: e,
      N: t
    };
  }
  function Ie(e) {
    if ("array" === e.kind) {
      var t = Ie(e.itemType);
      return "number" == typeof e.N ? "array<" + t + ", " + e.N + ">" : "value" === e.itemType.kind ? "array" : "array<" + t + ">";
    }
    return e.kind;
  }
  var Fe = [ze, ke, Me, Se, je, Ee, qe, Ae(Te), Ce];
  function Pe(e, t) {
    if ("error" === t.kind) return null;
    if ("array" === e.kind) {
      if ("array" === t.kind && (0 === t.N && "value" === t.itemType.kind || !Pe(e.itemType, t.itemType)) && ("number" != typeof e.N || e.N === t.N)) return null;
    } else {
      if (e.kind === t.kind) return null;
      if ("value" === e.kind) for (var r = 0, n = Fe; r < n.length; r += 1) {
        if (!Pe(n[r], t)) return null;
      }
    }
    return "Expected " + Ie(e) + " but found " + Ie(t) + " instead.";
  }
  function De(e, t) {
    return t.some(function (t) {
      return t.kind === e.kind;
    });
  }
  function Oe(e, t) {
    return t.some(function (t) {
      return "null" === t ? null === e : "array" === t ? Array.isArray(e) : "object" === t ? e && !Array.isArray(e) && "object" == _typeof(e) : t === _typeof(e);
    });
  }
  var Le = function Le(e, t, r) {
    this.sensitivity = e ? t ? "variant" : "case" : t ? "accent" : "base", this.locale = r, this.collator = new Intl.Collator(this.locale ? this.locale : [], {
      sensitivity: this.sensitivity,
      usage: "search"
    });
  };
  Le.prototype.compare = function (e, t) {
    return this.collator.compare(e, t);
  }, Le.prototype.resolvedLocale = function () {
    return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
  };
  var Re = Le,
    Ne = function Ne(e, t, r, n, a) {
      this.text = e.normalize ? e.normalize() : e, this.image = t, this.scale = r, this.fontStack = n, this.textColor = a;
    },
    Ue = function Ue(e) {
      this.sections = e;
    };
  Ue.fromString = function (e) {
    return new Ue([new Ne(e, null, null, null, null)]);
  }, Ue.prototype.isEmpty = function () {
    return 0 === this.sections.length || !this.sections.some(function (e) {
      return 0 !== e.text.length || e.image && 0 !== e.image.name.length;
    });
  }, Ue.factory = function (e) {
    return e instanceof Ue ? e : Ue.fromString(e);
  }, Ue.prototype.toString = function () {
    return 0 === this.sections.length ? "" : this.sections.map(function (e) {
      return e.text;
    }).join("");
  }, Ue.prototype.serialize = function () {
    for (var e = ["format"], t = 0, r = this.sections; t < r.length; t += 1) {
      var n = r[t];
      if (n.image) e.push(["image", n.image.name]);else {
        e.push(n.text);
        var a = {};
        n.fontStack && (a["text-font"] = ["literal", n.fontStack.split(",")]), n.scale && (a["font-scale"] = n.scale), n.textColor && (a["text-color"] = ["rgba"].concat(n.textColor.toArray())), e.push(a);
      }
    }
    return e;
  };
  var Ve = Ue,
    Ge = function Ge(e) {
      this.name = e.name, this.available = e.available;
    };
  Ge.prototype.toString = function () {
    return this.name;
  }, Ge.fromString = function (e) {
    return e ? new Ge({
      name: e,
      available: !1
    }) : null;
  }, Ge.prototype.serialize = function () {
    return ["image", this.name];
  };
  var Je = Ge;
  function We(e, t, r, n) {
    return "number" == typeof e && e >= 0 && e <= 255 && "number" == typeof t && t >= 0 && t <= 255 && "number" == typeof r && r >= 0 && r <= 255 ? void 0 === n || "number" == typeof n && n >= 0 && n <= 1 ? null : "Invalid rgba value [" + [e, t, r, n].join(", ") + "]: 'a' must be between 0 and 1." : "Invalid rgba value [" + ("number" == typeof n ? [e, t, r, n] : [e, t, r]).join(", ") + "]: 'r', 'g', and 'b' must be between 0 and 255.";
  }
  function Ze(e) {
    if (null === e) return !0;
    if ("string" == typeof e) return !0;
    if ("boolean" == typeof e) return !0;
    if ("number" == typeof e) return !0;
    if (e instanceof le) return !0;
    if (e instanceof Re) return !0;
    if (e instanceof Ve) return !0;
    if (e instanceof Je) return !0;
    if (Array.isArray(e)) {
      for (var t = 0, r = e; t < r.length; t += 1) {
        if (!Ze(r[t])) return !1;
      }
      return !0;
    }
    if ("object" == _typeof(e)) {
      for (var n in e) if (!Ze(e[n])) return !1;
      return !0;
    }
    return !1;
  }
  function $e(e) {
    if (null === e) return ze;
    if ("string" == typeof e) return Me;
    if ("boolean" == typeof e) return Se;
    if ("number" == typeof e) return ke;
    if (e instanceof le) return je;
    if (e instanceof Re) return _e;
    if (e instanceof Ve) return Ee;
    if (e instanceof Je) return Ce;
    if (Array.isArray(e)) {
      for (var t, r = e.length, n = 0, a = e; n < a.length; n += 1) {
        var i = $e(a[n]);
        if (t) {
          if (t === i) continue;
          t = Te;
          break;
        }
        t = i;
      }
      return Ae(t || Te, r);
    }
    return qe;
  }
  function Be(e) {
    var t = _typeof(e);
    return null === e ? "" : "string" === t || "number" === t || "boolean" === t ? String(e) : e instanceof le || e instanceof Ve || e instanceof Je ? e.toString() : JSON.stringify(e);
  }
  var Xe = function Xe(e, t) {
    this.type = e, this.value = t;
  };
  Xe.parse = function (e, t) {
    if (2 !== e.length) return t.error("'literal' expression requires exactly one argument, but found " + (e.length - 1) + " instead.");
    if (!Ze(e[1])) return t.error("invalid value");
    var r = e[1],
      n = $e(r),
      a = t.expectedType;
    return "array" !== n.kind || 0 !== n.N || !a || "array" !== a.kind || "number" == typeof a.N && 0 !== a.N || (n = a), new Xe(n, r);
  }, Xe.prototype.evaluate = function () {
    return this.value;
  }, Xe.prototype.eachChild = function () {}, Xe.prototype.outputDefined = function () {
    return !0;
  }, Xe.prototype.serialize = function () {
    return "array" === this.type.kind || "object" === this.type.kind ? ["literal", this.value] : this.value instanceof le ? ["rgba"].concat(this.value.toArray()) : this.value instanceof Ve ? this.value.serialize() : this.value;
  };
  var He = Xe,
    Ye = function Ye(e) {
      this.name = "ExpressionEvaluationError", this.message = e;
    };
  Ye.prototype.toJSON = function () {
    return this.message;
  };
  var Ke = Ye,
    Qe = {
      string: Me,
      number: ke,
      "boolean": Se,
      object: qe
    },
    et = function et(e, t) {
      this.type = e, this.args = t;
    };
  et.parse = function (e, t) {
    if (e.length < 2) return t.error("Expected at least one argument.");
    var r,
      n = 1,
      a = e[0];
    if ("array" === a) {
      var i, o;
      if (e.length > 2) {
        var s = e[1];
        if ("string" != typeof s || !(s in Qe) || "object" === s) return t.error('The item type argument of "array" must be one of string, number, boolean', 1);
        i = Qe[s], n++;
      } else i = Te;
      if (e.length > 3) {
        if (null !== e[2] && ("number" != typeof e[2] || e[2] < 0 || e[2] !== Math.floor(e[2]))) return t.error('The length argument to "array" must be a positive integer literal', 2);
        o = e[2], n++;
      }
      r = Ae(i, o);
    } else r = Qe[a];
    for (var u = []; n < e.length; n++) {
      var l = t.parse(e[n], n, Te);
      if (!l) return null;
      u.push(l);
    }
    return new et(r, u);
  }, et.prototype.evaluate = function (e) {
    for (var t = 0; t < this.args.length; t++) {
      var r = this.args[t].evaluate(e);
      if (!Pe(this.type, $e(r))) return r;
      if (t === this.args.length - 1) throw new Ke("Expected value to be of type " + Ie(this.type) + ", but found " + Ie($e(r)) + " instead.");
    }
    return null;
  }, et.prototype.eachChild = function (e) {
    this.args.forEach(e);
  }, et.prototype.outputDefined = function () {
    return this.args.every(function (e) {
      return e.outputDefined();
    });
  }, et.prototype.serialize = function () {
    var e = this.type,
      t = [e.kind];
    if ("array" === e.kind) {
      var r = e.itemType;
      if ("string" === r.kind || "number" === r.kind || "boolean" === r.kind) {
        t.push(r.kind);
        var n = e.N;
        ("number" == typeof n || this.args.length > 1) && t.push(n);
      }
    }
    return t.concat(this.args.map(function (e) {
      return e.serialize();
    }));
  };
  var tt = et,
    rt = function rt(e) {
      this.type = Ee, this.sections = e;
    };
  rt.parse = function (e, t) {
    if (e.length < 2) return t.error("Expected at least one argument.");
    var r = e[1];
    if (!Array.isArray(r) && "object" == _typeof(r)) return t.error("First argument must be an image or text section.");
    for (var n = [], a = !1, i = 1; i <= e.length - 1; ++i) {
      var o = e[i];
      if (a && "object" == _typeof(o) && !Array.isArray(o)) {
        a = !1;
        var s = null;
        if (o["font-scale"] && !(s = t.parse(o["font-scale"], 1, ke))) return null;
        var u = null;
        if (o["text-font"] && !(u = t.parse(o["text-font"], 1, Ae(Me)))) return null;
        var l = null;
        if (o["text-color"] && !(l = t.parse(o["text-color"], 1, je))) return null;
        var p = n[n.length - 1];
        p.scale = s, p.font = u, p.textColor = l;
      } else {
        var f = t.parse(e[i], 1, Te);
        if (!f) return null;
        var c = f.type.kind;
        if ("string" !== c && "value" !== c && "null" !== c && "resolvedImage" !== c) return t.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
        a = !0, n.push({
          content: f,
          scale: null,
          font: null,
          textColor: null
        });
      }
    }
    return new rt(n);
  }, rt.prototype.evaluate = function (e) {
    return new Ve(this.sections.map(function (t) {
      var r = t.content.evaluate(e);
      return $e(r) === Ce ? new Ne("", r, null, null, null) : new Ne(Be(r), null, t.scale ? t.scale.evaluate(e) : null, t.font ? t.font.evaluate(e).join(",") : null, t.textColor ? t.textColor.evaluate(e) : null);
    }));
  }, rt.prototype.eachChild = function (e) {
    for (var t = 0, r = this.sections; t < r.length; t += 1) {
      var n = r[t];
      e(n.content), n.scale && e(n.scale), n.font && e(n.font), n.textColor && e(n.textColor);
    }
  }, rt.prototype.outputDefined = function () {
    return !1;
  }, rt.prototype.serialize = function () {
    for (var e = ["format"], t = 0, r = this.sections; t < r.length; t += 1) {
      var n = r[t];
      e.push(n.content.serialize());
      var a = {};
      n.scale && (a["font-scale"] = n.scale.serialize()), n.font && (a["text-font"] = n.font.serialize()), n.textColor && (a["text-color"] = n.textColor.serialize()), e.push(a);
    }
    return e;
  };
  var nt = rt,
    at = function at(e) {
      this.type = Ce, this.input = e;
    };
  at.parse = function (e, t) {
    if (2 !== e.length) return t.error("Expected two arguments.");
    var r = t.parse(e[1], 1, Me);
    return r ? new at(r) : t.error("No image name provided.");
  }, at.prototype.evaluate = function (e) {
    var t = this.input.evaluate(e),
      r = Je.fromString(t);
    return r && e.availableImages && (r.available = e.availableImages.indexOf(t) > -1), r;
  }, at.prototype.eachChild = function (e) {
    e(this.input);
  }, at.prototype.outputDefined = function () {
    return !1;
  }, at.prototype.serialize = function () {
    return ["image", this.input.serialize()];
  };
  var it = at,
    ot = {
      "to-boolean": Se,
      "to-color": je,
      "to-number": ke,
      "to-string": Me
    },
    st = function st(e, t) {
      this.type = e, this.args = t;
    };
  st.parse = function (e, t) {
    if (e.length < 2) return t.error("Expected at least one argument.");
    var r = e[0];
    if (("to-boolean" === r || "to-string" === r) && 2 !== e.length) return t.error("Expected one argument.");
    for (var n = ot[r], a = [], i = 1; i < e.length; i++) {
      var o = t.parse(e[i], i, Te);
      if (!o) return null;
      a.push(o);
    }
    return new st(n, a);
  }, st.prototype.evaluate = function (e) {
    if ("boolean" === this.type.kind) return Boolean(this.args[0].evaluate(e));
    if ("color" === this.type.kind) {
      for (var t, r, n = 0, a = this.args; n < a.length; n += 1) {
        if (r = null, (t = a[n].evaluate(e)) instanceof le) return t;
        if ("string" == typeof t) {
          var i = e.parseColor(t);
          if (i) return i;
        } else if (Array.isArray(t) && !(r = t.length < 3 || t.length > 4 ? "Invalid rbga value " + JSON.stringify(t) + ": expected an array containing either three or four numeric values." : We(t[0], t[1], t[2], t[3]))) return new le(t[0] / 255, t[1] / 255, t[2] / 255, t[3]);
      }
      throw new Ke(r || "Could not parse color from value '" + ("string" == typeof t ? t : String(JSON.stringify(t))) + "'");
    }
    if ("number" === this.type.kind) {
      for (var o = null, s = 0, u = this.args; s < u.length; s += 1) {
        if (null === (o = u[s].evaluate(e))) return 0;
        var l = Number(o);
        if (!isNaN(l)) return l;
      }
      throw new Ke("Could not convert " + JSON.stringify(o) + " to number.");
    }
    return "formatted" === this.type.kind ? Ve.fromString(Be(this.args[0].evaluate(e))) : "resolvedImage" === this.type.kind ? Je.fromString(Be(this.args[0].evaluate(e))) : Be(this.args[0].evaluate(e));
  }, st.prototype.eachChild = function (e) {
    this.args.forEach(e);
  }, st.prototype.outputDefined = function () {
    return this.args.every(function (e) {
      return e.outputDefined();
    });
  }, st.prototype.serialize = function () {
    if ("formatted" === this.type.kind) return new nt([{
      content: this.args[0],
      scale: null,
      font: null,
      textColor: null
    }]).serialize();
    if ("resolvedImage" === this.type.kind) return new it(this.args[0]).serialize();
    var e = ["to-" + this.type.kind];
    return this.eachChild(function (t) {
      e.push(t.serialize());
    }), e;
  };
  var ut = st,
    lt = ["Unknown", "Point", "LineString", "Polygon"],
    pt = function pt() {
      this.globals = null, this.feature = null, this.featureState = null, this.formattedSection = null, this._parseColorCache = {}, this.availableImages = null, this.canonical = null, this.featureTileCoord = null, this.featureDistanceData = null;
    };
  pt.prototype.id = function () {
    return this.feature && void 0 !== this.feature.id ? this.feature.id : null;
  }, pt.prototype.geometryType = function () {
    return this.feature ? "number" == typeof this.feature.type ? lt[this.feature.type] : this.feature.type : null;
  }, pt.prototype.geometry = function () {
    return this.feature && "geometry" in this.feature ? this.feature.geometry : null;
  }, pt.prototype.canonicalID = function () {
    return this.canonical;
  }, pt.prototype.properties = function () {
    return this.feature && this.feature.properties || {};
  }, pt.prototype.distanceFromCenter = function () {
    if (this.featureTileCoord && this.featureDistanceData) {
      var e = this.featureDistanceData.center,
        t = this.featureDistanceData.scale,
        r = this.featureTileCoord,
        n = r.x,
        a = r.y,
        i = n * t - e[0],
        o = a * t - e[1];
      return this.featureDistanceData.bearing[0] * i + this.featureDistanceData.bearing[1] * o;
    }
    return 0;
  }, pt.prototype.parseColor = function (e) {
    var t = this._parseColorCache[e];
    return t || (t = this._parseColorCache[e] = le.parse(e)), t;
  };
  var ft = pt,
    ct = function ct(e, t, r, n) {
      this.name = e, this.type = t, this._evaluate = r, this.args = n;
    };
  ct.prototype.evaluate = function (e) {
    return this._evaluate(e, this.args);
  }, ct.prototype.eachChild = function (e) {
    this.args.forEach(e);
  }, ct.prototype.outputDefined = function () {
    return !1;
  }, ct.prototype.serialize = function () {
    return [this.name].concat(this.args.map(function (e) {
      return e.serialize();
    }));
  }, ct.parse = function (e, t) {
    var r,
      n = e[0],
      a = ct.definitions[n];
    if (!a) return t.error('Unknown expression "' + n + '". If you wanted a literal array, use ["literal", [...]].', 0);
    for (var i = Array.isArray(a) ? a[0] : a.type, o = Array.isArray(a) ? [[a[1], a[2]]] : a.overloads, s = o.filter(function (t) {
        var r = t[0];
        return !Array.isArray(r) || r.length === e.length - 1;
      }), u = null, l = 0, p = s; l < p.length; l += 1) {
      var f = p[l],
        c = f[0],
        d = f[1];
      u = new Nt(t.registry, t.path, null, t.scope);
      for (var y = [], m = !1, h = 1; h < e.length; h++) {
        var v = e[h],
          g = Array.isArray(c) ? c[h - 1] : c.type,
          b = u.parse(v, 1 + y.length, g);
        if (!b) {
          m = !0;
          break;
        }
        y.push(b);
      }
      if (!m) if (Array.isArray(c) && c.length !== y.length) u.error("Expected " + c.length + " arguments, but found " + y.length + " instead.");else {
        for (var x = 0; x < y.length; x++) {
          var w = Array.isArray(c) ? c[x] : c.type,
            z = y[x];
          u.concat(x + 1).checkSubtype(w, z.type);
        }
        if (0 === u.errors.length) return new ct(n, i, d, y);
      }
    }
    if (1 === s.length) (r = t.errors).push.apply(r, u.errors);else {
      for (var k = (s.length ? s : o).map(function (e) {
          var t,
            r = e[0];
          return t = r, Array.isArray(t) ? "(" + t.map(Ie).join(", ") + ")" : "(" + Ie(t.type) + "...)";
        }).join(" | "), M = [], S = 1; S < e.length; S++) {
        var j = t.parse(e[S], 1 + M.length);
        if (!j) return null;
        M.push(Ie(j.type));
      }
      t.error("Expected arguments of type " + k + ", but found (" + M.join(", ") + ") instead.");
    }
    return null;
  }, ct.register = function (e, t) {
    for (var r in ct.definitions = t, t) e[r] = ct;
  };
  var dt = ct,
    yt = function yt(e, t, r) {
      this.type = _e, this.locale = r, this.caseSensitive = e, this.diacriticSensitive = t;
    };
  yt.parse = function (e, t) {
    if (2 !== e.length) return t.error("Expected one argument.");
    var r = e[1];
    if ("object" != _typeof(r) || Array.isArray(r)) return t.error("Collator options argument must be an object.");
    var n = t.parse(void 0 !== r["case-sensitive"] && r["case-sensitive"], 1, Se);
    if (!n) return null;
    var a = t.parse(void 0 !== r["diacritic-sensitive"] && r["diacritic-sensitive"], 1, Se);
    if (!a) return null;
    var i = null;
    return r.locale && !(i = t.parse(r.locale, 1, Me)) ? null : new yt(n, a, i);
  }, yt.prototype.evaluate = function (e) {
    return new Re(this.caseSensitive.evaluate(e), this.diacriticSensitive.evaluate(e), this.locale ? this.locale.evaluate(e) : null);
  }, yt.prototype.eachChild = function (e) {
    e(this.caseSensitive), e(this.diacriticSensitive), this.locale && e(this.locale);
  }, yt.prototype.outputDefined = function () {
    return !1;
  }, yt.prototype.serialize = function () {
    var e = {};
    return e["case-sensitive"] = this.caseSensitive.serialize(), e["diacritic-sensitive"] = this.diacriticSensitive.serialize(), this.locale && (e.locale = this.locale.serialize()), ["collator", e];
  };
  var mt = yt,
    ht = 8192;
  function vt(e, t) {
    e[0] = Math.min(e[0], t[0]), e[1] = Math.min(e[1], t[1]), e[2] = Math.max(e[2], t[0]), e[3] = Math.max(e[3], t[1]);
  }
  function gt(e, t) {
    return !(e[0] <= t[0]) && !(e[2] >= t[2]) && !(e[1] <= t[1]) && !(e[3] >= t[3]);
  }
  function bt(e, t) {
    var r,
      n = (180 + e[0]) / 360,
      a = (r = e[1], (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + r * Math.PI / 360))) / 360),
      i = Math.pow(2, t.z);
    return [Math.round(n * i * ht), Math.round(a * i * ht)];
  }
  function xt(e, t, r) {
    return t[1] > e[1] != r[1] > e[1] && e[0] < (r[0] - t[0]) * (e[1] - t[1]) / (r[1] - t[1]) + t[0];
  }
  function wt(e, t) {
    for (var r, n, a, i, o, s, u, l = !1, p = 0, f = t.length; p < f; p++) for (var c = t[p], d = 0, y = c.length; d < y - 1; d++) {
      if (r = e, n = c[d], a = c[d + 1], i = void 0, o = void 0, s = void 0, u = void 0, i = r[0] - n[0], o = r[1] - n[1], s = r[0] - a[0], u = r[1] - a[1], i * u - s * o == 0 && i * s <= 0 && o * u <= 0) return !1;
      xt(e, c[d], c[d + 1]) && (l = !l);
    }
    return l;
  }
  function zt(e, t) {
    for (var r = 0; r < t.length; r++) if (wt(e, t[r])) return !0;
    return !1;
  }
  function kt(e, t, r, n) {
    var a = e[0] - r[0],
      i = e[1] - r[1],
      o = t[0] - r[0],
      s = t[1] - r[1],
      u = n[0] - r[0],
      l = n[1] - r[1],
      p = a * l - u * i,
      f = o * l - u * s;
    return p > 0 && f < 0 || p < 0 && f > 0;
  }
  function Mt(e, t, r) {
    for (var n = 0, a = r; n < a.length; n += 1) for (var i = a[n], o = 0; o < i.length - 1; ++o) if (s = e, u = t, l = i[o], p = i[o + 1], f = void 0, c = void 0, d = void 0, y = void 0, d = [u[0] - s[0], u[1] - s[1]], y = [p[0] - l[0], p[1] - l[1]], 0 != (f = y)[0] * (c = d)[1] - f[1] * c[0] && kt(s, u, l, p) && kt(l, p, s, u)) return !0;
    var s, u, l, p, f, c, d, y;
    return !1;
  }
  function St(e, t) {
    for (var r = 0; r < e.length; ++r) if (!wt(e[r], t)) return !1;
    for (var n = 0; n < e.length - 1; ++n) if (Mt(e[n], e[n + 1], t)) return !1;
    return !0;
  }
  function jt(e, t) {
    for (var r = 0; r < t.length; r++) if (St(e, t[r])) return !0;
    return !1;
  }
  function qt(e, t, r) {
    for (var n = [], a = 0; a < e.length; a++) {
      for (var i = [], o = 0; o < e[a].length; o++) {
        var s = bt(e[a][o], r);
        vt(t, s), i.push(s);
      }
      n.push(i);
    }
    return n;
  }
  function Tt(e, t, r) {
    for (var n = [], a = 0; a < e.length; a++) {
      var i = qt(e[a], t, r);
      n.push(i);
    }
    return n;
  }
  function _t(e, t, r, n) {
    if (e[0] < r[0] || e[0] > r[2]) {
      var a = .5 * n,
        i = e[0] - r[0] > a ? -n : r[0] - e[0] > a ? n : 0;
      0 === i && (i = e[0] - r[2] > a ? -n : r[2] - e[0] > a ? n : 0), e[0] += i;
    }
    vt(t, e);
  }
  function Et(e, t, r, n) {
    var a = Math.pow(2, n.z) * ht,
      i = [n.x * ht, n.y * ht],
      o = [];
    if (!e) return o;
    for (var s = 0, u = e; s < u.length; s += 1) for (var l = 0, p = u[s]; l < p.length; l += 1) {
      var f = p[l],
        c = [f.x + i[0], f.y + i[1]];
      _t(c, t, r, a), o.push(c);
    }
    return o;
  }
  function Ct(e, t, r, n) {
    var a,
      i = Math.pow(2, n.z) * ht,
      o = [n.x * ht, n.y * ht],
      s = [];
    if (!e) return s;
    for (var u = 0, l = e; u < l.length; u += 1) {
      for (var p = [], f = 0, c = l[u]; f < c.length; f += 1) {
        var d = c[f],
          y = [d.x + o[0], d.y + o[1]];
        vt(t, y), p.push(y);
      }
      s.push(p);
    }
    if (t[2] - t[0] <= i / 2) {
      (a = t)[0] = a[1] = 1 / 0, a[2] = a[3] = -1 / 0;
      for (var m = 0, h = s; m < h.length; m += 1) for (var v = 0, g = h[m]; v < g.length; v += 1) {
        _t(g[v], t, r, i);
      }
    }
    return s;
  }
  var At = function At(e, t) {
    this.type = Se, this.geojson = e, this.geometries = t;
  };
  At.parse = function (e, t) {
    if (2 !== e.length) return t.error("'within' expression requires exactly one argument, but found " + (e.length - 1) + " instead.");
    if (Ze(e[1])) {
      var r = e[1];
      if ("FeatureCollection" === r.type) for (var n = 0; n < r.features.length; ++n) {
        var a = r.features[n].geometry.type;
        if ("Polygon" === a || "MultiPolygon" === a) return new At(r, r.features[n].geometry);
      } else if ("Feature" === r.type) {
        var i = r.geometry.type;
        if ("Polygon" === i || "MultiPolygon" === i) return new At(r, r.geometry);
      } else if ("Polygon" === r.type || "MultiPolygon" === r.type) return new At(r, r);
    }
    return t.error("'within' expression requires valid geojson object that contains polygon geometry type.");
  }, At.prototype.evaluate = function (e) {
    if (null != e.geometry() && null != e.canonicalID()) {
      if ("Point" === e.geometryType()) return function (e, t) {
        var r = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
          n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
          a = e.canonicalID();
        if (!a) return !1;
        if ("Polygon" === t.type) {
          var i = qt(t.coordinates, n, a),
            o = Et(e.geometry(), r, n, a);
          if (!gt(r, n)) return !1;
          for (var s = 0, u = o; s < u.length; s += 1) if (!wt(u[s], i)) return !1;
        }
        if ("MultiPolygon" === t.type) {
          var l = Tt(t.coordinates, n, a),
            p = Et(e.geometry(), r, n, a);
          if (!gt(r, n)) return !1;
          for (var f = 0, c = p; f < c.length; f += 1) if (!zt(c[f], l)) return !1;
        }
        return !0;
      }(e, this.geometries);
      if ("LineString" === e.geometryType()) return function (e, t) {
        var r = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
          n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
          a = e.canonicalID();
        if (!a) return !1;
        if ("Polygon" === t.type) {
          var i = qt(t.coordinates, n, a),
            o = Ct(e.geometry(), r, n, a);
          if (!gt(r, n)) return !1;
          for (var s = 0, u = o; s < u.length; s += 1) if (!St(u[s], i)) return !1;
        }
        if ("MultiPolygon" === t.type) {
          var l = Tt(t.coordinates, n, a),
            p = Ct(e.geometry(), r, n, a);
          if (!gt(r, n)) return !1;
          for (var f = 0, c = p; f < c.length; f += 1) if (!jt(c[f], l)) return !1;
        }
        return !0;
      }(e, this.geometries);
    }
    return !1;
  }, At.prototype.eachChild = function () {}, At.prototype.outputDefined = function () {
    return !0;
  }, At.prototype.serialize = function () {
    return ["within", this.geojson];
  };
  var It = At;
  function Ft(e) {
    if (e instanceof dt) {
      if ("get" === e.name && 1 === e.args.length) return !1;
      if ("feature-state" === e.name) return !1;
      if ("has" === e.name && 1 === e.args.length) return !1;
      if ("properties" === e.name || "geometry-type" === e.name || "id" === e.name) return !1;
      if (/^filter-/.test(e.name)) return !1;
    }
    if (e instanceof It) return !1;
    var t = !0;
    return e.eachChild(function (e) {
      t && !Ft(e) && (t = !1);
    }), t;
  }
  function Pt(e) {
    if (e instanceof dt && "feature-state" === e.name) return !1;
    var t = !0;
    return e.eachChild(function (e) {
      t && !Pt(e) && (t = !1);
    }), t;
  }
  function Dt(e, t) {
    if (e instanceof dt && t.indexOf(e.name) >= 0) return !1;
    var r = !0;
    return e.eachChild(function (e) {
      r && !Dt(e, t) && (r = !1);
    }), r;
  }
  var Ot = function Ot(e, t) {
    this.type = t.type, this.name = e, this.boundExpression = t;
  };
  Ot.parse = function (e, t) {
    if (2 !== e.length || "string" != typeof e[1]) return t.error("'var' expression requires exactly one string literal argument.");
    var r = e[1];
    return t.scope.has(r) ? new Ot(r, t.scope.get(r)) : t.error('Unknown variable "' + r + '". Make sure "' + r + '" has been bound in an enclosing "let" expression before using it.', 1);
  }, Ot.prototype.evaluate = function (e) {
    return this.boundExpression.evaluate(e);
  }, Ot.prototype.eachChild = function () {}, Ot.prototype.outputDefined = function () {
    return !1;
  }, Ot.prototype.serialize = function () {
    return ["var", this.name];
  };
  var Lt = Ot,
    Rt = function Rt(e, t, r, n, a) {
      void 0 === t && (t = []), void 0 === n && (n = new we()), void 0 === a && (a = []), this.registry = e, this.path = t, this.key = t.map(function (e) {
        return "[" + e + "]";
      }).join(""), this.scope = n, this.errors = a, this.expectedType = r;
    };
  Rt.prototype.parse = function (e, t, r, n, a) {
    return void 0 === a && (a = {}), t ? this.concat(t, r, n)._parse(e, a) : this._parse(e, a);
  }, Rt.prototype._parse = function (e, t) {
    function r(e, t, r) {
      return "assert" === r ? new tt(t, [e]) : "coerce" === r ? new ut(t, [e]) : e;
    }
    if (null !== e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e || (e = ["literal", e]), Array.isArray(e)) {
      if (0 === e.length) return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
      var n = e[0];
      if ("string" != typeof n) return this.error("Expression name must be a string, but found " + _typeof(n) + ' instead. If you wanted a literal array, use ["literal", [...]].', 0), null;
      var a = this.registry[n];
      if (a) {
        var i = a.parse(e, this);
        if (!i) return null;
        if (this.expectedType) {
          var o = this.expectedType,
            s = i.type;
          if ("string" !== o.kind && "number" !== o.kind && "boolean" !== o.kind && "object" !== o.kind && "array" !== o.kind || "value" !== s.kind) {
            if ("color" !== o.kind && "formatted" !== o.kind && "resolvedImage" !== o.kind || "value" !== s.kind && "string" !== s.kind) {
              if (this.checkSubtype(o, s)) return null;
            } else i = r(i, o, t.typeAnnotation || "coerce");
          } else i = r(i, o, t.typeAnnotation || "assert");
        }
        if (!(i instanceof He) && "resolvedImage" !== i.type.kind && Ut(i)) {
          var u = new ft();
          try {
            i = new He(i.type, i.evaluate(u));
          } catch (e) {
            return this.error(e.message), null;
          }
        }
        return i;
      }
      return this.error('Unknown expression "' + n + '". If you wanted a literal array, use ["literal", [...]].', 0);
    }
    return void 0 === e ? this.error("'undefined' value invalid. Use null instead.") : "object" == _typeof(e) ? this.error('Bare objects invalid. Use ["literal", {...}] instead.') : this.error("Expected an array, but found " + _typeof(e) + " instead.");
  }, Rt.prototype.concat = function (e, t, r) {
    var n = "number" == typeof e ? this.path.concat(e) : this.path,
      a = r ? this.scope.concat(r) : this.scope;
    return new Rt(this.registry, n, t || null, a, this.errors);
  }, Rt.prototype.error = function (e) {
    for (var t = [], r = arguments.length - 1; r-- > 0;) t[r] = arguments[r + 1];
    var n = "" + this.key + t.map(function (e) {
      return "[" + e + "]";
    }).join("");
    this.errors.push(new be(n, e));
  }, Rt.prototype.checkSubtype = function (e, t) {
    var r = Pe(e, t);
    return r && this.error(r), r;
  };
  var Nt = Rt;
  function Ut(e) {
    if (e instanceof Lt) return Ut(e.boundExpression);
    if (e instanceof dt && "error" === e.name) return !1;
    if (e instanceof mt) return !1;
    if (e instanceof It) return !1;
    var t = e instanceof ut || e instanceof tt,
      r = !0;
    return e.eachChild(function (e) {
      r = t ? r && Ut(e) : r && e instanceof He;
    }), !!r && Ft(e) && Dt(e, ["zoom", "heatmap-density", "line-progress", "sky-radial-progress", "accumulated", "is-supported-script", "pitch", "distance-from-center"]);
  }
  function Vt(e, t) {
    for (var r, n, a = e.length - 1, i = 0, o = a, s = 0; i <= o;) if (r = e[s = Math.floor((i + o) / 2)], n = e[s + 1], r <= t) {
      if (s === a || t < n) return s;
      i = s + 1;
    } else {
      if (!(r > t)) throw new Ke("Input is not a number.");
      o = s - 1;
    }
    return 0;
  }
  var Gt = function Gt(e, t, r) {
    this.type = e, this.input = t, this.labels = [], this.outputs = [];
    for (var n = 0, a = r; n < a.length; n += 1) {
      var i = a[n],
        o = i[0],
        s = i[1];
      this.labels.push(o), this.outputs.push(s);
    }
  };
  Gt.parse = function (e, t) {
    if (e.length - 1 < 4) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
    if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
    var r = t.parse(e[1], 1, ke);
    if (!r) return null;
    var n = [],
      a = null;
    t.expectedType && "value" !== t.expectedType.kind && (a = t.expectedType);
    for (var i = 1; i < e.length; i += 2) {
      var o = 1 === i ? -1 / 0 : e[i],
        s = e[i + 1],
        u = i,
        l = i + 1;
      if ("number" != typeof o) return t.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', u);
      if (n.length && n[n.length - 1][0] >= o) return t.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', u);
      var p = t.parse(s, l, a);
      if (!p) return null;
      a = a || p.type, n.push([o, p]);
    }
    return new Gt(a, r, n);
  }, Gt.prototype.evaluate = function (e) {
    var t = this.labels,
      r = this.outputs;
    if (1 === t.length) return r[0].evaluate(e);
    var n = this.input.evaluate(e);
    if (n <= t[0]) return r[0].evaluate(e);
    var a = t.length;
    return n >= t[a - 1] ? r[a - 1].evaluate(e) : r[Vt(t, n)].evaluate(e);
  }, Gt.prototype.eachChild = function (e) {
    e(this.input);
    for (var t = 0, r = this.outputs; t < r.length; t += 1) {
      e(r[t]);
    }
  }, Gt.prototype.outputDefined = function () {
    return this.outputs.every(function (e) {
      return e.outputDefined();
    });
  }, Gt.prototype.serialize = function () {
    for (var e = ["step", this.input.serialize()], t = 0; t < this.labels.length; t++) t > 0 && e.push(this.labels[t]), e.push(this.outputs[t].serialize());
    return e;
  };
  var Jt = Gt,
    Wt = Zt;
  function Zt(e, t, r, n) {
    this.cx = 3 * e, this.bx = 3 * (r - e) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * t, this.by = 3 * (n - t) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = e, this.p1y = n, this.p2x = r, this.p2y = n;
  }
  function $t(e, t, r) {
    return e * (1 - r) + t * r;
  }
  Zt.prototype.sampleCurveX = function (e) {
    return ((this.ax * e + this.bx) * e + this.cx) * e;
  }, Zt.prototype.sampleCurveY = function (e) {
    return ((this.ay * e + this.by) * e + this.cy) * e;
  }, Zt.prototype.sampleCurveDerivativeX = function (e) {
    return (3 * this.ax * e + 2 * this.bx) * e + this.cx;
  }, Zt.prototype.solveCurveX = function (e, t) {
    var r, n, a, i, o;
    for (void 0 === t && (t = 1e-6), a = e, o = 0; o < 8; o++) {
      if (i = this.sampleCurveX(a) - e, Math.abs(i) < t) return a;
      var s = this.sampleCurveDerivativeX(a);
      if (Math.abs(s) < 1e-6) break;
      a -= i / s;
    }
    if ((a = e) < (r = 0)) return r;
    if (a > (n = 1)) return n;
    for (; r < n;) {
      if (i = this.sampleCurveX(a), Math.abs(i - e) < t) return a;
      e > i ? r = a : n = a, a = .5 * (n - r) + r;
    }
    return a;
  }, Zt.prototype.solve = function (e, t) {
    return this.sampleCurveY(this.solveCurveX(e, t));
  };
  var Bt = Object.freeze({
      __proto__: null,
      number: $t,
      color: function color(e, t, r) {
        return new le($t(e.r, t.r, r), $t(e.g, t.g, r), $t(e.b, t.b, r), $t(e.a, t.a, r));
      },
      array: function array(e, t, r) {
        return e.map(function (e, n) {
          return $t(e, t[n], r);
        });
      }
    }),
    Xt = .95047,
    Ht = 1.08883,
    Yt = 4 / 29,
    Kt = 6 / 29,
    Qt = 3 * Kt * Kt,
    er = Math.PI / 180,
    tr = 180 / Math.PI;
  function rr(e) {
    return e > .008856451679035631 ? Math.pow(e, 1 / 3) : e / Qt + Yt;
  }
  function nr(e) {
    return e > Kt ? e * e * e : Qt * (e - Yt);
  }
  function ar(e) {
    return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055);
  }
  function ir(e) {
    return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
  }
  function or(e) {
    var t = ir(e.r),
      r = ir(e.g),
      n = ir(e.b),
      a = rr((.4124564 * t + .3575761 * r + .1804375 * n) / Xt),
      i = rr((.2126729 * t + .7151522 * r + .072175 * n) / 1);
    return {
      l: 116 * i - 16,
      a: 500 * (a - i),
      b: 200 * (i - rr((.0193339 * t + .119192 * r + .9503041 * n) / Ht)),
      alpha: e.a
    };
  }
  function sr(e) {
    var t = (e.l + 16) / 116,
      r = isNaN(e.a) ? t : t + e.a / 500,
      n = isNaN(e.b) ? t : t - e.b / 200;
    return t = 1 * nr(t), r = Xt * nr(r), n = Ht * nr(n), new le(ar(3.2404542 * r - 1.5371385 * t - .4985314 * n), ar(-.969266 * r + 1.8760108 * t + .041556 * n), ar(.0556434 * r - .2040259 * t + 1.0572252 * n), e.alpha);
  }
  function ur(e, t, r) {
    var n = t - e;
    return e + r * (n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n);
  }
  var lr = {
      forward: or,
      reverse: sr,
      interpolate: function interpolate(e, t, r) {
        return {
          l: $t(e.l, t.l, r),
          a: $t(e.a, t.a, r),
          b: $t(e.b, t.b, r),
          alpha: $t(e.alpha, t.alpha, r)
        };
      }
    },
    pr = {
      forward: function forward(e) {
        var t = or(e),
          r = t.l,
          n = t.a,
          a = t.b,
          i = Math.atan2(a, n) * tr;
        return {
          h: i < 0 ? i + 360 : i,
          c: Math.sqrt(n * n + a * a),
          l: r,
          alpha: e.a
        };
      },
      reverse: function reverse(e) {
        var t = e.h * er,
          r = e.c;
        return sr({
          l: e.l,
          a: Math.cos(t) * r,
          b: Math.sin(t) * r,
          alpha: e.alpha
        });
      },
      interpolate: function interpolate(e, t, r) {
        return {
          h: ur(e.h, t.h, r),
          c: $t(e.c, t.c, r),
          l: $t(e.l, t.l, r),
          alpha: $t(e.alpha, t.alpha, r)
        };
      }
    },
    fr = function fr(e, t, r, n, a) {
      this.type = e, this.operator = t, this.interpolation = r, this.input = n, this.labels = [], this.outputs = [];
      for (var i = 0, o = a; i < o.length; i += 1) {
        var s = o[i],
          u = s[0],
          l = s[1];
        this.labels.push(u), this.outputs.push(l);
      }
    };
  function cr(e, t, r, n) {
    var a = n - r,
      i = e - r;
    return 0 === a ? 0 : 1 === t ? i / a : (Math.pow(t, i) - 1) / (Math.pow(t, a) - 1);
  }
  fr.interpolationFactor = function (e, t, r, n) {
    var a = 0;
    if ("exponential" === e.name) a = cr(t, e.base, r, n);else if ("linear" === e.name) a = cr(t, 1, r, n);else if ("cubic-bezier" === e.name) {
      var i = e.controlPoints;
      a = new Wt(i[0], i[1], i[2], i[3]).solve(cr(t, 1, r, n));
    }
    return a;
  }, fr.parse = function (e, t) {
    var r = e[0],
      n = e[1],
      a = e[2],
      i = e.slice(3);
    if (!Array.isArray(n) || 0 === n.length) return t.error("Expected an interpolation type expression.", 1);
    if ("linear" === n[0]) n = {
      name: "linear"
    };else if ("exponential" === n[0]) {
      var o = n[1];
      if ("number" != typeof o) return t.error("Exponential interpolation requires a numeric base.", 1, 1);
      n = {
        name: "exponential",
        base: o
      };
    } else {
      if ("cubic-bezier" !== n[0]) return t.error("Unknown interpolation type " + String(n[0]), 1, 0);
      var s = n.slice(1);
      if (4 !== s.length || s.some(function (e) {
        return "number" != typeof e || e < 0 || e > 1;
      })) return t.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
      n = {
        name: "cubic-bezier",
        controlPoints: s
      };
    }
    if (e.length - 1 < 4) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
    if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
    if (!(a = t.parse(a, 2, ke))) return null;
    var u = [],
      l = null;
    "interpolate-hcl" === r || "interpolate-lab" === r ? l = je : t.expectedType && "value" !== t.expectedType.kind && (l = t.expectedType);
    for (var p = 0; p < i.length; p += 2) {
      var f = i[p],
        c = i[p + 1],
        d = p + 3,
        y = p + 4;
      if ("number" != typeof f) return t.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', d);
      if (u.length && u[u.length - 1][0] >= f) return t.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', d);
      var m = t.parse(c, y, l);
      if (!m) return null;
      l = l || m.type, u.push([f, m]);
    }
    return "number" === l.kind || "color" === l.kind || "array" === l.kind && "number" === l.itemType.kind && "number" == typeof l.N ? new fr(l, r, n, a, u) : t.error("Type " + Ie(l) + " is not interpolatable.");
  }, fr.prototype.evaluate = function (e) {
    var t = this.labels,
      r = this.outputs;
    if (1 === t.length) return r[0].evaluate(e);
    var n = this.input.evaluate(e);
    if (n <= t[0]) return r[0].evaluate(e);
    var a = t.length;
    if (n >= t[a - 1]) return r[a - 1].evaluate(e);
    var i = Vt(t, n),
      o = t[i],
      s = t[i + 1],
      u = fr.interpolationFactor(this.interpolation, n, o, s),
      l = r[i].evaluate(e),
      p = r[i + 1].evaluate(e);
    return "interpolate" === this.operator ? Bt[this.type.kind.toLowerCase()](l, p, u) : "interpolate-hcl" === this.operator ? pr.reverse(pr.interpolate(pr.forward(l), pr.forward(p), u)) : lr.reverse(lr.interpolate(lr.forward(l), lr.forward(p), u));
  }, fr.prototype.eachChild = function (e) {
    e(this.input);
    for (var t = 0, r = this.outputs; t < r.length; t += 1) {
      e(r[t]);
    }
  }, fr.prototype.outputDefined = function () {
    return this.outputs.every(function (e) {
      return e.outputDefined();
    });
  }, fr.prototype.serialize = function () {
    var e;
    e = "linear" === this.interpolation.name ? ["linear"] : "exponential" === this.interpolation.name ? 1 === this.interpolation.base ? ["linear"] : ["exponential", this.interpolation.base] : ["cubic-bezier"].concat(this.interpolation.controlPoints);
    for (var t = [this.operator, e, this.input.serialize()], r = 0; r < this.labels.length; r++) t.push(this.labels[r], this.outputs[r].serialize());
    return t;
  };
  var dr = fr,
    yr = function yr(e, t) {
      this.type = e, this.args = t;
    };
  yr.parse = function (e, t) {
    if (e.length < 2) return t.error("Expectected at least one argument.");
    var r = null,
      n = t.expectedType;
    n && "value" !== n.kind && (r = n);
    for (var a = [], i = 0, o = e.slice(1); i < o.length; i += 1) {
      var s = o[i],
        u = t.parse(s, 1 + a.length, r, void 0, {
          typeAnnotation: "omit"
        });
      if (!u) return null;
      r = r || u.type, a.push(u);
    }
    var l = n && a.some(function (e) {
      return Pe(n, e.type);
    });
    return new yr(l ? Te : r, a);
  }, yr.prototype.evaluate = function (e) {
    for (var t, r = null, n = 0, a = 0, i = this.args; a < i.length; a += 1) {
      if (n++, (r = i[a].evaluate(e)) && r instanceof Je && !r.available && (t || (t = r), r = null, n === this.args.length)) return t;
      if (null !== r) break;
    }
    return r;
  }, yr.prototype.eachChild = function (e) {
    this.args.forEach(e);
  }, yr.prototype.outputDefined = function () {
    return this.args.every(function (e) {
      return e.outputDefined();
    });
  }, yr.prototype.serialize = function () {
    var e = ["coalesce"];
    return this.eachChild(function (t) {
      e.push(t.serialize());
    }), e;
  };
  var mr = yr,
    hr = function hr(e, t) {
      this.type = t.type, this.bindings = [].concat(e), this.result = t;
    };
  hr.prototype.evaluate = function (e) {
    return this.result.evaluate(e);
  }, hr.prototype.eachChild = function (e) {
    for (var t = 0, r = this.bindings; t < r.length; t += 1) {
      e(r[t][1]);
    }
    e(this.result);
  }, hr.parse = function (e, t) {
    if (e.length < 4) return t.error("Expected at least 3 arguments, but found " + (e.length - 1) + " instead.");
    for (var r = [], n = 1; n < e.length - 1; n += 2) {
      var a = e[n];
      if ("string" != typeof a) return t.error("Expected string, but found " + _typeof(a) + " instead.", n);
      if (/[^a-zA-Z0-9_]/.test(a)) return t.error("Variable names must contain only alphanumeric characters or '_'.", n);
      var i = t.parse(e[n + 1], n + 1);
      if (!i) return null;
      r.push([a, i]);
    }
    var o = t.parse(e[e.length - 1], e.length - 1, t.expectedType, r);
    return o ? new hr(r, o) : null;
  }, hr.prototype.outputDefined = function () {
    return this.result.outputDefined();
  }, hr.prototype.serialize = function () {
    for (var e = ["let"], t = 0, r = this.bindings; t < r.length; t += 1) {
      var n = r[t],
        a = n[0],
        i = n[1];
      e.push(a, i.serialize());
    }
    return e.push(this.result.serialize()), e;
  };
  var vr = hr,
    gr = function gr(e, t, r) {
      this.type = e, this.index = t, this.input = r;
    };
  gr.parse = function (e, t) {
    if (3 !== e.length) return t.error("Expected 2 arguments, but found " + (e.length - 1) + " instead.");
    var r = t.parse(e[1], 1, ke),
      n = t.parse(e[2], 2, Ae(t.expectedType || Te));
    if (!r || !n) return null;
    var a = n.type;
    return new gr(a.itemType, r, n);
  }, gr.prototype.evaluate = function (e) {
    var t = this.index.evaluate(e),
      r = this.input.evaluate(e);
    if (t < 0) throw new Ke("Array index out of bounds: " + t + " < 0.");
    if (t >= r.length) throw new Ke("Array index out of bounds: " + t + " > " + (r.length - 1) + ".");
    if (t !== Math.floor(t)) throw new Ke("Array index must be an integer, but found " + t + " instead.");
    return r[t];
  }, gr.prototype.eachChild = function (e) {
    e(this.index), e(this.input);
  }, gr.prototype.outputDefined = function () {
    return !1;
  }, gr.prototype.serialize = function () {
    return ["at", this.index.serialize(), this.input.serialize()];
  };
  var br = gr,
    xr = function xr(e, t) {
      this.type = Se, this.needle = e, this.haystack = t;
    };
  xr.parse = function (e, t) {
    if (3 !== e.length) return t.error("Expected 2 arguments, but found " + (e.length - 1) + " instead.");
    var r = t.parse(e[1], 1, Te),
      n = t.parse(e[2], 2, Te);
    return r && n ? De(r.type, [Se, Me, ke, ze, Te]) ? new xr(r, n) : t.error("Expected first argument to be of type boolean, string, number or null, but found " + Ie(r.type) + " instead") : null;
  }, xr.prototype.evaluate = function (e) {
    var t = this.needle.evaluate(e),
      r = this.haystack.evaluate(e);
    if (null == r) return !1;
    if (!Oe(t, ["boolean", "string", "number", "null"])) throw new Ke("Expected first argument to be of type boolean, string, number or null, but found " + Ie($e(t)) + " instead.");
    if (!Oe(r, ["string", "array"])) throw new Ke("Expected second argument to be of type array or string, but found " + Ie($e(r)) + " instead.");
    return r.indexOf(t) >= 0;
  }, xr.prototype.eachChild = function (e) {
    e(this.needle), e(this.haystack);
  }, xr.prototype.outputDefined = function () {
    return !0;
  }, xr.prototype.serialize = function () {
    return ["in", this.needle.serialize(), this.haystack.serialize()];
  };
  var wr = xr,
    zr = function zr(e, t, r) {
      this.type = ke, this.needle = e, this.haystack = t, this.fromIndex = r;
    };
  zr.parse = function (e, t) {
    if (e.length <= 2 || e.length >= 5) return t.error("Expected 3 or 4 arguments, but found " + (e.length - 1) + " instead.");
    var r = t.parse(e[1], 1, Te),
      n = t.parse(e[2], 2, Te);
    if (!r || !n) return null;
    if (!De(r.type, [Se, Me, ke, ze, Te])) return t.error("Expected first argument to be of type boolean, string, number or null, but found " + Ie(r.type) + " instead");
    if (4 === e.length) {
      var a = t.parse(e[3], 3, ke);
      return a ? new zr(r, n, a) : null;
    }
    return new zr(r, n);
  }, zr.prototype.evaluate = function (e) {
    var t = this.needle.evaluate(e),
      r = this.haystack.evaluate(e);
    if (!Oe(t, ["boolean", "string", "number", "null"])) throw new Ke("Expected first argument to be of type boolean, string, number or null, but found " + Ie($e(t)) + " instead.");
    if (!Oe(r, ["string", "array"])) throw new Ke("Expected second argument to be of type array or string, but found " + Ie($e(r)) + " instead.");
    if (this.fromIndex) {
      var n = this.fromIndex.evaluate(e);
      return r.indexOf(t, n);
    }
    return r.indexOf(t);
  }, zr.prototype.eachChild = function (e) {
    e(this.needle), e(this.haystack), this.fromIndex && e(this.fromIndex);
  }, zr.prototype.outputDefined = function () {
    return !1;
  }, zr.prototype.serialize = function () {
    if (null != this.fromIndex && void 0 !== this.fromIndex) {
      var e = this.fromIndex.serialize();
      return ["index-of", this.needle.serialize(), this.haystack.serialize(), e];
    }
    return ["index-of", this.needle.serialize(), this.haystack.serialize()];
  };
  var kr = zr,
    Mr = function Mr(e, t, r, n, a, i) {
      this.inputType = e, this.type = t, this.input = r, this.cases = n, this.outputs = a, this.otherwise = i;
    };
  Mr.parse = function (e, t) {
    if (e.length < 5) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
    if (e.length % 2 != 1) return t.error("Expected an even number of arguments.");
    var r, n;
    t.expectedType && "value" !== t.expectedType.kind && (n = t.expectedType);
    for (var a = {}, i = [], o = 2; o < e.length - 1; o += 2) {
      var s = e[o],
        u = e[o + 1];
      Array.isArray(s) || (s = [s]);
      var l = t.concat(o);
      if (0 === s.length) return l.error("Expected at least one branch label.");
      for (var p = 0, f = s; p < f.length; p += 1) {
        var c = f[p];
        if ("number" != typeof c && "string" != typeof c) return l.error("Branch labels must be numbers or strings.");
        if ("number" == typeof c && Math.abs(c) > Number.MAX_SAFE_INTEGER) return l.error("Branch labels must be integers no larger than " + Number.MAX_SAFE_INTEGER + ".");
        if ("number" == typeof c && Math.floor(c) !== c) return l.error("Numeric branch labels must be integer values.");
        if (r) {
          if (l.checkSubtype(r, $e(c))) return null;
        } else r = $e(c);
        if (void 0 !== a[String(c)]) return l.error("Branch labels must be unique.");
        a[String(c)] = i.length;
      }
      var d = t.parse(u, o, n);
      if (!d) return null;
      n = n || d.type, i.push(d);
    }
    var y = t.parse(e[1], 1, Te);
    if (!y) return null;
    var m = t.parse(e[e.length - 1], e.length - 1, n);
    return m ? "value" !== y.type.kind && t.concat(1).checkSubtype(r, y.type) ? null : new Mr(r, n, y, a, i, m) : null;
  }, Mr.prototype.evaluate = function (e) {
    var t = this.input.evaluate(e);
    return ($e(t) === this.inputType && this.outputs[this.cases[t]] || this.otherwise).evaluate(e);
  }, Mr.prototype.eachChild = function (e) {
    e(this.input), this.outputs.forEach(e), e(this.otherwise);
  }, Mr.prototype.outputDefined = function () {
    return this.outputs.every(function (e) {
      return e.outputDefined();
    }) && this.otherwise.outputDefined();
  }, Mr.prototype.serialize = function () {
    for (var e = this, t = ["match", this.input.serialize()], r = [], n = {}, a = 0, i = Object.keys(this.cases).sort(); a < i.length; a += 1) {
      var o = i[a];
      void 0 === (f = n[this.cases[o]]) ? (n[this.cases[o]] = r.length, r.push([this.cases[o], [o]])) : r[f][1].push(o);
    }
    for (var s = function s(t) {
        return "number" === e.inputType.kind ? Number(t) : t;
      }, u = 0, l = r; u < l.length; u += 1) {
      var p = l[u],
        f = p[0],
        c = p[1];
      1 === c.length ? t.push(s(c[0])) : t.push(c.map(s)), t.push(this.outputs[outputIndex$1].serialize());
    }
    return t.push(this.otherwise.serialize()), t;
  };
  var Sr = Mr,
    jr = function jr(e, t, r) {
      this.type = e, this.branches = t, this.otherwise = r;
    };
  jr.parse = function (e, t) {
    if (e.length < 4) return t.error("Expected at least 3 arguments, but found only " + (e.length - 1) + ".");
    if (e.length % 2 != 0) return t.error("Expected an odd number of arguments.");
    var r;
    t.expectedType && "value" !== t.expectedType.kind && (r = t.expectedType);
    for (var n = [], a = 1; a < e.length - 1; a += 2) {
      var i = t.parse(e[a], a, Se);
      if (!i) return null;
      var o = t.parse(e[a + 1], a + 1, r);
      if (!o) return null;
      n.push([i, o]), r = r || o.type;
    }
    var s = t.parse(e[e.length - 1], e.length - 1, r);
    return s ? new jr(r, n, s) : null;
  }, jr.prototype.evaluate = function (e) {
    for (var t = 0, r = this.branches; t < r.length; t += 1) {
      var n = r[t],
        a = n[0],
        i = n[1];
      if (a.evaluate(e)) return i.evaluate(e);
    }
    return this.otherwise.evaluate(e);
  }, jr.prototype.eachChild = function (e) {
    for (var t = 0, r = this.branches; t < r.length; t += 1) {
      var n = r[t],
        a = n[0],
        i = n[1];
      e(a), e(i);
    }
    e(this.otherwise);
  }, jr.prototype.outputDefined = function () {
    return this.branches.every(function (e) {
      return e[0], e[1].outputDefined();
    }) && this.otherwise.outputDefined();
  }, jr.prototype.serialize = function () {
    var e = ["case"];
    return this.eachChild(function (t) {
      e.push(t.serialize());
    }), e;
  };
  var qr = jr,
    Tr = function Tr(e, t, r, n) {
      this.type = e, this.input = t, this.beginIndex = r, this.endIndex = n;
    };
  Tr.parse = function (e, t) {
    if (e.length <= 2 || e.length >= 5) return t.error("Expected 3 or 4 arguments, but found " + (e.length - 1) + " instead.");
    var r = t.parse(e[1], 1, Te),
      n = t.parse(e[2], 2, ke);
    if (!r || !n) return null;
    if (!De(r.type, [Ae(Te), Me, Te])) return t.error("Expected first argument to be of type array or string, but found " + Ie(r.type) + " instead");
    if (4 === e.length) {
      var a = t.parse(e[3], 3, ke);
      return a ? new Tr(r.type, r, n, a) : null;
    }
    return new Tr(r.type, r, n);
  }, Tr.prototype.evaluate = function (e) {
    var t = this.input.evaluate(e),
      r = this.beginIndex.evaluate(e);
    if (!Oe(t, ["string", "array"])) throw new Ke("Expected first argument to be of type array or string, but found " + Ie($e(t)) + " instead.");
    if (this.endIndex) {
      var n = this.endIndex.evaluate(e);
      return t.slice(r, n);
    }
    return t.slice(r);
  }, Tr.prototype.eachChild = function (e) {
    e(this.input), e(this.beginIndex), this.endIndex && e(this.endIndex);
  }, Tr.prototype.outputDefined = function () {
    return !1;
  }, Tr.prototype.serialize = function () {
    if (null != this.endIndex && void 0 !== this.endIndex) {
      var e = this.endIndex.serialize();
      return ["slice", this.input.serialize(), this.beginIndex.serialize(), e];
    }
    return ["slice", this.input.serialize(), this.beginIndex.serialize()];
  };
  var _r = Tr;
  function Er(e, t) {
    return "==" === e || "!=" === e ? "boolean" === t.kind || "string" === t.kind || "number" === t.kind || "null" === t.kind || "value" === t.kind : "string" === t.kind || "number" === t.kind || "value" === t.kind;
  }
  function Cr(e, t, r, n) {
    return 0 === n.compare(t, r);
  }
  function Ar(e, t, r) {
    var n = "==" !== e && "!=" !== e;
    return function () {
      function a(e, t, r) {
        this.type = Se, this.lhs = e, this.rhs = t, this.collator = r, this.hasUntypedArgument = "value" === e.type.kind || "value" === t.type.kind;
      }
      return a.parse = function (e, t) {
        if (3 !== e.length && 4 !== e.length) return t.error("Expected two or three arguments.");
        var r = e[0],
          i = t.parse(e[1], 1, Te);
        if (!i) return null;
        if (!Er(r, i.type)) return t.concat(1).error('"' + r + "\" comparisons are not supported for type '" + Ie(i.type) + "'.");
        var o = t.parse(e[2], 2, Te);
        if (!o) return null;
        if (!Er(r, o.type)) return t.concat(2).error('"' + r + "\" comparisons are not supported for type '" + Ie(o.type) + "'.");
        if (i.type.kind !== o.type.kind && "value" !== i.type.kind && "value" !== o.type.kind) return t.error("Cannot compare types '" + Ie(i.type) + "' and '" + Ie(o.type) + "'.");
        n && ("value" === i.type.kind && "value" !== o.type.kind ? i = new tt(o.type, [i]) : "value" !== i.type.kind && "value" === o.type.kind && (o = new tt(i.type, [o])));
        var s = null;
        if (4 === e.length) {
          if ("string" !== i.type.kind && "string" !== o.type.kind && "value" !== i.type.kind && "value" !== o.type.kind) return t.error("Cannot use collator to compare non-string types.");
          if (!(s = t.parse(e[3], 3, _e))) return null;
        }
        return new a(i, o, s);
      }, a.prototype.evaluate = function (a) {
        var i = this.lhs.evaluate(a),
          o = this.rhs.evaluate(a);
        if (n && this.hasUntypedArgument) {
          var s = $e(i),
            u = $e(o);
          if (s.kind !== u.kind || "string" !== s.kind && "number" !== s.kind) throw new Ke('Expected arguments for "' + e + '" to be (string, string) or (number, number), but found (' + s.kind + ", " + u.kind + ") instead.");
        }
        if (this.collator && !n && this.hasUntypedArgument) {
          var l = $e(i),
            p = $e(o);
          if ("string" !== l.kind || "string" !== p.kind) return t(a, i, o);
        }
        return this.collator ? r(a, i, o, this.collator.evaluate(a)) : t(a, i, o);
      }, a.prototype.eachChild = function (e) {
        e(this.lhs), e(this.rhs), this.collator && e(this.collator);
      }, a.prototype.outputDefined = function () {
        return !0;
      }, a.prototype.serialize = function () {
        var t = [e];
        return this.eachChild(function (e) {
          t.push(e.serialize());
        }), t;
      }, a;
    }();
  }
  var Ir = Ar("==", function (e, t, r) {
      return t === r;
    }, Cr),
    Fr = Ar("!=", function (e, t, r) {
      return t !== r;
    }, function (e, t, r, n) {
      return !Cr(0, t, r, n);
    }),
    Pr = Ar("<", function (e, t, r) {
      return t < r;
    }, function (e, t, r, n) {
      return n.compare(t, r) < 0;
    }),
    Dr = Ar(">", function (e, t, r) {
      return t > r;
    }, function (e, t, r, n) {
      return n.compare(t, r) > 0;
    }),
    Or = Ar("<=", function (e, t, r) {
      return t <= r;
    }, function (e, t, r, n) {
      return n.compare(t, r) <= 0;
    }),
    Lr = Ar(">=", function (e, t, r) {
      return t >= r;
    }, function (e, t, r, n) {
      return n.compare(t, r) >= 0;
    }),
    Rr = function Rr(e, t, r, n, a, i) {
      this.type = Me, this.number = e, this.locale = t, this.currency = r, this.unit = n, this.minFractionDigits = a, this.maxFractionDigits = i;
    };
  Rr.parse = function (e, t) {
    if (3 !== e.length) return t.error("Expected two arguments.");
    var r = t.parse(e[1], 1, ke);
    if (!r) return null;
    var n = e[2];
    if ("object" != _typeof(n) || Array.isArray(n)) return t.error("NumberFormat options argument must be an object.");
    var a = null;
    if (n.locale && !(a = t.parse(n.locale, 1, Me))) return null;
    var i = null;
    if (n.currency && !(i = t.parse(n.currency, 1, Me))) return null;
    var o = null;
    if (n.unit && !(o = t.parse(n.unit, 1, Me))) return null;
    var s = null;
    if (n["min-fraction-digits"] && !(s = t.parse(n["min-fraction-digits"], 1, ke))) return null;
    var u = null;
    return n["max-fraction-digits"] && !(u = t.parse(n["max-fraction-digits"], 1, ke)) ? null : new Rr(r, a, i, o, s, u);
  }, Rr.prototype.evaluate = function (e) {
    return new Intl.NumberFormat(this.locale ? this.locale.evaluate(e) : [], {
      style: (this.currency ? "currency" : this.unit && "unit") || "decimal",
      currency: this.currency ? this.currency.evaluate(e) : void 0,
      unit: this.unit ? this.unit.evaluate(e) : void 0,
      minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(e) : void 0,
      maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(e) : void 0
    }).format(this.number.evaluate(e));
  }, Rr.prototype.eachChild = function (e) {
    e(this.number), this.locale && e(this.locale), this.currency && e(this.currency), this.unit && e(this.unit), this.minFractionDigits && e(this.minFractionDigits), this.maxFractionDigits && e(this.maxFractionDigits);
  }, Rr.prototype.outputDefined = function () {
    return !1;
  }, Rr.prototype.serialize = function () {
    var e = {};
    return this.locale && (e.locale = this.locale.serialize()), this.currency && (e.currency = this.currency.serialize()), this.unit && (e.unit = this.unit.serialize()), this.minFractionDigits && (e["min-fraction-digits"] = this.minFractionDigits.serialize()), this.maxFractionDigits && (e["max-fraction-digits"] = this.maxFractionDigits.serialize()), ["number-format", this.number.serialize(), e];
  };
  var Nr = Rr,
    Ur = function Ur(e) {
      this.type = ke, this.input = e;
    };
  Ur.parse = function (e, t) {
    if (2 !== e.length) return t.error("Expected 1 argument, but found " + (e.length - 1) + " instead.");
    var r = t.parse(e[1], 1);
    return r ? "array" !== r.type.kind && "string" !== r.type.kind && "value" !== r.type.kind ? t.error("Expected argument of type string or array, but found " + Ie(r.type) + " instead.") : new Ur(r) : null;
  }, Ur.prototype.evaluate = function (e) {
    var t = this.input.evaluate(e);
    if ("string" == typeof t) return t.length;
    if (Array.isArray(t)) return t.length;
    throw new Ke("Expected value to be of type string or array, but found " + Ie($e(t)) + " instead.");
  }, Ur.prototype.eachChild = function (e) {
    e(this.input);
  }, Ur.prototype.outputDefined = function () {
    return !1;
  }, Ur.prototype.serialize = function () {
    var e = ["length"];
    return this.eachChild(function (t) {
      e.push(t.serialize());
    }), e;
  };
  var Vr = {
    "==": Ir,
    "!=": Fr,
    ">": Dr,
    "<": Pr,
    ">=": Lr,
    "<=": Or,
    array: tt,
    at: br,
    "boolean": tt,
    "case": qr,
    coalesce: mr,
    collator: mt,
    format: nt,
    image: it,
    "in": wr,
    "index-of": kr,
    interpolate: dr,
    "interpolate-hcl": dr,
    "interpolate-lab": dr,
    length: Ur,
    "let": vr,
    literal: He,
    match: Sr,
    number: tt,
    "number-format": Nr,
    object: tt,
    slice: _r,
    step: Jt,
    string: tt,
    "to-boolean": ut,
    "to-color": ut,
    "to-number": ut,
    "to-string": ut,
    "var": Lt,
    within: It
  };
  function Gr(e, t) {
    var r = t[0],
      n = t[1],
      a = t[2],
      i = t[3];
    r = r.evaluate(e), n = n.evaluate(e), a = a.evaluate(e);
    var o = i ? i.evaluate(e) : 1,
      s = We(r, n, a, o);
    if (s) throw new Ke(s);
    return new le(r / 255 * o, n / 255 * o, a / 255 * o, o);
  }
  function Jr(e, t) {
    return e in t;
  }
  function Wr(e, t) {
    var r = t[e];
    return void 0 === r ? null : r;
  }
  function Zr(e) {
    return {
      type: e
    };
  }
  dt.register(Vr, {
    error: [{
      kind: "error"
    }, [Me], function (e, t) {
      var r = t[0];
      throw new Ke(r.evaluate(e));
    }],
    "typeof": [Me, [Te], function (e, t) {
      return Ie($e(t[0].evaluate(e)));
    }],
    "to-rgba": [Ae(ke, 4), [je], function (e, t) {
      return t[0].evaluate(e).toArray();
    }],
    rgb: [je, [ke, ke, ke], Gr],
    rgba: [je, [ke, ke, ke, ke], Gr],
    has: {
      type: Se,
      overloads: [[[Me], function (e, t) {
        return Jr(t[0].evaluate(e), e.properties());
      }], [[Me, qe], function (e, t) {
        var r = t[0],
          n = t[1];
        return Jr(r.evaluate(e), n.evaluate(e));
      }]]
    },
    get: {
      type: Te,
      overloads: [[[Me], function (e, t) {
        return Wr(t[0].evaluate(e), e.properties());
      }], [[Me, qe], function (e, t) {
        var r = t[0],
          n = t[1];
        return Wr(r.evaluate(e), n.evaluate(e));
      }]]
    },
    "feature-state": [Te, [Me], function (e, t) {
      return Wr(t[0].evaluate(e), e.featureState || {});
    }],
    properties: [qe, [], function (e) {
      return e.properties();
    }],
    "geometry-type": [Me, [], function (e) {
      return e.geometryType();
    }],
    id: [Te, [], function (e) {
      return e.id();
    }],
    zoom: [ke, [], function (e) {
      return e.globals.zoom;
    }],
    pitch: [ke, [], function (e) {
      return e.globals.pitch || 0;
    }],
    "distance-from-center": [ke, [], function (e) {
      return e.distanceFromCenter();
    }],
    "heatmap-density": [ke, [], function (e) {
      return e.globals.heatmapDensity || 0;
    }],
    "line-progress": [ke, [], function (e) {
      return e.globals.lineProgress || 0;
    }],
    "sky-radial-progress": [ke, [], function (e) {
      return e.globals.skyRadialProgress || 0;
    }],
    accumulated: [Te, [], function (e) {
      return void 0 === e.globals.accumulated ? null : e.globals.accumulated;
    }],
    "+": [ke, Zr(ke), function (e, t) {
      for (var r = 0, n = 0, a = t; n < a.length; n += 1) {
        r += a[n].evaluate(e);
      }
      return r;
    }],
    "*": [ke, Zr(ke), function (e, t) {
      for (var r = 1, n = 0, a = t; n < a.length; n += 1) {
        r *= a[n].evaluate(e);
      }
      return r;
    }],
    "-": {
      type: ke,
      overloads: [[[ke, ke], function (e, t) {
        var r = t[0],
          n = t[1];
        return r.evaluate(e) - n.evaluate(e);
      }], [[ke], function (e, t) {
        return -t[0].evaluate(e);
      }]]
    },
    "/": [ke, [ke, ke], function (e, t) {
      var r = t[0],
        n = t[1];
      return r.evaluate(e) / n.evaluate(e);
    }],
    "%": [ke, [ke, ke], function (e, t) {
      var r = t[0],
        n = t[1];
      return r.evaluate(e) % n.evaluate(e);
    }],
    ln2: [ke, [], function () {
      return Math.LN2;
    }],
    pi: [ke, [], function () {
      return Math.PI;
    }],
    e: [ke, [], function () {
      return Math.E;
    }],
    "^": [ke, [ke, ke], function (e, t) {
      var r = t[0],
        n = t[1];
      return Math.pow(r.evaluate(e), n.evaluate(e));
    }],
    sqrt: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.sqrt(r.evaluate(e));
    }],
    log10: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.log(r.evaluate(e)) / Math.LN10;
    }],
    ln: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.log(r.evaluate(e));
    }],
    log2: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.log(r.evaluate(e)) / Math.LN2;
    }],
    sin: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.sin(r.evaluate(e));
    }],
    cos: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.cos(r.evaluate(e));
    }],
    tan: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.tan(r.evaluate(e));
    }],
    asin: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.asin(r.evaluate(e));
    }],
    acos: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.acos(r.evaluate(e));
    }],
    atan: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.atan(r.evaluate(e));
    }],
    min: [ke, Zr(ke), function (e, t) {
      return Math.min.apply(Math, t.map(function (t) {
        return t.evaluate(e);
      }));
    }],
    max: [ke, Zr(ke), function (e, t) {
      return Math.max.apply(Math, t.map(function (t) {
        return t.evaluate(e);
      }));
    }],
    abs: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.abs(r.evaluate(e));
    }],
    round: [ke, [ke], function (e, t) {
      var r = t[0].evaluate(e);
      return r < 0 ? -Math.round(-r) : Math.round(r);
    }],
    floor: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.floor(r.evaluate(e));
    }],
    ceil: [ke, [ke], function (e, t) {
      var r = t[0];
      return Math.ceil(r.evaluate(e));
    }],
    "filter-==": [Se, [Me, Te], function (e, t) {
      var r = t[0],
        n = t[1];
      return e.properties()[r.value] === n.value;
    }],
    "filter-id-==": [Se, [Te], function (e, t) {
      var r = t[0];
      return e.id() === r.value;
    }],
    "filter-type-==": [Se, [Me], function (e, t) {
      var r = t[0];
      return e.geometryType() === r.value;
    }],
    "filter-<": [Se, [Me, Te], function (e, t) {
      var r = t[0],
        n = t[1],
        a = e.properties()[r.value],
        i = n.value;
      return _typeof(a) == _typeof(i) && a < i;
    }],
    "filter-id-<": [Se, [Te], function (e, t) {
      var r = t[0],
        n = e.id(),
        a = r.value;
      return _typeof(n) == _typeof(a) && n < a;
    }],
    "filter->": [Se, [Me, Te], function (e, t) {
      var r = t[0],
        n = t[1],
        a = e.properties()[r.value],
        i = n.value;
      return _typeof(a) == _typeof(i) && a > i;
    }],
    "filter-id->": [Se, [Te], function (e, t) {
      var r = t[0],
        n = e.id(),
        a = r.value;
      return _typeof(n) == _typeof(a) && n > a;
    }],
    "filter-<=": [Se, [Me, Te], function (e, t) {
      var r = t[0],
        n = t[1],
        a = e.properties()[r.value],
        i = n.value;
      return _typeof(a) == _typeof(i) && a <= i;
    }],
    "filter-id-<=": [Se, [Te], function (e, t) {
      var r = t[0],
        n = e.id(),
        a = r.value;
      return _typeof(n) == _typeof(a) && n <= a;
    }],
    "filter->=": [Se, [Me, Te], function (e, t) {
      var r = t[0],
        n = t[1],
        a = e.properties()[r.value],
        i = n.value;
      return _typeof(a) == _typeof(i) && a >= i;
    }],
    "filter-id->=": [Se, [Te], function (e, t) {
      var r = t[0],
        n = e.id(),
        a = r.value;
      return _typeof(n) == _typeof(a) && n >= a;
    }],
    "filter-has": [Se, [Te], function (e, t) {
      return t[0].value in e.properties();
    }],
    "filter-has-id": [Se, [], function (e) {
      return null !== e.id() && void 0 !== e.id();
    }],
    "filter-type-in": [Se, [Ae(Me)], function (e, t) {
      return t[0].value.indexOf(e.geometryType()) >= 0;
    }],
    "filter-id-in": [Se, [Ae(Te)], function (e, t) {
      return t[0].value.indexOf(e.id()) >= 0;
    }],
    "filter-in-small": [Se, [Me, Ae(Te)], function (e, t) {
      var r = t[0];
      return t[1].value.indexOf(e.properties()[r.value]) >= 0;
    }],
    "filter-in-large": [Se, [Me, Ae(Te)], function (e, t) {
      var r = t[0],
        n = t[1];
      return function (e, t, r, n) {
        for (; r <= n;) {
          var a = r + n >> 1;
          if (t[a] === e) return !0;
          t[a] > e ? n = a - 1 : r = a + 1;
        }
        return !1;
      }(e.properties()[r.value], n.value, 0, n.value.length - 1);
    }],
    all: {
      type: Se,
      overloads: [[[Se, Se], function (e, t) {
        var r = t[0],
          n = t[1];
        return r.evaluate(e) && n.evaluate(e);
      }], [Zr(Se), function (e, t) {
        for (var r = 0, n = t; r < n.length; r += 1) {
          if (!n[r].evaluate(e)) return !1;
        }
        return !0;
      }]]
    },
    any: {
      type: Se,
      overloads: [[[Se, Se], function (e, t) {
        var r = t[0],
          n = t[1];
        return r.evaluate(e) || n.evaluate(e);
      }], [Zr(Se), function (e, t) {
        for (var r = 0, n = t; r < n.length; r += 1) {
          if (n[r].evaluate(e)) return !0;
        }
        return !1;
      }]]
    },
    "!": [Se, [Se], function (e, t) {
      return !t[0].evaluate(e);
    }],
    "is-supported-script": [Se, [Me], function (e, t) {
      var r = t[0],
        n = e.globals && e.globals.isSupportedScript;
      return !n || n(r.evaluate(e));
    }],
    upcase: [Me, [Me], function (e, t) {
      return t[0].evaluate(e).toUpperCase();
    }],
    downcase: [Me, [Me], function (e, t) {
      return t[0].evaluate(e).toLowerCase();
    }],
    concat: [Me, Zr(Te), function (e, t) {
      return t.map(function (t) {
        return Be(t.evaluate(e));
      }).join("");
    }],
    "resolved-locale": [Me, [_e], function (e, t) {
      return t[0].evaluate(e).resolvedLocale();
    }]
  });
  var $r = Vr;
  function Br(e) {
    return {
      result: "success",
      value: e
    };
  }
  function Xr(e) {
    return {
      result: "error",
      value: e
    };
  }
  function Hr(e) {
    return "object" == _typeof(e) && null !== e && !Array.isArray(e);
  }
  var Yr = function Yr(e, t) {
    this.expression = e, this._warningHistory = {}, this._evaluator = new ft(), this._defaultValue = t ? function (e) {
      return "color" === e.type && (Hr(e["default"]) || Array.isArray(e["default"])) ? new le(0, 0, 0, 0) : "color" === e.type ? le.parse(e["default"]) || null : void 0 === e["default"] ? null : e["default"];
    }(t) : null, this._enumValues = t && "enum" === t.type ? t.values : null;
  };
  function Kr(e, t) {
    var r = new Nt($r, [], t ? function (e) {
        var t = {
          color: je,
          string: Me,
          number: ke,
          "enum": Me,
          "boolean": Se,
          formatted: Ee,
          resolvedImage: Ce
        };
        if ("array" === e.type) return Ae(t[e.value] || Te, e.length);
        return t[e.type];
      }(t) : void 0),
      n = r.parse(e, void 0, void 0, void 0, t && "string" === t.type ? {
        typeAnnotation: "coerce"
      } : void 0);
    return n ? Br(new Yr(n, t)) : Xr(r.errors);
  }
  Yr.prototype.evaluateWithoutErrorHandling = function (e, t, r, n, a, i, o, s) {
    return this._evaluator.globals = e, this._evaluator.feature = t, this._evaluator.featureState = r, this._evaluator.canonical = n || null, this._evaluator.availableImages = a || null, this._evaluator.formattedSection = i, this._evaluator.featureTileCoord = o || null, this._evaluator.featureDistanceData = s || null, this.expression.evaluate(this._evaluator);
  }, Yr.prototype.evaluate = function (e, t, r, n, a, i, o, s) {
    this._evaluator.globals = e, this._evaluator.feature = t || null, this._evaluator.featureState = r || null, this._evaluator.canonical = n || null, this._evaluator.availableImages = a || null, this._evaluator.formattedSection = i || null, this._evaluator.featureTileCoord = o || null, this._evaluator.featureDistanceData = s || null;
    try {
      var u = this.expression.evaluate(this._evaluator);
      if (null == u || "number" == typeof u && u != u) return this._defaultValue;
      if (this._enumValues && !(u in this._enumValues)) throw new Ke("Expected value to be one of " + Object.keys(this._enumValues).map(function (e) {
        return JSON.stringify(e);
      }).join(", ") + ", but found " + JSON.stringify(u) + " instead.");
      return u;
    } catch (e) {
      return this._warningHistory[e.message] || (this._warningHistory[e.message] = !0, "undefined" != typeof console && console.warn(e.message)), this._defaultValue;
    }
  };
  var Qr = function Qr(e, t) {
    this.kind = e, this._styleExpression = t, this.isStateDependent = "constant" !== e && !Pt(t.expression);
  };
  Qr.prototype.evaluateWithoutErrorHandling = function (e, t, r, n, a, i) {
    return this._styleExpression.evaluateWithoutErrorHandling(e, t, r, n, a, i);
  }, Qr.prototype.evaluate = function (e, t, r, n, a, i) {
    return this._styleExpression.evaluate(e, t, r, n, a, i);
  };
  var en = function en(e, t, r, n) {
    this.kind = e, this.zoomStops = r, this._styleExpression = t, this.isStateDependent = "camera" !== e && !Pt(t.expression), this.interpolationType = n;
  };
  function tn(e, t) {
    if ("error" === (e = Kr(e, t)).result) return e;
    var r = e.value.expression,
      n = Ft(r);
    if (!n && !function (e) {
      return "data-driven" === e["property-type"];
    }(t)) return Xr([new be("", "data expressions not supported")]);
    var a = Dt(r, ["zoom", "pitch", "distance-from-center"]);
    if (!a && !function (e) {
      return !!e.expression && e.expression.parameters.indexOf("zoom") > -1;
    }(t)) return Xr([new be("", "zoom expressions not supported")]);
    var i = rn(r);
    if (!i && !a) return Xr([new be("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
    if (i instanceof be) return Xr([i]);
    if (i instanceof dr && !function (e) {
      return !!e.expression && e.expression.interpolated;
    }(t)) return Xr([new be("", '"interpolate" expressions cannot be used with this property')]);
    if (!i) return Br(new Qr(n ? "constant" : "source", e.value));
    var o = i instanceof dr ? i.interpolation : void 0;
    return Br(new en(n ? "camera" : "composite", e.value, i.labels, o));
  }
  function rn(e) {
    var t = null;
    if (e instanceof vr) t = rn(e.result);else if (e instanceof mr) for (var r = 0, n = e.args; r < n.length; r += 1) {
      var a = n[r];
      if (t = rn(a)) break;
    } else (e instanceof Jt || e instanceof dr) && e.input instanceof dt && "zoom" === e.input.name && (t = e);
    return t instanceof be || e.eachChild(function (e) {
      var r = rn(e);
      r instanceof be ? t = r : !t && r ? t = new be("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : t && r && t !== r && (t = new be("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));
    }), t;
  }
  function nn(e) {
    if (Array.isArray(e)) return e.map(nn);
    if (e instanceof Object && !(e instanceof Number || e instanceof String || e instanceof Boolean)) {
      var t = {};
      for (var r in e) t[r] = nn(e[r]);
      return t;
    }
    return function (e) {
      return e instanceof Number || e instanceof String || e instanceof Boolean ? e.valueOf() : e;
    }(e);
  }
  en.prototype.evaluateWithoutErrorHandling = function (e, t, r, n, a, i) {
    return this._styleExpression.evaluateWithoutErrorHandling(e, t, r, n, a, i);
  }, en.prototype.evaluate = function (e, t, r, n, a, i) {
    return this._styleExpression.evaluate(e, t, r, n, a, i);
  }, en.prototype.interpolationFactor = function (e, t, r) {
    return this.interpolationType ? dr.interpolationFactor(this.interpolationType, e, t, r) : 0;
  };
  var an = {
    $version: 8,
    $root: {
      version: {
        required: !0,
        type: "enum",
        values: [8]
      },
      name: {
        type: "string"
      },
      metadata: {
        type: "*"
      },
      center: {
        type: "array",
        value: "number"
      },
      zoom: {
        type: "number"
      },
      bearing: {
        type: "number",
        "default": 0,
        period: 360,
        units: "degrees"
      },
      pitch: {
        type: "number",
        "default": 0,
        units: "degrees"
      },
      light: {
        type: "light"
      },
      terrain: {
        type: "terrain"
      },
      fog: {
        type: "fog"
      },
      sources: {
        required: !0,
        type: "sources"
      },
      sprite: {
        type: "string"
      },
      glyphs: {
        type: "string"
      },
      transition: {
        type: "transition"
      },
      projection: {
        type: "projection"
      },
      layers: {
        required: !0,
        type: "array",
        value: "layer"
      }
    },
    sources: {
      "*": {
        type: "source"
      }
    },
    source: ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"],
    source_vector: {
      type: {
        required: !0,
        type: "enum",
        values: {
          vector: {}
        }
      },
      url: {
        type: "string"
      },
      tiles: {
        type: "array",
        value: "string"
      },
      bounds: {
        type: "array",
        value: "number",
        length: 4,
        "default": [-180, -85.051129, 180, 85.051129]
      },
      scheme: {
        type: "enum",
        values: {
          xyz: {},
          tms: {}
        },
        "default": "xyz"
      },
      minzoom: {
        type: "number",
        "default": 0
      },
      maxzoom: {
        type: "number",
        "default": 22
      },
      attribution: {
        type: "string"
      },
      promoteId: {
        type: "promoteId"
      },
      "volatile": {
        type: "boolean",
        "default": !1
      },
      "*": {
        type: "*"
      }
    },
    source_raster: {
      type: {
        required: !0,
        type: "enum",
        values: {
          raster: {}
        }
      },
      url: {
        type: "string"
      },
      tiles: {
        type: "array",
        value: "string"
      },
      bounds: {
        type: "array",
        value: "number",
        length: 4,
        "default": [-180, -85.051129, 180, 85.051129]
      },
      minzoom: {
        type: "number",
        "default": 0
      },
      maxzoom: {
        type: "number",
        "default": 22
      },
      tileSize: {
        type: "number",
        "default": 512,
        units: "pixels"
      },
      scheme: {
        type: "enum",
        values: {
          xyz: {},
          tms: {}
        },
        "default": "xyz"
      },
      attribution: {
        type: "string"
      },
      "volatile": {
        type: "boolean",
        "default": !1
      },
      "*": {
        type: "*"
      }
    },
    source_raster_dem: {
      type: {
        required: !0,
        type: "enum",
        values: {
          "raster-dem": {}
        }
      },
      url: {
        type: "string"
      },
      tiles: {
        type: "array",
        value: "string"
      },
      bounds: {
        type: "array",
        value: "number",
        length: 4,
        "default": [-180, -85.051129, 180, 85.051129]
      },
      minzoom: {
        type: "number",
        "default": 0
      },
      maxzoom: {
        type: "number",
        "default": 22
      },
      tileSize: {
        type: "number",
        "default": 512,
        units: "pixels"
      },
      attribution: {
        type: "string"
      },
      encoding: {
        type: "enum",
        values: {
          terrarium: {},
          mapbox: {}
        },
        "default": "mapbox"
      },
      "volatile": {
        type: "boolean",
        "default": !1
      },
      "*": {
        type: "*"
      }
    },
    source_geojson: {
      type: {
        required: !0,
        type: "enum",
        values: {
          geojson: {}
        }
      },
      data: {
        type: "*"
      },
      maxzoom: {
        type: "number",
        "default": 18
      },
      attribution: {
        type: "string"
      },
      buffer: {
        type: "number",
        "default": 128,
        maximum: 512,
        minimum: 0
      },
      filter: {
        type: "*"
      },
      tolerance: {
        type: "number",
        "default": .375
      },
      cluster: {
        type: "boolean",
        "default": !1
      },
      clusterRadius: {
        type: "number",
        "default": 50,
        minimum: 0
      },
      clusterMaxZoom: {
        type: "number"
      },
      clusterMinPoints: {
        type: "number"
      },
      clusterProperties: {
        type: "*"
      },
      lineMetrics: {
        type: "boolean",
        "default": !1
      },
      generateId: {
        type: "boolean",
        "default": !1
      },
      promoteId: {
        type: "promoteId"
      }
    },
    source_video: {
      type: {
        required: !0,
        type: "enum",
        values: {
          video: {}
        }
      },
      urls: {
        required: !0,
        type: "array",
        value: "string"
      },
      coordinates: {
        required: !0,
        type: "array",
        length: 4,
        value: {
          type: "array",
          length: 2,
          value: "number"
        }
      }
    },
    source_image: {
      type: {
        required: !0,
        type: "enum",
        values: {
          image: {}
        }
      },
      url: {
        required: !0,
        type: "string"
      },
      coordinates: {
        required: !0,
        type: "array",
        length: 4,
        value: {
          type: "array",
          length: 2,
          value: "number"
        }
      }
    },
    layer: {
      id: {
        type: "string",
        required: !0
      },
      type: {
        type: "enum",
        values: {
          fill: {},
          line: {},
          symbol: {},
          circle: {},
          heatmap: {},
          "fill-extrusion": {},
          raster: {},
          hillshade: {},
          background: {},
          sky: {}
        },
        required: !0
      },
      metadata: {
        type: "*"
      },
      source: {
        type: "string"
      },
      "source-layer": {
        type: "string"
      },
      minzoom: {
        type: "number",
        minimum: 0,
        maximum: 24
      },
      maxzoom: {
        type: "number",
        minimum: 0,
        maximum: 24
      },
      filter: {
        type: "filter"
      },
      layout: {
        type: "layout"
      },
      paint: {
        type: "paint"
      }
    },
    layout: ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background", "layout_sky"],
    layout_background: {
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_sky: {
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_fill: {
      "fill-sort-key": {
        type: "number",
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_circle: {
      "circle-sort-key": {
        type: "number",
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_heatmap: {
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    "layout_fill-extrusion": {
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      },
      "fill-extrusion-edge-radius": {
        type: "number",
        "private": !0,
        "default": 0,
        minimum: 0,
        maximum: 1,
        "property-type": "constant"
      }
    },
    layout_line: {
      "line-cap": {
        type: "enum",
        values: {
          butt: {},
          round: {},
          square: {}
        },
        "default": "butt",
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "line-join": {
        type: "enum",
        values: {
          bevel: {},
          round: {},
          miter: {}
        },
        "default": "miter",
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "line-miter-limit": {
        type: "number",
        "default": 2,
        requires: [{
          "line-join": "miter"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "line-round-limit": {
        type: "number",
        "default": 1.05,
        requires: [{
          "line-join": "round"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "line-sort-key": {
        type: "number",
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_symbol: {
      "symbol-placement": {
        type: "enum",
        values: {
          point: {},
          line: {},
          "line-center": {}
        },
        "default": "point",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "symbol-spacing": {
        type: "number",
        "default": 250,
        minimum: 1,
        units: "pixels",
        requires: [{
          "symbol-placement": "line"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "symbol-avoid-edges": {
        type: "boolean",
        "default": !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "symbol-sort-key": {
        type: "number",
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "symbol-z-order": {
        type: "enum",
        values: {
          auto: {},
          "viewport-y": {},
          source: {}
        },
        "default": "auto",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-allow-overlap": {
        type: "boolean",
        "default": !1,
        requires: ["icon-image"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-ignore-placement": {
        type: "boolean",
        "default": !1,
        requires: ["icon-image"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-optional": {
        type: "boolean",
        "default": !1,
        requires: ["icon-image", "text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-rotation-alignment": {
        type: "enum",
        values: {
          map: {},
          viewport: {},
          auto: {}
        },
        "default": "auto",
        requires: ["icon-image"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-size": {
        type: "number",
        "default": 1,
        minimum: 0,
        units: "factor of the original icon size",
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "icon-text-fit": {
        type: "enum",
        values: {
          none: {},
          width: {},
          height: {},
          both: {}
        },
        "default": "none",
        requires: ["icon-image", "text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-text-fit-padding": {
        type: "array",
        value: "number",
        length: 4,
        "default": [0, 0, 0, 0],
        units: "pixels",
        requires: ["icon-image", "text-field", {
          "icon-text-fit": ["both", "width", "height"]
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-image": {
        type: "resolvedImage",
        tokens: !0,
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "icon-rotate": {
        type: "number",
        "default": 0,
        period: 360,
        units: "degrees",
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "icon-padding": {
        type: "number",
        "default": 2,
        minimum: 0,
        units: "pixels",
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-keep-upright": {
        type: "boolean",
        "default": !1,
        requires: ["icon-image", {
          "icon-rotation-alignment": "map"
        }, {
          "symbol-placement": ["line", "line-center"]
        }],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-offset": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "icon-anchor": {
        type: "enum",
        values: {
          center: {},
          left: {},
          right: {},
          top: {},
          bottom: {},
          "top-left": {},
          "top-right": {},
          "bottom-left": {},
          "bottom-right": {}
        },
        "default": "center",
        requires: ["icon-image"],
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "icon-pitch-alignment": {
        type: "enum",
        values: {
          map: {},
          viewport: {},
          auto: {}
        },
        "default": "auto",
        requires: ["icon-image"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-pitch-alignment": {
        type: "enum",
        values: {
          map: {},
          viewport: {},
          auto: {}
        },
        "default": "auto",
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-rotation-alignment": {
        type: "enum",
        values: {
          map: {},
          viewport: {},
          auto: {}
        },
        "default": "auto",
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-field": {
        type: "formatted",
        "default": "",
        tokens: !0,
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-font": {
        type: "array",
        value: "string",
        "default": ["Open Sans Regular", "Arial Unicode MS Regular"],
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-size": {
        type: "number",
        "default": 16,
        minimum: 0,
        units: "pixels",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-max-width": {
        type: "number",
        "default": 10,
        minimum: 0,
        units: "ems",
        requires: ["text-field", {
          "symbol-placement": ["point"]
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-line-height": {
        type: "number",
        "default": 1.2,
        units: "ems",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-letter-spacing": {
        type: "number",
        "default": 0,
        units: "ems",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-justify": {
        type: "enum",
        values: {
          auto: {},
          left: {},
          center: {},
          right: {}
        },
        "default": "center",
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-radial-offset": {
        type: "number",
        units: "ems",
        "default": 0,
        requires: ["text-field"],
        "property-type": "data-driven",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        }
      },
      "text-variable-anchor": {
        type: "array",
        value: "enum",
        values: {
          center: {},
          left: {},
          right: {},
          top: {},
          bottom: {},
          "top-left": {},
          "top-right": {},
          "bottom-left": {},
          "bottom-right": {}
        },
        requires: ["text-field", {
          "symbol-placement": ["point"]
        }],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-anchor": {
        type: "enum",
        values: {
          center: {},
          left: {},
          right: {},
          top: {},
          bottom: {},
          "top-left": {},
          "top-right": {},
          "bottom-left": {},
          "bottom-right": {}
        },
        "default": "center",
        requires: ["text-field", {
          "!": "text-variable-anchor"
        }],
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-max-angle": {
        type: "number",
        "default": 45,
        units: "degrees",
        requires: ["text-field", {
          "symbol-placement": ["line", "line-center"]
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-writing-mode": {
        type: "array",
        value: "enum",
        values: {
          horizontal: {},
          vertical: {}
        },
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-rotate": {
        type: "number",
        "default": 0,
        period: 360,
        units: "degrees",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-padding": {
        type: "number",
        "default": 2,
        minimum: 0,
        units: "pixels",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-keep-upright": {
        type: "boolean",
        "default": !0,
        requires: ["text-field", {
          "text-rotation-alignment": "map"
        }, {
          "symbol-placement": ["line", "line-center"]
        }],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-transform": {
        type: "enum",
        values: {
          none: {},
          uppercase: {},
          lowercase: {}
        },
        "default": "none",
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-offset": {
        type: "array",
        value: "number",
        units: "ems",
        length: 2,
        "default": [0, 0],
        requires: ["text-field", {
          "!": "text-radial-offset"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "text-allow-overlap": {
        type: "boolean",
        "default": !1,
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-ignore-placement": {
        type: "boolean",
        "default": !1,
        requires: ["text-field"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-optional": {
        type: "boolean",
        "default": !1,
        requires: ["text-field", "icon-image"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_raster: {
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    layout_hillshade: {
      visibility: {
        type: "enum",
        values: {
          visible: {},
          none: {}
        },
        "default": "visible",
        "property-type": "constant"
      }
    },
    filter: {
      type: "array",
      value: "*"
    },
    filter_symbol: {
      type: "boolean",
      "default": !1,
      transition: !1,
      "property-type": "data-driven",
      expression: {
        interpolated: !1,
        parameters: ["zoom", "feature", "pitch", "distance-from-center"]
      }
    },
    filter_fill: {
      type: "boolean",
      "default": !1,
      transition: !1,
      "property-type": "data-driven",
      expression: {
        interpolated: !1,
        parameters: ["zoom", "feature"]
      }
    },
    filter_line: {
      type: "boolean",
      "default": !1,
      transition: !1,
      "property-type": "data-driven",
      expression: {
        interpolated: !1,
        parameters: ["zoom", "feature"]
      }
    },
    filter_circle: {
      type: "boolean",
      "default": !1,
      transition: !1,
      "property-type": "data-driven",
      expression: {
        interpolated: !1,
        parameters: ["zoom", "feature"]
      }
    },
    "filter_fill-extrusion": {
      type: "boolean",
      "default": !1,
      transition: !1,
      "property-type": "data-driven",
      expression: {
        interpolated: !1,
        parameters: ["zoom", "feature"]
      }
    },
    filter_heatmap: {
      type: "boolean",
      "default": !1,
      transition: !1,
      "property-type": "data-driven",
      expression: {
        interpolated: !1,
        parameters: ["zoom", "feature"]
      }
    },
    filter_operator: {
      type: "enum",
      values: {
        "==": {},
        "!=": {},
        ">": {},
        ">=": {},
        "<": {},
        "<=": {},
        "in": {},
        "!in": {},
        all: {},
        any: {},
        none: {},
        has: {},
        "!has": {},
        within: {}
      }
    },
    geometry_type: {
      type: "enum",
      values: {
        Point: {},
        LineString: {},
        Polygon: {}
      }
    },
    "function": {
      expression: {
        type: "expression"
      },
      stops: {
        type: "array",
        value: "function_stop"
      },
      base: {
        type: "number",
        "default": 1,
        minimum: 0
      },
      property: {
        type: "string",
        "default": "$zoom"
      },
      type: {
        type: "enum",
        values: {
          identity: {},
          exponential: {},
          interval: {},
          categorical: {}
        },
        "default": "exponential"
      },
      colorSpace: {
        type: "enum",
        values: {
          rgb: {},
          lab: {},
          hcl: {}
        },
        "default": "rgb"
      },
      "default": {
        type: "*",
        required: !1
      }
    },
    function_stop: {
      type: "array",
      minimum: 0,
      maximum: 24,
      value: ["number", "color"],
      length: 2
    },
    expression: {
      type: "array",
      value: "*",
      minimum: 1
    },
    expression_name: {
      type: "enum",
      values: {
        "let": {
          group: "Variable binding"
        },
        "var": {
          group: "Variable binding"
        },
        literal: {
          group: "Types"
        },
        array: {
          group: "Types"
        },
        at: {
          group: "Lookup"
        },
        "in": {
          group: "Lookup"
        },
        "index-of": {
          group: "Lookup"
        },
        slice: {
          group: "Lookup"
        },
        "case": {
          group: "Decision"
        },
        match: {
          group: "Decision"
        },
        coalesce: {
          group: "Decision"
        },
        step: {
          group: "Ramps, scales, curves"
        },
        interpolate: {
          group: "Ramps, scales, curves"
        },
        "interpolate-hcl": {
          group: "Ramps, scales, curves"
        },
        "interpolate-lab": {
          group: "Ramps, scales, curves"
        },
        ln2: {
          group: "Math"
        },
        pi: {
          group: "Math"
        },
        e: {
          group: "Math"
        },
        "typeof": {
          group: "Types"
        },
        string: {
          group: "Types"
        },
        number: {
          group: "Types"
        },
        "boolean": {
          group: "Types"
        },
        object: {
          group: "Types"
        },
        collator: {
          group: "Types"
        },
        format: {
          group: "Types"
        },
        image: {
          group: "Types"
        },
        "number-format": {
          group: "Types"
        },
        "to-string": {
          group: "Types"
        },
        "to-number": {
          group: "Types"
        },
        "to-boolean": {
          group: "Types"
        },
        "to-rgba": {
          group: "Color"
        },
        "to-color": {
          group: "Types"
        },
        rgb: {
          group: "Color"
        },
        rgba: {
          group: "Color"
        },
        get: {
          group: "Lookup"
        },
        has: {
          group: "Lookup"
        },
        length: {
          group: "Lookup"
        },
        properties: {
          group: "Feature data"
        },
        "feature-state": {
          group: "Feature data"
        },
        "geometry-type": {
          group: "Feature data"
        },
        id: {
          group: "Feature data"
        },
        zoom: {
          group: "Camera"
        },
        pitch: {
          group: "Camera"
        },
        "distance-from-center": {
          group: "Camera"
        },
        "heatmap-density": {
          group: "Heatmap"
        },
        "line-progress": {
          group: "Feature data"
        },
        "sky-radial-progress": {
          group: "sky"
        },
        accumulated: {
          group: "Feature data"
        },
        "+": {
          group: "Math"
        },
        "*": {
          group: "Math"
        },
        "-": {
          group: "Math"
        },
        "/": {
          group: "Math"
        },
        "%": {
          group: "Math"
        },
        "^": {
          group: "Math"
        },
        sqrt: {
          group: "Math"
        },
        log10: {
          group: "Math"
        },
        ln: {
          group: "Math"
        },
        log2: {
          group: "Math"
        },
        sin: {
          group: "Math"
        },
        cos: {
          group: "Math"
        },
        tan: {
          group: "Math"
        },
        asin: {
          group: "Math"
        },
        acos: {
          group: "Math"
        },
        atan: {
          group: "Math"
        },
        min: {
          group: "Math"
        },
        max: {
          group: "Math"
        },
        round: {
          group: "Math"
        },
        abs: {
          group: "Math"
        },
        ceil: {
          group: "Math"
        },
        floor: {
          group: "Math"
        },
        distance: {
          group: "Math"
        },
        "==": {
          group: "Decision"
        },
        "!=": {
          group: "Decision"
        },
        ">": {
          group: "Decision"
        },
        "<": {
          group: "Decision"
        },
        ">=": {
          group: "Decision"
        },
        "<=": {
          group: "Decision"
        },
        all: {
          group: "Decision"
        },
        any: {
          group: "Decision"
        },
        "!": {
          group: "Decision"
        },
        within: {
          group: "Decision"
        },
        "is-supported-script": {
          group: "String"
        },
        upcase: {
          group: "String"
        },
        downcase: {
          group: "String"
        },
        concat: {
          group: "String"
        },
        "resolved-locale": {
          group: "String"
        }
      }
    },
    fog: {
      range: {
        type: "array",
        "default": [.5, 10],
        minimum: -20,
        maximum: 20,
        length: 2,
        value: "number",
        "property-type": "data-constant",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        }
      },
      color: {
        type: "color",
        "property-type": "data-constant",
        "default": "#ffffff",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      },
      "high-color": {
        type: "color",
        "property-type": "data-constant",
        "default": "#245cdf",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      },
      "space-color": {
        type: "color",
        "property-type": "data-constant",
        "default": ["interpolate", ["linear"], ["zoom"], 4, "#010b19", 7, "#367ab9"],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      },
      "horizon-blend": {
        type: "number",
        "property-type": "data-constant",
        "default": ["interpolate", ["linear"], ["zoom"], 4, .2, 7, .1],
        minimum: 0,
        maximum: 1,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      },
      "star-intensity": {
        type: "number",
        "property-type": "data-constant",
        "default": ["interpolate", ["linear"], ["zoom"], 5, .35, 6, 0],
        minimum: 0,
        maximum: 1,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      }
    },
    light: {
      anchor: {
        type: "enum",
        "default": "viewport",
        values: {
          map: {},
          viewport: {}
        },
        "property-type": "data-constant",
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        }
      },
      position: {
        type: "array",
        "default": [1.15, 210, 30],
        length: 3,
        value: "number",
        "property-type": "data-constant",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        }
      },
      color: {
        type: "color",
        "property-type": "data-constant",
        "default": "#ffffff",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      },
      intensity: {
        type: "number",
        "property-type": "data-constant",
        "default": .5,
        minimum: 0,
        maximum: 1,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      }
    },
    projection: {
      name: {
        type: "enum",
        values: {
          albers: {},
          equalEarth: {},
          equirectangular: {},
          lambertConformalConic: {},
          mercator: {},
          naturalEarth: {},
          winkelTripel: {},
          globe: {}
        },
        "default": "mercator",
        required: !0
      },
      center: {
        type: "array",
        length: 2,
        value: "number",
        "property-type": "data-constant",
        minimum: [-180, -90],
        maximum: [180, 90],
        transition: !1,
        requires: [{
          name: ["albers", "lambertConformalConic"]
        }]
      },
      parallels: {
        type: "array",
        length: 2,
        value: "number",
        "property-type": "data-constant",
        minimum: [-90, -90],
        maximum: [90, 90],
        transition: !1,
        requires: [{
          name: ["albers", "lambertConformalConic"]
        }]
      }
    },
    terrain: {
      source: {
        type: "string",
        required: !0
      },
      exaggeration: {
        type: "number",
        "property-type": "data-constant",
        "default": 1,
        minimum: 0,
        maximum: 1e3,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0,
        requires: ["source"]
      }
    },
    paint: ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background", "paint_sky"],
    paint_fill: {
      "fill-antialias": {
        type: "boolean",
        "default": !0,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "fill-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        requires: [{
          "!": "fill-pattern"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "fill-outline-color": {
        type: "color",
        transition: !0,
        requires: [{
          "!": "fill-pattern"
        }, {
          "fill-antialias": !0
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "fill-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-translate-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        requires: ["fill-translate"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-pattern": {
        type: "resolvedImage",
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      }
    },
    "paint_fill-extrusion": {
      "fill-extrusion-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-extrusion-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        requires: [{
          "!": "fill-extrusion-pattern"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "fill-extrusion-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-extrusion-translate-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        requires: ["fill-extrusion-translate"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-extrusion-pattern": {
        type: "resolvedImage",
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "fill-extrusion-height": {
        type: "number",
        "default": 0,
        minimum: 0,
        units: "meters",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "fill-extrusion-base": {
        type: "number",
        "default": 0,
        minimum: 0,
        units: "meters",
        transition: !0,
        requires: ["fill-extrusion-height"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "fill-extrusion-vertical-gradient": {
        type: "boolean",
        "default": !0,
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "fill-extrusion-ambient-occlusion-intensity": {
        "property-type": "data-constant",
        type: "number",
        "private": !0,
        "default": 0,
        minimum: 0,
        maximum: 1,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0
      },
      "fill-extrusion-ambient-occlusion-radius": {
        "property-type": "data-constant",
        type: "number",
        "private": !0,
        "default": 3,
        minimum: 0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        transition: !0,
        requires: ["fill-extrusion-edge-radius"]
      }
    },
    paint_line: {
      "line-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "line-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        requires: [{
          "!": "line-pattern"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "line-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "line-translate-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        requires: ["line-translate"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "line-width": {
        type: "number",
        "default": 1,
        minimum: 0,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "line-gap-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "line-offset": {
        type: "number",
        "default": 0,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "line-blur": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "line-dasharray": {
        type: "array",
        value: "number",
        minimum: 0,
        transition: !1,
        units: "line widths",
        requires: [{
          "!": "line-pattern"
        }],
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "line-pattern": {
        type: "resolvedImage",
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom", "feature"]
        },
        "property-type": "data-driven"
      },
      "line-gradient": {
        type: "color",
        transition: !1,
        requires: [{
          "!": "line-pattern"
        }, {
          source: "geojson",
          has: {
            lineMetrics: !0
          }
        }],
        expression: {
          interpolated: !0,
          parameters: ["line-progress"]
        },
        "property-type": "color-ramp"
      },
      "line-trim-offset": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        minimum: [0, 0],
        maximum: [1, 1],
        transition: !1,
        requires: [{
          source: "geojson",
          has: {
            lineMetrics: !0
          }
        }],
        "property-type": "constant"
      }
    },
    paint_circle: {
      "circle-radius": {
        type: "number",
        "default": 5,
        minimum: 0,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "circle-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "circle-blur": {
        type: "number",
        "default": 0,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "circle-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "circle-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "circle-translate-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        requires: ["circle-translate"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "circle-pitch-scale": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "circle-pitch-alignment": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "viewport",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "circle-stroke-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "circle-stroke-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "circle-stroke-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      }
    },
    paint_heatmap: {
      "heatmap-radius": {
        type: "number",
        "default": 30,
        minimum: 1,
        transition: !0,
        units: "pixels",
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "heatmap-weight": {
        type: "number",
        "default": 1,
        minimum: 0,
        transition: !1,
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "heatmap-intensity": {
        type: "number",
        "default": 1,
        minimum: 0,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "heatmap-color": {
        type: "color",
        "default": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(0, 0, 255, 0)", .1, "royalblue", .3, "cyan", .5, "lime", .7, "yellow", 1, "red"],
        transition: !1,
        expression: {
          interpolated: !0,
          parameters: ["heatmap-density"]
        },
        "property-type": "color-ramp"
      },
      "heatmap-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      }
    },
    paint_symbol: {
      "icon-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "icon-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "icon-halo-color": {
        type: "color",
        "default": "rgba(0, 0, 0, 0)",
        transition: !0,
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "icon-halo-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "icon-halo-blur": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "icon-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: !0,
        units: "pixels",
        requires: ["icon-image"],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "icon-translate-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        requires: ["icon-image", "icon-translate"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "text-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        overridable: !0,
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "text-halo-color": {
        type: "color",
        "default": "rgba(0, 0, 0, 0)",
        transition: !0,
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "text-halo-width": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "text-halo-blur": {
        type: "number",
        "default": 0,
        minimum: 0,
        transition: !0,
        units: "pixels",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom", "feature", "feature-state"]
        },
        "property-type": "data-driven"
      },
      "text-translate": {
        type: "array",
        value: "number",
        length: 2,
        "default": [0, 0],
        transition: !0,
        units: "pixels",
        requires: ["text-field"],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "text-translate-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "map",
        requires: ["text-field", "text-translate"],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      }
    },
    paint_raster: {
      "raster-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-hue-rotate": {
        type: "number",
        "default": 0,
        period: 360,
        transition: !0,
        units: "degrees",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-brightness-min": {
        type: "number",
        "default": 0,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-brightness-max": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-saturation": {
        type: "number",
        "default": 0,
        minimum: -1,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-contrast": {
        type: "number",
        "default": 0,
        minimum: -1,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-resampling": {
        type: "enum",
        values: {
          linear: {},
          nearest: {}
        },
        "default": "linear",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "raster-fade-duration": {
        type: "number",
        "default": 300,
        minimum: 0,
        transition: !1,
        units: "milliseconds",
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      }
    },
    paint_hillshade: {
      "hillshade-illumination-direction": {
        type: "number",
        "default": 335,
        minimum: 0,
        maximum: 359,
        transition: !1,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "hillshade-illumination-anchor": {
        type: "enum",
        values: {
          map: {},
          viewport: {}
        },
        "default": "viewport",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "hillshade-exaggeration": {
        type: "number",
        "default": .5,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "hillshade-shadow-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "hillshade-highlight-color": {
        type: "color",
        "default": "#FFFFFF",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "hillshade-accent-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      }
    },
    paint_background: {
      "background-color": {
        type: "color",
        "default": "#000000",
        transition: !0,
        requires: [{
          "!": "background-pattern"
        }],
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "background-pattern": {
        type: "resolvedImage",
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "background-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      }
    },
    paint_sky: {
      "sky-type": {
        type: "enum",
        values: {
          gradient: {},
          atmosphere: {}
        },
        "default": "atmosphere",
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "sky-atmosphere-sun": {
        type: "array",
        value: "number",
        length: 2,
        units: "degrees",
        minimum: [0, 0],
        maximum: [360, 180],
        transition: !1,
        requires: [{
          "sky-type": "atmosphere"
        }],
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "sky-atmosphere-sun-intensity": {
        type: "number",
        requires: [{
          "sky-type": "atmosphere"
        }],
        "default": 10,
        minimum: 0,
        maximum: 100,
        transition: !1,
        "property-type": "data-constant"
      },
      "sky-gradient-center": {
        type: "array",
        requires: [{
          "sky-type": "gradient"
        }],
        value: "number",
        "default": [0, 0],
        length: 2,
        units: "degrees",
        minimum: [0, 0],
        maximum: [360, 180],
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "sky-gradient-radius": {
        type: "number",
        requires: [{
          "sky-type": "gradient"
        }],
        "default": 90,
        minimum: 0,
        maximum: 180,
        transition: !1,
        expression: {
          interpolated: !1,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      },
      "sky-gradient": {
        type: "color",
        "default": ["interpolate", ["linear"], ["sky-radial-progress"], .8, "#87ceeb", 1, "white"],
        transition: !1,
        requires: [{
          "sky-type": "gradient"
        }],
        expression: {
          interpolated: !0,
          parameters: ["sky-radial-progress"]
        },
        "property-type": "color-ramp"
      },
      "sky-atmosphere-halo-color": {
        type: "color",
        "default": "white",
        transition: !1,
        requires: [{
          "sky-type": "atmosphere"
        }],
        "property-type": "data-constant"
      },
      "sky-atmosphere-color": {
        type: "color",
        "default": "white",
        transition: !1,
        requires: [{
          "sky-type": "atmosphere"
        }],
        "property-type": "data-constant"
      },
      "sky-opacity": {
        type: "number",
        "default": 1,
        minimum: 0,
        maximum: 1,
        transition: !0,
        expression: {
          interpolated: !0,
          parameters: ["zoom"]
        },
        "property-type": "data-constant"
      }
    },
    transition: {
      duration: {
        type: "number",
        "default": 300,
        minimum: 0,
        units: "milliseconds"
      },
      delay: {
        type: "number",
        "default": 0,
        minimum: 0,
        units: "milliseconds"
      }
    },
    "property-type": {
      "data-driven": {
        type: "property-type"
      },
      "color-ramp": {
        type: "property-type"
      },
      "data-constant": {
        type: "property-type"
      },
      constant: {
        type: "property-type"
      }
    },
    promoteId: {
      "*": {
        type: "string"
      }
    }
  };
  function on(e) {
    if (!0 === e || !1 === e) return !0;
    if (!Array.isArray(e) || 0 === e.length) return !1;
    switch (e[0]) {
      case "has":
        return e.length >= 2 && "$id" !== e[1] && "$type" !== e[1];
      case "in":
        return e.length >= 3 && ("string" != typeof e[1] || Array.isArray(e[2]));
      case "!in":
      case "!has":
      case "none":
        return !1;
      case "==":
      case "!=":
      case ">":
      case ">=":
      case "<":
      case "<=":
        return 3 !== e.length || Array.isArray(e[1]) || Array.isArray(e[2]);
      case "any":
      case "all":
        for (var t = 0, r = e.slice(1); t < r.length; t += 1) {
          var n = r[t];
          if (!on(n) && "boolean" != typeof n) return !1;
        }
        return !0;
      default:
        return !0;
    }
  }
  function sn(e, t) {
    if (void 0 === t && (t = "fill"), null == e) return {
      filter: function filter() {
        return !0;
      },
      needGeometry: !1,
      needFeature: !1
    };
    on(e) || (e = yn(e));
    var r = e,
      n = !0;
    try {
      n = function (e) {
        if (!pn(e)) return e;
        var t = nn(e);
        return ln(t), t = un(t);
      }(r);
    } catch (e) {
      console.warn("Failed to extract static filter. Filter will continue working, but at higher memory usage and slower framerate.\nThis is most likely a bug, please report this via https://github.com/mapbox/mapbox-gl-js/issues/new?assignees=&labels=&template=Bug_report.md\nand paste the contents of this message in the report.\nThank you!\nFilter Expression:\n" + JSON.stringify(r, null, 2) + "\n        ");
    }
    var a = an["filter_" + t],
      i = Kr(n, a),
      o = null;
    if ("error" === i.result) throw new Error(i.value.map(function (e) {
      return e.key + ": " + e.message;
    }).join(", "));
    o = function o(e, t, r) {
      return i.value.evaluate(e, t, {}, r);
    };
    var s = null,
      u = null;
    if (n !== r) {
      var l = Kr(r, a);
      if ("error" === l.result) throw new Error(l.value.map(function (e) {
        return e.key + ": " + e.message;
      }).join(", "));
      s = function s(e, t, r, n, a) {
        return l.value.evaluate(e, t, {}, r, void 0, void 0, n, a);
      }, u = !Ft(l.value.expression);
    }
    return {
      filter: o,
      dynamicFilter: s || void 0,
      needGeometry: dn(n),
      needFeature: !!u
    };
  }
  function un(e) {
    if (!Array.isArray(e)) return e;
    var t = function (e) {
      if (fn.has(e[0])) for (var t = 1; t < e.length; t++) {
        if (pn(e[t])) return !0;
      }
      return e;
    }(e);
    return !0 === t ? t : t.map(function (e) {
      return un(e);
    });
  }
  function ln(e) {
    var t = !1,
      r = [];
    if ("case" === e[0]) {
      for (var n = 1; n < e.length - 1; n += 2) t = t || pn(e[n]), r.push(e[n + 1]);
      r.push(e[e.length - 1]);
    } else if ("match" === e[0]) {
      t = t || pn(e[1]);
      for (var a = 2; a < e.length - 1; a += 2) r.push(e[a + 1]);
      r.push(e[e.length - 1]);
    } else if ("step" === e[0]) {
      t = t || pn(e[1]);
      for (var i = 1; i < e.length - 1; i += 2) r.push(e[i + 1]);
    }
    t && (e.length = 0, e.push.apply(e, ["any"].concat(r)));
    for (var o = 1; o < e.length; o++) ln(e[o]);
  }
  function pn(e) {
    if (!Array.isArray(e)) return !1;
    if ("pitch" === (t = e[0]) || "distance-from-center" === t) return !0;
    for (var t, r = 1; r < e.length; r++) {
      if (pn(e[r])) return !0;
    }
    return !1;
  }
  var fn = new Set(["in", "==", "!=", ">", ">=", "<", "<=", "to-boolean"]);
  function cn(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function dn(e) {
    if (!Array.isArray(e)) return !1;
    if ("within" === e[0]) return !0;
    for (var t = 1; t < e.length; t++) if (dn(e[t])) return !0;
    return !1;
  }
  function yn(e) {
    if (!e) return !0;
    var t,
      r = e[0];
    return e.length <= 1 ? "any" !== r : "==" === r ? mn(e[1], e[2], "==") : "!=" === r ? gn(mn(e[1], e[2], "==")) : "<" === r || ">" === r || "<=" === r || ">=" === r ? mn(e[1], e[2], r) : "any" === r ? (t = e.slice(1), ["any"].concat(t.map(yn))) : "all" === r ? ["all"].concat(e.slice(1).map(yn)) : "none" === r ? ["all"].concat(e.slice(1).map(yn).map(gn)) : "in" === r ? hn(e[1], e.slice(2)) : "!in" === r ? gn(hn(e[1], e.slice(2))) : "has" === r ? vn(e[1]) : "!has" === r ? gn(vn(e[1])) : "within" !== r || e;
  }
  function mn(e, t, r) {
    switch (e) {
      case "$type":
        return ["filter-type-" + r, t];
      case "$id":
        return ["filter-id-" + r, t];
      default:
        return ["filter-" + r, e, t];
    }
  }
  function hn(e, t) {
    if (0 === t.length) return !1;
    switch (e) {
      case "$type":
        return ["filter-type-in", ["literal", t]];
      case "$id":
        return ["filter-id-in", ["literal", t]];
      default:
        return t.length > 200 && !t.some(function (e) {
          return _typeof(e) != _typeof(t[0]);
        }) ? ["filter-in-large", e, ["literal", t.sort(cn)]] : ["filter-in-small", e, ["literal", t]];
    }
  }
  function vn(e) {
    switch (e) {
      case "$type":
        return !0;
      case "$id":
        return ["filter-has-id"];
      default:
        return ["filter-has", e];
    }
  }
  function gn(e) {
    return ["!", e];
  }
  var bn = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
  function xn(e, t) {
    var r = {};
    for (var n in e) "ref" !== n && (r[n] = e[n]);
    return bn.forEach(function (e) {
      e in t && (r[e] = t[e]);
    }), r;
  }
  function wn(e) {
    e = e.slice();
    for (var t = Object.create(null), r = 0; r < e.length; r++) t[e[r].id] = e[r];
    for (var n = 0; n < e.length; n++) "ref" in e[n] && (e[n] = xn(e[n], t[e[n].ref]));
    return e;
  }
  var zn = {
      thin: 100,
      hairline: 100,
      "ultra-light": 100,
      "extra-light": 100,
      light: 200,
      book: 300,
      regular: 400,
      normal: 400,
      plain: 400,
      roman: 400,
      standard: 400,
      medium: 500,
      "semi-bold": 600,
      "demi-bold": 600,
      bold: 700,
      heavy: 800,
      black: 800,
      "extra-bold": 800,
      "ultra-black": 900,
      "extra-black": 900,
      "ultra-bold": 900,
      "heavy-black": 900,
      fat: 900,
      poster: 900
    },
    kn = " ",
    Mn = /(italic|oblique)$/i,
    Sn = {},
    jn = function jn(e, t, r) {
      var n = Sn[e];
      if (!n) {
        Array.isArray(e) || (e = [e]);
        for (var a = 400, i = "normal", o = [], s = 0, u = e.length; s < u; ++s) {
          var l = e[s].split(" "),
            p = l[l.length - 1].toLowerCase();
          for (var f in "normal" == p || "italic" == p || "oblique" == p ? (i = p, l.pop(), p = l[l.length - 1].toLowerCase()) : Mn.test(p) && (p = p.replace(Mn, ""), i = l[l.length - 1].replace(p, "")), zn) {
            var c = l.length > 1 ? l[l.length - 2].toLowerCase() : "";
            if (p == f || p == f.replace("-", "") || c + "-" + p == f) {
              a = zn[f], l.pop(), c && f.startsWith(c) && l.pop();
              break;
            }
          }
          "number" == typeof p && (a = p);
          var d = l.join(kn).replace("Klokantech Noto Sans", "Noto Sans");
          -1 !== d.indexOf(kn) && (d = '"' + d + '"'), o.push(d);
        }
        n = Sn[e] = [i, a, o];
      }
      return n[0] + kn + n[1] + kn + t + "px" + (r ? "/" + r : "") + kn + n[2];
    },
    qn = "https://api.mapbox.com";
  function Tn(e) {
    var t = "mapbox://";
    return 0 !== e.indexOf(t) ? "" : e.slice(t.length);
  }
  function _n(e, t) {
    var r = Tn(e);
    if (!r) return decodeURI(new URL(e, location.href).href);
    var n = "styles/";
    if (0 !== r.indexOf(n)) throw new Error("unexpected style url: " + e);
    var a = r.slice(n.length);
    return qn + "/styles/v1/" + a + "?&access_token=" + t;
  }
  function En(e, t, r, n) {
    var a = new URL(e, n),
      i = Tn(e);
    return i ? "mapbox.satellite" === i ? "https://api.mapbox.com/v4/" + i + "/{z}/{x}/{y}" + (window.devicePixelRatio >= 1.5 ? "@2x" : "") + ".webp?access_token=" + t : "https://{a-d}.tiles.mapbox.com/v4/" + i + "/{z}/{x}/{y}.vector.pbf?access_token=" + t : t ? (a.searchParams.set(r, t), decodeURI(a.href)) : decodeURI(a.href);
  }
  var Cn = {},
    An = {},
    In = 0;
  function Fn(e) {
    return e.id || (e.id = In++), e.id;
  }
  function Pn(e, t) {
    return Fn(e) + "." + p.getUid(t);
  }
  function Dn(e) {
    var t = Cn[e.id];
    return t || (t = {}, Cn[Fn(e)] = t), t;
  }
  function On(e) {
    var t = An[e.id];
    return t || (t = {}, An[Fn(e)] = t), t;
  }
  function Ln(e) {
    return e * Math.PI / 180;
  }
  var Rn = function () {
    for (var e = [], t = 78271.51696402048; e.length <= 24; t /= 2) e.push(t);
    return e;
  }();
  function Nn(e, t) {
    if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "undefined" != typeof OffscreenCanvas) return new OffscreenCanvas(e, t);
    var r = document.createElement("canvas");
    return r.width = e, r.height = t, r;
  }
  function Un(e, t) {
    for (var r = 0, n = t.length; r < n; ++r) {
      if (t[r] < e && r + 1 < n) {
        var a = t[r] / t[r + 1];
        return r + Math.log(t[r] / e) / Math.log(a);
      }
    }
    return n - 1;
  }
  var Vn = {};
  function Gn(e, t, r, n) {
    if (void 0 === r && (r = {}), t in Vn) return n && (n.request = Vn[t][0]), Vn[t][1];
    var a = r.transformRequest && r.transformRequest(t, e) || new Request(t);
    a.headers.get("Accept") || a.headers.set("Accept", "application/json"), n && (n.request = a);
    var i = fetch(a).then(function (e) {
      return delete Vn[t], e.ok ? e.json() : Promise.reject(new Error("Error fetching source " + t));
    })["catch"](function (e) {
      return delete Vn[t], Promise.reject(new Error("Error fetching source " + t));
    });
    return Vn[t] = [a, i], i;
  }
  function Jn(e, t) {
    if ("string" != typeof e) return Promise.resolve(e);
    if (!e.trim().startsWith("{")) return Gn("Style", e = _n(e, t.accessToken), t);
    try {
      var r = JSON.parse(e);
      return Promise.resolve(r);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  function Wn(e, t) {
    if (t.transformRequest) {
      var r = t.transformRequest(e, "Tiles");
      if (r instanceof Request) return decodeURI(r.url);
    }
    return e;
  }
  var Zn = {};
  function $n(e, t, r) {
    void 0 === r && (r = {});
    var n = [t, JSON.stringify(e)].toString(),
      a = Zn[n];
    if (!a || r.transformRequest) {
      var i = e.url;
      if (i && !e.tiles) {
        var o = En(i, r.accessToken, r.accessTokenParam || "access_token", t || location.href);
        if (i.startsWith("mapbox://")) a = Promise.resolve(Object.assign({}, e, {
          url: void 0,
          tiles: l.expandUrl(o)
        }));else {
          var s = {};
          a = Gn("Source", o, r, s).then(function (e) {
            return e.tiles = e.tiles.map(function (t) {
              return "tms" === e.scheme && (t = t.replace("{y}", "{-y}")), Wn(En(t, r.accessToken, r.accessTokenParam || "access_token", s.request.url), r);
            }), Promise.resolve(e);
          });
        }
      } else e = Object.assign({}, e, {
        tiles: e.tiles.map(function (n) {
          return "tms" === e.scheme && (n = n.replace("{y}", "{-y}")), Wn(En(n, r.accessToken, r.accessTokenParam || "access_token", t || location.href), r);
        })
      }), a = Promise.resolve(Object.assign({}, e));
      Zn[n] = a;
    }
    return a;
  }
  function Bn(e, t, r, n) {
    var a = document.createElement("canvas"),
      i = [2 * r * t.pixelRatio + t.width, 2 * r * t.pixelRatio + t.height];
    a.width = i[0], a.height = i[1];
    var o = a.getContext("2d");
    o.drawImage(e, t.x, t.y, t.width, t.height, r * t.pixelRatio, r * t.pixelRatio, t.width, t.height);
    var s = o.getImageData(0, 0, i[0], i[1]);
    o.globalCompositeOperation = "destination-over", o.fillStyle = "rgba(" + 255 * n.r + "," + 255 * n.g + "," + 255 * n.b + "," + n.a + ")";
    for (var u = s.data, l = 0, p = s.width; l < p; ++l) for (var f = 0, c = s.height; f < c; ++f) {
      u[4 * (f * p + l) + 3] > 0 && o.arc(l, f, r * t.pixelRatio, 0, 2 * Math.PI);
    }
    return o.fill(), a;
  }
  function Xn(e, t) {
    for (var r = e.getLayers().getArray(), n = 0, a = r.length; n < a; ++n) {
      var i = r[n].get("mapbox-layers");
      if (i && -1 !== i.indexOf(t)) return r[n];
    }
  }
  function Hn(e, t) {
    for (var r = [], n = e.getLayers().getArray(), a = 0, i = n.length; a < i; ++a) n[a].get("mapbox-source") === t && r.push(n[a]);
    return r;
  }
  function Yn(e, t) {
    return e.get("mapbox-style").layers.find(function (e) {
      return e.id === t;
    });
  }
  var Kn,
    Qn = Array(256).join(" ");
  function ea(e, t) {
    if (t >= .05) {
      for (var r = "", n = e.split("\n"), a = Qn.slice(0, Math.round(t / .1)), i = 0, o = n.length; i < o; ++i) i > 0 && (r += "\n"), r += n[i].split("").join(a);
      return r;
    }
    return e;
  }
  function ta() {
    return Kn || (Kn = Nn(1, 1).getContext("2d")), Kn;
  }
  function ra(e, t) {
    return ta().measureText(e).width + (e.length - 1) * t;
  }
  var na = {};
  function aa(e, t, r, n) {
    if (-1 !== e.indexOf("\n")) {
      for (var a = e.split("\n"), i = [], o = 0, s = a.length; o < s; ++o) i.push(aa(a[o], t, r, n));
      return i.join("\n");
    }
    var u = r + "," + t + "," + e + "," + n,
      l = na[u];
    if (!l) {
      var p = e.split(" ");
      if (p.length > 1) {
        var f = ta();
        f.font = t;
        for (var c = f.measureText("M").width * r, d = "", y = [], m = 0, h = p.length; m < h; ++m) {
          var v = p[m],
            g = d + (d ? " " : "") + v;
          ra(g, n) <= c ? d = g : (d && y.push(d), d = v);
        }
        d && y.push(d);
        for (var b = 0, x = y.length; b < x && x > 1; ++b) {
          var w = y[b];
          if (ra(w, n) < .35 * c) {
            var z = b > 0 ? ra(y[b - 1], n) : 1 / 0,
              k = b < x - 1 ? ra(y[b + 1], n) : 1 / 0;
            y.splice(b, 1), x -= 1, z < k ? (y[b - 1] += " " + w, b -= 1) : y[b] = w + " " + y[b];
          }
        }
        for (var M = 0, S = y.length - 1; M < S; ++M) {
          var j = y[M],
            q = y[M + 1];
          if (ra(j, n) > .7 * c && ra(q, n) < .6 * c) {
            var T = j.split(" "),
              _ = T.pop();
            ra(_, n) < .2 * c && (y[M] = T.join(" "), y[M + 1] = _ + " " + q), S -= 1;
          }
        }
        l = y.join("\n");
      } else l = e;
      l = ea(l, n), na[u] = l;
    }
    return l;
  }
  var ia,
    oa = /font-family: ?([^;]*);/,
    sa = /("|')/g;
  function ua(e) {
    if (!ia) {
      ia = {};
      for (var t = document.styleSheets, r = 0, n = t.length; r < n; ++r) {
        var a = t[r];
        try {
          var i = a.rules || a.cssRules;
          if (i) for (var o = 0, s = i.length; o < s; ++o) {
            var u = i[o];
            if (5 == u.type) {
              var l = u.cssText.match(oa);
              ia[l[1].replace(sa, "")] = !0;
            }
          }
        } catch (e) {}
      }
    }
    return e in ia;
  }
  var la = {};
  function pa(e, t) {
    void 0 === t && (t = "https://cdn.jsdelivr.net/npm/@fontsource/{font-family}/{fontweight}{-fontstyle}.css");
    var r = e.toString();
    if (r in la) return la[r];
    for (var n = [], a = 0, i = e.length; a < i; ++a) {
      e[a] = e[a].replace("Arial Unicode MS", "Arial");
      var o = e[a],
        s = jn(o, 1);
      u.registerFont(s);
      var l = s.split(" ");
      n.push([l.slice(3).join(" ").replace(/"/g, ""), l[1], l[0]]);
    }
    for (var p = 0, f = n.length; p < f; ++p) {
      var c = n[p],
        d = c[0];
      if (!ua(d) && 100 !== u.checkedFonts.get(c[2] + "\n" + c[1] + " \n" + d)) {
        var y = t.replace("{font-family}", d.replace(/ /g, "-").toLowerCase()).replace("{Font+Family}", d.replace(/ /g, "+")).replace("{fontweight}", c[1]).replace("{-fontstyle}", c[2].replace("normal", "").replace(/(.+)/, "-$1")).replace("{fontstyle}", c[2]);
        if (!document.querySelector('link[href="' + y + '"]')) {
          var m = document.createElement("link");
          m.href = y, m.rel = "stylesheet", document.head.appendChild(m);
        }
      }
    }
    return la[r] = e, e;
  }
  var fa,
    ca,
    da = {
      Point: 1,
      MultiPoint: 1,
      LineString: 2,
      MultiLineString: 2,
      Polygon: 3,
      MultiPolygon: 3
    },
    ya = {
      center: [.5, .5],
      left: [0, .5],
      right: [1, .5],
      top: [.5, 0],
      bottom: [.5, 1],
      "top-left": [0, 0],
      "top-right": [1, 0],
      "bottom-left": [0, 1],
      "bottom-right": [1, 1]
    },
    ma = {},
    ha = {
      zoom: 0
    };
  function va(e, t, r, n, a, i, o) {
    var s = e.id;
    i || (i = {}, console.warn("No functionCache provided to getValue()")), i[s] || (i[s] = {});
    var u,
      l = i[s];
    if (!l[r]) {
      var p = (e[t] || ma)[r],
        f = an[t + "_" + e.type][r];
      void 0 === p && (p = f["default"]);
      var c = (u = p, Array.isArray(u) && u.length > 0 && "string" == typeof u[0] && u[0] in $r);
      if (!c && Hr(p) && (p = fe(p, f), c = !0), c) {
        var d = function (e, t) {
          var r = tn(e, t);
          if ("error" === r.result) throw new Error(r.value.map(function (e) {
            return e.key + ": " + e.message;
          }).join(", "));
          return r.value;
        }(p, f);
        l[r] = d.evaluate.bind(d);
      } else "color" == f.type && (p = le.parse(p)), l[r] = function () {
        return p;
      };
    }
    return ha.zoom = n, l[r](ha, a, o);
  }
  function ga(e, t, r, n) {
    return va(e, "layout", "icon-allow-overlap", t, r, n) ? va(e, "layout", "icon-ignore-placement", t, r, n) ? "none" : "obstacle" : "declutter";
  }
  function ba(e, t, r, n, a) {
    return a || console.warn("No filterCache provided to evaluateFilter()"), e in a || (a[e] = sn(t).filter), ha.zoom = n, a[e](ha, r);
  }
  var xa = !1;
  function wa(e, t) {
    if (e) {
      if (!xa && (0 === e.a || 0 === t)) return;
      var r = e.a;
      return t = void 0 === t ? 1 : t, 0 === r ? "transparent" : "rgba(" + Math.round(255 * e.r / r) + "," + Math.round(255 * e.g / r) + "," + Math.round(255 * e.b / r) + "," + r * t + ")";
    }
    return e;
  }
  var za = /\{[^{}}]*\}/g;
  function ka(e, t) {
    return e.replace(za, function (e) {
      return t[e.slice(1, -1)] || "";
    });
  }
  var Ma = !1;
  var Sa = {};
  function ja(e, t, r, n, a, i, o, s) {
    if (void 0 === n && (n = Rn), void 0 === a && (a = void 0), void 0 === i && (i = void 0), void 0 === o && (o = void 0), void 0 === s && (s = void 0), "string" == typeof t && (t = JSON.parse(t)), 8 != t.version) throw new Error("glStyle version 8 required.");
    var u, l;
    if (Sa[Pn(t, e)] = Array.from(arguments), i) if ("undefined" != typeof Image) {
      var p = new Image();
      p.crossOrigin = "anonymous", p.onload = function () {
        u = p, l = [p.width, p.height], e.changed(), p.onload = null;
      }, p.src = i;
    } else if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope) {
      var f = self;
      f.postMessage({
        action: "loadImage",
        src: i
      }), f.addEventListener("message", function (e) {
        "imageLoaded" === e.data.action && e.data.src === i && (u = e.data.image, l = [u.width, u.height]);
      });
    }
    for (var c, d = wn(t.layers), y = {}, m = [], h = {}, v = {}, g = Dn(t), b = On(t), x = 0, w = d.length; x < w; ++x) {
      var z = d[x],
        k = z.id;
      if ("string" == typeof r && z.source == r || -1 !== r.indexOf(k)) {
        var M = z["source-layer"];
        if (c) {
          if (z.source !== c) throw new Error('Layer "' + k + '" does not use source "' + c);
        } else {
          c = z.source;
          var S = t.sources[c];
          if (!S) throw new Error('Source "' + c + '" is not defined');
          var j = S.type;
          if ("vector" !== j && "geojson" !== j) throw new Error('Source "' + c + '" is not of type "vector" or "geojson", but "' + j + '"');
        }
        var q = y[M];
        q || (q = [], y[M] = q), q.push({
          layer: z,
          index: x
        }), m.push(k);
      }
    }
    var T = new O["default"](),
      _ = new F["default"](),
      E = [],
      C = function C(r, i) {
        var p = r.getProperties(),
          f = y[p.layer];
        if (f) {
          var c = n.indexOf(i);
          -1 == c && (c = Un(i, n));
          for (var d, m = da[r.getGeometry().getType()], x = {
              id: r.getId(),
              properties: p,
              type: m
            }, w = e.get("mapbox-featurestate")[r.getId()], z = -1, k = 0, M = f.length; k < M; ++k) {
            var S = f[k],
              j = S.layer,
              q = j.id,
              C = j.layout || ma,
              A = j.paint || ma;
            if (!("none" === C.visibility || "minzoom" in j && c < j.minzoom || "maxzoom" in j && c >= j.maxzoom)) {
              var N = j.filter;
              if (!N || ba(q, N, x, c, b)) {
                d = j;
                var U = void 0,
                  V = void 0,
                  G = void 0,
                  J = void 0,
                  W = void 0,
                  Z = void 0,
                  $ = S.index;
                if (3 == m && ("fill" == j.type || "fill-extrusion" == j.type)) if (V = va(j, "paint", j.type + "-opacity", c, x, g, w), j.type + "-pattern" in A) {
                  var B = va(j, "paint", j.type + "-pattern", c, x, g, w);
                  if (B) {
                    var X = "string" == typeof B ? ka(B, p) : B.toString();
                    if (u && a && a[X]) {
                      ++z, (Z = E[z]) && Z.getFill() && !Z.getStroke() && !Z.getText() || (Z = new L["default"]({
                        fill: new F["default"]()
                      }), E[z] = Z), G = Z.getFill(), Z.setZIndex($);
                      var H = X + "." + V,
                        Y = v[H];
                      if (!Y) {
                        var K = a[X],
                          Q = Nn(K.width, K.height),
                          ee = Q.getContext("2d");
                        ee.globalAlpha = V, ee.drawImage(u, K.x, K.y, K.width, K.height, 0, 0, K.width, K.height), Y = ee.createPattern(Q, "repeat"), v[H] = Y;
                      }
                      G.setColor(Y);
                    }
                  }
                } else U = wa(va(j, "paint", j.type + "-color", c, x, g, w), V), j.type + "-outline-color" in A && (W = wa(va(j, "paint", j.type + "-outline-color", c, x, g, w), V)), W || (W = U), (U || W) && (++z, (!(Z = E[z]) || U && !Z.getFill() || !U && Z.getFill() || W && !Z.getStroke() || !W && Z.getStroke() || Z.getText()) && (Z = new L["default"]({
                  fill: U ? new F["default"]() : void 0,
                  stroke: W ? new O["default"]() : void 0
                }), E[z] = Z), U && (G = Z.getFill()).setColor(U), W && ((J = Z.getStroke()).setColor(W), J.setWidth(.5)), Z.setZIndex($));
                if (1 != m && "line" == j.type) {
                  U = !("line-pattern" in A) && "line-color" in A ? wa(va(j, "paint", "line-color", c, x, g, w), va(j, "paint", "line-opacity", c, x, g, w)) : void 0;
                  var te = va(j, "paint", "line-width", c, x, g, w);
                  U && te > 0 && (++z, (Z = E[z]) && Z.getStroke() && !Z.getFill() && !Z.getText() || (Z = new L["default"]({
                    stroke: new O["default"]()
                  }), E[z] = Z), (J = Z.getStroke()).setLineCap(va(j, "layout", "line-cap", c, x, g, w)), J.setLineJoin(va(j, "layout", "line-join", c, x, g, w)), J.setMiterLimit(va(j, "layout", "line-miter-limit", c, x, g, w)), J.setColor(U), J.setWidth(te), J.setLineDash(A["line-dasharray"] ? va(j, "paint", "line-dasharray", c, x, g, w).map(function (e) {
                    return e * te;
                  }) : null), Z.setZIndex($));
                }
                var re = !1,
                  ne = null,
                  ae = 0,
                  ie = void 0,
                  oe = void 0,
                  se = void 0;
                if ((1 == m || 2 == m) && "icon-image" in C) {
                  var ue = va(j, "layout", "icon-image", c, x, g, w);
                  if (ue) {
                    ie = "string" == typeof ue ? ka(ue, p) : ue.toString();
                    var le = void 0,
                      pe = s ? s(e, ie) : void 0;
                    if (u && a && a[ie] || pe) {
                      var fe = va(j, "layout", "icon-rotation-alignment", c, x, g, w);
                      if (2 == m) {
                        var ce = r.getGeometry();
                        if (ce.getFlatMidpoint || ce.getFlatMidpoints) {
                          var de = ce.getExtent();
                          if (Math.sqrt(Math.max(Math.pow((de[2] - de[0]) / i, 2), Math.pow((de[3] - de[1]) / i, 2))) > 150) {
                            var ye = "MultiLineString" === ce.getType() ? ce.getFlatMidpoints() : ce.getFlatMidpoint();
                            if (ca || (fa = [NaN, NaN], ca = new D["default"]("Point", fa, [], {}, null)), le = ca, fa[0] = ye[0], fa[1] = ye[1], "line" === va(j, "layout", "symbol-placement", c, x, g, w) && "map" === fe) for (var me = ce.getStride(), he = ce.getFlatCoordinates(), ve = 0, ge = he.length - me; ve < ge; ve += me) {
                              var be = he[ve],
                                xe = he[ve + 1],
                                we = he[ve + me],
                                ze = he[ve + me + 1],
                                ke = Math.min(be, we),
                                Me = Math.min(xe, ze),
                                Se = Math.max(be, we),
                                je = Math.max(xe, ze);
                              if (ye[0] >= ke && ye[0] <= Se && ye[1] >= Me && ye[1] <= je) {
                                ae = Math.atan2(xe - ze, we - be);
                                break;
                              }
                            }
                          }
                        }
                      }
                      if (2 !== m || le) {
                        var qe = va(j, "layout", "icon-size", c, x, g, w),
                          Te = void 0 !== A["icon-color"] ? va(j, "paint", "icon-color", c, x, g, w) : null;
                        if (!Te || 0 !== Te.a) {
                          var _e = va(j, "paint", "icon-halo-color", c, x, g, w),
                            Ee = va(j, "paint", "icon-halo-width", c, x, g, w),
                            Ce = ie + "." + qe + "." + Ee + "." + _e;
                          if (null !== Te && (Ce += "." + Te), !(oe = h[Ce])) {
                            var Ae = ga(j, c, x, g),
                              Ie = void 0;
                            "icon-offset" in C && ((Ie = va(j, "layout", "icon-offset", c, x, g, w).slice(0))[1] *= -1);
                            var Fe = Te ? [255 * Te.r, 255 * Te.g, 255 * Te.b, Te.a] : void 0;
                            if (pe) {
                              var Pe = {
                                color: Fe,
                                rotateWithView: "map" === fe,
                                displacement: Ie,
                                declutterMode: Ae
                              };
                              "string" == typeof pe ? Pe.src = pe : (Pe.img = pe, Pe.imgSize = [pe.width, pe.height]), oe = new P["default"](Pe);
                            } else {
                              var De = a[ie],
                                Oe = void 0,
                                Le = void 0,
                                Re = void 0,
                                Ne = void 0;
                              Ee ? Le = [(Oe = Bn(u, De, Ee, _e)).width, Oe.height] : (Oe = u, Le = l, Re = [De.width, De.height], Ne = [De.x, De.y]), oe = new P["default"]({
                                color: Fe,
                                img: Oe,
                                imgSize: Le,
                                size: Re,
                                offset: Ne,
                                rotateWithView: "map" === fe,
                                scale: qe / De.pixelRatio,
                                displacement: Ie,
                                declutterMode: Ae
                              });
                            }
                            h[Ce] = oe;
                          }
                        }
                        oe && (++z, (Z = E[z]) && Z.getImage() && !Z.getFill() && !Z.getStroke() || (Z = new L["default"](), E[z] = Z), Z.setGeometry(le), oe.setRotation(ae + Ln(va(j, "layout", "icon-rotate", c, x, g, w))), oe.setOpacity(va(j, "paint", "icon-opacity", c, x, g, w)), oe.setAnchor(ya[va(j, "layout", "icon-anchor", c, x, g, w)]), Z.setImage(oe), ne = Z.getText(), Z.setText(void 0), Z.setZIndex($), re = !0, se = !1);
                      } else se = !0;
                    }
                  }
                }
                if (1 == m && "circle" === j.type) {
                  ++z, (Z = E[z]) && Z.getImage() && !Z.getFill() && !Z.getStroke() || (Z = new L["default"](), E[z] = Z);
                  var Ue = "circle-radius" in A ? va(j, "paint", "circle-radius", c, x, g, w) : 5,
                    Ve = wa(va(j, "paint", "circle-stroke-color", c, x, g, w), va(j, "paint", "circle-stroke-opacity", c, x, g, w)),
                    Ge = wa(va(j, "paint", "circle-color", c, x, g, w), va(j, "paint", "circle-opacity", c, x, g, w)),
                    Je = va(j, "paint", "circle-stroke-width", c, x, g, w),
                    We = Ue + "." + Ve + "." + Ge + "." + Je;
                  (oe = h[We]) || (oe = new I["default"]({
                    radius: Ue,
                    stroke: Ve && Je > 0 ? new O["default"]({
                      width: Je,
                      color: Ve
                    }) : void 0,
                    fill: Ge ? new F["default"]({
                      color: Ge
                    }) : void 0,
                    declutterMode: "none"
                  }), h[We] = oe), Z.setImage(oe), ne = Z.getText(), Z.setText(void 0), Z.setGeometry(void 0), Z.setZIndex($), re = !0;
                }
                var Ze = void 0,
                  $e = void 0,
                  Be = void 0,
                  Xe = void 0,
                  He = void 0,
                  Ye = void 0;
                if ("text-field" in C) {
                  Xe = Math.round(va(j, "layout", "text-size", c, x, g, w));
                  var Ke = va(j, "layout", "text-font", c, x, g, w);
                  Be = va(j, "layout", "text-line-height", c, x, g, w), ($e = jn(o ? o(Ke, t.metadata ? t.metadata["ol:webfonts"] : void 0) : Ke, Xe, Be)).includes("sans-serif") || ($e += ",sans-serif"), He = va(j, "layout", "text-letter-spacing", c, x, g, w), Ye = va(j, "layout", "text-max-width", c, x, g, w);
                  var Qe = va(j, "layout", "text-field", c, x, g, w);
                  Ze = "object" == _typeof(Qe) && Qe.sections ? 1 === Qe.sections.length ? Qe.toString() : Qe.sections.reduce(function (e, t, r) {
                    var n = t.fontStack ? t.fontStack.split(",") : Ke,
                      a = jn(o ? o(n) : n, Xe * (t.scale || 1), Be),
                      i = t.text;
                    if ("\n" === i) return e.push("\n", ""), e;
                    if (2 != m) {
                      for (var s = 0, u = (i = aa(i, a, Ye, He).split("\n")).length; s < u; ++s) s > 0 && e.push("\n", ""), e.push(i[s], a);
                      return e;
                    }
                    e.push(ea(i, He), a);
                  }, []) : ka(Qe, p).trim(), V = va(j, "paint", "text-opacity", c, x, g, w);
                }
                if (Ze && V && !se) {
                  re || (++z, (Z = E[z]) && Z.getText() && !Z.getFill() && !Z.getStroke() || (Z = new L["default"](), E[z] = Z), Z.setImage(void 0), Z.setGeometry(void 0)), Z.getText() || Z.setText(ne || new R["default"]({
                    padding: [2, 2, 2, 2]
                  })), ne = Z.getText();
                  var et = C["text-transform"];
                  "uppercase" == et ? Ze = Array.isArray(Ze) ? Ze.map(function (e, t) {
                    return t % 2 ? e : e.toUpperCase();
                  }) : Ze.toUpperCase() : "lowercase" == et && (Ze = Array.isArray(Ze) ? Ze.map(function (e, t) {
                    return t % 2 ? e : e.toLowerCase();
                  }) : Ze.toLowerCase());
                  var tt = Array.isArray(Ze) ? Ze : 2 == m ? ea(Ze, He) : aa(Ze, $e, Ye, He);
                  ne.setText(tt), ne.setFont($e), ne.setRotation(Ln(va(j, "layout", "text-rotate", c, x, g, w)));
                  var rt = va(j, "layout", "text-anchor", c, x, g, w),
                    nt = re || 1 == m ? "point" : va(j, "layout", "symbol-placement", c, x, g, w),
                    at = void 0;
                  if ("line-center" === nt ? (ne.setPlacement("line"), at = "center") : ne.setPlacement(nt), "line" === nt && "function" == typeof ne.setRepeat) {
                    var it = va(j, "layout", "symbol-spacing", c, x, g, w);
                    ne.setRepeat(2 * it);
                  }
                  ne.setOverflow("point" === nt);
                  var ot = va(j, "paint", "text-halo-width", c, x, g, w),
                    st = va(j, "layout", "text-offset", c, x, g, w),
                    ut = va(j, "paint", "text-translate", c, x, g, w),
                    lt = 0,
                    pt = 0;
                  if ("point" == nt) {
                    at = "center", -1 !== rt.indexOf("left") ? (at = "left", pt = ot) : -1 !== rt.indexOf("right") && (at = "right", pt = -ot);
                    var ft = va(j, "layout", "text-rotation-alignment", c, x, g, w);
                    ne.setRotateWithView("map" == ft);
                  } else ne.setMaxAngle(Ln(va(j, "layout", "text-max-angle", c, x, g, w)) * Ze.length / tt.length), ne.setRotateWithView(!1);
                  ne.setTextAlign(at);
                  var ct = "middle";
                  0 == rt.indexOf("bottom") ? (ct = "bottom", lt = -ot - .5 * (Be - 1) * Xe) : 0 == rt.indexOf("top") && (ct = "top", lt = ot + .5 * (Be - 1) * Xe), ne.setTextBaseline(ct);
                  var dt = va(j, "layout", "text-justify", c, x, g, w);
                  ne.setJustify("auto" === dt ? void 0 : dt), ne.setOffsetX(st[0] * Xe + pt + ut[0]), ne.setOffsetY(st[1] * Xe + lt + ut[1]), _.setColor(wa(va(j, "paint", "text-color", c, x, g, w), V)), ne.setFill(_);
                  var yt = wa(va(j, "paint", "text-halo-color", c, x, g, w), V);
                  if (yt) {
                    T.setColor(yt), ot *= 2;
                    var mt = .5 * Xe;
                    T.setWidth(ot <= mt ? ot : mt), ne.setStroke(T);
                  } else ne.setStroke(void 0);
                  var ht = va(j, "layout", "text-padding", c, x, g, w),
                    vt = ne.getPadding();
                  ht !== vt[0] && (vt[0] = ht, vt[1] = ht, vt[2] = ht, vt[3] = ht), Z.setZIndex($);
                }
              }
            }
          }
          return z > -1 ? (E.length = z + 1, Ma && ("function" == typeof r.set ? r.set("mapbox-layer", d) : r.getProperties()["mapbox-layer"] = d), E) : void 0;
        }
      };
    return e.setStyle(C), e.set("mapbox-source", c), e.set("mapbox-layers", m), e.set("mapbox-featurestate", e.get("mapbox-featurestate") || {}), C;
  }
  function qa(e, t) {
    var r,
      n,
      a,
      i,
      o,
      s,
      u,
      l,
      p,
      f,
      c,
      d,
      y,
      m,
      h,
      v,
      g,
      b,
      x,
      w,
      z = e[0],
      k = z.width,
      M = z.height,
      S = z.data,
      j = new Uint8ClampedArray(S.length),
      q = 2 * t.resolution,
      T = k - 1,
      _ = M - 1,
      E = [0, 0, 0, 0],
      C = 2 * Math.PI,
      A = Math.PI / 2,
      I = Math.PI * t.sunEl / 180,
      F = Math.PI * t.sunAz / 180,
      P = Math.cos(I),
      D = Math.sin(I),
      O = t.highlightColor,
      L = t.shadowColor,
      R = t.accentColor,
      N = t.encoding;
    function U(e, t) {
      return void 0 === t && (t = "mapbox"), "mapbox" === t ? .1 * (256 * e[0] * 256 + 256 * e[1] + e[2]) - 1e4 : "terrarium" === t ? 256 * e[0] + e[1] + e[2] / 256 - 32768 : void 0;
    }
    for (n = 0; n <= _; ++n) for (i = 0 === n ? 0 : n - 1, o = n === _ ? _ : n + 1, r = 0; r <= T; ++r) a = r === T ? T : r + 1, s = 4 * (n * k + (0 === r ? 0 : r - 1)), E[0] = S[s], E[1] = S[s + 1], E[2] = S[s + 2], E[3] = S[s + 3], u = t.vert * U(E, N), s = 4 * (n * k + a), E[0] = S[s], E[1] = S[s + 1], E[2] = S[s + 2], E[3] = S[s + 3], l = (t.vert * U(E, N) - u) / q, s = 4 * (i * k + r), E[0] = S[s], E[1] = S[s + 1], E[2] = S[s + 2], E[3] = S[s + 3], u = t.vert * U(E, N), s = 4 * (o * k + r), E[0] = S[s], E[1] = S[s + 1], E[2] = S[s + 2], E[3] = S[s + 3], p = (t.vert * U(E, N) - u) / q, c = (c = Math.atan2(p, -l)) < 0 ? A - c : c > A ? C - c + A : A - c, f = Math.atan(Math.sqrt(l * l + p * p)), w = D * Math.cos(f) + P * Math.sin(f) * Math.cos(F - c), d = Math.cos(f), y = 255 * w, g = Math.min(Math.max(2 * t.sunEl, 0), 1), b = 1.875 - 1.75 * t.opacity, x = .5 !== t.opacity ? A * ((Math.pow(b, f) - 1) / (Math.pow(b, A) - 1)) : f, h = {
      r: (1 - d) * R.r * g * 255,
      g: (1 - d) * R.g * g * 255,
      b: (1 - d) * R.b * g * 255,
      a: (1 - d) * R.a * g * 255
    }, m = Math.abs(((c + F) / Math.PI + .5) % 2 - 1), v = {
      r: (O.r * (1 - m) + L.r * m) * y,
      g: (O.g * (1 - m) + L.g * m) * y,
      b: (O.b * (1 - m) + L.b * m) * y,
      a: (O.a * (1 - m) + L.a * m) * y
    }, j[s = 4 * (n * k + r)] = h.r * (1 - m) + v.r, j[s + 1] = h.g * (1 - m) + v.g, j[s + 2] = h.b * (1 - m) + v.b, j[s + 3] = S[s + 3] * t.opacity * g * Math.sin(x);
    return new ImageData(j, k, M);
  }
  function Ta(e, t) {
    return void 0 === t && (t = 512), e.getExtent() ? _.createXYZ({
      extent: e.getExtent(),
      tileSize: t,
      maxZoom: 22
    }).getResolutions() : Rn;
  }
  function _a(e, t) {
    t.accessToken || (t = Object.assign({}, t), new URL(e).searchParams.forEach(function (e, r) {
      t.accessToken = e, t.accessTokenParam = r;
    }));
    return t;
  }
  function Ea(e, t, r, n, a) {
    var i, o, s, u;
    void 0 === r && (r = ""), void 0 === n && (n = {}), void 0 === a && (a = void 0);
    var l = !0;
    return "string" == typeof r || Array.isArray(r) ? u = r : (u = (s = r).source || s.layers, n = s), "string" == typeof n ? (i = n, s = {}) : (i = n.styleUrl, s = n), !1 === s.updateSource && (l = !1), a || (a = s.resolutions), i || "string" != typeof t || t.trim().startsWith("{") || (i = t), i && (i = i.startsWith("data:") ? location.href : _n(i, s.accessToken), s = _a(i, s)), new Promise(function (r, n) {
      Jn(t, s).then(function (t) {
        if (8 != t.version) return n(new Error("glStyle version 8 required."));
        if (!(e instanceof Y["default"] || e instanceof Q["default"])) return n(new Error("Can only apply to VectorLayer or VectorTileLayer"));
        var p,
          f,
          c,
          d = e instanceof Q["default"] ? "vector" : "geojson";
        if (u ? o = Array.isArray(u) ? t.layers.find(function (e) {
          return e.id === u[0];
        }).source : u : (o = Object.keys(t.sources).find(function (e) {
          return t.sources[e].type === d;
        }), u = o), !o) return n(new Error("No " + d + " source found in the glStyle."));
        function y() {
          if (!l) return Promise.resolve();
          if (e instanceof Q["default"]) return Pa(t.sources[o], i, s).then(function (t) {
            var r = e.getSource();
            if (r ? t !== r && (r.setTileUrlFunction(t.getTileUrlFunction()), "function" == typeof r.setUrls && "function" == typeof t.getUrls && r.setUrls(t.getUrls()), r.format_ || (r.format_ = t.format_), r.getAttributions() || r.setAttributions(t.getAttributions()), r.getTileLoadFunction() === S.defaultLoadFunction && r.setTileLoadFunction(t.getTileLoadFunction()), q.equivalent(r.getProjection(), t.getProjection()) && (r.tileGrid = t.getTileGrid())) : e.setSource(t), !isFinite(e.getMaxResolution()) && !isFinite(e.getMinZoom())) {
              var n = e.getSource().getTileGrid();
              e.setMaxResolution(n.getResolution(n.getMinZoom()));
            }
          });
          var r = t.sources[o],
            n = e.getSource();
          n && n.get("mapbox-source") === r || (n = La(r, i, s));
          var a = e.getSource();
          return a ? n !== a && (a.getAttributions() || a.setAttributions(n.getAttributions()), a.format_ || (a.format_ = n.getFormat()), a.url_ = n.getUrl()) : e.setSource(n), Promise.resolve();
        }
        function m() {
          if (c || t.sprite && !p) c ? (e.setStyle(c), y().then(r)["catch"](n)) : n(new Error("Something went wrong trying to apply style."));else {
            if (s.projection && !a) {
              var i = q.get(s.projection).getUnits();
              "m" !== i && (a = Rn.map(function (e) {
                return e / q.METERS_PER_UNIT[i];
              }));
            }
            c = ja(e, t, u, a, p, f, pa, s.getImage), e.getStyle() ? y().then(r)["catch"](n) : n(new Error("Nothing to show for source [" + o + "]"));
          }
        }
        if (t.sprite) {
          var h = new URL(function (e, t, r) {
              var n = Tn(e);
              if (!n) return decodeURI(new URL(e, r).href);
              var a = "sprites/";
              if (0 !== n.indexOf(a)) throw new Error("unexpected sprites url: " + e);
              var i = n.slice(a.length);
              return qn + "/styles/v1/" + i + "/sprite?access_token=" + t;
            }(t.sprite, s.accessToken, i || location.href)),
            v = .5 == (window.devicePixelRatio >= 1.5 ? .5 : 1) ? "@2x" : "",
            g = h.origin + h.pathname + v + ".json" + h.search;
          new Promise(function (e, t) {
            Gn("Sprite", g, s).then(e)["catch"](function (r) {
              Gn("Sprite", g = h.origin + h.pathname + ".json" + h.search, s).then(e)["catch"](t);
            });
          }).then(function (e) {
            if (void 0 === e && n(new Error("No sprites found.")), p = e, f = h.origin + h.pathname + v + ".png" + h.search, s.transformRequest) {
              var t = s.transformRequest(f, "SpriteImage");
              t instanceof Request && (f = encodeURI(t.url));
            }
            m();
          })["catch"](function (e) {
            n(new Error("Sprites cannot be loaded: " + g + ": " + e.message));
          });
        } else m();
      })["catch"](n);
    });
  }
  var Ca = {};
  function Aa(e, t, r) {
    var n = new X["default"]({
        tileJSON: t,
        tileSize: e.tileSize || t.tileSize || 512
      }),
      a = n.getTileJSON(),
      i = n.getTileGrid(),
      o = q.get(r.projection || "EPSG:3857"),
      s = function (e, t) {
        var r = e.bounds;
        if (r) {
          var n = q.fromLonLat([r[0], r[1]], t),
            a = q.fromLonLat([r[2], r[3]], t);
          return [n[0], n[1], a[0], a[1]];
        }
        return q.get(t).getExtent();
      }(a, o),
      u = o.getExtent(),
      l = a.minzoom || 0,
      p = a.maxzoom || 22,
      f = {
        attributions: n.getAttributions(),
        projection: o,
        tileGrid: new B["default"]({
          origin: u ? E.getTopLeft(u) : i.getOrigin(0),
          extent: s || i.getExtent(),
          minZoom: l,
          resolutions: Ta(o, t.tileSize).slice(0, p + 1),
          tileSize: i.getTileSize(0)
        })
      };
    return Array.isArray(a.tiles) ? f.urls = a.tiles : f.url = a.tiles, f;
  }
  function Ia(e, t, r, n) {
    var a = {
        id: e.id,
        type: e.type
      },
      i = e.layout || {},
      o = e.paint || {};
    a.paint = o;
    var s,
      u,
      l = Un(t, r.resolutions || Rn);
    return void 0 !== o["background-color"] && (s = va(a, "paint", "background-color", l, Ca, n)), void 0 !== o["background-opacity"] && (u = va(a, "paint", "background-opacity", l, Ca, n)), "none" == i.visibility ? void 0 : wa(s, u);
  }
  function Fa(e, t, r) {
    var n = document.createElement("div");
    return n.className = "ol-mapbox-style-background", n.style.position = "absolute", n.style.width = "100%", n.style.height = "100%", new V["default"]({
      source: new $["default"]({}),
      render: function render(a) {
        var i = Ia(e, a.viewState.resolution, t, r);
        return n.style.backgroundColor = i, n;
      }
    });
  }
  function Pa(e, t, r) {
    return new Promise(function (n, a) {
      $n(e, t, r).then(function (t) {
        var a = Aa(e, t, r);
        a.format = new J["default"](), n(new ee["default"](a));
      })["catch"](a);
    });
  }
  function Da(e) {
    return "{bbox-" + (e ? e.getCode() : "EPSG:3857").toLowerCase().replace(/[^a-z0-9]/g, "-") + "}";
  }
  function Oa(e, t, r) {
    var n = new H["default"]();
    return $n(e, t, r).then(function (t) {
      var a = new X["default"]({
        interpolate: void 0 === r.interpolate || r.interpolate,
        transition: 0,
        crossOrigin: "anonymous",
        tileJSON: t
      });
      a.tileGrid = Aa(e, t, r).tileGrid, r.projection && (a.projection = q.get(r.projection));
      var i = a.getTileUrlFunction();
      a.setTileUrlFunction(function (e, t, r) {
        var n = Da(r),
          o = i(e, t, r);
        if (-1 != o.indexOf(n)) {
          var s = a.getTileGrid().getTileCoordExtent(e);
          o = o.replace(n, s.toString());
        }
        return o;
      }), a.set("mapbox-source", e), n.setSource(a);
    })["catch"](function (e) {
      n.setSource(void 0);
    }), n;
  }
  function La(e, t, r) {
    var n = r.projection ? new N["default"]({
        dataProjection: r.projection
      }) : new N["default"](),
      a = e.data,
      i = {};
    if ("string" == typeof a) {
      var o = En(a, r.accessToken, r.accessTokenParam || "access_token", t || location.href);
      if (r.transformRequest) {
        var s = r.transformRequest(o, "GeoJSON");
        s instanceof Request && (o = decodeURI(s.url));
      }
      if (/\{bbox-[0-9a-z-]+\}/.test(o)) {
        var u = new K["default"]({
          attributions: e.attribution,
          format: n,
          url: function url(e, t, r) {
            var n = Da(r);
            return o.replace(n, "" + e.join(","));
          },
          strategy: T.bbox
        });
        return u.set("mapbox-source", e), u;
      }
      return new K["default"]({
        attributions: e.attribution,
        format: n,
        url: o
      });
    }
    i.features = n.readFeatures(a, {
      featureProjection: q.getUserProjection() || "EPSG:3857"
    });
    var l = new K["default"](Object.assign({
      attributions: e.attribution,
      format: n
    }, i));
    return l.set("mapbox-source", e), l;
  }
  function Ra(e, t, r) {
    var n = null;
    return function (a) {
      e.paint && "raster-opacity" in e.paint && a.frameState.viewState.zoom !== n && (n = a.frameState.viewState.zoom, delete r[e.id], function (e, t, r, n) {
        var a = va(e, "paint", "raster-opacity", r, Ca, n);
        t.setOpacity(a);
      }(e, t, n, r));
    };
  }
  function Na(e, t, r, n) {
    var a = [],
      i = null;
    if (t instanceof W["default"]) {
      if (!(i = t.getView()).isDef() && !i.getRotation() && !i.getResolutions()) {
        var o = n.projection ? q.get(n.projection) : i.getProjection();
        i = new te["default"](Object.assign(i.getProperties(), {
          maxResolution: Rn[0] / q.METERS_PER_UNIT[o.getUnits()],
          projection: n.projection || i.getProjection()
        })), t.setView(i);
      }
      "center" in e && !i.getCenter() && i.setCenter(q.fromLonLat(e.center, i.getProjection())), "zoom" in e && void 0 === i.getZoom() && i.setResolution(Rn[0] / q.METERS_PER_UNIT[i.getProjection().getUnits()] / Math.pow(2, e.zoom)), i.getCenter() && void 0 !== i.getZoom() || i.fit(i.getProjection().getExtent(), {
        nearest: !0,
        size: t.getSize()
      });
    }
    for (var s, u, l, p, f = e.layers, c = [], d = function d(i, o) {
        var d,
          y,
          m,
          h = f[i],
          v = h.type;
        if ("heatmap" == v) throw new Error(v + " layers are not supported");
        if (p = h.source || (d = f, y = h.ref, d.some(function (e) {
          if (e.id == y) return m = e.source, !0;
        }), m), !p || p != l) {
          c.length && (a.push(Va(s, c, e, r, t, n)), c = []);
          var g = Dn(e);
          if (u = e.sources[p], "background" == v) s = Fa(h, n, g);else if ("vector" == u.type) s = function (e, t, r) {
            var n = new Q["default"]({
              declutter: !0,
              visible: !1
            });
            return Pa(e, t, r).then(function (t) {
              t.set("mapbox-source", e), n.setSource(t);
            })["catch"](function (e) {
              n.setSource(void 0);
            }), n;
          }(u, r, n);else if ("raster" == u.type) c = [], (s = Oa(u, r, n)).setVisible(!h.layout || "none" !== h.layout.visibility), s.on("prerender", Ra(h, s, g));else if ("geojson" == u.type) s = function (e, t, r) {
            return new Y["default"]({
              declutter: !0,
              source: La(e, t, r),
              visible: !1
            });
          }(u, r, n);else if ("raster-dem" == u.type && "hillshade" == h.type) {
            c = [];
            var b = function (e, t, r) {
              var n = Oa(e, t, r);
              return new U["default"]({
                source: new Z["default"]({
                  operationType: "image",
                  operation: qa,
                  sources: [n]
                })
              });
            }(u, r, n);
            s = b, b.getSource().on("beforeoperations", function (e) {
              var t = e.data;
              t.resolution = e.resolution;
              var r = Un(e.resolution, n.resolutions || Rn);
              t.encoding = u.encoding, t.vert = 5 * va(h, "paint", "hillshade-exaggeration", r, Ca, g), t.sunAz = va(h, "paint", "hillshade-illumination-direction", r, Ca, g), t.sunEl = 35, t.opacity = .3, t.highlightColor = va(h, "paint", "hillshade-highlight-color", r, Ca, g), t.shadowColor = va(h, "paint", "hillshade-shadow-color", r, Ca, g), t.accentColor = va(h, "paint", "hillshade-accent-color", r, Ca, g);
            }), s.setVisible(!h.layout || "none" !== h.layout.visibility);
          }
          l = p, s && s.set("mapbox-source", l);
        }
        c.push(h.id);
      }, y = 0, m = f.length; y < m; ++y) d(y);
    return a.push(Va(s, c, e, r, t, n)), t.set("mapbox-style", e), Promise.all(a);
  }
  function Ua(e, t, r) {
    var n, a;
    if (void 0 === r && (r = {}), a = "string" == typeof e || e instanceof HTMLElement ? new W["default"]({
      target: e
    }) : e, "string" == typeof t) {
      var i = t.startsWith("data:") ? location.href : _n(t, r.accessToken);
      r = _a(i, r), n = new Promise(function (e, n) {
        Jn(t, r).then(function (t) {
          Na(t, a, i, r).then(function () {
            e(a);
          })["catch"](n);
        })["catch"](function (e) {
          n(new Error("Could not load " + t + ": " + e.message));
        });
      });
    } else n = new Promise(function (e, n) {
      Na(t, a, !r.styleUrl || r.styleUrl.startsWith("data:") ? location.href : _n(r.styleUrl, r.accessToken), r).then(function () {
        e(a);
      })["catch"](n);
    });
    return n;
  }
  function Va(e, t, r, n, a, i) {
    void 0 === i && (i = {});
    for (var o = 24, s = 0, u = r.layers, l = 0, p = u.length; l < p; ++l) {
      var f = u[l];
      -1 !== t.indexOf(f.id) && (o = Math.min("minzoom" in f ? f.minzoom : 0, o), s = Math.max("maxzoom" in f ? f.maxzoom : 24, s));
    }
    return new Promise(function (u, l) {
      var p = function p() {
        var p = e.getSource();
        if (p && "error" !== p.getState()) {
          if ("getTileGrid" in p) {
            var f = p.getTileGrid();
            if (f) {
              var c = f.getMinZoom();
              (o > 0 || c > 0) && e.setMaxResolution(Math.min(Rn[o], f.getResolution(c)) + 1e-9), s < 24 && e.setMinResolution(Rn[s] + 1e-9);
            }
          } else o > 0 && e.setMaxResolution(Rn[o] + 1e-9);
          p instanceof K["default"] || p instanceof ee["default"] ? Ea(e, r, t, Object.assign({
            styleUrl: n
          }, i)).then(function () {
            !function (e, t) {
              function r() {
                var r = t.get("mapbox-style");
                if (r) {
                  var n = wn(r.layers),
                    a = e.get("mapbox-layers"),
                    i = n.filter(function (e) {
                      return a.includes(e.id);
                    }).some(function (e) {
                      return !e.layout || !e.layout.visibility || "visible" === e.layout.visibility;
                    });
                  e.get("visible") !== i && e.setVisible(i);
                }
              }
              e.on("change", r), r();
            }(e, a), u();
          })["catch"](l) : u();
        } else l(new Error("Error accessing data for source " + e.get("mapbox-source")));
      };
      e.set("mapbox-layers", t);
      var f = a.getLayers();
      -1 === f.getArray().indexOf(e) && f.push(e), e.getSource() ? p() : e.once("change:source", p);
    });
  }
  e.addMapboxLayer = function (e, t, r) {
    var n,
      a = e.get("mapbox-style").layers;
    if (void 0 !== r) {
      var i = Yn(e, r);
      if (void 0 === i) throw new Error('Layer with id "' + r + '" not found.');
      n = a.indexOf(i);
    } else n = a.length;
    if (0 === n) throw new Error("Cannot add layer before first layer.");
    if (a[n - 1].source !== t.source) throw new Error("Added layer and layer before must use the same source.");
    if (a.some(function (e) {
      return e.id === t.id;
    })) throw new Error('Layer with id "' + t.id + '" already exists.');
    a.splice(n, 0, t);
    var o = Sa[Pn(e.get("mapbox-style"), Xn(e, a[n - 1].id))];
    if (o) {
      var s = o[0],
        u = o[1],
        l = o[2],
        p = o[3],
        f = o[4],
        c = o[5],
        d = o[6],
        y = o[7];
      if (Array.isArray(l)) {
        var m = r ? l.indexOf(r) : l.length;
        l.splice(m, 0, t.id);
      }
      ja(s, u, l, p, f, c, d, y);
    } else Xn(e, a[n - 1].id).changed();
  }, e.apply = Ua, e.applyBackground = function (e, t, r) {
    return void 0 === r && (r = {}), Jn(t, r).then(function (t) {
      !function (e, t, r) {
        t.layers.some(function (t) {
          if ("background" === t.type) {
            if (e instanceof V["default"]) return e.setBackground(function (e) {
              return Ia(t, e, r, {});
            }), !0;
            if (e instanceof W["default"] || e instanceof G["default"]) return e.getLayers().push(Fa(t, r, {})), !0;
          }
        });
      }(e, t, r);
    });
  }, e.applyStyle = Ea, e["default"] = Ua, e.getFeatureState = function (e, t) {
    for (var r = ("getLayers" in e) ? Hn(e, t.source) : [e], n = 0, a = r.length; n < a; ++n) {
      var i = r[n].get("mapbox-featurestate");
      if (i && i[t.id]) return i[t.id];
    }
    return null;
  }, e.getLayer = Xn, e.getLayers = Hn, e.getMapboxLayer = Yn, e.getSource = function (e, t) {
    for (var r = e.getLayers().getArray(), n = 0, a = r.length; n < a; ++n) {
      var i = r[n].getSource();
      if (r[n].get("mapbox-source") === t) return i;
    }
  }, e.recordStyleLayer = function (e) {
    void 0 === e && (e = !1), Ma = e;
  }, e.removeMapboxLayer = function (e, t) {
    var r = "string" == typeof t ? t : t.id,
      n = Xn(e, r),
      a = n.get("mapbox-layers");
    if (1 === a.length) throw new Error("Cannot remove last Mapbox layer from an OpenLayers layer.");
    a.splice(a.indexOf(r), 1);
    var i = e.get("mapbox-style").layers;
    i.splice(i.findIndex(function (e) {
      return e.id === r;
    }), 1), ja.apply(void 0, Sa[Pn(e.get("mapbox-style"), n)]);
  }, e.renderTransparent = function (e) {
    e !== xa && (!function () {
      for (var e in Cn) delete Cn[e];
    }(), xa = e);
  }, e.setFeatureState = function (e, t, r) {
    for (var n = ("getLayers" in e) ? Hn(e, t.source) : [e], a = 0, i = n.length; a < i; ++a) {
      var o = n[a].get("mapbox-featurestate");
      if (!o) throw new Error('Map or layer for source "' + t.source + '" not found.');
      r ? o[t.id] = r : delete o[t.id], n[a].changed();
    }
  }, e.stylefunction = ja, e.updateMapboxLayer = function (e, t) {
    var r = e.get("mapbox-style"),
      n = r.layers,
      a = n.findIndex(function (e) {
        return e.id === t.id;
      });
    if (-1 === a) throw new Error('Layer with id "' + t.id + '" not found.');
    if (n[a].source !== t.source) throw new Error("Updated layer and previous version must use the same source.");
    delete Dn(r)[t.id], delete On(r)[t.id], n[a] = t, ja.apply(void 0, Sa[Pn(e.get("mapbox-style"), Xn(e, t.id))]);
  }, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});