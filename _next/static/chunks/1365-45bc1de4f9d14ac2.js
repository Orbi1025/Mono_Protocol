"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1365],
  {
    253: (e, t, r) => {
      r.d(t, { UG: () => s, xo: () => a, zz: () => i });
      var n = r(11134);
      class a extends n.C {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class i extends n.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class s extends n.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    1347: (e, t, r) => {
      r.d(t, { iY: () => c });
      var n = r(97525),
        a = r(60587),
        i = r(24784),
        s = r(33704),
        o = r(88878);
      function c(e) {
        let t,
          { abi: r, args: c = [], name: f } = e,
          u = (0, a.q)(f, { strict: !1 }),
          l = r.filter((e) =>
            u
              ? "function" === e.type
                ? (0, o.V)(e) === f
                : "event" === e.type && (0, s.h)(e) === f
              : "name" in e && e.name === f
          );
        if (0 !== l.length) {
          if (1 === l.length) return l[0];
          for (let e of l) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, r) => {
                  let n = "inputs" in e && e.inputs[r];
                  return (
                    !!n &&
                    (function e(t, r) {
                      let n = typeof t,
                        a = r.type;
                      switch (a) {
                        case "address":
                          return (0, i.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === n;
                        case "function":
                        case "string":
                          return "string" === n;
                        default:
                          if ("tuple" === a && "components" in r)
                            return Object.values(r.components).every((r, n) =>
                              e(Object.values(t)[n], r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              a
                            )
                          )
                            return "number" === n || "bigint" === n;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                            return "string" === n || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...r,
                                  type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, n)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let r = (function e(t, r, n) {
                    for (let a in t) {
                      let s = t[a],
                        o = r[a];
                      if (
                        "tuple" === s.type &&
                        "tuple" === o.type &&
                        "components" in s &&
                        "components" in o
                      )
                        return e(s.components, o.components, n[a]);
                      let c = [s.type, o.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, i.P)(n[a], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (r)
                    throw new n.nM(
                      { abiItem: e, type: r[0] },
                      { abiItem: t, type: r[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || l[0];
        }
      }
    },
    1588: (e, t, r) => {
      r.d(t, { BD: () => a, D5: () => n, Ge: () => i });
      let n = /^(.*)\[([0-9]*)\]$/,
        a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    1761: (e, t, r) => {
      r.d(t, { h: () => i });
      var n = r(50879),
        a = r(90523);
      async function i(e, { hash: t }) {
        let r = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!r) throw new n.Kc({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || a.uL)(r);
      }
    },
    2685: (e, t, r) => {
      r.d(t, {
        A9: () => a,
        NO: () => o,
        Pj: () => c,
        dV: () => i,
        nx: () => f,
        zd: () => s,
      });
      var n = r(11134);
      n.C;
      class a extends n.C {
        constructor({ params: e }) {
          super("Failed to parse ABI parameters.", {
            details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiparameters-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiParametersError",
            });
        }
      }
      class i extends n.C {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class s extends n.C {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class o extends n.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class c extends n.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class f extends n.C {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
    3972: (e, t, r) => {
      r.d(t, { T: () => $ });
      var n = r(70511),
        a = r(43712),
        i = r(97152),
        s = r(4486),
        o = r(54560),
        c = r(13933),
        f = r(29454),
        u = r(35326),
        l = r(32733),
        d = r(6867),
        b = r(30931),
        p = r(71552),
        m = r(34561),
        y = r(96565),
        h = r(44332),
        g = r(74750),
        v = r(67550),
        w = r(4274),
        x = r(58623);
      async function $(e, t) {
        let {
            account: s = e.account,
            authorizationList: l,
            batch: b = !!e.batch?.multicall,
            blockNumber: p,
            blockTag: v = e.experimental_blockTag ?? "latest",
            accessList: $,
            blobs: B,
            blockOverrides: M,
            code: E,
            data: I,
            factory: k,
            factoryData: C,
            gas: j,
            gasPrice: z,
            maxFeePerBlobGas: F,
            maxFeePerGas: T,
            maxPriorityFeePerGas: O,
            nonce: N,
            to: S,
            value: G,
            stateOverride: _,
            ...R
          } = t,
          D = s ? (0, i.J)(s) : void 0;
        if (E && (k || C))
          throw new c.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (E && S)
          throw new c.C("Cannot provide both `code` & `to` as parameters.");
        let K = E && I,
          q = k && C && S && I,
          L = K || q,
          H = K
            ? A({ code: E, data: I })
            : q
            ? (function (e) {
                let { data: t, factory: r, factoryData: a, to: i } = e;
                return (0, d.m)({
                  abi: (0, n.U)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: o.WN,
                  args: [i, t, r, a],
                });
              })({ data: I, factory: k, factoryData: C, to: S })
            : I;
        try {
          (0, x.c)(t);
          let r = ("bigint" == typeof p ? (0, m.cK)(p) : void 0) || v,
            n = M ? a.J(M) : void 0,
            i = (0, w.yH)(_),
            s = e.chain?.formatters?.transactionRequest?.format,
            o = (s || g.Bv)({
              ...(0, h.o)(R, { format: s }),
              from: D?.address,
              accessList: $,
              authorizationList: l,
              blobs: B,
              data: H,
              gas: j,
              gasPrice: z,
              maxFeePerBlobGas: F,
              maxFeePerGas: T,
              maxPriorityFeePerGas: O,
              nonce: N,
              to: L ? void 0 : S,
              value: G,
            });
          if (
            b &&
            (function ({ request: e }) {
              let { data: t, to: r, ...n } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!r &&
                !(Object.values(n).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: o }) &&
            !i &&
            !n
          )
            try {
              return await P(e, { ...o, blockNumber: p, blockTag: v });
            } catch (e) {
              if (!(e instanceof f.YE) && !(e instanceof f.rj)) throw e;
            }
          let c = (() => {
              let e = [o, r];
              return i && n
                ? [...e, i, n]
                : i
                ? [...e, i]
                : n
                ? [...e, {}, n]
                : e;
            })(),
            u = await e.request({ method: "eth_call", params: c });
          if ("0x" === u) return { data: void 0 };
          return { data: u };
        } catch (s) {
          let n = (function (e) {
              if (!(e instanceof c.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(s),
            { offchainLookup: a, offchainLookupSignature: i } = await r
              .e(6514)
              .then(r.bind(r, 16514));
          if (!1 !== e.ccipRead && n?.slice(0, 10) === i && S)
            return { data: await a(e, { data: n, to: S }) };
          if (L && n?.slice(0, 10) === "0x101bb98d")
            throw new u.Po({ factory: k });
          throw (0, y.d)(s, { ...t, account: D, chain: e.chain });
        }
      }
      async function P(e, t) {
        let {
            batchSize: r = 1024,
            deployless: n = !1,
            wait: a = 0,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: i,
            blockTag: c = e.experimental_blockTag ?? "latest",
            data: d,
            to: y,
          } = t,
          h = (() => {
            if (n) return null;
            if (t.multicallAddress) return t.multicallAddress;
            if (e.chain)
              return (0, p.M)({
                blockNumber: i,
                chain: e.chain,
                contract: "multicall3",
              });
            throw new f.YE();
          })(),
          g = ("bigint" == typeof i ? (0, m.cK)(i) : void 0) || c,
          { schedule: w } = (0, v.u)({
            id: `${e.uid}.${g}`,
            wait: a,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
            fn: async (t) => {
              let r = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                n = (0, b.p)({
                  abi: s.v2,
                  args: [r],
                  functionName: "aggregate3",
                }),
                a = await e.request({
                  method: "eth_call",
                  params: [
                    {
                      ...(null === h
                        ? { data: A({ code: o.Ez, data: n }) }
                        : { to: h, data: n }),
                    },
                    g,
                  ],
                });
              return (0, l.e)({
                abi: s.v2,
                args: [r],
                functionName: "aggregate3",
                data: a || "0x",
              });
            },
          }),
          [{ returnData: x, success: $ }] = await w({ data: d, to: y });
        if (!$) throw new u.$S({ data: x });
        return "0x" === x ? { data: void 0 } : { data: x };
      }
      function A(e) {
        let { code: t, data: r } = e;
        return (0, d.m)({
          abi: (0, n.U)(["constructor(bytes, bytes)"]),
          bytecode: o.LX,
          args: [t, r],
        });
      }
    },
    4274: (e, t, r) => {
      r.d(t, { yH: () => f });
      var n = r(76115),
        a = r(66969),
        i = r(35674),
        s = r(24784),
        o = r(34561);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: r }) => {
            if (66 !== t.length)
              throw new a.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== r.length)
              throw new a.NV({ size: r.length, targetSize: 66, type: "hex" });
            return (e[t] = r), e;
          }, {});
      }
      function f(e) {
        if (!e) return;
        let t = {};
        for (let { address: r, ...a } of e) {
          if (!(0, s.P)(r, { strict: !1 })) throw new n.M({ address: r });
          if (t[r]) throw new i.Hi({ address: r });
          t[r] = (function (e) {
            let { balance: t, nonce: r, state: n, stateDiff: a, code: s } = e,
              f = {};
            if (
              (void 0 !== s && (f.code = s),
              void 0 !== t && (f.balance = (0, o.cK)(t)),
              void 0 !== r && (f.nonce = (0, o.cK)(r)),
              void 0 !== n && (f.state = c(n)),
              void 0 !== a)
            ) {
              if (f.state) throw new i.ft();
              f.stateDiff = c(a);
            }
            return f;
          })(a);
        }
        return t;
      }
    },
    5766: (e, t, r) => {
      r.d(t, { q: () => f });
      var n = r(11914),
        a = r(72757),
        i = r(87639),
        s = r(94788),
        o = r(59350),
        c = r(70054);
      function f(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: r = !1,
          onBlockNumber: f,
          onError: u,
          poll: l,
          pollingInterval: d = e.pollingInterval,
        }
      ) {
        let b;
        return (
          void 0 !== l
            ? l
            : "webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let n = (0, o.A)(["watchBlockNumber", e.uid, t, r, d]);
              return (0, i.lB)(n, { onBlockNumber: f, onError: u }, (n) =>
                (0, s.w)(
                  async () => {
                    try {
                      let t = await (0, a.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (void 0 !== b) {
                        if (t === b) return;
                        if (t - b > 1 && r)
                          for (let e = b + 1n; e < t; e++)
                            n.onBlockNumber(e, b), (b = e);
                      }
                      (void 0 === b || t > b) &&
                        (n.onBlockNumber(t, b), (b = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: d }
                )
              );
            })()
          : (() => {
              let a = (0, o.A)(["watchBlockNumber", e.uid, t, r]);
              return (0, i.lB)(a, { onBlockNumber: f, onError: u }, (t) => {
                let r = !0,
                  a = () => (r = !1);
                return (
                  (async () => {
                    try {
                      let i = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: s } = await i.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!r) return;
                            let a = (0, n.uU)(e.result?.number);
                            t.onBlockNumber(a, b), (b = a);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (a = s), r || a();
                    } catch (e) {
                      u?.(e);
                    }
                  })(),
                  () => a()
                );
              });
            })();
      }
    },
    5935: (e, t, r) => {
      r.d(t, { N: () => f, b: () => c });
      var n = r(32915),
        a = r(11914),
        i = r(72757),
        s = r(60186),
        o = r(32395);
      async function c(e, t) {
        return f(e, t);
      }
      async function f(e, t) {
        let { block: r, chain: c = e.chain, request: f } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let n = r || (await (0, i.T)(e, s.g, "getBlock")({})),
              a = await t({ block: n, client: e, request: f });
            if (null === a) throw Error();
            return a;
          }
          if (void 0 !== t) return t;
          let n = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, a.uU)(n);
        } catch {
          let [t, a] = await Promise.all([
            r ? Promise.resolve(r) : (0, i.T)(e, s.g, "getBlock")({}),
            (0, i.T)(e, o.L, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new n.pw();
          let c = a - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    6434: (e, t, r) => {
      r.d(t, { y: () => i });
      var n = r(11914),
        a = r(34561);
      async function i(
        e,
        { address: t, blockTag: r = "latest", blockNumber: i }
      ) {
        let s = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof i ? (0, a.cK)(i) : r],
          },
          { dedupe: !!i }
        );
        return (0, n.ME)(s);
      }
    },
    6867: (e, t, r) => {
      r.d(t, { m: () => o });
      var n = r(97525),
        a = r(40290),
        i = r(41706);
      let s = "/docs/contract/encodeDeployData";
      function o(e) {
        let { abi: t, args: r, bytecode: o } = e;
        if (!r || 0 === r.length) return o;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new n.YW({ docsPath: s });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new n.YF({ docsPath: s });
        let f = (0, i.h)(c.inputs, r);
        return (0, a.aP)([o, f]);
      }
    },
    11134: (e, t, r) => {
      r.d(t, { C: () => n });
      class n extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof n
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof n && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(a ? [`Docs: https://abitype.dev${a}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              "Version: abitype@1.1.0",
            ].join("\n")
          ),
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
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    23222: (e, t, r) => {
      r.d(t, { A: () => i, B: () => a });
      var n = r(97525);
      function a(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new n.d_(e.type);
        return `${e.name}(${i(e.inputs, { includeName: t })})`;
      }
      function i(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${i(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    25157: (e, t, r) => {
      r.d(t, { J: () => c });
      var n = r(32733),
        a = r(30931),
        i = r(93527),
        s = r(72757),
        o = r(3972);
      async function c(e, t) {
        let { abi: r, address: c, args: f, functionName: u, ...l } = t,
          d = (0, a.p)({ abi: r, args: f, functionName: u });
        try {
          let { data: t } = await (0, s.T)(
            e,
            o.T,
            "call"
          )({ ...l, data: d, to: c });
          return (0, n.e)({
            abi: r,
            args: f,
            functionName: u,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, i.j)(e, {
            abi: r,
            address: c,
            args: f,
            docsPath: "/docs/contract/readContract",
            functionName: u,
          });
        }
      }
    },
    26722: (e, t, r) => {
      r.d(t, { e: () => l });
      var n = r(93398),
        a = r(253),
        i = r(2685),
        s = r(46206),
        o = r(11134);
      class c extends o.C {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var f = r(53098),
        u = r(32255);
      function l(e) {
        let t = {},
          r = e.length;
        for (let n = 0; n < r; n++) {
          let r = e[n];
          if (!(0, f.WL)(r)) continue;
          let a = (0, f.FO)(r);
          if (!a) throw new s.s7({ signature: r, type: "struct" });
          let i = a.properties.split(";"),
            o = [],
            c = i.length;
          for (let e = 0; e < c; e++) {
            let t = i[e].trim();
            if (!t) continue;
            let r = (0, u.Pj)(t, { type: "struct" });
            o.push(r);
          }
          if (!o.length) throw new s.X9({ signature: r });
          t[a.name] = o;
        }
        let o = {},
          l = Object.entries(t),
          b = l.length;
        for (let e = 0; e < b; e++) {
          let [r, s] = l[e];
          o[r] = (function e(t, r, s = new Set()) {
            let o = [],
              f = t.length;
            for (let l = 0; l < f; l++) {
              let f = t[l];
              if (n.wj.test(f.type)) o.push(f);
              else {
                let t = (0, n.Yv)(d, f.type);
                if (!t?.type) throw new i.nx({ abiParameter: f });
                let { array: l, type: b } = t;
                if (b in r) {
                  if (s.has(b)) throw new c({ type: b });
                  o.push({
                    ...f,
                    type: `tuple${l ?? ""}`,
                    components: e(r[b] ?? [], r, new Set([...s, b])),
                  });
                } else if ((0, u._o)(b)) o.push(f);
                else throw new a.zz({ type: b });
              }
            }
            return o;
          })(s, t);
        }
        return o;
      }
      let d = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    28189: (e, t, r) => {
      r.d(t, {
        Dg: () => g,
        Ej: () => h,
        Fl: () => M,
        HT: () => f,
        Ho: () => p,
        M7: () => m,
        Ro: () => v,
        Ty: () => x,
        di: () => y,
        ii: () => B,
        oB: () => d,
        sH: () => b,
        tf: () => w,
        u: () => A,
        uK: () => l,
        xW: () => c,
        xb: () => u,
      });
      var n = r(52404),
        a = r(33395),
        i = r(30958);
      let s = new TextEncoder(),
        o = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function f(e) {
        return e instanceof Uint8Array
          ? l(e)
          : Array.isArray(e)
          ? l(new Uint8Array(e))
          : e;
      }
      function u(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size ? (a.Sl(r, t.size), p(r, t.size)) : r;
      }
      function l(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += o[e[t]];
        let n = `0x${r}`;
        return "number" == typeof t.size ? (a.Sl(n, t.size), m(n, t.size)) : n;
      }
      function d(e, t = {}) {
        let r,
          { signed: n, size: a } = t,
          i = BigInt(e);
        a
          ? (r = n
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let s = "bigint" == typeof r && n ? -r - 1n : 0;
        if ((r && i > r) || i < s) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new x({
            max: r ? `${r}${t}` : void 0,
            min: `${s}${t}`,
            signed: n,
            size: a,
            value: `${e}${t}`,
          });
        }
        let o = (n && i < 0 ? (1n << BigInt(8 * a)) + BigInt(i) : i).toString(
            16
          ),
          c = `0x${o}`;
        return a ? p(c, a) : c;
      }
      function b(e, t = {}) {
        return l(s.encode(e), t);
      }
      function p(e, t) {
        return a.eV(e, { dir: "left", size: t });
      }
      function m(e, t) {
        return a.eV(e, { dir: "right", size: t });
      }
      function y(e, t, r, n = {}) {
        let { strict: i } = n;
        a.kK(e, t);
        let s = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return i && a.X(s, t, r), s;
      }
      function h(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function g(e, t = {}) {
        let { signed: r } = t;
        t.size && a.Sl(e, t.size);
        let n = BigInt(e);
        if (!r) return n;
        let i = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
        return n <= i >> 1n ? n : n - i - 1n;
      }
      function v(e, t = {}) {
        let { signed: r, size: n } = t;
        return r || n ? Number(g(e, t)) : Number(e);
      }
      function w(e, t = {}) {
        let { strict: r = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: r = !1 } = t;
              if (!e || "string" != typeof e) throw new $(e);
              if ((r && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new P(e);
            })(e, { strict: r }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class x extends n.C {
        constructor({ max: e, min: t, signed: r, size: n, value: a }) {
          super(
            `Number \`${a}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
              r ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      n.C;
      class $ extends n.C {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? i.A(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class P extends n.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      n.C;
      class A extends n.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class B extends n.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class M extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    30931: (e, t, r) => {
      r.d(t, { p: () => u });
      var n = r(40290),
        a = r(41706),
        i = r(97525),
        s = r(88878),
        o = r(23222),
        c = r(1347);
      let f = "/docs/contract/encodeFunctionData";
      function u(e) {
        let { args: t } = e,
          { abi: r, functionName: u } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: r, functionName: n } = e,
              a = t[0];
            if (n) {
              let e = (0, c.iY)({ abi: t, args: r, name: n });
              if (!e) throw new i.Iz(n, { docsPath: f });
              a = e;
            }
            if ("function" !== a.type) throw new i.Iz(void 0, { docsPath: f });
            return { abi: [a], functionName: (0, s.V)((0, o.B)(a)) };
          })(),
          l = r[0],
          d = "inputs" in l && l.inputs ? (0, a.h)(l.inputs, t ?? []) : void 0;
        return (0, n.aP)([u, d ?? "0x"]);
      }
    },
    30958: (e, t, r) => {
      r.d(t, { A: () => n });
      function n(e, t, r) {
        return JSON.stringify(
          e,
          (e, r) =>
            "function" == typeof t
              ? t(e, r)
              : "bigint" == typeof r
              ? r.toString() + "#__bigint"
              : r,
          r
        );
      }
    },
    31063: (e, t, r) => {
      r.d(t, { MM: () => h, ft: () => v });
      var n = r(97152),
        a = r(98292),
        i = r(34897),
        s = r(60186),
        o = r(6434),
        c = r(32915),
        f = r(30718),
        u = r(17679),
        l = r(46333),
        d = r(35766),
        b = r(72757),
        p = r(58623),
        m = r(90656),
        y = r(35471);
      let h = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        g = new Map();
      async function v(e, t) {
        let r,
          v,
          {
            account: w = e.account,
            blobs: x,
            chain: $,
            gas: P,
            kzg: A,
            nonce: B,
            nonceManager: M,
            parameters: E = h,
            type: I,
          } = t,
          k = w ? (0, n.J)(w) : w,
          C = { ...t, ...(k ? { from: k?.address } : {}) };
        async function j() {
          return (
            r ||
            (r = await (0, b.T)(e, s.g, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function z() {
          return (
            v ||
            ($
              ? $.id
              : void 0 !== t.chainId
              ? t.chainId
              : (v = await (0, b.T)(e, y.T, "getChainId")({})))
          );
        }
        if (E.includes("nonce") && void 0 === B && k)
          if (M) {
            let t = await z();
            C.nonce = await M.consume({
              address: k.address,
              chainId: t,
              client: e,
            });
          } else
            C.nonce = await (0, b.T)(
              e,
              o.y,
              "getTransactionCount"
            )({ address: k.address, blockTag: "pending" });
        if (
          (E.includes("blobVersionedHashes") || E.includes("sidecars")) &&
          x &&
          A
        ) {
          let e = (0, f.S)({ blobs: x, kzg: A });
          if (
            (E.includes("blobVersionedHashes") &&
              (C.blobVersionedHashes = (0, l.d)({ commitments: e, to: "hex" })),
            E.includes("sidecars"))
          ) {
            let t = (0, u.t)({ blobs: x, commitments: e, kzg: A });
            C.sidecars = (0, d.T)({
              blobs: x,
              commitments: e,
              proofs: t,
              to: "hex",
            });
          }
        }
        if (
          (E.includes("chainId") && (C.chainId = await z()),
          (E.includes("fees") || E.includes("type")) && void 0 === I)
        )
          try {
            C.type = (0, m.L)(C);
          } catch {
            let t = g.get(e.uid);
            if (void 0 === t) {
              let r = await j();
              (t = "bigint" == typeof r?.baseFeePerGas), g.set(e.uid, t);
            }
            C.type = t ? "eip1559" : "legacy";
          }
        if (E.includes("fees"))
          if ("legacy" !== C.type && "eip2930" !== C.type) {
            if (
              void 0 === C.maxFeePerGas ||
              void 0 === C.maxPriorityFeePerGas
            ) {
              let r = await j(),
                { maxFeePerGas: n, maxPriorityFeePerGas: i } = await (0, a.O)(
                  e,
                  { block: r, chain: $, request: C }
                );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < i
              )
                throw new c.RR({ maxPriorityFeePerGas: i });
              (C.maxPriorityFeePerGas = i), (C.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.pw();
            if (void 0 === t.gasPrice) {
              let t = await j(),
                { gasPrice: r } = await (0, a.O)(e, {
                  block: t,
                  chain: $,
                  request: C,
                  type: "legacy",
                });
              C.gasPrice = r;
            }
          }
        return (
          E.includes("gas") &&
            void 0 === P &&
            (C.gas = await (0, b.T)(
              e,
              i.Q,
              "estimateGas"
            )({
              ...C,
              account: k ? { address: k.address, type: "json-rpc" } : k,
            })),
          (0, p.c)(C),
          delete C.parameters,
          C
        );
      }
    },
    32108: (e, t, r) => {
      r.d(t, { h: () => i });
      var n = r(76115),
        a = r(24784);
      function i(e, t) {
        if (!(0, a.P)(e, { strict: !1 })) throw new n.M({ address: e });
        if (!(0, a.P)(t, { strict: !1 })) throw new n.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    32255: (e, t, r) => {
      r.d(t, { _o: () => h, Pj: () => m, uT: () => l, NV: () => y });
      var n = r(93398),
        a = r(253),
        i = r(2685),
        s = r(46206),
        o = r(11134);
      class c extends o.C {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let f = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var u = r(53098);
      function l(e, t = {}) {
        if ((0, u.Ji)(e))
          return (function (e, t = {}) {
            let r = (0, u.ej)(e);
            if (!r) throw new s.s7({ signature: e, type: "function" });
            let n = y(r.parameters),
              a = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              a.push(
                m(n[e], { modifiers: u.v7, structs: t, type: "function" })
              );
            let o = [];
            if (r.returns) {
              let e = y(r.returns),
                n = e.length;
              for (let r = 0; r < n; r++)
                o.push(
                  m(e[r], { modifiers: u.v7, structs: t, type: "function" })
                );
            }
            return {
              name: r.name,
              type: "function",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: a,
              outputs: o,
            };
          })(e, t);
        if ((0, u.Rv)(e))
          return (function (e, t = {}) {
            let r = (0, u.iB)(e);
            if (!r) throw new s.s7({ signature: e, type: "event" });
            let n = y(r.parameters),
              a = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              a.push(m(n[e], { modifiers: u.fC, structs: t, type: "event" }));
            return { name: r.name, type: "event", inputs: a };
          })(e, t);
        if ((0, u.pc)(e))
          return (function (e, t = {}) {
            let r = (0, u.kz)(e);
            if (!r) throw new s.s7({ signature: e, type: "error" });
            let n = y(r.parameters),
              a = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              a.push(m(n[e], { structs: t, type: "error" }));
            return { name: r.name, type: "error", inputs: a };
          })(e, t);
        if ((0, u.l9)(e))
          return (function (e, t = {}) {
            let r = (0, u.Yo)(e);
            if (!r) throw new s.s7({ signature: e, type: "constructor" });
            let n = y(r.parameters),
              a = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              a.push(m(n[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: a,
            };
          })(e, t);
        if ((0, u.v8)(e)) {
          var r = e;
          let t = (0, u.If)(r);
          if (!t) throw new s.s7({ signature: r, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, u.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new s.x8({ signature: e });
      }
      let d =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        b =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p = /^u?int$/;
      function m(e, t) {
        var r, s;
        let o,
          c = (function (e, t, r) {
            let n = "";
            if (r)
              for (let e of Object.entries(r)) {
                if (!e) continue;
                let t = "";
                for (let r of e[1])
                  t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
                n += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${n}` : e;
          })(e, t?.type, t?.structs);
        if (f.has(c)) return f.get(c);
        let l = n.wj.test(e),
          v = (0, n.Yv)(l ? b : d, e);
        if (!v) throw new i.dV({ param: e });
        if (
          v.name &&
          ("address" === (r = v.name) ||
            "bool" === r ||
            "function" === r ||
            "string" === r ||
            "tuple" === r ||
            n.BD.test(r) ||
            n.Ge.test(r) ||
            g.test(r))
        )
          throw new i.zd({ param: e, name: v.name });
        let w = v.name ? { name: v.name } : {},
          x = "indexed" === v.modifier ? { indexed: !0 } : {},
          $ = t?.structs ?? {},
          P = {};
        if (l) {
          o = "tuple";
          let e = y(v.type),
            t = [],
            r = e.length;
          for (let n = 0; n < r; n++) t.push(m(e[n], { structs: $ }));
          P = { components: t };
        } else if (v.type in $) (o = "tuple"), (P = { components: $[v.type] });
        else if (p.test(v.type)) o = `${v.type}256`;
        else if ("address payable" === v.type) o = "address";
        else if (((o = v.type), t?.type !== "struct" && !h(o)))
          throw new a.UG({ type: o });
        if (v.modifier) {
          if (!t?.modifiers?.has?.(v.modifier))
            throw new i.NO({ param: e, type: t?.type, modifier: v.modifier });
          if (
            u.v7.has(v.modifier) &&
            ((s = o),
            !v.array && "bytes" !== s && "string" !== s && "tuple" !== s)
          )
            throw new i.Pj({ param: e, type: t?.type, modifier: v.modifier });
        }
        let A = { type: `${o}${v.array ?? ""}`, ...w, ...x, ...P };
        return f.set(c, A), A;
      }
      function y(e, t = [], r = "", n = 0) {
        let a = e.trim().length;
        for (let i = 0; i < a; i++) {
          let a = e[i],
            s = e.slice(i + 1);
          switch (a) {
            case ",":
              return 0 === n ? y(s, [...t, r.trim()]) : y(s, t, `${r}${a}`, n);
            case "(":
              return y(s, t, `${r}${a}`, n + 1);
            case ")":
              return y(s, t, `${r}${a}`, n - 1);
            default:
              return y(s, t, `${r}${a}`, n);
          }
        }
        if ("" === r) return t;
        if (0 !== n) throw new c({ current: r, depth: n });
        return t.push(r.trim()), t;
      }
      function h(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          n.BD.test(e) ||
          n.Ge.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    32395: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    32733: (e, t, r) => {
      r.d(t, { e: () => o });
      var n = r(97525),
        a = r(80897),
        i = r(1347);
      let s = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: r, functionName: o, data: c } = e,
          f = t[0];
        if (o) {
          let e = (0, i.iY)({ abi: t, args: r, name: o });
          if (!e) throw new n.Iz(o, { docsPath: s });
          f = e;
        }
        if ("function" !== f.type) throw new n.Iz(void 0, { docsPath: s });
        if (!f.outputs) throw new n.MR(f.name, { docsPath: s });
        let u = (0, a.n)(f.outputs, c);
        return u && u.length > 1 ? u : u && 1 === u.length ? u[0] : void 0;
      }
    },
    32915: (e, t, r) => {
      r.d(t, { RR: () => o, pw: () => s, sM: () => i });
      var n = r(42503),
        a = r(13933);
      class i extends a.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class s extends a.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class o extends a.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    33395: (e, t, r) => {
      r.d(t, { Sl: () => a, X: () => s, eV: () => o, kK: () => i });
      var n = r(28189);
      function a(e, t) {
        if (n.Ej(e) > t) throw new n.u({ givenSize: n.Ej(e), maxSize: t });
      }
      function i(e, t) {
        if ("number" == typeof t && t > 0 && t > n.Ej(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: n.Ej(e) });
      }
      function s(e, t, r) {
        if ("number" == typeof t && "number" == typeof r && n.Ej(e) !== r - t)
          throw new n.ii({ offset: r, position: "end", size: n.Ej(e) });
      }
      function o(e, t = {}) {
        let { dir: r, size: a = 32 } = t;
        if (0 === a) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * a)
          throw new n.Fl({
            size: Math.ceil(i.length / 2),
            targetSize: a,
            type: "Hex",
          });
        return `0x${i["right" === r ? "padEnd" : "padStart"](2 * a, "0")}`;
      }
    },
    33704: (e, t, r) => {
      r.d(t, { h: () => n });
      let n = r(72997).k;
    },
    34897: (e, t, r) => {
      r.d(t, { Q: () => g });
      var n = r(97152),
        a = r(13933),
        i = r(84718),
        s = r(34561),
        o = r(28245),
        c = r(42503),
        f = r(50879);
      class u extends a.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: n,
            data: a,
            gas: i,
            gasPrice: s,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            nonce: d,
            to: b,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, f.aO)({
                from: t?.address,
                to: b,
                value:
                  void 0 !== p &&
                  `${(0, o.c)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: i,
                gasPrice: void 0 !== s && `${(0, c.Q)(s)} gwei`,
                maxFeePerGas: void 0 !== u && `${(0, c.Q)(u)} gwei`,
                maxPriorityFeePerGas: void 0 !== l && `${(0, c.Q)(l)} gwei`,
                nonce: d,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var l = r(88737),
        d = r(61829),
        b = r(44332),
        p = r(74750),
        m = r(4274),
        y = r(58623),
        h = r(31063);
      async function g(e, t) {
        let { account: r = e.account } = t,
          o = r ? (0, n.J)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: c,
              blobVersionedHashes: f,
              blockNumber: u,
              blockTag: l,
              data: d,
              gas: g,
              gasPrice: v,
              maxFeePerBlobGas: w,
              maxFeePerGas: x,
              maxPriorityFeePerGas: $,
              nonce: P,
              value: A,
              stateOverride: B,
              ...M
            } = await (0, h.ft)(e, {
              ...t,
              parameters:
                o?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            E = ("bigint" == typeof u ? (0, s.cK)(u) : void 0) || l,
            I = (0, m.yH)(B),
            k = await (async () =>
              M.to
                ? M.to
                : n && n.length > 0
                ? await (0, i.g)({ authorization: n[0] }).catch(() => {
                    throw new a.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, y.c)(t);
          let C = e.chain?.formatters?.transactionRequest?.format,
            j = (C || p.Bv)({
              ...(0, b.o)(M, { format: C }),
              from: o?.address,
              accessList: r,
              authorizationList: n,
              blobs: c,
              blobVersionedHashes: f,
              data: d,
              gas: g,
              gasPrice: v,
              maxFeePerBlobGas: w,
              maxFeePerGas: x,
              maxPriorityFeePerGas: $,
              nonce: P,
              to: k,
              value: A,
            });
          return BigInt(
            await e.request({
              method: "eth_estimateGas",
              params: I
                ? [j, E ?? e.experimental_blockTag ?? "latest", I]
                : E
                ? [j, E]
                : [j],
            })
          );
        } catch (r) {
          throw (function (e, { docsPath: t, ...r }) {
            return new u(
              (() => {
                let t = (0, d.l)(e, r);
                return t instanceof l.RM ? e : t;
              })(),
              { docsPath: t, ...r }
            );
          })(r, { ...t, account: o, chain: e.chain });
        }
      }
    },
    35326: (e, t, r) => {
      r.d(t, {
        zX: () => h,
        bG: () => g,
        M: () => v,
        rR: () => w,
        Po: () => x,
        $S: () => $,
      });
      var n = r(97152),
        a = r(44964),
        i = r(41343),
        s = r(23222),
        o = r(59350);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: r = !0,
        includeName: n = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${r ? e.name : ""}(${e.inputs
            .map(
              (e, r) =>
                `${n && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[r] ? (0, o.A)(t[r]) : t[r]
                }`
            )
            .join(", ")})`;
      }
      var f = r(1347),
        u = r(28245),
        l = r(42503),
        d = r(97525),
        b = r(13933),
        p = r(35674),
        m = r(50879),
        y = r(24250);
      class h extends b.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: a,
            data: i,
            gas: s,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: f,
            nonce: d,
            to: b,
            value: y,
            stateOverride: h,
          }
        ) {
          let g = t ? (0, n.J)(t) : void 0,
            v = (0, m.aO)({
              from: g?.address,
              to: b,
              value:
                void 0 !== y &&
                `${(0, u.c)(y)} ${a?.nativeCurrency?.symbol || "ETH"}`,
              data: i,
              gas: s,
              gasPrice: void 0 !== o && `${(0, l.Q)(o)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, l.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== f && `${(0, l.Q)(f)} gwei`,
              nonce: d,
            });
          h &&
            (v += `
${(0, p.uj)(h)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: r,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends b.C {
        constructor(
          e,
          {
            abi: t,
            args: r,
            contractAddress: n,
            docsPath: a,
            functionName: i,
            sender: o,
          }
        ) {
          let u = (0, f.iY)({ abi: t, args: r, name: i }),
            l = u
              ? c({
                  abiItem: u,
                  args: r,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            d = u ? (0, s.B)(u, { includeName: !0 }) : void 0,
            b = (0, m.aO)({
              address: n && (0, y.R)(n),
              function: d,
              args:
                l &&
                "()" !== l &&
                `${[...Array(i?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${l}`,
              sender: o,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${i}".`,
            {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                b && "Contract Call:",
                b,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = r),
            (this.cause = e),
            (this.contractAddress = n),
            (this.functionName = i),
            (this.sender = o);
        }
      }
      class v extends b.C {
        constructor({ abi: e, data: t, functionName: r, message: n }) {
          let o, f, u, l, b;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: r,
                errorName: n,
                args: o,
              } = (f = (0, i.W)({ abi: e, data: t }));
              if ("Error" === n) l = o[0];
              else if ("Panic" === n) {
                let [e] = o;
                l = a.fD[e];
              } else {
                let e = r ? (0, s.B)(r, { includeName: !0 }) : void 0,
                  t =
                    r && o
                      ? c({
                          abiItem: r,
                          args: o,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(n?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              o = e;
            }
          else n && (l = n);
          o instanceof d.Wq &&
            ((b = o.signature),
            (u = [
              `Unable to decode signature "${b}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${b}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || b
                ? [
                    `The contract function "${r}" reverted with the following ${
                      b ? "signature" : "reason"
                    }:`,
                    l || b,
                  ].join("\n")
                : `The contract function "${r}" reverted.`,
              {
                cause: o,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.raw = t),
            (this.reason = l),
            (this.signature = b);
        }
      }
      class w extends b.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends b.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class $ extends b.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    35471: (e, t, r) => {
      r.d(t, { T: () => a });
      var n = r(11914);
      async function a(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ME)(t);
      }
    },
    35674: (e, t, r) => {
      r.d(t, { Hi: () => a, ft: () => i, uj: () => o });
      var n = r(13933);
      class a extends n.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class i extends n.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function s(e) {
        return e.reduce(
          (e, { slot: t, value: r }) => `${e}        ${t}: ${r}
`,
          ""
        );
      }
      function o(e) {
        return e
          .reduce((e, { address: t, ...r }) => {
            let n = `${e}    ${t}:
`;
            return (
              r.nonce &&
                (n += `      nonce: ${r.nonce}
`),
              r.balance &&
                (n += `      balance: ${r.balance}
`),
              r.code &&
                (n += `      code: ${r.code}
`),
              r.state && ((n += "      state:\n"), (n += s(r.state))),
              r.stateDiff &&
                ((n += "      stateDiff:\n"), (n += s(r.stateDiff))),
              n
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    41343: (e, t, r) => {
      r.d(t, { W: () => f });
      var n = r(44964),
        a = r(97525),
        i = r(44352),
        s = r(88878),
        o = r(80897),
        c = r(23222);
      function f(e) {
        let { abi: t, data: r } = e,
          f = (0, i.di)(r, 0, 4);
        if ("0x" === f) throw new a.O();
        let u = [...(t || []), n.Mc, n.J9].find(
          (e) => "error" === e.type && f === (0, s.V)((0, c.B)(e))
        );
        if (!u)
          throw new a.Wq(f, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: u,
          args:
            "inputs" in u && u.inputs && u.inputs.length > 0
              ? (0, o.n)(u.inputs, (0, i.di)(r, 4))
              : void 0,
          errorName: u.name,
        };
      }
    },
    41706: (e, t, r) => {
      r.d(t, { h: () => p, k: () => y });
      var n = r(97525),
        a = r(76115),
        i = r(13933),
        s = r(35276),
        o = r(24784),
        c = r(40290),
        f = r(72427),
        u = r(16871),
        l = r(44352),
        d = r(34561),
        b = r(1588);
      function p(e, t) {
        if (e.length !== t.length)
          throw new n.YE({ expectedLength: e.length, givenLength: t.length });
        let r = m(
          (function ({ params: e, values: t }) {
            let r = [];
            for (let p = 0; p < e.length; p++)
              r.push(
                (function e({ param: t, value: r }) {
                  let p = y(t.type);
                  if (p) {
                    let [a, i] = p;
                    return (function (t, { length: r, param: a }) {
                      let i = null === r;
                      if (!Array.isArray(t)) throw new n.dm(t);
                      if (!i && t.length !== r)
                        throw new n.Nc({
                          expectedLength: r,
                          givenLength: t.length,
                          type: `${a.type}[${r}]`,
                        });
                      let s = !1,
                        o = [];
                      for (let r = 0; r < t.length; r++) {
                        let n = e({ param: a, value: t[r] });
                        n.dynamic && (s = !0), o.push(n);
                      }
                      if (i || s) {
                        let e = m(o);
                        if (i) {
                          let t = (0, d.cK)(o.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: o.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(o.map(({ encoded: e }) => e)),
                      };
                    })(r, { length: a, param: { ...t, type: i } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: r }) {
                      let n = !1,
                        a = [];
                      for (let i = 0; i < r.components.length; i++) {
                        let s = r.components[i],
                          o = Array.isArray(t) ? i : s.name,
                          c = e({ param: s, value: t[o] });
                        a.push(c), c.dynamic && (n = !0);
                      }
                      return {
                        dynamic: n,
                        encoded: n
                          ? m(a)
                          : (0, c.xW)(a.map(({ encoded: e }) => e)),
                      };
                    })(r, { param: t });
                  if ("address" === t.type) {
                    var h = r;
                    if (!(0, o.P)(h)) throw new a.M({ address: h });
                    return { dynamic: !1, encoded: (0, f.db)(h.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var g = r;
                    if ("boolean" != typeof g)
                      throw new i.C(
                        `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, f.db)((0, d.$P)(g)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , n = "256"] = b.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: r = 256 }) {
                      if ("number" == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          a = t ? -n - 1n : 0n;
                        if (e > n || e < a)
                          throw new s.Ty({
                            max: n.toString(),
                            min: a.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, d.cK)(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(n) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, r] = t.type.split("bytes"),
                        a = (0, u.E)(e);
                      if (!r) {
                        let t = e;
                        return (
                          a % 32 != 0 &&
                            (t = (0, f.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, f.db)((0, d.cK)(a, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (a !== Number.parseInt(r, 10))
                        throw new n.gH({
                          expectedSize: Number.parseInt(r, 10),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, f.db)(e, { dir: "right" }),
                      };
                    })(r, { param: t });
                  if ("string" === t.type) {
                    var v = r;
                    let e = (0, d.i3)(v),
                      t = Math.ceil((0, u.E)(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(
                        (0, f.db)((0, l.di)(e, 32 * r, (r + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, f.db)((0, d.cK)((0, u.E)(e), { size: 32 })),
                        ...n,
                      ]),
                    };
                  }
                  throw new n.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return r;
          })({ params: e, values: t })
        );
        return 0 === r.length ? "0x" : r;
      }
      function m(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: a } = e[r];
          n ? (t += 32) : (t += (0, u.E)(a));
        }
        let r = [],
          n = [],
          a = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: s, encoded: o } = e[i];
          s
            ? (r.push((0, d.cK)(t + a, { size: 32 })),
              n.push(o),
              (a += (0, u.E)(o)))
            : r.push(o);
        }
        return (0, c.xW)([...r, ...n]);
      }
      function y(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    43712: (e, t, r) => {
      r.d(t, { J: () => i });
      var n = r(28189);
      function a(e) {
        return {
          address: e.address,
          amount: n.oB(e.amount),
          index: n.oB(e.index),
          validatorIndex: n.oB(e.validatorIndex),
        };
      }
      function i(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: n.oB(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: n.oB(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: n.oB(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: n.oB(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: n.oB(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: n.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(a) }),
        };
      }
    },
    44332: (e, t, r) => {
      r.d(t, { o: () => n });
      function n(e, { format: t }) {
        if (!t) return {};
        let r = {};
        return (
          !(function t(n) {
            for (let a of Object.keys(n))
              a in e && (r[a] = e[a]),
                n[a] &&
                  "object" == typeof n[a] &&
                  !Array.isArray(n[a]) &&
                  t(n[a]);
          })(t(e || {})),
          r
        );
      }
    },
    44964: (e, t, r) => {
      r.d(t, { J9: () => i, Mc: () => a, fD: () => n });
      let n = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        a = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        i = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    46206: (e, t, r) => {
      r.d(t, { X9: () => s, s7: () => a, x8: () => i });
      var n = r(11134);
      class a extends n.C {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class i extends n.C {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class s extends n.C {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    49072: (e, t, r) => {
      r.d(t, { u: () => u });
      var n = r(72757),
        a = r(87639),
        i = r(94788),
        s = r(59350),
        o = r(98972),
        c = r(77564),
        f = r(71013);
      function u(
        e,
        {
          batch: t = !0,
          onError: r,
          onTransactions: u,
          poll: l,
          pollingInterval: d = e.pollingInterval,
        }
      ) {
        let b, p;
        return (
          void 0 !== l
            ? l
            : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
        )
          ? (() => {
              let l = (0, s.A)(["watchPendingTransactions", e.uid, t, d]);
              return (0, a.lB)(l, { onTransactions: u, onError: r }, (r) => {
                let a,
                  s = (0, i.w)(
                    async () => {
                      try {
                        if (!a)
                          try {
                            a = await (0, n.T)(
                              e,
                              o.O,
                              "createPendingTransactionFilter"
                            )({});
                            return;
                          } catch (e) {
                            throw (s(), e);
                          }
                        let i = await (0, n.T)(
                          e,
                          c.I,
                          "getFilterChanges"
                        )({ filter: a });
                        if (0 === i.length) return;
                        if (t) r.onTransactions(i);
                        else for (let e of i) r.onTransactions([e]);
                      } catch (e) {
                        r.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: d }
                  );
                return async () => {
                  a &&
                    (await (0, n.T)(e, f.Z, "uninstallFilter")({ filter: a })),
                    s();
                };
              });
            })()
          : ((b = !0),
            (p = () => (b = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!b) return;
                    let t = e.result;
                    u([t]);
                  },
                  onError(e) {
                    r?.(e);
                  },
                });
                (p = t), b || p();
              } catch (e) {
                r?.(e);
              }
            })(),
            () => p());
      }
    },
    52404: (e, t, r) => {
      r.d(t, { C: () => n });
      class n extends Error {
        constructor(e, t = {}) {
          let r = (() => {
              if (t.cause instanceof n) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause &&
                "details" in t.cause &&
                "string" == typeof t.cause.details
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            })(),
            a = (t.cause instanceof n && t.cause.docsPath) || t.docsPath,
            i = `https://oxlib.sh${a ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(r || a
                ? ["", r ? `Details: ${r}` : void 0, a ? `See: ${i}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
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
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = i),
            (this.docsPath = a),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    52497: (e, t, r) => {
      r.d(t, { n: () => p });
      var n = r(86186),
        a = r(50879),
        i = r(72757),
        s = r(87639),
        o = r(98722),
        c = r(37407),
        f = r(59350),
        u = r(60186),
        l = r(83759),
        d = r(1761),
        b = r(5766);
      async function p(e, t) {
        let r,
          p,
          m,
          y,
          h,
          {
            checkReplacement: g = !0,
            confirmations: v = 1,
            hash: w,
            onReplaced: x,
            retryCount: $ = 6,
            retryDelay: P = ({ count: e }) => 200 * ~~(1 << e),
            timeout: A = 18e4,
          } = t,
          B = (0, f.A)(["waitForTransactionReceipt", e.uid, w]),
          M = t.pollingInterval
            ? t.pollingInterval
            : e.chain?.experimental_preconfirmationTime
            ? e.chain.experimental_preconfirmationTime
            : e.pollingInterval,
          E = !1,
          { promise: I, resolve: k, reject: C } = (0, o.Y)(),
          j = A
            ? setTimeout(() => {
                h?.(), y?.(), C(new a.WA({ hash: w }));
              }, A)
            : void 0;
        return (
          (y = (0, s.lB)(
            B,
            { onReplaced: x, resolve: k, reject: C },
            async (t) => {
              if (
                (m = await (0, i.T)(
                  e,
                  d.h,
                  "getTransactionReceipt"
                )({ hash: w }).catch(() => void 0)) &&
                v <= 1
              ) {
                clearTimeout(j), t.resolve(m), y?.();
                return;
              }
              h = (0, i.T)(
                e,
                b.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: M,
                async onBlockNumber(s) {
                  let o = (e) => {
                      clearTimeout(j), h?.(), e(), y?.();
                    },
                    f = s;
                  if (!E)
                    try {
                      if (m) {
                        if (
                          v > 1 &&
                          (!m.blockNumber || f - m.blockNumber + 1n < v)
                        )
                          return;
                        o(() => t.resolve(m));
                        return;
                      }
                      if (
                        (g &&
                          !r &&
                          ((E = !0),
                          await (0, c.b)(
                            async () => {
                              (r = await (0, i.T)(
                                e,
                                l.x,
                                "getTransaction"
                              )({ hash: w })).blockNumber &&
                                (f = r.blockNumber);
                            },
                            { delay: P, retryCount: $ }
                          ),
                          (E = !1)),
                        (m = await (0, i.T)(
                          e,
                          d.h,
                          "getTransactionReceipt"
                        )({ hash: w })),
                        v > 1 && (!m.blockNumber || f - m.blockNumber + 1n < v))
                      )
                        return;
                      o(() => t.resolve(m));
                    } catch (s) {
                      if (s instanceof a.Kz || s instanceof a.Kc) {
                        if (!r) {
                          E = !1;
                          return;
                        }
                        try {
                          (p = r), (E = !0);
                          let a = await (0, c.b)(
                            () =>
                              (0, i.T)(
                                e,
                                u.g,
                                "getBlock"
                              )({ blockNumber: f, includeTransactions: !0 }),
                            {
                              delay: P,
                              retryCount: $,
                              shouldRetry: ({ error: e }) => e instanceof n.l,
                            }
                          );
                          E = !1;
                          let s = a.transactions.find(
                            ({ from: e, nonce: t }) =>
                              e === p.from && t === p.nonce
                          );
                          if (
                            !s ||
                            ((m = await (0, i.T)(
                              e,
                              d.h,
                              "getTransactionReceipt"
                            )({ hash: s.hash })),
                            v > 1 &&
                              (!m.blockNumber || f - m.blockNumber + 1n < v))
                          )
                            return;
                          let l = "replaced";
                          s.to === p.to &&
                          s.value === p.value &&
                          s.input === p.input
                            ? (l = "repriced")
                            : s.from === s.to &&
                              0n === s.value &&
                              (l = "cancelled"),
                            o(() => {
                              t.onReplaced?.({
                                reason: l,
                                replacedTransaction: p,
                                transaction: s,
                                transactionReceipt: m,
                              }),
                                t.resolve(m);
                            });
                        } catch (e) {
                          o(() => t.reject(e));
                        }
                      } else o(() => t.reject(s));
                    }
                },
              });
            }
          )),
          I
        );
      }
    },
    52938: (e, t, r) => {
      r.d(t, { j: () => u });
      var n = r(97525),
        a = r(27747),
        i = r(16871),
        s = r(33704),
        o = r(80897),
        c = r(23222);
      let f = "/docs/contract/decodeEventLog";
      function u(e) {
        let { abi: t, data: r, strict: u, topics: l } = e,
          d = u ?? !0,
          [b, ...p] = l;
        if (!b) throw new n._z({ docsPath: f });
        let m = t.find(
          (e) => "event" === e.type && b === (0, s.h)((0, c.B)(e))
        );
        if (!(m && "name" in m) || "event" !== m.type)
          throw new n.kE(b, { docsPath: f });
        let { name: y, inputs: h } = m,
          g = h?.some((e) => !("name" in e && e.name)),
          v = g ? [] : {},
          w = h
            .map((e, t) => [e, t])
            .filter(([e]) => "indexed" in e && e.indexed);
        for (let e = 0; e < w.length; e++) {
          let [t, r] = w[e],
            a = p[e];
          if (!a) throw new n.l3({ abiItem: m, param: t });
          v[g ? r : t.name || r] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, o.n)([e], t) || [])[0];
          })({ param: t, value: a });
        }
        let x = h.filter((e) => !("indexed" in e && e.indexed));
        if (x.length > 0) {
          if (r && "0x" !== r)
            try {
              let e = (0, o.n)(x, r);
              if (e)
                if (g)
                  for (let t = 0; t < h.length; t++) v[t] = v[t] ?? e.shift();
                else for (let t = 0; t < x.length; t++) v[x[t].name] = e[t];
            } catch (e) {
              if (d) {
                if (e instanceof n.Iy || e instanceof a.SK)
                  throw new n.fo({
                    abiItem: m,
                    data: r,
                    params: x,
                    size: (0, i.E)(r),
                  });
                throw e;
              }
            }
          else if (d)
            throw new n.fo({ abiItem: m, data: "0x", params: x, size: 0 });
        }
        return { eventName: y, args: Object.values(v).length > 0 ? v : void 0 };
      }
    },
    53098: (e, t, r) => {
      r.d(t, {
        Dv: () => A,
        FO: () => m,
        If: () => x,
        Ji: () => l,
        Rv: () => c,
        WL: () => p,
        Yo: () => g,
        ej: () => d,
        fC: () => B,
        iB: () => f,
        kz: () => s,
        l9: () => h,
        pc: () => i,
        sP: () => P,
        v7: () => M,
        v8: () => w,
      });
      var n = r(93398);
      let a = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function i(e) {
        return a.test(e);
      }
      function s(e) {
        return (0, n.Yv)(a, e);
      }
      let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function c(e) {
        return o.test(e);
      }
      function f(e) {
        return (0, n.Yv)(o, e);
      }
      let u =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function l(e) {
        return u.test(e);
      }
      function d(e) {
        return (0, n.Yv)(u, e);
      }
      let b =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function p(e) {
        return b.test(e);
      }
      function m(e) {
        return (0, n.Yv)(b, e);
      }
      let y =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function h(e) {
        return y.test(e);
      }
      function g(e) {
        return (0, n.Yv)(y, e);
      }
      let v = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function w(e) {
        return v.test(e);
      }
      function x(e) {
        return (0, n.Yv)(v, e);
      }
      let $ = /^receive\(\) external payable$/;
      function P(e) {
        return $.test(e);
      }
      let A = new Set(["memory", "indexed", "storage", "calldata"]),
        B = new Set(["indexed"]),
        M = new Set(["calldata", "memory", "storage"]);
    },
    54560: (e, t, r) => {
      r.d(t, { Ez: () => s, LX: () => n, WN: () => a, fT: () => i });
      let n =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        a =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        i =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        s =
          "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
    },
    58623: (e, t, r) => {
      r.d(t, { c: () => f });
      var n = r(97152),
        a = r(44016),
        i = r(76115),
        s = r(88737),
        o = r(50879),
        c = r(24784);
      function f(e) {
        let {
            account: t,
            gasPrice: r,
            maxFeePerGas: f,
            maxPriorityFeePerGas: u,
            to: l,
          } = e,
          d = t ? (0, n.J)(t) : void 0;
        if (d && !(0, c.P)(d.address)) throw new i.M({ address: d.address });
        if (l && !(0, c.P)(l)) throw new i.M({ address: l });
        if (void 0 !== r && (void 0 !== f || void 0 !== u)) throw new o.n3();
        if (f && f > a.Ao) throw new s.BG({ maxFeePerGas: f });
        if (u && f && u > f)
          throw new s.lN({ maxFeePerGas: f, maxPriorityFeePerGas: u });
      }
    },
    60186: (e, t, r) => {
      r.d(t, { g: () => s });
      var n = r(86186),
        a = r(34561),
        i = r(61936);
      async function s(
        e,
        {
          blockHash: t,
          blockNumber: r,
          blockTag: o = e.experimental_blockTag ?? "latest",
          includeTransactions: c,
        } = {}
      ) {
        let f = c ?? !1,
          u = void 0 !== r ? (0, a.cK)(r) : void 0,
          l = null;
        if (
          !(l = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, f] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: "eth_getBlockByNumber", params: [u || o, f] },
                { dedupe: !!u }
              ))
        )
          throw new n.l({ blockHash: t, blockNumber: r });
        return (e.chain?.formatters?.block?.format || i.$)(l);
      }
    },
    61812: (e, t, r) => {
      r.d(t, { C: () => p });
      var n = r(4486),
        a = r(54560),
        i = r(97525),
        s = r(13933),
        o = r(35326),
        c = r(32733),
        f = r(30931),
        u = r(71552),
        l = r(93527),
        d = r(72757),
        b = r(25157);
      async function p(e, t) {
        let {
            account: r,
            authorizationList: p,
            allowFailure: m = !0,
            blockNumber: y,
            blockOverrides: h,
            blockTag: g,
            stateOverride: v,
          } = t,
          w = t.contracts,
          {
            batchSize: x = t.batchSize ?? 1024,
            deployless: $ = t.deployless ?? !1,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          P = (() => {
            if (t.multicallAddress) return t.multicallAddress;
            if ($) return null;
            if (e.chain)
              return (0, u.M)({
                blockNumber: y,
                chain: e.chain,
                contract: "multicall3",
              });
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          })(),
          A = [[]],
          B = 0,
          M = 0;
        for (let e = 0; e < w.length; e++) {
          let { abi: t, address: n, args: a, functionName: i } = w[e];
          try {
            let e = (0, f.p)({ abi: t, args: a, functionName: i });
            (M += (e.length - 2) / 2),
              x > 0 &&
                M > x &&
                A[B].length > 0 &&
                (B++, (M = (e.length - 2) / 2), (A[B] = [])),
              (A[B] = [...A[B], { allowFailure: !0, callData: e, target: n }]);
          } catch (s) {
            let e = (0, l.j)(s, {
              abi: t,
              address: n,
              args: a,
              docsPath: "/docs/contract/multicall",
              functionName: i,
              sender: r,
            });
            if (!m) throw e;
            A[B] = [...A[B], { allowFailure: !0, callData: "0x", target: n }];
          }
        }
        let E = await Promise.allSettled(
            A.map((t) =>
              (0, d.T)(
                e,
                b.J,
                "readContract"
              )({
                ...(null === P ? { code: a.Ez } : { address: P }),
                abi: n.v2,
                account: r,
                args: [t],
                authorizationList: p,
                blockNumber: y,
                blockOverrides: h,
                blockTag: g,
                functionName: "aggregate3",
                stateOverride: v,
              })
            )
          ),
          I = [];
        for (let e = 0; e < E.length; e++) {
          let t = E[e];
          if ("rejected" === t.status) {
            if (!m) throw t.reason;
            for (let r = 0; r < A[e].length; r++)
              I.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: n, success: a } = r[t],
              { callData: s } = A[e][t],
              { abi: f, address: u, functionName: d, args: b } = w[I.length];
            try {
              if ("0x" === s) throw new i.O();
              if (!a) throw new o.$S({ data: n });
              let e = (0, c.e)({ abi: f, args: b, data: n, functionName: d });
              I.push(m ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, l.j)(t, {
                abi: f,
                address: u,
                args: b,
                docsPath: "/docs/contract/multicall",
                functionName: d,
              });
              if (!m) throw e;
              I.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (I.length !== w.length) throw new s.C("multicall results mismatch");
        return I;
      }
    },
    61829: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(13933),
        a = r(88737);
      function i(e, t) {
        let r = (e.details || "").toLowerCase(),
          i = e instanceof n.C ? e.walk((e) => e?.code === a.A7.code) : e;
        return i instanceof n.C
          ? new a.A7({ cause: e, message: i.details })
          : a.A7.nodeMessage.test(r)
          ? new a.A7({ cause: e, message: e.details })
          : a.BG.nodeMessage.test(r)
          ? new a.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.jj.nodeMessage.test(r)
          ? new a.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.K0.nodeMessage.test(r)
          ? new a.K0({ cause: e, nonce: t?.nonce })
          : a.Oh.nodeMessage.test(r)
          ? new a.Oh({ cause: e, nonce: t?.nonce })
          : a.vW.nodeMessage.test(r)
          ? new a.vW({ cause: e, nonce: t?.nonce })
          : a.k5.nodeMessage.test(r)
          ? new a.k5({ cause: e })
          : a.lY.nodeMessage.test(r)
          ? new a.lY({ cause: e, gas: t?.gas })
          : a.Fo.nodeMessage.test(r)
          ? new a.Fo({ cause: e, gas: t?.gas })
          : a.uC.nodeMessage.test(r)
          ? new a.uC({ cause: e })
          : a.lN.nodeMessage.test(r)
          ? new a.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new a.RM({ cause: e });
      }
    },
    70054: (e, t, r) => {
      r.d(t, { G: () => s });
      let n = new Map(),
        a = new Map();
      async function i(e, { cacheKey: t, cacheTime: r = 1 / 0 }) {
        let i = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (r) => t.set(e, r),
              }),
              r = t(e, n),
              i = t(e, a);
            return {
              clear: () => {
                r.clear(), i.clear();
              },
              promise: r,
              response: i,
            };
          })(t),
          s = i.response.get();
        if (s && r > 0 && Date.now() - s.created.getTime() < r) return s.data;
        let o = i.promise.get();
        o || ((o = e()), i.promise.set(o));
        try {
          let e = await o;
          return i.response.set({ created: new Date(), data: e }), e;
        } finally {
          i.promise.clear();
        }
      }
      async function s(e, { cacheTime: t = e.cacheTime } = {}) {
        let r;
        return BigInt(
          await i(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: ((r = e.uid), `blockNumber.${r}`),
            cacheTime: t,
          })
        );
      }
    },
    70511: (e, t, r) => {
      r.d(t, { U: () => s });
      var n = r(53098),
        a = r(26722),
        i = r(32255);
      function s(e) {
        let t = (0, a.e)(e),
          r = [],
          s = e.length;
        for (let a = 0; a < s; a++) {
          let s = e[a];
          (0, n.WL)(s) || r.push((0, i.uT)(s, t));
        }
        return r;
      }
    },
    71013: (e, t, r) => {
      r.d(t, { Z: () => n });
      async function n(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
    },
    71128: (e, t, r) => {
      r.d(t, { Q: () => i });
      var n = r(93398);
      let a = /^tuple(?<array>(\[(\d*)\])*)$/;
      function i(e) {
        let t = "",
          r = e.length;
        for (let i = 0; i < r; i++)
          (t += (function e(t) {
            let r = t.type;
            if (a.test(t.type) && "components" in t) {
              r = "(";
              let i = t.components.length;
              for (let n = 0; n < i; n++)
                (r += e(t.components[n])), n < i - 1 && (r += ", ");
              let s = (0, n.Yv)(a, t.type);
              return (r += `)${s?.array ?? ""}`), e({ ...t, type: r });
            }
            return ("indexed" in t && t.indexed && (r = `${r} indexed`), t.name)
              ? `${r} ${t.name}`
              : r;
          })(e[i])),
            i !== r - 1 && (t += ", ");
        return t;
      }
    },
    71552: (e, t, r) => {
      r.d(t, { M: () => a });
      var n = r(29454);
      function a({ blockNumber: e, chain: t, contract: r }) {
        let a = t?.contracts?.[r];
        if (!a) throw new n.rj({ chain: t, contract: { name: r } });
        if (e && a.blockCreated && a.blockCreated > e)
          throw new n.rj({
            blockNumber: e,
            chain: t,
            contract: { name: r, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    72707: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    72757: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let a = e[r];
        return "function" == typeof a ? a : (r) => t(e, r);
      }
    },
    72997: (e, t, r) => {
      r.d(t, { k: () => o });
      var n = r(55563),
        a = r(80329),
        i = r(93036),
        s = r(13933);
      function o(e) {
        var t;
        return (
          (t = (function (e) {
            let t = !0,
              r = "",
              n = 0,
              a = "",
              i = !1;
            for (let s = 0; s < e.length; s++) {
              let o = e[s];
              if (
                (["(", ")", ","].includes(o) && (t = !0),
                "(" === o && n++,
                ")" === o && n--,
                t)
              ) {
                if (0 === n) {
                  if (" " === o && ["event", "function", ""].includes(a))
                    a = "";
                  else if (((a += o), ")" === o)) {
                    i = !0;
                    break;
                  }
                  continue;
                }
                if (" " === o) {
                  "," !== e[s - 1] &&
                    "," !== r &&
                    ",(" !== r &&
                    ((r = ""), (t = !1));
                  continue;
                }
                (a += o), (r += o);
              }
            }
            if (!i) throw new s.C("Unable to normalize signature.");
            return a;
          })("string" == typeof e ? e : (0, i.B)(e))),
          (0, a.S)((0, n.ZJ)(t))
        );
      }
    },
    74750: (e, t, r) => {
      r.d(t, { Bv: () => i });
      var n = r(34561);
      let a = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function i(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, n.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, n.cK)(BigInt(e.s)) : e.s,
              chainId: (0, n.cK)(e.chainId),
              nonce: (0, n.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, n.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, n.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, n.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, n.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, n.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, n.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, n.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, n.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, n.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = a[e.type]),
          void 0 !== e.value && (t.value = (0, n.cK)(e.value)),
          t
        );
      }
    },
    77064: (e, t, r) => {
      r.d(t, { p: () => f });
      var n = r(97525),
        a = r(32108),
        i = r(55563),
        s = r(80329),
        o = r(33704),
        c = r(52938);
      function f(e) {
        let { abi: t, args: r, logs: f, strict: u = !0 } = e,
          l = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return f
          .map((e) => {
            try {
              let n = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, o.h)(t)
              );
              if (!n) return null;
              let f = (0, c.j)({ ...e, abi: [n], strict: u });
              if (
                (l && !l.includes(f.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: r, matchArgs: n } = e;
                  if (!n) return !0;
                  if (!t) return !1;
                  function o(e, t, r) {
                    try {
                      if ("address" === e.type) return (0, a.h)(t, r);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, s.S)((0, i.ZJ)(t)) === r;
                      return t === r;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(n)
                    ? n.every((e, n) => {
                        if (null == e) return !0;
                        let a = r[n];
                        return (
                          !!a &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            o(a, e, t[n])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof n ||
                        Array.isArray(n)
                      ) &&
                        Object.entries(n).every(([e, n]) => {
                          if (null == n) return !0;
                          let a = r.find((t) => t.name === e);
                          return (
                            !!a &&
                            (Array.isArray(n) ? n : [n]).some((r) =>
                              o(a, r, t[e])
                            )
                          );
                        });
                })({ args: f.args, inputs: n.inputs, matchArgs: r })
              )
                return null;
              return { ...f, ...e };
            } catch (a) {
              let t, r;
              if (a instanceof n.kE) return null;
              if (a instanceof n.fo || a instanceof n.l3) {
                if (u) return null;
                (t = a.abiItem.name),
                  (r = a.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: r ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    77564: (e, t, r) => {
      r.d(t, { I: () => i });
      var n = r(77064),
        a = r(52623);
      async function i(e, { filter: t }) {
        let r = "strict" in t && t.strict,
          i = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof i[0]) return i;
        let s = i.map((e) => (0, a.e)(e));
        return "abi" in t && t.abi
          ? (0, n.p)({ abi: t.abi, logs: s, strict: r })
          : s;
      }
    },
    78372: (e, t, r) => {
      r.d(t, { g: () => n });
      function n(e, { method: t }) {
        let r = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: n, status: a, transport: i }) => {
                "success" === a && t === e && (r[n] = i.request);
              }
            ),
          (t) => r[t] || e.request
        );
      }
    },
    80897: (e, t, r) => {
      r.d(t, { n: () => m });
      var n = r(97525),
        a = r(77608),
        i = r(82427),
        s = r(16871),
        o = r(44352),
        c = r(42438),
        f = r(35276),
        u = r(11914),
        l = r(34561);
      function d(e, t = {}) {
        void 0 !== t.size && (0, u.Sl)(e, { size: t.size });
        let r = (0, l.My)(e, t);
        return (0, u.ME)(r, t);
      }
      var b = r(55563),
        p = r(41706);
      function m(e, t) {
        let r = "string" == typeof t ? (0, b.aT)(t) : t,
          m = (0, i.l)(r);
        if (0 === (0, s.E)(r) && e.length > 0) throw new n.O();
        if ((0, s.E)(t) && 32 > (0, s.E)(t))
          throw new n.Iy({
            data: "string" == typeof t ? t : (0, l.My)(t),
            params: e,
            size: (0, s.E)(t),
          });
        let h = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let r = e[t];
          m.setPosition(h);
          let [i, s] = (function e(t, r, { staticPosition: i }) {
            let s = (0, p.k)(r.type);
            if (s) {
              let [n, a] = s;
              return (function (t, r, { length: n, staticPosition: a }) {
                if (!n) {
                  let n = a + d(t.readBytes(32)),
                    i = n + 32;
                  t.setPosition(n);
                  let s = d(t.readBytes(32)),
                    o = y(r),
                    c = 0,
                    f = [];
                  for (let n = 0; n < s; ++n) {
                    t.setPosition(i + (o ? 32 * n : c));
                    let [a, s] = e(t, r, { staticPosition: i });
                    (c += s), f.push(a);
                  }
                  return t.setPosition(a + 32), [f, 32];
                }
                if (y(r)) {
                  let i = a + d(t.readBytes(32)),
                    s = [];
                  for (let a = 0; a < n; ++a) {
                    t.setPosition(i + 32 * a);
                    let [n] = e(t, r, { staticPosition: i });
                    s.push(n);
                  }
                  return t.setPosition(a + 32), [s, 32];
                }
                let i = 0,
                  s = [];
                for (let o = 0; o < n; ++o) {
                  let [n, o] = e(t, r, { staticPosition: a + i });
                  (i += o), s.push(n);
                }
                return [s, i];
              })(t, { ...r, type: a }, { length: n, staticPosition: i });
            }
            if ("tuple" === r.type)
              return (function (t, r, { staticPosition: n }) {
                let a =
                    0 === r.components.length ||
                    r.components.some(({ name: e }) => !e),
                  i = a ? [] : {},
                  s = 0;
                if (y(r)) {
                  let o = n + d(t.readBytes(32));
                  for (let n = 0; n < r.components.length; ++n) {
                    let c = r.components[n];
                    t.setPosition(o + s);
                    let [f, u] = e(t, c, { staticPosition: o });
                    (s += u), (i[a ? n : c?.name] = f);
                  }
                  return t.setPosition(n + 32), [i, 32];
                }
                for (let o = 0; o < r.components.length; ++o) {
                  let c = r.components[o],
                    [f, u] = e(t, c, { staticPosition: n });
                  (i[a ? o : c?.name] = f), (s += u);
                }
                return [i, s];
              })(t, r, { staticPosition: i });
            if ("address" === r.type) {
              var b = t;
              let e = b.readBytes(32);
              return [(0, a.o)((0, l.My)((0, o.A1)(e, -20))), 32];
            }
            if ("bool" === r.type)
              return [
                (function (e, t = {}) {
                  let r = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, u.Sl)(r, { size: t.size }), (r = (0, c.B)(r))),
                    r.length > 1 || r[0] > 1)
                  )
                    throw new f.xO(r);
                  return !!r[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (r.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: r }) {
                let [n, a] = t.type.split("bytes");
                if (!a) {
                  let t = d(e.readBytes(32));
                  e.setPosition(r + t);
                  let n = d(e.readBytes(32));
                  if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                  let a = e.readBytes(n);
                  return e.setPosition(r + 32), [(0, l.My)(a), 32];
                }
                return [(0, l.My)(e.readBytes(Number.parseInt(a, 10), 32)), 32];
              })(t, r, { staticPosition: i });
            if (r.type.startsWith("uint") || r.type.startsWith("int")) {
              var m = t,
                h = r;
              let e = h.type.startsWith("int"),
                n = Number.parseInt(h.type.split("int")[1] || "256", 10),
                a = m.readBytes(32);
              return [
                n > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, u.Sl)(e, { size: t.size });
                      let r = (0, l.My)(e, t);
                      return (0, u.uU)(r, t);
                    })(a, { signed: e })
                  : d(a, { signed: e }),
                32,
              ];
            }
            if ("string" === r.type)
              return (function (e, { staticPosition: t }) {
                let r = d(e.readBytes(32));
                e.setPosition(t + r);
                let n = d(e.readBytes(32));
                if (0 === n) return e.setPosition(t + 32), ["", 32];
                let a = e.readBytes(n, 32),
                  i = (function (e, t = {}) {
                    let r = e;
                    return (
                      void 0 !== t.size &&
                        ((0, u.Sl)(r, { size: t.size }),
                        (r = (0, c.B)(r, { dir: "right" }))),
                      new TextDecoder().decode(r)
                    );
                  })((0, c.B)(a));
                return e.setPosition(t + 32), [i, 32];
              })(t, { staticPosition: i });
            throw new n.j(r.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(m, r, { staticPosition: 0 });
          (h += s), g.push(i);
        }
        return g;
      }
      function y(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(y);
        let r = (0, p.k)(e.type);
        return !!(r && y({ ...e, type: r[1] }));
      }
    },
    83759: (e, t, r) => {
      r.d(t, { x: () => s });
      var n = r(50879),
        a = r(34561),
        i = r(15885);
      async function s(
        e,
        { blockHash: t, blockNumber: r, blockTag: s, hash: o, index: c }
      ) {
        let f = s || "latest",
          u = void 0 !== r ? (0, a.cK)(r) : void 0,
          l = null;
        if (
          (o
            ? (l = await e.request(
                { method: "eth_getTransactionByHash", params: [o] },
                { dedupe: !0 }
              ))
            : t
            ? (l = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, a.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (u || f) &&
              (l = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [u || f, (0, a.cK)(c)],
                },
                { dedupe: !!u }
              )),
          !l)
        )
          throw new n.Kz({
            blockHash: t,
            blockNumber: r,
            blockTag: f,
            hash: o,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || i.uP)(l);
      }
    },
    84718: (e, t, r) => {
      r.d(t, { g: () => f });
      var n = r(88423),
        a = r(40290),
        i = r(55563),
        s = r(34561),
        o = r(88210),
        c = r(80329);
      async function f(e) {
        let { authorization: t, signature: r } = e;
        return (0, n.x)({
          hash: (function (e) {
            let { chainId: t, nonce: r, to: n } = e,
              f = e.contractAddress ?? e.address,
              u = (0, c.S)(
                (0, a.aP)([
                  "0x05",
                  (0, o.EQ)([
                    t ? (0, s.cK)(t) : "0x",
                    f,
                    r ? (0, s.cK)(r) : "0x",
                  ]),
                ])
              );
            return "bytes" === n ? (0, i.aT)(u) : u;
          })(t),
          signature: r ?? t,
        });
      }
    },
    86186: (e, t, r) => {
      r.d(t, { l: () => a });
      var n = r(13933);
      class a extends n.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = "Block";
          e && (r = `Block at hash "${e}"`),
            t && (r = `Block at number "${t}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    87639: (e, t, r) => {
      r.d(t, { lB: () => s });
      let n = new Map(),
        a = new Map(),
        i = 0;
      function s(e, t, r) {
        let s = ++i,
          o = () => n.get(e) || [],
          c = () => {
            let t = o();
            if (!t.some((e) => e.id === s)) return;
            let r = a.get(e);
            if (1 === t.length && r) {
              let e = r();
              e instanceof Promise && e.catch(() => {});
            }
            let i = o();
            n.set(
              e,
              i.filter((e) => e.id !== s)
            );
          },
          f = o();
        if ((n.set(e, [...f, { id: s, fns: t }]), f && f.length > 0)) return c;
        let u = {};
        for (let e in t)
          u[e] = (...t) => {
            let r = o();
            if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
          };
        let l = r(u);
        return "function" == typeof l && a.set(e, l), c;
      }
    },
    88423: (e, t, r) => {
      r.d(t, { x: () => l });
      var n = r(77608),
        a = r(80329),
        i = r(60587),
        s = r(16871),
        o = r(11914),
        c = r(34561);
      async function f({ hash: e, signature: t }) {
        let n = (0, i.q)(e) ? e : (0, c.nj)(e),
          { secp256k1: a } = await r.e(837).then(r.bind(r, 20837)),
          f = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: r, v: n, yParity: i } = t,
                s = u(Number(i ?? n));
              return new a.Signature((0, o.uU)(e), (0, o.uU)(r)).addRecoveryBit(
                s
              );
            }
            let e = (0, i.q)(t) ? t : (0, c.nj)(t);
            if (65 !== (0, s.E)(e)) throw Error("invalid signature length");
            let r = u((0, o.ME)(`0x${e.slice(130)}`));
            return a.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${f}`;
      }
      function u(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function l({ hash: e, signature: t }) {
        var r = await f({ hash: e, signature: t });
        let i = (0, a.S)(`0x${r.substring(4)}`).substring(26);
        return (0, n.o)(`0x${i}`);
      }
    },
    88878: (e, t, r) => {
      r.d(t, { V: () => i });
      var n = r(44352),
        a = r(72997);
      let i = (e) => (0, n.di)((0, a.k)(e), 0, 4);
    },
    90707: (e, t, r) => {
      r.d(t, { r: () => a });
      var n = r(34561);
      async function a(
        e,
        {
          address: t,
          blockNumber: r,
          blockTag: a = e.experimental_blockTag ?? "latest",
        }
      ) {
        let i = "bigint" == typeof r ? (0, n.cK)(r) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, i || a] })
        );
      }
    },
    93036: (e, t, r) => {
      r.d(t, { B: () => a });
      var n = r(71128);
      function a(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, n.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, n.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, n.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, n.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, n.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    93398: (e, t, r) => {
      function n(e, t) {
        let r = e.exec(t);
        return r?.groups;
      }
      r.d(t, { BD: () => a, Ge: () => i, Yv: () => n, wj: () => s });
      let a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        s = /^\(.+?\).*?$/;
    },
    93527: (e, t, r) => {
      r.d(t, { j: () => c });
      var n = r(97525),
        a = r(13933),
        i = r(35326),
        s = r(4058),
        o = r(73168);
      function c(
        e,
        { abi: t, address: r, args: c, docsPath: f, functionName: u, sender: l }
      ) {
        let d =
            e instanceof i.$S
              ? e
              : e instanceof a.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: b, data: p, details: m, message: y, shortMessage: h } = d,
          g =
            e instanceof n.O
              ? new i.rR({ functionName: u })
              : [3, o.bq.code].includes(b) && (p || m || y || h)
              ? new i.M({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: u,
                  message: d instanceof s.J8 ? m : h ?? y,
                })
              : e;
        return new i.bG(g, {
          abi: t,
          args: c,
          contractAddress: r,
          docsPath: f,
          functionName: u,
          sender: l,
        });
      }
    },
    94788: (e, t, r) => {
      r.d(t, { w: () => a });
      var n = r(78140);
      function a(e, { emitOnBegin: t, initialWaitTime: r, interval: a }) {
        let i = !0,
          s = () => (i = !1);
        return (
          (async () => {
            let o;
            t && (o = await e({ unpoll: s }));
            let c = (await r?.(o)) ?? a;
            await (0, n.u)(c);
            let f = async () => {
              i && (await e({ unpoll: s }), await (0, n.u)(a), f());
            };
            f();
          })(),
          s
        );
      }
    },
    95089: (e, t, r) => {
      r.d(t, { U: () => i });
      var n = r(97152),
        a = r(95789);
      function i(e) {
        let {
            batch: t,
            chain: r,
            ccipRead: i,
            key: s = "base",
            name: o = "Base Client",
            type: c = "base",
          } = e,
          f =
            e.experimental_blockTag ??
            ("number" == typeof r?.experimental_preconfirmationTime
              ? "pending"
              : void 0),
          u = Math.min(
            Math.max(Math.floor((r?.blockTime ?? 12e3) / 2), 500),
            4e3
          ),
          l = e.pollingInterval ?? u,
          d = e.cacheTime ?? l,
          b = e.account ? (0, n.J)(e.account) : void 0,
          {
            config: p,
            request: m,
            value: y,
          } = e.transport({ chain: r, pollingInterval: l }),
          h = {
            account: b,
            batch: t,
            cacheTime: d,
            ccipRead: i,
            chain: r,
            key: s,
            name: o,
            pollingInterval: l,
            request: m,
            transport: { ...p, ...y },
            type: c,
            uid: (0, a.L)(),
            ...(f ? { experimental_blockTag: f } : {}),
          };
        return Object.assign(h, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in h) delete n[e];
              let a = { ...t, ...n };
              return Object.assign(a, { extend: e(a) });
            };
          })(h),
        });
      }
    },
    96565: (e, t, r) => {
      r.d(t, { d: () => s });
      var n = r(35326),
        a = r(88737),
        i = r(61829);
      function s(e, { docsPath: t, ...r }) {
        let s = (() => {
          let t = (0, i.l)(e, r);
          return t instanceof a.RM ? e : t;
        })();
        return new n.zX(s, { docsPath: t, ...r });
      }
    },
    97152: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    97525: (e, t, r) => {
      r.d(t, {
        BI: () => P,
        EB: () => x,
        Iy: () => c,
        Iz: () => v,
        MR: () => w,
        M_: () => g,
        Nc: () => u,
        O: () => f,
        Wl: () => C,
        Wq: () => m,
        YE: () => d,
        YF: () => o,
        YW: () => s,
        ZP: () => b,
        _z: () => y,
        d_: () => k,
        dm: () => I,
        fo: () => A,
        gH: () => l,
        j: () => E,
        kE: () => h,
        l3: () => B,
        nK: () => M,
        nM: () => $,
        yy: () => p,
      });
      var n = r(23222),
        a = r(16871),
        i = r(13933);
      class s extends i.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends i.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      i.C;
      class c extends i.C {
        constructor({ data: e, params: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, n.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${r} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = r);
        }
      }
      class f extends i.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class u extends i.C {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class l extends i.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, a.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class d extends i.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class b extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class m extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class y extends i.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class h extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class v extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class w extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class $ extends i.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, n.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, n.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class P extends i.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class A extends i.C {
        constructor({ abiItem: e, data: t, params: r, size: a }) {
          super(
            `Data size of ${a} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, n.A)(r, { includeName: !0 })})`,
                `Data:   ${t} (${a} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = r),
            (this.size = a);
        }
      }
      class B extends i.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, n.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class M extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class E extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class I extends i.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class k extends i.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      class C extends i.C {
        constructor(e) {
          super(`Type "${e}" is not supported for packed encoding.`, {
            name: "UnsupportedPackedAbiType",
          });
        }
      }
    },
    98292: (e, t, r) => {
      r.d(t, { O: () => f, _: () => c });
      var n = r(32915),
        a = r(72757),
        i = r(5935),
        s = r(60186),
        o = r(32395);
      async function c(e, t) {
        return f(e, t);
      }
      async function f(e, t) {
        let {
            block: r,
            chain: c = e.chain,
            request: f,
            type: u = "eip1559",
          } = t || {},
          l = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: r, client: e, request: f })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (l < 1) throw new n.sM();
        let d = l.toString().split(".")[1]?.length ?? 0,
          b = 10 ** d,
          p = (e) => (e * BigInt(Math.ceil(l * b))) / BigInt(b),
          m = r || (await (0, a.T)(e, s.g, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: r,
            client: e,
            multiply: p,
            request: f,
            type: u,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === u) {
          if ("bigint" != typeof m.baseFeePerGas) throw new n.pw();
          let t =
              "bigint" == typeof f?.maxPriorityFeePerGas
                ? f.maxPriorityFeePerGas
                : await (0, i.N)(e, { block: m, chain: c, request: f }),
            r = p(m.baseFeePerGas);
          return {
            maxFeePerGas: f?.maxFeePerGas ?? r + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: f?.gasPrice ?? p(await (0, a.T)(e, o.L, "getGasPrice")({})),
        };
      }
    },
    98972: (e, t, r) => {
      r.d(t, { O: () => a });
      var n = r(78372);
      async function a(e) {
        let t = (0, n.g)(e, { method: "eth_newPendingTransactionFilter" }),
          r = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: r, request: t(r), type: "transaction" };
      }
    },
  },
]);
