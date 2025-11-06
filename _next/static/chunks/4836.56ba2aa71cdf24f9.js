"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4836],
  {
    24836: (e, o, t) => {
      t.d(o, { GN: () => f });
      var a = t(1220),
        n = t(98866),
        r = t(12182),
        s = t(45553),
        i = t(73537),
        c = t(30982),
        l = t(71305),
        u = t(28977),
        T = t(12319),
        d = t(83941);
      let k = {
        getGasPriceInEther: (e, o) => Number(o * e) / 1e18,
        getGasPriceInUSD(e, o, t) {
          let a = k.getGasPriceInEther(o, t);
          return r.S.bigNumber(e).times(a).toNumber();
        },
        getPriceImpact({
          sourceTokenAmount: e,
          sourceTokenPriceInUSD: o,
          toTokenPriceInUSD: t,
          toTokenAmount: a,
        }) {
          let n = r.S.bigNumber(e).times(o),
            s = r.S.bigNumber(a).times(t);
          return n.minus(s).div(n).times(100).toNumber();
        },
        getMaxSlippage(e, o) {
          let t = r.S.bigNumber(e).div(100);
          return r.S.multiply(o, t).toNumber();
        },
        getProviderFee: (e, o = 0.0085) => r.S.bigNumber(e).times(o).toString(),
        isInsufficientNetworkTokenForGas: (e, o) =>
          !!r.S.bigNumber(e).eq(0) ||
          r.S.bigNumber(r.S.bigNumber(o || "0")).gt(e),
        isInsufficientSourceTokenForSwap(e, o, t) {
          let a = t?.find((e) => e.address === o)?.quantity?.numeric;
          return r.S.bigNumber(a || "0").lt(e);
        },
      };
      var g = t(36964),
        m = t(52502),
        p = t(44826),
        w = t(93481),
        S = t(97418),
        A = t(10899),
        P = t(70417),
        v = t(67869),
        I = t(65374);
      let h = {
          initializing: !1,
          initialized: !1,
          loadingPrices: !1,
          loadingQuote: !1,
          loadingApprovalTransaction: !1,
          loadingBuildTransaction: !1,
          loadingTransaction: !1,
          switchingTokens: !1,
          fetchError: !1,
          approvalTransaction: void 0,
          swapTransaction: void 0,
          transactionError: void 0,
          sourceToken: void 0,
          sourceTokenAmount: "",
          sourceTokenPriceInUSD: 0,
          toToken: void 0,
          toTokenAmount: "",
          toTokenPriceInUSD: 0,
          networkPrice: "0",
          networkBalanceInUSD: "0",
          networkTokenSymbol: "",
          inputError: void 0,
          slippage: u.oU.CONVERT_SLIPPAGE_TOLERANCE,
          tokens: void 0,
          popularTokens: void 0,
          suggestedTokens: void 0,
          foundTokens: void 0,
          myTokensWithBalance: void 0,
          tokensPriceMap: {},
          gasFee: "0",
          gasPriceInUSD: 0,
          priceImpact: void 0,
          maxSlippage: void 0,
          providerFee: void 0,
        },
        y = (0, a.BX)({ ...h }),
        b = {
          state: y,
          subscribe: (e) => (0, a.B1)(y, () => e(y)),
          subscribeKey: (e, o) => (0, n.u$)(y, e, o),
          getParams() {
            let e = w.W.state.activeChain,
              o =
                w.W.getAccountData(e)?.caipAddress ??
                w.W.state.activeCaipAddress,
              t = T.w.getPlainAddress(o),
              a = (0, l.K1)(),
              n = A.a.getConnectorId(w.W.state.activeChain);
            if (!t) throw Error("No address found to swap the tokens from.");
            let i = !y.toToken?.address || !y.toToken?.decimals,
              c =
                !y.sourceToken?.address ||
                !y.sourceToken?.decimals ||
                !r.S.bigNumber(y.sourceTokenAmount).gt(0),
              u = !y.sourceTokenAmount;
            return {
              networkAddress: a,
              fromAddress: t,
              fromCaipAddress: o,
              sourceTokenAddress: y.sourceToken?.address,
              toTokenAddress: y.toToken?.address,
              toTokenAmount: y.toTokenAmount,
              toTokenDecimals: y.toToken?.decimals,
              sourceTokenAmount: y.sourceTokenAmount,
              sourceTokenDecimals: y.sourceToken?.decimals,
              invalidToToken: i,
              invalidSourceToken: c,
              invalidSourceTokenAmount: u,
              availableToSwap: o && !i && !c && !u,
              isAuthConnector: n === s.o.CONNECTOR_ID.AUTH,
            };
          },
          async setSourceToken(e) {
            if (!e) {
              (y.sourceToken = e),
                (y.sourceTokenAmount = ""),
                (y.sourceTokenPriceInUSD = 0);
              return;
            }
            (y.sourceToken = e),
              await f.setTokenPrice(e.address, "sourceToken");
          },
          setSourceTokenAmount(e) {
            y.sourceTokenAmount = e;
          },
          async setToToken(e) {
            if (!e) {
              (y.toToken = e),
                (y.toTokenAmount = ""),
                (y.toTokenPriceInUSD = 0);
              return;
            }
            (y.toToken = e), await f.setTokenPrice(e.address, "toToken");
          },
          setToTokenAmount(e) {
            y.toTokenAmount = e ? r.S.toFixed(e, 6) : "";
          },
          async setTokenPrice(e, o) {
            let t = y.tokensPriceMap[e] || 0;
            t || ((y.loadingPrices = !0), (t = await f.getAddressPrice(e))),
              "sourceToken" === o
                ? (y.sourceTokenPriceInUSD = t)
                : "toToken" === o && (y.toTokenPriceInUSD = t),
              y.loadingPrices && (y.loadingPrices = !1),
              f.getParams().availableToSwap &&
                !y.switchingTokens &&
                f.swapTokens();
          },
          async switchTokens() {
            if (!y.initializing && y.initialized && !y.switchingTokens) {
              y.switchingTokens = !0;
              try {
                let e = y.toToken ? { ...y.toToken } : void 0,
                  o = y.sourceToken ? { ...y.sourceToken } : void 0,
                  t = e && "" === y.toTokenAmount ? "1" : y.toTokenAmount;
                f.setSourceTokenAmount(t),
                  f.setToTokenAmount(""),
                  await f.setSourceToken(e),
                  await f.setToToken(o),
                  (y.switchingTokens = !1),
                  f.swapTokens();
              } catch (e) {
                throw ((y.switchingTokens = !1), e);
              }
            }
          },
          resetState() {
            (y.myTokensWithBalance = h.myTokensWithBalance),
              (y.tokensPriceMap = h.tokensPriceMap),
              (y.initialized = h.initialized),
              (y.initializing = h.initializing),
              (y.switchingTokens = h.switchingTokens),
              (y.sourceToken = h.sourceToken),
              (y.sourceTokenAmount = h.sourceTokenAmount),
              (y.sourceTokenPriceInUSD = h.sourceTokenPriceInUSD),
              (y.toToken = h.toToken),
              (y.toTokenAmount = h.toTokenAmount),
              (y.toTokenPriceInUSD = h.toTokenPriceInUSD),
              (y.networkPrice = h.networkPrice),
              (y.networkTokenSymbol = h.networkTokenSymbol),
              (y.networkBalanceInUSD = h.networkBalanceInUSD),
              (y.inputError = h.inputError);
          },
          resetValues() {
            let { networkAddress: e } = f.getParams(),
              o = y.tokens?.find((o) => o.address === e);
            f.setSourceToken(o), f.setToToken(void 0);
          },
          getApprovalLoadingState: () => y.loadingApprovalTransaction,
          clearError() {
            y.transactionError = void 0;
          },
          async initializeState() {
            if (!y.initializing) {
              if (((y.initializing = !0), !y.initialized))
                try {
                  await f.fetchTokens(), (y.initialized = !0);
                } catch (e) {
                  (y.initialized = !1),
                    I.P.showError("Failed to initialize swap"),
                    v.I.goBack();
                }
              y.initializing = !1;
            }
          },
          async fetchTokens() {
            let { networkAddress: e } = f.getParams();
            await f.getNetworkTokenPrice(), await f.getMyTokensWithBalance();
            let o = y.myTokensWithBalance?.find((o) => o.address === e);
            o &&
              ((y.networkTokenSymbol = o.symbol),
              f.setSourceToken(o),
              f.setSourceTokenAmount("0"));
          },
          async getTokenList() {
            let e = w.W.state.activeCaipNetwork?.caipNetworkId;
            if (y.caipNetworkId !== e || !y.tokens)
              try {
                y.tokensLoading = !0;
                let o = await d.s.getTokenList(e);
                (y.tokens = o),
                  (y.caipNetworkId = e),
                  (y.popularTokens = o.sort((e, o) =>
                    e.symbol < o.symbol ? -1 : +(e.symbol > o.symbol)
                  )),
                  (y.suggestedTokens = o.filter(
                    (e) => !!u.oU.SWAP_SUGGESTED_TOKENS.includes(e.symbol)
                  ));
              } catch (e) {
                (y.tokens = []),
                  (y.popularTokens = []),
                  (y.suggestedTokens = []);
              } finally {
                y.tokensLoading = !1;
              }
          },
          async getAddressPrice(e) {
            let o = y.tokensPriceMap[e];
            if (o) return o;
            let t = await p.T.fetchTokenPrice({ addresses: [e] }),
              a = t?.fungibles || [],
              n = [...(y.tokens || []), ...(y.myTokensWithBalance || [])],
              r = n?.find((o) => o.address === e)?.symbol,
              s = parseFloat(
                (
                  a.find((e) => e.symbol.toLowerCase() === r?.toLowerCase())
                    ?.price || 0
                ).toString()
              );
            return (y.tokensPriceMap[e] = s), s;
          },
          async getNetworkTokenPrice() {
            let { networkAddress: e } = f.getParams(),
              o = await p.T.fetchTokenPrice({ addresses: [e] }).catch(
                () => (
                  I.P.showError("Failed to fetch network token price"),
                  { fungibles: [] }
                )
              ),
              t = o.fungibles?.[0],
              a = t?.price.toString() || "0";
            (y.tokensPriceMap[e] = parseFloat(a)),
              (y.networkTokenSymbol = t?.symbol || ""),
              (y.networkPrice = a);
          },
          async getMyTokensWithBalance(e) {
            let o = await c.Z.getMyTokensWithBalance(e),
              t = d.s.mapBalancesToSwapTokens(o);
            t && (await f.getInitialGasPrice(), f.setBalances(t));
          },
          setBalances(e) {
            let { networkAddress: o } = f.getParams(),
              t = w.W.state.activeCaipNetwork;
            if (!t) return;
            let a = e.find((e) => e.address === o);
            e.forEach((e) => {
              y.tokensPriceMap[e.address] = e.price || 0;
            }),
              (y.myTokensWithBalance = e.filter((e) =>
                e.address.startsWith(t.caipNetworkId)
              )),
              (y.networkBalanceInUSD = a
                ? r.S.multiply(a.quantity.numeric, a.price).toString()
                : "0");
          },
          async getInitialGasPrice() {
            let e = await d.s.fetchGasPrice();
            if (!e) return { gasPrice: null, gasPriceInUSD: null };
            switch (w.W.state?.activeCaipNetwork?.chainNamespace) {
              case s.o.CHAIN.SOLANA:
                return (
                  (y.gasFee = e.standard ?? "0"),
                  (y.gasPriceInUSD = r.S.multiply(e.standard, y.networkPrice)
                    .div(1e9)
                    .toNumber()),
                  {
                    gasPrice: BigInt(y.gasFee),
                    gasPriceInUSD: Number(y.gasPriceInUSD),
                  }
                );
              case s.o.CHAIN.EVM:
              default:
                let o = e.standard ?? "0",
                  t = BigInt(o),
                  a = BigInt(15e4),
                  n = k.getGasPriceInUSD(y.networkPrice, a, t);
                return (
                  (y.gasFee = o),
                  (y.gasPriceInUSD = n),
                  { gasPrice: t, gasPriceInUSD: n }
                );
            }
          },
          async swapTokens() {
            let e = w.W.getAccountData()?.address,
              o = y.sourceToken,
              t = y.toToken,
              a = r.S.bigNumber(y.sourceTokenAmount).gt(0);
            if (
              (a || f.setToTokenAmount(""),
              !t || !o || y.loadingPrices || !a || !e)
            )
              return;
            y.loadingQuote = !0;
            let n = r.S.bigNumber(y.sourceTokenAmount)
              .times(10 ** o.decimals)
              .round(0);
            try {
              let a = await p.T.fetchSwapQuote({
                userAddress: e,
                from: o.address,
                to: t.address,
                gasPrice: y.gasFee,
                amount: n.toString(),
              });
              y.loadingQuote = !1;
              let s = a?.quotes?.[0]?.toAmount;
              if (!s)
                return void m.h.open(
                  {
                    displayMessage: "Incorrect amount",
                    debugMessage: "Please enter a valid amount",
                  },
                  "error"
                );
              let i = r.S.bigNumber(s)
                .div(10 ** t.decimals)
                .toString();
              f.setToTokenAmount(i),
                f.hasInsufficientToken(y.sourceTokenAmount, o.address)
                  ? (y.inputError = "Insufficient balance")
                  : ((y.inputError = void 0), f.setTransactionDetails());
            } catch (o) {
              let e = await d.s.handleSwapError(o);
              (y.loadingQuote = !1),
                (y.inputError = e || "Insufficient balance");
            }
          },
          async getTransaction() {
            let { fromCaipAddress: e, availableToSwap: o } = f.getParams(),
              t = y.sourceToken,
              a = y.toToken;
            if (e && o && t && a && !y.loadingQuote)
              try {
                let o;
                return (
                  (y.loadingBuildTransaction = !0),
                  (o = (await d.s.fetchSwapAllowance({
                    userAddress: e,
                    tokenAddress: t.address,
                    sourceTokenAmount: y.sourceTokenAmount,
                    sourceTokenDecimals: t.decimals,
                  }))
                    ? await f.createSwapTransaction()
                    : await f.createAllowanceTransaction()),
                  (y.loadingBuildTransaction = !1),
                  (y.fetchError = !1),
                  o
                );
              } catch (e) {
                v.I.goBack(),
                  I.P.showError("Failed to check allowance"),
                  (y.loadingBuildTransaction = !1),
                  (y.approvalTransaction = void 0),
                  (y.swapTransaction = void 0),
                  (y.fetchError = !0);
                return;
              }
          },
          async createAllowanceTransaction() {
            let {
              fromCaipAddress: e,
              sourceTokenAddress: o,
              toTokenAddress: t,
            } = f.getParams();
            if (e && t) {
              if (!o)
                throw Error(
                  "createAllowanceTransaction - No source token address found."
                );
              try {
                let a = await p.T.generateApproveCalldata({
                    from: o,
                    to: t,
                    userAddress: e,
                  }),
                  n = T.w.getPlainAddress(a.tx.from);
                if (!n)
                  throw Error(
                    "SwapController:createAllowanceTransaction - address is required"
                  );
                let r = {
                  data: a.tx.data,
                  to: n,
                  gasPrice: BigInt(a.tx.eip155.gasPrice),
                  value: BigInt(a.tx.value),
                  toAmount: y.toTokenAmount,
                };
                return (
                  (y.swapTransaction = void 0),
                  (y.approvalTransaction = {
                    data: r.data,
                    to: r.to,
                    gasPrice: r.gasPrice,
                    value: r.value,
                    toAmount: r.toAmount,
                  }),
                  {
                    data: r.data,
                    to: r.to,
                    gasPrice: r.gasPrice,
                    value: r.value,
                    toAmount: r.toAmount,
                  }
                );
              } catch (e) {
                v.I.goBack(),
                  I.P.showError("Failed to create approval transaction"),
                  (y.approvalTransaction = void 0),
                  (y.swapTransaction = void 0),
                  (y.fetchError = !0);
                return;
              }
            }
          },
          async createSwapTransaction() {
            let {
                networkAddress: e,
                fromCaipAddress: o,
                sourceTokenAmount: t,
              } = f.getParams(),
              a = y.sourceToken,
              n = y.toToken;
            if (!o || !t || !a || !n) return;
            let r = S.x.parseUnits(t, a.decimals)?.toString();
            try {
              let t = await p.T.generateSwapCalldata({
                  userAddress: o,
                  from: a.address,
                  to: n.address,
                  amount: r,
                  disableEstimate: !0,
                }),
                s = a.address === e,
                i = BigInt(t.tx.eip155.gas),
                c = BigInt(t.tx.eip155.gasPrice),
                l = T.w.getPlainAddress(t.tx.to);
              if (!l)
                throw Error(
                  "SwapController:createSwapTransaction - address is required"
                );
              let u = {
                data: t.tx.data,
                to: l,
                gas: i,
                gasPrice: c,
                value: s ? BigInt(r ?? "0") : BigInt("0"),
                toAmount: y.toTokenAmount,
              };
              return (
                (y.gasPriceInUSD = k.getGasPriceInUSD(y.networkPrice, i, c)),
                (y.approvalTransaction = void 0),
                (y.swapTransaction = u),
                u
              );
            } catch (e) {
              v.I.goBack(),
                I.P.showError("Failed to create transaction"),
                (y.approvalTransaction = void 0),
                (y.swapTransaction = void 0),
                (y.fetchError = !0);
              return;
            }
          },
          onEmbeddedWalletApprovalSuccess() {
            I.P.showLoading("Approve limit increase in your wallet"),
              v.I.replace("SwapPreview");
          },
          async sendTransactionForApproval(e) {
            let { fromAddress: o, isAuthConnector: t } = f.getParams();
            (y.loadingApprovalTransaction = !0),
              t
                ? v.I.pushTransactionStack({
                    onSuccess: f.onEmbeddedWalletApprovalSuccess,
                  })
                : I.P.showLoading("Approve limit increase in your wallet");
            try {
              await S.x.sendTransaction({
                address: o,
                to: e.to,
                data: e.data,
                value: e.value,
                chainNamespace: s.o.CHAIN.EVM,
              }),
                await f.swapTokens(),
                await f.getTransaction(),
                (y.approvalTransaction = void 0),
                (y.loadingApprovalTransaction = !1);
            } catch (e) {
              (y.transactionError = e?.displayMessage),
                (y.loadingApprovalTransaction = !1),
                I.P.showError(e?.displayMessage || "Transaction error"),
                P.E.sendEvent({
                  type: "track",
                  event: "SWAP_APPROVAL_ERROR",
                  properties: {
                    message: e?.displayMessage || e?.message || "Unknown",
                    network: w.W.state.activeCaipNetwork?.caipNetworkId || "",
                    swapFromToken: f.state.sourceToken?.symbol || "",
                    swapToToken: f.state.toToken?.symbol || "",
                    swapFromAmount: f.state.sourceTokenAmount || "",
                    swapToAmount: f.state.toTokenAmount || "",
                    isSmartAccount:
                      (0, l.lj)(s.o.CHAIN.EVM) ===
                      i.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  },
                });
            }
          },
          async sendTransactionForSwap(e) {
            if (!e) return;
            let {
              fromAddress: o,
              toTokenAmount: t,
              isAuthConnector: a,
            } = f.getParams();
            y.loadingTransaction = !0;
            let n = `Swapping ${
                y.sourceToken?.symbol
              } to ${r.S.formatNumberToLocalString(t, 3)} ${y.toToken?.symbol}`,
              c = `Swapped ${
                y.sourceToken?.symbol
              } to ${r.S.formatNumberToLocalString(t, 3)} ${y.toToken?.symbol}`;
            a
              ? v.I.pushTransactionStack({
                  onSuccess() {
                    v.I.replace("Account"), I.P.showLoading(n), b.resetState();
                  },
                })
              : I.P.showLoading("Confirm transaction in your wallet");
            try {
              let t = [y.sourceToken?.address, y.toToken?.address].join(","),
                n = await S.x.sendTransaction({
                  address: o,
                  to: e.to,
                  data: e.data,
                  value: e.value,
                  chainNamespace: s.o.CHAIN.EVM,
                });
              return (
                (y.loadingTransaction = !1),
                I.P.showSuccess(c),
                P.E.sendEvent({
                  type: "track",
                  event: "SWAP_SUCCESS",
                  properties: {
                    network: w.W.state.activeCaipNetwork?.caipNetworkId || "",
                    swapFromToken: f.state.sourceToken?.symbol || "",
                    swapToToken: f.state.toToken?.symbol || "",
                    swapFromAmount: f.state.sourceTokenAmount || "",
                    swapToAmount: f.state.toTokenAmount || "",
                    isSmartAccount:
                      (0, l.lj)(s.o.CHAIN.EVM) ===
                      i.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  },
                }),
                b.resetState(),
                a || v.I.replace("Account"),
                b.getMyTokensWithBalance(t),
                n
              );
            } catch (e) {
              (y.transactionError = e?.displayMessage),
                (y.loadingTransaction = !1),
                I.P.showError(e?.displayMessage || "Transaction error"),
                P.E.sendEvent({
                  type: "track",
                  event: "SWAP_ERROR",
                  properties: {
                    message: e?.displayMessage || e?.message || "Unknown",
                    network: w.W.state.activeCaipNetwork?.caipNetworkId || "",
                    swapFromToken: f.state.sourceToken?.symbol || "",
                    swapToToken: f.state.toToken?.symbol || "",
                    swapFromAmount: f.state.sourceTokenAmount || "",
                    swapToAmount: f.state.toTokenAmount || "",
                    isSmartAccount:
                      (0, l.lj)(s.o.CHAIN.EVM) ===
                      i.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  },
                });
              return;
            }
          },
          hasInsufficientToken: (e, o) =>
            k.isInsufficientSourceTokenForSwap(e, o, y.myTokensWithBalance),
          setTransactionDetails() {
            let { toTokenAddress: e, toTokenDecimals: o } = f.getParams();
            e &&
              o &&
              ((y.gasPriceInUSD = k.getGasPriceInUSD(
                y.networkPrice,
                BigInt(y.gasFee),
                BigInt(15e4)
              )),
              (y.priceImpact = k.getPriceImpact({
                sourceTokenAmount: y.sourceTokenAmount,
                sourceTokenPriceInUSD: y.sourceTokenPriceInUSD,
                toTokenPriceInUSD: y.toTokenPriceInUSD,
                toTokenAmount: y.toTokenAmount,
              })),
              (y.maxSlippage = k.getMaxSlippage(y.slippage, y.toTokenAmount)),
              (y.providerFee = k.getProviderFee(y.sourceTokenAmount)));
          },
        },
        f = (0, g.X)(b);
    },
  },
]);
