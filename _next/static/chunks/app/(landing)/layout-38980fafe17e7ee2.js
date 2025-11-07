(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9980],
  {
    1024: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 74967));
    },
    6639: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var a = n(95155);
      n(40382);
      var l = n(52619),
        r = n.n(l),
        o = n(20063),
        s = n(12115);
      let i = (e) => {
          let {
              href: t,
              children: n,
              className: l,
              rel: s,
              onClick: i,
              disabled: c,
            } = e,
            d =
              (null == t ? void 0 : t.includes("http")) ||
              (null == t ? void 0 : t.includes(".pdf"))
                ? "_blank"
                : "",
            _ = (0, o.useSearchParams)().get("r");
          return (0, a.jsx)(r(), {
            onClick: i,
            href: (function (e, t) {
              if (!e || !t) return e;
              let [n, a] = (e || "").split("#"),
                [l, r] = (n || "").split("?"),
                o = new URLSearchParams(r || "");
              o.has("r") || o.append("r", t);
              let s = o.toString(),
                i = l;
              return s && (i += "?".concat(s)), a && (i += "#".concat(a)), i;
            })(t, _),
            target: d,
            rel: s,
            className: "link "
              .concat(l, " ")
              .concat(t ? "" : "inactive", " ")
              .concat(c ? "inactive" : ""),
            children: n,
          });
        },
        c = (e) =>
          (0, a.jsx)(s.Suspense, { children: (0, a.jsx)(i, { ...e }) });
    },
    17203: (e, t, n) => {
      "use strict";
      n.d(t, { ai: () => r, el: () => o, lP: () => l });
      var a = n(76784);
      let l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          window.fbq && window.fbq("track", e, t);
        },
        r = (e, t) => {
          let n = { ...e, event: t };
          (window.dataLayer && "function" == typeof window.dataLayer.push) ||
            (window.dataLayer = []),
            (0, a.sendGTMEvent)(n);
        },
        o = (e, t) => {
          window.gtag && window.gtag("event", e, t);
        };
    },
    18141: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => j, default: () => g });
      var a = n(95155),
        l = n(67234),
        r = n(98594),
        o = n(17717),
        s = n(91691),
        i = n(34410);
      let c = "6ac2dea4b8f5a6a10bcdbf89ba780fa0";
      if (!c) throw Error("Reown Project ID is not defined");
      let d = [r.rCZ, r.NBY, r.vRv, r.n1, r.TqE, r.E3H],
        _ = new l.D({
          storage: (0, o.wE)({ storage: s.iM }),
          ssr: !0,
          projectId: c,
          networks: d,
        }),
        h = {
          name: i.E$,
          description: i.$d,
          url: i._J,
          icons: ["".concat(i._J, "/images/logo.png")],
        },
        u = {
          adapters: [_],
          defaultNetwork: r.rCZ,
          projectId: c,
          networks: d,
          metadata: h,
          themeMode: "light",
          features: { connectMethodsOrder: ["wallet"], analytics: !0 },
          allWallets: "SHOW",
          themeVariables: { "--w3m-accent": "#000000" },
          termsConditionsUrl: "https://monoprotocol.ai/terms-conditions",
          privacyPolicyUrl: "https://monoprotocol.ai/privacy-policy",
          featuredWalletIds: [
            "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f",
            "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
            "cbc11415130d01316513f735eac34fd1ad7a5d40a993bbb6772d2c02eeef3df8",
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          ],
        };
      var f = n(10886),
        m = n(74852),
        p = n(99776),
        x = n(59094);
      let v = new m.E(),
        j = (0, f.sX)(u);
      function g(e) {
        let { children: t, cookies: n } = e,
          l = (0, s.T2)(_.wagmiConfig, n);
        return (0, a.jsx)(x.x, {
          config: _.wagmiConfig,
          initialState: l,
          children: (0, a.jsx)(p.Ht, { client: v, children: t }),
        });
      }
    },
    30795: (e, t, n) => {
      "use strict";
      n.d(t, { DataProvider: () => o, E: () => s });
      var a = n(95155),
        l = n(12115);
      let r = (0, l.createContext)(void 0),
        o = (e) => {
          let { children: t, userData: n } = e;
          return (0, a.jsx)(r.Provider, {
            value: { userData: n },
            children: t,
          });
        },
        s = () => {
          let e = (0, l.useContext)(r);
          if (!e) throw Error("");
          return e;
        };
    },
    31360: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => l });
      var a = n(12115);
      let l = () => {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let e = () => {
              t(window.innerWidth <= 768);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          e
        );
      };
    },
    32745: (e) => {
      e.exports = {
        levelup: "LevelUp_levelup__pQH0H",
        levelup_container: "LevelUp_levelup_container__Y9Gbt",
        levelup_content: "LevelUp_levelup_content__eD7Nu",
        levelup_image: "LevelUp_levelup_image__ATu0T",
        visible: "LevelUp_visible__XOz5C",
        image_1: "LevelUp_image_1__8yImf",
        image_2: "LevelUp_image_2__a5gTo",
        image_3: "LevelUp_image_3__njn_w",
        image_4: "LevelUp_image_4__jqrt4",
        image_5: "LevelUp_image_5__p_4al",
        image_6: "LevelUp_image_6__aTTIN",
        image_7: "LevelUp_image_7___r_pT",
        image_8: "LevelUp_image_8__NptGZ",
      };
    },
    33567: (e) => {
      e.exports = {
        header: "Header_header__LtlsR",
        container: "Header_container__dlpQE",
        navList: "Header_navList__9YY__",
        dashboardButton: "Header_dashboardButton__JJkOE",
        buttonsContainer: "Header_buttonsContainer__waGcC",
        signOutButton: "Header_signOutButton__E_LhU",
        address: "Header_address__tiwaM",
        tokenBalance: "Header_tokenBalance__Vo4as",
        menuButton: "Header_menuButton__U01gz",
        buttons: "Header_buttons__omx0I",
        buttonActive: "Header_buttonActive__w3_YA",
        containerActive: "Header_containerActive__rUXGF",
        walletInfo: "Header_walletInfo__Sviim",
        overlay: "Header_overlay__YIPD9",
        rewardHubLink: "Header_rewardHubLink__r_EZK",
        rewardHubLinkButton: "Header_rewardHubLinkButton__25p7J",
        "border-angle-rotate": "Header_border-angle-rotate__VRhRZ",
        balanceRow: "Header_balanceRow__mfEd3",
        balanceLabel: "Header_balanceLabel__a_l6I",
        balanceAmount: "Header_balanceAmount__2MjD8",
        addressRow: "Header_addressRow__AXTK6",
        addressLabel: "Header_addressLabel__6dweO",
        addressValue: "Header_addressValue__SsDt1",
        copyButton: "Header_copyButton__Fbl8R",
        divider: "Header_divider__JGEHD",
      };
    },
    34410: (e, t, n) => {
      "use strict";
      n.d(t, {
        $d: () => r,
        E$: () => l,
        hl: () => i,
        _J: () => o,
        _q: () => s,
      });
      var a = n(95704);
      let l = "MonoProtocol Dashboard",
        r =
          "Access your MonoProtocol Dashboard to manage your crypto portfolio and enjoy a streamlined user experience!",
        o = a.env.NEXT_PUBLIC_PROD_URL || "http://localhost:3000",
        s = "monoprotocol.com",
        i = "0.1.1";
    },
    40382: () => {},
    46218: () => {},
    61123: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var a = n(95155);
      n(46218);
      let l = (e) => {
        let { children: t, w100: n, white: l, transparent: r, ...o } = e;
        return (0, a.jsx)("button", {
          className: "button "
            .concat(n ? "w100" : "", " ")
            .concat(r ? "transparent" : "", " ")
            .concat(l ? "white" : ""),
          ...o,
          children: t,
        });
      };
    },
    74967: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => R });
      var a = n(95155),
        l = n(76784),
        r = n(31360),
        o = n(18141),
        s = n(17203),
        i = n(10886),
        c = n(12973),
        d = n(96199),
        _ = n(20063),
        h = n(12115),
        u = n(3063);
      function f() {
        let { disconnect: e } = (0, i.uP)(),
          t = (0, _.useRouter)();
        return {
          handleSignOut: (0, h.useCallback)(async () => {
            try {
              await e(), await (0, d.CI)({ redirect: !1 });
            } catch (e) {
              console.warn("Unexpected error while handling disconnection", e);
            }
            t.refresh();
          }, [e, t]),
        };
      }
      var m = n(34410),
        p = n(92253),
        x = n(15239),
        v = n(6639),
        j = n(61123),
        g = n(33567),
        b = n.n(g),
        w = n(30795);
      function N() {
        let e,
          [t, n] = (0, h.useState)(!1),
          { data: l } = (0, d.wV)(),
          { handleSignOut: r } = f(),
          o = (0, _.usePathname)(),
          { userData: s } = (0, w.E)(),
          i = async () => {
            (null == l ? void 0 : l.address) &&
              (await navigator.clipboard.writeText(l.address));
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            t &&
              (0, a.jsx)("div", {
                className: b().overlay,
                onClick: () => n(!1),
              }),
            (0, a.jsx)("header", {
              className: b().header,
              children: (0, a.jsxs)("div", {
                className: b().container + (t ? " " + b().containerActive : ""),
                children: [
                  (0, a.jsx)(v.default, {
                    href: "/",
                    children: (0, a.jsx)(x.default, {
                      src: "/images/logo.svg",
                      alt: "logo",
                      width: 102,
                      height: 47,
                    }),
                  }),
                  (0, a.jsxs)("ul", {
                    className: b().navList,
                    children: [
                      (null == l ? void 0 : l.address) &&
                        s &&
                        (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsxs)("li", {
                            className: b().walletInfo,
                            children: [
                              (0, a.jsxs)("div", {
                                className: b().balanceRow,
                                children: [
                                  (0, a.jsx)("span", {
                                    className: b().balanceLabel,
                                    children: "MONO balance",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: b().balanceAmount,
                                    children: [
                                      (0, a.jsx)("span", {
                                        children: s.tokenBalance,
                                      }),
                                      (0, a.jsx)(x.default, {
                                        src: "/images/hero/token.svg",
                                        alt: "MONO Token",
                                        width: 18,
                                        height: 18,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: b().addressRow,
                                children: [
                                  (0, a.jsx)("span", {
                                    className: b().addressLabel,
                                    children: "Wallet address",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: b().addressValue,
                                    children: [
                                      (0, a.jsx)("span", {
                                        children:
                                          ((e = l.address),
                                          ""
                                            .concat(e.slice(0, 6), "...")
                                            .concat(e.slice(-4))),
                                      }),
                                      (0, a.jsx)("button", {
                                        className: b().copyButton,
                                        onClick: i,
                                        children: (0, a.jsx)(x.default, {
                                          src: "/images/copy.svg",
                                          alt: "Copy",
                                          width: 16,
                                          height: 16,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("button", {
                                className: b().signOutButton,
                                onClick: r,
                                children: "SIGN OUT",
                              }),
                              (0, a.jsx)("li", { className: b().divider }),
                            ],
                          }),
                        }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsxs)(v.default, {
                          href: "/",
                          onClick: () => n(!1),
                          children: [
                            "Mono ",
                            (0, a.jsx)("span", { children: "Soon" }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)(v.default, {
                          href: "/#use-cases",
                          onClick: () => n(!1),
                          children: "About",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)(v.default, {
                          href: "/product",
                          onClick: () => n(!1),
                          children: "Product",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)(v.default, {
                          href: "/#roadmap",
                          onClick: () => n(!1),
                          children: "Roadmap",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)(v.default, {
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xc7313ade1f0febb9dec29e48d5302e679146c676",
                          onClick: () => n(!1),
                          className: b().rewardHubLink,
                          children: (0, a.jsxs)("div", {
                            className: b().rewardHubLinkButton,
                            children: [
                              "Chart",
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: b().buttons,
                    children: [
                      (null == l ? void 0 : l.address)
                        ? (0, a.jsxs)("div", {
                            className: b().buttonsContainer,
                            children: [
                              s &&
                                (0, a.jsxs)("div", {
                                  className: b().tokenBalance,
                                  children: [
                                    (0, a.jsx)("span", {
                                      children: s.tokenBalance,
                                    }),
                                    (0, a.jsx)(x.default, {
                                      src: "/images/hero/token.svg",
                                      alt: "MONO Token",
                                      width: 18,
                                      height: 18,
                                    }),
                                  ],
                                }),
                              (0, a.jsx)("div", {
                                className: b().address,
                                children:
                                  (null == l ? void 0 : l.address.slice(0, 6)) +
                                  "..." +
                                  (null == l ? void 0 : l.address.slice(-4)),
                              }),
                              (0, a.jsx)(j.A, {
                                className: b().signOutButton,
                                onClick: r,
                                children: "",
                              }),
                              ("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xc7313ade1f0febb9dec29e48d5302e679146c676" !== o &&
                                (0, a.jsx)(v.default, {
                                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xc7313ade1f0febb9dec29e48d5302e679146c676",
                                  onClick: () => n(!1),
                                  children: (0, a.jsx)(j.A, {
                                    children: "Buy Now",
                                  }),
                                })) ||
                                (0, a.jsx)(v.default, {
                                  href: "https://dashboard.monoprotocol.com",
                                  rel: "noopener noreferrer",
                                  onClick: () => n(!1),
                                  children: (0, a.jsx)(j.A, {
                                    className: b().dashboardButton,
                                    children: "Dashboard",
                                  }),
                                }),
                            ],
                          })
                        : ("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xc7313ade1f0febb9dec29e48d5302e679146c676" !== o &&
                            (0, a.jsx)(v.default, {
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xc7313ade1f0febb9dec29e48d5302e679146c676",
                              onClick: () => n(!1),
                              children: (0, a.jsx)(j.A, {
                                children: "Buy Now",
                              }),
                            })) ||
                          (0, a.jsx)(v.default, {
                            href: "https://dashboard.monoprotocol.com",
                            rel: "noopener noreferrer",
                            onClick: () => n(!1),
                            children: (0, a.jsx)(j.A, {
                              className: b().dashboardButton,
                              children: "Dashboard",
                            }),
                          }),
                      (0, a.jsx)("button", {
                        className:
                          b().menuButton + (t ? " " + b().buttonActive : ""),
                        onClick: () => {
                          n(!t);
                        },
                        children: (0, a.jsx)(x.default, {
                          src: t
                            ? "/images/menu-close.svg"
                            : "/images/menu.svg",
                          alt: "menu",
                          width: 24,
                          height: 24,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var k = n(92987),
        C = n.n(k);
      function y() {
        return (0, a.jsx)("footer", {
          className: C().footer,
          children: (0, a.jsxs)("div", {
            className: C().footer_container,
            children: [
              (0, a.jsxs)("div", {
                className: C().footer_content,
                children: [
                  (0, a.jsxs)("div", {
                    className: C().footer_content_left,
                    children: [
                      (0, a.jsx)("div", {
                        className: C().footer_content_logo,
                        children: (0, a.jsx)(x.default, {
                          src: "/images/logo.webp",
                          alt: "Mono Protocol",
                          width: 151,
                          height: 37,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: C().footer_content_description,
                        children: (0, a.jsx)("p", {
                          children: "ONE BALANCE. ANY CHAIN.",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: C().footer_content_button,
                        children: (0, a.jsx)(v.default, {
                          href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xc7313ade1f0febb9dec29e48d5302e679146c676",
                          rel: "noopener noreferrer",
                          children: (0, a.jsx)(j.A, {
                            children: "Buy Now",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: C().footer_content_links_items,
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().footer_content_links_item,
                        children: [
                          (0, a.jsx)("div", {
                            className: C().footer_content_links_title,
                            children: (0, a.jsx)("p", { children: "Product" }),
                          }),
                          (0, a.jsxs)("ul", {
                            className: C().footer_content_links_list,
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "/product/liquidity-locks",
                                  children: "Liquidity Locks",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "/product/chain-abstracted",
                                  children: "Chain-Abstracted Swap",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "/product/mono-balances",
                                  children: "Mono Balances",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "/product/account-architecture",
                                  children: "Account Architecture",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "/product/fees-and-monetization",
                                  children: "Fees & Monetization",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "/product/full-token-support",
                                  children: "Full Token Support",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: C().footer_content_links_item,
                        children: [
                          (0, a.jsx)("div", {
                            className: C().footer_content_links_title,
                            children: (0, a.jsx)("p", { children: "Socials" }),
                          }),
                          (0, a.jsxs)("ul", {
                            className: C().footer_content_links_list,
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "https://x.com/MonoProtocoleth",
                                  children: "X",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(v.default, {
                                  href: "https://t.me/MonoProtocoleth",
                                  children: "Telegram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: C().footer_reserved,
                children: "\xa9 Mono Protocol 2025",
              }),
            ],
          }),
        });
      }
      var E = n(32745),
        L = n.n(E),
        H = n(74570),
        A = n(18344),
        P = n(83531);
      function B() {
        let e = h.useRef(null);
        (0, H.W)(e, { once: !0 });
        let t = "MONO + You.",
          [n, l] = (0, h.useState)(null),
          r = (0, A.E)();
        return (
          (0, h.useEffect)(() => {
            let e = !0;
            return (
              (async () => {
                for (
                  ;
                  e &&
                  (await r.start((e) => ({
                    opacity: 1,
                    transition: {
                      delay: 0.05 * e,
                      duration: 0.15,
                      ease: "easeOut",
                    },
                  })),
                  await new Promise((e) => setTimeout(e, 1400)),
                  e);

                )
                  await r.start((e) => ({
                    opacity: 0,
                    transition: {
                      delay: (t.length - 1 - e) * 0.05,
                      duration: 0.12,
                      ease: "easeIn",
                    },
                  })),
                    await new Promise((e) => setTimeout(e, 600));
              })(),
              () => {
                e = !1;
              }
            );
          }, [r, t]),
          (0, a.jsx)("section", {
            className: L().levelup,
            id: "levelup",
            children: (0, a.jsx)("div", {
              className: L().levelup_container,
              children: (0, a.jsxs)("div", {
                className: L().levelup_content,
                children: [
                  (0, a.jsx)("div", {
                    className: L().levelup_title,
                    children: (0, a.jsx)("h2", {
                      ref: e,
                      className:
                        "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
                      children: t
                        .split("")
                        .map((e, t) =>
                          (0, a.jsx)(
                            P.P.span,
                            {
                              custom: t,
                              initial: { opacity: 0 },
                              animate: r,
                              style: { display: "inline-block" },
                              onMouseEnter: () =>
                                l(
                                  {
                                    0: 1,
                                    1: 2,
                                    2: 3,
                                    3: 4,
                                    4: null,
                                    5: 5,
                                    6: null,
                                    7: 6,
                                    8: 7,
                                    9: 7,
                                    10: 7,
                                  }[t] || null
                                ),
                              onMouseLeave: () => l(null),
                              children: e,
                            },
                            t
                          )
                        ),
                    }),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/levelup1.webp",
                    alt: "LevelUp",
                    width: 135,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_1, " ")
                      .concat(1 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/clod.png",
                    alt: "clod",
                    width: 135,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_2, " ")
                      .concat(2 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/arrayСube.png",
                    alt: "arrayСube",
                    width: 135,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_3, " ")
                      .concat(3 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/levelup2.webp",
                    alt: "LevelUp",
                    width: 133,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_4, " ")
                      .concat(4 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/cylinder.png",
                    alt: "cylinder",
                    width: 135,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_5, " ")
                      .concat(5 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/sponge.png",
                    alt: "sponge",
                    width: 135,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_6, " ")
                      .concat(6 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/levelup3.webp",
                    alt: "LevelUp",
                    width: 161,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_7, " ")
                      .concat(7 === n ? L().visible : ""),
                  }),
                  (0, a.jsx)(x.default, {
                    src: "/images/levelup/flower.png",
                    alt: "flower",
                    width: 135,
                    height: 130,
                    className: ""
                      .concat(L().levelup_image, " ")
                      .concat(L().image_8, " ")
                      .concat(8 === n ? L().visible : ""),
                  }),
                ],
              }),
            }),
          })
        );
      }
      function U() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(B, {}), (0, a.jsx)(y, {})],
        });
      }
      var O = n(95704);
      function R(e) {
        let { children: t } = e,
          n = (0, r.a)(),
          x = (0, i.Ks)(),
          v = (0, _.useRouter)(),
          { data: j, status: g } = (0, d.wV)(),
          [b, w] = (0, h.useState)(0),
          { address: k, isConnected: C } = (0, u.F)(),
          { handleSignOut: y } = f(),
          [E, L] = (0, h.useState)(!1),
          [H, A] = (0, h.useState)(null),
          P = (0, h.useCallback)(() => {
            n ||
              p.v1 ||
              setTimeout(() => {
                window.location.href = "https://".concat(m._q);
              }, 1500);
          }, [n]);
        return (
          (0, h.useEffect)(() => {
            if (
              window.location.hostname === m._q ||
              "true" === O.env.NEXT_PUBLIC_TW_REDIRECT_DISABLED ||
              n ||
              p.v1
            )
              return;
            let e = o.M;
            if (e && e.connectionControllerClient) {
              let t = e.connectionControllerClient.connectWalletConnect,
                n = e.connectionControllerClient.connectExternal,
                a = e.connectionControllerClient.reconnectExternal,
                l = function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  let a = !1;
                  return (
                    t.forEach((e) => {
                      if (!a && e && "Trust Wallet" === e.name) {
                        (a = !0), P();
                        return;
                      }
                    }),
                    a
                  );
                };
              return (
                (e.connectionControllerClient.connectWalletConnect =
                  async function () {
                    for (
                      var n = arguments.length, a = Array(n), r = 0;
                      r < n;
                      r++
                    )
                      a[r] = arguments[r];
                    if (!l(...a))
                      return t.apply(e.connectionControllerClient, a);
                  }),
                (e.connectionControllerClient.connectExternal =
                  async function () {
                    for (
                      var t = arguments.length, a = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      a[r] = arguments[r];
                    if (!l(...a))
                      return n.apply(e.connectionControllerClient, a);
                  }),
                (e.connectionControllerClient.reconnectExternal =
                  async function () {
                    for (
                      var t = arguments.length, n = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    if (!l(...n))
                      return a.apply(e.connectionControllerClient, n);
                  }),
                () => {
                  e.connectionControllerClient &&
                    ((e.connectionControllerClient.connectWalletConnect = t),
                    (e.connectionControllerClient.connectExternal = n),
                    (e.connectionControllerClient.reconnectExternal = a));
                }
              );
            }
          }, [x, P, n]),
          (0, h.useEffect)(() => {
            !(async function () {
              x.timestamp <= b ||
                (console.info("AppKit event", {
                  event: {
                    timestamp: x.timestamp,
                    reportedErrors: { ...x.reportedErrors },
                    data: { ...x.data },
                  },
                }),
                "CONNECT_ERROR" === x.data.event &&
                  (console.error(
                    "Error while connecting wallet",
                    x.data.properties.message
                  ),
                  (0, c.u4)("Lead -> Connect Wallet -> Error", {
                    error: x.data.properties.message,
                  })));
            })();
          }, [x, v, b, j, k, y, C]),
          (0, h.useEffect)(() => {
            j &&
              m.hl !== localStorage.getItem("mono-app-version") &&
              (localStorage.setItem("mono-app-version", m.hl), y());
          }, [j, y]),
          (0, h.useEffect)(() => {
            !(async function () {
              let e = "unauthenticated" === g || !j;
              if ("unauthenticated" === g && e && C && !E && k) {
                try {
                  let e = "";
                  try {
                    e =
                      new URLSearchParams(window.location.search).get("r") ||
                      "";
                  } catch (t) {
                    console.error("Error while getting referral", t), (e = "");
                  }
                  L(!0);
                  let t = await (0, d.Jv)("credentials", {
                    address: k,
                    referral: e,
                    redirect: !1,
                  });
                  if (null == t ? void 0 : t.ok) {
                    try {
                      let t = { address: k, referral: e };
                      (0, c.u4)("Lead -> Connect Wallet -> Success", t),
                        (0, s.ai)(t, "wallet"),
                        (0, s.lP)("Lead"),
                        (0, s.el)("wallet");
                    } catch (e) {
                      console.warn("Error while tracking event", e);
                    }
                    v.refresh(),
                      w(x.timestamp),
                      localStorage.setItem("mono-app-version", m.hl);
                  } else y();
                } catch (e) {
                  console.error("Error while signing in", e), y();
                }
                L(!1);
              }
            })();
          }, [g, j, C, k, y, v, x, E]),
          (0, h.useEffect)(() => {
            !(async function () {
              let e = "authenticated" === g && !!j,
                t = null == j ? void 0 : j.address;
              if (e && t && H !== t)
                try {
                  await fetch("/api/quests/start-required", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: t }),
                  });
                } catch (e) {
                  console.error("Failed to start required quests", e);
                } finally {
                  A(t);
                }
            })();
          }, [g, j, H]),
          (0, a.jsx)("html", {
            lang: "en",
            children: (0, a.jsxs)("body", {
              children: [
                (0, a.jsx)(N, {}),
                (0, a.jsx)(l.GoogleTagManager, { gtmId: "GTM-5RPRBPB6" }),
                t,
                (0, a.jsx)(U, {}),
              ],
            }),
          })
        );
      }
    },
    92987: (e) => {
      e.exports = {
        footer: "Footer_footer__0HZ_O",
        footer_container: "Footer_footer_container__AUUBh",
        footer_content: "Footer_footer_content__03Ihq",
        footer_content_left: "Footer_footer_content_left__tNABg",
        footer_content_description: "Footer_footer_content_description__BdkMr",
        footer_content_button: "Footer_footer_content_button__h6HlR",
        footer_content_links_items: "Footer_footer_content_links_items__WPqye",
        footer_content_links_item: "Footer_footer_content_links_item__GHM9q",
        footer_content_links_title: "Footer_footer_content_links_title__VGM1B",
        footer_content_links_list: "Footer_footer_content_links_list__orOJ2",
        footer_reserved: "Footer_footer_reserved__UbjPR",
        externalArrow: "Footer_externalArrow__Ppd_V",
      };
    },
  },
  (e) => {
    e.O(
      0,
      [
        4126, 4411, 2619, 1356, 886, 1365, 7972, 6199, 6771, 3999, 1483, 8441,
        1255, 7358,
      ],
      () => e((e.s = 1024))
    ),
      (_N_E = e.O());
  },
]);
