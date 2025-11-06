"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7972],
  {
    15935: (t, e, n) => {
      n.d(e, { r: () => y });
      var r = n(11914),
        s = n(42438),
        i = n(30598),
        a = n(90707),
        o = n(21681),
        c = n(62023);
      function u(t) {
        return "number" == typeof t ? t : "wei" === t ? 0 : Math.abs(c.pj[t]);
      }
      var l = n(35326),
        h = n(61812);
      async function d(t, e) {
        let { allowFailure: n = !0, chainId: r, contracts: s, ...i } = e,
          a = t.getClient({ chainId: r });
        return (0, o.T)(
          a,
          h.C,
          "multicall"
        )({ allowFailure: n, contracts: s, ...i });
      }
      var f = n(25157);
      async function p(t, e) {
        let { allowFailure: n = !0, blockNumber: r, blockTag: s, ...i } = e,
          a = e.contracts;
        try {
          let e = {};
          for (let [n, r] of a.entries()) {
            let s = r.chainId ?? t.state.chainId;
            e[s] || (e[s] = []), e[s]?.push({ contract: r, index: n });
          }
          let o = (
              await Promise.all(
                Object.entries(e).map(([e, a]) =>
                  d(t, {
                    ...i,
                    allowFailure: n,
                    blockNumber: r,
                    blockTag: s,
                    chainId: Number.parseInt(e, 10),
                    contracts: a.map(({ contract: t }) => t),
                  })
                )
              )
            ).flat(),
            c = Object.values(e).flatMap((t) => t.map(({ index: t }) => t));
          return o.reduce((t, e, n) => (t && (t[c[n]] = e), t), []);
        } catch (i) {
          if (i instanceof l.bG) throw i;
          let e = () =>
            a.map((e) =>
              (function (t, e) {
                let { chainId: n, ...r } = e,
                  s = t.getClient({ chainId: n });
                return (0, o.T)(s, f.J, "readContract")(r);
              })(t, { ...e, blockNumber: r, blockTag: s })
            );
          if (n)
            return (await Promise.allSettled(e())).map((t) =>
              "fulfilled" === t.status
                ? { result: t.value, status: "success" }
                : { error: t.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(e());
        }
      }
      async function y(t, e) {
        let {
          address: n,
          blockNumber: c,
          blockTag: l,
          chainId: h,
          token: d,
          unit: f = "ether",
        } = e;
        if (d)
          try {
            return await m(t, {
              balanceAddress: n,
              chainId: h,
              symbolType: "string",
              tokenAddress: d,
            });
          } catch (e) {
            if ("ContractFunctionExecutionError" === e.name) {
              let e = await m(t, {
                  balanceAddress: n,
                  chainId: h,
                  symbolType: "bytes32",
                  tokenAddress: d,
                }),
                i = (0, r.IQ)((0, s.B)(e.symbol, { dir: "right" }));
              return { ...e, symbol: i };
            }
            throw e;
          }
        let p = t.getClient({ chainId: h }),
          y = (0, o.T)(p, a.r, "getBalance"),
          v = await y(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: l }
          ),
          b = t.chains.find((t) => t.id === h) ?? p.chain;
        return {
          decimals: b.nativeCurrency.decimals,
          formatted: (0, i.J)(v, u(f)),
          symbol: b.nativeCurrency.symbol,
          value: v,
        };
      }
      async function m(t, e) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: s,
            tokenAddress: a,
            unit: o,
          } = e,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: s }],
              },
            ],
            address: a,
          },
          [l, h, d] = await p(t, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          f = (0, i.J)(l ?? "0", u(o ?? h));
        return { decimals: h, formatted: f, symbol: d, value: l };
      }
    },
    21340: (t, e, n) => {
      n.d(e, { S: () => i });
      var r = n(43159),
        s = n(93420);
      async function i(t, e) {
        let { addEthereumChainParameter: n, chainId: i } = e,
          a = t.state.connections.get(e.connector?.uid ?? t.state.current);
        if (a) {
          let t = a.connector;
          if (!t.switchChain) throw new s.V({ connector: t });
          return await t.switchChain({
            addEthereumChainParameter: n,
            chainId: i,
          });
        }
        let o = t.chains.find((t) => t.id === i);
        if (!o) throw new r.nk();
        return t.setState((t) => ({ ...t, chainId: i })), o;
      }
    },
    21681: (t, e, n) => {
      n.d(e, { T: () => r });
      function r(t, e, n) {
        let r = t[e.name];
        if ("function" == typeof r) return r;
        let s = t[n];
        return "function" == typeof s ? s : (n) => e(t, n);
      }
    },
    26767: (t, e, n) => {
      n.d(e, { v: () => s });
      var r = n(29454);
      function s({ chain: t, currentChainId: e }) {
        if (!t) throw new r.jF();
        if (e !== t.id) throw new r.EH({ chain: t, currentChainId: e });
      }
    },
    28698: (t, e, n) => {
      n.d(e, { C: () => o });
      var r,
        s,
        i = n(46465),
        a = function (t, e, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
        };
      class o extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return `@wagmi/core@${i.r}`;
        }
        constructor(t, e = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              e.cause instanceof o
                ? e.cause.details
                : e.cause?.message
                ? e.cause.message
                : e.details,
            s = (e.cause instanceof o && e.cause.docsPath) || e.docsPath;
          (this.message = [
            t || "An error occurred.",
            "",
            ...(e.metaMessages ? [...e.metaMessages, ""] : []),
            ...(s
              ? [
                  `Docs: ${this.docsBaseUrl}${s}.html${
                    e.docsSlug ? `#${e.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            e.cause && (this.cause = e.cause),
            (this.details = n),
            (this.docsPath = s),
            (this.metaMessages = e.metaMessages),
            (this.shortMessage = t);
        }
        walk(t) {
          return a(this, r, "m", s).call(this, this, t);
        }
      }
      (r = new WeakSet()),
        (s = function t(e, n) {
          return n?.(e)
            ? e
            : e.cause
            ? a(this, r, "m", t).call(this, e.cause, n)
            : e;
        });
    },
    29899: (t, e, n) => {
      n.d(e, { r: () => c });
      var r = n(95089),
        s = n(53473),
        i = n(97152),
        a = n(77608),
        o = n(43159);
      async function c(t, e = {}) {
        let n,
          { assertChainId: u = !0 } = e;
        if (e.connector) {
          let { connector: r } = e;
          if (
            "reconnecting" === t.state.status &&
            !r.getAccounts &&
            !r.getChainId
          )
            throw new o.HF({ connector: r });
          let [s, i] = await Promise.all([
            r.getAccounts().catch((t) => {
              if (null === e.account) return [];
              throw t;
            }),
            r.getChainId(),
          ]);
          n = { accounts: s, chainId: i, connector: r };
        } else n = t.state.connections.get(t.state.current);
        if (!n) throw new o.gC();
        let l = e.chainId ?? n.chainId,
          h = await n.connector.getChainId();
        if (u && h !== l)
          throw new o.xU({ connectionChainId: l, connectorChainId: h });
        let d = n.connector;
        if (d.getClient) return d.getClient({ chainId: l });
        let f = (0, i.J)(e.account ?? n.accounts[0]);
        if (
          (f && (f.address = (0, a.b)(f.address)),
          e.account &&
            !n.accounts.some(
              (t) => t.toLowerCase() === f.address.toLowerCase()
            ))
        )
          throw new o.aj({ address: f.address, connector: d });
        let p = t.chains.find((t) => t.id === l),
          y = await n.connector.getProvider({ chainId: l });
        return (0, r.U)({
          account: f,
          chain: p,
          name: "Connector Client",
          transport: (t) =>
            (function (t, e = {}) {
              let {
                key: n = "custom",
                methods: r,
                name: i = "Custom Provider",
                retryDelay: a,
              } = e;
              return ({ retryCount: o }) =>
                (0, s.o)({
                  key: n,
                  methods: r,
                  name: i,
                  request: t.request.bind(t),
                  retryCount: e.retryCount ?? o,
                  retryDelay: a,
                  type: "custom",
                });
            })(y)({ ...t, retryCount: 0 }),
        });
      }
    },
    31464: (t, e, n) => {
      n.d(e, { M: () => s });
      let r = !1;
      async function s(t, e = {}) {
        let n;
        if (r) return [];
        (r = !0),
          t.setState((t) => ({
            ...t,
            status: t.current ? "reconnecting" : "connecting",
          }));
        let i = [];
        if (e.connectors?.length)
          for (let n of e.connectors) {
            let e;
            (e = "function" == typeof n ? t._internal.connectors.setup(n) : n),
              i.push(e);
          }
        else i.push(...t.connectors);
        try {
          n = await t.storage?.getItem("recentConnectorId");
        } catch {}
        let a = {};
        for (let [, e] of t.state.connections) a[e.connector.id] = 1;
        n && (a[n] = 0);
        let o =
            Object.keys(a).length > 0
              ? [...i].sort((t, e) => (a[t.id] ?? 10) - (a[e.id] ?? 10))
              : i,
          c = !1,
          u = [],
          l = [];
        for (let e of o) {
          let n = await e.getProvider().catch(() => void 0);
          if (!n || l.some((t) => t === n) || !(await e.isAuthorized()))
            continue;
          let r = await e.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (e.emitter.off("connect", t._internal.events.connect),
            e.emitter.on("change", t._internal.events.change),
            e.emitter.on("disconnect", t._internal.events.disconnect),
            t.setState((t) => {
              let n = new Map(c ? t.connections : new Map()).set(e.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: e,
              });
              return { ...t, current: c ? t.current : e.uid, connections: n };
            }),
            u.push({ accounts: r.accounts, chainId: r.chainId, connector: e }),
            l.push(n),
            (c = !0));
        }
        return (
          ("reconnecting" === t.state.status ||
            "connecting" === t.state.status) &&
            (c
              ? t.setState((t) => ({ ...t, status: "connected" }))
              : t.setState((t) => ({
                  ...t,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (r = !1),
          u
        );
      }
    },
    31668: (t, e, n) => {
      n.d(e, { X: () => o, k: () => c });
      var r = n(34049),
        s = n(74268),
        i = n(93049),
        a = n(69781),
        o = class extends a.k {
          #t;
          #e;
          #n;
          #r;
          #s;
          #i;
          #a;
          constructor(t) {
            super(),
              (this.#a = !1),
              (this.#i = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#r = t.client),
              (this.#n = this.#r.getQueryCache()),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#t = u(this.options)),
              (this.state = t.state ?? this.#t),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#s?.promise;
          }
          setOptions(t) {
            if (
              ((this.options = { ...this.#i, ...t }),
              this.updateGcTime(this.options.gcTime),
              this.state && void 0 === this.state.data)
            ) {
              let t = u(this.options);
              void 0 !== t.data &&
                (this.setData(t.data, {
                  updatedAt: t.dataUpdatedAt,
                  manual: !0,
                }),
                (this.#t = t));
            }
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#n.remove(this);
          }
          setData(t, e) {
            let n = (0, r.pl)(this.state.data, t, this.options);
            return (
              this.#o({
                data: n,
                type: "success",
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              n
            );
          }
          setState(t, e) {
            this.#o({ type: "setState", state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#s?.promise;
            return (
              this.#s?.cancel(t),
              e ? e.then(r.lQ).catch(r.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#t);
          }
          isActive() {
            return this.observers.some(
              (t) => !1 !== (0, r.Eh)(t.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === r.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some(
                (t) => "static" === (0, r.d2)(t.options.staleTime, this)
              )
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((t) => t.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(t = 0) {
            return (
              void 0 === this.state.data ||
              ("static" !== t &&
                (!!this.state.isInvalidated ||
                  !(0, r.j3)(this.state.dataUpdatedAt, t)))
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#s?.continue();
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#s?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#n.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#s &&
                  (this.#a
                    ? this.#s.cancel({ revert: !0 })
                    : this.#s.cancelRetry()),
                this.scheduleGc()),
              this.#n.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#o({ type: "invalidate" });
          }
          async fetch(t, e) {
            if (
              "idle" !== this.state.fetchStatus &&
              this.#s?.status() !== "rejected"
            ) {
              if (void 0 !== this.state.data && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let n = new AbortController(),
              s = (t) => {
                Object.defineProperty(t, "signal", {
                  enumerable: !0,
                  get: () => ((this.#a = !0), n.signal),
                });
              },
              a = () => {
                let t = (0, r.ZM)(this.options, e),
                  n = (() => {
                    let t = {
                      client: this.#r,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return s(t), t;
                  })();
                return ((this.#a = !1), this.options.persister)
                  ? this.options.persister(t, n, this)
                  : t(n);
              },
              o = (() => {
                let t = {
                  fetchOptions: e,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#r,
                  state: this.state,
                  fetchFn: a,
                };
                return s(t), t;
              })();
            this.options.behavior?.onFetch(o, this),
              (this.#e = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== o.fetchOptions?.meta) &&
                this.#o({ type: "fetch", meta: o.fetchOptions?.meta }),
              (this.#s = (0, i.II)({
                initialPromise: e?.initialPromise,
                fn: o.fetchFn,
                onCancel: (t) => {
                  t instanceof i.cc &&
                    t.revert &&
                    this.setState({ ...this.#e, fetchStatus: "idle" }),
                    n.abort();
                },
                onFail: (t, e) => {
                  this.#o({ type: "failed", failureCount: t, error: e });
                },
                onPause: () => {
                  this.#o({ type: "pause" });
                },
                onContinue: () => {
                  this.#o({ type: "continue" });
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0,
              }));
            try {
              let t = await this.#s.start();
              if (void 0 === t)
                throw Error(`${this.queryHash} data is undefined`);
              return (
                this.setData(t),
                this.#n.config.onSuccess?.(t, this),
                this.#n.config.onSettled?.(t, this.state.error, this),
                t
              );
            } catch (t) {
              if (t instanceof i.cc) {
                if (t.silent) return this.#s.promise;
                else if (t.revert) {
                  if (void 0 === this.state.data) throw t;
                  return this.state.data;
                }
              }
              throw (
                (this.#o({ type: "error", error: t }),
                this.#n.config.onError?.(t, this),
                this.#n.config.onSettled?.(this.state.data, t, this),
                t)
              );
            } finally {
              this.scheduleGc();
            }
          }
          #o(t) {
            let e = (e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case "pause":
                  return { ...e, fetchStatus: "paused" };
                case "continue":
                  return { ...e, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...e,
                    ...c(e.data, this.options),
                    fetchMeta: t.meta ?? null,
                  };
                case "success":
                  let n = {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                  return (this.#e = t.manual ? n : void 0), n;
                case "error":
                  let r = t.error;
                  return {
                    ...e,
                    error: r,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...e, isInvalidated: !0 };
                case "setState":
                  return { ...e, ...t.state };
              }
            };
            (this.state = e(this.state)),
              s.jG.batch(() => {
                this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#n.notify({ query: this, type: "updated", action: t });
              });
          }
        };
      function c(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, i.v_)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
      function u(t) {
        let e =
            "function" == typeof t.initialData
              ? t.initialData()
              : t.initialData,
          n = void 0 !== e,
          r = n
            ? "function" == typeof t.initialDataUpdatedAt
              ? t.initialDataUpdatedAt()
              : t.initialDataUpdatedAt
            : 0;
        return {
          data: e,
          dataUpdateCount: 0,
          dataUpdatedAt: n ? r ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: n ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
    },
    34049: (t, e, n) => {
      n.d(e, {
        Cp: () => y,
        EN: () => p,
        Eh: () => l,
        F$: () => f,
        GU: () => E,
        MK: () => h,
        S$: () => s,
        ZM: () => j,
        ZZ: () => T,
        Zw: () => a,
        d2: () => u,
        f8: () => v,
        gn: () => o,
        hT: () => P,
        j3: () => c,
        lQ: () => i,
        nJ: () => d,
        pl: () => S,
        y9: () => O,
        yy: () => C,
      });
      var r = n(37126),
        s = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function a(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function c(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function l(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function h(t, e) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: s,
          predicate: i,
          queryKey: a,
          stale: o,
        } = t;
        if (a) {
          if (r) {
            if (e.queryHash !== f(a, e.options)) return !1;
          } else if (!y(e.queryKey, a)) return !1;
        }
        if ("all" !== n) {
          let t = e.isActive();
          if (("active" === n && !t) || ("inactive" === n && t)) return !1;
        }
        return (
          ("boolean" != typeof o || e.isStale() === o) &&
          (!s || s === e.state.fetchStatus) &&
          (!i || !!i(e))
        );
      }
      function d(t, e) {
        let { exact: n, status: r, predicate: s, mutationKey: i } = t;
        if (i) {
          if (!e.options.mutationKey) return !1;
          if (n) {
            if (p(e.options.mutationKey) !== p(i)) return !1;
          } else if (!y(e.options.mutationKey, i)) return !1;
        }
        return (!r || e.state.status === r) && (!s || !!s(e));
      }
      function f(t, e) {
        return (e?.queryKeyHashFn || p)(t);
      }
      function p(t) {
        return JSON.stringify(t, (t, e) =>
          g(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, n) => ((t[n] = e[n]), t), {})
            : e
        );
      }
      function y(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            Object.keys(e).every((n) => y(t[n], e[n])))
        );
      }
      var m = Object.prototype.hasOwnProperty;
      function v(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let n in t) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function b(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function g(t) {
        if (!w(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let n = e.prototype;
        return (
          !!w(n) &&
          !!n.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function w(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function C(t) {
        return new Promise((e) => {
          r.zs.setTimeout(e, t);
        });
      }
      function S(t, e, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(t, e)
          : !1 !== n.structuralSharing
          ? (function t(e, n) {
              if (e === n) return e;
              let r = b(e) && b(n);
              if (!r && !(g(e) && g(n))) return n;
              let s = (r ? e : Object.keys(e)).length,
                i = r ? n : Object.keys(n),
                a = i.length,
                o = r ? Array(a) : {},
                c = 0;
              for (let u = 0; u < a; u++) {
                let a = r ? u : i[u],
                  l = e[a],
                  h = n[a];
                if (l === h) {
                  (o[a] = l), (r ? u < s : m.call(e, a)) && c++;
                  continue;
                }
                if (
                  null === l ||
                  null === h ||
                  "object" != typeof l ||
                  "object" != typeof h
                ) {
                  o[a] = h;
                  continue;
                }
                let d = t(l, h);
                (o[a] = d), d === l && c++;
              }
              return s === a && c === s ? e : o;
            })(t, e)
          : e;
      }
      function O(t, e, n = 0) {
        let r = [...t, e];
        return n && r.length > n ? r.slice(1) : r;
      }
      function T(t, e, n = 0) {
        let r = [e, ...t];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var P = Symbol();
      function j(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== P
          ? t.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
      function E(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
    },
    36369: (t, e, n) => {
      n.d(e, { l: () => a });
      var r = n(97152),
        s = n(64664),
        i = n(34561);
      async function a(t, { account: e = t.account, message: n }) {
        if (!e) throw new s.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, r.J)(e);
        if (a.signMessage) return a.signMessage({ message: n });
        let o =
          "string" == typeof n
            ? (0, i.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, i.nj)(n.raw)
            : n.raw;
        return t.request(
          { method: "personal_sign", params: [o, a.address] },
          { retryCount: 0 }
        );
      }
    },
    37126: (t, e, n) => {
      n.d(e, { Zq: () => i, zs: () => s });
      var r = {
          setTimeout: (t, e) => setTimeout(t, e),
          clearTimeout: (t) => clearTimeout(t),
          setInterval: (t, e) => setInterval(t, e),
          clearInterval: (t) => clearInterval(t),
        },
        s = new (class {
          #c = r;
          #u = !1;
          setTimeoutProvider(t) {
            this.#c = t;
          }
          setTimeout(t, e) {
            return this.#c.setTimeout(t, e);
          }
          clearTimeout(t) {
            this.#c.clearTimeout(t);
          }
          setInterval(t, e) {
            return this.#c.setInterval(t, e);
          }
          clearInterval(t) {
            this.#c.clearInterval(t);
          }
        })();
      function i(t) {
        setTimeout(t, 0);
      }
    },
    37219: (t, e, n) => {
      n.d(e, { v: () => b });
      var r = n(97152),
        s = n(64664),
        i = n(13933),
        a = n(84718),
        o = n(26767),
        c = n(60655),
        u = n(44332),
        l = n(74750),
        h = n(72757),
        d = n(20390),
        f = n(58623),
        p = n(35471),
        y = n(31063),
        m = n(72707);
      let v = new d.A(128);
      async function b(t, e) {
        let {
          account: n = t.account,
          chain: d = t.chain,
          accessList: b,
          authorizationList: g,
          blobs: w,
          data: C,
          gas: S,
          gasPrice: O,
          maxFeePerBlobGas: T,
          maxFeePerGas: P,
          maxPriorityFeePerGas: j,
          nonce: E,
          type: I,
          value: M,
          ...F
        } = e;
        if (void 0 === n)
          throw new s.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let R = n ? (0, r.J)(n) : null;
        try {
          (0, f.c)(e);
          let n = await (async () =>
            e.to
              ? e.to
              : null !== e.to && g && g.length > 0
              ? await (0, a.g)({ authorization: g[0] }).catch(() => {
                  throw new i.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (R?.type === "json-rpc" || null === R) {
            let e;
            null !== d &&
              ((e = await (0, h.T)(t, p.T, "getChainId")({})),
              (0, o.v)({ currentChainId: e, chain: d }));
            let r = t.chain?.formatters?.transactionRequest?.format,
              s = (r || l.Bv)({
                ...(0, u.o)(F, { format: r }),
                accessList: b,
                authorizationList: g,
                blobs: w,
                chainId: e,
                data: C,
                from: R?.address,
                gas: S,
                gasPrice: O,
                maxFeePerBlobGas: T,
                maxFeePerGas: P,
                maxPriorityFeePerGas: j,
                nonce: E,
                to: n,
                type: I,
                value: M,
              }),
              i = v.get(t.uid);
            try {
              return await t.request(
                {
                  method: i ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [s],
                },
                { retryCount: 0 }
              );
            } catch (e) {
              if (!1 === i) throw e;
              if (
                "InvalidInputRpcError" === e.name ||
                "InvalidParamsRpcError" === e.name ||
                "MethodNotFoundRpcError" === e.name ||
                "MethodNotSupportedRpcError" === e.name
              )
                return await t
                  .request(
                    { method: "wallet_sendTransaction", params: [s] },
                    { retryCount: 0 }
                  )
                  .then((e) => (v.set(t.uid, !0), e))
                  .catch((n) => {
                    if (
                      "MethodNotFoundRpcError" === n.name ||
                      "MethodNotSupportedRpcError" === n.name
                    )
                      throw (v.set(t.uid, !1), e);
                    throw n;
                  });
              throw e;
            }
          }
          if (R?.type === "local") {
            let e = await (0, h.T)(
                t,
                y.ft,
                "prepareTransactionRequest"
              )({
                account: R,
                accessList: b,
                authorizationList: g,
                blobs: w,
                chain: d,
                data: C,
                gas: S,
                gasPrice: O,
                maxFeePerBlobGas: T,
                maxFeePerGas: P,
                maxPriorityFeePerGas: j,
                nonce: E,
                nonceManager: R.nonceManager,
                parameters: [...y.MM, "sidecars"],
                type: I,
                value: M,
                ...F,
                to: n,
              }),
              r = d?.serializers?.transaction,
              s = await R.signTransaction(e, { serializer: r });
            return await (0, h.T)(
              t,
              m.L,
              "sendRawTransaction"
            )({ serializedTransaction: s });
          }
          if (R?.type === "smart")
            throw new s.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new s.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: R?.type,
          });
        } catch (t) {
          if (t instanceof s.Z) throw t;
          throw (0, c.p)(t, { ...e, account: R, chain: e.chain || void 0 });
        }
      }
    },
    38445: (t, e, n) => {
      n.d(e, { Q: () => r });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    38559: (t, e, n) => {
      n.d(e, { $: () => o, s: () => a });
      var r = n(74268),
        s = n(69781),
        i = n(93049),
        a = class extends s.k {
          #r;
          #l;
          #h;
          #s;
          constructor(t) {
            super(),
              (this.#r = t.client),
              (this.mutationId = t.mutationId),
              (this.#h = t.mutationCache),
              (this.#l = []),
              (this.state = t.state || o()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#l.includes(t) ||
              (this.#l.push(t),
              this.clearGcTimeout(),
              this.#h.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#l = this.#l.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#h.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#l.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#h.remove(this));
          }
          continue() {
            return this.#s?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
                this.#o({ type: "continue" });
              },
              n = {
                client: this.#r,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#s = (0, i.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t, n)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#o({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#o({ type: "pause" });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#h.canRun(this),
            });
            let r = "pending" === this.state.status,
              s = !this.#s.canStart();
            try {
              if (r) e();
              else {
                this.#o({ type: "pending", variables: t, isPaused: s }),
                  await this.#h.config.onMutate?.(t, this, n);
                let e = await this.options.onMutate?.(t, n);
                e !== this.state.context &&
                  this.#o({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: s,
                  });
              }
              let i = await this.#s.start();
              return (
                await this.#h.config.onSuccess?.(
                  i,
                  t,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(i, t, this.state.context, n),
                await this.#h.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  i,
                  null,
                  t,
                  this.state.context,
                  n
                ),
                this.#o({ type: "success", data: i }),
                i
              );
            } catch (e) {
              try {
                throw (
                  (await this.#h.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onError?.(e, t, this.state.context, n),
                  await this.#h.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context,
                    n
                  ),
                  e)
                );
              } finally {
                this.#o({ type: "error", error: e });
              }
            } finally {
              this.#h.runNext(this);
            }
          }
          #o(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.jG.batch(() => {
                this.#l.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#h.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    43159: (t, e, n) => {
      n.d(e, {
        HF: () => u,
        aj: () => o,
        gC: () => a,
        nM: () => i,
        nk: () => s,
        xU: () => c,
      });
      var r = n(28698);
      class s extends r.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class i extends r.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends r.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      r.C;
      class o extends r.C {
        constructor({ address: t, connector: e }) {
          super(`Account "${t}" not found for connector "${e.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends r.C {
        constructor({ connectionChainId: t, connectorChainId: e }) {
          super(
            `The current chain of the connector (id: ${e}) does not match the connection's chain (id: ${t}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${e}`,
                `Expected Chain ID: ${t}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class u extends r.C {
        constructor({ connector: t }) {
          super(`Connector "${t.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    46465: (t, e, n) => {
      n.d(e, { r: () => r });
      let r = "2.21.2";
    },
    56195: (t, e, n) => {
      n.d(e, { m: () => i });
      var r = n(38445),
        s = n(34049),
        i = new (class extends r.Q {
          #d;
          #f;
          #p;
          constructor() {
            super(),
              (this.#p = (t) => {
                if (!s.S$ && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#f || this.setEventListener(this.#p);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#f?.(), (this.#f = void 0));
          }
          setEventListener(t) {
            (this.#p = t),
              this.#f?.(),
              (this.#f = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#d !== t && ((this.#d = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#d
              ? this.#d
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    59094: (t, e, n) => {
      n.d(e, { R: () => a, x: () => o });
      var r = n(12115),
        s = n(31464);
      function i(t) {
        let {
            children: e,
            config: n,
            initialState: i,
            reconnectOnMount: a = !0,
          } = t,
          { onMount: o } = (function (t, e) {
            let { initialState: n, reconnectOnMount: r } = e;
            return (
              n &&
                !t._internal.store.persist.hasHydrated() &&
                t.setState({
                  ...n,
                  chainId: t.chains.some((t) => t.id === n.chainId)
                    ? n.chainId
                    : t.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  t._internal.ssr &&
                    (await t._internal.store.persist.rehydrate(),
                    t._internal.mipd &&
                      t._internal.connectors.setState((e) => {
                        let n = new Set();
                        for (let t of e ?? [])
                          if (t.rdns)
                            for (let e of Array.isArray(t.rdns)
                              ? t.rdns
                              : [t.rdns])
                              n.add(e);
                        let r = [];
                        for (let e of t._internal.mipd?.getProviders() ?? []) {
                          if (n.has(e.info.rdns)) continue;
                          let s =
                              t._internal.connectors.providerDetailToConnector(
                                e
                              ),
                            i = t._internal.connectors.setup(s);
                          r.push(i);
                        }
                        return [...e, ...r];
                      })),
                    r
                      ? (0, s.M)(t)
                      : t.storage &&
                        t.setState((t) => ({ ...t, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: a });
        n._internal.ssr || o();
        let c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                o(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          e
        );
      }
      let a = (0, r.createContext)(void 0);
      function o(t) {
        let { children: e, config: n } = t;
        return (0, r.createElement)(
          i,
          t,
          (0, r.createElement)(a.Provider, { value: n }, e)
        );
      }
    },
    60655: (t, e, n) => {
      n.d(e, { p: () => a });
      var r = n(88737),
        s = n(50879),
        i = n(61829);
      function a(t, { docsPath: e, ...n }) {
        let a = (() => {
          let e = (0, i.l)(t, n);
          return e instanceof r.RM ? t : e;
        })();
        return new s.$s(a, { docsPath: e, ...n });
      }
    },
    61405: (t, e, n) => {
      n.d(e, { F: () => i });
      var r = n(86161),
        s = n(96748);
      function i(t, e) {
        let { onChange: n } = e;
        return t.subscribe(() => (0, s.s)(t), n, {
          equalityFn(t, e) {
            let { connector: n, ...s } = t,
              { connector: i, ...a } = e;
            return (0, r.b)(s, a) && n?.id === i?.id && n?.uid === i?.uid;
          },
        });
      }
    },
    63122: (t, e, n) => {
      n.d(e, { t: () => i });
      var r = n(38445),
        s = n(34049),
        i = new (class extends r.Q {
          #y = !0;
          #f;
          #p;
          constructor() {
            super(),
              (this.#p = (t) => {
                if (!s.S$ && window.addEventListener) {
                  let e = () => t(!0),
                    n = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#f || this.setEventListener(this.#p);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#f?.(), (this.#f = void 0));
          }
          setEventListener(t) {
            (this.#p = t),
              this.#f?.(),
              (this.#f = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#y !== t &&
              ((this.#y = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#y;
          }
        })();
    },
    64664: (t, e, n) => {
      n.d(e, { T: () => s, Z: () => i });
      var r = n(13933);
      class s extends r.C {
        constructor({ docsPath: t } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: t, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class i extends r.C {
        constructor({ docsPath: t, metaMessages: e, type: n }) {
          super(`Account type "${n}" is not supported.`, {
            docsPath: t,
            metaMessages: e,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    65028: (t, e, n) => {
      n.d(e, { X: () => i });
      var r = n(13933);
      class s extends r.C {
        constructor({ value: t }) {
          super(`Number \`${t}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function i(t, e) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(t)) throw new s({ value: t });
        let [n, r = "0"] = t.split("."),
          i = n.startsWith("-");
        if ((i && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === e))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > e) {
          let [t, s, i] = [r.slice(0, e - 1), r.slice(e - 1, e), r.slice(e)],
            a = Math.round(Number(`${s}.${i}`));
          (r =
            a > 9
              ? `${BigInt(t) + BigInt(1)}0`.padStart(t.length + 1, "0")
              : `${t}${a}`).length > e &&
            ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, e));
        } else r = r.padEnd(e, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
    },
    66576: (t, e, n) => {
      n.d(e, { E: () => u });
      var r = n(97152),
        s = n(64664),
        i = n(30931),
        a = n(93527),
        o = n(72757),
        c = n(37219);
      async function u(t, e) {
        let {
          abi: n,
          account: u = t.account,
          address: l,
          args: h,
          dataSuffix: d,
          functionName: f,
          ...p
        } = e;
        if (void 0 === u)
          throw new s.T({ docsPath: "/docs/contract/writeContract" });
        let y = u ? (0, r.J)(u) : null,
          m = (0, i.p)({ abi: n, args: h, functionName: f });
        try {
          return await (0, o.T)(
            t,
            c.v,
            "sendTransaction"
          )({
            data: `${m}${d ? d.replace("0x", "") : ""}`,
            to: l,
            account: y,
            ...p,
          });
        } catch (t) {
          throw (0, a.j)(t, {
            abi: n,
            address: l,
            args: h,
            docsPath: "/docs/contract/writeContract",
            functionName: f,
            sender: y?.address,
          });
        }
      }
    },
    69781: (t, e, n) => {
      n.d(e, { k: () => i });
      var r = n(37126),
        s = n(34049),
        i = class {
          #m;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, s.gn)(this.gcTime) &&
                (this.#m = r.zs.setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (s.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#m && (r.zs.clearTimeout(this.#m), (this.#m = void 0));
          }
        };
    },
    74268: (t, e, n) => {
      n.d(e, { jG: () => s });
      var r = n(37126).Zq,
        s = (function () {
          let t = [],
            e = 0,
            n = (t) => {
              t();
            },
            s = (t) => {
              t();
            },
            i = r,
            a = (r) => {
              e
                ? t.push(r)
                : i(() => {
                    n(r);
                  });
            };
          return {
            batch: (r) => {
              let a;
              e++;
              try {
                a = r();
              } finally {
                --e ||
                  (() => {
                    let e = t;
                    (t = []),
                      e.length &&
                        i(() => {
                          s(() => {
                            e.forEach((t) => {
                              n(t);
                            });
                          });
                        });
                  })();
              }
              return a;
            },
            batchCalls:
              (t) =>
              (...e) => {
                a(() => {
                  t(...e);
                });
              },
            schedule: a,
            setNotifyFunction: (t) => {
              n = t;
            },
            setBatchNotifyFunction: (t) => {
              s = t;
            },
            setScheduler: (t) => {
              i = t;
            },
          };
        })();
    },
    83515: (t, e, n) => {
      n.d(e, { T: () => r });
      function r() {
        let t,
          e,
          n = new Promise((n, r) => {
            (t = n), (e = r);
          });
        function r(t) {
          Object.assign(n, t), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (e) => {
            r({ status: "fulfilled", value: e }), t(e);
          }),
          (n.reject = (t) => {
            r({ status: "rejected", reason: t }), e(t);
          }),
          n
        );
      }
    },
    86161: (t, e, n) => {
      n.d(e, {
        b: () =>
          function t(e, n) {
            if (e === n) return !0;
            if (e && n && "object" == typeof e && "object" == typeof n) {
              let r, s;
              if (e.constructor !== n.constructor) return !1;
              if (Array.isArray(e) && Array.isArray(n)) {
                if ((r = e.length) !== n.length) return !1;
                for (s = r; 0 != s--; ) if (!t(e[s], n[s])) return !1;
                return !0;
              }
              if (
                "function" == typeof e.valueOf &&
                e.valueOf !== Object.prototype.valueOf
              )
                return e.valueOf() === n.valueOf();
              if (
                "function" == typeof e.toString &&
                e.toString !== Object.prototype.toString
              )
                return e.toString() === n.toString();
              let i = Object.keys(e);
              if ((r = i.length) !== Object.keys(n).length) return !1;
              for (s = r; 0 != s--; ) if (!Object.hasOwn(n, i[s])) return !1;
              for (s = r; 0 != s--; ) {
                let r = i[s];
                if (r && !t(e[r], n[r])) return !1;
              }
              return !0;
            }
            return e != e && n != n;
          },
      });
    },
    93049: (t, e, n) => {
      n.d(e, { II: () => l, cc: () => u, v_: () => c });
      var r = n(56195),
        s = n(63122),
        i = n(83515),
        a = n(34049);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function c(t) {
        return (t ?? "online") !== "online" || s.t.isOnline();
      }
      var u = class extends Error {
        constructor(t) {
          super("CancelledError"),
            (this.revert = t?.revert),
            (this.silent = t?.silent);
        }
      };
      function l(t) {
        let e,
          n = !1,
          l = 0,
          h = (0, i.T)(),
          d = () =>
            r.m.isFocused() &&
            ("always" === t.networkMode || s.t.isOnline()) &&
            t.canRun(),
          f = () => c(t.networkMode) && t.canRun(),
          p = (t) => {
            "pending" === h.status && (e?.(), h.resolve(t));
          },
          y = (t) => {
            "pending" === h.status && (e?.(), h.reject(t));
          },
          m = () =>
            new Promise((n) => {
              (e = (t) => {
                ("pending" !== h.status || d()) && n(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), "pending" === h.status && t.onContinue?.();
            }),
          v = () => {
            let e;
            if ("pending" !== h.status) return;
            let r = 0 === l ? t.initialPromise : void 0;
            try {
              e = r ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(p)
              .catch((e) => {
                if ("pending" !== h.status) return;
                let r = t.retry ?? 3 * !a.S$,
                  s = t.retryDelay ?? o,
                  i = "function" == typeof s ? s(l, e) : s,
                  c =
                    !0 === r ||
                    ("number" == typeof r && l < r) ||
                    ("function" == typeof r && r(l, e));
                if (n || !c) return void y(e);
                l++,
                  t.onFail?.(l, e),
                  (0, a.yy)(i)
                    .then(() => (d() ? void 0 : m()))
                    .then(() => {
                      n ? y(e) : v();
                    });
              });
          };
        return {
          promise: h,
          status: () => h.status,
          cancel: (e) => {
            if ("pending" === h.status) {
              let n = new u(e);
              y(n), t.onCancel?.(n);
            }
          },
          continue: () => (e?.(), h),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: f,
          start: () => (f() ? v() : m().then(v), h),
        };
      }
    },
    93420: (t, e, n) => {
      n.d(e, { N: () => s, V: () => i });
      var r = n(28698);
      class s extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class i extends r.C {
        constructor({ connector: t }) {
          super(`"${t.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    96748: (t, e, n) => {
      n.d(e, { s: () => r });
      function r(t) {
        let e = t.state.current,
          n = t.state.connections.get(e),
          r = n?.accounts,
          s = r?.[0],
          i = t.chains.find((t) => t.id === n?.chainId),
          a = t.state.status;
        switch (a) {
          case "connected":
            return {
              address: s,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: s,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!s,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: s,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
    },
    98594: (t, e, n) => {
      n.d(e, {
        D8t: () => r.D8t,
        E3H: () => r.E3H,
        K53: () => r.K53,
        NBY: () => r.NBY,
        Rry: () => r.Rry,
        TqE: () => r.TqE,
        X5s: () => r.X5s,
        n1: () => r.n1,
        rCZ: () => r.rCZ,
        tWt: () => r.tWt,
        vRv: () => r.vRv,
        xHY: () => r.xHY,
      });
      var r = n(83804);
    },
    99776: (t, e, n) => {
      n.d(e, { Ht: () => o, jE: () => a });
      var r = n(12115),
        s = n(95155),
        i = r.createContext(void 0),
        a = (t) => {
          let e = r.useContext(i);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        o = (t) => {
          let { client: e, children: n } = t;
          return (
            r.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, s.jsx)(i.Provider, { value: e, children: n })
          );
        };
    },
  },
]);
