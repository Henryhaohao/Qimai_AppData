// 加密js版本: https://static.qimai.cn/static/js/app.729a8b068ec439c84de6.js

var ya = "split",
w = "",
vm = "length",
Ld = "charCodeAt",
h = 0,
ef = 10,
Ye = "forEach",
il = "%u00";
function r(n) {
function t(e, r, m) {
    if (e !== r) {
        var i = e + m > r ? r: e + m;
        e > r && (i = e - m < r ? r: e - m),
        n === a[qa] ? a[qa][Ih](i, i) : n[Bh] = i,
        a[qa][zh](function() {
            return t(i, r, m)
        })
    }
}
var e = arguments[vm] > S && void 0 !== arguments[S] ? arguments[S] : h,
r = arguments[L],
m = arguments[vm] > R && void 0 !== arguments[R] ? arguments[R] : jh;
a[qa][zh] || (a[qa][zh] = a[qa][Uh] || a[qa][Vh] || a[qa][Wh] ||
function(n) {
    return a[qa][mu](n, $h / Eh)
});
var i = a[Zh][Gh](e - r);
t(e, r, a[Zh][Xh](i / m * qh))
}
function m(n) {
var t = i();
return String[t](n)
}
function i() {
var n = w;
return ["66", "72", "6f", "6d", "43", "68", "61", "72", "43", "6f", "64", "65"][Ye](function(t) {
    n += unescape(il + t)
}),
n
}
function s() {
return a[ml](ol[tn](/8/g, il))
}
function c(n, t) {
var e = {
    version: sl,
    autoPlay: !h,
    vertex_Rtop: cl,
    speed: pl,
    start: {},
    end: {}
};
a[qa][zh] || (a[qa][zh] = a[qa][Uh] || a[qa][Vh] || a[qa][Wh] ||
function(n) {
    return a[qa][mu](n, $h / Eh)
}),
ha == (void 0 === n ? la: O()(n)) && (t = n, n = a[za][Ba](o), n[ph][ul] = fl, n[ph][hl] = fl, n[ph][ll] = g, n[ph][dl] = yl, n[ph][_l] = vl, n[ph][Cl] = gl, n[ph][kl] = wl);
var r = {},
m = function a(n) {
    n = n || {};
    for (var t = S; t < arguments[vm]; t++) {
        var e = arguments[t];
        if (e) for (var r in e) e[Ar](r) && (ha === O()(e[r]) ? n[r] = a(n[r], e[r]) : n[r] = e[r])
    }
    return n
};
r[Sl] = function(a) {
    r[bl](a),
    !!r[Ll][xl] && r[Tl]()
},
r[bl] = function(t) {
    r[Ll] = m({},
    e, t);
    var i = r[Ll],
    o = i[Hl],
    s = i[Ve];
    n[ph][Rl] = Pl,
    n[ph][Fl] = Ml,
    n[ph][Fl] = Ml,
    a[za][Ol](Vp)[Al](n),
    Tn != s[ul] && Tn != s[hl] && m(o, {
        width: n[Dl],
        height: n[Nl]
    });
    var c = a[Zh][Il](o[Bl], s[Bl]) - a[Zh][Gh](o[zl] - s[zl]) / R;
    c < i[jl] && (c = a[Zh][Il](i[jl], a[Zh][Il](o[Bl], s[Bl])));
    var p = a[Zh][Ul](a[Zh][Vl](o[Bl] - s[Bl], L) + a[Zh][Vl](o[zl] - s[zl], L)),
    u = a[Zh][Xh](a[Zh][Il](a[Zh][Wl](a[Zh][$l](p) / El - Gl, Zl), vu) / i[Xl]),
    f = o[Bl] == c ? h: -a[Zh][Ul]((s[Bl] - c) / (o[Bl] - c)),
    l = (f * o[zl] - s[zl]) / (f - S),
    d = s[zl] == l ? h: (s[Bl] - c) / a[Zh][Vl](s[zl] - l, L);
    m(i, {
        count: -S,
        steps: u,
        vertex_left: l,
        vertex_top: c,
        curvature: d
    })
},
r[Tl] = function() {
    r[ql]()
},
r[ql] = function() {
    var t = r[Ll],
    e = t[Hl],
    m = t[Jl],
    i = t[Kl],
    o = t[Ve],
    s = e[zl] + (o[zl] - e[zl]) * m / i,
    c = h == t[Ql] ? e[Bl] + (o[Bl] - e[Bl]) * m / i: t[Ql] * a[Zh][Vl](s - t[Yl], L) + t[ad];
    if (Tn != o[ul] && Tn != o[hl]) {
        var p = i / L,
        u = o[ul] - (o[ul] - e[ul]) * a[Zh][nd](m < p ? h: (m - p) / (i - p) * a[Zh][td] / L),
        f = o[hl] - (o[hl] - e[hl]) * a[Zh][nd](m < p ? h: (m - p) / (i - p) * a[Zh][td] / L);
        n[ph][ul] = u + om,
        n[ph][hl] = f + om,
        n[ph][ch] = a[Zh][Il](u, f) + om
    }
    n[ph][zl] = s + om,
    n[ph][Bl] = c + om,
    t[Jl]++,
    m == i ? r[ed]() : a[qa][zh](function() {
        r[ql]()
    })
},
r[ed] = function() {
    n[rd]()
},
r[Sl](t)
}
function p() {
if (j) return ! S;
var n = Gp,
t = a[qa][_e];
try {
    return t[ye](n, md),
    t[id](n),
    !h
} catch(n) {
    return ! S
}
}
function u(a) {
return a || (a = od),
{
    title: {
        show: !h,
        textStyle: {
            color: sd,
            fontSize: cd
        },
        text: a,
        left: pd,
        top: pd
    },
    xAxis: {
        show: !S
    },
    yAxis: {
        show: !S
    },
    series: []
}
}
function f(n) {
var t, e = new a[Zp](ud + n + fd);
return (t = a[za][hd][Mp](e)) ? a[ml](t[L]) : Tn
}
function l(n) {
var t = new a[Ya];
t[ld](t[dd]() - S);
var e = f(n);
Tn != e && (a[za][hd] = n + yd + e + _d + t[vd]() + Cd)
}
function y(n, t, e) {
var r = new a[Ya];
r[ld](r[dd]() + e),
a[za][hd] = n + yd + a[gd](t) + (Tn == e ? w: _d + r[vd]()) + Cd
}
function _(n) {
return a[kd](z()(n)[ya](w)[wd](function(a) {
    return Sd + (xd + a[Ld](h)[mr](cd))[bd]( - L)
})[wa](w))
}
function v(n) {
return I()(a[zi](n)[tn](/%([0-9A-F]{2})/g,
function(a, n) {
    return m(Td + n)
}))
}
function C(a, n) {
n || (n = s()),
a = a[ya](w);
for (var t = a[vm], e = n[vm], r = Ld, i = h; i < t; i++) a[i] = m(a[i][r](h) ^ n[i % e][r](h));
return a[wa](w)
}
function k(a, n) {
n || (n = s()),
a = a[ya](w);
for (var t = a[vm], e = n[vm], r = Ld, i = h; i < t; i++) a[i] = m(a[i][r](h) ^ n[(i + ef) % e][r](h));
return a.join(w)
}
function b(a, n, t) {
var e, r, m = void 0 === t ? Hd: t;
for (e = h, r = a[vm]; e < r; e++) m ^= a[Ld](e),
m += (m << S) + (m << Rd) + (m << Pd) + (m << yf) + (m << Fd);
return n ? (Md + (m >>> h)[mr](cd))[_f]( - cd) : m >>> h
}
function x(n, t) {
var e = arguments[vm] > L && void 0 !== arguments[L] ? arguments[L] : R;
Ad != typeof a[Od] &&
function(a, n, t, e, r, m, i) {
    a[e] = a[e] ||
    function() { (a[e][d] = a[e][d] || [])[ga](arguments)
    },
    m = n[Ba](t),
    i = n[$a](t)[h],
    m[Dd] = !h,
    m[Nd] = Id,
    m[Ua] = Bd,
    i[Ga][Ea](m, i)
} (a[qa], a[za], ja, Od),
a[Od](zd, jd),
a[Od](Ud),
a[Od](Vd, e),
ha != (void 0 === n ? la: O()(n)) && (n = {}),
n = M()({
    "\u7528\u6237\u540d": he,
    "\u90ae\u7bb1": w,
    "\u6295\u653e": w,
    "\u5173\u6ce8": w
},
n),
a[Od](Wd, n),
a[Od]($d, t)
}
function T() {
if (j) return ! S;
try {
    var n = {},
    t = a[za][Ba](Ed),
    e = t[Gd](Zd),
    r = e[Xd](qd),
    m = e[Jd](r[Kd]),
    i = e[Jd](r[Qd]);
    n[Yd] = i;
    var o = {},
    s = a[ny][ay] || w;
    if (s && /google/i[Gp](s)) {
        o[d] = {
            key: ty,
            value: a[qa][ey] ? Bt: ry
        },
        o[cn] = {
            key: my,
            value: a[ny][my] ? ry: Bt
        },
        o[sn] = {
            key: iy,
            value: a[ny][oy][vm] > h ? Bt: ry
        },
        a[ny][oy][vm] && !a[ny][oy][h][qn] && (o[sn][sy] = ry);
        var c = a[ny][cy];
        o[pn] = {
            key: py,
            value: /HeadlessChrome/i[Gp](c) ? ry: Bt
        },
        o[un] = {
            key: Zd,
            value: Bt
        },
        /linux/i[Gp](c) && /Brian Paul/i[Gp](m) && /Mesa OffScreen/i[Gp](i) && (o[un][sy] = ry),
        !/linux/i[Gp](c) && /google/i[Gp](m) && /Google SwiftShader/i[Gp](i) && (o[un][sy] = ry);
        var p = [];
        for (var u in o) p[ga](o[u][sy]);
        n[uy] = p[wa](fy)
    }
    var f = b(hy, S);
    y(ly, v(C(P()(n), f)), dy)
} catch(n) {}
}
var CryptoJS = CryptoJS || (function(Math, undefined) {
var C = {};
var C_lib = C.lib = {};
var Base = C_lib.Base = (function() {
    function F() {};
    return {
        extend: function(overrides) {
            F.prototype = this;
            var subtype = new F();
            if (overrides) {
                subtype.mixIn(overrides);
            }
            if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                subtype.init = function() {
                    subtype.$super.init.apply(this, arguments);
                };
            }
            subtype.init.prototype = subtype;
            subtype.$super = this;
            return subtype;
        },
        create: function() {
            var instance = this.extend();
            instance.init.apply(instance, arguments);
            return instance;
        },
        init: function() {},
        mixIn: function(properties) {
            for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                }
            }
            if (properties.hasOwnProperty('toString')) {
                this.toString = properties.toString;
            }
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    };
} ());
var WordArray = C_lib.WordArray = Base.extend({
    init: function(words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
            this.sigBytes = sigBytes;
        } else {
            this.sigBytes = words.length * 4;
        }
    },
    toString: function(encoder) {
        return (encoder || Hex).stringify(this);
    },
    concat: function(wordArray) {
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;
        this.clamp();
        if (thisSigBytes % 4) {
            for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
            }
        } else if (thatWords.length > 0xffff) {
            for (var i = 0; i < thatSigBytes; i += 4) {
                thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
            }
        } else {
            thisWords.push.apply(thisWords, thatWords);
        }
        this.sigBytes += thatSigBytes;
        return this;
    },
    clamp: function() {
        var words = this.words;
        var sigBytes = this.sigBytes;
        words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
        words.length = Math.ceil(sigBytes / 4);
    },
    clone: function() {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
    },
    random: function(nBytes) {
        var words = [];
        var r = (function(m_w) {
            var m_w = m_w;
            var m_z = 0x3ade68b1;
            var mask = 0xffffffff;
            return function() {
                m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                var result = ((m_z << 0x10) + m_w) & mask;
                result /= 0x100000000;
                result += 0.5;
                return result * (Math.random() > .5 ? 1 : -1);
            }
        });
        for (var i = 0,
        rcache; i < nBytes; i += 4) {
            var _r = r((rcache || Math.random()) * 0x100000000);
            rcache = _r() * 0x3ade67b7;
            words.push((_r() * 0x100000000) | 0);
        }
        return new WordArray.init(words, nBytes);
    }
});
var C_enc = C.enc = {};
var Hex = C_enc.Hex = {
    stringify: function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
        }
        return hexChars.join('');
    },
    parse: function(hexStr) {
        var hexStrLength = hexStr.length;
        var words = [];
        for (var i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
        }
        return new WordArray.init(words, hexStrLength / 2);
    }
};
var Latin1 = C_enc.Latin1 = {
    stringify: function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var latin1Chars = [];
        for (var i = 0; i < sigBytes; i++) {
            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            latin1Chars.push(String.fromCharCode(bite));
        }
        return latin1Chars.join('');
    },
    parse: function(latin1Str) {
        var latin1StrLength = latin1Str.length;
        var words = [];
        for (var i = 0; i < latin1StrLength; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
        }
        return new WordArray.init(words, latin1StrLength);
    }
};
var Utf8 = C_enc.Utf8 = {
    stringify: function(wordArray) {
        try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch(e) {
            throw new Error('Malformed UTF-8 data');
        }
    },
    parse: function(utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    }
};
var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
    reset: function() {
        this._data = new WordArray.init();
        this._nDataBytes = 0;
    },
    _append: function(data) {
        if (typeof data == 'string') {
            data = Utf8.parse(data);
        }
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
    },
    _process: function(doFlush) {
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4;
        var nBlocksReady = dataSigBytes / blockSizeBytes;
        if (doFlush) {
            nBlocksReady = Math.ceil(nBlocksReady);
        } else {
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }
        var nWordsReady = nBlocksReady * blockSize;
        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
        if (nWordsReady) {
            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
            }
            var processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
        }
        return new WordArray.init(processedWords, nBytesReady);
    },
    clone: function() {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
    },
    _minBufferSize: 0
});
var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
    cfg: Base.extend(),
    init: function(cfg) {
        this.cfg = this.cfg.extend(cfg);
        this.reset();
    },
    reset: function() {
        BufferedBlockAlgorithm.reset.call(this);
        this._doReset();
    },
    update: function(messageUpdate) {
        this._append(messageUpdate);
        this._process();
        return this;
    },
    finalize: function(messageUpdate) {
        if (messageUpdate) {
            this._append(messageUpdate);
        }
        var hash = this._doFinalize();
        return hash;
    },
    blockSize: 512 / 32,
    _createHelper: function(hasher) {
        return function(message, cfg) {
            return new hasher.init(cfg).finalize(message);
        };
    },
    _createHmacHelper: function(hasher) {
        return function(message, key) {
            return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
    }
});
var C_algo = C.algo = {};
return C;
} (Math));

