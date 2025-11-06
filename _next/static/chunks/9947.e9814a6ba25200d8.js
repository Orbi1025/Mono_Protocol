"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9947],
  {
    99947: (e, t, n) => {
      n.d(t, { coinbaseWallet: () => s, safe: () => l });
      var i = n(2535),
        a = n(43159),
        r = n(77608),
        c = n(73168),
        o = n(34561);
      function s(e = {}) {
        var t, h;
        let d, l, u, w, m, g, p, f, v;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, i.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: s.type,
              async connect({ chainId: e, withCapabilities: t } = {}) {
                try {
                  let n = await this.getProvider(),
                    i = (
                      await n.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, r.b)(e));
                  u ||
                    ((u = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", u)),
                    w ||
                      ((w = this.onChainChanged.bind(this)),
                      n.on("chainChanged", w)),
                    m ||
                      ((m = this.onDisconnect.bind(this)),
                      n.on("disconnect", m));
                  let a = await this.getChainId();
                  if (e && a !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === c.vx.code) throw e;
                        return { id: a };
                      }
                    );
                    a = t?.id ?? a;
                  }
                  return {
                    accounts: t
                      ? i.map((e) => ({ address: e, capabilities: {} }))
                      : i,
                    chainId: a,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new c.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                u && (e.removeListener("accountsChanged", u), (u = void 0)),
                  w && (e.removeListener("chainChanged", w), (w = void 0)),
                  m && (e.removeListener("disconnect", m), (m = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, r.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!l) {
                  d = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(2183),
                      n.e(9466),
                    ]).then(n.t.bind(n, 2183, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let i = d.walletExtension?.getChainId(),
                    a =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === i
                      ) || e.chains[0],
                    r = t.chainId || a?.id,
                    c = t.jsonRpcUrl || a?.rpcUrls.default.http[0];
                  l = d.makeWeb3Provider(c, r);
                }
                return l;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let i = e.chains.find((e) => e.id === n);
                if (!i) throw new c.ch(new a.nk());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, o.cK)(i.id) }],
                    }),
                    i
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, a;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : i.blockExplorers?.default.url
                        ? [i.blockExplorers?.default.url]
                        : []),
                        (a = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [i.rpcUrls.default?.http[0] ?? ""]);
                      let c = {
                        blockExplorerUrls: e,
                        chainId: (0, o.cK)(n),
                        chainName: t?.chainName ?? i.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? i.nativeCurrency,
                        rpcUrls: a,
                      };
                      return (
                        await r.request({
                          method: "wallet_addEthereumChain",
                          params: [c],
                        }),
                        i
                      );
                    } catch (e) {
                      throw new c.vx(e);
                    }
                  throw new c.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, r.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                u && (n.removeListener("accountsChanged", u), (u = void 0)),
                  w && (n.removeListener("chainChanged", w), (w = void 0)),
                  m && (n.removeListener("disconnect", m), (m = void 0));
              },
            })))
          : ((h = e),
            (0, i.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: s.type,
              async connect({ chainId: e, withCapabilities: t, ...n } = {}) {
                try {
                  let i = await this.getProvider(),
                    a = (
                      await i.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in n && n.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, r.b)(e));
                  p ||
                    ((p = this.onAccountsChanged.bind(this)),
                    i.on("accountsChanged", p)),
                    f ||
                      ((f = this.onChainChanged.bind(this)),
                      i.on("chainChanged", f)),
                    v ||
                      ((v = this.onDisconnect.bind(this)),
                      i.on("disconnect", v));
                  let o = await this.getChainId();
                  if (e && o !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === c.vx.code) throw e;
                        return { id: o };
                      }
                    );
                    o = t?.id ?? o;
                  }
                  return {
                    accounts: t
                      ? a.map((e) => ({ address: e, capabilities: {} }))
                      : a,
                    chainId: o,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new c.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                p && (e.removeListener("accountsChanged", p), (p = void 0)),
                  f && (e.removeListener("chainChanged", f), (f = void 0)),
                  v && (e.removeListener("disconnect", v), (v = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, r.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!g) {
                  let t =
                      "string" == typeof h.preference
                        ? { options: h.preference }
                        : {
                            ...h.preference,
                            options: h.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: i } = await Promise.all([
                      n.e(837),
                      n.e(902),
                      n.e(5024),
                    ]).then(n.bind(n, 75024));
                  g = i({
                    ...h,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return g;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let i = e.chains.find((e) => e.id === n);
                if (!i) throw new c.ch(new a.nk());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, o.cK)(i.id) }],
                    }),
                    i
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, a;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : i.blockExplorers?.default.url
                        ? [i.blockExplorers?.default.url]
                        : []),
                        (a = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [i.rpcUrls.default?.http[0] ?? ""]);
                      let c = {
                        blockExplorerUrls: e,
                        chainId: (0, o.cK)(n),
                        chainName: t?.chainName ?? i.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? i.nativeCurrency,
                        rpcUrls: a,
                      };
                      return (
                        await r.request({
                          method: "wallet_addEthereumChain",
                          params: [c],
                        }),
                        i
                      );
                    } catch (e) {
                      throw new c.vx(e);
                    }
                  throw new c.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, r.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                p && (n.removeListener("accountsChanged", p), (p = void 0)),
                  f && (n.removeListener("chainChanged", f), (f = void 0)),
                  v && (n.removeListener("disconnect", v), (v = void 0));
              },
            })));
      }
      s.type = "coinbaseWallet";
      var h = n(93420),
        d = n(56674);
      function l(e = {}) {
        let t,
          a,
          { shimDisconnect: c = !1 } = e;
        return (0, i.U)((i) => ({
          id: "safe",
          name: "Safe",
          type: l.type,
          async connect({ withCapabilities: e } = {}) {
            let t = await this.getProvider();
            if (!t) throw new h.N();
            let n = await this.getAccounts(),
              r = await this.getChainId();
            return (
              a || ((a = this.onDisconnect.bind(this)), t.on("disconnect", a)),
              c && (await i.storage?.removeItem("safe.disconnected")),
              {
                accounts: e
                  ? n.map((e) => ({ address: e, capabilities: {} }))
                  : n,
                chainId: r,
              }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new h.N();
            a && (e.removeListener("disconnect", a), (a = void 0)),
              c && (await i.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new h.N();
            return (await e.request({ method: "eth_accounts" })).map(r.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: i } = await Promise.all([
                    n.e(7607),
                    n.e(1762),
                  ]).then(n.bind(n, 21762)),
                  a = new i(e),
                  r = await (0, d.w)(() => a.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!r) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([n.e(7607), n.e(5912)]).then(
                    n.t.bind(n, 15912, 19)
                  );
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(r, a);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new h.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (c && (await i.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            i.emitter.emit("disconnect");
          },
        }));
      }
      l.type = "safe";
    },
  },
]);
