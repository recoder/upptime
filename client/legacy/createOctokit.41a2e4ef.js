import {
  R as e,
  a as r,
  _ as t,
  b as o,
  c as s,
  i as n,
  s as i,
  d as a,
  e as c,
  S as p,
  f as u,
  T as l,
  g as d,
  h as m,
  U as g,
  k as h,
  l as T,
  A as E,
  m as f,
  n as b,
  o as w,
  V as _,
  r as v,
  W as k,
  z as y,
} from "./client.b4e5c5f3.js";
function G() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function P(r, t, o) {
  return (
    (P = G()
      ? Reflect.construct
      : function (r, t, o) {
          var s = [null];
          s.push.apply(s, t);
          var n = new (Function.bind.apply(r, s))();
          return o && e(n, o.prototype), n;
        }),
    P.apply(null, arguments)
  );
}
function A(t) {
  var o = "function" == typeof Map ? new Map() : void 0;
  return (
    (A = function (t) {
      if (
        null === t ||
        ((s = t), -1 === Function.toString.call(s).indexOf("[native code]"))
      )
        return t;
      var s;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== o) {
        if (o.has(t)) return o.get(t);
        o.set(t, n);
      }
      function n() {
        return P(t, arguments, r(this).constructor);
      }
      return (
        (n.prototype = Object.create(t.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        e(n, t)
      );
    }),
    A(t)
  );
}
function O(e, r, t, o, s, n, i) {
  try {
    var a = e[n](i),
      c = a.value;
  } catch (e) {
    return void t(e);
  }
  a.done ? r(c) : Promise.resolve(c).then(o, s);
}
function F(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (o, s) {
      var n = e.apply(r, t);
      function i(e) {
        O(n, o, s, i, a, "next", e);
      }
      function a(e) {
        O(n, o, s, i, a, "throw", e);
      }
      i(void 0);
    });
  };
}
function S(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var s,
      n = r(e);
    if (t) {
      var i = r(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else s = n.apply(this, arguments);
    return o(this, s);
  };
}
function R(e) {
  var r, t, o, s, n, i, a;
  return {
    c: function () {
      (r = u("div")),
        (t = l("svg")),
        (o = l("g")),
        (s = l("g")),
        (n = l("circle")),
        (i = l("path")),
        (a = l("animateTransform")),
        this.h();
    },
    l: function (e) {
      r = d(e, "DIV", { class: !0 });
      var c = m(r);
      t = g(c, "svg", {
        width: !0,
        height: !0,
        xmlns: !0,
        stroke: !0,
        title: !0,
        class: !0,
      });
      var p = m(t);
      o = g(p, "g", { fill: !0, "fill-rule": !0 });
      var u = m(o);
      s = g(u, "g", { transform: !0, "stroke-width": !0 });
      var l = m(s);
      (n = g(l, "circle", { "stroke-opacity": !0, cx: !0, cy: !0, r: !0 })),
        m(n).forEach(h),
        (i = g(l, "path", { d: !0 }));
      var T = m(i);
      (a = g(T, "animateTransform", {
        attributeName: !0,
        type: !0,
        from: !0,
        to: !0,
        dur: !0,
        repeatCount: !0,
      })),
        m(a).forEach(h),
        T.forEach(h),
        l.forEach(h),
        u.forEach(h),
        p.forEach(h),
        c.forEach(h),
        this.h();
    },
    h: function () {
      T(n, "stroke-opacity", ".5"),
        T(n, "cx", "18"),
        T(n, "cy", "18"),
        T(n, "r", "18"),
        T(a, "attributeName", "transform"),
        T(a, "type", "rotate"),
        T(a, "from", "0 18 18"),
        T(a, "to", "360 18 18"),
        T(a, "dur", "1s"),
        T(a, "repeatCount", "indefinite"),
        T(i, "d", "M36 18c0-9.94-8.06-18-18-18"),
        T(s, "transform", "translate(1 1)"),
        T(s, "stroke-width", "2"),
        T(o, "fill", "none"),
        T(o, "fill-rule", "evenodd"),
        T(t, "width", "38"),
        T(t, "height", "38"),
        T(t, "xmlns", "http://www.w3.org/2000/svg"),
        T(t, "stroke", "#aaa"),
        T(t, "title", E.loading),
        T(t, "class", "svelte-68jxue"),
        T(r, "class", "loading svelte-68jxue");
    },
    m: function (e, c) {
      f(e, r, c), b(r, t), b(t, o), b(o, s), b(s, n), b(s, i), b(i, a);
    },
    p: w,
    i: w,
    o: w,
    d: function (e) {
      e && h(r);
    },
  };
}
var U = (function (e) {
  t(o, p);
  var r = S(o);
  function o(e) {
    var t;
    return s(this, o), (t = r.call(this)), n(a(t), e, null, R, i, {}), t;
  }
  return c(o);
})();
function C(e, r) {
  if (null == e) return {};
  var t,
    o,
    s = (function (e, r) {
      if (null == e) return {};
      var t,
        o,
        s = {},
        n = Object.keys(e);
      for (o = 0; o < n.length; o++)
        (t = n[o]), r.indexOf(t) >= 0 || (s[t] = e[t]);
      return s;
    })(e, r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (o = 0; o < n.length; o++)
      (t = n[o]),
        r.indexOf(t) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t]));
  }
  return s;
}
function D() {
  return "object" ===
    ("undefined" == typeof navigator ? "undefined" : _(navigator)) &&
    "userAgent" in navigator
    ? navigator.userAgent
    : "object" === ("undefined" == typeof process ? "undefined" : _(process)) &&
      "version" in process
    ? "Node.js/"
        .concat(process.version.substr(1), " (")
        .concat(process.platform, "; ")
        .concat(process.arch, ")")
    : "<environment undetectable>";
}
var j = function e(r, t, o, s) {
  if ("function" != typeof o)
    throw new Error("method for before hook must be a function");
  s || (s = {});
  if (Array.isArray(t))
    return t.reverse().reduce(function (t, o) {
      return e.bind(null, r, o, t, s);
    }, o)();
  return Promise.resolve().then(function () {
    return r.registry[t]
      ? r.registry[t].reduce(function (e, r) {
          return r.hook.bind(null, e, s);
        }, o)()
      : o(s);
  });
};
var L = function (e, r, t, o) {
  var s = o;
  e.registry[t] || (e.registry[t] = []);
  "before" === r &&
    (o = function (e, r) {
      return Promise.resolve().then(s.bind(null, r)).then(e.bind(null, r));
    });
  "after" === r &&
    (o = function (e, r) {
      var t;
      return Promise.resolve()
        .then(e.bind(null, r))
        .then(function (e) {
          return s((t = e), r);
        })
        .then(function () {
          return t;
        });
    });
  "error" === r &&
    (o = function (e, r) {
      return Promise.resolve()
        .then(e.bind(null, r))
        .catch(function (e) {
          return s(e, r);
        });
    });
  e.registry[t].push({ hook: o, orig: s });
};
var I = function (e, r, t) {
  if (!e.registry[r]) return;
  var o = e.registry[r]
    .map(function (e) {
      return e.orig;
    })
    .indexOf(t);
  if (-1 === o) return;
  e.registry[r].splice(o, 1);
};
var q = Function.bind,
  x = q.bind(q);
