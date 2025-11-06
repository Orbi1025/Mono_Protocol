"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3999],
  {
    2037: function (e, t, n) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let { apiKey: t, ...n } = e,
            r = { ...n, key: t },
            { html: u } = (0, o.GoogleMapsEmbed)(r);
          return (0, a.jsx)(l.default, {
            height: r.height || null,
            width: r.width || null,
            html: u,
            dataNtpc: "GoogleMapsEmbed",
          });
        });
      let a = n(95155),
        o = n(13067),
        l = r(n(57445));
    },
    3063: (e, t, n) => {
      n.d(t, { F: () => c });
      var r = n(61405),
        a = n(96748),
        o = n(86475),
        l = n(86161),
        u = n(12115),
        i = n(8828);
      let s = (e) => "object" == typeof e && !Array.isArray(e);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.U)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : l.b,
            a = (0, u.useRef)([]),
            o = (0, i.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (s(e) && s(t) && a.current.length) {
                  for (let n of a.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, u.useMemo)(() => {
            if (s(o)) {
              let e = { ...o },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (a.current.includes(n) || a.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return o;
          }, [o]);
        })(
          (e) => (0, r.F)(t, { onChange: e }),
          () => (0, a.s)(t)
        );
      }
    },
    4853: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8828: (e, t, n) => {
      e.exports = n(83654);
    },
    12973: (e, t, n) => {
      function r() {
        return "undefined" != typeof window;
      }
      n.d(t, { u4: () => l });
      function a() {
        return (
          (r()
            ? window.vam
            : (function () {
                return "production";
              })()) || "production"
        );
      }
      function o() {
        return "production" === a();
      }
      function l(e, t, n) {
        var l, u;
        if (!r()) {
          let e =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          if (o()) console.warn(e);
          else throw Error(e);
          return;
        }
        if (!t) {
          null == (l = window.va) ||
            l.call(window, "event", { name: e, options: n });
          return;
        }
        try {
          let r = (function (e, t) {
            if (!e) return;
            let n = e,
              r = [];
            for (let [a, o] of Object.entries(e))
              "object" == typeof o &&
                null !== o &&
                (t.strip
                  ? (n = (function (e, { [e]: t, ...n }) {
                      return n;
                    })(a, n))
                  : r.push(a));
            if (r.length > 0 && !t.strip)
              throw Error(
                `The following properties are not valid: ${r.join(
                  ", "
                )}. Only strings, numbers, booleans, and null are allowed.`
              );
            return n;
          })(t, { strip: o() });
          null == (u = window.va) ||
            u.call(window, "event", { name: e, data: r, options: n });
        } catch (e) {
          e instanceof Error && "development" === a() && console.error(e);
        }
      }
    },
    13067: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0);
      var r = n(68197);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return r.GoogleAnalytics;
        },
      });
      var a = n(55546);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return a.GoogleMapsEmbed;
        },
      });
      var o = n(93438);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return o.YouTubeEmbed;
        },
      });
    },
    14806: (e, t, n) => {
      e.exports = n(30125);
    },
    15239: (e, t, n) => {
      n.d(t, { default: () => a.a });
      var r = n(54652),
        a = n.n(r);
    },
    15781: (e, t) => {
      function n(e, t, r = !1) {
        return t
          ? Object.keys(e)
              .filter((e) => (r ? !t.includes(e) : t.includes(e)))
              .reduce((t, n) => ((t[n] = e[n]), t), {})
          : {};
      }
      function r(e, t, n, r) {
        let a =
          r && Object.keys(r).length > 0
            ? new URL(Object.values(r)[0], e)
            : new URL(e);
        return (
          t &&
            n &&
            t.forEach((e) => {
              n[e] && a.searchParams.set(e, n[e]);
            }),
          a.toString()
        );
      }
      function a(e, t, n, a, o) {
        var l;
        if (!t) return `<${e}></${e}>`;
        let u = (null == (l = t.src) ? void 0 : l.url)
            ? Object.assign(Object.assign({}, t), {
                src: r(t.src.url, t.src.params, a, o),
              })
            : t,
          i = Object.keys(Object.assign(Object.assign({}, u), n)).reduce(
            (e, t) => {
              let r = null == n ? void 0 : n[t],
                a = u[t],
                o = null != r ? r : a,
                l = !0 === o ? t : `${t}="${o}"`;
              return o ? e + ` ${l}` : e;
            },
            ""
          );
        return `<${e}${i}></${e}>`;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatData = t.createHtml = t.formatUrl = void 0),
        (t.formatUrl = r),
        (t.createHtml = a),
        (t.formatData = function (e, t) {
          var o, l, u, i, s;
          let c = n(
              t,
              null == (o = e.scripts)
                ? void 0
                : o.reduce(
                    (e, t) => [
                      ...e,
                      ...(Array.isArray(t.params) ? t.params : []),
                    ],
                    []
                  )
            ),
            d = n(
              t,
              null == (u = null == (l = e.html) ? void 0 : l.attributes.src)
                ? void 0
                : u.params
            ),
            f = n(t, [
              null == (s = null == (i = e.html) ? void 0 : i.attributes.src)
                ? void 0
                : s.slugParam,
            ]),
            p = n(
              t,
              [...Object.keys(c), ...Object.keys(d), ...Object.keys(f)],
              !0
            );
          return Object.assign(Object.assign({}, e), {
            html: e.html ? a(e.html.element, e.html.attributes, p, d, f) : null,
            scripts: e.scripts
              ? e.scripts.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    url: r(e.url, e.params, c),
                  })
                )
              : null,
          });
        });
    },
    20063: (e, t, n) => {
      var r = n(47260);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    23817: (e) => {
      e.exports = JSON.parse(
        '{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}'
      );
    },
    26802: (e) => {
      e.exports = JSON.parse(
        '{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}'
      );
    },
    30125: (e, t, n) => {
      var r = n(12115),
        a =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        l = r.useEffect,
        u = r.useLayoutEffect,
        i = r.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !a(e, n);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                a = r[0].inst,
                c = r[1];
              return (
                u(
                  function () {
                    (a.value = n), (a.getSnapshot = t), s(a) && c({ inst: a });
                  },
                  [e, n, t]
                ),
                l(
                  function () {
                    return (
                      s(a) && c({ inst: a }),
                      e(function () {
                        s(a) && c({ inst: a });
                      })
                    );
                  },
                  [e]
                ),
                i(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    },
    37577: function (e, t, n) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let { html: t, scripts: n, stylesheets: r } = (0, l.YouTubeEmbed)(e);
          return (0, a.jsx)(u.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children:
              null == n
                ? void 0
                : n.map((e) =>
                    (0, a.jsx)(
                      o.default,
                      { src: e.url, strategy: i[e.strategy], stylesheets: r },
                      e.url
                    )
                  ),
          });
        });
      let a = n(95155),
        o = r(n(68321)),
        l = n(13067),
        u = r(n(57445)),
        i = {
          server: "beforeInteractive",
          client: "afterInteractive",
          idle: "lazyOnload",
          worker: "worker",
        };
    },
    41402: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return m;
          },
        });
      let r = n(28140),
        a = n(49417),
        o = n(95155),
        l = r._(n(47650)),
        u = a._(n(12115)),
        i = n(82073),
        s = n(94681),
        c = n(4853),
        d = new Map(),
        f = new Set(),
        p = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: o,
              children: u = "",
              strategy: i = "afterInteractive",
              onError: c,
              stylesheets: p,
            } = e,
            g = n || t;
          if (g && f.has(g)) return;
          if (d.has(t)) {
            f.add(g), d.get(t).then(r, c);
            return;
          }
          let m = () => {
              a && a(), f.add(g);
            },
            b = document.createElement("script"),
            y = new Promise((e, t) => {
              b.addEventListener("load", function (t) {
                e(), r && r.call(this, t), m();
              }),
                b.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              c && c(e);
            });
          o
            ? ((b.innerHTML = o.__html || ""), m())
            : u
            ? ((b.textContent =
                "string" == typeof u ? u : Array.isArray(u) ? u.join("") : ""),
              m())
            : t && ((b.src = t), d.set(t, y)),
            (0, s.setAttributesFromProps)(b, e),
            "worker" === i && b.setAttribute("type", "text/partytown"),
            b.setAttribute("data-nscript", i),
            p &&
              ((e) => {
                if (l.default.preinit)
                  return e.forEach((e) => {
                    l.default.preinit(e, { as: "style" });
                  });
                {
                  let t = document.head;
                  e.forEach((e) => {
                    let n = document.createElement("link");
                    (n.type = "text/css"),
                      (n.rel = "stylesheet"),
                      (n.href = e),
                      t.appendChild(n);
                  });
                }
              })(p),
            document.body.appendChild(b);
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => p(e));
            })
          : p(e);
      }
      function m(e) {
        e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function b(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: a = null,
            strategy: s = "afterInteractive",
            onError: d,
            stylesheets: g,
            ...m
          } = e,
          {
            updateScripts: b,
            scripts: y,
            getIsSsr: h,
            appDir: v,
            nonce: w,
          } = (0, u.useContext)(i.HeadManagerContext);
        w = m.nonce || w;
        let _ = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          _.current || (a && e && f.has(e) && a(), (_.current = !0));
        }, [a, t, n]);
        let O = (0, u.useRef)(!1);
        if (
          ((0, u.useEffect)(() => {
            if (!O.current) {
              if ("afterInteractive" === s) p(e);
              else
                "lazyOnload" === s &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => p(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => p(e));
                      }));
              O.current = !0;
            }
          }, [e, s]),
          ("beforeInteractive" === s || "worker" === s) &&
            (b
              ? ((y[s] = (y[s] || []).concat([
                  {
                    id: t,
                    src: n,
                    onLoad: r,
                    onReady: a,
                    onError: d,
                    ...m,
                    nonce: w,
                  },
                ])),
                b(y))
              : h && h()
              ? f.add(t || n)
              : h && !h() && p({ ...e, nonce: w })),
          v)
        ) {
          if (
            (g &&
              g.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === s)
          )
            if (!n)
              return (
                m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                l.default.preload(
                  n,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: w,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: w, crossOrigin: m.crossOrigin }
                ),
                (0, o.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...m, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === s &&
            n &&
            l.default.preload(
              n,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: w,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: w, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(b, "__nextScript", { value: !0 });
      let y = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    54652: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return i;
          },
          getImageProps: function () {
            return u;
          },
        });
      let r = n(28140),
        a = n(75040),
        o = n(81356),
        l = r._(n(71124));
      function u(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let i = o.Image;
    },
    55546: function (e, t, n) {
      var r =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var a = 0, r = Object.getOwnPropertySymbols(e);
                a < r.length;
                a++
              )
                0 > t.indexOf(r[a]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                  (n[r[a]] = e[r[a]]);
            return n;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleMapsEmbed = void 0);
      let o = a(n(26802)),
        l = n(15781);
      t.GoogleMapsEmbed = (e) => {
        var t = r(e, []);
        return (0, l.formatData)(o.default, t);
      };
    },
    57445: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: n = null,
            width: o = null,
            children: l,
            dataNtpc: u = "",
          } = e;
          return (
            (0, a.useEffect)(() => {
              u &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(u) },
                });
            }, [u]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                l,
                t
                  ? (0, r.jsx)("div", {
                      style: {
                        height: null != n ? "".concat(n, "px") : "auto",
                        width: null != o ? "".concat(o, "px") : "auto",
                      },
                      "data-ntpc": u,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        });
      let r = n(95155),
        a = n(12115);
    },
    68197: function (e, t, n) {
      var r =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var a = 0, r = Object.getOwnPropertySymbols(e);
                a < r.length;
                a++
              )
                0 > t.indexOf(r[a]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                  (n[r[a]] = e[r[a]]);
            return n;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = void 0);
      let o = a(n(23817)),
        l = n(15781);
      t.GoogleAnalytics = (e) => {
        var t = r(e, []);
        return (0, l.formatData)(o.default, t);
      };
    },
    68321: (e, t, n) => {
      n.r(t), n.d(t, { default: () => a.a });
      var r = n(41402),
        a = n.n(r),
        o = {};
      for (let e in r) "default" !== e && (o[e] = () => r[e]);
      n.d(t, o);
    },
    68332: (e, t, n) => {
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: u = "dataLayer",
            nonce: i,
          } = e;
          return (
            void 0 === r && (r = u),
            (0, o.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(l.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(u, "'] = window['")
                      .concat(
                        u,
                        "'] || [];\n          function gtag(){window['"
                      )
                      .concat(
                        u,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                      )
                      .concat(t, "' ")
                      .concat(n ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: i,
                }),
                (0, a.jsx)(l.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                  nonce: i,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === r)
            return void console.warn(
              "@next/third-parties: GA has not been initialized"
            );
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  r,
                  " does not exist"
                )
              );
        });
      let a = n(95155),
        o = n(12115),
        l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(68321));
    },
    76784: function (e, t, n) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent =
          t.GoogleAnalytics =
          t.sendGTMEvent =
          t.GoogleTagManager =
          t.YouTubeEmbed =
          t.GoogleMapsEmbed =
            void 0);
      var a = n(2037);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return r(a).default;
        },
      });
      var o = n(37577);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return r(o).default;
        },
      });
      var l = n(98202);
      Object.defineProperty(t, "GoogleTagManager", {
        enumerable: !0,
        get: function () {
          return l.GoogleTagManager;
        },
      }),
        Object.defineProperty(t, "sendGTMEvent", {
          enumerable: !0,
          get: function () {
            return l.sendGTMEvent;
          },
        });
      var u = n(68332);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return u.GoogleAnalytics;
        },
      }),
        Object.defineProperty(t, "sendGAEvent", {
          enumerable: !0,
          get: function () {
            return u.sendGAEvent;
          },
        });
    },
    83654: (e, t, n) => {
      var r = n(12115),
        a = n(14806),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        l = a.useSyncExternalStore,
        u = r.useRef,
        i = r.useEffect,
        s = r.useMemo,
        c = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
        var d = u(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var p = l(
          e,
          (d = s(
            function () {
              function e(e) {
                if (!i) {
                  if (
                    ((i = !0), (l = e), (e = r(e)), void 0 !== a && f.hasValue)
                  ) {
                    var t = f.value;
                    if (a(t, e)) return (u = t);
                  }
                  return (u = e);
                }
                if (((t = u), o(l, e))) return t;
                var n = r(e);
                return void 0 !== a && a(t, n)
                  ? ((l = e), t)
                  : ((l = e), (u = n));
              }
              var l,
                u,
                i = !1,
                s = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === s
                  ? void 0
                  : function () {
                      return e(s());
                    },
              ];
            },
            [t, n, r, a]
          ))[0],
          d[1]
        );
        return (
          i(
            function () {
              (f.hasValue = !0), (f.value = p);
            },
            [p]
          ),
          c(p),
          p
        );
      };
    },
    86475: (e, t, n) => {
      n.d(t, { U: () => i });
      var r = n(12115),
        a = n(59094),
        o = n(28698);
      class l extends o.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return "wagmi@2.17.5";
        }
      }
      class u extends l {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function i() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = null != (e = t.config) ? e : (0, r.useContext)(a.R);
        if (!n) throw new u();
        return n;
      }
    },
    88246: (e) => {
      e.exports = JSON.parse(
        '{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}'
      );
    },
    93438: function (e, t, n) {
      var r =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var a = 0, r = Object.getOwnPropertySymbols(e);
                a < r.length;
                a++
              )
                0 > t.indexOf(r[a]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                  (n[r[a]] = e[r[a]]);
            return n;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = void 0);
      let o = a(n(88246)),
        l = n(15781);
      t.YouTubeEmbed = (e) => {
        var t = r(e, []);
        return (0, l.formatData)(o.default, t);
      };
    },
    98202: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: u = "dataLayer",
            auth: i,
            preview: s,
            dataLayer: c,
            nonce: d,
          } = e;
          l = u;
          let f = "dataLayer" !== u ? "&l=".concat(u) : "";
          return (
            (0, a.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(o.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          c ? "w[l].push(".concat(JSON.stringify(c), ")") : "",
                          "\n      })(window,'"
                        )
                        .concat(u, "');"),
                  },
                  nonce: d,
                }),
                (0, r.jsx)(o.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(n, "?id=")
                    .concat(t)
                    .concat(f)
                    .concat(i ? "&gtm_auth=".concat(i) : "")
                    .concat(
                      s ? "&gtm_preview=".concat(s, "&gtm_cookies_win=x") : ""
                    ),
                  nonce: d,
                }),
              ],
            })
          );
        });
      let r = n(95155),
        a = n(12115),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(68321)),
        l = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || l;
        (window[n] = window[n] || []), window[n].push(e);
      };
    },
  },
]);
