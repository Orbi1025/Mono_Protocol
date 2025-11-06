(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5859],
  {
    12050: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => l });
      var a = t(95155),
        i = t(98665),
        n = t.n(i),
        r = t(15239),
        o = t(25903);
      function l() {
        let { ref: e, isVisible: s } = (0, o.t)(),
          t = [
            {
              title: "Build apps that just work",
              description:
                "We strip out the complexity that undermines acquisition and retention, letting you deliver seamless experiences that attract users - and keep them coming back.",
              image: "/images/use-cases/11.webp",
            },
            {
              title: (0, a.jsxs)(a.Fragment, {
                children: [
                  "Save time, cut costs,",
                  (0, a.jsx)("br", {}),
                  "and ship fast",
                ],
              }),
              description: (0, a.jsx)(a.Fragment, {
                children:
                  "No need to build cross-chain logic or infrastructure. We handle the complexity so you can focus on development and ship the app you want.",
              }),
              image: "/images/use-cases/21.webp",
            },
            {
              title: "Monetize every transaction",
              description:
                "Generate revenue with configurable transaction fees while your users benefit from MEV protection, dependable execution, and optimal routing.",
              image: "/images/use-cases/31.webp",
            },
          ];
        return (0, a.jsx)("div", {
          className: n().useCases,
          ref: e,
          id: "use-cases",
          children: (0, a.jsxs)("div", {
            className: n().container,
            children: [
              (0, a.jsx)("h2", {
                className: n().sectionTitle,
                children: "USE CASES",
              }),
              (0, a.jsx)("div", {
                className: n().useCasesList + " " + (s ? n().visible : ""),
                children: t.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: n().useCaseItem,
                      children: [
                        (0, a.jsxs)("div", {
                          className: n().topLine,
                          children: [
                            "USE CASES",
                            (0, a.jsx)(r.default, {
                              src: "/images/use-cases/logo-black.svg",
                              alt: "arrow",
                              width: 24,
                              height: 24,
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: n().useCaseImage,
                          children: (0, a.jsx)(r.default, {
                            src: e.image,
                            alt: e.title.toString() || "",
                            fill: !0,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: n().useCaseContent,
                          children: [
                            (0, a.jsx)("h3", {
                              className: n().useCaseTitle,
                              children: e.title,
                            }),
                            (0, a.jsx)("p", {
                              className: n().useCaseDescription,
                              children: e.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.title.toString() || ""
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    15239: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => i.a });
      var a = t(54652),
        i = t.n(a);
    },
    20063: (e, s, t) => {
      "use strict";
      var a = t(47260);
      t.o(a, "usePathname") &&
        t.d(s, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        t.o(a, "useRouter") &&
          t.d(s, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        t.o(a, "useSearchParams") &&
          t.d(s, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          });
    },
    36663: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => l });
      var a = t(95155),
        i = t(40004),
        n = t.n(i),
        r = t(15239),
        o = t(25903);
      function l() {
        let e = [(0, o.t)(), (0, o.t)(), (0, o.t)()];
        return (0, a.jsx)("div", {
          className: n().explanation,
          id: "explanation",
          children: (0, a.jsxs)("div", {
            className: n().container,
            children: [
              (0, a.jsxs)("h2", {
                className: n().sectionTitle,
                children: [
                  (0, a.jsx)("label", { children: "Mono Protocol" }),
                  " ",
                  (0, a.jsxs)("span", {
                    children: [
                      "is a chain-abstraction protocol that unifies per-token",
                      " ",
                      (0, a.jsx)(r.default, {
                        src: "/images/hero/token.svg",
                        alt: "token",
                        width: 56,
                        height: 56,
                      }),
                      " ",
                      "balances across chains and delivers instant, MEV-resilient execution—making Web3 feel like one network while lowering costs, boosting retention, and creating monetizable network effects for early supporters",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: n().cards,
                children: [
                  {
                    title: "Liquidity locks",
                    text: "Faster, cheaper, consistently reliable on-chain transactions",
                    image: "/images/explanation/liquiditylocks.webp",
                  },
                  {
                    title: "Chain abstracted",
                    text: "Compatible with all networks, transactions, and tokens",
                    image: "/images/explanation/chainabstracted.webp",
                  },
                  {
                    title: "Mono balances",
                    text: "A single per-token balance across networks",
                    image: "/images/explanation/monobalances.webp",
                  },
                ].map((s, t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      ref: e[t].ref,
                      className:
                        n().card + " " + (e[t].isVisible ? n().visible : ""),
                      children: [
                        (0, a.jsx)("h3", {
                          className: n().cardTitle,
                          children: s.title,
                        }),
                        (0, a.jsx)("p", {
                          className: n().cardDescription,
                          children: s.text,
                        }),
                        (0, a.jsx)("div", {
                          className: n().cardImage,
                          style: {
                            backgroundImage: "url(".concat(s.image, ")"),
                          },
                        }),
                      ],
                    },
                    s.title
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    40004: (e) => {
      e.exports = {
        explanation: "Explanation_explanation__Qeh8k",
        container: "Explanation_container__Bmhho",
        sectionTitle: "Explanation_sectionTitle__ocleg",
        scrollReveal: "Explanation_scrollReveal__Qlhvh",
        cards: "Explanation_cards__vCZNi",
        card: "Explanation_card__BGw9t",
        cardTitle: "Explanation_cardTitle__IzzYh",
        cardDescription: "Explanation_cardDescription__pqm3T",
        cardImage: "Explanation_cardImage__BWAqq",
        visible: "Explanation_visible__GlTCJ",
      };
    },
    44954: (e, s, t) => {
      Promise.resolve().then(t.t.bind(t, 52619, 23)),
        Promise.resolve().then(t.t.bind(t, 81356, 23)),
        Promise.resolve().then(t.t.bind(t, 69010, 23)),
        Promise.resolve().then(t.t.bind(t, 53743, 23)),
        Promise.resolve().then(t.t.bind(t, 61540, 23)),
        Promise.resolve().then(t.bind(t, 36663)),
        Promise.resolve().then(t.bind(t, 7723)),
        Promise.resolve().then(t.t.bind(t, 51102, 23)),
        Promise.resolve().then(t.t.bind(t, 77653, 23)),
        Promise.resolve().then(t.t.bind(t, 60551, 23)),
        Promise.resolve().then(t.bind(t, 57803)),
        Promise.resolve().then(t.t.bind(t, 76699, 23)),
        Promise.resolve().then(t.t.bind(t, 53931, 23)),
        Promise.resolve().then(t.t.bind(t, 63176, 23)),
        Promise.resolve().then(t.bind(t, 44717)),
        Promise.resolve().then(t.bind(t, 51826)),
        Promise.resolve().then(t.bind(t, 12050)),
        Promise.resolve().then(t.t.bind(t, 46218, 23)),
        Promise.resolve().then(t.t.bind(t, 55607, 23)),
        Promise.resolve().then(t.bind(t, 6639)),
        Promise.resolve().then(t.t.bind(t, 87515, 23));
    },
    51102: (e) => {
      e.exports = {
        hero: "Hero_hero___eBgV",
        raised: "Hero_raised__b_7oR",
        container: "Hero_container__riK17",
        raised_text: "Hero_raised_text__lmYaL",
        raised_current: "Hero_raised_current__s_YQq",
        raised_total: "Hero_raised_total__ZR8Uo",
        metaball: "Hero_metaball__G9Dbk",
        float: "Hero_float__04ilo",
        label: "Hero_label__p8U62",
      };
    },
    54652: (e, s, t) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        !(function (e, s) {
          for (var t in s)
            Object.defineProperty(e, t, { enumerable: !0, get: s[t] });
        })(s, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return o;
          },
        });
      let a = t(28140),
        i = t(75040),
        n = t(81356),
        r = a._(t(71124));
      function o(e) {
        let { props: s } = (0, i.getImgProps)(e, {
          defaultLoader: r.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, t] of Object.entries(s)) void 0 === t && delete s[e];
        return { props: s };
      }
      let l = n.Image;
    },
    60551: (e) => {
      e.exports = {
        LandingPage: "landing_LandingPage__vv_sL",
        black_bg: "landing_black_bg__vlRY_",
      };
    },
    98665: (e) => {
      e.exports = {
        useCases: "UseCases_useCases__Os6F8",
        container: "UseCases_container___SUS0",
        sectionTitle: "UseCases_sectionTitle__dr5c3",
        useCasesList: "UseCases_useCasesList__Glm6G",
        visible: "UseCases_visible__FbHi1",
        useCaseItem: "UseCases_useCaseItem__r_N24",
        topLine: "UseCases_topLine__QLV1x",
        useCaseImage: "UseCases_useCaseImage__hEecH",
        useCaseContent: "UseCases_useCaseContent__FLlLr",
        useCaseTitle: "UseCases_useCaseTitle__wi2lk",
        useCaseDescription: "UseCases_useCaseDescription__W3nky",
      };
    },
  },
  (e) => {
    e.O(
      0,
      [2094, 4411, 5791, 1169, 5466, 4126, 2619, 1356, 4178, 8441, 1255, 7358],
      () => e((e.s = 44954))
    ),
      (_N_E = e.O());
  },
]);