(function() {
var C = CryptoJS;
var C_lib = C.lib;
var WordArray = C_lib.WordArray;
var C_enc = C.enc;
var Base64 = C_enc.Base64 = {
    stringify: function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map;
        wordArray.clamp();
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
            var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
            var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
            var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
            for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
            }
        }
        var paddingChar = map.charAt(64);
        if (paddingChar) {
            while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
            }
        }
        return base64Chars.join('');
    },
    parse: function(base64Str) {
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;
        if (!reverseMap) {
            reverseMap = this._reverseMap = [];
            for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
            }
        }
        var paddingChar = map.charAt(64);
        if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);
            if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
            }
        }
        return parseLoop(base64Str, base64StrLength, reverseMap);
    },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
};
function parseLoop(base64Str, base64StrLength, reverseMap) {
    var words = [];
    var nBytes = 0;
    for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
            words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
            nBytes++;
        }
    }
    return WordArray.create(words, nBytes);
}
} ());
// eg: encrypt_1("MjAxOS0wNy0xNTUwMDBhbGxjbmlwaG9uZQ==@#/rank/indexPlus/brand_id/1@#48150409217@#1")
function encrypt_1(m) {
var b = "00000008d78d46a";
var a = k(m, b);
var src = CryptoJS.enc.Utf8.parse(a);
return CryptoJS.enc.Base64.stringify(src);
}
// eg: get_analysis("https://api.qimai.cn/rank/indexPlus/brand_id/1", ["2019-07-15", "5000", "all", "cn", "iphone"])
function get_analysis(url, m) {
var e = +new Date - 1105735 - 1515125653845;
m = m.sort().join(""); //"2019-07-155000allcniphone"
src = CryptoJS.enc.Utf8.parse(m);
m = CryptoJS.enc.Base64.stringify(src); // "MjAxOS0wNy0xNTUwMDBhbGxjbmlwaG9uZQ=="
m += "@#" + url.replace("https://api.qimai.cn", ""); // 将url去掉"https://api.qimai.cn"的部分
m += "@#" + e;
m += "@#" + 1; // m = "MjAxOS0wNy0xNTYwMTRjbmZyZWVpcGFk@#/rank/index@#48150525045@#1"
var b = "00000008d78d46a";
var a = k(m, b);
src = CryptoJS.enc.Utf8.parse(a);
return CryptoJS.enc.Base64.stringify(src);
}
