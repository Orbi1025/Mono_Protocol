"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6771],
  {
    2535: (e, t, n) => {
      n.d(t, { U: () => i });
      function i(e) {
        return e;
      }
    },
    17717: (e, t, n) => {
      n.d(t, { wE: () => o, XB: () => d });
      var i = n(48996);
      function r(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function a(e, t) {
        let { length: n } = e;
        for (let i = 0; i < n; ++i) if (e[i] === t) return i + 1;
        return 0;
      }
      function s(e, t, n, i) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              i = "function" == typeof t,
              s = [],
              o = [];
            return function (c, d) {
              if ("object" == typeof d)
                if (s.length) {
                  let e = a(s, this);
                  0 === e ? (s[s.length] = this) : (s.splice(e), o.splice(e)),
                    (o[o.length] = c);
                  let n = a(s, d);
                  if (0 !== n)
                    return i ? t.call(this, c, d, r(o, n)) : `[ref=${r(o, n)}]`;
                } else (s[0] = d), (o[0] = c);
              return n ? e.call(this, c, d) : d;
            };
          })((e, n) => {
            let i = n;
            return (
              "bigint" == typeof i &&
                (i = { __type: "bigint", value: n.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, i) ?? i
            );
          }, i),
          n ?? void 0
        );
      }
      function o(e) {
        let {
          deserialize: t = i.i,
          key: n = "wagmi",
          serialize: r = s,
          storage: a = c,
        } = e;
        function o(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...a,
          key: n,
          async getItem(e, i) {
            let r = a.getItem(`${n}.${e}`),
              s = await o(r);
            return s ? t(s) ?? null : i ?? null;
          },
          async setItem(e, t) {
            let i = `${n}.${e}`;
            null === t ? await o(a.removeItem(i)) : await o(a.setItem(i, r(t)));
          },
          async removeItem(e) {
            await o(a.removeItem(`${n}.${e}`));
          },
        };
      }
      let c = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      function d() {
        let e =
          "undefined" != typeof window && window.localStorage
            ? window.localStorage
            : c;
        return {
          getItem: (t) => e.getItem(t),
          removeItem(t) {
            e.removeItem(t);
          },
          setItem(t, n) {
            try {
              e.setItem(t, n);
            } catch {}
          },
        };
      }
    },
    48996: (e, t, n) => {
      n.d(t, { i: () => i });
      function i(e, t) {
        return JSON.parse(e, (e, n) => {
          let i = n;
          return (
            i?.__type === "bigint" && (i = BigInt(i.value)),
            i?.__type === "Map" && (i = new Map(i.value)),
            t?.(e, i) ?? i
          );
        });
      }
    },
    67234: (e, t, n) => {
      let i;
      n.d(t, { D: () => e_ });
      var r = n(96748),
        a = n(95089);
      let s = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => s(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => s(t)(e),
            };
          }
        },
        o = (e) => {
          let t,
            n = new Set(),
            i = (e, i) => {
              let r = "function" == typeof e ? e(t) : e;
              if (!Object.is(r, t)) {
                let e = t;
                (t = (null != i ? i : "object" != typeof r || null === r)
                  ? r
                  : Object.assign({}, t, r)),
                  n.forEach((n) => n(t, e));
              }
            },
            r = () => t,
            a = {
              setState: i,
              getState: r,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            s = (t = e(i, r, a));
          return a;
        },
        c = (e) => (e ? o(e) : o);
      var d = n(77608),
        l = n(73168),
        u = n(56674),
        h = n(37407),
        m = n(34561),
        f = n(43159),
        g = n(93420),
        p = n(2535);
      function w(e = {}) {
        let t,
          n,
          i,
          r,
          { shimDisconnect: a = !0, unstable_shimAsyncInject: s } = e;
        function o() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(C[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, p.U)((c) => ({
          get icon() {
            return o().icon;
          },
          get id() {
            return o().id;
          },
          get name() {
            return o().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: w.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (i || ((i = this.onConnect.bind(this)), n.on("connect", i)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({
            chainId: s,
            isReconnecting: o,
            withCapabilities: u,
          } = {}) {
            let h = await this.getProvider();
            if (!h) throw new g.N();
            let m = [];
            if (o) m = await this.getAccounts().catch(() => []);
            else if (a)
              try {
                let e = await h.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (m = e[0]?.caveats?.[0]?.value?.map((e) => (0, d.b)(e)))
                  .length > 0 && (m = await this.getAccounts());
              } catch (e) {
                if (e.code === l.vx.code) throw new l.vx(e);
                if (e.code === l.qZ.code) throw e;
              }
            try {
              m?.length ||
                o ||
                (m = (await h.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, d.b)(e)
                )),
                i && (h.removeListener("connect", i), (i = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  h.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  h.on("chainChanged", n)),
                r ||
                  ((r = this.onDisconnect.bind(this)), h.on("disconnect", r));
              let f = await this.getChainId();
              if (s && f !== s) {
                let e = await this.switchChain({ chainId: s }).catch((e) => {
                  if (e.code === l.vx.code) throw e;
                  return { id: f };
                });
                f = e?.id ?? f;
              }
              return (
                a && (await c.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await c.storage?.setItem("injected.connected", !0)),
                {
                  accounts: u
                    ? m.map((e) => ({ address: e, capabilities: {} }))
                    : m,
                  chainId: f,
                }
              );
            } catch (e) {
              if (e.code === l.vx.code) throw new l.vx(e);
              if (e.code === l.qZ.code) throw new l.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new g.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              r && (t.removeListener("disconnect", r), (r = void 0)),
              i || ((i = this.onConnect.bind(this)), t.on("connect", i));
            try {
              await (0, u.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            a && (await c.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await c.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new g.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, d.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new g.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = o();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? y(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (a && (await c.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await c.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== s && !1 !== s) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof s ? s : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new g.N();
              }
              return !!(await (0, h.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new g.N();
            let i = c.chains.find((e) => e.id === t);
            if (!i) throw new l.ch(new f.nk());
            let r = new Promise((e) => {
              let n = (i) => {
                "chainId" in i &&
                  i.chainId === t &&
                  (c.emitter.off("change", n), e());
              };
              c.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, m.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        c.emitter.emit("change", { chainId: t });
                    }),
                  r,
                ]),
                i
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    s,
                    { default: o, ...d } = i.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : o && (a = [o.url, ...Object.values(d).map((e) => e.url)]),
                    (s = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [i.rpcUrls.default?.http[0] ?? ""]);
                  let u = {
                    blockExplorerUrls: a,
                    chainId: (0, m.cK)(t),
                    chainName: e?.chainName ?? i.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                    rpcUrls: s,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [u],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            c.emitter.emit("change", { chainId: t });
                          else
                            throw new l.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      r,
                    ]),
                    i
                  );
                } catch (e) {
                  throw new l.vx(e);
                }
              if (a.code === l.vx.code) throw new l.vx(a);
              throw new l.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (c.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                a && (await c.storage?.removeItem(`${this.id}.disconnected`));
            } else
              c.emitter.emit("change", { accounts: e.map((e) => (0, d.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            c.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let a = await this.getAccounts();
            if (0 === a.length) return;
            let s = Number(e.chainId);
            c.emitter.emit("connect", { accounts: a, chainId: s });
            let o = await this.getProvider();
            o &&
              (i && (o.removeListener("connect", i), (i = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), o.on("chainChanged", n)),
              r || ((r = this.onDisconnect.bind(this)), o.on("disconnect", r)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (c.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                r && (t.removeListener("disconnect", r), (r = void 0)),
                i || ((i = this.onConnect.bind(this)), t.on("connect", i))));
          },
        }));
      }
      w.type = "injected";
      let C = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : y(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            y(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : y(e, "isPhantom"),
        },
      };
      function y(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let i = e.ethereum;
        return i?.providers
          ? i.providers.find((e) => n(e))
          : i && n(i)
          ? i
          : void 0;
      }
      var v = n(68463);
      class b {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new v.b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      var I = n(17717);
      let E = 256;
      var N = n(46465),
        P = n(49072),
        A = n(21681),
        _ = n(86161);
      let O = [];
      function S(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, _.b)(O, t)
          ? O
          : ((O = t), t);
      }
      var k = n(61405),
        T = n(36369),
        q = n(29899);
      async function R(e, t) {
        let n,
          { account: i, connector: r, ...a } = t;
        return (
          (n =
            "object" == typeof i && "local" === i.type
              ? e.getClient()
              : await (0, q.r)(e, { account: i, connector: r })),
          (0, A.T)(
            n,
            T.l,
            "signMessage"
          )({ ...a, ...(i ? { account: i } : {}) })
        );
      }
      var M = n(31063);
      async function D(e, t) {
        let { account: n, chainId: i, ...a } = t,
          s = n ?? (0, r.s)(e).address,
          o = e.getClient({ chainId: i });
        return (0, A.T)(
          o,
          M.ft,
          "prepareTransactionRequest"
        )({ ...a, ...(s ? { account: s } : {}) });
      }
      var x = n(37219);
      async function j(e, t) {
        let n,
          { account: i, chainId: r, connector: a, ...s } = t;
        n =
          "object" == typeof i && i?.type === "local"
            ? e.getClient({ chainId: r })
            : await (0, q.r)(e, {
                account: i ?? void 0,
                assertChainId: !1,
                chainId: r,
                connector: a,
              });
        let o = (0, A.T)(n, x.v, "sendTransaction");
        return await o({
          ...s,
          ...(i ? { account: i } : {}),
          chain: r ? { id: r } : null,
          gas: s.gas ?? void 0,
        });
      }
      var L = n(11914),
        W = n(52497),
        U = n(83759),
        Q = n(3972);
      async function H(e, t) {
        let { chainId: n, timeout: i = 0, ...r } = t,
          a = e.getClient({ chainId: n }),
          s = (0, A.T)(a, W.n, "waitForTransactionReceipt"),
          o = await s({ ...r, timeout: i });
        if ("reverted" === o.status) {
          let e = (0, A.T)(a, U.x, "getTransaction"),
            t = await e({ hash: o.transactionHash }),
            n = (0, A.T)(a, Q.T, "call"),
            i = await n({
              ...t,
              data: t.input,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            i?.data ? (0, L.IQ)(`0x${i.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...o, chainId: a.chain.id };
      }
      var F = n(66576);
      async function $(e, t) {
        let n,
          { account: i, chainId: r, connector: a, ...s } = t;
        n =
          "object" == typeof i && i?.type === "local"
            ? e.getClient({ chainId: r })
            : await (0, q.r)(e, {
                account: i ?? void 0,
                assertChainId: !1,
                chainId: r,
                connector: a,
              });
        let o = (0, A.T)(n, F.E, "writeContract");
        return await o({
          ...s,
          ...(i ? { account: i } : {}),
          chain: r ? { id: r } : null,
        });
      }
      var K = n(34897);
      async function G(e, t) {
        let n,
          { chainId: i, connector: r, ...a } = t;
        n = t.account
          ? t.account
          : (
              await (0, q.r)(e, {
                account: t.account,
                assertChainId: !1,
                chainId: i,
                connector: r,
              })
            ).account;
        let s = e.getClient({ chainId: i });
        return (0, A.T)(s, K.Q, "estimateGas")({ ...a, account: n });
      }
      async function B(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new f.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: i, ...r } = t,
            a = await n.connect(r);
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: r.withCapabilities
                  ? a.accounts.map((e) =>
                      "object" == typeof e ? e.address : e
                    )
                  : a.accounts,
                chainId: a.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            {
              accounts: r.withCapabilities
                ? a.accounts.map((e) =>
                    "object" == typeof e ? e : { address: e, capabilities: {} }
                  )
                : a.accounts,
              chainId: a.chainId,
            }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var z = n(21340),
        V = n(31464),
        J = n(15935);
      async function X(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: i } = e.state,
            r = t.get(i);
          n = r?.connector;
        }
        let i = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          i.delete(n.uid)),
          e.setState((e) => {
            if (0 === i.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = i.values().next().value;
            return { ...e, connections: new Map(i), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var Z = n(65028),
        Y = n(30598);
      n(59233);
      var ee = n(19816),
        et = n(79530),
        en = n(45553),
        ei = n(76190),
        er = n(12319),
        ea = n(58653),
        es = n(55480),
        eo = n(93481),
        ec = n(55283),
        ed = n(75578),
        el = n(79355),
        eu = n(48241),
        eh = n(10763),
        em = n(71305),
        ef = n(52502),
        eg = n(67243),
        ep = n(10899),
        ew = n(89600),
        eC = n(72289);
      function ey(e, t) {
        let n,
          i,
          r,
          a,
          s,
          o,
          c,
          u = e.isNewChainsStale ?? !0;
        return (0, p.U)((e) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: ey.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (a || ((a = this.onConnect.bind(this)), e.on("connect", a)),
              o ||
                ((o = this.onSessionDelete.bind(this)),
                e.on("session_delete", o)));
          },
          async connect({ ...e } = {}) {
            try {
              let t = eo.W.getCaipNetworks(),
                n = await this.getProvider();
              if (!n) throw new g.N();
              s || ((s = this.onDisplayUri), n.on("display_uri", s));
              let d = await this.isChainsStale();
              n.session && d && (await n.disconnect());
              let l = es.H.state.universalProviderConfigOverride;
              if (!n.session || d) {
                let i = ee.kl.createNamespaces(t, l);
                await n.connect({
                  optionalNamespaces: i,
                  ...("pairingTopic" in e
                    ? { pairingTopic: e.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(t.map((e) => Number(e.id)));
              }
              let u = await this.getAccounts(),
                h = await this.getChainId(),
                m = n.session?.namespaces?.eip155?.chains,
                f = m?.some((e) => Number(e.split(":")[1]) === h),
                p = 1;
              f ? (p = h) : m?.[0] && (p = Number(m[0].split(":")[1])),
                s && (n.removeListener("display_uri", s), (s = void 0)),
                a && (n.removeListener("connect", a), (a = void 0)),
                i ||
                  ((i = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", i)),
                r ||
                  ((r = this.onChainChanged.bind(this)),
                  n.on("chainChanged", r)),
                c ||
                  ((c = this.onDisconnect.bind(this)), n.on("disconnect", c)),
                o ||
                  ((o = this.onSessionDelete.bind(this)),
                  n.on("session_delete", o));
              let w = l?.defaultChain;
              return (
                n.setDefaultChain(w ?? `eip155:${p}`),
                { accounts: u, chainId: p }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new l.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              r && (e?.removeListener("chainChanged", r), (r = void 0)),
                c && (e?.removeListener("disconnect", c), (c = void 0)),
                a || ((a = this.onConnect.bind(this)), e?.on("connect", a)),
                i && (e?.removeListener("accountsChanged", i), (i = void 0)),
                o && (e?.removeListener("session_delete", o), (o = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e?.session?.namespaces) return [];
            let t = e?.session?.namespaces[en.o.CHAIN.EVM]?.accounts,
              n = t?.map((e) => e.split(":")[2]) ?? [],
              i = new Set();
            return n.filter((e) => {
              let t = e?.toLowerCase();
              return !i.has(t) && (i.add(t), !0);
            });
          },
          async getProvider({ chainId: e } = {}) {
            n ||
              ((n = await t.getUniversalProvider()),
              n?.events.setMaxListeners(1 / 0));
            let i = ea.i.getActiveNamespace(),
              r = t.getCaipNetwork()?.id;
            if (e && r !== e && i) {
              let e = ea.i.getStoredActiveCaipNetworkId(),
                n = i ? t.getCaipNetworks(i) : [],
                r = n?.find((t) => t.id === e);
              r &&
                r.chainNamespace === en.o.CHAIN.EVM &&
                (await this.switchChain?.({ chainId: Number(r.id) }));
            }
            return n;
          },
          async getChainId() {
            let e = t.getCaipNetwork(en.o.CHAIN.EVM)?.id;
            if (e) return e;
            let n = await this.getProvider(),
              i = n.session?.namespaces[en.o.CHAIN.EVM]?.chains?.[0],
              r = eo.W.getCaipNetworks().find((e) => e.id === i);
            return r?.id;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: t, chainId: n }) {
            let i = await this.getProvider();
            if (!i) throw new g.N();
            let r = eo.W.getCaipNetworks().find((e) => e.id === n);
            if (!r) throw new l.ch(new f.nk());
            try {
              await i.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, m.cK)(n) }],
              }),
                r?.caipNetworkId && i.setDefaultChain(r?.caipNetworkId),
                e.emitter.emit("change", { chainId: Number(n) });
              let t = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...t, n]), { ...r, id: r.id };
            } catch (e) {
              if (/(?:user rejected)/iu.test(e.message)) throw new l.vx(e);
              try {
                let e;
                e = t?.blockExplorerUrls
                  ? t.blockExplorerUrls
                  : r.blockExplorers?.default.url
                  ? [r.blockExplorers?.default.url]
                  : [];
                let a = r.rpcUrls?.chainDefault?.http || [],
                  s = {
                    blockExplorerUrls: e,
                    chainId: (0, m.cK)(n),
                    chainName: r.name,
                    iconUrls: t?.iconUrls,
                    nativeCurrency: r.nativeCurrency,
                    rpcUrls: a,
                  };
                await i.request({
                  method: "wallet_addEthereumChain",
                  params: [s],
                });
                let o = await this.getRequestedChainsIds();
                return (
                  this.setRequestedChainsIds([...o, n]), { ...r, id: r.id }
                );
              } catch (e) {
                throw new l.vx(e);
              }
            }
          },
          onAccountsChanged(t) {
            0 === t.length
              ? this.onDisconnect()
              : e.emitter.emit("change", {
                  accounts: t.map((e) => (0, d.b)(e)),
                });
          },
          onChainChanged(t) {
            let n = Number(t);
            e.emitter.emit("change", { chainId: n });
          },
          onConnect(e) {
            this.setRequestedChainsIds(
              eo.W.getCaipNetworks().map((e) => Number(e.id))
            );
          },
          async onDisconnect(t) {
            this.setRequestedChainsIds([]), e.emitter.emit("disconnect");
            let n = await this.getProvider();
            i && (n.removeListener("accountsChanged", i), (i = void 0)),
              r && (n.removeListener("chainChanged", r), (r = void 0)),
              c && (n.removeListener("disconnect", c), (c = void 0)),
              o && (n.removeListener("session_delete", o), (o = void 0)),
              a || ((a = this.onConnect.bind(this)), n.on("connect", a));
          },
          onDisplayUri(t) {
            e.emitter.emit("message", { type: "display_uri", data: t });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds() {
            if (!n?.session?.namespaces) return [];
            let e = n?.session?.namespaces[en.o.CHAIN.EVM]?.accounts;
            return e?.map((e) => Number.parseInt(e.split(":")[1] ?? "")) ?? [];
          },
          async getRequestedChainsIds() {
            return [
              ...new Set(
                (await e.storage?.getItem(this.requestedChainsStorageKey)) ?? []
              ),
            ];
          },
          async isChainsStale() {
            if (!u) return !1;
            let t = e.chains.map((e) => e.id),
              n = this.getNamespaceChainsIds();
            if (n.length && !n.some((e) => t.includes(e))) return !1;
            let i = await this.getRequestedChainsIds();
            return !t.every((e) => i.includes(Number(e)));
          },
          async setRequestedChainsIds(t) {
            await e.storage?.setItem(this.requestedChainsStorageKey, t);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      n(59335), (ey.type = "walletConnect");
      var ev = n(1220),
        eb = n(98866);
      let eI = (0, ev.BX)({ pendingTransactions: 0 }),
        eE = {
          state: eI,
          subscribeKey: (e, t) => (0, eb.u$)(eI, e, t),
          increase(e) {
            eI[e] += 1;
          },
          decrease(e) {
            eI[e] -= 1;
          },
          reset(e) {
            eI[e] = 0;
          },
        };
      async function eN(e) {
        if (er.w.isSafeApp()) {
          let { safe: t } = await n.e(9947).then(n.bind(n, 99947));
          if (t && !e.some((e) => "safe" === e.type)) return t();
        }
        return null;
      }
      async function eP(e) {
        try {
          let { coinbaseWallet: t } = await n.e(9947).then(n.bind(n, 99947));
          if (t && !e.some((e) => "coinbaseWalletSDK" === e.id)) return t();
        } catch (e) {
          console.error("Failed to import Coinbase Wallet SDK:", e);
        }
        return null;
      }
      let eA = { enable: !1, pollingInterval: 3e4 };
      class e_ extends eu.X {
        constructor(e) {
          let t = ec.R.extendCaipNetworks(e.networks, {
            projectId: e.projectId,
            customNetworkImageUrls: {},
            customRpcUrls: e.customRpcUrls,
          });
          super(),
            (this.balancePromises = {}),
            (this.namespace = en.o.CHAIN.EVM),
            (this.adapterType = en.o.ADAPTER_TYPES.WAGMI),
            (this.projectId = e.projectId),
            (this.pendingTransactionsFilter = {
              ...eA,
              ...(e.pendingTransactionsFilter ?? {}),
            }),
            this.createConfig({ ...e, networks: t }),
            this.checkChainId();
        }
        construct(e) {
          this.checkChainId(), this.setupWatchers();
        }
        async getAccounts(e) {
          let t = this.getWagmiConnector(e.id);
          if (!t) return { accounts: [] };
          if (t.id === en.o.CONNECTOR_ID.AUTH) {
            let e = await t.getProvider();
            if (!e?.user) return { accounts: [] };
            let { address: n, accounts: i } = e.user;
            return Promise.resolve({
              accounts: (i || [{ address: n, type: "eoa" }]).map((e) =>
                er.w.createAccount("eip155", e.address, e.type)
              ),
            });
          }
          let { addresses: n, address: i } = (0, r.s)(this.wagmiConfig);
          return Promise.resolve({
            accounts: [...new Set(n || [i])].map((e) =>
              er.w.createAccount("eip155", e || "", "eoa")
            ),
          });
        }
        checkChainId() {
          let { chainId: e } = (0, r.s)(this.wagmiConfig);
          e && this.emit("switchNetwork", { chainId: e });
        }
        getWagmiConnector(e) {
          return this.wagmiConfig.connectors.find((t) => t.id === e);
        }
        createConfig(e) {
          this.wagmiChains = e.networks.filter(
            (e) => e.chainNamespace === en.o.CHAIN.EVM
          );
          let t = {},
            n = [...(e.connectors ?? [])];
          this.wagmiChains.forEach((n) => {
            let i = e.transports?.[n.id],
              r = ec.R.getCaipNetworkId(n);
            i
              ? (t[n.id] = ec.R.extendWagmiTransports(n, e.projectId, i))
              : (t[n.id] = ec.R.getViemTransport(
                  n,
                  e.projectId,
                  e.customRpcUrls?.[r]
                ));
          }),
            (this.wagmiConfig = (function (e) {
              let t,
                n,
                r,
                {
                  multiInjectedProviderDiscovery: o = !0,
                  storage: d = (0, I.wE)({ storage: (0, I.XB)() }),
                  syncConnectedChain: l = !0,
                  ssr: u = !1,
                  ...h
                } = e,
                m =
                  "undefined" != typeof window && o
                    ? (function () {
                        let e = new Set(),
                          t = [],
                          n = () =>
                            (function (e) {
                              if ("undefined" == typeof window) return;
                              let t = (t) => e(t.detail);
                              return (
                                window.addEventListener(
                                  "eip6963:announceProvider",
                                  t
                                ),
                                window.dispatchEvent(
                                  new CustomEvent("eip6963:requestProvider")
                                ),
                                () =>
                                  window.removeEventListener(
                                    "eip6963:announceProvider",
                                    t
                                  )
                              );
                            })((n) => {
                              t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                                ((t = [...t, n]),
                                e.forEach((e) => e(t, { added: [n] })));
                            }),
                          i = n();
                        return {
                          _listeners: () => e,
                          clear() {
                            e.forEach((e) => e([], { removed: [...t] })),
                              (t = []);
                          },
                          destroy() {
                            this.clear(), e.clear(), i?.();
                          },
                          findProvider: ({ rdns: e }) =>
                            t.find((t) => t.info.rdns === e),
                          getProviders: () => t,
                          reset() {
                            this.clear(), i?.(), (i = n());
                          },
                          subscribe: (n, { emitImmediately: i } = {}) => (
                            e.add(n), i && n(t, { added: t }), () => e.delete(n)
                          ),
                        };
                      })()
                    : void 0,
                g = c(() => h.chains),
                p = c(() => {
                  let e = [],
                    t = new Set();
                  for (let n of h.connectors ?? []) {
                    let i = C(n);
                    if ((e.push(i), !u && i.rdns))
                      for (let e of "string" == typeof i.rdns
                        ? [i.rdns]
                        : i.rdns)
                        t.add(e);
                  }
                  if (!u && m)
                    for (let n of m.getProviders())
                      t.has(n.info.rdns) || e.push(C(y(n)));
                  return e;
                });
              function C(e) {
                let t = new b(
                    (function (e = 11) {
                      if (!i || E + e > 512) {
                        (i = ""), (E = 0);
                        for (let e = 0; e < 256; e++)
                          i += ((256 + 256 * Math.random()) | 0)
                            .toString(16)
                            .substring(1);
                      }
                      return i.substring(E, E++ + e);
                    })()
                  ),
                  n = {
                    ...e({
                      emitter: t,
                      chains: g.getState(),
                      storage: d,
                      transports: h.transports,
                    }),
                    emitter: t,
                    uid: t.uid,
                  };
                return t.on("connect", k), n.setup?.(), n;
              }
              function y(e) {
                let { info: t } = e,
                  n = e.provider;
                return w({ target: { ...t, id: t.rdns, provider: n } });
              }
              let v = new Map();
              function P() {
                return {
                  chainId: g.getState()[0].id,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                };
              }
              let A = "0.0.0-canary-";
              t = N.r.startsWith(A)
                ? Number.parseInt(N.r.replace(A, ""), 10)
                : Number.parseInt(N.r.split(".")[0] ?? "0", 10);
              let _ = c(
                ((r = d
                  ? ((n = {
                      migrate(e, n) {
                        if (n === t) return e;
                        let i = P(),
                          r = O(e, i.chainId);
                        return { ...i, chainId: r };
                      },
                      name: "store",
                      partialize: (e) => ({
                        connections: {
                          __type: "Map",
                          value: Array.from(e.connections.entries()).map(
                            ([e, t]) => {
                              let {
                                id: n,
                                name: i,
                                type: r,
                                uid: a,
                              } = t.connector;
                              return [
                                e,
                                {
                                  ...t,
                                  connector: {
                                    id: n,
                                    name: i,
                                    type: r,
                                    uid: a,
                                  },
                                },
                              ];
                            }
                          ),
                        },
                        chainId: e.chainId,
                        current: e.current,
                      }),
                      merge(e, t) {
                        "object" == typeof e &&
                          e &&
                          "status" in e &&
                          delete e.status;
                        let n = O(e, t.chainId);
                        return { ...t, ...e, chainId: n };
                      },
                      skipHydration: u,
                      storage: d,
                      version: t,
                    }),
                    (e, t, i) => {
                      let r,
                        a = {
                          storage: (function (e, t) {
                            let n;
                            try {
                              n = e();
                            } catch (e) {
                              return;
                            }
                            return {
                              getItem: (e) => {
                                var t;
                                let i = (e) =>
                                    null === e ? null : JSON.parse(e, void 0),
                                  r = null != (t = n.getItem(e)) ? t : null;
                                return r instanceof Promise ? r.then(i) : i(r);
                              },
                              setItem: (e, t) =>
                                n.setItem(e, JSON.stringify(t, void 0)),
                              removeItem: (e) => n.removeItem(e),
                            };
                          })(() => localStorage),
                          partialize: (e) => e,
                          version: 0,
                          merge: (e, t) => ({ ...t, ...e }),
                          ...n,
                        },
                        o = !1,
                        c = new Set(),
                        d = new Set(),
                        l = a.storage;
                      if (!l)
                        return P(
                          (...t) => {
                            console.warn(
                              `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                            ),
                              e(...t);
                          },
                          t,
                          i
                        );
                      let u = () => {
                          let e = a.partialize({ ...t() });
                          return l.setItem(a.name, {
                            state: e,
                            version: a.version,
                          });
                        },
                        h = i.setState;
                      i.setState = (e, t) => {
                        h(e, t), u();
                      };
                      let m = P(
                        (...t) => {
                          e(...t), u();
                        },
                        t,
                        i
                      );
                      i.getInitialState = () => m;
                      let f = () => {
                        var n, i;
                        if (!l) return;
                        (o = !1),
                          c.forEach((e) => {
                            var n;
                            return e(null != (n = t()) ? n : m);
                          });
                        let h =
                          (null == (i = a.onRehydrateStorage)
                            ? void 0
                            : i.call(a, null != (n = t()) ? n : m)) || void 0;
                        return s(l.getItem.bind(l))(a.name)
                          .then((e) => {
                            if (e)
                              if (
                                "number" != typeof e.version ||
                                e.version === a.version
                              )
                                return [!1, e.state];
                              else {
                                if (a.migrate)
                                  return [!0, a.migrate(e.state, e.version)];
                                console.error(
                                  "State loaded from storage couldn't be migrated since no migrate function was provided"
                                );
                              }
                            return [!1, void 0];
                          })
                          .then((n) => {
                            var i;
                            let [s, o] = n;
                            if (
                              (e(
                                (r = a.merge(o, null != (i = t()) ? i : m)),
                                !0
                              ),
                              s)
                            )
                              return u();
                          })
                          .then(() => {
                            null == h || h(r, void 0),
                              (r = t()),
                              (o = !0),
                              d.forEach((e) => e(r));
                          })
                          .catch((e) => {
                            null == h || h(void 0, e);
                          });
                      };
                      return (
                        (i.persist = {
                          setOptions: (e) => {
                            (a = { ...a, ...e }), e.storage && (l = e.storage);
                          },
                          clearStorage: () => {
                            null == l || l.removeItem(a.name);
                          },
                          getOptions: () => a,
                          rehydrate: () => f(),
                          hasHydrated: () => o,
                          onHydrate: (e) => (
                            c.add(e),
                            () => {
                              c.delete(e);
                            }
                          ),
                          onFinishHydration: (e) => (
                            d.add(e),
                            () => {
                              d.delete(e);
                            }
                          ),
                        }),
                        a.skipHydration || f(),
                        r || m
                      );
                    })
                  : P),
                (e, t, n) => {
                  let i = n.subscribe;
                  return (
                    (n.subscribe = (e, t, r) => {
                      let a = e;
                      if (t) {
                        let i =
                            (null == r ? void 0 : r.equalityFn) || Object.is,
                          s = e(n.getState());
                        (a = (n) => {
                          let r = e(n);
                          if (!i(s, r)) {
                            let e = s;
                            t((s = r), e);
                          }
                        }),
                          (null == r ? void 0 : r.fireImmediately) && t(s, s);
                      }
                      return i(a);
                    }),
                    r(e, t, n)
                  );
                })
              );
              function O(e, t) {
                return e &&
                  "object" == typeof e &&
                  "chainId" in e &&
                  "number" == typeof e.chainId &&
                  g.getState().some((t) => t.id === e.chainId)
                  ? e.chainId
                  : t;
              }
              function S(e) {
                _.setState((t) => {
                  let n = t.connections.get(e.uid);
                  return n
                    ? {
                        ...t,
                        connections: new Map(t.connections).set(e.uid, {
                          accounts: e.accounts ?? n.accounts,
                          chainId: e.chainId ?? n.chainId,
                          connector: n.connector,
                        }),
                      }
                    : t;
                });
              }
              function k(e) {
                "connecting" !== _.getState().status &&
                  "reconnecting" !== _.getState().status &&
                  _.setState((t) => {
                    let n = p.getState().find((t) => t.uid === e.uid);
                    return n
                      ? (n.emitter.listenerCount("connect") &&
                          n.emitter.off("connect", S),
                        n.emitter.listenerCount("change") ||
                          n.emitter.on("change", S),
                        n.emitter.listenerCount("disconnect") ||
                          n.emitter.on("disconnect", T),
                        {
                          ...t,
                          connections: new Map(t.connections).set(e.uid, {
                            accounts: e.accounts,
                            chainId: e.chainId,
                            connector: n,
                          }),
                          current: e.uid,
                          status: "connected",
                        })
                      : t;
                  });
              }
              function T(e) {
                _.setState((t) => {
                  let n = t.connections.get(e.uid);
                  if (n) {
                    let e = n.connector;
                    e.emitter.listenerCount("change") &&
                      n.connector.emitter.off("change", S),
                      e.emitter.listenerCount("disconnect") &&
                        n.connector.emitter.off("disconnect", T),
                      e.emitter.listenerCount("connect") ||
                        n.connector.emitter.on("connect", k);
                  }
                  if ((t.connections.delete(e.uid), 0 === t.connections.size))
                    return {
                      ...t,
                      connections: new Map(),
                      current: null,
                      status: "disconnected",
                    };
                  let i = t.connections.values().next().value;
                  return {
                    ...t,
                    connections: new Map(t.connections),
                    current: i.connector.uid,
                  };
                });
              }
              return (
                _.setState(P()),
                l &&
                  _.subscribe(
                    ({ connections: e, current: t }) =>
                      t ? e.get(t)?.chainId : void 0,
                    (e) => {
                      if (g.getState().some((t) => t.id === e))
                        return _.setState((t) => ({
                          ...t,
                          chainId: e ?? t.chainId,
                        }));
                    }
                  ),
                m?.subscribe((e) => {
                  let t = new Set(),
                    n = new Set();
                  for (let e of p.getState())
                    if ((t.add(e.id), e.rdns))
                      for (let t of "string" == typeof e.rdns
                        ? [e.rdns]
                        : e.rdns)
                        n.add(t);
                  let i = [];
                  for (let r of e) {
                    if (n.has(r.info.rdns)) continue;
                    let e = C(y(r));
                    t.has(e.id) || i.push(e);
                  }
                  (!d || _.persist.hasHydrated()) &&
                    p.setState((e) => [...e, ...i], !0);
                }),
                {
                  get chains() {
                    return g.getState();
                  },
                  get connectors() {
                    return p.getState();
                  },
                  storage: d,
                  getClient: function (e = {}) {
                    let t,
                      n = e.chainId ?? _.getState().chainId,
                      i = g.getState().find((e) => e.id === n);
                    if (e.chainId && !i) throw new f.nk();
                    {
                      let e = v.get(_.getState().chainId);
                      if (e && !i) return e;
                      if (!i) throw new f.nk();
                    }
                    {
                      let e = v.get(n);
                      if (e) return e;
                    }
                    if (h.client) t = h.client({ chain: i });
                    else {
                      let e = i.id,
                        n = g.getState().map((e) => e.id),
                        r = {};
                      for (let [t, i] of Object.entries(h))
                        if (
                          "chains" !== t &&
                          "client" !== t &&
                          "connectors" !== t &&
                          "transports" !== t
                        )
                          if ("object" == typeof i)
                            if (e in i) r[t] = i[e];
                            else {
                              if (n.some((e) => e in i)) continue;
                              r[t] = i;
                            }
                          else r[t] = i;
                      t = (0, a.U)({
                        ...r,
                        chain: i,
                        batch: r.batch ?? { multicall: !0 },
                        transport: (t) =>
                          h.transports[e]({ ...t, connectors: p }),
                      });
                    }
                    return v.set(n, t), t;
                  },
                  get state() {
                    return _.getState();
                  },
                  setState(e) {
                    let t;
                    t = "function" == typeof e ? e(_.getState()) : e;
                    let n = P();
                    "object" != typeof t && (t = n),
                      Object.keys(n).some((e) => !(e in t)) && (t = n),
                      _.setState(t, !0);
                  },
                  subscribe: (e, t, n) =>
                    _.subscribe(
                      e,
                      t,
                      n ? { ...n, fireImmediately: n.emitImmediately } : void 0
                    ),
                  _internal: {
                    mipd: m,
                    async revalidate() {
                      let e = _.getState(),
                        t = e.connections,
                        n = e.current;
                      for (let [, e] of t) {
                        let i = e.connector;
                        (i.isAuthorized && (await i.isAuthorized())) ||
                          (t.delete(i.uid), n === i.uid && (n = null));
                      }
                      _.setState((e) => ({ ...e, connections: t, current: n }));
                    },
                    store: _,
                    ssr: !!u,
                    syncConnectedChain: l,
                    transports: h.transports,
                    chains: {
                      setState(e) {
                        let t = "function" == typeof e ? e(g.getState()) : e;
                        if (0 !== t.length) return g.setState(t, !0);
                      },
                      subscribe: (e) => g.subscribe(e),
                    },
                    connectors: {
                      providerDetailToConnector: y,
                      setup: C,
                      setState: (e) =>
                        p.setState(
                          "function" == typeof e ? e(p.getState()) : e,
                          !0
                        ),
                      subscribe: (e) => p.subscribe(e),
                    },
                    events: { change: S, connect: k, disconnect: T },
                  },
                }
              );
            })({
              ...e,
              chains: this.wagmiChains,
              connectors: n,
              transports: t,
            }));
        }
        setupWatchPendingTransactions() {
          if (
            !this.pendingTransactionsFilter.enable ||
            this.unwatchPendingTransactions
          )
            return;
          this.unwatchPendingTransactions = (function (e, t) {
            let n,
              i,
              { syncConnectedChain: r = e._internal.syncConnectedChain, ...a } =
                t,
              s = (t) => {
                n && n();
                let i = e.getClient({ chainId: t });
                return (n = (0, A.T)(i, P.u, "watchPendingTransactions")(a));
              },
              o = s(t.chainId);
            return (
              r &&
                !t.chainId &&
                (i = e.subscribe(
                  ({ chainId: e }) => e,
                  async (e) => s(e)
                )),
              () => {
                o?.(), i?.();
              }
            );
          })(this.wagmiConfig, {
            pollingInterval: this.pendingTransactionsFilter.pollingInterval,
            onError: () => {},
            onTransactions: () => {
              this.emit("pendingTransactions"),
                eE.increase("pendingTransactions");
            },
          });
          let e = eE.subscribeKey("pendingTransactions", (t) => {
            t >= en.o.LIMITS.PENDING_TRANSACTIONS &&
              (this.unwatchPendingTransactions?.(), e());
          });
        }
        setupWatchers() {
          !(function (e, t) {
            let { onChange: n } = t;
            e.subscribe(() => S(e), n, { equalityFn: _.b });
          })(this.wagmiConfig, {
            onChange: (e) => {
              this.clearConnections(),
                this.addConnection(
                  ...e.map((e) => {
                    let t = this.getCaipNetworks().find(
                        (t) => t.id === e.chainId
                      ),
                      n = e.connector.id === en.o.CONNECTOR_ID.AUTH;
                    return {
                      accounts: e.accounts.map((e) => ({
                        address: this.toChecksummedAddress(e),
                      })),
                      caipNetwork: t,
                      connectorId: e.connector.id,
                      auth: n
                        ? {
                            name: ea.i.getConnectedSocialProvider(),
                            username: ea.i.getConnectedSocialUsername(),
                          }
                        : void 0,
                    };
                  })
                );
            },
          }),
            (0, k.F)(this.wagmiConfig, {
              onChange: (e, t) => {
                if (
                  ("disconnected" === e.status &&
                    t.address &&
                    this.emit("disconnect"),
                  e?.chainId &&
                    e?.chainId !== t?.chainId &&
                    this.emit("switchNetwork", { chainId: e.chainId }),
                  "connected" === e.status)
                ) {
                  let n = e.address !== t?.address,
                    i = e.connector.id !== t.connector?.id,
                    r = "connected" !== t.status;
                  (n || i || r) &&
                    (this.setupWatchPendingTransactions(),
                    this.handleAccountChanged({
                      address: e.address,
                      chainId: e.chainId,
                      connector: e.connector,
                    }));
                }
              },
            });
        }
        async addThirdPartyConnectors(e) {
          let t = [];
          if (!1 !== e.enableCoinbase) {
            let e = await eP(this.wagmiConfig.connectors);
            e && t.push(e);
          }
          let n = await eN(this.wagmiConfig.connectors);
          n && t.push(n),
            await Promise.all(
              t.map((t) => {
                let n = this.wagmiConfig._internal.connectors.setup(t);
                return (
                  this.wagmiConfig._internal.connectors.setState((e) => [
                    ...e,
                    n,
                  ]),
                  this.addWagmiConnector(n, e)
                );
              })
            );
        }
        addWagmiConnectors(e, t) {
          let n = [];
          n.push(ey(e, t)),
            !1 !== e.enableInjected && n.push(w({ shimDisconnect: !0 }));
          let i = t?.remoteFeatures?.email ?? t?.features?.email ?? !0,
            r = t?.remoteFeatures?.socials ?? t?.features?.socials,
            a = Array.isArray(r) && r?.length > 0;
          (i || a) &&
            n.push(
              (function (e) {
                let t,
                  n,
                  i = [];
                function r(e) {
                  return ei.L.parseEvmChainId(e) || 1;
                }
                async function a(n = {}) {
                  let s =
                      (t ||
                        (t = eC.v.getInstance({
                          projectId: e.options.projectId,
                          chainId: (0, em.kg)()?.caipNetworkId,
                          enableLogger: e.options.enableAuthLogger,
                          onTimeout: (e) => {
                            "iframe_load_failed" === e
                              ? ef.h.open(
                                  ew.R.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                                  "error"
                                )
                              : "iframe_request_timeout" === e
                              ? ef.h.open(
                                  ew.R.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT,
                                  "error"
                                )
                              : "unverified_domain" === e &&
                                ef.h.open(
                                  ew.R.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                                  "error"
                                );
                          },
                          abortController: ew.R.EmbeddedWalletAbortController,
                          getActiveCaipNetwork: (e) => (0, em.kg)(e),
                          getCaipNetworks: (e) => eo.W.getCaipNetworks(e),
                        })),
                      t),
                    o = n.chainId;
                  if (n.isReconnecting) {
                    let t = ei.L.parseEvmChainId(s.getLastUsedChainId() || ""),
                      n = e.chains?.[0].id;
                    if (!(o = t || n))
                      throw Error("ChainId not found in provider");
                  }
                  let c = (0, em.lj)("eip155"),
                    {
                      address: d,
                      chainId: l,
                      accounts: u,
                    } = await eg.U.authConnectorAuthenticate({
                      authConnector: s,
                      chainId: o,
                      preferredAccountType: c,
                      socialUri: n.socialUri,
                      chainNamespace: en.o.CHAIN.EVM,
                    });
                  i = u?.map((e) => e.address) || [d];
                  let h = r(l);
                  return {
                    accounts: i,
                    account: d,
                    chainId: h,
                    chain: { id: h, unsuported: !1 },
                  };
                }
                return (0, p.U)((t) => ({
                  id: en.o.CONNECTOR_ID.AUTH,
                  name: en.o.CONNECTOR_NAMES.AUTH,
                  type: "AUTH",
                  chain: en.o.CHAIN.EVM,
                  async connect(e = {}) {
                    if (n) return n;
                    n ||
                      (n = new Promise((t) => {
                        t(a(e));
                      }));
                    let t = await n;
                    return (n = void 0), t;
                  },
                  async disconnect() {
                    let e = await this.getProvider();
                    await e.disconnect();
                  },
                  getAccounts: () =>
                    i?.length
                      ? (t.emitter.emit("change", { accounts: i }),
                        Promise.resolve(i))
                      : Promise.resolve([]),
                  async getProvider() {
                    return (
                      this.provider ||
                        (this.provider = eC.v.getInstance({
                          projectId: e.options.projectId,
                          chainId: (0, em.kg)()?.caipNetworkId,
                          enableLogger: e.options.enableAuthLogger,
                          abortController: ew.R.EmbeddedWalletAbortController,
                          onTimeout: (e) => {
                            "iframe_load_failed" === e
                              ? ef.h.open(
                                  ew.R.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                                  "error"
                                )
                              : "iframe_request_timeout" === e
                              ? ef.h.open(
                                  ew.R.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT,
                                  "error"
                                )
                              : "unverified_domain" === e &&
                                ef.h.open(
                                  ew.R.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                                  "error"
                                );
                          },
                          getActiveCaipNetwork: (e) => (0, em.kg)(e),
                          getCaipNetworks: (e) => eo.W.getCaipNetworks(e),
                        })),
                      Promise.resolve(this.provider)
                    );
                  },
                  async getChainId() {
                    let e = await this.getProvider(),
                      { chainId: t } = await e.getChainId();
                    return r(t);
                  },
                  async isAuthorized() {
                    let e = eo.W.state.activeChain === en.o.CHAIN.EVM;
                    return (
                      (!en.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(
                        (e) => ep.a.getConnectorId(e) === en.o.CONNECTOR_ID.AUTH
                      ) ||
                        !!e) &&
                      Promise.resolve(
                        (await this.getProvider()).getLoginEmailUsed()
                      )
                    );
                  },
                  async switchChain({ chainId: e }) {
                    try {
                      let n = t.chains.find((t) => t.id === e);
                      if (!n)
                        throw new l.ch(Error("chain not found on connector."));
                      let r = await this.getProvider(),
                        a = (0, em.lj)("eip155"),
                        s = await r.connect({
                          chainId: e,
                          preferredAccountType: a,
                        });
                      return (
                        (i = s?.accounts?.map((e) => e.address) || [s.address]),
                        t.emitter.emit("change", {
                          chainId: Number(e),
                          accounts: i,
                        }),
                        n
                      );
                    } catch (e) {
                      if (e instanceof Error) throw new l.ch(e);
                      throw e;
                    }
                  },
                  onAccountsChanged(e) {
                    0 === e.length
                      ? this.onDisconnect()
                      : t.emitter.emit("change", { accounts: e.map(d.b) });
                  },
                  onChainChanged(e) {
                    let n = Number(e);
                    t.emitter.emit("change", { chainId: n });
                  },
                  async onDisconnect(e) {
                    let t = await this.getProvider();
                    await t.disconnect();
                  },
                }));
              })({
                chains: this.wagmiChains,
                options: {
                  projectId: e.projectId,
                  enableAuthLogger: e.enableAuthLogger,
                },
              })
            ),
            n.forEach((e) => {
              let t = this.wagmiConfig._internal.connectors.setup(e);
              this.wagmiConfig._internal.connectors.setState((e) => [...e, t]);
            });
        }
        async handleAccountChanged({ address: e, chainId: t, connector: n }) {
          if (!this.namespace)
            throw Error(
              "WagmiAdapter:handleAccountChanged - namespace is required"
            );
          let i = await n.getProvider().catch(() => void 0);
          this.emit("accountChanged", {
            address: this.toChecksummedAddress(e),
            chainId: t,
            connector: {
              id: n.id,
              name: ed.L.ConnectorNamesMap[n.id] ?? n.name,
              imageId: ed.L.ConnectorImageIds[n.id],
              type: ed.L.ConnectorTypesMap[n.type] ?? "EXTERNAL",
              info:
                n.id === en.o.CONNECTOR_ID.INJECTED ? void 0 : { rdns: n.id },
              provider: i,
              chain: this.namespace,
              chains: [],
            },
          });
        }
        async signMessage(e) {
          try {
            return {
              signature: await R(this.wagmiConfig, {
                message: e.message,
                account: e.address,
              }),
            };
          } catch (e) {
            throw Error("WagmiAdapter:signMessage - Sign message failed");
          }
        }
        async sendTransaction(e) {
          let { chainId: t, address: n } = (0, r.s)(this.wagmiConfig),
            i = {
              account: n,
              to: e.to,
              value: Number.isNaN(Number(e.value))
                ? BigInt(0)
                : BigInt(e.value),
              gas: e.gas ? BigInt(e.gas) : void 0,
              gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
              data: e.data,
              chainId: t,
              type: "legacy",
              parameters: ["nonce"],
            };
          await D(this.wagmiConfig, i);
          let a = await j(this.wagmiConfig, i);
          return (
            await H(this.wagmiConfig, { hash: a, timeout: 25e3 }), { hash: a }
          );
        }
        async writeContract(e) {
          let { caipNetwork: t, ...n } = e,
            i = Number(ei.L.caipNetworkIdToNumber(t.caipNetworkId));
          return {
            hash: await $(this.wagmiConfig, {
              chain: this.wagmiChains?.[i],
              chainId: i,
              address: n.tokenAddress,
              account: n.fromAddress,
              abi: n.abi,
              functionName: n.method,
              args: n.args,
              __mode: "prepared",
            }),
          };
        }
        async estimateGas(e) {
          try {
            return {
              gas: await G(this.wagmiConfig, {
                account: e.address,
                to: e.to,
                data: e.data,
                type: "legacy",
              }),
            };
          } catch (e) {
            throw Error("WagmiAdapter:estimateGas - error estimating gas");
          }
        }
        parseUnits(e) {
          return (0, Z.X)(e.value, e.decimals);
        }
        formatUnits(e) {
          return (0, Y.J)(e.value, e.decimals);
        }
        async addWagmiConnector(e, t) {
          if (!this.namespace)
            throw Error(
              "WagmiAdapter:addWagmiConnector - namespace is required"
            );
          if (
            (e.type === en.o.CONNECTOR_ID.INJECTED && !1 === t.enableEIP6963) ||
            e.id === en.o.CONNECTOR_ID.AUTH ||
            e.id === en.o.CONNECTOR_ID.WALLET_CONNECT
          )
            return;
          let n = await e.getProvider().catch(() => void 0);
          this.addConnector({
            id: e.id,
            explorerId: ed.L.ConnectorExplorerIds[e.id],
            imageUrl: t?.connectorImages?.[e.id] ?? e.icon,
            name: ed.L.ConnectorNamesMap[e.id] ?? e.name,
            imageId: ed.L.ConnectorImageIds[e.id],
            type: ed.L.ConnectorTypesMap[e.type] ?? "EXTERNAL",
            info: e.id === en.o.CONNECTOR_ID.INJECTED ? void 0 : { rdns: e.id },
            provider: n,
            chain: this.namespace,
            chains: [],
          });
        }
        async syncConnectors(e, t) {
          !(function (e, t) {
            let { onChange: n } = t;
            e._internal.connectors.subscribe((e, t) => {
              n(Object.values(e), t);
            });
          })(this.wagmiConfig, {
            onChange: (t) => {
              t.forEach((t) => this.addWagmiConnector(t, e));
            },
          }),
            this.addWagmiConnectors(e, t),
            await Promise.all(
              this.wagmiConfig.connectors.map((t) =>
                this.addWagmiConnector(t, e)
              )
            ),
            this.addThirdPartyConnectors(e);
        }
        async syncConnections() {
          return Promise.resolve();
        }
        async syncConnection(e) {
          let { id: t, chainId: n } = e,
            i = S(this.wagmiConfig).find((e) => e.connector.id === t),
            r = this.getWagmiConnector(t),
            a = await r?.getProvider();
          if (
            er.w.isSafeApp() &&
            t === en.o.CONNECTOR_ID.SAFE &&
            !i?.accounts.length
          ) {
            let e = this.getWagmiConnector("safe");
            if (e) {
              let t = await B(this.wagmiConfig, {
                  connector: e,
                  chainId: Number(n),
                }),
                r = await e.getProvider();
              return {
                chainId: Number(n),
                address: this.toChecksummedAddress(t.accounts[0]),
                provider: r,
                type: i?.connector.type?.toUpperCase(),
                id: i?.connector.id,
              };
            }
          }
          return {
            chainId: Number(i?.chainId),
            address: this.toChecksummedAddress(i?.accounts[0]),
            provider: a,
            type: i?.connector.type?.toUpperCase(),
            id: i?.connector.id,
          };
        }
        async connectWalletConnect(e) {
          try {
            let t = this.getWalletConnectConnector();
            await t.authenticate();
            let n = this.getWagmiConnector("walletConnect");
            if (!n)
              throw Error(
                "UniversalAdapter:connectWalletConnect - connector not found"
              );
            let i = await B(this.wagmiConfig, {
              connector: n,
              chainId: e ? Number(e) : void 0,
            });
            return (
              i.chainId !== Number(e) &&
                (await (0, z.S)(this.wagmiConfig, { chainId: i.chainId })),
              { clientId: await t.provider.client.core.crypto.getClientId() }
            );
          } catch (e) {
            if (e instanceof l.vx || et.RQ.isUserRejectedRequestError(e))
              throw new et.vx(e);
            throw e;
          }
        }
        async connect(e) {
          try {
            let {
                id: t,
                address: n,
                provider: i,
                type: r,
                info: a,
                chainId: s,
                socialUri: o,
              } = e,
              c = this.getWagmiConnector(t);
            if (!c)
              throw Error(
                "connectionControllerClient:connectExternal - connector is undefined"
              );
            i &&
              a &&
              c.id === en.o.CONNECTOR_ID.EIP6963 &&
              c.setEip6963Wallet?.({ provider: i, info: a });
            let d = this.wagmiConfig.state?.connections?.get(c.uid);
            if (d) {
              await this.wagmiConfig.storage?.setItem(
                "recentConnectorId",
                c.id
              );
              let e = [...d.accounts].sort((e, t) =>
                el.y.isLowerCaseMatch(e, n)
                  ? -1
                  : +!!el.y.isLowerCaseMatch(t, n)
              );
              return (
                this.wagmiConfig?.setState((t) => ({
                  ...t,
                  connections: new Map(t.connections).set(c.uid, {
                    accounts: e,
                    chainId: d.chainId,
                    connector: d.connector,
                  }),
                  current: c.uid,
                  status: "connected",
                })),
                {
                  address: this.toChecksummedAddress(e[0]),
                  chainId: d.chainId,
                  provider: i,
                  type: r,
                  id: t,
                }
              );
            }
            let l = await B(this.wagmiConfig, {
              connector: c,
              chainId: s ? Number(s) : void 0,
              socialUri: o,
            });
            return {
              address: this.toChecksummedAddress(l.accounts[0]),
              chainId: l.chainId,
              provider: i,
              type: r,
              id: t,
            };
          } catch (e) {
            if (e instanceof l.vx || et.RQ.isUserRejectedRequestError(e))
              throw new et.vx(e);
            throw e;
          }
        }
        get connections() {
          return Array.from(this.wagmiConfig.state.connections.values()).map(
            (e) => ({
              accounts: e.accounts.map((e) => ({
                address: this.toChecksummedAddress(e),
              })),
              connectorId: e.connector.id,
            })
          );
        }
        async reconnect(e) {
          let { id: t } = e,
            n = this.getWagmiConnector(t);
          if (!n)
            throw Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          await (0, V.M)(this.wagmiConfig, { connectors: [n] });
        }
        async getBalance(e) {
          let t = e.address,
            n = this.getCaipNetworks().find((t) => t.id === e.chainId);
          if (!t) return Promise.resolve({ balance: "0.00", symbol: "ETH" });
          if (n && this.wagmiConfig) {
            let t = `${n.caipNetworkId}:${e.address}`,
              i = this.balancePromises[t];
            if (i) return i;
            let r = ea.i.getNativeBalanceCacheForCaipAddress(t);
            return r
              ? { balance: r.balance, symbol: r.symbol }
              : ((this.balancePromises[t] = new Promise(async (i) => {
                  try {
                    let r = Number(e.chainId),
                      a = await (0, J.r)(this.wagmiConfig, {
                        address: e.address,
                        chainId: r,
                        token: e.tokens?.[n.caipNetworkId]?.address,
                      });
                    ea.i.updateNativeBalanceCache({
                      caipAddress: t,
                      balance: a.formatted,
                      symbol: a.symbol,
                      timestamp: Date.now(),
                    }),
                      i({ balance: a.formatted, symbol: a.symbol });
                  } catch (e) {
                    console.warn(
                      "Appkit:WagmiAdapter:getBalance - Error getting balance",
                      e
                    ),
                      i({ balance: "0.00", symbol: "ETH" });
                  }
                }).finally(() => {
                  delete this.balancePromises[t];
                })),
                this.balancePromises[t] || { balance: "0.00", symbol: "ETH" });
          }
          return { balance: "", symbol: "" };
        }
        getWalletConnectProvider() {
          return this.getWagmiConnector("walletConnect")?.provider;
        }
        async disconnect(e) {
          if (e.id) {
            let t = this.getWagmiConnector(e.id),
              n = S(this.wagmiConfig).find((t) =>
                el.y.isLowerCaseMatch(t.connector.id, e.id)
              );
            return (await X(this.wagmiConfig, { connector: t }),
            !1 === es.H.state.enableReconnect && this.deleteConnection(e.id),
            n)
              ? {
                  connections: [
                    {
                      accounts: n.accounts.map((e) => ({
                        address: this.toChecksummedAddress(e),
                      })),
                      connectorId: n.connector.id,
                    },
                  ],
                }
              : { connections: [] };
          }
          return this.disconnectAll();
        }
        async disconnectAll() {
          let e = S(this.wagmiConfig),
            t = await Promise.allSettled(
              e.map(async (e) => {
                let t = this.getWagmiConnector(e.connector.id);
                return t && (await X(this.wagmiConfig, { connector: t })), e;
              })
            );
          return (
            this.wagmiConfig.state.connections.clear(),
            {
              connections: t
                .filter((e) => "fulfilled" === e.status)
                .map(({ value: e }) => ({
                  accounts: e.accounts.map((e) => ({
                    address: this.toChecksummedAddress(e),
                  })),
                  connectorId: e.connector.id,
                })),
            }
          );
        }
        async switchNetwork(e) {
          let { caipNetwork: t } = e,
            n = this.wagmiConfig.chains.find(
              (e) => e.id.toString() === t.id.toString()
            );
          await (0, z.S)(this.wagmiConfig, {
            chainId: t.id,
            addEthereumChainParameter: {
              chainName: n?.name ?? t.name,
              nativeCurrency: n?.nativeCurrency ?? t.nativeCurrency,
              rpcUrls: [
                t.rpcUrls?.chainDefault?.http?.[0] ??
                  n?.rpcUrls?.default?.http?.[0] ??
                  "",
              ],
              blockExplorerUrls: [
                n?.blockExplorers?.default?.url ??
                  t.blockExplorers?.default?.url ??
                  "",
              ],
            },
          }),
            await super.switchNetwork(e);
        }
        async getCapabilities(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:getCapabilities - wagmiConfig is undefined"
            );
          let t = S(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:getCapabilities - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:getCapabilities - provider is undefined"
            );
          return await i.request({
            method: "wallet_getCapabilities",
            params: [e],
          });
        }
        async grantPermissions(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:grantPermissions - wagmiConfig is undefined"
            );
          let t = S(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:grantPermissions - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:grantPermissions - provider is undefined"
            );
          return i.request({ method: "wallet_grantPermissions", params: e });
        }
        async revokePermissions(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:revokePermissions - wagmiConfig is undefined"
            );
          let t = S(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:revokePermissions - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:revokePermissions - provider is undefined"
            );
          return i.request({ method: "wallet_revokePermissions", params: e });
        }
        async walletGetAssets(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:walletGetAssets - wagmiConfig is undefined"
            );
          let t = S(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:walletGetAssets - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:walletGetAssets - provider is undefined"
            );
          return i.request({ method: "wallet_getAssets", params: [e] });
        }
        setAuthProvider(e) {
          if (!this.namespace)
            throw Error("WagmiAdapter:setAuthProvider - namespace is required");
          this.addConnector({
            id: en.o.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: en.o.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: ed.L.ConnectorImageIds[en.o.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: [],
          });
        }
        async setUniversalProvider(e) {
          return (
            e.on("connect", () => {
              let e = S(this.wagmiConfig),
                t = this.getWagmiConnector("walletConnect");
              if (t && !e.find((e) => e.connector.id === t.id)) {
                if ("eip155" === eo.W.state.activeChain) return;
                (0, V.M)(this.wagmiConfig, { connectors: [t] });
              }
            }),
            this.addConnector(
              new eh.F({
                provider: e,
                caipNetworks: this.getCaipNetworks(),
                namespace: "eip155",
              })
            ),
            Promise.resolve()
          );
        }
        toChecksummedAddress(e) {
          return (0, d.o)(e.toLowerCase());
        }
      }
    },
    68463: (e, t, n) => {
      n.d(t, { b: () => i });
      var i = n(94820);
    },
    74852: (e, t, n) => {
      n.d(t, { E: () => g });
      var i = n(34049),
        r = n(31668),
        a = n(74268),
        s = n(38445),
        o = class extends s.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, n) {
            let a = t.queryKey,
              s = t.queryHash ?? (0, i.F$)(a, t),
              o = this.get(s);
            return (
              o ||
                ((o = new r.X({
                  client: e,
                  queryKey: a,
                  queryHash: s,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(a),
                })),
                this.add(o)),
              o
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            a.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, i.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, i.MK)(e, t))
              : t;
          }
          notify(e) {
            a.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            a.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            a.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        c = n(38559),
        d = class extends s.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#n = new Map()),
              (this.#i = 0);
          }
          #t;
          #n;
          #i;
          build(e, t, n) {
            let i = new c.s({
              client: e,
              mutationCache: this,
              mutationId: ++this.#i,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(i), i;
          }
          add(e) {
            this.#t.add(e);
            let t = l(e);
            if ("string" == typeof t) {
              let n = this.#n.get(t);
              n ? n.push(e) : this.#n.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = l(e);
              if ("string" == typeof t) {
                let n = this.#n.get(t);
                if (n)
                  if (n.length > 1) {
                    let t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                  } else n[0] === e && this.#n.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = l(e);
            if ("string" != typeof t) return !0;
            {
              let n = this.#n.get(t),
                i = n?.find((e) => "pending" === e.state.status);
              return !i || i === e;
            }
          }
          runNext(e) {
            let t = l(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let n = this.#n.get(t)?.find((t) => t !== e && t.state.isPaused);
              return n?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            a.jG.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#n.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, i.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, i.nJ)(e, t));
          }
          notify(e) {
            a.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return a.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(i.lQ)))
            );
          }
        };
      function l(e) {
        return e.options.scope?.id;
      }
      var u = n(56195),
        h = n(63122);
      function m(e) {
        return {
          onFetch: (t, n) => {
            let r = t.options,
              a = t.fetchOptions?.meta?.fetchMore?.direction,
              s = t.state.data?.pages || [],
              o = t.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              d = 0,
              l = async () => {
                let n = !1,
                  l = (0, i.ZM)(t.options, t.fetchOptions),
                  u = async (e, r, a) => {
                    if (n) return Promise.reject();
                    if (null == r && e.pages.length) return Promise.resolve(e);
                    let s = (() => {
                        let e = {
                          client: t.client,
                          queryKey: t.queryKey,
                          pageParam: r,
                          direction: a ? "backward" : "forward",
                          meta: t.options.meta,
                        };
                        return (
                          Object.defineProperty(e, "signal", {
                            enumerable: !0,
                            get: () => (
                              t.signal.aborted
                                ? (n = !0)
                                : t.signal.addEventListener("abort", () => {
                                    n = !0;
                                  }),
                              t.signal
                            ),
                          }),
                          e
                        );
                      })(),
                      o = await l(s),
                      { maxPages: c } = t.options,
                      d = a ? i.ZZ : i.y9;
                    return {
                      pages: d(e.pages, o, c),
                      pageParams: d(e.pageParams, r, c),
                    };
                  };
                if (a && s.length) {
                  let e = "backward" === a,
                    t = { pages: s, pageParams: o },
                    n = (
                      e
                        ? function (e, { pages: t, pageParams: n }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, n[0], n)
                              : void 0;
                          }
                        : f
                    )(r, t);
                  c = await u(t, n, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === d ? o[0] ?? r.initialPageParam : f(r, c);
                    if (d > 0 && null == e) break;
                    (c = await u(c, e)), d++;
                  } while (d < t);
                }
                return c;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function f(e, { pages: t, pageParams: n }) {
        let i = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[i], t, n[i], n) : void 0;
      }
      var g = class {
        #r;
        #a;
        #s;
        #o;
        #c;
        #d;
        #l;
        #u;
        constructor(e = {}) {
          (this.#r = e.queryCache || new o()),
            (this.#a = e.mutationCache || new d()),
            (this.#s = e.defaultOptions || {}),
            (this.#o = new Map()),
            (this.#c = new Map()),
            (this.#d = 0);
        }
        mount() {
          this.#d++,
            1 === this.#d &&
              ((this.#l = u.m.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#r.onFocus());
              })),
              (this.#u = h.t.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#r.onOnline());
              })));
        }
        unmount() {
          this.#d--,
            0 === this.#d &&
              (this.#l?.(),
              (this.#l = void 0),
              this.#u?.(),
              (this.#u = void 0));
        }
        isFetching(e) {
          return this.#r.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#a.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#r.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            n = this.#r.build(this, t),
            r = n.state.data;
          return void 0 === r
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                n.isStaleByTime((0, i.d2)(t.staleTime, n)) &&
                this.prefetchQuery(t),
              Promise.resolve(r));
        }
        getQueriesData(e) {
          return this.#r
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, n) {
          let r = this.defaultQueryOptions({ queryKey: e }),
            a = this.#r.get(r.queryHash),
            s = a?.state.data,
            o = (0, i.Zw)(t, s);
          if (void 0 !== o)
            return this.#r.build(this, r).setData(o, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return a.jG.batch(() =>
            this.#r
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#r.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#r;
          a.jG.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let n = this.#r;
          return a.jG.batch(
            () => (
              n.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let n = { revert: !0, ...t };
          return Promise.all(
            a.jG.batch(() => this.#r.findAll(e).map((e) => e.cancel(n)))
          )
            .then(i.lQ)
            .catch(i.lQ);
        }
        invalidateQueries(e, t = {}) {
          return a.jG.batch(() =>
            (this.#r.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries(
                  { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                  t
                )
          );
        }
        refetchQueries(e, t = {}) {
          let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            a.jG.batch(() =>
              this.#r
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, n);
                  return (
                    n.throwOnError || (t = t.catch(i.lQ)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(i.lQ);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let n = this.#r.build(this, t);
          return n.isStaleByTime((0, i.d2)(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(i.lQ).catch(i.lQ);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = m(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(i.lQ).catch(i.lQ);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = m(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return h.t.isOnline()
            ? this.#a.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#r;
        }
        getMutationCache() {
          return this.#a;
        }
        getDefaultOptions() {
          return this.#s;
        }
        setDefaultOptions(e) {
          this.#s = e;
        }
        setQueryDefaults(e, t) {
          this.#o.set((0, i.EN)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#o.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, i.Cp)(e, t.queryKey) && Object.assign(n, t.defaultOptions);
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          this.#c.set((0, i.EN)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#c.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, i.Cp)(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#s.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, i.F$)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === i.hT && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#s.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#r.clear(), this.#a.clear();
        }
      };
    },
    91691: (e, t, n) => {
      n.d(t, { T2: () => a, iM: () => r });
      var i = n(48996);
      let r = {
        getItem: (e) =>
          "undefined" == typeof window ? null : s(document.cookie, e) ?? null,
        setItem(e, t) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=${t};path=/;samesite=Lax`);
        },
        removeItem(e) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=;max-age=-1;path=/`);
        },
      };
      function a(e, t) {
        if (!t) return;
        let n = s(t, `${e.storage?.key}.store`);
        if (n) return (0, i.i)(n).state;
      }
      function s(e, t) {
        let n = e.split("; ").find((e) => e.startsWith(`${t}=`));
        if (n) return n.substring(t.length + 1);
      }
    },
    94820: (e) => {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function i() {}
      function r(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function a(e, t, i, a, s) {
        if ("function" != typeof i)
          throw TypeError("The listener must be a function");
        var o = new r(i, a || e, s),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function o() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            i,
            r = [];
          if (0 === this._eventsCount) return r;
          for (i in (e = this._events))
            t.call(e, i) && r.push(n ? i.slice(1) : i);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var r = 0, a = i.length, s = Array(a); r < a; r++)
            s[r] = i[r].fn;
          return s;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          return i ? (i.fn ? 1 : i.length) : 0;
        }),
        (o.prototype.emit = function (e, t, i, r, a, s) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            d,
            l = this._events[o],
            u = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), u)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, i), !0;
              case 4:
                return l.fn.call(l.context, t, i, r), !0;
              case 5:
                return l.fn.call(l.context, t, i, r, a), !0;
              case 6:
                return l.fn.call(l.context, t, i, r, a, s), !0;
            }
            for (d = 1, c = Array(u - 1); d < u; d++) c[d - 1] = arguments[d];
            l.fn.apply(l.context, c);
          } else {
            var h,
              m = l.length;
            for (d = 0; d < m; d++)
              switch (
                (l[d].once && this.removeListener(e, l[d].fn, void 0, !0), u)
              ) {
                case 1:
                  l[d].fn.call(l[d].context);
                  break;
                case 2:
                  l[d].fn.call(l[d].context, t);
                  break;
                case 3:
                  l[d].fn.call(l[d].context, t, i);
                  break;
                case 4:
                  l[d].fn.call(l[d].context, t, i, r);
                  break;
                default:
                  if (!c)
                    for (h = 1, c = Array(u - 1); h < u; h++)
                      c[h - 1] = arguments[h];
                  l[d].fn.apply(l[d].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return a(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return a(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, i, r) {
          var a = n ? n + e : e;
          if (!this._events[a]) return this;
          if (!t) return s(this, a), this;
          var o = this._events[a];
          if (o.fn)
            o.fn !== t ||
              (r && !o.once) ||
              (i && o.context !== i) ||
              s(this, a);
          else {
            for (var c = 0, d = [], l = o.length; c < l; c++)
              (o[c].fn !== t ||
                (r && !o[c].once) ||
                (i && o[c].context !== i)) &&
                d.push(o[c]);
            d.length
              ? (this._events[a] = 1 === d.length ? d[0] : d)
              : s(this, a);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
  },
]);
