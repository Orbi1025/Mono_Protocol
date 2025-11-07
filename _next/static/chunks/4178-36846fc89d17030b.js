(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4178],
  {
    6639: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var a = n(95155);
      n(40382);
      var o = n(52619),
        s = n.n(o),
        i = n(20063),
        _ = n(12115);
      let r = (e) => {
          let {
              href: t,
              children: n,
              className: o,
              rel: _,
              onClick: r,
              disabled: c,
            } = e,
            l =
              (null == t ? void 0 : t.includes("http")) ||
              (null == t ? void 0 : t.includes(".pdf"))
                ? "_blank"
                : "",
            d = (0, i.useSearchParams)().get("r");
          return (0, a.jsx)(s(), {
            onClick: r,
            href: (function (e, t) {
              if (!e || !t) return e;
              let [n, a] = (e || "").split("#"),
                [o, s] = (n || "").split("?"),
                i = new URLSearchParams(s || "");
              i.has("r") || i.append("r", t);
              let _ = i.toString(),
                r = o;
              return _ && (r += "?".concat(_)), a && (r += "#".concat(a)), r;
            })(t, d),
            target: l,
            rel: _,
            className: "link "
              .concat(o, " ")
              .concat(t ? "" : "inactive", " ")
              .concat(c ? "inactive" : ""),
            children: n,
          });
        },
        c = (e) =>
          (0, a.jsx)(_.Suspense, { children: (0, a.jsx)(r, { ...e }) });
    },
    7723: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => _ });
      var a = n(95155),
        o = n(12115),
        s = n(91368),
        i = n.n(s);
      function _() {
        let [e, t] = (0, o.useState)(0),
          n = (n) => {
            t(e === n ? -1 : n);
          };
        return (0, a.jsx)("section", {
          className: i().faq,
          id: "faq",
          children: (0, a.jsxs)("div", {
            className: i().faq_container,
            children: [
              (0, a.jsx)("div", {
                className: i().faq_header,
                children: (0, a.jsx)("h2", { children: "FAQ" }),
              }),
              (0, a.jsx)("div", {
                className: i().faq_content,
                children: [
                  {
                    question: "What is Mono Protocol?",
                    answer:
                      "Mono Protocol is a chain-abstraction protocol that unifies per-token balances across chains and enables instant, MEV-resilient execution—so users transact anywhere with one account, one balance, one click.",
                  },
                  {
                    question: "What is the minimum investment amount?",
                    answer: "The minimum investment amount is $10.",
                  },
                  {
                    question: "When will the $MONO token be listed?",
                    answer:
                      "The listing will be announced after all stages are completed, with timelines shared via our official channels.",
                  },
                ].map((t, o) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: ""
                        .concat(i().faq_content_item, " ")
                        .concat(e === o ? i().faq_content_item_active : ""),
                      children: [
                        (0, a.jsxs)("div", {
                          className: i().faq_content_item_question,
                          onClick: () => n(o),
                          children: [
                            (0, a.jsx)("h3", { children: t.question }),
                            (0, a.jsx)("div", {
                              className: ""
                                .concat(i().faq_content_item_question_icon, " ")
                                .concat(
                                  e === o
                                    ? i().faq_content_item_question_icon_active
                                    : ""
                                ),
                              onClick: (e) => {
                                e.stopPropagation(), n(o);
                              },
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: ""
                            .concat(i().faq_content_item_answer, " ")
                            .concat(
                              e === o ? i().faq_content_item_answer_active : ""
                            ),
                          children: (0, a.jsx)("p", {
                            dangerouslySetInnerHTML: { __html: t.answer },
                          }),
                        }),
                      ],
                    },
                    o
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    25903: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => o });
      var a = n(12115);
      let o = () => {
        let [e, t] = (0, a.useState)(!1),
          n = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let e = new IntersectionObserver(
                (e) => {
                  let [n] = e;
                  t(n.intersectionRatio >= 0.5);
                },
                { threshold: 0.5 }
              ),
              a = n.current;
            return (
              a && e.observe(a),
              () => {
                a && e.unobserve(a);
              }
            );
          }, []),
          { ref: n, isVisible: e }
        );
      };
    },
    31360: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => o });
      var a = n(12115);
      let o = () => {
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
    40382: () => {},
    44717: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => _ });
      var a = n(95155),
        o = n(75246),
        s = n.n(o),
        i = n(15239);
      function _() {
        return (0, a.jsx)("section", {
          className: s().tokenomics,
          id: "tokenomics",
          children: (0, a.jsxs)("div", {
            className: s().tokenomics_container,
            children: [
              (0, a.jsx)("div", {
                className: s().tokenomics_header,
                children: (0, a.jsx)("h2", { children: "Mono Tokenomics" }),
              }),
              (0, a.jsxs)("div", {
                className: s().tokenomics_content,
                children: [
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "LP",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "Locked",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Ownership",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "Renounced",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Tax",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0/0",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Team",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0%",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Treasury & Governance",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0%",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Strategic Reserve",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0%",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Ecosystem Incentives",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0%",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "User Rewards",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0%",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_content_item,
                    children: [
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_title,
                        children: "Private Round",
                      }),
                      (0, a.jsx)("div", {
                        className: s().tokenomics_content_item_value,
                        children: "0%",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: s().tokenomics_supply,
                children: [
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_supply_title,
                    children: [
                      "Total Supply",
                      " ",
                      (0, a.jsxs)("h3", {
                        children: [
                          "1,000\xa0000\xa0000",
                          (0, a.jsx)(i.default, {
                            src: "/images/hero/token.svg",
                            alt: "MONO",
                            width: 36,
                            height: 36,
                          }),
                          " ",
                          "MONO",
                          " ",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().tokenomics_supply_field,
                    children: [
                      "0xc7313ade1f0febb9dec29e48d5302e679146c676",
                      (0, a.jsx)("button", {
                        className: s().tokenomics_supply_field_button,
                        onClick: () => {
                          navigator.clipboard
                            .writeText(
                              "0xc7313ade1f0febb9dec29e48d5302e679146c676"
                            )
                            .catch((e) => {
                              console.error("Failed to copy text: ", e);
                            });
                        },
                        children: (0, a.jsx)(i.default, {
                          src: "/images/copy.svg",
                          alt: "Copy",
                          width: 20,
                          height: 20,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    46218: () => {},
    51826: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => _ });
      var a = n(95155),
        o = n(12115),
        s = n(55607),
        i = n.n(s);
      function _(e) {
        var t, n, s;
        let { targetDate: _, className: r, classes: c, hideDays: l } = e,
          {
            days: d,
            hours: m,
            minutes: p,
          } = (function (e) {
            let [t, n] = (0, o.useState)({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            });
            return (
              (0, o.useEffect)(() => {
                let t = () => {
                  let t = new Date().getTime(),
                    n = e.getTime() - t;
                  if (n <= 0)
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                  let a = Math.floor(n / 864e5),
                    o = Math.floor((n % 864e5) / 36e5);
                  return {
                    days: a,
                    hours: o,
                    minutes: Math.floor((n % 36e5) / 6e4),
                    seconds: Math.floor((n % 6e4) / 1e3),
                  };
                };
                n(t());
                let a = setInterval(() => {
                  n(t());
                }, 1e3);
                return () => clearInterval(a);
              }, [e]),
              t
            );
          })(_);
        return (0, a.jsxs)("div", {
          className: ""
            .concat(i().eventDate, " ")
            .concat(
              null != (t = null == c ? void 0 : c.eventDate) ? t : "",
              " "
            )
            .concat(null != r ? r : ""),
          children: [
            (0, a.jsx)("div", {
              className: ""
                .concat(i().countdownIcon, " ")
                .concat(
                  null != (n = null == c ? void 0 : c.countdownIcon) ? n : ""
                ),
              children: (0, a.jsxs)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("circle", {
                    cx: "9",
                    cy: "9",
                    r: "7.5",
                    fill: "#1E1E1E",
                    stroke: "#1E1E1E",
                    strokeWidth: "1.5",
                  }),
                  (0, a.jsx)("path", {
                    d: "M9 6V9L10.5 10.5",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            }),
            (0, a.jsx)("span", {
              className: ""
                .concat(i().countdownText, " ")
                .concat(
                  null != (s = null == c ? void 0 : c.countdownText) ? s : ""
                ),
              children: l
                ? (0, a.jsxs)(a.Fragment, { children: [m, "h : ", p, "m"] })
                : (0, a.jsxs)(a.Fragment, {
                    children: [d, "d : ", m, "h : ", p, "m"],
                  }),
            }),
          ],
        });
      }
    },
    53743: (e) => {
      e.exports = {
        banner: "Banner_banner__h1GXk",
        banner_container: "Banner_banner_container__x3K3Z",
        banner_content: "Banner_banner_content__9Uj_g",
        banner_content_left: "Banner_banner_content_left__8XX06",
        banner_content_right: "Banner_banner_content_right__lf4lO",
        banner_content_right_option:
          "Banner_banner_content_right_option__bXnTu",
      };
    },
    53931: (e) => {
      e.exports = {
        featuredIn: "FeaturedIn_featuredIn__ch6DL",
        container: "FeaturedIn_container__24USS",
        sectionTitle: "FeaturedIn_sectionTitle__GKVom",
        scrollContainer: "FeaturedIn_scrollContainer__D0xkT",
        wrap: "FeaturedIn_wrap__Q_W4x",
        scroll: "FeaturedIn_scroll__BXl_X",
        card: "FeaturedIn_card__We0h_",
      };
    },
    55607: (e) => {
      e.exports = {
        upcomingEvents: "UpcomingEvents_upcomingEvents__U9jaY",
        container: "UpcomingEvents_container__TJcFD",
        events: "UpcomingEvents_events__wHr8d",
        event: "UpcomingEvents_event__PHrIz",
        eventDate: "UpcomingEvents_eventDate__6PH7_",
        countdownIcon: "UpcomingEvents_countdownIcon__swosj",
        countdownText: "UpcomingEvents_countdownText__1zd4M",
        eventInfo: "UpcomingEvents_eventInfo__Yd8cw",
        startDate: "UpcomingEvents_startDate__i5BoT",
        startDateLabel: "UpcomingEvents_startDateLabel__tZO0a",
        startDateValue: "UpcomingEvents_startDateValue__Lb9lI",
      };
    },
    57803: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => c });
      var a = n(95155),
        o = n(15239),
        s = n(12115),
        i = n(72024),
        _ = n.n(i),
        r = n(31360);
      function c() {
        let [e, t] = (0, s.useState)(0),
          n = (0, r.a)(),
          i = [
            {
              date: "Q3 2025",
              status: "done",
              title: "Team & Architecture",
              description: [
                "Hire the core team (protocol, infra, cryptography, BD, DevRel).",
                "Finalize product architecture: chain abstraction, Liquidity Locks, universal accounts, fee abstraction.",
                "Technical spikes & prototypes: RL attestation flow, paymaster scaffolding, LI.FI routing adaptor.",
                "Security & economics: threat modeling, slashing/bond design, risk limits for instant settlement.",
                "Partner pipeline: WaaS (Privy/Web3Auth), oracles (Chainlink), DA (Celestia).",
              ],
            },
            {
              date: "Q4 2025",
              status: "ongoing",
              title: "Marketing Package",
              description: [
                "Brand & messaging: website v1, docs v0, pitch deck, one-pager.",
                "Litepaper + tokenomics draft; publish public roadmap; legal/compliance review.",
                "Smart contracts & audits; whitelist + KYC/geo-controls (where applicable).",
                "Community growth: Discord/Telegram, ambassador program, early builder waitlist.",
                "Developer preview: SDK alpha (JS), reference dApp, MoUs with design partners.",
              ],
            },
            {
              date: "Q1 2026",
              status: "coming_soon",
              title: "Product Beta",
              description: [
                "Beta release: unified per-token balances on major EVM L2s (Base/Arbitrum/Optimism/Polygon) + initial Solana support.",
                "Resource Locks MVP on mainnet with solver bonding; settlement metrics dashboard.",
                "Fee abstraction/paymaster alpha; MEV-protected routing integration.",
                "Observability: status webhooks, tracing, analytics; partner SLAs (draft).",
              ],
            },
            {
              date: "Q2 2026",
              status: "coming_soon",
              title: "Ecosystem Growth & Mainnet Prep",
              description: [
                "Mainnet Release Candidate: audits #2/#3; formal verification for RL contracts.",
                "Governance v1: staking contracts, operator onboarding, slashing tests.",
                "Insurance pool & bond parameters; treasury operations playbook.",
                "Chain expansion: full Solana/Linea/Avalanche support; Bitcoin/TON R&D.",
              ],
            },
            {
              date: "Q3 2026",
              status: "coming_soon",
              title: "Marketing Expansion",
              description: [
                "Scaled GTM: PR tour, tier-1 media, technical deep-dives, case studies.",
                'Narrative leadership: "One balance, any chain" campaigns; thought-leadership content.',
                "BD sprints: exchanges, wallets, pay/fintech; enterprise pilots and co-selling.",
                "co-marketing with Privy, LI.FI, Chainlink, Celestia.",
                "Regional growth: APAC/EU events, dev workshops, localization of docs & SDK.",
              ],
            },
          ],
          c = e >= i.length - 2;
        return (0, a.jsx)("section", {
          className: _().roadmap,
          id: "roadmap",
          children: (0, a.jsxs)("div", {
            className: _().roadmap_container,
            children: [
              (0, a.jsxs)("div", {
                className: _().roadmap_header,
                children: [
                  (0, a.jsx)("h2", { children: "Roadmap" }),
                  (0, a.jsx)("p", {
                    children:
                      "Mono Protocol's journey: From pilot model to a complete AI\n            Blockchain ecosystem",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: _().roadmap_content,
                children: [
                  (0, a.jsxs)("div", {
                    className: _().roadmap_buttons,
                    children: [
                      (0, a.jsx)("div", {
                        className: ""
                          .concat(_().roadmap_buttons_left, " ")
                          .concat(0 === e ? _().disabled : ""),
                        onClick: () => {
                          e > 0 && t(e - 1);
                        },
                        children: (0, a.jsx)(o.default, {
                          src: "/images/roadmap/left.svg",
                          alt: "",
                          width: 24,
                          height: 24,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: ""
                          .concat(_().roadmap_buttons_right, " ")
                          .concat(c ? _().disabled : ""),
                        onClick: () => {
                          e < i.length - 2 && t(e + 1);
                        },
                        children: (0, a.jsx)(o.default, {
                          src: "/images/roadmap/right.svg",
                          alt: "",
                          width: 24,
                          height: 24,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: _().roadmap_content_items,
                    children: (0, a.jsx)("div", {
                      className: _().roadmap_content_wrapper,
                      style: {
                        transform: "translateX(-".concat(
                          e * (n ? 51.5 : 25.5),
                          "%)"
                        ),
                        transition: "transform 0.3s ease-in-out",
                      },
                      children: i.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: ""
                              .concat(_().roadmap_content_item, " ")
                              .concat(_()[e.status]),
                            children: [
                              (0, a.jsxs)("div", {
                                className: _().roadmap_content_item_top_line,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: _().date,
                                    children: e.date,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: ""
                                      .concat(_().status, " ")
                                      .concat(_()[e.status]),
                                    children:
                                      "done" === e.status
                                        ? "COMPLETED"
                                        : "ongoing" === e.status
                                        ? "Ongoing"
                                        : "Coming Soon",
                                  }),
                                  " ",
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: _().roadmap_content_item_title,
                                children: e.title,
                              }),
                              (0, a.jsx)("div", {
                                className: _().roadmap_content_item_description,
                                children: e.description.map((t, n) =>
                                  (0, a.jsxs)(
                                    "div",
                                    {
                                      className: _().text,
                                      children: [
                                        (0, a.jsx)(o.default, {
                                          src: "/images/roadmap/".concat(
                                            "done" === e.status
                                              ? "done"
                                              : "ongoing" === e.status
                                              ? "ongoing"
                                              : "coming_soon",
                                            ".svg"
                                          ),
                                          alt: "",
                                          width: 24,
                                          height: 24,
                                        }),
                                        " ",
                                        (0, a.jsx)("p", { children: t }),
                                      ],
                                    },
                                    n
                                  )
                                ),
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    61540: (e) => {
      e.exports = {
        banner: "BannerCopy_banner__z6702",
        banner_container: "BannerCopy_banner_container__wILtn",
        banner_content: "BannerCopy_banner_content__5Df78",
        banner_content_left: "BannerCopy_banner_content_left__PpJsK",
        banner_content_left_span: "BannerCopy_banner_content_left_span__IiUFF",
        banner_content_left_br: "BannerCopy_banner_content_left_br__HZoyn",
      };
    },
    63176: (e) => {
      e.exports = {
        privateRound: "PrivateRound_privateRound__UKuxS",
        container: "PrivateRound_container__qs94r",
        privateRoundContent: "PrivateRound_privateRoundContent__jWxNz",
        readMore: "PrivateRound_readMore__CZzbx",
        scroll: "PrivateRound_scroll__v1wxx",
      };
    },
    69010: (e) => {
      e.exports = {
        advantages: "Advantages_advantages__4nWC_",
        advantages_container: "Advantages_advantages_container__9LFfJ",
        advantages_header: "Advantages_advantages_header__38Ua3",
        advantages_content: "Advantages_advantages_content___EOCD",
        advantages_item: "Advantages_advantages_item__wONbd",
        appearCaseItem: "Advantages_appearCaseItem__4HAjk",
        advantages_label: "Advantages_advantages_label__3zMci",
        advantages_description: "Advantages_advantages_description__y9WlY",
        showText: "Advantages_showText__AMun_",
      };
    },
    72024: (e) => {
      e.exports = {
        roadmap: "Roadmap_roadmap__GVdU1",
        roadmap_container: "Roadmap_roadmap_container__WRrkv",
        roadmap_header: "Roadmap_roadmap_header___kbHS",
        roadmap_content: "Roadmap_roadmap_content__ueMxY",
        roadmap_buttons: "Roadmap_roadmap_buttons__GtnVL",
        roadmap_buttons_left: "Roadmap_roadmap_buttons_left__CHpEj",
        roadmap_buttons_right: "Roadmap_roadmap_buttons_right__556bP",
        disabled: "Roadmap_disabled__Gcfry",
        roadmap_content_items: "Roadmap_roadmap_content_items__folBy",
        roadmap_content_wrapper: "Roadmap_roadmap_content_wrapper__Mk6K_",
        roadmap_content_item: "Roadmap_roadmap_content_item__rbZ_v",
        ongoing: "Roadmap_ongoing__PEaMR",
        coming_soon: "Roadmap_coming_soon__FsJ6D",
        done: "Roadmap_done__qVler",
        roadmap_content_item_top_line:
          "Roadmap_roadmap_content_item_top_line__KC2ex",
        date: "Roadmap_date__qktpF",
        status: "Roadmap_status__oxG0g",
        roadmap_content_item_title: "Roadmap_roadmap_content_item_title__ZdQzC",
        roadmap_content_item_description:
          "Roadmap_roadmap_content_item_description__gpy80",
        text: "Roadmap_text__CoMRl",
      };
    },
    75246: (e) => {
      e.exports = {
        tokenomics: "Tokenomics_tokenomics__l0_a0",
        tokenomics_container: "Tokenomics_tokenomics_container__QJ93U",
        tokenomics_header: "Tokenomics_tokenomics_header__5Vr_e",
        tokenomics_content: "Tokenomics_tokenomics_content__5g3Yg",
        tokenomics_content_item: "Tokenomics_tokenomics_content_item__l1cXw",
        appearCaseItem: "Tokenomics_appearCaseItem___VwHZ",
        tokenomics_content_item_title:
          "Tokenomics_tokenomics_content_item_title__JUa_O",
        tokenomics_content_item_value:
          "Tokenomics_tokenomics_content_item_value__UniHp",
        tokenomics_supply: "Tokenomics_tokenomics_supply__YZE8y",
        tokenomics_supply_title: "Tokenomics_tokenomics_supply_title__xkeZw",
        tokenomics_supply_field: "Tokenomics_tokenomics_supply_field__TTjsi",
        tokenomics_supply_field_button:
          "Tokenomics_tokenomics_supply_field_button__AdyL8",
      };
    },
    76699: (e) => {
      e.exports = {
        tokenUtility: "TokenUtility_tokenUtility__C3tjK",
        tokenUtility_container: "TokenUtility_tokenUtility_container__kHSgA",
        tokenUtility_header: "TokenUtility_tokenUtility_header__jXQqt",
        tokenUtility_content: "TokenUtility_tokenUtility_content__CgGe2",
        tokenUtility_item: "TokenUtility_tokenUtility_item__OCf20",
        tokenUtility_image: "TokenUtility_tokenUtility_image__NG2CJ",
        tokenUtility_item_content:
          "TokenUtility_tokenUtility_item_content__zVzrn",
        appearCaseItem: "TokenUtility_appearCaseItem__23xHW",
      };
    },
    77653: (e) => {
      e.exports = {
        poweredBy: "PoweredBy_poweredBy__pcwQ0",
        container: "PoweredBy_container__VoYqz",
        sectionTitle: "PoweredBy_sectionTitle__LjTXt",
        scrollContainer: "PoweredBy_scrollContainer__srInl",
        wrap: "PoweredBy_wrap__5XU48",
        scroll: "PoweredBy_scroll__f5fFc",
        card: "PoweredBy_card__mkd1b",
      };
    },
    87515: (e) => {
      e.exports = {
        progress: "Progress_progress__RQsua",
        timer: "Progress_timer__HXmdP",
        timerItem: "Progress_timerItem__L_T9a",
        timerItemNumber: "Progress_timerItemNumber__ilirO",
        emailForm: "Progress_emailForm__fSPeQ",
        inputWrapper: "Progress_inputWrapper___oJVU",
        errorMessage: "Progress_errorMessage__mdzJ8",
        bottomLine: "Progress_bottomLine__1kc8_",
        auditCompleted: "Progress_auditCompleted__8H07O",
        stage: "Progress_stage__12BWL",
        left: "Progress_left__JX73w",
        right: "Progress_right__wLWo1",
        progressBar: "Progress_progressBar__B_x44",
        splitLine: "Progress_splitLine__E6kpj",
        bar: "Progress_bar__1hacv",
        data: "Progress_data__QhF5_",
        grayout: "Progress_grayout__CU7gY",
        raisedSoFar: "Progress_raisedSoFar__C3pVA",
        raisedSoFarValue: "Progress_raisedSoFarValue__du8Jz",
        buttons: "Progress_buttons__feAss",
        dashboardButton: "Progress_dashboardButton__sKqQO",
      };
    },
    91368: (e) => {
      e.exports = {
        faq: "Faq_faq__aBjS9",
        faq_container: "Faq_faq_container__dhJai",
        faq_header: "Faq_faq_header__vntKB",
        faq_content: "Faq_faq_content__ebZmA",
        faq_content_item: "Faq_faq_content_item__SRKeP",
        faq_content_item_active: "Faq_faq_content_item_active__12X1S",
        faq_content_item_question: "Faq_faq_content_item_question__azrCX",
        faq_content_item_question_icon:
          "Faq_faq_content_item_question_icon__DNTEe",
        faq_content_item_question_icon_active:
          "Faq_faq_content_item_question_icon_active__oVYAh",
        faq_content_item_answer: "Faq_faq_content_item_answer__Nsfdj",
        faq_content_item_answer_active:
          "Faq_faq_content_item_answer_active__q4k0A",
      };
    },
  },
]);