function B(e, r, t) {
  var o = x(I, null).apply(null, t ? [r, t] : [r]);
  (e.api = { remove: o }),
    (e.remove = o),
    ["before", "error", "after", "wrap"].forEach(function (o) {
      var s = t ? [r, o, t] : [r, o];
      e[o] = e.api[o] = x(L, null).apply(null, s);
    });
}
function H() {
  var e = { registry: {} },
    r = j.bind(null, e);
  return B(r, e), r;
}
var W = !1;
function z() {
  return (
    W ||
      (console.warn(
        '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
      ),
      (W = !0)),
    H()
  );
}
(z.Singular = function () {
  var e = { registry: {} },
    r = j.bind(null, e, "h");
  return B(r, e, "h"), r;
}.bind()),
  (z.Collection = H.bind());
var K = z,
  M = z,
  V = z.Singular,
  N = z.Collection;
function J(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function $(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function Z(e) {
  var r, t;
  return (
    !1 !== $(e) &&
    (void 0 === (r = e.constructor) ||
      (!1 !== $((t = r.prototype)) && !1 !== t.hasOwnProperty("isPrototypeOf")))
  );
}
function Y(e, r) {
  var t = Object.assign({}, e);
  return (
    Object.keys(r).forEach(function (o) {
      Z(r[o]) && o in e
        ? (t[o] = Y(e[o], r[o]))
        : Object.assign(t, J({}, o, r[o]));
    }),
    t
  );
}
function Q(e) {
  for (var r in e) void 0 === e[r] && delete e[r];
  return e;
}
function X(e, r, t) {
  if ("string" == typeof r) {
    var o = r.split(" "),
      s = v(o, 2),
      n = s[0],
      i = s[1];
    t = Object.assign(i ? { method: n, url: i } : { url: n }, t);
  } else t = Object.assign({}, r);
  var a;
  (t.headers = (a = t.headers)
    ? Object.keys(a).reduce(function (e, r) {
        return (e[r.toLowerCase()] = a[r]), e;
      }, {})
    : {}),
    Q(t),
    Q(t.headers);
  var c = Y(e || {}, t);
  return (
    e &&
      e.mediaType.previews.length &&
      (c.mediaType.previews = e.mediaType.previews
        .filter(function (e) {
          return !c.mediaType.previews.includes(e);
        })
        .concat(c.mediaType.previews)),
    (c.mediaType.previews = c.mediaType.previews.map(function (e) {
      return e.replace(/-preview/, "");
    })),
    c
  );
}
(K.Hook = M), (K.Singular = V), (K.Collection = N);
var ee = /\{[^}]+\}/g;
function re(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function te(e, r) {
  return Object.keys(e)
    .filter(function (e) {
      return !r.includes(e);
    })
    .reduce(function (r, t) {
      return (r[t] = e[t]), r;
    }, {});
}
function oe(e) {
  return e
    .split(/(%[0-9A-Fa-f]{2})/g)
    .map(function (e) {
      return (
        /%[0-9A-Fa-f]/.test(e) ||
          (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")),
        e
      );
    })
    .join("");
}
function se(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function ne(e, r, t) {
  return (r = "+" === e || "#" === e ? oe(r) : se(r)), t ? se(t) + "=" + r : r;
}
function ie(e) {
  return null != e;
}
function ae(e) {
  return ";" === e || "&" === e || "?" === e;
}
function ce(e, r) {
  var t = ["+", "#", ".", "/", ";", "?", "&"];
  return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, o, s) {
    if (o) {
      var n = "",
        i = [];
      if (
        (-1 !== t.indexOf(o.charAt(0)) &&
          ((n = o.charAt(0)), (o = o.substr(1))),
        o.split(/,/g).forEach(function (e) {
          var t = /([^:\*]*)(?::(\d+)|(\*))?/.exec(e);
          i.push(
            (function (e, r, t, o) {
              var s = e[t],
                n = [];
              if (ie(s) && "" !== s)
                if (
                  "string" == typeof s ||
                  "number" == typeof s ||
                  "boolean" == typeof s
                )
                  (s = s.toString()),
                    o && "*" !== o && (s = s.substring(0, parseInt(o, 10))),
                    n.push(ne(r, s, ae(r) ? t : ""));
                else if ("*" === o)
                  Array.isArray(s)
                    ? s.filter(ie).forEach(function (e) {
                        n.push(ne(r, e, ae(r) ? t : ""));
                      })
                    : Object.keys(s).forEach(function (e) {
                        ie(s[e]) && n.push(ne(r, s[e], e));
                      });
                else {
                  var i = [];
                  Array.isArray(s)
                    ? s.filter(ie).forEach(function (e) {
                        i.push(ne(r, e));
                      })
                    : Object.keys(s).forEach(function (e) {
                        ie(s[e]) &&
                          (i.push(se(e)), i.push(ne(r, s[e].toString())));
                      }),
                    ae(r)
                      ? n.push(se(t) + "=" + i.join(","))
                      : 0 !== i.length && n.push(i.join(","));
                }
              else
                ";" === r
                  ? ie(s) && n.push(se(t))
                  : "" !== s || ("&" !== r && "?" !== r)
                  ? "" === s && n.push("")
                  : n.push(se(t) + "=");
              return n;
            })(r, n, t[1], t[2] || t[3])
          );
        }),
        n && "+" !== n)
      ) {
        var a = ",";
        return (
          "?" === n ? (a = "&") : "#" !== n && (a = n),
          (0 !== i.length ? n : "") + i.join(a)
        );
      }
      return i.join(",");
    }
    return oe(s);
  });
}
function pe(e) {
  var r,
    t,
    o = e.method.toUpperCase(),
    s = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"),
    n = Object.assign({}, e.headers),
    i = te(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]),
    a = (function (e) {
      var r = e.match(ee);
      return r
        ? r.map(re).reduce(function (e, r) {
            return e.concat(r);
          }, [])
        : [];
    })(s);
  (s = ((t = s), { expand: ce.bind(null, t) }).expand(i)),
    /^http/.test(s) || (s = e.baseUrl + s);
  var c = te(
    i,
    Object.keys(e)
      .filter(function (e) {
        return a.includes(e);
      })
      .concat("baseUrl")
  );
  if (
    !/application\/octet-stream/i.test(n.accept) &&
    (e.mediaType.format &&
      (n.accept = n.accept
        .split(/,/)
        .map(function (r) {
          return r.replace(
            /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
            "application/vnd$1$2.".concat(e.mediaType.format)
          );
        })
        .join(",")),
    e.mediaType.previews.length)
  ) {
    var p = n.accept.match(/[\w-]+(?=-preview)/g) || [];
    n.accept = p
      .concat(e.mediaType.previews)
      .map(function (r) {
        var t = e.mediaType.format ? ".".concat(e.mediaType.format) : "+json";
        return "application/vnd.github.".concat(r, "-preview").concat(t);
      })
      .join(",");
  }
  return (
    ["GET", "HEAD"].includes(o)
      ? (s = (function (e, r) {
          var t = /\?/.test(e) ? "&" : "?",
            o = Object.keys(r);
          return 0 === o.length
            ? e
            : e +
                t +
                o
                  .map(function (e) {
                    return "q" === e
                      ? "q=" + r.q.split("+").map(encodeURIComponent).join("+")
                      : "".concat(e, "=").concat(encodeURIComponent(r[e]));
                  })
                  .join("&");
        })(s, c))
      : "data" in c
      ? (r = c.data)
      : Object.keys(c).length
      ? (r = c)
      : (n["content-length"] = 0),
    n["content-type"] ||
      void 0 === r ||
      (n["content-type"] = "application/json; charset=utf-8"),
    ["PATCH", "PUT"].includes(o) && void 0 === r && (r = ""),
    Object.assign(
      { method: o, url: s, headers: n },
      void 0 !== r ? { body: r } : null,
      e.request ? { request: e.request } : null
    )
  );
}
function ue(e, r, t) {
  return pe(X(e, r, t));
}
var le = (function e(r, t) {
    var o = X(r, t),
      s = ue.bind(null, o);
    return Object.assign(s, {
      DEFAULTS: o,
      defaults: e.bind(null, o),
      merge: X.bind(null, o),
      parse: pe,
    });
  })(null, {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
      accept: "application/vnd.github.v3+json",
      "user-agent": "octokit-endpoint.js/".concat("6.0.12", " ").concat(D()),
    },
    mediaType: { format: "", previews: [] },
  }),
  de = k(function (e, r) {
    var t = (function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if (void 0 !== t) return t;
      throw new Error("unable to locate global object");
    })();
    (e.exports = r = t.fetch),
      t.fetch && (r.default = t.fetch.bind(t)),
      (r.Headers = t.Headers),
      (r.Request = t.Request),
      (r.Response = t.Response);
  });
