"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [902],
  {
    4896: (e, t, r) => {
      r.d(t, { J: () => u });
      var n = r(97525),
        i = r(44352),
        a = r(88878),
        s = r(80897),
        o = r(23222);
      function u(e) {
        let { abi: t, data: r } = e,
          u = (0, i.di)(r, 0, 4),
          l = t.find(
            (e) => "function" === e.type && u === (0, a.V)((0, o.B)(e))
          );
        if (!l)
          throw new n.EB(u, { docsPath: "/docs/contract/decodeFunctionData" });
        return {
          functionName: l.name,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, s.n)(l.inputs, (0, i.di)(r, 4))
              : void 0,
        };
      }
    },
    15495: (e, t, r) => {
      r.d(t, { R: () => p });
      var n = r(97525),
        i = r(13933);
      class a extends i.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var s = r(55563),
        o = r(80329),
        u = r(33704),
        l = r(41706),
        c = r(23222),
        f = r(1347);
      let d = "/docs/contract/encodeEventTopics";
      function p(e) {
        let { abi: t, eventName: r, args: i } = e,
          a = t[0];
        if (r) {
          let e = (0, f.iY)({ abi: t, name: r });
          if (!e) throw new n.M_(r, { docsPath: d });
          a = e;
        }
        if ("event" !== a.type) throw new n.M_(void 0, { docsPath: d });
        let s = (0, c.B)(a),
          o = (0, u.h)(s),
          l = [];
        if (i && "inputs" in a) {
          let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(i)
              ? i
              : Object.values(i).length > 0
              ? e?.map((e) => i[e.name]) ?? []
              : [];
          t.length > 0 &&
            (l =
              e?.map((e, r) =>
                Array.isArray(t[r])
                  ? t[r].map((n, i) => h({ param: e, value: t[r][i] }))
                  : void 0 !== t[r] && null !== t[r]
                  ? h({ param: e, value: t[r] })
                  : null
              ) ?? []);
        }
        return [o, ...l];
      }
      function h({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, o.S)((0, s.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new a(e.type);
        return (0, l.h)([e], [t]);
      }
    },
    32522: (e, t, r) => {
      r.d(t, { Zh: () => u });
      var n = r(41706),
        i = r(40290),
        a = r(34561),
        s = r(80329),
        o = r(57001);
      function u(e) {
        let { domain: t = {}, message: r, primaryType: n } = e,
          a = { EIP712Domain: (0, o.H4)({ domain: t }), ...e.types };
        (0, o.$$)({ domain: t, message: r, primaryType: n, types: a });
        let u = ["0x1901"];
        return (
          t &&
            u.push(
              (function ({ domain: e, types: t }) {
                return l({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: a })
            ),
          "EIP712Domain" !== n &&
            u.push(l({ data: r, primaryType: n, types: a })),
          (0, s.S)((0, i.xW)(u))
        );
      }
      function l({ data: e, primaryType: t, types: r }) {
        let i = (function e({ data: t, primaryType: r, types: i }) {
          let o = [{ type: "bytes32" }],
            u = [
              (function ({ primaryType: e, types: t }) {
                let r = (0, a.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let r = "",
                      n = (function e(
                        { primaryType: t, types: r },
                        n = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          a = i?.[0];
                        if (n.has(a) || void 0 === r[a]) return n;
                        for (let t of (n.add(a), r[a]))
                          e({ primaryType: t.type, types: r }, n);
                        return n;
                      })({ primaryType: e, types: t });
                    for (let i of (n.delete(e), [e, ...Array.from(n).sort()]))
                      r += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return r;
                  })({ primaryType: e, types: t })
                );
                return (0, s.S)(r);
              })({ primaryType: r, types: i }),
            ];
          for (let l of i[r]) {
            let [r, c] = (function t({ types: r, name: i, type: o, value: u }) {
              if (void 0 !== r[o])
                return [
                  { type: "bytes32" },
                  (0, s.S)(e({ data: u, primaryType: o, types: r })),
                ];
              if ("bytes" === o) {
                let e = u.length % 2 ? "0" : "";
                return (
                  (u = `0x${e + u.slice(2)}`),
                  [{ type: "bytes32" }, (0, s.S)(u)]
                );
              }
              if ("string" === o)
                return [{ type: "bytes32" }, (0, s.S)((0, a.nj)(u))];
              if (o.lastIndexOf("]") === o.length - 1) {
                let e = o.slice(0, o.lastIndexOf("[")),
                  a = u.map((n) => t({ name: i, type: e, types: r, value: n }));
                return [
                  { type: "bytes32" },
                  (0, s.S)(
                    (0, n.h)(
                      a.map(([e]) => e),
                      a.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: o }, u];
            })({ types: i, name: l.name, type: l.type, value: t[l.name] });
            o.push(r), u.push(c);
          }
          return (0, n.h)(o, u);
        })({ data: e, primaryType: t, types: r });
        return (0, s.S)(i);
      }
    },
    34279: (e, t, r) => {
      r.d(t, { v: () => l });
      var n = r(97152),
        i = r(32733),
        a = r(30931),
        s = r(93527),
        o = r(72757),
        u = r(3972);
      async function l(e, t) {
        let {
            abi: r,
            address: l,
            args: c,
            dataSuffix: f,
            functionName: d,
            ...p
          } = t,
          h = p.account ? (0, n.J)(p.account) : e.account,
          y = (0, a.p)({ abi: r, args: c, functionName: d });
        try {
          let { data: n } = await (0, o.T)(
              e,
              u.T,
              "call"
            )({
              batch: !1,
              data: `${y}${f ? f.replace("0x", "") : ""}`,
              to: l,
              ...p,
              account: h,
            }),
            a = (0, i.e)({ abi: r, args: c, functionName: d, data: n || "0x" }),
            s = r.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: a,
            request: {
              abi: s,
              address: l,
              args: c,
              dataSuffix: f,
              functionName: d,
              ...p,
              account: h,
            },
          };
        } catch (e) {
          throw (0, s.j)(e, {
            abi: r,
            address: l,
            args: c,
            docsPath: "/docs/contract/simulateContract",
            functionName: d,
            sender: h?.address,
          });
        }
      }
    },
    37733: (e, t, r) => {
      r.d(t, { X: () => s });
      var n = r(15495),
        i = r(34561),
        a = r(78372);
      async function s(e, t) {
        let {
            address: r,
            abi: s,
            args: o,
            eventName: u,
            fromBlock: l,
            strict: c,
            toBlock: f,
          } = t,
          d = (0, a.g)(e, { method: "eth_newFilter" }),
          p = u ? (0, n.R)({ abi: s, args: o, eventName: u }) : void 0,
          h = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: r,
                fromBlock: "bigint" == typeof l ? (0, i.cK)(l) : l,
                toBlock: "bigint" == typeof f ? (0, i.cK)(f) : f,
                topics: p,
              },
            ],
          });
        return {
          abi: s,
          args: o,
          eventName: u,
          id: h,
          request: d(h),
          strict: !!c,
          type: "event",
        };
      }
    },
    38092: (e, t, r) => {
      r.d(t, { X: () => m, J: () => y });
      var n = r(4486),
        i = r(44964),
        a = r(4896),
        s = r(97525),
        o = r(40290),
        u = r(88878),
        l = r(41706),
        c = r(23222),
        f = r(1347);
      let d = "/docs/contract/encodeErrorResult";
      function p(e) {
        let { abi: t, errorName: r, args: n } = e,
          i = t[0];
        if (r) {
          let e = (0, f.iY)({ abi: t, args: n, name: r });
          if (!e) throw new s.yy(r, { docsPath: d });
          i = e;
        }
        if ("error" !== i.type) throw new s.yy(void 0, { docsPath: d });
        let a = (0, c.B)(i),
          p = (0, u.V)(a),
          h = "0x";
        if (n && n.length > 0) {
          if (!i.inputs) throw new s.ZP(i.name, { docsPath: d });
          h = (0, l.h)(i.inputs, n);
        }
        return (0, o.aP)([p, h]);
      }
      let h = "/docs/contract/encodeFunctionResult",
        y = "x-batch-gateway:true";
      async function m(e) {
        let { data: t, ccipRequest: r } = e,
          {
            args: [o],
          } = (0, a.J)({ abi: n.b2, data: t }),
          u = [],
          c = [];
        return (
          await Promise.all(
            o.map(async (e, t) => {
              try {
                (c[t] = e.urls.includes(y)
                  ? await m({ data: e.data, ccipRequest: r })
                  : await r(e)),
                  (u[t] = !1);
              } catch (e) {
                var a;
                (u[t] = !0),
                  (c[t] =
                    "HttpRequestError" === (a = e).name && a.status
                      ? p({
                          abi: n.b2,
                          errorName: "HttpError",
                          args: [a.status, a.shortMessage],
                        })
                      : p({
                          abi: [i.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in a ? a.shortMessage : a.message,
                          ],
                        }));
              }
            })
          ),
          (function (e) {
            let { abi: t, functionName: r, result: n } = e,
              i = t[0];
            if (r) {
              let e = (0, f.iY)({ abi: t, name: r });
              if (!e) throw new s.Iz(r, { docsPath: h });
              i = e;
            }
            if ("function" !== i.type) throw new s.Iz(void 0, { docsPath: h });
            if (!i.outputs) throw new s.MR(i.name, { docsPath: h });
            let a = (() => {
              if (0 === i.outputs.length) return [];
              if (1 === i.outputs.length) return [n];
              if (Array.isArray(n)) return n;
              throw new s.dm(n);
            })();
            return (0, l.h)(i.outputs, a);
          })({ abi: n.b2, functionName: "query", result: [u, c] })
        );
      }
    },
    41962: (e, t, r) => {
      r.d(t, { u: () => s });
      var n = r(1347),
        i = r(72757),
        a = r(75142);
      async function s(e, t) {
        let {
            abi: r,
            address: s,
            args: o,
            blockHash: u,
            eventName: l,
            fromBlock: c,
            toBlock: f,
            strict: d,
          } = t,
          p = l ? (0, n.iY)({ abi: r, name: l }) : void 0,
          h = p ? void 0 : r.filter((e) => "event" === e.type);
        return (0, i.T)(
          e,
          a.a,
          "getLogs"
        )({
          address: s,
          args: o,
          blockHash: u,
          event: p,
          events: h,
          fromBlock: c,
          toBlock: f,
          strict: d,
        });
      }
    },
    50902: (e, t, r) => {
      r.d(t, { $: () => rN });
      var n = r(4486),
        i = r(32733),
        a = r(30931),
        s = r(71552),
        o = r(42438),
        u = r(34561),
        l = r(13933),
        c = r(35326);
      function f(e) {
        if (!(e instanceof l.C)) return !1;
        let t = e.walk((e) => e instanceof c.M);
        return (
          t instanceof c.M &&
          (t.data?.errorName === "HttpError" ||
            t.data?.errorName === "ResolverError" ||
            t.data?.errorName === "ResolverNotContract" ||
            t.data?.errorName === "ResolverNotFound" ||
            t.data?.errorName === "ReverseAddressMismatch" ||
            t.data?.errorName === "UnsupportedResolverProfile")
        );
      }
      var d = r(38092),
        p = r(40290),
        h = r(55563),
        y = r(80329),
        m = r(60587);
      function g(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, m.q)(t) ? t : null;
      }
      function b(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, u.My)(t);
        let r = e.split(".");
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let n = g(r[e]),
            i = n ? (0, h.ZJ)(n) : (0, y.S)((0, h.Af)(r[e]), "bytes");
          t = (0, y.S)((0, p.xW)([t, i]), "bytes");
        }
        return (0, u.My)(t);
      }
      function v(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let r = new Uint8Array((0, h.Af)(t).byteLength + 2),
          n = 0,
          i = t.split(".");
        for (let e = 0; e < i.length; e++) {
          var a;
          let t = (0, h.Af)(i[e]);
          t.byteLength > 255 &&
            (t = (0, h.Af)(
              ((a = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? g(e) || (0, y.S)((0, h.Af)(e)) : (0, u.My)(t);
              })(i[e])),
              `[${a.slice(2)}]`)
            )),
            (r[n] = t.length),
            r.set(t, n + 1),
            (n += t.length + 1);
        }
        return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
      }
      var w = r(72757),
        x = r(25157);
      async function P(e, t) {
        let {
            blockNumber: r,
            blockTag: l,
            coinType: c,
            name: p,
            gatewayUrls: h,
            strict: y,
          } = t,
          { chain: m } = e,
          g = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!m)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, s.M)({
              blockNumber: r,
              chain: m,
              contract: "ensUniversalResolver",
            });
          })(),
          P = m?.ensTlds;
        if (P && !P.some((e) => p.endsWith(e))) return null;
        let A = null != c ? [b(p), BigInt(c)] : [b(p)];
        try {
          let t = (0, a.p)({ abi: n.Rm, functionName: "addr", args: A }),
            s = {
              address: g,
              abi: n.Ag,
              functionName: "resolveWithGateways",
              args: [(0, u.nj)(v(p)), t, h ?? [d.J]],
              blockNumber: r,
              blockTag: l,
            },
            c = (0, w.T)(e, x.J, "readContract"),
            f = await c(s);
          if ("0x" === f[0]) return null;
          let y = (0, i.e)({
            abi: n.Rm,
            args: A,
            functionName: "addr",
            data: f[0],
          });
          if ("0x" === y || "0x00" === (0, o.B)(y)) return null;
          return y;
        } catch (e) {
          if (y) throw e;
          if (f(e)) return null;
          throw e;
        }
      }
      class A extends l.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class E extends l.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class B extends l.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class C extends l.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      l.C;
      let I =
          /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        $ =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        N = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        k = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function T(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !Object.hasOwn(globalThis, "Image")
          )
            return !1;
          return new Promise((t) => {
            let r = new Image();
            (r.onload = () => {
              t(!0);
            }),
              (r.onerror = () => {
                t(!1);
              }),
              (r.src = e);
          });
        }
      }
      function S(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function R({ uri: e, gatewayUrls: t }) {
        let r = N.test(e);
        if (r) return { uri: e, isOnChain: !0, isEncoded: r };
        let n = S(t?.ipfs, "https://ipfs.io"),
          i = S(t?.arweave, "https://arweave.net"),
          a = e.match(I),
          {
            protocol: s,
            subpath: o,
            target: u,
            subtarget: l = "",
          } = a?.groups || {},
          c = "ipns:/" === s || "ipns/" === o,
          f = "ipfs:/" === s || "ipfs/" === o || $.test(e);
        if (e.startsWith("http") && !c && !f) {
          let r = e;
          return (
            t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: r, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((c || f) && u)
          return {
            uri: `${n}/${c ? "ipns" : "ipfs"}/${u}${l}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === s && u)
          return { uri: `${i}/${u}${l || ""}`, isOnChain: !1, isEncoded: !1 };
        let d = e.replace(k, "");
        if (
          (d.startsWith("<svg") && (d = `data:image/svg+xml;base64,${btoa(d)}`),
          d.startsWith("data:") || d.startsWith("{"))
        )
          return { uri: d, isOnChain: !0, isEncoded: !1 };
        throw new B({ uri: e });
      }
      function O(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new A({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function U({ gatewayUrls: e, uri: t }) {
        try {
          let r = await fetch(t).then((e) => e.json());
          return await z({ gatewayUrls: e, uri: O(r) });
        } catch {
          throw new B({ uri: t });
        }
      }
      async function z({ gatewayUrls: e, uri: t }) {
        let { uri: r, isOnChain: n } = R({ uri: t, gatewayUrls: e });
        if (n || (await T(r))) return r;
        throw new B({ uri: t });
      }
      async function j(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, x.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, x.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new C({ namespace: t.namespace });
      }
      async function M(e, { gatewayUrls: t, record: r }) {
        return /eip155:/i.test(r)
          ? L(e, { gatewayUrls: t, record: r })
          : z({ uri: r, gatewayUrls: t });
      }
      async function L(e, { gatewayUrls: t, record: r }) {
        let n = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [r, n, i] = t.split("/"),
              [a, s] = r.split(":"),
              [o, u] = n.split(":");
            if (!a || "eip155" !== a.toLowerCase())
              throw new E({ reason: "Only EIP-155 supported" });
            if (!s) throw new E({ reason: "Chain ID not found" });
            if (!u) throw new E({ reason: "Contract address not found" });
            if (!i) throw new E({ reason: "Token ID not found" });
            if (!o) throw new E({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s, 10),
              namespace: o.toLowerCase(),
              contractAddress: u,
              tokenID: i,
            };
          })(r),
          {
            uri: i,
            isOnChain: a,
            isEncoded: s,
          } = R({ uri: await j(e, { nft: n }), gatewayUrls: t });
        if (
          a &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return z({
            uri: O(
              JSON.parse(
                s ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let o = n.tokenID;
        return (
          "erc1155" === n.namespace &&
            (o = o.replace("0x", "").padStart(64, "0")),
          U({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, o) })
        );
      }
      async function D(e, t) {
        let {
            blockNumber: r,
            blockTag: o,
            key: l,
            name: c,
            gatewayUrls: p,
            strict: h,
          } = t,
          { chain: y } = e,
          m = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!y)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, s.M)({
              blockNumber: r,
              chain: y,
              contract: "ensUniversalResolver",
            });
          })(),
          g = y?.ensTlds;
        if (g && !g.some((e) => c.endsWith(e))) return null;
        try {
          let t = {
              address: m,
              abi: n.Ag,
              args: [
                (0, u.nj)(v(c)),
                (0, a.p)({ abi: n.SJ, functionName: "text", args: [b(c), l] }),
                p ?? [d.J],
              ],
              functionName: "resolveWithGateways",
              blockNumber: r,
              blockTag: o,
            },
            s = (0, w.T)(e, x.J, "readContract"),
            f = await s(t);
          if ("0x" === f[0]) return null;
          let h = (0, i.e)({ abi: n.SJ, functionName: "text", data: f[0] });
          return "" === h ? null : h;
        } catch (e) {
          if (h) throw e;
          if (f(e)) return null;
          throw e;
        }
      }
      async function W(
        e,
        {
          blockNumber: t,
          blockTag: r,
          assetGatewayUrls: n,
          name: i,
          gatewayUrls: a,
          strict: s,
          universalResolverAddress: o,
        }
      ) {
        let u = await (0, w.T)(
          e,
          D,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: r,
          key: "avatar",
          name: i,
          universalResolverAddress: o,
          gatewayUrls: a,
          strict: s,
        });
        if (!u) return null;
        try {
          return await M(e, { record: u, gatewayUrls: n });
        } catch {
          return null;
        }
      }
      async function F(e, t) {
        let {
            address: r,
            blockNumber: i,
            blockTag: a,
            coinType: o = 60n,
            gatewayUrls: u,
            strict: l,
          } = t,
          { chain: c } = e,
          p = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!c)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, s.M)({
              blockNumber: i,
              chain: c,
              contract: "ensUniversalResolver",
            });
          })();
        try {
          let t = {
              address: p,
              abi: n.oX,
              args: [r, o, u ?? [d.J]],
              functionName: "reverseWithGateways",
              blockNumber: i,
              blockTag: a,
            },
            s = (0, w.T)(e, x.J, "readContract"),
            [l] = await s(t);
          return l || null;
        } catch (e) {
          if (l) throw e;
          if (f(e)) return null;
          throw e;
        }
      }
      async function _(e, t) {
        let { blockNumber: r, blockTag: n, name: i } = t,
          { chain: a } = e,
          o = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!a)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, s.M)({
              blockNumber: r,
              chain: a,
              contract: "ensUniversalResolver",
            });
          })(),
          l = a?.ensTlds;
        if (l && !l.some((e) => i.endsWith(e)))
          throw Error(
            `${i} is not a valid ENS TLD (${l?.join(", ")}) for chain "${
              a.name
            }" (id: ${a.id}).`
          );
        let [c] = await (0, w.T)(
          e,
          x.J,
          "readContract"
        )({
          address: o,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [
                { type: "address" },
                { type: "bytes32" },
                { type: "uint256" },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, u.nj)(v(i))],
          blockNumber: r,
          blockTag: n,
        });
        return c;
      }
      var q = r(3972),
        V = r(97152),
        J = r(96565),
        H = r(44332),
        K = r(74750),
        G = r(58623);
      async function Z(e, t) {
        let {
            account: r = e.account,
            blockNumber: n,
            blockTag: i = "latest",
            blobs: a,
            data: s,
            gas: o,
            gasPrice: l,
            maxFeePerBlobGas: c,
            maxFeePerGas: f,
            maxPriorityFeePerGas: d,
            to: p,
            value: h,
            ...y
          } = t,
          m = r ? (0, V.J)(r) : void 0;
        try {
          (0, G.c)(t);
          let r = "bigint" == typeof n ? (0, u.cK)(n) : void 0,
            g = e.chain?.formatters?.transactionRequest?.format,
            b = (g || K.Bv)({
              ...(0, H.o)(y, { format: g }),
              from: m?.address,
              blobs: a,
              data: s,
              gas: o,
              gasPrice: l,
              maxFeePerBlobGas: c,
              maxFeePerGas: f,
              maxPriorityFeePerGas: d,
              to: p,
              value: h,
            }),
            v = await e.request({
              method: "eth_createAccessList",
              params: [b, r || i],
            });
          return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
        } catch (r) {
          throw (0, J.d)(r, { ...t, account: m, chain: e.chain });
        }
      }
      var Q = r(78372);
      async function X(e) {
        let t = (0, Q.g)(e, { method: "eth_newBlockFilter" }),
          r = await e.request({ method: "eth_newBlockFilter" });
        return { id: r, request: t(r), type: "block" };
      }
      var Y = r(37733),
        ee = r(15495);
      async function et(
        e,
        {
          address: t,
          args: r,
          event: n,
          events: i,
          fromBlock: a,
          strict: s,
          toBlock: o,
        } = {}
      ) {
        let l = i ?? (n ? [n] : void 0),
          c = (0, Q.g)(e, { method: "eth_newFilter" }),
          f = [];
        l &&
          ((f = [
            l.flatMap((e) =>
              (0, ee.R)({ abi: [e], eventName: e.name, args: r })
            ),
          ]),
          n && (f = f[0]));
        let d = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof a ? (0, u.cK)(a) : a,
              toBlock: "bigint" == typeof o ? (0, u.cK)(o) : o,
              ...(f.length ? { topics: f } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: r,
          eventName: n ? n.name : void 0,
          fromBlock: a,
          id: d,
          request: c(d),
          strict: !!s,
          toBlock: o,
          type: "event",
        };
      }
      var er = r(98972),
        en = r(68668),
        ei = r(98292),
        ea = r(34897),
        es = r(5935),
        eo = r(90707);
      async function eu(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var el = r(60186),
        ec = r(70054),
        ef = r(11914);
      async function ed(
        e,
        { blockHash: t, blockNumber: r, blockTag: n = "latest" } = {}
      ) {
        let i,
          a = void 0 !== r ? (0, u.cK)(r) : void 0;
        return (
          (i = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [a || n],
                },
                { dedupe: !!a }
              )),
          (0, ef.ME)(i)
        );
      }
      var ep = r(35471),
        eh = r(53108),
        ey = r(41962);
      class em extends l.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function eg(e, t) {
        let { address: r, factory: n, factoryData: i } = t;
        try {
          let [t, a, s, o, u, l, c] = await (0, w.T)(
            e,
            x.J,
            "readContract"
          )({
            abi: eb,
            address: r,
            functionName: "eip712Domain",
            factory: n,
            factoryData: i,
          });
          return {
            domain: {
              name: a,
              version: s,
              chainId: Number(o),
              verifyingContract: u,
              salt: l,
            },
            extensions: c,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new em({ address: r });
          throw e;
        }
      }
      let eb = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function ev(
        e,
        {
          blockCount: t,
          blockNumber: r,
          blockTag: n = "latest",
          rewardPercentiles: i,
        }
      ) {
        var a;
        let s = "bigint" == typeof r ? (0, u.cK)(r) : void 0;
        return {
          baseFeePerGas: (a = await e.request(
            { method: "eth_feeHistory", params: [(0, u.cK)(t), s || n, i] },
            { dedupe: !!s }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: a.gasUsedRatio,
          oldestBlock: BigInt(a.oldestBlock),
          reward: a.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      var ew = r(77564),
        ex = r(77064),
        eP = r(52623);
      async function eA(e, { filter: t }) {
        let r = t.strict ?? !1,
          n = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, eP.e)(e));
        return t.abi ? (0, ex.p)({ abi: t.abi, logs: n, strict: r }) : n;
      }
      var eE = r(32395),
        eB = r(75142);
      async function eC(
        e,
        { address: t, blockNumber: r, blockTag: n, storageKeys: i }
      ) {
        let a = void 0 !== r ? (0, u.cK)(r) : void 0;
        var s = await e.request({
          method: "eth_getProof",
          params: [t, i, a || (n ?? "latest")],
        });
        return {
          ...s,
          balance: s.balance ? BigInt(s.balance) : void 0,
          nonce: s.nonce ? (0, ef.ME)(s.nonce) : void 0,
          storageProof: s.storageProof
            ? s.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function eI(
        e,
        { address: t, blockNumber: r, blockTag: n = "latest", slot: i }
      ) {
        let a = void 0 !== r ? (0, u.cK)(r) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, i, a || n],
        });
      }
      var e$ = r(83759);
      async function eN(e, { hash: t, transactionReceipt: r }) {
        let [n, i] = await Promise.all([
            (0, w.T)(e, ec.G, "getBlockNumber")({}),
            t ? (0, w.T)(e, e$.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          a = r?.blockNumber || i?.blockNumber;
        return a ? n - a + 1n : 0n;
      }
      var ek = r(6434),
        eT = r(1761),
        eS = r(61812),
        eR = r(43712),
        eO = r(97525),
        eU = r(88737),
        ez = r(93527),
        ej = r(61829),
        eM = r(61936),
        eL = r(4274);
      async function eD(e, t) {
        let {
          blockNumber: r,
          blockTag: n = e.experimental_blockTag ?? "latest",
          blocks: s,
          returnFullTransactions: o,
          traceTransfers: l,
          validation: f,
        } = t;
        try {
          let t = [];
          for (let e of s) {
            let r = e.blockOverrides ? eR.J(e.blockOverrides) : void 0,
              n = e.calls.map((e) => {
                let t = e.account ? (0, V.J)(e.account) : void 0,
                  r = e.abi ? (0, a.p)(e) : e.data,
                  n = {
                    ...e,
                    data: e.dataSuffix
                      ? (0, p.xW)([r || "0x", e.dataSuffix])
                      : r,
                    from: e.from ?? t?.address,
                  };
                return (0, G.c)(n), (0, K.Bv)(n);
              }),
              i = e.stateOverrides ? (0, eL.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: r, calls: n, stateOverrides: i });
          }
          let d = "bigint" == typeof r ? (0, u.cK)(r) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: o,
                  traceTransfers: l,
                  validation: f,
                },
                d || n,
              ],
            })
          ).map((e, t) => ({
            ...(0, eM.$)(e),
            calls: e.calls.map((e, r) => {
              let { abi: n, args: a, functionName: o, to: u } = s[t].calls[r],
                l = e.error?.data ?? e.returnData,
                f = BigInt(e.gasUsed),
                d = e.logs?.map((e) => (0, eP.e)(e)),
                p = "0x1" === e.status ? "success" : "failure",
                h =
                  n && "success" === p && "0x" !== l
                    ? (0, i.e)({ abi: n, data: l, functionName: o })
                    : null,
                y = (() => {
                  let t;
                  if (
                    "success" !== p &&
                    (e.error?.data === "0x"
                      ? (t = new eO.O())
                      : e.error && (t = new c.$S(e.error)),
                    t)
                  )
                    return (0, ez.j)(t, {
                      abi: n ?? [],
                      address: u ?? "0x",
                      args: a,
                      functionName: o ?? "<unknown>",
                    });
                })();
              return {
                data: l,
                gasUsed: f,
                logs: d,
                status: p,
                ...("success" === p ? { result: h } : { error: y }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, ej.l)(t, {});
          if (e instanceof eU.RM) throw t;
          throw e;
        }
      }
      var eW = r(253),
        eF = r(53098),
        e_ = r(26722),
        eq = r(32255),
        eV = r(93036),
        eJ = r(52404),
        eH = r(26368),
        eK = r(28189);
      function eG(e, t) {
        if (e3(e) > t) throw new e4({ givenSize: e3(e), maxSize: t });
      }
      let eZ = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function eQ(e) {
        return e >= eZ.zero && e <= eZ.nine
          ? e - eZ.zero
          : e >= eZ.A && e <= eZ.F
          ? e - (eZ.A - 10)
          : e >= eZ.a && e <= eZ.f
          ? e - (eZ.a - 10)
          : void 0;
      }
      function eX(e, t = {}) {
        let { dir: r = "left" } = t,
          n = e,
          i = 0;
        for (let e = 0; e < n.length - 1; e++)
          if ("0" === n["left" === r ? e : n.length - e - 1].toString()) i++;
          else break;
        return "left" === r ? n.slice(i) : n.slice(0, n.length - i);
      }
      var eY = r(33395),
        e0 = r(30958);
      let e1 = new TextDecoder(),
        e2 = new TextEncoder();
      function e5(e, t = {}) {
        let { size: r } = t,
          n = e;
        r && (eY.Sl(e, r), (n = eK.M7(e, r)));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let a = i.length / 2,
          s = new Uint8Array(a);
        for (let e = 0, t = 0; e < a; e++) {
          let r = eQ(i.charCodeAt(t++)),
            n = eQ(i.charCodeAt(t++));
          if (void 0 === r || void 0 === n)
            throw new eJ.C(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          s[e] = 16 * r + n;
        }
        return s;
      }
      function e3(e) {
        return e.length;
      }
      function e6(e, t = {}) {
        let { size: r } = t;
        void 0 !== r && eG(e, r);
        let n = eK.uK(e, t);
        return eK.Ro(n, t);
      }
      function e8(e) {
        return eX(e, { dir: "left" });
      }
      class e7 extends eJ.C {
        constructor(e) {
          super(`Bytes value \`${e}\` is not a valid boolean.`, {
            metaMessages: [
              "The bytes array must contain a single byte of either a `0` or `1` value.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesBooleanError",
            });
        }
      }
      eJ.C;
      class e4 extends eJ.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class e9 extends eJ.C {
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
              value: "Bytes.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class te extends eJ.C {
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
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function tt(e, t = {}) {
        var r;
        let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
          i = (0, eH.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? e5(e)
              : (r = e) instanceof Uint8Array
              ? r
              : new Uint8Array(r)
          );
        return "Bytes" === n ? i : eK.uK(i);
      }
      class tr extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let tn = { checksum: new tr(8192) }.checksum,
        ti = /^0x[a-fA-F0-9]{40}$/;
      function ta(e, t = {}) {
        let { strict: r = !0 } = t;
        if (!ti.test(e)) throw new tu({ address: e, cause: new tl() });
        if (r) {
          if (e.toLowerCase() === e) return;
          if (ts(e) !== e) throw new tu({ address: e, cause: new tc() });
        }
      }
      function ts(e) {
        if (tn.has(e)) return tn.get(e);
        ta(e, { strict: !1 });
        let t = e.substring(2).toLowerCase(),
          r = tt(
            (function (e, t = {}) {
              let { size: r } = t,
                n = e2.encode(e);
              return "number" == typeof r
                ? (eG(n, r),
                  (function (e, t = {}) {
                    let { dir: r, size: n = 32 } = t;
                    if (0 === n) return e;
                    if (e.length > n)
                      throw new te({
                        size: e.length,
                        targetSize: n,
                        type: "Bytes",
                      });
                    let i = new Uint8Array(n);
                    for (let t = 0; t < n; t++) {
                      let a = "right" === r;
                      i[a ? t : n - t - 1] = e[a ? t : e.length - t - 1];
                    }
                    return i;
                  })(n, { dir: "right", size: r }))
                : n;
            })(t),
            { as: "Bytes" }
          ),
          n = t.split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              n[e + 1] &&
              (n[e + 1] = n[e + 1].toUpperCase());
        let i = `0x${n.join("")}`;
        return tn.set(e, i), i;
      }
      function to(e, t = {}) {
        let { strict: r = !0 } = t ?? {};
        try {
          return ta(e, { strict: r }), !0;
        } catch {
          return !1;
        }
      }
      class tu extends eJ.C {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class tl extends eJ.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class tc extends eJ.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function tf(e) {
        let t = !0,
          r = "",
          n = 0,
          i = "",
          a = !1;
        for (let s = 0; s < e.length; s++) {
          let o = e[s];
          if (
            (["(", ")", ","].includes(o) && (t = !0),
            "(" === o && n++,
            ")" === o && n--,
            t)
          ) {
            if (0 === n) {
              if (" " === o && ["event", "function", "error", ""].includes(i))
                i = "";
              else if (((i += o), ")" === o)) {
                a = !0;
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
            (i += o), (r += o);
          }
        }
        if (!a) throw new eJ.C("Unable to normalize signature.");
        return i;
      }
      function td(e, t = {}) {
        let { prepare: r = !0 } = t,
          n =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, eq.uT)(e);
                  else {
                    let r = (0, e_.e)(e),
                      n = e.length;
                    for (let i = 0; i < n; i++) {
                      let n = e[i];
                      if (!(0, eF.WL)(n)) {
                        t = (0, eq.uT)(n, r);
                        break;
                      }
                    }
                  }
                  if (!t) throw new eW.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...n, ...(r ? { hash: ty(n) } : {}) };
      }
      function tp(e, t, r) {
        let n,
          { args: i = [], prepare: a = !0 } = r ?? {},
          s = eK.tf(t, { strict: !1 }),
          o = e.filter((e) =>
            s
              ? "function" === e.type || "error" === e.type
                ? th(e) === eK.di(t, 0, 4)
                : "event" === e.type && ty(e) === t
              : "name" in e && e.name === t
          );
        if (0 === o.length) throw new tg({ name: t });
        if (1 === o.length)
          return { ...o[0], ...(a ? { hash: ty(o[0]) } : {}) };
        for (let e of o) {
          if ("inputs" in e) {
            if (!i || 0 === i.length) {
              if (!e.inputs || 0 === e.inputs.length)
                return { ...e, ...(a ? { hash: ty(e) } : {}) };
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === i.length &&
              i.every((t, r) => {
                let n = "inputs" in e && e.inputs[r];
                return (
                  !!n &&
                  (function e(t, r) {
                    let n = typeof t,
                      i = r.type;
                    switch (i) {
                      case "address":
                        return to(t, { strict: !1 });
                      case "bool":
                        return "boolean" === n;
                      case "function":
                      case "string":
                        return "string" === n;
                      default:
                        if ("tuple" === i && "components" in r)
                          return Object.values(r.components).every((r, n) =>
                            e(Object.values(t)[n], r)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            i
                          )
                        )
                          return "number" === n || "bigint" === n;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                          return "string" === n || t instanceof Uint8Array;
                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                          return (
                            Array.isArray(t) &&
                            t.every((t) =>
                              e(t, {
                                ...r,
                                type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                              })
                            )
                          );
                        return !1;
                    }
                  })(t, n)
                );
              })
            ) {
              if (n && "inputs" in n && n.inputs) {
                let t = (function e(t, r, n) {
                  for (let i in t) {
                    let a = t[i],
                      s = r[i];
                    if (
                      "tuple" === a.type &&
                      "tuple" === s.type &&
                      "components" in a &&
                      "components" in s
                    )
                      return e(a.components, s.components, n[i]);
                    let o = [a.type, s.type];
                    if (
                      (o.includes("address") && o.includes("bytes20")) ||
                      (((o.includes("address") && o.includes("string")) ||
                        (o.includes("address") && o.includes("bytes"))) &&
                        to(n[i], { strict: !1 }))
                    )
                      return o;
                  }
                })(e.inputs, n.inputs, i);
                if (t)
                  throw new tm(
                    { abiItem: e, type: t[0] },
                    { abiItem: n, type: t[1] }
                  );
              }
              n = e;
            }
          }
        }
        let u = (() => {
          if (n) return n;
          let [e, ...t] = o;
          return { ...e, overloads: t };
        })();
        if (!u) throw new tg({ name: t });
        return { ...u, ...(a ? { hash: ty(u) } : {}) };
      }
      function th(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, r] = e;
            return tp(t, r);
          }
          return e[0];
        })();
        return eK.di(ty(t), 0, 4);
      }
      function ty(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, r] = e;
            return tp(t, r);
          }
          return e[0];
        })();
        return "string" != typeof t && "hash" in t && t.hash
          ? t.hash
          : tt(
              eK.sH(
                (function (...e) {
                  let t = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, r] = e;
                      return tp(t, r);
                    }
                    return e[0];
                  })();
                  return tf("string" == typeof t ? t : eV.B(t));
                })(t)
              )
            );
      }
      class tm extends eJ.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${tf(eV.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${tf(eV.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class tg extends eJ.C {
        constructor({ name: e, data: t, type: r = "item" }) {
          super(
            `ABI ${r}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      eJ.C;
      var tb = r(2685),
        tv = r(71128);
      let tw = /^(.*)\[([0-9]*)\]$/,
        tx = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        tP =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        tA = 2n ** 256n - 1n;
      function tE(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: i } = e[r];
          n ? (t += 32) : (t += eK.Ej(i));
        }
        let r = [],
          n = [],
          i = 0;
        for (let a = 0; a < e.length; a++) {
          let { dynamic: s, encoded: o } = e[a];
          s
            ? (r.push(eK.oB(t + i, { size: 32 })), n.push(o), (i += eK.Ej(o)))
            : r.push(o);
        }
        return eK.xW(...r, ...n);
      }
      function tB(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function tC(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(tC);
        let r = tB(e.type);
        return !!(r && tC({ ...e, type: r[1] }));
      }
      let tI = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new tk({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new tN({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new t$({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new t$({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      class t$ extends eJ.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.NegativeOffsetError",
            });
        }
      }
      class tN extends eJ.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.PositionOutOfBoundsError",
            });
        }
      }
      class tk extends eJ.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.RecursiveReadLimitExceededError",
            });
        }
      }
      function tT(e, t, r) {
        let { checksumAddress: n = !1 } = r ?? {};
        if (e.length !== t.length)
          throw new tM({ expectedLength: e.length, givenLength: t.length });
        let i = tE(
          (function ({ checksumAddress: e, parameters: t, values: r }) {
            let n = [];
            for (let i = 0; i < t.length; i++)
              n.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: r,
                  value: n,
                }) {
                  let i = tB(r.type);
                  if (i) {
                    let [a, s] = i;
                    return (function (t, r) {
                      let { checksumAddress: n, length: i, parameter: a } = r,
                        s = null === i;
                      if (!Array.isArray(t)) throw new tL(t);
                      if (!s && t.length !== i)
                        throw new tz({
                          expectedLength: i,
                          givenLength: t.length,
                          type: `${a.type}[${i}]`,
                        });
                      let o = !1,
                        u = [];
                      for (let r = 0; r < t.length; r++) {
                        let i = e({
                          checksumAddress: n,
                          parameter: a,
                          value: t[r],
                        });
                        i.dynamic && (o = !0), u.push(i);
                      }
                      if (s || o) {
                        let e = tE(u);
                        if (s) {
                          let t = eK.oB(u.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: u.length > 0 ? eK.xW(t, e) : t,
                          };
                        }
                        if (o) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: eK.xW(...u.map(({ encoded: e }) => e)),
                      };
                    })(n, {
                      checksumAddress: t,
                      length: a,
                      parameter: { ...r, type: s },
                    });
                  }
                  if ("tuple" === r.type)
                    return (function (t, r) {
                      let { checksumAddress: n, parameter: i } = r,
                        a = !1,
                        s = [];
                      for (let r = 0; r < i.components.length; r++) {
                        let o = i.components[r],
                          u = Array.isArray(t) ? r : o.name,
                          l = e({
                            checksumAddress: n,
                            parameter: o,
                            value: t[u],
                          });
                        s.push(l), l.dynamic && (a = !0);
                      }
                      return {
                        dynamic: a,
                        encoded: a
                          ? tE(s)
                          : eK.xW(...s.map(({ encoded: e }) => e)),
                      };
                    })(n, { checksumAddress: t, parameter: r });
                  if ("address" === r.type) {
                    var a = n,
                      s = { checksum: t };
                    let { checksum: e = !1 } = s;
                    return (
                      ta(a, { strict: e }),
                      { dynamic: !1, encoded: eK.Ho(a.toLowerCase()) }
                    );
                  }
                  if ("bool" === r.type) {
                    var o = n;
                    if ("boolean" != typeof o)
                      throw new eJ.C(
                        `Invalid boolean value: "${o}" (type: ${typeof o}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: eK.Ho(eK.xb(o)) };
                  }
                  if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                    let e = r.type.startsWith("int"),
                      [, , t = "256"] = tP.exec(r.type) ?? [];
                    return (function (e, { signed: t, size: r }) {
                      if ("number" == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          i = t ? -n - 1n : 0n;
                        if (e > n || e < i)
                          throw new eK.Ty({
                            max: n.toString(),
                            min: i.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: eK.oB(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(t) });
                  }
                  if (r.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, r] = t.split("bytes"),
                        n = eK.Ej(e);
                      if (!r) {
                        let t = e;
                        return (
                          n % 32 != 0 &&
                            (t = eK.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: eK.xW(eK.Ho(eK.oB(n, { size: 32 })), t),
                          }
                        );
                      }
                      if (n !== Number.parseInt(r, 10))
                        throw new tj({
                          expectedSize: Number.parseInt(r, 10),
                          value: e,
                        });
                      return { dynamic: !1, encoded: eK.M7(e) };
                    })(n, { type: r.type });
                  if ("string" === r.type) {
                    var u = n;
                    let e = eK.sH(u),
                      t = Math.ceil(eK.Ej(e) / 32),
                      r = [];
                    for (let n = 0; n < t; n++)
                      r.push(eK.M7(eK.di(e, 32 * n, (n + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: eK.xW(
                        eK.M7(eK.oB(eK.Ej(e), { size: 32 })),
                        ...r
                      ),
                    };
                  }
                  throw new tD(r.type);
                })({ checksumAddress: e, parameter: t[i], value: r[i] })
              );
            return n;
          })({ checksumAddress: n, parameters: e, values: t })
        );
        return 0 === i.length ? "0x" : i;
      }
      function tS(e, t) {
        if (e.length !== t.length)
          throw new tM({ expectedLength: e.length, givenLength: t.length });
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let i = e[n],
            a = t[n];
          r.push(tS.encode(i, a));
        }
        return eK.xW(...r);
      }
      function tR(e) {
        return (Array.isArray(e) && "string" == typeof e[0]) ||
          "string" == typeof e
          ? (function (e) {
              let t = [];
              if ("string" == typeof e) {
                let r = (0, eq.NV)(e),
                  n = r.length;
                for (let e = 0; e < n; e++)
                  t.push((0, eq.Pj)(r[e], { modifiers: eF.Dv }));
              } else {
                let r = (0, e_.e)(e),
                  n = e.length;
                for (let i = 0; i < n; i++) {
                  let n = e[i];
                  if ((0, eF.WL)(n)) continue;
                  let a = (0, eq.NV)(n),
                    s = a.length;
                  for (let e = 0; e < s; e++)
                    t.push((0, eq.Pj)(a[e], { modifiers: eF.Dv, structs: r }));
                }
              }
              if (0 === t.length) throw new tb.A9({ params: e });
              return t;
            })(e)
          : e;
      }
      (tS || (tS = {})).encode = function e(t, r, n = !1) {
        if ("address" === t) return ta(r), eK.Ho(r.toLowerCase(), 32 * !!n);
        if ("string" === t) return eK.sH(r);
        if ("bytes" === t) return r;
        if ("bool" === t) return eK.Ho(eK.xb(r), n ? 32 : 1);
        let i = t.match(tP);
        if (i) {
          let [e, t, a = "256"] = i,
            s = Number.parseInt(a, 10) / 8;
          return eK.oB(r, { size: n ? 32 : s, signed: "int" === t });
        }
        let a = t.match(tx);
        if (a) {
          let [e, t] = a;
          if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
            throw new tj({ expectedSize: Number.parseInt(t, 10), value: r });
          return eK.M7(r, 32 * !!n);
        }
        let s = t.match(tw);
        if (s && Array.isArray(r)) {
          let [t, n] = s,
            i = [];
          for (let t = 0; t < r.length; t++) i.push(e(n, r[t], !0));
          return 0 === i.length ? "0x" : eK.xW(...i);
        }
        throw new tD(t);
      };
      class tO extends eJ.C {
        constructor({ data: e, parameters: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [`Params: (${tv.Q(t)})`, `Data:   ${e} (${r} bytes)`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.DataSizeTooSmallError",
            });
        }
      }
      class tU extends eJ.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ZeroDataError",
            });
        }
      }
      class tz extends eJ.C {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class tj extends eJ.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${eK.Ej(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class tM extends eJ.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class tL extends eJ.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class tD extends eJ.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function tW(e, t = {}) {
        return td(e, t);
      }
      function tF(e, t, r) {
        let n = tp(e, t, r);
        if ("function" !== n.type) throw new tg({ name: t, type: "function" });
        return n;
      }
      let t_ = "0x0000000000000000000000000000000000000000";
      var tq = r(54560);
      async function tV(e, t) {
        let {
            blockNumber: r,
            blockTag: n,
            calls: i,
            stateOverrides: s,
            traceAssetChanges: o,
            traceTransfers: u,
            validation: c,
          } = t,
          f = t.account ? (0, V.J)(t.account) : void 0;
        if (o && !f)
          throw new l.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = f
            ? (function (...e) {
                let [t, r] = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, r] = e;
                      return [
                        (function (e) {
                          let t = e.find((e) => "constructor" === e.type);
                          if (!t) throw new tg({ name: "constructor" });
                          return t;
                        })(t),
                        r,
                      ];
                    }
                    return e;
                  })(),
                  { bytecode: n, args: i } = r;
                return eK.xW(
                  n,
                  t.inputs?.length && i?.length ? tT(t.inputs, i) : "0x"
                );
              })(td("constructor(bytes, bytes)"), {
                bytecode: tq.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (...e) {
                    let [t, r = []] = (() => {
                        if (Array.isArray(e[0])) {
                          let [t, r, n] = e;
                          return [tF(t, r, { args: n }), n];
                        }
                        let [t, r] = e;
                        return [t, r];
                      })(),
                      { overloads: n } = t,
                      i = n ? tF([t, ...n], t.name, { args: r }) : t,
                      a = th(i),
                      s = r.length > 0 ? tT(i.inputs, r) : void 0;
                    return s ? eK.xW(a, s) : a;
                  })(tW("function getBalance(address)"), [f.address]),
                ],
              })
            : void 0,
          p = o
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: r } = await Z(e, {
                    account: f.address,
                    ...t,
                    data: t.abi ? (0, a.p)(t) : t.data,
                  });
                  return r.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          h = await eD(e, {
            blockNumber: r,
            blockTag: n,
            blocks: [
              ...(o
                ? [
                    { calls: [{ data: d }], stateOverrides: s },
                    {
                      calls: p.map((e, t) => ({
                        abi: [
                          tW("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [f.address],
                        to: e,
                        from: t_,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t_, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...i, {}].map((e) => ({ ...e, from: f?.address })),
                stateOverrides: s,
              },
              ...(o
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: p.map((e, t) => ({
                        abi: [
                          tW("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [f.address],
                        to: e,
                        from: t_,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t_, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [tW("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: t_,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t_, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [
                          tW("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: t_,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t_, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [tW("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: t_,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t_, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: u,
            validation: c,
          }),
          y = o ? h[2] : h[0],
          [m, g, , b, v, w, x, P] = o ? h : [],
          { calls: A, ...E } = y,
          B = A.slice(0, -1) ?? [],
          C = [...(m?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, ef.uU)(e.data) : null
          ),
          I = [...(b?.calls ?? []), ...(v?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, ef.uU)(e.data) : null
          ),
          $ = (w?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          N = (P?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          k = (x?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = [];
        for (let [e, t] of I.entries()) {
          let r = C[e];
          if ("bigint" != typeof t || "bigint" != typeof r) continue;
          let n = $[e - 1],
            i = N[e - 1],
            a = k[e - 1],
            s =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: p[e - 1],
                    decimals: a || n ? Number(n ?? 1) : void 0,
                    symbol: i ?? void 0,
                  };
          T.some((e) => e.token.address === s.address) ||
            T.push({ token: s, value: { pre: r, post: t, diff: t - r } });
        }
        return { assetChanges: T, block: E, results: B };
      }
      var tJ = r(34279),
        tH = r(71013);
      let tK =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      class tG extends eJ.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc6492.InvalidWrappedSignatureError",
            });
        }
      }
      function tZ(e, t = {}) {
        let { recovered: r } = t;
        if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
          throw new t0({ signature: e });
        if (e.r < 0n || e.r > tA) throw new t1({ value: e.r });
        if (e.s < 0n || e.s > tA) throw new t2({ value: e.s });
        if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
          throw new t5({ value: e.yParity });
      }
      function tQ(e) {
        if (130 !== e.length && 132 !== e.length)
          throw new tY({ signature: e });
        let t = BigInt(eK.di(e, 0, 32)),
          r = BigInt(eK.di(e, 32, 64)),
          n = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                return tX(t);
              } catch {
                throw new t5({ value: t });
              }
          })();
        return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
      }
      function tX(e) {
        if (0 === e || 27 === e) return 0;
        if (1 === e || 28 === e) return 1;
        if (e >= 35) return +(e % 2 == 0);
        throw new t3({ value: e });
      }
      class tY extends eJ.C {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${eK.Ej(eK.HT(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class t0 extends eJ.C {
        constructor({ signature: e }) {
          super(
            `Signature \`${e0.A(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class t1 extends eJ.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class t2 extends eJ.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class t5 extends eJ.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class t3 extends eJ.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      let t6 = tR(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
      function t8(e) {
        if ("string" == typeof e) {
          if (
            "0x8010801080108010801080108010801080108010801080108010801080108010" !==
            eK.di(e, -32)
          )
            throw new t7(e);
        } else tZ(e.authorization);
      }
      class t7 extends eJ.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc8010.InvalidWrappedSignatureError",
            });
        }
      }
      var t4 = r(6867),
        t9 = r(77608),
        re = r(32108),
        rt = r(84718);
      async function rr({ address: e, authorization: t, signature: r }) {
        return (0, re.h)(
          (0, t9.b)(e),
          await (0, rt.g)({ authorization: t, signature: r })
        );
      }
      var rn = r(88423),
        ri = r(20837);
      async function ra(e, t) {
        let {
            address: r,
            hash: n,
            erc6492VerifierAddress: i = t.universalSignatureVerifierAddress ??
              e.chain?.contracts?.erc6492Verifier?.address,
            multicallAddress: a = t.multicallAddress ??
              e.chain?.contracts?.multicall3?.address,
          } = t,
          s = (() => {
            let e = t.signature;
            return (0, m.q)(e)
              ? e
              : "object" == typeof e && "r" in e && "s" in e
              ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: i }) {
                  let a = (() => {
                      if (0 === i || 1 === i) return i;
                      if (n && (27n === n || 28n === n || n >= 35n))
                        return +(n % 2n === 0n);
                      throw Error("Invalid `v` or `yParity` value");
                    })(),
                    s = `0x${new ri.secp256k1.Signature(
                      (0, ef.uU)(e),
                      (0, ef.uU)(t)
                    ).toCompactHex()}${0 === a ? "1b" : "1c"}`;
                  return "hex" === r ? s : (0, h.aT)(s);
                })(e)
              : (0, u.My)(e);
          })();
        try {
          if (
            (function (e) {
              try {
                return t8(e), !0;
              } catch {
                return !1;
              }
            })(s)
          )
            return await rs(e, { ...t, multicallAddress: a, signature: s });
          return await ro(e, { ...t, verifierAddress: i, signature: s });
        } catch (e) {
          try {
            if (
              (0, re.h)(
                (0, t9.b)(r),
                await (0, rn.x)({ hash: n, signature: s })
              )
            )
              return !0;
          } catch {}
          if (e instanceof rl) return !1;
          throw e;
        }
      }
      async function rs(e, t) {
        let {
            address: r,
            blockNumber: i,
            blockTag: s,
            hash: o,
            multicallAddress: l,
          } = t,
          {
            authorization: c,
            data: f,
            signature: d,
            to: h,
          } = (function (e) {
            t8(e);
            let t = eK.Ro(eK.di(e, -64, -32)),
              r = eK.di(e, -t - 64, -64),
              n = eK.di(e, 0, -t - 64),
              [i, a, s] = (function (e, t, r = {}) {
                let { as: n = "Array", checksumAddress: i = !1 } = r,
                  a = "string" == typeof t ? e5(t) : t,
                  s = (function (e, { recursiveReadLimit: t = 8192 } = {}) {
                    let r = Object.create(tI);
                    return (
                      (r.bytes = e),
                      (r.dataView = new DataView(
                        e.buffer,
                        e.byteOffset,
                        e.byteLength
                      )),
                      (r.positionReadCount = new Map()),
                      (r.recursiveReadLimit = t),
                      r
                    );
                  })(a);
                if (0 === e3(a) && e.length > 0) throw new tU();
                if (e3(a) && 32 > e3(a))
                  throw new tO({
                    data: "string" == typeof t ? t : eK.uK(t),
                    parameters: e,
                    size: e3(a),
                  });
                let o = 0,
                  u = "Array" === n ? [] : {};
                for (let t = 0; t < e.length; ++t) {
                  let r = e[t];
                  s.setPosition(o);
                  let [a, l] = (function e(t, r, n) {
                    let { checksumAddress: i, staticPosition: a } = n,
                      s = tB(r.type);
                    if (s) {
                      let [n, o] = s;
                      return (function (t, r, n) {
                        let {
                          checksumAddress: i,
                          length: a,
                          staticPosition: s,
                        } = n;
                        if (!a) {
                          let n = s + e6(t.readBytes(32)),
                            a = n + 32;
                          t.setPosition(n);
                          let o = e6(t.readBytes(32)),
                            u = tC(r),
                            l = 0,
                            c = [];
                          for (let n = 0; n < o; ++n) {
                            t.setPosition(a + (u ? 32 * n : l));
                            let [s, o] = e(t, r, {
                              checksumAddress: i,
                              staticPosition: a,
                            });
                            (l += o), c.push(s);
                          }
                          return t.setPosition(s + 32), [c, 32];
                        }
                        if (tC(r)) {
                          let n = s + e6(t.readBytes(32)),
                            o = [];
                          for (let s = 0; s < a; ++s) {
                            t.setPosition(n + 32 * s);
                            let [a] = e(t, r, {
                              checksumAddress: i,
                              staticPosition: n,
                            });
                            o.push(a);
                          }
                          return t.setPosition(s + 32), [o, 32];
                        }
                        let o = 0,
                          u = [];
                        for (let n = 0; n < a; ++n) {
                          let [n, a] = e(t, r, {
                            checksumAddress: i,
                            staticPosition: s + o,
                          });
                          (o += a), u.push(n);
                        }
                        return [u, o];
                      })(
                        t,
                        { ...r, type: o },
                        { checksumAddress: i, length: n, staticPosition: a }
                      );
                    }
                    if ("tuple" === r.type)
                      return (function (t, r, n) {
                        let { checksumAddress: i, staticPosition: a } = n,
                          s =
                            0 === r.components.length ||
                            r.components.some(({ name: e }) => !e),
                          o = s ? [] : {},
                          u = 0;
                        if (tC(r)) {
                          let n = a + e6(t.readBytes(32));
                          for (let a = 0; a < r.components.length; ++a) {
                            let l = r.components[a];
                            t.setPosition(n + u);
                            let [c, f] = e(t, l, {
                              checksumAddress: i,
                              staticPosition: n,
                            });
                            (u += f), (o[s ? a : l?.name] = c);
                          }
                          return t.setPosition(a + 32), [o, 32];
                        }
                        for (let n = 0; n < r.components.length; ++n) {
                          let l = r.components[n],
                            [c, f] = e(t, l, {
                              checksumAddress: i,
                              staticPosition: a,
                            });
                          (o[s ? n : l?.name] = c), (u += f);
                        }
                        return [o, u];
                      })(t, r, { checksumAddress: i, staticPosition: a });
                    if ("address" === r.type)
                      return (function (e, t = {}) {
                        let r,
                          { checksum: n = !1 } = t,
                          i = e.readBytes(32);
                        return [
                          ((r = eK.uK(
                            (function (e, t, r, n = {}) {
                              let { strict: i } = n;
                              !1;
                              let a = e.slice(-20, void 0);
                              return (
                                i &&
                                  (function (e, t, r) {
                                    if (
                                      "number" == typeof t &&
                                      "number" == typeof r &&
                                      e3(e) !== r - t
                                    )
                                      throw new e9({
                                        offset: r,
                                        position: "end",
                                        size: e3(e),
                                      });
                                  })(a, -20, void 0),
                                a
                              );
                            })(i, -20)
                          )),
                          n ? ts(r) : r),
                          32,
                        ];
                      })(t, { checksum: i });
                    if ("bool" === r.type)
                      return [
                        (function (e, t = {}) {
                          let { size: r } = t,
                            n = e;
                          if (
                            (void 0 !== r && (eG(n, r), (n = e8(n))),
                            n.length > 1 || n[0] > 1)
                          )
                            throw new e7(n);
                          return !!n[0];
                        })(t.readBytes(32), { size: 32 }),
                        32,
                      ];
                    if (r.type.startsWith("bytes"))
                      return (function (e, t, { staticPosition: r }) {
                        let [n, i] = t.type.split("bytes");
                        if (!i) {
                          let t = e6(e.readBytes(32));
                          e.setPosition(r + t);
                          let n = e6(e.readBytes(32));
                          if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                          let i = e.readBytes(n);
                          return e.setPosition(r + 32), [eK.uK(i), 32];
                        }
                        return [
                          eK.uK(e.readBytes(Number.parseInt(i, 10), 32)),
                          32,
                        ];
                      })(t, r, { staticPosition: a });
                    if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                      var o = t,
                        u = r;
                      let e = u.type.startsWith("int"),
                        n = Number.parseInt(
                          u.type.split("int")[1] || "256",
                          10
                        ),
                        i = o.readBytes(32);
                      return [
                        n > 48
                          ? (function (e, t = {}) {
                              let { size: r } = t;
                              void 0 !== r && eG(e, r);
                              let n = eK.uK(e, t);
                              return eK.Dg(n, t);
                            })(i, { signed: e })
                          : e6(i, { signed: e }),
                        32,
                      ];
                    }
                    if ("string" === r.type)
                      return (function (e, { staticPosition: t }) {
                        let r = e6(e.readBytes(32));
                        e.setPosition(t + r);
                        let n = e6(e.readBytes(32));
                        if (0 === n) return e.setPosition(t + 32), ["", 32];
                        let i = (function (e, t = {}) {
                          let { size: r } = t,
                            n = e;
                          return (
                            void 0 !== r &&
                              (eG(n, r), (n = eX(n, { dir: "right" }))),
                            e1.decode(n)
                          );
                        })(e8(e.readBytes(n, 32)));
                        return e.setPosition(t + 32), [i, 32];
                      })(t, { staticPosition: a });
                    throw new tD(r.type);
                  })(s, r, { checksumAddress: i, staticPosition: 0 });
                  (o += l), "Array" === n ? u.push(a) : (u[r.name ?? t] = a);
                }
                return u;
              })(t6, r);
            return {
              authorization: (function (e, t = {}) {
                return "string" == typeof e.chainId
                  ? (function (e) {
                      let { address: t, chainId: r, nonce: n } = e,
                        i = (function (e) {
                          if (void 0 !== e.r && void 0 !== e.s) {
                            var t = e;
                            let r = (() => {
                              var e;
                              if ("string" == typeof t) return tQ(t);
                              if (t instanceof Uint8Array) return tQ(eK.uK(t));
                              return "string" == typeof t.r
                                ? (function (e) {
                                    let t = (() => {
                                      let t = e.v ? Number(e.v) : void 0,
                                        r = e.yParity
                                          ? Number(e.yParity)
                                          : void 0;
                                      if (
                                        ("number" == typeof t &&
                                          "number" != typeof r &&
                                          (r = tX(t)),
                                        "number" != typeof r)
                                      )
                                        throw new t5({ value: e.yParity });
                                      return r;
                                    })();
                                    return {
                                      r: BigInt(e.r),
                                      s: BigInt(e.s),
                                      yParity: t,
                                    };
                                  })(t)
                                : t.v
                                ? { r: (e = t).r, s: e.s, yParity: tX(e.v) }
                                : {
                                    r: t.r,
                                    s: t.s,
                                    ...(void 0 !== t.yParity
                                      ? { yParity: t.yParity }
                                      : {}),
                                  };
                            })();
                            return tZ(r), r;
                          }
                        })(e);
                      return {
                        address: t,
                        chainId: Number(r),
                        nonce: BigInt(n),
                        ...i,
                      };
                    })(e)
                  : { ...e, ...t.signature };
              })({
                address: i.delegation,
                chainId: Number(i.chainId),
                nonce: i.nonce,
                yParity: i.yParity,
                r: i.r,
                s: i.s,
              }),
              signature: n,
              ...(s && "0x" !== s ? { data: s, to: a } : {}),
            };
          })(t.signature);
        if (
          (await (0, eh.Q)(e, { address: r, blockNumber: i, blockTag: s })) ===
          (0, p.aP)(["0xef0100", c.address])
        )
          return await ru(e, {
            address: r,
            blockNumber: i,
            blockTag: s,
            hash: o,
            signature: d,
          });
        let y = {
          address: c.address,
          chainId: Number(c.chainId),
          nonce: Number(c.nonce),
          r: (0, u.cK)(c.r, { size: 32 }),
          s: (0, u.cK)(c.s, { size: 32 }),
          yParity: c.yParity,
        };
        if (!(await rr({ address: r, authorization: y }))) throw new rl();
        let m = await (0, w.T)(
            e,
            x.J,
            "readContract"
          )({
            ...(l ? { address: l } : { code: tq.Ez }),
            authorizationList: [y],
            abi: n.v2,
            blockNumber: i,
            blockTag: "pending",
            functionName: "aggregate3",
            args: [
              [
                ...(f
                  ? [{ allowFailure: !0, target: h ?? r, callData: f }]
                  : []),
                {
                  allowFailure: !0,
                  target: r,
                  callData: (0, a.p)({
                    abi: n.UW,
                    functionName: "isValidSignature",
                    args: [o, d],
                  }),
                },
              ],
            ],
          }),
          g = m[m.length - 1]?.returnData;
        if (g?.startsWith("0x1626ba7e")) return !0;
        throw new rl();
      }
      async function ro(e, t) {
        let {
            address: r,
            factory: i,
            factoryData: s,
            hash: o,
            signature: u,
            verifierAddress: l,
            ...f
          } = t,
          d = await (async () => {
            if (
              (!i && !s) ||
              (function (e) {
                try {
                  if (eK.di(e, -32) !== tK) throw new tG(e);
                  return !0;
                } catch {
                  return !1;
                }
              })(u)
            )
              return u;
            let {
              data: e,
              signature: t,
              to: r,
            } = { data: s, signature: u, to: i };
            return eK.xW(tT(tR("address, bytes, bytes"), [r, e, t]), tK);
          })(),
          p = l
            ? {
                to: l,
                data: (0, a.p)({
                  abi: n.E5,
                  functionName: "isValidSig",
                  args: [r, o, d],
                }),
                ...f,
              }
            : {
                data: (0, t4.m)({
                  abi: n.E5,
                  args: [r, o, d],
                  bytecode: tq.fT,
                }),
                ...f,
              },
          { data: h } = await (0, w.T)(
            e,
            q.T,
            "call"
          )(p).catch((e) => {
            if (e instanceof c.zX) throw new rl();
            throw e;
          });
        if ((0, ef.Nx)(h ?? "0x0")) return !0;
        throw new rl();
      }
      async function ru(e, t) {
        let {
          address: r,
          blockNumber: i,
          blockTag: a,
          hash: s,
          signature: o,
        } = t;
        if (
          (
            await (0, w.T)(
              e,
              x.J,
              "readContract"
            )({
              address: r,
              abi: n.UW,
              args: [s, o],
              blockNumber: i,
              blockTag: a,
              functionName: "isValidSignature",
            }).catch((e) => {
              if (e instanceof c.bG) throw new rl();
              throw e;
            })
          ).startsWith("0x1626ba7e")
        )
          return !0;
        throw new rl();
      }
      class rl extends Error {}
      var rc = r(82323);
      async function rf(
        e,
        {
          address: t,
          message: r,
          factory: n,
          factoryData: i,
          signature: a,
          ...s
        }
      ) {
        return ra(e, {
          address: t,
          factory: n,
          factoryData: i,
          hash: (0, rc.A)(r),
          signature: a,
          ...s,
        });
      }
      var rd = r(32522);
      async function rp(e, t) {
        let {
          address: r,
          factory: n,
          factoryData: i,
          signature: a,
          message: s,
          primaryType: o,
          types: u,
          domain: l,
          ...c
        } = t;
        return ra(e, {
          address: r,
          factory: n,
          factoryData: i,
          hash: (0, rd.Zh)({ message: s, primaryType: o, types: u, domain: l }),
          signature: a,
          ...c,
        });
      }
      var rh = r(52497),
        ry = r(5766),
        rm = r(87639),
        rg = r(94788),
        rb = r(59350),
        rv = r(98788),
        rw = r(73168),
        rx = r(52938),
        rP = r(49072);
      let rA =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        rE =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var rB = r(24784);
      async function rC(e, t) {
        let {
            address: r,
            domain: n,
            message: i,
            nonce: a,
            scheme: s,
            signature: o,
            time: u = new Date(),
            ...l
          } = t,
          c = (function (e) {
            let { scheme: t, statement: r, ...n } = e.match(rA)?.groups ?? {},
              {
                chainId: i,
                expirationTime: a,
                issuedAt: s,
                notBefore: o,
                requestId: u,
                ...l
              } = e.match(rE)?.groups ?? {},
              c = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...n,
              ...l,
              ...(i ? { chainId: Number(i) } : {}),
              ...(a ? { expirationTime: new Date(a) } : {}),
              ...(s ? { issuedAt: new Date(s) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(u ? { requestId: u } : {}),
              ...(c ? { resources: c } : {}),
              ...(t ? { scheme: t } : {}),
              ...(r ? { statement: r } : {}),
            };
          })(i);
        if (
          !c.address ||
          !(function (e) {
            let {
              address: t,
              domain: r,
              message: n,
              nonce: i,
              scheme: a,
              time: s = new Date(),
            } = e;
            if (
              (r && n.domain !== r) ||
              (i && n.nonce !== i) ||
              (a && n.scheme !== a) ||
              (n.expirationTime && s >= n.expirationTime) ||
              (n.notBefore && s < n.notBefore)
            )
              return !1;
            try {
              if (
                !n.address ||
                !(0, rB.P)(n.address, { strict: !1 }) ||
                (t && !(0, re.h)(n.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: r,
            domain: n,
            message: c,
            nonce: a,
            scheme: s,
            time: u,
          })
        )
          return !1;
        let f = (0, rc.A)(i);
        return ra(e, { address: c.address, hash: f, signature: o, ...l });
      }
      var rI = r(31063),
        r$ = r(72707);
      function rN(e) {
        return {
          call: (t) => (0, q.T)(e, t),
          createAccessList: (t) => Z(e, t),
          createBlockFilter: () => X(e),
          createContractEventFilter: (t) => (0, Y.X)(e, t),
          createEventFilter: (t) => et(e, t),
          createPendingTransactionFilter: () => (0, er.O)(e),
          estimateContractGas: (t) => (0, en.W)(e, t),
          estimateGas: (t) => (0, ea.Q)(e, t),
          getBalance: (t) => (0, eo.r)(e, t),
          getBlobBaseFee: () => eu(e),
          getBlock: (t) => (0, el.g)(e, t),
          getBlockNumber: (t) => (0, ec.G)(e, t),
          getBlockTransactionCount: (t) => ed(e, t),
          getBytecode: (t) => (0, eh.Q)(e, t),
          getChainId: () => (0, ep.T)(e),
          getCode: (t) => (0, eh.Q)(e, t),
          getContractEvents: (t) => (0, ey.u)(e, t),
          getEip712Domain: (t) => eg(e, t),
          getEnsAddress: (t) => P(e, t),
          getEnsAvatar: (t) => W(e, t),
          getEnsName: (t) => F(e, t),
          getEnsResolver: (t) => _(e, t),
          getEnsText: (t) => D(e, t),
          getFeeHistory: (t) => ev(e, t),
          estimateFeesPerGas: (t) => (0, ei._)(e, t),
          getFilterChanges: (t) => (0, ew.I)(e, t),
          getFilterLogs: (t) => eA(e, t),
          getGasPrice: () => (0, eE.L)(e),
          getLogs: (t) => (0, eB.a)(e, t),
          getProof: (t) => eC(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, es.b)(e, t),
          getStorageAt: (t) => eI(e, t),
          getTransaction: (t) => (0, e$.x)(e, t),
          getTransactionConfirmations: (t) => eN(e, t),
          getTransactionCount: (t) => (0, ek.y)(e, t),
          getTransactionReceipt: (t) => (0, eT.h)(e, t),
          multicall: (t) => (0, eS.C)(e, t),
          prepareTransactionRequest: (t) => (0, rI.ft)(e, t),
          readContract: (t) => (0, x.J)(e, t),
          sendRawTransaction: (t) => (0, r$.L)(e, t),
          simulate: (t) => eD(e, t),
          simulateBlocks: (t) => eD(e, t),
          simulateCalls: (t) => tV(e, t),
          simulateContract: (t) => (0, tJ.v)(e, t),
          verifyHash: (t) => ra(e, t),
          verifyMessage: (t) => rf(e, t),
          verifySiweMessage: (t) => rC(e, t),
          verifyTypedData: (t) => rp(e, t),
          uninstallFilter: (t) => (0, tH.Z)(e, t),
          waitForTransactionReceipt: (t) => (0, rh.n)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = e.experimental_blockTag ?? "latest",
                emitMissed: r = !1,
                emitOnBegin: n = !1,
                onBlock: i,
                onError: a,
                includeTransactions: s,
                poll: o,
                pollingInterval: u = e.pollingInterval,
              }
            ) {
              let l,
                c,
                f,
                d,
                p =
                  void 0 !== o
                    ? o
                    : "webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type)),
                h = s ?? !1;
              return p
                ? (() => {
                    let s = (0, rb.A)(["watchBlocks", e.uid, t, r, n, h, u]);
                    return (0, rm.lB)(s, { onBlock: i, onError: a }, (i) =>
                      (0, rg.w)(
                        async () => {
                          try {
                            let n = await (0, w.T)(
                              e,
                              el.g,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: h });
                            if (null !== n.number && l?.number != null) {
                              if (n.number === l.number) return;
                              if (n.number - l.number > 1 && r)
                                for (
                                  let t = l?.number + 1n;
                                  t < n.number;
                                  t++
                                ) {
                                  let r = await (0, w.T)(
                                    e,
                                    el.g,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: h });
                                  i.onBlock(r, l), (l = r);
                                }
                            }
                            (l?.number == null ||
                              ("pending" === t && n?.number == null) ||
                              (null !== n.number && n.number > l.number)) &&
                              (i.onBlock(n, l), (l = n));
                          } catch (e) {
                            i.onError?.(e);
                          }
                        },
                        { emitOnBegin: n, interval: u }
                      )
                    );
                  })()
                : ((c = !0),
                  (f = !0),
                  (d = () => (c = !1)),
                  (async () => {
                    try {
                      n &&
                        (0, w.T)(
                          e,
                          el.g,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: h })
                          .then((e) => {
                            c && f && (i(e, void 0), (f = !1));
                          })
                          .catch(a);
                      let r = (() => {
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
                        { unsubscribe: s } = await r.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!c) return;
                            let r = await (0, w.T)(
                              e,
                              el.g,
                              "getBlock"
                            )({
                              blockNumber: t.result?.number,
                              includeTransactions: h,
                            }).catch(() => {});
                            c && (i(r, l), (f = !1), (l = r));
                          },
                          onError(e) {
                            a?.(e);
                          },
                        });
                      (d = s), c || d();
                    } catch (e) {
                      a?.(e);
                    }
                  })(),
                  () => d());
            })(e, t),
          watchBlockNumber: (t) => (0, ry.q)(e, t),
          watchContractEvent: (t) => (0, rv.q)(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: r,
                batch: n = !0,
                event: i,
                events: a,
                fromBlock: s,
                onError: o,
                onLogs: u,
                poll: l,
                pollingInterval: c = e.pollingInterval,
                strict: f,
              }
            ) {
              let d,
                p,
                h =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof s ||
                      ("webSocket" !== e.transport.type &&
                        "ipc" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          ("webSocket" !==
                            e.transport.transports[0].config.type &&
                            "ipc" !== e.transport.transports[0].config.type))),
                y = f ?? !1;
              return h
                ? (() => {
                    let l = (0, rb.A)(["watchEvent", t, r, n, e.uid, i, c, s]);
                    return (0, rm.lB)(l, { onLogs: u, onError: o }, (o) => {
                      let u, l;
                      void 0 !== s && (u = s - 1n);
                      let f = !1,
                        d = (0, rg.w)(
                          async () => {
                            if (!f) {
                              try {
                                l = await (0, w.T)(
                                  e,
                                  et,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: r,
                                  event: i,
                                  events: a,
                                  strict: y,
                                  fromBlock: s,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let s;
                              if (l)
                                s = await (0, w.T)(
                                  e,
                                  ew.I,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let n = await (0, w.T)(
                                  e,
                                  ec.G,
                                  "getBlockNumber"
                                )({});
                                (s =
                                  u && u !== n
                                    ? await (0, w.T)(
                                        e,
                                        eB.a,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: r,
                                        event: i,
                                        events: a,
                                        fromBlock: u + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (u = n);
                              }
                              if (0 === s.length) return;
                              if (n) o.onLogs(s);
                              else for (let e of s) o.onLogs([e]);
                            } catch (e) {
                              l && e instanceof rw.Di && (f = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: c }
                        );
                      return async () => {
                        l &&
                          (await (0, w.T)(
                            e,
                            tH.Z,
                            "uninstallFilter"
                          )({ filter: l })),
                          d();
                      };
                    });
                  })()
                : ((d = !0),
                  (p = () => (d = !1)),
                  (async () => {
                    try {
                      let n = (() => {
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
                        s = a ?? (i ? [i] : void 0),
                        l = [];
                      s &&
                        ((l = [
                          s.flatMap((e) =>
                            (0, ee.R)({ abi: [e], eventName: e.name, args: r })
                          ),
                        ]),
                        i && (l = l[0]));
                      let { unsubscribe: c } = await n.subscribe({
                        params: ["logs", { address: t, topics: l }],
                        onData(e) {
                          if (!d) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: r } = (0, rx.j)({
                                abi: s ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: y,
                              }),
                              n = (0, eP.e)(t, { args: r, eventName: e });
                            u([n]);
                          } catch (i) {
                            let e, r;
                            if (i instanceof eO.fo || i instanceof eO.l3) {
                              if (f) return;
                              (e = i.abiItem.name),
                                (r = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let n = (0, eP.e)(t, {
                              args: r ? [] : {},
                              eventName: e,
                            });
                            u([n]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (p = c), d || p();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchPendingTransactions: (t) => (0, rP.u)(e, t),
        };
      }
    },
    53108: (e, t, r) => {
      r.d(t, { Q: () => i });
      var n = r(34561);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest" }
      ) {
        let a = void 0 !== r ? (0, n.cK)(r) : void 0,
          s = await e.request(
            { method: "eth_getCode", params: [t, a || i] },
            { dedupe: !!a }
          );
        if ("0x" !== s) return s;
      }
    },
    57001: (e, t, r) => {
      r.d(t, { H4: () => m, v8: () => h, $$: () => y });
      var n = r(97525),
        i = r(76115),
        a = r(59350),
        s = r(13933);
      class o extends s.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, a.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class u extends s.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class l extends s.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var c = r(24784),
        f = r(16871),
        d = r(34561),
        p = r(1588);
      function h(e) {
        let { domain: t, message: r, primaryType: n, types: i } = e,
          s = (e, t) => {
            let r = { ...t };
            for (let t of e) {
              let { name: e, type: n } = t;
              "address" === n && (r[e] = r[e].toLowerCase());
            }
            return r;
          },
          o = i.EIP712Domain && t ? s(i.EIP712Domain, t) : {},
          u = (() => {
            if ("EIP712Domain" !== n) return s(i[n], r);
          })();
        return (0, a.A)({ domain: o, message: u, primaryType: n, types: i });
      }
      function y(e) {
        let { domain: t, message: r, primaryType: a, types: s } = e,
          h = (e, t) => {
            for (let r of e) {
              let { name: e, type: a } = r,
                o = t[e],
                u = a.match(p.Ge);
              if (u && ("number" == typeof o || "bigint" == typeof o)) {
                let [e, t, r] = u;
                (0, d.cK)(o, {
                  signed: "int" === t,
                  size: Number.parseInt(r, 10) / 8,
                });
              }
              if ("address" === a && "string" == typeof o && !(0, c.P)(o))
                throw new i.M({ address: o });
              let y = a.match(p.BD);
              if (y) {
                let [e, t] = y;
                if (t && (0, f.E)(o) !== Number.parseInt(t, 10))
                  throw new n.BI({
                    expectedSize: Number.parseInt(t, 10),
                    givenSize: (0, f.E)(o),
                  });
              }
              let m = s[a];
              m &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new l({ type: e });
                })(a),
                h(m, o));
            }
          };
        if (s.EIP712Domain && t) {
          if ("object" != typeof t) throw new o({ domain: t });
          h(s.EIP712Domain, t);
        }
        if ("EIP712Domain" !== a)
          if (s[a]) h(s[a], r);
          else throw new u({ primaryType: a, types: s });
      }
      function m({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
            name: "chainId",
            type: "uint256",
          },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    68668: (e, t, r) => {
      r.d(t, { W: () => u });
      var n = r(97152),
        i = r(30931),
        a = r(93527),
        s = r(72757),
        o = r(34897);
      async function u(e, t) {
        let {
            abi: r,
            address: u,
            args: l,
            functionName: c,
            dataSuffix: f,
            ...d
          } = t,
          p = (0, i.p)({ abi: r, args: l, functionName: c });
        try {
          return await (0, s.T)(
            e,
            o.Q,
            "estimateGas"
          )({ data: `${p}${f ? f.replace("0x", "") : ""}`, to: u, ...d });
        } catch (t) {
          let e = d.account ? (0, n.J)(d.account) : void 0;
          throw (0, a.j)(t, {
            abi: r,
            address: u,
            args: l,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: c,
            sender: e?.address,
          });
        }
      }
    },
    75142: (e, t, r) => {
      r.d(t, { a: () => o });
      var n = r(15495),
        i = r(77064),
        a = r(34561),
        s = r(52623);
      async function o(
        e,
        {
          address: t,
          blockHash: r,
          fromBlock: u,
          toBlock: l,
          event: c,
          events: f,
          args: d,
          strict: p,
        } = {}
      ) {
        let h = f ?? (c ? [c] : void 0),
          y = [];
        h &&
          ((y = [
            h.flatMap((e) =>
              (0, n.R)({ abi: [e], eventName: e.name, args: f ? void 0 : d })
            ),
          ]),
          c && (y = y[0]));
        let m = (
          r
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: y, blockHash: r }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: y,
                    fromBlock: "bigint" == typeof u ? (0, a.cK)(u) : u,
                    toBlock: "bigint" == typeof l ? (0, a.cK)(l) : l,
                  },
                ],
              })
        ).map((e) => (0, s.e)(e));
        return h ? (0, i.p)({ abi: h, args: d, logs: m, strict: p ?? !1 }) : m;
      }
    },
    82323: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(80329),
        i = r(40290),
        a = r(16871),
        s = r(34561);
      function o(e, t) {
        return (0, n.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, s.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, s.My)(e.raw),
              r = (0, s.i3)(`\x19Ethereum Signed Message:
${(0, a.E)(t)}`);
            return (0, i.xW)([r, t]);
          })(e),
          t
        );
      }
    },
    98788: (e, t, r) => {
      r.d(t, { q: () => g });
      var n = r(97525),
        i = r(73168),
        a = r(52938),
        s = r(15495),
        o = r(52623),
        u = r(72757),
        l = r(87639),
        c = r(94788),
        f = r(59350),
        d = r(37733),
        p = r(70054),
        h = r(41962),
        y = r(77564),
        m = r(71013);
      function g(e, t) {
        let {
          abi: r,
          address: g,
          args: b,
          batch: v = !0,
          eventName: w,
          fromBlock: x,
          onError: P,
          onLogs: A,
          poll: E,
          pollingInterval: B = e.pollingInterval,
          strict: C,
        } = t;
        return (
          void 0 !== E
            ? E
            : "bigint" == typeof x ||
              ("webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type)))
        )
          ? (() => {
              let t = C ?? !1,
                n = (0, f.A)([
                  "watchContractEvent",
                  g,
                  b,
                  v,
                  e.uid,
                  w,
                  B,
                  t,
                  x,
                ]);
              return (0, l.lB)(n, { onLogs: A, onError: P }, (n) => {
                let a, s;
                void 0 !== x && (a = x - 1n);
                let o = !1,
                  l = (0, c.w)(
                    async () => {
                      if (!o) {
                        try {
                          s = await (0, u.T)(
                            e,
                            d.X,
                            "createContractEventFilter"
                          )({
                            abi: r,
                            address: g,
                            args: b,
                            eventName: w,
                            strict: t,
                            fromBlock: x,
                          });
                        } catch {}
                        o = !0;
                        return;
                      }
                      try {
                        let i;
                        if (s)
                          i = await (0, u.T)(
                            e,
                            y.I,
                            "getFilterChanges"
                          )({ filter: s });
                        else {
                          let n = await (0, u.T)(e, p.G, "getBlockNumber")({});
                          (i =
                            a && a < n
                              ? await (0, u.T)(
                                  e,
                                  h.u,
                                  "getContractEvents"
                                )({
                                  abi: r,
                                  address: g,
                                  args: b,
                                  eventName: w,
                                  fromBlock: a + 1n,
                                  toBlock: n,
                                  strict: t,
                                })
                              : []),
                            (a = n);
                        }
                        if (0 === i.length) return;
                        if (v) n.onLogs(i);
                        else for (let e of i) n.onLogs([e]);
                      } catch (e) {
                        s && e instanceof i.Di && (o = !1), n.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: B }
                  );
                return async () => {
                  s &&
                    (await (0, u.T)(e, m.Z, "uninstallFilter")({ filter: s })),
                    l();
                };
              });
            })()
          : (() => {
              let t = (0, f.A)([
                  "watchContractEvent",
                  g,
                  b,
                  v,
                  e.uid,
                  w,
                  B,
                  C ?? !1,
                ]),
                i = !0,
                u = () => (i = !1);
              return (0, l.lB)(
                t,
                { onLogs: A, onError: P },
                (t) => (
                  (async () => {
                    try {
                      let l = (() => {
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
                        c = w
                          ? (0, s.R)({ abi: r, eventName: w, args: b })
                          : [],
                        { unsubscribe: f } = await l.subscribe({
                          params: ["logs", { address: g, topics: c }],
                          onData(e) {
                            if (!i) return;
                            let s = e.result;
                            try {
                              let { eventName: e, args: n } = (0, a.j)({
                                  abi: r,
                                  data: s.data,
                                  topics: s.topics,
                                  strict: C,
                                }),
                                i = (0, o.e)(s, { args: n, eventName: e });
                              t.onLogs([i]);
                            } catch (a) {
                              let e, r;
                              if (a instanceof n.fo || a instanceof n.l3) {
                                if (C) return;
                                (e = a.abiItem.name),
                                  (r = a.abiItem.inputs?.some(
                                    (e) => !("name" in e && e.name)
                                  ));
                              }
                              let i = (0, o.e)(s, {
                                args: r ? [] : {},
                                eventName: e,
                              });
                              t.onLogs([i]);
                            }
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (u = f), i || u();
                    } catch (e) {
                      P?.(e);
                    }
                  })(),
                  () => u()
                )
              );
            })();
      }
    },
  },
]);
