(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    7622: (e, r, t) => {
      "use strict";
      t.d(r, { AuthContextProvider: () => l });
      var o = t(95155),
        a = t(12115),
        n = t(10886);
      let s = (0, a.createContext)({ isConnected: !1, address: null }),
        l = (e) => {
          let { children: r } = e,
            { isConnected: t, address: a } = (0, n.G8)();
          return (0, o.jsx)(s.Provider, {
            value: { isConnected: t, address: null != a ? a : null },
            children: r,
          });
        };
    },
    18141: (e, r, t) => {
      "use strict";
      t.d(r, { M: () => g, default: () => _ });
      var o = t(95155),
        a = t(67234),
        n = t(98594),
        s = t(17717),
        l = t(91691),
        d = t(34410);
      let c = "6ac2dea4b8f5a6a10bcdbf89ba780fa0";
      if (!c) throw Error("Reown Project ID is not defined");
      let i = [n.rCZ, n.NBY, n.vRv, n.n1, n.TqE, n.E3H],
        b = new a.D({
          storage: (0, s.wE)({ storage: l.iM }),
          ssr: !0,
          projectId: c,
          networks: i,
        }),
        f = {
          name: d.E$,
          description: d.$d,
          url: d._J,
          icons: ["".concat(d._J, "/images/logo.png")],
        },
        m = {
          adapters: [b],
          defaultNetwork: n.rCZ,
          projectId: c,
          networks: i,
          metadata: f,
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
      var u = t(10886),
        h = t(74852),
        v = t(99776),
        p = t(59094);
      let P = new h.E(),
        g = (0, u.sX)(m);
      function _(e) {
        let { children: r, cookies: t } = e,
          a = (0, l.T2)(b.wagmiConfig, t);
        return (0, o.jsx)(p.x, {
          config: b.wagmiConfig,
          initialState: a,
          children: (0, o.jsx)(v.Ht, { client: P, children: r }),
        });
      }
    },
    28963: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_f367f3",
      };
    },
    30795: (e, r, t) => {
      "use strict";
      t.d(r, { DataProvider: () => s, E: () => l });
      var o = t(95155),
        a = t(12115);
      let n = (0, a.createContext)(void 0),
        s = (e) => {
          let { children: r, userData: t } = e;
          return (0, o.jsx)(n.Provider, {
            value: { userData: t },
            children: r,
          });
        },
        l = () => {
          let e = (0, a.useContext)(n);
          if (!e) throw Error("");
          return e;
        };
    },
    34410: (e, r, t) => {
      "use strict";
      t.d(r, {
        $d: () => n,
        E$: () => a,
        hl: () => d,
        _J: () => s,
        _q: () => l,
      });
      var o = t(95704);
      let a = "MonoProtocol Dashboard",
        n =
          "Access your MonoProtocol Dashboard to manage your crypto portfolio and enjoy a streamlined user experience!",
        s = o.env.NEXT_PUBLIC_PROD_URL || "http://localhost:3000",
        l = "monoprotocol.com",
        d = "0.1.1";
    },
    44436: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 96199)),
        Promise.resolve().then(t.t.bind(t, 28963, 23)),
        Promise.resolve().then(t.bind(t, 86692)),
        Promise.resolve().then(t.t.bind(t, 73569, 23)),
        Promise.resolve().then(t.bind(t, 7622)),
        Promise.resolve().then(t.bind(t, 30795)),
        Promise.resolve().then(t.bind(t, 18141));
    },
    73569: () => {},
    86692: (e, r, t) => {
      "use strict";
      t.d(r, { Toaster: () => n });
      var o = t(95155),
        a = t(18720);
      let n = (e) => {
        let { ...r } = e;
        return (0, o.jsx)(a.l$, {
          theme: "light",
          className: "toaster group",
          style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
          },
          ...r,
        });
      };
    },
  },
  (e) => {
    e.O(0, [1146, 886, 1365, 7972, 8720, 6199, 6771, 8441, 1255, 7358], () =>
      e((e.s = 44436))
    ),
      (_N_E = e.O());
  },
]);