function me(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var s,
      n = r(e);
    if (t) {
      var i = r(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else s = n.apply(this, arguments);
    return o(this, s);
  };
}
var ge = (function (e) {
    t(o, e);
    var r = me(o);
    function o(e) {
      var t;
      return (
        s(this, o),
        (t = r.call(this, e)),
        Error.captureStackTrace && Error.captureStackTrace(a(t), t.constructor),
        (t.name = "Deprecation"),
        t
      );
    }
    return c(o);
  })(A(Error)),
  he = function e(r, t) {
    if (r && t) return e(r)(t);
    if ("function" != typeof r) throw new TypeError("need wrapper function");
    return (
      Object.keys(r).forEach(function (e) {
        o[e] = r[e];
      }),
      o
    );
    function o() {
      for (var e = new Array(arguments.length), t = 0; t < e.length; t++)
        e[t] = arguments[t];
      var o = r.apply(this, e),
        s = e[e.length - 1];
      return (
        "function" == typeof o &&
          o !== s &&
          Object.keys(s).forEach(function (e) {
            o[e] = s[e];
          }),
        o
      );
    }
  };
var Te = he(fe),
  Ee = he(be);
function fe(e) {
  var r = function r() {
    return r.called
      ? r.value
      : ((r.called = !0), (r.value = e.apply(this, arguments)));
  };
  return (r.called = !1), r;
}
function be(e) {
  var r = function r() {
      if (r.called) throw new Error(r.onceError);
      return (r.called = !0), (r.value = e.apply(this, arguments));
    },
    t = e.name || "Function wrapped with `once`";
  return (
    (r.onceError = t + " shouldn't be called more than once"),
    (r.called = !1),
    r
  );
}
function we(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var s,
      n = r(e);
    if (t) {
      var i = r(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else s = n.apply(this, arguments);
    return o(this, s);
  };
}
(fe.proto = fe(function () {
  Object.defineProperty(Function.prototype, "once", {
    value: function () {
      return fe(this);
    },
    configurable: !0,
  }),
    Object.defineProperty(Function.prototype, "onceStrict", {
      value: function () {
        return be(this);
      },
      configurable: !0,
    });
})),
  (Te.strict = Ee);
var _e = Te(function (e) {
    return console.warn(e);
  }),
  ve = Te(function (e) {
    return console.warn(e);
  }),
  ke = (function (e) {
    t(o, e);
    var r = we(o);
    function o(e, t, n) {
      var i, c;
      s(this, o),
        (i = r.call(this, e)),
        Error.captureStackTrace && Error.captureStackTrace(a(i), i.constructor),
        (i.name = "HttpError"),
        (i.status = t),
        "headers" in n && void 0 !== n.headers && (c = n.headers),
        "response" in n &&
          ((i.response = n.response), (c = n.response.headers));
      var p = Object.assign({}, n.request);
      return (
        n.request.headers.authorization &&
          (p.headers = Object.assign({}, n.request.headers, {
            authorization: n.request.headers.authorization.replace(
              / .*$/,
              " [REDACTED]"
            ),
          })),
        (p.url = p.url
          .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
          .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
        (i.request = p),
        Object.defineProperty(a(i), "code", {
          get: function () {
            return (
              _e(
                new ge(
                  "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                )
              ),
              t
            );
          },
        }),
        Object.defineProperty(a(i), "headers", {
          get: function () {
            return (
              ve(
                new ge(
                  "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
                )
              ),
              c || {}
            );
          },
        }),
        i
      );
    }
    return c(o);
  })(A(Error));
function ye(e, r) {
  var t =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (!t) {
    if (
      Array.isArray(e) ||
      (t = (function (e, r) {
        if (!e) return;
        if ("string" == typeof e) return Ge(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === t && e.constructor && (t = e.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(e);
        if (
          "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        )
          return Ge(e, r);
      })(e)) ||
      (r && e && "number" == typeof e.length)
    ) {
      t && (e = t);
      var o = 0,
        s = function () {};
      return {
        s: s,
        n: function () {
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
        },
        e: function (e) {
          throw e;
        },
        f: s,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var n,
    i = !0,
    a = !1;
  return {
    s: function () {
      t = t.call(e);
    },
    n: function () {
      var e = t.next();
      return (i = e.done), e;
    },
    e: function (e) {
      (a = !0), (n = e);
    },
    f: function () {
      try {
        i || null == t.return || t.return();
      } finally {
        if (a) throw n;
      }
    },
  };
}
function Ge(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Pe(e) {
  return e.arrayBuffer();
}
function Ae(e) {
  var r = e.request && e.request.log ? e.request.log : console;
  (Z(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
  var t,
    o,
    s = {};
  return ((e.request && e.request.fetch) || de)(
    e.url,
    Object.assign(
      {
        method: e.method,
        body: e.body,
        headers: e.headers,
        redirect: e.redirect,
      },
      e.request
    )
  )
    .then(
      (function () {
        var n = F(
          y.mark(function n(i) {
            var a, c, p, u, l, d;
            return y.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    (o = i.url), (t = i.status), (a = ye(i.headers));
                    try {
                      for (a.s(); !(c = a.n()).done; )
                        (p = c.value), (s[p[0]] = p[1]);
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                    if (
                      ("deprecation" in s &&
                        ((u =
                          s.link &&
                          s.link.match(/<([^>]+)>; rel="deprecation"/)),
                        (l = u && u.pop()),
                        r.warn(
                          '[@octokit/request] "'
                            .concat(e.method, " ")
                            .concat(
                              e.url,
                              '" is deprecated. It is scheduled to be removed on '
                            )
                            .concat(s.sunset)
                            .concat(l ? ". See ".concat(l) : "")
                        )),
                      204 !== t && 205 !== t)
                    ) {
                      n.next = 7;
                      break;
                    }
                    return n.abrupt("return");
                  case 7:
                    if ("HEAD" !== e.method) {
                      n.next = 11;
                      break;
                    }
                    if (!(t < 400)) {
                      n.next = 10;
                      break;
                    }
                    return n.abrupt("return");
                  case 10:
                    throw new ke(i.statusText, t, {
                      response: { url: o, status: t, headers: s, data: void 0 },
                      request: e,
                    });
                  case 11:
                    if (304 !== t) {
                      n.next = 24;
                      break;
                    }
                    return (
                      (n.t0 = ke),
                      (n.t1 = t),
                      (n.t2 = o),
                      (n.t3 = t),
                      (n.t4 = s),
                      (n.next = 19),
                      Oe(i)
                    );
                  case 19:
                    throw (
                      ((n.t5 = n.sent),
                      (n.t6 = {
                        url: n.t2,
                        status: n.t3,
                        headers: n.t4,
                        data: n.t5,
                      }),
                      (n.t7 = e),
                      (n.t8 = { response: n.t6, request: n.t7 }),
                      new n.t0("Not modified", n.t1, n.t8))
                    );
                  case 24:
                    if (!(t >= 400)) {
                      n.next = 30;
                      break;
                    }
                    return (n.next = 27), Oe(i);
                  case 27:
                    throw (
                      ((d = n.sent),
                      new ke(Se(d), t, {
                        response: { url: o, status: t, headers: s, data: d },
                        request: e,
                      }))
                    );
                  case 30:
                    return n.abrupt("return", Oe(i));
                  case 31:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        );
        return function (e) {
          return n.apply(this, arguments);
        };
      })()
    )
    .then(function (e) {
      return { status: t, url: o, headers: s, data: e };
    })
    .catch(function (r) {
      if (r instanceof ke) throw r;
      throw new ke(r.message, 500, { request: e });
    });
}
function Oe(e) {
  return Fe.apply(this, arguments);
}
function Fe() {
  return (Fe = F(
    y.mark(function e(r) {
      var t;
      return y.wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((t = r.headers.get("content-type")),
                !/application\/json/.test(t))
              ) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", r.json());
            case 3:
              if (t && !/^text\/|charset=utf-8$/.test(t)) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", r.text());
            case 5:
              return e.abrupt("return", Pe(r));
            case 6:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Se(e) {
  return "string" == typeof e
    ? e
    : "message" in e
    ? Array.isArray(e.errors)
      ? ""
          .concat(e.message, ": ")
          .concat(e.errors.map(JSON.stringify).join(", "))
      : e.message
    : "Unknown error: ".concat(JSON.stringify(e));
}
var Re = (function e(r, t) {
  var o = r.defaults(t);
  return Object.assign(
    function (r, t) {
      var s = o.merge(r, t);
      if (!s.request || !s.request.hook) return Ae(o.parse(s));
      var n = function (e, r) {
        return Ae(o.parse(o.merge(e, r)));
      };
      return (
        Object.assign(n, { endpoint: o, defaults: e.bind(null, o) }),
        s.request.hook(n, s)
      );
    },
    { endpoint: o, defaults: e.bind(null, o) }
  );
})(le, {
  headers: {
    "user-agent": "octokit-request.js/".concat("5.6.2", " ").concat(D()),
  },
});
function Ue(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var s,
      n = r(e);
    if (t) {
      var i = r(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else s = n.apply(this, arguments);
    return o(this, s);
  };
}
var Ce = (function (e) {
    t(o, e);
    var r = Ue(o);
    function o(e, t, n) {
      var i;
      return (
        s(this, o),
        ((i = r.call(
          this,
          "Request failed due to following response errors:\n" +
            n.errors
              .map(function (e) {
                return " - ".concat(e.message);
              })
              .join("\n")
        )).request = e),
        (i.headers = t),
        (i.response = n),
        (i.name = "GraphqlResponseError"),
        (i.errors = n.errors),
        (i.data = n.data),
        Error.captureStackTrace && Error.captureStackTrace(a(i), i.constructor),
        i
      );
    }
    return c(o);
  })(A(Error)),
  De = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"],
  je = ["query", "method", "url"],
  Le = /\/api\/v3\/?$/;
function Ie(e, r) {
  var t = e.defaults(r);
  return Object.assign(
    function (e, r) {
      return (function (e, r, t) {
        if (t) {
          if ("string" == typeof r && "query" in t)
            return Promise.reject(
              new Error(
                '[@octokit/graphql] "query" cannot be used as variable name'
              )
            );
          for (var o in t)
            if (je.includes(o))
              return Promise.reject(
                new Error(
                  '[@octokit/graphql] "'.concat(
                    o,
                    '" cannot be used as variable name'
                  )
                )
              );
        }
        var s = "string" == typeof r ? Object.assign({ query: r }, t) : r,
          n = Object.keys(s).reduce(function (e, r) {
            return De.includes(r)
              ? ((e[r] = s[r]), e)
              : (e.variables || (e.variables = {}), (e.variables[r] = s[r]), e);
          }, {}),
          i = s.baseUrl || e.endpoint.DEFAULTS.baseUrl;
        return (
          Le.test(i) && (n.url = i.replace(Le, "/api/graphql")),
          e(n).then(function (e) {
            if (e.data.errors) {
              for (
                var r = {}, t = 0, o = Object.keys(e.headers);
                t < o.length;
                t++
              ) {
                var s = o[t];
                r[s] = e.headers[s];
              }
              throw new Ce(n, r, e.data);
            }
            return e.data.data;
          })
        );
      })(t, e, r);
    },
    { defaults: Ie.bind(null, t), endpoint: Re.endpoint }
  );
}
function qe(e) {
  return Ie(e, { method: "POST", url: "/graphql" });
}
Ie(Re, {
  headers: {
    "user-agent": "octokit-graphql.js/".concat("4.8.0", " ").concat(D()),
  },
  method: "POST",
  url: "/graphql",
});
var xe = /^v1\./,
  Be = /^ghs_/,
  He = /^ghu_/;
function We(e) {
  return ze.apply(this, arguments);
}
function ze() {
  return (ze = F(
    y.mark(function e(r) {
      var t, o, s, n;
      return y.wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (t = 3 === r.split(/\./).length),
                (o = xe.test(r) || Be.test(r)),
                (s = He.test(r)),
                (n = t
                  ? "app"
                  : o
                  ? "installation"
                  : s
                  ? "user-to-server"
                  : "oauth"),
                e.abrupt("return", { type: "token", token: r, tokenType: n })
              );
            case 5:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Ke(e) {
  return 3 === e.split(/\./).length ? "bearer ".concat(e) : "token ".concat(e);
}
function Me(e, r, t, o) {
  return Ve.apply(this, arguments);
}
function Ve() {
  return (
    (Ve = F(
      y.mark(function e(r, t, o, s) {
        var n;
        return y.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  ((n = t.endpoint.merge(o, s)).headers.authorization = Ke(r)),
                  e.abrupt("return", t(n))
                );
              case 3:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )),
    Ve.apply(this, arguments)
  );
}
var Ne = function (e) {
    if (!e)
      throw new Error(
        "[@octokit/auth-token] No token passed to createTokenAuth"
      );
    if ("string" != typeof e)
      throw new Error(
        "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
      );
    return (
      (e = e.replace(/^(token|bearer) +/i, "")),
      Object.assign(We.bind(null, e), { hook: Me.bind(null, e) })
    );
  },
  Je = ["authStrategy"];
function $e(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var s,
      n = r(e);
    if (t) {
      var i = r(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else s = n.apply(this, arguments);
    return o(this, s);
  };
}
var Ze = (function () {
  function e() {
    var r = this,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    s(this, e);
    var o = new N(),
      n = {
        baseUrl: Re.endpoint.DEFAULTS.baseUrl,
        headers: {},
        request: Object.assign({}, t.request, {
          hook: o.bind(null, "request"),
        }),
        mediaType: { previews: [], format: "" },
      };
    if (
      ((n.headers["user-agent"] = [
        t.userAgent,
        "octokit-core.js/".concat("3.5.1", " ").concat(D()),
      ]
        .filter(Boolean)
        .join(" ")),
      t.baseUrl && (n.baseUrl = t.baseUrl),
      t.previews && (n.mediaType.previews = t.previews),
      t.timeZone && (n.headers["time-zone"] = t.timeZone),
      (this.request = Re.defaults(n)),
      (this.graphql = qe(this.request).defaults(n)),
      (this.log = Object.assign(
        {
          debug: function () {},
          info: function () {},
          warn: console.warn.bind(console),
          error: console.error.bind(console),
        },
        t.log
      )),
      (this.hook = o),
      t.authStrategy)
    ) {
      var i = t.authStrategy,
        a = C(t, Je),
        c = i(
          Object.assign(
            {
              request: this.request,
              log: this.log,
              octokit: this,
              octokitOptions: a,
            },
            t.auth
          )
        );
      o.wrap("request", c.hook), (this.auth = c);
    } else if (t.auth) {
      var p = Ne(t.auth);
      o.wrap("request", p.hook), (this.auth = p);
    } else
      this.auth = F(
        y.mark(function e() {
          return y.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", { type: "unauthenticated" });
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    var u = this.constructor;
    u.plugins.forEach(function (e) {
      Object.assign(r, e(r, t));
    });
  }
  return (
    c(e, null, [
      {
        key: "defaults",
        value: function (e) {
          var r = (function (r) {
            t(i, r);
            var n = $e(i);
            function i() {
              var r;
              s(this, i);
              var t = (arguments.length <= 0 ? void 0 : arguments[0]) || {};
              return "function" == typeof e
                ? ((r = n.call(this, e(t))), o(r))
                : n.call(
                    this,
                    Object.assign(
                      {},
                      e,
                      t,
                      t.userAgent && e.userAgent
                        ? {
                            userAgent: ""
                              .concat(t.userAgent, " ")
                              .concat(e.userAgent),
                          }
                        : null
                    )
                  );
            }
            return c(i);
          })(this);
          return r;
        },
      },
      {
        key: "plugin",
        value: function () {
          for (
            var e,
              r = this.plugins,
              o = arguments.length,
              n = new Array(o),
              i = 0;
            i < o;
            i++
          )
            n[i] = arguments[i];
          var a =
            ((e = (function (e) {
              t(o, e);
              var r = $e(o);
              function o() {
                return s(this, o), r.apply(this, arguments);
              }
              return c(o);
            })(this)),
            (e.plugins = r.concat(
              n.filter(function (e) {
                return !r.includes(e);
              })
            )),
            e);
          return a;
        },
      },
    ]),
    e
  );
})();
(Ze.VERSION = "3.5.1"), (Ze.plugins = []);
function Ye(e) {
  e.hook.wrap("request", function (r, t) {
    e.log.debug("request", t);
    var o = Date.now(),
      s = e.request.endpoint.parse(t),
      n = s.url.replace(t.baseUrl, "");
    return r(t)
      .then(function (r) {
        return (
          e.log.info(
            ""
              .concat(s.method, " ")
              .concat(n, " - ")
              .concat(r.status, " in ")
              .concat(Date.now() - o, "ms")
          ),
          r
        );
      })
      .catch(function (r) {
        throw (
          (e.log.info(
            ""
              .concat(s.method, " ")
              .concat(n, " - ")
              .concat(r.status, " in ")
              .concat(Date.now() - o, "ms")
          ),
          r)
        );
      });
  });
}
function Qe(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function Xe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? Qe(Object(t), !0).forEach(function (r) {
          J(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : Qe(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
Ye.VERSION = "1.0.4";
function er(e) {
  if (!e.data) return Xe(Xe({}, e), {}, { data: [] });
  if (!("total_count" in e.data && !("url" in e.data))) return e;
  var r = e.data.incomplete_results,
    t = e.data.repository_selection,
    o = e.data.total_count;
  delete e.data.incomplete_results,
    delete e.data.repository_selection,
    delete e.data.total_count;
  var s = Object.keys(e.data)[0],
    n = e.data[s];
  return (
    (e.data = n),
    void 0 !== r && (e.data.incomplete_results = r),
    void 0 !== t && (e.data.repository_selection = t),
    (e.data.total_count = o),
    e
  );
}
function rr(e, r, t) {
  var o = "function" == typeof r ? r.endpoint(t) : e.request.endpoint(r, t),
    s = "function" == typeof r ? r : e.request,
    n = o.method,
    i = o.headers,
    a = o.url;
  return J({}, Symbol.asyncIterator, function () {
    return {
      next: function () {
        return F(
          y.mark(function e() {
            var r, t;
            return y.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (a) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", { done: !0 });
                    case 2:
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        s({ method: n, url: a, headers: i })
                      );
                    case 5:
                      return (
                        (r = e.sent),
                        (t = er(r)),
                        (a = ((t.headers.link || "").match(
                          /<([^>]+)>;\s*rel="next"/
                        ) || [])[1]),
                        e.abrupt("return", { value: t })
                      );
                    case 11:
                      if (
                        ((e.prev = 11),
                        (e.t0 = e.catch(2)),
                        409 === e.t0.status)
                      ) {
                        e.next = 15;
                        break;
                      }
                      throw e.t0;
                    case 15:
                      return (
                        (a = ""),
                        e.abrupt("return", {
                          value: { status: 200, headers: {}, data: [] },
                        })
                      );
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 11]]
            );
          })
        )();
      },
    };
  });
}
function tr(e, r, t, o) {
  return (
    "function" == typeof t && ((o = t), (t = void 0)),
    or(e, [], rr(e, r, t)[Symbol.asyncIterator](), o)
  );
}
function or(e, r, t, o) {
  return t.next().then(function (s) {
    if (s.done) return r;
    var n = !1;
    return (
      (r = r.concat(
        o
          ? o(s.value, function () {
              n = !0;
            })
          : s.value.data
      )),
      n ? r : or(e, r, t, o)
    );
  });
}
function sr(e) {
  return {
    paginate: Object.assign(tr.bind(null, e), { iterator: rr.bind(null, e) }),
  };
}
function nr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function ir(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? nr(Object(t), !0).forEach(function (r) {
          J(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : nr(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
Object.assign(tr, { iterator: rr }), (sr.VERSION = "2.17.0");
var ar = {
  actions: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve",
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
    ],
    createOrUpdateEnvironmentSecret: [
      "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
    ],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token",
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token",
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token",
    ],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
    ],
    deleteEnvironmentSecret: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}",
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}",
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}",
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}",
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
    ],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions",
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions",
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key",
    ],
    getEnvironmentSecret: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions",
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions",
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] },
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing",
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets",
    ],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads",
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories",
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions",
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions",
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions",
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions",
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories",
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories",
    ],
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription",
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription",
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}",
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public",
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications",
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription",
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] },
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: [
      "POST /content_references/{content_reference_id}/attachments",
      { mediaType: { previews: ["corsair"] } },
    ],
    createContentAttachmentForRepo: [
      "POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments",
      { mediaType: { previews: ["corsair"] } },
    ],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens",
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}",
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}",
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories",
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed",
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts",
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] },
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended",
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"],
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions",
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages",
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage",
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage",
    ],
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences",
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"],
  },
  codeScanning: {
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}",
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } },
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
    ],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
    ],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] },
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"],
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"],
  },
  emojis: { get: ["GET /emojis"] },
  enterpriseAdmin: {
    disableSelectedOrganizationGithubActionsEnterprise: [
      "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
    ],
    enableSelectedOrganizationGithubActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
    ],
    getAllowedActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/selected-actions",
    ],
    getGithubActionsPermissionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions",
    ],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/organizations",
    ],
    setAllowedActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/selected-actions",
    ],
    setGithubActionsPermissionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions",
    ],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/organizations",
    ],
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"],
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] },
    ],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits",
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] },
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] },
    ],
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
    ],
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"],
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } },
    ],
  },
  meta: {
    get: ["GET /meta"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"],
  },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive",
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive",
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive",
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive",
    ],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportStatus: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories",
    ],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] },
    ],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
    ],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"],
  },
  orgs: {
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}",
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}",
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}",
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}",
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}",
    ],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"],
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}",
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}",
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}",
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] },
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser",
        ],
      },
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions",
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}",
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}",
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}",
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}",
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}",
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}",
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
    ],
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"],
    createCard: ["POST /projects/columns/{column_id}/cards"],
    createColumn: ["POST /projects/{project_id}/columns"],
    createForAuthenticatedUser: ["POST /user/projects"],
    createForOrg: ["POST /orgs/{org}/projects"],
    createForRepo: ["POST /repos/{owner}/{repo}/projects"],
    delete: ["DELETE /projects/{project_id}"],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
    deleteColumn: ["DELETE /projects/columns/{column_id}"],
    get: ["GET /projects/{project_id}"],
    getCard: ["GET /projects/columns/cards/{card_id}"],
    getColumn: ["GET /projects/columns/{column_id}"],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission",
    ],
    listCards: ["GET /projects/columns/{column_id}/cards"],
    listCollaborators: ["GET /projects/{project_id}/collaborators"],
    listColumns: ["GET /projects/{project_id}/columns"],
    listForOrg: ["GET /orgs/{org}/projects"],
    listForRepo: ["GET /repos/{owner}/{repo}/projects"],
    listForUser: ["GET /users/{username}/projects"],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
    moveColumn: ["POST /projects/columns/{column_id}/moves"],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}",
    ],
    update: ["PATCH /projects/{project_id}"],
    updateCard: ["PATCH /projects/columns/cards/{card_id}"],
    updateColumn: ["PATCH /projects/columns/{column_id}"],
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments",
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}",
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
    ],
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions",
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
    ],
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] },
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}",
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" },
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" },
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" },
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" },
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts",
    ],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}",
    ],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}",
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate",
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] },
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}",
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}",
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
    ],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes",
    ],
    disableLfsForRepo: ["DELETE /repos/{owner}/{repo}/lfs"],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] },
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes",
    ],
    enableLfsForRepo: ["PUT /repos/{owner}/{repo}/lfs"],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts",
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes",
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    ],
    getAllTopics: [
      "GET /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } },
    ],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}",
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config",
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
    ],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" },
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}",
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" },
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" },
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" },
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: [
      "PUT /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } },
    ],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" },
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" },
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" },
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" },
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
    ],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
    ],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] },
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config",
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" },
    ],
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
    users: ["GET /search/users"],
  },
  secretScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
    ],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
    ],
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations",
    ],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] },
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] },
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] },
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] },
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] },
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] },
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] },
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] },
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] },
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] },
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] },
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] },
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] },
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] },
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] },
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility",
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"],
  },
};
function cr(e, r, t, o, s) {
  var n = e.request.defaults(o);
  return Object.assign(function () {
    var o,
      i = (o = n.endpoint).merge.apply(o, arguments);
    if (s.mapToData)
      return (
        (i = Object.assign(
          {},
          i,
          J({ data: i[s.mapToData] }, s.mapToData, void 0)
        )),
        n(i)
      );
    if (s.renamed) {
      var a = v(s.renamed, 2),
        c = a[0],
        p = a[1];
      e.log.warn(
        "octokit."
          .concat(r, ".")
          .concat(t, "() has been renamed to octokit.")
          .concat(c, ".")
          .concat(p, "()")
      );
    }
    if ((s.deprecated && e.log.warn(s.deprecated), s.renamedParameters)) {
      for (
        var u,
          l = (u = n.endpoint).merge.apply(u, arguments),
          d = 0,
          m = Object.entries(s.renamedParameters);
        d < m.length;
        d++
      ) {
        var g = v(m[d], 2),
          h = g[0],
          T = g[1];
        h in l &&
          (e.log.warn(
            '"'
              .concat(h, '" parameter is deprecated for "octokit.')
              .concat(r, ".")
              .concat(t, '()". Use "')
              .concat(T, '" instead')
          ),
          T in l || (l[T] = l[h]),
          delete l[h]);
      }
      return n(l);
    }
    return n.apply(void 0, arguments);
  }, n);
}
function pr(e) {
  var r = (function (e, r) {
    for (var t = {}, o = 0, s = Object.entries(r); o < s.length; o++)
      for (
        var n = v(s[o], 2), i = n[0], a = n[1], c = 0, p = Object.entries(a);
        c < p.length;
        c++
      ) {
        var u = v(p[c], 2),
          l = u[0],
          d = u[1],
          m = v(d, 3),
          g = m[0],
          h = m[1],
          T = m[2],
          E = g.split(/ /),
          f = v(E, 2),
          b = f[0],
          w = f[1],
          _ = Object.assign({ method: b, url: w }, h);
        t[i] || (t[i] = {});
        var k = t[i];
        k[l] = T ? cr(e, i, l, _, T) : e.request.defaults(_);
      }
    return t;
  })(e, ar);
  return ir(ir({}, r), {}, { rest: r });
}
pr.VERSION = "5.13.0";
var ur = Ze.plugin(Ye, pr, sr).defaults({
    userAgent: "octokit-rest.js/".concat("18.12.0"),
  }),
  lr = (E["status-website"] || {}).apiBaseUrl,
  dr = E.userAgent,
  mr = function () {
    var e = "";
    return (
      "undefined" != typeof window &&
        "localStorage" in window &&
        localStorage.getItem("personal-access-token") &&
        (e = localStorage.getItem("personal-access-token")),
      new ur({ baseUrl: lr, userAgent: dr, auth: e || void 0 })
    );
  },
  gr = function (e) {
    "Bad credentials" === e.message
      ? (window.location.href = E.path + "/error")
      : (e.message || "").indexOf("rate limit exceeded") > -1
      ? (window.location.href = E.path + "/rate-limit-exceeded")
      : ((window.location.href = E.path + "/error"), console.log(e.message));
  },
  hr = (function () {
    var e = F(
      y.mark(function e(r, t) {
        var o, s, n;
        return y.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.prev = 0), "undefined" == typeof window)) {
                    e.next = 12;
                    break;
                  }
                  if (!("localStorage" in window)) {
                    e.next = 12;
                    break;
                  }
                  if (!(o = localStorage.getItem(r))) {
                    e.next = 12;
                    break;
                  }
                  if (
                    ((s = JSON.parse(o)),
                    !(
                      new Date().getTime() -
                        new Date(s.createdAt || "").getTime() >
                      ("localhost" === document.domain
                        ? E["status-website"].localhostCacheTime || 36e5
                        : E["status-website"].productionCacheTime || 12e4)
                    ))
                  ) {
                    e.next = 10;
                    break;
                  }
                  localStorage.removeItem(r), (e.next = 12);
                  break;
                case 10:
                  return (
                    console.log("Got cached item"), e.abrupt("return", s.data)
                  );
                case 12:
                  e.next = 16;
                  break;
                case 14:
                  (e.prev = 14), (e.t0 = e.catch(0));
                case 16:
                  return console.log("Got here"), (e.next = 19), t();
                case 19:
                  return (
                    (n = e.sent),
                    localStorage.setItem(
                      r,
                      JSON.stringify({ data: n, createdAt: new Date() })
                    ),
                    e.abrupt("return", n)
                  );
                case 22:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 14]]
        );
      })
    );
    return function (r, t) {
      return e.apply(this, arguments);
    };
  })();
export { U as L, F as _, hr as a, J as b, mr as c, gr as h };
