function Ty(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Ry(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Eh = { exports: {} },
  Ns = {},
  kh = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = Symbol.for("react.element"),
  My = Symbol.for("react.portal"),
  Ay = Symbol.for("react.fragment"),
  Ly = Symbol.for("react.strict_mode"),
  Dy = Symbol.for("react.profiler"),
  jy = Symbol.for("react.provider"),
  Ny = Symbol.for("react.context"),
  Vy = Symbol.for("react.forward_ref"),
  Fy = Symbol.for("react.suspense"),
  Oy = Symbol.for("react.memo"),
  _y = Symbol.for("react.lazy"),
  Wc = Symbol.iterator;
function zy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wc && e[Wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ch = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Th = Object.assign,
  Rh = {};
function Ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rh),
    (this.updater = n || Ch);
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mh() {}
Mh.prototype = Ir.prototype;
function yu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rh),
    (this.updater = n || Ch);
}
var vu = (yu.prototype = new Mh());
vu.constructor = yu;
Th(vu, Ir.prototype);
vu.isPureReactComponent = !0;
var Hc = Array.isArray,
  Ah = Object.prototype.hasOwnProperty,
  xu = { current: null },
  Lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ah.call(t, r) && !Lh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ji,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: xu.current,
  };
}
function Iy(e, t) {
  return {
    $$typeof: Ji,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ji;
}
function By(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yc = /\/+/g;
function ga(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? By("" + e.key)
    : t.toString(36);
}
function Io(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ji:
          case My:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ga(s, 0) : r),
      Hc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Yc, "$&/") + "/"),
          Io(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (wu(i) &&
            (i = Iy(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Yc, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Hc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ga(o, a);
      s += Io(o, t, n, l, i);
    }
  else if (((l = zy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + ga(o, a++)), (s += Io(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Io(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Uy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Bo = { transition: null },
  by = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: xu,
  };
G.Children = {
  map: yo,
  forEach: function (e, t, n) {
    yo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
G.Component = Ir;
G.Fragment = Ay;
G.Profiler = Dy;
G.PureComponent = yu;
G.StrictMode = Ly;
G.Suspense = Fy;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Th({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = xu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Ah.call(t, l) &&
        !Lh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ji, type: e.type, key: i, ref: o, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ny,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jy, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Dh;
G.createFactory = function (e) {
  var t = Dh.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Vy, render: e };
};
G.isValidElement = wu;
G.lazy = function (e) {
  return { $$typeof: _y, _payload: { _status: -1, _result: e }, _init: Uy };
};
G.memo = function (e, t) {
  return { $$typeof: Oy, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
G.useContext = function (e) {
  return He.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
G.useId = function () {
  return He.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return He.current.useRef(e);
};
G.useState = function (e) {
  return He.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return He.current.useTransition();
};
G.version = "18.2.0";
kh.exports = G;
var C = kh.exports;
const Vs = Ry(C),
  $y = Ty({ __proto__: null, default: Vs }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wy = C,
  Hy = Symbol.for("react.element"),
  Yy = Symbol.for("react.fragment"),
  Ky = Object.prototype.hasOwnProperty,
  Gy = Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xy = { key: !0, ref: !0, __self: !0, __source: !0 };
function jh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ky.call(t, r) && !Xy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Hy,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Gy.current,
  };
}
Ns.Fragment = Yy;
Ns.jsx = jh;
Ns.jsxs = jh;
Eh.exports = Ns;
var w = Eh.exports,
  Nh = { exports: {} },
  at = {},
  Vh = { exports: {} },
  Fh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, _) {
    var U = D.length;
    D.push(_);
    e: for (; 0 < U; ) {
      var B = (U - 1) >>> 1,
        te = D[B];
      if (0 < i(te, _)) (D[B] = _), (D[U] = te), (U = B);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var _ = D[0],
      U = D.pop();
    if (U !== _) {
      D[0] = U;
      e: for (var B = 0, te = D.length, _t = te >>> 1; B < _t; ) {
        var ee = 2 * (B + 1) - 1,
          ut = D[ee],
          _e = ee + 1,
          zt = D[_e];
        if (0 > i(ut, U))
          _e < te && 0 > i(zt, ut)
            ? ((D[B] = zt), (D[_e] = U), (B = _e))
            : ((D[B] = ut), (D[ee] = U), (B = ee));
        else if (_e < te && 0 > i(zt, U)) (D[B] = zt), (D[_e] = U), (B = _e);
        else break e;
      }
    }
    return _;
  }
  function i(D, _) {
    var U = D.sortIndex - _.sortIndex;
    return U !== 0 ? U : D.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    x = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= D)
        r(u), (_.sortIndex = _.expirationTime), t(l, _);
      else break;
      _ = n(u);
    }
  }
  function p(D) {
    if (((x = !1), y(D), !v))
      if (n(l) !== null) (v = !0), xe(P);
      else {
        var _ = n(u);
        _ !== null && je(p, _.startTime - D);
      }
  }
  function P(D, _) {
    (v = !1), x && ((x = !1), m(R), (R = -1)), (g = !0);
    var U = d;
    try {
      for (
        y(_), f = n(l);
        f !== null && (!(f.expirationTime > _) || (D && !q()));

      ) {
        var B = f.callback;
        if (typeof B == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var te = B(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof te == "function" ? (f.callback = te) : f === n(l) && r(l),
            y(_);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var _t = !0;
      else {
        var ee = n(u);
        ee !== null && je(p, ee.startTime - _), (_t = !1);
      }
      return _t;
    } finally {
      (f = null), (d = U), (g = !1);
    }
  }
  var L = !1,
    T = null,
    R = -1,
    F = 5,
    O = -1;
  function q() {
    return !(e.unstable_now() - O < F);
  }
  function Y() {
    if (T !== null) {
      var D = e.unstable_now();
      O = D;
      var _ = !0;
      try {
        _ = T(!0, D);
      } finally {
        _ ? De() : ((L = !1), (T = null));
      }
    } else L = !1;
  }
  var De;
  if (typeof h == "function")
    De = function () {
      h(Y);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      J = ie.port2;
    (ie.port1.onmessage = Y),
      (De = function () {
        J.postMessage(null);
      });
  } else
    De = function () {
      k(Y, 0);
    };
  function xe(D) {
    (T = D), L || ((L = !0), De());
  }
  function je(D, _) {
    R = k(function () {
      D(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), xe(P));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = d;
      }
      var U = d;
      d = _;
      try {
        return D();
      } finally {
        d = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, _) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var U = d;
      d = D;
      try {
        return _();
      } finally {
        d = U;
      }
    }),
    (e.unstable_scheduleCallback = function (D, _, U) {
      var B = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? B + U : B))
          : (U = B),
        D)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = U + te),
        (D = {
          id: c++,
          callback: _,
          priorityLevel: D,
          startTime: U,
          expirationTime: te,
          sortIndex: -1,
        }),
        U > B
          ? ((D.sortIndex = U),
            t(u, D),
            n(l) === null &&
              D === n(u) &&
              (x ? (m(R), (R = -1)) : (x = !0), je(p, U - B)))
          : ((D.sortIndex = te), t(l, D), v || g || ((v = !0), xe(P))),
        D
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (D) {
      var _ = d;
      return function () {
        var U = d;
        d = _;
        try {
          return D.apply(this, arguments);
        } finally {
          d = U;
        }
      };
    });
})(Fh);
Vh.exports = Fh;
var Qy = Vh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oh = C,
  ot = Qy;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var _h = new Set(),
  Mi = {};
function Qn(e, t) {
  Lr(e, t), Lr(e + "Capture", t);
}
function Lr(e, t) {
  for (Mi[e] = t, e = 0; e < t.length; e++) _h.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  nl = Object.prototype.hasOwnProperty,
  Zy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Kc = {},
  Gc = {};
function Jy(e) {
  return nl.call(Gc, e)
    ? !0
    : nl.call(Kc, e)
      ? !1
      : Zy.test(e)
        ? (Gc[e] = !0)
        : ((Kc[e] = !0), !1);
}
function qy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ev(e, t, n, r) {
  if (t === null || typeof t > "u" || qy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Su = /[\-:]([a-z])/g;
function Pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Su, Pu);
    Oe[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Su, Pu);
    Oe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Su, Pu);
  Oe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eu(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ev(t, n, i, r) && (n = null),
    r || i === null
      ? Jy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vo = Symbol.for("react.element"),
  ir = Symbol.for("react.portal"),
  or = Symbol.for("react.fragment"),
  ku = Symbol.for("react.strict_mode"),
  rl = Symbol.for("react.profiler"),
  zh = Symbol.for("react.provider"),
  Ih = Symbol.for("react.context"),
  Cu = Symbol.for("react.forward_ref"),
  il = Symbol.for("react.suspense"),
  ol = Symbol.for("react.suspense_list"),
  Tu = Symbol.for("react.memo"),
  an = Symbol.for("react.lazy"),
  Bh = Symbol.for("react.offscreen"),
  Xc = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xc && e[Xc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  ya;
function ui(e) {
  if (ya === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ya = (t && t[1]) || "";
    }
  return (
    `
` +
    ya +
    e
  );
}
var va = !1;
function xa(e, t) {
  if (!e || va) return "";
  va = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (va = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ui(e) : "";
}
function tv(e) {
  switch (e.tag) {
    case 5:
      return ui(e.type);
    case 16:
      return ui("Lazy");
    case 13:
      return ui("Suspense");
    case 19:
      return ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xa(e.type, !1)), e;
    case 11:
      return (e = xa(e.type.render, !1)), e;
    case 1:
      return (e = xa(e.type, !0)), e;
    default:
      return "";
  }
}
function sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case or:
      return "Fragment";
    case ir:
      return "Portal";
    case rl:
      return "Profiler";
    case ku:
      return "StrictMode";
    case il:
      return "Suspense";
    case ol:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ih:
        return (e.displayName || "Context") + ".Consumer";
      case zh:
        return (e._context.displayName || "Context") + ".Provider";
      case Cu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Tu:
        return (
          (t = e.displayName || null), t !== null ? t : sl(e.type) || "Memo"
        );
      case an:
        (t = e._payload), (e = e._init);
        try {
          return sl(e(t));
        } catch {}
    }
  return null;
}
function nv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return sl(t);
    case 8:
      return t === ku ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rv(e) {
  var t = Uh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xo(e) {
  e._valueTracker || (e._valueTracker = rv(e));
}
function bh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function al(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $h(e, t) {
  (t = t.checked), t != null && Eu(e, "checked", t, !1);
}
function ll(e, t) {
  $h(e, t);
  var n = kn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ul(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ul(e, t.type, kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ul(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ci = Array.isArray;
function Pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (ci(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kn(n) };
}
function Wh(e, t) {
  var n = kn(t.value),
    r = kn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var wo,
  Yh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wo = wo || document.createElement("div"),
          wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ai(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(pi).forEach(function (e) {
  iv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e]);
  });
});
function Kh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pi.hasOwnProperty(e) && pi[e])
      ? ("" + t).trim()
      : t + "px";
}
function Gh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Kh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ov = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function dl(e, t) {
  if (t) {
    if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function hl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pl = null;
function Ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ml = null,
  Er = null,
  kr = null;
function ef(e) {
  if ((e = to(e))) {
    if (typeof ml != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Is(t)), ml(e.stateNode, e.type, t));
  }
}
function Xh(e) {
  Er ? (kr ? kr.push(e) : (kr = [e])) : (Er = e);
}
function Qh() {
  if (Er) {
    var e = Er,
      t = kr;
    if (((kr = Er = null), ef(e), t)) for (e = 0; e < t.length; e++) ef(t[e]);
  }
}
function Zh(e, t) {
  return e(t);
}
function Jh() {}
var wa = !1;
function qh(e, t, n) {
  if (wa) return e(t, n);
  wa = !0;
  try {
    return Zh(e, t, n);
  } finally {
    (wa = !1), (Er !== null || kr !== null) && (Jh(), Qh());
  }
}
function Li(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Is(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var gl = !1;
if (Qt)
  try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", {
      get: function () {
        gl = !0;
      },
    }),
      window.addEventListener("test", Xr, Xr),
      window.removeEventListener("test", Xr, Xr);
  } catch {
    gl = !1;
  }
function sv(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mi = !1,
  ts = null,
  ns = !1,
  yl = null,
  av = {
    onError: function (e) {
      (mi = !0), (ts = e);
    },
  };
function lv(e, t, n, r, i, o, s, a, l) {
  (mi = !1), (ts = null), sv.apply(av, arguments);
}
function uv(e, t, n, r, i, o, s, a, l) {
  if ((lv.apply(this, arguments), mi)) {
    if (mi) {
      var u = ts;
      (mi = !1), (ts = null);
    } else throw Error(A(198));
    ns || ((ns = !0), (yl = u));
  }
}
function Zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ep(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tf(e) {
  if (Zn(e) !== e) throw Error(A(188));
}
function cv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return tf(i), e;
        if (o === r) return tf(i), t;
        o = o.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function tp(e) {
  return (e = cv(e)), e !== null ? np(e) : null;
}
function np(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = np(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rp = ot.unstable_scheduleCallback,
  nf = ot.unstable_cancelCallback,
  fv = ot.unstable_shouldYield,
  dv = ot.unstable_requestPaint,
  ve = ot.unstable_now,
  hv = ot.unstable_getCurrentPriorityLevel,
  Mu = ot.unstable_ImmediatePriority,
  ip = ot.unstable_UserBlockingPriority,
  rs = ot.unstable_NormalPriority,
  pv = ot.unstable_LowPriority,
  op = ot.unstable_IdlePriority,
  Fs = null,
  Vt = null;
function mv(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(Fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : vv,
  gv = Math.log,
  yv = Math.LN2;
function vv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gv(e) / yv) | 0)) | 0;
}
var So = 64,
  Po = 4194304;
function fi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = fi(a)) : ((o &= s), o !== 0 && (r = fi(o)));
  } else (s = n & ~i), s !== 0 ? (r = fi(s)) : o !== 0 && (r = fi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function xv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - kt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = xv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sp() {
  var e = So;
  return (So <<= 1), !(So & 4194240) && (So = 64), e;
}
function Sa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function Sv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - kt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Au(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Z = 0;
function ap(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lp,
  Lu,
  up,
  cp,
  fp,
  xl = !1,
  Eo = [],
  pn = null,
  mn = null,
  gn = null,
  Di = new Map(),
  ji = new Map(),
  cn = [],
  Pv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function rf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      mn = null;
      break;
    case "mouseover":
    case "mouseout":
      gn = null;
      break;
    case "pointerover":
    case "pointerout":
      Di.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ji.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = to(t)), t !== null && Lu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ev(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (pn = Qr(pn, e, t, n, r, i)), !0;
    case "dragenter":
      return (mn = Qr(mn, e, t, n, r, i)), !0;
    case "mouseover":
      return (gn = Qr(gn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Di.set(o, Qr(Di.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ji.set(o, Qr(ji.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function dp(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ep(n)), t !== null)) {
          (e.blockedOn = t),
            fp(e.priority, function () {
              up(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pl = r), n.target.dispatchEvent(r), (pl = null);
    } else return (t = to(n)), t !== null && Lu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function of(e, t, n) {
  Uo(e) && n.delete(t);
}
function kv() {
  (xl = !1),
    pn !== null && Uo(pn) && (pn = null),
    mn !== null && Uo(mn) && (mn = null),
    gn !== null && Uo(gn) && (gn = null),
    Di.forEach(of),
    ji.forEach(of);
}
function Zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xl ||
      ((xl = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, kv)));
}
function Ni(e) {
  function t(i) {
    return Zr(i, e);
  }
  if (0 < Eo.length) {
    Zr(Eo[0], e);
    for (var n = 1; n < Eo.length; n++) {
      var r = Eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pn !== null && Zr(pn, e),
      mn !== null && Zr(mn, e),
      gn !== null && Zr(gn, e),
      Di.forEach(t),
      ji.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    dp(n), n.blockedOn === null && cn.shift();
}
var Cr = tn.ReactCurrentBatchConfig,
  os = !0;
function Cv(e, t, n, r) {
  var i = Z,
    o = Cr.transition;
  Cr.transition = null;
  try {
    (Z = 1), Du(e, t, n, r);
  } finally {
    (Z = i), (Cr.transition = o);
  }
}
function Tv(e, t, n, r) {
  var i = Z,
    o = Cr.transition;
  Cr.transition = null;
  try {
    (Z = 4), Du(e, t, n, r);
  } finally {
    (Z = i), (Cr.transition = o);
  }
}
function Du(e, t, n, r) {
  if (os) {
    var i = wl(e, t, n, r);
    if (i === null) Da(e, t, r, ss, n), rf(e, r);
    else if (Ev(i, e, t, n, r)) r.stopPropagation();
    else if ((rf(e, r), t & 4 && -1 < Pv.indexOf(e))) {
      for (; i !== null; ) {
        var o = to(i);
        if (
          (o !== null && lp(o),
          (o = wl(e, t, n, r)),
          o === null && Da(e, t, r, ss, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Da(e, t, r, null, n);
  }
}
var ss = null;
function wl(e, t, n, r) {
  if (((ss = null), (e = Ru(r)), (e = _n(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ep(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ss = e), null;
}
function hp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hv()) {
        case Mu:
          return 1;
        case ip:
          return 4;
        case rs:
        case pv:
          return 16;
        case op:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  ju = null,
  bo = null;
function pp() {
  if (bo) return bo;
  var e,
    t = ju,
    n = t.length,
    r,
    i = "value" in dn ? dn.value : dn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (bo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function $o(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ko() {
  return !0;
}
function sf() {
  return !1;
}
function lt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ko
        : sf),
      (this.isPropagationStopped = sf),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ko));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ko));
      },
      persist: function () {},
      isPersistent: ko,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nu = lt(Br),
  eo = me({}, Br, { view: 0, detail: 0 }),
  Rv = lt(eo),
  Pa,
  Ea,
  Jr,
  Os = me({}, eo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Jr &&
            (Jr && e.type === "mousemove"
              ? ((Pa = e.screenX - Jr.screenX), (Ea = e.screenY - Jr.screenY))
              : (Ea = Pa = 0),
            (Jr = e)),
          Pa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ea;
    },
  }),
  af = lt(Os),
  Mv = me({}, Os, { dataTransfer: 0 }),
  Av = lt(Mv),
  Lv = me({}, eo, { relatedTarget: 0 }),
  ka = lt(Lv),
  Dv = me({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jv = lt(Dv),
  Nv = me({}, Br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vv = lt(Nv),
  Fv = me({}, Br, { data: 0 }),
  lf = lt(Fv),
  Ov = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  _v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Iv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zv[e]) ? !!t[e] : !1;
}
function Vu() {
  return Iv;
}
var Bv = me({}, eo, {
    key: function (e) {
      if (e.key) {
        var t = Ov[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? _v[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vu,
    charCode: function (e) {
      return e.type === "keypress" ? $o(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $o(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Uv = lt(Bv),
  bv = me({}, Os, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  uf = lt(bv),
  $v = me({}, eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vu,
  }),
  Wv = lt($v),
  Hv = me({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yv = lt(Hv),
  Kv = me({}, Os, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gv = lt(Kv),
  Xv = [9, 13, 27, 32],
  Fu = Qt && "CompositionEvent" in window,
  gi = null;
Qt && "documentMode" in document && (gi = document.documentMode);
var Qv = Qt && "TextEvent" in window && !gi,
  mp = Qt && (!Fu || (gi && 8 < gi && 11 >= gi)),
  cf = String.fromCharCode(32),
  ff = !1;
function gp(e, t) {
  switch (e) {
    case "keyup":
      return Xv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function yp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function Zv(e, t) {
  switch (e) {
    case "compositionend":
      return yp(t);
    case "keypress":
      return t.which !== 32 ? null : ((ff = !0), cf);
    case "textInput":
      return (e = t.data), e === cf && ff ? null : e;
    default:
      return null;
  }
}
function Jv(e, t) {
  if (sr)
    return e === "compositionend" || (!Fu && gp(e, t))
      ? ((e = pp()), (bo = ju = dn = null), (sr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return mp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function df(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qv[e.type] : t === "textarea";
}
function vp(e, t, n, r) {
  Xh(r),
    (t = as(t, "onChange")),
    0 < t.length &&
      ((n = new Nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yi = null,
  Vi = null;
function e0(e) {
  Ap(e, 0);
}
function _s(e) {
  var t = ur(e);
  if (bh(t)) return e;
}
function t0(e, t) {
  if (e === "change") return t;
}
var xp = !1;
if (Qt) {
  var Ca;
  if (Qt) {
    var Ta = "oninput" in document;
    if (!Ta) {
      var hf = document.createElement("div");
      hf.setAttribute("oninput", "return;"),
        (Ta = typeof hf.oninput == "function");
    }
    Ca = Ta;
  } else Ca = !1;
  xp = Ca && (!document.documentMode || 9 < document.documentMode);
}
function pf() {
  yi && (yi.detachEvent("onpropertychange", wp), (Vi = yi = null));
}
function wp(e) {
  if (e.propertyName === "value" && _s(Vi)) {
    var t = [];
    vp(t, Vi, e, Ru(e)), qh(e0, t);
  }
}
function n0(e, t, n) {
  e === "focusin"
    ? (pf(), (yi = t), (Vi = n), yi.attachEvent("onpropertychange", wp))
    : e === "focusout" && pf();
}
function r0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _s(Vi);
}
function i0(e, t) {
  if (e === "click") return _s(t);
}
function o0(e, t) {
  if (e === "input" || e === "change") return _s(t);
}
function s0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tt = typeof Object.is == "function" ? Object.is : s0;
function Fi(e, t) {
  if (Tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!nl.call(t, i) || !Tt(e[i], t[i])) return !1;
  }
  return !0;
}
function mf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gf(e, t) {
  var n = mf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mf(n);
  }
}
function Sp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Sp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Pp() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function a0(e) {
  var t = Pp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ou(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = gf(n, o));
        var s = gf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var l0 = Qt && "documentMode" in document && 11 >= document.documentMode,
  ar = null,
  Sl = null,
  vi = null,
  Pl = !1;
function yf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pl ||
    ar == null ||
    ar !== es(r) ||
    ((r = ar),
    "selectionStart" in r && Ou(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vi && Fi(vi, r)) ||
      ((vi = r),
      (r = as(Sl, "onSelect")),
      0 < r.length &&
        ((t = new Nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ar))));
}
function Co(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: Co("Animation", "AnimationEnd"),
    animationiteration: Co("Animation", "AnimationIteration"),
    animationstart: Co("Animation", "AnimationStart"),
    transitionend: Co("Transition", "TransitionEnd"),
  },
  Ra = {},
  Ep = {};
Qt &&
  ((Ep = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function zs(e) {
  if (Ra[e]) return Ra[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ep) return (Ra[e] = t[n]);
  return e;
}
var kp = zs("animationend"),
  Cp = zs("animationiteration"),
  Tp = zs("animationstart"),
  Rp = zs("transitionend"),
  Mp = new Map(),
  vf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Mn(e, t) {
  Mp.set(e, t), Qn(t, [e]);
}
for (var Ma = 0; Ma < vf.length; Ma++) {
  var Aa = vf[Ma],
    u0 = Aa.toLowerCase(),
    c0 = Aa[0].toUpperCase() + Aa.slice(1);
  Mn(u0, "on" + c0);
}
Mn(kp, "onAnimationEnd");
Mn(Cp, "onAnimationIteration");
Mn(Tp, "onAnimationStart");
Mn("dblclick", "onDoubleClick");
Mn("focusin", "onFocus");
Mn("focusout", "onBlur");
Mn(Rp, "onTransitionEnd");
Lr("onMouseEnter", ["mouseout", "mouseover"]);
Lr("onMouseLeave", ["mouseout", "mouseover"]);
Lr("onPointerEnter", ["pointerout", "pointerover"]);
Lr("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var di =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  f0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
function xf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uv(r, t, void 0, e), (e.currentTarget = null);
}
function Ap(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          xf(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          xf(i, a, u), (o = l);
        }
    }
  }
  if (ns) throw ((e = yl), (ns = !1), (yl = null), e);
}
function oe(e, t) {
  var n = t[Rl];
  n === void 0 && (n = t[Rl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lp(t, e, 2, !1), n.add(r));
}
function La(e, t, n) {
  var r = 0;
  t && (r |= 4), Lp(n, e, r, t);
}
var To = "_reactListening" + Math.random().toString(36).slice(2);
function Oi(e) {
  if (!e[To]) {
    (e[To] = !0),
      _h.forEach(function (n) {
        n !== "selectionchange" && (f0.has(n) || La(n, !1, e), La(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[To] || ((t[To] = !0), La("selectionchange", !1, t));
  }
}
function Lp(e, t, n, r) {
  switch (hp(t)) {
    case 1:
      var i = Cv;
      break;
    case 4:
      i = Tv;
      break;
    default:
      i = Du;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !gl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Da(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = _n(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qh(function () {
    var u = o,
      c = Ru(n),
      f = [];
    e: {
      var d = Mp.get(e);
      if (d !== void 0) {
        var g = Nu,
          v = e;
        switch (e) {
          case "keypress":
            if ($o(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Uv;
            break;
          case "focusin":
            (v = "focus"), (g = ka);
            break;
          case "focusout":
            (v = "blur"), (g = ka);
            break;
          case "beforeblur":
          case "afterblur":
            g = ka;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Av;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Wv;
            break;
          case kp:
          case Cp:
          case Tp:
            g = jv;
            break;
          case Rp:
            g = Yv;
            break;
          case "scroll":
            g = Rv;
            break;
          case "wheel":
            g = Gv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Vv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = uf;
        }
        var x = (t & 4) !== 0,
          k = !x && e === "scroll",
          m = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var p = y.stateNode;
          if (
            (y.tag === 5 &&
              p !== null &&
              ((y = p),
              m !== null && ((p = Li(h, m)), p != null && x.push(_i(h, p, y)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== pl &&
            (v = n.relatedTarget || n.fromElement) &&
            (_n(v) || v[Zt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? _n(v) : null),
              v !== null &&
                ((k = Zn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((x = af),
            (p = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = uf),
              (p = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (k = g == null ? d : ur(g)),
            (y = v == null ? d : ur(v)),
            (d = new x(p, h + "leave", g, n, c)),
            (d.target = k),
            (d.relatedTarget = y),
            (p = null),
            _n(c) === u &&
              ((x = new x(m, h + "enter", v, n, c)),
              (x.target = y),
              (x.relatedTarget = k),
              (p = x)),
            (k = p),
            g && v)
          )
            t: {
              for (x = g, m = v, h = 0, y = x; y; y = rr(y)) h++;
              for (y = 0, p = m; p; p = rr(p)) y++;
              for (; 0 < h - y; ) (x = rr(x)), h--;
              for (; 0 < y - h; ) (m = rr(m)), y--;
              for (; h--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = rr(x)), (m = rr(m));
              }
              x = null;
            }
          else x = null;
          g !== null && wf(f, d, g, x, !1),
            v !== null && k !== null && wf(f, k, v, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? ur(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var P = t0;
        else if (df(d))
          if (xp) P = o0;
          else {
            P = r0;
            var L = n0;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = i0);
        if (P && (P = P(e, u))) {
          vp(f, P, n, c);
          break e;
        }
        L && L(e, d, u),
          e === "focusout" &&
            (L = d._wrapperState) &&
            L.controlled &&
            d.type === "number" &&
            ul(d, "number", d.value);
      }
      switch (((L = u ? ur(u) : window), e)) {
        case "focusin":
          (df(L) || L.contentEditable === "true") &&
            ((ar = L), (Sl = u), (vi = null));
          break;
        case "focusout":
          vi = Sl = ar = null;
          break;
        case "mousedown":
          Pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pl = !1), yf(f, n, c);
          break;
        case "selectionchange":
          if (l0) break;
        case "keydown":
        case "keyup":
          yf(f, n, c);
      }
      var T;
      if (Fu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        sr
          ? gp(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (mp &&
          n.locale !== "ko" &&
          (sr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && sr && (T = pp())
            : ((dn = c),
              (ju = "value" in dn ? dn.value : dn.textContent),
              (sr = !0))),
        (L = as(u, R)),
        0 < L.length &&
          ((R = new lf(R, e, null, n, c)),
          f.push({ event: R, listeners: L }),
          T ? (R.data = T) : ((T = yp(n)), T !== null && (R.data = T)))),
        (T = Qv ? Zv(e, n) : Jv(e, n)) &&
          ((u = as(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Ap(f, t);
  });
}
function _i(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function as(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Li(e, n)),
      o != null && r.unshift(_i(e, o, i)),
      (o = Li(e, t)),
      o != null && r.push(_i(e, o, i))),
      (e = e.return);
  }
  return r;
}
function rr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Li(n, o)), l != null && s.unshift(_i(n, l, a)))
        : i || ((l = Li(n, o)), l != null && s.push(_i(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var d0 = /\r\n?/g,
  h0 = /\u0000|\uFFFD/g;
function Sf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      d0,
      `
`,
    )
    .replace(h0, "");
}
function Ro(e, t, n) {
  if (((t = Sf(t)), Sf(e) !== t && n)) throw Error(A(425));
}
function ls() {}
var El = null,
  kl = null;
function Cl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Tl = typeof setTimeout == "function" ? setTimeout : void 0,
  p0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pf = typeof Promise == "function" ? Promise : void 0,
  m0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pf < "u"
        ? function (e) {
            return Pf.resolve(null).then(e).catch(g0);
          }
        : Tl;
function g0(e) {
  setTimeout(function () {
    throw e;
  });
}
function ja(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ni(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ni(t);
}
function yn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ef(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ur = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + Ur,
  zi = "__reactProps$" + Ur,
  Zt = "__reactContainer$" + Ur,
  Rl = "__reactEvents$" + Ur,
  y0 = "__reactListeners$" + Ur,
  v0 = "__reactHandles$" + Ur;
function _n(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Zt] || n[Nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ef(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = Ef(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function to(e) {
  return (
    (e = e[Nt] || e[Zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Is(e) {
  return e[zi] || null;
}
var Ml = [],
  cr = -1;
function An(e) {
  return { current: e };
}
function se(e) {
  0 > cr || ((e.current = Ml[cr]), (Ml[cr] = null), cr--);
}
function re(e, t) {
  cr++, (Ml[cr] = e.current), (e.current = t);
}
var Cn = {},
  Ue = An(Cn),
  Qe = An(!1),
  Wn = Cn;
function Dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function us() {
  se(Qe), se(Ue);
}
function kf(e, t, n) {
  if (Ue.current !== Cn) throw Error(A(168));
  re(Ue, t), re(Qe, n);
}
function Dp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, nv(e) || "Unknown", i));
  return me({}, n, r);
}
function cs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cn),
    (Wn = Ue.current),
    re(Ue, e),
    re(Qe, Qe.current),
    !0
  );
}
function Cf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = Dp(e, t, Wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Qe),
      se(Ue),
      re(Ue, e))
    : se(Qe),
    re(Qe, n);
}
var Ut = null,
  Bs = !1,
  Na = !1;
function jp(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function x0(e) {
  (Bs = !0), jp(e);
}
function Ln() {
  if (!Na && Ut !== null) {
    Na = !0;
    var e = 0,
      t = Z;
    try {
      var n = Ut;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (Bs = !1);
    } catch (i) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), rp(Mu, Ln), i);
    } finally {
      (Z = t), (Na = !1);
    }
  }
  return null;
}
var fr = [],
  dr = 0,
  fs = null,
  ds = 0,
  ht = [],
  pt = 0,
  Hn = null,
  $t = 1,
  Wt = "";
function Nn(e, t) {
  (fr[dr++] = ds), (fr[dr++] = fs), (fs = e), (ds = t);
}
function Np(e, t, n) {
  (ht[pt++] = $t), (ht[pt++] = Wt), (ht[pt++] = Hn), (Hn = e);
  var r = $t;
  e = Wt;
  var i = 32 - kt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - kt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      ($t = (1 << (32 - kt(t) + i)) | (n << i) | r),
      (Wt = o + e);
  } else ($t = (1 << o) | (n << i) | r), (Wt = e);
}
function _u(e) {
  e.return !== null && (Nn(e, 1), Np(e, 1, 0));
}
function zu(e) {
  for (; e === fs; )
    (fs = fr[--dr]), (fr[dr] = null), (ds = fr[--dr]), (fr[dr] = null);
  for (; e === Hn; )
    (Hn = ht[--pt]),
      (ht[pt] = null),
      (Wt = ht[--pt]),
      (ht[pt] = null),
      ($t = ht[--pt]),
      (ht[pt] = null);
}
var it = null,
  rt = null,
  ue = !1,
  Et = null;
function Vp(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (rt = yn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Hn !== null ? { id: $t, overflow: Wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Al(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ll(e) {
  if (ue) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Tf(e, t)) {
        if (Al(e)) throw Error(A(418));
        t = yn(n.nextSibling);
        var r = it;
        t && Tf(e, t)
          ? Vp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (it = e));
      }
    } else {
      if (Al(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (it = e);
    }
  }
}
function Rf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function Mo(e) {
  if (e !== it) return !1;
  if (!ue) return Rf(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cl(e.type, e.memoizedProps))),
    t && (t = rt))
  ) {
    if (Al(e)) throw (Fp(), Error(A(418)));
    for (; t; ) Vp(e, t), (t = yn(t.nextSibling));
  }
  if ((Rf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = yn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = it ? yn(e.stateNode.nextSibling) : null;
  return !0;
}
function Fp() {
  for (var e = rt; e; ) e = yn(e.nextSibling);
}
function jr() {
  (rt = it = null), (ue = !1);
}
function Iu(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var w0 = tn.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hs = An(null),
  ps = null,
  hr = null,
  Bu = null;
function Uu() {
  Bu = hr = ps = null;
}
function bu(e) {
  var t = hs.current;
  se(hs), (e._currentValue = t);
}
function Dl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tr(e, t) {
  (ps = e),
    (Bu = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function yt(e) {
  var t = e._currentValue;
  if (Bu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (ps === null) throw Error(A(308));
      (hr = e), (ps.dependencies = { lanes: 0, firstContext: e });
    } else hr = hr.next = e;
  return t;
}
var zn = null;
function $u(e) {
  zn === null ? (zn = [e]) : zn.push(e);
}
function Op(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $u(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Jt(e, r)
  );
}
function Jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ln = !1;
function Wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _p(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Jt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $u(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Jt(e, n)
  );
}
function Wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Au(e, n);
  }
}
function Mf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ms(e, t, n, r) {
  var i = e.updateQueue;
  ln = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((d = t), (g = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(g, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (d = typeof v == "function" ? v.call(g, f, d) : v),
                d == null)
              )
                break e;
              f = me({}, f, d);
              break e;
            case 2:
              ln = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Kn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Af(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(A(191, i));
        i.call(r);
      }
    }
}
var zp = new Oh.Component().refs;
function jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = wn(e),
      o = Yt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vn(e, o, i)),
      t !== null && (Ct(t, e, i, r), Wo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = wn(e),
      o = Yt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vn(e, o, i)),
      t !== null && (Ct(t, e, i, r), Wo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = wn(e),
      i = Yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = vn(e, i, r)),
      t !== null && (Ct(t, e, r, n), Wo(t, e, r));
  },
};
function Lf(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Fi(n, r) || !Fi(i, o)
        : !0
  );
}
function Ip(e, t, n) {
  var r = !1,
    i = Cn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = yt(o))
      : ((i = Ze(t) ? Wn : Ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Dr(e, i) : Cn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Df(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function Nl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = zp), Wu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = yt(o))
    : ((o = Ze(t) ? Wn : Ue.current), (i.context = Dr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (jl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Us.enqueueReplaceState(i, i.state, null),
      ms(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === zp && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function jf(e) {
  var t = e._init;
  return t(e._payload);
}
function Bp(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = Sn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, p) {
    return h === null || h.tag !== 6
      ? ((h = Ba(y, m.mode, p)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function l(m, h, y, p) {
    var P = y.type;
    return P === or
      ? c(m, h, y.props.children, p, y.key)
      : h !== null &&
          (h.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === an &&
              jf(P) === h.type))
        ? ((p = i(h, y.props)), (p.ref = qr(m, h, y)), (p.return = m), p)
        : ((p = Qo(y.type, y.key, y.props, null, m.mode, p)),
          (p.ref = qr(m, h, y)),
          (p.return = m),
          p);
  }
  function u(m, h, y, p) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Ua(y, m.mode, p)), (h.return = m), h)
      : ((h = i(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, p, P) {
    return h === null || h.tag !== 7
      ? ((h = $n(y, m.mode, p, P)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function f(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ba("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vo:
          return (
            (y = Qo(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = qr(m, null, h)),
            (y.return = m),
            y
          );
        case ir:
          return (h = Ua(h, m.mode, y)), (h.return = m), h;
        case an:
          var p = h._init;
          return f(m, p(h._payload), y);
      }
      if (ci(h) || Gr(h))
        return (h = $n(h, m.mode, y, null)), (h.return = m), h;
      Ao(m, h);
    }
    return null;
  }
  function d(m, h, y, p) {
    var P = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return P !== null ? null : a(m, h, "" + y, p);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case vo:
          return y.key === P ? l(m, h, y, p) : null;
        case ir:
          return y.key === P ? u(m, h, y, p) : null;
        case an:
          return (P = y._init), d(m, h, P(y._payload), p);
      }
      if (ci(y) || Gr(y)) return P !== null ? null : c(m, h, y, p, null);
      Ao(m, y);
    }
    return null;
  }
  function g(m, h, y, p, P) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (m = m.get(y) || null), a(h, m, "" + p, P);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vo:
          return (m = m.get(p.key === null ? y : p.key) || null), l(h, m, p, P);
        case ir:
          return (m = m.get(p.key === null ? y : p.key) || null), u(h, m, p, P);
        case an:
          var L = p._init;
          return g(m, h, y, L(p._payload), P);
      }
      if (ci(p) || Gr(p)) return (m = m.get(y) || null), c(h, m, p, P, null);
      Ao(h, p);
    }
    return null;
  }
  function v(m, h, y, p) {
    for (
      var P = null, L = null, T = h, R = (h = 0), F = null;
      T !== null && R < y.length;
      R++
    ) {
      T.index > R ? ((F = T), (T = null)) : (F = T.sibling);
      var O = d(m, T, y[R], p);
      if (O === null) {
        T === null && (T = F);
        break;
      }
      e && T && O.alternate === null && t(m, T),
        (h = o(O, h, R)),
        L === null ? (P = O) : (L.sibling = O),
        (L = O),
        (T = F);
    }
    if (R === y.length) return n(m, T), ue && Nn(m, R), P;
    if (T === null) {
      for (; R < y.length; R++)
        (T = f(m, y[R], p)),
          T !== null &&
            ((h = o(T, h, R)), L === null ? (P = T) : (L.sibling = T), (L = T));
      return ue && Nn(m, R), P;
    }
    for (T = r(m, T); R < y.length; R++)
      (F = g(T, m, R, y[R], p)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? R : F.key),
          (h = o(F, h, R)),
          L === null ? (P = F) : (L.sibling = F),
          (L = F));
    return (
      e &&
        T.forEach(function (q) {
          return t(m, q);
        }),
      ue && Nn(m, R),
      P
    );
  }
  function x(m, h, y, p) {
    var P = Gr(y);
    if (typeof P != "function") throw Error(A(150));
    if (((y = P.call(y)), y == null)) throw Error(A(151));
    for (
      var L = (P = null), T = h, R = (h = 0), F = null, O = y.next();
      T !== null && !O.done;
      R++, O = y.next()
    ) {
      T.index > R ? ((F = T), (T = null)) : (F = T.sibling);
      var q = d(m, T, O.value, p);
      if (q === null) {
        T === null && (T = F);
        break;
      }
      e && T && q.alternate === null && t(m, T),
        (h = o(q, h, R)),
        L === null ? (P = q) : (L.sibling = q),
        (L = q),
        (T = F);
    }
    if (O.done) return n(m, T), ue && Nn(m, R), P;
    if (T === null) {
      for (; !O.done; R++, O = y.next())
        (O = f(m, O.value, p)),
          O !== null &&
            ((h = o(O, h, R)), L === null ? (P = O) : (L.sibling = O), (L = O));
      return ue && Nn(m, R), P;
    }
    for (T = r(m, T); !O.done; R++, O = y.next())
      (O = g(T, m, R, O.value, p)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? R : O.key),
          (h = o(O, h, R)),
          L === null ? (P = O) : (L.sibling = O),
          (L = O));
    return (
      e &&
        T.forEach(function (Y) {
          return t(m, Y);
        }),
      ue && Nn(m, R),
      P
    );
  }
  function k(m, h, y, p) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === or &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case vo:
          e: {
            for (var P = y.key, L = h; L !== null; ) {
              if (L.key === P) {
                if (((P = y.type), P === or)) {
                  if (L.tag === 7) {
                    n(m, L.sibling),
                      (h = i(L, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  L.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === an &&
                    jf(P) === L.type)
                ) {
                  n(m, L.sibling),
                    (h = i(L, y.props)),
                    (h.ref = qr(m, L, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, L);
                break;
              } else t(m, L);
              L = L.sibling;
            }
            y.type === or
              ? ((h = $n(y.props.children, m.mode, p, y.key)),
                (h.return = m),
                (m = h))
              : ((p = Qo(y.type, y.key, y.props, null, m.mode, p)),
                (p.ref = qr(m, h, y)),
                (p.return = m),
                (m = p));
          }
          return s(m);
        case ir:
          e: {
            for (L = y.key; h !== null; ) {
              if (h.key === L)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, y.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Ua(y, m.mode, p)), (h.return = m), (m = h);
          }
          return s(m);
        case an:
          return (L = y._init), k(m, h, L(y._payload), p);
      }
      if (ci(y)) return v(m, h, y, p);
      if (Gr(y)) return x(m, h, y, p);
      Ao(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Ba(y, m.mode, p)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return k;
}
var Nr = Bp(!0),
  Up = Bp(!1),
  no = {},
  Ft = An(no),
  Ii = An(no),
  Bi = An(no);
function In(e) {
  if (e === no) throw Error(A(174));
  return e;
}
function Hu(e, t) {
  switch ((re(Bi, t), re(Ii, e), re(Ft, no), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fl(t, e));
  }
  se(Ft), re(Ft, t);
}
function Vr() {
  se(Ft), se(Ii), se(Bi);
}
function bp(e) {
  In(Bi.current);
  var t = In(Ft.current),
    n = fl(t, e.type);
  t !== n && (re(Ii, e), re(Ft, n));
}
function Yu(e) {
  Ii.current === e && (se(Ft), se(Ii));
}
var fe = An(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Va = [];
function Ku() {
  for (var e = 0; e < Va.length; e++)
    Va[e]._workInProgressVersionPrimary = null;
  Va.length = 0;
}
var Ho = tn.ReactCurrentDispatcher,
  Fa = tn.ReactCurrentBatchConfig,
  Yn = 0,
  pe = null,
  Ce = null,
  Ae = null,
  ys = !1,
  xi = !1,
  Ui = 0,
  S0 = 0;
function ze() {
  throw Error(A(321));
}
function Gu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tt(e[n], t[n])) return !1;
  return !0;
}
function Xu(e, t, n, r, i, o) {
  if (
    ((Yn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ho.current = e === null || e.memoizedState === null ? C0 : T0),
    (e = n(r, i)),
    xi)
  ) {
    o = 0;
    do {
      if (((xi = !1), (Ui = 0), 25 <= o)) throw Error(A(301));
      (o += 1),
        (Ae = Ce = null),
        (t.updateQueue = null),
        (Ho.current = R0),
        (e = n(r, i));
    } while (xi);
  }
  if (
    ((Ho.current = vs),
    (t = Ce !== null && Ce.next !== null),
    (Yn = 0),
    (Ae = Ce = pe = null),
    (ys = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Qu() {
  var e = Ui !== 0;
  return (Ui = 0), e;
}
function Dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (pe.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function vt() {
  if (Ce === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Ae === null ? pe.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Ce = e);
  else {
    if (e === null) throw Error(A(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Ae === null ? (pe.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function bi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oa(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Yn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (pe.lanes |= c),
          (Kn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      Tt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (pe.lanes |= o), (Kn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _a(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Tt(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function $p() {}
function Wp(e, t) {
  var n = pe,
    r = vt(),
    i = t(),
    o = !Tt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    Zu(Kp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $i(9, Yp.bind(null, n, r, i, t), void 0, null),
      Le === null)
    )
      throw Error(A(349));
    Yn & 30 || Hp(n, t, i);
  }
  return i;
}
function Hp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gp(t) && Xp(e);
}
function Kp(e, t, n) {
  return n(function () {
    Gp(t) && Xp(e);
  });
}
function Gp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function Xp(e) {
  var t = Jt(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Nf(e) {
  var t = Dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = k0.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function $i(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qp() {
  return vt().memoizedState;
}
function Yo(e, t, n, r) {
  var i = Dt();
  (pe.flags |= e),
    (i.memoizedState = $i(1 | t, n, void 0, r === void 0 ? null : r));
}
function bs(e, t, n, r) {
  var i = vt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((o = s.destroy), r !== null && Gu(r, s.deps))) {
      i.memoizedState = $i(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = $i(1 | t, n, o, r));
}
function Vf(e, t) {
  return Yo(8390656, 8, e, t);
}
function Zu(e, t) {
  return bs(2048, 8, e, t);
}
function Zp(e, t) {
  return bs(4, 2, e, t);
}
function Jp(e, t) {
  return bs(4, 4, e, t);
}
function qp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function em(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bs(4, 4, qp.bind(null, t, e), n)
  );
}
function Ju() {}
function tm(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nm(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rm(e, t, n) {
  return Yn & 21
    ? (Tt(n, t) || ((n = sp()), (pe.lanes |= n), (Kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function P0(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fa.transition;
  Fa.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (Fa.transition = r);
  }
}
function im() {
  return vt().memoizedState;
}
function E0(e, t, n) {
  var r = wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    om(e))
  )
    sm(t, n);
  else if (((n = Op(e, t, n, r)), n !== null)) {
    var i = We();
    Ct(n, e, r, i), am(n, t, r);
  }
}
function k0(e, t, n) {
  var r = wn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (om(e)) sm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Tt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), $u(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Op(e, t, i, r)),
      n !== null && ((i = We()), Ct(n, e, r, i), am(n, t, r));
  }
}
function om(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function sm(e, t) {
  xi = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function am(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Au(e, n);
  }
}
var vs = {
    readContext: yt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  C0 = {
    readContext: yt,
    useCallback: function (e, t) {
      return (Dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: yt,
    useEffect: Vf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yo(4194308, 4, qp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = E0.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nf,
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      return (Dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Nf(!1),
        t = e[0];
      return (e = P0.bind(null, e[1])), (Dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = Dt();
      if (ue) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(A(349));
        Yn & 30 || Hp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Vf(Kp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $i(9, Yp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Dt(),
        t = Le.identifierPrefix;
      if (ue) {
        var n = Wt,
          r = $t;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ui++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = S0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  T0 = {
    readContext: yt,
    useCallback: tm,
    useContext: yt,
    useEffect: Zu,
    useImperativeHandle: em,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: nm,
    useReducer: Oa,
    useRef: Qp,
    useState: function () {
      return Oa(bi);
    },
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      var t = vt();
      return rm(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Oa(bi)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: $p,
    useSyncExternalStore: Wp,
    useId: im,
    unstable_isNewReconciler: !1,
  },
  R0 = {
    readContext: yt,
    useCallback: tm,
    useContext: yt,
    useEffect: Zu,
    useImperativeHandle: em,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: nm,
    useReducer: _a,
    useRef: Qp,
    useState: function () {
      return _a(bi);
    },
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      var t = vt();
      return Ce === null ? (t.memoizedState = e) : rm(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = _a(bi)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: $p,
    useSyncExternalStore: Wp,
    useId: im,
    unstable_isNewReconciler: !1,
  };
function Fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += tv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function za(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var M0 = typeof WeakMap == "function" ? WeakMap : Map;
function lm(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ws || ((ws = !0), (Wl = r)), Vl(e, t);
    }),
    n
  );
}
function um(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Vl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Vl(e, t),
          typeof r != "function" &&
            (xn === null ? (xn = new Set([this])) : xn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Ff(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new M0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = b0.bind(null, e, t, n)), t.then(e, e));
}
function Of(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _f(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), vn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var A0 = tn.ReactCurrentOwner,
  Xe = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Up(t, null, n, r) : Nr(t, e.child, n, r);
}
function zf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Tr(t, i),
    (r = Xu(e, t, n, r, o, i)),
    (n = Qu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        qt(e, t, i))
      : (ue && n && _u(t), (t.flags |= 1), $e(e, t, r, i), t.child)
  );
}
function If(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !sc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), cm(e, t, o, r, i))
      : ((e = Qo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fi), n(s, r) && e.ref === t.ref)
    )
      return qt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Sn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Fi(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), qt(e, t, i);
  }
  return Fl(e, t, n, r, i);
}
function fm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(mr, nt),
        (nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(mr, nt),
          (nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(mr, nt),
        (nt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(mr, nt),
      (nt |= r);
  return $e(e, t, i, n), t.child;
}
function dm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fl(e, t, n, r, i) {
  var o = Ze(n) ? Wn : Ue.current;
  return (
    (o = Dr(t, o)),
    Tr(t, i),
    (n = Xu(e, t, n, r, o, i)),
    (r = Qu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        qt(e, t, i))
      : (ue && r && _u(t), (t.flags |= 1), $e(e, t, n, i), t.child)
  );
}
function Bf(e, t, n, r, i) {
  if (Ze(n)) {
    var o = !0;
    cs(t);
  } else o = !1;
  if ((Tr(t, i), t.stateNode === null))
    Ko(e, t), Ip(t, n, r), Nl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = yt(u))
      : ((u = Ze(n) ? Wn : Ue.current), (u = Dr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Df(t, s, r, u)),
      (ln = !1);
    var d = t.memoizedState;
    (s.state = d),
      ms(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Qe.current || ln
        ? (typeof c == "function" && (jl(t, n, c, r), (l = t.memoizedState)),
          (a = ln || Lf(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      _p(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = yt(l))
        : ((l = Ze(n) ? Wn : Ue.current), (l = Dr(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Df(t, s, r, l)),
      (ln = !1),
      (d = t.memoizedState),
      (s.state = d),
      ms(t, r, s, i);
    var v = t.memoizedState;
    a !== f || d !== v || Qe.current || ln
      ? (typeof g == "function" && (jl(t, n, g, r), (v = t.memoizedState)),
        (u = ln || Lf(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ol(e, t, n, r, o, i);
}
function Ol(e, t, n, r, i, o) {
  dm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Cf(t, n, !1), qt(e, t, o);
  (r = t.stateNode), (A0.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Nr(t, e.child, null, o)), (t.child = Nr(t, null, a, o)))
      : $e(e, t, a, o),
    (t.memoizedState = r.state),
    i && Cf(t, n, !0),
    t.child
  );
}
function hm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? kf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kf(e, t.context, !1),
    Hu(e, t.containerInfo);
}
function Uf(e, t, n, r, i) {
  return jr(), Iu(i), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var _l = { dehydrated: null, treeContext: null, retryLane: 0 };
function zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pm(e, t, n) {
  var r = t.pendingProps,
    i = fe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    re(fe, i & 1),
    e === null)
  )
    return (
      Ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Hs(s, r, 0, null)),
              (e = $n(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = zl(n)),
              (t.memoizedState = _l),
              e)
            : qu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return L0(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Sn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Sn(a, o)) : ((o = $n(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? zl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = _l),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Sn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qu(e, t) {
  return (
    (t = Hs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lo(e, t, n, r) {
  return (
    r !== null && Iu(r),
    Nr(t, e.child, null, n),
    (e = qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function L0(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = za(Error(A(422)))), Lo(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Hs({ mode: "visible", children: r.children }, i, 0, null)),
          (o = $n(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Nr(t, e.child, null, s),
          (t.child.memoizedState = zl(s)),
          (t.memoizedState = _l),
          o);
  if (!(t.mode & 1)) return Lo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(A(419))), (r = za(o, r, void 0)), Lo(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Xe || a)) {
    if (((r = Le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Jt(e, i), Ct(r, e, i, -1));
    }
    return oc(), (r = za(Error(A(421)))), Lo(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (rt = yn(i.nextSibling)),
      (it = t),
      (ue = !0),
      (Et = null),
      e !== null &&
        ((ht[pt++] = $t),
        (ht[pt++] = Wt),
        (ht[pt++] = Hn),
        ($t = e.id),
        (Wt = e.overflow),
        (Hn = t)),
      (t = qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Dl(e.return, t, n);
}
function Ia(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function mm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if (($e(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bf(e, n, t);
        else if (e.tag === 19) bf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && gs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ia(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && gs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ia(t, !0, n, null, o);
        break;
      case "together":
        Ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function D0(e, t, n) {
  switch (t.tag) {
    case 3:
      hm(t), jr();
      break;
    case 5:
      bp(t);
      break;
    case 1:
      Ze(t.type) && cs(t);
      break;
    case 4:
      Hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      re(hs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? pm(e, t, n)
            : (re(fe, fe.current & 1),
              (e = qt(e, t, n)),
              e !== null ? e.sibling : null);
      re(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fm(e, t, n);
  }
  return qt(e, t, n);
}
var gm, Il, ym, vm;
gm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Il = function () {};
ym = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), In(Ft.current);
    var o = null;
    switch (n) {
      case "input":
        (i = al(e, i)), (r = al(e, r)), (o = []);
        break;
      case "select":
        (i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = cl(e, i)), (r = cl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ls);
    }
    dl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Mi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && oe("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
vm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ei(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function j0(e, t, n) {
  var r = t.pendingProps;
  switch ((zu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Ze(t.type) && us(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vr(),
        se(Qe),
        se(Ue),
        Ku(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (Kl(Et), (Et = null)))),
        Il(e, t),
        Ie(t),
        null
      );
    case 5:
      Yu(t);
      var i = In(Bi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ym(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ie(t), null;
        }
        if (((e = In(Ft.current)), Mo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Nt] = t), (r[zi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < di.length; i++) oe(di[i], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Qc(r, o), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              Jc(r, o), oe("invalid", r);
          }
          dl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ro(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ro(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Mi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              xo(r), Zc(r, o, !0);
              break;
            case "textarea":
              xo(r), qc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ls);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Nt] = t),
            (e[zi] = r),
            gm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = hl(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < di.length; i++) oe(di[i], e);
                i = r;
                break;
              case "source":
                oe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (i = r);
                break;
              case "details":
                oe("toggle", e), (i = r);
                break;
              case "input":
                Qc(e, r), (i = al(e, r)), oe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = me({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Jc(e, r), (i = cl(e, r)), oe("invalid", e);
                break;
              default:
                i = r;
            }
            dl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Gh(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Yh(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ai(e, l)
                        : typeof l == "number" && Ai(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Mi.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && oe("scroll", e)
                          : l != null && Eu(e, o, l, s));
              }
            switch (n) {
              case "input":
                xo(e), Zc(e, r, !1);
                break;
              case "textarea":
                xo(e), qc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Pr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ls);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) vm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = In(Bi.current)), In(Ft.current), Mo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (o = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ro(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ro(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (se(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && rt !== null && t.mode & 1 && !(t.flags & 128))
          Fp(), jr(), (t.flags |= 98560), (o = !1);
        else if (((o = Mo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(A(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(A(317));
            o[Nt] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (o = !1);
        } else Et !== null && (Kl(Et), (Et = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Re === 0 && (Re = 3) : oc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Vr(), Il(e, t), e === null && Oi(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return bu(t.type._context), Ie(t), null;
    case 17:
      return Ze(t.type) && us(), Ie(t), null;
    case 19:
      if ((se(fe), (o = t.memoizedState), o === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ei(o, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ei(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > Or &&
            ((t.flags |= 128), (r = !0), ei(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ei(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ue)
            )
              return Ie(t), null;
          } else
            2 * ve() - o.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ei(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          re(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        ic(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? nt & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function N0(e, t) {
  switch ((zu(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && us(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vr(),
        se(Qe),
        se(Ue),
        Ku(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yu(t), null;
    case 13:
      if (
        (se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(fe), null;
    case 4:
      return Vr(), null;
    case 10:
      return bu(t.type._context), null;
    case 22:
    case 23:
      return ic(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Do = !1,
  Be = !1,
  V0 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function Bl(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var $f = !1;
function F0(e, t) {
  if (((El = os), (e = Pp()), Ou(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kl = { focusedElem: e, selectionRange: n }, os = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    k = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : wt(t.type, x),
                      k,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (p) {
          ye(t, t.return, p);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (v = $f), ($f = !1), v;
}
function wi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Bl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function $s(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ul(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function xm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[zi], delete t[Rl], delete t[y0], delete t[v0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ls));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bl(e, t, n), e = e.sibling; e !== null; ) bl(e, t, n), (e = e.sibling);
}
function $l(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($l(e, t, n), e = e.sibling; e !== null; ) $l(e, t, n), (e = e.sibling);
}
var Ve = null,
  St = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) Sm(e, t, n), (n = n.sibling);
}
function Sm(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(Fs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || pr(n, t);
    case 6:
      var r = Ve,
        i = St;
      (Ve = null),
        on(e, t, n),
        (Ve = r),
        (St = i),
        Ve !== null &&
          (St
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (St
          ? ((e = Ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? ja(e.parentNode, n)
              : e.nodeType === 1 && ja(e, n),
            Ni(e))
          : ja(Ve, n.stateNode));
      break;
    case 4:
      (r = Ve),
        (i = St),
        (Ve = n.stateNode.containerInfo),
        (St = !0),
        on(e, t, n),
        (Ve = r),
        (St = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Bl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Be &&
        (pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), on(e, t, n), (Be = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function Hf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new V0()),
      t.forEach(function (r) {
        var i = W0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ve = a.stateNode), (St = !1);
              break e;
            case 3:
              (Ve = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (Ve = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(A(160));
        Sm(o, s, i), (Ve = null), (St = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ye(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pm(t, e), (t = t.sibling);
}
function Pm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xt(t, e), Lt(e), r & 4)) {
        try {
          wi(3, e, e.return), $s(3, e);
        } catch (x) {
          ye(e, e.return, x);
        }
        try {
          wi(5, e, e.return);
        } catch (x) {
          ye(e, e.return, x);
        }
      }
      break;
    case 1:
      xt(t, e), Lt(e), r & 512 && n !== null && pr(n, n.return);
      break;
    case 5:
      if (
        (xt(t, e),
        Lt(e),
        r & 512 && n !== null && pr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ai(i, "");
        } catch (x) {
          ye(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && $h(i, o),
              hl(a, s);
            var u = hl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Gh(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Yh(i, f)
                  : c === "children"
                    ? Ai(i, f)
                    : Eu(i, c, f, u);
            }
            switch (a) {
              case "input":
                ll(i, o);
                break;
              case "textarea":
                Wh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Pr(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Pr(i, !!o.multiple, o.defaultValue, !0)
                      : Pr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[zi] = o;
          } catch (x) {
            ye(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((xt(t, e), Lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          ye(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (xt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ni(t.containerInfo);
        } catch (x) {
          ye(e, e.return, x);
        }
      break;
    case 4:
      xt(t, e), Lt(e);
      break;
    case 13:
      xt(t, e),
        Lt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (nc = ve())),
        r & 4 && Hf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (u = Be) || c), xt(t, e), (Be = u)) : xt(t, e),
        Lt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (((d = j), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, d, d.return);
                  break;
                case 1:
                  pr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      ye(r, n, x);
                    }
                  }
                  break;
                case 5:
                  pr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Kf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (j = g)) : Kf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Kh("display", s)));
              } catch (x) {
                ye(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                ye(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      xt(t, e), Lt(e), r & 4 && Hf(e);
      break;
    case 21:
      break;
    default:
      xt(t, e), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ai(i, ""), (r.flags &= -33));
          var o = Wf(e);
          $l(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Wf(e);
          bl(e, a, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function O0(e, t, n) {
  (j = e), Em(e);
}
function Em(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Do;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Be;
        a = Do;
        var u = Be;
        if (((Do = s), (Be = l) && !u))
          for (j = i; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Gf(i)
                : l !== null
                  ? ((l.return = s), (j = l))
                  : Gf(i);
        for (; o !== null; ) (j = o), Em(o), (o = o.sibling);
        (j = i), (Do = a), (Be = u);
      }
      Yf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (j = o)) : Yf(e);
  }
}
function Yf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || $s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Af(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Af(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ni(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        Be || (t.flags & 512 && Ul(t));
      } catch (d) {
        ye(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Kf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Gf(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $s(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ul(t);
          } catch (l) {
            ye(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ul(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var _0 = Math.ceil,
  xs = tn.ReactCurrentDispatcher,
  ec = tn.ReactCurrentOwner,
  gt = tn.ReactCurrentBatchConfig,
  X = 0,
  Le = null,
  Pe = null,
  Fe = 0,
  nt = 0,
  mr = An(0),
  Re = 0,
  Wi = null,
  Kn = 0,
  Ws = 0,
  tc = 0,
  Si = null,
  Ge = null,
  nc = 0,
  Or = 1 / 0,
  Bt = null,
  ws = !1,
  Wl = null,
  xn = null,
  jo = !1,
  hn = null,
  Ss = 0,
  Pi = 0,
  Hl = null,
  Go = -1,
  Xo = 0;
function We() {
  return X & 6 ? ve() : Go !== -1 ? Go : (Go = ve());
}
function wn(e) {
  return e.mode & 1
    ? X & 2 && Fe !== 0
      ? Fe & -Fe
      : w0.transition !== null
        ? (Xo === 0 && (Xo = sp()), Xo)
        : ((e = Z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hp(e.type))),
          e)
    : 1;
}
function Ct(e, t, n, r) {
  if (50 < Pi) throw ((Pi = 0), (Hl = null), Error(A(185)));
  qi(e, n, r),
    (!(X & 2) || e !== Le) &&
      (e === Le && (!(X & 2) && (Ws |= n), Re === 4 && fn(e, Fe)),
      Je(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Or = ve() + 500), Bs && Ln()));
}
function Je(e, t) {
  var n = e.callbackNode;
  wv(e, t);
  var r = is(e, e === Le ? Fe : 0);
  if (r === 0)
    n !== null && nf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nf(n), t === 1))
      e.tag === 0 ? x0(Xf.bind(null, e)) : jp(Xf.bind(null, e)),
        m0(function () {
          !(X & 6) && Ln();
        }),
        (n = null);
    else {
      switch (ap(r)) {
        case 1:
          n = Mu;
          break;
        case 4:
          n = ip;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = op;
          break;
        default:
          n = rs;
      }
      n = Dm(n, km.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function km(e, t) {
  if (((Go = -1), (Xo = 0), X & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (Rr() && e.callbackNode !== n) return null;
  var r = is(e, e === Le ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ps(e, r);
  else {
    t = r;
    var i = X;
    X |= 2;
    var o = Tm();
    (Le !== e || Fe !== t) && ((Bt = null), (Or = ve() + 500), bn(e, t));
    do
      try {
        B0();
        break;
      } catch (a) {
        Cm(e, a);
      }
    while (1);
    Uu(),
      (xs.current = o),
      (X = i),
      Pe !== null ? (t = 0) : ((Le = null), (Fe = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = vl(e)), i !== 0 && ((r = i), (t = Yl(e, i)))), t === 1)
    )
      throw ((n = Wi), bn(e, 0), fn(e, r), Je(e, ve()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !z0(i) &&
          ((t = Ps(e, r)),
          t === 2 && ((o = vl(e)), o !== 0 && ((r = o), (t = Yl(e, o)))),
          t === 1))
      )
        throw ((n = Wi), bn(e, 0), fn(e, r), Je(e, ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Vn(e, Ge, Bt);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = nc + 500 - ve()), 10 < t))
          ) {
            if (is(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Tl(Vn.bind(null, e, Ge, Bt), t);
            break;
          }
          Vn(e, Ge, Bt);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - kt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * _0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Tl(Vn.bind(null, e, Ge, Bt), r);
            break;
          }
          Vn(e, Ge, Bt);
          break;
        case 5:
          Vn(e, Ge, Bt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Je(e, ve()), e.callbackNode === n ? km.bind(null, e) : null;
}
function Yl(e, t) {
  var n = Si;
  return (
    e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
    (e = Ps(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && Kl(t)),
    e
  );
}
function Kl(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function z0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Tt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~tc,
      t &= ~Ws,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xf(e) {
  if (X & 6) throw Error(A(327));
  Rr();
  var t = is(e, 0);
  if (!(t & 1)) return Je(e, ve()), null;
  var n = Ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vl(e);
    r !== 0 && ((t = r), (n = Yl(e, r)));
  }
  if (n === 1) throw ((n = Wi), bn(e, 0), fn(e, t), Je(e, ve()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vn(e, Ge, Bt),
    Je(e, ve()),
    null
  );
}
function rc(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Or = ve() + 500), Bs && Ln());
  }
}
function Gn(e) {
  hn !== null && hn.tag === 0 && !(X & 6) && Rr();
  var t = X;
  X |= 1;
  var n = gt.transition,
    r = Z;
  try {
    if (((gt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (gt.transition = n), (X = t), !(X & 6) && Ln();
  }
}
function ic() {
  (nt = mr.current), se(mr);
}
function bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), p0(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((zu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && us();
          break;
        case 3:
          Vr(), se(Qe), se(Ue), Ku();
          break;
        case 5:
          Yu(r);
          break;
        case 4:
          Vr();
          break;
        case 13:
          se(fe);
          break;
        case 19:
          se(fe);
          break;
        case 10:
          bu(r.type._context);
          break;
        case 22:
        case 23:
          ic();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (Pe = e = Sn(e.current, null)),
    (Fe = nt = t),
    (Re = 0),
    (Wi = null),
    (tc = Ws = Kn = 0),
    (Ge = Si = null),
    zn !== null)
  ) {
    for (t = 0; t < zn.length; t++)
      if (((n = zn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    zn = null;
  }
  return e;
}
function Cm(e, t) {
  do {
    var n = Pe;
    try {
      if ((Uu(), (Ho.current = vs), ys)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((Yn = 0),
        (Ae = Ce = pe = null),
        (xi = !1),
        (Ui = 0),
        (ec.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (Wi = t), (Pe = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Fe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Of(s);
          if (g !== null) {
            (g.flags &= -257),
              _f(g, s, a, o, t),
              g.mode & 1 && Ff(o, u, t),
              (t = g),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ff(o, u, t), oc();
              break e;
            }
            l = Error(A(426));
          }
        } else if (ue && a.mode & 1) {
          var k = Of(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              _f(k, s, a, o, t),
              Iu(Fr(l, a));
            break e;
          }
        }
        (o = l = Fr(l, a)),
          Re !== 4 && (Re = 2),
          Si === null ? (Si = [o]) : Si.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = lm(o, l, t);
              Mf(o, m);
              break e;
            case 1:
              a = l;
              var h = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (xn === null || !xn.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var p = um(o, a, t);
                Mf(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Mm(n);
    } catch (P) {
      (t = P), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Tm() {
  var e = xs.current;
  return (xs.current = vs), e === null ? vs : e;
}
function oc() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Le === null || (!(Kn & 268435455) && !(Ws & 268435455)) || fn(Le, Fe);
}
function Ps(e, t) {
  var n = X;
  X |= 2;
  var r = Tm();
  (Le !== e || Fe !== t) && ((Bt = null), bn(e, t));
  do
    try {
      I0();
      break;
    } catch (i) {
      Cm(e, i);
    }
  while (1);
  if ((Uu(), (X = n), (xs.current = r), Pe !== null)) throw Error(A(261));
  return (Le = null), (Fe = 0), Re;
}
function I0() {
  for (; Pe !== null; ) Rm(Pe);
}
function B0() {
  for (; Pe !== null && !fv(); ) Rm(Pe);
}
function Rm(e) {
  var t = Lm(e.alternate, e, nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mm(e) : (Pe = t),
    (ec.current = null);
}
function Mm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = N0(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), (Pe = null);
        return;
      }
    } else if (((n = j0(n, t, nt)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function Vn(e, t, n) {
  var r = Z,
    i = gt.transition;
  try {
    (gt.transition = null), (Z = 1), U0(e, t, n, r);
  } finally {
    (gt.transition = i), (Z = r);
  }
  return null;
}
function U0(e, t, n, r) {
  do Rr();
  while (hn !== null);
  if (X & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Sv(e, o),
    e === Le && ((Pe = Le = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jo ||
      ((jo = !0),
      Dm(rs, function () {
        return Rr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = gt.transition), (gt.transition = null);
    var s = Z;
    Z = 1;
    var a = X;
    (X |= 4),
      (ec.current = null),
      F0(e, n),
      Pm(n, e),
      a0(kl),
      (os = !!El),
      (kl = El = null),
      (e.current = n),
      O0(n),
      dv(),
      (X = a),
      (Z = s),
      (gt.transition = o);
  } else e.current = n;
  if (
    (jo && ((jo = !1), (hn = e), (Ss = i)),
    (o = e.pendingLanes),
    o === 0 && (xn = null),
    mv(n.stateNode),
    Je(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ws) throw ((ws = !1), (e = Wl), (Wl = null), e);
  return (
    Ss & 1 && e.tag !== 0 && Rr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Hl ? Pi++ : ((Pi = 0), (Hl = e))) : (Pi = 0),
    Ln(),
    null
  );
}
function Rr() {
  if (hn !== null) {
    var e = ap(Ss),
      t = gt.transition,
      n = Z;
    try {
      if (((gt.transition = null), (Z = 16 > e ? 16 : e), hn === null))
        var r = !1;
      else {
        if (((e = hn), (hn = null), (Ss = 0), X & 6)) throw Error(A(331));
        var i = X;
        for (X |= 4, j = e.current; j !== null; ) {
          var o = j,
            s = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (j = f);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var d = c.sibling,
                        g = c.return;
                      if ((xm(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (j = d);
                        break;
                      }
                      j = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var k = x.sibling;
                    (x.sibling = null), (x = k);
                  } while (x !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (j = s);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (j = m);
                break e;
              }
              j = o.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          s = j;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (j = y);
          else
            e: for (s = h; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $s(9, a);
                  }
                } catch (P) {
                  ye(a, a.return, P);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var p = a.sibling;
              if (p !== null) {
                (p.return = a.return), (j = p);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((X = i), Ln(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        )
          try {
            Vt.onPostCommitFiberRoot(Fs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (gt.transition = t);
    }
  }
  return !1;
}
function Qf(e, t, n) {
  (t = Fr(n, t)),
    (t = lm(e, t, 1)),
    (e = vn(e, t, 1)),
    (t = We()),
    e !== null && (qi(e, 1, t), Je(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) Qf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xn === null || !xn.has(r)))
        ) {
          (e = Fr(n, e)),
            (e = um(t, e, 1)),
            (t = vn(t, e, 1)),
            (e = We()),
            t !== null && (qi(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function b0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (Fe & n) === n &&
      (Re === 4 || (Re === 3 && (Fe & 130023424) === Fe && 500 > ve() - nc)
        ? bn(e, 0)
        : (tc |= n)),
    Je(e, t);
}
function Am(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Po), (Po <<= 1), !(Po & 130023424) && (Po = 4194304))
      : (t = 1));
  var n = We();
  (e = Jt(e, t)), e !== null && (qi(e, t, n), Je(e, n));
}
function $0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Am(e, n);
}
function W0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), Am(e, n);
}
var Lm;
Lm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), D0(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ue && t.flags & 1048576 && Np(t, ds, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ko(e, t), (e = t.pendingProps);
      var i = Dr(t, Ue.current);
      Tr(t, n), (i = Xu(null, t, r, e, i, n));
      var o = Qu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((o = !0), cs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Wu(t),
            (i.updater = Us),
            (t.stateNode = i),
            (i._reactInternals = t),
            Nl(t, r, e, n),
            (t = Ol(null, t, r, !0, o, n)))
          : ((t.tag = 0), ue && o && _u(t), $e(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ko(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Y0(r)),
          (e = wt(r, e)),
          i)
        ) {
          case 0:
            t = Fl(null, t, r, e, n);
            break e;
          case 1:
            t = Bf(null, t, r, e, n);
            break e;
          case 11:
            t = zf(null, t, r, e, n);
            break e;
          case 14:
            t = If(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Fl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Bf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((hm(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          _p(e, t),
          ms(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Fr(Error(A(423)), t)), (t = Uf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Fr(Error(A(424)), t)), (t = Uf(e, t, r, n, i));
            break e;
          } else
            for (
              rt = yn(t.stateNode.containerInfo.firstChild),
                it = t,
                ue = !0,
                Et = null,
                n = Up(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), r === i)) {
            t = qt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bp(t),
        e === null && Ll(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Cl(r, i) ? (s = null) : o !== null && Cl(r, o) && (t.flags |= 32),
        dm(e, t),
        $e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ll(t), null;
    case 13:
      return pm(e, t, n);
    case 4:
      return (
        Hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Nr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        zf(e, t, r, i, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          re(hs, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Tt(o.value, s)) {
            if (o.children === i.children && !Qe.current) {
              t = qt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Yt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Dl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(A(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Dl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        $e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Tr(t, n),
        (i = yt(i)),
        (r = r(i)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = wt(r, t.pendingProps)),
        (i = wt(r.type, i)),
        If(e, t, r, i, n)
      );
    case 15:
      return cm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Ko(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), cs(t)) : (e = !1),
        Tr(t, n),
        Ip(t, r, i),
        Nl(t, r, i, n),
        Ol(null, t, r, !0, e, n)
      );
    case 19:
      return mm(e, t, n);
    case 22:
      return fm(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Dm(e, t) {
  return rp(e, t);
}
function H0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new H0(e, t, n, r);
}
function sc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Y0(e) {
  if (typeof e == "function") return sc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cu)) return 11;
    if (e === Tu) return 14;
  }
  return 2;
}
function Sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) sc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case or:
        return $n(n.children, i, o, t);
      case ku:
        (s = 8), (i |= 8);
        break;
      case rl:
        return (
          (e = mt(12, n, t, i | 2)), (e.elementType = rl), (e.lanes = o), e
        );
      case il:
        return (e = mt(13, n, t, i)), (e.elementType = il), (e.lanes = o), e;
      case ol:
        return (e = mt(19, n, t, i)), (e.elementType = ol), (e.lanes = o), e;
      case Bh:
        return Hs(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zh:
              s = 10;
              break e;
            case Ih:
              s = 9;
              break e;
            case Cu:
              s = 11;
              break e;
            case Tu:
              s = 14;
              break e;
            case an:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function $n(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function Hs(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = Bh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ba(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function Ua(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function K0(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Sa(0)),
    (this.expirationTimes = Sa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ac(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new K0(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = mt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wu(o),
    e
  );
}
function G0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ir,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jm(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Dp(e, n, t);
  }
  return t;
}
function Nm(e, t, n, r, i, o, s, a, l) {
  return (
    (e = ac(n, r, !0, e, i, o, s, a, l)),
    (e.context = jm(null)),
    (n = e.current),
    (r = We()),
    (i = wn(n)),
    (o = Yt(r, i)),
    (o.callback = t ?? null),
    vn(n, o, i),
    (e.current.lanes = i),
    qi(e, i, r),
    Je(e, r),
    e
  );
}
function Ys(e, t, n, r) {
  var i = t.current,
    o = We(),
    s = wn(i);
  return (
    (n = jm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vn(i, t, s)),
    e !== null && (Ct(e, i, s, o), Wo(e, i, s)),
    s
  );
}
function Es(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lc(e, t) {
  Zf(e, t), (e = e.alternate) && Zf(e, t);
}
function X0() {
  return null;
}
var Vm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function uc(e) {
  this._internalRoot = e;
}
Ks.prototype.render = uc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Ys(e, t, null, null);
};
Ks.prototype.unmount = uc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gn(function () {
      Ys(null, e, null, null);
    }),
      (t[Zt] = null);
  }
};
function Ks(e) {
  this._internalRoot = e;
}
Ks.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && dp(e);
  }
};
function cc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jf() {}
function Q0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Es(s);
        o.call(u);
      };
    }
    var s = Nm(t, r, e, 0, null, !1, !1, "", Jf);
    return (
      (e._reactRootContainer = s),
      (e[Zt] = s.current),
      Oi(e.nodeType === 8 ? e.parentNode : e),
      Gn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Es(l);
      a.call(u);
    };
  }
  var l = ac(e, 0, !1, null, null, !1, !1, "", Jf);
  return (
    (e._reactRootContainer = l),
    (e[Zt] = l.current),
    Oi(e.nodeType === 8 ? e.parentNode : e),
    Gn(function () {
      Ys(t, l, n, r);
    }),
    l
  );
}
function Xs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Es(s);
        a.call(l);
      };
    }
    Ys(t, s, e, i);
  } else s = Q0(n, t, e, i, r);
  return Es(s);
}
lp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fi(t.pendingLanes);
        n !== 0 &&
          (Au(t, n | 1), Je(t, ve()), !(X & 6) && ((Or = ve() + 500), Ln()));
      }
      break;
    case 13:
      Gn(function () {
        var r = Jt(e, 1);
        if (r !== null) {
          var i = We();
          Ct(r, e, 1, i);
        }
      }),
        lc(e, 1);
  }
};
Lu = function (e) {
  if (e.tag === 13) {
    var t = Jt(e, 134217728);
    if (t !== null) {
      var n = We();
      Ct(t, e, 134217728, n);
    }
    lc(e, 134217728);
  }
};
up = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = Jt(e, t);
    if (n !== null) {
      var r = We();
      Ct(n, e, t, r);
    }
    lc(e, t);
  }
};
cp = function () {
  return Z;
};
fp = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
ml = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Is(r);
            if (!i) throw Error(A(90));
            bh(r), ll(r, i);
          }
        }
      }
      break;
    case "textarea":
      Wh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Pr(e, !!n.multiple, t, !1);
  }
};
Zh = rc;
Jh = Gn;
var Z0 = { usingClientEntryPoint: !1, Events: [to, ur, Is, Xh, Qh, rc] },
  ti = {
    findFiberByHostInstance: _n,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  J0 = {
    bundleType: ti.bundleType,
    version: ti.version,
    rendererPackageName: ti.rendererPackageName,
    rendererConfig: ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = tp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ti.findFiberByHostInstance || X0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!No.isDisabled && No.supportsFiber)
    try {
      (Fs = No.inject(J0)), (Vt = No);
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0;
at.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cc(t)) throw Error(A(200));
  return G0(e, t, null, n);
};
at.createRoot = function (e, t) {
  if (!cc(e)) throw Error(A(299));
  var n = !1,
    r = "",
    i = Vm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ac(e, 1, !1, null, null, n, !1, r, i)),
    (e[Zt] = t.current),
    Oi(e.nodeType === 8 ? e.parentNode : e),
    new uc(t)
  );
};
at.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = tp(t)), (e = e === null ? null : e.stateNode), e;
};
at.flushSync = function (e) {
  return Gn(e);
};
at.hydrate = function (e, t, n) {
  if (!Gs(t)) throw Error(A(200));
  return Xs(null, e, t, !0, n);
};
at.hydrateRoot = function (e, t, n) {
  if (!cc(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Vm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Nm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Zt] = t.current),
    Oi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ks(t);
};
at.render = function (e, t, n) {
  if (!Gs(t)) throw Error(A(200));
  return Xs(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
  if (!Gs(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Gn(function () {
        Xs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Zt] = null);
        });
      }),
      !0)
    : !1;
};
at.unstable_batchedUpdates = rc;
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gs(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Xs(e, t, n, !1, r);
};
at.version = "18.2.0-next-9e3b772b8-20220608";
function Fm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm);
    } catch (e) {
      console.error(e);
    }
}
Fm(), (Nh.exports = at);
var q0 = Nh.exports,
  Om,
  qf = q0;
(Om = qf.createRoot), qf.hydrateRoot;
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    le.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const ed = "popstate";
function e1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Hi(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Xn(i);
  }
  return n1(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _r(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function t1() {
  return Math.random().toString(36).substr(2, 8);
}
function td(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Hi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    le(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? nn(t) : t,
      { state: n, key: (t && t.key) || r || t1() },
    )
  );
}
function Xn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function nn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function n1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Se.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(le({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Se.Pop;
    let k = c(),
      m = k == null ? null : k - u;
    (u = k), l && l({ action: a, location: x.location, delta: m });
  }
  function d(k, m) {
    a = Se.Push;
    let h = Hi(x.location, k, m);
    n && n(h, k), (u = c() + 1);
    let y = td(h, u),
      p = x.createHref(h);
    try {
      s.pushState(y, "", p);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      i.location.assign(p);
    }
    o && l && l({ action: a, location: x.location, delta: 1 });
  }
  function g(k, m) {
    a = Se.Replace;
    let h = Hi(x.location, k, m);
    n && n(h, k), (u = c());
    let y = td(h, u),
      p = x.createHref(h);
    s.replaceState(y, "", p),
      o && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(k) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof k == "string" ? k : Xn(k);
    return (
      K(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ed, f),
        (l = k),
        () => {
          i.removeEventListener(ed, f), (l = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let m = v(k);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: g,
    go(k) {
      return s.go(k);
    },
  };
  return x;
}
var Ee;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ee || (Ee = {}));
const r1 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function i1(e) {
  return e.index === !0;
}
function Gl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let s = [...n, o],
        a = typeof i.id == "string" ? i.id : s.join("-");
      if (
        (K(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route",
        ),
        K(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        i1(i))
      ) {
        let l = le({}, i, t(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = le({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = l), i.children && (l.children = Gl(i.children, t, s, r)), l
        );
      }
    })
  );
}
function gr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? nn(t) : t,
    i = br(r.pathname || "/", n);
  if (i == null) return null;
  let o = _m(e);
  o1(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) s = p1(o[a], y1(i));
  return s;
}
function _m(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (K(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Kt([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (K(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      _m(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: d1(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of zm(o.path)) i(o, s, l);
    }),
    t
  );
}
function zm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = zm(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function o1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : h1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const s1 = /^:\w+$/,
  a1 = 3,
  l1 = 2,
  u1 = 1,
  c1 = 10,
  f1 = -2,
  nd = (e) => e === "*";
function d1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(nd) && (r += f1),
    t && (r += l1),
    n
      .filter((i) => !nd(i))
      .reduce((i, o) => i + (s1.test(o) ? a1 : o === "" ? u1 : c1), r)
  );
}
function h1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function p1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = m1(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    o.push({
      params: r,
      pathname: Kt([i, c.pathname]),
      pathnameBase: S1(Kt([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (i = Kt([i, c.pathnameBase]));
  }
  return o;
}
function m1(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = g1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let d = a[f] || "";
        s = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = v1(a[f] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function g1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    _r(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function y1(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      _r(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function v1(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      _r(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function br(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function x1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? nn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : w1(n, t)) : t,
    search: P1(r),
    hash: E1(i),
  };
}
function w1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ba(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Qs(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function fc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = nn(e))
    : ((i = le({}, e)),
      K(
        !i.pathname || !i.pathname.includes("?"),
        ba("?", "pathname", "search", i),
      ),
      K(
        !i.pathname || !i.pathname.includes("#"),
        ba("#", "pathname", "hash", i),
      ),
      K(!i.search || !i.search.includes("#"), ba("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (r || s == null) a = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = x1(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Kt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  S1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  P1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  E1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class dc {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Im(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bm = ["post", "put", "patch", "delete"],
  k1 = new Set(Bm),
  C1 = ["get", ...Bm],
  T1 = new Set(C1),
  R1 = new Set([301, 302, 303, 307, 308]),
  M1 = new Set([307, 308]),
  $a = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  A1 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ni = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Um = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  L1 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function D1(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    i = (E) => ({ hasErrorBoundary: S(E) });
  } else i = L1;
  let o = {},
    s = Gl(e.routes, i, void 0, o),
    a,
    l = e.basename || "/",
    u = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    c = null,
    f = new Set(),
    d = null,
    g = null,
    v = null,
    x = e.hydrationData != null,
    k = gr(s, e.history.location, l),
    m = null;
  if (k == null) {
    let S = dt(404, { pathname: e.history.location.pathname }),
      { matches: E, route: M } = cd(s);
    (k = E), (m = { [M.id]: S });
  }
  let h =
      !k.some((S) => S.route.lazy) &&
      (!k.some((S) => S.route.loader) || e.hydrationData != null),
    y,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: k,
      initialized: h,
      navigation: $a,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = Se.Pop,
    L = !1,
    T,
    R = !1,
    F = !1,
    O = [],
    q = [],
    Y = new Map(),
    De = 0,
    ie = -1,
    J = new Map(),
    xe = new Set(),
    je = new Map(),
    D = new Map(),
    _ = new Map(),
    U = !1;
  function B() {
    return (
      (c = e.history.listen((S) => {
        let { action: E, location: M, delta: N } = S;
        if (U) {
          U = !1;
          return;
        }
        _r(
          _.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let H = Bc({
          currentLocation: p.location,
          nextLocation: M,
          historyAction: E,
        });
        if (H && N != null) {
          (U = !0),
            e.history.go(N * -1),
            ho(H, {
              state: "blocked",
              location: M,
              proceed() {
                ho(H, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  e.history.go(N);
              },
              reset() {
                let b = new Map(p.blockers);
                b.set(H, ni), ee({ blockers: b });
              },
            });
          return;
        }
        return Rt(E, M);
      })),
      p.initialized || Rt(Se.Pop, p.location),
      y
    );
  }
  function te() {
    c && c(),
      f.clear(),
      T && T.abort(),
      p.fetchers.forEach((S, E) => ca(E)),
      p.blockers.forEach((S, E) => Ic(E));
  }
  function _t(S) {
    return f.add(S), () => f.delete(S);
  }
  function ee(S) {
    (p = le({}, p, S)), f.forEach((E) => E(p));
  }
  function ut(S, E) {
    var M, N;
    let H =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        Pt(p.navigation.formMethod) &&
        p.navigation.state === "loading" &&
        ((M = S.state) == null ? void 0 : M._isRedirect) !== !0,
      b;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (b = E.actionData)
        : (b = null)
      : H
        ? (b = p.actionData)
        : (b = null);
    let W = E.loaderData
        ? ud(p.loaderData, E.loaderData, E.matches || [], E.errors)
        : p.loaderData,
      z = p.blockers;
    z.size > 0 && ((z = new Map(z)), z.forEach((ne, Q) => z.set(Q, ni)));
    let V =
      L === !0 ||
      (p.navigation.formMethod != null &&
        Pt(p.navigation.formMethod) &&
        ((N = S.state) == null ? void 0 : N._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      R ||
        P === Se.Pop ||
        (P === Se.Push
          ? e.history.push(S, S.state)
          : P === Se.Replace && e.history.replace(S, S.state)),
      ee(
        le({}, E, {
          actionData: b,
          loaderData: W,
          historyAction: P,
          location: S,
          initialized: !0,
          navigation: $a,
          revalidation: "idle",
          restoreScrollPosition: bc(S, E.matches || p.matches),
          preventScrollReset: V,
          blockers: z,
        }),
      ),
      (P = Se.Pop),
      (L = !1),
      (R = !1),
      (F = !1),
      (O = []),
      (q = []);
  }
  async function _e(S, E) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let M = Xl(
        p.location,
        p.matches,
        l,
        u.v7_prependBasename,
        S,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      {
        path: N,
        submission: H,
        error: b,
      } = rd(u.v7_normalizeFormMethod, !1, M, E),
      W = p.location,
      z = Hi(p.location, N, E && E.state);
    z = le({}, z, e.history.encodeLocation(z));
    let V = E && E.replace != null ? E.replace : void 0,
      ne = Se.Push;
    V === !0
      ? (ne = Se.Replace)
      : V === !1 ||
        (H != null &&
          Pt(H.formMethod) &&
          H.formAction === p.location.pathname + p.location.search &&
          (ne = Se.Replace));
    let Q =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      et = Bc({ currentLocation: W, nextLocation: z, historyAction: ne });
    if (et) {
      ho(et, {
        state: "blocked",
        location: z,
        proceed() {
          ho(et, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: z,
          }),
            _e(S, E);
        },
        reset() {
          let Me = new Map(p.blockers);
          Me.set(et, ni), ee({ blockers: Me });
        },
      });
      return;
    }
    return await Rt(ne, z, {
      submission: H,
      pendingError: b,
      preventScrollReset: Q,
      replace: E && E.replace,
    });
  }
  function zt() {
    if (
      (ua(),
      ee({ revalidation: "loading" }),
      p.navigation.state !== "submitting")
    ) {
      if (p.navigation.state === "idle") {
        Rt(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Rt(P || p.historyAction, p.navigation.location, {
        overrideNavigation: p.navigation,
      });
    }
  }
  async function Rt(S, E, M) {
    T && T.abort(),
      (T = null),
      (P = S),
      (R = (M && M.startUninterruptedRevalidation) === !0),
      Ey(p.location, p.matches),
      (L = (M && M.preventScrollReset) === !0);
    let N = a || s,
      H = M && M.overrideNavigation,
      b = gr(N, E, l);
    if (!b) {
      let Me = dt(404, { pathname: E.pathname }),
        { matches: Ke, route: At } = cd(N);
      fa(), ut(E, { matches: Ke, loaderData: {}, errors: { [At.id]: Me } });
      return;
    }
    if (
      p.initialized &&
      !F &&
      O1(p.location, E) &&
      !(M && M.submission && Pt(M.submission.formMethod))
    ) {
      ut(E, { matches: b });
      return;
    }
    T = new AbortController();
    let W = ii(e.history, E, T.signal, M && M.submission),
      z,
      V;
    if (M && M.pendingError) V = { [yr(b).route.id]: M.pendingError };
    else if (M && M.submission && Pt(M.submission.formMethod)) {
      let Me = await Wr(W, E, M.submission, b, { replace: M.replace });
      if (Me.shortCircuited) return;
      (z = Me.pendingActionData),
        (V = Me.pendingActionError),
        (H = Vo(E, M.submission)),
        (W = new Request(W.url, { signal: W.signal }));
    }
    let {
      shortCircuited: ne,
      loaderData: Q,
      errors: et,
    } = await tr(
      W,
      E,
      b,
      H,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      z,
      V,
    );
    ne ||
      ((T = null),
      ut(
        E,
        le({ matches: b }, z ? { actionData: z } : {}, {
          loaderData: Q,
          errors: et,
        }),
      ));
  }
  async function Wr(S, E, M, N, H) {
    H === void 0 && (H = {}), ua();
    let b = U1(E, M);
    ee({ navigation: b });
    let W,
      z = Zl(N, E);
    if (!z.route.action && !z.route.lazy)
      W = {
        type: Ee.error,
        error: dt(405, {
          method: S.method,
          pathname: E.pathname,
          routeId: z.route.id,
        }),
      };
    else if (((W = await ri("action", S, z, N, o, i, l)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (Mr(W)) {
      let V;
      return (
        H && H.replace != null
          ? (V = H.replace)
          : (V = W.location === p.location.pathname + p.location.search),
        await Hr(p, W, { submission: M, replace: V }),
        { shortCircuited: !0 }
      );
    }
    if (Ei(W)) {
      let V = yr(N, z.route.id);
      return (
        (H && H.replace) !== !0 && (P = Se.Push),
        { pendingActionData: {}, pendingActionError: { [V.route.id]: W.error } }
      );
    }
    if (Bn(W)) throw dt(400, { type: "defer-action" });
    return { pendingActionData: { [z.route.id]: W.data } };
  }
  async function tr(S, E, M, N, H, b, W, z, V) {
    let ne = N || Vo(E, H),
      Q = H || b || hd(ne),
      et = a || s,
      [Me, Ke] = id(e.history, p, M, Q, E, F, O, q, je, xe, et, l, z, V);
    if (
      (fa(
        (ae) =>
          !(M && M.some((ct) => ct.route.id === ae)) ||
          (Me && Me.some((ct) => ct.route.id === ae)),
      ),
      Me.length === 0 && Ke.length === 0)
    ) {
      let ae = _c();
      return (
        ut(
          E,
          le(
            { matches: M, loaderData: {}, errors: V || null },
            z ? { actionData: z } : {},
            ae ? { fetchers: new Map(p.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!R) {
      Ke.forEach((ct) => {
        let nr = p.fetchers.get(ct.key),
          Ne = oi(void 0, nr ? nr.data : void 0);
        p.fetchers.set(ct.key, Ne);
      });
      let ae = z || p.actionData;
      ee(
        le(
          { navigation: ne },
          ae
            ? Object.keys(ae).length === 0
              ? { actionData: null }
              : { actionData: ae }
            : {},
          Ke.length > 0 ? { fetchers: new Map(p.fetchers) } : {},
        ),
      );
    }
    (ie = ++De),
      Ke.forEach((ae) => {
        Y.has(ae.key) && rn(ae.key),
          ae.controller && Y.set(ae.key, ae.controller);
      });
    let At = () => Ke.forEach((ae) => rn(ae.key));
    T && T.signal.addEventListener("abort", At);
    let {
      results: Yr,
      loaderResults: da,
      fetcherResults: po,
    } = await Fc(p.matches, M, Me, Ke, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", At),
      Ke.forEach((ae) => Y.delete(ae.key));
    let It = fd(Yr);
    if (It) return await Hr(p, It, { replace: W }), { shortCircuited: !0 };
    let { loaderData: mo, errors: ha } = ld(p, M, Me, da, V, Ke, po, D);
    D.forEach((ae, ct) => {
      ae.subscribe((nr) => {
        (nr || ae.done) && D.delete(ct);
      });
    });
    let pa = _c(),
      ma = zc(ie),
      go = pa || ma || Ke.length > 0;
    return le(
      { loaderData: mo, errors: ha },
      go ? { fetchers: new Map(p.fetchers) } : {},
    );
  }
  function Mt(S) {
    return p.fetchers.get(S) || A1;
  }
  function uo(S, E, M, N) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Y.has(S) && rn(S);
    let H = a || s,
      b = Xl(
        p.location,
        p.matches,
        l,
        u.v7_prependBasename,
        M,
        E,
        N == null ? void 0 : N.relative,
      ),
      W = gr(H, b, l);
    if (!W) {
      fo(S, E, dt(404, { pathname: b }));
      return;
    }
    let {
      path: z,
      submission: V,
      error: ne,
    } = rd(u.v7_normalizeFormMethod, !0, b, N);
    if (ne) {
      fo(S, E, ne);
      return;
    }
    let Q = Zl(W, z);
    if (((L = (N && N.preventScrollReset) === !0), V && Pt(V.formMethod))) {
      co(S, E, z, Q, W, V);
      return;
    }
    je.set(S, { routeId: E, path: z }), wy(S, E, z, Q, W, V);
  }
  async function co(S, E, M, N, H, b) {
    if ((ua(), je.delete(S), !N.route.action && !N.route.lazy)) {
      let Ne = dt(405, { method: b.formMethod, pathname: M, routeId: E });
      fo(S, E, Ne);
      return;
    }
    let W = p.fetchers.get(S),
      z = b1(b, W);
    p.fetchers.set(S, z), ee({ fetchers: new Map(p.fetchers) });
    let V = new AbortController(),
      ne = ii(e.history, M, V.signal, b);
    Y.set(S, V);
    let Q = await ri("action", ne, N, H, o, i, l);
    if (ne.signal.aborted) {
      Y.get(S) === V && Y.delete(S);
      return;
    }
    if (Mr(Q)) {
      Y.delete(S), xe.add(S);
      let Ne = oi(b);
      return (
        p.fetchers.set(S, Ne),
        ee({ fetchers: new Map(p.fetchers) }),
        Hr(p, Q, { submission: b, isFetchActionRedirect: !0 })
      );
    }
    if (Ei(Q)) {
      fo(S, E, Q.error);
      return;
    }
    if (Bn(Q)) throw dt(400, { type: "defer-action" });
    let et = p.navigation.location || p.location,
      Me = ii(e.history, et, V.signal),
      Ke = a || s,
      At =
        p.navigation.state !== "idle"
          ? gr(Ke, p.navigation.location, l)
          : p.matches;
    K(At, "Didn't find any matches after fetcher action");
    let Yr = ++De;
    J.set(S, Yr);
    let da = oi(b, Q.data);
    p.fetchers.set(S, da);
    let [po, It] = id(
      e.history,
      p,
      At,
      b,
      et,
      F,
      O,
      q,
      je,
      xe,
      Ke,
      l,
      { [N.route.id]: Q.data },
      void 0,
    );
    It.filter((Ne) => Ne.key !== S).forEach((Ne) => {
      let Kr = Ne.key,
        $c = p.fetchers.get(Kr),
        Cy = oi(void 0, $c ? $c.data : void 0);
      p.fetchers.set(Kr, Cy),
        Y.has(Kr) && rn(Kr),
        Ne.controller && Y.set(Kr, Ne.controller);
    }),
      ee({ fetchers: new Map(p.fetchers) });
    let mo = () => It.forEach((Ne) => rn(Ne.key));
    V.signal.addEventListener("abort", mo);
    let {
      results: ha,
      loaderResults: pa,
      fetcherResults: ma,
    } = await Fc(p.matches, At, po, It, Me);
    if (V.signal.aborted) return;
    V.signal.removeEventListener("abort", mo),
      J.delete(S),
      Y.delete(S),
      It.forEach((Ne) => Y.delete(Ne.key));
    let go = fd(ha);
    if (go) return Hr(p, go);
    let { loaderData: ae, errors: ct } = ld(
      p,
      p.matches,
      po,
      pa,
      void 0,
      It,
      ma,
      D,
    );
    if (p.fetchers.has(S)) {
      let Ne = Zo(Q.data);
      p.fetchers.set(S, Ne);
    }
    let nr = zc(Yr);
    p.navigation.state === "loading" && Yr > ie
      ? (K(P, "Expected pending action"),
        T && T.abort(),
        ut(p.navigation.location, {
          matches: At,
          loaderData: ae,
          errors: ct,
          fetchers: new Map(p.fetchers),
        }))
      : (ee(
          le(
            { errors: ct, loaderData: ud(p.loaderData, ae, At, ct) },
            nr || It.length > 0 ? { fetchers: new Map(p.fetchers) } : {},
          ),
        ),
        (F = !1));
  }
  async function wy(S, E, M, N, H, b) {
    let W = p.fetchers.get(S),
      z = oi(b, W ? W.data : void 0);
    p.fetchers.set(S, z), ee({ fetchers: new Map(p.fetchers) });
    let V = new AbortController(),
      ne = ii(e.history, M, V.signal);
    Y.set(S, V);
    let Q = await ri("loader", ne, N, H, o, i, l);
    if (
      (Bn(Q) && (Q = (await Wm(Q, ne.signal, !0)) || Q),
      Y.get(S) === V && Y.delete(S),
      ne.signal.aborted)
    )
      return;
    if (Mr(Q)) {
      xe.add(S), await Hr(p, Q);
      return;
    }
    if (Ei(Q)) {
      let Me = yr(p.matches, E);
      p.fetchers.delete(S),
        ee({
          fetchers: new Map(p.fetchers),
          errors: { [Me.route.id]: Q.error },
        });
      return;
    }
    K(!Bn(Q), "Unhandled fetcher deferred data");
    let et = Zo(Q.data);
    p.fetchers.set(S, et), ee({ fetchers: new Map(p.fetchers) });
  }
  async function Hr(S, E, M) {
    let {
      submission: N,
      replace: H,
      isFetchActionRedirect: b,
    } = M === void 0 ? {} : M;
    E.revalidate && (F = !0);
    let W = Hi(
      S.location,
      E.location,
      le({ _isRedirect: !0 }, b ? { _isFetchActionRedirect: !0 } : {}),
    );
    if (
      (K(W, "Expected a location on the redirect navigation"),
      Um.test(E.location) && n)
    ) {
      let ne = e.history.createURL(E.location),
        Q = br(ne.pathname, l) == null;
      if (t.location.origin !== ne.origin || Q) {
        H ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    T = null;
    let z = H === !0 ? Se.Replace : Se.Push,
      V = N || hd(S.navigation);
    if (M1.has(E.status) && V && Pt(V.formMethod))
      await Rt(z, W, {
        submission: le({}, V, { formAction: E.location }),
        preventScrollReset: L,
      });
    else if (b)
      await Rt(z, W, {
        overrideNavigation: Vo(W),
        fetcherSubmission: V,
        preventScrollReset: L,
      });
    else {
      let ne = Vo(W, V);
      await Rt(z, W, { overrideNavigation: ne, preventScrollReset: L });
    }
  }
  async function Fc(S, E, M, N, H) {
    let b = await Promise.all([
        ...M.map((V) => ri("loader", H, V, E, o, i, l)),
        ...N.map((V) =>
          V.matches && V.match && V.controller
            ? ri(
                "loader",
                ii(e.history, V.path, V.controller.signal),
                V.match,
                V.matches,
                o,
                i,
                l,
              )
            : { type: Ee.error, error: dt(404, { pathname: V.path }) },
        ),
      ]),
      W = b.slice(0, M.length),
      z = b.slice(M.length);
    return (
      await Promise.all([
        dd(
          S,
          M,
          W,
          W.map(() => H.signal),
          !1,
          p.loaderData,
        ),
        dd(
          S,
          N.map((V) => V.match),
          z,
          N.map((V) => (V.controller ? V.controller.signal : null)),
          !0,
        ),
      ]),
      { results: b, loaderResults: W, fetcherResults: z }
    );
  }
  function ua() {
    (F = !0),
      O.push(...fa()),
      je.forEach((S, E) => {
        Y.has(E) && (q.push(E), rn(E));
      });
  }
  function fo(S, E, M) {
    let N = yr(p.matches, E);
    ca(S), ee({ errors: { [N.route.id]: M }, fetchers: new Map(p.fetchers) });
  }
  function ca(S) {
    let E = p.fetchers.get(S);
    Y.has(S) && !(E && E.state === "loading" && J.has(S)) && rn(S),
      je.delete(S),
      J.delete(S),
      xe.delete(S),
      p.fetchers.delete(S);
  }
  function rn(S) {
    let E = Y.get(S);
    K(E, "Expected fetch controller: " + S), E.abort(), Y.delete(S);
  }
  function Oc(S) {
    for (let E of S) {
      let M = Mt(E),
        N = Zo(M.data);
      p.fetchers.set(E, N);
    }
  }
  function _c() {
    let S = [],
      E = !1;
    for (let M of xe) {
      let N = p.fetchers.get(M);
      K(N, "Expected fetcher: " + M),
        N.state === "loading" && (xe.delete(M), S.push(M), (E = !0));
    }
    return Oc(S), E;
  }
  function zc(S) {
    let E = [];
    for (let [M, N] of J)
      if (N < S) {
        let H = p.fetchers.get(M);
        K(H, "Expected fetcher: " + M),
          H.state === "loading" && (rn(M), J.delete(M), E.push(M));
      }
    return Oc(E), E.length > 0;
  }
  function Sy(S, E) {
    let M = p.blockers.get(S) || ni;
    return _.get(S) !== E && _.set(S, E), M;
  }
  function Ic(S) {
    p.blockers.delete(S), _.delete(S);
  }
  function ho(S, E) {
    let M = p.blockers.get(S) || ni;
    K(
      (M.state === "unblocked" && E.state === "blocked") ||
        (M.state === "blocked" && E.state === "blocked") ||
        (M.state === "blocked" && E.state === "proceeding") ||
        (M.state === "blocked" && E.state === "unblocked") ||
        (M.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + M.state + " -> " + E.state,
    );
    let N = new Map(p.blockers);
    N.set(S, E), ee({ blockers: N });
  }
  function Bc(S) {
    let { currentLocation: E, nextLocation: M, historyAction: N } = S;
    if (_.size === 0) return;
    _.size > 1 && _r(!1, "A router only supports one blocker at a time");
    let H = Array.from(_.entries()),
      [b, W] = H[H.length - 1],
      z = p.blockers.get(b);
    if (
      !(z && z.state === "proceeding") &&
      W({ currentLocation: E, nextLocation: M, historyAction: N })
    )
      return b;
  }
  function fa(S) {
    let E = [];
    return (
      D.forEach((M, N) => {
        (!S || S(N)) && (M.cancel(), E.push(N), D.delete(N));
      }),
      E
    );
  }
  function Py(S, E, M) {
    if (((d = S), (v = E), (g = M || null), !x && p.navigation === $a)) {
      x = !0;
      let N = bc(p.location, p.matches);
      N != null && ee({ restoreScrollPosition: N });
    }
    return () => {
      (d = null), (v = null), (g = null);
    };
  }
  function Uc(S, E) {
    return (
      (g &&
        g(
          S,
          E.map((N) => B1(N, p.loaderData)),
        )) ||
      S.key
    );
  }
  function Ey(S, E) {
    if (d && v) {
      let M = Uc(S, E);
      d[M] = v();
    }
  }
  function bc(S, E) {
    if (d) {
      let M = Uc(S, E),
        N = d[M];
      if (typeof N == "number") return N;
    }
    return null;
  }
  function ky(S) {
    (o = {}), (a = Gl(S, i, void 0, o));
  }
  return (
    (y = {
      get basename() {
        return l;
      },
      get state() {
        return p;
      },
      get routes() {
        return s;
      },
      initialize: B,
      subscribe: _t,
      enableScrollRestoration: Py,
      navigate: _e,
      fetch: uo,
      revalidate: zt,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: Mt,
      deleteFetcher: ca,
      dispose: te,
      getBlocker: Sy,
      deleteBlocker: Ic,
      _internalFetchControllers: Y,
      _internalActiveDeferreds: D,
      _internalSetRoutes: ky,
    }),
    y
  );
}
function j1(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Xl(e, t, n, r, i, o, s) {
  let a, l;
  if (o != null && s !== "path") {
    a = [];
    for (let c of t)
      if ((a.push(c), c.route.id === o)) {
        l = c;
        break;
      }
  } else (a = t), (l = t[t.length - 1]);
  let u = fc(
    i || ".",
    Qs(a).map((c) => c.pathnameBase),
    br(e.pathname, n) || e.pathname,
    s === "path",
  );
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      l &&
      l.route.index &&
      !hc(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : Kt([n, u.pathname])),
    Xn(u)
  );
}
function rd(e, t, n, r) {
  if (!r || !j1(r)) return { path: n };
  if (r.formMethod && !I1(r.formMethod))
    return { path: n, error: dt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: dt(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    s = e ? o.toUpperCase() : o.toLowerCase(),
    a = $m(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Pt(s)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((g, v) => {
                let [x, k] = v;
                return (
                  "" +
                  g +
                  x +
                  "=" +
                  k +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Pt(s)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, u;
  if (r.formData) (l = Ql(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = Ql(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = ad(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = ad(l));
    } catch {
      return i();
    }
  let c = {
    formMethod: s,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Pt(c.formMethod)) return { path: n, submission: c };
  let f = nn(n);
  return (
    t && f.search && hc(f.search) && l.append("index", ""),
    (f.search = "?" + l),
    { path: Xn(f), submission: c }
  );
}
function N1(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function id(e, t, n, r, i, o, s, a, l, u, c, f, d, g) {
  let v = g ? Object.values(g)[0] : d ? Object.values(d)[0] : void 0,
    x = e.createURL(t.location),
    k = e.createURL(i),
    m = g ? Object.keys(g)[0] : void 0,
    y = N1(n, m).filter((P, L) => {
      if (P.route.lazy) return !0;
      if (P.route.loader == null) return !1;
      if (V1(t.loaderData, t.matches[L], P) || s.some((F) => F === P.route.id))
        return !0;
      let T = t.matches[L],
        R = P;
      return od(
        P,
        le(
          {
            currentUrl: x,
            currentParams: T.params,
            nextUrl: k,
            nextParams: R.params,
          },
          r,
          {
            actionResult: v,
            defaultShouldRevalidate:
              o ||
              x.pathname + x.search === k.pathname + k.search ||
              x.search !== k.search ||
              bm(T, R),
          },
        ),
      );
    }),
    p = [];
  return (
    l.forEach((P, L) => {
      if (!n.some((Y) => Y.route.id === P.routeId)) return;
      let T = gr(c, P.path, f);
      if (!T) {
        p.push({
          key: L,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let R = t.fetchers.get(L),
        F = R && R.state !== "idle" && R.data === void 0 && !u.has(L),
        O = Zl(T, P.path);
      (a.includes(L) ||
        F ||
        od(
          O,
          le(
            {
              currentUrl: x,
              currentParams: t.matches[t.matches.length - 1].params,
              nextUrl: k,
              nextParams: n[n.length - 1].params,
            },
            r,
            { actionResult: v, defaultShouldRevalidate: o },
          ),
        )) &&
        p.push({
          key: L,
          routeId: P.routeId,
          path: P.path,
          matches: T,
          match: O,
          controller: new AbortController(),
        });
    }),
    [y, p]
  );
}
function V1(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function bm(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function od(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function sd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  K(i, "No route found in manifest");
  let o = {};
  for (let s in r) {
    let l = i[s] !== void 0 && s !== "hasErrorBoundary";
    _r(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.'),
    ),
      !l && !r1.has(s) && (o[s] = r[s]);
  }
  Object.assign(i, o), Object.assign(i, le({}, t(i), { lazy: void 0 }));
}
async function ri(e, t, n, r, i, o, s, a) {
  a === void 0 && (a = {});
  let l,
    u,
    c,
    f = (v) => {
      let x,
        k = new Promise((m, h) => (x = h));
      return (
        (c = () => x()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          v({ request: t, params: n.params, context: a.requestContext }),
          k,
        ])
      );
    };
  try {
    let v = n.route[e];
    if (n.route.lazy)
      if (v) u = (await Promise.all([f(v), sd(n.route, o, i)]))[0];
      else if ((await sd(n.route, o, i), (v = n.route[e]), v)) u = await f(v);
      else if (e === "action") {
        let x = new URL(t.url),
          k = x.pathname + x.search;
        throw dt(405, { method: t.method, pathname: k, routeId: n.route.id });
      } else return { type: Ee.data, data: void 0 };
    else if (v) u = await f(v);
    else {
      let x = new URL(t.url),
        k = x.pathname + x.search;
      throw dt(404, { pathname: k });
    }
    K(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (v) {
    (l = Ee.error), (u = v);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (z1(u)) {
    let v = u.status;
    if (R1.has(v)) {
      let m = u.headers.get("Location");
      if (
        (K(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !Um.test(m))
      )
        m = Xl(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, m);
      else if (!a.isStaticRequest) {
        let h = new URL(t.url),
          y = m.startsWith("//") ? new URL(h.protocol + m) : new URL(m),
          p = br(y.pathname, s) != null;
        y.origin === h.origin && p && (m = y.pathname + y.search + y.hash);
      }
      if (a.isStaticRequest) throw (u.headers.set("Location", m), u);
      return {
        type: Ee.redirect,
        status: v,
        location: m,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (a.isRouteRequest) throw { type: l || Ee.data, response: u };
    let x,
      k = u.headers.get("Content-Type");
    return (
      k && /\bapplication\/json\b/.test(k)
        ? (x = await u.json())
        : (x = await u.text()),
      l === Ee.error
        ? { type: l, error: new dc(v, u.statusText, x), headers: u.headers }
        : { type: Ee.data, data: x, statusCode: u.status, headers: u.headers }
    );
  }
  if (l === Ee.error) return { type: l, error: u };
  if (_1(u)) {
    var d, g;
    return {
      type: Ee.deferred,
      deferredData: u,
      statusCode: (d = u.init) == null ? void 0 : d.status,
      headers:
        ((g = u.init) == null ? void 0 : g.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: Ee.data, data: u };
}
function ii(e, t, n, r) {
  let i = e.createURL($m(t)).toString(),
    o = { signal: n };
  if (r && Pt(r.formMethod)) {
    let { formMethod: s, formEncType: a } = r;
    (o.method = s.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (o.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = Ql(r.formData))
            : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Ql(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function ad(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function F1(e, t, n, r, i) {
  let o = {},
    s = null,
    a,
    l = !1,
    u = {};
  return (
    n.forEach((c, f) => {
      let d = t[f].route.id;
      if (
        (K(!Mr(c), "Cannot handle redirect results in processLoaderData"),
        Ei(c))
      ) {
        let g = yr(e, d),
          v = c.error;
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (s = s || {}),
          s[g.route.id] == null && (s[g.route.id] = v),
          (o[d] = void 0),
          l || ((l = !0), (a = Im(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        Bn(c)
          ? (i.set(d, c.deferredData), (o[d] = c.deferredData.data))
          : (o[d] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (a = c.statusCode),
          c.headers && (u[d] = c.headers);
    }),
    r && ((s = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: u }
  );
}
function ld(e, t, n, r, i, o, s, a) {
  let { loaderData: l, errors: u } = F1(t, n, r, i, a);
  for (let c = 0; c < o.length; c++) {
    let { key: f, match: d, controller: g } = o[c];
    K(
      s !== void 0 && s[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let v = s[c];
    if (!(g && g.signal.aborted))
      if (Ei(v)) {
        let x = yr(e.matches, d == null ? void 0 : d.route.id);
        (u && u[x.route.id]) || (u = le({}, u, { [x.route.id]: v.error })),
          e.fetchers.delete(f);
      } else if (Mr(v)) K(!1, "Unhandled fetcher revalidation redirect");
      else if (Bn(v)) K(!1, "Unhandled fetcher deferred data");
      else {
        let x = Zo(v.data);
        e.fetchers.set(f, x);
      }
  }
  return { loaderData: l, errors: u };
}
function ud(e, t, n, r) {
  let i = le({}, t);
  for (let o of n) {
    let s = o.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (i[s] = t[s])
        : e[s] !== void 0 && o.route.loader && (i[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return i;
}
function yr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function cd(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function dt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    s = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((s = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (a = "defer() is not supported in actions")
            : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((s = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((s = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((s = "Method Not Allowed"),
            i && n && r
              ? (a =
                  "You made a " +
                  i.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new dc(e || 500, s, new Error(a), !0)
  );
}
function fd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Mr(n)) return n;
  }
}
function $m(e) {
  let t = typeof e == "string" ? nn(e) : e;
  return Xn(le({}, t, { hash: "" }));
}
function O1(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Bn(e) {
  return e.type === Ee.deferred;
}
function Ei(e) {
  return e.type === Ee.error;
}
function Mr(e) {
  return (e && e.type) === Ee.redirect;
}
function _1(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function z1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function I1(e) {
  return T1.has(e.toLowerCase());
}
function Pt(e) {
  return k1.has(e.toLowerCase());
}
async function dd(e, t, n, r, i, o) {
  for (let s = 0; s < n.length; s++) {
    let a = n[s],
      l = t[s];
    if (!l) continue;
    let u = e.find((f) => f.route.id === l.route.id),
      c = u != null && !bm(u, l) && (o && o[l.route.id]) !== void 0;
    if (Bn(a) && (i || c)) {
      let f = r[s];
      K(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Wm(a, f, i).then((d) => {
          d && (n[s] = d || n[s]);
        });
    }
  }
}
async function Wm(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ee.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ee.error, error: i };
      }
    return { type: Ee.data, data: e.deferredData.data };
  }
}
function hc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function B1(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Zl(e, t) {
  let n = typeof t == "string" ? nn(t).search : t.search;
  if (e[e.length - 1].route.index && hc(n || "")) return e[e.length - 1];
  let r = Qs(e);
  return r[r.length - 1];
}
function hd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function Vo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function U1(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function oi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      };
}
function b1(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
    " _hasFetcherDoneAnything ": !0,
  };
}
function Zo(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    " _hasFetcherDoneAnything ": !0,
  };
}
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ks.apply(this, arguments)
  );
}
const Zs = C.createContext(null),
  Hm = C.createContext(null),
  $r = C.createContext(null),
  Js = C.createContext(null),
  Jn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ym = C.createContext(null);
function $1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ro() || K(!1);
  let { basename: r, navigator: i } = C.useContext($r),
    { hash: o, pathname: s, search: a } = Gm(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Kt([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function ro() {
  return C.useContext(Js) != null;
}
function qs() {
  return ro() || K(!1), C.useContext(Js).location;
}
function Km(e) {
  C.useContext($r).static || C.useLayoutEffect(e);
}
function W1() {
  let { isDataRoute: e } = C.useContext(Jn);
  return e ? nx() : H1();
}
function H1() {
  ro() || K(!1);
  let e = C.useContext(Zs),
    { basename: t, navigator: n } = C.useContext($r),
    { matches: r } = C.useContext(Jn),
    { pathname: i } = qs(),
    o = JSON.stringify(Qs(r).map((l) => l.pathnameBase)),
    s = C.useRef(!1);
  return (
    Km(() => {
      s.current = !0;
    }),
    C.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = fc(l, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Kt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, o, i, e],
    )
  );
}
function Gm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(Jn),
    { pathname: i } = qs(),
    o = JSON.stringify(Qs(r).map((s) => s.pathnameBase));
  return C.useMemo(() => fc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Y1(e, t, n) {
  ro() || K(!1);
  let { navigator: r } = C.useContext($r),
    { matches: i } = C.useContext(Jn),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let l = qs(),
    u;
  if (t) {
    var c;
    let x = typeof t == "string" ? nn(t) : t;
    a === "/" || ((c = x.pathname) != null && c.startsWith(a)) || K(!1),
      (u = x);
  } else u = l;
  let f = u.pathname || "/",
    d = a === "/" ? f : f.slice(a.length) || "/",
    g = gr(e, { pathname: d }),
    v = Z1(
      g &&
        g.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, s, x.params),
            pathname: Kt([
              a,
              r.encodeLocation
                ? r.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : Kt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
    );
  return t && v
    ? C.createElement(
        Js.Provider,
        {
          value: {
            location: ks(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u,
            ),
            navigationType: Se.Pop,
          },
        },
        v,
      )
    : v;
}
function K1() {
  let e = tx(),
    t = Im(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    o,
  );
}
const G1 = C.createElement(K1, null);
class X1 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          Jn.Provider,
          { value: this.props.routeContext },
          C.createElement(Ym.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Q1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Zs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Jn.Provider, { value: t }, r)
  );
}
function Z1(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let a = o.findIndex(
      (l) => l.route.id && (s == null ? void 0 : s[l.route.id]),
    );
    a >= 0 || K(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, l, u) => {
    let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
      f = null;
    n && (f = l.route.errorElement || G1);
    let d = t.concat(o.slice(0, u + 1)),
      g = () => {
        let v;
        return (
          c
            ? (v = f)
            : l.route.Component
              ? (v = C.createElement(l.route.Component, null))
              : l.route.element
                ? (v = l.route.element)
                : (v = a),
          C.createElement(Q1, {
            match: l,
            routeContext: { outlet: a, matches: d, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? C.createElement(X1, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Jl;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(Jl || (Jl = {}));
var Yi;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Yi || (Yi = {}));
function J1(e) {
  let t = C.useContext(Zs);
  return t || K(!1), t;
}
function q1(e) {
  let t = C.useContext(Hm);
  return t || K(!1), t;
}
function ex(e) {
  let t = C.useContext(Jn);
  return t || K(!1), t;
}
function Xm(e) {
  let t = ex(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function tx() {
  var e;
  let t = C.useContext(Ym),
    n = q1(Yi.UseRouteError),
    r = Xm(Yi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function nx() {
  let { router: e } = J1(Jl.UseNavigateStable),
    t = Xm(Yi.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Km(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ks({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const rx = "startTransition",
  pd = $y[rx];
function ix(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = C.useState(n.state),
    { v7_startTransition: s } = r || {},
    a = C.useCallback(
      (f) => {
        s && pd ? pd(() => o(f)) : o(f);
      },
      [o, s],
    );
  C.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let l = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (f) => n.navigate(f),
        push: (f, d, g) =>
          n.navigate(f, {
            state: d,
            preventScrollReset: g == null ? void 0 : g.preventScrollReset,
          }),
        replace: (f, d, g) =>
          n.navigate(f, {
            replace: !0,
            state: d,
            preventScrollReset: g == null ? void 0 : g.preventScrollReset,
          }),
      }),
      [n],
    ),
    u = n.basename || "/",
    c = C.useMemo(
      () => ({ router: n, navigator: l, static: !1, basename: u }),
      [n, l, u],
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Zs.Provider,
      { value: c },
      C.createElement(
        Hm.Provider,
        { value: i },
        C.createElement(
          sx,
          {
            basename: u,
            location: i.location,
            navigationType: i.historyAction,
            navigator: l,
          },
          i.initialized
            ? C.createElement(ox, { routes: n.routes, state: i })
            : t,
        ),
      ),
    ),
    null,
  );
}
function ox(e) {
  let { routes: t, state: n } = e;
  return Y1(t, void 0, n);
}
function sx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Se.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  ro() && K(!1);
  let a = t.replace(/^\/*/, "/"),
    l = C.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s]);
  typeof r == "string" && (r = nn(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: g = "default",
    } = r,
    v = C.useMemo(() => {
      let x = br(u, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: c, hash: f, state: d, key: g },
            navigationType: i,
          };
    }, [a, u, c, f, d, g, i]);
  return v == null
    ? null
    : C.createElement(
        $r.Provider,
        { value: l },
        C.createElement(Js.Provider, { children: n, value: v }),
      );
}
var md;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(md || (md = {}));
new Promise(() => {});
function ax(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
function lx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ux(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function cx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ux(e);
}
const fx = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function dx(e, t) {
  return D1({
    basename: t == null ? void 0 : t.basename,
    future: Ki({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: e1({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || hx(),
    routes: e,
    mapRouteProperties: ax,
  }).initialize();
}
function hx() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ki({}, t, { errors: px(t.errors) })), t;
}
function px(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new dc(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      let o = new Error(i.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = i;
  return n;
}
const mx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  gx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ke = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      f = lx(t, fx),
      { basename: d } = C.useContext($r),
      g,
      v = !1;
    if (typeof u == "string" && gx.test(u) && ((g = u), mx))
      try {
        let h = new URL(window.location.href),
          y = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          p = br(y.pathname, d);
        y.origin === h.origin && p != null
          ? (u = p + y.search + y.hash)
          : (v = !0);
      } catch {}
    let x = $1(u, { relative: i }),
      k = yx(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function m(h) {
      r && r(h), h.defaultPrevented || k(h);
    }
    return C.createElement(
      "a",
      Ki({}, f, { href: g || x, onClick: v || o ? r : m, ref: n, target: l }),
    );
  });
var gd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(gd || (gd = {}));
var yd;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(yd || (yd = {}));
function yx(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
    } = t === void 0 ? {} : t,
    a = W1(),
    l = qs(),
    u = Gm(e, { relative: s });
  return C.useCallback(
    (c) => {
      if (cx(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : Xn(l) === Xn(u);
        a(e, { replace: f, state: i, preventScrollReset: o, relative: s });
      }
    },
    [l, a, u, r, i, n, e, o, s],
  );
}
const Qm = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ea = C.createContext({}),
  pc = C.createContext(null),
  ta = typeof document < "u",
  ql = ta ? C.useLayoutEffect : C.useEffect,
  Zm = C.createContext({ strict: !1 });
function vx(e, t, n, r) {
  const { visualElement: i } = C.useContext(ea),
    o = C.useContext(Zm),
    s = C.useContext(pc),
    a = C.useContext(Qm).reducedMotion,
    l = C.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    C.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    ql(() => {
      u && u.render();
    }),
    C.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? ql : C.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function vr(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function xx(e, t, n) {
  return C.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : vr(n) && (n.current = r));
    },
    [t],
  );
}
function Gi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function na(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const mc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  gc = ["initial", ...mc];
function ra(e) {
  return na(e.animate) || gc.some((t) => Gi(e[t]));
}
function Jm(e) {
  return !!(ra(e) || e.variants);
}
function wx(e, t) {
  if (ra(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Gi(n) ? n : void 0,
      animate: Gi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Sx(e) {
  const { initial: t, animate: n } = wx(e, C.useContext(ea));
  return C.useMemo(() => ({ initial: t, animate: n }), [vd(t), vd(n)]);
}
function vd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Xi = {};
for (const e in xd) Xi[e] = { isEnabled: (t) => xd[e].some((n) => !!t[n]) };
function Px(e) {
  for (const t in e) Xi[t] = { ...Xi[t], ...e[t] };
}
const qm = C.createContext({}),
  eg = C.createContext({}),
  Ex = Symbol.for("motionComponentSymbol");
function kx({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Px(e);
  function o(a, l) {
    let u;
    const c = { ...C.useContext(Qm), ...a, layoutId: Cx(a) },
      { isStatic: f } = c,
      d = Sx(a),
      g = r(a, f);
    if (!f && ta) {
      d.visualElement = vx(i, g, c, t);
      const v = C.useContext(eg),
        x = C.useContext(Zm).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, v));
    }
    return C.createElement(
      ea.Provider,
      { value: d },
      u && d.visualElement
        ? C.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, a, xx(g, d.visualElement, l), g, f, d.visualElement),
    );
  }
  const s = C.forwardRef(o);
  return (s[Ex] = i), s;
}
function Cx({ layoutId: e }) {
  const t = C.useContext(qm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Tx(e) {
  function t(r, i = {}) {
    return kx(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Rx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function yc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Rx.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Cs = {};
function Mx(e) {
  Object.assign(Cs, e);
}
const io = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  qn = new Set(io);
function tg(e, { layout: t, layoutId: n }) {
  return (
    qn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Cs[e] || e === "opacity"))
  );
}
const qe = (e) => !!(e && e.getVelocity),
  Ax = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Lx = io.length;
function Dx(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i,
) {
  let o = "";
  for (let s = 0; s < Lx; s++) {
    const a = io[s];
    if (e[a] !== void 0) {
      const l = Ax[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const ng = (e) => (t) => typeof t == "string" && t.startsWith(e),
  rg = ng("--"),
  eu = ng("var(--"),
  jx =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Nx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Tn = (e, t, n) => Math.min(Math.max(n, e), t),
  er = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ki = { ...er, transform: (e) => Tn(0, 1, e) },
  Fo = { ...er, default: 1 },
  Ci = (e) => Math.round(e * 1e5) / 1e5,
  ia = /(-)?([\d]*\.?[\d])+/g,
  ig =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Vx =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function oo(e) {
  return typeof e == "string";
}
const so = (e) => ({
    test: (t) => oo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  sn = so("deg"),
  Ot = so("%"),
  I = so("px"),
  Fx = so("vh"),
  Ox = so("vw"),
  wd = {
    ...Ot,
    parse: (e) => Ot.parse(e) / 100,
    transform: (e) => Ot.transform(e * 100),
  },
  Sd = { ...er, transform: Math.round },
  og = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    size: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    rotate: sn,
    rotateX: sn,
    rotateY: sn,
    rotateZ: sn,
    scale: Fo,
    scaleX: Fo,
    scaleY: Fo,
    scaleZ: Fo,
    skew: sn,
    skewX: sn,
    skewY: sn,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: ki,
    originX: wd,
    originY: wd,
    originZ: I,
    zIndex: Sd,
    fillOpacity: ki,
    strokeOpacity: ki,
    numOctaves: Sd,
  };
function vc(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (rg(f)) {
      o[f] = d;
      continue;
    }
    const g = og[f],
      v = Nx(d, g);
    if (qn.has(f)) {
      if (((l = !0), (s[f] = v), !c)) continue;
      d !== (g.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = v)) : (i[f] = v);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = Dx(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = a;
    i.transformOrigin = `${f} ${d} ${g}`;
  }
}
const xc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function sg(e, t, n) {
  for (const r in t) !qe(t[r]) && !tg(r, n) && (e[r] = t[r]);
}
function _x({ transformTemplate: e }, t, n) {
  return C.useMemo(() => {
    const r = xc();
    return (
      vc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function zx(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    sg(i, r, e),
    Object.assign(i, _x(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function Ix(e, t, n) {
  const r = {},
    i = zx(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const Bx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Ts(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    Bx.has(e)
  );
}
let ag = (e) => !Ts(e);
function Ux(e) {
  e && (ag = (t) => (t.startsWith("on") ? !Ts(t) : e(t)));
}
try {
  Ux(require("@emotion/is-prop-valid").default);
} catch {}
function bx(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((ag(i) ||
        (n === !0 && Ts(i)) ||
        (!t && !Ts(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Pd(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function $x(e, t, n) {
  const r = Pd(t, e.x, e.width),
    i = Pd(n, e.y, e.height);
  return `${r} ${i}`;
}
const Wx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Hx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Yx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Wx : Hx;
  e[o.offset] = I.transform(-r);
  const s = I.transform(t),
    a = I.transform(n);
  e[o.array] = `${s} ${a}`;
}
function wc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
  d,
) {
  if ((vc(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: v, dimensions: x } = e;
  g.transform && (x && (v.transform = g.transform), delete g.transform),
    x &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = $x(
        x,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && Yx(g, s, a, l, !1);
}
const lg = () => ({ ...xc(), attrs: {} }),
  Sc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Kx(e, t, n, r) {
  const i = C.useMemo(() => {
    const o = lg();
    return (
      wc(o, t, { enableHardwareAcceleration: !1 }, Sc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    sg(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Gx(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (yc(n) ? Kx : Ix)(r, o, s, n),
      c = { ...bx(r, typeof n == "string", e), ...l, ref: i },
      { children: f } = r,
      d = C.useMemo(() => (qe(f) ? f.get() : f), [f]);
    return C.createElement(n, { ...c, children: d });
  };
}
const Pc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ug(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const cg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function fg(e, t, n, r) {
  ug(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(cg.has(i) ? i : Pc(i), t.attrs[i]);
}
function Ec(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (qe(n[i]) || (t.style && qe(t.style[i])) || tg(i, e)) && (r[i] = n[i]);
  return r;
}
function dg(e, t) {
  const n = Ec(e, t);
  for (const r in e)
    if (qe(e[r]) || qe(t[r])) {
      const i =
        io.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function kc(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function hg(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Rs = (e) => Array.isArray(e),
  Xx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Qx = (e) => (Rs(e) ? e[e.length - 1] || 0 : e);
function Jo(e) {
  const t = qe(e) ? e.get() : e;
  return Xx(t) ? t.toValue() : t;
}
function Zx(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o,
) {
  const s = { latestValues: Jx(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const pg = (e) => (t, n) => {
  const r = C.useContext(ea),
    i = C.useContext(pc),
    o = () => Zx(e, t, r, i);
  return n ? o() : hg(o);
};
function Jx(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Jo(o[d]);
  let { initial: s, animate: a } = e;
  const l = ra(e),
    u = Jm(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !na(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const v = kc(e, g);
        if (!v) return;
        const { transitionEnd: x, transition: k, ...m } = v;
        for (const h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            const p = c ? y.length - 1 : 0;
            y = y[p];
          }
          y !== null && (i[h] = y);
        }
        for (const h in x) i[h] = x[h];
      }),
    i
  );
}
const qx = {
    useVisualState: pg({
      scrapeMotionValuesFromProps: dg,
      createRenderState: lg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        wc(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          Sc(t.tagName),
          e.transformTemplate,
        ),
          fg(t, n);
      },
    }),
  },
  ew = {
    useVisualState: pg({
      scrapeMotionValuesFromProps: Ec,
      createRenderState: xc,
    }),
  };
function tw(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(yc(e) ? qx : ew),
    preloadedFeatures: n,
    useRender: Gx(t),
    createVisualElement: r,
    Component: e,
  };
}
function Ht(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const mg = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function oa(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const nw = (e) => (t) => mg(t) && e(t, oa(t));
function Gt(e, t, n, r) {
  return Ht(e, t, nw(n), r);
}
const rw = (e, t) => (n) => t(e(n)),
  Pn = (...e) => e.reduce(rw);
function gg(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Ed = gg("dragHorizontal"),
  kd = gg("dragVertical");
function yg(e) {
  let t = !1;
  if (e === "y") t = kd();
  else if (e === "x") t = Ed();
  else {
    const n = Ed(),
      r = kd();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function vg() {
  const e = yg(!0);
  return e ? (e(), !1) : !0;
}
class Dn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function iw(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return (
          u && s.add(l),
          d.indexOf(l) === -1 && (d.push(l), f && i && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const ce = { delta: 0, timestamp: 0, isProcessing: !1 },
  ow = 40;
let tu = !0,
  Qi = !1;
const sa = ["read", "update", "preRender", "render", "postRender"],
  Ar = sa.reduce((e, t) => ((e[t] = iw(() => (Qi = !0))), e), {}),
  sw = (e) => Ar[e].process(ce),
  xg = (e) => {
    (Qi = !1),
      (ce.delta = tu ? 1e3 / 60 : Math.max(Math.min(e - ce.timestamp, ow), 1)),
      (ce.timestamp = e),
      (ce.isProcessing = !0),
      sa.forEach(sw),
      (ce.isProcessing = !1),
      Qi && ((tu = !1), requestAnimationFrame(xg));
  },
  aw = () => {
    (Qi = !0), (tu = !0), ce.isProcessing || requestAnimationFrame(xg);
  },
  he = sa.reduce((e, t) => {
    const n = Ar[t];
    return (e[t] = (r, i = !1, o = !1) => (Qi || aw(), n.schedule(r, i, o))), e;
  }, {});
function en(e) {
  sa.forEach((t) => Ar[t].cancel(e));
}
function Cd(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || vg()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && he.update(() => a[r](o, s));
    };
  return Gt(e.current, n, i, { passive: !e.getProps()[r] });
}
class lw extends Dn {
  mount() {
    this.unmount = Pn(Cd(this.node, !0), Cd(this.node, !1));
  }
  unmount() {}
}
class uw extends Dn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Pn(
      Ht(this.node.current, "focus", () => this.onFocus()),
      Ht(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const wg = (e, t) => (t ? (e === t ? !0 : wg(e, t.parentElement)) : !1),
  Te = (e) => e;
function Wa(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, oa(n));
}
class cw extends Dn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Te),
      (this.removeEndListeners = Te),
      (this.removeAccessibleListeners = Te),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = Gt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              he.update(() => {
                wg(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = Gt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Pn(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Wa("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && he.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Ht(this.node.current, "keyup", s)),
              Wa("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Ht(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Wa("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Ht(this.node.current, "blur", r);
        this.removeAccessibleListeners = Pn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && he.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !vg()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && he.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Gt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Ht(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Pn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const nu = new WeakMap(),
  Ha = new WeakMap(),
  fw = (e) => {
    const t = nu.get(e.target);
    t && t(e);
  },
  dw = (e) => {
    e.forEach(fw);
  };
function hw({ root: e, ...t }) {
  const n = e || document;
  Ha.has(n) || Ha.set(n, {});
  const r = Ha.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(dw, { root: e, ...t })), r[i];
}
function pw(e, t, n) {
  const r = hw(t);
  return (
    nu.set(e, n),
    r.observe(e),
    () => {
      nu.delete(e), r.unobserve(e);
    }
  );
}
const mw = { some: 0, all: 1 };
class gw extends Dn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : mw[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return pw(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(yw(t, n)) && this.startObserver();
  }
  unmount() {}
}
function yw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const vw = {
  inView: { Feature: gw },
  tap: { Feature: cw },
  focus: { Feature: uw },
  hover: { Feature: lw },
};
function Sg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function xw(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function ww(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function aa(e, t, n) {
  const r = e.getProps();
  return kc(r, t, n !== void 0 ? n : r.custom, xw(e), ww(e));
}
const Sw = "framerAppearId",
  Pw = "data-" + Pc(Sw);
let Ew = Te,
  Cc = Te;
const En = (e) => e * 1e3,
  Xt = (e) => e / 1e3,
  kw = { current: !1 },
  Pg = (e) => Array.isArray(e) && typeof e[0] == "number";
function Eg(e) {
  return !!(
    !e ||
    (typeof e == "string" && kg[e]) ||
    Pg(e) ||
    (Array.isArray(e) && e.every(Eg))
  );
}
const hi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  kg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hi([0, 0.65, 0.55, 1]),
    circOut: hi([0.55, 0, 1, 0.45]),
    backIn: hi([0.31, 0.01, 0.66, -0.59]),
    backOut: hi([0.33, 1.53, 0.69, 0.99]),
  };
function Cg(e) {
  if (e) return Pg(e) ? hi(e) : Array.isArray(e) ? e.map(Cg) : kg[e];
}
function Cw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Cg(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Td = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  Ya = {},
  Tg = {};
for (const e in Td)
  Tg[e] = () => (Ya[e] === void 0 && (Ya[e] = Td[e]()), Ya[e]);
function Tw(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Rg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Rw = 1e-7,
  Mw = 12;
function Aw(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Rg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > Rw && ++a < Mw);
  return s;
}
function ao(e, t, n, r) {
  if (e === t && n === r) return Te;
  const i = (o) => Aw(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Rg(i(o), t, r));
}
const Lw = ao(0.42, 0, 1, 1),
  Dw = ao(0, 0, 0.58, 1),
  Mg = ao(0.42, 0, 0.58, 1),
  jw = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ag = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Lg = (e) => (t) => 1 - e(1 - t),
  Dg = (e) => 1 - Math.sin(Math.acos(e)),
  Tc = Lg(Dg),
  Nw = Ag(Tc),
  jg = ao(0.33, 1.53, 0.69, 0.99),
  Rc = Lg(jg),
  Vw = Ag(Rc),
  Fw = (e) =>
    (e *= 2) < 1 ? 0.5 * Rc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ow = {
    linear: Te,
    easeIn: Lw,
    easeInOut: Mg,
    easeOut: Dw,
    circIn: Dg,
    circInOut: Nw,
    circOut: Tc,
    backIn: Rc,
    backInOut: Vw,
    backOut: jg,
    anticipate: Fw,
  },
  Rd = (e) => {
    if (Array.isArray(e)) {
      Cc(e.length === 4);
      const [t, n, r, i] = e;
      return ao(t, n, r, i);
    } else if (typeof e == "string") return Ow[e];
    return e;
  },
  Mc = (e, t) => (n) =>
    !!(
      (oo(n) && Vx.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Ng = (e, t, n) => (r) => {
    if (!oo(r)) return r;
    const [i, o, s, a] = r.match(ia);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  _w = (e) => Tn(0, 255, e),
  Ka = { ...er, transform: (e) => Math.round(_w(e)) },
  Un = {
    test: Mc("rgb", "red"),
    parse: Ng("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ka.transform(e) +
      ", " +
      Ka.transform(t) +
      ", " +
      Ka.transform(n) +
      ", " +
      Ci(ki.transform(r)) +
      ")",
  };
function zw(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ru = { test: Mc("#"), parse: zw, transform: Un.transform },
  xr = {
    test: Mc("hsl", "hue"),
    parse: Ng("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ot.transform(Ci(t)) +
      ", " +
      Ot.transform(Ci(n)) +
      ", " +
      Ci(ki.transform(r)) +
      ")",
  },
  be = {
    test: (e) => Un.test(e) || ru.test(e) || xr.test(e),
    parse: (e) =>
      Un.test(e) ? Un.parse(e) : xr.test(e) ? xr.parse(e) : ru.parse(e),
    transform: (e) =>
      oo(e) ? e : e.hasOwnProperty("red") ? Un.transform(e) : xr.transform(e),
  },
  de = (e, t, n) => -n * e + n * t + e;
function Ga(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Iw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ga(l, a, e + 1 / 3)), (o = Ga(l, a, e)), (s = Ga(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Xa = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Bw = [ru, Un, xr],
  Uw = (e) => Bw.find((t) => t.test(e));
function Md(e) {
  const t = Uw(e);
  let n = t.parse(e);
  return t === xr && (n = Iw(n)), n;
}
const Vg = (e, t) => {
  const n = Md(e),
    r = Md(t),
    i = { ...n };
  return (o) => (
    (i.red = Xa(n.red, r.red, o)),
    (i.green = Xa(n.green, r.green, o)),
    (i.blue = Xa(n.blue, r.blue, o)),
    (i.alpha = de(n.alpha, r.alpha, o)),
    Un.transform(i)
  );
};
function bw(e) {
  var t, n;
  return (
    isNaN(e) &&
    oo(e) &&
    (((t = e.match(ia)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ig)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Fg = { regex: jx, countKey: "Vars", token: "${v}", parse: Te },
  Og = { regex: ig, countKey: "Colors", token: "${c}", parse: be.parse },
  _g = { regex: ia, countKey: "Numbers", token: "${n}", parse: er.parse };
function Qa(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function Ms(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Qa(n, Fg), Qa(n, Og), Qa(n, _g), n;
}
function zg(e) {
  return Ms(e).values;
}
function Ig(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Ms(e),
    o = t.length;
  return (s) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (a = a.replace(Fg.token, s[l]))
        : l < r + n
          ? (a = a.replace(Og.token, be.transform(s[l])))
          : (a = a.replace(_g.token, Ci(s[l])));
    return a;
  };
}
const $w = (e) => (typeof e == "number" ? 0 : e);
function Ww(e) {
  const t = zg(e);
  return Ig(e)(t.map($w));
}
const Rn = {
    test: bw,
    parse: zg,
    createTransformer: Ig,
    getAnimatableNone: Ww,
  },
  Bg = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ug(e, t) {
  return typeof e == "number"
    ? (n) => de(e, t, n)
    : be.test(e)
      ? Vg(e, t)
      : e.startsWith("var(")
        ? Bg(e, t)
        : $g(e, t);
}
const bg = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Ug(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  Hw = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ug(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  $g = (e, t) => {
    const n = Rn.createTransformer(t),
      r = Ms(e),
      i = Ms(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Pn(bg(r.values, i.values), n)
      : Bg(e, t);
  },
  Zi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ad = (e, t) => (n) => de(e, t, n);
function Yw(e) {
  return typeof e == "number"
    ? Ad
    : typeof e == "string"
      ? be.test(e)
        ? Vg
        : $g
      : Array.isArray(e)
        ? bg
        : typeof e == "object"
          ? Hw
          : Ad;
}
function Kw(e, t, n) {
  const r = [],
    i = n || Yw(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Te : t;
      a = Pn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Wg(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Cc(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = Kw(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Zi(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(Tn(e[0], e[o - 1], u)) : l;
}
function Gw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Zi(0, t, r);
    e.push(de(n, 1, i));
  }
}
function Xw(e) {
  const t = [0];
  return Gw(t, e.length - 1), t;
}
function Qw(e, t) {
  return e.map((n) => n * t);
}
function Zw(e, t) {
  return e.map(() => t || Mg).splice(0, e.length - 1);
}
function As({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = jw(r) ? r.map(Rd) : Rd(r),
    o = { done: !1, value: t[0] },
    s = Qw(n && n.length === t.length ? n : Xw(t), e),
    a = Wg(s, t, { ease: Array.isArray(i) ? i : Zw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function Hg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Jw = 5;
function Yg(e, t, n) {
  const r = Math.max(t - Jw, 0);
  return Hg(n - e(r), t - r);
}
const Za = 0.001,
  qw = 0.01,
  Ld = 10,
  eS = 0.05,
  tS = 1;
function nS({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Ew(e <= En(Ld));
  let s = 1 - t;
  (s = Tn(eS, tS, s)),
    (e = Tn(qw, Ld, Xt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = iu(u, s),
            v = Math.exp(-f);
          return Za - (d / g) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = iu(Math.pow(u, 2), s);
          return ((-i(u) + Za > 0 ? -1 : 1) * ((d - g) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Za + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = iS(i, o, a);
  if (((e = En(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const rS = 12;
function iS(e, t, n) {
  let r = n;
  for (let i = 1; i < rS; i++) r = r - e(r) / t(r);
  return r;
}
function iu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const oS = ["duration", "bounce"],
  sS = ["stiffness", "damping", "mass"];
function Dd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function aS(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Dd(e, sS) && Dd(e, oS)) {
    const n = nS(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Kg({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = aS(r),
    g = c ? -Xt(c) : 0,
    v = l / (2 * Math.sqrt(a * u)),
    x = o - i,
    k = Xt(Math.sqrt(a / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const y = iu(k, v);
    h = (p) => {
      const P = Math.exp(-v * k * p);
      return (
        o - P * (((g + v * k * x) / y) * Math.sin(y * p) + x * Math.cos(y * p))
      );
    };
  } else if (v === 1) h = (y) => o - Math.exp(-k * y) * (x + (g + k * x) * y);
  else {
    const y = k * Math.sqrt(v * v - 1);
    h = (p) => {
      const P = Math.exp(-v * k * p),
        L = Math.min(y * p, 300);
      return (
        o - (P * ((g + v * k * x) * Math.sinh(L) + y * x * Math.cosh(L))) / y
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (y) => {
      const p = h(y);
      if (d) s.done = y >= f;
      else {
        let P = g;
        y !== 0 && (v < 1 ? (P = Yg(h, y, p)) : (P = 0));
        const L = Math.abs(P) <= n,
          T = Math.abs(o - p) <= t;
        s.done = L && T;
      }
      return (s.value = s.done ? o : p), s;
    },
  };
}
function jd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    v = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
          ? a
          : l;
  let x = n * t;
  const k = f + x,
    m = s === void 0 ? k : s(k);
  m !== k && (x = m - f);
  const h = (R) => -x * Math.exp(-R / r),
    y = (R) => m + h(R),
    p = (R) => {
      const F = h(R),
        O = y(R);
      (d.done = Math.abs(F) <= u), (d.value = d.done ? m : O);
    };
  let P, L;
  const T = (R) => {
    g(d.value) &&
      ((P = R),
      (L = Kg({
        keyframes: [d.value, v(d.value)],
        velocity: Yg(y, R, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let F = !1;
        return (
          !L && P === void 0 && ((F = !0), p(R), T(R)),
          P !== void 0 && R > P ? L.next(R - P) : (!F && p(R), d)
        );
      },
    }
  );
}
const lS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => he.update(t, !0),
      stop: () => en(t),
      now: () => (ce.isProcessing ? ce.timestamp : performance.now()),
    };
  },
  Nd = 2e4;
function Vd(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Nd; ) (t += n), (r = e.next(t));
  return t >= Nd ? 1 / 0 : t;
}
const uS = { decay: jd, inertia: jd, tween: As, keyframes: As, spring: Kg };
function Ls({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = lS,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let g = 1,
    v = !1,
    x,
    k;
  const m = () => {
    x && x(),
      (k = new Promise((B) => {
        x = B;
      }));
  };
  m();
  let h;
  const y = uS[i] || As;
  let p;
  y !== As &&
    typeof r[0] != "number" &&
    ((p = Wg([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const P = y({ ...d, keyframes: r });
  let L;
  a === "mirror" &&
    (L = y({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let T = "idle",
    R = null,
    F = null,
    O = null;
  P.calculatedDuration === null && o && (P.calculatedDuration = Vd(P));
  const { calculatedDuration: q } = P;
  let Y = 1 / 0,
    De = 1 / 0;
  q !== null && ((Y = q + s), (De = Y * (o + 1) - s));
  let ie = 0;
  const J = (B) => {
      if (F === null) return;
      g > 0 && (F = Math.min(F, B)),
        g < 0 && (F = Math.min(B - De / g, F)),
        R !== null ? (ie = R) : (ie = Math.round(B - F) * g);
      const te = ie - t * (g >= 0 ? 1 : -1),
        _t = g >= 0 ? te < 0 : te > De;
      (ie = Math.max(te, 0)), T === "finished" && R === null && (ie = De);
      let ee = ie,
        ut = P;
      if (o) {
        const Wr = ie / Y;
        let tr = Math.floor(Wr),
          Mt = Wr % 1;
        !Mt && Wr >= 1 && (Mt = 1),
          Mt === 1 && tr--,
          (tr = Math.min(tr, o + 1));
        const uo = !!(tr % 2);
        uo &&
          (a === "reverse"
            ? ((Mt = 1 - Mt), s && (Mt -= s / Y))
            : a === "mirror" && (ut = L));
        let co = Tn(0, 1, Mt);
        ie > De && (co = a === "reverse" && uo ? 1 : 0), (ee = co * Y);
      }
      const _e = _t ? { done: !1, value: r[0] } : ut.next(ee);
      p && (_e.value = p(_e.value));
      let { done: zt } = _e;
      !_t && q !== null && (zt = g >= 0 ? ie >= De : ie <= 0);
      const Rt = R === null && (T === "finished" || (T === "running" && zt));
      return f && f(_e.value), Rt && D(), _e;
    },
    xe = () => {
      h && h.stop(), (h = void 0);
    },
    je = () => {
      (T = "idle"), xe(), m(), (F = O = null);
    },
    D = () => {
      (T = "finished"), c && c(), xe(), m();
    },
    _ = () => {
      if (v) return;
      h || (h = n(J));
      const B = h.now();
      l && l(),
        R !== null ? (F = B - R) : (!F || T === "finished") && (F = B),
        (O = F),
        (R = null),
        (T = "running"),
        h.start();
    };
  e && _();
  const U = {
    then(B, te) {
      return k.then(B, te);
    },
    get time() {
      return Xt(ie);
    },
    set time(B) {
      (B = En(B)),
        (ie = B),
        R !== null || !h || g === 0 ? (R = B) : (F = h.now() - B / g);
    },
    get duration() {
      const B = P.calculatedDuration === null ? Vd(P) : P.calculatedDuration;
      return Xt(B);
    },
    get speed() {
      return g;
    },
    set speed(B) {
      B === g || !h || ((g = B), (U.time = Xt(ie)));
    },
    get state() {
      return T;
    },
    play: _,
    pause: () => {
      (T = "paused"), (R = ie);
    },
    stop: () => {
      (v = !0), T !== "idle" && ((T = "idle"), u && u(), je());
    },
    cancel: () => {
      O !== null && J(O), je();
    },
    complete: () => {
      T = "finished";
    },
    sample: (B) => ((F = 0), J(B)),
  };
  return U;
}
const cS = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Oo = 10,
  fS = 2e4,
  dS = (e, t) => t.type === "spring" || e === "backgroundColor" || !Eg(t.ease);
function hS(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Tg.waapi() &&
      cS.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((m) => {
      a = m;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: g } = i;
  if (dS(t, i)) {
    const m = Ls({ ...i, repeat: 0, delay: 0 });
    let h = { done: !1, value: c[0] };
    const y = [];
    let p = 0;
    for (; !h.done && p < fS; ) (h = m.sample(p)), y.push(h.value), (p += Oo);
    (g = void 0), (c = y), (f = p - Oo), (d = "linear");
  }
  const v = Cw(e.owner.current, t, c, { ...i, duration: f, ease: d, times: g }),
    x = () => v.cancel(),
    k = () => {
      he.update(x), a(), u();
    };
  return (
    (v.onfinish = () => {
      e.set(Tw(c, i)), r && r(), k();
    }),
    {
      then(m, h) {
        return l.then(m, h);
      },
      get time() {
        return Xt(v.currentTime || 0);
      },
      set time(m) {
        v.currentTime = En(m);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(m) {
        v.playbackRate = m;
      },
      get duration() {
        return Xt(f);
      },
      play: () => {
        s || (v.play(), en(x));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((s = !0), v.playState === "idle")) return;
        const { currentTime: m } = v;
        if (m) {
          const h = Ls({ ...i, autoplay: !1 });
          e.setWithVelocity(h.sample(m - Oo).value, h.sample(m).value, Oo);
        }
        k();
      },
      complete: () => v.finish(),
      cancel: k,
    }
  );
}
function pS({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Te,
      pause: Te,
      stop: Te,
      then: (o) => (o(), Promise.resolve()),
      cancel: Te,
      complete: Te,
    }
  );
  return t
    ? Ls({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const mS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  gS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  yS = { type: "keyframes", duration: 0.8 },
  vS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  xS = (e, { keyframes: t }) =>
    t.length > 2
      ? yS
      : qn.has(e)
        ? e.startsWith("scale")
          ? gS(t[1])
          : mS
        : vS,
  ou = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Rn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  wS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function SS(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ia) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = wS.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const PS = /([a-z-]*)\(.*?\)/g,
  su = {
    ...Rn,
    getAnimatableNone: (e) => {
      const t = e.match(PS);
      return t ? t.map(SS).join(" ") : e;
    },
  },
  ES = {
    ...og,
    color: be,
    backgroundColor: be,
    outlineColor: be,
    fill: be,
    stroke: be,
    borderColor: be,
    borderTopColor: be,
    borderRightColor: be,
    borderBottomColor: be,
    borderLeftColor: be,
    filter: su,
    WebkitFilter: su,
  },
  Ac = (e) => ES[e];
function Gg(e, t) {
  let n = Ac(e);
  return (
    n !== su && (n = Rn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Xg = (e) => /^0[^.\s]+$/.test(e);
function kS(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Xg(e);
}
function CS(e, t, n, r) {
  const i = ou(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      kS(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      o[c] = Gg(t, a);
    }
  return o;
}
function TS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Qg(e, t) {
  return e[t] || e.default || e;
}
const Lc =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Qg(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - En(s);
    const l = CS(t, e, n, o),
      u = l[0],
      c = l[l.length - 1],
      f = ou(e, u),
      d = ou(e, c);
    let g = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -a,
      onUpdate: (v) => {
        t.set(v), o.onUpdate && o.onUpdate(v);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (TS(o) || (g = { ...g, ...xS(e, g) }),
      g.duration && (g.duration = En(g.duration)),
      g.repeatDelay && (g.repeatDelay = En(g.repeatDelay)),
      !f || !d || kw.current || o.type === !1)
    )
      return pS(g);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const v = hS(t, e, g);
      if (v) return v;
    }
    return Ls(g);
  };
function Ds(e) {
  return !!(qe(e) && e.add);
}
const RS = (e) => /^\-?\d*\.?\d+$/.test(e);
function Dc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function jc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Nc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Dc(this.subscriptions, t), () => jc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const MS = (e) => !isNaN(parseFloat(e));
class AS {
  constructor(t, n = {}) {
    (this.version = "10.12.18"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = ce;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          he.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => he.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = MS(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Nc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            he.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Hg(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function zr(e, t) {
  return new AS(e, t);
}
const Zg = (e) => (t) => t.test(e),
  LS = { test: (e) => e === "auto", parse: (e) => e },
  Jg = [er, I, Ot, sn, Ox, Fx, LS],
  si = (e) => Jg.find(Zg(e)),
  DS = [...Jg, be, Rn],
  jS = (e) => DS.find(Zg(e));
function NS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zr(n));
}
function Vc(e, t) {
  const n = aa(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = Qx(o[s]);
    NS(e, s, a);
  }
}
function au(e, t) {
  [...t].reverse().forEach((r) => {
    const i = e.getVariant(r);
    i && Vc(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          au(o, t);
        });
  });
}
function VS(e, t) {
  if (Array.isArray(t)) return au(e, t);
  if (typeof t == "string") return au(e, [t]);
  Vc(e, t);
}
function FS(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (RS(c) || Xg(c))
            ? (c = parseFloat(c))
            : !jS(c) && Rn.test(u) && (c = Gg(l, u)),
          e.addValue(l, zr(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function OS(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function _S(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = OS(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function zS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function qg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f),
      g = a[f];
    if (!d || g === void 0 || (c && zS(c, f))) continue;
    const v = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const k = e.getProps()[Pw];
      k && (v.elapsed = window.HandoffAppearAnimations(k, f, d, he));
    }
    d.start(Lc(f, d, g, e.shouldReduceMotion && qn.has(f) ? { type: !1 } : v));
    const x = d.animation;
    Ds(l) && (l.add(f), x.then(() => l.remove(f))), u.push(x);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && Vc(e, s);
      }),
    u
  );
}
function lu(e, t, n = {}) {
  const r = aa(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(qg(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return IS(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function IS(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(BS)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            lu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function BS(e, t) {
  return e.sortNodePosition(t);
}
function ey(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => lu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = lu(e, t, n);
  else {
    const i = typeof t == "function" ? aa(e, t, n.custom) : t;
    r = Promise.all(qg(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const US = [...mc].reverse(),
  bS = mc.length;
function $S(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => ey(e, n, r)));
}
function WS(e) {
  let t = $S(e);
  const n = YS();
  let r = !0;
  const i = (l, u) => {
    const c = aa(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...g } = c;
      l = { ...l, ...g, ...d };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      g = new Set();
    let v = {},
      x = 1 / 0;
    for (let m = 0; m < bS; m++) {
      const h = US[m],
        y = n[h],
        p = c[h] !== void 0 ? c[h] : f[h],
        P = Gi(p),
        L = h === u ? y.isActive : null;
      L === !1 && (x = m);
      let T = p === f[h] && p !== c[h] && P;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (y.protectedKeys = { ...v }),
        (!y.isActive && L === null) ||
          (!p && !y.prevProp) ||
          na(p) ||
          typeof p == "boolean")
      )
        continue;
      const R = HS(y.prevProp, p);
      let F = R || (h === u && y.isActive && !T && P) || (m > x && P);
      const O = Array.isArray(p) ? p : [p];
      let q = O.reduce(i, {});
      L === !1 && (q = {});
      const { prevResolvedValues: Y = {} } = y,
        De = { ...Y, ...q },
        ie = (J) => {
          (F = !0), g.delete(J), (y.needsAnimating[J] = !0);
        };
      for (const J in De) {
        const xe = q[J],
          je = Y[J];
        v.hasOwnProperty(J) ||
          (xe !== je
            ? Rs(xe) && Rs(je)
              ? !Sg(xe, je) || R
                ? ie(J)
                : (y.protectedKeys[J] = !0)
              : xe !== void 0
                ? ie(J)
                : g.add(J)
            : xe !== void 0 && g.has(J)
              ? ie(J)
              : (y.protectedKeys[J] = !0));
      }
      (y.prevProp = p),
        (y.prevResolvedValues = q),
        y.isActive && (v = { ...v, ...q }),
        r && e.blockInitialAnimation && (F = !1),
        F &&
          !T &&
          d.push(
            ...O.map((J) => ({ animation: J, options: { type: h, ...l } })),
          );
    }
    if (g.size) {
      const m = {};
      g.forEach((h) => {
        const y = e.getBaseTarget(h);
        y !== void 0 && (m[h] = y);
      }),
        d.push({ animation: m });
    }
    let k = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1),
      (r = !1),
      k ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var v;
        return (v = g.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(c, l);
    for (const g in n) n[g].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function HS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Sg(t, e) : !1;
}
function jn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function YS() {
  return {
    animate: jn(!0),
    whileInView: jn(),
    whileHover: jn(),
    whileTap: jn(),
    whileDrag: jn(),
    whileFocus: jn(),
    exit: jn(),
  };
}
class KS extends Dn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = WS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), na(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let GS = 0;
class XS extends Dn {
  constructor() {
    super(...arguments), (this.id = GS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const QS = { animation: { Feature: KS }, exit: { Feature: XS } },
  Fd = (e, t) => Math.abs(e - t);
function ZS(e, t) {
  const n = Fd(e.x, t.x),
    r = Fd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ty {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = qa(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = ZS(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: g } = ce;
        this.history.push({ ...d, timestamp: g });
        const { onStart: v, onMove: x } = this.handlers;
        c ||
          (v && v(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Ja(c, this.transformPagePoint)),
          he.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          g = qa(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ja(c, this.transformPagePoint),
            this.history,
          );
        this.startEvent && f && f(u, g), d && d(u, g);
      }),
      !mg(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = oa(t),
      o = Ja(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: a } = ce;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, qa(o, this.history)),
      (this.removeListeners = Pn(
        Gt(window, "pointermove", this.handlePointerMove),
        Gt(window, "pointerup", this.handlePointerUp),
        Gt(window, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), en(this.updatePoint);
  }
}
function Ja(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Od(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function qa({ point: e }, t) {
  return {
    point: e,
    delta: Od(e, ny(t)),
    offset: Od(e, JS(t)),
    velocity: qS(t, 0.1),
  };
}
function JS(e) {
  return e[0];
}
function ny(e) {
  return e[e.length - 1];
}
function qS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = ny(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > En(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Xt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function st(e) {
  return e.max - e.min;
}
function uu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function _d(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = de(t.min, t.max, e.origin)),
    (e.scale = st(n) / st(t)),
    (uu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = de(n.min, n.max, e.origin) - e.originPoint),
    (uu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ti(e, t, n, r) {
  _d(e.x, t.x, n.x, r ? r.originX : void 0),
    _d(e.y, t.y, n.y, r ? r.originY : void 0);
}
function zd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + st(t));
}
function eP(e, t, n) {
  zd(e.x, t.x, n.x), zd(e.y, t.y, n.y);
}
function Id(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + st(t));
}
function Ri(e, t, n) {
  Id(e.x, t.x, n.x), Id(e.y, t.y, n.y);
}
function tP(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? de(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? de(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Bd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function nP(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Bd(e.x, n, i), y: Bd(e.y, t, r) };
}
function Ud(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rP(e, t) {
  return { x: Ud(e.x, t.x), y: Ud(e.y, t.y) };
}
function iP(e, t) {
  let n = 0.5;
  const r = st(e),
    i = st(t);
  return (
    i > r
      ? (n = Zi(t.min, t.max - r, e.min))
      : r > i && (n = Zi(e.min, e.max - i, t.min)),
    Tn(0, 1, n)
  );
}
function oP(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const cu = 0.35;
function sP(e = cu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = cu),
    { x: bd(e, "left", "right"), y: bd(e, "top", "bottom") }
  );
}
function bd(e, t, n) {
  return { min: $d(e, t), max: $d(e, n) };
}
function $d(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Wd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  wr = () => ({ x: Wd(), y: Wd() }),
  Hd = () => ({ min: 0, max: 0 }),
  we = () => ({ x: Hd(), y: Hd() });
function jt(e) {
  return [e("x"), e("y")];
}
function ry({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function aP({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lP(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function el(e) {
  return e === void 0 || e === 1;
}
function fu({ scale: e, scaleX: t, scaleY: n }) {
  return !el(e) || !el(t) || !el(n);
}
function Fn(e) {
  return fu(e) || iy(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function iy(e) {
  return Yd(e.x) || Yd(e.y);
}
function Yd(e) {
  return e && e !== "0%";
}
function js(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Kd(e, t, n, r, i) {
  return i !== void 0 && (e = js(e, i, r)), js(e, n, r) + t;
}
function du(e, t = 0, n = 1, r, i) {
  (e.min = Kd(e.min, t, n, r, i)), (e.max = Kd(e.max, t, n, r, i));
}
function oy(e, { x: t, y: n }) {
  du(e.x, t.translate, t.scale, t.originPoint),
    du(e.y, n.translate, n.scale, n.originPoint);
}
function uP(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Sr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), oy(e, s)),
      r && Fn(o.latestValues) && Sr(e, o.latestValues));
  }
  (t.x = Gd(t.x)), (t.y = Gd(t.y));
}
function Gd(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function un(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Xd(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = de(e.min, e.max, o);
  du(e, t[n], t[r], s, t.scale);
}
const cP = ["x", "scaleX", "originX"],
  fP = ["y", "scaleY", "originY"];
function Sr(e, t) {
  Xd(e.x, t, cP), Xd(e.y, t, fP);
}
function sy(e, t) {
  return ry(lP(e.getBoundingClientRect(), t));
}
function dP(e, t, n) {
  const r = sy(e, n),
    { scroll: i } = t;
  return i && (un(r.x, i.offset.x), un(r.y, i.offset.y)), r;
}
const hP = new WeakMap();
class pP {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = we()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(oa(l, "page").point);
      },
      o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = yg(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          jt((v) => {
            let x = this.getAxisMotionValue(v).get() || 0;
            if (Ot.test(x)) {
              const { projection: k } = this.visualElement;
              if (k && k.layout) {
                const m = k.layout.layoutBox[v];
                m && (x = st(m) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[v] = x;
          }),
          d && he.update(() => d(l, u), !1, !0);
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: g,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: v } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = mP(v)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, v),
          this.updateAxis("y", u.point, v),
          this.visualElement.render(),
          g && g(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new ty(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && he.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !_o(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = tP(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && vr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = nP(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = sP(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        jt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = oP(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !vr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = dP(r, i.root, this.visualElement.getTransformPagePoint());
    let s = rP(i.layout.layoutBox, o);
    if (n) {
      const a = n(aP(s));
      (this.hasMutatedConstraints = !!a), a && (s = ry(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = jt((c) => {
        if (!_o(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Lc(t, r, 0, n));
  }
  stopAnimation() {
    jt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    jt((n) => {
      const { drag: r } = this.getProps();
      if (!_o(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - de(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!vr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    jt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = iP({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      jt((s) => {
        if (!_o(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(de(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    hP.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Gt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        vr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Ht(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (jt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = cu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function _o(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function mP(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class gP extends Dn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Te),
      (this.removeListeners = Te),
      (this.controls = new pP(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Te);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qd = (e) => (t, n) => {
  e && he.update(() => e(t, n));
};
class yP extends Dn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Te);
  }
  onPointerDown(t) {
    this.session = new ty(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Qd(t),
      onStart: Qd(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && he.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Gt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function vP() {
  const e = C.useContext(pc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = C.useId();
  return C.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const qo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Zd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ai = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = Zd(e, t.target.x),
        r = Zd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  xP = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Rn.parse(e);
      if (i.length > 5) return r;
      const o = Rn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = de(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class wP extends Vs.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Mx(SP),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (qo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              he.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ay(e) {
  const [t, n] = vP(),
    r = C.useContext(qm);
  return Vs.createElement(wP, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext(eg),
    isPresent: t,
    safeToRemove: n,
  });
}
const SP = {
    borderRadius: {
      ...ai,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ai,
    borderTopRightRadius: ai,
    borderBottomLeftRadius: ai,
    borderBottomRightRadius: ai,
    boxShadow: xP,
  },
  ly = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  PP = ly.length,
  Jd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  qd = (e) => typeof e == "number" || I.test(e);
function EP(e, t, n, r, i, o) {
  i
    ? ((e.opacity = de(0, n.opacity !== void 0 ? n.opacity : 1, kP(r))),
      (e.opacityExit = de(t.opacity !== void 0 ? t.opacity : 1, 0, CP(r))))
    : o &&
      (e.opacity = de(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < PP; s++) {
    const a = `border${ly[s]}Radius`;
    let l = eh(t, a),
      u = eh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || qd(l) === qd(u)
        ? ((e[a] = Math.max(de(Jd(l), Jd(u), r), 0)),
          (Ot.test(u) || Ot.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = de(t.rotate || 0, n.rotate || 0, r));
}
function eh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const kP = uy(0, 0.5, Tc),
  CP = uy(0.5, 0.95, Te);
function uy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Zi(e, t, r)));
}
function th(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ft(e, t) {
  th(e.x, t.x), th(e.y, t.y);
}
function nh(e, t, n, r, i) {
  return (
    (e -= t), (e = js(e, 1 / n, r)), i !== void 0 && (e = js(e, 1 / i, r)), e
  );
}
function TP(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Ot.test(t) &&
      ((t = parseFloat(t)), (t = de(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = de(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = nh(e.min, t, n, a, i)),
    (e.max = nh(e.max, t, n, a, i));
}
function rh(e, t, [n, r, i], o, s) {
  TP(e, t[n], t[r], t[i], t.scale, o, s);
}
const RP = ["x", "scaleX", "originX"],
  MP = ["y", "scaleY", "originY"];
function ih(e, t, n, r) {
  rh(e.x, t, RP, n ? n.x : void 0, r ? r.x : void 0),
    rh(e.y, t, MP, n ? n.y : void 0, r ? r.y : void 0);
}
function oh(e) {
  return e.translate === 0 && e.scale === 1;
}
function cy(e) {
  return oh(e.x) && oh(e.y);
}
function hu(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function sh(e) {
  return st(e.x) / st(e.y);
}
class AP {
  constructor() {
    this.members = [];
  }
  add(t) {
    Dc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (jc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ah(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const LP = (e, t) => e.depth - t.depth;
class DP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Dc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    jc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(LP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function jP(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (en(r), e(o - t));
    };
  return he.read(r, !0), () => en(r);
}
function NP(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function VP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function FP(e, t, n) {
  const r = qe(e) ? e : zr(e);
  return r.start(Lc("", r, t, n)), r.animation;
}
const lh = ["", "X", "Y", "Z"],
  uh = 1e3;
let OP = 0;
const On = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function fy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = OP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (On.totalNodes =
            On.resolvedTargetDeltas =
            On.recalculatedProjection =
              0),
            this.nodes.forEach(IP),
            this.nodes.forEach(WP),
            this.nodes.forEach(HP),
            this.nodes.forEach(BP),
            NP(On);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new DP());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Nc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = VP(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = jP(d, 250)),
            qo.hasAnimatedSinceResize &&
              ((qo.hasAnimatedSinceResize = !1), this.nodes.forEach(fh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || QP,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !hu(this.targetLayout, v) || g,
                y = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, y);
                const p = { ...Qg(x, "layout"), onPlay: k, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((p.delay = 0), (p.type = !1)),
                  this.startAnimation(p);
              } else
                d || fh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        en(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(YP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ch);
        return;
      }
      this.isUpdating || this.nodes.forEach(bP),
        (this.isUpdating = !1),
        this.nodes.forEach($P),
        this.nodes.forEach(_P),
        this.nodes.forEach(zP),
        this.clearAllSnapshots();
      const a = performance.now();
      (ce.delta = Tn(0, 1e3 / 60, a - ce.timestamp)),
        (ce.timestamp = a),
        (ce.isProcessing = !0),
        Ar.update.process(ce),
        Ar.preRender.process(ce),
        Ar.render.process(ce),
        (ce.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(UP), this.sharedNodes.forEach(KP);
    }
    scheduleUpdateProjection() {
      he.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      he.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = we()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !cy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Fn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        ZP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return we();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (un(a.x, l.offset.x), un(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = we();
      ft(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            ft(a, s);
            const { scroll: d } = this.root;
            d && (un(a.x, -d.offset.x), un(a.y, -d.offset.y));
          }
          un(a.x, c.offset.x), un(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = we();
      ft(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Sr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Fn(c.latestValues) && Sr(l, c.latestValues);
      }
      return Fn(this.latestValues) && Sr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = we();
      ft(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Fn(u.latestValues)) continue;
        fu(u.latestValues) && u.updateSnapshot();
        const c = we(),
          f = u.measurePageBox();
        ft(c, f),
          ih(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Fn(this.latestValues) && ih(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ce.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = we()),
              (this.relativeTargetOrigin = we()),
              Ri(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              ft(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = we()), (this.targetWithTransforms = we())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                eP(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ft(this.target, this.layout.layoutBox),
                  oy(this.target, this.targetDelta))
                : ft(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = we()),
                (this.relativeTargetOrigin = we()),
                Ri(this.relativeTargetOrigin, this.target, g.target),
                ft(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          On.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          fu(this.parent.latestValues) ||
          iy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ce.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      ft(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      uP(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: v } = a;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = wr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = wr()),
        (this.projectionDeltaWithTransform = wr()));
      const x = this.projectionTransform;
      Ti(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = ah(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== d ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        On.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = wr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = we(),
        g = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = g !== v,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        h = !!(x && !m && this.options.crossfade === !0 && !this.path.some(XP));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (p) => {
        const P = p / 1e3;
        dh(f.x, s.x, P),
          dh(f.y, s.y, P),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ri(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            GP(this.relativeTarget, this.relativeTargetOrigin, d, P),
            y && hu(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = we()),
            ft(y, this.relativeTarget)),
          x &&
            ((this.animationValues = c), EP(c, u, this.latestValues, P, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (en(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = he.update(() => {
          (qo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = FP(0, uh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(uh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          dy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || we();
          const f = st(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = st(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        ft(a, l),
          Sr(a, c),
          Ti(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new AP()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < lh.length; c++) {
        const f = "rotate" + lh[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Jo(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Jo(s.pointerEvents) || "")),
          this.hasProjected &&
            !Fn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = ah(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y: v } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const x in Cs) {
        if (d[x] === void 0) continue;
        const { correct: k, applyTo: m } = Cs[x],
          h = u.transform === "none" ? d[x] : k(d[x], f);
        if (m) {
          const y = m.length;
          for (let p = 0; p < y; p++) u[m[p]] = h;
        } else u[x] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Jo(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ch),
        this.root.sharedNodes.clear();
    }
  };
}
function _P(e) {
  e.updateLayout();
}
function zP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? jt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = st(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : dy(o, n.layoutBox, r) &&
        jt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = st(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = wr();
    Ti(a, r, n.layoutBox);
    const l = wr();
    s ? Ti(l, e.applyTransform(i, !0), n.measuredBox) : Ti(l, r, n.layoutBox);
    const u = !cy(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const v = we();
          Ri(v, n.layoutBox, d.layoutBox);
          const x = we();
          Ri(x, r, g.layoutBox),
            hu(v, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function IP(e) {
  On.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function BP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function UP(e) {
  e.clearSnapshot();
}
function ch(e) {
  e.clearMeasurements();
}
function bP(e) {
  e.isLayoutDirty = !1;
}
function $P(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function fh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function WP(e) {
  e.resolveTargetDelta();
}
function HP(e) {
  e.calcProjection();
}
function YP(e) {
  e.resetRotation();
}
function KP(e) {
  e.removeLeadSnapshot();
}
function dh(e, t, n) {
  (e.translate = de(t.translate, 0, n)),
    (e.scale = de(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function hh(e, t, n, r) {
  (e.min = de(t.min, n.min, r)), (e.max = de(t.max, n.max, r));
}
function GP(e, t, n, r) {
  hh(e.x, t.x, n.x, r), hh(e.y, t.y, n.y, r);
}
function XP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const QP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function ph(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function ZP(e) {
  ph(e.x), ph(e.y);
}
function dy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !uu(sh(t), sh(n), 0.2))
  );
}
const JP = fy({
    attachResizeListener: (e, t) => Ht(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  tl = { current: void 0 },
  hy = fy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!tl.current) {
        const e = new JP({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (tl.current = e);
      }
      return tl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  qP = {
    pan: { Feature: yP },
    drag: { Feature: gP, ProjectionNode: hy, MeasureLayout: ay },
  },
  eE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function tE(e) {
  const t = eE.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function pu(e, t, n = 1) {
  const [r, i] = tE(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : eu(i) ? pu(i, t, n + 1) : i;
}
function nE(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!eu(o)) return;
      const s = pu(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!eu(o)) continue;
    const s = pu(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const rE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  py = (e) => rE.has(e),
  iE = (e) => Object.keys(e).some(py),
  mh = (e) => e === er || e === I,
  gh = (e, t) => parseFloat(e.split(", ")[t]),
  yh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return gh(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? gh(o[1], e) : 0;
      }
    },
  oE = new Set(["x", "y", "z"]),
  sE = io.filter((e) => !oE.has(e));
function aE(e) {
  const t = [];
  return (
    sE.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const vh = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: yh(4, 13),
    y: yh(5, 14),
  },
  lE = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = vh[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = vh[u](l, o));
      }),
      e
    );
  },
  uE = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(py);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = si(c);
        const d = t[l];
        let g;
        if (Rs(d)) {
          const v = d.length,
            x = d[0] === null ? 1 : 0;
          (c = d[x]), (f = si(c));
          for (let k = x; k < v && d[k] !== null; k++)
            g ? Cc(si(d[k]) === g) : (g = si(d[k]));
        } else g = si(d);
        if (f !== g)
          if (mh(f) && mh(g)) {
            const v = u.get();
            typeof v == "string" && u.set(parseFloat(v)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && g === I && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            g != null &&
            g.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(g.transform(c))
                : (t[l] = f.transform(d))
              : (s || ((o = aE(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = lE(t, e, a);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        ta && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function cE(e, t, n, r) {
  return iE(t) ? uE(e, t, n, r) : { target: t, transitionEnd: r };
}
const fE = (e, t, n, r) => {
    const i = nE(e, t, r);
    return (t = i.target), (r = i.transitionEnd), cE(e, t, n, r);
  },
  mu = { current: null },
  my = { current: !1 };
function dE() {
  if (((my.current = !0), !!ta))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (mu.current = e.matches);
      e.addListener(t), t();
    } else mu.current = !1;
}
function hE(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (qe(o)) e.addValue(i, o), Ds(r) && r.add(i);
    else if (qe(s)) e.addValue(i, zr(o, { owner: e })), Ds(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, zr(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const xh = new WeakMap(),
  gy = Object.keys(Xi),
  pE = gy.length,
  wh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  mE = gc.length;
class gE {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => he.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = ra(n)),
      (this.isVariantNode = Jm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      a[f] !== void 0 && qe(d) && (d.set(a[f], !1), Ds(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      xh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      my.current || dE(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : mu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    xh.delete(this.current),
      this.projection && this.projection.unmount(),
      en(this.notifyUpdate),
      en(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = qn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && he.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < pE; l++) {
      const u = gy[l],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: g,
        } = Xi[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          g && (a = g));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (f && vr(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: g,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : we();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < wh.length; r++) {
      const i = wh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = hE(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < mE; r++) {
      const i = gc[r],
        o = this.props[i];
      (Gi(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = zr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = kc(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !qe(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Nc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class yy extends gE {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o,
  ) {
    let s = _S(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      FS(this, r, s);
      const a = fE(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function yE(e) {
  return window.getComputedStyle(e);
}
class vE extends yy {
  readValueFromInstance(t, n) {
    if (qn.has(n)) {
      const r = Ac(n);
      return (r && r.default) || 0;
    } else {
      const r = yE(t),
        i = (rg(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return sy(t, n);
  }
  build(t, n, r, i) {
    vc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ec(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    qe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    ug(t, n, r, i);
  }
}
class xE extends yy {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (qn.has(n)) {
      const r = Ac(n);
      return (r && r.default) || 0;
    }
    return (n = cg.has(n) ? n : Pc(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return we();
  }
  scrapeMotionValuesFromProps(t, n) {
    return dg(t, n);
  }
  build(t, n, r, i) {
    wc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    fg(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Sc(t.tagName)), super.mount(t);
  }
}
const wE = (e, t) =>
    yc(e)
      ? new xE(t, { enableHardwareAcceleration: !1 })
      : new vE(t, { enableHardwareAcceleration: !0 }),
  SE = { layout: { ProjectionNode: hy, MeasureLayout: ay } },
  PE = { ...QS, ...vw, ...qP, ...SE },
  vy = Tx((e, t) => tw(e, t, PE, wE));
function EE(e) {
  e.values.forEach((t) => t.stop());
}
function kE() {
  const e = new Set(),
    t = {
      subscribe(n) {
        return e.add(n), () => void e.delete(n);
      },
      start(n, r) {
        const i = [];
        return (
          e.forEach((o) => {
            i.push(ey(o, n, { transitionOverride: r }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return e.forEach((r) => {
          VS(r, n);
        });
      },
      stop() {
        e.forEach((n) => {
          EE(n);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function CE() {
  const e = hg(kE);
  return ql(e.mount, []), e;
}
const TE = CE,
  RE = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  lo = (e) =>
    w.jsx(vy.div, {
      variants: RE,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition: { duration: 5, type: "spring", stiffness: 50, mass: 5 },
      children: e.children,
    });
function la() {
  C.useEffect(() => {
    $("ul li").each(function (t) {
      $(this)[0].style.left = `${Math.floor(Math.random() * 111) - 10}%`;
      let n = Math.floor(Math.random() * 131) + 60;
      ($(this)[0].style.width = `${n}px`),
        ($(this)[0].style.height = `${n}px`),
        ($(this)[0].style.animationDelay = `${Math.floor(Math.random() * 8)}s`),
        ($(this)[0].style.animationDuration =
          `${Math.floor(Math.random() * 51) + 10}s`);
    });
  });
  const e = (t) => {
    t.preventDefault();
    try {
      $("#secret-text")[0].style.display = "flex";
    } catch {}
  };
  return w.jsxs("ul", {
    className: "circles",
    children: [
      w.jsx("li", { onClick: e }),
      w.jsx("li", {}),
      w.jsx("li", {}),
      w.jsx("li", { onClick: e }),
      w.jsx("li", {}),
      w.jsx("li", {}),
      w.jsx("li", { onClick: e }),
      w.jsx("li", {}),
      w.jsx("li", {}),
      w.jsx("li", { onClick: e }),
      w.jsx("li", {}),
      w.jsx("li", {}),
      w.jsx("li", { onClick: e }),
      w.jsx("li", {}),
      w.jsx("li", {}),
    ],
  });
}
function ME() {
  return w.jsxs(lo, {
    children: [
      w.jsxs("div", {
        className: "top-section",
        children: [
          w.jsx("img", { src: "/assets/img/avatar.png", id: "home-image" }),
          w.jsx("p", { id: "home-title", children: "NotARoomba" }),
        ],
      }),
      w.jsxs("div", {
        className: "home-button-section",
        children: [
          w.jsx(ke, {
            className: "link-button",
            to: "/about",
            children: "About Me",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "/projects",
            children: "Projects",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "/extra",
            children: "Extra",
          }),
        ],
      }),
      w.jsx(la, {}),
    ],
  });
}
function AE() {
  return w.jsxs(lo, {
    children: [
      w.jsxs("div", {
        className: "page-top-section",
        children: [
          w.jsx("img", { src: "/assets/img/avatar.png", id: "page-image" }),
          w.jsxs("div", {
            className: "page-title-buttons",
            children: [
              w.jsx("p", { id: "page-title", children: "NotARoomba" }),
              w.jsxs("div", {
                className: "page-buttons",
                children: [
                  w.jsx(ke, {
                    className: "page-link-button",
                    to: "/",
                    children: "Home",
                  }),
                  w.jsx(ke, {
                    className: "page-link-button",
                    to: "/projects",
                    children: "Projects",
                  }),
                  w.jsx(ke, {
                    className: "page-link-button",
                    to: "/extra",
                    children: "Extra",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      w.jsxs("div", {
        className: "outer-outer-box",
        children: [
          w.jsx("div", {
            className: "text-box-outer",
            children: w.jsx("p", {
              children:
                "I am a high school student that likes to break things for fun. My main languages are JavaScript, C++, and Java.",
            }),
          }),
          w.jsx("div", {
            className: "text-box-outer",
            children: w.jsx("p", {
              children:
                "Check out my website for more information such as my projects, status of my websites, and API’s. There may be a secret somewhere...",
            }),
          }),
        ],
      }),
      w.jsxs("div", {
        className: "about-frameworks",
        children: [
          w.jsx("p", { children: "Skills" }),
          w.jsxs("div", {
            id: "image-box",
            className: "text-box-outer",
            children: [
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              }),
              w.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
              }),
              w.jsx("img", {
                className: "dark-icons",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
              }),
            ],
          }),
        ],
      }),
      w.jsx(la, {}),
    ],
  });
}
var gu = new Map(),
  zo = new WeakMap(),
  Sh = 0,
  LE = void 0;
function DE(e) {
  return e
    ? (zo.has(e) || ((Sh += 1), zo.set(e, Sh.toString())), zo.get(e))
    : "0";
}
function jE(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? DE(e.root) : e[t]}`)
    .toString();
}
function NE(e) {
  let t = jE(e),
    n = gu.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const o = new IntersectionObserver((s) => {
      s.forEach((a) => {
        var l;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
          (l = r.get(a.target)) == null ||
            l.forEach((c) => {
              c(u, a);
            });
      });
    }, e);
    (i =
      o.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: o, elements: r }),
      gu.set(t, n);
  }
  return n;
}
function VE(e, t, n = {}, r = LE) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: o, elements: s } = NE(n);
  let a = s.get(e) || [];
  return (
    s.has(e) || s.set(e, a),
    a.push(t),
    o.observe(e),
    function () {
      a.splice(a.indexOf(t), 1),
        a.length === 0 && (s.delete(e), o.unobserve(e)),
        s.size === 0 && (o.disconnect(), gu.delete(i));
    }
  );
}
function FE({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: o,
  skip: s,
  initialInView: a,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [f, d] = C.useState(null),
    g = C.useRef(),
    [v, x] = C.useState({ inView: !!a, entry: void 0 });
  (g.current = u),
    C.useEffect(() => {
      if (s || !f) return;
      let y;
      return (
        (y = VE(
          f,
          (p, P) => {
            x({ inView: p, entry: P }),
              g.current && g.current(p, P),
              P.isIntersecting && o && y && (y(), (y = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          l,
        )),
        () => {
          y && y();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, f, i, r, o, s, n, l, t]);
  const k = (c = v.entry) == null ? void 0 : c.target,
    m = C.useRef();
  !f &&
    k &&
    !o &&
    !s &&
    m.current !== k &&
    ((m.current = k), x({ inView: !!a, entry: void 0 }));
  const h = [d, v.inView, v.entry];
  return (h.ref = h[0]), (h.inView = h[1]), (h.entry = h[2]), h;
}
function OE(e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (c) {
        o(c);
      }
    }
    function a(u) {
      try {
        l(r.throw(u));
      } catch (c) {
        o(c);
      }
    }
    function l(u) {
      var c;
      u.done
        ? i(u.value)
        : ((c = u.value),
          c instanceof n
            ? c
            : new n(function (f) {
                f(c);
              })).then(s, a);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
const Ph = (e, t, n, r) => {
    e.style.transition = `${t} ${n}ms ${r}`;
  },
  bt = (e, t, n) => Math.min(Math.max(e, t), n);
class _E {
  constructor(t, n) {
    (this.glareAngle = 0),
      (this.glareOpacity = 0),
      (this.calculateGlareSize = (s) => {
        const { width: a, height: l } = s,
          u = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2));
        return { width: u, height: u };
      }),
      (this.setSize = (s) => {
        const a = this.calculateGlareSize(s);
        (this.glareEl.style.width = `${a.width}px`),
          (this.glareEl.style.height = `${a.height}px`);
      }),
      (this.update = (s, a, l, u) => {
        this.updateAngle(s, a.glareReverse), this.updateOpacity(s, a, l, u);
      }),
      (this.updateAngle = (s, a) => {
        const { xPercentage: l, yPercentage: u } = s,
          c = 180 / Math.PI,
          f = l ? Math.atan2(u, -l) * c : 0;
        this.glareAngle = f - (a ? 180 : 0);
      }),
      (this.updateOpacity = (s, a, l, u) => {
        const { xPercentage: c, yPercentage: f } = s,
          { glarePosition: d, glareReverse: g, glareMaxOpacity: v } = a,
          x = l ? -1 : 1,
          k = u ? -1 : 1,
          m = g ? -1 : 1;
        let h = 0;
        switch (d) {
          case "top":
            h = -c * x * m;
            break;
          case "right":
            h = f * k * m;
            break;
          case "bottom":
          case void 0:
            h = c * x * m;
            break;
          case "left":
            h = -f * k * m;
            break;
          case "all":
            h = Math.hypot(c, f);
        }
        const y = bt(h, 0, 100);
        this.glareOpacity = (y * v) / 100;
      }),
      (this.render = (s) => {
        const { glareColor: a } = s;
        (this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`),
          (this.glareEl.style.opacity = this.glareOpacity.toString()),
          (this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${a} 100%)`);
      }),
      (this.glareWrapperEl = document.createElement("div")),
      (this.glareEl = document.createElement("div")),
      this.glareWrapperEl.appendChild(this.glareEl),
      (this.glareWrapperEl.className = "glare-wrapper"),
      (this.glareEl.className = "glare");
    const r = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: n,
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        pointerEvents: "none",
      },
      i = this.calculateGlareSize(t),
      o = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transformOrigin: "0% 0%",
        pointerEvents: "none",
        width: `${i.width}px`,
        height: `${i.height}px`,
      };
    Object.assign(this.glareWrapperEl.style, r),
      Object.assign(this.glareEl.style, o);
  }
}
class zE {
  constructor() {
    (this.glareAngle = 0),
      (this.glareOpacity = 0),
      (this.tiltAngleX = 0),
      (this.tiltAngleY = 0),
      (this.tiltAngleXPercentage = 0),
      (this.tiltAngleYPercentage = 0),
      (this.update = (t, n) => {
        this.updateTilt(t, n),
          this.updateTiltManualInput(t, n),
          this.updateTiltReverse(n),
          this.updateTiltLimits(n);
      }),
      (this.updateTilt = (t, n) => {
        const { xPercentage: r, yPercentage: i } = t,
          { tiltMaxAngleX: o, tiltMaxAngleY: s } = n;
        (this.tiltAngleX = (r * o) / 100),
          (this.tiltAngleY = ((i * s) / 100) * -1);
      }),
      (this.updateTiltManualInput = (t, n) => {
        const {
          tiltAngleXManual: r,
          tiltAngleYManual: i,
          tiltMaxAngleX: o,
          tiltMaxAngleY: s,
        } = n;
        (r !== null || i !== null) &&
          ((this.tiltAngleX = r !== null ? r : 0),
          (this.tiltAngleY = i !== null ? i : 0),
          (t.xPercentage = (100 * this.tiltAngleX) / o),
          (t.yPercentage = (100 * this.tiltAngleY) / s));
      }),
      (this.updateTiltReverse = (t) => {
        const n = t.tiltReverse ? -1 : 1;
        (this.tiltAngleX = n * this.tiltAngleX),
          (this.tiltAngleY = n * this.tiltAngleY);
      }),
      (this.updateTiltLimits = (t) => {
        const { tiltAxis: n } = t;
        (this.tiltAngleX = bt(this.tiltAngleX, -90, 90)),
          (this.tiltAngleY = bt(this.tiltAngleY, -90, 90)),
          n &&
            ((this.tiltAngleX = n === "x" ? this.tiltAngleX : 0),
            (this.tiltAngleY = n === "y" ? this.tiltAngleY : 0));
      }),
      (this.updateTiltAnglesPercentage = (t) => {
        const { tiltMaxAngleX: n, tiltMaxAngleY: r } = t;
        (this.tiltAngleXPercentage = (this.tiltAngleX / n) * 100),
          (this.tiltAngleYPercentage = (this.tiltAngleY / r) * 100);
      }),
      (this.render = (t) => {
        t.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
      });
  }
}
const IE = Object.assign(
  Object.assign(
    {
      scale: 1,
      perspective: 1e3,
      flipVertically: !1,
      flipHorizontally: !1,
      reset: !0,
      transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
      transitionSpeed: 400,
      trackOnWindow: !1,
      gyroscope: !1,
    },
    {
      tiltEnable: !0,
      tiltReverse: !1,
      tiltAngleXInitial: 0,
      tiltAngleYInitial: 0,
      tiltMaxAngleX: 20,
      tiltMaxAngleY: 20,
      tiltAxis: void 0,
      tiltAngleXManual: null,
      tiltAngleYManual: null,
    },
  ),
  {
    glareEnable: !1,
    glareMaxOpacity: 0.7,
    glareColor: "#ffffff",
    glarePosition: "bottom",
    glareReverse: !1,
    glareBorderRadius: "0",
  },
);
class xy extends C.PureComponent {
  constructor() {
    super(...arguments),
      (this.wrapperEl = {
        node: null,
        size: { width: 0, height: 0, left: 0, top: 0 },
        clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 },
        updateAnimationId: null,
        scale: 1,
      }),
      (this.tilt = null),
      (this.glare = null),
      (this.addDeviceOrientationEventListener = () =>
        OE(this, void 0, void 0, function* () {
          if (!window.DeviceOrientationEvent) return;
          const t = DeviceOrientationEvent.requestPermission;
          typeof t == "function"
            ? (yield t()) === "granted" &&
              window.addEventListener("deviceorientation", this.onMove)
            : window.addEventListener("deviceorientation", this.onMove);
        })),
      (this.setSize = () => {
        this.setWrapperElSize(),
          this.glare && this.glare.setSize(this.wrapperEl.size);
      }),
      (this.mainLoop = (t) => {
        this.wrapperEl.updateAnimationId !== null &&
          cancelAnimationFrame(this.wrapperEl.updateAnimationId),
          this.processInput(t),
          this.update(t.type),
          (this.wrapperEl.updateAnimationId = requestAnimationFrame(
            this.renderFrame,
          ));
      }),
      (this.onEnter = (t) => {
        const { onEnter: n } = this.props;
        this.setSize(),
          (this.wrapperEl.node.style.willChange = "transform"),
          this.setTransitions(),
          n && n(t.type);
      }),
      (this.onMove = (t) => {
        this.mainLoop(t), this.emitOnMove(t);
      }),
      (this.onLeave = (t) => {
        const { onLeave: n } = this.props;
        if ((this.setTransitions(), n && n(t.type), this.props.reset)) {
          const r = new CustomEvent("autoreset");
          this.onMove(r);
        }
      }),
      (this.processInput = (t) => {
        const { scale: n } = this.props;
        switch (t.type) {
          case "mousemove":
            (this.wrapperEl.clientPosition.x = t.pageX),
              (this.wrapperEl.clientPosition.y = t.pageY),
              (this.wrapperEl.scale = n);
            break;
          case "touchmove":
            (this.wrapperEl.clientPosition.x = t.touches[0].pageX),
              (this.wrapperEl.clientPosition.y = t.touches[0].pageY),
              (this.wrapperEl.scale = n);
            break;
          case "deviceorientation":
            this.processInputDeviceOrientation(t), (this.wrapperEl.scale = n);
            break;
          case "autoreset":
            const {
                tiltAngleXInitial: r,
                tiltAngleYInitial: i,
                tiltMaxAngleX: o,
                tiltMaxAngleY: s,
              } = this.props,
              a = (i / s) * 100;
            (this.wrapperEl.clientPosition.xPercentage = bt(
              (r / o) * 100,
              -100,
              100,
            )),
              (this.wrapperEl.clientPosition.yPercentage = bt(a, -100, 100)),
              (this.wrapperEl.scale = 1);
        }
      }),
      (this.processInputDeviceOrientation = (t) => {
        if (!t.gamma || !t.beta || !this.props.gyroscope) return;
        const { tiltMaxAngleX: n, tiltMaxAngleY: r } = this.props,
          i = t.gamma;
        (this.wrapperEl.clientPosition.xPercentage = (t.beta / n) * 100),
          (this.wrapperEl.clientPosition.yPercentage = (i / r) * 100),
          (this.wrapperEl.clientPosition.xPercentage = bt(
            this.wrapperEl.clientPosition.xPercentage,
            -100,
            100,
          )),
          (this.wrapperEl.clientPosition.yPercentage = bt(
            this.wrapperEl.clientPosition.yPercentage,
            -100,
            100,
          ));
      }),
      (this.update = (t) => {
        const {
          tiltEnable: n,
          flipVertically: r,
          flipHorizontally: i,
        } = this.props;
        t !== "autoreset" &&
          t !== "deviceorientation" &&
          t !== "propChange" &&
          this.updateClientInput(),
          n && this.tilt.update(this.wrapperEl.clientPosition, this.props),
          this.updateFlip(),
          this.tilt.updateTiltAnglesPercentage(this.props),
          this.glare &&
            this.glare.update(this.wrapperEl.clientPosition, this.props, r, i);
      }),
      (this.updateClientInput = () => {
        const { trackOnWindow: t } = this.props;
        let n, r;
        if (t) {
          const { x: i, y: o } = this.wrapperEl.clientPosition;
          (n = (o / window.innerHeight) * 200 - 100),
            (r = (i / window.innerWidth) * 200 - 100);
        } else {
          const {
            size: { width: i, height: o, left: s, top: a },
            clientPosition: { x: l, y: u },
          } = this.wrapperEl;
          (n = ((u - a) / o) * 200 - 100), (r = ((l - s) / i) * 200 - 100);
        }
        (this.wrapperEl.clientPosition.xPercentage = bt(n, -100, 100)),
          (this.wrapperEl.clientPosition.yPercentage = bt(r, -100, 100));
      }),
      (this.updateFlip = () => {
        const { flipVertically: t, flipHorizontally: n } = this.props;
        t && ((this.tilt.tiltAngleX += 180), (this.tilt.tiltAngleY *= -1)),
          n && (this.tilt.tiltAngleY += 180);
      }),
      (this.renderFrame = () => {
        this.resetWrapperElTransform(),
          this.renderPerspective(),
          this.tilt.render(this.wrapperEl.node),
          this.renderScale(),
          this.glare && this.glare.render(this.props);
      });
  }
  componentDidMount() {
    if (
      ((this.tilt = new zE()),
      this.initGlare(),
      this.addEventListeners(),
      typeof CustomEvent > "u")
    )
      return;
    const t = new CustomEvent("autoreset");
    this.mainLoop(t);
    const n = new CustomEvent("initial");
    this.emitOnMove(n);
  }
  componentWillUnmount() {
    this.wrapperEl.updateAnimationId !== null &&
      cancelAnimationFrame(this.wrapperEl.updateAnimationId),
      this.removeEventListeners();
  }
  componentDidUpdate() {
    const t = new CustomEvent("propChange");
    this.mainLoop(t), this.emitOnMove(t);
  }
  addEventListeners() {
    const { trackOnWindow: t, gyroscope: n } = this.props;
    window.addEventListener("resize", this.setSize),
      t &&
        (window.addEventListener("mouseenter", this.onEnter),
        window.addEventListener("mousemove", this.onMove),
        window.addEventListener("mouseout", this.onLeave),
        window.addEventListener("touchstart", this.onEnter),
        window.addEventListener("touchmove", this.onMove),
        window.addEventListener("touchend", this.onLeave)),
      n && this.addDeviceOrientationEventListener();
  }
  removeEventListeners() {
    const { trackOnWindow: t, gyroscope: n } = this.props;
    window.removeEventListener("resize", this.setSize),
      t &&
        (window.removeEventListener("mouseenter", this.onEnter),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseout", this.onLeave),
        window.removeEventListener("touchstart", this.onEnter),
        window.removeEventListener("touchmove", this.onMove),
        window.removeEventListener("touchend", this.onLeave)),
      n &&
        window.DeviceOrientationEvent &&
        window.removeEventListener("deviceorientation", this.onMove);
  }
  setWrapperElSize() {
    const t = this.wrapperEl.node.getBoundingClientRect();
    (this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth),
      (this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight),
      (this.wrapperEl.size.left = t.left + window.scrollX),
      (this.wrapperEl.size.top = t.top + window.scrollY);
  }
  initGlare() {
    const { glareEnable: t, glareBorderRadius: n } = this.props;
    t &&
      ((this.glare = new _E(this.wrapperEl.size, n)),
      this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
  }
  emitOnMove(t) {
    const { onMove: n } = this.props;
    if (!n) return;
    let r = 0,
      i = 0;
    this.glare && ((r = this.glare.glareAngle), (i = this.glare.glareOpacity)),
      n({
        tiltAngleX: this.tilt.tiltAngleX,
        tiltAngleY: this.tilt.tiltAngleY,
        tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
        tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
        glareAngle: r,
        glareOpacity: i,
        eventType: t.type,
      });
  }
  resetWrapperElTransform() {
    this.wrapperEl.node.style.transform = "";
  }
  renderPerspective() {
    const { perspective: t } = this.props;
    this.wrapperEl.node.style.transform += `perspective(${t}px) `;
  }
  renderScale() {
    const { scale: t } = this.wrapperEl;
    this.wrapperEl.node.style.transform += `scale3d(${t},${t},${t})`;
  }
  setTransitions() {
    const { transitionSpeed: t, transitionEasing: n } = this.props;
    Ph(this.wrapperEl.node, "all", t, n),
      this.glare && Ph(this.glare.glareEl, "opacity", t, n);
  }
  render() {
    const { children: t, className: n, style: r } = this.props;
    return Vs.createElement(
      "div",
      {
        ref: (i) => (this.wrapperEl.node = i),
        onMouseEnter: this.onEnter,
        onMouseMove: this.onMove,
        onMouseLeave: this.onLeave,
        onTouchStart: this.onEnter,
        onTouchMove: this.onMove,
        onTouchEnd: this.onLeave,
        className: n,
        style: r,
      },
      t,
    );
  }
}
xy.defaultProps = IE;
const BE = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};
function tt({ imgPath: e, title: t, text: n, classN: r }) {
  const i = TE(),
    [o, s] = FE();
  return (
    C.useEffect(() => {
      s ? i.start("visible") : i.start("hidden");
    }, [i, s]),
    w.jsx(xy, {
      children: w.jsxs(vy.div, {
        ref: o,
        variants: BE,
        initial: "hidden",
        animate: i,
        className: "project-box-outer",
        children: [
          w.jsx("img", { className: r || null, src: e }),
          w.jsxs("div", {
            className: "project-box-tt",
            children: [
              w.jsx("div", { className: "project-box-title", children: t }),
              w.jsx("div", { className: "project-box-text", children: n }),
            ],
          }),
        ],
      }),
    })
  );
}
const ge = ({ text: e, link: t }) => w.jsx("a", { href: t, children: e });
function UE() {
  return (
    C.useEffect(
      () => (
        (document.body.style.overflowY = "scroll"),
        () => {
          document.body.style.overflowY = "hidden";
        }
      ),
      [],
    ),
    w.jsxs(lo, {
      id: "projects",
      children: [
        w.jsxs("div", {
          id: "projects-top-section",
          className: "page-top-section",
          children: [
            w.jsx("img", { src: "/assets/img/avatar.png", id: "page-image" }),
            w.jsxs("div", {
              className: "page-title-buttons",
              children: [
                w.jsx("p", { id: "page-title", children: "Projects" }),
                w.jsxs("div", {
                  className: "page-buttons",
                  children: [
                    w.jsx(ke, {
                      className: "page-link-button",
                      to: "/",
                      children: "Home",
                    }),
                    w.jsx(ke, {
                      className: "page-link-button",
                      to: "/about",
                      children: "About Me",
                    }),
                    w.jsx(ke, {
                      className: "page-link-button",
                      to: "/extra",
                      children: "Extra",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        w.jsx("h1", { children: "Scroll" }),
        w.jsx(tt, {
          imgPath: "/assets/img/niveles.png",
          title: "Niveles De Niveles",
          text: w.jsxs(w.Fragment, {
            children: [
              "An early warning application that mitigate the consequences of natural disasters. This project made it to the finals of the XVII Concurso Nacional de Programación in Colombia. It is made with react-native with the use of websockets to provide aid to people in dsaster prone areas. The app is free and published to the App Store and Google Play store. Look at the website ",
              w.jsx(ge, { text: "here", link: "https://nivelesdeniveles.org" }),
              " or look at the code ",
              w.jsx(ge, {
                text: "here",
                link: "https://github.com/NotARoomba/NivelesDeNiveles",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/tubb.png",
          title: "Tubb",
          text: w.jsxs(w.Fragment, {
            children: [
              "Tubb is a utility bot with a multitude of useful commands as well as a music system for your enjoyment. Commands are straight forward unlike the complications you have to deal with in other bots. Tubb is still being constantly worked on, so please send any bugs to the GitHub repository ",
              w.jsx(ge, {
                text: "here",
                link: "https://github.com/NotARoomba/TubbBot",
              }),
              ". Feature suggestions are welcome. You can also invite Tubb ",
              w.jsx(ge, {
                text: "here",
                link: "https://top.gg/bot/750123677739122819",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          classN: "dark-icons",
          imgPath: "/assets/img/cmd.png",
          title: "Simple Music Player",
          text: w.jsxs(w.Fragment, {
            children: [
              "Just a music player mini-project to get more familliar with C#. Its features are: play a file, play files from a directory (recursive), and play files from a directory shuffled. Complile it or look at the ",
              w.jsx(ge, {
                text: "releases",
                link: "https://github.com/NotARoomba/Simple-Music-Player/releases",
              }),
              " to run.",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/music.png",
          title: "Simple Music Player 2",
          text: w.jsxs(w.Fragment, {
            children: [
              "Its back, the application no-one asked for... Simple Music Player 2! Filled with nothing but learning attempts even I'm surprised it could build. Check out the ",
              w.jsx(ge, {
                text: "releases",
                link: "https://github.com/NotARoomba/Simple-Music-Player-2/releases",
              }),
              " for this unit of an attempt.",
            ],
          }),
        }),
        w.jsx(tt, {
          classN: "dark-icons",
          imgPath: "/assets/img/bounce.png",
          title: "Bounce",
          text: w.jsxs(w.Fragment, {
            children: [
              "A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up and Left arrow Player 2 Controls are Right and Down arrow. Complile it or look at the ",
              w.jsx(ge, {
                text: "releases",
                link: "https://github.com/NotARoomba/Bounce/releases",
              }),
              " to run.",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/asteroids.png",
          title: "Asteroids",
          text: w.jsxs(w.Fragment, {
            children: [
              "Another asteroids clone out of millions by aspiring developers to join their favorite game company by learning SDL, OpenGL, or any myriad of graphics libraries. Check it out on my website ",
              w.jsx(ge, {
                text: "here",
                link: "https://asteroids.notaroomba.dev",
              }),
              " or check out the releases ",
              w.jsx(ge, {
                text: "releases",
                link: "https://github.com/NotARoomba/Asteroids/releases",
              }),
              " to dodge asteroids with (somewhat) broken colision.",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/wordle.png",
          title: "Wordle",
          text: w.jsxs(w.Fragment, {
            children: [
              w.jsx("s", {
                children:
                  "A special product of desperation, boredom, and the desire to fit in comes this Cli version of the (decently) popular Wordle game.",
              }),
              " After a few revisions now brings my version of Wordle to the web! It has more features and cool css wizardry. You can check it out online ",
              w.jsx(ge, {
                text: "here",
                link: "https://wordle.notaroomba.dev",
              }),
              " or you can look at the code ",
              w.jsx(ge, {
                text: "here",
                link: "https://github.com/NotARoomba/Wordle",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/koombia.png",
          title: "Koombia",
          text: w.jsxs(w.Fragment, {
            children: [
              "Koombia lets you turn text from your science, spanish, history or ethics lessons into songs for you to memorize the contents of your quiz faster and easier. Using Koombia is as easy as copy, pasting, and clicking. Paste your lesson into the text area and select a genre for your song. It will generate a random beat with chord progressions based on the genre and a text to speech will sing the song. Next to it, theres a karaoke where you can test your singing skills and see if you learned correctly the song. You can try it out on my ",
              w.jsx(ge, {
                text: "website",
                link: "https://koombia.notaroomba.dev",
              }),
              " and look at the ",
              w.jsx(ge, {
                text: "GitHub",
                link: "https://github.com/NotARoomba/Koombia",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/grindhub.png",
          title: "GrindHub",
          text: w.jsxs(w.Fragment, {
            children: [
              "GrindHub will help you turn your procrastination into your habits! We built an intuitive platform where you can challenge yourself and do different daily missions and receive rewards, that will help you increase your level! Using GrindHub will be fun and rewarding at the end of the year. You can try out this Ai mess ",
              w.jsx(ge, {
                text: "here",
                link: "https://grindhub.notaroomba.dev",
              }),
              " or look at the spaghetti code ",
              w.jsx(ge, {
                text: "here",
                link: "https://github.com/NotARoomba/GrindHub",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/devoided.png",
          title: "Devoided",
          text: w.jsxs(w.Fragment, {
            children: [
              "Devoided is an RPG game that was developed in a hackathon and got 2nd place. The game is about a quantum engineer explores space-time in search of traces of a deck of ancient Earth, but in his search he becomes trapped in the past and future so he does everything possible to repair his time clock to return to the present and reunite. the letters to discover the mystery of the origin of the universe. You can try it out on my ",
              w.jsx(ge, {
                text: "website",
                link: "https://devoided.notaroomba.dev",
              }),
              " and look at the ",
              w.jsx(ge, {
                text: "GitHub",
                link: "https://github.com/NotARoomba/Devoided",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/chess.png",
          title: "Chess",
          text: w.jsxs(w.Fragment, {
            children: [
              "Chess! A game that has been played for centuries now arrives to your terminal! WIth the power of C++ and 3.5 braincells comes this facinating take on the popular game. You can compile it or look at the ",
              w.jsx(ge, {
                text: "releases",
                link: "https://github.com/NotARoomba/Chess/releases",
              }),
              " to run.",
            ],
          }),
        }),
        w.jsx(tt, {
          imgPath: "/assets/img/gravity.png",
          title: "Gravity Simulator",
          text: w.jsxs(w.Fragment, {
            children: [
              "Originally a gravity simulator made with Python then ported to C++ finally reaches the web browser! This simulation is powered by a rust WebAssembly backend that uses a naive implementation where all the bodies have gravittional force on eachother. There are plans to use the Barnes-Hut algorithim utilizing quadtrees to improve performance but for now the naive implementation works. You can try out this beautiful mess ",
              w.jsx(ge, {
                text: "here",
                link: "https://gravity.notaroomba.dev",
              }),
              " or look at the code ",
              w.jsx(ge, {
                text: "here",
                link: "https://github.com/NotARoomba/Gravity-Simulator",
              }),
              ".",
            ],
          }),
        }),
        w.jsx(tt, {
          classN: "red-roomba",
          imgPath: "/assets/img/roomba.png",
          title: "RoombaOS",
          text: w.jsxs(w.Fragment, {
            children: [
              "A test operating system to learn Assembly and low level C. Planned feature include, porting Asteroids and WordleCLI, FAT filesystem, and some more commands. You can try out RoombaOS by downloading the binary from the ",
              w.jsx(ge, {
                text: "releases",
                link: "https://github.com/NotARoomba/RoombaOS/releases",
              }),
              " or look at the code ",
              w.jsx(ge, {
                text: "here",
                link: "https://github.com/NotARoomba/RoombaOS",
              }),
              ".",
            ],
          }),
        }),
      ],
    })
  );
}
function bE() {
  return w.jsxs(lo, {
    children: [
      w.jsxs("div", {
        className: "top-section",
        children: [
          w.jsx("img", { src: "/assets/img/avatar.png", id: "home-image" }),
          w.jsx("p", { id: "home-title", children: "Extra" }),
        ],
      }),
      w.jsxs("div", {
        className: "home-button-section",
        children: [
          w.jsx(ke, { className: "link-button", to: "/", children: "Home" }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://nivelesdeniveles.org",
            children: "Niveles De Niveles",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://koombia.notaroomba.dev",
            children: "Koombia",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://grindhub.notaroomba.dev",
            children: "Grindhub",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://devoided.notaroomba.dev",
            children: "Devoided",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://gravity.notaroomba.dev",
            children: "Gravity",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://wordle.notaroomba.dev",
            children: "Wordle",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://asteroids.notaroomba.dev",
            children: "Asteroids",
          }),
          w.jsx(ke, {
            className: "link-button",
            to: "https://status.notaroomba.dev",
            children: "Status",
          }),
        ],
      }),
      w.jsx("div", {
        id: "secret-text",
        children: w.jsxs("p", {
          className: "wrap",
          children: [
            "This page was made in memorial to the dozens of poor souls murdered by Nathan's confusing and mind boggling code. He frequently create codes that makes literally no sense and give to his teacher and fry his brain. The wonderful projects are posted here for you to die. ",
            w.jsx("br", {}),
            " -Henry",
          ],
        }),
      }),
      w.jsx(la, {}),
    ],
  });
}
function li() {
  return w.jsxs(lo, {
    children: [
      w.jsxs("div", {
        className: "top-section",
        children: [
          w.jsx("img", {
            src: "/assets/img/alert.svg",
            id: "home-image",
            style: {
              filter:
                "invert(15%) sepia(87%) saturate(7313%) hue-rotate(340deg) brightness(84%) contrast(105%)",
            },
          }),
          w.jsx("p", { id: "home-title", children: "404" }),
        ],
      }),
      w.jsx("div", {
        className: "home-button-section",
        children: w.jsx(ke, {
          className: "link-button",
          to: "/",
          children: "Home",
        }),
      }),
      w.jsx(la, {}),
    ],
  });
}
const $E = dx([
    { path: "", element: w.jsx(ME, {}), errorElement: w.jsx(li, {}) },
    { path: "/about", element: w.jsx(AE, {}), errorElement: w.jsx(li, {}) },
    { path: "/projects", element: w.jsx(UE, {}), errorElement: w.jsx(li, {}) },
    { path: "/extra", element: w.jsx(bE, {}), errorElement: w.jsx(li, {}) },
    { path: "/*", element: w.jsx(li, {}) },
  ]),
  WE = document.getElementById("root"),
  HE = Om(WE);
HE.render(w.jsx(ix, { router: $E }));
