import {
  _ as t,
  a as e,
  b as i,
  c as n,
  i as a,
  s as r,
  d as o,
  e as s,
  S as l,
  f as u,
  g as h,
  h as c,
  k as f,
  m as d,
  r as v,
  u as g,
  v as p,
  w as m,
  x as y,
  y as b,
  z as x,
  A as _,
  t as k,
  p as w,
  j as M,
  q as S,
  l as D,
  O as P,
  n as O,
  B as C,
  o as A,
  E as T,
  F as R,
  G as L,
  H as E,
  C as I,
  D as z,
  V as F,
  $ as V,
  a0 as B,
  a1 as W,
  a2 as N,
  a3 as j,
  a4 as H,
  a5 as $,
  a6 as U,
  K as Y,
  a7 as X,
  a8 as q,
  a9 as K,
} from "./client.b4e5c5f3.js";
import {
  _ as G,
  h as Z,
  L as Q,
  c as J,
  a as tt,
  b as et,
} from "./createOctokit.41a2e4ef.js";
function it(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function nt(t) {
  var e,
    i,
    n,
    a,
    r,
    o,
    s,
    l,
    v,
    g,
    p,
    m,
    y,
    b,
    x,
    T,
    R,
    L,
    E,
    I = t[1].name + "",
    z = ("up" === t[1].status ? _.i18n.up : _.i18n.down) + "",
    F = _.i18n.overallUptimeTitle + "",
    V = t[1].uptime + "",
    B = _.i18n.averageResponseTimeTitle + "",
    W = t[1].time + "",
    N = _.i18n.ms + "";
  return {
    c: function () {
      (e = u("h1")),
        (i = u("a")),
        (n = k(I)),
        (r = w()),
        (o = u("span")),
        (s = k(z)),
        (v = w()),
        (g = u("dl")),
        (p = u("dt")),
        (m = k(F)),
        (y = u("dd")),
        (b = k(V)),
        (x = u("dt")),
        (T = k(B)),
        (R = u("dd")),
        (L = k(W)),
        (E = k(N)),
        this.h();
    },
    l: function (t) {
      e = h(t, "H1", {});
      var a = c(e);
      i = h(a, "A", { class: !0, href: !0 });
      var l = c(i);
      (n = M(l, I)),
        l.forEach(f),
        (r = S(a)),
        (o = h(a, "SPAN", { class: !0 }));
      var u = c(o);
      (s = M(u, z)),
        u.forEach(f),
        a.forEach(f),
        (v = S(t)),
        (g = h(t, "DL", {}));
      var d = c(g);
      p = h(d, "DT", {});
      var _ = c(p);
      (m = M(_, F)), _.forEach(f), (y = h(d, "DD", {}));
      var k = c(y);
      (b = M(k, V)), k.forEach(f), (x = h(d, "DT", {}));
      var w = c(x);
      (T = M(w, B)), w.forEach(f), (R = h(d, "DD", {}));
      var D = c(R);
      (L = M(D, W)), (E = M(D, N)), D.forEach(f), d.forEach(f), this.h();
    },
    h: function () {
      D(i, "class", "no-underline svelte-1d3m0a"),
        D(i, "href", (a = t[1].url.startsWith("$") ? "#" : t[1].url)),
        D(o, "class", (l = P("tag ".concat(t[1].status)) + " svelte-1d3m0a"));
    },
    m: function (t, a) {
      d(t, e, a),
        O(e, i),
        O(i, n),
        O(e, r),
        O(e, o),
        O(o, s),
        d(t, v, a),
        d(t, g, a),
        O(g, p),
        O(p, m),
        O(g, y),
        O(y, b),
        O(g, x),
        O(x, T),
        O(g, R),
        O(R, L),
        O(R, E);
    },
    p: function (t, e) {
      2 & e && I !== (I = t[1].name + "") && C(n, I),
        2 & e &&
          a !== (a = t[1].url.startsWith("$") ? "#" : t[1].url) &&
          D(i, "href", a),
        2 & e &&
          z !== (z = ("up" === t[1].status ? _.i18n.up : _.i18n.down) + "") &&
          C(s, z),
        2 & e &&
          l !== (l = P("tag ".concat(t[1].status)) + " svelte-1d3m0a") &&
          D(o, "class", l),
        2 & e && V !== (V = t[1].uptime + "") && C(b, V),
        2 & e && W !== (W = t[1].time + "") && C(L, W);
    },
    i: A,
    o: A,
    d: function (t) {
      t && f(e), t && f(v), t && f(g);
    },
  };
}
function at(t) {
  var e, i;
  return (
    (e = new Q({})),
    {
      c: function () {
        T(e.$$.fragment);
      },
      l: function (t) {
        R(e.$$.fragment, t);
      },
      m: function (t, n) {
        L(e, t, n), (i = !0);
      },
      p: A,
      i: function (t) {
        i || (y(e.$$.fragment, t), (i = !0));
      },
      o: function (t) {
        p(e.$$.fragment, t), (i = !1);
      },
      d: function (t) {
        E(e, t);
      },
    }
  );
}
function rt(t) {
  var e,
    i,
    n,
    a,
    r = [at, nt],
    o = [];
  function s(t, e) {
    return t[0] ? 0 : t[1] ? 1 : -1;
  }
  return (
    ~(i = s(t)) && (n = o[i] = r[i](t)),
    {
      c: function () {
        (e = u("section")), n && n.c();
      },
      l: function (t) {
        e = h(t, "SECTION", {});
        var i = c(e);
        n && n.l(i), i.forEach(f);
      },
      m: function (t, n) {
        d(t, e, n), ~i && o[i].m(e, null), (a = !0);
      },
      p: function (t, a) {
        var l = v(a, 1)[0],
          u = i;
        (i = s(t)) === u
          ? ~i && o[i].p(t, l)
          : (n &&
              (g(),
              p(o[u], 1, 1, function () {
                o[u] = null;
              }),
              m()),
            ~i
              ? ((n = o[i]) ? n.p(t, l) : (n = o[i] = r[i](t)).c(),
                y(n, 1),
                n.m(e, null))
              : (n = null));
      },
      i: function (t) {
        a || (y(n), (a = !0));
      },
      o: function (t) {
        p(n), (a = !1);
      },
      d: function (t) {
        t && f(e), ~i && o[i].d();
      },
    }
  );
}
function ot(t, e, i) {
  var n = e.slug,
    a = !0,
    r = (_["status-website"] || {}).apiBaseUrl;
  r || (r = "https://api.github.com");
  var o = r.includes("api.github.com")
      ? "https://raw.githubusercontent.com"
      : r,
    s = _.owner,
    l = _.repo,
    u = null;
  return (
    b(
      G(
        x.mark(function t() {
          var e;
          return x.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      fetch(
                        ""
                          .concat(o, "/")
                          .concat(s, "/")
                          .concat(l, "/master/history/summary.json")
                      )
                    );
                  case 3:
                    return (e = t.sent), (t.t0 = i), (t.next = 7), e.json();
                  case 7:
                    (t.t1 = u = t.sent.find(function (t) {
                      return t.slug === n;
                    })),
                      (0, t.t0)(1, t.t1),
                      (t.next = 14);
                    break;
                  case 11:
                    (t.prev = 11), (t.t2 = t.catch(0)), Z(t.t2);
                  case 14:
                    i(0, (a = !1));
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 11]]
          );
        })
      )
    ),
    (t.$$set = function (t) {
      "slug" in t && i(2, (n = t.slug));
    }),
    [a, u, n]
  );
}
var st = (function (e) {
  t(u, l);
  var i = it(u);
  function u(t) {
    var e;
    return (
      n(this, u), (e = i.call(this)), a(o(e), t, ot, rt, r, { slug: 2 }), e
    );
  }
  return s(u);
})();
function lt(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function ut(t, e, i) {
  var n = t.slice();
  return (n[6] = e[i]), n;
}
function ht(t) {
  for (
    var e, i, n, a, r = _.i18n.pastIncidents + "", o = t[1], s = [], l = 0;
    l < o.length;
    l += 1
  )
    s[l] = dt(ut(t, o, l));
  return {
    c: function () {
      (e = u("h2")), (i = k(r)), (n = w());
      for (var t = 0; t < s.length; t += 1) s[t].c();
      (a = I()), this.h();
    },
    l: function (t) {
      e = h(t, "H2", { class: !0 });
      var o = c(e);
      (i = M(o, r)), o.forEach(f), (n = S(t));
      for (var l = 0; l < s.length; l += 1) s[l].l(t);
      (a = I()), this.h();
    },
    h: function () {
      D(e, "class", "svelte-18y4uo2");
    },
    m: function (t, r) {
      d(t, e, r), O(e, i), d(t, n, r);
      for (var o = 0; o < s.length; o += 1) s[o].m(t, r);
      d(t, a, r);
    },
    p: function (t, e) {
      if (2 & e) {
        var i;
        for (o = t[1], i = 0; i < o.length; i += 1) {
          var n = ut(t, o, i);
          s[i]
            ? s[i].p(n, e)
            : ((s[i] = dt(n)), s[i].c(), s[i].m(a.parentNode, a));
        }
        for (; i < s.length; i += 1) s[i].d(1);
        s.length = o.length;
      }
    },
    i: A,
    o: A,
    d: function (t) {
      t && f(e), t && f(n), z(s, t), t && f(a);
    },
  };
}
function ct(t) {
  var e, i;
  return (
    (e = new Q({})),
    {
      c: function () {
        T(e.$$.fragment);
      },
      l: function (t) {
        R(e.$$.fragment, t);
      },
      m: function (t, n) {
        L(e, t, n), (i = !0);
      },
      p: A,
      i: function (t) {
        i || (y(e.$$.fragment, t), (i = !0));
      },
      o: function (t) {
        p(e.$$.fragment, t), (i = !1);
      },
      d: function (t) {
        E(e, t);
      },
    }
  );
}
function ft(t) {
  var e,
    i,
    n = new Date(t[6].created_at).toLocaleDateString() + "";
  return {
    c: function () {
      (e = u("h3")), (i = k(n));
    },
    l: function (t) {
      e = h(t, "H3", {});
      var a = c(e);
      (i = M(a, n)), a.forEach(f);
    },
    m: function (t, n) {
      d(t, e, n), O(e, i);
    },
    p: function (t, e) {
      2 & e &&
        n !== (n = new Date(t[6].created_at).toLocaleDateString() + "") &&
        C(i, n);
    },
    d: function (t) {
      t && f(e);
    },
  };
}
function dt(t) {
  var e,
    i,
    n,
    a,
    r,
    o,
    s,
    l,
    v,
    g,
    p,
    m,
    y,
    b,
    x,
    P = t[6].title.replace("🛑", "").replace("⚠️", "").trim() + "",
    A =
      _.i18n.pastIncidentsResolved
        .replace(
          /\$MINUTES/g,
          (
            (new Date(t[6].closed_at).getTime() -
              new Date(t[6].created_at).getTime()) /
            6e4
          ).toFixed(0)
        )
        .replace(/\$POSTS/g, t[6].comments) + "",
    T = _.i18n.incidentReport.replace(/\$NUMBER/g, t[6].number) + "",
    R = t[6].showHeading && ft(t);
  return {
    c: function () {
      R && R.c(),
        (e = w()),
        (i = u("article")),
        (n = u("div")),
        (a = u("div")),
        (r = u("h4")),
        (o = k(P)),
        (s = w()),
        (l = u("div")),
        (v = w()),
        (g = u("div")),
        (p = u("a")),
        (m = k(T)),
        (b = w()),
        this.h();
    },
    l: function (t) {
      R && R.l(t), (e = S(t)), (i = h(t, "ARTICLE", { class: !0 }));
      var u = c(i);
      n = h(u, "DIV", { class: !0 });
      var d = c(n);
      a = h(d, "DIV", {});
      var y = c(a);
      r = h(y, "H4", {});
      var x = c(r);
      (o = M(x, P)),
        x.forEach(f),
        (s = S(y)),
        (l = h(y, "DIV", {})),
        c(l).forEach(f),
        y.forEach(f),
        (v = S(d)),
        (g = h(d, "DIV", { class: !0 }));
      var _ = c(g);
      p = h(_, "A", { href: !0 });
      var k = c(p);
      (m = M(k, T)),
        k.forEach(f),
        _.forEach(f),
        d.forEach(f),
        (b = S(u)),
        u.forEach(f),
        this.h();
    },
    h: function () {
      D(p, "href", (y = "".concat(_.path, "/incident/").concat(t[6].number))),
        D(g, "class", "f r"),
        D(n, "class", "f"),
        D(
          i,
          "class",
          (x =
            "down link " + (t[6].title.includes("degraded") ? "degraded" : ""))
        );
    },
    m: function (t, u) {
      R && R.m(t, u),
        d(t, e, u),
        d(t, i, u),
        O(i, n),
        O(n, a),
        O(a, r),
        O(r, o),
        O(a, s),
        O(a, l),
        (l.innerHTML = A),
        O(n, v),
        O(n, g),
        O(g, p),
        O(p, m),
        O(i, b);
    },
    p: function (t, n) {
      t[6].showHeading
        ? R
          ? R.p(t, n)
          : ((R = ft(t)).c(), R.m(e.parentNode, e))
        : R && (R.d(1), (R = null)),
        2 & n &&
          P !==
            (P = t[6].title.replace("🛑", "").replace("⚠️", "").trim() + "") &&
          C(o, P),
        2 & n &&
          A !==
            (A =
              _.i18n.pastIncidentsResolved
                .replace(
                  /\$MINUTES/g,
                  (
                    (new Date(t[6].closed_at).getTime() -
                      new Date(t[6].created_at).getTime()) /
                    6e4
                  ).toFixed(0)
                )
                .replace(/\$POSTS/g, t[6].comments) + "") &&
          (l.innerHTML = A),
        2 & n &&
          T !==
            (T =
              _.i18n.incidentReport.replace(/\$NUMBER/g, t[6].number) + "") &&
          C(m, T),
        2 & n &&
          y !== (y = "".concat(_.path, "/incident/").concat(t[6].number)) &&
          D(p, "href", y),
        2 & n &&
          x !==
            (x =
              "down link " +
              (t[6].title.includes("degraded") ? "degraded" : "")) &&
          D(i, "class", x);
    },
    d: function (t) {
      R && R.d(t), t && f(e), t && f(i);
    },
  };
}
function vt(t) {
  var e,
    i,
    n,
    a,
    r = [ct, ht],
    o = [];
  function s(t, e) {
    return t[0] ? 0 : t[1].length ? 1 : -1;
  }
  return (
    ~(i = s(t)) && (n = o[i] = r[i](t)),
    {
      c: function () {
        (e = u("section")), n && n.c();
      },
      l: function (t) {
        e = h(t, "SECTION", {});
        var i = c(e);
        n && n.l(i), i.forEach(f);
      },
      m: function (t, n) {
        d(t, e, n), ~i && o[i].m(e, null), (a = !0);
      },
      p: function (t, a) {
        var l = v(a, 1)[0],
          u = i;
        (i = s(t)) === u
          ? ~i && o[i].p(t, l)
          : (n &&
              (g(),
              p(o[u], 1, 1, function () {
                o[u] = null;
              }),
              m()),
            ~i
              ? ((n = o[i]) ? n.p(t, l) : (n = o[i] = r[i](t)).c(),
                y(n, 1),
                n.m(e, null))
              : (n = null));
      },
      i: function (t) {
        a || (y(n), (a = !0));
      },
      o: function (t) {
        p(n), (a = !1);
      },
      d: function (t) {
        t && f(e), ~i && o[i].d();
      },
    }
  );
}
function gt(t, e, i) {
  var n = e.slug,
    a = !0,
    r = J(),
    o = _.owner,
    s = _.repo,
    l = [];
  return (
    b(
      G(
        x.mark(function t() {
          return x.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.t0 = i),
                      (t.next = 4),
                      tt(
                        "closed-issues-"
                          .concat(o, "-")
                          .concat(s, "-")
                          .concat(n),
                        function () {
                          return r.issues.listForRepo({
                            owner: o,
                            repo: s,
                            state: "closed",
                            filter: "all",
                            sort: "created",
                            direction: "desc",
                            labels: "status,".concat(n),
                          });
                        }
                      )
                    );
                  case 4:
                    (t.t1 = l = t.sent.data), (0, t.t0)(1, t.t1), (t.next = 11);
                    break;
                  case 8:
                    (t.prev = 8), (t.t2 = t.catch(0)), Z(t.t2);
                  case 11:
                    i(
                      1,
                      (l = l.map(function (t, e) {
                        return (
                          (t.showHeading =
                            0 === e ||
                            new Date(
                              l[e - 1].created_at
                            ).toLocaleDateString() !==
                              new Date(t.created_at).toLocaleDateString()),
                          t
                        );
                      }))
                    ),
                      i(0, (a = !1));
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 8]]
          );
        })
      )
    ),
    (t.$$set = function (t) {
      "slug" in t && i(2, (n = t.slug));
    }),
    [a, l, n]
  );
}
var pt = (function (e) {
  t(u, l);
  var i = lt(u);
  function u(t) {
    var e;
    return (
      n(this, u), (e = i.call(this)), a(o(e), t, gt, vt, r, { slug: 2 }), e
    );
  }
  return s(u);
})();
function mt(t, e) {
  var i =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!i) {
    if (
      Array.isArray(t) ||
      (i = (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return yt(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === i && t.constructor && (i = t.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(t);
        if (
          "Arguments" === i ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        )
          return yt(t, e);
      })(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      i && (t = i);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
        },
        e: function (t) {
          throw t;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var r,
    o = !0,
    s = !1;
  return {
    s: function () {
      i = i.call(t);
    },
    n: function () {
      var t = i.next();
      return (o = t.done), t;
    },
    e: function (t) {
      (s = !0), (r = t);
    },
    f: function () {
      try {
        o || null == i.return || i.return();
      } finally {
        if (s) throw r;
      }
    },
  };
}
function yt(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
  return n;
}
var bt =
  "undefined" == typeof window
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
function xt(t, e, i) {
  var n =
      i ||
      function (t) {
        return Array.prototype.slice.call(t);
      },
    a = !1,
    r = [];
  return function () {
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    (r = n(o)),
      a ||
        ((a = !0),
        bt.call(window, function () {
          (a = !1), t.apply(e, r);
        }));
  };
}
var _t = function (t) {
    return "start" === t ? "left" : "end" === t ? "right" : "center";
  },
  kt = function (t, e, i) {
    return "start" === t ? e : "end" === t ? i : (e + i) / 2;
  };
function wt() {}
var Mt,
  St =
    ((Mt = 0),
    function () {
      return Mt++;
    });
function Dt(t) {
  return null == t;
}
function Pt(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  var e = Object.prototype.toString.call(t);
  return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
}
function Ot(t) {
  return null !== t && "[object Object]" === Object.prototype.toString.call(t);
}
var Ct = function (t) {
  return ("number" == typeof t || t instanceof Number) && isFinite(+t);
};
function At(t, e) {
  return Ct(t) ? t : e;
}
function Tt(t, e) {
  return void 0 === t ? e : t;
}
var Rt = function (t, e) {
  return "string" == typeof t && t.endsWith("%")
    ? (parseFloat(t) / 100) * e
    : +t;
};
function Lt(t, e, i) {
  if (t && "function" == typeof t.call) return t.apply(i, e);
}
function Et(t, e, i, n) {
  var a, r, o;
  if (Pt(t))
    if (((r = t.length), n)) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);
    else for (a = 0; a < r; a++) e.call(i, t[a], a);
  else if (Ot(t))
    for (r = (o = Object.keys(t)).length, a = 0; a < r; a++)
      e.call(i, t[o[a]], o[a]);
}
function It(t, e) {
  var i, n, a, r;
  if (!t || !e || t.length !== e.length) return !1;
  for (i = 0, n = t.length; i < n; ++i)
    if (
      ((a = t[i]),
      (r = e[i]),
      a.datasetIndex !== r.datasetIndex || a.index !== r.index)
    )
      return !1;
  return !0;
}
function zt(t) {
  if (Pt(t)) return t.map(zt);
  if (Ot(t)) {
    for (
      var e = Object.create(null), i = Object.keys(t), n = i.length, a = 0;
      a < n;
      ++a
    )
      e[i[a]] = zt(t[i[a]]);
    return e;
  }
  return t;
}
function Ft(t) {
  return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
}
function Vt(t, e, i, n) {
  if (Ft(t)) {
    var a = e[t],
      r = i[t];
    Ot(a) && Ot(r) ? Bt(a, r, n) : (e[t] = zt(r));
  }
}
function Bt(t, e, i) {
  var n = Pt(e) ? e : [e],
    a = n.length;
  if (!Ot(t)) return t;
  for (var r = (i = i || {}).merger || Vt, o = 0; o < a; ++o)
    if (Ot((e = n[o])))
      for (var s = Object.keys(e), l = 0, u = s.length; l < u; ++l)
        r(s[l], t, e, i);
  return t;
}
function Wt(t, e) {
  return Bt(t, e, { merger: Nt });
}
function Nt(t, e, i) {
  if (Ft(t)) {
    var n = e[t],
      a = i[t];
    Ot(n) && Ot(a)
      ? Wt(n, a)
      : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = zt(a));
  }
}
function jt(t, e) {
  var i = t.indexOf(".", e);
  return -1 === i ? t.length : i;
}
function Ht(t, e) {
  if ("" === e) return t;
  for (var i = 0, n = jt(e, i); t && n > i; )
    (t = t[e.substr(i, n - i)]), (n = jt(e, (i = n + 1)));
  return t;
}
function $t(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Ut = function (t) {
    return void 0 !== t;
  },
  Yt = function (t) {
    return "function" == typeof t;
  },
  Xt = function (t, e) {
    if (t.size !== e.size) return !1;
    var i,
      n = mt(t);
    try {
      for (n.s(); !(i = n.n()).done; ) {
        var a = i.value;
        if (!e.has(a)) return !1;
      }
    } catch (t) {
      n.e(t);
    } finally {
      n.f();
    }
    return !0;
  },
  qt = Math.PI,
  Kt = 2 * qt,
  Gt = Kt + qt,
  Zt = Number.POSITIVE_INFINITY,
  Qt = qt / 180,
  Jt = qt / 2,
  te = qt / 4,
  ee = (2 * qt) / 3,
  ie = Math.log10,
  ne = Math.sign;
function ae(t) {
  var e = Math.round(t);
  t = oe(t, e, t / 1e3) ? e : t;
  var i = Math.pow(10, Math.floor(ie(t))),
    n = t / i;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
}
function re(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function oe(t, e, i) {
  return Math.abs(t - e) < i;
}
function se(t, e, i) {
  var n, a, r;
  for (n = 0, a = t.length; n < a; n++)
    (r = t[n][i]),
      isNaN(r) || ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r)));
}
function le(t) {
  return t * (qt / 180);
}
function ue(t) {
  return t * (180 / qt);
}
function he(t) {
  if (Ct(t)) {
    for (var e = 1, i = 0; Math.round(t * e) / e !== t; ) (e *= 10), i++;
    return i;
  }
}
function ce(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function fe(t, e) {
  return ((t - e + Gt) % Kt) - qt;
}
function de(t) {
  return ((t % Kt) + Kt) % Kt;
}
function ve(t, e, i, n) {
  var a = de(t),
    r = de(e),
    o = de(i),
    s = de(r - a),
    l = de(o - a),
    u = de(a - r),
    h = de(a - o);
  return a === r || a === o || (n && r === o) || (s > l && u < h);
}
function ge(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
function pe(t, e, i) {
  var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
  return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n;
}
var me = function (t) {
    return 0 === t || 1 === t;
  },
  ye = function (t, e, i) {
    return -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * Kt) / i);
  },
  be = function (t, e, i) {
    return Math.pow(2, -10 * t) * Math.sin(((t - e) * Kt) / i) + 1;
  },
  xe = {
    linear: function (t) {
      return t;
    },
    easeInQuad: function (t) {
      return t * t;
    },
    easeOutQuad: function (t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function (t) {
      return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function (t) {
      return t * t * t;
    },
    easeOutCubic: function (t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function (t) {
      return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function (t) {
      return t * t * t * t;
    },
    easeOutQuart: function (t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function (t) {
      return (t /= 0.5) < 1
        ? 0.5 * t * t * t * t
        : -0.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function (t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function (t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function (t) {
      return (t /= 0.5) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function (t) {
      return 1 - Math.cos(t * Jt);
    },
    easeOutSine: function (t) {
      return Math.sin(t * Jt);
    },
    easeInOutSine: function (t) {
      return -0.5 * (Math.cos(qt * t) - 1);
    },
    easeInExpo: function (t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function (t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    easeInOutExpo: function (t) {
      return me(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
        : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
    },
    easeInCirc: function (t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function (t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function (t) {
      return (t /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function (t) {
      return me(t) ? t : ye(t, 0.075, 0.3);
    },
    easeOutElastic: function (t) {
      return me(t) ? t : be(t, 0.075, 0.3);
    },
    easeInOutElastic: function (t) {
      var e = 0.1125;
      return me(t)
        ? t
        : t < 0.5
        ? 0.5 * ye(2 * t, e, 0.45)
        : 0.5 + 0.5 * be(2 * t - 1, e, 0.45);
    },
    easeInBack: function (t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack: function (t) {
      var e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack: function (t) {
      var e = 1.70158;
      return (t /= 0.5) < 1
        ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
        : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: function (t) {
      return 1 - xe.easeOutBounce(1 - t);
    },
    easeOutBounce: function (t) {
      var e = 7.5625,
        i = 2.75;
      return t < 1 / i
        ? e * t * t
        : t < 2 / i
        ? e * (t -= 1.5 / i) * t + 0.75
        : t < 2.5 / i
        ? e * (t -= 2.25 / i) * t + 0.9375
        : e * (t -= 2.625 / i) * t + 0.984375;
    },
    easeInOutBounce: function (t) {
      return t < 0.5
        ? 0.5 * xe.easeInBounce(2 * t)
        : 0.5 * xe.easeOutBounce(2 * t - 1) + 0.5;
    },
  },
  _e = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  ke = "0123456789ABCDEF",
  we = function (t) {
    return ke[15 & t];
  },
  Me = function (t) {
    return ke[(240 & t) >> 4] + ke[15 & t];
  },
  Se = function (t) {
    return (240 & t) >> 4 == (15 & t);
  };
function De(t) {
  var e = (function (t) {
    return Se(t.r) && Se(t.g) && Se(t.b) && Se(t.a);
  })(t)
    ? we
    : Me;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t;
}
function Pe(t) {
  return (t + 0.5) | 0;
}
var Oe = function (t, e, i) {
  return Math.max(Math.min(t, i), e);
};
function Ce(t) {
  return Oe(Pe(2.55 * t), 0, 255);
}
function Ae(t) {
  return Oe(Pe(255 * t), 0, 255);
}
function Te(t) {
  return Oe(Pe(t / 2.55) / 100, 0, 1);
}
function Re(t) {
  return Oe(Pe(100 * t), 0, 100);
}
var Le = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
var Ee = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ie(t, e, i) {
  var n = e * Math.min(i, 1 - i),
    a = function (e) {
      var a =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (e + t / 30) % 12;
      return i - n * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    };
  return [a(0), a(8), a(4)];
}
function ze(t, e, i) {
  var n = function (n) {
    var a =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : (n + t / 60) % 6;
    return i - i * e * Math.max(Math.min(a, 4 - a, 1), 0);
  };
  return [n(5), n(3), n(1)];
}
function Fe(t, e, i) {
  var n,
    a = Ie(t, 1, 0.5);
  for (e + i > 1 && ((e *= n = 1 / (e + i)), (i *= n)), n = 0; n < 3; n++)
    (a[n] *= 1 - e - i), (a[n] += e);
  return a;
}
function Ve(t) {
  var e,
    i,
    n,
    a = t.r / 255,
    r = t.g / 255,
    o = t.b / 255,
    s = Math.max(a, r, o),
    l = Math.min(a, r, o),
    u = (s + l) / 2;
  return (
    s !== l &&
      ((n = s - l),
      (i = u > 0.5 ? n / (2 - s - l) : n / (s + l)),
      (e =
        60 *
          (e =
            s === a
              ? (r - o) / n + (r < o ? 6 : 0)
              : s === r
              ? (o - a) / n + 2
              : (a - r) / n + 4) +
        0.5)),
    [0 | e, i || 0, u]
  );
}
function Be(t, e, i, n) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(Ae);
}
function We(t, e, i) {
  return Be(Ie, t, e, i);
}
function Ne(t) {
  return ((t % 360) + 360) % 360;
}
function je(t) {
  var e,
    i = Ee.exec(t),
    n = 255;
  if (i) {
    i[5] !== e && (n = i[6] ? Ce(+i[5]) : Ae(+i[5]));
    var a = Ne(+i[2]),
      r = +i[3] / 100,
      o = +i[4] / 100;
    return {
      r: (e =
        "hwb" === i[1]
          ? (function (t, e, i) {
              return Be(Fe, t, e, i);
            })(a, r, o)
          : "hsv" === i[1]
          ? (function (t, e, i) {
              return Be(ze, t, e, i);
            })(a, r, o)
          : We(a, r, o))[0],
      g: e[1],
      b: e[2],
      a: n,
    };
  }
}
var He,
  $e = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Ue = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Ye(t) {
  He ||
    ((He = (function () {
      var t,
        e,
        i,
        n,
        a,
        r = {},
        o = Object.keys(Ue),
        s = Object.keys($e);
      for (t = 0; t < o.length; t++) {
        for (n = a = o[t], e = 0; e < s.length; e++)
          (i = s[e]), (a = a.replace(i, $e[i]));
        (i = parseInt(Ue[n], 16)),
          (r[a] = [(i >> 16) & 255, (i >> 8) & 255, 255 & i]);
      }
      return r;
    })()).transparent = [0, 0, 0, 0]);
  var e = He[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
}
function Xe(t, e, i) {
  if (t) {
    var n = Ve(t);
    (n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
      (n = We(n)),
      (t.r = n[0]),
      (t.g = n[1]),
      (t.b = n[2]);
  }
}
function qe(t, e) {
  return t ? Object.assign(e || {}, t) : t;
}
function Ke(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
        t.length > 3 && (e.a = Ae(t[3])))
      : ((e = qe(t, { r: 0, g: 0, b: 0, a: 1 })).a = Ae(e.a)),
    e
  );
}
function Ge(t) {
  return "r" === t.charAt(0)
    ? (function (t) {
        var e,
          i,
          n,
          a = Le.exec(t),
          r = 255;
        if (a) {
          if (a[7] !== e) {
            var o = +a[7];
            r = 255 & (a[8] ? Ce(o) : 255 * o);
          }
          return (
            (e = +a[1]),
            (i = +a[3]),
            (n = +a[5]),
            {
              r: (e = 255 & (a[2] ? Ce(e) : e)),
              g: (i = 255 & (a[4] ? Ce(i) : i)),
              b: (n = 255 & (a[6] ? Ce(n) : n)),
              a: r,
            }
          );
        }
      })(t)
    : je(t);
}
var Ze = (function () {
  function t(e) {
    if ((n(this, t), e instanceof t)) return e;
    var i,
      a,
      r,
      o,
      s = F(e);
    "object" === s
      ? (i = Ke(e))
      : "string" === s &&
        ((o = (a = e).length),
        "#" === a[0] &&
          (4 === o || 5 === o
            ? (r = {
                r: 255 & (17 * _e[a[1]]),
                g: 255 & (17 * _e[a[2]]),
                b: 255 & (17 * _e[a[3]]),
                a: 5 === o ? 17 * _e[a[4]] : 255,
              })
            : (7 !== o && 9 !== o) ||
              (r = {
                r: (_e[a[1]] << 4) | _e[a[2]],
                g: (_e[a[3]] << 4) | _e[a[4]],
                b: (_e[a[5]] << 4) | _e[a[6]],
                a: 9 === o ? (_e[a[7]] << 4) | _e[a[8]] : 255,
              })),
        (i = r || Ye(e) || Ge(e))),
      (this._rgb = i),
      (this._valid = !!i);
  }
  return (
    s(t, [
      {
        key: "valid",
        get: function () {
          return this._valid;
        },
      },
      {
        key: "rgb",
        get: function () {
          var t = qe(this._rgb);
          return t && (t.a = Te(t.a)), t;
        },
        set: function (t) {
          this._rgb = Ke(t);
        },
      },
      {
        key: "rgbString",
        value: function () {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? "rgba("
                      .concat(t.r, ", ")
                      .concat(t.g, ", ")
                      .concat(t.b, ", ")
                      .concat(Te(t.a), ")")
                  : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")"))
            : this._rgb;
          var t;
        },
      },
      {
        key: "hexString",
        value: function () {
          return this._valid ? De(this._rgb) : this._rgb;
        },
      },
      {
        key: "hslString",
        value: function () {
          return this._valid
            ? (function (t) {
                if (t) {
                  var e = Ve(t),
                    i = e[0],
                    n = Re(e[1]),
                    a = Re(e[2]);
                  return t.a < 255
                    ? "hsla("
                        .concat(i, ", ")
                        .concat(n, "%, ")
                        .concat(a, "%, ")
                        .concat(Te(t.a), ")")
                    : "hsl(".concat(i, ", ").concat(n, "%, ").concat(a, "%)");
                }
              })(this._rgb)
            : this._rgb;
        },
      },
      {
        key: "mix",
        value: function (t, e) {
          var i = this;
          if (t) {
            var n,
              a = i.rgb,
              r = t.rgb,
              o = e === n ? 0.5 : e,
              s = 2 * o - 1,
              l = a.a - r.a,
              u = ((s * l == -1 ? s : (s + l) / (1 + s * l)) + 1) / 2;
            (n = 1 - u),
              (a.r = 255 & (u * a.r + n * r.r + 0.5)),
              (a.g = 255 & (u * a.g + n * r.g + 0.5)),
              (a.b = 255 & (u * a.b + n * r.b + 0.5)),
              (a.a = o * a.a + (1 - o) * r.a),
              (i.rgb = a);
          }
          return i;
        },
      },
      {
        key: "clone",
        value: function () {
          return new t(this.rgb);
        },
      },
      {
        key: "alpha",
        value: function (t) {
          return (this._rgb.a = Ae(t)), this;
        },
      },
      {
        key: "clearer",
        value: function (t) {
          return (this._rgb.a *= 1 - t), this;
        },
      },
      {
        key: "greyscale",
        value: function () {
          var t = this._rgb,
            e = Pe(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        },
      },
      {
        key: "opaquer",
        value: function (t) {
          return (this._rgb.a *= 1 + t), this;
        },
      },
      {
        key: "negate",
        value: function () {
          var t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        },
      },
      {
        key: "lighten",
        value: function (t) {
          return Xe(this._rgb, 2, t), this;
        },
      },
      {
        key: "darken",
        value: function (t) {
          return Xe(this._rgb, 2, -t), this;
        },
      },
      {
        key: "saturate",
        value: function (t) {
          return Xe(this._rgb, 1, t), this;
        },
      },
      {
        key: "desaturate",
        value: function (t) {
          return Xe(this._rgb, 1, -t), this;
        },
      },
      {
        key: "rotate",
        value: function (t) {
          return (
            (function (t, e) {
              var i = Ve(t);
              (i[0] = Ne(i[0] + e)),
                (i = We(i)),
                (t.r = i[0]),
                (t.g = i[1]),
                (t.b = i[2]);
            })(this._rgb, t),
            this
          );
        },
      },
    ]),
    t
  );
})();
function Qe(t) {
  return new Ze(t);
}
var Je = function (t) {
  return t instanceof CanvasGradient || t instanceof CanvasPattern;
};
function ti(t) {
  return Je(t) ? t : Qe(t);
}
function ei(t) {
  return Je(t) ? t : Qe(t).saturate(0.5).darken(0.1).hexString();
}
var ii = Object.create(null),
  ni = Object.create(null);
function ai(t, e) {
  if (!e) return t;
  for (var i = e.split("."), n = 0, a = i.length; n < a; ++n) {
    var r = i[n];
    t = t[r] || (t[r] = Object.create(null));
  }
  return t;
}
function ri(t, e, i) {
  return "string" == typeof e ? Bt(ai(t, e), i) : Bt(ai(t, ""), e);
}
var oi = (function () {
    function t(e) {
      n(this, t),
        (this.animation = void 0),
        (this.backgroundColor = "rgba(0,0,0,0.1)"),
        (this.borderColor = "rgba(0,0,0,0.1)"),
        (this.color = "#666"),
        (this.datasets = {}),
        (this.devicePixelRatio = function (t) {
          return t.chart.platform.getDevicePixelRatio();
        }),
        (this.elements = {}),
        (this.events = [
          "mousemove",
          "mouseout",
          "click",
          "touchstart",
          "touchmove",
        ]),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "normal",
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = function (t, e) {
          return ei(e.backgroundColor);
        }),
        (this.hoverBorderColor = function (t, e) {
          return ei(e.borderColor);
        }),
        (this.hoverColor = function (t, e) {
          return ei(e.color);
        }),
        (this.indexAxis = "x"),
        (this.interaction = { mode: "nearest", intersect: !0 }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        this.describe(e);
    }
    return (
      s(t, [
        {
          key: "set",
          value: function (t, e) {
            return ri(this, t, e);
          },
        },
        {
          key: "get",
          value: function (t) {
            return ai(this, t);
          },
        },
        {
          key: "describe",
          value: function (t, e) {
            return ri(ni, t, e);
          },
        },
        {
          key: "override",
          value: function (t, e) {
            return ri(ii, t, e);
          },
        },
        {
          key: "route",
          value: function (t, e, i, n) {
            var a,
              r = ai(this, t),
              o = ai(this, i),
              s = "_" + e;
            Object.defineProperties(
              r,
              (et((a = {}), s, { value: r[e], writable: !0 }),
              et(a, e, {
                enumerable: !0,
                get: function () {
                  var t = this[s],
                    e = o[n];
                  return Ot(t) ? Object.assign({}, e, t) : Tt(t, e);
                },
                set: function (t) {
                  this[s] = t;
                },
              }),
              a)
            );
          },
        },
      ]),
      t
    );
  })(),
  si = new oi({
    _scriptable: function (t) {
      return !t.startsWith("on");
    },
    _indexable: function (t) {
      return "events" !== t;
    },
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  });
function li(t, e, i, n, a) {
  var r = e[a];
  return (
    r || ((r = e[a] = t.measureText(a).width), i.push(a)), r > n && (n = r), n
  );
}
function ui(t, e, i, n) {
  var a = ((n = n || {}).data = n.data || {}),
    r = (n.garbageCollect = n.garbageCollect || []);
  n.font !== e &&
    ((a = n.data = {}), (r = n.garbageCollect = []), (n.font = e)),
    t.save(),
    (t.font = e);
  var o,
    s,
    l,
    u,
    h,
    c = 0,
    f = i.length;
  for (o = 0; o < f; o++)
    if (null != (u = i[o]) && !0 !== Pt(u)) c = li(t, a, r, c, u);
    else if (Pt(u))
      for (s = 0, l = u.length; s < l; s++)
        null == (h = u[s]) || Pt(h) || (c = li(t, a, r, c, h));
  t.restore();
  var d = r.length / 2;
  if (d > i.length) {
    for (o = 0; o < d; o++) delete a[r[o]];
    r.splice(0, d);
  }
  return c;
}
function hi(t, e, i) {
  var n = t.currentDevicePixelRatio,
    a = 0 !== i ? Math.max(i / 2, 0.5) : 0;
  return Math.round((e - a) * n) / n + a;
}
function ci(t, e) {
  (e = e || t.getContext("2d")).save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore();
}
function fi(t, e, i, n) {
  var a,
    r,
    o,
    s,
    l,
    u = e.pointStyle,
    h = e.rotation,
    c = e.radius,
    f = (h || 0) * Qt;
  if (
    u &&
    "object" === F(u) &&
    ("[object HTMLImageElement]" === (a = u.toString()) ||
      "[object HTMLCanvasElement]" === a)
  )
    return (
      t.save(),
      t.translate(i, n),
      t.rotate(f),
      t.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
      void t.restore()
    );
  if (!(isNaN(c) || c <= 0)) {
    switch ((t.beginPath(), u)) {
      default:
        t.arc(i, n, c, 0, Kt), t.closePath();
        break;
      case "triangle":
        t.moveTo(i + Math.sin(f) * c, n - Math.cos(f) * c),
          (f += ee),
          t.lineTo(i + Math.sin(f) * c, n - Math.cos(f) * c),
          (f += ee),
          t.lineTo(i + Math.sin(f) * c, n - Math.cos(f) * c),
          t.closePath();
        break;
      case "rectRounded":
        (s = c - (l = 0.516 * c)),
          (r = Math.cos(f + te) * s),
          (o = Math.sin(f + te) * s),
          t.arc(i - r, n - o, l, f - qt, f - Jt),
          t.arc(i + o, n - r, l, f - Jt, f),
          t.arc(i + r, n + o, l, f, f + Jt),
          t.arc(i - o, n + r, l, f + Jt, f + qt),
          t.closePath();
        break;
      case "rect":
        if (!h) {
          (s = Math.SQRT1_2 * c), t.rect(i - s, n - s, 2 * s, 2 * s);
          break;
        }
        f += te;
      case "rectRot":
        (r = Math.cos(f) * c),
          (o = Math.sin(f) * c),
          t.moveTo(i - r, n - o),
          t.lineTo(i + o, n - r),
          t.lineTo(i + r, n + o),
          t.lineTo(i - o, n + r),
          t.closePath();
        break;
      case "crossRot":
        f += te;
      case "cross":
        (r = Math.cos(f) * c),
          (o = Math.sin(f) * c),
          t.moveTo(i - r, n - o),
          t.lineTo(i + r, n + o),
          t.moveTo(i + o, n - r),
          t.lineTo(i - o, n + r);
        break;
      case "star":
        (r = Math.cos(f) * c),
          (o = Math.sin(f) * c),
          t.moveTo(i - r, n - o),
          t.lineTo(i + r, n + o),
          t.moveTo(i + o, n - r),
          t.lineTo(i - o, n + r),
          (f += te),
          (r = Math.cos(f) * c),
          (o = Math.sin(f) * c),
          t.moveTo(i - r, n - o),
          t.lineTo(i + r, n + o),
          t.moveTo(i + o, n - r),
          t.lineTo(i - o, n + r);
        break;
      case "line":
        (r = Math.cos(f) * c),
          (o = Math.sin(f) * c),
          t.moveTo(i - r, n - o),
          t.lineTo(i + r, n + o);
        break;
      case "dash":
        t.moveTo(i, n), t.lineTo(i + Math.cos(f) * c, n + Math.sin(f) * c);
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function di(t, e, i) {
  return (
    (i = i || 0.5),
    !e ||
      (t &&
        t.x > e.left - i &&
        t.x < e.right + i &&
        t.y > e.top - i &&
        t.y < e.bottom + i)
  );
}
function vi(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function gi(t) {
  t.restore();
}
function pi(t, e, i, n, a) {
  if (!e) return t.lineTo(i.x, i.y);
  if ("middle" === a) {
    var r = (e.x + i.x) / 2;
    t.lineTo(r, e.y), t.lineTo(r, i.y);
  } else ("after" === a) != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
  t.lineTo(i.x, i.y);
}
function mi(t, e, i, n) {
  if (!e) return t.lineTo(i.x, i.y);
  t.bezierCurveTo(
    n ? e.cp1x : e.cp2x,
    n ? e.cp1y : e.cp2y,
    n ? i.cp2x : i.cp1x,
    n ? i.cp2y : i.cp1y,
    i.x,
    i.y
  );
}
function yi(t, e, i, n, a) {
  var r,
    o,
    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
    l = Pt(e) ? e : [e],
    u = s.strokeWidth > 0 && "" !== s.strokeColor;
  for (t.save(), t.font = a.string, bi(t, s), r = 0; r < l.length; ++r)
    (o = l[r]),
      u &&
        (s.strokeColor && (t.strokeStyle = s.strokeColor),
        Dt(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
        t.strokeText(o, i, n, s.maxWidth)),
      t.fillText(o, i, n, s.maxWidth),
      xi(t, i, n, o, s),
      (n += a.lineHeight);
  t.restore();
}
function bi(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]),
    Dt(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline);
}
function xi(t, e, i, n, a) {
  if (a.strikethrough || a.underline) {
    var r = t.measureText(n),
      o = e - r.actualBoundingBoxLeft,
      s = e + r.actualBoundingBoxRight,
      l = i - r.actualBoundingBoxAscent,
      u = i + r.actualBoundingBoxDescent,
      h = a.strikethrough ? (l + u) / 2 : u;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = a.decorationWidth || 2),
      t.moveTo(o, h),
      t.lineTo(s, h),
      t.stroke();
  }
}
function _i(t, e) {
  var i = e.x,
    n = e.y,
    a = e.w,
    r = e.h,
    o = e.radius;
  t.arc(i + o.topLeft, n + o.topLeft, o.topLeft, -Jt, qt, !0),
    t.lineTo(i, n + r - o.bottomLeft),
    t.arc(i + o.bottomLeft, n + r - o.bottomLeft, o.bottomLeft, qt, Jt, !0),
    t.lineTo(i + a - o.bottomRight, n + r),
    t.arc(
      i + a - o.bottomRight,
      n + r - o.bottomRight,
      o.bottomRight,
      Jt,
      0,
      !0
    ),
    t.lineTo(i + a, n + o.topRight),
    t.arc(i + a - o.topRight, n + o.topRight, o.topRight, 0, -Jt, !0),
    t.lineTo(i + o.topLeft, n);
}
var ki = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  wi = new RegExp(
    /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
  );
function Mi(t, e) {
  var i = ("" + t).match(ki);
  if (!i || "normal" === i[1]) return 1.2 * e;
  switch (((t = +i[2]), i[3])) {
    case "px":
      return t;
    case "%":
      t /= 100;
  }
  return e * t;
}
function Si(t, e) {
  var i,
    n = {},
    a = Ot(e),
    r = a ? Object.keys(e) : e,
    o = Ot(t)
      ? a
        ? function (i) {
            return Tt(t[i], t[e[i]]);
          }
        : function (e) {
            return t[e];
          }
      : function () {
          return t;
        },
    s = mt(r);
  try {
    for (s.s(); !(i = s.n()).done; ) {
      var l = i.value;
      n[l] = +o(l) || 0;
    }
  } catch (t) {
    s.e(t);
  } finally {
    s.f();
  }
  return n;
}
function Di(t) {
  return Si(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Pi(t) {
  return Si(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Oi(t) {
  var e = Di(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Ci(t, e) {
  (t = t || {}), (e = e || si.font);
  var i = Tt(t.size, e.size);
  "string" == typeof i && (i = parseInt(i, 10));
  var n = Tt(t.style, e.style);
  n &&
    !("" + n).match(wi) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = ""));
  var a = {
    family: Tt(t.family, e.family),
    lineHeight: Mi(Tt(t.lineHeight, e.lineHeight), i),
    size: i,
    style: n,
    weight: Tt(t.weight, e.weight),
    string: "",
  };
  return (
    (a.string = (function (t) {
      return !t || Dt(t.size) || Dt(t.family)
        ? null
        : (t.style ? t.style + " " : "") +
            (t.weight ? t.weight + " " : "") +
            t.size +
            "px " +
            t.family;
    })(a)),
    a
  );
}
function Ai(t, e, i, n) {
  var a,
    r,
    o,
    s = !0;
  for (a = 0, r = t.length; a < r; ++a)
    if (
      void 0 !== (o = t[a]) &&
      (void 0 !== e && "function" == typeof o && ((o = o(e)), (s = !1)),
      void 0 !== i && Pt(o) && ((o = o[i % o.length]), (s = !1)),
      void 0 !== o)
    )
      return n && !s && (n.cacheable = !1), o;
}
function Ti(t, e) {
  return Object.assign(Object.create(t), e);
}
function Ri(t, e, i) {
  i =
    i ||
    function (i) {
      return t[i] < e;
    };
  for (var n, a = t.length - 1, r = 0; a - r > 1; )
    i((n = (r + a) >> 1)) ? (r = n) : (a = n);
  return { lo: r, hi: a };
}
var Li = function (t, e, i) {
    return Ri(t, i, function (n) {
      return t[n][e] < i;
    });
  },
  Ei = function (t, e, i) {
    return Ri(t, i, function (n) {
      return t[n][e] >= i;
    });
  };
var Ii = ["push", "pop", "shift", "splice", "unshift"];
function zi(t, e) {
  var i = t._chartjs;
  if (i) {
    var n = i.listeners,
      a = n.indexOf(e);
    -1 !== a && n.splice(a, 1),
      n.length > 0 ||
        (Ii.forEach(function (e) {
          delete t[e];
        }),
        delete t._chartjs);
  }
}
function Fi(t) {
  var e,
    i,
    n = new Set();
  for (e = 0, i = t.length; e < i; ++e) n.add(t[e]);
  return n.size === i ? t : Array.from(n);
}
function Vi(t) {
  var e,
    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
    a = arguments.length > 3 ? arguments[3] : void 0,
    r =
      arguments.length > 4 && void 0 !== arguments[4]
        ? arguments[4]
        : function () {
            return t[0];
          };
  Ut(a) || (a = Gi("_fallback", t));
  var o =
    (et((e = {}), Symbol.toStringTag, "Object"),
    et(e, "_cacheable", !0),
    et(e, "_scopes", t),
    et(e, "_rootScopes", n),
    et(e, "_fallback", a),
    et(e, "_getTarget", r),
    et(e, "override", function (e) {
      return Vi([e].concat(V(t)), i, n, a);
    }),
    e);
  return new Proxy(o, {
    deleteProperty: function (e, i) {
      return delete e[i], delete e._keys, delete t[0][i], !0;
    },
    get: function (e, n) {
      return Hi(e, n, function () {
        return Ki(n, i, t, e);
      });
    },
    getOwnPropertyDescriptor: function (t, e) {
      return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
    },
    getPrototypeOf: function () {
      return Reflect.getPrototypeOf(t[0]);
    },
    has: function (t, e) {
      return Zi(t).includes(e);
    },
    ownKeys: function (t) {
      return Zi(t);
    },
    set: function (t, e, i) {
      var n = t._storage || (t._storage = r());
      return (t[e] = n[e] = i), delete t._keys, !0;
    },
  });
}
function Bi(t, e, i, n) {
  var a = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: Wi(t, n),
    setContext: function (e) {
      return Bi(t, e, i, n);
    },
    override: function (a) {
      return Bi(t.override(a), e, i, n);
    },
  };
  return new Proxy(a, {
    deleteProperty: function (e, i) {
      return delete e[i], delete t[i], !0;
    },
    get: function (t, e, i) {
      return Hi(t, e, function () {
        return (function (t, e, i) {
          var n = t._proxy,
            a = t._context,
            r = t._subProxy,
            o = t._descriptors,
            s = n[e];
          Yt(s) &&
            o.isScriptable(e) &&
            (s = (function (t, e, i, n) {
              var a = i._proxy,
                r = i._context,
                o = i._subProxy,
                s = i._stack;
              if (s.has(t))
                throw new Error(
                  "Recursion detected: " + Array.from(s).join("->") + "->" + t
                );
              s.add(t),
                (e = e(r, o || n)),
                s.delete(t),
                ji(t, e) && (e = Xi(a._scopes, a, t, e));
              return e;
            })(e, s, t, i));
          Pt(s) &&
            s.length &&
            (s = (function (t, e, i, n) {
              var a = i._proxy,
                r = i._context,
                o = i._subProxy,
                s = i._descriptors;
              if (Ut(r.index) && n(t)) e = e[r.index % e.length];
              else if (Ot(e[0])) {
                var l = e,
                  u = a._scopes.filter(function (t) {
                    return t !== l;
                  });
                e = [];
                var h,
                  c = mt(l);
                try {
                  for (c.s(); !(h = c.n()).done; ) {
                    var f = Xi(u, a, t, h.value);
                    e.push(Bi(f, r, o && o[t], s));
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
              }
              return e;
            })(e, s, t, o.isIndexable));
          ji(e, s) && (s = Bi(s, a, r && r[e], o));
          return s;
        })(t, e, i);
      });
    },
    getOwnPropertyDescriptor: function (e, i) {
      return e._descriptors.allKeys
        ? Reflect.has(t, i)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, i);
    },
    getPrototypeOf: function () {
      return Reflect.getPrototypeOf(t);
    },
    has: function (e, i) {
      return Reflect.has(t, i);
    },
    ownKeys: function () {
      return Reflect.ownKeys(t);
    },
    set: function (e, i, n) {
      return (t[i] = n), delete e[i], !0;
    },
  });
}
function Wi(t) {
  var e =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { scriptable: !0, indexable: !0 },
    i = t._scriptable,
    n = void 0 === i ? e.scriptable : i,
    a = t._indexable,
    r = void 0 === a ? e.indexable : a,
    o = t._allKeys,
    s = void 0 === o ? e.allKeys : o;
  return {
    allKeys: s,
    scriptable: n,
    indexable: r,
    isScriptable: Yt(n)
      ? n
      : function () {
          return n;
        },
    isIndexable: Yt(r)
      ? r
      : function () {
          return r;
        },
  };
}
var Ni = function (t, e) {
    return t ? t + $t(e) : e;
  },
  ji = function (t, e) {
    return (
      Ot(e) &&
      "adapters" !== t &&
      (null === Object.getPrototypeOf(e) || e.constructor === Object)
    );
  };
function Hi(t, e, i) {
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
  var n = i();
  return (t[e] = n), n;
}
function $i(t, e, i) {
  return Yt(t) ? t(e, i) : t;
}
var Ui = function (t, e) {
  return !0 === t ? e : "string" == typeof t ? Ht(e, t) : void 0;
};
function Yi(t, e, i, n) {
  var a,
    r = mt(e);
  try {
    for (r.s(); !(a = r.n()).done; ) {
      var o = a.value,
        s = Ui(i, o);
      if (s) {
        t.add(s);
        var l = $i(s._fallback, i, s);
        if (Ut(l) && l !== i && l !== n) return l;
      } else if (!1 === s && Ut(n) && i !== n) return null;
    }
  } catch (t) {
    r.e(t);
  } finally {
    r.f();
  }
  return !1;
}
function Xi(t, e, i, n) {
  var a = e._rootScopes,
    r = $i(e._fallback, i, n),
    o = [].concat(V(t), V(a)),
    s = new Set();
  s.add(n);
  var l = qi(s, o, i, r || i);
  return (
    null !== l &&
    (!Ut(r) || r === i || null !== (l = qi(s, o, r, l))) &&
    Vi(Array.from(s), [""], a, r, function () {
      return (function (t, e, i) {
        var n = t._getTarget();
        e in n || (n[e] = {});
        var a = n[e];
        if (Pt(a) && Ot(i)) return i;
        return a;
      })(e, i, n);
    })
  );
}
function qi(t, e, i, n) {
  for (; i; ) i = Yi(t, e, i, n);
  return i;
}
function Ki(t, e, i, n) {
  var a,
    r,
    o = mt(e);
  try {
    for (o.s(); !(r = o.n()).done; ) {
      var s = r.value;
      if (((a = Gi(Ni(s, t), i)), Ut(a))) return ji(t, a) ? Xi(i, n, t, a) : a;
    }
  } catch (t) {
    o.e(t);
  } finally {
    o.f();
  }
}
function Gi(t, e) {
  var i,
    n = mt(e);
  try {
    for (n.s(); !(i = n.n()).done; ) {
      var a = i.value;
      if (a) {
        var r = a[t];
        if (Ut(r)) return r;
      }
    }
  } catch (t) {
    n.e(t);
  } finally {
    n.f();
  }
}
function Zi(t) {
  var e = t._keys;
  return (
    e ||
      (e = t._keys = (function (t) {
        var e,
          i = new Set(),
          n = mt(t);
        try {
          for (n.s(); !(e = n.n()).done; ) {
            var a,
              r = e.value,
              o = mt(
                Object.keys(r).filter(function (t) {
                  return !t.startsWith("_");
                })
              );
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var s = a.value;
                i.add(s);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
        return Array.from(i);
      })(t._scopes)),
    e
  );
}
var Qi = Number.EPSILON || 1e-14,
  Ji = function (t, e) {
    return e < t.length && !t[e].skip && t[e];
  },
  tn = function (t) {
    return "x" === t ? "y" : "x";
  };
function en(t, e, i) {
  for (var n, a, r, o, s, l = t.length, u = Ji(t, 0), h = 0; h < l - 1; ++h)
    (s = u),
      (u = Ji(t, h + 1)),
      s &&
        u &&
        (oe(e[h], 0, Qi)
          ? (i[h] = i[h + 1] = 0)
          : ((n = i[h] / e[h]),
            (a = i[h + 1] / e[h]),
            (o = Math.pow(n, 2) + Math.pow(a, 2)) <= 9 ||
              ((r = 3 / Math.sqrt(o)),
              (i[h] = n * r * e[h]),
              (i[h + 1] = a * r * e[h]))));
}
function nn(t, e) {
  for (
    var i,
      n,
      a,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x",
      o = tn(r),
      s = t.length,
      l = Ji(t, 0),
      u = 0;
    u < s;
    ++u
  )
    if (((n = a), (a = l), (l = Ji(t, u + 1)), a)) {
      var h = a[r],
        c = a[o];
      n &&
        ((i = (h - n[r]) / 3),
        (a["cp1".concat(r)] = h - i),
        (a["cp1".concat(o)] = c - i * e[u])),
        l &&
          ((i = (l[r] - h) / 3),
          (a["cp2".concat(r)] = h + i),
          (a["cp2".concat(o)] = c + i * e[u]));
    }
}
function an(t, e, i) {
  return Math.max(Math.min(t, i), e);
}
function rn(t, e, i, n, a) {
  var r, o, s, l, u, h, c, f, d, v, g, p, m, y, b, x, _;
  if (
    (e.spanGaps &&
      (t = t.filter(function (t) {
        return !t.skip;
      })),
    "monotone" === e.cubicInterpolationMode)
  )
    !(function (t) {
      var e,
        i,
        n,
        a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
        r = tn(a),
        o = t.length,
        s = Array(o).fill(0),
        l = Array(o),
        u = Ji(t, 0);
      for (e = 0; e < o; ++e)
        if (((i = n), (n = u), (u = Ji(t, e + 1)), n)) {
          if (u) {
            var h = u[a] - n[a];
            s[e] = 0 !== h ? (u[r] - n[r]) / h : 0;
          }
          l[e] = i
            ? u
              ? ne(s[e - 1]) !== ne(s[e])
                ? 0
                : (s[e - 1] + s[e]) / 2
              : s[e - 1]
            : s[e];
        }
      en(t, s, l), nn(t, l, a);
    })(t, a);
  else {
    var k = n ? t[t.length - 1] : t[0];
    for (r = 0, o = t.length; r < o; ++r)
      (s = t[r]),
        (u = k),
        (h = s),
        (c = t[Math.min(r + 1, o - (n ? 0 : 1)) % o]),
        (f = e.tension),
        (d = void 0),
        (v = void 0),
        (g = void 0),
        (p = void 0),
        (m = void 0),
        (y = void 0),
        (b = void 0),
        (x = void 0),
        (_ = void 0),
        (d = u.skip ? h : u),
        (v = h),
        (g = c.skip ? h : c),
        (p = ce(v, d)),
        (m = ce(g, v)),
        (y = p / (p + m)),
        (b = m / (p + m)),
        (x = f * (y = isNaN(y) ? 0 : y)),
        (_ = f * (b = isNaN(b) ? 0 : b)),
        (l = {
          previous: { x: v.x - x * (g.x - d.x), y: v.y - x * (g.y - d.y) },
          next: { x: v.x + _ * (g.x - d.x), y: v.y + _ * (g.y - d.y) },
        }),
        (s.cp1x = l.previous.x),
        (s.cp1y = l.previous.y),
        (s.cp2x = l.next.x),
        (s.cp2y = l.next.y),
        (k = s);
  }
  e.capBezierPoints &&
    (function (t, e) {
      var i,
        n,
        a,
        r,
        o,
        s = di(t[0], e);
      for (i = 0, n = t.length; i < n; ++i)
        (o = r),
          (r = s),
          (s = i < n - 1 && di(t[i + 1], e)),
          r &&
            ((a = t[i]),
            o &&
              ((a.cp1x = an(a.cp1x, e.left, e.right)),
              (a.cp1y = an(a.cp1y, e.top, e.bottom))),
            s &&
              ((a.cp2x = an(a.cp2x, e.left, e.right)),
              (a.cp2y = an(a.cp2y, e.top, e.bottom))));
    })(t, i);
}
function on() {
  return "undefined" != typeof window && "undefined" != typeof document;
}
function sn(t) {
  var e = t.parentNode;
  return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
}
function ln(t, e, i) {
  var n;
  return (
    "string" == typeof t
      ? ((n = parseInt(t, 10)),
        -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i]))
      : (n = t),
    n
  );
}
var un = function (t) {
  return window.getComputedStyle(t, null);
};
var hn = ["top", "right", "bottom", "left"];
function cn(t, e, i) {
  var n = {};
  i = i ? "-" + i : "";
  for (var a = 0; a < 4; a++) {
    var r = hn[a];
    n[r] = parseFloat(t[e + "-" + r + i]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
function fn(t, e) {
  var i = e.canvas,
    n = e.currentDevicePixelRatio,
    a = un(i),
    r = "border-box" === a.boxSizing,
    o = cn(a, "padding"),
    s = cn(a, "border", "width"),
    l = (function (t, e) {
      var i,
        n,
        a = t.native || t,
        r = a.touches,
        o = r && r.length ? r[0] : a,
        s = o.offsetX,
        l = o.offsetY,
        u = !1;
      if (
        (function (t, e, i) {
          return (t > 0 || e > 0) && (!i || !i.shadowRoot);
        })(s, l, a.target)
      )
        (i = s), (n = l);
      else {
        var h = e.getBoundingClientRect();
        (i = o.clientX - h.left), (n = o.clientY - h.top), (u = !0);
      }
      return { x: i, y: n, box: u };
    })(t, i),
    u = l.x,
    h = l.y,
    c = l.box,
    f = o.left + (c && s.left),
    d = o.top + (c && s.top),
    v = e.width,
    g = e.height;
  return (
    r && ((v -= o.width + s.width), (g -= o.height + s.height)),
    {
      x: Math.round((((u - f) / v) * i.width) / n),
      y: Math.round((((h - d) / g) * i.height) / n),
    }
  );
}
var dn = function (t) {
  return Math.round(10 * t) / 10;
};
function vn(t, e, i, n) {
  var a = un(t),
    r = cn(a, "margin"),
    o = ln(a.maxWidth, t, "clientWidth") || Zt,
    s = ln(a.maxHeight, t, "clientHeight") || Zt,
    l = (function (t, e, i) {
      var n, a;
      if (void 0 === e || void 0 === i) {
        var r = sn(t);
        if (r) {
          var o = r.getBoundingClientRect(),
            s = un(r),
            l = cn(s, "border", "width"),
            u = cn(s, "padding");
          (e = o.width - u.width - l.width),
            (i = o.height - u.height - l.height),
            (n = ln(s.maxWidth, r, "clientWidth")),
            (a = ln(s.maxHeight, r, "clientHeight"));
        } else (e = t.clientWidth), (i = t.clientHeight);
      }
      return { width: e, height: i, maxWidth: n || Zt, maxHeight: a || Zt };
    })(t, e, i),
    u = l.width,
    h = l.height;
  if ("content-box" === a.boxSizing) {
    var c = cn(a, "border", "width"),
      f = cn(a, "padding");
    (u -= f.width + c.width), (h -= f.height + c.height);
  }
  return (
    (u = Math.max(0, u - r.width)),
    (h = Math.max(0, n ? Math.floor(u / n) : h - r.height)),
    (u = dn(Math.min(u, o, l.maxWidth))),
    (h = dn(Math.min(h, s, l.maxHeight))),
    u && !h && (h = dn(u / 2)),
    { width: u, height: h }
  );
}
function gn(t, e, i) {
  var n = e || 1,
    a = Math.floor(t.height * n),
    r = Math.floor(t.width * n);
  (t.height = a / n), (t.width = r / n);
  var o = t.canvas;
  return (
    o.style &&
      (i || (!o.style.height && !o.style.width)) &&
      ((o.style.height = "".concat(t.height, "px")),
      (o.style.width = "".concat(t.width, "px"))),
    (t.currentDevicePixelRatio !== n || o.height !== a || o.width !== r) &&
      ((t.currentDevicePixelRatio = n),
      (o.height = a),
      (o.width = r),
      t.ctx.setTransform(n, 0, 0, n, 0, 0),
      !0)
  );
}
var pn = (function () {
  var t = !1;
  try {
    var e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e);
  } catch (t) {}
  return t;
})();
function mn(t, e) {
  var i = (function (t, e) {
      return un(t).getPropertyValue(e);
    })(t, e),
    n = i && i.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function yn(t, e, i, n) {
  return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
}
function bn(t, e, i, n) {
  return {
    x: t.x + i * (e.x - t.x),
    y:
      "middle" === n
        ? i < 0.5
          ? t.y
          : e.y
        : "after" === n
        ? i < 1
          ? t.y
          : e.y
        : i > 0
        ? e.y
        : t.y,
  };
}
function xn(t, e, i, n) {
  var a = { x: t.cp2x, y: t.cp2y },
    r = { x: e.cp1x, y: e.cp1y },
    o = yn(t, a, i),
    s = yn(a, r, i),
    l = yn(r, e, i),
    u = yn(o, s, i),
    h = yn(s, l, i);
  return yn(u, h, i);
}
var _n = new Map();
function kn(t, e, i) {
  return (function (t, e) {
    e = e || {};
    var i = t + JSON.stringify(e),
      n = _n.get(i);
    return n || ((n = new Intl.NumberFormat(t, e)), _n.set(i, n)), n;
  })(e, i).format(t);
}
function wn(t, e, i) {
  return t
    ? (function (t, e) {
        return {
          x: function (i) {
            return t + t + e - i;
          },
          setWidth: function (t) {
            e = t;
          },
          textAlign: function (t) {
            return "center" === t ? t : "right" === t ? "left" : "right";
          },
          xPlus: function (t, e) {
            return t - e;
          },
          leftForLtr: function (t, e) {
            return t - e;
          },
        };
      })(e, i)
    : {
        x: function (t) {
          return t;
        },
        setWidth: function (t) {},
        textAlign: function (t) {
          return t;
        },
        xPlus: function (t, e) {
          return t + e;
        },
        leftForLtr: function (t, e) {
          return t;
        },
      };
}
function Mn(t, e) {
  var i, n;
  ("ltr" !== e && "rtl" !== e) ||
    ((n = [
      (i = t.canvas.style).getPropertyValue("direction"),
      i.getPropertyPriority("direction"),
    ]),
    i.setProperty("direction", e, "important"),
    (t.prevTextDirection = n));
}
function Sn(t, e) {
  void 0 !== e &&
    (delete t.prevTextDirection,
    t.canvas.style.setProperty("direction", e[0], e[1]));
}
function Dn(t) {
  return "angle" === t
    ? { between: ve, compare: fe, normalize: de }
    : {
        between: pe,
        compare: function (t, e) {
          return t - e;
        },
        normalize: function (t) {
          return t;
        },
      };
}
function Pn(t) {
  var e = t.start,
    i = t.end,
    n = t.count;
  return {
    start: e % n,
    end: i % n,
    loop: t.loop && (i - e + 1) % n == 0,
    style: t.style,
  };
}
function On(t, e, i) {
  if (!i) return [t];
  for (
    var n,
      a,
      r,
      o = i.property,
      s = i.start,
      l = i.end,
      u = e.length,
      h = Dn(o),
      c = h.compare,
      f = h.between,
      d = h.normalize,
      v = (function (t, e, i) {
        var n,
          a,
          r = i.property,
          o = i.start,
          s = i.end,
          l = Dn(r),
          u = l.between,
          h = l.normalize,
          c = e.length,
          f = t.start,
          d = t.end,
          v = t.loop;
        if (v) {
          for (
            f += c, d += c, n = 0, a = c;
            n < a && u(h(e[f % c][r]), o, s);
            ++n
          )
            f--, d--;
          (f %= c), (d %= c);
        }
        return d < f && (d += c), { start: f, end: d, loop: v, style: t.style };
      })(t, e, i),
      g = v.start,
      p = v.end,
      m = v.loop,
      y = v.style,
      b = [],
      x = !1,
      _ = null,
      k = function () {
        return x || (f(s, r, n) && 0 !== c(s, r));
      },
      w = function () {
        return !x || 0 === c(l, n) || f(l, r, n);
      },
      M = g,
      S = g;
    M <= p;
    ++M
  )
    (a = e[M % u]).skip ||
      ((n = d(a[o])) !== r &&
        ((x = f(n, s, l)),
        null === _ && k() && (_ = 0 === c(n, s) ? M : S),
        null !== _ &&
          w() &&
          (b.push(Pn({ start: _, end: M, loop: m, count: u, style: y })),
          (_ = null)),
        (S = M),
        (r = n)));
  return (
    null !== _ && b.push(Pn({ start: _, end: p, loop: m, count: u, style: y })),
    b
  );
}
function Cn(t, e) {
  for (var i = [], n = t.segments, a = 0; a < n.length; a++) {
    var r = On(n[a], t.points, e);
    r.length && i.push.apply(i, V(r));
  }
  return i;
}
function An(t, e, i, n) {
  return n && n.setContext && i
    ? (function (t, e, i, n) {
        var a = t._chart.getContext(),
          r = Tn(t.options),
          o = t._datasetIndex,
          s = t.options.spanGaps,
          l = i.length,
          u = [],
          h = r,
          c = e[0].start,
          f = c;
        function d(t, e, n, a) {
          var r = s ? -1 : 1;
          if (t !== e) {
            for (t += l; i[t % l].skip; ) t -= r;
            for (; i[e % l].skip; ) e += r;
            t % l != e % l &&
              (u.push({ start: t % l, end: e % l, loop: n, style: a }),
              (h = a),
              (c = e % l));
          }
        }
        var v,
          g = mt(e);
        try {
          for (g.s(); !(v = g.n()).done; ) {
            var p = v.value;
            c = s ? c : p.start;
            var m = i[c % l],
              y = void 0;
            for (f = c + 1; f <= p.end; f++) {
              var b = i[f % l];
              Rn(
                (y = Tn(
                  n.setContext(
                    Ti(a, {
                      type: "segment",
                      p0: m,
                      p1: b,
                      p0DataIndex: (f - 1) % l,
                      p1DataIndex: f % l,
                      datasetIndex: o,
                    })
                  )
                )),
                h
              ) && d(c, f - 1, p.loop, h),
                (m = b),
                (h = y);
            }
            c < f - 1 && d(c, f - 1, p.loop, h);
          }
        } catch (t) {
          g.e(t);
        } finally {
          g.f();
        }
        return u;
      })(t, e, i, n)
    : e;
}
function Tn(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function Rn(t, e) {
  return e && JSON.stringify(t) !== JSON.stringify(e);
}
function Ln(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      i.push.apply(i, n);
  }
  return i;
}
function En(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Ln(Object(i), !0).forEach(function (e) {
          et(t, e, i[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
      : Ln(Object(i)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
  }
  return t;
}
function In(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function zn(t, e) {
  var i =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!i) {
    if (
      Array.isArray(t) ||
      (i = (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return Fn(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === i && t.constructor && (i = t.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(t);
        if (
          "Arguments" === i ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        )
          return Fn(t, e);
      })(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      i && (t = i);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
        },
        e: function (t) {
          throw t;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var r,
    o = !0,
    s = !1;
  return {
    s: function () {
      i = i.call(t);
    },
    n: function () {
      var t = i.next();
      return (o = t.done), t;
    },
    e: function (t) {
      (s = !0), (r = t);
    },
    f: function () {
      try {
        o || null == i.return || i.return();
      } finally {
        if (s) throw r;
      }
    },
  };
}
function Fn(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
  return n;
}
var Vn = new ((function () {
    function t() {
      n(this, t),
        (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    return (
      s(t, [
        {
          key: "_notify",
          value: function (t, e, i, n) {
            var a = e.listeners[n],
              r = e.duration;
            a.forEach(function (n) {
              return n({
                chart: t,
                initial: e.initial,
                numSteps: r,
                currentStep: Math.min(i - e.start, r),
              });
            });
          },
        },
        {
          key: "_refresh",
          value: function () {
            var t = this;
            this._request ||
              ((this._running = !0),
              (this._request = bt.call(window, function () {
                t._update(), (t._request = null), t._running && t._refresh();
              })));
          },
        },
        {
          key: "_update",
          value: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Date.now(),
              i = 0;
            this._charts.forEach(function (n, a) {
              if (n.running && n.items.length) {
                for (var r, o = n.items, s = o.length - 1, l = !1; s >= 0; --s)
                  (r = o[s])._active
                    ? (r._total > n.duration && (n.duration = r._total),
                      r.tick(e),
                      (l = !0))
                    : ((o[s] = o[o.length - 1]), o.pop());
                l && (a.draw(), t._notify(a, n, e, "progress")),
                  o.length ||
                    ((n.running = !1),
                    t._notify(a, n, e, "complete"),
                    (n.initial = !1)),
                  (i += o.length);
              }
            }),
              (this._lastDate = e),
              0 === i && (this._running = !1);
          },
        },
        {
          key: "_getAnims",
          value: function (t) {
            var e = this._charts,
              i = e.get(t);
            return (
              i ||
                ((i = {
                  running: !1,
                  initial: !0,
                  items: [],
                  listeners: { complete: [], progress: [] },
                }),
                e.set(t, i)),
              i
            );
          },
        },
        {
          key: "listen",
          value: function (t, e, i) {
            this._getAnims(t).listeners[e].push(i);
          },
        },
        {
          key: "add",
          value: function (t, e) {
            var i;
            e && e.length && (i = this._getAnims(t).items).push.apply(i, V(e));
          },
        },
        {
          key: "has",
          value: function (t) {
            return this._getAnims(t).items.length > 0;
          },
        },
        {
          key: "start",
          value: function (t) {
            var e = this._charts.get(t);
            e &&
              ((e.running = !0),
              (e.start = Date.now()),
              (e.duration = e.items.reduce(function (t, e) {
                return Math.max(t, e._duration);
              }, 0)),
              this._refresh());
          },
        },
        {
          key: "running",
          value: function (t) {
            if (!this._running) return !1;
            var e = this._charts.get(t);
            return !!(e && e.running && e.items.length);
          },
        },
        {
          key: "stop",
          value: function (t) {
            var e = this._charts.get(t);
            if (e && e.items.length) {
              for (var i = e.items, n = i.length - 1; n >= 0; --n)
                i[n].cancel();
              (e.items = []), this._notify(t, e, Date.now(), "complete");
            }
          },
        },
        {
          key: "remove",
          value: function (t) {
            return this._charts.delete(t);
          },
        },
      ]),
      t
    );
  })())(),
  Bn = {
    boolean: function (t, e, i) {
      return i > 0.5 ? e : t;
    },
    color: function (t, e, i) {
      var n = ti(t || "transparent"),
        a = n.valid && ti(e || "transparent");
      return a && a.valid ? a.mix(n, i).hexString() : e;
    },
    number: function (t, e, i) {
      return t + (e - t) * i;
    },
  },
  Wn = (function () {
    function t(e, i, a, r) {
      n(this, t);
      var o = i[a];
      r = Ai([e.to, r, o, e.from]);
      var s = Ai([e.from, o, r]);
      (this._active = !0),
        (this._fn = e.fn || Bn[e.type || F(s)]),
        (this._easing = xe[e.easing] || xe.linear),
        (this._start = Math.floor(Date.now() + (e.delay || 0))),
        (this._duration = this._total = Math.floor(e.duration)),
        (this._loop = !!e.loop),
        (this._target = i),
        (this._prop = a),
        (this._from = s),
        (this._to = r),
        (this._promises = void 0);
    }
    return (
      s(t, [
        {
          key: "active",
          value: function () {
            return this._active;
          },
        },
        {
          key: "update",
          value: function (t, e, i) {
            if (this._active) {
              this._notify(!1);
              var n = this._target[this._prop],
                a = i - this._start,
                r = this._duration - a;
              (this._start = i),
                (this._duration = Math.floor(Math.max(r, t.duration))),
                (this._total += a),
                (this._loop = !!t.loop),
                (this._to = Ai([t.to, e, n, t.from])),
                (this._from = Ai([t.from, n, e]));
            }
          },
        },
        {
          key: "cancel",
          value: function () {
            this._active &&
              (this.tick(Date.now()), (this._active = !1), this._notify(!1));
          },
        },
        {
          key: "tick",
          value: function (t) {
            var e,
              i = t - this._start,
              n = this._duration,
              a = this._prop,
              r = this._from,
              o = this._loop,
              s = this._to;
            if (((this._active = r !== s && (o || i < n)), !this._active))
              return (this._target[a] = s), void this._notify(!0);
            i < 0
              ? (this._target[a] = r)
              : ((e = (i / n) % 2),
                (e = o && e > 1 ? 2 - e : e),
                (e = this._easing(Math.min(1, Math.max(0, e)))),
                (this._target[a] = this._fn(r, s, e)));
          },
        },
        {
          key: "wait",
          value: function () {
            var t = this._promises || (this._promises = []);
            return new Promise(function (e, i) {
              t.push({ res: e, rej: i });
            });
          },
        },
        {
          key: "_notify",
          value: function (t) {
            for (
              var e = t ? "res" : "rej", i = this._promises || [], n = 0;
              n < i.length;
              n++
            )
              i[n][e]();
          },
        },
      ]),
      t
    );
  })();
si.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0,
});
var Nn = Object.keys(si.animation);
si.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: function (t) {
    return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
  },
}),
  si.set("animations", {
    colors: {
      type: "color",
      properties: ["color", "borderColor", "backgroundColor"],
    },
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius", "tension"],
    },
  }),
  si.describe("animations", { _fallback: "animation" }),
  si.set("transitions", {
    active: { animation: { duration: 400 } },
    resize: { animation: { duration: 0 } },
    show: {
      animations: {
        colors: { from: "transparent" },
        visible: { type: "boolean", duration: 0 },
      },
    },
    hide: {
      animations: {
        colors: { to: "transparent" },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: function (t) {
            return 0 | t;
          },
        },
      },
    },
  });
var jn = (function () {
  function t(e, i) {
    n(this, t),
      (this._chart = e),
      (this._properties = new Map()),
      this.configure(i);
  }
  return (
    s(t, [
      {
        key: "configure",
        value: function (t) {
          if (Ot(t)) {
            var e = this._properties;
            Object.getOwnPropertyNames(t).forEach(function (i) {
              var n = t[i];
              if (Ot(n)) {
                var a,
                  r = {},
                  o = zn(Nn);
                try {
                  for (o.s(); !(a = o.n()).done; ) {
                    var s = a.value;
                    r[s] = n[s];
                  }
                } catch (t) {
                  o.e(t);
                } finally {
                  o.f();
                }
                ((Pt(n.properties) && n.properties) || [i]).forEach(function (
                  t
                ) {
                  (t !== i && e.has(t)) || e.set(t, r);
                });
              }
            });
          }
        },
      },
      {
        key: "_animateOptions",
        value: function (t, e) {
          var i = e.options,
            n = (function (t, e) {
              if (!e) return;
              var i = t.options;
              if (!i) return void (t.options = e);
              i.$shared &&
                (t.options = i = Object.assign({}, i, {
                  $shared: !1,
                  $animations: {},
                }));
              return i;
            })(t, i);
          if (!n) return [];
          var a = this._createAnimations(n, i);
          return (
            i.$shared &&
              (function (t, e) {
                for (var i = [], n = Object.keys(e), a = 0; a < n.length; a++) {
                  var r = t[n[a]];
                  r && r.active() && i.push(r.wait());
                }
                return Promise.all(i);
              })(t.options.$animations, i).then(
                function () {
                  t.options = i;
                },
                function () {}
              ),
            a
          );
        },
      },
      {
        key: "_createAnimations",
        value: function (t, e) {
          var i,
            n = this._properties,
            a = [],
            r = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            s = Date.now();
          for (i = o.length - 1; i >= 0; --i) {
            var l = o[i];
            if ("$" !== l.charAt(0))
              if ("options" !== l) {
                var u = e[l],
                  h = r[l],
                  c = n.get(l);
                if (h) {
                  if (c && h.active()) {
                    h.update(c, u, s);
                    continue;
                  }
                  h.cancel();
                }
                c && c.duration
                  ? ((r[l] = h = new Wn(c, t, l, u)), a.push(h))
                  : (t[l] = u);
              } else a.push.apply(a, V(this._animateOptions(t, e)));
          }
          return a;
        },
      },
      {
        key: "update",
        value: function (t, e) {
          if (0 !== this._properties.size) {
            var i = this._createAnimations(t, e);
            return i.length ? (Vn.add(this._chart, i), !0) : void 0;
          }
          Object.assign(t, e);
        },
      },
    ]),
    t
  );
})();
function Hn(t, e) {
  var i = (t && t.options) || {},
    n = i.reverse,
    a = void 0 === i.min ? e : 0,
    r = void 0 === i.max ? e : 0;
  return { start: n ? r : a, end: n ? a : r };
}
function $n(t, e) {
  var i,
    n,
    a = [],
    r = t._getSortedDatasetMetas(e);
  for (i = 0, n = r.length; i < n; ++i) a.push(r[i].index);
  return a;
}
function Un(t, e, i) {
  var n,
    a,
    r,
    o,
    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    l = t.keys,
    u = "single" === s.mode;
  if (null !== e) {
    for (n = 0, a = l.length; n < a; ++n) {
      if ((r = +l[n]) === i) {
        if (s.all) continue;
        break;
      }
      (o = t.values[r]), Ct(o) && (u || 0 === e || ne(e) === ne(o)) && (e += o);
    }
    return e;
  }
}
function Yn(t, e) {
  var i = t && t.options.stacked;
  return i || (void 0 === i && void 0 !== e.stack);
}
function Xn(t, e, i) {
  var n = t[e] || (t[e] = {});
  return n[i] || (n[i] = {});
}
function qn(t, e, i, n) {
  var a,
    r = zn(e.getMatchingVisibleMetas(n).reverse());
  try {
    for (r.s(); !(a = r.n()).done; ) {
      var o = a.value,
        s = t[o.index];
      if ((i && s > 0) || (!i && s < 0)) return o.index;
    }
  } catch (t) {
    r.e(t);
  } finally {
    r.f();
  }
  return null;
}
function Kn(t, e) {
  for (
    var i,
      n = t.chart,
      a = t._cachedMeta,
      r = n._stacks || (n._stacks = {}),
      o = a.iScale,
      s = a.vScale,
      l = a.index,
      u = o.axis,
      h = s.axis,
      c = (function (t, e, i) {
        return ""
          .concat(t.id, ".")
          .concat(e.id, ".")
          .concat(i.stack || i.type);
      })(o, s, a),
      f = e.length,
      d = 0;
    d < f;
    ++d
  ) {
    var v = e[d],
      g = v[u],
      p = v[h];
    ((i = (v._stacks || (v._stacks = {}))[h] = Xn(r, c, g))[l] = p),
      (i._top = qn(i, s, !0, a.type)),
      (i._bottom = qn(i, s, !1, a.type));
  }
}
function Gn(t, e) {
  var i = t.scales;
  return Object.keys(i)
    .filter(function (t) {
      return i[t].axis === e;
    })
    .shift();
}
function Zn(t, e) {
  var i = t.controller.index,
    n = t.vScale && t.vScale.axis;
  if (n) {
    var a,
      r = zn((e = e || t._parsed));
    try {
      for (r.s(); !(a = r.n()).done; ) {
        var o = a.value._stacks;
        if (!o || void 0 === o[n] || void 0 === o[n][i]) return;
        delete o[n][i];
      }
    } catch (t) {
      r.e(t);
    } finally {
      r.f();
    }
  }
}
var Qn = function (t) {
    return "reset" === t || "none" === t;
  },
  Jn = function (t, e) {
    return e ? t : Object.assign({}, t);
  },
  ta = (function () {
    function t(e, i) {
      n(this, t),
        (this.chart = e),
        (this._ctx = e.ctx),
        (this.index = i),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.$context = void 0),
        (this._syncList = []),
        this.initialize();
    }
    return (
      s(t, [
        {
          key: "initialize",
          value: function () {
            var t = this._cachedMeta;
            this.configure(),
              this.linkScales(),
              (t._stacked = Yn(t.vScale, t)),
              this.addElements();
          },
        },
        {
          key: "updateIndex",
          value: function (t) {
            this.index !== t && Zn(this._cachedMeta), (this.index = t);
          },
        },
        {
          key: "linkScales",
          value: function () {
            var t = this.chart,
              e = this._cachedMeta,
              i = this.getDataset(),
              n = function (t, e, i, n) {
                return "x" === t ? e : "r" === t ? n : i;
              },
              a = (e.xAxisID = Tt(i.xAxisID, Gn(t, "x"))),
              r = (e.yAxisID = Tt(i.yAxisID, Gn(t, "y"))),
              o = (e.rAxisID = Tt(i.rAxisID, Gn(t, "r"))),
              s = e.indexAxis,
              l = (e.iAxisID = n(s, a, r, o)),
              u = (e.vAxisID = n(s, r, a, o));
            (e.xScale = this.getScaleForId(a)),
              (e.yScale = this.getScaleForId(r)),
              (e.rScale = this.getScaleForId(o)),
              (e.iScale = this.getScaleForId(l)),
              (e.vScale = this.getScaleForId(u));
          },
        },
        {
          key: "getDataset",
          value: function () {
            return this.chart.data.datasets[this.index];
          },
        },
        {
          key: "getMeta",
          value: function () {
            return this.chart.getDatasetMeta(this.index);
          },
        },
        {
          key: "getScaleForId",
          value: function (t) {
            return this.chart.scales[t];
          },
        },
        {
          key: "_getOtherScale",
          value: function (t) {
            var e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
          },
        },
        {
          key: "reset",
          value: function () {
            this._update("reset");
          },
        },
        {
          key: "_destroy",
          value: function () {
            var t = this._cachedMeta;
            this._data && zi(this._data, this), t._stacked && Zn(t);
          },
        },
        {
          key: "_dataCheck",
          value: function () {
            var t,
              e,
              i = this.getDataset(),
              n = i.data || (i.data = []),
              a = this._data;
            if (Ot(n))
              this._data = (function (t) {
                var e,
                  i,
                  n,
                  a = Object.keys(t),
                  r = new Array(a.length);
                for (e = 0, i = a.length; e < i; ++e)
                  (n = a[e]), (r[e] = { x: n, y: t[n] });
                return r;
              })(n);
            else if (a !== n) {
              if (a) {
                zi(a, this);
                var r = this._cachedMeta;
                Zn(r), (r._parsed = []);
              }
              n &&
                Object.isExtensible(n) &&
                ((e = this),
                (t = n)._chartjs
                  ? t._chartjs.listeners.push(e)
                  : (Object.defineProperty(t, "_chartjs", {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [e] },
                    }),
                    Ii.forEach(function (e) {
                      var i = "_onData" + $t(e),
                        n = t[e];
                      Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function () {
                          for (
                            var e = arguments.length, a = new Array(e), r = 0;
                            r < e;
                            r++
                          )
                            a[r] = arguments[r];
                          var o = n.apply(this, a);
                          return (
                            t._chartjs.listeners.forEach(function (t) {
                              "function" == typeof t[i] && t[i].apply(t, a);
                            }),
                            o
                          );
                        },
                      });
                    }))),
                (this._syncList = []),
                (this._data = n);
            }
          },
        },
        {
          key: "addElements",
          value: function () {
            var t = this._cachedMeta;
            this._dataCheck(),
              this.datasetElementType &&
                (t.dataset = new this.datasetElementType());
          },
        },
        {
          key: "buildOrUpdateElements",
          value: function (t) {
            var e = this._cachedMeta,
              i = this.getDataset(),
              n = !1;
            this._dataCheck();
            var a = e._stacked;
            (e._stacked = Yn(e.vScale, e)),
              e.stack !== i.stack && ((n = !0), Zn(e), (e.stack = i.stack)),
              this._resyncElements(t),
              (n || a !== e._stacked) && Kn(this, e._parsed);
          },
        },
        {
          key: "configure",
          value: function () {
            var t = this.chart.config,
              e = t.datasetScopeKeys(this._type),
              i = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(i, this.getContext())),
              (this._parsing = this.options.parsing),
              (this._cachedDataOpts = {});
          },
        },
        {
          key: "parse",
          value: function (t, e) {
            var i,
              n,
              a,
              r = this._cachedMeta,
              o = this._data,
              s = r.iScale,
              l = r._stacked,
              u = s.axis,
              h = (0 === t && e === o.length) || r._sorted,
              c = t > 0 && r._parsed[t - 1];
            if (!1 === this._parsing)
              (r._parsed = o), (r._sorted = !0), (a = o);
            else {
              a = Pt(o[t])
                ? this.parseArrayData(r, o, t, e)
                : Ot(o[t])
                ? this.parseObjectData(r, o, t, e)
                : this.parsePrimitiveData(r, o, t, e);
              for (i = 0; i < e; ++i)
                (r._parsed[i + t] = n = a[i]),
                  h &&
                    ((null === n[u] || (c && n[u] < c[u])) && (h = !1),
                    (c = n));
              r._sorted = h;
            }
            l && Kn(this, a);
          },
        },
        {
          key: "parsePrimitiveData",
          value: function (t, e, i, n) {
            var a,
              r,
              o,
              s = t.iScale,
              l = t.vScale,
              u = s.axis,
              h = l.axis,
              c = s.getLabels(),
              f = s === l,
              d = new Array(n);
            for (a = 0, r = n; a < r; ++a) {
              var v;
              (o = a + i),
                (d[a] =
                  (et((v = {}), u, f || s.parse(c[o], o)),
                  et(v, h, l.parse(e[o], o)),
                  v));
            }
            return d;
          },
        },
        {
          key: "parseArrayData",
          value: function (t, e, i, n) {
            var a,
              r,
              o,
              s,
              l = t.xScale,
              u = t.yScale,
              h = new Array(n);
            for (a = 0, r = n; a < r; ++a)
              (s = e[(o = a + i)]),
                (h[a] = { x: l.parse(s[0], o), y: u.parse(s[1], o) });
            return h;
          },
        },
        {
          key: "parseObjectData",
          value: function (t, e, i, n) {
            var a,
              r,
              o,
              s,
              l = t.xScale,
              u = t.yScale,
              h = this._parsing,
              c = h.xAxisKey,
              f = void 0 === c ? "x" : c,
              d = h.yAxisKey,
              v = void 0 === d ? "y" : d,
              g = new Array(n);
            for (a = 0, r = n; a < r; ++a)
              (s = e[(o = a + i)]),
                (g[a] = { x: l.parse(Ht(s, f), o), y: u.parse(Ht(s, v), o) });
            return g;
          },
        },
        {
          key: "getParsed",
          value: function (t) {
            return this._cachedMeta._parsed[t];
          },
        },
        {
          key: "getDataElement",
          value: function (t) {
            return this._cachedMeta.data[t];
          },
        },
        {
          key: "applyStack",
          value: function (t, e, i) {
            var n = this.chart,
              a = this._cachedMeta,
              r = e[t.axis];
            return Un(
              { keys: $n(n, !0), values: e._stacks[t.axis] },
              r,
              a.index,
              { mode: i }
            );
          },
        },
        {
          key: "updateRangeFromParsed",
          value: function (t, e, i, n) {
            var a = i[e.axis],
              r = null === a ? NaN : a,
              o = n && i._stacks[e.axis];
            n && o && ((n.values = o), (r = Un(n, a, this._cachedMeta.index))),
              (t.min = Math.min(t.min, r)),
              (t.max = Math.max(t.max, r));
          },
        },
        {
          key: "getMinMax",
          value: function (t, e) {
            var i,
              n,
              a = this._cachedMeta,
              r = a._parsed,
              o = a._sorted && t === a.iScale,
              s = r.length,
              l = this._getOtherScale(t),
              u = (function (t, e, i) {
                return (
                  t &&
                  !e.hidden &&
                  e._stacked && { keys: $n(i, !0), values: null }
                );
              })(e, a, this.chart),
              h = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              },
              c = (function (t) {
                var e = t.getUserBounds(),
                  i = e.min,
                  n = e.max,
                  a = e.minDefined,
                  r = e.maxDefined;
                return {
                  min: a ? i : Number.NEGATIVE_INFINITY,
                  max: r ? n : Number.POSITIVE_INFINITY,
                };
              })(l),
              f = c.min,
              d = c.max;
            function v() {
              var e = (n = r[i])[l.axis];
              return !Ct(n[t.axis]) || f > e || d < e;
            }
            for (
              i = 0;
              i < s && (v() || (this.updateRangeFromParsed(h, t, n, u), !o));
              ++i
            );
            if (o)
              for (i = s - 1; i >= 0; --i)
                if (!v()) {
                  this.updateRangeFromParsed(h, t, n, u);
                  break;
                }
            return h;
          },
        },
        {
          key: "getAllParsedValues",
          value: function (t) {
            var e,
              i,
              n,
              a = this._cachedMeta._parsed,
              r = [];
            for (e = 0, i = a.length; e < i; ++e)
              (n = a[e][t.axis]), Ct(n) && r.push(n);
            return r;
          },
        },
        {
          key: "getMaxOverflow",
          value: function () {
            return !1;
          },
        },
        {
          key: "getLabelAndValue",
          value: function (t) {
            var e = this._cachedMeta,
              i = e.iScale,
              n = e.vScale,
              a = this.getParsed(t);
            return {
              label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
              value: n ? "" + n.getLabelForValue(a[n.axis]) : "",
            };
          },
        },
        {
          key: "_update",
          value: function (t) {
            var e,
              i,
              n,
              a,
              r,
              o = this._cachedMeta;
            this.update(t || "default"),
              (o._clip =
                (Ot(
                  (e = Tt(
                    this.options.clip,
                    (function (t, e, i) {
                      if (!1 === i) return !1;
                      var n = Hn(t, i),
                        a = Hn(e, i);
                      return {
                        top: a.end,
                        right: n.end,
                        bottom: a.start,
                        left: n.start,
                      };
                    })(o.xScale, o.yScale, this.getMaxOverflow())
                  ))
                )
                  ? ((i = e.top), (n = e.right), (a = e.bottom), (r = e.left))
                  : (i = n = a = r = e),
                { top: i, right: n, bottom: a, left: r, disabled: !1 === e }));
          },
        },
        { key: "update", value: function (t) {} },
        {
          key: "draw",
          value: function () {
            var t,
              e = this._ctx,
              i = this.chart,
              n = this._cachedMeta,
              a = n.data || [],
              r = i.chartArea,
              o = [],
              s = this._drawStart || 0,
              l = this._drawCount || a.length - s;
            for (
              n.dataset && n.dataset.draw(e, r, s, l), t = s;
              t < s + l;
              ++t
            ) {
              var u = a[t];
              u.hidden || (u.active ? o.push(u) : u.draw(e, r));
            }
            for (t = 0; t < o.length; ++t) o[t].draw(e, r);
          },
        },
        {
          key: "getStyle",
          value: function (t, e) {
            var i = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(i)
              : this.resolveDataElementOptions(t || 0, i);
          },
        },
        {
          key: "getContext",
          value: function (t, e, i) {
            var n,
              a = this.getDataset();
            if (t >= 0 && t < this._cachedMeta.data.length) {
              var r = this._cachedMeta.data[t];
              (n =
                r.$context ||
                (r.$context = (function (t, e, i) {
                  return Ti(t, {
                    active: !1,
                    dataIndex: e,
                    parsed: void 0,
                    raw: void 0,
                    element: i,
                    index: e,
                    mode: "default",
                    type: "data",
                  });
                })(this.getContext(), t, r))),
                (n.parsed = this.getParsed(t)),
                (n.raw = a.data[t]),
                (n.index = n.dataIndex = t);
            } else
              (n =
                this.$context ||
                (this.$context = (function (t, e) {
                  return Ti(t, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: "default",
                    type: "dataset",
                  });
                })(this.chart.getContext(), this.index))),
                (n.dataset = a),
                (n.index = n.datasetIndex = this.index);
            return (n.active = !!e), (n.mode = i), n;
          },
        },
        {
          key: "resolveDatasetElementOptions",
          value: function (t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
          },
        },
        {
          key: "resolveDataElementOptions",
          value: function (t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
          },
        },
        {
          key: "_resolveElementOptions",
          value: function (t) {
            var e = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "default",
              n = arguments.length > 2 ? arguments[2] : void 0,
              a = "active" === i,
              r = this._cachedDataOpts,
              o = t + "-" + i,
              s = r[o],
              l = this.enableOptionSharing && Ut(n);
            if (s) return Jn(s, l);
            var u = this.chart.config,
              h = u.datasetElementScopeKeys(this._type, t),
              c = a ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
              f = u.getOptionScopes(this.getDataset(), h),
              d = Object.keys(si.elements[t]),
              v = function () {
                return e.getContext(n, a);
              },
              g = u.resolveNamedOptions(f, d, v, c);
            return (
              g.$shared && ((g.$shared = l), (r[o] = Object.freeze(Jn(g, l)))),
              g
            );
          },
        },
        {
          key: "_resolveAnimations",
          value: function (t, e, i) {
            var n,
              a = this.chart,
              r = this._cachedDataOpts,
              o = "animation-".concat(e),
              s = r[o];
            if (s) return s;
            if (!1 !== a.options.animation) {
              var l = this.chart.config,
                u = l.datasetAnimationScopeKeys(this._type, e),
                h = l.getOptionScopes(this.getDataset(), u);
              n = l.createResolver(h, this.getContext(t, i, e));
            }
            var c = new jn(a, n && n.animations);
            return n && n._cacheable && (r[o] = Object.freeze(c)), c;
          },
        },
        {
          key: "getSharedOptions",
          value: function (t) {
            if (t.$shared)
              return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, t))
              );
          },
        },
        {
          key: "includeOptions",
          value: function (t, e) {
            return !e || Qn(t) || this.chart._animationsDisabled;
          },
        },
        {
          key: "updateElement",
          value: function (t, e, i, n) {
            Qn(n)
              ? Object.assign(t, i)
              : this._resolveAnimations(e, n).update(t, i);
          },
        },
        {
          key: "updateSharedOptions",
          value: function (t, e, i) {
            t && !Qn(e) && this._resolveAnimations(void 0, e).update(t, i);
          },
        },
        {
          key: "_setStyle",
          value: function (t, e, i, n) {
            t.active = n;
            var a = this.getStyle(e, n);
            this._resolveAnimations(e, i, n).update(t, {
              options: (!n && this.getSharedOptions(a)) || a,
            });
          },
        },
        {
          key: "removeHoverStyle",
          value: function (t, e, i) {
            this._setStyle(t, i, "active", !1);
          },
        },
        {
          key: "setHoverStyle",
          value: function (t, e, i) {
            this._setStyle(t, i, "active", !0);
          },
        },
        {
          key: "_removeDatasetHoverStyle",
          value: function () {
            var t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
          },
        },
        {
          key: "_setDatasetHoverStyle",
          value: function () {
            var t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
          },
        },
        {
          key: "_resyncElements",
          value: function (t) {
            var e,
              i = this._data,
              n = this._cachedMeta.data,
              a = zn(this._syncList);
            try {
              for (a.s(); !(e = a.n()).done; ) {
                var r = v(e.value, 3),
                  o = r[0],
                  s = r[1],
                  l = r[2];
                this[o](s, l);
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
            this._syncList = [];
            var u = n.length,
              h = i.length,
              c = Math.min(h, u);
            c && this.parse(0, c),
              h > u
                ? this._insertElements(u, h - u, t)
                : h < u && this._removeElements(h, u - h);
          },
        },
        {
          key: "_insertElements",
          value: function (t, e) {
            var i,
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = this._cachedMeta,
              r = a.data,
              o = t + e,
              s = function (t) {
                for (t.length += e, i = t.length - 1; i >= o; i--)
                  t[i] = t[i - e];
              };
            for (s(r), i = t; i < o; ++i) r[i] = new this.dataElementType();
            this._parsing && s(a._parsed),
              this.parse(t, e),
              n && this.updateElements(r, t, e, "reset");
          },
        },
        { key: "updateElements", value: function (t, e, i, n) {} },
        {
          key: "_removeElements",
          value: function (t, e) {
            var i = this._cachedMeta;
            if (this._parsing) {
              var n = i._parsed.splice(t, e);
              i._stacked && Zn(i, n);
            }
            i.data.splice(t, e);
          },
        },
        {
          key: "_sync",
          value: function (t) {
            if (this._parsing) this._syncList.push(t);
            else {
              var e = v(t, 3),
                i = e[0],
                n = e[1],
                a = e[2];
              this[i](n, a);
            }
            this.chart._dataChanges.push([this.index].concat(V(t)));
          },
        },
        {
          key: "_onDataPush",
          value: function () {
            var t = arguments.length;
            this._sync([
              "_insertElements",
              this.getDataset().data.length - t,
              t,
            ]);
          },
        },
        {
          key: "_onDataPop",
          value: function () {
            this._sync([
              "_removeElements",
              this._cachedMeta.data.length - 1,
              1,
            ]);
          },
        },
        {
          key: "_onDataShift",
          value: function () {
            this._sync(["_removeElements", 0, 1]);
          },
        },
        {
          key: "_onDataSplice",
          value: function (t, e) {
            e && this._sync(["_removeElements", t, e]);
            var i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i]);
          },
        },
        {
          key: "_onDataUnshift",
          value: function () {
            this._sync(["_insertElements", 0, arguments.length]);
          },
        },
      ]),
      t
    );
  })();
function ea(t) {
  var e,
    i,
    n,
    a,
    r = t.iScale,
    o = (function (t, e) {
      if (!t._cache.$bar) {
        for (
          var i = t.getMatchingVisibleMetas(e), n = [], a = 0, r = i.length;
          a < r;
          a++
        )
          n = n.concat(i[a].controller.getAllParsedValues(t));
        t._cache.$bar = Fi(
          n.sort(function (t, e) {
            return t - e;
          })
        );
      }
      return t._cache.$bar;
    })(r, t.type),
    s = r._length,
    l = function () {
      32767 !== n &&
        -32768 !== n &&
        (Ut(a) && (s = Math.min(s, Math.abs(n - a) || s)), (a = n));
    };
  for (e = 0, i = o.length; e < i; ++e) (n = r.getPixelForValue(o[e])), l();
  for (a = void 0, e = 0, i = r.ticks.length; e < i; ++e)
    (n = r.getPixelForTick(e)), l();
  return s;
}
function ia(t, e, i, n) {
  return (
    Pt(t)
      ? (function (t, e, i, n) {
          var a = i.parse(t[0], n),
            r = i.parse(t[1], n),
            o = Math.min(a, r),
            s = Math.max(a, r),
            l = o,
            u = s;
          Math.abs(o) > Math.abs(s) && ((l = s), (u = o)),
            (e[i.axis] = u),
            (e._custom = {
              barStart: l,
              barEnd: u,
              start: a,
              end: r,
              min: o,
              max: s,
            });
        })(t, e, i, n)
      : (e[i.axis] = i.parse(t, n)),
    e
  );
}
function na(t, e, i, n) {
  var a,
    r,
    o,
    s,
    l = t.iScale,
    u = t.vScale,
    h = l.getLabels(),
    c = l === u,
    f = [];
  for (a = i, r = i + n; a < r; ++a)
    (s = e[a]),
      ((o = {})[l.axis] = c || l.parse(h[a], a)),
      f.push(ia(s, o, u, a));
  return f;
}
function aa(t) {
  return t && void 0 !== t.barStart && void 0 !== t.barEnd;
}
function ra(t, e, i, n) {
  var a = e.borderSkipped,
    r = {};
  if (a) {
    var o = (function (t) {
        var e, i, n, a, r;
        return (
          t.horizontal
            ? ((e = t.base > t.x), (i = "left"), (n = "right"))
            : ((e = t.base < t.y), (i = "bottom"), (n = "top")),
          e ? ((a = "end"), (r = "start")) : ((a = "start"), (r = "end")),
          { start: i, end: n, reverse: e, top: a, bottom: r }
        );
      })(t),
      s = o.start,
      l = o.end,
      u = o.reverse,
      h = o.top,
      c = o.bottom;
    "middle" === a &&
      i &&
      ((t.enableBorderRadius = !0),
      (i._top || 0) === n
        ? (a = h)
        : (i._bottom || 0) === n
        ? (a = c)
        : ((r[oa(c, s, l, u)] = !0), (a = h))),
      (r[oa(a, s, l, u)] = !0),
      (t.borderSkipped = r);
  } else t.borderSkipped = r;
}
function oa(t, e, i, n) {
  var a, r, o;
  return (
    n
      ? ((o = i),
        (t = sa((t = (a = t) === (r = e) ? o : a === o ? r : a), i, e)))
      : (t = sa(t, e, i)),
    t
  );
}
function sa(t, e, i) {
  return "start" === t ? e : "end" === t ? i : t;
}
function la(t, e, i) {
  var n = e.inflateAmount;
  t.inflateAmount = "auto" === n ? (1 === i ? 0.33 : 0) : n;
}
(ta.defaults = {}),
  (ta.prototype.datasetElementType = null),
  (ta.prototype.dataElementType = null);
var ua = (function (i) {
  t(r, ta);
  var a = In(r);
  function r() {
    return n(this, r), a.apply(this, arguments);
  }
  return (
    s(r, [
      {
        key: "parsePrimitiveData",
        value: function (t, e, i, n) {
          return na(t, e, i, n);
        },
      },
      {
        key: "parseArrayData",
        value: function (t, e, i, n) {
          return na(t, e, i, n);
        },
      },
      {
        key: "parseObjectData",
        value: function (t, e, i, n) {
          var a,
            r,
            o,
            s,
            l = t.iScale,
            u = t.vScale,
            h = this._parsing,
            c = h.xAxisKey,
            f = void 0 === c ? "x" : c,
            d = h.yAxisKey,
            v = void 0 === d ? "y" : d,
            g = "x" === l.axis ? f : v,
            p = "x" === u.axis ? f : v,
            m = [];
          for (a = i, r = i + n; a < r; ++a)
            (s = e[a]),
              ((o = {})[l.axis] = l.parse(Ht(s, g), a)),
              m.push(ia(Ht(s, p), o, u, a));
          return m;
        },
      },
      {
        key: "updateRangeFromParsed",
        value: function (t, i, n, a) {
          B(e(r.prototype), "updateRangeFromParsed", this).call(
            this,
            t,
            i,
            n,
            a
          );
          var o = n._custom;
          o &&
            i === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, o.min)),
            (t.max = Math.max(t.max, o.max)));
        },
      },
      {
        key: "getMaxOverflow",
        value: function () {
          return 0;
        },
      },
      {
        key: "getLabelAndValue",
        value: function (t) {
          var e = this._cachedMeta,
            i = e.iScale,
            n = e.vScale,
            a = this.getParsed(t),
            r = a._custom,
            o = aa(r)
              ? "[" + r.start + ", " + r.end + "]"
              : "" + n.getLabelForValue(a[n.axis]);
          return { label: "" + i.getLabelForValue(a[i.axis]), value: o };
        },
      },
      {
        key: "initialize",
        value: function () {
          (this.enableOptionSharing = !0),
            B(e(r.prototype), "initialize", this).call(this),
            (this._cachedMeta.stack = this.getDataset().stack);
        },
      },
      {
        key: "update",
        value: function (t) {
          var e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        },
      },
      {
        key: "updateElements",
        value: function (t, e, i, n) {
          var a = "reset" === n,
            r = this.index,
            o = this._cachedMeta.vScale,
            s = o.getBasePixel(),
            l = o.isHorizontal(),
            u = this._getRuler(),
            h = this.resolveDataElementOptions(e, n),
            c = this.getSharedOptions(h),
            f = this.includeOptions(n, c);
          this.updateSharedOptions(c, n, h);
          for (var d = e; d < e + i; d++) {
            var v = this.getParsed(d),
              g =
                a || Dt(v[o.axis])
                  ? { base: s, head: s }
                  : this._calculateBarValuePixels(d),
              p = this._calculateBarIndexPixels(d, u),
              m = (v._stacks || {})[o.axis],
              y = {
                horizontal: l,
                base: g.base,
                enableBorderRadius:
                  !m || aa(v._custom) || r === m._top || r === m._bottom,
                x: l ? g.head : p.center,
                y: l ? p.center : g.head,
                height: l ? p.size : Math.abs(g.size),
                width: l ? Math.abs(g.size) : p.size,
              };
            f &&
              (y.options =
                c ||
                this.resolveDataElementOptions(d, t[d].active ? "active" : n));
            var b = y.options || t[d].options;
            ra(y, b, m, r),
              la(y, b, u.ratio),
              this.updateElement(t[d], d, y, n);
          }
        },
      },
      {
        key: "_getStacks",
        value: function (t, e) {
          var i,
            n,
            a = this._cachedMeta.iScale,
            r = a.getMatchingVisibleMetas(this._type),
            o = a.options.stacked,
            s = r.length,
            l = [];
          for (i = 0; i < s; ++i)
            if ((n = r[i]).controller.options.grouped) {
              if (void 0 !== e) {
                var u = n.controller.getParsed(e)[
                  n.controller._cachedMeta.vScale.axis
                ];
                if (Dt(u) || isNaN(u)) continue;
              }
              if (
                ((!1 === o ||
                  -1 === l.indexOf(n.stack) ||
                  (void 0 === o && void 0 === n.stack)) &&
                  l.push(n.stack),
                n.index === t)
              )
                break;
            }
          return l.length || l.push(void 0), l;
        },
      },
      {
        key: "_getStackCount",
        value: function (t) {
          return this._getStacks(void 0, t).length;
        },
      },
      {
        key: "_getStackIndex",
        value: function (t, e, i) {
          var n = this._getStacks(t, i),
            a = void 0 !== e ? n.indexOf(e) : -1;
          return -1 === a ? n.length - 1 : a;
        },
      },
      {
        key: "_getRuler",
        value: function () {
          var t,
            e,
            i = this.options,
            n = this._cachedMeta,
            a = n.iScale,
            r = [];
          for (t = 0, e = n.data.length; t < e; ++t)
            r.push(a.getPixelForValue(this.getParsed(t)[a.axis], t));
          var o = i.barThickness;
          return {
            min: o || ea(n),
            pixels: r,
            start: a._startPixel,
            end: a._endPixel,
            stackCount: this._getStackCount(),
            scale: a,
            grouped: i.grouped,
            ratio: o ? 1 : i.categoryPercentage * i.barPercentage,
          };
        },
      },
      {
        key: "_calculateBarValuePixels",
        value: function (t) {
          var e,
            i,
            n = this._cachedMeta,
            a = n.vScale,
            r = n._stacked,
            o = this.options,
            s = o.base,
            l = o.minBarLength,
            u = s || 0,
            h = this.getParsed(t),
            c = h._custom,
            f = aa(c),
            d = h[a.axis],
            v = 0,
            g = r ? this.applyStack(a, h, r) : d;
          g !== d && ((v = g - d), (g = d)),
            f &&
              ((d = c.barStart),
              (g = c.barEnd - c.barStart),
              0 !== d && ne(d) !== ne(c.barEnd) && (v = 0),
              (v += d));
          var p = Dt(s) || f ? v : s,
            m = a.getPixelForValue(p);
          if (
            ((i =
              (e = this.chart.getDataVisibility(t)
                ? a.getPixelForValue(v + g)
                : m) - m),
            Math.abs(i) < l &&
              ((i =
                (function (t, e, i) {
                  return 0 !== t
                    ? ne(t)
                    : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                })(i, a, u) * l),
              d === u && (m -= i / 2),
              (e = m + i)),
            m === a.getPixelForValue(u))
          ) {
            var y = (ne(i) * a.getLineWidthForValue(u)) / 2;
            (m += y), (i -= y);
          }
          return { size: i, base: m, head: e, center: e + i / 2 };
        },
      },
      {
        key: "_calculateBarIndexPixels",
        value: function (t, e) {
          var i,
            n,
            a = e.scale,
            r = this.options,
            o = r.skipNull,
            s = Tt(r.maxBarThickness, 1 / 0);
          if (e.grouped) {
            var l = o ? this._getStackCount(t) : e.stackCount,
              u =
                "flex" === r.barThickness
                  ? (function (t, e, i, n) {
                      var a = e.pixels,
                        r = a[t],
                        o = t > 0 ? a[t - 1] : null,
                        s = t < a.length - 1 ? a[t + 1] : null,
                        l = i.categoryPercentage;
                      null === o &&
                        (o = r - (null === s ? e.end - e.start : s - r)),
                        null === s && (s = r + r - o);
                      var u = r - ((r - Math.min(o, s)) / 2) * l;
                      return {
                        chunk: ((Math.abs(s - o) / 2) * l) / n,
                        ratio: i.barPercentage,
                        start: u,
                      };
                    })(t, e, r, l)
                  : (function (t, e, i, n) {
                      var a,
                        r,
                        o = i.barThickness;
                      return (
                        Dt(o)
                          ? ((a = e.min * i.categoryPercentage),
                            (r = i.barPercentage))
                          : ((a = o * n), (r = 1)),
                        { chunk: a / n, ratio: r, start: e.pixels[t] - a / 2 }
                      );
                    })(t, e, r, l),
              h = this._getStackIndex(
                this.index,
                this._cachedMeta.stack,
                o ? t : void 0
              );
            (i = u.start + u.chunk * h + u.chunk / 2),
              (n = Math.min(s, u.chunk * u.ratio));
          } else
            (i = a.getPixelForValue(this.getParsed(t)[a.axis], t)),
              (n = Math.min(s, e.min * e.ratio));
          return { base: i - n / 2, head: i + n / 2, center: i, size: n };
        },
      },
      {
        key: "draw",
        value: function () {
          for (
            var t = this._cachedMeta,
              e = t.vScale,
              i = t.data,
              n = i.length,
              a = 0;
            a < n;
            ++a
          )
            null !== this.getParsed(a)[e.axis] && i[a].draw(this._ctx);
        },
      },
    ]),
    r
  );
})();
(ua.id = "bar"),
  (ua.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  (ua.overrides = {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
var ha = (function (i) {
  t(r, ta);
  var a = In(r);
  function r() {
    return n(this, r), a.apply(this, arguments);
  }
  return (
    s(r, [
      {
        key: "initialize",
        value: function () {
          (this.enableOptionSharing = !0),
            B(e(r.prototype), "initialize", this).call(this);
        },
      },
      {
        key: "parsePrimitiveData",
        value: function (t, i, n, a) {
          for (
            var o = B(e(r.prototype), "parsePrimitiveData", this).call(
                this,
                t,
                i,
                n,
                a
              ),
              s = 0;
            s < o.length;
            s++
          )
            o[s]._custom = this.resolveDataElementOptions(s + n).radius;
          return o;
        },
      },
      {
        key: "parseArrayData",
        value: function (t, i, n, a) {
          for (
            var o = B(e(r.prototype), "parseArrayData", this).call(
                this,
                t,
                i,
                n,
                a
              ),
              s = 0;
            s < o.length;
            s++
          ) {
            var l = i[n + s];
            o[s]._custom = Tt(
              l[2],
              this.resolveDataElementOptions(s + n).radius
            );
          }
          return o;
        },
      },
      {
        key: "parseObjectData",
        value: function (t, i, n, a) {
          for (
            var o = B(e(r.prototype), "parseObjectData", this).call(
                this,
                t,
                i,
                n,
                a
              ),
              s = 0;
            s < o.length;
            s++
          ) {
            var l = i[n + s];
            o[s]._custom = Tt(
              l && l.r && +l.r,
              this.resolveDataElementOptions(s + n).radius
            );
          }
          return o;
        },
      },
      {
        key: "getMaxOverflow",
        value: function () {
          for (
            var t = this._cachedMeta.data, e = 0, i = t.length - 1;
            i >= 0;
            --i
          )
            e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
          return e > 0 && e;
        },
      },
      {
        key: "getLabelAndValue",
        value: function (t) {
          var e = this._cachedMeta,
            i = e.xScale,
            n = e.yScale,
            a = this.getParsed(t),
            r = i.getLabelForValue(a.x),
            o = n.getLabelForValue(a.y),
            s = a._custom;
          return {
            label: e.label,
            value: "(" + r + ", " + o + (s ? ", " + s : "") + ")",
          };
        },
      },
      {
        key: "update",
        value: function (t) {
          var e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        },
      },
      {
        key: "updateElements",
        value: function (t, e, i, n) {
          for (
            var a = "reset" === n,
              r = this._cachedMeta,
              o = r.iScale,
              s = r.vScale,
              l = this.resolveDataElementOptions(e, n),
              u = this.getSharedOptions(l),
              h = this.includeOptions(n, u),
              c = o.axis,
              f = s.axis,
              d = e;
            d < e + i;
            d++
          ) {
            var v = t[d],
              g = !a && this.getParsed(d),
              p = {},
              m = (p[c] = a
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue(g[c])),
              y = (p[f] = a ? s.getBasePixel() : s.getPixelForValue(g[f]));
            (p.skip = isNaN(m) || isNaN(y)),
              h &&
                ((p.options = this.resolveDataElementOptions(
                  d,
                  v.active ? "active" : n
                )),
                a && (p.options.radius = 0)),
              this.updateElement(v, d, p, n);
          }
          this.updateSharedOptions(u, n, l);
        },
      },
      {
        key: "resolveDataElementOptions",
        value: function (t, i) {
          var n = this.getParsed(t),
            a = B(e(r.prototype), "resolveDataElementOptions", this).call(
              this,
              t,
              i
            );
          a.$shared && (a = Object.assign({}, a, { $shared: !1 }));
          var o = a.radius;
          return (
            "active" !== i && (a.radius = 0),
            (a.radius += Tt(n && n._custom, o)),
            a
          );
        },
      },
    ]),
    r
  );
})();
(ha.id = "bubble"),
  (ha.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"],
      },
    },
  }),
  (ha.overrides = {
    scales: { x: { type: "linear" }, y: { type: "linear" } },
    plugins: {
      tooltip: {
        callbacks: {
          title: function () {
            return "";
          },
        },
      },
    },
  });
var ca = (function (e) {
  t(a, ta);
  var i = In(a);
  function a(t, e) {
    var r;
    return (
      n(this, a),
      ((r = i.call(this, t, e)).enableOptionSharing = !0),
      (r.innerRadius = void 0),
      (r.outerRadius = void 0),
      (r.offsetX = void 0),
      (r.offsetY = void 0),
      r
    );
  }
  return (
    s(a, [
      { key: "linkScales", value: function () {} },
      {
        key: "parse",
        value: function (t, e) {
          var i = this.getDataset().data,
            n = this._cachedMeta;
          if (!1 === this._parsing) n._parsed = i;
          else {
            var a,
              r,
              o = function (t) {
                return +i[t];
              };
            if (Ot(i[t])) {
              var s = this._parsing.key,
                l = void 0 === s ? "value" : s;
              o = function (t) {
                return +Ht(i[t], l);
              };
            }
            for (a = t, r = t + e; a < r; ++a) n._parsed[a] = o(a);
          }
        },
      },
      {
        key: "_getRotation",
        value: function () {
          return le(this.options.rotation - 90);
        },
      },
      {
        key: "_getCircumference",
        value: function () {
          return le(this.options.circumference);
        },
      },
      {
        key: "_getRotationExtents",
        value: function () {
          for (
            var t = Kt, e = -Kt, i = 0;
            i < this.chart.data.datasets.length;
            ++i
          )
            if (this.chart.isDatasetVisible(i)) {
              var n = this.chart.getDatasetMeta(i).controller,
                a = n._getRotation(),
                r = n._getCircumference();
              (t = Math.min(t, a)), (e = Math.max(e, a + r));
            }
          return { rotation: t, circumference: e - t };
        },
      },
      {
        key: "update",
        value: function (t) {
          var e,
            i,
            n = this.chart.chartArea,
            a = this._cachedMeta,
            r = a.data,
            o =
              this.getMaxBorderWidth() +
              this.getMaxOffset(r) +
              this.options.spacing,
            s = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
            l = Math.min(
              ((e = this.options.cutout),
              (i = s),
              "string" == typeof e && e.endsWith("%")
                ? parseFloat(e) / 100
                : e / i),
              1
            ),
            u = this._getRingWeight(this.index),
            h = this._getRotationExtents(),
            c = h.circumference,
            f = (function (t, e, i) {
              var n = 1,
                a = 1,
                r = 0,
                o = 0;
              if (e < Kt) {
                var s = t,
                  l = s + e,
                  u = Math.cos(s),
                  h = Math.sin(s),
                  c = Math.cos(l),
                  f = Math.sin(l),
                  d = function (t, e, n) {
                    return ve(t, s, l, !0) ? 1 : Math.max(e, e * i, n, n * i);
                  },
                  v = function (t, e, n) {
                    return ve(t, s, l, !0) ? -1 : Math.min(e, e * i, n, n * i);
                  },
                  g = d(0, u, c),
                  p = d(Jt, h, f),
                  m = v(qt, u, c),
                  y = v(qt + Jt, h, f);
                (n = (g - m) / 2),
                  (a = (p - y) / 2),
                  (r = -(g + m) / 2),
                  (o = -(p + y) / 2);
              }
              return { ratioX: n, ratioY: a, offsetX: r, offsetY: o };
            })(h.rotation, c, l),
            d = f.ratioX,
            v = f.ratioY,
            g = f.offsetX,
            p = f.offsetY,
            m = (n.width - o) / d,
            y = (n.height - o) / v,
            b = Math.max(Math.min(m, y) / 2, 0),
            x = Rt(this.options.radius, b),
            _ = (x - Math.max(x * l, 0)) / this._getVisibleDatasetWeightTotal();
          (this.offsetX = g * x),
            (this.offsetY = p * x),
            (a.total = this.calculateTotal()),
            (this.outerRadius = x - _ * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - _ * u, 0)),
            this.updateElements(r, 0, r.length, t);
        },
      },
      {
        key: "_circumference",
        value: function (t, e) {
          var i = this.options,
            n = this._cachedMeta,
            a = this._getCircumference();
          return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === n._parsed[t] ||
            n.data[t].hidden
            ? 0
            : this.calculateCircumference((n._parsed[t] * a) / Kt);
        },
      },
      {
        key: "updateElements",
        value: function (t, e, i, n) {
          var a,
            r = "reset" === n,
            o = this.chart,
            s = o.chartArea,
            l = o.options.animation,
            u = (s.left + s.right) / 2,
            h = (s.top + s.bottom) / 2,
            c = r && l.animateScale,
            f = c ? 0 : this.innerRadius,
            d = c ? 0 : this.outerRadius,
            v = this.resolveDataElementOptions(e, n),
            g = this.getSharedOptions(v),
            p = this.includeOptions(n, g),
            m = this._getRotation();
          for (a = 0; a < e; ++a) m += this._circumference(a, r);
          for (a = e; a < e + i; ++a) {
            var y = this._circumference(a, r),
              b = t[a],
              x = {
                x: u + this.offsetX,
                y: h + this.offsetY,
                startAngle: m,
                endAngle: m + y,
                circumference: y,
                outerRadius: d,
                innerRadius: f,
              };
            p &&
              (x.options =
                g ||
                this.resolveDataElementOptions(a, b.active ? "active" : n)),
              (m += y),
              this.updateElement(b, a, x, n);
          }
          this.updateSharedOptions(g, n, v);
        },
      },
      {
        key: "calculateTotal",
        value: function () {
          var t,
            e = this._cachedMeta,
            i = e.data,
            n = 0;
          for (t = 0; t < i.length; t++) {
            var a = e._parsed[t];
            null === a ||
              isNaN(a) ||
              !this.chart.getDataVisibility(t) ||
              i[t].hidden ||
              (n += Math.abs(a));
          }
          return n;
        },
      },
      {
        key: "calculateCircumference",
        value: function (t) {
          var e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? Kt * (Math.abs(t) / e) : 0;
        },
      },
      {
        key: "getLabelAndValue",
        value: function (t) {
          var e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            a = kn(e._parsed[t], i.options.locale);
          return { label: n[t] || "", value: a };
        },
      },
      {
        key: "getMaxBorderWidth",
        value: function (t) {
          var e,
            i,
            n,
            a,
            r,
            o = 0,
            s = this.chart;
          if (!t)
            for (e = 0, i = s.data.datasets.length; e < i; ++e)
              if (s.isDatasetVisible(e)) {
                (t = (n = s.getDatasetMeta(e)).data), (a = n.controller);
                break;
              }
          if (!t) return 0;
          for (e = 0, i = t.length; e < i; ++e)
            "inner" !== (r = a.resolveDataElementOptions(e)).borderAlign &&
              (o = Math.max(o, r.borderWidth || 0, r.hoverBorderWidth || 0));
          return o;
        },
      },
      {
        key: "getMaxOffset",
        value: function (t) {
          for (var e = 0, i = 0, n = t.length; i < n; ++i) {
            var a = this.resolveDataElementOptions(i);
            e = Math.max(e, a.offset || 0, a.hoverOffset || 0);
          }
          return e;
        },
      },
      {
        key: "_getRingWeightOffset",
        value: function (t) {
          for (var e = 0, i = 0; i < t; ++i)
            this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
          return e;
        },
      },
      {
        key: "_getRingWeight",
        value: function (t) {
          return Math.max(Tt(this.chart.data.datasets[t].weight, 1), 0);
        },
      },
      {
        key: "_getVisibleDatasetWeightTotal",
        value: function () {
          return (
            this._getRingWeightOffset(this.chart.data.datasets.length) || 1
          );
        },
      },
    ]),
    a
  );
})();
(ca.id = "doughnut"),
  (ca.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  (ca.descriptors = {
    _scriptable: function (t) {
      return "spacing" !== t;
    },
    _indexable: function (t) {
      return "spacing" !== t;
    },
  }),
  (ca.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function (t) {
            var e = t.data;
            if (e.labels.length && e.datasets.length) {
              var i = t.legend.options.labels.pointStyle;
              return e.labels.map(function (e, n) {
                var a = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  lineWidth: a.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(n),
                  index: n,
                };
              });
            }
            return [];
          },
        },
        onClick: function (t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
      tooltip: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (t) {
            var e = t.label,
              i = ": " + t.formattedValue;
            return Pt(e) ? ((e = e.slice())[0] += i) : (e += i), e;
          },
        },
      },
    },
  });
var fa = (function (i) {
  t(r, ta);
  var a = In(r);
  function r() {
    return n(this, r), a.apply(this, arguments);
  }
  return (
    s(r, [
      {
        key: "initialize",
        value: function () {
          (this.enableOptionSharing = !0),
            B(e(r.prototype), "initialize", this).call(this);
        },
      },
      {
        key: "update",
        value: function (t) {
          var e = this._cachedMeta,
            i = e.dataset,
            n = e.data,
            a = void 0 === n ? [] : n,
            r = e._dataset,
            o = this.chart._animationsDisabled,
            s = (function (t, e, i) {
              var n = e.length,
                a = 0,
                r = n;
              if (t._sorted) {
                var o = t.iScale,
                  s = t._parsed,
                  l = o.axis,
                  u = o.getUserBounds(),
                  h = u.min,
                  c = u.max,
                  f = u.minDefined,
                  d = u.maxDefined;
                f &&
                  (a = ge(
                    Math.min(
                      Li(s, o.axis, h).lo,
                      i ? n : Li(e, l, o.getPixelForValue(h)).lo
                    ),
                    0,
                    n - 1
                  )),
                  (r = d
                    ? ge(
                        Math.max(
                          Li(s, o.axis, c).hi + 1,
                          i ? 0 : Li(e, l, o.getPixelForValue(c)).hi + 1
                        ),
                        a,
                        n
                      ) - a
                    : n - a);
              }
              return { start: a, count: r };
            })(e, a, o),
            l = s.start,
            u = s.count;
          (this._drawStart = l),
            (this._drawCount = u),
            (function (t) {
              var e = t.xScale,
                i = t.yScale,
                n = t._scaleRanges,
                a = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
              if (!n) return (t._scaleRanges = a), !0;
              var r =
                n.xmin !== e.min ||
                n.xmax !== e.max ||
                n.ymin !== i.min ||
                n.ymax !== i.max;
              return Object.assign(n, a), r;
            })(e) && ((l = 0), (u = a.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!r._decimated),
            (i.points = a);
          var h = this.resolveDatasetElementOptions(t);
          this.options.showLine || (h.borderWidth = 0),
            (h.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: h }, t),
            this.updateElements(a, l, u, t);
        },
      },
      {
        key: "updateElements",
        value: function (t, e, i, n) {
          for (
            var a = "reset" === n,
              r = this._cachedMeta,
              o = r.iScale,
              s = r.vScale,
              l = r._stacked,
              u = r._dataset,
              h = this.resolveDataElementOptions(e, n),
              c = this.getSharedOptions(h),
              f = this.includeOptions(n, c),
              d = o.axis,
              v = s.axis,
              g = this.options,
              p = g.spanGaps,
              m = g.segment,
              y = re(p) ? p : Number.POSITIVE_INFINITY,
              b = this.chart._animationsDisabled || a || "none" === n,
              x = e > 0 && this.getParsed(e - 1),
              _ = e;
            _ < e + i;
            ++_
          ) {
            var k = t[_],
              w = this.getParsed(_),
              M = b ? k : {},
              S = Dt(w[v]),
              D = (M[d] = o.getPixelForValue(w[d], _)),
              P = (M[v] =
                a || S
                  ? s.getBasePixel()
                  : s.getPixelForValue(l ? this.applyStack(s, w, l) : w[v], _));
            (M.skip = isNaN(D) || isNaN(P) || S),
              (M.stop = _ > 0 && w[d] - x[d] > y),
              m && ((M.parsed = w), (M.raw = u.data[_])),
              f &&
                (M.options =
                  c ||
                  this.resolveDataElementOptions(_, k.active ? "active" : n)),
              b || this.updateElement(k, _, M, n),
              (x = w);
          }
          this.updateSharedOptions(c, n, h);
        },
      },
      {
        key: "getMaxOverflow",
        value: function () {
          var t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            n = t.data || [];
          if (!n.length) return i;
          var a = n[0].size(this.resolveDataElementOptions(0)),
            r = n[n.length - 1].size(
              this.resolveDataElementOptions(n.length - 1)
            );
          return Math.max(i, a, r) / 2;
        },
      },
      {
        key: "draw",
        value: function () {
          var t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            B(e(r.prototype), "draw", this).call(this);
        },
      },
    ]),
    r
  );
})();
(fa.id = "line"),
  (fa.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  (fa.overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
var da = (function (e) {
  t(a, ta);
  var i = In(a);
  function a(t, e) {
    var r;
    return (
      n(this, a),
      ((r = i.call(this, t, e)).innerRadius = void 0),
      (r.outerRadius = void 0),
      r
    );
  }
  return (
    s(a, [
      {
        key: "getLabelAndValue",
        value: function (t) {
          var e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            a = kn(e._parsed[t].r, i.options.locale);
          return { label: n[t] || "", value: a };
        },
      },
      {
        key: "update",
        value: function (t) {
          var e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        },
      },
      {
        key: "_updateRadius",
        value: function () {
          var t = this.chart,
            e = t.chartArea,
            i = t.options,
            n = Math.min(e.right - e.left, e.bottom - e.top),
            a = Math.max(n / 2, 0),
            r =
              (a -
                Math.max(
                  i.cutoutPercentage ? (a / 100) * i.cutoutPercentage : 1,
                  0
                )) /
              t.getVisibleDatasetCount();
          (this.outerRadius = a - r * this.index),
            (this.innerRadius = this.outerRadius - r);
        },
      },
      {
        key: "updateElements",
        value: function (t, e, i, n) {
          var a,
            r = "reset" === n,
            o = this.chart,
            s = this.getDataset(),
            l = o.options.animation,
            u = this._cachedMeta.rScale,
            h = u.xCenter,
            c = u.yCenter,
            f = u.getIndexAngle(0) - 0.5 * qt,
            d = f,
            v = 360 / this.countVisibleElements();
          for (a = 0; a < e; ++a) d += this._computeAngle(a, n, v);
          for (a = e; a < e + i; a++) {
            var g = t[a],
              p = d,
              m = d + this._computeAngle(a, n, v),
              y = o.getDataVisibility(a)
                ? u.getDistanceFromCenterForValue(s.data[a])
                : 0;
            (d = m),
              r && (l.animateScale && (y = 0), l.animateRotate && (p = m = f));
            var b = {
              x: h,
              y: c,
              innerRadius: 0,
              outerRadius: y,
              startAngle: p,
              endAngle: m,
              options: this.resolveDataElementOptions(
                a,
                g.active ? "active" : n
              ),
            };
            this.updateElement(g, a, b, n);
          }
        },
      },
      {
        key: "countVisibleElements",
        value: function () {
          var t = this,
            e = this.getDataset(),
            i = this._cachedMeta,
            n = 0;
          return (
            i.data.forEach(function (i, a) {
              !isNaN(e.data[a]) && t.chart.getDataVisibility(a) && n++;
            }),
            n
          );
        },
      },
      {
        key: "_computeAngle",
        value: function (t, e, i) {
          return this.chart.getDataVisibility(t)
            ? le(this.resolveDataElementOptions(t, e).angle || i)
            : 0;
        },
      },
    ]),
    a
  );
})();
(da.id = "polarArea"),
  (da.defaults = {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
        ],
      },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  (da.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function (t) {
            var e = t.data;
            if (e.labels.length && e.datasets.length) {
              var i = t.legend.options.labels.pointStyle;
              return e.labels.map(function (e, n) {
                var a = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  lineWidth: a.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(n),
                  index: n,
                };
              });
            }
            return [];
          },
        },
        onClick: function (t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
      tooltip: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (t) {
            return t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue;
          },
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
var va = (function (e) {
  t(a, ca);
  var i = In(a);
  function a() {
    return n(this, a), i.apply(this, arguments);
  }
  return s(a);
})();
(va.id = "pie"),
  (va.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  });
var ga = (function (e) {
  t(a, ta);
  var i = In(a);
  function a() {
    return n(this, a), i.apply(this, arguments);
  }
  return (
    s(a, [
      {
        key: "getLabelAndValue",
        value: function (t) {
          var e = this._cachedMeta.vScale,
            i = this.getParsed(t);
          return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(i[e.axis]),
          };
        },
      },
      {
        key: "update",
        value: function (t) {
          var e = this._cachedMeta,
            i = e.dataset,
            n = e.data || [],
            a = e.iScale.getLabels();
          if (((i.points = n), "resize" !== t)) {
            var r = this.resolveDatasetElementOptions(t);
            this.options.showLine || (r.borderWidth = 0);
            var o = { _loop: !0, _fullLoop: a.length === n.length, options: r };
            this.updateElement(i, void 0, o, t);
          }
          this.updateElements(n, 0, n.length, t);
        },
      },
      {
        key: "updateElements",
        value: function (t, e, i, n) {
          for (
            var a = this.getDataset(),
              r = this._cachedMeta.rScale,
              o = "reset" === n,
              s = e;
            s < e + i;
            s++
          ) {
            var l = t[s],
              u = this.resolveDataElementOptions(s, l.active ? "active" : n),
              h = r.getPointPositionForValue(s, a.data[s]),
              c = o ? r.xCenter : h.x,
              f = o ? r.yCenter : h.y,
              d = {
                x: c,
                y: f,
                angle: h.angle,
                skip: isNaN(c) || isNaN(f),
                options: u,
              };
            this.updateElement(l, s, d, n);
          }
        },
      },
    ]),
    a
  );
})();
(ga.id = "radar"),
  (ga.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: { line: { fill: "start" } },
  }),
  (ga.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } });
var pa = (function (e) {
  t(a, fa);
  var i = In(a);
  function a() {
    return n(this, a), i.apply(this, arguments);
  }
  return s(a);
})();
(pa.id = "scatter"),
  (pa.defaults = { showLine: !1, fill: !1 }),
  (pa.overrides = {
    interaction: { mode: "point" },
    plugins: {
      tooltip: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (t) {
            return "(" + t.label + ", " + t.formattedValue + ")";
          },
        },
      },
    },
    scales: { x: { type: "linear" }, y: { type: "linear" } },
  });
var ma = Object.freeze({
  __proto__: null,
  BarController: ua,
  BubbleController: ha,
  DoughnutController: ca,
  LineController: fa,
  PolarAreaController: da,
  PieController: va,
  RadarController: ga,
  ScatterController: pa,
});
function ya() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
var ba = (function () {
  function t(e) {
    n(this, t), (this.options = e || {});
  }
  return (
    s(t, [
      {
        key: "formats",
        value: function () {
          return ya();
        },
      },
      {
        key: "parse",
        value: function (t, e) {
          return ya();
        },
      },
      {
        key: "format",
        value: function (t, e) {
          return ya();
        },
      },
      {
        key: "add",
        value: function (t, e, i) {
          return ya();
        },
      },
      {
        key: "diff",
        value: function (t, e, i) {
          return ya();
        },
      },
      {
        key: "startOf",
        value: function (t, e, i) {
          return ya();
        },
      },
      {
        key: "endOf",
        value: function (t, e) {
          return ya();
        },
      },
    ]),
    t
  );
})();
ba.override = function (t) {
  Object.assign(ba.prototype, t);
};
var xa = { _date: ba };
function _a(t, e) {
  return "native" in t ? { x: t.x, y: t.y } : fn(t, e);
}
function ka(t, e, i, n) {
  var a = t.controller,
    r = t.data,
    o = t._sorted,
    s = a._cachedMeta.iScale;
  if (s && e === s.axis && o && r.length) {
    var l = s._reversePixels ? Ei : Li;
    if (!n) return l(r, e, i);
    if (a._sharedOptions) {
      var u = r[0],
        h = "function" == typeof u.getRange && u.getRange(e);
      if (h) {
        var c = l(r, e, i - h),
          f = l(r, e, i + h);
        return { lo: c.lo, hi: f.hi };
      }
    }
  }
  return { lo: 0, hi: r.length - 1 };
}
function wa(t, e, i, n, a) {
  for (
    var r = t.getSortedVisibleDatasetMetas(), o = i[e], s = 0, l = r.length;
    s < l;
    ++s
  )
    for (
      var u = r[s],
        h = u.index,
        c = u.data,
        f = ka(r[s], e, o, a),
        d = f.lo,
        v = f.hi,
        g = d;
      g <= v;
      ++g
    ) {
      var p = c[g];
      p.skip || n(p, h, g);
    }
}
function Ma(t, e, i, n) {
  var a = [];
  if (!di(e, t.chartArea, t._minPadding)) return a;
  return (
    wa(
      t,
      i,
      e,
      function (t, i, r) {
        t.inRange(e.x, e.y, n) &&
          a.push({ element: t, datasetIndex: i, index: r });
      },
      !0
    ),
    a
  );
}
function Sa(t, e, i, n, a) {
  var r = (function (t) {
      var e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
      return function (t, n) {
        var a = e ? Math.abs(t.x - n.x) : 0,
          r = i ? Math.abs(t.y - n.y) : 0;
        return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
      };
    })(i),
    o = Number.POSITIVE_INFINITY,
    s = [];
  if (!di(e, t.chartArea, t._minPadding)) return s;
  return (
    wa(t, i, e, function (i, l, u) {
      if (!n || i.inRange(e.x, e.y, a)) {
        var h = i.getCenterPoint(a);
        if (di(h, t.chartArea, t._minPadding) || i.inRange(e.x, e.y, a)) {
          var c = r(e, h);
          c < o
            ? ((s = [{ element: i, datasetIndex: l, index: u }]), (o = c))
            : c === o && s.push({ element: i, datasetIndex: l, index: u });
        }
      }
    }),
    s
  );
}
function Da(t, e, i, n) {
  var a = _a(e, t),
    r = [],
    o = i.axis,
    s = "x" === o ? "inXRange" : "inYRange",
    l = !1;
  return (
    (function (t, e) {
      for (
        var i, n, a, r = t.getSortedVisibleDatasetMetas(), o = 0, s = r.length;
        o < s;
        ++o
      ) {
        var l = r[o];
        i = l.index;
        for (var u = 0, h = (n = l.data).length; u < h; ++u)
          (a = n[u]).skip || e(a, i, u);
      }
    })(t, function (t, e, i) {
      t[s](a[o], n) && r.push({ element: t, datasetIndex: e, index: i }),
        t.inRange(a.x, a.y, n) && (l = !0);
    }),
    i.intersect && !l ? [] : r
  );
}
var Pa = {
    modes: {
      index: function (t, e, i, n) {
        var a = _a(e, t),
          r = i.axis || "x",
          o = i.intersect ? Ma(t, a, r, n) : Sa(t, a, r, !1, n),
          s = [];
        return o.length
          ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
              var e = o[0].index,
                i = t.data[e];
              i &&
                !i.skip &&
                s.push({ element: i, datasetIndex: t.index, index: e });
            }),
            s)
          : [];
      },
      dataset: function (t, e, i, n) {
        var a = _a(e, t),
          r = i.axis || "xy",
          o = i.intersect ? Ma(t, a, r, n) : Sa(t, a, r, !1, n);
        if (o.length > 0) {
          var s = o[0].datasetIndex,
            l = t.getDatasetMeta(s).data;
          o = [];
          for (var u = 0; u < l.length; ++u)
            o.push({ element: l[u], datasetIndex: s, index: u });
        }
        return o;
      },
      point: function (t, e, i, n) {
        return Ma(t, _a(e, t), i.axis || "xy", n);
      },
      nearest: function (t, e, i, n) {
        return Sa(t, _a(e, t), i.axis || "xy", i.intersect, n);
      },
      x: function (t, e, i, n) {
        return Da(t, e, { axis: "x", intersect: i.intersect }, n);
      },
      y: function (t, e, i, n) {
        return Da(t, e, { axis: "y", intersect: i.intersect }, n);
      },
    },
  },
  Oa = ["left", "top", "right", "bottom"];
function Ca(t, e) {
  return t.filter(function (t) {
    return t.pos === e;
  });
}
function Aa(t, e) {
  return t.filter(function (t) {
    return -1 === Oa.indexOf(t.pos) && t.box.axis === e;
  });
}
function Ta(t, e) {
  return t.sort(function (t, i) {
    var n = e ? i : t,
      a = e ? t : i;
    return n.weight === a.weight ? n.index - a.index : n.weight - a.weight;
  });
}
function Ra(t, e) {
  var i,
    n,
    a,
    r = (function (t) {
      var e,
        i = {},
        n = zn(t);
      try {
        for (n.s(); !(e = n.n()).done; ) {
          var a = e.value,
            r = a.stack,
            o = a.pos,
            s = a.stackWeight;
          if (r && Oa.includes(o)) {
            var l =
              i[r] || (i[r] = { count: 0, placed: 0, weight: 0, size: 0 });
            l.count++, (l.weight += s);
          }
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
      return i;
    })(t),
    o = e.vBoxMaxWidth,
    s = e.hBoxMaxHeight;
  for (i = 0, n = t.length; i < n; ++i) {
    var l = (a = t[i]).box.fullSize,
      u = r[a.stack],
      h = u && a.stackWeight / u.weight;
    a.horizontal
      ? ((a.width = h ? h * o : l && e.availableWidth), (a.height = s))
      : ((a.width = o), (a.height = h ? h * s : l && e.availableHeight));
  }
  return r;
}
function La(t, e, i, n) {
  return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
}
function Ea(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function Ia(t, e, i, n) {
  var a = i.pos,
    r = i.box,
    o = t.maxPadding;
  if (!Ot(a)) {
    i.size && (t[a] -= i.size);
    var s = n[i.stack] || { size: 0, count: 1 };
    (s.size = Math.max(s.size, i.horizontal ? r.height : r.width)),
      (i.size = s.size / s.count),
      (t[a] += i.size);
  }
  r.getPadding && Ea(o, r.getPadding());
  var l = Math.max(0, e.outerWidth - La(o, t, "left", "right")),
    u = Math.max(0, e.outerHeight - La(o, t, "top", "bottom")),
    h = l !== t.w,
    c = u !== t.h;
  return (
    (t.w = l),
    (t.h = u),
    i.horizontal ? { same: h, other: c } : { same: c, other: h }
  );
}
function za(t, e) {
  var i = e.maxPadding;
  function n(t) {
    var n = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      t.forEach(function (t) {
        n[t] = Math.max(e[t], i[t]);
      }),
      n
    );
  }
  return n(t ? ["left", "right"] : ["top", "bottom"]);
}
function Fa(t, e, i, n) {
  var a,
    r,
    o,
    s,
    l,
    u,
    h = [];
  for (a = 0, r = t.length, l = 0; a < r; ++a) {
    (s = (o = t[a]).box).update(
      o.width || e.w,
      o.height || e.h,
      za(o.horizontal, e)
    );
    var c = Ia(e, i, o, n),
      f = c.same,
      d = c.other;
    (l |= f && h.length), (u = u || d), s.fullSize || h.push(o);
  }
  return (l && Fa(h, e, i, n)) || u;
}
function Va(t, e, i, n, a) {
  (t.top = i),
    (t.left = e),
    (t.right = e + n),
    (t.bottom = i + a),
    (t.width = n),
    (t.height = a);
}
function Ba(t, e, i, n) {
  var a,
    r = i.padding,
    o = e.x,
    s = e.y,
    l = zn(t);
  try {
    for (l.s(); !(a = l.n()).done; ) {
      var u = a.value,
        h = u.box,
        c = n[u.stack] || { count: 1, placed: 0, weight: 1 },
        f = u.stackWeight / c.weight || 1;
      if (u.horizontal) {
        var d = e.w * f,
          v = c.size || h.height;
        Ut(c.start) && (s = c.start),
          h.fullSize
            ? Va(h, r.left, s, i.outerWidth - r.right - r.left, v)
            : Va(h, e.left + c.placed, s, d, v),
          (c.start = s),
          (c.placed += d),
          (s = h.bottom);
      } else {
        var g = e.h * f,
          p = c.size || h.width;
        Ut(c.start) && (o = c.start),
          h.fullSize
            ? Va(h, o, r.top, p, i.outerHeight - r.bottom - r.top)
            : Va(h, o, e.top + c.placed, p, g),
          (c.start = o),
          (c.placed += g),
          (o = h.right);
      }
    }
  } catch (t) {
    l.e(t);
  } finally {
    l.f();
  }
  (e.x = o), (e.y = s);
}
si.set("layout", {
  autoPadding: !0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var Wa = function (t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw: function (t) {
                e.draw(t);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  Na = function (t, e) {
    var i = t.boxes ? t.boxes.indexOf(e) : -1;
    -1 !== i && t.boxes.splice(i, 1);
  },
  ja = function (t, e, i) {
    (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
  },
  Ha = function (t, e, i, n) {
    if (t) {
      var a = Oi(t.options.layout.padding),
        r = Math.max(e - a.width, 0),
        o = Math.max(i - a.height, 0),
        s = (function (t) {
          var e = (function (t) {
              var e,
                i,
                n,
                a,
                r,
                o,
                s = [];
              for (e = 0, i = (t || []).length; e < i; ++e) {
                var l = (n = t[e]);
                a = l.position;
                var u = l.options;
                r = u.stack;
                var h = u.stackWeight;
                (o = void 0 === h ? 1 : h),
                  s.push({
                    index: e,
                    box: n,
                    pos: a,
                    horizontal: n.isHorizontal(),
                    weight: n.weight,
                    stack: r && a + r,
                    stackWeight: o,
                  });
              }
              return s;
            })(t),
            i = Ta(
              e.filter(function (t) {
                return t.box.fullSize;
              }),
              !0
            ),
            n = Ta(Ca(e, "left"), !0),
            a = Ta(Ca(e, "right")),
            r = Ta(Ca(e, "top"), !0),
            o = Ta(Ca(e, "bottom")),
            s = Aa(e, "x"),
            l = Aa(e, "y");
          return {
            fullSize: i,
            leftAndTop: n.concat(r),
            rightAndBottom: a.concat(l).concat(o).concat(s),
            chartArea: Ca(e, "chartArea"),
            vertical: n.concat(a).concat(l),
            horizontal: r.concat(o).concat(s),
          };
        })(t.boxes),
        l = s.vertical,
        u = s.horizontal;
      Et(t.boxes, function (t) {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      var h =
          l.reduce(function (t, e) {
            return e.box.options && !1 === e.box.options.display ? t : t + 1;
          }, 0) || 1,
        c = Object.freeze({
          outerWidth: e,
          outerHeight: i,
          padding: a,
          availableWidth: r,
          availableHeight: o,
          vBoxMaxWidth: r / 2 / h,
          hBoxMaxHeight: o / 2,
        }),
        f = Object.assign({}, a);
      Ea(f, Oi(n));
      var d = Object.assign(
          { maxPadding: f, w: r, h: o, x: a.left, y: a.top },
          a
        ),
        v = Ra(l.concat(u), c);
      Fa(s.fullSize, d, c, v),
        Fa(l, d, c, v),
        Fa(u, d, c, v) && Fa(l, d, c, v),
        (function (t) {
          var e = t.maxPadding;
          function i(i) {
            var n = Math.max(e[i] - t[i], 0);
            return (t[i] += n), n;
          }
          (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
        })(d),
        Ba(s.leftAndTop, d, c, v),
        (d.x += d.w),
        (d.y += d.h),
        Ba(s.rightAndBottom, d, c, v),
        (t.chartArea = {
          left: d.left,
          top: d.top,
          right: d.left + d.w,
          bottom: d.top + d.h,
          height: d.h,
          width: d.w,
        }),
        Et(s.chartArea, function (e) {
          var i = e.box;
          Object.assign(i, t.chartArea),
            i.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    }
  },
  $a = (function () {
    function t() {
      n(this, t);
    }
    return (
      s(t, [
        { key: "acquireContext", value: function (t, e) {} },
        {
          key: "releaseContext",
          value: function (t) {
            return !1;
          },
        },
        { key: "addEventListener", value: function (t, e, i) {} },
        { key: "removeEventListener", value: function (t, e, i) {} },
        {
          key: "getDevicePixelRatio",
          value: function () {
            return 1;
          },
        },
        {
          key: "getMaximumSize",
          value: function (t, e, i, n) {
            return (
              (e = Math.max(0, e || t.width)),
              (i = i || t.height),
              { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
            );
          },
        },
        {
          key: "isAttached",
          value: function (t) {
            return !0;
          },
        },
        { key: "updateConfig", value: function (t) {} },
      ]),
      t
    );
  })(),
  Ua = (function (e) {
    t(a, $a);
    var i = In(a);
    function a() {
      return n(this, a), i.apply(this, arguments);
    }
    return (
      s(a, [
        {
          key: "acquireContext",
          value: function (t) {
            return (t && t.getContext && t.getContext("2d")) || null;
          },
        },
        {
          key: "updateConfig",
          value: function (t) {
            t.options.animation = !1;
          },
        },
      ]),
      a
    );
  })(),
  Ya = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Xa = function (t) {
    return null === t || "" === t;
  };
var qa = !!pn && { passive: !0 };
function Ka(t, e, i) {
  t.canvas.removeEventListener(e, i, qa);
}
function Ga(t, e) {
  var i,
    n = zn(t);
  try {
    for (n.s(); !(i = n.n()).done; ) {
      var a = i.value;
      if (a === e || a.contains(e)) return !0;
    }
  } catch (t) {
    n.e(t);
  } finally {
    n.f();
  }
}
function Za(t, e, i) {
  var n = t.canvas,
    a = new MutationObserver(function (t) {
      var e,
        a = !1,
        r = zn(t);
      try {
        for (r.s(); !(e = r.n()).done; ) {
          var o = e.value;
          a = (a = a || Ga(o.addedNodes, n)) && !Ga(o.removedNodes, n);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
      a && i();
    });
  return a.observe(document, { childList: !0, subtree: !0 }), a;
}
function Qa(t, e, i) {
  var n = t.canvas,
    a = new MutationObserver(function (t) {
      var e,
        a = !1,
        r = zn(t);
      try {
        for (r.s(); !(e = r.n()).done; ) {
          var o = e.value;
          a = (a = a || Ga(o.removedNodes, n)) && !Ga(o.addedNodes, n);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
      a && i();
    });
  return a.observe(document, { childList: !0, subtree: !0 }), a;
}
var Ja = new Map(),
  tr = 0;
function er() {
  var t = window.devicePixelRatio;
  t !== tr &&
    ((tr = t),
    Ja.forEach(function (e, i) {
      i.currentDevicePixelRatio !== t && e();
    }));
}
function ir(t, e, i) {
  var n = t.canvas,
    a = n && sn(n);
  if (a) {
    var r = xt(function (t, e) {
        var n = a.clientWidth;
        i(t, e), n < a.clientWidth && i();
      }, window),
      o = new ResizeObserver(function (t) {
        var e = t[0],
          i = e.contentRect.width,
          n = e.contentRect.height;
        (0 === i && 0 === n) || r(i, n);
      });
    return (
      o.observe(a),
      (function (t, e) {
        Ja.size || window.addEventListener("resize", er), Ja.set(t, e);
      })(t, r),
      o
    );
  }
}
function nr(t, e, i) {
  i && i.disconnect(),
    "resize" === e &&
      (function (t) {
        Ja.delete(t), Ja.size || window.removeEventListener("resize", er);
      })(t);
}
function ar(t, e, i) {
  var n = t.canvas,
    a = xt(
      function (e) {
        null !== t.ctx &&
          i(
            (function (t, e) {
              var i = Ya[t.type] || t.type,
                n = fn(t, e),
                a = n.x,
                r = n.y;
              return {
                type: i,
                chart: e,
                native: t,
                x: void 0 !== a ? a : null,
                y: void 0 !== r ? r : null,
              };
            })(e, t)
          );
      },
      t,
      function (t) {
        var e = t[0];
        return [e, e.offsetX, e.offsetY];
      }
    );
  return (
    (function (t, e, i) {
      t.addEventListener(e, i, qa);
    })(n, e, a),
    a
  );
}
var rr = (function (e) {
  t(a, $a);
  var i = In(a);
  function a() {
    return n(this, a), i.apply(this, arguments);
  }
  return (
    s(a, [
      {
        key: "acquireContext",
        value: function (t, e) {
          var i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t
            ? ((function (t, e) {
                var i = t.style,
                  n = t.getAttribute("height"),
                  a = t.getAttribute("width");
                if (
                  ((t.$chartjs = {
                    initial: {
                      height: n,
                      width: a,
                      style: {
                        display: i.display,
                        height: i.height,
                        width: i.width,
                      },
                    },
                  }),
                  (i.display = i.display || "block"),
                  (i.boxSizing = i.boxSizing || "border-box"),
                  Xa(a))
                ) {
                  var r = mn(t, "width");
                  void 0 !== r && (t.width = r);
                }
                if (Xa(n))
                  if ("" === t.style.height) t.height = t.width / (e || 2);
                  else {
                    var o = mn(t, "height");
                    void 0 !== o && (t.height = o);
                  }
              })(t, e),
              i)
            : null;
        },
      },
      {
        key: "releaseContext",
        value: function (t) {
          var e = t.canvas;
          if (!e.$chartjs) return !1;
          var i = e.$chartjs.initial;
          ["height", "width"].forEach(function (t) {
            var n = i[t];
            Dt(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
          });
          var n = i.style || {};
          return (
            Object.keys(n).forEach(function (t) {
              e.style[t] = n[t];
            }),
            (e.width = e.width),
            delete e.$chartjs,
            !0
          );
        },
      },
      {
        key: "addEventListener",
        value: function (t, e, i) {
          this.removeEventListener(t, e);
          var n = t.$proxies || (t.$proxies = {}),
            a = { attach: Za, detach: Qa, resize: ir }[e] || ar;
          n[e] = a(t, e, i);
        },
      },
      {
        key: "removeEventListener",
        value: function (t, e) {
          var i = t.$proxies || (t.$proxies = {}),
            n = i[e];
          n &&
            (({ attach: nr, detach: nr, resize: nr }[e] || Ka)(t, e, n),
            (i[e] = void 0));
        },
      },
      {
        key: "getDevicePixelRatio",
        value: function () {
          return window.devicePixelRatio;
        },
      },
      {
        key: "getMaximumSize",
        value: function (t, e, i, n) {
          return vn(t, e, i, n);
        },
      },
      {
        key: "isAttached",
        value: function (t) {
          var e = sn(t);
          return !(!e || !e.isConnected);
        },
      },
    ]),
    a
  );
})();
var or = (function () {
  function t() {
    n(this, t),
      (this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0);
  }
  return (
    s(t, [
      {
        key: "tooltipPosition",
        value: function (t) {
          var e = this.getProps(["x", "y"], t);
          return { x: e.x, y: e.y };
        },
      },
      {
        key: "hasValue",
        value: function () {
          return re(this.x) && re(this.y);
        },
      },
      {
        key: "getProps",
        value: function (t, e) {
          var i = this,
            n = this.$animations;
          if (!e || !n) return this;
          var a = {};
          return (
            t.forEach(function (t) {
              a[t] = n[t] && n[t].active() ? n[t]._to : i[t];
            }),
            a
          );
        },
      },
    ]),
    t
  );
})();
(or.defaults = {}), (or.defaultRoutes = void 0);
var sr = {
  values: function (t) {
    return Pt(t) ? t : "" + t;
  },
  numeric: function (t, e, i) {
    if (0 === t) return "0";
    var n,
      a = this.chart.options.locale,
      r = t;
    if (i.length > 1) {
      var o = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (o < 1e-4 || o > 1e15) && (n = "scientific"),
        (r = (function (t, e) {
          var i =
            e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        })(t, i));
    }
    var s = ie(Math.abs(r)),
      l = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
      u = { notation: n, minimumFractionDigits: l, maximumFractionDigits: l };
    return Object.assign(u, this.options.ticks.format), kn(t, a, u);
  },
  logarithmic: function (t, e, i) {
    if (0 === t) return "0";
    var n = t / Math.pow(10, Math.floor(ie(t)));
    return 1 === n || 2 === n || 5 === n ? sr.numeric.call(this, t, e, i) : "";
  },
};
var lr = { formatters: sr };
function ur(t, e) {
  var i = t.options.ticks,
    n =
      i.maxTicksLimit ||
      (function (t) {
        var e = t.options.offset,
          i = t._tickSize(),
          n = t._length / i + (e ? 0 : 1),
          a = t._maxLength / i;
        return Math.floor(Math.min(n, a));
      })(t),
    a = i.major.enabled
      ? (function (t) {
          var e,
            i,
            n = [];
          for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
          return n;
        })(e)
      : [],
    r = a.length,
    o = a[0],
    s = a[r - 1],
    l = [];
  if (r > n)
    return (
      (function (t, e, i, n) {
        var a,
          r = 0,
          o = i[0];
        for (n = Math.ceil(n), a = 0; a < t.length; a++)
          a === o && (e.push(t[a]), (o = i[++r * n]));
      })(e, l, a, r / n),
      l
    );
  var u = (function (t, e, i) {
    var n = (function (t) {
        var e,
          i,
          n = t.length;
        if (n < 2) return !1;
        for (i = t[0], e = 1; e < n; ++e) if (t[e] - t[e - 1] !== i) return !1;
        return i;
      })(t),
      a = e.length / i;
    if (!n) return Math.max(a, 1);
    for (
      var r = (function (t) {
          var e,
            i = [],
            n = Math.sqrt(t);
          for (e = 1; e < n; e++) t % e == 0 && (i.push(e), i.push(t / e));
          return (
            n === (0 | n) && i.push(n),
            i
              .sort(function (t, e) {
                return t - e;
              })
              .pop(),
            i
          );
        })(n),
        o = 0,
        s = r.length - 1;
      o < s;
      o++
    ) {
      var l = r[o];
      if (l > a) return l;
    }
    return Math.max(a, 1);
  })(a, e, n);
  if (r > 0) {
    var h,
      c,
      f = r > 1 ? Math.round((s - o) / (r - 1)) : null;
    for (hr(e, l, u, Dt(f) ? 0 : o - f, o), h = 0, c = r - 1; h < c; h++)
      hr(e, l, u, a[h], a[h + 1]);
    return hr(e, l, u, s, Dt(f) ? e.length : s + f), l;
  }
  return hr(e, l, u), l;
}
function hr(t, e, i, n, a) {
  var r,
    o,
    s,
    l = Tt(n, 0),
    u = Math.min(Tt(a, t.length), t.length),
    h = 0;
  for (
    i = Math.ceil(i), a && (i = (r = a - n) / Math.floor(r / i)), s = l;
    s < 0;

  )
    h++, (s = Math.round(l + h * i));
  for (o = Math.max(l, 0); o < u; o++)
    o === s && (e.push(t[o]), h++, (s = Math.round(l + h * i)));
}
si.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: function (t, e) {
      return e.lineWidth;
    },
    tickColor: function (t, e) {
      return e.color;
    },
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1,
  },
  title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: lr.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2,
  },
}),
  si.route("scale.ticks", "color", "", "color"),
  si.route("scale.grid", "color", "", "borderColor"),
  si.route("scale.grid", "borderColor", "", "borderColor"),
  si.route("scale.title", "color", "", "color"),
  si.describe("scale", {
    _fallback: !1,
    _scriptable: function (t) {
      return (
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        "callback" !== t &&
        "parser" !== t
      );
    },
    _indexable: function (t) {
      return "borderDash" !== t && "tickBorderDash" !== t;
    },
  }),
  si.describe("scales", { _fallback: "scale" }),
  si.describe("scale.ticks", {
    _scriptable: function (t) {
      return "backdropPadding" !== t && "callback" !== t;
    },
    _indexable: function (t) {
      return "backdropPadding" !== t;
    },
  });
var cr = function (t, e, i) {
  return "top" === e || "left" === e ? t[e] + i : t[e] - i;
};
function fr(t, e) {
  for (var i = [], n = t.length / e, a = t.length, r = 0; r < a; r += n)
    i.push(t[Math.floor(r)]);
  return i;
}
function dr(t, e, i) {
  var n,
    a = t.ticks.length,
    r = Math.min(e, a - 1),
    o = t._startPixel,
    s = t._endPixel,
    l = 1e-6,
    u = t.getPixelForTick(r);
  if (
    !(
      i &&
      ((n =
        1 === a
          ? Math.max(u - o, s - u)
          : 0 === e
          ? (t.getPixelForTick(1) - u) / 2
          : (u - t.getPixelForTick(r - 1)) / 2),
      (u += r < e ? n : -n) < o - l || u > s + l)
    )
  )
    return u;
}
function vr(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function gr(t, e) {
  if (!t.display) return 0;
  var i = Ci(t.font, e),
    n = Oi(t.padding);
  return (Pt(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
}
function pr(t, e, i) {
  var n = _t(t);
  return (
    ((i && "right" !== e) || (!i && "right" === e)) &&
      (n = (function (t) {
        return "left" === t ? "right" : "right" === t ? "left" : t;
      })(n)),
    n
  );
}
var mr = (function (e) {
    t(a, or);
    var i = In(a);
    function a(t) {
      var e;
      return (
        n(this, a),
        ((e = i.call(this)).id = t.id),
        (e.type = t.type),
        (e.options = void 0),
        (e.ctx = t.ctx),
        (e.chart = t.chart),
        (e.top = void 0),
        (e.bottom = void 0),
        (e.left = void 0),
        (e.right = void 0),
        (e.width = void 0),
        (e.height = void 0),
        (e._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (e.maxWidth = void 0),
        (e.maxHeight = void 0),
        (e.paddingTop = void 0),
        (e.paddingBottom = void 0),
        (e.paddingLeft = void 0),
        (e.paddingRight = void 0),
        (e.axis = void 0),
        (e.labelRotation = void 0),
        (e.min = void 0),
        (e.max = void 0),
        (e._range = void 0),
        (e.ticks = []),
        (e._gridLineItems = null),
        (e._labelItems = null),
        (e._labelSizes = null),
        (e._length = 0),
        (e._maxLength = 0),
        (e._longestTextCache = {}),
        (e._startPixel = void 0),
        (e._endPixel = void 0),
        (e._reversePixels = !1),
        (e._userMax = void 0),
        (e._userMin = void 0),
        (e._suggestedMax = void 0),
        (e._suggestedMin = void 0),
        (e._ticksLength = 0),
        (e._borderValue = 0),
        (e._cache = {}),
        (e._dataLimitsCached = !1),
        (e.$context = void 0),
        e
      );
    }
    return (
      s(a, [
        {
          key: "init",
          value: function (t) {
            (this.options = t.setContext(this.getContext())),
              (this.axis = t.axis),
              (this._userMin = this.parse(t.min)),
              (this._userMax = this.parse(t.max)),
              (this._suggestedMin = this.parse(t.suggestedMin)),
              (this._suggestedMax = this.parse(t.suggestedMax));
          },
        },
        {
          key: "parse",
          value: function (t, e) {
            return t;
          },
        },
        {
          key: "getUserBounds",
          value: function () {
            var t = this._userMin,
              e = this._userMax,
              i = this._suggestedMin,
              n = this._suggestedMax;
            return (
              (t = At(t, Number.POSITIVE_INFINITY)),
              (e = At(e, Number.NEGATIVE_INFINITY)),
              (i = At(i, Number.POSITIVE_INFINITY)),
              (n = At(n, Number.NEGATIVE_INFINITY)),
              {
                min: At(t, i),
                max: At(e, n),
                minDefined: Ct(t),
                maxDefined: Ct(e),
              }
            );
          },
        },
        {
          key: "getMinMax",
          value: function (t) {
            var e,
              i = this.getUserBounds(),
              n = i.min,
              a = i.max,
              r = i.minDefined,
              o = i.maxDefined;
            if (r && o) return { min: n, max: a };
            for (
              var s = this.getMatchingVisibleMetas(), l = 0, u = s.length;
              l < u;
              ++l
            )
              (e = s[l].controller.getMinMax(this, t)),
                r || (n = Math.min(n, e.min)),
                o || (a = Math.max(a, e.max));
            return {
              min: At(
                (n = o && n > a ? a : n),
                At((a = r && n > a ? n : a), n)
              ),
              max: At(a, At(n, a)),
            };
          },
        },
        {
          key: "getPadding",
          value: function () {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0,
            };
          },
        },
        {
          key: "getTicks",
          value: function () {
            return this.ticks;
          },
        },
        {
          key: "getLabels",
          value: function () {
            var t = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? t.xLabels : t.yLabels) ||
              t.labels ||
              []
            );
          },
        },
        {
          key: "beforeLayout",
          value: function () {
            (this._cache = {}), (this._dataLimitsCached = !1);
          },
        },
        {
          key: "beforeUpdate",
          value: function () {
            Lt(this.options.beforeUpdate, [this]);
          },
        },
        {
          key: "update",
          value: function (t, e, i) {
            var n = this.options,
              a = n.beginAtZero,
              r = n.grace,
              o = n.ticks,
              s = o.sampleSize;
            this.beforeUpdate(),
              (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = i = Object.assign(
                { left: 0, right: 0, top: 0, bottom: 0 },
                i
              )),
              (this.ticks = null),
              (this._labelSizes = null),
              (this._gridLineItems = null),
              (this._labelItems = null),
              this.beforeSetDimensions(),
              this.setDimensions(),
              this.afterSetDimensions(),
              (this._maxLength = this.isHorizontal()
                ? this.width + i.left + i.right
                : this.height + i.top + i.bottom),
              this._dataLimitsCached ||
                (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = (function (t, e, i) {
                  var n = t.min,
                    a = t.max,
                    r = Rt(e, (a - n) / 2),
                    o = function (t, e) {
                      return i && 0 === t ? 0 : t + e;
                    };
                  return { min: o(n, -Math.abs(r)), max: o(a, r) };
                })(this, r, a)),
                (this._dataLimitsCached = !0)),
              this.beforeBuildTicks(),
              (this.ticks = this.buildTicks() || []),
              this.afterBuildTicks();
            var l = s < this.ticks.length;
            this._convertTicksToLabels(l ? fr(this.ticks, s) : this.ticks),
              this.configure(),
              this.beforeCalculateLabelRotation(),
              this.calculateLabelRotation(),
              this.afterCalculateLabelRotation(),
              o.display &&
                (o.autoSkip || "auto" === o.source) &&
                ((this.ticks = ur(this, this.ticks)),
                (this._labelSizes = null)),
              l && this._convertTicksToLabels(this.ticks),
              this.beforeFit(),
              this.fit(),
              this.afterFit(),
              this.afterUpdate();
          },
        },
        {
          key: "configure",
          value: function () {
            var t,
              e,
              i = this.options.reverse;
            this.isHorizontal()
              ? ((t = this.left), (e = this.right))
              : ((t = this.top), (e = this.bottom), (i = !i)),
              (this._startPixel = t),
              (this._endPixel = e),
              (this._reversePixels = i),
              (this._length = e - t),
              (this._alignToPixels = this.options.alignToPixels);
          },
        },
        {
          key: "afterUpdate",
          value: function () {
            Lt(this.options.afterUpdate, [this]);
          },
        },
        {
          key: "beforeSetDimensions",
          value: function () {
            Lt(this.options.beforeSetDimensions, [this]);
          },
        },
        {
          key: "setDimensions",
          value: function () {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = 0),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = 0),
                (this.bottom = this.height)),
              (this.paddingLeft = 0),
              (this.paddingTop = 0),
              (this.paddingRight = 0),
              (this.paddingBottom = 0);
          },
        },
        {
          key: "afterSetDimensions",
          value: function () {
            Lt(this.options.afterSetDimensions, [this]);
          },
        },
        {
          key: "_callHooks",
          value: function (t) {
            this.chart.notifyPlugins(t, this.getContext()),
              Lt(this.options[t], [this]);
          },
        },
        {
          key: "beforeDataLimits",
          value: function () {
            this._callHooks("beforeDataLimits");
          },
        },
        { key: "determineDataLimits", value: function () {} },
        {
          key: "afterDataLimits",
          value: function () {
            this._callHooks("afterDataLimits");
          },
        },
        {
          key: "beforeBuildTicks",
          value: function () {
            this._callHooks("beforeBuildTicks");
          },
        },
        {
          key: "buildTicks",
          value: function () {
            return [];
          },
        },
        {
          key: "afterBuildTicks",
          value: function () {
            this._callHooks("afterBuildTicks");
          },
        },
        {
          key: "beforeTickToLabelConversion",
          value: function () {
            Lt(this.options.beforeTickToLabelConversion, [this]);
          },
        },
        {
          key: "generateTickLabels",
          value: function (t) {
            var e,
              i,
              n,
              a = this.options.ticks;
            for (e = 0, i = t.length; e < i; e++)
              (n = t[e]).label = Lt(a.callback, [n.value, e, t], this);
          },
        },
        {
          key: "afterTickToLabelConversion",
          value: function () {
            Lt(this.options.afterTickToLabelConversion, [this]);
          },
        },
        {
          key: "beforeCalculateLabelRotation",
          value: function () {
            Lt(this.options.beforeCalculateLabelRotation, [this]);
          },
        },
        {
          key: "calculateLabelRotation",
          value: function () {
            var t,
              e,
              i,
              n = this.options,
              a = n.ticks,
              r = this.ticks.length,
              o = a.minRotation || 0,
              s = a.maxRotation,
              l = o;
            if (
              !this._isVisible() ||
              !a.display ||
              o >= s ||
              r <= 1 ||
              !this.isHorizontal()
            )
              this.labelRotation = o;
            else {
              var u = this._getLabelSizes(),
                h = u.widest.width,
                c = u.highest.height,
                f = ge(this.chart.width - h, 0, this.maxWidth);
              h + 6 > (t = n.offset ? this.maxWidth / r : f / (r - 1)) &&
                ((t = f / (r - (n.offset ? 0.5 : 1))),
                (e =
                  this.maxHeight -
                  vr(n.grid) -
                  a.padding -
                  gr(n.title, this.chart.options.font)),
                (i = Math.sqrt(h * h + c * c)),
                (l = ue(
                  Math.min(
                    Math.asin(ge((u.highest.height + 6) / t, -1, 1)),
                    Math.asin(ge(e / i, -1, 1)) - Math.asin(ge(c / i, -1, 1))
                  )
                )),
                (l = Math.max(o, Math.min(s, l)))),
                (this.labelRotation = l);
            }
          },
        },
        {
          key: "afterCalculateLabelRotation",
          value: function () {
            Lt(this.options.afterCalculateLabelRotation, [this]);
          },
        },
        {
          key: "beforeFit",
          value: function () {
            Lt(this.options.beforeFit, [this]);
          },
        },
        {
          key: "fit",
          value: function () {
            var t = { width: 0, height: 0 },
              e = this.chart,
              i = this.options,
              n = i.ticks,
              a = i.title,
              r = i.grid,
              o = this._isVisible(),
              s = this.isHorizontal();
            if (o) {
              var l = gr(a, e.options.font);
              if (
                (s
                  ? ((t.width = this.maxWidth), (t.height = vr(r) + l))
                  : ((t.height = this.maxHeight), (t.width = vr(r) + l)),
                n.display && this.ticks.length)
              ) {
                var u = this._getLabelSizes(),
                  h = u.first,
                  c = u.last,
                  f = u.widest,
                  d = u.highest,
                  v = 2 * n.padding,
                  g = le(this.labelRotation),
                  p = Math.cos(g),
                  m = Math.sin(g);
                if (s) {
                  var y = n.mirror ? 0 : m * f.width + p * d.height;
                  t.height = Math.min(this.maxHeight, t.height + y + v);
                } else {
                  var b = n.mirror ? 0 : p * f.width + m * d.height;
                  t.width = Math.min(this.maxWidth, t.width + b + v);
                }
                this._calculatePadding(h, c, m, p);
              }
            }
            this._handleMargins(),
              s
                ? ((this.width = this._length =
                    e.width - this._margins.left - this._margins.right),
                  (this.height = t.height))
                : ((this.width = t.width),
                  (this.height = this._length =
                    e.height - this._margins.top - this._margins.bottom));
          },
        },
        {
          key: "_calculatePadding",
          value: function (t, e, i, n) {
            var a = this.options,
              r = a.ticks,
              o = r.align,
              s = r.padding,
              l = a.position,
              u = 0 !== this.labelRotation,
              h = "top" !== l && "x" === this.axis;
            if (this.isHorizontal()) {
              var c = this.getPixelForTick(0) - this.left,
                f = this.right - this.getPixelForTick(this.ticks.length - 1),
                d = 0,
                v = 0;
              u
                ? h
                  ? ((d = n * t.width), (v = i * e.height))
                  : ((d = i * t.height), (v = n * e.width))
                : "start" === o
                ? (v = e.width)
                : "end" === o
                ? (d = t.width)
                : ((d = t.width / 2), (v = e.width / 2)),
                (this.paddingLeft = Math.max(
                  ((d - c + s) * this.width) / (this.width - c),
                  0
                )),
                (this.paddingRight = Math.max(
                  ((v - f + s) * this.width) / (this.width - f),
                  0
                ));
            } else {
              var g = e.height / 2,
                p = t.height / 2;
              "start" === o
                ? ((g = 0), (p = t.height))
                : "end" === o && ((g = e.height), (p = 0)),
                (this.paddingTop = g + s),
                (this.paddingBottom = p + s);
            }
          },
        },
        {
          key: "_handleMargins",
          value: function () {
            this._margins &&
              ((this._margins.left = Math.max(
                this.paddingLeft,
                this._margins.left
              )),
              (this._margins.top = Math.max(
                this.paddingTop,
                this._margins.top
              )),
              (this._margins.right = Math.max(
                this.paddingRight,
                this._margins.right
              )),
              (this._margins.bottom = Math.max(
                this.paddingBottom,
                this._margins.bottom
              )));
          },
        },
        {
          key: "afterFit",
          value: function () {
            Lt(this.options.afterFit, [this]);
          },
        },
        {
          key: "isHorizontal",
          value: function () {
            var t = this.options,
              e = t.axis,
              i = t.position;
            return "top" === i || "bottom" === i || "x" === e;
          },
        },
        {
          key: "isFullSize",
          value: function () {
            return this.options.fullSize;
          },
        },
        {
          key: "_convertTicksToLabels",
          value: function (t) {
            var e, i;
            for (
              this.beforeTickToLabelConversion(),
                this.generateTickLabels(t),
                e = 0,
                i = t.length;
              e < i;
              e++
            )
              Dt(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion();
          },
        },
        {
          key: "_getLabelSizes",
          value: function () {
            var t = this._labelSizes;
            if (!t) {
              var e = this.options.ticks.sampleSize,
                i = this.ticks;
              e < i.length && (i = fr(i, e)),
                (this._labelSizes = t = this._computeLabelSizes(i, i.length));
            }
            return t;
          },
        },
        {
          key: "_computeLabelSizes",
          value: function (t, e) {
            var i,
              n,
              a,
              r,
              o,
              s,
              l,
              u,
              h,
              c,
              f,
              d = this.ctx,
              v = this._longestTextCache,
              g = [],
              p = [],
              m = 0,
              y = 0;
            for (i = 0; i < e; ++i) {
              if (
                ((r = t[i].label),
                (o = this._resolveTickFontOptions(i)),
                (d.font = s = o.string),
                (l = v[s] = v[s] || { data: {}, gc: [] }),
                (u = o.lineHeight),
                (h = c = 0),
                Dt(r) || Pt(r))
              ) {
                if (Pt(r))
                  for (n = 0, a = r.length; n < a; ++n)
                    Dt((f = r[n])) ||
                      Pt(f) ||
                      ((h = li(d, l.data, l.gc, h, f)), (c += u));
              } else (h = li(d, l.data, l.gc, h, r)), (c = u);
              g.push(h), p.push(c), (m = Math.max(h, m)), (y = Math.max(c, y));
            }
            !(function (t, e) {
              Et(t, function (t) {
                var i,
                  n = t.gc,
                  a = n.length / 2;
                if (a > e) {
                  for (i = 0; i < a; ++i) delete t.data[n[i]];
                  n.splice(0, a);
                }
              });
            })(v, e);
            var b = g.indexOf(m),
              x = p.indexOf(y),
              _ = function (t) {
                return { width: g[t] || 0, height: p[t] || 0 };
              };
            return {
              first: _(0),
              last: _(e - 1),
              widest: _(b),
              highest: _(x),
              widths: g,
              heights: p,
            };
          },
        },
        {
          key: "getLabelForValue",
          value: function (t) {
            return t;
          },
        },
        {
          key: "getPixelForValue",
          value: function (t, e) {
            return NaN;
          },
        },
        { key: "getValueForPixel", value: function (t) {} },
        {
          key: "getPixelForTick",
          value: function (t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          },
        },
        {
          key: "getPixelForDecimal",
          value: function (t) {
            this._reversePixels && (t = 1 - t);
            var e = this._startPixel + t * this._length;
            return ge(
              this._alignToPixels ? hi(this.chart, e, 0) : e,
              -32768,
              32767
            );
          },
        },
        {
          key: "getDecimalForPixel",
          value: function (t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
          },
        },
        {
          key: "getBasePixel",
          value: function () {
            return this.getPixelForValue(this.getBaseValue());
          },
        },
        {
          key: "getBaseValue",
          value: function () {
            var t = this.min,
              e = this.max;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          },
        },
        {
          key: "getContext",
          value: function (t) {
            var e = this.ticks || [];
            if (t >= 0 && t < e.length) {
              var i = e[t];
              return (
                i.$context ||
                (i.$context = (function (t, e, i) {
                  return Ti(t, { tick: i, index: e, type: "tick" });
                })(this.getContext(), t, i))
              );
            }
            return (
              this.$context ||
              (this.$context = Ti(this.chart.getContext(), {
                scale: this,
                type: "scale",
              }))
            );
          },
        },
        {
          key: "_tickSize",
          value: function () {
            var t = this.options.ticks,
              e = le(this.labelRotation),
              i = Math.abs(Math.cos(e)),
              n = Math.abs(Math.sin(e)),
              a = this._getLabelSizes(),
              r = t.autoSkipPadding || 0,
              o = a ? a.widest.width + r : 0,
              s = a ? a.highest.height + r : 0;
            return this.isHorizontal()
              ? s * i > o * n
                ? o / i
                : s / n
              : s * n < o * i
              ? s / i
              : o / n;
          },
        },
        {
          key: "_isVisible",
          value: function () {
            var t = this.options.display;
            return "auto" !== t
              ? !!t
              : this.getMatchingVisibleMetas().length > 0;
          },
        },
        {
          key: "_computeGridLineItems",
          value: function (t) {
            var e,
              i,
              n,
              a,
              r,
              o,
              s,
              l,
              u,
              h,
              c,
              f,
              d = this.axis,
              v = this.chart,
              g = this.options,
              p = g.grid,
              m = g.position,
              y = p.offset,
              b = this.isHorizontal(),
              x = this.ticks.length + (y ? 1 : 0),
              _ = vr(p),
              k = [],
              w = p.setContext(this.getContext()),
              M = w.drawBorder ? w.borderWidth : 0,
              S = M / 2,
              D = function (t) {
                return hi(v, t, M);
              };
            if ("top" === m)
              (e = D(this.bottom)),
                (o = this.bottom - _),
                (l = e - S),
                (h = D(t.top) + S),
                (f = t.bottom);
            else if ("bottom" === m)
              (e = D(this.top)),
                (h = t.top),
                (f = D(t.bottom) - S),
                (o = e + S),
                (l = this.top + _);
            else if ("left" === m)
              (e = D(this.right)),
                (r = this.right - _),
                (s = e - S),
                (u = D(t.left) + S),
                (c = t.right);
            else if ("right" === m)
              (e = D(this.left)),
                (u = t.left),
                (c = D(t.right) - S),
                (r = e + S),
                (s = this.left + _);
            else if ("x" === d) {
              if ("center" === m) e = D((t.top + t.bottom) / 2 + 0.5);
              else if (Ot(m)) {
                var P = Object.keys(m)[0],
                  O = m[P];
                e = D(this.chart.scales[P].getPixelForValue(O));
              }
              (h = t.top), (f = t.bottom), (l = (o = e + S) + _);
            } else if ("y" === d) {
              if ("center" === m) e = D((t.left + t.right) / 2);
              else if (Ot(m)) {
                var C = Object.keys(m)[0],
                  A = m[C];
                e = D(this.chart.scales[C].getPixelForValue(A));
              }
              (s = (r = e - S) - _), (u = t.left), (c = t.right);
            }
            var T = Tt(g.ticks.maxTicksLimit, x),
              R = Math.max(1, Math.ceil(x / T));
            for (i = 0; i < x; i += R) {
              var L = p.setContext(this.getContext(i)),
                E = L.lineWidth,
                I = L.color,
                z = p.borderDash || [],
                F = L.borderDashOffset,
                V = L.tickWidth,
                B = L.tickColor,
                W = L.tickBorderDash || [],
                N = L.tickBorderDashOffset;
              void 0 !== (n = dr(this, i, y)) &&
                ((a = hi(v, n, E)),
                b ? (r = s = u = c = a) : (o = l = h = f = a),
                k.push({
                  tx1: r,
                  ty1: o,
                  tx2: s,
                  ty2: l,
                  x1: u,
                  y1: h,
                  x2: c,
                  y2: f,
                  width: E,
                  color: I,
                  borderDash: z,
                  borderDashOffset: F,
                  tickWidth: V,
                  tickColor: B,
                  tickBorderDash: W,
                  tickBorderDashOffset: N,
                }));
            }
            return (this._ticksLength = x), (this._borderValue = e), k;
          },
        },
        {
          key: "_computeLabelItems",
          value: function (t) {
            var e,
              i,
              n,
              a,
              r,
              o,
              s,
              l,
              u,
              h,
              c,
              f = this.axis,
              d = this.options,
              v = d.position,
              g = d.ticks,
              p = this.isHorizontal(),
              m = this.ticks,
              y = g.align,
              b = g.crossAlign,
              x = g.padding,
              _ = g.mirror,
              k = vr(d.grid),
              w = k + x,
              M = _ ? -x : w,
              S = -le(this.labelRotation),
              D = [],
              P = "middle";
            if ("top" === v)
              (r = this.bottom - M), (o = this._getXAxisLabelAlignment());
            else if ("bottom" === v)
              (r = this.top + M), (o = this._getXAxisLabelAlignment());
            else if ("left" === v) {
              var O = this._getYAxisLabelAlignment(k);
              (o = O.textAlign), (a = O.x);
            } else if ("right" === v) {
              var C = this._getYAxisLabelAlignment(k);
              (o = C.textAlign), (a = C.x);
            } else if ("x" === f) {
              if ("center" === v) r = (t.top + t.bottom) / 2 + w;
              else if (Ot(v)) {
                var A = Object.keys(v)[0],
                  T = v[A];
                r = this.chart.scales[A].getPixelForValue(T) + w;
              }
              o = this._getXAxisLabelAlignment();
            } else if ("y" === f) {
              if ("center" === v) a = (t.left + t.right) / 2 - w;
              else if (Ot(v)) {
                var R = Object.keys(v)[0],
                  L = v[R];
                a = this.chart.scales[R].getPixelForValue(L);
              }
              o = this._getYAxisLabelAlignment(k).textAlign;
            }
            "y" === f &&
              ("start" === y ? (P = "top") : "end" === y && (P = "bottom"));
            var E = this._getLabelSizes();
            for (e = 0, i = m.length; e < i; ++e) {
              n = m[e].label;
              var I = g.setContext(this.getContext(e));
              (s = this.getPixelForTick(e) + g.labelOffset),
                (u = (l = this._resolveTickFontOptions(e)).lineHeight);
              var z = (h = Pt(n) ? n.length : 1) / 2,
                F = I.color,
                V = I.textStrokeColor,
                B = I.textStrokeWidth;
              p
                ? ((a = s),
                  (c =
                    "top" === v
                      ? "near" === b || 0 !== S
                        ? -h * u + u / 2
                        : "center" === b
                        ? -E.highest.height / 2 - z * u + u
                        : -E.highest.height + u / 2
                      : "near" === b || 0 !== S
                      ? u / 2
                      : "center" === b
                      ? E.highest.height / 2 - z * u
                      : E.highest.height - h * u),
                  _ && (c *= -1))
                : ((r = s), (c = ((1 - h) * u) / 2));
              var W = void 0;
              if (I.showLabelBackdrop) {
                var N = Oi(I.backdropPadding),
                  j = E.heights[e],
                  H = E.widths[e],
                  $ = r + c - N.top,
                  U = a - N.left;
                switch (P) {
                  case "middle":
                    $ -= j / 2;
                    break;
                  case "bottom":
                    $ -= j;
                }
                switch (o) {
                  case "center":
                    U -= H / 2;
                    break;
                  case "right":
                    U -= H;
                }
                W = {
                  left: U,
                  top: $,
                  width: H + N.width,
                  height: j + N.height,
                  color: I.backdropColor,
                };
              }
              D.push({
                rotation: S,
                label: n,
                font: l,
                color: F,
                strokeColor: V,
                strokeWidth: B,
                textOffset: c,
                textAlign: o,
                textBaseline: P,
                translation: [a, r],
                backdrop: W,
              });
            }
            return D;
          },
        },
        {
          key: "_getXAxisLabelAlignment",
          value: function () {
            var t = this.options,
              e = t.position,
              i = t.ticks;
            if (-le(this.labelRotation)) return "top" === e ? "left" : "right";
            var n = "center";
            return (
              "start" === i.align
                ? (n = "left")
                : "end" === i.align && (n = "right"),
              n
            );
          },
        },
        {
          key: "_getYAxisLabelAlignment",
          value: function (t) {
            var e,
              i,
              n = this.options,
              a = n.position,
              r = n.ticks,
              o = r.crossAlign,
              s = r.mirror,
              l = r.padding,
              u = t + l,
              h = this._getLabelSizes().widest.width;
            return (
              "left" === a
                ? s
                  ? ((i = this.right + l),
                    "near" === o
                      ? (e = "left")
                      : "center" === o
                      ? ((e = "center"), (i += h / 2))
                      : ((e = "right"), (i += h)))
                  : ((i = this.right - u),
                    "near" === o
                      ? (e = "right")
                      : "center" === o
                      ? ((e = "center"), (i -= h / 2))
                      : ((e = "left"), (i = this.left)))
                : "right" === a
                ? s
                  ? ((i = this.left + l),
                    "near" === o
                      ? (e = "right")
                      : "center" === o
                      ? ((e = "center"), (i -= h / 2))
                      : ((e = "left"), (i -= h)))
                  : ((i = this.left + u),
                    "near" === o
                      ? (e = "left")
                      : "center" === o
                      ? ((e = "center"), (i += h / 2))
                      : ((e = "right"), (i = this.right)))
                : (e = "right"),
              { textAlign: e, x: i }
            );
          },
        },
        {
          key: "_computeLabelArea",
          value: function () {
            if (!this.options.ticks.mirror) {
              var t = this.chart,
                e = this.options.position;
              return "left" === e || "right" === e
                ? {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right,
                  }
                : "top" === e || "bottom" === e
                ? {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width,
                  }
                : void 0;
            }
          },
        },
        {
          key: "drawBackground",
          value: function () {
            var t = this.ctx,
              e = this.options.backgroundColor,
              i = this.left,
              n = this.top,
              a = this.width,
              r = this.height;
            e &&
              (t.save(),
              (t.fillStyle = e),
              t.fillRect(i, n, a, r),
              t.restore());
          },
        },
        {
          key: "getLineWidthForValue",
          value: function (t) {
            var e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            var i = this.ticks.findIndex(function (e) {
              return e.value === t;
            });
            return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
          },
        },
        {
          key: "drawGrid",
          value: function (t) {
            var e,
              i,
              n = this.options.grid,
              a = this.ctx,
              r =
                this._gridLineItems ||
                (this._gridLineItems = this._computeGridLineItems(t)),
              o = function (t, e, i) {
                i.width &&
                  i.color &&
                  (a.save(),
                  (a.lineWidth = i.width),
                  (a.strokeStyle = i.color),
                  a.setLineDash(i.borderDash || []),
                  (a.lineDashOffset = i.borderDashOffset),
                  a.beginPath(),
                  a.moveTo(t.x, t.y),
                  a.lineTo(e.x, e.y),
                  a.stroke(),
                  a.restore());
              };
            if (n.display)
              for (e = 0, i = r.length; e < i; ++e) {
                var s = r[e];
                n.drawOnChartArea &&
                  o({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 }, s),
                  n.drawTicks &&
                    o(
                      { x: s.tx1, y: s.ty1 },
                      { x: s.tx2, y: s.ty2 },
                      {
                        color: s.tickColor,
                        width: s.tickWidth,
                        borderDash: s.tickBorderDash,
                        borderDashOffset: s.tickBorderDashOffset,
                      }
                    );
              }
          },
        },
        {
          key: "drawBorder",
          value: function () {
            var t = this.chart,
              e = this.ctx,
              i = this.options.grid,
              n = i.setContext(this.getContext()),
              a = i.drawBorder ? n.borderWidth : 0;
            if (a) {
              var r,
                o,
                s,
                l,
                u = i.setContext(this.getContext(0)).lineWidth,
                h = this._borderValue;
              this.isHorizontal()
                ? ((r = hi(t, this.left, a) - a / 2),
                  (o = hi(t, this.right, u) + u / 2),
                  (s = l = h))
                : ((s = hi(t, this.top, a) - a / 2),
                  (l = hi(t, this.bottom, u) + u / 2),
                  (r = o = h)),
                e.save(),
                (e.lineWidth = n.borderWidth),
                (e.strokeStyle = n.borderColor),
                e.beginPath(),
                e.moveTo(r, s),
                e.lineTo(o, l),
                e.stroke(),
                e.restore();
            }
          },
        },
        {
          key: "drawLabels",
          value: function (t) {
            if (this.options.ticks.display) {
              var e = this.ctx,
                i = this._computeLabelArea();
              i && vi(e, i);
              var n,
                a,
                r =
                  this._labelItems ||
                  (this._labelItems = this._computeLabelItems(t));
              for (n = 0, a = r.length; n < a; ++n) {
                var o = r[n],
                  s = o.font,
                  l = o.label;
                o.backdrop &&
                  ((e.fillStyle = o.backdrop.color),
                  e.fillRect(
                    o.backdrop.left,
                    o.backdrop.top,
                    o.backdrop.width,
                    o.backdrop.height
                  )),
                  yi(e, l, 0, o.textOffset, s, o);
              }
              i && gi(e);
            }
          },
        },
        {
          key: "drawTitle",
          value: function () {
            var t = this.ctx,
              e = this.options,
              i = e.position,
              n = e.title,
              a = e.reverse;
            if (n.display) {
              var r = Ci(n.font),
                o = Oi(n.padding),
                s = n.align,
                l = r.lineHeight / 2;
              "bottom" === i || "center" === i || Ot(i)
                ? ((l += o.bottom),
                  Pt(n.text) && (l += r.lineHeight * (n.text.length - 1)))
                : (l += o.top);
              var u = (function (t, e, i, n) {
                  var a,
                    r,
                    o,
                    s = t.top,
                    l = t.left,
                    u = t.bottom,
                    h = t.right,
                    c = t.chart,
                    f = c.chartArea,
                    d = c.scales,
                    v = 0,
                    g = u - s,
                    p = h - l;
                  if (t.isHorizontal()) {
                    if (((r = kt(n, l, h)), Ot(i))) {
                      var m = Object.keys(i)[0],
                        y = i[m];
                      o = d[m].getPixelForValue(y) + g - e;
                    } else
                      o =
                        "center" === i
                          ? (f.bottom + f.top) / 2 + g - e
                          : cr(t, i, e);
                    a = h - l;
                  } else {
                    if (Ot(i)) {
                      var b = Object.keys(i)[0],
                        x = i[b];
                      r = d[b].getPixelForValue(x) - p + e;
                    } else
                      r =
                        "center" === i
                          ? (f.left + f.right) / 2 - p + e
                          : cr(t, i, e);
                    (o = kt(n, u, s)), (v = "left" === i ? -Jt : Jt);
                  }
                  return { titleX: r, titleY: o, maxWidth: a, rotation: v };
                })(this, l, i, s),
                h = u.titleX,
                c = u.titleY,
                f = u.maxWidth,
                d = u.rotation;
              yi(t, n.text, 0, 0, r, {
                color: n.color,
                maxWidth: f,
                rotation: d,
                textAlign: pr(s, i, a),
                textBaseline: "middle",
                translation: [h, c],
              });
            }
          },
        },
        {
          key: "draw",
          value: function (t) {
            this._isVisible() &&
              (this.drawBackground(),
              this.drawGrid(t),
              this.drawBorder(),
              this.drawTitle(),
              this.drawLabels(t));
          },
        },
        {
          key: "_layers",
          value: function () {
            var t = this,
              e = this.options,
              i = (e.ticks && e.ticks.z) || 0,
              n = Tt(e.grid && e.grid.z, -1);
            return this._isVisible() && this.draw === a.prototype.draw
              ? [
                  {
                    z: n,
                    draw: function (e) {
                      t.drawBackground(), t.drawGrid(e), t.drawTitle();
                    },
                  },
                  {
                    z: n + 1,
                    draw: function () {
                      t.drawBorder();
                    },
                  },
                  {
                    z: i,
                    draw: function (e) {
                      t.drawLabels(e);
                    },
                  },
                ]
              : [
                  {
                    z: i,
                    draw: function (e) {
                      t.draw(e);
                    },
                  },
                ];
          },
        },
        {
          key: "getMatchingVisibleMetas",
          value: function (t) {
            var e,
              i,
              n = this.chart.getSortedVisibleDatasetMetas(),
              a = this.axis + "AxisID",
              r = [];
            for (e = 0, i = n.length; e < i; ++e) {
              var o = n[e];
              o[a] !== this.id || (t && o.type !== t) || r.push(o);
            }
            return r;
          },
        },
        {
          key: "_resolveTickFontOptions",
          value: function (t) {
            return Ci(this.options.ticks.setContext(this.getContext(t)).font);
          },
        },
        {
          key: "_maxDigits",
          value: function () {
            var t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
          },
        },
      ]),
      a
    );
  })(),
  yr = (function () {
    function t(e, i, a) {
      n(this, t),
        (this.type = e),
        (this.scope = i),
        (this.override = a),
        (this.items = Object.create(null));
    }
    return (
      s(t, [
        {
          key: "isForType",
          value: function (t) {
            return Object.prototype.isPrototypeOf.call(
              this.type.prototype,
              t.prototype
            );
          },
        },
        {
          key: "register",
          value: function (t) {
            var e,
              i = Object.getPrototypeOf(t);
            (function (t) {
              return "id" in t && "defaults" in t;
            })(i) && (e = this.register(i));
            var n = this.items,
              a = t.id,
              r = this.scope + "." + a;
            if (!a) throw new Error("class does not have id: " + t);
            return (
              a in n ||
                ((n[a] = t),
                (function (t, e, i) {
                  var n = Bt(Object.create(null), [
                    i ? si.get(i) : {},
                    si.get(e),
                    t.defaults,
                  ]);
                  si.set(e, n),
                    t.defaultRoutes &&
                      (function (t, e) {
                        Object.keys(e).forEach(function (i) {
                          var n = i.split("."),
                            a = n.pop(),
                            r = [t].concat(n).join("."),
                            o = e[i].split("."),
                            s = o.pop(),
                            l = o.join(".");
                          si.route(r, a, l, s);
                        });
                      })(e, t.defaultRoutes);
                  t.descriptors && si.describe(e, t.descriptors);
                })(t, r, e),
                this.override && si.override(t.id, t.overrides)),
              r
            );
          },
        },
        {
          key: "get",
          value: function (t) {
            return this.items[t];
          },
        },
        {
          key: "unregister",
          value: function (t) {
            var e = this.items,
              i = t.id,
              n = this.scope;
            i in e && delete e[i],
              n &&
                i in si[n] &&
                (delete si[n][i], this.override && delete ii[i]);
          },
        },
      ]),
      t
    );
  })();
var br = (function () {
    function t() {
      n(this, t),
        (this.controllers = new yr(ta, "datasets", !0)),
        (this.elements = new yr(or, "elements")),
        (this.plugins = new yr(Object, "plugins")),
        (this.scales = new yr(mr, "scales")),
        (this._typedRegistries = [
          this.controllers,
          this.scales,
          this.elements,
        ]);
    }
    return (
      s(t, [
        {
          key: "add",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e);
          },
        },
        {
          key: "remove",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e);
          },
        },
        {
          key: "addControllers",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.controllers);
          },
        },
        {
          key: "addElements",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.elements);
          },
        },
        {
          key: "addPlugins",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.plugins);
          },
        },
        {
          key: "addScales",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.scales);
          },
        },
        {
          key: "getController",
          value: function (t) {
            return this._get(t, this.controllers, "controller");
          },
        },
        {
          key: "getElement",
          value: function (t) {
            return this._get(t, this.elements, "element");
          },
        },
        {
          key: "getPlugin",
          value: function (t) {
            return this._get(t, this.plugins, "plugin");
          },
        },
        {
          key: "getScale",
          value: function (t) {
            return this._get(t, this.scales, "scale");
          },
        },
        {
          key: "removeControllers",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.controllers);
          },
        },
        {
          key: "removeElements",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.elements);
          },
        },
        {
          key: "removePlugins",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.plugins);
          },
        },
        {
          key: "removeScales",
          value: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.scales);
          },
        },
        {
          key: "_each",
          value: function (t, e, i) {
            var n = this;
            V(e).forEach(function (e) {
              var a = i || n._getRegistryForType(e);
              i || a.isForType(e) || (a === n.plugins && e.id)
                ? n._exec(t, a, e)
                : Et(e, function (e) {
                    var a = i || n._getRegistryForType(e);
                    n._exec(t, a, e);
                  });
            });
          },
        },
        {
          key: "_exec",
          value: function (t, e, i) {
            var n = $t(t);
            Lt(i["before" + n], [], i), e[t](i), Lt(i["after" + n], [], i);
          },
        },
        {
          key: "_getRegistryForType",
          value: function (t) {
            for (var e = 0; e < this._typedRegistries.length; e++) {
              var i = this._typedRegistries[e];
              if (i.isForType(t)) return i;
            }
            return this.plugins;
          },
        },
        {
          key: "_get",
          value: function (t, e, i) {
            var n = e.get(t);
            if (void 0 === n)
              throw new Error('"' + t + '" is not a registered ' + i + ".");
            return n;
          },
        },
      ]),
      t
    );
  })(),
  xr = new br(),
  _r = (function () {
    function t() {
      n(this, t), (this._init = []);
    }
    return (
      s(t, [
        {
          key: "notify",
          value: function (t, e, i, n) {
            "beforeInit" === e &&
              ((this._init = this._createDescriptors(t, !0)),
              this._notify(this._init, t, "install"));
            var a = n ? this._descriptors(t).filter(n) : this._descriptors(t),
              r = this._notify(a, t, e, i);
            return (
              "destroy" === e &&
                (this._notify(a, t, "stop"),
                this._notify(this._init, t, "uninstall")),
              r
            );
          },
        },
        {
          key: "_notify",
          value: function (t, e, i, n) {
            n = n || {};
            var a,
              r = zn(t);
            try {
              for (r.s(); !(a = r.n()).done; ) {
                var o = a.value,
                  s = o.plugin;
                if (!1 === Lt(s[i], [e, n, o.options], s) && n.cancelable)
                  return !1;
              }
            } catch (t) {
              r.e(t);
            } finally {
              r.f();
            }
            return !0;
          },
        },
        {
          key: "invalidate",
          value: function () {
            Dt(this._cache) ||
              ((this._oldCache = this._cache), (this._cache = void 0));
          },
        },
        {
          key: "_descriptors",
          value: function (t) {
            if (this._cache) return this._cache;
            var e = (this._cache = this._createDescriptors(t));
            return this._notifyStateChanges(t), e;
          },
        },
        {
          key: "_createDescriptors",
          value: function (t, e) {
            var i = t && t.config,
              n = Tt(i.options && i.options.plugins, {}),
              a = (function (t) {
                for (
                  var e = [], i = Object.keys(xr.plugins.items), n = 0;
                  n < i.length;
                  n++
                )
                  e.push(xr.getPlugin(i[n]));
                for (var a = t.plugins || [], r = 0; r < a.length; r++) {
                  var o = a[r];
                  -1 === e.indexOf(o) && e.push(o);
                }
                return e;
              })(i);
            return !1 !== n || e
              ? (function (t, e, i, n) {
                  for (
                    var a = [], r = t.getContext(), o = 0;
                    o < e.length;
                    o++
                  ) {
                    var s = e[o],
                      l = kr(i[s.id], n);
                    null !== l &&
                      a.push({ plugin: s, options: wr(t.config, s, l, r) });
                  }
                  return a;
                })(t, a, n, e)
              : [];
          },
        },
        {
          key: "_notifyStateChanges",
          value: function (t) {
            var e = this._oldCache || [],
              i = this._cache,
              n = function (t, e) {
                return t.filter(function (t) {
                  return !e.some(function (e) {
                    return t.plugin.id === e.plugin.id;
                  });
                });
              };
            this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start");
          },
        },
      ]),
      t
    );
  })();
function kr(t, e) {
  return e || !1 !== t ? (!0 === t ? {} : t) : null;
}
function wr(t, e, i, n) {
  var a = t.pluginScopeKeys(e),
    r = t.getOptionScopes(i, a);
  return t.createResolver(r, n, [""], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0,
  });
}
function Mr(t, e) {
  var i = si.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
  );
}
function Sr(t, e) {
  return "x" === t || "y" === t
    ? t
    : e.axis ||
        ("top" === (i = e.position) || "bottom" === i
          ? "x"
          : "left" === i || "right" === i
          ? "y"
          : void 0) ||
        t.charAt(0).toLowerCase();
  var i;
}
function Dr(t) {
  var e = t.options || (t.options = {});
  (e.plugins = Tt(e.plugins, {})),
    (e.scales = (function (t, e) {
      var i = ii[t.type] || { scales: {} },
        n = e.scales || {},
        a = Mr(t.type, e),
        r = Object.create(null),
        o = Object.create(null);
      return (
        Object.keys(n).forEach(function (t) {
          var e = n[t];
          if (!Ot(e))
            return console.error(
              "Invalid scale configuration for scale: ".concat(t)
            );
          if (e._proxy)
            return console.warn(
              "Ignoring resolver passed as options for scale: ".concat(t)
            );
          var s = Sr(t, e),
            l = (function (t, e) {
              return t === e ? "_index_" : "_value_";
            })(s, a),
            u = i.scales || {};
          (r[s] = r[s] || t),
            (o[t] = Wt(Object.create(null), [{ axis: s }, e, u[s], u[l]]));
        }),
        t.data.datasets.forEach(function (i) {
          var a = i.type || t.type,
            s = i.indexAxis || Mr(a, e),
            l = (ii[a] || {}).scales || {};
          Object.keys(l).forEach(function (t) {
            var e = (function (t, e) {
                var i = t;
                return (
                  "_index_" === t
                    ? (i = e)
                    : "_value_" === t && (i = "x" === e ? "y" : "x"),
                  i
                );
              })(t, s),
              a = i[e + "AxisID"] || r[e] || e;
            (o[a] = o[a] || Object.create(null)),
              Wt(o[a], [{ axis: e }, n[a], l[t]]);
          });
        }),
        Object.keys(o).forEach(function (t) {
          var e = o[t];
          Wt(e, [si.scales[e.type], si.scale]);
        }),
        o
      );
    })(t, e));
}
function Pr(t) {
  return (
    ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
  );
}
var Or = new Map(),
  Cr = new Set();
function Ar(t, e) {
  var i = Or.get(t);
  return i || ((i = e()), Or.set(t, i), Cr.add(i)), i;
}
var Tr = function (t, e, i) {
    var n = Ht(e, i);
    void 0 !== n && t.add(n);
  },
  Rr = (function () {
    function t(e) {
      n(this, t),
        (this._config = (function (t) {
          return ((t = t || {}).data = Pr(t.data)), Dr(t), t;
        })(e)),
        (this._scopeCache = new Map()),
        (this._resolverCache = new Map());
    }
    return (
      s(t, [
        {
          key: "platform",
          get: function () {
            return this._config.platform;
          },
        },
        {
          key: "type",
          get: function () {
            return this._config.type;
          },
          set: function (t) {
            this._config.type = t;
          },
        },
        {
          key: "data",
          get: function () {
            return this._config.data;
          },
          set: function (t) {
            this._config.data = Pr(t);
          },
        },
        {
          key: "options",
          get: function () {
            return this._config.options;
          },
          set: function (t) {
            this._config.options = t;
          },
        },
        {
          key: "plugins",
          get: function () {
            return this._config.plugins;
          },
        },
        {
          key: "update",
          value: function () {
            var t = this._config;
            this.clearCache(), Dr(t);
          },
        },
        {
          key: "clearCache",
          value: function () {
            this._scopeCache.clear(), this._resolverCache.clear();
          },
        },
        {
          key: "datasetScopeKeys",
          value: function (t) {
            return Ar(t, function () {
              return [["datasets.".concat(t), ""]];
            });
          },
        },
        {
          key: "datasetAnimationScopeKeys",
          value: function (t, e) {
            return Ar("".concat(t, ".transition.").concat(e), function () {
              return [
                [
                  "datasets.".concat(t, ".transitions.").concat(e),
                  "transitions.".concat(e),
                ],
                ["datasets.".concat(t), ""],
              ];
            });
          },
        },
        {
          key: "datasetElementScopeKeys",
          value: function (t, e) {
            return Ar("".concat(t, "-").concat(e), function () {
              return [
                [
                  "datasets.".concat(t, ".elements.").concat(e),
                  "datasets.".concat(t),
                  "elements.".concat(e),
                  "",
                ],
              ];
            });
          },
        },
        {
          key: "pluginScopeKeys",
          value: function (t) {
            var e = t.id,
              i = this.type;
            return Ar("".concat(i, "-plugin-").concat(e), function () {
              return [
                ["plugins.".concat(e)].concat(
                  V(t.additionalOptionScopes || [])
                ),
              ];
            });
          },
        },
        {
          key: "_cachedScopes",
          value: function (t, e) {
            var i = this._scopeCache,
              n = i.get(t);
            return (n && !e) || ((n = new Map()), i.set(t, n)), n;
          },
        },
        {
          key: "getOptionScopes",
          value: function (t, e, i) {
            var n = this.options,
              a = this.type,
              r = this._cachedScopes(t, i),
              o = r.get(e);
            if (o) return o;
            var s = new Set();
            e.forEach(function (e) {
              t &&
                (s.add(t),
                e.forEach(function (e) {
                  return Tr(s, t, e);
                })),
                e.forEach(function (t) {
                  return Tr(s, n, t);
                }),
                e.forEach(function (t) {
                  return Tr(s, ii[a] || {}, t);
                }),
                e.forEach(function (t) {
                  return Tr(s, si, t);
                }),
                e.forEach(function (t) {
                  return Tr(s, ni, t);
                });
            });
            var l = Array.from(s);
            return (
              0 === l.length && l.push(Object.create(null)),
              Cr.has(e) && r.set(e, l),
              l
            );
          },
        },
        {
          key: "chartOptionScopes",
          value: function () {
            var t = this.options,
              e = this.type;
            return [t, ii[e] || {}, si.datasets[e] || {}, { type: e }, si, ni];
          },
        },
        {
          key: "resolveNamedOptions",
          value: function (t, e, i) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : [""],
              a = { $shared: !0 },
              r = Lr(this._resolverCache, t, n),
              o = r.resolver,
              s = r.subPrefixes,
              l = o;
            if (Ir(o, e)) {
              (a.$shared = !1), (i = Yt(i) ? i() : i);
              var u = this.createResolver(t, i, s);
              l = Bi(o, i, u);
            }
            var h,
              c = zn(e);
            try {
              for (c.s(); !(h = c.n()).done; ) {
                var f = h.value;
                a[f] = l[f];
              }
            } catch (t) {
              c.e(t);
            } finally {
              c.f();
            }
            return a;
          },
        },
        {
          key: "createResolver",
          value: function (t, e) {
            var i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [""],
              n = arguments.length > 3 ? arguments[3] : void 0,
              a = Lr(this._resolverCache, t, i),
              r = a.resolver;
            return Ot(e) ? Bi(r, e, void 0, n) : r;
          },
        },
      ]),
      t
    );
  })();
function Lr(t, e, i) {
  var n = t.get(e);
  n || ((n = new Map()), t.set(e, n));
  var a = i.join(),
    r = n.get(a);
  r ||
    ((r = {
      resolver: Vi(e, i),
      subPrefixes: i.filter(function (t) {
        return !t.toLowerCase().includes("hover");
      }),
    }),
    n.set(a, r));
  return r;
}
var Er = function (t) {
  return (
    Ot(t) &&
    Object.getOwnPropertyNames(t).reduce(function (e, i) {
      return e || Yt(t[i]);
    }, !1)
  );
};
function Ir(t, e) {
  var i,
    n = Wi(t),
    a = n.isScriptable,
    r = n.isIndexable,
    o = zn(e);
  try {
    for (o.s(); !(i = o.n()).done; ) {
      var s = i.value,
        l = a(s),
        u = r(s),
        h = (u || l) && t[s];
      if ((l && (Yt(h) || Er(h))) || (u && Pt(h))) return !0;
    }
  } catch (t) {
    o.e(t);
  } finally {
    o.f();
  }
  return !1;
}
var zr = ["top", "bottom", "left", "right", "chartArea"];
function Fr(t, e) {
  return "top" === t || "bottom" === t || (-1 === zr.indexOf(t) && "x" === e);
}
function Vr(t, e) {
  return function (i, n) {
    return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
  };
}
function Br(t) {
  var e = t.chart,
    i = e.options.animation;
  e.notifyPlugins("afterRender"), Lt(i && i.onComplete, [t], e);
}
function Wr(t) {
  var e = t.chart,
    i = e.options.animation;
  Lt(i && i.onProgress, [t], e);
}
function Nr(t) {
  return (
    on() && "string" == typeof t
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
var jr = {},
  Hr = function (t) {
    var e = Nr(t);
    return Object.values(jr)
      .filter(function (t) {
        return t.canvas === e;
      })
      .pop();
  };
function $r(t, e, i) {
  for (var n = 0, a = Object.keys(t); n < a.length; n++) {
    var r = a[n],
      o = +r;
    if (o >= e) {
      var s = t[r];
      delete t[r], (i > 0 || o > e) && (t[o + i] = s);
    }
  }
}
var Ur = (function () {
    function t(e, i) {
      var a = this;
      n(this, t);
      var r = (this.config = new Rr(i)),
        o = Nr(e),
        s = Hr(o);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas can be reused."
        );
      var l = r.createResolver(r.chartOptionScopes(), this.getContext());
      (this.platform = new (r.platform ||
        (function (t) {
          return !on() ||
            ("undefined" != typeof OffscreenCanvas &&
              t instanceof OffscreenCanvas)
            ? Ua
            : rr;
        })(o))()),
        this.platform.updateConfig(r);
      var u,
        h,
        c,
        f = this.platform.acquireContext(o, l.aspectRatio),
        d = f && f.canvas,
        v = d && d.height,
        g = d && d.width;
      (this.id = St()),
        (this.ctx = f),
        (this.canvas = d),
        (this.width = g),
        (this.height = v),
        (this._options = l),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new _r()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize =
          ((u = function (t) {
            return a.update(t);
          }),
          (h = l.resizeDelay || 0),
          function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return (
              h
                ? (clearTimeout(c), (c = setTimeout(u, h, e)))
                : u.apply(this, e),
              h
            );
          })),
        (this._dataChanges = []),
        (jr[this.id] = this),
        f && d
          ? (Vn.listen(this, "complete", Br),
            Vn.listen(this, "progress", Wr),
            this._initialize(),
            this.attached && this.update())
          : console.error(
              "Failed to create chart: can't acquire context from the given item"
            );
    }
    return (
      s(t, [
        {
          key: "aspectRatio",
          get: function () {
            var t = this.options,
              e = t.aspectRatio,
              i = t.maintainAspectRatio,
              n = this.width,
              a = this.height,
              r = this._aspectRatio;
            return Dt(e) ? (i && r ? r : a ? n / a : null) : e;
          },
        },
        {
          key: "data",
          get: function () {
            return this.config.data;
          },
          set: function (t) {
            this.config.data = t;
          },
        },
        {
          key: "options",
          get: function () {
            return this._options;
          },
          set: function (t) {
            this.config.options = t;
          },
        },
        {
          key: "_initialize",
          value: function () {
            return (
              this.notifyPlugins("beforeInit"),
              this.options.responsive
                ? this.resize()
                : gn(this, this.options.devicePixelRatio),
              this.bindEvents(),
              this.notifyPlugins("afterInit"),
              this
            );
          },
        },
        {
          key: "clear",
          value: function () {
            return ci(this.canvas, this.ctx), this;
          },
        },
        {
          key: "stop",
          value: function () {
            return Vn.stop(this), this;
          },
        },
        {
          key: "resize",
          value: function (t, e) {
            Vn.running(this)
              ? (this._resizeBeforeDraw = { width: t, height: e })
              : this._resize(t, e);
          },
        },
        {
          key: "_resize",
          value: function (t, e) {
            var i = this.options,
              n = this.canvas,
              a = i.maintainAspectRatio && this.aspectRatio,
              r = this.platform.getMaximumSize(n, t, e, a),
              o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
              s = this.width ? "resize" : "attach";
            (this.width = r.width),
              (this.height = r.height),
              (this._aspectRatio = this.aspectRatio),
              gn(this, o, !0) &&
                (this.notifyPlugins("resize", { size: r }),
                Lt(i.onResize, [this, r], this),
                this.attached && this._doResize(s) && this.render());
          },
        },
        {
          key: "ensureScalesHaveIDs",
          value: function () {
            Et(this.options.scales || {}, function (t, e) {
              t.id = e;
            });
          },
        },
        {
          key: "buildOrUpdateScales",
          value: function () {
            var t = this,
              e = this.options,
              i = e.scales,
              n = this.scales,
              a = Object.keys(n).reduce(function (t, e) {
                return (t[e] = !1), t;
              }, {}),
              r = [];
            i &&
              (r = r.concat(
                Object.keys(i).map(function (t) {
                  var e = i[t],
                    n = Sr(t, e),
                    a = "r" === n,
                    r = "x" === n;
                  return {
                    options: e,
                    dposition: a ? "chartArea" : r ? "bottom" : "left",
                    dtype: a ? "radialLinear" : r ? "category" : "linear",
                  };
                })
              )),
              Et(r, function (i) {
                var r = i.options,
                  o = r.id,
                  s = Sr(o, r),
                  l = Tt(r.type, i.dtype);
                (void 0 !== r.position &&
                  Fr(r.position, s) === Fr(i.dposition)) ||
                  (r.position = i.dposition),
                  (a[o] = !0);
                var u = null;
                o in n && n[o].type === l
                  ? (u = n[o])
                  : ((u = new (xr.getScale(l))({
                      id: o,
                      type: l,
                      ctx: t.ctx,
                      chart: t,
                    })),
                    (n[u.id] = u));
                u.init(r, e);
              }),
              Et(a, function (t, e) {
                t || delete n[e];
              }),
              Et(n, function (e) {
                ja(t, e, e.options), Wa(t, e);
              });
          },
        },
        {
          key: "_updateMetasets",
          value: function () {
            var t = this._metasets,
              e = this.data.datasets.length,
              i = t.length;
            if (
              (t.sort(function (t, e) {
                return t.index - e.index;
              }),
              i > e)
            ) {
              for (var n = e; n < i; ++n) this._destroyDatasetMeta(n);
              t.splice(e, i - e);
            }
            this._sortedMetasets = t.slice(0).sort(Vr("order", "index"));
          },
        },
        {
          key: "_removeUnreferencedMetasets",
          value: function () {
            var t = this,
              e = this._metasets,
              i = this.data.datasets;
            e.length > i.length && delete this._stacks,
              e.forEach(function (e, n) {
                0 ===
                  i.filter(function (t) {
                    return t === e._dataset;
                  }).length && t._destroyDatasetMeta(n);
              });
          },
        },
        {
          key: "buildOrUpdateControllers",
          value: function () {
            var t,
              e,
              i = [],
              n = this.data.datasets;
            for (
              this._removeUnreferencedMetasets(), t = 0, e = n.length;
              t < e;
              t++
            ) {
              var a = n[t],
                r = this.getDatasetMeta(t),
                o = a.type || this.config.type;
              if (
                (r.type &&
                  r.type !== o &&
                  (this._destroyDatasetMeta(t), (r = this.getDatasetMeta(t))),
                (r.type = o),
                (r.indexAxis = a.indexAxis || Mr(o, this.options)),
                (r.order = a.order || 0),
                (r.index = t),
                (r.label = "" + a.label),
                (r.visible = this.isDatasetVisible(t)),
                r.controller)
              )
                r.controller.updateIndex(t), r.controller.linkScales();
              else {
                var s = xr.getController(o),
                  l = si.datasets[o],
                  u = l.datasetElementType,
                  h = l.dataElementType;
                Object.assign(s.prototype, {
                  dataElementType: xr.getElement(h),
                  datasetElementType: u && xr.getElement(u),
                }),
                  (r.controller = new s(this, t)),
                  i.push(r.controller);
              }
            }
            return this._updateMetasets(), i;
          },
        },
        {
          key: "_resetElements",
          value: function () {
            var t = this;
            Et(
              this.data.datasets,
              function (e, i) {
                t.getDatasetMeta(i).controller.reset();
              },
              this
            );
          },
        },
        {
          key: "reset",
          value: function () {
            this._resetElements(), this.notifyPlugins("reset");
          },
        },
        {
          key: "update",
          value: function (t) {
            var e = this.config;
            e.update();
            var i = (this._options = e.createResolver(
                e.chartOptionScopes(),
                this.getContext()
              )),
              n = (this._animationsDisabled = !i.animation);
            if (
              (this._updateScales(),
              this._checkEventBindings(),
              this._updateHiddenIndices(),
              this._plugins.invalidate(),
              !1 !==
                this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
            ) {
              var a = this.buildOrUpdateControllers();
              this.notifyPlugins("beforeElementsUpdate");
              for (
                var r = 0, o = 0, s = this.data.datasets.length;
                o < s;
                o++
              ) {
                var l = this.getDatasetMeta(o).controller,
                  u = !n && -1 === a.indexOf(l);
                l.buildOrUpdateElements(u),
                  (r = Math.max(+l.getMaxOverflow(), r));
              }
              (r = this._minPadding = i.layout.autoPadding ? r : 0),
                this._updateLayout(r),
                n ||
                  Et(a, function (t) {
                    t.reset();
                  }),
                this._updateDatasets(t),
                this.notifyPlugins("afterUpdate", { mode: t }),
                this._layers.sort(Vr("z", "_idx")),
                this._lastEvent && this._eventHandler(this._lastEvent, !0),
                this.render();
            }
          },
        },
        {
          key: "_updateScales",
          value: function () {
            var t = this;
            Et(this.scales, function (e) {
              Na(t, e);
            }),
              this.ensureScalesHaveIDs(),
              this.buildOrUpdateScales();
          },
        },
        {
          key: "_checkEventBindings",
          value: function () {
            var t = this.options,
              e = new Set(Object.keys(this._listeners)),
              i = new Set(t.events);
            (Xt(e, i) && !!this._responsiveListeners === t.responsive) ||
              (this.unbindEvents(), this.bindEvents());
          },
        },
        {
          key: "_updateHiddenIndices",
          value: function () {
            var t,
              e = this._hiddenIndices,
              i = zn(this._getUniformDataChanges() || []);
            try {
              for (i.s(); !(t = i.n()).done; ) {
                var n = t.value,
                  a = n.method,
                  r = n.start,
                  o = n.count;
                $r(e, r, "_removeElements" === a ? -o : o);
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
          },
        },
        {
          key: "_getUniformDataChanges",
          value: function () {
            var t = this._dataChanges;
            if (t && t.length) {
              this._dataChanges = [];
              for (
                var e = this.data.datasets.length,
                  i = function (e) {
                    return new Set(
                      t
                        .filter(function (t) {
                          return t[0] === e;
                        })
                        .map(function (t, e) {
                          return e + "," + t.splice(1).join(",");
                        })
                    );
                  },
                  n = i(0),
                  a = 1;
                a < e;
                a++
              )
                if (!Xt(n, i(a))) return;
              return Array.from(n)
                .map(function (t) {
                  return t.split(",");
                })
                .map(function (t) {
                  return { method: t[1], start: +t[2], count: +t[3] };
                });
            }
          },
        },
        {
          key: "_updateLayout",
          value: function (t) {
            var e = this;
            if (!1 !== this.notifyPlugins("beforeLayout", { cancelable: !0 })) {
              Ha(this, this.width, this.height, t);
              var i = this.chartArea,
                n = i.width <= 0 || i.height <= 0;
              (this._layers = []),
                Et(
                  this.boxes,
                  function (t) {
                    var i;
                    (n && "chartArea" === t.position) ||
                      (t.configure && t.configure(),
                      (i = e._layers).push.apply(i, V(t._layers())));
                  },
                  this
                ),
                this._layers.forEach(function (t, e) {
                  t._idx = e;
                }),
                this.notifyPlugins("afterLayout");
            }
          },
        },
        {
          key: "_updateDatasets",
          value: function (t) {
            if (
              !1 !==
              this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0,
              })
            ) {
              for (var e = 0, i = this.data.datasets.length; e < i; ++e)
                this.getDatasetMeta(e).controller.configure();
              for (var n = 0, a = this.data.datasets.length; n < a; ++n)
                this._updateDataset(n, Yt(t) ? t({ datasetIndex: n }) : t);
              this.notifyPlugins("afterDatasetsUpdate", { mode: t });
            }
          },
        },
        {
          key: "_updateDataset",
          value: function (t, e) {
            var i = this.getDatasetMeta(t),
              n = { meta: i, index: t, mode: e, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", n) &&
              (i.controller._update(e),
              (n.cancelable = !1),
              this.notifyPlugins("afterDatasetUpdate", n));
          },
        },
        {
          key: "render",
          value: function () {
            !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
              (Vn.has(this)
                ? this.attached && !Vn.running(this) && Vn.start(this)
                : (this.draw(), Br({ chart: this })));
          },
        },
        {
          key: "draw",
          value: function () {
            var t;
            if (this._resizeBeforeDraw) {
              var e = this._resizeBeforeDraw,
                i = e.width,
                n = e.height;
              this._resize(i, n), (this._resizeBeforeDraw = null);
            }
            if (
              (this.clear(),
              !(this.width <= 0 || this.height <= 0) &&
                !1 !== this.notifyPlugins("beforeDraw", { cancelable: !0 }))
            ) {
              var a = this._layers;
              for (t = 0; t < a.length && a[t].z <= 0; ++t)
                a[t].draw(this.chartArea);
              for (this._drawDatasets(); t < a.length; ++t)
                a[t].draw(this.chartArea);
              this.notifyPlugins("afterDraw");
            }
          },
        },
        {
          key: "_getSortedDatasetMetas",
          value: function (t) {
            var e,
              i,
              n = this._sortedMetasets,
              a = [];
            for (e = 0, i = n.length; e < i; ++e) {
              var r = n[e];
              (t && !r.visible) || a.push(r);
            }
            return a;
          },
        },
        {
          key: "getSortedVisibleDatasetMetas",
          value: function () {
            return this._getSortedDatasetMetas(!0);
          },
        },
        {
          key: "_drawDatasets",
          value: function () {
            if (
              !1 !==
              this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
            ) {
              for (
                var t = this.getSortedVisibleDatasetMetas(), e = t.length - 1;
                e >= 0;
                --e
              )
                this._drawDataset(t[e]);
              this.notifyPlugins("afterDatasetsDraw");
            }
          },
        },
        {
          key: "_drawDataset",
          value: function (t) {
            var e = this.ctx,
              i = t._clip,
              n = !i.disabled,
              a = this.chartArea,
              r = { meta: t, index: t.index, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetDraw", r) &&
              (n &&
                vi(e, {
                  left: !1 === i.left ? 0 : a.left - i.left,
                  right: !1 === i.right ? this.width : a.right + i.right,
                  top: !1 === i.top ? 0 : a.top - i.top,
                  bottom: !1 === i.bottom ? this.height : a.bottom + i.bottom,
                }),
              t.controller.draw(),
              n && gi(e),
              (r.cancelable = !1),
              this.notifyPlugins("afterDatasetDraw", r));
          },
        },
        {
          key: "getElementsAtEventForMode",
          value: function (t, e, i, n) {
            var a = Pa.modes[e];
            return "function" == typeof a ? a(this, t, i, n) : [];
          },
        },
        {
          key: "getDatasetMeta",
          value: function (t) {
            var e = this.data.datasets[t],
              i = this._metasets,
              n = i
                .filter(function (t) {
                  return t && t._dataset === e;
                })
                .pop();
            return (
              n ||
                ((n = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: (e && e.order) || 0,
                  index: t,
                  _dataset: e,
                  _parsed: [],
                  _sorted: !1,
                }),
                i.push(n)),
              n
            );
          },
        },
        {
          key: "getContext",
          value: function () {
            return (
              this.$context ||
              (this.$context = Ti(null, { chart: this, type: "chart" }))
            );
          },
        },
        {
          key: "getVisibleDatasetCount",
          value: function () {
            return this.getSortedVisibleDatasetMetas().length;
          },
        },
        {
          key: "isDatasetVisible",
          value: function (t) {
            var e = this.data.datasets[t];
            if (!e) return !1;
            var i = this.getDatasetMeta(t);
            return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
          },
        },
        {
          key: "setDatasetVisibility",
          value: function (t, e) {
            this.getDatasetMeta(t).hidden = !e;
          },
        },
        {
          key: "toggleDataVisibility",
          value: function (t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
          },
        },
        {
          key: "getDataVisibility",
          value: function (t) {
            return !this._hiddenIndices[t];
          },
        },
        {
          key: "_updateVisibility",
          value: function (t, e, i) {
            var n = i ? "show" : "hide",
              a = this.getDatasetMeta(t),
              r = a.controller._resolveAnimations(void 0, n);
            Ut(e)
              ? ((a.data[e].hidden = !i), this.update())
              : (this.setDatasetVisibility(t, i),
                r.update(a, { visible: i }),
                this.update(function (e) {
                  return e.datasetIndex === t ? n : void 0;
                }));
          },
        },
        {
          key: "hide",
          value: function (t, e) {
            this._updateVisibility(t, e, !1);
          },
        },
        {
          key: "show",
          value: function (t, e) {
            this._updateVisibility(t, e, !0);
          },
        },
        {
          key: "_destroyDatasetMeta",
          value: function (t) {
            var e = this._metasets[t];
            e && e.controller && e.controller._destroy(),
              delete this._metasets[t];
          },
        },
        {
          key: "_stop",
          value: function () {
            var t, e;
            for (
              this.stop(),
                Vn.remove(this),
                t = 0,
                e = this.data.datasets.length;
              t < e;
              ++t
            )
              this._destroyDatasetMeta(t);
          },
        },
        {
          key: "destroy",
          value: function () {
            var t = this.canvas,
              e = this.ctx;
            this._stop(),
              this.config.clearCache(),
              t &&
                (this.unbindEvents(),
                ci(t, e),
                this.platform.releaseContext(e),
                (this.canvas = null),
                (this.ctx = null)),
              this.notifyPlugins("destroy"),
              delete jr[this.id];
          },
        },
        {
          key: "toBase64Image",
          value: function () {
            var t;
            return (t = this.canvas).toDataURL.apply(t, arguments);
          },
        },
        {
          key: "bindEvents",
          value: function () {
            this.bindUserEvents(),
              this.options.responsive
                ? this.bindResponsiveEvents()
                : (this.attached = !0);
          },
        },
        {
          key: "bindUserEvents",
          value: function () {
            var t = this,
              e = this._listeners,
              i = this.platform,
              n = function (e, i, n) {
                (e.offsetX = i), (e.offsetY = n), t._eventHandler(e);
              };
            Et(this.options.events, function (a) {
              return (function (n, a) {
                i.addEventListener(t, n, a), (e[n] = a);
              })(a, n);
            });
          },
        },
        {
          key: "bindResponsiveEvents",
          value: function () {
            var t = this;
            this._responsiveListeners || (this._responsiveListeners = {});
            var e,
              i = this._responsiveListeners,
              n = this.platform,
              a = function (e, a) {
                n.addEventListener(t, e, a), (i[e] = a);
              },
              r = function (e, a) {
                i[e] && (n.removeEventListener(t, e, a), delete i[e]);
              },
              o = function (e, i) {
                t.canvas && t.resize(e, i);
              },
              s = function i() {
                r("attach", i),
                  (t.attached = !0),
                  t.resize(),
                  a("resize", o),
                  a("detach", e);
              };
            (e = function () {
              (t.attached = !1),
                r("resize", o),
                t._stop(),
                t._resize(0, 0),
                a("attach", s);
            }),
              n.isAttached(this.canvas) ? s() : e();
          },
        },
        {
          key: "unbindEvents",
          value: function () {
            var t = this;
            Et(this._listeners, function (e, i) {
              t.platform.removeEventListener(t, i, e);
            }),
              (this._listeners = {}),
              Et(this._responsiveListeners, function (e, i) {
                t.platform.removeEventListener(t, i, e);
              }),
              (this._responsiveListeners = void 0);
          },
        },
        {
          key: "updateHoverStyle",
          value: function (t, e, i) {
            var n,
              a,
              r,
              o = i ? "set" : "remove";
            for (
              "dataset" === e &&
                this.getDatasetMeta(t[0].datasetIndex).controller[
                  "_" + o + "DatasetHoverStyle"
                ](),
                a = 0,
                r = t.length;
              a < r;
              ++a
            ) {
              var s =
                (n = t[a]) && this.getDatasetMeta(n.datasetIndex).controller;
              s && s[o + "HoverStyle"](n.element, n.datasetIndex, n.index);
            }
          },
        },
        {
          key: "getActiveElements",
          value: function () {
            return this._active || [];
          },
        },
        {
          key: "setActiveElements",
          value: function (t) {
            var e = this,
              i = this._active || [],
              n = t.map(function (t) {
                var i = t.datasetIndex,
                  n = t.index,
                  a = e.getDatasetMeta(i);
                if (!a) throw new Error("No dataset found at index " + i);
                return { datasetIndex: i, element: a.data[n], index: n };
              });
            !It(n, i) && ((this._active = n), this._updateHoverStyles(n, i));
          },
        },
        {
          key: "notifyPlugins",
          value: function (t, e, i) {
            return this._plugins.notify(this, t, e, i);
          },
        },
        {
          key: "_updateHoverStyles",
          value: function (t, e, i) {
            var n = this.options.hover,
              a = function (t, e) {
                return t.filter(function (t) {
                  return !e.some(function (e) {
                    return (
                      t.datasetIndex === e.datasetIndex && t.index === e.index
                    );
                  });
                });
              },
              r = a(e, t),
              o = i ? t : a(t, e);
            r.length && this.updateHoverStyle(r, n.mode, !1),
              o.length && n.mode && this.updateHoverStyle(o, n.mode, !0);
          },
        },
        {
          key: "_eventHandler",
          value: function (t, e) {
            var i = this,
              n = { event: t, replay: e, cancelable: !0 },
              a = function (e) {
                return (e.options.events || i.options.events).includes(
                  t.native.type
                );
              };
            if (!1 !== this.notifyPlugins("beforeEvent", n, a)) {
              var r = this._handleEvent(t, e);
              return (
                (n.cancelable = !1),
                this.notifyPlugins("afterEvent", n, a),
                (r || n.changed) && this.render(),
                this
              );
            }
          },
        },
        {
          key: "_handleEvent",
          value: function (t, e) {
            var i,
              n = this._active,
              a = void 0 === n ? [] : n,
              r = this.options,
              o = r.hover,
              s = e,
              l = [],
              u = null;
            return (
              "mouseout" !== t.type &&
                ((l = this.getElementsAtEventForMode(t, o.mode, o, s)),
                (u = "click" === t.type ? this._lastEvent : t)),
              (this._lastEvent = null),
              di(t, this.chartArea, this._minPadding) &&
                (Lt(r.onHover, [t, l, this], this),
                ("mouseup" !== t.type &&
                  "click" !== t.type &&
                  "contextmenu" !== t.type) ||
                  Lt(r.onClick, [t, l, this], this)),
              ((i = !It(l, a)) || e) &&
                ((this._active = l), this._updateHoverStyles(l, a, e)),
              (this._lastEvent = u),
              i
            );
          },
        },
      ]),
      t
    );
  })(),
  Yr = function () {
    return Et(Ur.instances, function (t) {
      return t._plugins.invalidate();
    });
  };
function Xr(t, e, i) {
  var n = e.startAngle,
    a = e.pixelMargin,
    r = e.x,
    o = e.y,
    s = e.outerRadius,
    l = e.innerRadius,
    u = a / s;
  t.beginPath(),
    t.arc(r, o, s, n - u, i + u),
    l > a
      ? ((u = a / l), t.arc(r, o, l, i + u, n - u, !0))
      : t.arc(r, o, a, i + Jt, n - Jt),
    t.closePath(),
    t.clip();
}
function qr(t, e, i, n) {
  var a = Si(t.options.borderRadius, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd",
    ]),
    r = (i - e) / 2,
    o = Math.min(r, (n * e) / 2),
    s = function (t) {
      var e = ((i - Math.min(r, t)) * n) / 2;
      return ge(t, 0, Math.min(r, e));
    };
  return {
    outerStart: s(a.outerStart),
    outerEnd: s(a.outerEnd),
    innerStart: ge(a.innerStart, 0, o),
    innerEnd: ge(a.innerEnd, 0, o),
  };
}
function Kr(t, e, i, n) {
  return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
}
function Gr(t, e, i, n, a) {
  var r = e.x,
    o = e.y,
    s = e.startAngle,
    l = e.pixelMargin,
    u = e.innerRadius,
    h = Math.max(e.outerRadius + n + i - l, 0),
    c = u > 0 ? u + n + i + l : 0,
    f = 0,
    d = a - s;
  if (n) {
    var v = ((u > 0 ? u - n : 0) + (h > 0 ? h - n : 0)) / 2;
    f = (d - (0 !== v ? (d * v) / (v + n) : d)) / 2;
  }
  var g = (d - Math.max(0.001, d * h - i / qt) / h) / 2,
    p = s + g + f,
    m = a - g - f,
    y = qr(e, c, h, m - p),
    b = y.outerStart,
    x = y.outerEnd,
    _ = y.innerStart,
    k = y.innerEnd,
    w = h - b,
    M = h - x,
    S = p + b / w,
    D = m - x / M,
    P = c + _,
    O = c + k,
    C = p + _ / P,
    A = m - k / O;
  if ((t.beginPath(), t.arc(r, o, h, S, D), x > 0)) {
    var T = Kr(M, D, r, o);
    t.arc(T.x, T.y, x, D, m + Jt);
  }
  var R = Kr(O, m, r, o);
  if ((t.lineTo(R.x, R.y), k > 0)) {
    var L = Kr(O, A, r, o);
    t.arc(L.x, L.y, k, m + Jt, A + Math.PI);
  }
  if ((t.arc(r, o, c, m - k / c, p + _ / c, !0), _ > 0)) {
    var E = Kr(P, C, r, o);
    t.arc(E.x, E.y, _, C + Math.PI, p - Jt);
  }
  var I = Kr(w, p, r, o);
  if ((t.lineTo(I.x, I.y), b > 0)) {
    var z = Kr(w, S, r, o);
    t.arc(z.x, z.y, b, p - Jt, S);
  }
  t.closePath();
}
function Zr(t, e, i, n, a) {
  var r = e.options,
    o = "inner" === r.borderAlign;
  r.borderWidth &&
    (o
      ? ((t.lineWidth = 2 * r.borderWidth), (t.lineJoin = "round"))
      : ((t.lineWidth = r.borderWidth), (t.lineJoin = "bevel")),
    e.fullCircles &&
      (function (t, e, i) {
        var n,
          a = e.x,
          r = e.y,
          o = e.startAngle,
          s = e.pixelMargin,
          l = e.fullCircles,
          u = Math.max(e.outerRadius - s, 0),
          h = e.innerRadius + s;
        for (
          i && Xr(t, e, o + Kt),
            t.beginPath(),
            t.arc(a, r, h, o + Kt, o, !0),
            n = 0;
          n < l;
          ++n
        )
          t.stroke();
        for (t.beginPath(), t.arc(a, r, u, o, o + Kt), n = 0; n < l; ++n)
          t.stroke();
      })(t, e, o),
    o && Xr(t, e, a),
    Gr(t, e, i, n, a),
    t.stroke());
}
Object.defineProperties(Ur, {
  defaults: { enumerable: true, value: si },
  instances: { enumerable: true, value: jr },
  overrides: { enumerable: true, value: ii },
  registry: { enumerable: true, value: xr },
  version: { enumerable: true, value: "3.6.2" },
  getChart: { enumerable: true, value: Hr },
  register: {
    enumerable: true,
    value: function () {
      xr.add.apply(xr, arguments), Yr();
    },
  },
  unregister: {
    enumerable: true,
    value: function () {
      xr.remove.apply(xr, arguments), Yr();
    },
  },
});
var Qr = (function (e) {
  t(a, or);
  var i = In(a);
  function a(t) {
    var e;
    return (
      n(this, a),
      ((e = i.call(this)).options = void 0),
      (e.circumference = void 0),
      (e.startAngle = void 0),
      (e.endAngle = void 0),
      (e.innerRadius = void 0),
      (e.outerRadius = void 0),
      (e.pixelMargin = 0),
      (e.fullCircles = 0),
      t && Object.assign(o(e), t),
      e
    );
  }
  return (
    s(a, [
      {
        key: "inRange",
        value: function (t, e, i) {
          var n = (function (t, e) {
              var i = e.x - t.x,
                n = e.y - t.y,
                a = Math.sqrt(i * i + n * n),
                r = Math.atan2(n, i);
              return r < -0.5 * qt && (r += Kt), { angle: r, distance: a };
            })(this.getProps(["x", "y"], i), { x: t, y: e }),
            a = n.angle,
            r = n.distance,
            o = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              i
            ),
            s = o.startAngle,
            l = o.endAngle,
            u = o.innerRadius,
            h = o.outerRadius,
            c = o.circumference,
            f = this.options.spacing / 2,
            d = Tt(c, l - s) >= Kt || ve(a, s, l),
            v = pe(r, u + f, h + f);
          return d && v;
        },
      },
      {
        key: "getCenterPoint",
        value: function (t) {
          var e = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              t
            ),
            i = e.x,
            n = e.y,
            a = e.startAngle,
            r = e.endAngle,
            o = e.innerRadius,
            s = e.outerRadius,
            l = this.options,
            u = l.offset,
            h = (a + r) / 2,
            c = (o + s + l.spacing + u) / 2;
          return { x: i + Math.cos(h) * c, y: n + Math.sin(h) * c };
        },
      },
      {
        key: "tooltipPosition",
        value: function (t) {
          return this.getCenterPoint(t);
        },
      },
      {
        key: "draw",
        value: function (t) {
          var e = this.options,
            i = this.circumference,
            n = (e.offset || 0) / 2,
            a = (e.spacing || 0) / 2;
          if (
            ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
            (this.fullCircles = i > Kt ? Math.floor(i / Kt) : 0),
            !(0 === i || this.innerRadius < 0 || this.outerRadius < 0))
          ) {
            t.save();
            var r = 0;
            if (n) {
              r = n / 2;
              var o = (this.startAngle + this.endAngle) / 2;
              t.translate(Math.cos(o) * r, Math.sin(o) * r),
                this.circumference >= qt && (r = n);
            }
            (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
            var s = (function (t, e, i, n) {
              var a = e.fullCircles,
                r = e.startAngle,
                o = e.circumference,
                s = e.endAngle;
              if (a) {
                Gr(t, e, i, n, r + Kt);
                for (var l = 0; l < a; ++l) t.fill();
                isNaN(o) || ((s = r + (o % Kt)), o % Kt == 0 && (s += Kt));
              }
              return Gr(t, e, i, n, s), t.fill(), s;
            })(t, this, r, a);
            Zr(t, this, r, a, s), t.restore();
          }
        },
      },
    ]),
    a
  );
})();
function Jr(t, e) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
  (t.lineCap = Tt(i.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(Tt(i.borderDash, e.borderDash)),
    (t.lineDashOffset = Tt(i.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = Tt(i.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = Tt(i.borderWidth, e.borderWidth)),
    (t.strokeStyle = Tt(i.borderColor, e.borderColor));
}
function to(t, e, i) {
  t.lineTo(i.x, i.y);
}
function eo(t, e) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    n = t.length,
    a = i.start,
    r = void 0 === a ? 0 : a,
    o = i.end,
    s = void 0 === o ? n - 1 : o,
    l = e.start,
    u = e.end,
    h = Math.max(r, l),
    c = Math.min(s, u),
    f = (r < l && s < l) || (r > u && s > u);
  return {
    count: n,
    start: h,
    loop: e.loop,
    ilen: c < h && !f ? n + c - h : c - h,
  };
}
function io(t, e, i, n) {
  var a,
    r,
    o,
    s = e.points,
    l = e.options,
    u = eo(s, i, n),
    h = u.count,
    c = u.start,
    f = u.loop,
    d = u.ilen,
    v = (function (t) {
      return t.stepped
        ? pi
        : t.tension || "monotone" === t.cubicInterpolationMode
        ? mi
        : to;
    })(l),
    g = n || {},
    p = g.move,
    m = void 0 === p || p,
    y = g.reverse;
  for (a = 0; a <= d; ++a)
    (r = s[(c + (y ? d - a : a)) % h]).skip ||
      (m ? (t.moveTo(r.x, r.y), (m = !1)) : v(t, o, r, y, l.stepped), (o = r));
  return f && v(t, o, (r = s[(c + (y ? d : 0)) % h]), y, l.stepped), !!f;
}
function no(t, e, i, n) {
  var a,
    r,
    o,
    s,
    l,
    u,
    h = e.points,
    c = eo(h, i, n),
    f = c.count,
    d = c.start,
    v = c.ilen,
    g = n || {},
    p = g.move,
    m = void 0 === p || p,
    y = g.reverse,
    b = 0,
    x = 0,
    _ = function (t) {
      return (d + (y ? v - t : t)) % f;
    },
    k = function () {
      s !== l && (t.lineTo(b, l), t.lineTo(b, s), t.lineTo(b, u));
    };
  for (m && ((r = h[_(0)]), t.moveTo(r.x, r.y)), a = 0; a <= v; ++a)
    if (!(r = h[_(a)]).skip) {
      var w = r.x,
        M = r.y,
        S = 0 | w;
      S === o
        ? (M < s ? (s = M) : M > l && (l = M), (b = (x * b + w) / ++x))
        : (k(), t.lineTo(w, M), (o = S), (x = 0), (s = l = M)),
        (u = M);
    }
  k();
}
function ao(t) {
  var e = t.options,
    i = e.borderDash && e.borderDash.length;
  return !(
    t._decimated ||
    t._loop ||
    e.tension ||
    "monotone" === e.cubicInterpolationMode ||
    e.stepped ||
    i
  )
    ? no
    : io;
}
(Qr.id = "arc"),
  (Qr.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
  }),
  (Qr.defaultRoutes = { backgroundColor: "backgroundColor" });
var ro = "function" == typeof Path2D;
function oo(t, e, i, n) {
  ro && !e.options.segment
    ? (function (t, e, i, n) {
        var a = e._path;
        a || ((a = e._path = new Path2D()), e.path(a, i, n) && a.closePath()),
          Jr(t, e.options),
          t.stroke(a);
      })(t, e, i, n)
    : (function (t, e, i, n) {
        var a,
          r = e.segments,
          o = e.options,
          s = ao(e),
          l = zn(r);
        try {
          for (l.s(); !(a = l.n()).done; ) {
            var u = a.value;
            Jr(t, o, u.style),
              t.beginPath(),
              s(t, e, u, { start: i, end: i + n - 1 }) && t.closePath(),
              t.stroke();
          }
        } catch (t) {
          l.e(t);
        } finally {
          l.f();
        }
      })(t, e, i, n);
}
var so = (function (e) {
  t(a, or);
  var i = In(a);
  function a(t) {
    var e;
    return (
      n(this, a),
      ((e = i.call(this)).animated = !0),
      (e.options = void 0),
      (e._chart = void 0),
      (e._loop = void 0),
      (e._fullLoop = void 0),
      (e._path = void 0),
      (e._points = void 0),
      (e._segments = void 0),
      (e._decimated = !1),
      (e._pointsUpdated = !1),
      (e._datasetIndex = void 0),
      t && Object.assign(o(e), t),
      e
    );
  }
  return (
    s(a, [
      {
        key: "updateControlPoints",
        value: function (t, e) {
          var i = this.options;
          if (
            (i.tension || "monotone" === i.cubicInterpolationMode) &&
            !i.stepped &&
            !this._pointsUpdated
          ) {
            var n = i.spanGaps ? this._loop : this._fullLoop;
            rn(this._points, i, t, n, e), (this._pointsUpdated = !0);
          }
        },
      },
      {
        key: "points",
        get: function () {
          return this._points;
        },
        set: function (t) {
          (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
        },
      },
      {
        key: "segments",
        get: function () {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              var i = t.points,
                n = t.options.spanGaps,
                a = i.length;
              if (!a) return [];
              var r = !!t._loop,
                o = (function (t, e, i, n) {
                  var a = 0,
                    r = e - 1;
                  if (i && !n) for (; a < e && !t[a].skip; ) a++;
                  for (; a < e && t[a].skip; ) a++;
                  for (a %= e, i && (r += a); r > a && t[r % e].skip; ) r--;
                  return { start: a, end: (r %= e) };
                })(i, a, r, n),
                s = o.start,
                l = o.end;
              return An(
                t,
                !0 === n
                  ? [{ start: s, end: l, loop: r }]
                  : (function (t, e, i, n) {
                      var a,
                        r = t.length,
                        o = [],
                        s = e,
                        l = t[e];
                      for (a = e + 1; a <= i; ++a) {
                        var u = t[a % r];
                        u.skip || u.stop
                          ? l.skip ||
                            ((n = !1),
                            o.push({ start: e % r, end: (a - 1) % r, loop: n }),
                            (e = s = u.stop ? a : null))
                          : ((s = a), l.skip && (e = a)),
                          (l = u);
                      }
                      return (
                        null !== s &&
                          o.push({ start: e % r, end: s % r, loop: n }),
                        o
                      );
                    })(
                      i,
                      s,
                      l < s ? l + a : l,
                      !!t._fullLoop && 0 === s && l === a - 1
                    ),
                i,
                e
              );
            })(this, this.options.segment))
          );
        },
      },
      {
        key: "first",
        value: function () {
          var t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        },
      },
      {
        key: "last",
        value: function () {
          var t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end];
        },
      },
      {
        key: "interpolate",
        value: function (t, e) {
          var i = this.options,
            n = t[e],
            a = this.points,
            r = Cn(this, { property: e, start: n, end: n });
          if (r.length) {
            var o,
              s,
              l = [],
              u = (function (t) {
                return t.stepped
                  ? bn
                  : t.tension || "monotone" === t.cubicInterpolationMode
                  ? xn
                  : yn;
              })(i);
            for (o = 0, s = r.length; o < s; ++o) {
              var h = r[o],
                c = h.start,
                f = h.end,
                d = a[c],
                v = a[f];
              if (d !== v) {
                var g = u(
                  d,
                  v,
                  Math.abs((n - d[e]) / (v[e] - d[e])),
                  i.stepped
                );
                (g[e] = t[e]), l.push(g);
              } else l.push(d);
            }
            return 1 === l.length ? l[0] : l;
          }
        },
      },
      {
        key: "pathSegment",
        value: function (t, e, i) {
          return ao(this)(t, this, e, i);
        },
      },
      {
        key: "path",
        value: function (t, e, i) {
          var n = this.segments,
            a = ao(this),
            r = this._loop;
          (e = e || 0), (i = i || this.points.length - e);
          var o,
            s = zn(n);
          try {
            for (s.s(); !(o = s.n()).done; ) {
              r &= a(t, this, o.value, { start: e, end: e + i - 1 });
            }
          } catch (t) {
            s.e(t);
          } finally {
            s.f();
          }
          return !!r;
        },
      },
      {
        key: "draw",
        value: function (t, e, i, n) {
          var a = this.options || {};
          (this.points || []).length &&
            a.borderWidth &&
            (t.save(), oo(t, this, i, n), t.restore()),
            this.animated &&
              ((this._pointsUpdated = !1), (this._path = void 0));
        },
      },
    ]),
    a
  );
})();
function lo(t, e, i, n) {
  var a = t.options,
    r = t.getProps([i], n)[i];
  return Math.abs(e - r) < a.radius + a.hitRadius;
}
(so.id = "line"),
  (so.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  (so.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  (so.descriptors = {
    _scriptable: !0,
    _indexable: function (t) {
      return "borderDash" !== t && "fill" !== t;
    },
  });
var uo = (function (e) {
  t(a, or);
  var i = In(a);
  function a(t) {
    var e;
    return (
      n(this, a),
      ((e = i.call(this)).options = void 0),
      (e.parsed = void 0),
      (e.skip = void 0),
      (e.stop = void 0),
      t && Object.assign(o(e), t),
      e
    );
  }
  return (
    s(a, [
      {
        key: "inRange",
        value: function (t, e, i) {
          var n = this.options,
            a = this.getProps(["x", "y"], i),
            r = a.x,
            o = a.y;
          return (
            Math.pow(t - r, 2) + Math.pow(e - o, 2) <
            Math.pow(n.hitRadius + n.radius, 2)
          );
        },
      },
      {
        key: "inXRange",
        value: function (t, e) {
          return lo(this, t, "x", e);
        },
      },
      {
        key: "inYRange",
        value: function (t, e) {
          return lo(this, t, "y", e);
        },
      },
      {
        key: "getCenterPoint",
        value: function (t) {
          var e = this.getProps(["x", "y"], t);
          return { x: e.x, y: e.y };
        },
      },
      {
        key: "size",
        value: function (t) {
          var e = (t = t || this.options || {}).radius || 0;
          return (
            2 *
            ((e = Math.max(e, (e && t.hoverRadius) || 0)) +
              ((e && t.borderWidth) || 0))
          );
        },
      },
      {
        key: "draw",
        value: function (t, e) {
          var i = this.options;
          this.skip ||
            i.radius < 0.1 ||
            !di(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            fi(t, i, this.x, this.y));
        },
      },
      {
        key: "getRange",
        value: function () {
          var t = this.options || {};
          return t.radius + t.hitRadius;
        },
      },
    ]),
    a
  );
})();
function ho(t, e) {
  var i,
    n,
    a,
    r,
    o,
    s = t.getProps(["x", "y", "base", "width", "height"], e),
    l = s.x,
    u = s.y,
    h = s.base,
    c = s.width,
    f = s.height;
  return (
    t.horizontal
      ? ((o = f / 2),
        (i = Math.min(l, h)),
        (n = Math.max(l, h)),
        (a = u - o),
        (r = u + o))
      : ((i = l - (o = c / 2)),
        (n = l + o),
        (a = Math.min(u, h)),
        (r = Math.max(u, h))),
    { left: i, top: a, right: n, bottom: r }
  );
}
function co(t, e, i, n) {
  return t ? 0 : ge(e, i, n);
}
function fo(t) {
  var e = ho(t),
    i = e.right - e.left,
    n = e.bottom - e.top,
    a = (function (t, e, i) {
      var n = t.options.borderWidth,
        a = t.borderSkipped,
        r = Di(n);
      return {
        t: co(a.top, r.top, 0, i),
        r: co(a.right, r.right, 0, e),
        b: co(a.bottom, r.bottom, 0, i),
        l: co(a.left, r.left, 0, e),
      };
    })(t, i / 2, n / 2),
    r = (function (t, e, i) {
      var n = t.getProps(["enableBorderRadius"]).enableBorderRadius,
        a = t.options.borderRadius,
        r = Pi(a),
        o = Math.min(e, i),
        s = t.borderSkipped,
        l = n || Ot(a);
      return {
        topLeft: co(!l || s.top || s.left, r.topLeft, 0, o),
        topRight: co(!l || s.top || s.right, r.topRight, 0, o),
        bottomLeft: co(!l || s.bottom || s.left, r.bottomLeft, 0, o),
        bottomRight: co(!l || s.bottom || s.right, r.bottomRight, 0, o),
      };
    })(t, i / 2, n / 2);
  return {
    outer: { x: e.left, y: e.top, w: i, h: n, radius: r },
    inner: {
      x: e.left + a.l,
      y: e.top + a.t,
      w: i - a.l - a.r,
      h: n - a.t - a.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(a.t, a.l)),
        topRight: Math.max(0, r.topRight - Math.max(a.t, a.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(a.b, a.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(a.b, a.r)),
      },
    },
  };
}
function vo(t, e, i, n) {
  var a = null === e,
    r = null === i,
    o = t && !(a && r) && ho(t, n);
  return o && (a || pe(e, o.left, o.right)) && (r || pe(i, o.top, o.bottom));
}
function go(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function po(t, e) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    n = t.x !== i.x ? -e : 0,
    a = t.y !== i.y ? -e : 0,
    r = (t.x + t.w !== i.x + i.w ? e : 0) - n,
    o = (t.y + t.h !== i.y + i.h ? e : 0) - a;
  return { x: t.x + n, y: t.y + a, w: t.w + r, h: t.h + o, radius: t.radius };
}
(uo.id = "point"),
  (uo.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  (uo.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
var mo = (function (e) {
  t(a, or);
  var i = In(a);
  function a(t) {
    var e;
    return (
      n(this, a),
      ((e = i.call(this)).options = void 0),
      (e.horizontal = void 0),
      (e.base = void 0),
      (e.width = void 0),
      (e.height = void 0),
      (e.inflateAmount = void 0),
      t && Object.assign(o(e), t),
      e
    );
  }
  return (
    s(a, [
      {
        key: "draw",
        value: function (t) {
          var e,
            i = this.inflateAmount,
            n = this.options,
            a = n.borderColor,
            r = n.backgroundColor,
            o = fo(this),
            s = o.inner,
            l = o.outer,
            u =
              (e = l.radius).topLeft ||
              e.topRight ||
              e.bottomLeft ||
              e.bottomRight
                ? _i
                : go;
          t.save(),
            (l.w === s.w && l.h === s.h) ||
              (t.beginPath(),
              u(t, po(l, i, s)),
              t.clip(),
              u(t, po(s, -i, l)),
              (t.fillStyle = a),
              t.fill("evenodd")),
            t.beginPath(),
            u(t, po(s, i)),
            (t.fillStyle = r),
            t.fill(),
            t.restore();
        },
      },
      {
        key: "inRange",
        value: function (t, e, i) {
          return vo(this, t, e, i);
        },
      },
      {
        key: "inXRange",
        value: function (t, e) {
          return vo(this, t, null, e);
        },
      },
      {
        key: "inYRange",
        value: function (t, e) {
          return vo(this, null, t, e);
        },
      },
      {
        key: "getCenterPoint",
        value: function (t) {
          var e = this.getProps(["x", "y", "base", "horizontal"], t),
            i = e.x,
            n = e.y,
            a = e.base,
            r = e.horizontal;
          return { x: r ? (i + a) / 2 : i, y: r ? n : (n + a) / 2 };
        },
      },
      {
        key: "getRange",
        value: function (t) {
          return "x" === t ? this.width / 2 : this.height / 2;
        },
      },
    ]),
    a
  );
})();
(mo.id = "bar"),
  (mo.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  (mo.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
var yo = Object.freeze({
  __proto__: null,
  ArcElement: Qr,
  LineElement: so,
  PointElement: uo,
  BarElement: mo,
});
function bo(t) {
  if (t._decimated) {
    var e = t._data;
    delete t._decimated,
      delete t._data,
      Object.defineProperty(t, "data", { value: e });
  }
}
function xo(t) {
  t.data.datasets.forEach(function (t) {
    bo(t);
  });
}
var _o = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: function (t, e, i) {
    if (i.enabled) {
      var n = t.width;
      t.data.datasets.forEach(function (e, a) {
        var r = e._data,
          o = e.indexAxis,
          s = t.getDatasetMeta(a),
          l = r || e.data;
        if ("y" !== Ai([o, t.options.indexAxis]) && "line" === s.type) {
          var u = t.scales[s.xAxisID];
          if (
            ("linear" === u.type || "time" === u.type) &&
            !t.options.parsing
          ) {
            var h = (function (t, e) {
                var i = e.length,
                  n = 0,
                  a = t.iScale,
                  r = a.getUserBounds(),
                  o = r.min,
                  s = r.max,
                  l = r.minDefined,
                  u = r.maxDefined;
                return (
                  l && (n = ge(Li(e, a.axis, o).lo, 0, i - 1)),
                  {
                    start: n,
                    count: u ? ge(Li(e, a.axis, s).hi + 1, n, i) - n : i - n,
                  }
                );
              })(s, l),
              c = h.start,
              f = h.count;
            if (f <= (i.threshold || 4 * n)) bo(e);
            else {
              var d;
              switch (
                (Dt(r) &&
                  ((e._data = l),
                  delete e.data,
                  Object.defineProperty(e, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this._decimated;
                    },
                    set: function (t) {
                      this._data = t;
                    },
                  })),
                i.algorithm)
              ) {
                case "lttb":
                  d = (function (t, e, i, n, a) {
                    var r = a.samples || n;
                    if (r >= i) return t.slice(e, e + i);
                    var o,
                      s,
                      l,
                      u,
                      h,
                      c = [],
                      f = (i - 2) / (r - 2),
                      d = 0,
                      v = e + i - 1,
                      g = e;
                    for (c[d++] = t[g], o = 0; o < r - 2; o++) {
                      var p = 0,
                        m = 0,
                        y = void 0,
                        b = Math.floor((o + 1) * f) + 1 + e,
                        x = Math.min(Math.floor((o + 2) * f) + 1, i) + e,
                        _ = x - b;
                      for (y = b; y < x; y++) (p += t[y].x), (m += t[y].y);
                      (p /= _), (m /= _);
                      var k = Math.floor(o * f) + 1 + e,
                        w = Math.min(Math.floor((o + 1) * f) + 1, i) + e,
                        M = t[g],
                        S = M.x,
                        D = M.y;
                      for (l = u = -1, y = k; y < w; y++)
                        (u =
                          0.5 *
                          Math.abs(
                            (S - p) * (t[y].y - D) - (S - t[y].x) * (m - D)
                          )) > l && ((l = u), (s = t[y]), (h = y));
                      (c[d++] = s), (g = h);
                    }
                    return (c[d++] = t[v]), c;
                  })(l, c, f, n, i);
                  break;
                case "min-max":
                  d = (function (t, e, i, n) {
                    var a,
                      r,
                      o,
                      s,
                      l,
                      u,
                      h,
                      c,
                      f,
                      d,
                      v = 0,
                      g = 0,
                      p = [],
                      m = e + i - 1,
                      y = t[e].x,
                      b = t[m].x - y;
                    for (a = e; a < e + i; ++a) {
                      (o = (((r = t[a]).x - y) / b) * n), (s = r.y);
                      var x = 0 | o;
                      if (x === l)
                        s < f
                          ? ((f = s), (u = a))
                          : s > d && ((d = s), (h = a)),
                          (v = (g * v + r.x) / ++g);
                      else {
                        var _ = a - 1;
                        if (!Dt(u) && !Dt(h)) {
                          var k = Math.min(u, h),
                            w = Math.max(u, h);
                          k !== c &&
                            k !== _ &&
                            p.push(En(En({}, t[k]), {}, { x: v })),
                            w !== c &&
                              w !== _ &&
                              p.push(En(En({}, t[w]), {}, { x: v }));
                        }
                        a > 0 && _ !== c && p.push(t[_]),
                          p.push(r),
                          (l = x),
                          (g = 0),
                          (f = d = s),
                          (u = h = c = a);
                      }
                    }
                    return p;
                  })(l, c, f, n);
                  break;
                default:
                  throw new Error(
                    "Unsupported decimation algorithm '".concat(
                      i.algorithm,
                      "'"
                    )
                  );
              }
              e._decimated = d;
            }
          }
        }
      });
    } else xo(t);
  },
  destroy: function (t) {
    xo(t);
  },
};
function ko(t, e, i) {
  var n = (function (t) {
    var e = t.options,
      i = e.fill,
      n = Tt(i && i.target, i);
    return (
      void 0 === n && (n = !!e.backgroundColor),
      !1 !== n && null !== n && (!0 === n ? "origin" : n)
    );
  })(t);
  if (Ot(n)) return !isNaN(n.value) && n;
  var a = parseFloat(n);
  return Ct(a) && Math.floor(a) === a
    ? (("-" !== n[0] && "+" !== n[0]) || (a = e + a),
      !(a === e || a < 0 || a >= i) && a)
    : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
}
var wo = (function () {
  function t(e) {
    n(this, t), (this.x = e.x), (this.y = e.y), (this.radius = e.radius);
  }
  return (
    s(t, [
      {
        key: "pathSegment",
        value: function (t, e, i) {
          var n = this.x,
            a = this.y,
            r = this.radius;
          return (
            (e = e || { start: 0, end: Kt }),
            t.arc(n, a, r, e.end, e.start, !0),
            !i.bounds
          );
        },
      },
      {
        key: "interpolate",
        value: function (t) {
          var e = this.x,
            i = this.y,
            n = this.radius,
            a = t.angle;
          return { x: e + Math.cos(a) * n, y: i + Math.sin(a) * n, angle: a };
        },
      },
    ]),
    t
  );
})();
function Mo(t) {
  return (t.scale || {}).getPointPositionForValue
    ? (function (t) {
        var e,
          i,
          n,
          a = t.scale,
          r = t.fill,
          o = a.options,
          s = a.getLabels().length,
          l = [],
          u = o.reverse ? a.max : a.min,
          h = o.reverse ? a.min : a.max;
        if (
          ((n =
            "start" === r
              ? u
              : "end" === r
              ? h
              : Ot(r)
              ? r.value
              : a.getBaseValue()),
          o.grid.circular)
        )
          return (
            (i = a.getPointPositionForValue(0, u)),
            new wo({
              x: i.x,
              y: i.y,
              radius: a.getDistanceFromCenterForValue(n),
            })
          );
        for (e = 0; e < s; ++e) l.push(a.getPointPositionForValue(e, n));
        return l;
      })(t)
    : (function (t) {
        var e,
          i = t.scale,
          n = void 0 === i ? {} : i,
          a = t.fill,
          r = null;
        return (
          "start" === a
            ? (r = n.bottom)
            : "end" === a
            ? (r = n.top)
            : Ot(a)
            ? (r = n.getPixelForValue(a.value))
            : n.getBasePixel && (r = n.getBasePixel()),
          Ct(r)
            ? { x: (e = n.isHorizontal()) ? r : null, y: e ? null : r }
            : null
        );
      })(t);
}
function So(t, e, i) {
  for (; e > t; e--) {
    var n = i[e];
    if (!isNaN(n.x) && !isNaN(n.y)) break;
  }
  return e;
}
function Do(t, e, i) {
  for (var n = [], a = 0; a < i.length; a++) {
    var r = Po(i[a], e, "x"),
      o = r.first,
      s = r.last,
      l = r.point;
    if (!(!l || (o && s)))
      if (o) n.unshift(l);
      else if ((t.push(l), !s)) break;
  }
  t.push.apply(t, n);
}
function Po(t, e, i) {
  var n = t.interpolate(e, i);
  if (!n) return {};
  for (
    var a = n[i], r = t.segments, o = t.points, s = !1, l = !1, u = 0;
    u < r.length;
    u++
  ) {
    var h = r[u],
      c = o[h.start][i],
      f = o[h.end][i];
    if (pe(a, c, f)) {
      (s = a === c), (l = a === f);
      break;
    }
  }
  return { first: s, last: l, point: n };
}
function Oo(t) {
  var e = t.chart,
    i = t.fill,
    n = t.line;
  if (Ct(i))
    return (function (t, e) {
      var i = t.getDatasetMeta(e);
      return i && t.isDatasetVisible(e) ? i.dataset : null;
    })(e, i);
  if ("stack" === i)
    return (function (t) {
      var e = t.scale,
        i = t.index,
        n = t.line,
        a = [],
        r = n.segments,
        o = n.points,
        s = (function (t, e) {
          for (
            var i = [], n = t.getMatchingVisibleMetas("line"), a = 0;
            a < n.length;
            a++
          ) {
            var r = n[a];
            if (r.index === e) break;
            r.hidden || i.unshift(r.dataset);
          }
          return i;
        })(e, i);
      s.push(Co({ x: null, y: e.bottom }, n));
      for (var l = 0; l < r.length; l++)
        for (var u = r[l], h = u.start; h <= u.end; h++) Do(a, o[h], s);
      return new so({ points: a, options: {} });
    })(t);
  if ("shape" === i) return !0;
  var a = Mo(t);
  return a instanceof wo ? a : Co(a, n);
}
function Co(t, e) {
  var i = [],
    n = !1;
  return (
    Pt(t)
      ? ((n = !0), (i = t))
      : (i = (function (t, e) {
          var i = t || {},
            n = i.x,
            a = void 0 === n ? null : n,
            r = i.y,
            o = void 0 === r ? null : r,
            s = e.points,
            l = [];
          return (
            e.segments.forEach(function (t) {
              var e = t.start,
                i = t.end;
              i = So(e, i, s);
              var n = s[e],
                r = s[i];
              null !== o
                ? (l.push({ x: n.x, y: o }), l.push({ x: r.x, y: o }))
                : null !== a &&
                  (l.push({ x: a, y: n.y }), l.push({ x: a, y: r.y }));
            }),
            l
          );
        })(t, e)),
    i.length
      ? new so({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n })
      : null
  );
}
function Ao(t, e, i) {
  var n,
    a = t[e].fill,
    r = [e];
  if (!i) return a;
  for (; !1 !== a && -1 === r.indexOf(a); ) {
    if (!Ct(a)) return a;
    if (!(n = t[a])) return !1;
    if (n.visible) return a;
    r.push(a), (a = n.fill);
  }
  return !1;
}
function To(t, e, i) {
  t.beginPath(),
    e.path(t),
    t.lineTo(e.last().x, i),
    t.lineTo(e.first().x, i),
    t.closePath(),
    t.clip();
}
function Ro(t, e, i, n) {
  if (!n) {
    var a = e[t],
      r = i[t];
    return (
      "angle" === t && ((a = de(a)), (r = de(r))),
      { property: t, start: a, end: r }
    );
  }
}
function Lo(t, e, i, n) {
  return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
}
function Eo(t, e, i) {
  var n = e.chart.chartArea,
    a = n.top,
    r = n.bottom,
    o = i || {},
    s = o.property,
    l = o.start,
    u = o.end;
  "x" === s && (t.beginPath(), t.rect(l, a, u - l, r - a), t.clip());
}
function Io(t, e, i, n) {
  var a = e.interpolate(i, n);
  a && t.lineTo(a.x, a.y);
}
function zo(t, e) {
  var i,
    n = e.line,
    a = e.target,
    r = e.property,
    o = e.color,
    s = e.scale,
    l = (function (t, e, i) {
      var n,
        a = t.segments,
        r = t.points,
        o = e.points,
        s = [],
        l = zn(a);
      try {
        for (l.s(); !(n = l.n()).done; ) {
          var u = n.value,
            h = u.start,
            c = u.end;
          c = So(h, c, r);
          var f = Ro(i, r[h], r[c], u.loop);
          if (e.segments) {
            var d,
              v = zn(Cn(e, f));
            try {
              for (v.s(); !(d = v.n()).done; ) {
                var g,
                  p = d.value,
                  m = Ro(i, o[p.start], o[p.end], p.loop),
                  y = zn(On(u, r, m));
                try {
                  for (y.s(); !(g = y.n()).done; ) {
                    var b = g.value;
                    s.push({
                      source: b,
                      target: p,
                      start: et({}, i, Lo(f, m, "start", Math.max)),
                      end: et({}, i, Lo(f, m, "end", Math.min)),
                    });
                  }
                } catch (t) {
                  y.e(t);
                } finally {
                  y.f();
                }
              }
            } catch (t) {
              v.e(t);
            } finally {
              v.f();
            }
          } else s.push({ source: u, target: f, start: r[h], end: r[c] });
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
      return s;
    })(n, a, r),
    u = zn(l);
  try {
    for (u.s(); !(i = u.n()).done; ) {
      var h = i.value,
        c = h.source,
        f = h.target,
        d = h.start,
        v = h.end,
        g = c.style,
        p = (g = void 0 === g ? {} : g).backgroundColor,
        m = void 0 === p ? o : p,
        y = !0 !== a;
      t.save(), (t.fillStyle = m), Eo(t, s, y && Ro(r, d, v)), t.beginPath();
      var b = !!n.pathSegment(t, c),
        x = void 0;
      if (y) {
        b ? t.closePath() : Io(t, a, v, r);
        var _ = !!a.pathSegment(t, f, { move: b, reverse: !0 });
        (x = b && _) || Io(t, a, d, r);
      }
      t.closePath(), t.fill(x ? "evenodd" : "nonzero"), t.restore();
    }
  } catch (t) {
    u.e(t);
  } finally {
    u.f();
  }
}
function Fo(t, e, i) {
  var n = Oo(e),
    a = e.line,
    r = e.scale,
    o = e.axis,
    s = a.options,
    l = s.fill,
    u = s.backgroundColor,
    h = l || {},
    c = h.above,
    f = void 0 === c ? u : c,
    d = h.below,
    v = void 0 === d ? u : d;
  n &&
    a.points.length &&
    (vi(t, i),
    (function (t, e) {
      var i = e.line,
        n = e.target,
        a = e.above,
        r = e.below,
        o = e.area,
        s = e.scale,
        l = i._loop ? "angle" : e.axis;
      t.save(),
        "x" === l &&
          r !== a &&
          (To(t, n, o.top),
          zo(t, { line: i, target: n, color: a, scale: s, property: l }),
          t.restore(),
          t.save(),
          To(t, n, o.bottom)),
        zo(t, { line: i, target: n, color: r, scale: s, property: l }),
        t.restore();
    })(t, {
      line: a,
      target: n,
      above: f,
      below: v,
      area: i,
      scale: r,
      axis: o,
    }),
    gi(t));
}
var Vo = {
    id: "filler",
    afterDatasetsUpdate: function (t, e, i) {
      var n,
        a,
        r,
        o,
        s = (t.data.datasets || []).length,
        l = [];
      for (a = 0; a < s; ++a)
        (o = null),
          (r = (n = t.getDatasetMeta(a)).dataset) &&
            r.options &&
            r instanceof so &&
            (o = {
              visible: t.isDatasetVisible(a),
              index: a,
              fill: ko(r, a, s),
              chart: t,
              axis: n.controller.options.indexAxis,
              scale: n.vScale,
              line: r,
            }),
          (n.$filler = o),
          l.push(o);
      for (a = 0; a < s; ++a)
        (o = l[a]) && !1 !== o.fill && (o.fill = Ao(l, a, i.propagate));
    },
    beforeDraw: function (t, e, i) {
      for (
        var n = "beforeDraw" === i.drawTime,
          a = t.getSortedVisibleDatasetMetas(),
          r = t.chartArea,
          o = a.length - 1;
        o >= 0;
        --o
      ) {
        var s = a[o].$filler;
        s && (s.line.updateControlPoints(r, s.axis), n && Fo(t.ctx, s, r));
      }
    },
    beforeDatasetsDraw: function (t, e, i) {
      if ("beforeDatasetsDraw" === i.drawTime)
        for (
          var n = t.getSortedVisibleDatasetMetas(), a = n.length - 1;
          a >= 0;
          --a
        ) {
          var r = n[a].$filler;
          r && Fo(t.ctx, r, t.chartArea);
        }
    },
    beforeDatasetDraw: function (t, e, i) {
      var n = e.meta.$filler;
      n &&
        !1 !== n.fill &&
        "beforeDatasetDraw" === i.drawTime &&
        Fo(t.ctx, n, t.chartArea);
    },
    defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
  },
  Bo = function (t, e) {
    var i = t.boxHeight,
      n = void 0 === i ? e : i,
      a = t.boxWidth,
      r = void 0 === a ? e : a;
    return (
      t.usePointStyle && ((n = Math.min(n, e)), (r = Math.min(r, e))),
      { boxWidth: r, boxHeight: n, itemHeight: Math.max(e, n) }
    );
  },
  Wo = (function (e) {
    t(a, or);
    var i = In(a);
    function a(t) {
      var e;
      return (
        n(this, a),
        ((e = i.call(this))._added = !1),
        (e.legendHitBoxes = []),
        (e._hoveredItem = null),
        (e.doughnutMode = !1),
        (e.chart = t.chart),
        (e.options = t.options),
        (e.ctx = t.ctx),
        (e.legendItems = void 0),
        (e.columnSizes = void 0),
        (e.lineWidths = void 0),
        (e.maxHeight = void 0),
        (e.maxWidth = void 0),
        (e.top = void 0),
        (e.bottom = void 0),
        (e.left = void 0),
        (e.right = void 0),
        (e.height = void 0),
        (e.width = void 0),
        (e._margins = void 0),
        (e.position = void 0),
        (e.weight = void 0),
        (e.fullSize = void 0),
        e
      );
    }
    return (
      s(a, [
        {
          key: "update",
          value: function (t, e, i) {
            (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = i),
              this.setDimensions(),
              this.buildLabels(),
              this.fit();
          },
        },
        {
          key: "setDimensions",
          value: function () {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = this._margins.left),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = this._margins.top),
                (this.bottom = this.height));
          },
        },
        {
          key: "buildLabels",
          value: function () {
            var t = this,
              e = this.options.labels || {},
              i = Lt(e.generateLabels, [this.chart], this) || [];
            e.filter &&
              (i = i.filter(function (i) {
                return e.filter(i, t.chart.data);
              })),
              e.sort &&
                (i = i.sort(function (i, n) {
                  return e.sort(i, n, t.chart.data);
                })),
              this.options.reverse && i.reverse(),
              (this.legendItems = i);
          },
        },
        {
          key: "fit",
          value: function () {
            var t = this.options,
              e = this.ctx;
            if (t.display) {
              var i,
                n,
                a = t.labels,
                r = Ci(a.font),
                o = r.size,
                s = this._computeTitleHeight(),
                l = Bo(a, o),
                u = l.boxWidth,
                h = l.itemHeight;
              (e.font = r.string),
                this.isHorizontal()
                  ? ((i = this.maxWidth), (n = this._fitRows(s, o, u, h) + 10))
                  : ((n = this.maxHeight),
                    (i = this._fitCols(s, o, u, h) + 10)),
                (this.width = Math.min(i, t.maxWidth || this.maxWidth)),
                (this.height = Math.min(n, t.maxHeight || this.maxHeight));
            } else this.width = this.height = 0;
          },
        },
        {
          key: "_fitRows",
          value: function (t, e, i, n) {
            var a = this.ctx,
              r = this.maxWidth,
              o = this.options.labels.padding,
              s = (this.legendHitBoxes = []),
              l = (this.lineWidths = [0]),
              u = n + o,
              h = t;
            (a.textAlign = "left"), (a.textBaseline = "middle");
            var c = -1,
              f = -u;
            return (
              this.legendItems.forEach(function (t, d) {
                var v = i + e / 2 + a.measureText(t.text).width;
                (0 === d || l[l.length - 1] + v + 2 * o > r) &&
                  ((h += u),
                  (l[l.length - (d > 0 ? 0 : 1)] = 0),
                  (f += u),
                  c++),
                  (s[d] = { left: 0, top: f, row: c, width: v, height: n }),
                  (l[l.length - 1] += v + o);
              }),
              h
            );
          },
        },
        {
          key: "_fitCols",
          value: function (t, e, i, n) {
            var a = this.ctx,
              r = this.maxHeight,
              o = this.options.labels.padding,
              s = (this.legendHitBoxes = []),
              l = (this.columnSizes = []),
              u = r - t,
              h = o,
              c = 0,
              f = 0,
              d = 0,
              v = 0;
            return (
              this.legendItems.forEach(function (t, r) {
                var g = i + e / 2 + a.measureText(t.text).width;
                r > 0 &&
                  f + n + 2 * o > u &&
                  ((h += c + o),
                  l.push({ width: c, height: f }),
                  (d += c + o),
                  v++,
                  (c = f = 0)),
                  (s[r] = { left: d, top: f, col: v, width: g, height: n }),
                  (c = Math.max(c, g)),
                  (f += n + o);
              }),
              (h += c),
              l.push({ width: c, height: f }),
              h
            );
          },
        },
        {
          key: "adjustHitBoxes",
          value: function () {
            if (this.options.display) {
              var t = this._computeTitleHeight(),
                e = this.legendHitBoxes,
                i = this.options,
                n = i.align,
                a = i.labels.padding,
                r = wn(i.rtl, this.left, this.width);
              if (this.isHorizontal()) {
                var o,
                  s = 0,
                  l = kt(n, this.left + a, this.right - this.lineWidths[s]),
                  u = zn(e);
                try {
                  for (u.s(); !(o = u.n()).done; ) {
                    var h = o.value;
                    s !== h.row &&
                      ((s = h.row),
                      (l = kt(
                        n,
                        this.left + a,
                        this.right - this.lineWidths[s]
                      ))),
                      (h.top += this.top + t + a),
                      (h.left = r.leftForLtr(r.x(l), h.width)),
                      (l += h.width + a);
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
              } else {
                var c,
                  f = 0,
                  d = kt(
                    n,
                    this.top + t + a,
                    this.bottom - this.columnSizes[f].height
                  ),
                  v = zn(e);
                try {
                  for (v.s(); !(c = v.n()).done; ) {
                    var g = c.value;
                    g.col !== f &&
                      ((f = g.col),
                      (d = kt(
                        n,
                        this.top + t + a,
                        this.bottom - this.columnSizes[f].height
                      ))),
                      (g.top = d),
                      (g.left += this.left + a),
                      (g.left = r.leftForLtr(r.x(g.left), g.width)),
                      (d += g.height + a);
                  }
                } catch (t) {
                  v.e(t);
                } finally {
                  v.f();
                }
              }
            }
          },
        },
        {
          key: "isHorizontal",
          value: function () {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          },
        },
        {
          key: "draw",
          value: function () {
            if (this.options.display) {
              var t = this.ctx;
              vi(t, this), this._draw(), gi(t);
            }
          },
        },
        {
          key: "_draw",
          value: function () {
            var t,
              e = this,
              i = this.options,
              n = this.columnSizes,
              a = this.lineWidths,
              r = this.ctx,
              o = i.align,
              s = i.labels,
              l = si.color,
              u = wn(i.rtl, this.left, this.width),
              h = Ci(s.font),
              c = s.color,
              f = s.padding,
              d = h.size,
              v = d / 2;
            this.drawTitle(),
              (r.textAlign = u.textAlign("left")),
              (r.textBaseline = "middle"),
              (r.lineWidth = 0.5),
              (r.font = h.string);
            var g = Bo(s, d),
              p = g.boxWidth,
              m = g.boxHeight,
              y = g.itemHeight,
              b = this.isHorizontal(),
              x = this._computeTitleHeight();
            (t = b
              ? {
                  x: kt(o, this.left + f, this.right - a[0]),
                  y: this.top + f + x,
                  line: 0,
                }
              : {
                  x: this.left + f,
                  y: kt(o, this.top + x + f, this.bottom - n[0].height),
                  line: 0,
                }),
              Mn(this.ctx, i.textDirection);
            var _ = y + f;
            this.legendItems.forEach(function (g, k) {
              (r.strokeStyle = g.fontColor || c),
                (r.fillStyle = g.fontColor || c);
              var w = r.measureText(g.text).width,
                M = u.textAlign(g.textAlign || (g.textAlign = s.textAlign)),
                S = p + v + w,
                D = t.x,
                P = t.y;
              u.setWidth(e.width),
                b
                  ? k > 0 &&
                    D + S + f > e.right &&
                    ((P = t.y += _),
                    t.line++,
                    (D = t.x = kt(o, e.left + f, e.right - a[t.line])))
                  : k > 0 &&
                    P + _ > e.bottom &&
                    ((D = t.x = D + n[t.line].width + f),
                    t.line++,
                    (P = t.y = kt(
                      o,
                      e.top + x + f,
                      e.bottom - n[t.line].height
                    ))),
                (function (t, e, i) {
                  if (!(isNaN(p) || p <= 0 || isNaN(m) || m < 0)) {
                    r.save();
                    var n = Tt(i.lineWidth, 1);
                    if (
                      ((r.fillStyle = Tt(i.fillStyle, l)),
                      (r.lineCap = Tt(i.lineCap, "butt")),
                      (r.lineDashOffset = Tt(i.lineDashOffset, 0)),
                      (r.lineJoin = Tt(i.lineJoin, "miter")),
                      (r.lineWidth = n),
                      (r.strokeStyle = Tt(i.strokeStyle, l)),
                      r.setLineDash(Tt(i.lineDash, [])),
                      s.usePointStyle)
                    ) {
                      var a = {
                          radius: (p * Math.SQRT2) / 2,
                          pointStyle: i.pointStyle,
                          rotation: i.rotation,
                          borderWidth: n,
                        },
                        o = u.xPlus(t, p / 2);
                      fi(r, a, o, e + v);
                    } else {
                      var h = e + Math.max((d - m) / 2, 0),
                        c = u.leftForLtr(t, p),
                        f = Pi(i.borderRadius);
                      r.beginPath(),
                        Object.values(f).some(function (t) {
                          return 0 !== t;
                        })
                          ? _i(r, { x: c, y: h, w: p, h: m, radius: f })
                          : r.rect(c, h, p, m),
                        r.fill(),
                        0 !== n && r.stroke();
                    }
                    r.restore();
                  }
                })(u.x(D), P, g),
                (D = (function (t, e, i, n) {
                  return t === (n ? "left" : "right")
                    ? i
                    : "center" === t
                    ? (e + i) / 2
                    : e;
                })(M, D + p + v, b ? D + S : e.right, i.rtl)),
                (function (t, e, i) {
                  yi(r, i.text, t, e + y / 2, h, {
                    strikethrough: i.hidden,
                    textAlign: u.textAlign(i.textAlign),
                  });
                })(u.x(D), P, g),
                b ? (t.x += S + f) : (t.y += _);
            }),
              Sn(this.ctx, i.textDirection);
          },
        },
        {
          key: "drawTitle",
          value: function () {
            var t = this.options,
              e = t.title,
              i = Ci(e.font),
              n = Oi(e.padding);
            if (e.display) {
              var a,
                r = wn(t.rtl, this.left, this.width),
                o = this.ctx,
                s = e.position,
                l = i.size / 2,
                u = n.top + l,
                h = this.left,
                c = this.width;
              if (this.isHorizontal())
                (c = Math.max.apply(Math, V(this.lineWidths))),
                  (a = this.top + u),
                  (h = kt(t.align, h, this.right - c));
              else {
                var f = this.columnSizes.reduce(function (t, e) {
                  return Math.max(t, e.height);
                }, 0);
                a =
                  u +
                  kt(
                    t.align,
                    this.top,
                    this.bottom -
                      f -
                      t.labels.padding -
                      this._computeTitleHeight()
                  );
              }
              var d = kt(s, h, h + c);
              (o.textAlign = r.textAlign(_t(s))),
                (o.textBaseline = "middle"),
                (o.strokeStyle = e.color),
                (o.fillStyle = e.color),
                (o.font = i.string),
                yi(o, e.text, d, a, i);
            }
          },
        },
        {
          key: "_computeTitleHeight",
          value: function () {
            var t = this.options.title,
              e = Ci(t.font),
              i = Oi(t.padding);
            return t.display ? e.lineHeight + i.height : 0;
          },
        },
        {
          key: "_getLegendItemAt",
          value: function (t, e) {
            var i, n, a;
            if (pe(t, this.left, this.right) && pe(e, this.top, this.bottom))
              for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
                if (
                  pe(t, (n = a[i]).left, n.left + n.width) &&
                  pe(e, n.top, n.top + n.height)
                )
                  return this.legendItems[i];
            return null;
          },
        },
        {
          key: "handleEvent",
          value: function (t) {
            var e = this.options;
            if (
              (function (t, e) {
                if ("mousemove" === t && (e.onHover || e.onLeave)) return !0;
                if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
                return !1;
              })(t.type, e)
            ) {
              var i,
                n,
                a = this._getLegendItemAt(t.x, t.y);
              if ("mousemove" === t.type) {
                var r = this._hoveredItem,
                  o =
                    ((n = a),
                    null !== (i = r) &&
                      null !== n &&
                      i.datasetIndex === n.datasetIndex &&
                      i.index === n.index);
                r && !o && Lt(e.onLeave, [t, r, this], this),
                  (this._hoveredItem = a),
                  a && !o && Lt(e.onHover, [t, a, this], this);
              } else a && Lt(e.onClick, [t, a, this], this);
            }
          },
        },
      ]),
      a
    );
  })();
var No = {
    id: "legend",
    _element: Wo,
    start: function (t, e, i) {
      var n = (t.legend = new Wo({ ctx: t.ctx, options: i, chart: t }));
      ja(t, n, i), Wa(t, n);
    },
    stop: function (t) {
      Na(t, t.legend), delete t.legend;
    },
    beforeUpdate: function (t, e, i) {
      var n = t.legend;
      ja(t, n, i), (n.options = i);
    },
    afterUpdate: function (t) {
      var e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent: function (t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function (t, e, i) {
        var n = e.datasetIndex,
          a = i.chart;
        a.isDatasetVisible(n)
          ? (a.hide(n), (e.hidden = !0))
          : (a.show(n), (e.hidden = !1));
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: function (t) {
          return t.chart.options.color;
        },
        boxWidth: 40,
        padding: 10,
        generateLabels: function (t) {
          var e = t.data.datasets,
            i = t.legend.options.labels,
            n = i.usePointStyle,
            a = i.pointStyle,
            r = i.textAlign,
            o = i.color;
          return t._getSortedDatasetMetas().map(function (t) {
            var i = t.controller.getStyle(n ? 0 : void 0),
              s = Oi(i.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: i.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: i.borderCapStyle,
              lineDash: i.borderDash,
              lineDashOffset: i.borderDashOffset,
              lineJoin: i.borderJoinStyle,
              lineWidth: (s.width + s.height) / 4,
              strokeStyle: i.borderColor,
              pointStyle: a || i.pointStyle,
              rotation: i.rotation,
              textAlign: r || i.textAlign,
              borderRadius: 0,
              datasetIndex: t.index,
            };
          }, this);
        },
      },
      title: {
        color: function (t) {
          return t.chart.options.color;
        },
        display: !1,
        position: "center",
        text: "",
      },
    },
    descriptors: {
      _scriptable: function (t) {
        return !t.startsWith("on");
      },
      labels: {
        _scriptable: function (t) {
          return !["generateLabels", "filter", "sort"].includes(t);
        },
      },
    },
  },
  jo = (function (e) {
    t(a, or);
    var i = In(a);
    function a(t) {
      var e;
      return (
        n(this, a),
        ((e = i.call(this)).chart = t.chart),
        (e.options = t.options),
        (e.ctx = t.ctx),
        (e._padding = void 0),
        (e.top = void 0),
        (e.bottom = void 0),
        (e.left = void 0),
        (e.right = void 0),
        (e.width = void 0),
        (e.height = void 0),
        (e.position = void 0),
        (e.weight = void 0),
        (e.fullSize = void 0),
        e
      );
    }
    return (
      s(a, [
        {
          key: "update",
          value: function (t, e) {
            var i = this.options;
            if (((this.left = 0), (this.top = 0), i.display)) {
              (this.width = this.right = t), (this.height = this.bottom = e);
              var n = Pt(i.text) ? i.text.length : 1;
              this._padding = Oi(i.padding);
              var a = n * Ci(i.font).lineHeight + this._padding.height;
              this.isHorizontal() ? (this.height = a) : (this.width = a);
            } else this.width = this.height = this.right = this.bottom = 0;
          },
        },
        {
          key: "isHorizontal",
          value: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
        },
        {
          key: "_drawArgs",
          value: function (t) {
            var e,
              i,
              n,
              a = this.top,
              r = this.left,
              o = this.bottom,
              s = this.right,
              l = this.options,
              u = l.align,
              h = 0;
            return (
              this.isHorizontal()
                ? ((i = kt(u, r, s)), (n = a + t), (e = s - r))
                : ("left" === l.position
                    ? ((i = r + t), (n = kt(u, o, a)), (h = -0.5 * qt))
                    : ((i = s - t), (n = kt(u, a, o)), (h = 0.5 * qt)),
                  (e = o - a)),
              { titleX: i, titleY: n, maxWidth: e, rotation: h }
            );
          },
        },
        {
          key: "draw",
          value: function () {
            var t = this.ctx,
              e = this.options;
            if (e.display) {
              var i = Ci(e.font),
                n = i.lineHeight / 2 + this._padding.top,
                a = this._drawArgs(n),
                r = a.titleX,
                o = a.titleY,
                s = a.maxWidth,
                l = a.rotation;
              yi(t, e.text, 0, 0, i, {
                color: e.color,
                maxWidth: s,
                rotation: l,
                textAlign: _t(e.align),
                textBaseline: "middle",
                translation: [r, o],
              });
            }
          },
        },
      ]),
      a
    );
  })();
var Ho = {
    id: "title",
    _element: jo,
    start: function (t, e, i) {
      !(function (t, e) {
        var i = new jo({ ctx: t.ctx, options: e, chart: t });
        ja(t, i, e), Wa(t, i), (t.titleBlock = i);
      })(t, i);
    },
    stop: function (t) {
      var e = t.titleBlock;
      Na(t, e), delete t.titleBlock;
    },
    beforeUpdate: function (t, e, i) {
      var n = t.titleBlock;
      ja(t, n, i), (n.options = i);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "bold" },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  },
  $o = new WeakMap(),
  Uo = {
    id: "subtitle",
    start: function (t, e, i) {
      var n = new jo({ ctx: t.ctx, options: i, chart: t });
      ja(t, n, i), Wa(t, n), $o.set(t, n);
    },
    stop: function (t) {
      Na(t, $o.get(t)), $o.delete(t);
    },
    beforeUpdate: function (t, e, i) {
      var n = $o.get(t);
      ja(t, n, i), (n.options = i);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "normal" },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  },
  Yo = {
    average: function (t) {
      if (!t.length) return !1;
      var e,
        i,
        n = 0,
        a = 0,
        r = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        var o = t[e].element;
        if (o && o.hasValue()) {
          var s = o.tooltipPosition();
          (n += s.x), (a += s.y), ++r;
        }
      }
      return { x: n / r, y: a / r };
    },
    nearest: function (t, e) {
      if (!t.length) return !1;
      var i,
        n,
        a,
        r = e.x,
        o = e.y,
        s = Number.POSITIVE_INFINITY;
      for (i = 0, n = t.length; i < n; ++i) {
        var l = t[i].element;
        if (l && l.hasValue()) {
          var u = ce(e, l.getCenterPoint());
          u < s && ((s = u), (a = l));
        }
      }
      if (a) {
        var h = a.tooltipPosition();
        (r = h.x), (o = h.y);
      }
      return { x: r, y: o };
    },
  };
function Xo(t, e) {
  return e && (Pt(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function qo(t) {
  return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1
    ? t.split("\n")
    : t;
}
function Ko(t, e) {
  var i = e.element,
    n = e.datasetIndex,
    a = e.index,
    r = t.getDatasetMeta(n).controller,
    o = r.getLabelAndValue(a),
    s = o.label,
    l = o.value;
  return {
    chart: t,
    label: s,
    parsed: r.getParsed(a),
    raw: t.data.datasets[n].data[a],
    formattedValue: l,
    dataset: r.getDataset(),
    dataIndex: a,
    datasetIndex: n,
    element: i,
  };
}
function Go(t, e) {
  var i = t._chart.ctx,
    n = t.body,
    a = t.footer,
    r = t.title,
    o = e.boxWidth,
    s = e.boxHeight,
    l = Ci(e.bodyFont),
    u = Ci(e.titleFont),
    h = Ci(e.footerFont),
    c = r.length,
    f = a.length,
    d = n.length,
    v = Oi(e.padding),
    g = v.height,
    p = 0,
    m = n.reduce(function (t, e) {
      return t + e.before.length + e.lines.length + e.after.length;
    }, 0);
  ((m += t.beforeBody.length + t.afterBody.length),
  c && (g += c * u.lineHeight + (c - 1) * e.titleSpacing + e.titleMarginBottom),
  m) &&
    (g +=
      d * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
      (m - d) * l.lineHeight +
      (m - 1) * e.bodySpacing);
  f && (g += e.footerMarginTop + f * h.lineHeight + (f - 1) * e.footerSpacing);
  var y = 0,
    b = function (t) {
      p = Math.max(p, i.measureText(t).width + y);
    };
  return (
    i.save(),
    (i.font = u.string),
    Et(t.title, b),
    (i.font = l.string),
    Et(t.beforeBody.concat(t.afterBody), b),
    (y = e.displayColors ? o + 2 + e.boxPadding : 0),
    Et(n, function (t) {
      Et(t.before, b), Et(t.lines, b), Et(t.after, b);
    }),
    (y = 0),
    (i.font = h.string),
    Et(t.footer, b),
    i.restore(),
    { width: (p += v.width), height: g }
  );
}
function Zo(t, e, i, n) {
  var a = i.x,
    r = i.width,
    o = t.width,
    s = t.chartArea,
    l = s.left,
    u = s.right,
    h = "center";
  return (
    "center" === n
      ? (h = a <= (l + u) / 2 ? "left" : "right")
      : a <= r / 2
      ? (h = "left")
      : a >= o - r / 2 && (h = "right"),
    (function (t, e, i, n) {
      var a = n.x,
        r = n.width,
        o = i.caretSize + i.caretPadding;
      return (
        ("left" === t && a + r + o > e.width) ||
        ("right" === t && a - r - o < 0) ||
        void 0
      );
    })(h, t, e, i) && (h = "center"),
    h
  );
}
function Qo(t, e, i) {
  var n =
    e.yAlign ||
    (function (t, e) {
      var i = e.y,
        n = e.height;
      return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center";
    })(t, i);
  return { xAlign: e.xAlign || Zo(t, e, i, n), yAlign: n };
}
function Jo(t, e, i, n) {
  var a = t.caretSize,
    r = t.caretPadding,
    o = t.cornerRadius,
    s = i.xAlign,
    l = i.yAlign,
    u = a + r,
    h = Pi(o),
    c = h.topLeft,
    f = h.topRight,
    d = h.bottomLeft,
    v = h.bottomRight,
    g = (function (t, e) {
      var i = t.x,
        n = t.width;
      return "right" === e ? (i -= n) : "center" === e && (i -= n / 2), i;
    })(e, s),
    p = (function (t, e, i) {
      var n = t.y,
        a = t.height;
      return "top" === e ? (n += i) : (n -= "bottom" === e ? a + i : a / 2), n;
    })(e, l, u);
  return (
    "center" === l
      ? "left" === s
        ? (g += u)
        : "right" === s && (g -= u)
      : "left" === s
      ? (g -= Math.max(c, d) + a)
      : "right" === s && (g += Math.max(f, v) + a),
    { x: ge(g, 0, n.width - e.width), y: ge(p, 0, n.height - e.height) }
  );
}
function ts(t, e, i) {
  var n = Oi(i.padding);
  return "center" === e
    ? t.x + t.width / 2
    : "right" === e
    ? t.x + t.width - n.right
    : t.x + n.left;
}
function es(t) {
  return Xo([], qo(t));
}
function is(t, e) {
  var i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return i ? t.override(i) : t;
}
var ns = (function (e) {
  t(a, or);
  var i = In(a);
  function a(t) {
    var e;
    return (
      n(this, a),
      ((e = i.call(this)).opacity = 0),
      (e._active = []),
      (e._chart = t._chart),
      (e._eventPosition = void 0),
      (e._size = void 0),
      (e._cachedAnimations = void 0),
      (e._tooltipItems = []),
      (e.$animations = void 0),
      (e.$context = void 0),
      (e.options = t.options),
      (e.dataPoints = void 0),
      (e.title = void 0),
      (e.beforeBody = void 0),
      (e.body = void 0),
      (e.afterBody = void 0),
      (e.footer = void 0),
      (e.xAlign = void 0),
      (e.yAlign = void 0),
      (e.x = void 0),
      (e.y = void 0),
      (e.height = void 0),
      (e.width = void 0),
      (e.caretX = void 0),
      (e.caretY = void 0),
      (e.labelColors = void 0),
      (e.labelPointStyles = void 0),
      (e.labelTextColors = void 0),
      e
    );
  }
  return (
    s(a, [
      {
        key: "initialize",
        value: function (t) {
          (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
        },
      },
      {
        key: "_resolveAnimations",
        value: function () {
          var t = this._cachedAnimations;
          if (t) return t;
          var e = this._chart,
            i = this.options.setContext(this.getContext()),
            n = i.enabled && e.options.animation && i.animations,
            a = new jn(this._chart, n);
          return n._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
        },
      },
      {
        key: "getContext",
        value: function () {
          return (
            this.$context ||
            (this.$context =
              ((t = this._chart.getContext()),
              (e = this),
              (i = this._tooltipItems),
              Ti(t, { tooltip: e, tooltipItems: i, type: "tooltip" })))
          );
          var t, e, i;
        },
      },
      {
        key: "getTitle",
        value: function (t, e) {
          var i = e.callbacks,
            n = i.beforeTitle.apply(this, [t]),
            a = i.title.apply(this, [t]),
            r = i.afterTitle.apply(this, [t]),
            o = [];
          return (o = Xo(o, qo(n))), (o = Xo(o, qo(a))), (o = Xo(o, qo(r)));
        },
      },
      {
        key: "getBeforeBody",
        value: function (t, e) {
          return es(e.callbacks.beforeBody.apply(this, [t]));
        },
      },
      {
        key: "getBody",
        value: function (t, e) {
          var i = this,
            n = e.callbacks,
            a = [];
          return (
            Et(t, function (t) {
              var e = { before: [], lines: [], after: [] },
                r = is(n, t);
              Xo(e.before, qo(r.beforeLabel.call(i, t))),
                Xo(e.lines, r.label.call(i, t)),
                Xo(e.after, qo(r.afterLabel.call(i, t))),
                a.push(e);
            }),
            a
          );
        },
      },
      {
        key: "getAfterBody",
        value: function (t, e) {
          return es(e.callbacks.afterBody.apply(this, [t]));
        },
      },
      {
        key: "getFooter",
        value: function (t, e) {
          var i = e.callbacks,
            n = i.beforeFooter.apply(this, [t]),
            a = i.footer.apply(this, [t]),
            r = i.afterFooter.apply(this, [t]),
            o = [];
          return (o = Xo(o, qo(n))), (o = Xo(o, qo(a))), (o = Xo(o, qo(r)));
        },
      },
      {
        key: "_createItems",
        value: function (t) {
          var e,
            i,
            n = this,
            a = this._active,
            r = this._chart.data,
            o = [],
            s = [],
            l = [],
            u = [];
          for (e = 0, i = a.length; e < i; ++e) u.push(Ko(this._chart, a[e]));
          return (
            t.filter &&
              (u = u.filter(function (e, i, n) {
                return t.filter(e, i, n, r);
              })),
            t.itemSort &&
              (u = u.sort(function (e, i) {
                return t.itemSort(e, i, r);
              })),
            Et(u, function (e) {
              var i = is(t.callbacks, e);
              o.push(i.labelColor.call(n, e)),
                s.push(i.labelPointStyle.call(n, e)),
                l.push(i.labelTextColor.call(n, e));
            }),
            (this.labelColors = o),
            (this.labelPointStyles = s),
            (this.labelTextColors = l),
            (this.dataPoints = u),
            u
          );
        },
      },
      {
        key: "update",
        value: function (t, e) {
          var i,
            n = this.options.setContext(this.getContext()),
            a = this._active,
            r = [];
          if (a.length) {
            var o = Yo[n.position].call(this, a, this._eventPosition);
            (r = this._createItems(n)),
              (this.title = this.getTitle(r, n)),
              (this.beforeBody = this.getBeforeBody(r, n)),
              (this.body = this.getBody(r, n)),
              (this.afterBody = this.getAfterBody(r, n)),
              (this.footer = this.getFooter(r, n));
            var s = (this._size = Go(this, n)),
              l = Object.assign({}, o, s),
              u = Qo(this._chart, n, l),
              h = Jo(n, l, u, this._chart);
            (this.xAlign = u.xAlign),
              (this.yAlign = u.yAlign),
              (i = {
                opacity: 1,
                x: h.x,
                y: h.y,
                width: s.width,
                height: s.height,
                caretX: o.x,
                caretY: o.y,
              });
          } else 0 !== this.opacity && (i = { opacity: 0 });
          (this._tooltipItems = r),
            (this.$context = void 0),
            i && this._resolveAnimations().update(this, i),
            t &&
              n.external &&
              n.external.call(this, {
                chart: this._chart,
                tooltip: this,
                replay: e,
              });
        },
      },
      {
        key: "drawCaret",
        value: function (t, e, i, n) {
          var a = this.getCaretPosition(t, i, n);
          e.lineTo(a.x1, a.y1), e.lineTo(a.x2, a.y2), e.lineTo(a.x3, a.y3);
        },
      },
      {
        key: "getCaretPosition",
        value: function (t, e, i) {
          var n,
            a,
            r,
            o,
            s,
            l,
            u = this.xAlign,
            h = this.yAlign,
            c = i.caretSize,
            f = Pi(i.cornerRadius),
            d = f.topLeft,
            v = f.topRight,
            g = f.bottomLeft,
            p = f.bottomRight,
            m = t.x,
            y = t.y,
            b = e.width,
            x = e.height;
          return (
            "center" === h
              ? ((s = y + x / 2),
                "left" === u
                  ? ((a = (n = m) - c), (o = s + c), (l = s - c))
                  : ((a = (n = m + b) + c), (o = s - c), (l = s + c)),
                (r = n))
              : ((a =
                  "left" === u
                    ? m + Math.max(d, g) + c
                    : "right" === u
                    ? m + b - Math.max(v, p) - c
                    : this.caretX),
                "top" === h
                  ? ((s = (o = y) - c), (n = a - c), (r = a + c))
                  : ((s = (o = y + x) + c), (n = a + c), (r = a - c)),
                (l = o)),
            { x1: n, x2: a, x3: r, y1: o, y2: s, y3: l }
          );
        },
      },
      {
        key: "drawTitle",
        value: function (t, e, i) {
          var n,
            a,
            r,
            o = this.title,
            s = o.length;
          if (s) {
            var l = wn(i.rtl, this.x, this.width);
            for (
              t.x = ts(this, i.titleAlign, i),
                e.textAlign = l.textAlign(i.titleAlign),
                e.textBaseline = "middle",
                n = Ci(i.titleFont),
                a = i.titleSpacing,
                e.fillStyle = i.titleColor,
                e.font = n.string,
                r = 0;
              r < s;
              ++r
            )
              e.fillText(o[r], l.x(t.x), t.y + n.lineHeight / 2),
                (t.y += n.lineHeight + a),
                r + 1 === s && (t.y += i.titleMarginBottom - a);
          }
        },
      },
      {
        key: "_drawColorBox",
        value: function (t, e, i, n, a) {
          var r = this.labelColors[i],
            o = this.labelPointStyles[i],
            s = a.boxHeight,
            l = a.boxWidth,
            u = a.boxPadding,
            h = Ci(a.bodyFont),
            c = ts(this, "left", a),
            f = n.x(c),
            d = s < h.lineHeight ? (h.lineHeight - s) / 2 : 0,
            v = e.y + d;
          if (a.usePointStyle) {
            var g = {
                radius: Math.min(l, s) / 2,
                pointStyle: o.pointStyle,
                rotation: o.rotation,
                borderWidth: 1,
              },
              p = n.leftForLtr(f, l) + l / 2,
              m = v + s / 2;
            (t.strokeStyle = a.multiKeyBackground),
              (t.fillStyle = a.multiKeyBackground),
              fi(t, g, p, m),
              (t.strokeStyle = r.borderColor),
              (t.fillStyle = r.backgroundColor),
              fi(t, g, p, m);
          } else {
            (t.lineWidth = r.borderWidth || 1),
              (t.strokeStyle = r.borderColor),
              t.setLineDash(r.borderDash || []),
              (t.lineDashOffset = r.borderDashOffset || 0);
            var y = n.leftForLtr(f, l - u),
              b = n.leftForLtr(n.xPlus(f, 1), l - u - 2),
              x = Pi(r.borderRadius);
            Object.values(x).some(function (t) {
              return 0 !== t;
            })
              ? (t.beginPath(),
                (t.fillStyle = a.multiKeyBackground),
                _i(t, { x: y, y: v, w: l, h: s, radius: x }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = r.backgroundColor),
                t.beginPath(),
                _i(t, { x: b, y: v + 1, w: l - 2, h: s - 2, radius: x }),
                t.fill())
              : ((t.fillStyle = a.multiKeyBackground),
                t.fillRect(y, v, l, s),
                t.strokeRect(y, v, l, s),
                (t.fillStyle = r.backgroundColor),
                t.fillRect(b, v + 1, l - 2, s - 2));
          }
          t.fillStyle = this.labelTextColors[i];
        },
      },
      {
        key: "drawBody",
        value: function (t, e, i) {
          var n,
            a,
            r,
            o,
            s,
            l,
            u,
            h = this.body,
            c = i.bodySpacing,
            f = i.bodyAlign,
            d = i.displayColors,
            v = i.boxHeight,
            g = i.boxWidth,
            p = i.boxPadding,
            m = Ci(i.bodyFont),
            y = m.lineHeight,
            b = 0,
            x = wn(i.rtl, this.x, this.width),
            _ = function (i) {
              e.fillText(i, x.x(t.x + b), t.y + y / 2), (t.y += y + c);
            },
            k = x.textAlign(f);
          for (
            e.textAlign = f,
              e.textBaseline = "middle",
              e.font = m.string,
              t.x = ts(this, k, i),
              e.fillStyle = i.bodyColor,
              Et(this.beforeBody, _),
              b =
                d && "right" !== k
                  ? "center" === f
                    ? g / 2 + p
                    : g + 2 + p
                  : 0,
              o = 0,
              l = h.length;
            o < l;
            ++o
          ) {
            for (
              n = h[o],
                a = this.labelTextColors[o],
                e.fillStyle = a,
                Et(n.before, _),
                r = n.lines,
                d &&
                  r.length &&
                  (this._drawColorBox(e, t, o, x, i),
                  (y = Math.max(m.lineHeight, v))),
                s = 0,
                u = r.length;
              s < u;
              ++s
            )
              _(r[s]), (y = m.lineHeight);
            Et(n.after, _);
          }
          (b = 0), (y = m.lineHeight), Et(this.afterBody, _), (t.y -= c);
        },
      },
      {
        key: "drawFooter",
        value: function (t, e, i) {
          var n,
            a,
            r = this.footer,
            o = r.length;
          if (o) {
            var s = wn(i.rtl, this.x, this.width);
            for (
              t.x = ts(this, i.footerAlign, i),
                t.y += i.footerMarginTop,
                e.textAlign = s.textAlign(i.footerAlign),
                e.textBaseline = "middle",
                n = Ci(i.footerFont),
                e.fillStyle = i.footerColor,
                e.font = n.string,
                a = 0;
              a < o;
              ++a
            )
              e.fillText(r[a], s.x(t.x), t.y + n.lineHeight / 2),
                (t.y += n.lineHeight + i.footerSpacing);
          }
        },
      },
      {
        key: "drawBackground",
        value: function (t, e, i, n) {
          var a = this.xAlign,
            r = this.yAlign,
            o = t.x,
            s = t.y,
            l = i.width,
            u = i.height,
            h = Pi(n.cornerRadius),
            c = h.topLeft,
            f = h.topRight,
            d = h.bottomLeft,
            v = h.bottomRight;
          (e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(o + c, s),
            "top" === r && this.drawCaret(t, e, i, n),
            e.lineTo(o + l - f, s),
            e.quadraticCurveTo(o + l, s, o + l, s + f),
            "center" === r && "right" === a && this.drawCaret(t, e, i, n),
            e.lineTo(o + l, s + u - v),
            e.quadraticCurveTo(o + l, s + u, o + l - v, s + u),
            "bottom" === r && this.drawCaret(t, e, i, n),
            e.lineTo(o + d, s + u),
            e.quadraticCurveTo(o, s + u, o, s + u - d),
            "center" === r && "left" === a && this.drawCaret(t, e, i, n),
            e.lineTo(o, s + c),
            e.quadraticCurveTo(o, s, o + c, s),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke();
        },
      },
      {
        key: "_updateAnimationTarget",
        value: function (t) {
          var e = this._chart,
            i = this.$animations,
            n = i && i.x,
            a = i && i.y;
          if (n || a) {
            var r = Yo[t.position].call(
              this,
              this._active,
              this._eventPosition
            );
            if (!r) return;
            var o = (this._size = Go(this, t)),
              s = Object.assign({}, r, this._size),
              l = Qo(e, t, s),
              u = Jo(t, s, l, e);
            (n._to === u.x && a._to === u.y) ||
              ((this.xAlign = l.xAlign),
              (this.yAlign = l.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = r.x),
              (this.caretY = r.y),
              this._resolveAnimations().update(this, u));
          }
        },
      },
      {
        key: "draw",
        value: function (t) {
          var e = this.options.setContext(this.getContext()),
            i = this.opacity;
          if (i) {
            this._updateAnimationTarget(e);
            var n = { width: this.width, height: this.height },
              a = { x: this.x, y: this.y };
            i = Math.abs(i) < 0.001 ? 0 : i;
            var r = Oi(e.padding),
              o =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
            e.enabled &&
              o &&
              (t.save(),
              (t.globalAlpha = i),
              this.drawBackground(a, t, n, e),
              Mn(t, e.textDirection),
              (a.y += r.top),
              this.drawTitle(a, t, e),
              this.drawBody(a, t, e),
              this.drawFooter(a, t, e),
              Sn(t, e.textDirection),
              t.restore());
          }
        },
      },
      {
        key: "getActiveElements",
        value: function () {
          return this._active || [];
        },
      },
      {
        key: "setActiveElements",
        value: function (t, e) {
          var i = this,
            n = this._active,
            a = t.map(function (t) {
              var e = t.datasetIndex,
                n = t.index,
                a = i._chart.getDatasetMeta(e);
              if (!a) throw new Error("Cannot find a dataset at index " + e);
              return { datasetIndex: e, element: a.data[n], index: n };
            }),
            r = !It(n, a),
            o = this._positionChanged(a, e);
          (r || o) &&
            ((this._active = a), (this._eventPosition = e), this.update(!0));
        },
      },
      {
        key: "handleEvent",
        value: function (t, e) {
          var i,
            n = this.options,
            a = this._active || [],
            r = [];
          "mouseout" !== t.type &&
            ((r = this._chart.getElementsAtEventForMode(t, n.mode, n, e)),
            n.reverse && r.reverse());
          var o = this._positionChanged(r, t);
          return (
            (i = e || !It(r, a) || o) &&
              ((this._active = r),
              (n.enabled || n.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }),
                this.update(!0, e))),
            i
          );
        },
      },
      {
        key: "_positionChanged",
        value: function (t, e) {
          var i = this.caretX,
            n = this.caretY,
            a = this.options,
            r = Yo[a.position].call(this, t, e);
          return !1 !== r && (i !== r.x || n !== r.y);
        },
      },
    ]),
    a
  );
})();
ns.positioners = Yo;
var as = {
    id: "tooltip",
    _element: ns,
    positioners: Yo,
    afterInit: function (t, e, i) {
      i && (t.tooltip = new ns({ _chart: t, options: i }));
    },
    beforeUpdate: function (t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    reset: function (t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    afterDraw: function (t) {
      var e = t.tooltip,
        i = { tooltip: e };
      !1 !== t.notifyPlugins("beforeTooltipDraw", i) &&
        (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i));
    },
    afterEvent: function (t, e) {
      if (t.tooltip) {
        var i = e.replay;
        t.tooltip.handleEvent(e.event, i) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: { weight: "bold" },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: "bold" },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: function (t, e) {
        return e.bodyFont.size;
      },
      boxWidth: function (t, e) {
        return e.bodyFont.size;
      },
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: { duration: 400, easing: "easeOutQuart" },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"],
        },
        opacity: { easing: "linear", duration: 200 },
      },
      callbacks: {
        beforeTitle: wt,
        title: function (t) {
          if (t.length > 0) {
            var e = t[0],
              i = e.chart.data.labels,
              n = i ? i.length : 0;
            if (this && this.options && "dataset" === this.options.mode)
              return e.dataset.label || "";
            if (e.label) return e.label;
            if (n > 0 && e.dataIndex < n) return i[e.dataIndex];
          }
          return "";
        },
        afterTitle: wt,
        beforeBody: wt,
        beforeLabel: wt,
        label: function (t) {
          if (this && this.options && "dataset" === this.options.mode)
            return t.label + ": " + t.formattedValue || t.formattedValue;
          var e = t.dataset.label || "";
          e && (e += ": ");
          var i = t.formattedValue;
          return Dt(i) || (e += i), e;
        },
        labelColor: function (t) {
          var e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor: function () {
          return this.options.bodyColor;
        },
        labelPointStyle: function (t) {
          var e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: wt,
        afterBody: wt,
        beforeFooter: wt,
        footer: wt,
        afterFooter: wt,
      },
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
      _scriptable: function (t) {
        return "filter" !== t && "itemSort" !== t && "external" !== t;
      },
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
  },
  rs = Object.freeze({
    __proto__: null,
    Decimation: _o,
    Filler: Vo,
    Legend: No,
    SubTitle: Uo,
    Title: Ho,
    Tooltip: as,
  });
function os(t, e, i, n) {
  var a = t.indexOf(e);
  return -1 === a
    ? (function (t, e, i, n) {
        return (
          "string" == typeof e
            ? ((i = t.push(e) - 1), n.unshift({ index: i, label: e }))
            : isNaN(e) && (i = null),
          i
        );
      })(t, e, i, n)
    : a !== t.lastIndexOf(e)
    ? i
    : a;
}
var ss = (function (i) {
  t(r, mr);
  var a = In(r);
  function r(t) {
    var e;
    return (
      n(this, r),
      ((e = a.call(this, t))._startValue = void 0),
      (e._valueRange = 0),
      (e._addedLabels = []),
      e
    );
  }
  return (
    s(r, [
      {
        key: "init",
        value: function (t) {
          var i = this._addedLabels;
          if (i.length) {
            var n,
              a = this.getLabels(),
              o = zn(i);
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var s = n.value,
                  l = s.index,
                  u = s.label;
                a[l] === u && a.splice(l, 1);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            this._addedLabels = [];
          }
          B(e(r.prototype), "init", this).call(this, t);
        },
      },
      {
        key: "parse",
        value: function (t, e) {
          if (Dt(t)) return null;
          var i = this.getLabels();
          return (function (t, e) {
            return null === t ? null : ge(Math.round(t), 0, e);
          })(
            (e =
              isFinite(e) && i[e] === t
                ? e
                : os(i, t, Tt(e, t), this._addedLabels)),
            i.length - 1
          );
        },
      },
      {
        key: "determineDataLimits",
        value: function () {
          var t = this.getUserBounds(),
            e = t.minDefined,
            i = t.maxDefined,
            n = this.getMinMax(!0),
            a = n.min,
            r = n.max;
          "ticks" === this.options.bounds &&
            (e || (a = 0), i || (r = this.getLabels().length - 1)),
            (this.min = a),
            (this.max = r);
        },
      },
      {
        key: "buildTicks",
        value: function () {
          var t = this.min,
            e = this.max,
            i = this.options.offset,
            n = [],
            a = this.getLabels();
          (a = 0 === t && e === a.length - 1 ? a : a.slice(t, e + 1)),
            (this._valueRange = Math.max(a.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
          for (var r = t; r <= e; r++) n.push({ value: r });
          return n;
        },
      },
      {
        key: "getLabelForValue",
        value: function (t) {
          var e = this.getLabels();
          return t >= 0 && t < e.length ? e[t] : t;
        },
      },
      {
        key: "configure",
        value: function () {
          B(e(r.prototype), "configure", this).call(this),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        },
      },
      {
        key: "getPixelForValue",
        value: function (t) {
          return (
            "number" != typeof t && (t = this.parse(t)),
            null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                )
          );
        },
      },
      {
        key: "getPixelForTick",
        value: function (t) {
          var e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        },
      },
      {
        key: "getValueForPixel",
        value: function (t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        },
      },
      {
        key: "getBasePixel",
        value: function () {
          return this.bottom;
        },
      },
    ]),
    r
  );
})();
function ls(t, e) {
  var i,
    n,
    a,
    r,
    o,
    s,
    l,
    u = [],
    h = t.bounds,
    c = t.step,
    f = t.min,
    d = t.max,
    v = t.precision,
    g = t.count,
    p = t.maxTicks,
    m = t.maxDigits,
    y = t.includeBounds,
    b = c || 1,
    x = p - 1,
    _ = e.min,
    k = e.max,
    w = !Dt(f),
    M = !Dt(d),
    S = !Dt(g),
    D = (k - _) / (m + 1),
    P = ae((k - _) / x / b) * b;
  if (P < 1e-14 && !w && !M) return [{ value: _ }, { value: k }];
  (r = Math.ceil(k / P) - Math.floor(_ / P)) > x &&
    (P = ae((r * P) / x / b) * b),
    Dt(v) || ((i = Math.pow(10, v)), (P = Math.ceil(P * i) / i)),
    "ticks" === h
      ? ((n = Math.floor(_ / P) * P), (a = Math.ceil(k / P) * P))
      : ((n = _), (a = k)),
    w &&
    M &&
    c &&
    ((o = (d - f) / c),
    (s = P / 1e3),
    (l = Math.round(o)) - s <= o && l + s >= o)
      ? ((P = (d - f) / (r = Math.round(Math.min((d - f) / P, p)))),
        (n = f),
        (a = d))
      : S
      ? (P = ((a = M ? d : a) - (n = w ? f : n)) / (r = g - 1))
      : (r = oe((r = (a - n) / P), Math.round(r), P / 1e3)
          ? Math.round(r)
          : Math.ceil(r));
  var O = Math.max(he(P), he(n));
  (i = Math.pow(10, Dt(v) ? O : v)),
    (n = Math.round(n * i) / i),
    (a = Math.round(a * i) / i);
  var C = 0;
  for (
    w &&
    (y && n !== f
      ? (u.push({ value: f }),
        n < f && C++,
        oe(Math.round((n + C * P) * i) / i, f, us(f, D, t)) && C++)
      : n < f && C++);
    C < r;
    ++C
  )
    u.push({ value: Math.round((n + C * P) * i) / i });
  return (
    M && y && a !== d
      ? u.length && oe(u[u.length - 1].value, d, us(d, D, t))
        ? (u[u.length - 1].value = d)
        : u.push({ value: d })
      : (M && a !== d) || u.push({ value: a }),
    u
  );
}
function us(t, e, i) {
  var n = i.horizontal,
    a = le(i.minRotation),
    r = (n ? Math.sin(a) : Math.cos(a)) || 0.001,
    o = 0.75 * e * ("" + t).length;
  return Math.min(e / r, o);
}
(ss.id = "category"),
  (ss.defaults = { ticks: { callback: ss.prototype.getLabelForValue } });
var hs = (function (i) {
    t(r, mr);
    var a = In(r);
    function r(t) {
      var e;
      return (
        n(this, r),
        ((e = a.call(this, t)).start = void 0),
        (e.end = void 0),
        (e._startValue = void 0),
        (e._endValue = void 0),
        (e._valueRange = 0),
        e
      );
    }
    return (
      s(r, [
        {
          key: "parse",
          value: function (t, e) {
            return Dt(t) ||
              (("number" == typeof t || t instanceof Number) && !isFinite(+t))
              ? null
              : +t;
          },
        },
        {
          key: "handleTickRangeOptions",
          value: function () {
            var t = this.options.beginAtZero,
              e = this.getUserBounds(),
              i = e.minDefined,
              n = e.maxDefined,
              a = this.min,
              r = this.max,
              o = function (t) {
                return (a = i ? a : t);
              },
              s = function (t) {
                return (r = n ? r : t);
              };
            if (t) {
              var l = ne(a),
                u = ne(r);
              l < 0 && u < 0 ? s(0) : l > 0 && u > 0 && o(0);
            }
            if (a === r) {
              var h = 1;
              (r >= Number.MAX_SAFE_INTEGER || a <= Number.MIN_SAFE_INTEGER) &&
                (h = Math.abs(0.05 * r)),
                s(r + h),
                t || o(a - h);
            }
            (this.min = a), (this.max = r);
          },
        },
        {
          key: "getTickLimit",
          value: function () {
            var t,
              e = this.options.ticks,
              i = e.maxTicksLimit,
              n = e.stepSize;
            return (
              n
                ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1) >
                    1e3 &&
                  (console.warn(
                    "scales."
                      .concat(this.id, ".ticks.stepSize: ")
                      .concat(n, " would result generating up to ")
                      .concat(t, " ticks. Limiting to 1000.")
                  ),
                  (t = 1e3))
                : ((t = this.computeTickLimit()), (i = i || 11)),
              i && (t = Math.min(i, t)),
              t
            );
          },
        },
        {
          key: "computeTickLimit",
          value: function () {
            return Number.POSITIVE_INFINITY;
          },
        },
        {
          key: "buildTicks",
          value: function () {
            var t = this.options,
              e = t.ticks,
              i = this.getTickLimit(),
              n = ls(
                {
                  maxTicks: (i = Math.max(2, i)),
                  bounds: t.bounds,
                  min: t.min,
                  max: t.max,
                  precision: e.precision,
                  step: e.stepSize,
                  count: e.count,
                  maxDigits: this._maxDigits(),
                  horizontal: this.isHorizontal(),
                  minRotation: e.minRotation || 0,
                  includeBounds: !1 !== e.includeBounds,
                },
                this._range || this
              );
            return (
              "ticks" === t.bounds && se(n, this, "value"),
              t.reverse
                ? (n.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              n
            );
          },
        },
        {
          key: "configure",
          value: function () {
            var t = this.ticks,
              i = this.min,
              n = this.max;
            if (
              (B(e(r.prototype), "configure", this).call(this),
              this.options.offset && t.length)
            ) {
              var a = (n - i) / Math.max(t.length - 1, 1) / 2;
              (i -= a), (n += a);
            }
            (this._startValue = i),
              (this._endValue = n),
              (this._valueRange = n - i);
          },
        },
        {
          key: "getLabelForValue",
          value: function (t) {
            return kn(t, this.chart.options.locale, this.options.ticks.format);
          },
        },
      ]),
      r
    );
  })(),
  cs = (function (e) {
    t(a, hs);
    var i = In(a);
    function a() {
      return n(this, a), i.apply(this, arguments);
    }
    return (
      s(a, [
        {
          key: "determineDataLimits",
          value: function () {
            var t = this.getMinMax(!0),
              e = t.min,
              i = t.max;
            (this.min = Ct(e) ? e : 0),
              (this.max = Ct(i) ? i : 1),
              this.handleTickRangeOptions();
          },
        },
        {
          key: "computeTickLimit",
          value: function () {
            var t = this.isHorizontal(),
              e = t ? this.width : this.height,
              i = le(this.options.ticks.minRotation),
              n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
              a = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, a.lineHeight / n));
          },
        },
        {
          key: "getPixelForValue",
          value: function (t) {
            return null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                );
          },
        },
        {
          key: "getValueForPixel",
          value: function (t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          },
        },
      ]),
      a
    );
  })();
function fs(t) {
  return 1 === t / Math.pow(10, Math.floor(ie(t)));
}
(cs.id = "linear"),
  (cs.defaults = { ticks: { callback: lr.formatters.numeric } });
var ds = (function (i) {
  t(r, mr);
  var a = In(r);
  function r(t) {
    var e;
    return (
      n(this, r),
      ((e = a.call(this, t)).start = void 0),
      (e.end = void 0),
      (e._startValue = void 0),
      (e._valueRange = 0),
      e
    );
  }
  return (
    s(r, [
      {
        key: "parse",
        value: function (t, e) {
          var i = hs.prototype.parse.apply(this, [t, e]);
          if (0 !== i) return Ct(i) && i > 0 ? i : null;
          this._zero = !0;
        },
      },
      {
        key: "determineDataLimits",
        value: function () {
          var t = this.getMinMax(!0),
            e = t.min,
            i = t.max;
          (this.min = Ct(e) ? Math.max(0, e) : null),
            (this.max = Ct(i) ? Math.max(0, i) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions();
        },
      },
      {
        key: "handleTickRangeOptions",
        value: function () {
          var t = this.getUserBounds(),
            e = t.minDefined,
            i = t.maxDefined,
            n = this.min,
            a = this.max,
            r = function (t) {
              return (n = e ? n : t);
            },
            o = function (t) {
              return (a = i ? a : t);
            },
            s = function (t, e) {
              return Math.pow(10, Math.floor(ie(t)) + e);
            };
          n === a && (n <= 0 ? (r(1), o(10)) : (r(s(n, -1)), o(s(a, 1)))),
            n <= 0 && r(s(a, -1)),
            a <= 0 && o(s(n, 1)),
            this._zero &&
              this.min !== this._suggestedMin &&
              n === s(this.min, 0) &&
              r(s(n, -1)),
            (this.min = n),
            (this.max = a);
        },
      },
      {
        key: "buildTicks",
        value: function () {
          var t = this.options,
            e = (function (t, e) {
              var i = Math.floor(ie(e.max)),
                n = Math.ceil(e.max / Math.pow(10, i)),
                a = [],
                r = At(t.min, Math.pow(10, Math.floor(ie(e.min)))),
                o = Math.floor(ie(r)),
                s = Math.floor(r / Math.pow(10, o)),
                l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
              do {
                a.push({ value: r, major: fs(r) }),
                  10 == ++s && ((s = 1), (l = ++o >= 0 ? 1 : l)),
                  (r = Math.round(s * Math.pow(10, o) * l) / l);
              } while (o < i || (o === i && s < n));
              var u = At(t.max, r);
              return a.push({ value: u, major: fs(r) }), a;
            })({ min: this._userMin, max: this._userMax }, this);
          return (
            "ticks" === t.bounds && se(e, this, "value"),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        },
      },
      {
        key: "getLabelForValue",
        value: function (t) {
          return void 0 === t
            ? "0"
            : kn(t, this.chart.options.locale, this.options.ticks.format);
        },
      },
      {
        key: "configure",
        value: function () {
          var t = this.min;
          B(e(r.prototype), "configure", this).call(this),
            (this._startValue = ie(t)),
            (this._valueRange = ie(this.max) - ie(t));
        },
      },
      {
        key: "getPixelForValue",
        value: function (t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min
                    ? 0
                    : (ie(t) - this._startValue) / this._valueRange
                )
          );
        },
      },
      {
        key: "getValueForPixel",
        value: function (t) {
          var e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        },
      },
    ]),
    r
  );
})();
function vs(t) {
  var e = t.ticks;
  if (e.display && t.display) {
    var i = Oi(e.backdropPadding);
    return Tt(e.font && e.font.size, si.font.size) + i.height;
  }
  return 0;
}
function gs(t, e, i, n, a) {
  return t === n || t === a
    ? { start: e - i / 2, end: e + i / 2 }
    : t < n || t > a
    ? { start: e - i, end: e }
    : { start: e, end: e + i };
}
function ps(t) {
  for (
    var e,
      i,
      n,
      a = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
      r = {},
      o = [],
      s = [],
      l = t.getLabels().length,
      u = 0;
    u < l;
    u++
  ) {
    var h = t.options.pointLabels.setContext(t.getPointLabelContext(u));
    s[u] = h.padding;
    var c = t.getPointPosition(u, t.drawingArea + s[u]),
      f = Ci(h.font),
      d =
        ((e = t.ctx),
        (i = f),
        (n = Pt((n = t._pointLabels[u])) ? n : [n]),
        { w: ui(e, i.string, n), h: n.length * i.lineHeight });
    o[u] = d;
    var v = t.getIndexAngle(u),
      g = ue(v),
      p = gs(g, c.x, d.w, 0, 180),
      m = gs(g, c.y, d.h, 90, 270);
    p.start < a.l && ((a.l = p.start), (r.l = v)),
      p.end > a.r && ((a.r = p.end), (r.r = v)),
      m.start < a.t && ((a.t = m.start), (r.t = v)),
      m.end > a.b && ((a.b = m.end), (r.b = v));
  }
  t._setReductions(t.drawingArea, a, r),
    (t._pointLabelItems = (function (t, e, i) {
      for (
        var n = [],
          a = t.getLabels().length,
          r = t.options,
          o = vs(r),
          s = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max),
          l = 0;
        l < a;
        l++
      ) {
        var u = 0 === l ? o / 2 : 0,
          h = t.getPointPosition(l, s + u + i[l]),
          c = ue(t.getIndexAngle(l)),
          f = e[l],
          d = bs(h.y, f.h, c),
          v = ms(c),
          g = ys(h.x, f.w, v);
        n.push({
          x: h.x,
          y: d,
          textAlign: v,
          left: g,
          top: d,
          right: g + f.w,
          bottom: d + f.h,
        });
      }
      return n;
    })(t, o, s));
}
function ms(t) {
  return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
}
function ys(t, e, i) {
  return "right" === i ? (t -= e) : "center" === i && (t -= e / 2), t;
}
function bs(t, e, i) {
  return (
    90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e), t
  );
}
function xs(t, e, i, n) {
  var a = t.ctx;
  if (i) a.arc(t.xCenter, t.yCenter, e, 0, Kt);
  else {
    var r = t.getPointPosition(0, e);
    a.moveTo(r.x, r.y);
    for (var o = 1; o < n; o++)
      (r = t.getPointPosition(o, e)), a.lineTo(r.x, r.y);
  }
}
function _s(t) {
  return re(t) ? t : 0;
}
(ds.id = "logarithmic"),
  (ds.defaults = {
    ticks: { callback: lr.formatters.logarithmic, major: { enabled: !0 } },
  });
var ks = (function (e) {
  t(a, hs);
  var i = In(a);
  function a(t) {
    var e;
    return (
      n(this, a),
      ((e = i.call(this, t)).xCenter = void 0),
      (e.yCenter = void 0),
      (e.drawingArea = void 0),
      (e._pointLabels = []),
      (e._pointLabelItems = []),
      e
    );
  }
  return (
    s(a, [
      {
        key: "setDimensions",
        value: function () {
          (this.width = this.maxWidth),
            (this.height = this.maxHeight),
            (this.paddingTop = vs(this.options) / 2),
            (this.xCenter = Math.floor(this.width / 2)),
            (this.yCenter = Math.floor((this.height - this.paddingTop) / 2)),
            (this.drawingArea =
              Math.min(this.height - this.paddingTop, this.width) / 2);
        },
      },
      {
        key: "determineDataLimits",
        value: function () {
          var t = this.getMinMax(!1),
            e = t.min,
            i = t.max;
          (this.min = Ct(e) && !isNaN(e) ? e : 0),
            (this.max = Ct(i) && !isNaN(i) ? i : 0),
            this.handleTickRangeOptions();
        },
      },
      {
        key: "computeTickLimit",
        value: function () {
          return Math.ceil(this.drawingArea / vs(this.options));
        },
      },
      {
        key: "generateTickLabels",
        value: function (t) {
          var e = this;
          hs.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels().map(function (t, i) {
              var n = Lt(e.options.pointLabels.callback, [t, i], e);
              return n || 0 === n ? n : "";
            }));
        },
      },
      {
        key: "fit",
        value: function () {
          var t = this.options;
          t.display && t.pointLabels.display
            ? ps(this)
            : this.setCenterPoint(0, 0, 0, 0);
        },
      },
      {
        key: "_setReductions",
        value: function (t, e, i) {
          var n = e.l / Math.sin(i.l),
            a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
            r = -e.t / Math.cos(i.t),
            o =
              -Math.max(e.b - (this.height - this.paddingTop), 0) /
              Math.cos(i.b);
          (n = _s(n)),
            (a = _s(a)),
            (r = _s(r)),
            (o = _s(o)),
            (this.drawingArea = Math.max(
              t / 2,
              Math.min(Math.floor(t - (n + a) / 2), Math.floor(t - (r + o) / 2))
            )),
            this.setCenterPoint(n, a, r, o);
        },
      },
      {
        key: "setCenterPoint",
        value: function (t, e, i, n) {
          var a = this.width - e - this.drawingArea,
            r = t + this.drawingArea,
            o = i + this.drawingArea,
            s = this.height - this.paddingTop - n - this.drawingArea;
          (this.xCenter = Math.floor((r + a) / 2 + this.left)),
            (this.yCenter = Math.floor(
              (o + s) / 2 + this.top + this.paddingTop
            ));
        },
      },
      {
        key: "getIndexAngle",
        value: function (t) {
          return de(
            t * (Kt / this.getLabels().length) +
              le(this.options.startAngle || 0)
          );
        },
      },
      {
        key: "getDistanceFromCenterForValue",
        value: function (t) {
          if (Dt(t)) return NaN;
          var e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        },
      },
      {
        key: "getValueForDistanceFromCenter",
        value: function (t) {
          if (Dt(t)) return NaN;
          var e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        },
      },
      {
        key: "getPointLabelContext",
        value: function (t) {
          var e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            var i = e[t];
            return (function (t, e, i) {
              return Ti(t, { label: i, index: e, type: "pointLabel" });
            })(this.getContext(), t, i);
          }
        },
      },
      {
        key: "getPointPosition",
        value: function (t, e) {
          var i = this.getIndexAngle(t) - Jt;
          return {
            x: Math.cos(i) * e + this.xCenter,
            y: Math.sin(i) * e + this.yCenter,
            angle: i,
          };
        },
      },
      {
        key: "getPointPositionForValue",
        value: function (t, e) {
          return this.getPointPosition(
            t,
            this.getDistanceFromCenterForValue(e)
          );
        },
      },
      {
        key: "getBasePosition",
        value: function (t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        },
      },
      {
        key: "getPointLabelPosition",
        value: function (t) {
          var e = this._pointLabelItems[t];
          return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
        },
      },
      {
        key: "drawBackground",
        value: function () {
          var t = this.options,
            e = t.backgroundColor,
            i = t.grid.circular;
          if (e) {
            var n = this.ctx;
            n.save(),
              n.beginPath(),
              xs(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                i,
                this.getLabels().length
              ),
              n.closePath(),
              (n.fillStyle = e),
              n.fill(),
              n.restore();
          }
        },
      },
      {
        key: "drawGrid",
        value: function () {
          var t,
            e,
            i,
            n = this,
            a = this.ctx,
            r = this.options,
            o = r.angleLines,
            s = r.grid,
            l = this.getLabels().length;
          if (
            (r.pointLabels.display &&
              (function (t, e) {
                for (
                  var i = t.ctx, n = t.options.pointLabels, a = e - 1;
                  a >= 0;
                  a--
                ) {
                  var r = n.setContext(t.getPointLabelContext(a)),
                    o = Ci(r.font),
                    s = t._pointLabelItems[a],
                    l = s.x,
                    u = s.y,
                    h = s.textAlign,
                    c = s.left,
                    f = s.top,
                    d = s.right,
                    v = s.bottom,
                    g = r.backdropColor;
                  if (!Dt(g)) {
                    var p = Oi(r.backdropPadding);
                    (i.fillStyle = g),
                      i.fillRect(
                        c - p.left,
                        f - p.top,
                        d - c + p.width,
                        v - f + p.height
                      );
                  }
                  yi(i, t._pointLabels[a], l, u + o.lineHeight / 2, o, {
                    color: r.color,
                    textAlign: h,
                    textBaseline: "middle",
                  });
                }
              })(this, l),
            s.display &&
              this.ticks.forEach(function (t, i) {
                if (0 !== i) {
                  e = n.getDistanceFromCenterForValue(t.value);
                  var a = s.setContext(n.getContext(i - 1));
                  !(function (t, e, i, n) {
                    var a = t.ctx,
                      r = e.circular,
                      o = e.color,
                      s = e.lineWidth;
                    (!r && !n) ||
                      !o ||
                      !s ||
                      i < 0 ||
                      (a.save(),
                      (a.strokeStyle = o),
                      (a.lineWidth = s),
                      a.setLineDash(e.borderDash),
                      (a.lineDashOffset = e.borderDashOffset),
                      a.beginPath(),
                      xs(t, i, r, n),
                      a.closePath(),
                      a.stroke(),
                      a.restore());
                  })(n, a, e, l);
                }
              }),
            o.display)
          ) {
            for (a.save(), t = this.getLabels().length - 1; t >= 0; t--) {
              var u = o.setContext(this.getPointLabelContext(t)),
                h = u.color,
                c = u.lineWidth;
              c &&
                h &&
                ((a.lineWidth = c),
                (a.strokeStyle = h),
                a.setLineDash(u.borderDash),
                (a.lineDashOffset = u.borderDashOffset),
                (e = this.getDistanceFromCenterForValue(
                  r.ticks.reverse ? this.min : this.max
                )),
                (i = this.getPointPosition(t, e)),
                a.beginPath(),
                a.moveTo(this.xCenter, this.yCenter),
                a.lineTo(i.x, i.y),
                a.stroke());
            }
            a.restore();
          }
        },
      },
      { key: "drawBorder", value: function () {} },
      {
        key: "drawLabels",
        value: function () {
          var t = this,
            e = this.ctx,
            i = this.options,
            n = i.ticks;
          if (n.display) {
            var a,
              r,
              o = this.getIndexAngle(0);
            e.save(),
              e.translate(this.xCenter, this.yCenter),
              e.rotate(o),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              this.ticks.forEach(function (o, s) {
                if (0 !== s || i.reverse) {
                  var l = n.setContext(t.getContext(s)),
                    u = Ci(l.font);
                  if (
                    ((a = t.getDistanceFromCenterForValue(t.ticks[s].value)),
                    l.showLabelBackdrop)
                  ) {
                    (e.font = u.string),
                      (r = e.measureText(o.label).width),
                      (e.fillStyle = l.backdropColor);
                    var h = Oi(l.backdropPadding);
                    e.fillRect(
                      -r / 2 - h.left,
                      -a - u.size / 2 - h.top,
                      r + h.width,
                      u.size + h.height
                    );
                  }
                  yi(e, o.label, 0, -a, u, { color: l.color });
                }
              }),
              e.restore();
          }
        },
      },
      { key: "drawTitle", value: function () {} },
    ]),
    a
  );
})();
(ks.id = "radialLinear"),
  (ks.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: lr.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback: function (t) {
        return t;
      },
      padding: 5,
    },
  }),
  (ks.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  (ks.descriptors = { angleLines: { _fallback: "grid" } });
var ws = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ms = Object.keys(ws);
function Ss(t, e) {
  return t - e;
}
function Ds(t, e) {
  if (Dt(e)) return null;
  var i = t._adapter,
    n = t._parseOpts,
    a = n.parser,
    r = n.round,
    o = n.isoWeekday,
    s = e;
  return (
    "function" == typeof a && (s = a(s)),
    Ct(s) || (s = "string" == typeof a ? i.parse(s, a) : i.parse(s)),
    null === s
      ? null
      : (r &&
          (s =
            "week" !== r || (!re(o) && !0 !== o)
              ? i.startOf(s, r)
              : i.startOf(s, "isoWeek", o)),
        +s)
  );
}
function Ps(t, e, i, n) {
  for (var a = Ms.length, r = Ms.indexOf(t); r < a - 1; ++r) {
    var o = ws[Ms[r]],
      s = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((i - e) / (s * o.size)) <= n) return Ms[r];
  }
  return Ms[a - 1];
}
function Os(t, e, i) {
  if (i) {
    if (i.length) {
      var n = Ri(i, e),
        a = n.lo,
        r = n.hi;
      t[i[a] >= e ? i[a] : i[r]] = !0;
    }
  } else t[e] = !0;
}
function Cs(t, e, i) {
  var n,
    a,
    r = [],
    o = {},
    s = e.length;
  for (n = 0; n < s; ++n) (o[(a = e[n])] = n), r.push({ value: a, major: !1 });
  return 0 !== s && i
    ? (function (t, e, i, n) {
        var a,
          r,
          o = t._adapter,
          s = +o.startOf(e[0].value, n),
          l = e[e.length - 1].value;
        for (a = s; a <= l; a = +o.add(a, 1, n))
          (r = i[a]) >= 0 && (e[r].major = !0);
        return e;
      })(t, r, o, i)
    : r;
}
var As = (function (i) {
  t(r, mr);
  var a = In(r);
  function r(t) {
    var e;
    return (
      n(this, r),
      ((e = a.call(this, t))._cache = { data: [], labels: [], all: [] }),
      (e._unit = "day"),
      (e._majorUnit = void 0),
      (e._offsets = {}),
      (e._normalized = !1),
      (e._parseOpts = void 0),
      e
    );
  }
  return (
    s(r, [
      {
        key: "init",
        value: function (t, i) {
          var n = t.time || (t.time = {}),
            a = (this._adapter = new xa._date(t.adapters.date));
          Wt(n.displayFormats, a.formats()),
            (this._parseOpts = {
              parser: n.parser,
              round: n.round,
              isoWeekday: n.isoWeekday,
            }),
            B(e(r.prototype), "init", this).call(this, t),
            (this._normalized = i.normalized);
        },
      },
      {
        key: "parse",
        value: function (t, e) {
          return void 0 === t ? null : Ds(this, t);
        },
      },
      {
        key: "beforeLayout",
        value: function () {
          B(e(r.prototype), "beforeLayout", this).call(this),
            (this._cache = { data: [], labels: [], all: [] });
        },
      },
      {
        key: "determineDataLimits",
        value: function () {
          var t = this.options,
            e = this._adapter,
            i = t.time.unit || "day",
            n = this.getUserBounds(),
            a = n.min,
            r = n.max,
            o = n.minDefined,
            s = n.maxDefined;
          function l(t) {
            o || isNaN(t.min) || (a = Math.min(a, t.min)),
              s || isNaN(t.max) || (r = Math.max(r, t.max));
          }
          (o && s) ||
            (l(this._getLabelBounds()),
            ("ticks" === t.bounds && "labels" === t.ticks.source) ||
              l(this.getMinMax(!1))),
            (a = Ct(a) && !isNaN(a) ? a : +e.startOf(Date.now(), i)),
            (r = Ct(r) && !isNaN(r) ? r : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(a, r - 1)),
            (this.max = Math.max(a + 1, r));
        },
      },
      {
        key: "_getLabelBounds",
        value: function () {
          var t = this.getLabelTimestamps(),
            e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          return (
            t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
          );
        },
      },
      {
        key: "buildTicks",
        value: function () {
          var t = this.options,
            e = t.time,
            i = t.ticks,
            n =
              "labels" === i.source
                ? this.getLabelTimestamps()
                : this._generate();
          "ticks" === t.bounds &&
            n.length &&
            ((this.min = this._userMin || n[0]),
            (this.max = this._userMax || n[n.length - 1]));
          var a = this.min,
            r = (function (t, e, i) {
              for (var n = 0, a = t.length; n < a && t[n] < e; ) n++;
              for (; a > n && t[a - 1] > i; ) a--;
              return n > 0 || a < t.length ? t.slice(n, a) : t;
            })(n, a, this.max);
          return (
            (this._unit =
              e.unit ||
              (i.autoSkip
                ? Ps(e.minUnit, this.min, this.max, this._getLabelCapacity(a))
                : (function (t, e, i, n, a) {
                    for (var r = Ms.length - 1; r >= Ms.indexOf(i); r--) {
                      var o = Ms[r];
                      if (ws[o].common && t._adapter.diff(a, n, o) >= e - 1)
                        return o;
                    }
                    return Ms[i ? Ms.indexOf(i) : 0];
                  })(this, r.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              i.major.enabled && "year" !== this._unit
                ? (function (t) {
                    for (var e = Ms.indexOf(t) + 1, i = Ms.length; e < i; ++e)
                      if (ws[Ms[e]].common) return Ms[e];
                  })(this._unit)
                : void 0),
            this.initOffsets(n),
            t.reverse && r.reverse(),
            Cs(this, r, this._majorUnit)
          );
        },
      },
      {
        key: "initOffsets",
        value: function (t) {
          var e,
            i,
            n = 0,
            a = 0;
          this.options.offset &&
            t.length &&
            ((e = this.getDecimalForValue(t[0])),
            (n =
              1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
            (i = this.getDecimalForValue(t[t.length - 1])),
            (a =
              1 === t.length
                ? i
                : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
          var r = t.length < 3 ? 0.5 : 0.25;
          (n = ge(n, 0, r)),
            (a = ge(a, 0, r)),
            (this._offsets = { start: n, end: a, factor: 1 / (n + 1 + a) });
        },
      },
      {
        key: "_generate",
        value: function () {
          var t,
            e,
            i = this._adapter,
            n = this.min,
            a = this.max,
            r = this.options,
            o = r.time,
            s = o.unit || Ps(o.minUnit, n, a, this._getLabelCapacity(n)),
            l = Tt(o.stepSize, 1),
            u = "week" === s && o.isoWeekday,
            h = re(u) || !0 === u,
            c = {},
            f = n;
          if (
            (h && (f = +i.startOf(f, "isoWeek", u)),
            (f = +i.startOf(f, h ? "day" : s)),
            i.diff(a, n, s) > 1e5 * l)
          )
            throw new Error(
              n +
                " and " +
                a +
                " are too far apart with stepSize of " +
                l +
                " " +
                s
            );
          var d = "data" === r.ticks.source && this.getDataTimestamps();
          for (t = f, e = 0; t < a; t = +i.add(t, l, s), e++) Os(c, t, d);
          return (
            (t !== a && "ticks" !== r.bounds && 1 !== e) || Os(c, t, d),
            Object.keys(c)
              .sort(function (t, e) {
                return t - e;
              })
              .map(function (t) {
                return +t;
              })
          );
        },
      },
      {
        key: "getLabelForValue",
        value: function (t) {
          var e = this._adapter,
            i = this.options.time;
          return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime);
        },
      },
      {
        key: "_tickFormatFunction",
        value: function (t, e, i, n) {
          var a = this.options,
            r = a.time.displayFormats,
            o = this._unit,
            s = this._majorUnit,
            l = o && r[o],
            u = s && r[s],
            h = i[e],
            c = s && u && h && h.major,
            f = this._adapter.format(t, n || (c ? u : l)),
            d = a.ticks.callback;
          return d ? Lt(d, [f, e, i], this) : f;
        },
      },
      {
        key: "generateTickLabels",
        value: function (t) {
          var e, i, n;
          for (e = 0, i = t.length; e < i; ++e)
            (n = t[e]).label = this._tickFormatFunction(n.value, e, t);
        },
      },
      {
        key: "getDecimalForValue",
        value: function (t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        },
      },
      {
        key: "getPixelForValue",
        value: function (t) {
          var e = this._offsets,
            i = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + i) * e.factor);
        },
      },
      {
        key: "getValueForPixel",
        value: function (t) {
          var e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + i * (this.max - this.min);
        },
      },
      {
        key: "_getLabelSize",
        value: function (t) {
          var e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = le(this.isHorizontal() ? e.maxRotation : e.minRotation),
            a = Math.cos(n),
            r = Math.sin(n),
            o = this._resolveTickFontOptions(0).size;
          return { w: i * a + o * r, h: i * r + o * a };
        },
      },
      {
        key: "_getLabelCapacity",
        value: function (t) {
          var e = this.options.time,
            i = e.displayFormats,
            n = i[e.unit] || i.millisecond,
            a = this._tickFormatFunction(
              t,
              0,
              Cs(this, [t], this._majorUnit),
              n
            ),
            r = this._getLabelSize(a),
            o =
              Math.floor(
                this.isHorizontal() ? this.width / r.w : this.height / r.h
              ) - 1;
          return o > 0 ? o : 1;
        },
      },
      {
        key: "getDataTimestamps",
        value: function () {
          var t,
            e,
            i = this._cache.data || [];
          if (i.length) return i;
          var n = this.getMatchingVisibleMetas();
          if (this._normalized && n.length)
            return (this._cache.data = n[0].controller.getAllParsedValues(
              this
            ));
          for (t = 0, e = n.length; t < e; ++t)
            i = i.concat(n[t].controller.getAllParsedValues(this));
          return (this._cache.data = this.normalize(i));
        },
      },
      {
        key: "getLabelTimestamps",
        value: function () {
          var t,
            e,
            i = this._cache.labels || [];
          if (i.length) return i;
          var n = this.getLabels();
          for (t = 0, e = n.length; t < e; ++t) i.push(Ds(this, n[t]));
          return (this._cache.labels = this._normalized
            ? i
            : this.normalize(i));
        },
      },
      {
        key: "normalize",
        value: function (t) {
          return Fi(t.sort(Ss));
        },
      },
    ]),
    r
  );
})();
function Ts(t, e, i) {
  var n,
    a,
    r,
    o,
    s = 0,
    l = t.length - 1;
  if (i) {
    if (e >= t[s].pos && e <= t[l].pos) {
      var u = Li(t, "pos", e);
      (s = u.lo), (l = u.hi);
    }
    var h = t[s];
    (n = h.pos), (r = h.time);
    var c = t[l];
    (a = c.pos), (o = c.time);
  } else {
    if (e >= t[s].time && e <= t[l].time) {
      var f = Li(t, "time", e);
      (s = f.lo), (l = f.hi);
    }
    var d = t[s];
    (n = d.time), (r = d.pos);
    var v = t[l];
    (a = v.time), (o = v.pos);
  }
  var g = a - n;
  return g ? r + ((o - r) * (e - n)) / g : r;
}
(As.id = "time"),
  (As.defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", major: { enabled: !1 } },
  });
var Rs = (function (i) {
  t(r, As);
  var a = In(r);
  function r(t) {
    var e;
    return (
      n(this, r),
      ((e = a.call(this, t))._table = []),
      (e._minPos = void 0),
      (e._tableRange = void 0),
      e
    );
  }
  return (
    s(r, [
      {
        key: "initOffsets",
        value: function () {
          var t = this._getTimestampsForTable(),
            i = (this._table = this.buildLookupTable(t));
          (this._minPos = Ts(i, this.min)),
            (this._tableRange = Ts(i, this.max) - this._minPos),
            B(e(r.prototype), "initOffsets", this).call(this, t);
        },
      },
      {
        key: "buildLookupTable",
        value: function (t) {
          var e,
            i,
            n,
            a,
            r,
            o = this.min,
            s = this.max,
            l = [],
            u = [];
          for (e = 0, i = t.length; e < i; ++e)
            (a = t[e]) >= o && a <= s && l.push(a);
          if (l.length < 2)
            return [
              { time: o, pos: 0 },
              { time: s, pos: 1 },
            ];
          for (e = 0, i = l.length; e < i; ++e)
            (r = l[e + 1]),
              (n = l[e - 1]),
              (a = l[e]),
              Math.round((r + n) / 2) !== a &&
                u.push({ time: a, pos: e / (i - 1) });
          return u;
        },
      },
      {
        key: "_getTimestampsForTable",
        value: function () {
          var t = this._cache.all || [];
          if (t.length) return t;
          var e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
          return (
            (t =
              e.length && i.length
                ? this.normalize(e.concat(i))
                : e.length
                ? e
                : i),
            (t = this._cache.all = t)
          );
        },
      },
      {
        key: "getDecimalForValue",
        value: function (t) {
          return (Ts(this._table, t) - this._minPos) / this._tableRange;
        },
      },
      {
        key: "getValueForPixel",
        value: function (t) {
          var e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return Ts(this._table, i * this._tableRange + this._minPos, !0);
        },
      },
    ]),
    r
  );
})();
(Rs.id = "timeseries"), (Rs.defaults = As.defaults);
var Ls = [
  ma,
  yo,
  rs,
  Object.freeze({
    __proto__: null,
    CategoryScale: ss,
    LinearScale: cs,
    LogarithmicScale: ds,
    RadialLinearScale: ks,
    TimeScale: As,
    TimeSeriesScale: Rs,
  }),
];
function Es(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function Is(t) {
  for (var e, i = [t[1]], n = {}, a = 0; a < i.length; a += 1) n = W(n, i[a]);
  return {
    c: function () {
      (e = u("canvas")), this.h();
    },
    l: function (t) {
      (e = h(t, "CANVAS", {})), c(e).forEach(f), this.h();
    },
    h: function () {
      N(e, n);
    },
    m: function (i, n) {
      d(i, e, n), t[6](e);
    },
    p: function (t, a) {
      v(a, 1)[0], N(e, (n = j(i, [t[1]])));
    },
    i: A,
    o: A,
    d: function (i) {
      i && f(e), t[6](null);
    },
  };
}
function zs(t, e, i) {
  Ur.register.apply(Ur, V(Ls));
  var n,
    a = e.data,
    r =
      void 0 === a
        ? { labels: [], datasets: [{ data: [] }], yMarkers: {}, yRegions: [] }
        : a,
    o = e.type,
    s = void 0 === o ? "line" : o,
    l = e.options,
    u = void 0 === l ? {} : l,
    h = e.plugins,
    c = void 0 === h ? [] : h,
    f = null,
    d = (function (t, e) {
      for (
        var i = ["children", "$$scope", "$$slots"].concat(e),
          n = {},
          a = 0,
          r = Object.keys(t);
        a < r.length;
        a++
      ) {
        var o = r[a];
        i.includes(o) || (n[o] = t[o]);
      }
      return n;
    })(e, ["data", "type", "options", "plugins"]);
  return (
    b(function () {
      f = new Ur(n, { type: s, data: r, options: u, plugins: c });
    }),
    H(function () {
      f &&
        ((f.data = r),
        (f.type = s),
        (f.options = u),
        (f.plugins = c),
        f.update());
    }),
    $(function () {
      f = null;
    }),
    (t.$$set = function (t) {
      i(8, (e = W(W({}, e), U(t)))),
        "data" in t && i(2, (r = t.data)),
        "type" in t && i(3, (s = t.type)),
        "options" in t && i(4, (u = t.options)),
        "plugins" in t && i(5, (c = t.plugins));
    }),
    (e = U(e)),
    [
      n,
      d,
      r,
      s,
      u,
      c,
      function (t) {
        Y[t ? "unshift" : "push"](function () {
          i(0, (n = t));
        });
      },
    ]
  );
}
var Fs = (function (e) {
  t(u, l);
  var i = Es(u);
  function u(t) {
    var e;
    return (
      n(this, u),
      (e = i.call(this)),
      a(o(e), t, zs, Is, r, { data: 2, type: 3, options: 4, plugins: 5 }),
      e
    );
  }
  return s(u);
})();
function Vs(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function Bs(t) {
  for (
    var e, i, n = [t[0], { type: "line" }], a = {}, r = 0;
    r < n.length;
    r += 1
  )
    a = W(a, n[r]);
  return (
    (e = new Fs({ props: a })),
    {
      c: function () {
        T(e.$$.fragment);
      },
      l: function (t) {
        R(e.$$.fragment, t);
      },
      m: function (t, n) {
        L(e, t, n), (i = !0);
      },
      p: function (t, i) {
        var a = 1 & v(i, 1)[0] ? j(n, [X(t[0]), n[1]]) : {};
        e.$set(a);
      },
      i: function (t) {
        i || (y(e.$$.fragment, t), (i = !0));
      },
      o: function (t) {
        p(e.$$.fragment, t), (i = !1);
      },
      d: function (t) {
        E(e, t);
      },
    }
  );
}
function Ws(t, e, i) {
  return (
    (t.$$set = function (t) {
      i(0, (e = W(W({}, e), U(t))));
    }),
    [(e = U(e))]
  );
}
var Ns = (function (e) {
  t(u, l);
  var i = Vs(u);
  function u(t) {
    var e;
    return n(this, u), (e = i.call(this)), a(o(e), t, Ws, Bs, r, {}), e;
  }
  return s(u);
})();
function js(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function Hs(t) {
  var e,
    i,
    n,
    a,
    r,
    o = _.i18n.sevelDayResponseTime + "";
  return (
    (a = new Ns({
      props: {
        data: {
          labels: t[1],
          datasets: [
            {
              label: _.i18n.responseTimeMs,
              backgroundColor: "#89e0cf",
              borderColor: "#1abc9c",
              data: t[2],
            },
          ],
        },
        width: t[3],
        height: 400,
        options: {
          responsive: !0,
          maintainAspectRatio: !0,
          scales: { xAxes: [{ display: !1, gridLines: { display: !1 } }] },
        },
      },
    })),
    {
      c: function () {
        (e = u("h2")), (i = k(o)), (n = w()), T(a.$$.fragment);
      },
      l: function (t) {
        e = h(t, "H2", {});
        var r = c(e);
        (i = M(r, o)), r.forEach(f), (n = S(t)), R(a.$$.fragment, t);
      },
      m: function (t, o) {
        d(t, e, o), O(e, i), d(t, n, o), L(a, t, o), (r = !0);
      },
      p: function (t, e) {
        var i = {};
        6 & e &&
          (i.data = {
            labels: t[1],
            datasets: [
              {
                label: _.i18n.responseTimeMs,
                backgroundColor: "#89e0cf",
                borderColor: "#1abc9c",
                data: t[2],
              },
            ],
          }),
          8 & e && (i.width = t[3]),
          a.$set(i);
      },
      i: function (t) {
        r || (y(a.$$.fragment, t), (r = !0));
      },
      o: function (t) {
        p(a.$$.fragment, t), (r = !1);
      },
      d: function (t) {
        t && f(e), t && f(n), E(a, t);
      },
    }
  );
}
function $s(t) {
  var e, i;
  return (
    (e = new Q({})),
    {
      c: function () {
        T(e.$$.fragment);
      },
      l: function (t) {
        R(e.$$.fragment, t);
      },
      m: function (t, n) {
        L(e, t, n), (i = !0);
      },
      p: A,
      i: function (t) {
        i || (y(e.$$.fragment, t), (i = !0));
      },
      o: function (t) {
        p(e.$$.fragment, t), (i = !1);
      },
      d: function (t) {
        E(e, t);
      },
    }
  );
}
function Us(t) {
  var e,
    i,
    n,
    a,
    r,
    o = [$s, Hs],
    s = [];
  function l(t, e) {
    return t[0] ? 0 : t[2].length ? 1 : -1;
  }
  return (
    ~(i = l(t)) && (n = s[i] = o[i](t)),
    {
      c: function () {
        (e = u("section")), n && n.c(), this.h();
      },
      l: function (t) {
        e = h(t, "SECTION", {});
        var i = c(e);
        n && n.l(i), i.forEach(f), this.h();
      },
      h: function () {
        q(function () {
          return t[5].call(e);
        });
      },
      m: function (n, o) {
        d(n, e, o), ~i && s[i].m(e, null), (a = K(e, t[5].bind(e))), (r = !0);
      },
      p: function (t, a) {
        var r = v(a, 1)[0],
          u = i;
        (i = l(t)) === u
          ? ~i && s[i].p(t, r)
          : (n &&
              (g(),
              p(s[u], 1, 1, function () {
                s[u] = null;
              }),
              m()),
            ~i
              ? ((n = s[i]) ? n.p(t, r) : (n = s[i] = o[i](t)).c(),
                y(n, 1),
                n.m(e, null))
              : (n = null));
      },
      i: function (t) {
        r || (y(n), (r = !0));
      },
      o: function (t) {
        p(n), (r = !1);
      },
      d: function (t) {
        t && f(e), ~i && s[i].d(), a();
      },
    }
  );
}
function Ys(t, e, i) {
  var n = e.slug,
    a = !0,
    r = J(),
    o = _.owner,
    s = _.repo,
    l = [],
    u = [],
    h = [],
    c = 800;
  return (
    b(
      G(
        x.mark(function t() {
          return x.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      tt(
                        "commits-".concat(o, "-").concat(s, "-").concat(n),
                        function () {
                          return r.repos.listCommits({
                            owner: o,
                            repo: s,
                            path: "history/".concat(n, ".yml"),
                            per_page: 28,
                          });
                        }
                      )
                    );
                  case 3:
                    (l = t.sent.data.reverse()), (t.next = 9);
                    break;
                  case 6:
                    (t.prev = 6), (t.t0 = t.catch(0)), Z(t.t0);
                  case 9:
                    (l = l.map(function (t, e) {
                      return (
                        (t.showHeading =
                          0 === e ||
                          new Date(l[e - 1].created_at).toLocaleDateString() !==
                            new Date(t.created_at).toLocaleDateString()),
                        t
                      );
                    })),
                      i(
                        2,
                        (h = l
                          .filter(function (t) {
                            return t.commit.message.includes("ms) [skip ci]");
                          })
                          .map(function (t) {
                            return parseInt(
                              t.commit.message.split(" in ")[1].split("ms")[0]
                            );
                          }))
                      ),
                      i(
                        1,
                        (u = l
                          .filter(function (t) {
                            return t.commit.message.includes("ms) [skip ci]");
                          })
                          .map(function (t) {
                            return new Date(
                              t.commit.committer.date
                            ).toLocaleString();
                          }))
                      ),
                      i(0, (a = !1));
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 6]]
          );
        })
      )
    ),
    (t.$$set = function (t) {
      "slug" in t && i(4, (n = t.slug));
    }),
    [
      a,
      u,
      h,
      c,
      n,
      function () {
        (c = this.clientWidth), i(3, c);
      },
    ]
  );
}
var Xs = (function (e) {
  t(u, l);
  var i = js(u);
  function u(t) {
    var e;
    return (
      n(this, u), (e = i.call(this)), a(o(e), t, Ys, Us, r, { slug: 4 }), e
    );
  }
  return s(u);
})();
function qs(t) {
  var n = (function () {
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
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = e(t);
    if (n) {
      var o = e(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else a = r.apply(this, arguments);
    return i(this, a);
  };
}
function Ks(t) {
  var e, i, n, a, r, o;
  return (
    (e = new st({ props: { slug: t[0] } })),
    (n = new Xs({ props: { slug: t[0] } })),
    (r = new pt({ props: { slug: t[0] } })),
    {
      c: function () {
        T(e.$$.fragment),
          (i = w()),
          T(n.$$.fragment),
          (a = w()),
          T(r.$$.fragment);
      },
      l: function (t) {
        R(e.$$.fragment, t),
          (i = S(t)),
          R(n.$$.fragment, t),
          (a = S(t)),
          R(r.$$.fragment, t);
      },
      m: function (t, s) {
        L(e, t, s), d(t, i, s), L(n, t, s), d(t, a, s), L(r, t, s), (o = !0);
      },
      p: function (t, i) {
        var a = v(i, 1)[0],
          o = {};
        1 & a && (o.slug = t[0]), e.$set(o);
        var s = {};
        1 & a && (s.slug = t[0]), n.$set(s);
        var l = {};
        1 & a && (l.slug = t[0]), r.$set(l);
      },
      i: function (t) {
        o ||
          (y(e.$$.fragment, t),
          y(n.$$.fragment, t),
          y(r.$$.fragment, t),
          (o = !0));
      },
      o: function (t) {
        p(e.$$.fragment, t), p(n.$$.fragment, t), p(r.$$.fragment, t), (o = !1);
      },
      d: function (t) {
        E(e, t), t && f(i), E(n, t), t && f(a), E(r, t);
      },
    }
  );
}
function Gs(t) {
  return Zs.apply(this, arguments);
}
function Zs() {
  return (Zs = G(
    x.mark(function t(e) {
      var i;
      return x.wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (i = e.params.number), t.abrupt("return", { slug: i });
            case 2:
            case "end":
              return t.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function Qs(t, e, i) {
  var n = e.slug;
  return (
    (t.$$set = function (t) {
      "slug" in t && i(0, (n = t.slug));
    }),
    [n]
  );
}
var Js = (function (e) {
  t(u, l);
  var i = qs(u);
  function u(t) {
    var e;
    return (
      n(this, u), (e = i.call(this)), a(o(e), t, Qs, Ks, r, { slug: 0 }), e
    );
  }
  return s(u);
})();
export { Js as default, Gs as preload };
