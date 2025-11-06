(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1483],
  {
    807: (t, e, i) => {
      "use strict";
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => n, Kq: () => r });
    },
    2221: (t, e, i) => {
      "use strict";
      i.d(e, { p: () => l });
      var r = i(84017),
        n = i(8640);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(n.S) || [];
        if (!r) return t;
        let o = i.replace(r, ""),
          a = +!!s.has(e);
        return r !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.f,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    2228: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => n, K: () => s });
      var r = i(41089);
      let n = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, r.p)(t) ? t[t.length - 1] || 0 : t);
    },
    5295: (t, e, i) => {
      "use strict";
      i.d(e, { a: () => r });
      let r = (t) => Math.round(1e5 * t) / 1e5;
    },
    6500: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => r });
      let r = (t) => t;
    },
    8640: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => r });
      let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    8871: (t, e, i) => {
      "use strict";
      let r;
      i.d(e, { k: () => a });
      var n = i(95221),
        s = i(97929);
      function o() {
        r = void 0;
      }
      let a = {
        now: () => (
          void 0 === r &&
            a.set(
              s.uv.isProcessing || n.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          r
        ),
        set: (t) => {
          (r = t), queueMicrotask(o);
        },
      };
    },
    9725: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => r });
      let r = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...i(12434).U,
      ]);
    },
    12096: (t, e, i) => {
      "use strict";
      i.d(e, { K: () => n });
      var r = i(34100);
      function n(t, e, i) {
        let n = t.getProps();
        return (0, r.a)(n, e, void 0 !== i ? i : n.custom, t);
      }
    },
    12434: (t, e, i) => {
      "use strict";
      i.d(e, { U: () => r, f: () => n });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n = new Set(r);
    },
    13548: function (t, e, i) {
      var r;
      !(function (n, s) {
        "use strict";
        var o = "function",
          a = "undefined",
          l = "object",
          u = "string",
          h = "major",
          d = "model",
          c = "name",
          p = "type",
          m = "vendor",
          f = "version",
          v = "architecture",
          g = "console",
          y = "mobile",
          w = "tablet",
          b = "smarttv",
          x = "wearable",
          P = "embedded",
          T = "Amazon",
          S = "Apple",
          A = "ASUS",
          k = "BlackBerry",
          E = "Browser",
          V = "Chrome",
          M = "Firefox",
          C = "Google",
          D = "Honor",
          R = "Huawei",
          j = "Microsoft",
          L = "Motorola",
          B = "Nvidia",
          F = "OnePlus",
          O = "Opera",
          U = "OPPO",
          I = "Samsung",
          N = "Sharp",
          W = "Sony",
          $ = "Xiaomi",
          q = "Zebra",
          G = "Facebook",
          z = "Chromium OS",
          _ = "Mac OS",
          K = " Browser",
          X = function (t, e) {
            var i = {};
            for (var r in t)
              e[r] && e[r].length % 2 == 0
                ? (i[r] = e[r].concat(t[r]))
                : (i[r] = t[r]);
            return i;
          },
          H = function (t) {
            for (var e = {}, i = 0; i < t.length; i++)
              e[t[i].toUpperCase()] = t[i];
            return e;
          },
          Y = function (t, e) {
            return typeof t === u && -1 !== Z(e).indexOf(Z(t));
          },
          Z = function (t) {
            return t.toLowerCase();
          },
          Q = function (t, e) {
            if (typeof t === u)
              return (
                (t = t.replace(/^\s\s*/, "")),
                typeof e === a ? t : t.substring(0, 500)
              );
          },
          J = function (t, e) {
            for (var i, r, n, a, u, h, d = 0; d < e.length && !u; ) {
              var c = e[d],
                p = e[d + 1];
              for (i = r = 0; i < c.length && !u && c[i]; )
                if ((u = c[i++].exec(t)))
                  for (n = 0; n < p.length; n++)
                    (h = u[++r]),
                      typeof (a = p[n]) === l && a.length > 0
                        ? 2 === a.length
                          ? typeof a[1] == o
                            ? (this[a[0]] = a[1].call(this, h))
                            : (this[a[0]] = a[1])
                          : 3 === a.length
                          ? typeof a[1] !== o || (a[1].exec && a[1].test)
                            ? (this[a[0]] = h ? h.replace(a[1], a[2]) : void 0)
                            : (this[a[0]] = h
                                ? a[1].call(this, h, a[2])
                                : void 0)
                          : 4 === a.length &&
                            (this[a[0]] = h
                              ? a[3].call(this, h.replace(a[1], a[2]))
                              : s)
                        : (this[a] = h || s);
              d += 2;
            }
          },
          tt = function (t, e) {
            for (var i in e)
              if (typeof e[i] === l && e[i].length > 0) {
                for (var r = 0; r < e[i].length; r++)
                  if (Y(e[i][r], t)) return "?" === i ? s : i;
              } else if (Y(e[i], t)) return "?" === i ? s : i;
            return e.hasOwnProperty("*") ? e["*"] : t;
          },
          te = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          ti = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [f, [c, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [c, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [c, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [c, O + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [f, [c, O + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [f, [c, O]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [f, [c, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [f, [c, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [c, f],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [f, [c, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [f, [c, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [c, "UC" + E]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [f, [c, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [f, [c, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [c, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [f, [c, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [f, [c, "Smart Lenovo " + E]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1 Secure " + E], f],
              [/\bfocus\/([\w\.]+)/i],
              [f, [c, M + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [f, [c, O + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [c, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [f, [c, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [f, [c, O + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [c, "MIUI" + K]],
              [/fxios\/([\w\.-]+)/i],
              [f, [c, M]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [f, [c, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1Browser"], f],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[c, /(.+)/, "$1" + K], f],
              [/samsungbrowser\/([\w\.]+)/i],
              [f, [c, I + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [f, [c, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[c, "Sogou Mobile"], f],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [c, f],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [c],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [f, c],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[c, G], f],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [c, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [c, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [f, [c, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [c, V + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[c, V + " WebView"], f],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [c, "Android " + E]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [c, f],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [f, [c, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [f, c],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                c,
                [
                  f,
                  tt,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [c, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[c, "Netscape"], f],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [c, f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [c, M + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /\b(links) \(([\w\.]+)/i,
              ],
              [c, [f, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [c, [f, /master.|lts./, ""]],
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [[v, "amd64"]],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [[v, "ia32"]],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [[v, "arm64"]],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [[v, "armhf"]],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [[v, "arm"]],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [[v, /ower/, "", Z]],
              [/ sun4\w[;\)]/i],
              [[v, "sparc"]],
              [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
              ],
              [[v, Z]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [m, I], [p, w]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [m, I], [p, y]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [m, S], [p, y]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [m, S], [p, w]],
              [/(macintosh);/i],
              [d, [m, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [m, N], [p, y]],
              [
                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
              ],
              [d, [m, D], [p, w]],
              [/honor([-\w ]+)[;\)]/i],
              [d, [m, D], [p, y]],
              [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
              ],
              [d, [m, R], [p, w]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [m, R], [p, y]],
              [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [m, $],
                [p, w],
              ],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
              ],
              [
                [d, /_/g, " "],
                [m, $],
                [p, y],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [m, U], [p, y]],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [d, [m, tt, { OnePlus: ["304", "403", "203"], "*": U }], [p, w]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [m, "Vivo"], [p, y]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [m, "Realme"], [p, y]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [m, L], [p, y]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [m, L], [p, w]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [m, "LG"], [p, w]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [m, "LG"], [p, y]],
              [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
              ],
              [d, [m, "Lenovo"], [p, w]],
              [/(nokia) (t[12][01])/i],
              [m, d, [p, w]],
              [
                /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                /nokia[-_ ]?(([-\w\. ]*))/i,
              ],
              [
                [d, /_/g, " "],
                [p, y],
                [m, "Nokia"],
              ],
              [/(pixel (c|tablet))\b/i],
              [d, [m, C], [p, w]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [m, C], [p, y]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [m, W], [p, y]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [m, W],
                [p, w],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [m, F], [p, y]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [m, T], [p, w]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [m, T],
                [p, y],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, m, [p, w]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [m, k], [p, y]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [m, A], [p, w]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [m, A], [p, y]],
              [/(nexus 9)/i],
              [d, [m, "HTC"], [p, w]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [m, [d, /_/g, " "], [p, y]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [m, "TCL"], [p, w]],
              [/(itel) ((\w+))/i],
              [
                [m, Z],
                d,
                [p, tt, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [m, "Acer"], [p, w]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [m, "Meizu"], [p, y]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [m, "Ulefone"], [p, y]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [m, "Energizer"], [p, y]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [m, "Cat"], [p, y]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [m, "Smartfren"], [p, y]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [m, "Nothing"], [p, y]],
              [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
              ],
              [d, [m, "Archos"], [p, w]],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [d, [m, "Archos"], [p, y]],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [m, d, [p, w]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [m, d, [p, y]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [m, d, [p, w]],
              [/(surface duo)/i],
              [d, [m, j], [p, w]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [m, "Fairphone"], [p, y]],
              [/(u304aa)/i],
              [d, [m, "AT&T"], [p, y]],
              [/\bsie-(\w*)/i],
              [d, [m, "Siemens"], [p, y]],
              [/\b(rct\w+) b/i],
              [d, [m, "RCA"], [p, w]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [m, "Dell"], [p, w]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [m, "Verizon"], [p, w]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [m, "Barnes & Noble"], [p, w]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [m, "NuVision"], [p, w]],
              [/\b(k88) b/i],
              [d, [m, "ZTE"], [p, w]],
              [/\b(nx\d{3}j) b/i],
              [d, [m, "ZTE"], [p, y]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [m, "Swiss"], [p, y]],
              [/\b(zur\d{3}) b/i],
              [d, [m, "Swiss"], [p, w]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [m, "Zeki"], [p, w]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[m, "Dragon Touch"], d, [p, w]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [m, "Insignia"], [p, w]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [m, "NextBook"], [p, w]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[m, "Voice"], d, [p, y]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[m, "LvTel"], d, [p, y]],
              [/\b(ph-1) /i],
              [d, [m, "Essential"], [p, y]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [m, "Envizen"], [p, w]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [m, "MachSpeed"], [p, w]],
              [/\btu_(1491) b/i],
              [d, [m, "Rotor"], [p, w]],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [d, [m, B], [p, w]],
              [/(sprint) (\w+)/i],
              [m, d, [p, y]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [m, j],
                [p, y],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [m, q], [p, w]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [m, q], [p, y]],
              [/smart-tv.+(samsung)/i],
              [m, [p, b]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [m, I],
                [p, b],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [m, "LG"],
                [p, b],
              ],
              [/(apple) ?tv/i],
              [m, [d, S + " TV"], [p, b]],
              [/crkey/i],
              [
                [d, V + "cast"],
                [m, C],
                [p, b],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [m, T], [p, b]],
              [/(shield \w+ tv)/i],
              [d, [m, B], [p, b]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [m, N], [p, b]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [m, W], [p, b]],
              [/(mi(tv|box)-?\w+) bui/i],
              [d, [m, $], [p, b]],
              [/Hbbtv.*(technisat) (.*);/i],
              [m, d, [p, b]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [m, Q],
                [d, Q],
                [p, b],
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [d, [p, b]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[p, b]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [m, d, [p, g]],
              [/droid.+; (shield)( bui|\))/i],
              [d, [m, B], [p, g]],
              [/(playstation \w+)/i],
              [d, [m, W], [p, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [m, j], [p, g]],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [d, [m, I], [p, x]],
              [
                /((pebble))app/i,
                /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
              ],
              [m, d, [p, x]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [d, [m, U], [p, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [m, S], [p, x]],
              [/(opwwe\d{3})/i],
              [d, [m, F], [p, x]],
              [/(moto 360)/i],
              [d, [m, L], [p, x]],
              [/(smartwatch 3)/i],
              [d, [m, W], [p, x]],
              [/(g watch r)/i],
              [d, [m, "LG"], [p, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [m, q], [p, x]],
              [/droid.+; (glass) \d/i],
              [d, [m, C], [p, x]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [m, d, [p, x]],
              [/; (quest( \d| pro)?)/i],
              [d, [m, G], [p, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [m, [p, P]],
              [/(aeobc)\b/i],
              [d, [m, T], [p, P]],
              [/(homepod).+mac os/i],
              [d, [m, S], [p, P]],
              [/windows iot/i],
              [[p, P]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [p, y]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [p, w]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[p, w]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[p, y]],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [d, [m, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [c, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [c, f],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [c, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [c, f],
              [/ladybird\//i],
              [[c, "LibWeb"]],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, c],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [c, f],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [c, [f, tt, te]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [f, tt, te],
                [c, "Windows"],
              ],
              [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [f, /_/g, "."],
                [c, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [c, _],
                [f, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [f, c],
              [/(ubuntu) ([\w\.]+) like android/i],
              [[c, /(.+)/, "$1 Touch"], f],
              [
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
              ],
              [c, f],
              [/\(bb(10);/i],
              [f, [c, k]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [f, [c, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [f, [c, M + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [c, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [f, [c, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [f, [c, V + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[c, z], f],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [c, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [[c, "Solaris"], f],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [c, f],
            ],
          },
          tr = function (t, e) {
            if ((typeof t === l && ((e = t), (t = s)), !(this instanceof tr)))
              return new tr(t, e).getResult();
            var i = typeof n !== a && n.navigator ? n.navigator : s,
              r = t || (i && i.userAgent ? i.userAgent : ""),
              g = i && i.userAgentData ? i.userAgentData : s,
              b = e ? X(ti, e) : ti,
              x = i && i.userAgent == r;
            return (
              (this.getBrowser = function () {
                var t,
                  e = {};
                return (
                  (e[c] = s),
                  (e[f] = s),
                  J.call(e, r, b.browser),
                  (e[h] =
                    typeof (t = e[f]) === u
                      ? t.replace(/[^\d\.]/g, "").split(".")[0]
                      : s),
                  x &&
                    i &&
                    i.brave &&
                    typeof i.brave.isBrave == o &&
                    (e[c] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var t = {};
                return (t[v] = s), J.call(t, r, b.cpu), t;
              }),
              (this.getDevice = function () {
                var t = {};
                return (
                  (t[m] = s),
                  (t[d] = s),
                  (t[p] = s),
                  J.call(t, r, b.device),
                  x && !t[p] && g && g.mobile && (t[p] = y),
                  x &&
                    "Macintosh" == t[d] &&
                    i &&
                    typeof i.standalone !== a &&
                    i.maxTouchPoints &&
                    i.maxTouchPoints > 2 &&
                    ((t[d] = "iPad"), (t[p] = w)),
                  t
                );
              }),
              (this.getEngine = function () {
                var t = {};
                return (t[c] = s), (t[f] = s), J.call(t, r, b.engine), t;
              }),
              (this.getOS = function () {
                var t = {};
                return (
                  (t[c] = s),
                  (t[f] = s),
                  J.call(t, r, b.os),
                  x &&
                    !t[c] &&
                    g &&
                    g.platform &&
                    "Unknown" != g.platform &&
                    (t[c] = g.platform
                      .replace(/chrome os/i, z)
                      .replace(/macos/i, _)),
                  t
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (t) {
                return (
                  (r = typeof t === u && t.length > 500 ? Q(t, 500) : t), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (tr.VERSION = "1.0.41"),
          (tr.BROWSER = H([c, f, h])),
          (tr.CPU = H([v])),
          (tr.DEVICE = H([d, m, p, g, y, b, w, x, P])),
          (tr.ENGINE = tr.OS = H([c, f])),
          typeof e !== a
            ? (t.exports && (e = t.exports = tr), (e.UAParser = tr))
            : i.amdO
            ? s ===
                (r = function () {
                  return tr;
                }.call(e, i, e, t)) || (t.exports = r)
            : typeof n !== a && (n.UAParser = tr);
        var tn = typeof n !== a && (n.jQuery || n.Zepto);
        if (tn && !tn.ua) {
          var ts = new tr();
          (tn.ua = ts.getResult()),
            (tn.ua.get = function () {
              return ts.getUA();
            }),
            (tn.ua.set = function (t) {
              ts.setUA(t);
              var e = ts.getResult();
              for (var i in e) tn.ua[i] = e[i];
            });
        }
      })("object" == typeof window ? window : this);
    },
    15446: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => l });
      var r = i(74369),
        n = i(27137),
        s = i(5295),
        o = i(28798);
      let a = { ...n.ai, transform: (t) => Math.round((0, r.q)(0, 255, t)) },
        l = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            a.transform(t) +
            ", " +
            a.transform(e) +
            ", " +
            a.transform(i) +
            ", " +
            (0, s.a)(n.X4.transform(r)) +
            ")",
        };
    },
    16976: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => r });
      let r = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    17225: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => r });
      let r = (t) => /^0[^.\s]+$/u.test(t);
    },
    18344: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => h });
      var r = i(78041),
        n = i(98763),
        s = i(55888);
      function o(t, e) {
        [...e].reverse().forEach((i) => {
          let r = t.getVariant(i);
          r && (0, n.U)(t, r),
            t.variantChildren &&
              t.variantChildren.forEach((t) => {
                o(t, e);
              });
        });
      }
      function a() {
        let t = !1,
          e = new Set(),
          i = {
            subscribe: (t) => (e.add(t), () => void e.delete(t)),
            start(i, n) {
              (0, r.V)(
                t,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let o = [];
              return (
                e.forEach((t) => {
                  o.push((0, s._)(t, i, { transitionOverride: n }));
                }),
                Promise.all(o)
              );
            },
            set: (i) => (
              (0, r.V)(
                t,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              e.forEach((t) => {
                var e, r;
                (e = t),
                  Array.isArray((r = i))
                    ? o(e, r)
                    : "string" == typeof r
                    ? o(e, [r])
                    : (0, n.U)(e, r);
              })
            ),
            stop() {
              e.forEach((t) => {
                t.values.forEach((t) => t.stop());
              });
            },
            mount: () => (
              (t = !0),
              () => {
                (t = !1), i.stop();
              }
            ),
          };
        return i;
      }
      var l = i(94416),
        u = i(86553);
      function h() {
        let t = (0, l.M)(a);
        return (0, u.E)(t.mount, []), t;
      }
    },
    20641: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => n, p: () => o });
      let r = (t) => (e) => "string" == typeof e && e.startsWith(t),
        n = r("--"),
        s = r("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    26554: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => a });
      var r = i(27137),
        n = i(65220),
        s = i(5295),
        o = i(28798);
      let a = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          n.KN.transform((0, s.a)(e)) +
          ", " +
          n.KN.transform((0, s.a)(i)) +
          ", " +
          (0, s.a)(r.X4.transform(o)) +
          ")",
      };
    },
    27137: (t, e, i) => {
      "use strict";
      i.d(e, { X4: () => s, ai: () => n, hs: () => o });
      var r = i(74369);
      let n = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...n, transform: (t) => (0, r.q)(0, 1, t) },
        o = { ...n, default: 1 };
    },
    27290: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => n, f: () => r });
      let r = (t) => 1e3 * t,
        n = (t) => t / 1e3;
    },
    28798: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => s, q: () => o });
      var r = i(8640);
      let n =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (i) =>
          !!(
            ("string" == typeof i && n.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        o = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [s, o, a, l] = n.match(r.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    29785: (t, e, i) => {
      "use strict";
      i.d(e, { J: () => o });
      var r = i(84017),
        n = i(2221),
        s = i(49930);
      function o(t, e) {
        let i = (0, s.D)(t);
        return (
          i !== n.p && (i = r.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    33577: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => r });
      let r = "undefined" != typeof window;
    },
    34045: (t, e, i) => {
      "use strict";
      i.d(e, { E4: () => o, Hr: () => c, W9: () => d });
      var r = i(27137),
        n = i(65220),
        s = i(12434);
      let o = (t) => t === r.ai || t === n.px,
        a = (t, e) => parseFloat(t.split(", ")[e]),
        l =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n) return a(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? a(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        h = s.U.filter((t) => !u.has(t));
      function d(t) {
        let e = [];
        return (
          h.forEach((i) => {
            let r = t.getValue(i);
            void 0 !== r &&
              (e.push([i, r.get()]), r.set(+!!i.startsWith("scale")));
          }),
          e
        );
      }
      let c = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      (c.translateX = c.x), (c.translateY = c.y);
    },
    34100: (t, e, i) => {
      "use strict";
      function r(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function n(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, o] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, { a: () => n });
    },
    35850: (t, e, i) => {
      "use strict";
      i.d(e, { F: () => n });
      let r = (t, e) => (i) => e(t(i)),
        n = (...t) => t.reduce(r);
    },
    36688: (t, e, i) => {
      "use strict";
      i.d(e, { w: () => r });
      let r = (t) => (e) => e.test(t);
    },
    41064: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => r });
      let r = (t, e, i) => t + (e - t) * i;
    },
    41089: (t, e, i) => {
      "use strict";
      i.d(e, { p: () => r });
      let r = (t) => Array.isArray(t);
    },
    41515: (t, e, i) => {
      "use strict";
      i.d(e, { P: () => n });
      var r = i(61729);
      function n(t) {
        return t.props[r.n];
      }
    },
    44493: (t, e, i) => {
      "use strict";
      i.d(e, { K: () => f });
      var r = i(17225),
        n = i(9725),
        s = i(84017),
        o = i(29785);
      let a = new Set(["auto", "none", "0"]);
      var l = i(76874),
        u = i(78041),
        h = i(72069),
        d = i(20641);
      let c = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var p = i(34045),
        m = i(70806);
      class f extends l.h {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && ((r = r.trim()), (0, d.p)(r))) {
              let n = (function t(e, i, r = 1) {
                (0, u.V)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (t) {
                  let e = c.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return (0, h.i)(t) ? parseFloat(t) : t;
                }
                return (0, d.p)(s) ? t(s, i, r + 1) : s;
              })(r, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !n.$.has(i) || 2 !== t.length))
            return;
          let [r, s] = t,
            o = (0, m.n)(r),
            a = (0, m.n)(s);
          if (o !== a)
            if ((0, p.E4)(o) && (0, p.E4)(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || (0, r.$)(n)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                "string" == typeof e &&
                  !a.has(e) &&
                  (0, s.V)(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = (0, o.J)(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = p.Hr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = p.Hr[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null == (t = this.removedTransforms) ? void 0 : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    46125: (t, e, i) => {
      "use strict";
      i.d(e, { u: () => n });
      var r = i(15446);
      let n = {
        test: (0, i(28798).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            r = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (r += r),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(r, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: r.B.transform,
      };
    },
    49568: (t, e, i) => {
      "use strict";
      i.d(e, { OQ: () => u });
      var r = i(8871),
        n = i(72863),
        s = i(66280),
        o = i(97929);
      let a = { current: void 0 };
      class l {
        constructor(t, e = {}) {
          (this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = r.k.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = r.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return a.current && a.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function u(t, e) {
        return new l(t, e);
      }
    },
    49930: (t, e, i) => {
      "use strict";
      i.d(e, { D: () => o });
      var r = i(67154),
        n = i(2221);
      let s = {
          ...i(58476).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: n.p,
          WebkitFilter: n.p,
        },
        o = (t) => s[t];
    },
    55888: (t, e, i) => {
      "use strict";
      i.d(e, { _: () => m });
      var r = i(12096),
        n = i(91037),
        s = i(9725),
        o = i(98763),
        a = i(76258),
        l = i(41515),
        u = i(64345),
        h = i(97929);
      function d(t, e, { delay: i = 0, transitionOverride: r, type: c } = {}) {
        var p;
        let {
          transition: m = t.getDefaultTransition(),
          transitionEnd: f,
          ...v
        } = e;
        r && (m = r);
        let g = [],
          y = c && t.animationState && t.animationState.getState()[c];
        for (let e in v) {
          let r = t.getValue(e, null != (p = t.latestValues[e]) ? p : null),
            o = v[e];
          if (
            void 0 === o ||
            (y &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(y, e))
          )
            continue;
          let d = { delay: i, ...(0, n.rU)(m || {}, e) },
            c = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, l.P)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, h.Gt);
              null !== t && ((d.startTime = t), (c = !0));
            }
          }
          (0, a.g)(t, e),
            r.start(
              (0, u.f)(
                e,
                r,
                o,
                t.shouldReduceMotion && s.$.has(e) ? { type: !1 } : d,
                t,
                c
              )
            );
          let f = r.animation;
          f && g.push(f);
        }
        return (
          f &&
            Promise.all(g).then(() => {
              h.Gt.update(() => {
                f && (0, o.U)(t, f);
              });
            }),
          g
        );
      }
      function c(t, e, i = {}) {
        var n;
        let s = (0, r.K)(
            t,
            e,
            "exit" === i.type
              ? null == (n = t.presenceContext)
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (o = i.transitionOverride);
        let a = s ? () => Promise.all(d(t, s, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              c(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + r, s, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function m(t, e, i = {}) {
        let n;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          n = Promise.all(e.map((e) => c(t, e, i)));
        else if ("string" == typeof e) n = c(t, e, i);
        else {
          let s = "function" == typeof e ? (0, r.K)(t, e, i.custom) : e;
          n = Promise.all(d(t, s, i));
        }
        return n.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    58476: (t, e, i) => {
      "use strict";
      i.d(e, { W: () => l });
      var r = i(27137),
        n = i(65220);
      let s = {
          borderWidth: n.px,
          borderTopWidth: n.px,
          borderRightWidth: n.px,
          borderBottomWidth: n.px,
          borderLeftWidth: n.px,
          borderRadius: n.px,
          radius: n.px,
          borderTopLeftRadius: n.px,
          borderTopRightRadius: n.px,
          borderBottomRightRadius: n.px,
          borderBottomLeftRadius: n.px,
          width: n.px,
          maxWidth: n.px,
          height: n.px,
          maxHeight: n.px,
          top: n.px,
          right: n.px,
          bottom: n.px,
          left: n.px,
          padding: n.px,
          paddingTop: n.px,
          paddingRight: n.px,
          paddingBottom: n.px,
          paddingLeft: n.px,
          margin: n.px,
          marginTop: n.px,
          marginRight: n.px,
          marginBottom: n.px,
          marginLeft: n.px,
          backgroundPositionX: n.px,
          backgroundPositionY: n.px,
        },
        o = {
          rotate: n.uj,
          rotateX: n.uj,
          rotateY: n.uj,
          rotateZ: n.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: n.uj,
          skewX: n.uj,
          skewY: n.uj,
          distance: n.px,
          translateX: n.px,
          translateY: n.px,
          translateZ: n.px,
          x: n.px,
          y: n.px,
          z: n.px,
          perspective: n.px,
          transformPerspective: n.px,
          opacity: r.X4,
          originX: n.gQ,
          originY: n.gQ,
          originZ: n.px,
        },
        a = { ...r.ai, transform: Math.round },
        l = {
          ...s,
          ...o,
          zIndex: a,
          size: n.px,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: a,
        };
    },
    60178: (t, e, i) => {
      "use strict";
      function r(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      i.d(e, { p: () => r });
    },
    61729: (t, e, i) => {
      "use strict";
      i.d(e, { n: () => r });
      let r = "data-" + (0, i(92287).I)("framerAppearId");
    },
    64345: (t, e, i) => {
      "use strict";
      i.d(e, { f: () => tP });
      var r = i(91037),
        n = i(27290),
        s = i(97929),
        o = i(95221);
      let a = { current: !1 };
      var l = i(6500);
      let u = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function h(t, e, i, r) {
        return t === e && i === r
          ? l.l
          : (n) =>
              0 === n || 1 === n
                ? n
                : u(
                    (function (t, e, i, r, n) {
                      let s,
                        o,
                        a = 0;
                      do
                        (s = u((o = e + (i - e) / 2), r, n) - t) > 0
                          ? (i = o)
                          : (e = o);
                      while (Math.abs(s) > 1e-7 && ++a < 12);
                      return o;
                    })(n, 0, 1, t, i),
                    e,
                    r
                  );
      }
      var d = i(16976),
        c = i(74043);
      let p = h(0.33, 1.53, 0.69, 0.99),
        m = (0, c.G)(p),
        f = (0, d.V)(m),
        v = (t) =>
          (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      var g = i(64885),
        y = i(44493),
        w = i(8871),
        b = i(76874),
        x = i(78041),
        P = i(84017);
      let T = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (P.f.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        S = (t) => null !== t;
      function A(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(S),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      class k {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = w.k.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, b.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = w.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: s,
            delay: o,
            onComplete: l,
            onUpdate: u,
            isGenerator: h,
          } = this.options;
          if (
            !h &&
            !(function (t, e, i, n) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                a = T(s, e),
                l = T(o, e);
              return (
                (0, x.$)(
                  a === l,
                  `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!a &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || (0, r.WH)(i)) && n))
              );
            })(t, i, n, s)
          )
            if (a.current || !o) {
              u && u(A(t, this.options, e)),
                l && l(),
                this.resolveFinishedPromise();
              return;
            } else this.options.duration = 0;
          let d = this.initPlayback(t, e);
          !1 !== d &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...d }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var E = i(74369),
        V = i(41064);
      function M(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var C = i(46125),
        D = i(15446),
        R = i(26554);
      function j(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let L = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        B = [C.u, D.B, R.V];
      function F(t) {
        let e = B.find((e) => e.test(t));
        if (
          ((0, x.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === R.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = M(a, r, t + 1 / 3)),
                  (s = M(a, r, t)),
                  (o = M(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let O = (t, e) => {
        let i = F(t),
          r = F(e);
        if (!i || !r) return j(t, e);
        let n = { ...i };
        return (t) => (
          (n.red = L(i.red, r.red, t)),
          (n.green = L(i.green, r.green, t)),
          (n.blue = L(i.blue, r.blue, t)),
          (n.alpha = (0, V.k)(i.alpha, r.alpha, t)),
          D.B.transform(n)
        );
      };
      var U = i(35850),
        I = i(67154),
        N = i(20641);
      let W = new Set(["none", "hidden"]);
      function $(t, e) {
        return (i) => (0, V.k)(t, e, i);
      }
      function q(t) {
        return "number" == typeof t
          ? $
          : "string" == typeof t
          ? (0, N.p)(t)
            ? j
            : I.y.test(t)
            ? O
            : _
          : Array.isArray(t)
          ? G
          : "object" == typeof t
          ? I.y.test(t)
            ? O
            : z
          : j;
      }
      function G(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => q(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function z(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = q(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let _ = (t, e) => {
        let i = P.f.createTransformer(e),
          r = (0, P.V)(t),
          n = (0, P.V)(e);
        return r.indexes.var.length === n.indexes.var.length &&
          r.indexes.color.length === n.indexes.color.length &&
          r.indexes.number.length >= n.indexes.number.length
          ? (W.has(t) && !n.values.length) || (W.has(e) && !r.values.length)
            ? (function (t, e) {
                return W.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, U.F)(
                G(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][n[o]],
                        l = null != (i = t.values[a]) ? i : 0;
                      (r[s] = l), n[o]++;
                    }
                    return r;
                  })(r, n),
                  n.values
                ),
                i
              )
          : ((0, x.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            j(t, e));
      };
      function K(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, V.k)(t, e, i)
          : q(t)(t, e);
      }
      var X = i(66280);
      function H(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, X.f)(i - t(r), e - r);
      }
      let Y = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function Z(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let Q = ["duration", "bounce"],
        J = ["stiffness", "damping", "mass"];
      function tt(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function te(t = Y.visualDuration, e = Y.bounce) {
        let i,
          s =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: o, restDelta: a } = s,
          l = s.keyframes[0],
          u = s.keyframes[s.keyframes.length - 1],
          h = { done: !1, value: l },
          {
            stiffness: d,
            damping: c,
            mass: p,
            duration: m,
            velocity: f,
            isResolvedFromDuration: v,
          } = (function (t) {
            let e = {
              velocity: Y.velocity,
              stiffness: Y.stiffness,
              damping: Y.damping,
              mass: Y.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!tt(t, J) && tt(t, Q))
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  n = 2 * (0, E.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: Y.mass, stiffness: r, damping: n };
              } else {
                let i = (function ({
                  duration: t = Y.duration,
                  bounce: e = Y.bounce,
                  velocity: i = Y.velocity,
                  mass: r = Y.mass,
                }) {
                  let s, o;
                  (0, x.$)(
                    t <= (0, n.f)(Y.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let a = 1 - e;
                  (a = (0, E.q)(Y.minDamping, Y.maxDamping, a)),
                    (t = (0, E.q)(Y.minDuration, Y.maxDuration, (0, n.X)(t))),
                    a < 1
                      ? ((s = (e) => {
                          let r = e * a,
                            n = r * t;
                          return 0.001 - ((r - i) / Z(e, a)) * Math.exp(-n);
                        }),
                        (o = (e) => {
                          let r = e * a * t,
                            n = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-r),
                            l = Z(Math.pow(e, 2), a);
                          return (
                            ((r * i + i - n) *
                              o *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let l = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(s, o, 5 / t);
                  if (((t = (0, n.f)(t)), isNaN(l)))
                    return {
                      stiffness: Y.stiffness,
                      damping: Y.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: Y.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...s, velocity: -(0, n.X)(s.velocity || 0) }),
          g = f || 0,
          y = c / (2 * Math.sqrt(d * p)),
          w = u - l,
          b = (0, n.X)(Math.sqrt(d / p)),
          P = 5 > Math.abs(w);
        if (
          (o || (o = P ? Y.restSpeed.granular : Y.restSpeed.default),
          a || (a = P ? Y.restDelta.granular : Y.restDelta.default),
          y < 1)
        ) {
          let t = Z(b, y);
          i = (e) =>
            u -
            Math.exp(-y * b * e) *
              (((g + y * b * w) / t) * Math.sin(t * e) + w * Math.cos(t * e));
        } else if (1 === y)
          i = (t) => u - Math.exp(-b * t) * (w + (g + b * w) * t);
        else {
          let t = b * Math.sqrt(y * y - 1);
          i = (e) => {
            let i = Math.exp(-y * b * e),
              r = Math.min(t * e, 300);
            return (
              u -
              (i * ((g + y * b * w) * Math.sinh(r) + t * w * Math.cosh(r))) / t
            );
          };
        }
        let T = {
          calculatedDuration: (v && m) || null,
          next: (t) => {
            let e = i(t);
            if (v) h.done = t >= m;
            else {
              let r = 0;
              y < 1 && (r = 0 === t ? (0, n.f)(g) : H(i, t, e));
              let s = Math.abs(u - e) <= a;
              h.done = Math.abs(r) <= o && s;
            }
            return (h.value = h.done ? u : e), h;
          },
          toString: () => {
            let t = Math.min((0, r.tu)(T), r.YE),
              e = (0, r.KZ)((e) => T.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return T;
      }
      function ti({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d,
          c,
          p = t[0],
          m = { done: !1, value: p },
          f = i * e,
          v = p + f,
          g = void 0 === o ? v : o(v);
        g !== v && (f = g - p);
        let y = (t) => -f * Math.exp(-t / r),
          w = (t) => g + y(t),
          b = (t) => {
            let e = y(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? g : i);
          },
          x = (t) => {
            let e;
            if (
              ((e = m.value),
              (void 0 !== a && e < a) || (void 0 !== l && e > l))
            ) {
              var i;
              (d = t),
                (c = te({
                  keyframes: [
                    m.value,
                    ((i = m.value),
                    void 0 === a
                      ? l
                      : void 0 === l || Math.abs(a - i) < Math.abs(l - i)
                      ? a
                      : l),
                  ],
                  velocity: H(w, t, m.value),
                  damping: n,
                  stiffness: s,
                  restDelta: u,
                  restSpeed: h,
                }));
            }
          };
        return (
          x(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), b(t), x(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || b(t), m);
            },
          }
        );
      }
      let tr = h(0.42, 0, 1, 1),
        tn = h(0, 0, 0.58, 1),
        ts = h(0.42, 0, 0.58, 1),
        to = {
          linear: l.l,
          easeIn: tr,
          easeInOut: ts,
          easeOut: tn,
          circIn: g.po,
          circInOut: g.tn,
          circOut: g.yT,
          backIn: m,
          backInOut: f,
          backOut: p,
          anticipate: v,
        },
        ta = (t) => {
          if ((0, r.DW)(t)) {
            (0, x.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return h(e, i, r, n);
          }
          return "string" == typeof t
            ? ((0, x.V)(void 0 !== to[t], `Invalid easing type '${t}'`), to[t])
            : t;
        };
      var tl = i(91225);
      function tu({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        var n;
        let s = Array.isArray(r) && "number" != typeof r[0] ? r.map(ta) : ta(r),
          o = { done: !1, value: e[0] },
          a = (function (t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
            let s = t.length;
            if (
              ((0, x.V)(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, i) {
                let r = [],
                  n = i || K,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = n(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || l.l : e;
                    s = (0, U.F)(t, s);
                  }
                  r.push(s);
                }
                return r;
              })(e, r, n),
              u = a.length,
              h = (i) => {
                if (o && i < t[0]) return e[0];
                let r = 0;
                if (u > 1) for (; r < t.length - 2 && !(i < t[r + 1]); r++);
                let n = (0, tl.q)(t[r], t[r + 1], i);
                return a[r](n);
              };
            return i ? (e) => h((0, E.q)(t[0], t[s - 1], e)) : h;
          })(
            ((n =
              i && i.length === e.length
                ? i
                : (function (t) {
                    let e = [0];
                    return (
                      !(function (t, e) {
                        let i = t[t.length - 1];
                        for (let r = 1; r <= e; r++) {
                          let n = (0, tl.q)(0, e, r);
                          t.push((0, V.k)(i, 1, n));
                        }
                      })(e, t.length - 1),
                      e
                    );
                  })(e)),
            n.map((e) => e * t)),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || ts).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = a(e)), (o.done = e >= t), o),
        };
      }
      let th = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => s.Gt.update(e, !0),
            stop: () => (0, s.WG)(e),
            now: () => (s.uv.isProcessing ? s.uv.timestamp : w.k.now()),
          };
        },
        td = { decay: ti, inertia: ti, tween: tu, keyframes: tu, spring: te },
        tc = (t) => t / 100;
      class tp extends k {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: r,
              keyframes: n,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || b.h,
            o = (t, e) => this.onKeyframesResolved(t, e);
          (this.resolver = new s(n, o, e, i, r)),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e,
            i,
            {
              type: n = "keyframes",
              repeat: s = 0,
              repeatDelay: o = 0,
              repeatType: a,
              velocity: l = 0,
            } = this.options,
            u = (0, r.WH)(n) ? n : td[n] || tu;
          u !== tu &&
            "number" != typeof t[0] &&
            ((e = (0, U.F)(tc, K(t[0], t[1]))), (t = [0, 100]));
          let h = u({ ...this.options, keyframes: t });
          "mirror" === a &&
            (i = u({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -l,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (0, r.tu)(h));
          let { calculatedDuration: d } = h,
            c = d + o;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: d,
            resolvedDuration: c,
            totalDuration: c * (s + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            w = n;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (w = s)),
              (y = (0, E.q)(0, 1, i) * h);
          }
          let b = g ? { done: !1, value: a[0] } : w.next(y);
          o && (b.value = o(b.value));
          let { done: x } = b;
          g ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return (
            P && void 0 !== r && (b.value = A(a, this.options, r)),
            f && f(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, n.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, n.f)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = th, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime = null != (t = this.currentTime) ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let tm = new Set(["opacity", "clipPath", "filter", "transform"]),
        tf = (0, i(60178).p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tv = { anticipate: v, backInOut: f, circInOut: g.tn };
      class tg extends k {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: n,
          } = this.options;
          (this.resolver = new y.K(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: n = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ("string" == typeof o && (0, r.nL)() && o in tv && (o = tv[o]),
            (i = this.options),
            (0, r.WH)(i.type) || "spring" === i.type || !(0, r.yL)(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tp({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {}
          ) {
            let h = { [e]: i };
            u && (h.offset = u);
            let d = (0, r.TU)(l, s);
            return (
              Array.isArray(d) && (h.easing = d),
              t.animate(h, {
                delay: n,
                duration: s,
                easing: Array.isArray(d) ? "linear" : d,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: s,
            ease: o,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, r.vG)(d, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(A(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: n,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.f)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return l.l;
            let { animation: i } = e;
            (0, r.vG)(i, t);
          } else this.pendingTimeline = t;
          return l.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              d = new tp({
                ...h,
                keyframes: i,
                duration: r,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              c = (0, n.f)(this.time);
            t.setWithVelocity(d.sample(c - 10).value, d.sample(c).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            tf() &&
            i &&
            tm.has(i) &&
            !a &&
            !l &&
            !r &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var ty = i(12434);
      let tw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tb = { type: "keyframes", duration: 0.8 },
        tx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tP =
          (t, e, i, l = {}, u, h) =>
          (d) => {
            let c = (0, r.rU)(l, t) || {},
              p = c.delay || l.delay || 0,
              { elapsed: m = 0 } = l;
            m -= (0, n.f)(p);
            let f = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...c,
              delay: -m,
              onUpdate: (t) => {
                e.set(t), c.onUpdate && c.onUpdate(t);
              },
              onComplete: () => {
                d(), c.onComplete && c.onComplete();
              },
              name: t,
              motionValue: e,
              element: h ? void 0 : u,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(c) &&
              (f = {
                ...f,
                ...((t, { keyframes: e }) =>
                  e.length > 2
                    ? tb
                    : ty.f.has(t)
                    ? t.startsWith("scale")
                      ? {
                          type: "spring",
                          stiffness: 550,
                          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                          restSpeed: 10,
                        }
                      : tw
                    : tx)(t, f),
              }),
              f.duration && (f.duration = (0, n.f)(f.duration)),
              f.repeatDelay && (f.repeatDelay = (0, n.f)(f.repeatDelay)),
              void 0 !== f.from && (f.keyframes[0] = f.from);
            let v = !1;
            if (
              ((!1 !== f.type && (0 !== f.duration || f.repeatDelay)) ||
                ((f.duration = 0), 0 === f.delay && (v = !0)),
              (a.current || o.W.skipAnimations) &&
                ((v = !0), (f.duration = 0), (f.delay = 0)),
              v && !h && void 0 !== e.get())
            ) {
              let t = A(f.keyframes, c);
              if (void 0 !== t)
                return (
                  s.Gt.update(() => {
                    f.onUpdate(t), f.onComplete();
                  }),
                  new r.P6([])
                );
            }
            return !h && tg.supports(f) ? new tg(f) : new tp(f);
          };
    },
    64885: (t, e, i) => {
      "use strict";
      i.d(e, { po: () => s, tn: () => a, yT: () => o });
      var r = i(16976),
        n = i(74043);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, n.G)(s),
        a = (0, r.V)(s);
    },
    65220: (t, e, i) => {
      "use strict";
      i.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => o,
        uj: () => n,
        vh: () => a,
        vw: () => l,
      });
      let r = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        n = r("deg"),
        s = r("%"),
        o = r("px"),
        a = r("vh"),
        l = r("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    66280: (t, e, i) => {
      "use strict";
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, { f: () => r });
    },
    67154: (t, e, i) => {
      "use strict";
      i.d(e, { y: () => o });
      var r = i(46125),
        n = i(26554),
        s = i(15446);
      let o = {
        test: (t) => s.B.test(t) || r.u.test(t) || n.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : n.V.test(t)
            ? n.V.parse(t)
            : r.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.B.transform(t)
            : n.V.transform(t),
      };
    },
    70806: (t, e, i) => {
      "use strict";
      i.d(e, { T: () => o, n: () => a });
      var r = i(27137),
        n = i(65220),
        s = i(36688);
      let o = [
          r.ai,
          n.px,
          n.KN,
          n.uj,
          n.vw,
          n.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.w)(t));
    },
    72069: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => r });
      let r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    72863: (t, e, i) => {
      "use strict";
      i.d(e, { v: () => n });
      var r = i(807);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.Kq)(this.subscriptions, t),
            () => (0, r.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    74043: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => r });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    74369: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => r });
      let r = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    74570: (t, e, i) => {
      "use strict";
      i.d(e, { W: () => o });
      var r = i(12115),
        n = i(91037);
      let s = { some: 0, all: 1 };
      function o(t, { root: e, margin: i, amount: a, once: l = !1 } = {}) {
        let [u, h] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!t.current || (l && u)) return;
            let r = { root: (e && e.current) || void 0, margin: i, amount: a };
            return (function (
              t,
              e,
              { root: i, margin: r, amount: o = "some" } = {}
            ) {
              let a = (0, n.KJ)(t),
                l = new WeakMap(),
                u = new IntersectionObserver(
                  (t) => {
                    t.forEach((t) => {
                      let i = l.get(t.target);
                      if (!!i !== t.isIntersecting)
                        if (t.isIntersecting) {
                          let i = e(t);
                          "function" == typeof i
                            ? l.set(t.target, i)
                            : u.unobserve(t.target);
                        } else
                          "function" == typeof i && (i(t), l.delete(t.target));
                    });
                  },
                  {
                    root: i,
                    rootMargin: r,
                    threshold: "number" == typeof o ? o : s[o],
                  }
                );
              return a.forEach((t) => u.observe(t)), () => u.disconnect();
            })(t.current, () => (h(!0), l ? void 0 : () => h(!1)), r);
          }, [e, t, i, l, a]),
          u
        );
      }
    },
    76258: (t, e, i) => {
      "use strict";
      i.d(e, { g: () => n });
      var r = i(77481);
      function n(t, e) {
        let i = t.getValue("willChange");
        if ((0, r.S)(i) && i.add) return i.add(e);
      }
    },
    76874: (t, e, i) => {
      "use strict";
      i.d(e, { h: () => d, q: () => h });
      var r = i(34045),
        n = i(97929);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, r.W9)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null == (r = t.getValue(e)) || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), n.Gt.read(u), n.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n])
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    77481: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => r });
      let r = (t) => !!(t && t.getVelocity);
    },
    78041: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => n, V: () => s });
      var r = i(6500);
      let n = r.l,
        s = r.l;
    },
    83531: (t, e, i) => {
      "use strict";
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, { P: () => i0 });
      var n,
        s,
        o = i(41089);
      function a(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function l(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      var u = i(12096);
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...h];
      var c = i(55888);
      let p = d.length,
        m = [...h].reverse(),
        f = h.length;
      function v(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function g() {
        return {
          animate: v(!0),
          whileInView: v(),
          whileHover: v(),
          whileTap: v(),
          whileDrag: v(),
          whileFocus: v(),
          exit: v(),
        };
      }
      class y {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class w extends y {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) => (0, c._)(t, e, i))
                    ),
                  i = g(),
                  n = !0,
                  s = (e) => (i, r) => {
                    var n;
                    let s = (0, u.K)(
                      t,
                      r,
                      "exit" === e
                        ? null == (n = t.presenceContext)
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < p; t++) {
                          let r = d[t],
                            n = e.props[r];
                          (l(n) || !1 === n) && (i[r] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    v = [],
                    g = new Set(),
                    y = {},
                    w = 1 / 0;
                  for (let e = 0; e < f; e++) {
                    var b, x;
                    let d = m[e],
                      p = i[d],
                      f = void 0 !== h[d] ? h[d] : c[d],
                      P = l(f),
                      T = d === u ? p.isActive : null;
                    !1 === T && (w = e);
                    let S = f === c[d] && f !== h[d] && P;
                    if (
                      (S && n && t.manuallyAnimateOnMount && (S = !1),
                      (p.protectedKeys = { ...y }),
                      (!p.isActive && null === T) ||
                        (!f && !p.prevProp) ||
                        r(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let A =
                        ((b = p.prevProp),
                        "string" == typeof (x = f)
                          ? x !== b
                          : !!Array.isArray(x) && !a(x, b)),
                      k =
                        A || (d === u && p.isActive && !S && P) || (e > w && P),
                      E = !1,
                      V = Array.isArray(f) ? f : [f],
                      M = V.reduce(s(d), {});
                    !1 === T && (M = {});
                    let { prevResolvedValues: C = {} } = p,
                      D = { ...C, ...M },
                      R = (e) => {
                        (k = !0),
                          g.has(e) && ((E = !0), g.delete(e)),
                          (p.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in D) {
                      let e = M[t],
                        i = C[t];
                      if (!y.hasOwnProperty(t))
                        ((0, o.p)(e) && (0, o.p)(i) ? a(e, i) : e === i)
                          ? void 0 !== e && g.has(t)
                            ? R(t)
                            : (p.protectedKeys[t] = !0)
                          : null != e
                          ? R(t)
                          : g.add(t);
                    }
                    (p.prevProp = f),
                      (p.prevResolvedValues = M),
                      p.isActive && (y = { ...y, ...M }),
                      n && t.blockInitialAnimation && (k = !1);
                    let j = !(S && A) || E;
                    k &&
                      j &&
                      v.push(
                        ...V.map((t) => ({
                          animation: t,
                          options: { type: d },
                        }))
                      );
                  }
                  if (g.size) {
                    let e = {};
                    g.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      v.push({ animation: e });
                  }
                  let P = !!v.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (P = !1),
                    (n = !1),
                    P ? e(v) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null == (n = t.variantChildren) ||
                      n.forEach((t) => {
                        var i;
                        return null == (i = t.animationState)
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let s = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = g()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          r(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null == (t = this.unmountControls) || t.call(this);
        }
      }
      let b = 0;
      class x extends y {
        constructor() {
          super(...arguments), (this.id = b++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var P = i(6500),
        T = i(78041),
        S = i(91037),
        A = i(27290);
      function k(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      function E(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function V(t, e, i, r) {
        return k(t, e, (t) => (0, S.Mc)(t) && i(t, E(t)), r);
      }
      let M = (t, e) => Math.abs(t - e);
      var C = i(35850),
        D = i(97929);
      class R {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = B(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(M(t.x, e.x) ** 2 + M(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = D.uv;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = j(e, this.transformPagePoint)),
                D.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = B(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : j(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), r && r(t, s);
            }),
            !(0, S.Mc)(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window);
          let s = j(E(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = D.uv;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, B(s, this.history)),
            (this.removeListeners = (0, C.F)(
              V(this.contextWindow, "pointermove", this.handlePointerMove),
              V(this.contextWindow, "pointerup", this.handlePointerUp),
              V(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, D.WG)(this.updatePoint);
        }
      }
      function j(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function L(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function B({ point: t }, e) {
        return {
          point: t,
          delta: L(t, F(e)),
          offset: L(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = F(t);
            for (
              ;
              i >= 0 &&
              ((r = t[i]), !(n.timestamp - r.timestamp > (0, A.f)(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = (0, A.X)(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function F(t) {
        return t[t.length - 1];
      }
      function O(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var U = i(91225),
        I = i(41064);
      function N(t) {
        return t.max - t.min;
      }
      function W(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = (0, I.k)(e.min, e.max, t.origin)),
          (t.scale = N(i) / N(e)),
          (t.translate = (0, I.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function $(t, e, i, r) {
        W(t.x, e.x, i.x, r ? r.originX : void 0),
          W(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function q(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + N(e));
      }
      function G(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + N(e));
      }
      function z(t, e, i) {
        G(t.x, e.x, i.x), G(t.y, e.y, i.y);
      }
      var _ = i(74369);
      function K(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function X(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function H(t, e, i) {
        return { min: Y(t, e), max: Y(t, i) };
      }
      function Y(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let Z = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        Q = () => ({ x: Z(), y: Z() }),
        J = () => ({ min: 0, max: 0 }),
        tt = () => ({ x: J(), y: J() });
      function te(t) {
        return [t("x"), t("y")];
      }
      function ti({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function tr(t) {
        return void 0 === t || 1 === t;
      }
      function tn({ scale: t, scaleX: e, scaleY: i }) {
        return !tr(t) || !tr(e) || !tr(i);
      }
      function ts(t) {
        return (
          tn(t) ||
          to(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function to(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function ta(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function tl(t, e = 0, i = 1, r, n) {
        (t.min = ta(t.min, e, i, r, n)), (t.max = ta(t.max, e, i, r, n));
      }
      function tu(t, { x: e, y: i }) {
        tl(t.x, e.translate, e.scale, e.originPoint),
          tl(t.y, i.translate, i.scale, i.originPoint);
      }
      function th(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function td(t, e, i, r, n = 0.5) {
        let s = (0, I.k)(t.min, t.max, n);
        tl(t, e, i, s, r);
      }
      function tc(t, e) {
        td(t.x, e.x, e.scaleX, e.scale, e.originX),
          td(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function tp(t, e) {
        return ti(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var tm = i(65220),
        tf = i(64345);
      let tv = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tg = i(76258);
      let ty = new WeakMap();
      class tw {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = tt()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let r = (t) => {
              let { dragSnapToOrigin: i } = this.getProps();
              i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(E(t).point);
            },
            n = (t, e) => {
              let {
                drag: i,
                dragPropagation: r,
                onDragStart: n,
              } = this.getProps();
              if (
                i &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = (0, S.Wp)(i)),
                !this.openDragLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                te((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (tm.KN.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let r = i.layout.layoutBox[t];
                      r && (e = N(r) * (parseFloat(e) / 100));
                    }
                  }
                  this.originPoint[t] = e;
                }),
                n && D.Gt.postRender(() => n(t, e)),
                (0, tg.g)(this.visualElement, "transform");
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            s = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: r,
                onDirectionLock: n,
                onDrag: s,
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: o } = e;
              if (r && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    n &&
                    n(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                s && s(t, e);
            },
            o = (t, e) => this.stop(t, e),
            a = () =>
              te((t) => {
                var e;
                return (
                  "paused" === this.getAnimationState(t) &&
                  (null == (e = this.getAxisMotionValue(t).animation)
                    ? void 0
                    : e.play())
                );
              }),
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new R(
            t,
            {
              onSessionStart: r,
              onStart: n,
              onMove: s,
              onSessionEnd: o,
              resumeAnimation: a,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              contextWindow: tv(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && D.Gt.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !tb(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? (0, I.k)(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? (0, I.k)(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null == (t = this.visualElement.projection)
                ? void 0
                : t.layout,
            n = this.constraints;
          e && O(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: K(t.x, i, n), y: K(t.y, e, r) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: H(t, "left", "right"), y: H(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              te((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !O(e)) return !1;
          let r = e.current;
          (0, T.V)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = tp(t, i),
                { scroll: n } = e;
              return n && (th(r.x, n.offset.x), th(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = ((t = n.layout.layoutBox), { x: X(t.x, s.x), y: X(t.y, s.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = ti(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            te((o) => {
              if (!tb(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, tg.g)(this.visualElement, t),
            i.start((0, tf.f)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          te((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          te((t) => {
            var e;
            return null == (e = this.getAxisMotionValue(t).animation)
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null == (e = this.getAxisMotionValue(t).animation)
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          te((e) => {
            let { drag: i } = this.getProps();
            if (!tb(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - (0, I.k)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!O(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          te((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = N(t),
                  n = N(e);
                return (
                  n > r
                    ? (i = (0, U.q)(e.min, e.max - r, t.min))
                    : r > n && (i = (0, U.q)(t.min, t.max - n, e.min)),
                  (0, _.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            te((e) => {
              if (!tb(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set((0, I.k)(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ty.set(this.visualElement, this);
          let t = V(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              O(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            D.Gt.read(e);
          let n = k(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (te((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function tb(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class tx extends y {
        constructor(t) {
          super(t),
            (this.removeGroupControls = P.l),
            (this.removeListeners = P.l),
            (this.controls = new tw(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || P.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tP = (t) => (e, i) => {
        t && D.Gt.postRender(() => t(e, i));
      };
      class tT extends y {
        constructor() {
          super(...arguments), (this.removePointerDownListener = P.l);
        }
        onPointerDown(t) {
          this.session = new R(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tv(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: tP(t),
            onStart: tP(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, r && D.Gt.postRender(() => r(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = V(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tS = i(95155),
        tA = i(12115);
      let tk = (0, tA.createContext)(null),
        tE = (0, tA.createContext)({}),
        tV = (0, tA.createContext)({}),
        tM = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tC(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tD = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!tm.px.test(t)) return t;
            else t = parseFloat(t);
          let i = tC(t, e.target.x),
            r = tC(t, e.target.y);
          return `${i}% ${r}%`;
        },
      };
      var tR = i(84017);
      let tj = {},
        { schedule: tL, cancel: tB } = (0, i(99267).I)(queueMicrotask, !1);
      class tF extends tA.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(tj, tU),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tM.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== n &&
                (n
                  ? s.promote()
                  : s.relegate() ||
                    D.Gt.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tL.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tO(t) {
        let [e, i] = (function (t = !0) {
            let e = (0, tA.useContext)(tk);
            if (null === e) return [!0, null];
            let { isPresent: i, onExitComplete: r, register: n } = e,
              s = (0, tA.useId)();
            (0, tA.useEffect)(() => {
              t && n(s);
            }, [t]);
            let o = (0, tA.useCallback)(() => t && r && r(s), [s, r, t]);
            return !i && r ? [!1, o] : [!0];
          })(),
          r = (0, tA.useContext)(tE);
        return (0, tS.jsx)(tF, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, tA.useContext)(tV),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tU = {
        borderRadius: {
          ...tD,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tD,
        borderTopRightRadius: tD,
        borderBottomLeftRadius: tD,
        borderBottomRightRadius: tD,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let r = tR.f.parse(t);
            if (r.length > 5) return t;
            let n = tR.f.createTransformer(t),
              s = +("number" != typeof r[0]),
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = (0, I.k)(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              n(r)
            );
          },
        },
      };
      var tI = i(49568),
        tN = i(77481),
        tW = i(41515),
        t$ = i(8871),
        tq = i(807);
      let tG = (t, e) => t.depth - e.depth;
      class tz {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tq.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tq.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tG),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var t_ = i(72863),
        tK = i(2228);
      function tX(t) {
        let e = (0, tN.S)(t) ? t.get() : t;
        return (0, tK.B)(e) ? e.toValue() : e;
      }
      var tH = i(64885);
      let tY = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tZ = tY.length,
        tQ = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tJ = (t) => "number" == typeof t || tm.px.test(t);
      function t0(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let t1 = t5(0, 0.5, tH.yT),
        t2 = t5(0.5, 0.95, P.l);
      function t5(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i((0, U.q)(t, e, r)));
      }
      function t4(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function t6(t, e) {
        t4(t.x, e.x), t4(t.y, e.y);
      }
      function t3(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function t9(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function t7(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (tm.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, I.k)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, I.k)(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = t9(t.min, e, i, a, n)),
            (t.max = t9(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let t8 = ["x", "scaleX", "originX"],
        et = ["y", "scaleY", "originY"];
      function ee(t, e, i, r) {
        t7(t.x, e, t8, i ? i.x : void 0, r ? r.x : void 0),
          t7(t.y, e, et, i ? i.y : void 0, r ? r.y : void 0);
      }
      function ei(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function er(t) {
        return ei(t.x) && ei(t.y);
      }
      function en(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function es(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function eo(t, e) {
        return es(t.x, e.x) && es(t.y, e.y);
      }
      function ea(t) {
        return N(t.x) / N(t.y);
      }
      function el(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class eu {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tq.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tq.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let eh = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        ed = "undefined" != typeof window && void 0 !== window.MotionDebug,
        ec = ["", "X", "Y", "Z"],
        ep = { visibility: "hidden" },
        em = 0;
      function ef(t, e, i, r) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function ev({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = em++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  ed &&
                    (eh.totalNodes =
                      eh.resolvedTargetDeltas =
                      eh.recalculatedProjection =
                        0),
                  this.nodes.forEach(ew),
                  this.nodes.forEach(ek),
                  this.nodes.forEach(eE),
                  this.nodes.forEach(eb),
                  ed && window.MotionDebug.record(eh);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tz());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new t_.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t$.k.now(),
                      r = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && ((0, D.WG)(r), t(n - 250));
                      };
                    return D.Gt.read(r, !0), () => (0, D.WG)(r);
                  })(r, 250)),
                  tM.hasAnimatedSinceResize &&
                    ((tM.hasAnimatedSinceResize = !1), this.nodes.forEach(eA));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ej,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !eo(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, S.rU)(n, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eA(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, D.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eV),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let r = (0, tW.P)(i);
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      D.Gt,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eP);
              return;
            }
            this.isUpdating || this.nodes.forEach(eT),
              (this.isUpdating = !1),
              this.nodes.forEach(eS),
              this.nodes.forEach(eg),
              this.nodes.forEach(ey),
              this.clearAllSnapshots();
            let t = t$.k.now();
            (D.uv.delta = (0, _.q)(0, 1e3 / 60, t - D.uv.timestamp)),
              (D.uv.timestamp = t),
              (D.uv.isProcessing = !0),
              D.PP.update.process(D.uv),
              D.PP.preRender.process(D.uv),
              D.PP.render.process(D.uv),
              (D.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tL.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(ex), this.sharedNodes.forEach(eM);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              D.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            D.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = tt()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !er(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || ts(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              eF((e = r).x),
              eF(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return tt();
            let i = e.measureViewportBox();
            if (
              !(
                (null == (t = this.scroll) ? void 0 : t.wasRoot) ||
                this.path.some(eU)
              )
            ) {
              let { scroll: t } = this.root;
              t && (th(i.x, t.offset.x), th(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = tt();
            if ((t6(i, t), null == (e = this.scroll) ? void 0 : e.wasRoot))
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e],
                { scroll: n, options: s } = r;
              r !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && t6(i, t),
                th(i.x, n.offset.x),
                th(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = tt();
            t6(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                tc(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                ts(r.latestValues) && tc(i, r.latestValues);
            }
            return ts(this.latestValues) && tc(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = tt();
            t6(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ts(i.latestValues)) continue;
              tn(i.latestValues) && i.updateSnapshot();
              let r = tt();
              t6(r, i.measurePageBox()),
                ee(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return ts(this.latestValues) && ee(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== D.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null == (e = this.parent) ? void 0 : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = D.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = tt()),
                    (this.relativeTargetOrigin = tt()),
                    z(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    t6(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = tt()), (this.targetWithTransforms = tt())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      q(i.x, r.x, n.x),
                      q(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : t6(this.target, this.layout.layoutBox),
                      tu(this.target, this.targetDelta))
                    : t6(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = tt()),
                      (this.relativeTargetOrigin = tt()),
                      z(this.relativeTargetOrigin, this.target, t.target),
                      t6(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ed && eh.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                tn(this.parent.latestValues) ||
                to(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === D.uv.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            t6(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n,
                s,
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      tc(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), tu(t, s)),
                    r && ts(n.latestValues) && tc(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = tt()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (t3(this.prevProjectionDelta.x, this.projectionDelta.x),
                t3(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              $(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                el(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                el(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              ed && eh.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null == (e = this.options.visualElement) || e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = Q()),
              (this.projectionDelta = Q()),
              (this.projectionDeltaWithTransform = Q());
          }
          setAnimationOrigin(t, e = !1) {
            let i,
              r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = Q();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = tt(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(eR)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (eC(o.x, t.x, r),
                  eC(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m, f, v;
                  z(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    (f = a),
                    (v = r),
                    eD(p.x, m.x, f.x, v),
                    eD(p.y, m.y, f.y, v),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      en(u.x, c.x) && en(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = tt()),
                    t6(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = (0, I.k)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          t1(r)
                        )),
                        (t.opacityExit = (0, I.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t2(r)
                        )))
                      : s &&
                        (t.opacity = (0, I.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r
                        ));
                    for (let n = 0; n < tZ; n++) {
                      let s = `border${tY[n]}Radius`,
                        o = t0(e, s),
                        a = t0(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tJ(o) === tJ(a)
                          ? ((t[s] = Math.max((0, I.k)(tQ(o), tQ(a), r), 0)),
                            (tm.KN.test(a) || tm.KN.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, I.k)(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, D.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = D.Gt.update(() => {
                (tM.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = (0, tN.S)(0) ? 0 : (0, tI.OQ)(t);
                    return r.start((0, tf.f)("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                eO(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || tt();
                let e = N(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = N(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              t6(e, i),
                tc(e, n),
                $(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eu()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e && (null == (t = this.getStack()) ? void 0 : t.lead)) || this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null == (t = this.getStack())
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            i.z && ef("z", t, r, this.animationValues);
            for (let e = 0; e < ec.length; e++)
              ef(`rotate${ec[e]}`, t, r, this.animationValues),
                ef(`skew${ec[e]}`, t, r, this.animationValues);
            for (let e in (t.render(), r))
              t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ep;
            let r = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  tX(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tX(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !ts(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = (function (t, e, i) {
                let r = "",
                  n = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || s || o) &&
                    (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    n && (r += `rotateX(${n}deg) `),
                    s && (r += `rotateY(${s}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !=
                      (i =
                        null != (e = o.opacity) ? e : this.latestValues.opacity)
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            tj)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = tj[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? tX(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null == (e = t.currentAnimation) ? void 0 : e.stop();
            }),
              this.root.nodes.forEach(eP),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eg(t) {
        t.updateLayout();
      }
      function ey(t) {
        var e;
        let i =
          (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? te((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = N(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : eO(n, i.layoutBox, e) &&
              te((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = N(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = Q();
          $(o, e, i.layoutBox);
          let a = Q();
          s
            ? $(a, t.applyTransform(r, !0), i.measuredBox)
            : $(a, e, i.layoutBox);
          let l = !er(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = tt();
                z(o, i.layoutBox, n.layoutBox);
                let a = tt();
                z(a, e, s.layoutBox),
                  eo(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ew(t) {
        ed && eh.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eb(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function ex(t) {
        t.clearSnapshot();
      }
      function eP(t) {
        t.clearMeasurements();
      }
      function eT(t) {
        t.isLayoutDirty = !1;
      }
      function eS(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eA(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ek(t) {
        t.resolveTargetDelta();
      }
      function eE(t) {
        t.calcProjection();
      }
      function eV(t) {
        t.resetSkewAndRotation();
      }
      function eM(t) {
        t.removeLeadSnapshot();
      }
      function eC(t, e, i) {
        (t.translate = (0, I.k)(e.translate, 0, i)),
          (t.scale = (0, I.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eD(t, e, i, r) {
        (t.min = (0, I.k)(e.min, i.min, r)),
          (t.max = (0, I.k)(e.max, i.max, r));
      }
      function eR(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ej = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eL = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eB = eL("applewebkit/") && !eL("chrome/") ? Math.round : P.l;
      function eF(t) {
        (t.min = eB(t.min)), (t.max = eB(t.max));
      }
      function eO(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(ea(e) - ea(i))))
        );
      }
      function eU(t) {
        var e;
        return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot);
      }
      let eI = ev({
          attachResizeListener: (t, e) => k(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eN = { current: void 0 },
        eW = ev({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eN.current) {
              let t = new eI({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eN.current = t);
            }
            return eN.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function e$(t, e, i) {
        let { props: r } = t;
        t.animationState &&
          r.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let n = r["onHover" + i];
        n && D.Gt.postRender(() => n(e, E(e)));
      }
      class eq extends y {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, S.PT)(
              t,
              (t) => (e$(this.node, t, "Start"), (t) => e$(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class eG extends y {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, C.F)(
            k(this.node.current, "focus", () => this.onFocus()),
            k(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function ez(t, e, i) {
        let { props: r } = t;
        t.animationState &&
          r.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let n = r["onTap" + ("End" === i ? "" : i)];
        n && D.Gt.postRender(() => n(e, E(e)));
      }
      class e_ extends y {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, S.c$)(
              t,
              (t) => (
                ez(this.node, t, "Start"),
                (t, { success: e }) => ez(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let eK = new WeakMap(),
        eX = new WeakMap(),
        eH = (t) => {
          let e = eK.get(t.target);
          e && e(t);
        },
        eY = (t) => {
          t.forEach(eH);
        },
        eZ = { some: 0, all: 1 };
      class eQ extends y {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : eZ[r],
            },
            o = (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), n && !e && this.hasEnteredView)
              )
                return;
              e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", e);
              let { onViewportEnter: i, onViewportLeave: r } =
                  this.node.getProps(),
                s = e ? i : r;
              s && s(t);
            };
          var a = this.node.current;
          let l = (function ({ root: t, ...e }) {
            let i = t || document;
            eX.has(i) || eX.set(i, {});
            let r = eX.get(i),
              n = JSON.stringify(e);
            return (
              r[n] || (r[n] = new IntersectionObserver(eY, { root: t, ...e })),
              r[n]
            );
          })(s);
          return (
            eK.set(a, o),
            l.observe(a),
            () => {
              eK.delete(a), l.unobserve(a);
            }
          );
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let eJ = (0, tA.createContext)({ strict: !1 }),
        e0 = (0, tA.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        e1 = (0, tA.createContext)({});
      function e2(t) {
        return r(t.animate) || d.some((e) => l(t[e]));
      }
      function e5(t) {
        return !!(e2(t) || t.variants);
      }
      function e4(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var e6 = i(33577);
      let e3 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        e9 = {};
      for (let t in e3) e9[t] = { isEnabled: (e) => e3[t].some((t) => !!e[t]) };
      let e7 = Symbol.for("motionComponentSymbol");
      var e8 = i(86553),
        it = i(61729);
      let ie = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ii(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ie.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ir = i(34100),
        is = i(94416);
      let io = (t) => (e, i) => {
        let n = (0, tA.useContext)(e1),
          s = (0, tA.useContext)(tk),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: i,
              },
              n,
              s,
              o
            ) {
              let a = {
                latestValues: (function (t, e, i, n) {
                  let s = {},
                    o = n(t, {});
                  for (let t in o) s[t] = tX(o[t]);
                  let { initial: a, animate: l } = t,
                    u = e2(t),
                    h = e5(t);
                  e &&
                    h &&
                    !u &&
                    !1 !== t.inherit &&
                    (void 0 === a && (a = e.initial),
                    void 0 === l && (l = e.animate));
                  let d = !!i && !1 === i.initial,
                    c = (d = d || !1 === a) ? l : a;
                  if (c && "boolean" != typeof c && !r(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    for (let i = 0; i < e.length; i++) {
                      let r = (0, ir.a)(t, e[i]);
                      if (r) {
                        let { transitionEnd: t, transition: e, ...i } = r;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = d ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (s[t] = e);
                        }
                        for (let e in t) s[e] = t[e];
                      }
                    }
                  }
                  return s;
                })(n, s, o, t),
                renderState: e(),
              };
              return (
                i &&
                  ((a.onMount = (t) => i({ props: n, current: t, ...a })),
                  (a.onUpdate = (t) => i(t))),
                a
              );
            })(t, e, n, s);
        return i ? o() : (0, is.M)(o);
      };
      var ia = i(12434),
        il = i(20641);
      let iu = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var ih = i(58476);
      let id = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ic = ia.U.length;
      function ip(t, e, i) {
        let { style: r, vars: n, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (ia.f.has(t)) {
            o = !0;
            continue;
          }
          if ((0, il.j)(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = iu(i, ih.W[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (r.transform = (function (t, e, i) {
                  let r = "",
                    n = !0;
                  for (let s = 0; s < ic; s++) {
                    let o = ia.U[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!o.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = iu(a, ih.W[o]);
                      if (!l) {
                        n = !1;
                        let e = id[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, n ? "" : r)) : n && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let im = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iv = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ig(t, e, i) {
        return "string" == typeof t ? t : tm.px.transform(e + i * t);
      }
      function iy(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((ip(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let r = ig(e, t.x, t.width),
                n = ig(i, t.y, t.height);
              return `${r} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== r && (c.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? im : iv;
              t[s.offset] = tm.px.transform(-r);
              let o = tm.px.transform(e),
                a = tm.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let iw = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        ib = () => ({ ...iw(), attrs: {} }),
        ix = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var iP = i(92287);
      function iT(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let iS = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function iA(t, e, i, r) {
        for (let i in (iT(t, e, void 0, r), e.attrs))
          t.setAttribute(iS.has(i) ? i : (0, iP.I)(i), e.attrs[i]);
      }
      function ik(t, { layout: e, layoutId: i }) {
        return (
          ia.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!tj[t] || "opacity" === t))
        );
      }
      function iE(t, e, i) {
        var r;
        let { style: n } = t,
          s = {};
        for (let o in n)
          ((0, tN.S)(n[o]) ||
            (e.style && (0, tN.S)(e.style[o])) ||
            ik(o, t) ||
            (null == (r = null == i ? void 0 : i.getValue(o))
              ? void 0
              : r.liveStyle) !== void 0) &&
            (s[o] = n[o]);
        return s;
      }
      function iV(t, e, i) {
        let r = iE(t, e, i);
        for (let i in t)
          ((0, tN.S)(t[i]) || (0, tN.S)(e[i])) &&
            (r[
              -1 !== ia.U.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      let iM = ["x", "y", "width", "height", "cx", "cy", "r"],
        iC = {
          useVisualState: io({
            scrapeMotionValuesFromProps: iV,
            createRenderState: ib,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: i,
              renderState: r,
              latestValues: n,
            }) => {
              if (!i) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in n)
                  if (ia.f.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let i = 0; i < iM.length; i++) {
                  let r = iM[i];
                  t[r] !== e[r] && (o = !0);
                }
              o &&
                D.Gt.read(() => {
                  !(function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(i, r),
                    D.Gt.render(() => {
                      iy(r, n, ix(i.tagName), t.transformTemplate), iA(i, r);
                    });
                });
            },
          }),
        },
        iD = {
          useVisualState: io({
            scrapeMotionValuesFromProps: iE,
            createRenderState: iw,
          }),
        };
      function iR(t, e, i) {
        for (let r in e) (0, tN.S)(e[r]) || ik(r, i) || (t[r] = e[r]);
      }
      let ij = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function iL(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          ij.has(t)
        );
      }
      let iB = (t) => !iL(t);
      try {
        !(function (t) {
          t && (iB = (e) => (e.startsWith("on") ? !iL(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      var iF = i(72069),
        iO = i(17225);
      let iU = { current: null },
        iI = { current: !1 };
      var iN = i(29785),
        iW = i(67154),
        i$ = i(70806),
        iq = i(36688);
      let iG = [...i$.T, iW.y, tR.f],
        iz = new WeakMap();
      var i_ = i(76874);
      let iK = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class iX {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = i_.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t$.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                D.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = e2(e)),
            (this.isVariantNode = e5(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && (0, tN.S)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            iz.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iI.current ||
              (function () {
                if (((iI.current = !0), e6.B))
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iU.current = t.matches);
                    t.addListener(e), e();
                  } else iU.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iU.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (iz.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, D.WG)(this.notifyUpdate),
          (0, D.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = ia.f.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && D.Gt.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in e9) {
            let e = e9[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : tt();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < iK.length; e++) {
            let i = iK[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                s = i[r];
              if ((0, tN.S)(n)) t.addValue(r, n);
              else if ((0, tN.S)(s)) t.addValue(r, (0, tI.OQ)(n, { owner: t }));
              else if (s !== n)
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, tI.OQ)(void 0 !== e ? e : n, { owner: t }));
                }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, tI.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null != (i = this.getBaseTargetFromProps(this.props, t))
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          if (null != r) {
            if ("string" == typeof r && ((0, iF.i)(r) || (0, iO.$)(r)))
              r = parseFloat(r);
            else {
              let i;
              (i = r),
                !iG.find((0, iq.w)(i)) && tR.f.test(e) && (r = (0, iN.J)(t, e));
            }
            this.setBaseTarget(t, (0, tN.S)(r) ? r.get() : r);
          }
          return (0, tN.S)(r) ? r.get() : r;
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i,
            { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let n = (0, ir.a)(
              this.props,
              r,
              null == (e = this.presenceContext) ? void 0 : e.custom
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, tN.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new t_.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var iH = i(44493);
      class iY extends iX {
        constructor() {
          super(...arguments), (this.KeyframeResolver = iH.K);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, tN.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var iZ = i(49930);
      class iQ extends iY {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = iT);
        }
        readValueFromInstance(t, e) {
          if (ia.f.has(e)) {
            let t = (0, iZ.D)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = ((0, il.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return tp(t, e);
        }
        build(t, e, i) {
          ip(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iE(t, e, i);
        }
      }
      class iJ extends iY {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = tt);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (ia.f.has(e)) {
            let t = (0, iZ.D)(e);
            return (t && t.default) || 0;
          }
          return (e = iS.has(e) ? e : (0, iP.I)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iV(t, e, i);
        }
        build(t, e, i) {
          iy(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          iA(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = ix(t.tagName)), super.mount(t);
        }
      }
      let i0 = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((n = {
          animation: { Feature: w },
          exit: { Feature: x },
          inView: { Feature: eQ },
          tap: { Feature: e_ },
          focus: { Feature: eG },
          hover: { Feature: eq },
          pan: { Feature: tT },
          drag: { Feature: tx, ProjectionNode: eW, MeasureLayout: tO },
          layout: { ProjectionNode: eW, MeasureLayout: tO },
        }),
        (s = (t, e) =>
          ii(t)
            ? new iJ(e)
            : new iQ(e, { allowProjection: t !== tA.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, i;
            let {
              preloadedFeatures: r,
              createVisualElement: n,
              useRender: s,
              useVisualState: o,
              Component: a,
            } = t;
            function u(t, e) {
              var i;
              let r,
                u = {
                  ...(0, tA.useContext)(e0),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, tA.useContext)(tE).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (e2(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || l(e) ? e : void 0,
                        animate: l(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tA.useContext)(e1));
                  return (0, tA.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [e4(e), e4(i)]
                  );
                })(t),
                c = o(t, h);
              if (!h && e6.B) {
                (0, tA.useContext)(eJ).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = e9;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(u);
                (r = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, r, n) {
                    var s, o;
                    let { visualElement: a } = (0, tA.useContext)(e1),
                      l = (0, tA.useContext)(eJ),
                      u = (0, tA.useContext)(tk),
                      h = (0, tA.useContext)(e0).reducedMotion,
                      d = (0, tA.useRef)(null);
                    (r = r || l.renderer),
                      !d.current &&
                        r &&
                        (d.current = r(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, tA.useContext)(tV);
                    c &&
                      !c.projection &&
                      n &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && O(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, n, p);
                    let m = (0, tA.useRef)(!1);
                    (0, tA.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[it.n],
                      v = (0, tA.useRef)(
                        !!f &&
                          !(null == (s = window.MotionHandoffIsComplete)
                            ? void 0
                            : s.call(window, f)) &&
                          (null == (o = window.MotionHasOptimisedAnimation)
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      (0, e8.E)(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          tL.render(c.render),
                          v.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, tA.useEffect)(() => {
                        c &&
                          (!v.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ==
                                (t = window.MotionHandoffMarkAsComplete) ||
                                t.call(window, f);
                            }),
                            (v.current = !1)));
                      }),
                      c
                    );
                  })(a, c, u, n, t.ProjectionNode));
              }
              return (0, tS.jsxs)(e1.Provider, {
                value: d,
                children: [
                  r && d.visualElement
                    ? (0, tS.jsx)(r, { visualElement: d.visualElement, ...u })
                    : null,
                  s(
                    a,
                    t,
                    ((i = d.visualElement),
                    (0, tA.useCallback)(
                      (t) => {
                        t && c.onMount && c.onMount(t),
                          i && (t ? i.mount(t) : i.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : O(e) && (e.current = t));
                      },
                      [i]
                    )),
                    c,
                    h,
                    d.visualElement
                  ),
                ],
              });
            }
            r &&
              (function (t) {
                for (let e in t) e9[e] = { ...e9[e], ...t[e] };
              })(r),
              (u.displayName = "motion.".concat(
                "string" == typeof a
                  ? a
                  : "create(".concat(
                      null != (i = null != (e = a.displayName) ? e : a.name)
                        ? i
                        : "",
                      ")"
                    )
              ));
            let h = (0, tA.forwardRef)(u);
            return (h[e7] = a), h;
          })({
            ...(ii(t) ? iC : iD),
            preloadedFeatures: n,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: n }, s) => {
                let o = (
                    ii(e)
                      ? function (t, e, i, r) {
                          let n = (0, tA.useMemo)(() => {
                            let i = ib();
                            return (
                              iy(i, e, ix(r), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            iR(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                iR(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tA.useMemo)(() => {
                                      let i = iw();
                                      return (
                                        ip(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, n, s, e),
                  a = (function (t, e, i) {
                    let r = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (iB(n) ||
                          (!0 === i && iL(n)) ||
                          (!e && !iL(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (r[n] = t[n]);
                    return r;
                  })(i, "string" == typeof e, t),
                  l = e !== tA.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = i,
                  h = (0, tA.useMemo)(() => ((0, tN.S)(u) ? u.get() : u), [u]);
                return (0, tA.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: s,
            Component: t,
          });
        })
      );
    },
    84017: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => h, f: () => m });
      var r = i(67154);
      let n =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(8640),
        o = i(5295);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                r.y.test(t)
                  ? (n.color.push(o), s.push(l), i.push(r.y.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(o), s.push("var"), i.push(t))
                  : (n.number.push(o), s.push(a), i.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: n, types: s };
      }
      function d(t) {
        return h(t).values;
      }
      function c(t) {
        let { split: e, types: i } = h(t),
          n = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < n; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === a
                ? (s += (0, o.a)(t[u]))
                : e === l
                ? (s += r.y.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        m = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null == (e = t.match(s.S)) ? void 0 : e.length) || 0) +
                ((null == (i = t.match(n)) ? void 0 : i.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    86553: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => n });
      var r = i(12115);
      let n = i(33577).B ? r.useLayoutEffect : r.useEffect;
    },
    91037: (t, e, i) => {
      "use strict";
      i.d(e, {
        P6: () => o,
        vG: () => d,
        tu: () => u,
        KZ: () => v,
        rU: () => a,
        PT: () => S,
        DW: () => c,
        WH: () => h,
        Mc: () => k,
        yL: () => g,
        TU: () =>
          function t(e, i) {
            if (e)
              return "function" == typeof e && m()
                ? v(e, i)
                : c(e)
                ? y(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, i) || w.easeOut)
                : w[e];
          },
        YE: () => l,
        c$: () => R,
        KJ: () => x,
        Wp: () => j,
        nL: () => m,
      });
      var r = i(60178);
      let n = (0, r.p)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            n() && i.attachTimeline
              ? i.attachTimeline(t)
              : "function" == typeof e
              ? e(i)
              : void 0
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class o extends s {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function a(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < l; ) (e += 50), (i = t.next(e));
        return e >= l ? 1 / 0 : e;
      }
      function h(t) {
        return "function" == typeof t;
      }
      function d(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let c = (t) => Array.isArray(t) && "number" == typeof t[0],
        p = { linearEasing: void 0 },
        m = (function (t, e) {
          let i = (0, r.p)(t);
          return () => {
            var t;
            return null != (t = p[e]) ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var f = i(91225);
      let v = (t, e, i = 10) => {
        let r = "",
          n = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < n; e++) r += t((0, f.q)(0, n - 1, e)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
      };
      function g(t) {
        return !!(
          ("function" == typeof t && m()) ||
          !t ||
          ("string" == typeof t && (t in w || m())) ||
          c(t) ||
          (Array.isArray(t) && t.every(g))
        );
      }
      let y = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        w = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        b = { x: !1, y: !1 };
      function x(t, e, i) {
        var r;
        if (t instanceof Element) return [t];
        if ("string" == typeof t) {
          let n = document;
          e && (n = e.current);
          let s =
            null != (r = null == i ? void 0 : i[t]) ? r : n.querySelectorAll(t);
          return s ? Array.from(s) : [];
        }
        return Array.from(t);
      }
      function P(t, e) {
        let i = x(t),
          r = new AbortController();
        return [i, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
      }
      function T(t) {
        return (e) => {
          "touch" === e.pointerType || b.x || b.y || t(e);
        };
      }
      function S(t, e, i = {}) {
        let [r, n, s] = P(t, i),
          o = T((t) => {
            let { target: i } = t,
              r = e(t);
            if ("function" != typeof r || !i) return;
            let s = T((t) => {
              r(t), i.removeEventListener("pointerleave", s);
            });
            i.addEventListener("pointerleave", s, n);
          });
        return (
          r.forEach((t) => {
            t.addEventListener("pointerenter", o, n);
          }),
          s
        );
      }
      let A = (t, e) => !!e && (t === e || A(t, e.parentElement)),
        k = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        V = new WeakSet();
      function M(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function C(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      function D(t) {
        return k(t) && !(b.x || b.y);
      }
      function R(t, e, i = {}) {
        let [r, n, s] = P(t, i),
          o = (t) => {
            let r = t.currentTarget;
            if (!D(t) || V.has(r)) return;
            V.add(r);
            let s = e(t),
              o = (t, e) => {
                window.removeEventListener("pointerup", a),
                  window.removeEventListener("pointercancel", l),
                  D(t) &&
                    V.has(r) &&
                    (V.delete(r),
                    "function" == typeof s && s(t, { success: e }));
              },
              a = (t) => {
                o(t, i.useGlobalTarget || A(r, t.target));
              },
              l = (t) => {
                o(t, !1);
              };
            window.addEventListener("pointerup", a, n),
              window.addEventListener("pointercancel", l, n);
          };
        return (
          r.forEach((t) => {
            E.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (i.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                o,
                n
              ),
              t.addEventListener(
                "focus",
                (t) =>
                  ((t, e) => {
                    let i = t.currentTarget;
                    if (!i) return;
                    let r = M(() => {
                      if (V.has(i)) return;
                      C(i, "down");
                      let t = M(() => {
                        C(i, "up");
                      });
                      i.addEventListener("keyup", t, e),
                        i.addEventListener("blur", () => C(i, "cancel"), e);
                    });
                    i.addEventListener("keydown", r, e),
                      i.addEventListener(
                        "blur",
                        () => i.removeEventListener("keydown", r),
                        e
                      );
                  })(t, n),
                n
              );
          }),
          s
        );
      }
      function j(t) {
        if ("x" === t || "y" === t)
          if (b[t]) return null;
          else
            return (
              (b[t] = !0),
              () => {
                b[t] = !1;
              }
            );
        return b.x || b.y
          ? null
          : ((b.x = b.y = !0),
            () => {
              b.x = b.y = !1;
            });
      }
      i(27290), i(6500);
    },
    91225: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => r });
      let r = (t, e, i) => {
        let r = e - t;
        return 0 === r ? 1 : (i - t) / r;
      };
    },
    92253: (t, e, i) => {
      "use strict";
      var r =
          ((function (t) {
            t && "object" == typeof t && "default" in t && t.default;
          })(i(12115)),
          i(13548)),
        n = new r(),
        s = n.getBrowser(),
        o = n.getCPU(),
        a = n.getDevice(),
        l = n.getEngine(),
        u = n.getOS(),
        h = n.getUA(),
        d = function (t) {
          if (!t) return void console.error("No userAgent string was provided");
          var e = new r(t);
          return {
            UA: e,
            browser: e.getBrowser(),
            cpu: e.getCPU(),
            device: e.getDevice(),
            engine: e.getEngine(),
            os: e.getOS(),
            ua: e.getUA(),
            setUserAgent: function (t) {
              return e.setUA(t);
            },
          };
        },
        c = Object.freeze({
          ClientUAInstance: n,
          browser: s,
          cpu: o,
          device: a,
          engine: l,
          os: u,
          ua: h,
          setUa: function (t) {
            return n.setUA(t);
          },
          parseUserAgent: d,
        }),
        p = {
          Mobile: "mobile",
          Tablet: "tablet",
          SmartTv: "smarttv",
          Console: "console",
          Wearable: "wearable",
          Embedded: "embedded",
          Browser: void 0,
        },
        m = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        f = {
          IOS: "iOS",
          Android: "Android",
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MAC_OS: "Mac OS",
        },
        v = {
          isMobile: !1,
          isTablet: !1,
          isBrowser: !1,
          isSmartTV: !1,
          isConsole: !1,
          isWearable: !1,
        },
        g = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return t || e;
        },
        y = function () {
          return (
            !!(
              "undefined" != typeof window &&
              (window.navigator || navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        w = function (t) {
          var e = y();
          return (
            e &&
            e.platform &&
            (-1 !== e.platform.indexOf(t) ||
              ("MacIntel" === e.platform &&
                e.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        b = function (t) {
          return t.type === p.Mobile;
        },
        x = function (t) {
          return t.type === p.Tablet;
        },
        P = function (t) {
          var e = t.type;
          return e === p.Mobile || e === p.Tablet;
        },
        T = function (t) {
          return t.type === p.SmartTv;
        },
        S = function (t) {
          return t.type === p.Browser;
        },
        A = function (t) {
          return t.type === p.Wearable;
        },
        k = function (t) {
          return t.type === p.Console;
        },
        E = function (t) {
          return t.type === p.Embedded;
        },
        V = function (t) {
          return g(t.vendor);
        },
        M = function (t) {
          return g(t.model);
        },
        C = function (t) {
          return g(t.type, "browser");
        },
        D = function (t) {
          return t.name === f.Android;
        },
        R = function (t) {
          return t.name === f.Windows;
        },
        j = function (t) {
          return t.name === f.MAC_OS;
        },
        L = function (t) {
          return t.name === f.WindowsPhone;
        },
        B = function (t) {
          return t.name === f.IOS;
        },
        F = function (t) {
          return g(t.version);
        },
        O = function (t) {
          return g(t.name);
        },
        U = function (t) {
          return t.name === m.Chrome;
        },
        I = function (t) {
          return t.name === m.Firefox;
        },
        N = function (t) {
          return t.name === m.Chromium;
        },
        W = function (t) {
          return t.name === m.Edge;
        },
        $ = function (t) {
          return t.name === m.Yandex;
        },
        q = function (t) {
          var e = t.name;
          return e === m.Safari || e === m.MobileSafari;
        },
        G = function (t) {
          return t.name === m.MobileSafari;
        },
        z = function (t) {
          return t.name === m.Opera;
        },
        _ = function (t) {
          var e = t.name;
          return e === m.InternetExplorer || e === m.Ie;
        },
        K = function (t) {
          return t.name === m.MIUI;
        },
        X = function (t) {
          return t.name === m.SamsungBrowser;
        },
        H = function (t) {
          return g(t.version);
        },
        Y = function (t) {
          return g(t.major);
        },
        Z = function (t) {
          return g(t.name);
        },
        Q = function (t) {
          return g(t.name);
        },
        J = function (t) {
          return g(t.version);
        },
        tt = function () {
          var t = y(),
            e = t && t.userAgent && t.userAgent.toLowerCase();
          return "string" == typeof e && /electron/.test(e);
        },
        te = function (t) {
          return "string" == typeof t && -1 !== t.indexOf("Edg/");
        },
        ti = function () {
          var t = y();
          return (
            t &&
            (/iPad|iPhone|iPod/.test(t.platform) ||
              ("MacIntel" === t.platform && t.maxTouchPoints > 1)) &&
            !window.MSStream
          );
        },
        tr = function () {
          return w("iPad");
        },
        tn = function () {
          return w("iPhone");
        },
        ts = function () {
          return w("iPod");
        },
        to = function (t) {
          return g(t);
        };
      T(a), k(a), A(a), E(a), G(s) || tr(), N(s), P(a) || tr(), b(a);
      var ta = x(a) || tr();
      S(a),
        S(a),
        D(u),
        L(u),
        B(u) || tr(),
        U(s),
        I(s),
        q(s),
        z(s),
        _(s),
        F(u),
        O(u),
        H(s),
        Y(s),
        Z(s),
        V(a),
        M(a),
        Q(l),
        J(l),
        to(h),
        W(s) || te(h),
        $(s),
        C(a),
        ti(),
        tr(),
        tn(),
        ts(),
        tt(),
        te(h),
        W(s) && te(h),
        R(u),
        j(u),
        K(s),
        X(s);
      e.v1 = ta;
    },
    92287: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => r });
      let r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    94416: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => n });
      var r = i(12115);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    95221: (t, e, i) => {
      "use strict";
      i.d(e, { W: () => r });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    97929: (t, e, i) => {
      "use strict";
      i.d(e, { Gt: () => n, PP: () => a, WG: () => s, uv: () => o });
      var r = i(6500);
      let {
        schedule: n,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(99267).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.l,
        !0
      );
    },
    98763: (t, e, i) => {
      "use strict";
      i.d(e, { U: () => o });
      var r = i(2228),
        n = i(49568),
        s = i(12096);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, s.K)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, r.K)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, n.OQ)(i));
        }
      }
    },
    99267: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => s });
      var r = i(95221);
      let n = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = n.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  r = !1,
                  n = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && r ? e : i;
                    return n && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), r)) {
                      n = !0;
                      return;
                    }
                    (r = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (r = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let n = r.W.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(n - o.timestamp, 40), 1)),
              (o.timestamp = n),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(f));
          };
        return {
          schedule: n.reduce((e, r) => {
            let n = l[r];
            return (
              (e[r] = (e, r = !1, a = !1) => (
                !i && ((i = !0), (s = !0), o.isProcessing || t(f)),
                n.schedule(e, r, a)
              )),
              e
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < n.length; e++) l[n[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
  },
]);
