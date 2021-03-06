/*!
 * jQuery JavaScript Library v2.2.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:11Z
 */
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !! e && "length" in e && e.length,
            n = ae.type(e);
        return "function" === n || ae.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (ae.isFunction(t)) return ae.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ae.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return ae.filter(t, e, n);
            t = ae.filter(t, e)
        }
        return ae.grep(e, function(e) {
            return Q.call(t, e) > -1 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return ae.each(e.match(ke) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function r() {
        Y.removeEventListener("DOMContentLoaded", r), e.removeEventListener("load", r), ae.ready()
    }

    function s() {
        this.expando = ae.expando + s.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ae, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : je.test(n) ? ae.parseJSON(n) : n
                } catch (o) {}
                Te.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c(e, t, n, i) {
        var o, a = 1,
            r = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return ae.css(e, t, "")
            }, l = s(),
            c = n && n[3] || (ae.cssNumber[t] ? "" : "px"),
            u = (ae.cssNumber[t] || "px" !== c && +l) && Pe.exec(ae.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do a = a || ".5", u /= a, ae.style(e, t, u + c); while (a !== (a = s() / l) && 1 !== a && --r)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function u(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
    }

    function p(e, t, n, i, o) {
        for (var a, r, s, l, c, p, h = t.createDocumentFragment(), m = [], f = 0, g = e.length; g > f; f++)
            if (a = e[f], a || 0 === a)
                if ("object" === ae.type(a)) ae.merge(m, a.nodeType ? [a] : a);
                else if (Me.test(a)) {
            for (r = r || h.appendChild(t.createElement("div")), s = (Ne.exec(a) || ["", ""])[1].toLowerCase(), l = Oe[s] || Oe._default, r.innerHTML = l[1] + ae.htmlPrefilter(a) + l[2], p = l[0]; p--;) r = r.lastChild;
            ae.merge(m, r.childNodes), r = h.firstChild, r.textContent = ""
        } else m.push(t.createTextNode(a));
        for (h.textContent = "", f = 0; a = m[f++];)
            if (i && ae.inArray(a, i) > -1) o && o.push(a);
            else if (c = ae.contains(a.ownerDocument, a), r = u(h.appendChild(a), "script"), c && d(r), n)
            for (p = 0; a = r[p++];) $e.test(a.type || "") && n.push(a);
        return h
    }

    function h() {
        return !0
    }

    function m() {
        return !1
    }

    function f() {
        try {
            return Y.activeElement
        } catch (e) {}
    }

    function g(e, t, n, i, o, a) {
        var r, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) g(e, s, n, i, t[s], a);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = m;
        else if (!o) return e;
        return 1 === a && (r = o, o = function(e) {
            return ae().off(e), r.apply(this, arguments)
        }, o.guid = r.guid || (r.guid = ae.guid++)), e.each(function() {
            ae.event.add(this, t, o, i, n)
        })
    }

    function v(e, t) {
        return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Be.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        var n, i, o, a, r, s, l, c;
        if (1 === t.nodeType) {
            if (ze.hasData(e) && (a = ze.access(e), r = ze.set(t, a), c = a.events)) {
                delete r.handle, r.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++) ae.event.add(t, o, c[o][n])
            }
            Te.hasData(e) && (s = Te.access(e), l = ae.extend({}, s), Te.set(t, l))
        }
    }

    function k(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && De.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function w(e, t, n, i) {
        t = X.apply([], t);
        var o, a, r, s, l, c, d = 0,
            h = e.length,
            m = h - 1,
            f = t[0],
            g = ae.isFunction(f);
        if (g || h > 1 && "string" == typeof f && !ie.checkClone && Ke.test(f)) return e.each(function(o) {
            var a = e.eq(o);
            g && (t[0] = f.call(this, o, a.html())), w(a, t, n, i)
        });
        if (h && (o = p(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (r = ae.map(u(o, "script"), y), s = r.length; h > d; d++) l = o, d !== m && (l = ae.clone(l, !0, !0), s && ae.merge(r, u(l, "script"))), n.call(e[d], l, d);
            if (s)
                for (c = r[r.length - 1].ownerDocument, ae.map(r, b), d = 0; s > d; d++) l = r[d], $e.test(l.type || "") && !ze.access(l, "globalEval") && ae.contains(c, l) && (l.src ? ae._evalUrl && ae._evalUrl(l.src) : ae.globalEval(l.textContent.replace(Ve, "")))
        }
        return e
    }

    function x(e, t, n) {
        for (var i, o = t ? ae.filter(t, e) : e, a = 0; null != (i = o[a]); a++) n || 1 !== i.nodeType || ae.cleanData(u(i)), i.parentNode && (n && ae.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function C(e, t) {
        var n = ae(t.createElement(e)).appendTo(t.body),
            i = ae.css(n[0], "display");
        return n.detach(), i
    }

    function z(e) {
        var t = Y,
            n = Ue[e];
        return n || (n = C(e, t), "none" !== n && n || (Ge = (Ge || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ge[0].contentDocument, t.write(), t.close(), n = C(e, t), Ge.detach()), Ue[e] = n), n
    }

    function T(e, t, n) {
        var i, o, a, r, s = e.style;
        return n = n || Je(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== r && void 0 !== r || ae.contains(e.ownerDocument, e) || (r = ae.style(e, t)), n && !ie.pixelMarginRight() && Ye.test(r) && We.test(t) && (i = s.width, o = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = i, s.minWidth = o, s.maxWidth = a), void 0 !== r ? r + "" : r
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in it) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in it) return e
    }

    function S(e, t, n) {
        var i = Pe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function P(e, t, n, i, o) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > a; a += 2) "margin" === n && (r += ae.css(e, n + Ie[a], !0, o)), i ? ("content" === n && (r -= ae.css(e, "padding" + Ie[a], !0, o)), "margin" !== n && (r -= ae.css(e, "border" + Ie[a] + "Width", !0, o))) : (r += ae.css(e, "padding" + Ie[a], !0, o), "padding" !== n && (r += ae.css(e, "border" + Ie[a] + "Width", !0, o)));
        return r
    }

    function I(t, n, i) {
        var o = !0,
            a = "width" === n ? t.offsetWidth : t.offsetHeight,
            r = Je(t),
            s = "border-box" === ae.css(t, "boxSizing", !1, r);
        if (Y.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= a || null == a) {
            if (a = T(t, n, r), (0 > a || null == a) && (a = t.style[n]), Ye.test(a)) return a;
            o = s && (ie.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0
        }
        return a + P(t, n, i || (s ? "border" : "content"), o, r) + "px"
    }

    function E(e, t) {
        for (var n, i, o, a = [], r = 0, s = e.length; s > r; r++) i = e[r], i.style && (a[r] = ze.get(i, "olddisplay"), n = i.style.display, t ? (a[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (a[r] = ze.access(i, "olddisplay", z(i.nodeName)))) : (o = Ee(i), "none" === n && o || ze.set(i, "olddisplay", o ? n : ae.css(i, "display"))));
        for (r = 0; s > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[r] || "" : "none"));
        return e
    }

    function D(e, t, n, i, o) {
        return new D.prototype.init(e, t, n, i, o)
    }

    function N() {
        return e.setTimeout(function() {
            ot = void 0
        }), ot = ae.now()
    }

    function $(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ie[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function O(e, t, n) {
        for (var i, o = (R.tweeners[t] || []).concat(R.tweeners["*"]), a = 0, r = o.length; r > a; a++)
            if (i = o[a].call(n, t, e)) return i
    }

    function M(e, t, n) {
        var i, o, a, r, s, l, c, u, d = this,
            p = {}, h = e.style,
            m = e.nodeType && Ee(e),
            f = ze.get(e, "fxshow");
        n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = ae.css(e, "display"), u = "none" === c ? ze.get(e, "olddisplay") || z(e.nodeName) : c, "inline" === u && "none" === ae.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], rt.exec(o)) {
                if (delete t[i], a = a || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[i]) continue;
                    m = !0
                }
                p[i] = f && f[i] || ae.style(e, i)
            } else c = void 0;
        if (ae.isEmptyObject(p)) "inline" === ("none" === c ? z(e.nodeName) : c) && (h.display = c);
        else {
            f ? "hidden" in f && (m = f.hidden) : f = ze.access(e, "fxshow", {}), a && (f.hidden = !m), m ? ae(e).show() : d.done(function() {
                ae(e).hide()
            }), d.done(function() {
                var t;
                ze.remove(e, "fxshow");
                for (t in p) ae.style(e, t, p[t])
            });
            for (i in p) r = O(m ? f[i] : 0, i, d), i in f || (f[i] = r.start, m && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function L(e, t) {
        var n, i, o, a, r;
        for (n in e)
            if (i = ae.camelCase(n), o = t[i], a = e[n], ae.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), r = ae.cssHooks[i], r && "expand" in r) {
                a = r.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = o)
            } else t[i] = o
    }

    function R(e, t, n) {
        var i, o, a = 0,
            r = R.prefilters.length,
            s = ae.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ot || N(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(a);
                return s.notifyWith(e, [c, a, n]), 1 > a && l ? n : (s.resolveWith(e, [c]), !1)
            }, c = s.promise({
                elem: e,
                props: ae.extend({}, t),
                opts: ae.extend(!0, {
                    specialEasing: {},
                    easing: ae.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ae.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (L(u, c.opts.specialEasing); r > a; a++)
            if (i = R.prefilters[a].call(c, e, u, c.opts)) return ae.isFunction(i.stop) && (ae._queueHooks(c.elem, c.opts.queue).stop = ae.proxy(i.stop, i)), i;
        return ae.map(u, O, c), ae.isFunction(c.opts.start) && c.opts.start.call(e, c), ae.fx.timer(ae.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function H(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                a = t.toLowerCase().match(ke) || [];
            if (ae.isFunction(n))
                for (; i = a[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function o(s) {
            var l;
            return a[s] = !0, ae.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || r || a[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var a = {}, r = e === zt;
        return o(t.dataTypes[0]) || !a["*"] && o("*")
    }

    function K(e, t) {
        var n, i, o = ae.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ae.extend(!0, e, i), e
    }

    function B(e, t, n) {
        for (var i, o, a, r, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                r || (r = o)
            }
            a = a || r
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function V(e, t, n, i) {
        var o, a, r, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (a = u.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (r = c[l + " " + a] || c["* " + a], !r)
                for (o in c)
                    if (s = o.split(" "), s[1] === a && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
                        r === !0 ? r = c[o] : c[o] !== !0 && (a = s[0], u.unshift(s[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: r ? d : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e, t, n, i) {
        var o;
        if (ae.isArray(t)) ae.each(t, function(t, o) {
            n || St.test(e) ? i(e, o) : G(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== ae.type(t)) i(e, t);
        else
            for (o in t) G(e + "[" + o + "]", t[o], n, i)
    }

    function U(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W = [],
        Y = e.document,
        J = W.slice,
        X = W.concat,
        Z = W.push,
        Q = W.indexOf,
        ee = {}, te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {}, oe = "2.2.1",
        ae = function(e, t) {
            return new ae.fn.init(e, t)
        }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(e, t) {
            return t.toUpperCase()
        };
    ae.fn = ae.prototype = {
        jquery: oe,
        constructor: ae,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return ae.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ae.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    }, ae.extend = ae.fn.extend = function() {
        var e, t, n, i, o, a, r = arguments[0] || {}, s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[s] || {}, s++), "object" == typeof r || ae.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = r[t], i = e[t], r !== i && (c && i && (ae.isPlainObject(i) || (o = ae.isArray(i))) ? (o ? (o = !1, a = n && ae.isArray(n) ? n : []) : a = n && ae.isPlainObject(n) ? n : {}, r[t] = ae.extend(c, a, i)) : void 0 !== i && (r[t] = i));
        return r
    }, ae.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ae.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== ae.type(e) || e.nodeType || ae.isWindow(e) ? !1 : e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = ae.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(le, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ae.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Q.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], a = 0, r = e.length, s = !n; r > a; a++) i = !t(e[a], a), i !== s && o.push(e[a]);
            return o
        },
        map: function(e, t, i) {
            var o, a, r = 0,
                s = [];
            if (n(e))
                for (o = e.length; o > r; r++) a = t(e[r], r, i), null != a && s.push(a);
            else
                for (r in e) a = t(e[r], r, i), null != a && s.push(a);
            return X.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), ae.isFunction(e) ? (i = J.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(J.call(arguments)))
            }, o.guid = e.guid = e.guid || ae.guid++, o) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = W[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ue =
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    function(e) {
        function t(e, t, n, i) {
            var o, a, r, s, l, c, d, h, m = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== E && I(t), t = t || E, N)) {
                if (11 !== f && (c = ve.exec(e)))
                    if (o = c[1]) {
                        if (9 === f) {
                            if (!(r = t.getElementById(o))) return n;
                            if (r.id === o) return n.push(r), n
                        } else if (m && (r = m.getElementById(o)) && L(t, r) && r.id === o) return n.push(r), n
                    } else {
                        if (c[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = c[3]) && k.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                    }
                if (k.qsa && !V[e + " "] && (!$ || !$.test(e))) {
                    if (1 !== f) m = t, h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = R), d = z(e), a = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = l + " " + p(d[a]);
                        h = d.join(","), m = ye.test(e) && u(t.parentNode) || t
                    }
                    if (h) try {
                        return Z.apply(n, m.querySelectorAll(h)), n
                    } catch (g) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return j(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function o(e) {
            var t = E.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function r(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, a = e([], n.length, t), r = a.length; r--;) n[o = a[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                a = F++;
            return t.first ? function(t, n, a) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, a)
            } : function(t, n, r) {
                var s, l, c, u = [H, a];
                if (r) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, r)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (c = t[R] || (t[R] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === H && s[1] === a) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, r)) return !0
                        }
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, i) {
            for (var o = 0, a = n.length; a > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var a, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(a = e[s]) && (!n || n(a, i, o)) && (r.push(a), c && t.push(s));
            return r
        }

        function v(e, t, n, o, a, r) {
            return o && !o[R] && (o = v(o)), a && !a[R] && (a = v(a, r)), i(function(i, r, s, l) {
                var c, u, d, p = [],
                    h = [],
                    m = r.length,
                    v = i || f(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, p, e, s, l),
                    b = n ? a || (i ? e : m || o) ? [] : r : y;
                if (n && n(y, b, s, l), o)
                    for (c = g(b, h), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            a(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = a ? ee(i, d) : p[u]) > -1 && (i[c] = !(r[c] = d))
                    }
                } else b = g(b === r ? b.splice(m, b.length) : b), a ? a(null, r, b, l) : Z.apply(r, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, a = w.relative[e[0].type], r = a || w.relative[" "], s = a ? 1 : 0, l = h(function(e) {
                    return e === t
                }, r, !0), c = h(function(e) {
                    return ee(t, e) > -1
                }, r, !0), u = [
                    function(e, n, i) {
                        var o = !a && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, o
                    }
                ]; o > s; s++)
                if (n = w.relative[e[s].type]) u = [h(m(u), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (i = ++s; o > i && !w.relative[e[i].type]; i++);
                        return v(s > 1 && m(u), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    u.push(n)
                }
            return m(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                a = e.length > 0,
                r = function(i, r, s, l, c) {
                    var u, d, p, h = 0,
                        m = "0",
                        f = i && [],
                        v = [],
                        y = A,
                        b = i || a && w.find.TAG("*", c),
                        _ = H += null == y ? 1 : Math.random() || .1,
                        k = b.length;
                    for (c && (A = r === E || r || c); m !== k && null != (u = b[m]); m++) {
                        if (a && u) {
                            for (d = 0, r || u.ownerDocument === E || (I(u), s = !N); p = e[d++];)
                                if (p(u, r || E, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (H = _)
                        }
                        o && ((u = !p && u) && h--, i && f.push(u))
                    }
                    if (h += m, o && m !== h) {
                        for (d = 0; p = n[d++];) p(f, v, r, s);
                        if (i) {
                            if (h > 0)
                                for (; m--;) f[m] || v[m] || (v[m] = J.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (H = _, A = y), f
                };
            return o ? i(r) : r
        }
        var _, k, w, x, C, z, T, j, A, S, P, I, E, D, N, $, O, M, L, R = "sizzle" + 1 * new Date,
            q = e.document,
            H = 0,
            F = 0,
            K = n(),
            B = n(),
            V = n(),
            G = function(e, t) {
                return e === t && (P = !0), 0
            }, U = 1 << 31,
            W = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            X = Y.push,
            Z = Y.push,
            Q = Y.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            re = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            ke = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, we = function() {
                I()
            };
        try {
            Z.apply(Y = Q.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
        } catch (xe) {
            Z = {
                apply: Y.length ? function(e, t) {
                    X.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        k = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, I = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, D = E.documentElement, N = !C(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), k.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), k.getElementsByTagName = o(function(e) {
                return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
            }), k.getElementsByClassName = ge.test(E.getElementsByClassName), k.getById = o(function(e) {
                return D.appendChild(e).id = R, !E.getElementsByName || !E.getElementsByName(R).length
            }), k.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(_e, ke);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(_e, ke);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = k.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, w.find.CLASS = k.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
            }, O = [], $ = [], (k.qsa = ge.test(E.querySelectorAll)) && (o(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || $.push("~="), e.querySelectorAll(":checked").length || $.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || $.push(".#.+[+~]")
            }), o(function(e) {
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
            })), (k.matchesSelector = ge.test(M = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                k.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), O.push("!=", ae)
            }), $ = $.length && new RegExp($.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(D.compareDocumentPosition), L = t || ge.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, G = t ? function(e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === q && L(q, e) ? -1 : t === E || t.ownerDocument === q && L(q, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return P = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !a) return e === E ? -1 : t === E ? 1 : o ? -1 : a ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                if (o === a) return r(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? r(s[i], l[i]) : s[i] === q ? -1 : l[i] === q ? 1 : 0
            }, E) : E
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== E && I(e), n = n.replace(ue, "='$1']"), k.matchesSelector && N && !V[n + " "] && (!O || !O.test(n)) && (!$ || !$.test(n))) try {
                var i = M.call(e, n);
                if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, E, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== E && I(e), L(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== E && I(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && W.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== i ? i : k.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (P = !k.detectDuplicates, S = !k.sortStable && e.slice(0), e.sort(G), P) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return S = null, e
        }, x = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += x(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(_e, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = z(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(_e, ke).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = K[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && K(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var a = t.attr(o, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var a = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, h, m, f = a !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (g) {
                            if (a) {
                                for (; f;) {
                                    for (p = t; p = p[f];)
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    m = f = "only" === e && !m && "nextSibling"
                                }
                                return !0
                            }
                            if (m = [r ? g.firstChild : g.lastChild], r && y) {
                                for (p = g, d = p[R] || (p[R] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === H && c[1], b = h && c[2], p = h && g.childNodes[h]; p = ++h && p && p[f] || (b = h = 0) || m.pop();)
                                    if (1 === p.nodeType && ++b && p === t) {
                                        u[e] = [H, h, b];
                                        break
                                    }
                            } else if (y && (p = t, d = p[R] || (p[R] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === H && c[1], b = h), b === !1)
                                for (;
                                    (p = ++h && p && p[f] || (b = h = 0) || m.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[R] || (p[R] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [H, b]), p !== t)););
                            return b -= o, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[R] ? a(n) : a.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = a(e, n), r = o.length; r--;) i = ee(e, o[r]), e[i] = !(t[i] = o[r])
                    }) : function(e) {
                        return a(e, 0, o)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = T(e.replace(se, "$1"));
                    return o[R] ? i(function(e, t, n, i) {
                        for (var a, r = o(e, null, i, []), s = e.length; s--;)(a = r[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, o(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(_e, ke),
                    function(t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, ke).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (_ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[_] = s(_);
        for (_ in {
            submit: !0,
            reset: !0
        }) w.pseudos[_] = l(_);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, z = t.tokenize = function(e, n) {
            var i, o, a, r, s, l, c, u = B[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = w.preFilter; s;) {
                (!i || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(a = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), a.push({
                    value: i,
                    type: o[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (r in w.filter)!(o = he[r].exec(s)) || c[r] && !(o = c[r](o)) || (i = o.shift(), a.push({
                    value: i,
                    type: r,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                a = V[e + " "];
            if (!a) {
                for (t || (t = z(e)), n = t.length; n--;) a = y(t[n]), a[R] ? i.push(a) : o.push(a);
                a = V(e, b(o, i)), a.selector = e
            }
            return a
        }, j = t.select = function(e, t, n, i) {
            var o, a, r, s, l, c = "function" == typeof e && e,
                d = !i && z(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && k.getById && 9 === t.nodeType && N && w.relative[a[1].type]) {
                    if (t = (w.find.ID(r.matches[0].replace(_e, ke), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : a.length; o-- && (r = a[o], !w.relative[s = r.type]);)
                    if ((l = w.find[s]) && (i = l(r.matches[0].replace(_e, ke), ye.test(a[0].type) && u(t.parentNode) || t))) {
                        if (a.splice(o, 1), e = i.length && p(a), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return (c || T(e, d))(i, t, !N, n, !t || ye.test(e) && u(t.parentNode) || t), n
        }, k.sortStable = R.split("").sort(G).join("") === R, k.detectDuplicates = !! P, I(), k.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), k.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    ae.find = ue, ae.expr = ue.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = ue.uniqueSort, ae.text = ue.getText, ae.isXMLDoc = ue.isXML, ae.contains = ue.contains;
    var de = function(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && ae(e).is(n)) break;
                i.push(e)
            }
        return i
    }, pe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, he = ae.expr.match.needsContext,
        me = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ae.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ae.find.matchesSelector(i, e) ? [i] : [] : ae.find.matches(e, ae.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ae.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (ae.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) ae.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && he.test(e) ? ae(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = ae.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || ge, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), me.test(i[1]) && ae.isPlainObject(t))
                        for (i in t) ae.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = Y.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
        };
    ye.prototype = ae.fn, ge = ae(Y);
    var be = /^(?:parents|prev(?:Until|All))/,
        _e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ae.fn.extend({
        has: function(e) {
            var t = ae(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (ae.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, a = [], r = he.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? ae.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Q.call(ae(e), this[0]) : Q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ae.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ae.merge([], e.childNodes)
        }
    }, function(e, t) {
        ae.fn[e] = function(n, i) {
            var o = ae.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ae.filter(i, o)), this.length > 1 && (_e[e] || ae.uniqueSort(o), be.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var ke = /\S+/g;
    ae.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : ae.extend({}, e);
        var t, n, i, o, r = [],
            s = [],
            l = -1,
            c = function() {
                for (o = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            }, u = {
                add: function() {
                    return r && (n && !t && (l = r.length - 1, s.push(n)), function i(t) {
                        ae.each(t, function(t, n) {
                            ae.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== ae.type(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return ae.each(arguments, function(e, t) {
                        for (var n;
                            (n = ae.inArray(t, r, n)) > -1;) r.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? ae.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], n || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ae.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", ae.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ae.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ae.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ae.Deferred(function(n) {
                            ae.each(t, function(t, a) {
                                var r = ae.isFunction(e[t]) && e[t];
                                o[a[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ae.extend(e, i) : i
                    }
                }, o = {};
            return i.pipe = i.then, ae.each(t, function(e, a) {
                var r = a[2],
                    s = a[3];
                i[a[1]] = r.add, s && r.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[a[0]] = function() {
                    return o[a[0] + "With"](this === o ? i : this, arguments), this
                }, o[a[0] + "With"] = r.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                a = J.call(arguments),
                r = a.length,
                s = 1 !== r || e && ae.isFunction(e.promise) ? r : 0,
                l = 1 === s ? e : ae.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (r > 1)
                for (t = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) a[o] && ae.isFunction(a[o].promise) ? a[o].promise().progress(c(o, n, t)).done(c(o, i, a)).fail(l.reject) : --s;
            return s || l.resolveWith(i, a), l.promise()
        }
    });
    var we;
    ae.fn.ready = function(e) {
        return ae.ready.promise().done(e), this
    }, ae.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ae.readyWait++ : ae.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (we.resolveWith(Y, [ae]), ae.fn.triggerHandler && (ae(Y).triggerHandler("ready"), ae(Y).off("ready"))))
        }
    }), ae.ready.promise = function(t) {
        return we || (we = ae.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? e.setTimeout(ae.ready) : (Y.addEventListener("DOMContentLoaded", r), e.addEventListener("load", r))), we.promise(t)
    }, ae.ready.promise();
    var xe = function(e, t, n, i, o, a, r) {
        var s = 0,
            l = e.length,
            c = null == n;
        if ("object" === ae.type(n)) {
            o = !0;
            for (s in n) xe(e, t, s, n[s], !0, a, r)
        } else if (void 0 !== i && (o = !0, ae.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
            return c.call(ae(e), n)
        })), t))
            for (; l > s; s++) t(e[s], n, r ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
    }, Ce = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Ce(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Ce(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ae.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 === t) this.register(e);
                else {
                    ae.isArray(t) ? i = t.concat(t.map(ae.camelCase)) : (o = ae.camelCase(t), t in a ? i = [t, o] : (i = o, i = i in a ? [i] : i.match(ke) || [])), n = i.length;
                    for (; n--;) delete a[i[n]]
                }(void 0 === t || ae.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ae.isEmptyObject(t)
        }
    };
    var ze = new s,
        Te = new s,
        je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /[A-Z]/g;
    ae.extend({
        hasData: function(e) {
            return Te.hasData(e) || ze.hasData(e)
        },
        data: function(e, t, n) {
            return Te.access(e, t, n)
        },
        removeData: function(e, t) {
            Te.remove(e, t)
        },
        _data: function(e, t, n) {
            return ze.access(e, t, n)
        },
        _removeData: function(e, t) {
            ze.remove(e, t)
        }
    }), ae.fn.extend({
        data: function(e, t) {
            var n, i, o, a = this[0],
                r = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (o = Te.get(a), 1 === a.nodeType && !ze.get(a, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = ae.camelCase(i.slice(5)), l(a, i, o[i])));
                    ze.set(a, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Te.set(this, e)
            }) : xe(this, function(t) {
                var n, i;
                if (a && void 0 === t) {
                    if (n = Te.get(a, e) || Te.get(a, e.replace(Ae, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = ae.camelCase(e), n = Te.get(a, i), void 0 !== n) return n;
                    if (n = l(a, i, void 0), void 0 !== n) return n
                } else i = ae.camelCase(e), this.each(function() {
                    var n = Te.get(this, i);
                    Te.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Te.remove(this, e)
            })
        }
    }), ae.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ze.get(e, t), n && (!i || ae.isArray(n) ? i = ze.access(e, t, ae.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ae.queue(e, t),
                i = n.length,
                o = n.shift(),
                a = ae._queueHooks(e, t),
                r = function() {
                    ae.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, r, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ze.get(e, n) || ze.access(e, n, {
                empty: ae.Callbacks("once memory").add(function() {
                    ze.remove(e, [t + "queue", n])
                })
            })
        }
    }), ae.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ae.queue(this, e, t);
                ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ae.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = ae.Deferred(),
                a = this,
                r = this.length,
                s = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = ze.get(a[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pe = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"],
        Ee = function(e, t) {
            return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
        }, De = /^(?:checkbox|radio)$/i,
        Ne = /<([\w:-]+)/,
        $e = /^$|\/(?:java|ecma)script/i,
        Oe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td;
    var Me = /<|&#?\w+;/;
    ! function() {
        var e = Y.createDocumentFragment(),
            t = e.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
    }();
    var Le = /^key/,
        Re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        qe = /^([^.]*)(?:\.(.+)|)/;
    ae.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var a, r, s, l, c, u, d, p, h, m, f, g = ze.get(e);
            if (g)
                for (n.handler && (a = n, n = a.handler, o = a.selector), n.guid || (n.guid = ae.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                    return "undefined" != typeof ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(ke) || [""], c = t.length; c--;) s = qe.exec(t[c]) || [], h = f = s[1], m = (s[2] || "").split(".").sort(), h && (d = ae.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = ae.event.special[h] || {}, u = ae.extend({
                    type: h,
                    origType: f,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ae.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, a), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, m, r) !== !1 || e.addEventListener && e.addEventListener(h, r)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ae.event.global[h] = !0)
        },
        remove: function(e, t, n, i, o) {
            var a, r, s, l, c, u, d, p, h, m, f, g = ze.hasData(e) && ze.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(ke) || [""], c = t.length; c--;)
                    if (s = qe.exec(t[c]) || [], h = f = s[1], m = (s[2] || "").split(".").sort(), h) {
                        for (d = ae.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = p.length; a--;) u = p[a], !o && f !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        r && !p.length && (d.teardown && d.teardown.call(e, m, g.handle) !== !1 || ae.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) ae.event.remove(e, h + t[c], n, i, !0);
                ae.isEmptyObject(l) && ze.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ae.event.fix(e);
            var t, n, i, o, a, r = [],
                s = J.call(arguments),
                l = (ze.get(this, "events") || {})[e.type] || [],
                c = ae.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (r = ae.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(a.namespace)) && (e.handleObj = a,
                        e.data = a.data, i = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, a, r = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) a = t[n], o = a.selector + " ", void 0 === i[o] && (i[o] = a.needsContext ? ae(o, this).index(l) > -1 : ae.find(o, this, null, [l]).length), i[o] && i.push(a);
                        i.length && r.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && r.push({
                elem: this,
                handlers: t.slice(s)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ae.expando]) return e;
            var t, n, i, o = e.type,
                a = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Re.test(o) ? this.mouseHooks : Le.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new ae.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ae.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ae.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ae.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ae.Event = function(e, t) {
        return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : m) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
    }, ae.Event.prototype = {
        constructor: ae.Event,
        isDefaultPrevented: m,
        isPropagationStopped: m,
        isImmediatePropagationStopped: m,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ae.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    a = e.handleObj;
                return (!o || o !== i && !ae.contains(i, o)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ae.fn.extend({
        on: function(e, t, n, i) {
            return g(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return g(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = m), this.each(function() {
                ae.event.remove(this, e, n, t)
            })
        }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Fe = /<script|<style|<link/i,
        Ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ae.extend({
        htmlPrefilter: function(e) {
            return e.replace(He, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, a, r, s = e.cloneNode(!0),
                l = ae.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))
                for (r = u(s), a = u(e), i = 0, o = a.length; o > i; i++) k(a[i], r[i]);
            if (t)
                if (n)
                    for (a = a || u(e), r = r || u(s), i = 0, o = a.length; o > i; i++) _(a[i], r[i]);
                else _(e, s);
            return r = u(s, "script"), r.length > 0 && d(r, !l && u(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, o = ae.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Ce(n)) {
                    if (t = n[ze.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? ae.event.remove(n, i) : ae.removeEvent(n, i, t.handle);
                        n[ze.expando] = void 0
                    }
                    n[Te.expando] && (n[Te.expando] = void 0)
                }
        }
    }), ae.fn.extend({
        domManip: w,
        detach: function(e) {
            return x(this, e, !0)
        },
        remove: function(e) {
            return x(this, e)
        },
        text: function(e) {
            return xe(this, function(e) {
                return void 0 === e ? ae.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ae.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ae.clone(this, e, t)
            })
        },
        html: function(e) {
            return xe(this, function(e) {
                var t = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !Oe[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ae.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ae.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return w(this, arguments, function(t) {
                var n = this.parentNode;
                ae.inArray(this, e) < 0 && (ae.cleanData(u(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ae.fn[e] = function(e) {
            for (var n, i = [], o = ae(e), a = o.length - 1, r = 0; a >= r; r++) n = r === a ? this : this.clone(!0), ae(o[r])[t](n), Z.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ge, Ue = {
            HTML: "block",
            BODY: "block"
        }, We = /^margin/,
        Ye = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        Je = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, Xe = function(e, t, n, i) {
            var o, a, r = {};
            for (a in t) r[a] = e.style[a], e.style[a] = t[a];
            o = n.apply(e, i || []);
            for (a in t) e.style[a] = r[a];
            return o
        }, Ze = Y.documentElement;
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ze.appendChild(r);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, a = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Ze.removeChild(r)
        }
        var n, i, o, a, r = Y.createElement("div"),
            s = Y.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(s), ae.extend(ie, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            pixelMarginRight: function() {
                return null == i && t(), o
            },
            reliableMarginLeft: function() {
                return null == i && t(), a
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Y.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ze.appendChild(r), t = !parseFloat(e.getComputedStyle(n).marginRight), Ze.removeChild(r), s.removeChild(n), t
            }
        }))
    }();
    var Qe = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, tt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, nt = ["Webkit", "O", "Moz", "ms"],
        it = Y.createElement("div").style;
    ae.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = T(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, r, s = ae.camelCase(t),
                    l = e.style;
                return t = ae.cssProps[s] || (ae.cssProps[s] = A(s) || s), r = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t] : (a = typeof n, "string" === a && (o = Pe.exec(n)) && o[1] && (n = c(e, t, o), a = "number"), null != n && n === n && ("number" === a && (n += o && o[3] || (ae.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var o, a, r, s = ae.camelCase(t);
            return t = ae.cssProps[s] || (ae.cssProps[s] = A(s) || s), r = ae.cssHooks[t] || ae.cssHooks[s], r && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = T(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (a = parseFloat(o), n === !0 || isFinite(a) ? a || 0 : o) : o
        }
    }), ae.each(["height", "width"], function(e, t) {
        ae.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Qe.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Xe(e, et, function() {
                    return I(e, t, i)
                }) : I(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o, a = i && Je(e),
                    r = i && P(e, t, i, "border-box" === ae.css(e, "boxSizing", !1, a), a);
                return r && (o = Pe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ae.css(e, t)), S(e, n, r)
            }
        }
    }), ae.cssHooks.marginLeft = j(ie.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(T(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), ae.cssHooks.marginRight = j(ie.reliableMarginRight, function(e, t) {
        return t ? Xe(e, {
            display: "inline-block"
        }, T, [e, "marginRight"]) : void 0
    }), ae.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ae.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ie[i] + t] = a[i] || a[i - 2] || a[0];
                return o
            }
        }, We.test(e) || (ae.cssHooks[e + t].set = S)
    }), ae.fn.extend({
        css: function(e, t) {
            return xe(this, function(e, t, n) {
                var i, o, a = {}, r = 0;
                if (ae.isArray(t)) {
                    for (i = Je(e), o = t.length; o > r; r++) a[t[r]] = ae.css(e, t[r], !1, i);
                    return a
                }
                return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ee(this) ? ae(this).show() : ae(this).hide()
            })
        }
    }), ae.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, i, o, a) {
            this.elem = e, this.prop = n, this.easing = o || ae.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ae.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ae.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ae.fx = D.prototype.init, ae.fx.step = {};
    var ot, at, rt = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    ae.Animation = ae.extend(R, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, Pe.exec(t), n), n
                }
            ]
        },
        tweener: function(e, t) {
            ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ke);
            for (var n, i = 0, o = e.length; o > i; i++) n = e[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
        },
        prefilters: [M],
        prefilter: function(e, t) {
            t ? R.prefilters.unshift(e) : R.prefilters.push(e)
        }
    }), ae.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? ae.extend({}, e) : {
            complete: n || !n && t || ae.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ae.isFunction(t) && t
        };
        return i.duration = ae.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ae.fx.speeds ? ae.fx.speeds[i.duration] : ae.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ae.isFunction(i.old) && i.old.call(this), i.queue && ae.dequeue(this, i.queue)
        }, i
    }, ae.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = ae.isEmptyObject(e),
                a = ae.speed(t, n, i),
                r = function() {
                    var t = R(this, ae.extend({}, e), a);
                    (o || ze.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, o || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    a = ae.timers,
                    r = ze.get(this);
                if (o) r[o] && r[o].stop && i(r[o]);
                else
                    for (o in r) r[o] && r[o].stop && st.test(o) && i(r[o]);
                for (o = a.length; o--;) a[o].elem !== this || null != e && a[o].queue !== e || (a[o].anim.stop(n), t = !1, a.splice(o, 1));
                (t || !n) && ae.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ze.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    a = ae.timers,
                    r = i ? i.length : 0;
                for (n.finish = !0, ae.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), ae.each(["toggle", "show", "hide"], function(e, t) {
        var n = ae.fn[t];
        ae.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, o)
        }
    }), ae.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ae.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), ae.timers = [], ae.fx.tick = function() {
        var e, t = 0,
            n = ae.timers;
        for (ot = ae.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || ae.fx.stop(), ot = void 0
    }, ae.fx.timer = function(e) {
        ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
    }, ae.fx.interval = 13, ae.fx.start = function() {
        at || (at = e.setInterval(ae.fx.tick, ae.fx.interval))
    }, ae.fx.stop = function() {
        e.clearInterval(at), at = null
    }, ae.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ae.fn.delay = function(t, n) {
        return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    },
    function() {
        var e = Y.createElement("input"),
            t = Y.createElement("select"),
            n = t.appendChild(Y.createElement("option"));
        e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
    }();
    var lt, ct = ae.expr.attrHandle;
    ae.fn.extend({
        attr: function(e, t) {
            return xe(this, ae.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ae.removeAttr(this, e)
            })
        }
    }), ae.extend({
        attr: function(e, t, n) {
            var i, o, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ae.prop(e, t, n) : (1 === a && ae.isXMLDoc(e) || (t = t.toLowerCase(), o = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ae.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                a = t && t.match(ke);
            if (a && 1 === e.nodeType)
                for (; n = a[o++];) i = ae.propFix[n] || n, ae.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), lt = {
        set: function(e, t, n) {
            return t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ct[t] || ae.find.attr;
        ct[t] = function(e, t, i) {
            var o, a;
            return i || (a = ct[t], ct[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = a), o
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;
    ae.fn.extend({
        prop: function(e, t) {
            return xe(this, ae.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ae.propFix[e] || e]
            })
        }
    }), ae.extend({
        prop: function(e, t, n) {
            var i, o, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, o = ae.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (ae.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ae.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    ae.fn.extend({
        addClass: function(e) {
            var t, n, i, o, a, r, s, l = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).addClass(e.call(this, t, q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(ke) || []; n = this[l++];)
                    if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                        for (r = 0; a = t[r++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        s = ae.trim(i), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, a, r, s, l = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).removeClass(e.call(this, t, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(ke) || []; n = this[l++];)
                    if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                        for (r = 0; a = t[r++];)
                            for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                        s = ae.trim(i), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function(n) {
                ae(this).toggleClass(e.call(this, n, q(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if ("string" === n)
                    for (i = 0, o = ae(this), a = e.match(ke) || []; t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = q(this), t && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ze.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + q(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    ae.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = ae.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, ae(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ae.isArray(o) && (o = ae.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = ae.valHooks[o.type] || ae.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ht, "") : null == n ? "" : n)
            }
        }
    }), ae.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return ae.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, a = "select-one" === e.type || 0 > o, r = a ? null : [], s = a ? o + 1 : i.length, l = 0 > o ? s : a ? o : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ae(n).val(), a) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, a = ae.makeArray(t), r = o.length; r--;) i = o[r], (i.selected = ae.inArray(ae.valHooks.option.get(i), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), ae.each(["radio", "checkbox"], function() {
        ae.valHooks[this] = {
            set: function(e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0
            }
        }, ie.checkOn || (ae.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    ae.extend(ae.event, {
        trigger: function(t, n, i, o) {
            var a, r, s, l, c, u, d, p = [i || Y],
                h = ne.call(t, "type") ? t.type : t,
                m = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = s = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(h + ae.event.triggered) && (h.indexOf(".") > -1 && (m = h.split("."), h = m.shift(), m.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[ae.expando] ? t : new ae.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ae.makeArray(n, [t]), d = ae.event.special[h] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !ae.isWindow(i)) {
                    for (l = d.delegateType || h, mt.test(l + h) || (r = r.parentNode); r; r = r.parentNode) p.push(r), s = r;
                    s === (i.ownerDocument || Y) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0;
                    (r = p[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : d.bindType || h, u = (ze.get(r, "events") || {})[t.type] && ze.get(r, "handle"), u && u.apply(r, n), u = c && r[c], u && u.apply && Ce(r) && (t.result = u.apply(r, n), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Ce(i) || c && ae.isFunction(i[h]) && !ae.isWindow(i) && (s = i[c], s && (i[c] = null), ae.event.triggered = h, i[h](), ae.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = ae.extend(new ae.Event, n, {
                type: e,
                isSimulated: !0
            });
            ae.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), ae.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ae.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ae.event.trigger(e, t, n, !0) : void 0
        }
    }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ae.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ae.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || ae.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ae.event.simulate(t, e.target, ae.event.fix(e))
        };
        ae.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ze.access(i, t);
                o || i.addEventListener(e, n, !0), ze.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ze.access(i, t) - 1;
                o ? ze.access(i, t, o) : (i.removeEventListener(e, n, !0), ze.remove(i, t))
            }
        }
    });
    var ft = e.location,
        gt = ae.now(),
        vt = /\?/;
    ae.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ae.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ae.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        wt = /^(?:GET|HEAD)$/,
        xt = /^\/\//,
        Ct = {}, zt = {}, Tt = "*/".concat("*"),
        jt = Y.createElement("a");
    jt.href = ft.href, ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft.href,
            type: "GET",
            isLocal: kt.test(ft.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ae.parseJSON,
                "text xml": ae.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, ae.ajaxSettings), t) : K(ae.ajaxSettings, e)
        },
        ajaxPrefilter: H(Ct),
        ajaxTransport: H(zt),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var c, d, y, b, k, x = n;
                2 !== _ && (_ = 2, l && e.clearTimeout(l), o = void 0, r = s || "", w.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = B(p, w, i)), b = V(p, b, w, c), c ? (p.ifModified && (k = w.getResponseHeader("Last-Modified"), k && (ae.lastModified[a] = k), k = w.getResponseHeader("etag"), k && (ae.etag[a] = k)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, y = b.error, c = !y)) : (y = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (n || x) + "", c ? f.resolveWith(h, [d, x, w]) : f.rejectWith(h, [w, x, y]), w.statusCode(v), v = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? d : y]), g.fireWith(h, [w, x]), u && (m.trigger("ajaxComplete", [w, p]), --ae.active || ae.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, a, r, s, l, c, u, d, p = ae.ajaxSetup({}, n),
                h = p.context || p,
                m = p.context && (h.nodeType || h.jquery) ? ae(h) : ae.event,
                f = ae.Deferred(),
                g = ae.Callbacks("once memory"),
                v = p.statusCode || {}, y = {}, b = {}, _ = 0,
                k = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === _) {
                            if (!s)
                                for (s = {}; t = _t.exec(r);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return _ || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return _ || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > _)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || k;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || ft.href) + "").replace(yt, "").replace(xt, ft.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ae.trim(p.dataType || "*").toLowerCase().match(ke) || [""], null == p.crossDomain) {
                c = Y.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host
                } catch (x) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ae.param(p.data, p.traditional)), F(Ct, p, n, w), 2 === _) return w;
            u = ae.event && p.global, u && 0 === ae.active++ && ae.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !wt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (vt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = bt.test(a) ? a.replace(bt, "$1_=" + gt++) : a + (vt.test(a) ? "&" : "?") + "_=" + gt++)), p.ifModified && (ae.lastModified[a] && w.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && w.setRequestHeader("If-None-Match", ae.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(h, w, p) === !1 || 2 === _)) return w.abort();
            k = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) w[d](p[d]);
            if (o = F(zt, p, n, w)) {
                if (w.readyState = 1, u && m.trigger("ajaxSend", [w, p]), 2 === _) return w;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    _ = 1, o.send(y, i)
                } catch (x) {
                    if (!(2 > _)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ae.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ae.get(e, void 0, t, "script")
        }
    }), ae.each(["get", "post"], function(e, t) {
        ae[t] = function(e, n, i, o) {
            return ae.isFunction(n) && (o = o || i, i = n, n = void 0), ae.ajax(ae.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, ae.isPlainObject(e) && e))
        }
    }), ae._evalUrl = function(e) {
        return ae.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ae.fn.extend({
        wrapAll: function(e) {
            var t;
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ae(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ae.isFunction(e);
            return this.each(function(n) {
                ae(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ae.expr.filters.hidden = function(e) {
        return !ae.expr.filters.visible(e)
    }, ae.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var At = /%20/g,
        St = /\[\]$/,
        Pt = /\r?\n/g,
        It = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    ae.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = ae.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) G(n, e[n], t, o);
        return i.join("&").replace(At, "+")
    }, ae.fn.extend({
        serialize: function() {
            return ae.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && Et.test(this.nodeName) && !It.test(e) && (this.checked || !De.test(e))
            }).map(function(e, t) {
                var n = ae(this).val();
                return null == n ? null : ae.isArray(n) ? ae.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Pt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Pt, "\r\n")
                }
            }).get()
        }
    }), ae.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Dt = {
        0: 200,
        1223: 204
    }, Nt = ae.ajaxSettings.xhr();
    ie.cors = !! Nt && "withCredentials" in Nt, ie.ajax = Nt = !! Nt, ae.ajaxTransport(function(t) {
        var n, i;
        return ie.cors || Nt && !t.crossDomain ? {
            send: function(o, a) {
                var r, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) s[r] = t.xhrFields[r];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (r in o) s.setRequestHeader(r, o[r]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Dt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), ae.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ae.globalEval(e), e
            }
        }
    }), ae.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ae.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = ae("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Y.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var $t = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || ae.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), ae.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, a, r, s = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ot, "$1" + o) : t.jsonp !== !1 && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || ae.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", a = e[o], e[o] = function() {
            r = arguments
        }, i.always(function() {
            void 0 === a ? ae(e).removeProp(o) : e[o] = a, t[o] && (t.jsonpCallback = n.jsonpCallback, $t.push(o)), r && ae.isFunction(a) && a(r[0]), r = a = void 0
        }), "script") : void 0
    }), ie.createHTMLDocument = function() {
        var e = Y.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ae.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (ie.createHTMLDocument ? Y.implementation.createHTMLDocument("") : Y);
        var i = me.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = p([e], t, o), o && o.length && ae(o).remove(), ae.merge([], i.childNodes))
    };
    var Mt = ae.fn.load;
    ae.fn.load = function(e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var i, o, a, r = this,
            s = e.indexOf(" ");
        return s > -1 && (i = ae.trim(e.slice(s)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && ae.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, r.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            r.each(function() {
                n.apply(r, a || [e.responseText, t, e])
            })
        }), this
    }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ae.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ae.expr.filters.animated = function(e) {
        return ae.grep(ae.timers, function(t) {
            return e === t.elem
        }).length
    }, ae.offset = {
        setOffset: function(e, t, n) {
            var i, o, a, r, s, l, c, u = ae.css(e, "position"),
                d = ae(e),
                p = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), a = ae.css(e, "top"), l = ae.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1, c ? (i = d.position(), r = i.top, o = i.left) : (r = parseFloat(a) || 0, o = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))), null != t.top && (p.top = t.top - s.top + r), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, ae.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ae.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                }, a = i && i.ownerDocument;
            if (a) return t = a.documentElement, ae.contains(t, i) ? (o = i.getBoundingClientRect(), n = U(a), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (i = e.offset()), i.top += ae.css(e[0], "borderTopWidth", !0), i.left += ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - ae.css(n, "marginTop", !0),
                    left: t.left - i.left - ae.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ae.css(e, "position");) e = e.offsetParent;
                return e || Ze
            })
        }
    }), ae.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ae.fn[e] = function(i) {
            return xe(this, function(e, i, o) {
                var a = U(e);
                return void 0 === o ? a ? a[t] : e[i] : void(a ? a.scrollTo(n ? a.pageXOffset : o, n ? o : a.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), ae.each(["top", "left"], function(e, t) {
        ae.cssHooks[t] = j(ie.pixelPosition, function(e, n) {
            return n ? (n = T(e, t), Ye.test(n) ? ae(e).position()[t] + "px" : n) : void 0
        })
    }), ae.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ae.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ae.fn[i] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    r = n || (i === !0 || o === !0 ? "margin" : "border");
                return xe(this, function(t, n, i) {
                    var o;
                    return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ae.css(t, n, r) : ae.style(t, n, i, r)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), ae.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ae
    });
    var Lt = e.jQuery,
        Rt = e.$;
    return ae.noConflict = function(t) {
        return e.$ === ae && (e.$ = Rt), t && e.jQuery === ae && (e.jQuery = Lt), ae
    }, t || (e.jQuery = e.$ = ae), ae
}), function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i), o.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(i) {
            var o, a, r, s, l, c;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    o = i.data("ujs:submit-button-formmethod") || i.attr("method"), a = i.data("ujs:submit-button-formaction") || i.attr("action"), r = e(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (r.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), a = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", a = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (o = i.data("method"), a = n.href(i), r = i.data("params") || null);
                return c = {
                    type: o || "GET",
                    data: r,
                    dataType: l,
                    beforeSend: function(e, o) {
                        return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(a)
                }, s && (c.xhrFields = {
                    withCredentials: s
                }), a && (c.url = a), n.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var o = n.href(i),
                a = i.data("method"),
                r = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                c = e('<form method="post" action="' + o + '"></form>'),
                u = '<input name="_method" value="' + a + '" type="hidden" />';
            l === t || s === t || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                o = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    o = n.confirm(i)
                } catch (a) {
                    (console.error || console.log).call(console, a.stack || a)
                }
                t = n.fire(e, "confirm:complete", [o])
            }
            return o && t
        },
        blankInputs: function(t, n, i) {
            var o, a, r, s, l = e(),
                c = n || "input,textarea",
                u = t.find(c),
                d = {};
            return u.each(function() {
                o = e(this), o.is("input[type=radio]") ? (s = o.attr("name"), d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (r = t.find('input[type=radio][name="' + s + '"]'), l = l.add(r)), d[s] = s)) : (a = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !! o.val(), a === i && (l = l.add(o)))
            }), l.length ? l : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(t) {
        var i = e(this),
            o = i.data("method"),
            a = i.data("params"),
            r = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!r && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (r && (!o || "GET" === o) && !a) return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return o ? (n.handleMethod(i), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o, a, r = e(this),
            s = n.isRemote(r);
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.attr("novalidate") === t)
            if (r.data("ujs:formnovalidate-button") === t) {
                if (o = n.blankInputs(r, n.requiredInputSelector, !1), o && n.fire(r, "ajax:aborted:required", [o])) return n.stopEverything(i)
            } else r.data("ujs:formnovalidate-button", t);
        if (s) {
            if (a = n.nonBlankInputs(r, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(r)
                }, 13);
                var l = n.fire(r, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    n.enableFormElements(r)
                }, 13), l
            }
            return n.handleRemote(r), !1
        }
        setTimeout(function() {
            n.disableFormElements(r)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
            a = o ? {
                name: o,
                value: i.val()
            } : null,
            r = i.closest("form");
        0 === r.length && (r = e("#" + i.attr("form"))), r.data("ujs:submit-button", a), r.data("ujs:formnovalidate-button", i.attr("formnovalidate")), r.data("ujs:submit-button-formaction", i.attr("formaction")), r.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery),
/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this),
            a = o.attr("data-target");
        a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
        var r = e(a);
        t && t.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = o, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.button"),
                a = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, a)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            a = i.data();
        t += "Text", null == a.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
            i[o](null == a[t] ? this.options[t] : a[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.carousel"),
                a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                r = "string" == typeof t ? t : a.slide;
            o || i.data("bs.carousel", o = new n(this, a)), "number" == typeof t ? o.to(t) : r ? o[r]() : a.interval && o.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var o = "prev" == e ? -1 : 1,
            a = (n + o) % this.$items.length;
        return this.$items.eq(a)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var o = this.$element.find(".item.active"),
            a = i || this.getItemForDirection(t, o),
            r = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (a.hasClass("active")) return this.sliding = !1;
        var c = a[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(a)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (a.addClass(t), a[0].offsetWidth, o.addClass(s), a.addClass(s), o.one("bsTransitionEnd", function() {
                a.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = e(this),
            a = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (a.hasClass("carousel")) {
            var r = e.extend({}, a.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (r.interval = !1), t.call(a, r), s && a.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.collapse"),
                a = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && a.toggle && /show|hide/.test(t) && (a.toggle = !1), o || n.data("bs.collapse", o = new i(this, a)), "string" == typeof t && o[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                var a = e.Event("show.bs.collapse");
                if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var a = t(o),
            r = a.data("bs.collapse"),
            s = r ? "toggle" : o.data();
        n.call(a, s)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(o).remove(), e(a).each(function() {
            var i = e(this),
                o = t(i),
                a = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", a)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", a)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        a = '[data-toggle="dropdown"]',
        r = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.6", r.prototype.toggle = function(i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var a = t(o),
                r = a.hasClass("open");
            if (n(), !r) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (a.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, r.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = t(i),
                    r = o.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && o.find(a).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + s);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, r.prototype.toggle).on("keydown.bs.dropdown.data-api", a, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = e(this),
                a = o.data("bs.modal"),
                r = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            a || o.data("bs.modal", a = new n(this, r)), "string" == typeof t ? a[t](i) : r.show && a.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var a = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(a)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            a = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = a.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, a.data(), i.data());
        i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(a, r, this)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tooltip"),
                a = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.tooltip", o = new n(this, a)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
            var r = o[a];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != r) {
                var s = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var o = this,
                a = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), a.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && a.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), a.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = a[0].offsetWidth,
                p = a[0].offsetHeight;
            if (c) {
                var h = s,
                    m = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + p > m.bottom ? "top" : "top" == s && u.top - p < m.top ? "bottom" : "right" == s && u.right + d > m.width ? "left" : "left" == s && u.left - d < m.left ? "right" : s, a.removeClass(h).addClass(s)
            }
            var f = this.getCalculatedOffset(s, u, d, p);
            this.applyPlacement(f, s);
            var g = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            a = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(s) && (s = 0), t.top += r, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != a && (t.top = t.top + a - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * u.left - o + l : 2 * u.top - a + c,
            h = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][h], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != o.hoverState && a.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }
        var o = this,
            a = e(this.$tip),
            r = e.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var a = i ? {
            top: 0,
            left: 0
        } : t.offset(),
            r = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            }, s = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, r, s, a)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var a = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - a - r.scroll,
                l = t.top + a - r.scroll + i;
            s < r.top ? o.top = r.top - s : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = t.left - a,
                u = t.left + a + n;
            c < r.left ? o.left = r.left - c : u > r.right && (o.left = r.left + r.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.popover"),
                a = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.popover", o = new n(this, a)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.scrollspy"),
                a = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, a)), "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.6", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                o = t.data("target") || t.attr("href"),
                a = /^#./.test(o) && e(o);
            return a && a.length && a.is(":visible") && [
                [a[n]().top + i, o]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            a = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return r != (e = a[a.length - 1]) && this.activate(e);
        if (r && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) r != a[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(a[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                a = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                r = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(a), t.trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, o) {
        function a() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = i.find("> .active"),
            s = o && e.support.transition && (r.length && r.hasClass("fade") || !! i.find("> .fade").length);
        r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), r.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.affix"),
                a = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, a)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop(),
            a = this.$element.offset(),
            r = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? o + this.unpin <= a.top ? !1 : "bottom" : e - i >= o + r ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? o : a.top,
            c = s ? r : t;
        return null != n && n >= o ? "top" : null != i && l + c >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                a = i.bottom,
                r = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (a = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof a && (a = i.bottom(this.$element));
            var s = this.getState(r, t, o, a);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: r - t - a
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery), window.Paloma = window.Paloma || {}, window.console ? (Paloma.warn = function(e) {
    "development" == Paloma.env && console.warn(e)
}, Paloma.log = function(e) {
    "development" == Paloma.env && console.log(e)
}) : Paloma.log = Paloma.warn = function(e) {}, $(document).ready(function() {
    return void 0 === window.Paloma ? (void 0 !== window.console && console.warn("Paloma not found. Require it in your application.js."), !0) : void Paloma.engine.start()
}),
function(e) {
    var t = function(e) {
        this.namespaceDelimiter = e
    };
    t.prototype.parse = function(e) {
        var t = e.split(this.namespaceDelimiter),
            n = t.pop(),
            i = t,
            o = i.concat([n]);
        return {
            controllerPath: o,
            namespaces: i,
            controller: n
        }
    }, e.Router = t
}(window.Paloma),
function(e) {
    var t = function(e) {
        this.params = e
    };
    e.Controller = t
}(window.Paloma),
function(e) {
    var t = function(e) {
        this.instances = {}, this.router = e
    };
    t.prototype.make = function(e) {
        for (var t = this.router.parse(e), i = this.instances, o = 0, a = t.namespaces.length; a > o; o++) {
            var r = t.namespaces[o];
            i[r] = i[r] || {}, i = i[r]
        }
        return i[t.controller] = n()
    }, t.prototype.get = function(e) {
        for (var t = this.router.parse(e), n = this.instances, i = 0, o = t.controllerPath.length; o > i; i++) {
            var a = t.controllerPath[i];
            if (null == n[a]) return null;
            n = n[a]
        }
        return n
    };
    var n = function() {
        var t = function(e) {
            this.params = e
        };
        return $.extend(t, e.Controller), $.extend(t.prototype, e.Controller.prototype), t
    };
    e.ControllerFactory = t
}(window.Paloma),
function(e) {
    var t = function(e) {
        this.factory = e.factory, this._request = null
    };
    t.prototype.start = function() {
        if (this._request && !this._request.executed) {
            var t = this._request.controller,
                n = this.factory.get(t);
            if (!n) return e.warn("Paloma: undefined controller -> " + t);
            var i = new n(this._request.params),
                o = this._request.action,
                a = this._request.params;
            if (!i[o]) return e.warn("Paloma: undefined action <" + o + "> for <" + t + "> controller");
            e.log("Paloma: Execute " + t + "#" + o + " with"), e.log(a), i[this._request.action](), this._request.executed = !0
        }
    }, t.prototype.setRequest = function(e) {
        this._request = {
            id: e.id,
            controller: e.resource,
            action: e.action,
            params: e.params,
            executed: !1
        }
    }, t.prototype.getRequest = function(e) {
        return e ? this._request[e] : this._request
    }, e.Engine = t
}(window.Paloma),
function(Paloma) {
    Paloma._router = new Paloma.Router("/"), Paloma._controllerFactory = new Paloma.ControllerFactory(Paloma._router), Paloma.controller = function(e) {
        return Paloma._controllerFactory.get(e) || Paloma._controllerFactory.make(e)
    }, Paloma.engine = new Paloma.Engine({
        factory: Paloma._controllerFactory
    }), Paloma.executeHook = function() {
        var $hook = $(".js-paloma-hook:first script:first");
        if (0 != $hook.length) {
            var hook = $hook.html();
            eval(hook)
        }
    }
}(window.Paloma), ! function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        var n, i = document.createElement(e || "div");
        for (n in t) i[n] = t[n];
        return i
    }

    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++) e.appendChild(arguments[t]);
        return e
    }

    function n(e, t, n, i) {
        var o = ["opacity", t, ~~ (100 * e), n, i].join("-"),
            a = .01 + n / i * 100,
            r = Math.max(1 - (1 - e) / t * (100 - a), e),
            s = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = s && "-" + s + "-" || "";
        return p[o] || (u.insertRule("@" + l + "keyframes " + o + "{0%{opacity:" + r + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + r + "}}", u.cssRules.length), p[o] = 1), o
    }

    function i(e, t) {
        var n, i, o = e.style;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < d.length; i++)
            if (n = d[i] + t, void 0 !== o[n]) return n;
        return void 0 !== o[t] ? t : void 0
    }

    function o(e, t) {
        for (var n in t) e.style[i(e, n) || n] = t[n];
        return e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) void 0 === e[i] && (e[i] = n[i])
        }
        return e
    }

    function r(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
    }

    function s(e) {
        this.opts = a(e || {}, s.defaults, h)
    }

    function l() {
        function n(t, n) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
        }
        u.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function(e, i) {
            function a() {
                return o(n("group", {
                    coordsize: u + " " + u,
                    coordorigin: -c + " " + -c
                }), {
                    width: u,
                    height: u
                })
            }

            function s(e, s, l) {
                t(p, t(o(a(), {
                    rotation: 360 / i.lines * e + "deg",
                    left: ~~s
                }), t(o(n("roundrect", {
                    arcsize: i.corners
                }), {
                    width: c,
                    height: i.scale * i.width,
                    left: i.scale * i.radius,
                    top: -i.scale * i.width >> 1,
                    filter: l
                }), n("fill", {
                    color: r(i.color, e),
                    opacity: i.opacity
                }), n("stroke", {
                    opacity: 0
                }))))
            }
            var l, c = i.scale * (i.length + i.width),
                u = 2 * i.scale * c,
                d = -(i.width + i.length) * i.scale * 2 + "px",
                p = o(a(), {
                    position: "absolute",
                    top: d,
                    left: d
                });
            if (i.shadow)
                for (l = 1; l <= i.lines; l++) s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= i.lines; l++) s(l);
            return t(e, p)
        }, s.prototype.opacity = function(e, t, n, i) {
            var o = e.firstChild;
            i = i.shadow && i.lines || 0, o && t + i < o.childNodes.length && (o = o.childNodes[t + i], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = n))
        }
    }
    var c, u, d = ["webkit", "Moz", "ms", "O"],
        p = {}, h = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            scale: 1,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            position: "absolute"
        };
    if (s.defaults = {}, a(s.prototype, {
        spin: function(t) {
            this.stop();
            var n = this,
                i = n.opts,
                a = n.el = o(e(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                });
            if (o(a, {
                left: i.left,
                top: i.top
            }), t && t.insertBefore(a, t.firstChild || null), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !c) {
                var r, s = 0,
                    l = (i.lines - 1) * (1 - i.direction) / 2,
                    u = i.fps,
                    d = u / i.speed,
                    p = (1 - i.opacity) / (d * i.trail / 100),
                    h = d / i.lines;
                ! function m() {
                    s++;
                    for (var e = 0; e < i.lines; e++) r = Math.max(1 - (s + (i.lines - e) * h) % d * p, i.opacity), n.opacity(a, e * i.direction + l, r, i);
                    n.timeout = n.el && setTimeout(m, ~~ (1e3 / u))
                }()
            }
            return n
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
        },
        lines: function(i, a) {
            function s(t, n) {
                return o(e(), {
                    position: "absolute",
                    width: a.scale * (a.length + a.width) + "px",
                    height: a.scale * a.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / a.lines * u + a.rotate) + "deg) translate(" + a.scale * a.radius + "px,0)",
                    borderRadius: (a.corners * a.scale * a.width >> 1) + "px"
                })
            }
            for (var l, u = 0, d = (a.lines - 1) * (1 - a.direction) / 2; u < a.lines; u++) l = o(e(), {
                position: "absolute",
                top: 1 + ~(a.scale * a.width / 2) + "px",
                transform: a.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: a.opacity,
                animation: c && n(a.opacity, a.trail, d + u * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
            }), a.shadow && t(l, o(s("#000", "0 0 4px #000"), {
                top: "2px"
            })), t(i, t(l, s(r(a.color, u), "0 0 1px rgba(0,0,0,.1)")));
            return i
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    }), "undefined" != typeof document) {
        u = function() {
            var n = e("style", {
                type: "text/css"
            });
            return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
        }();
        var m = o(e("group"), {
            behavior: "url(#default#VML)"
        });
        !i(m, "transform") && m.adj ? l() : c = i(m, "animation")
    }
    return s
}),
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e) {
    if ("object" == typeof exports) e(require("jquery"), require("spin.js"));
    else if ("function" == typeof define && define.amd) define(["jquery", "spin"], e);
    else {
        if (!window.Spinner) throw new Error("Spin.js not present");
        e(window.jQuery, window.Spinner)
    }
}(function(e, t) {
    e.fn.spin = function(n, i) {
        return this.each(function() {
            var o = e(this),
                a = o.data();
            a.spinner && (a.spinner.stop(), delete a.spinner), n !== !1 && (n = e.extend({
                color: i || o.css("color")
            }, e.fn.spin.presets[n] || n), a.spinner = new t(n).spin(this))
        })
    }, e.fn.spin.presets = {
        tiny: {
            lines: 8,
            length: 2,
            width: 2,
            radius: 3
        },
        small: {
            lines: 8,
            length: 4,
            width: 3,
            radius: 5
        },
        large: {
            lines: 10,
            length: 8,
            width: 4,
            radius: 8
        }
    }
}),
/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, i, o, a, r, s = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        u = "BeforeAppend",
        d = "MarkupParse",
        p = "Open",
        h = "Change",
        m = "mfp",
        f = "." + m,
        g = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        b = function() {}, _ = !! window.jQuery,
        k = e(window),
        w = function(e, n) {
            t.ev.on(m + e + f, n)
        }, x = function(t, n, i, o) {
            var a = document.createElement("div");
            return a.className = "mfp-" + t, i && (a.innerHTML = i), o ? n && n.appendChild(a) : (a = e(a), n && a.appendTo(n)), a
        }, C = function(n, i) {
            t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        }, z = function(n) {
            return n === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), r = n), t.currTemplate.closeBtn
        }, T = function() {
            e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
        }, j = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    b.prototype = {
        constructor: b,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = j(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var r, s = n.items;
                for (o = 0; o < s.length; o++)
                    if (r = s[o], r.parsed && (r = r.el[0]), r === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; if (t.isOpen) return void t.updateItemHTML();
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + f, function() {
                t.close()
            }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + f, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            C("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(d, function(e, t, n, i) {
                n.close_replaceWith = z(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(z())), t.st.alignTop && (a += " mfp-align-top"), t.wrap.css(t.fixedContentPos ? {
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            } : {
                top: k.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && i.on("keyup" + f, function(e) {
                27 === e.keyCode && t.close()
            }), k.on("resize" + f, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = k.height(),
                h = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var m = t._getScrollbarSize();
                m && (h.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), C("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), i.on("focusin" + f, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), C(p), n
        },
        close: function() {
            t.isOpen && (C(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            C(s);
            var n = v + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            i.off("keyup" + f + " focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, C(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || k.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), C("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (C("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var a = t.st[i] ? t.st[i].markup : !1;
                C("FirstMarkupParse", a), t.currTemplate[i] = a ? e(a) : !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var r = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(r, i), n.preloaded = !0, C(h, n), o = n.type, t.container.prepend(t.contentContainer), C("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(z()) : t.content = e : t.content = "", C(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (i = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
                for (var a = t.types, r = 0; r < a.length; r++)
                    if (o.el.hasClass("mfp-" + a[r])) {
                        i = a[r];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, C("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var a = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (a || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t)) return !0
                    } else if (k.width() < r) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                C("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || k.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), C(d, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(f + "-" + o[0]);
                    if (i.length > 0) {
                        var a = o[1];
                        "replaceWith" === a ? i[0] !== n[0] && i.replaceWith(n) : "img" === a ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(f + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function(t, n) {
            return T(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        T();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, a = _ ? i.data("magnificPopup") : i[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                a.items ? o = a.items[r] : (o = i, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({
                    mfpEl: o
                }, i, a)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else n = e.extend(!0, {}, n), _ ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var A, S, P, I = "inline",
        E = function() {
            P && (S.after(P.addClass(A)).detach(), P = null)
        };
    e.magnificPopup.registerModule(I, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(I), w(s + "." + I, function() {
                    E()
                })
            },
            getInline: function(n, i) {
                if (E(), n.src) {
                    var o = t.st.inline,
                        a = e(n.src);
                    if (a.length) {
                        var r = a[0].parentNode;
                        r && r.tagName && (S || (A = o.hiddenClass, S = x(A), A = "mfp-" + A), P = a.after(S).detach().removeClass(A)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), a = e("<div>");
                    return n.inlineElement = a, a
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var D, N = "ajax",
        $ = function() {
            D && e(document.body).removeClass(D)
        }, O = function() {
            $(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(N, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(N), D = t.st.ajax.cursor, w(s + "." + N, O), w("BeforeChange." + N, O)
            },
            getAjax: function(n) {
                D && e(document.body).addClass(D), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(i, o, a) {
                        var r = {
                            data: i,
                            xhr: a
                        };
                        C("ParseAjax", r), t.appendContent(e(r.data), N), n.finished = !0, $(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(g)
                        }, 16), t.updateStatus("ready"), C("AjaxContentAdded")
                    },
                    error: function() {
                        $(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), ""
            }
        }
    });
    var M, L = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = t.st.image.titleSrc;
            if (i) {
                if (e.isFunction(i)) return i.call(t, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"), w(p + i, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), w(s + i, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), k.off("resize" + f)
                }), w("Resize" + i, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, M && clearInterval(M), e.isCheckingImgSize = !1, C("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(a) {
                        M && clearInterval(M), M = setInterval(function() {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(M), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, a)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    a = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, C("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(a, 100) : r()))
                    }, r = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    }, s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: L(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (M && clearInterval(M), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var R, q = function() {
            return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
        };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, a, r = n.duration,
                        c = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                }, a = "transition";
                            return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = i, t.css(o), t
                        }, u = function() {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            a = c(e), a.css(t._getOffset()), t.wrap.append(a), o = setTimeout(function() {
                                a.css(t._getOffset(!0)), o = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        a.remove(), e = a = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, r)
                            }, 16)
                        }
                    }), w(l + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = r, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                a = c(e)
                            }
                            a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout(function() {
                                a.css(t._getOffset())
                            }, 16)
                        }
                    }), w(s + i, function() {
                        t._allowZoom() && (u(), a && a.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    a = parseInt(i.css("padding-top"), 10),
                    r = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - a;
                var s = {
                    width: i.width(),
                    height: (_ ? i.innerHeight() : i[0].offsetHeight) - r - a
                };
                return q() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var H = "iframe",
        F = "//about:blank",
        K = function(e) {
            if (t.currTemplate[H]) {
                var n = t.currTemplate[H].find("iframe");
                n.length && (e || (n[0].src = F), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(H, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(H), w("BeforeChange", function(e, t, n) {
                    t !== n && (t === H ? K() : n === H && K(!0))
                }), w(s + "." + H, function() {
                    K()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    a = t.st.iframe;
                e.each(a.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var r = {};
                return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(i, r, n), t.updateStatus("ready"), i
            }
        }
    });
    var B = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    }, V = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    o = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", w(p + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), i.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), w("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = V(n.text, t.currItem.index, t.items.length))
                }), w(d + o, function(e, i, o, a) {
                    var r = t.items.length;
                    o.counter = r > 1 ? V(n.tCounter, a.index, r) : ""
                }), w("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), a[s](function() {
                            t.next()
                        }), t.isIE7 && (x("b", o[0], !1, !0), x("a", o[0], !1, !0), x("b", a[0], !1, !0), x("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), w(h + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void w(s + o, function() {
                    i.off(o), t.wrap.off("click" + o), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0, t.index = B(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = B(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = B(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), C("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, C("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var G = "retina";
    e.magnificPopup.registerModule(G, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (w("ImageHasSize." + G, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), w("ElementParse." + G, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
    function() {
        var t = 1e3,
            n = "ontouchstart" in window,
            i = function() {
                k.off("touchmove" + a + " touchend" + a)
            }, o = "mfpFastClick",
            a = "." + o;
        e.fn.mfpFastClick = function(o) {
            return e(this).each(function() {
                var r, s = e(this);
                if (n) {
                    var l, c, u, d, p, h;
                    s.on("touchstart" + a, function(e) {
                        d = !1, h = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, u = p.clientY, k.on("touchmove" + a, function(e) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches, h = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (d = !0, i())
                        }).on("touchend" + a, function(e) {
                            i(), d || h > 1 || (r = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                r = !1
                            }, t), o())
                        })
                    })
                }
                s.on("click" + a, function() {
                    r || o()
                })
            })
        }, e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + a + " click" + a), n && k.off("touchmove" + a + " touchend" + a)
        }
    }(), T()
});
var I18n = I18n || {};
I18n.defaultLocale = "en", I18n.fallbacks = !1, I18n.defaultSeparator = ".", I18n.locale = null, I18n.PLACEHOLDER = /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm, I18n.isValidNode = function(e, t, n) {
    return null !== e[t] && e[t] !== n
}, I18n.lookup = function(e, t) {
    var n, t = t || {}, i = e,
        o = this.prepareOptions(I18n.translations),
        a = o[t.locale || I18n.currentLocale()],
        t = this.prepareOptions(t);
    if (a) {
        for ("object" == typeof e && (e = e.join(this.defaultSeparator)), t.scope && (e = t.scope.toString() + this.defaultSeparator + e), e = e.split(this.defaultSeparator); e.length > 0;)
            if (n = e.shift(), a = a[n], !a) {
                I18n.fallbacks && !t.fallback && (a = I18n.lookup(i, this.prepareOptions({
                    locale: I18n.defaultLocale,
                    fallback: !0
                }, t)));
                break
            }
        return !a && this.isValidNode(t, "defaultValue") && (a = t.defaultValue), a
    }
}, I18n.prepareOptions = function() {
    for (var e, t = {}, n = arguments.length, i = 0; n > i; i++)
        if (e = arguments[i])
            for (var o in e) this.isValidNode(t, o) || (t[o] = e[o]);
    return t
}, I18n.interpolate = function(e, t) {
    t = this.prepareOptions(t);
    var n, i, o, a = e.match(this.PLACEHOLDER);
    if (!a) return e;
    for (var r = 0; n = a[r]; r++) o = n.replace(this.PLACEHOLDER, "$1"), i = t[o], this.isValidNode(t, o) || (i = "[missing " + n + " value]"), regex = new RegExp(n.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}")), e = e.replace(regex, i);
    return e
}, I18n.translate = function(e, t) {
    t = this.prepareOptions(t);
    var n = this.lookup(e, t);
    try {
        return "object" == typeof n ? "number" == typeof t.count ? this.pluralize(t.count, e, t) : n : this.interpolate(n, t)
    } catch (i) {
        return this.missingTranslation(e)
    }
}, I18n.localize = function(e, t) {
    switch (e) {
        case "currency":
            return this.toCurrency(t);
        case "number":
            return e = this.lookup("number.format"), this.toNumber(t, e);
        case "percentage":
            return this.toPercentage(t);
        default:
            return e.match(/^(date|time)/) ? this.toTime(e, t) : t.toString()
    }
}, I18n.parseDate = function(e) {
    var t, n;
    if ("object" == typeof e) return e;
    if (t = e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?(Z|\+0000)?/)) {
        for (var i = 1; 6 >= i; i++) t[i] = parseInt(t[i], 10) || 0;
        t[2] -= 1, n = t[7] ? new Date(Date.UTC(t[1], t[2], t[3], t[4], t[5], t[6])) : new Date(t[1], t[2], t[3], t[4], t[5], t[6])
    } else "number" == typeof e ? (n = new Date, n.setTime(e)) : e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/) ? (n = new Date, n.setTime(Date.parse(e))) : (n = new Date, n.setTime(Date.parse(e)));
    return n
}, I18n.toTime = function(e, t) {
    var n = this.parseDate(t),
        i = this.lookup(e);
    return n.toString().match(/invalid/i) ? n.toString() : i ? this.strftime(n, i) : n.toString()
}, I18n.strftime = function(e, t) {
    var n = this.lookup("date");
    if (!n) return e.toString();
    n.meridian = n.meridian || ["AM", "PM"];
    var i = e.getDay(),
        o = e.getDate(),
        a = e.getFullYear(),
        r = e.getMonth() + 1,
        s = e.getHours(),
        l = s,
        c = s > 11 ? 1 : 0,
        u = e.getSeconds(),
        d = e.getMinutes(),
        p = e.getTimezoneOffset(),
        h = Math.floor(Math.abs(p / 60)),
        m = Math.abs(p) - 60 * h,
        f = (p > 0 ? "-" : "+") + (h.toString().length < 2 ? "0" + h : h) + (m.toString().length < 2 ? "0" + m : m);
    l > 12 ? l -= 12 : 0 === l && (l = 12);
    var g = function(e) {
        var t = "0" + e.toString();
        return t.substr(t.length - 2)
    }, v = t;
    return v = v.replace("%a", n.abbr_day_names[i]), v = v.replace("%A", n.day_names[i]), v = v.replace("%b", n.abbr_month_names[r]), v = v.replace("%B", n.month_names[r]), v = v.replace("%d", g(o)), v = v.replace("%e", o), v = v.replace("%-d", o), v = v.replace("%H", g(s)), v = v.replace("%-H", s), v = v.replace("%I", g(l)), v = v.replace("%-I", l), v = v.replace("%m", g(r)), v = v.replace("%-m", r), v = v.replace("%M", g(d)), v = v.replace("%-M", d), v = v.replace("%p", n.meridian[c]), v = v.replace("%S", g(u)), v = v.replace("%-S", u), v = v.replace("%w", i), v = v.replace("%y", g(a)), v = v.replace("%-y", g(a).replace(/^0+/, "")), v = v.replace("%Y", a), v = v.replace("%z", f)
}, I18n.toNumber = function(e, t) {
    t = this.prepareOptions(t, this.lookup("number.format"), {
        precision: 3,
        separator: ".",
        delimiter: ",",
        strip_insignificant_zeros: !1
    });
    var n, i, o = 0 > e,
        a = Math.abs(e).toFixed(t.precision).toString(),
        r = a.split("."),
        s = [];
    for (e = r[0], n = r[1]; e.length > 0;) s.unshift(e.substr(Math.max(0, e.length - 3), 3)), e = e.substr(0, e.length - 3);
    if (i = s.join(t.delimiter), t.precision > 0 && (i += t.separator + r[1]), o && (i = "-" + i), t.strip_insignificant_zeros) {
        var l = {
            separator: new RegExp(t.separator.replace(/\./, "\\.") + "$"),
            zeros: /0+$/
        };
        i = i.replace(l.zeros, "").replace(l.separator, "")
    }
    return i
}, I18n.toCurrency = function(e, t) {
    return t = this.prepareOptions(t, this.lookup("number.currency.format"), this.lookup("number.format"), {
        unit: "$",
        precision: 2,
        format: "%u%n",
        delimiter: ",",
        separator: "."
    }), e = this.toNumber(e, t), e = t.format.replace("%u", t.unit).replace("%n", e)
}, I18n.toHumanSize = function(e, t) {
    for (var n, i, o = 1024, a = e, r = 0; a >= o && 4 > r;) a /= o, r += 1;
    return 0 === r ? (n = this.t("number.human.storage_units.units.byte", {
        count: a
    }), i = 0) : (n = this.t("number.human.storage_units.units." + [null, "kb", "mb", "gb", "tb"][r]), i = a - Math.floor(a) === 0 ? 0 : 1), t = this.prepareOptions(t, {
        precision: i,
        format: "%n%u",
        delimiter: ""
    }), e = this.toNumber(a, t), e = t.format.replace("%u", n).replace("%n", e)
}, I18n.toPercentage = function(e, t) {
    return t = this.prepareOptions(t, this.lookup("number.percentage.format"), this.lookup("number.format"), {
        precision: 3,
        separator: ".",
        delimiter: ""
    }), e = this.toNumber(e, t), e + "%"
}, I18n.pluralize = function(e, t, n) {
    var i;
    try {
        i = this.lookup(t, n)
    } catch (o) {}
    if (!i) return this.missingTranslation(t);
    var a;
    switch (n = this.prepareOptions(n), n.count = e.toString(), Math.abs(e)) {
        case 0:
            a = this.isValidNode(i, "zero") ? i.zero : this.isValidNode(i, "none") ? i.none : this.isValidNode(i, "other") ? i.other : this.missingTranslation(t, "zero");
            break;
        case 1:
            a = this.isValidNode(i, "one") ? i.one : this.missingTranslation(t, "one");
            break;
        default:
            a = this.isValidNode(i, "other") ? i.other : this.missingTranslation(t, "other")
    }
    return this.interpolate(a, n)
}, I18n.missingTranslation = function() {
    for (var e = '[missing "' + this.currentLocale(), t = arguments.length, n = 0; t > n; n++) e += "." + arguments[n];
    return e += '" translation]'
}, I18n.currentLocale = function() {
    return I18n.locale || I18n.defaultLocale
}, I18n.t = I18n.translate, I18n.l = I18n.localize, I18n.p = I18n.pluralize;
var I18n = I18n || {};
I18n.translations = {
    en: {
        helpers: {
            label: {
                welcome: "Welcome to GTA5-Mods.com",
                site_info: "Your source for the latest GTA 5 car mods, scripts, tools and more.",
                intro: "Select one of the following categories to start browsing the latest GTA 5 mods:",
                loading: "Loading...",
                cancel: "Cancel",
                send: "Send",
                donate: "Donate with %{paypal}",
                fix_errors: "Please fix the following errors:",
                user: {
                    email: "Email address",
                    email_confirmation: "Confirm email address",
                    username: "Username",
                    password: "Password",
                    password_new: "New password",
                    password_confirmation: "Confirm password",
                    password_confirmation_new: "Confirm new password",
                    password_requirements: {
                        one: "(1 character minimum)",
                        other: "(%{count} characters minimum)"
                    },
                    remember_me: "Remember me",
                    current_password: "Current password",
                    new_password: "New password"
                },
                filter: "Filter:",
                sort_by: "Sort by:",
                time_frame: "Since:",
                back_to_login: "Back to login",
                have_an_account: "Already have an account?",
                dont_have_an_account: "Don't have an account?",
                log_in_here: "Log in here.",
                register_here: "Register here.",
                confirm: {
                    title: "Are you sure?",
                    positive: "Yes",
                    negative: "No"
                },
                clear_all: "Clear All"
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Your username and password combination is incorrect.",
                banned: "You've been banned from the site. Reason: %{reason}",
                captcha_incorrect: "Please fill out the reCAPTCHA box and try again.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "Account & Profile",
                account_details: "Account Details",
                location: {
                    header: "Location",
                    placeholder: "(e.g. Los Santos, San Andreas)",
                    select: "Select Country..."
                },
                social: {
                    header: "Other Online Accounts",
                    website: "Personal Website",
                    paypal_error: "The PayPal merchant ID you entered is invalid.",
                    paypal_placeholder: "PayPal Merchant ID or email address",
                    skype_placeholder: "Skype name"
                },
                avatar: {
                    header: "Profile Picture",
                    upload: "Upload a custom profile picture:",
                    restrictions: "(.jpg or .png only; Maximum 750Kb; Recommended 256x256 pixels)",
                    select: "Or select one below:",
                    error: {
                        image_size: "That file exceeds our 750Kb limit.",
                        image_type: "That file type is not supported, please only upload .jpg and .png images."
                    }
                },
                submit: "Save Changes",
                loading: {
                    saving_settings: "Saving settings...",
                    uploading_avatar: "Uploading profile picture..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Creating file...",
                saving_file: "Saving file...",
                uploading_screenshots: "Uploading screenshots...",
                uploading_archive: "Uploading archive..."
            },
            error: {
                required: {
                    file_name: "File name is required.",
                    author: "Author name is required.",
                    category: "Please select a category.",
                    file: "Please select a file to upload."
                },
                restrictions: {
                    file_size: "That file exceeds our 100Mb limit.",
                    file_type: "That file type is not supported, please only upload .zip, .rar and .oiv files.",
                    image_limit: "You've reached the 15 screenshot maximum limit.",
                    image_size: "%{count} of your screenshots were not added because they exceed 2Mb.",
                    image_type: "%{count} of your screenshots were not added because their format is not supported - please upload only .jpg and .png images."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Delete",
                confirm: "Are you sure you want to delete this file?"
            },
            report: {
                title: "Report",
                explain: "Please explain why you are reporting this file..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Needs Work",
                star2: "OK",
                star3: "Good",
                star4: "Great",
                star5: "Awesome!",
                average: {
                    one: "%{rating} / 5 stars (1 vote)",
                    other: "%{rating} / 5 stars (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "1 Video",
                other: "%{count} Videos"
            },
            show_more: {
                one: "Show 1 more video",
                other: "Show %{count} more videos"
            },
            add_modal: {
                header: "Add a video to %{file_name}",
                instructions: "Enter the full URL to your video on YouTube, DailyMotion or Vimeo:",
                placeholder: "(e.g. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'If everything looks good, be sure to press "Add Video" below to save it.',
                error: {
                    parse: "We couldn't grab the video from that URL, please confirm you're using a supported website and try again."
                }
            },
            "delete": {
                confirm: "Are you sure you want to remove this video?"
            }
        },
        comment: {
            add: "Add Comment",
            label: {
                one: "1 Comment",
                other: "%{display_count} Comments"
            },
            author: "Author",
            reply: "Reply",
            pin: {
                title: "Pin Comment",
                pinned: "Pinned Comment",
                unpin: "Unpin Comment"
            },
            report: {
                title: "Report",
                explain: "Please explain why you are reporting this comment..."
            },
            "delete": {
                title: "Delete",
                confirm: "Are you sure you want to delete this comment?"
            },
            show_previous: {
                one: "Show previous 1 comment",
                other: "Show previous %{count} comments"
            },
            placeholder: "Add your comment...",
            submit: "Post Comment",
            loading: "Posting Comment...",
            fetching: "Loading comments...",
            flood_control: "Comments can't be added so quickly, please wait a few minutes and try again.",
            no_user_message: "Join the conversation! %{log_in} or %{register} for an account to be able to comment.",
            no_user_message_log_in: "Log In",
            no_user_message_register: "register",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    af: {
        helpers: null
    },
    ar: {
        helpers: null
    },
    az: {
        helpers: null
    },
    be: {
        helpers: null
    },
    bg: {
        helpers: null
    },
    bs: {
        helpers: null
    },
    ca: {
        helpers: null
    },
    cs: {
        helpers: {
            label: {
                welcome: "V\xedtejte na GTA5-Mods.com",
                site_info: "V\xe1\u0161 zdroj pro nejnov\u011bj\u0161\xed GTA 5 automobilov\xe9 m\xf3dy, skripty, n\xe1stroje a dal\u0161\xed",
                intro: "Zvolte jednu z n\xe1sleduj\xedc\xedch kategori\xed pro prohl\xed\u017een\xed nejnov\u011bj\u0161\xedch GTA 5 m\xf3d\u016f:",
                loading: "Na\u010d\xedt\xe1n\xed...",
                cancel: "Zru\u0161it",
                send: "Odeslat",
                donate: "P\u0159isp\u011bjte pomoc\xed %{paypal}",
                fix_errors: "Pros\xedm opravte n\xe1sleduj\xedc\xed chyby:",
                user: {
                    email: "E-mailov\xe1 adresa",
                    email_confirmation: "Potvrzen\xed e-mialu",
                    username: "P\u0159ezd\xedvka",
                    password: "Heslo",
                    password_new: "Nov\xe9 heslo",
                    password_confirmation: "Potvrzen\xed hesla",
                    password_confirmation_new: "Potvrzen\xed nov\xe9ho hesla",
                    password_requirements: {
                        one: "(minim\xe1ln\u011b %{count} znak)",
                        few: "(minim\xe1ln\u011b %{count} znaky)",
                        many: "(minim\xe1ln\u011b %{count} znak\u016f)",
                        other: "(minim\xe1ln\u011b %{count} znak\u016f)"
                    },
                    remember_me: "Zapamatovat si m\u011b",
                    current_password: "St\xe1vaj\xedc\xed heslo",
                    new_password: "Nov\xe9 heslo"
                },
                filter: "Filter:",
                sort_by: "\u0158adit pomoc\xed:",
                time_frame: "Od:",
                back_to_login: "Zp\u011bt na p\u0159ihl\xe1\u0161en\xed",
                have_an_account: "Ji\u017e m\xe1te \xfa\u010det?",
                dont_have_an_account: "Je\u0161t\u011b nem\xe1te \xfa\u010det?",
                log_in_here: "Zde se p\u0159ihla\u0161te.",
                register_here: "Zde se zaregistrujte.",
                confirm: {
                    title: "Jste si jist / jista?",
                    positive: "Ano",
                    negative: "Ne"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Potvrzovac\xed e-mail nesouhlas\xed, pros\xedm zkuste to znovu."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Kombinace va\u0161\xed p\u0159ezd\xedvky a hesla je nespr\xe1vn\xe1.",
                banned: "Byli jste zabanov\xe1ni z t\xe9to str\xe1nky. D\u016fvod: %{reason}",
                captcha_incorrect: "Pros\xedm vypl\u0148te ok\xe9nko reCAPTCHA a zkuste to znovu.",
                confirmation_notice: "V\xe1\u0161 \xfa\u010det je\u0161t\u011b nebyl potvrzen! Pros\xedm zkontrolujte v\xe1\u0161 e-mail pro potvrzovac\xed odkaz, nebo %{click_here}.",
                confirmation_notice_click_here: "Klikn\u011bte zde pro znovu zasl\xe1n\xed potvrzovac\xedch instrukc\xed"
            }
        },
        settings: {
            account: {
                header: "\xda\u010det a profil",
                account_details: "Detaily \xfa\u010dtu",
                location: {
                    header: "Lokace",
                    placeholder: "(Nap\u0159.: Los Santos, San Andreas)",
                    select: "Zvolte zemi"
                },
                social: {
                    header: "Dal\u0161\xed online \xfa\u010dty",
                    website: "Osobn\xed str\xe1nky",
                    paypal_error: "Obchodn\xed PayPal ID kter\xe9 jste zadal je neplatn\xe9.",
                    paypal_placeholder: "Obcohn\xed PayPal ID nebo e-mailov\xe1 adresa"
                },
                avatar: {
                    header: "Profilov\xfd obr\xe1zek",
                    upload: "Nahr\xe1t vlastn\xed profilov\xfd obr\xe1zek",
                    restrictions: "(pouze .jpg nebo .png; Maxim\xe1ln\u011b 750Kb; Doporu\u010den\xe9 256x256 pixel\u016f)",
                    select: "nebo zvolte jeden n\xed\u017ee",
                    error: {
                        image_size: "Tento soubor p\u0159esahuje n\xe1\u0161 750Kb limit.",
                        image_type: "Tento typ souboru nen\xed podporov\xe1n, pros\xedm, nahr\xe1vejte pouze .jpg nebo .png obr\xe1zky."
                    }
                },
                submit: "Ulo\u017eit zm\u011bny",
                loading: {
                    saving_settings: "Ukl\xe1d\xe1n\xed nastaven\xed...",
                    uploading_avatar: "Nahr\xe1v\xe1m profilov\xfd obr\xe1zek..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Vytv\xe1\u0159\xedm soubor...",
                saving_file: "Ukl\xe1d\xe1m soubor...",
                uploading_screenshots: "Nahr\xe1v\xe1m sn\xedmky obrazovky...",
                uploading_archive: "Nahr\xe1v\xe1m arch\xedv..."
            },
            error: {
                required: {
                    file_name: "Je po\u017eadov\xe1no jm\xe9no souboru.",
                    author: "Je po\u017eadov\xe1no jm\xe9no autora.",
                    category: "Pros\xedm zvolte kategorii.",
                    file: "Pros\xedm zvolte soubor pro nahr\xe1n\xed."
                },
                restrictions: {
                    file_size: "Tento soubor p\u0159esahuje n\xe1\u0161 100Mb limit.",
                    file_type: "Typ souboru nen\xed podporov\xe1n, pros\xedm nahrajte pouze soubory .zip, .rar a .oiv.",
                    image_limit: "Dos\xe1hli ste limitu 15-ti sn\xedmk\u016f.",
                    image_size: "%{count} z va\u0161ich sn\xedmk\u016f nebylo p\u0159id\xe1no, proto\u017ee p\u0159es\xe1hli velikost 2Mb.",
                    image_type: "%{count} z va\u0161ich sn\xedmk\u016f nebylo p\u0159id\xe1no proto\u017ee jejich form\xe1t nen\xed podporov\xe1n - pros\xedm nahrajte pouze .jpg a .png obr\xe1zky."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Odstranit",
                confirm: "Jste si jisti, \u017ee chcete odebrat tento m\xf3d?"
            },
            report: {
                title: "Nahl\xe1sit",
                explain: "Pros\xedm vysv\u011btlete, pro\u010d nahla\u0161ujete tento m\xf3d."
            },
            rating: {
                cancel: "Zru\u0161it hodnocen\xed",
                star1: "Pot\u0159ebuje pr\xe1ci",
                star2: "OK",
                star3: "Dobr\xe9",
                star4: "Skv\u011bl\xe9",
                star5: "\xda\u017easn\xe9!",
                average: {
                    one: "%{rating} z 5-ti hv\u011bzd (hlasoval 1 u\u017eivatel)",
                    few: "%{rating} z 5-ti hv\u011bzd (hlasovali %{display_count} u\u017eivatel\xe9)",
                    many: "%{rating} z 5-ti hv\u011bzd (hlasovalo %{display_count} u\u017eivatel\u016f)",
                    other: "%{rating} z 5-ti hv\u011bzd (hlasovalo %{display_count} u\u017eivatel\u016f)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "%{count} Video",
                few: "%{count} Videa",
                many: "%{count} Vide\xed",
                other: "%{count} Vide\xed"
            },
            show_more: {
                one: "Zobrazit 1 dal\u0161\xed video",
                few: "Zobrazit %{count} dal\u0161\xed videa",
                many: "Zobrazit %{count} dal\u0161\xedch vide\xed",
                other: "Zobrazit %{count} dal\u0161\xedch vide\xed"
            },
            add_modal: {
                header: "P\u0159idat video k %{file_name}",
                instructions: "Vlo\u017ete cel\xe9 URL k va\u0161emu videu na YouTube, DailyMotion nebo Vimeo:",
                placeholder: "(Nap\u0159.: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Pokud v\u0161e vypad\xe1 dob\u0159e, nezapome\u0148te kliknout na "P\u0159idat video" n\xed\u017ee pro ulo\u017een\xed.',
                error: {
                    parse: "Nepoda\u0159\xedlo se n\xe1m z\xedskat video z tohoto URL, pros\xedm ujist\u011bte se, \u017ee pou\u017e\xedv\xe1te podporovanou str\xe1nku a zkuste to znovu."
                }
            },
            "delete": {
                confirm: "Jste si jist/a \u017ee chcete odebrat toto video?"
            }
        },
        comment: {
            add: "P\u0159idat koment\xe1\u0159",
            label: {
                one: "1 Koment\xe1\u0159",
                few: "%{display_count} Koment\xe1\u0159e",
                many: "%{display_count} Koment\xe1\u0159\u016f",
                other: "%{display_count} Koment\xe1\u0159\u016f"
            },
            author: "Autor",
            reply: "Odpov\u011bd\u011bt",
            pin: {
                title: "P\u0159ipnout koment\xe1\u0159",
                pinned: "P\u0159ipnut\xfd koment\xe1\u0159",
                unpin: "Odepnout koment\xe1\u0159"
            },
            report: {
                title: "Nahl\xe1sit",
                explain: "Pros\xedm vysv\u011btlete, pro\u010d nahla\u0161ujete tento koment\xe1\u0159..."
            },
            "delete": {
                title: "Odstranit",
                confirm: "Jste si jist/a \u017ee chcete odebrat tento koment\xe1\u0159?"
            },
            show_previous: {
                one: "Zobrazit p\u0159edchoz\xed koment\xe1\u0159.",
                few: "Zobrazit %{count} p\u0159edchoz\xed koment\xe1\u0159e.",
                many: "Zobrazit %{count} p\u0159edchoz\xedch koment\xe1\u0159\u016f.",
                other: "Zobrazit %{count} p\u0159edchoz\xedch koment\xe1\u0159\u016f."
            },
            placeholder: "P\u0159idejte v\xe1\u0161 koment\xe1\u0159...",
            submit: "P\u0159idat koment\xe1\u0159",
            loading: "P\u0159id\xe1v\xe1m koment\xe1\u0159...",
            fetching: "Na\u010d\xedt\xe1m koment\xe1\u0159e...",
            flood_control: "Koment\xe1\u0159e nemohou b\xfdt p\u0159id\xe1v\xe1ny tak rychle, vy\u010dkejte pros\xedm p\xe1r minut a zkuste to znovu.",
            no_user_message: "P\u0159idejte se do konverzace! %{log_in} nebo %{register} pro mo\u017enost p\u0159id\xe1v\xe1n\xed koment\xe1\u0159\u016f.",
            no_user_message_log_in: "P\u0159ihlaste se",
            no_user_message_register: "zaregistruje",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    cy: {
        helpers: null
    },
    da: {
        helpers: {
            label: {
                welcome: "Velkommen til GTA5-Mods.com",
                site_info: "Din kilde til de nyeste GTA 5 bil mods, scripts, v\xe6rkt\xf8jer og mere.",
                intro: "V\xe6lg en af de f\xf8lgende kategorier til at se de nyeste GTA 5 Mods",
                loading: "Indl\xe6ser...",
                cancel: "Annuller",
                send: "Send",
                donate: "Donere med %{paypal}",
                fix_errors: "Ret de f\xf8lgende problemer:",
                user: {
                    email: "Email Adresse",
                    email_confirmation: "Confirm email address",
                    username: "Brugernavn",
                    password: "Kodeord",
                    password_new: "Nyt kodeord",
                    password_confirmation: "Bekr\xe6ft kodeord",
                    password_confirmation_new: "Bekr\xe6ft nye kodeord",
                    password_requirements: {
                        one: "(%{count} minimum karakter)",
                        other: "(%{count} minimum karakter)"
                    },
                    remember_me: "Husk mig",
                    current_password: "Nuv\xe6rende kodeord",
                    new_password: "Nyt Kodeord"
                },
                filter: "Filter:",
                sort_by: "Sorter efter:",
                time_frame: "Siden:",
                back_to_login: "Tilbage til log ind",
                have_an_account: "Har du allerede en konto?",
                dont_have_an_account: "Har du ikke en konto?",
                log_in_here: "Log ind her.",
                register_here: "Tilmeld dig her.",
                confirm: {
                    title: "Er du sikker?",
                    positive: "Ja",
                    negative: "Nej"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Dit brugernavn og kodeord kombination er forkert.",
                banned: "Du er blevet bannet fra siden. Grund: %{reason}",
                captcha_incorrect: "Udfyld reCAPTCHA boksen og pr\xf8v igen.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "Konto & Profil",
                account_details: "Konto Detaljer",
                location: {
                    header: "Steder",
                    placeholder: "(F.eks Los Santos, San Andreas)",
                    select: "V\xe6lg Land"
                },
                social: {
                    header: "Andre Online Kontoer",
                    website: "Personlige Hjemmeside",
                    paypal_error: "PayPal k\xf8bmand ID, du indtastede, er ugyldig.",
                    paypal_placeholder: "PayPal k\xf8bmand ID eller email addresser"
                },
                avatar: {
                    header: "Profil Billede",
                    upload: "Upload et custom profil Billede:",
                    restrictions: "(.jpg or .png kun; Maximum 750Kb; Anbefalet 256x256 pixels)",
                    select: "Eller v\xe6lg en nedenunder:",
                    error: {
                        image_size: "Den fil er over vores 750Kb gr\xe6nse",
                        image_type: "Den fil er ikke sopported, upload kun .jpg og .png billeder."
                    }
                },
                submit: "Gem \xc6ndringer",
                loading: {
                    saving_settings: "Gemmer indstillinger...",
                    uploading_avatar: "Uploader profil billedet"
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Laver filen...",
                saving_file: "Gemmer filen...",
                uploading_screenshots: "Uploader Sk\xe6rmbilledet...",
                uploading_archive: "Uploader Arkivet..."
            },
            error: {
                required: {
                    file_name: "Et fil navn er kr\xe6vet.",
                    author: "Forfatter navn er kr\xe6vet",
                    category: "V\xe6lg en kategori.",
                    file: "V\xe6lg en fil til upload."
                },
                restrictions: {
                    file_size: "Den fil er over vores 100Mb gr\xe6nse.",
                    file_type: "den fil type er ikke undest\xf8ttet, upload kun .zip, .rar og .oiv filer.",
                    image_limit: "Du har n\xe5et den 15 sk\xe6rmbilleder gr\xe6nse.",
                    image_size: "%{count} af dine sk\xe6rmbilleder var ikke tilf\xf8jet fordi de var over 2Mb.",
                    image_type: "%{count} af dine sk\xe6rmbilleder blev ikke tilf\xf8jet fordi formatet er ikke underst\xf8ttet - uploads kun .jpg and .png billeder."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Fjern",
                confirm: "Er du sikker p\xe5 at du vil slette denne fil?"
            },
            report: {
                title: "Rapporter",
                explain: "Forklar hvorfor du vil rapportere denne fil..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Needs Work",
                star2: "OK",
                star3: "Good",
                star4: "Great",
                star5: "Awesome!",
                average: {
                    one: "%{rating} / 5 stars (1 vote)",
                    other: "%{rating} / 5 stars (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Videoer"
            },
            show_more: {
                one: "Vis 1 video mere",
                other: "Vis %{count} Videoer mere"
            },
            add_modal: {
                header: "Tilf\xf8j en video til %{file_name}",
                instructions: "Indtast det fulde URL til din video p\xe5 YouTube, DailyMotion eller Vimeo:",
                placeholder: "(fx. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'vis alt ser godt ud, S\xf8rg for at trykke p\xe5 "Tilf\xf8j video" nedenfor for at gemme det.',
                error: {
                    parse: "Vi kunne ikke f\xe5 fat i videoen fra det URL, bekr\xe6ft du bruger en underst\xf8ttet hjemmeside og pr\xf8v igen."
                }
            },
            "delete": {
                confirm: "Er du sikker p\xe5 at du vil fjerne denne video?"
            }
        },
        comment: {
            add: "Tilf\xf8j en kommentar",
            label: {
                one: "1 Kommentar",
                other: "%{display_count} Kommentarer"
            },
            author: "Forfatter",
            reply: "Skriv Tilbage",
            pin: {
                title: "Fastg\xf8r kommentar",
                pinned: "Pinned Kommentar",
                unpin: "Frig\xf8r Kommentar"
            },
            report: {
                title: "Rapporter",
                explain: "Forklar hvorfor at du rapportere denne kommentar..."
            },
            "delete": {
                title: "Fjern",
                confirm: "Er du sikker p\xe5 at du vil slette denne kommentar?"
            },
            show_previous: {
                one: "Vis forrige en kommentar",
                other: "Vis forrige %{count} kommentarer"
            },
            placeholder: "Tilf\xf8j din kommentar",
            submit: "Post Kommentar",
            loading: "Poster Kommentaren...",
            fetching: "Indl\xe6ser Kommentarer...",
            flood_control: "Kommentarer kan ikke blive tilf\xf8jet s\xe5 hurtigt, vent nogle f\xe5 minutter og pr\xf8v igen.",
            no_user_message: "Deltag i samtalen! %{log_in} eller %{register} for at kunne kommentere.",
            no_user_message_log_in: "Log Ind",
            no_user_message_register: "Registrere",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    "de-AT": {
        helpers: null
    },
    "de-CH": {
        helpers: null
    },
    de: {
        helpers: {
            label: {
                clear_all: "Leeren",
                welcome: "Willkommen bei GTA5-Mods.com",
                site_info: "Die Seite mit den neuesten Auto - Mods, Skripten, Programmen und vielem mehr - f\xfcr dein GTA V",
                intro: "W\xe4hle eine der folgenden Kategorien, um die neuesten GTA V Mods zu entdecken:",
                loading: "Wird geladen...",
                cancel: "Abbrechen",
                send: "Abschicken",
                donate: "Spenden mit %{paypal}",
                fix_errors: "Bitte l\xf6se die folgenden Probleme:",
                user: {
                    email: "E-Mail Adresse",
                    email_confirmation: "E-Mail best\xe4tigen",
                    username: "Benutzername",
                    password: "Passwort",
                    password_new: "Neues Passwort",
                    password_confirmation: "Passwort best\xe4tigen",
                    password_confirmation_new: "Neues Passwort best\xe4tigen",
                    password_requirements: {
                        one: "(mindestens %{count} Zeichen)",
                        other: "(mindestens %{count} Zeichen)"
                    },
                    remember_me: "Angemeldet bleiben",
                    current_password: "Aktuelles Passwort",
                    new_password: "Neues Passwort"
                },
                filter: "Filtern:",
                sort_by: "Sortieren nach:",
                time_frame: "Seit:",
                back_to_login: "Zur\xfcck zum Login",
                have_an_account: "Du hast schon einen Account?",
                dont_have_an_account: "Du hast noch keinen Account?",
                log_in_here: "Hier anmelden.",
                register_here: "Hier registrieren.",
                confirm: {
                    title: "Bist du dir sicher?",
                    positive: "Ja",
                    negative: "Nein"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Du hast dich bei einem der Mailfelder vertippt, versuch's noch einmal."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Die Kombination aus Benutzernamen und Passwort ist falsch.",
                banned: "Du wurdest von der Seite verbannt. Grund: %{reason}",
                captcha_incorrect: "Bitte f\xfclle das Captcha korrekt aus und versuche es noch einmal.",
                confirmation_notice: "Dein Account wurde noch nicht verifiziert! Bitte \xfcberpr\xfcfe deinen Mail - Posteingang auf den Verifizierungslink oder %{click_here}.",
                confirmation_notice_click_here: "klicke hier, um die Verifizierungsanleitung erneut zu versenden"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skypename",
                    header: "Du auf anderen Seiten",
                    website: "Eigene Webseite",
                    paypal_error: "Die eingegebene PayPal Gesch\xe4ftskonto ID ist ung\xfcltig.",
                    paypal_placeholder: "PayPal Gesch\xe4ftskonto ID oder E-Mail Adresse"
                },
                header: "Benutzer & Profil",
                account_details: "Profildetails",
                location: {
                    header: "Ort",
                    placeholder: "(z.B. Los Santos, San Andreas)",
                    select: "Land w\xe4hlen..."
                },
                avatar: {
                    header: "Profilbild",
                    upload: "Eigenes Profilbild hochladen:",
                    restrictions: "(.jpg oder .png; Maximum: 750kb; 256x256 Pixel empfohlen)",
                    select: "Oder eines ausw\xe4hlen:",
                    error: {
                        image_size: "Das Bild ist gr\xf6\xdfer als 750kb.",
                        image_type: "Dieser Dateityp wird nicht unterst\xfctzt. Bitte benutze entweder das .jpg oder .png Format."
                    }
                },
                submit: "\xc4nderungen speichern",
                loading: {
                    saving_settings: "Einstellungen werden gespeichert...",
                    uploading_avatar: "Profilbild wird hochgeladen..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Mod wird erzeugt...",
                saving_file: "Mod wird gespeichert...",
                uploading_screenshots: "Screenshots werden hochgeladen...",
                uploading_archive: "Archiv wird hochgeladen..."
            },
            error: {
                required: {
                    file_name: "Bitte gebe f\xfcr die Mod einen Namen ein.",
                    author: "Bitte gebe einen Autor an.",
                    category: "Bitte w\xe4hle eine Kategorie.",
                    file: "Bitte lade deine Mod hoch."
                },
                restrictions: {
                    file_size: "Diese Mod \xfcbersteigt unser 100mb Limit.",
                    file_type: "Dieser Dateityp wird nicht unterst\xfctzt. Bitte benutze entweder das .zip, .rar oder .oiv Format.",
                    image_limit: "Du darfst nicht mehr als 15 Screenshots hochladen.",
                    image_size: "%{count} deiner Screenshots wurden nicht hinzugef\xfcgt, da sie das 2mb Limit \xfcbersteigen.",
                    image_type: "%{count} deiner Screenshots wurden nicht hinzugef\xfcgt, da ihr Dateityp nicht unterst\xfctzt wird. Bitte benutze entweder das .jpg oder .png Format."
                }
            }
        },
        user_file: {
            "delete": {
                title: "L\xf6schen",
                confirm: "Bist du dir sicher, dass du diese Mod l\xf6schen m\xf6chtest?"
            },
            report: {
                title: "Melden",
                explain: "Bitte erkl\xe4re, warum du diese Mod melden m\xf6chtest..."
            },
            rating: {
                cancel: "Nicht bewerten",
                star1: "\xdcberarbeitung erforderlich",
                star2: "Okay",
                star3: "Gut",
                star4: "Super",
                star5: "Geil!",
                average: {
                    one: "%{rating} von 5 Sternen (1 Stimme)",
                    other: "%{rating} von 5 Sternen (%{display_count} Stimmen)"
                }
            }
        },
        video: {
            added_by: "Hinzugef\xfcgt von %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Videos"
            },
            show_more: {
                one: "1 anderes Video anzeigen",
                other: "%{count} andere Videos anzeigen"
            },
            add_modal: {
                header: "Ein Video zu %{file_name} hinzuf\xfcgen",
                instructions: "Gib die ganze URL zu deinem Video auf YouTube, DailyMotion oder Vimeo an:",
                placeholder: "(z.B. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Wenn hier alles OK aussieht, klicke unten auf "Video hinzuf\xfcgen" um es zu speichern.',
                error: {
                    parse: "Leider konnten wir das Video nicht von dieser URL holen. Bitte gehe sicher, dass du eine unterst\xfctzte Webseite benutzt und versuche es noch einmal."
                }
            },
            "delete": {
                confirm: "Bist du dir sicher, dass du dieses Video entfernen m\xf6chtest?"
            }
        },
        comment: {
            add: "Kommentar hinzuf\xfcgen",
            label: {
                one: "1 Kommentar",
                other: "%{display_count} Kommentare"
            },
            author: "Autor",
            reply: "Antworten",
            pin: {
                title: "Oben fixieren",
                pinned: "Fixierter Kommentar",
                unpin: "Nicht oben anzeigen"
            },
            report: {
                title: "Melden",
                explain: "Bitte erkl\xe4re, warum du diesen Kommentar melden m\xf6chtest..."
            },
            "delete": {
                title: "L\xf6schen",
                confirm: "Bist du dir sicher, dass du diesen Kommentar l\xf6schen m\xf6chtest?"
            },
            show_previous: {
                one: "Vorherigen Kommentar anzeigen",
                other: "Die letzten %{count} Kommentare anzeigen"
            },
            placeholder: "Deinen Kommentar eingeben...",
            submit: "Kommentieren",
            loading: "Es wird kommentiert...",
            fetching: "Kommentare werden geladen.",
            flood_control: "Du kannst nicht so oft hintereinander kommentieren. Bitte warte ein par Minuten und versuche es dann erneut.",
            no_user_message: "Nimm an der Unterhaltung teil! %{log_in} oder %{register} um zu kommentieren.",
            no_user_message_log_in: "Melde dich an",
            no_user_message_register: "registriere dich",
            expand: "Mehr anzeigen",
            context: "Kontext betrachten",
            rules: {
                agree: "Durch das Kommentieren akzeptierst du die %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com Community Richtlinien",
                offensive: "Poste keine andere Nutzer angreifenden Kommentare. Wenn du ein Problem mit einem Kommentar hast, melde ihn einfach.",
                malware: "Unterhalte dich nicht mit anderen Personen \xfcber das Copyright missachtende Inhalte und poste keine Links zu Malware.",
                rating: "Gib keine Bewertungen ab, ohne relevantes Feedback oder Kritik zu hinterlassen.",
                warning: "Bei Versto\xdf gegen eine oder mehrere dieser Regeln, kann es zur L\xf6schung des entsprechenden Kommentars oder einer Sperre des Accounts kommen."
            }
        }
    },
    el: {
        helpers: {
            label: {
                welcome: "\u039a\u03b1\u03bb\u03c9\u03c3\u03cc\u03c1\u03b9\u03c3\u03b5\u03c2 \u03c3\u03c4\u03bf GTA5-Mods.com",
                site_info: "\u0397 \u03c0\u03b7\u03b3\u03ae \u03c3\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c4\u03b1 \u03c0\u03b9\u03bf \u03c0\u03c1\u03cc\u03c3\u03c6\u03b1\u03c4\u03b1 mods \u03b1\u03c5\u03c4\u03bf\u03ba\u03b9\u03bd\u03ae\u03c4\u03c9\u03bd, scripts, \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03ba\u03b1\u03b9 \u03ac\u03bb\u03bb\u03b1.",
                intro: "\u0395\u03c0\u03af\u03bb\u03b5\u03be\u03b5 \u03bc\u03b9\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2 \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03c3\u03ad\u03ba\u03b1\u03c1\u03b5 \u03c4\u03b1 \u03c0\u03b9\u03bf \u03c0\u03c1\u03cc\u03c3\u03c6\u03b1\u03c4\u03b1 Mods \u03b3\u03b9\u03b1 \u03c4\u03bf GTA 5",
                loading: "\u03a6\u03bf\u03c1\u03c4\u03ce\u03bd\u03b5\u03b9...",
                cancel: "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                send: "\u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae",
                donate: "\u039a\u03ac\u03bd\u03c4\u03b5 \u03b4\u03c9\u03c1\u03b5\u03ac \u03bc\u03b5 %{paypal}",
                fix_errors: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03be\u03b5\u03ba\u03b1\u03b8\u03b1\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03b5\u03be\u03ae\u03c2 \u03bb\u03ac\u03b8\u03b7:",
                user: {
                    email: "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email",
                    email_confirmation: "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 e-mail",
                    username: "\u038c\u03bd\u03bf\u03bc\u03b1 \u03a7\u03c1\u03ae\u03c3\u03c4\u03b7",
                    password: "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
                    password_new: "\u039d\u03ad\u03bf\u03c2 \u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
                    password_confirmation: "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd",
                    password_confirmation_new: "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03bd\u03ad\u03bf\u03c5 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd",
                    password_requirements: {
                        one: "(\u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        other: "(\u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    },
                    remember_me: "\u0398\u03c5\u03bc\u03ae\u03c3\u03bf\u03c5 \u03bc\u03b5",
                    current_password: "\u03a4\u03c9\u03c1\u03b9\u03bd\u03cc\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
                    new_password: "\u039d\u03ad\u03bf\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2"
                },
                filter: "\u03a6\u03af\u03bb\u03c4\u03c1\u03bf:",
                sort_by: "\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b5 \u03ba\u03b1\u03c4\u03ac:",
                time_frame: "\u0391\u03c0\u03cc:",
                back_to_login: "\u03a0\u03af\u03c3\u03c9 \u03c3\u03c4\u03b7 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
                have_an_account: "\u0388\u03c7\u03b5\u03b9\u03c2 \u03ae\u03b4\u03b7 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc;",
                dont_have_an_account: "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc;",
                log_in_here: "\u03a3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bf\u03c5 \u03b5\u03b4\u03ce.",
                register_here: "\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03b5\u03b4\u03ce",
                confirm: {
                    title: "\u0395\u03af\u03c3\u03b1\u03b9 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03bf\u03c2;",
                    positive: "\u039d\u03b1\u03b9",
                    negative: "\u038c\u03c7\u03b9"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\u0397 \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03c4\u03b7\u03c2 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 e-mail \u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c0\u03c1\u03bf\u03c3\u03c0\u03b1\u03b8\u03ae\u03c3\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03ae \u03bf \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03ac\u03b8\u03bf\u03c2.",
                banned: "\u0388\u03c7\u03b5\u03c4\u03b5 \u03b1\u03c0\u03bf\u03ba\u03bb\u03b5\u03b9\u03c3\u03c4\u03b5\u03af \u03b1\u03c0\u03cc \u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1. \u039b\u03cc\u03b3\u03bf\u03c2: %{reason}",
                captcha_incorrect: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c3\u03c5\u03bc\u03c0\u03bb\u03b7\u03c1\u03ce\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03bf\u03c5\u03c4\u03ac\u03ba\u03b9 reCAPTCHA \u03ba\u03b1\u03b9 \u03be\u03b1\u03bd\u03b1\u03c0\u03c1\u03bf\u03c3\u03c0\u03b1\u03b8\u03ae\u03c3\u03c4\u03b5",
                confirmation_notice: "\u039f \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03c9\u03b8\u03b5\u03af \u03b1\u03ba\u03cc\u03bc\u03b1! \u039a\u03bf\u03b9\u03c4\u03ac\u03be\u03c4\u03b5 \u03c4\u03b1 \u03b5\u03b9\u03c3\u03b5\u03c1\u03c7\u03cc\u03bc\u03b5\u03bd\u03b1 e-mail \u03c3\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7\u03c2 \u03ae %{click_here}.",
                confirmation_notice_click_here: "\u03c0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b5\u03b4\u03ce \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03be\u03b1\u03bd\u03b1\u03c3\u03c4\u03b5\u03af\u03bb\u03bf\u03c5\u03bc\u03b5 \u03c4\u03bf e-mail"
            }
        },
        settings: {
            account: {
                header: "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 & \u03a0\u03c1\u03bf\u03c6\u03af\u03bb",
                account_details: "\u039b\u03b5\u03c0\u03c4\u03bf\u03bc\u03ad\u03c1\u03b5\u03b9\u03b5\u03c2 \u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
                location: {
                    header: "\u03a4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1:",
                    placeholder: "(\u03c0.\u03c7. Los Santos, San Andreas)",
                    select: "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03a7\u03ce\u03c1\u03b1\u03c2..."
                },
                social: {
                    header: "\u0386\u03bb\u03bb\u03bf\u03b9 Online \u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af",
                    website: "\u03a0\u03c1\u03bf\u03c3\u03c9\u03c0\u03b9\u03ba\u03ae \u03a3\u03b5\u03bb\u03af\u03b4\u03b1",
                    paypal_error: "To ID \u03b5\u03bc\u03c0\u03cc\u03c1\u03bf\u03c5 PayPal \u03c0\u03bf\u03c5 \u03b5\u03b9\u03c3\u03c7\u03c9\u03c1\u03ae\u03c3\u03b1\u03c4\u03b5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf.",
                    paypal_placeholder: "ID \u03b5\u03bc\u03c0\u03cc\u03c1\u03bf\u03c5 PayPal \u03ae \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email"
                },
                avatar: {
                    header: "\u03a6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03a0\u03c1\u03bf\u03c6\u03af\u03bb",
                    upload: "\u0391\u03bd\u03ad\u03b2\u03b1\u03c3\u03b5 \u03bc\u03b9\u03b1 \u03b4\u03b9\u03ba\u03b9\u03ac \u03c3\u03bf\u03c5 \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03c0\u03c1\u03bf\u03c6\u03af\u03bb:",
                    restrictions: "(\u03bc\u03cc\u03bd\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 .jpg \u03ae .png, \u03ad\u03c9\u03c2 750Kb; \u03a0\u03c1\u03bf\u03c4\u03b5\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 256x256p)",
                    select: "\u0389 \u03b5\u03c0\u03af\u03bb\u03b5\u03be\u03b5 \u03bc\u03b9\u03b1 \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9:",
                    error: {
                        image_size: "\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03be\u03b5\u03c0\u03b5\u03c1\u03bd\u03ac \u03c4\u03bf \u03cc\u03c1\u03b9\u03bf \u03c4\u03c9\u03bd 750Kb.",
                        image_type: "\u0391\u03c5\u03c4\u03cc\u03c2 \u03bf \u03c4\u03cd\u03c0\u03bf\u03c2 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03b4\u03b5\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03c4\u03b1\u03b9, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03bc\u03cc\u03bd\u03bf \u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 .jpg \u03ba\u03b1\u03b9 .png."
                    }
                },
                submit: "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ce\u03bd",
                loading: {
                    saving_settings: "\u039f\u03b9 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03bf\u03bd\u03c4\u03b1\u03b9...",
                    uploading_avatar: "\u0397 \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03c0\u03c1\u03bf\u03c6\u03af\u03bb \u03b1\u03bd\u03b5\u03b2\u03b1\u03af\u03bd\u03b5\u03b9..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5...",
                saving_file: "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5...",
                uploading_screenshots: "\u039f\u03b9 \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2 \u03b1\u03bd\u03b5\u03b2\u03b1\u03af\u03bd\u03bf\u03c5\u03bd...",
                uploading_archive: "\u03a4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03b1\u03bd\u03b5\u03b2\u03b1\u03af\u03bd\u03b5\u03b9..."
            },
            error: {
                required: {
                    file_name: "\u0391\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5.",
                    author: "\u0391\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03bf\u03cd.",
                    category: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03c0\u03af\u03bb\u03b5\u03be\u03b5 \u03bc\u03b9\u03b1 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1.",
                    file: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03c0\u03af\u03bb\u03b5\u03be\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03bd\u03b5\u03b2\u03ac\u03c3\u03b5\u03b9\u03c2."
                },
                restrictions: {
                    file_size: "\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03be\u03b5\u03c0\u03b5\u03c1\u03bd\u03ac \u03c4\u03bf \u03cc\u03c1\u03b9\u03bf \u03c4\u03c9\u03bd 100Mb.",
                    file_type: "\u0391\u03c5\u03c4\u03cc\u03c2 \u03bf \u03c4\u03cd\u03c0\u03bf\u03c2 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03b4\u03b5\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03c4\u03b1\u03b9, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b1\u03bd\u03ad\u03b2\u03b1\u03c3\u03b5 \u03bc\u03cc\u03bd\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03c4\u03cd\u03c0\u03bf\u03c5 .zip, .rar \u03ae .oiv.",
                    image_limit: "\u0388\u03c7\u03b5\u03b9\u03c2 \u03c6\u03c4\u03ac\u03c3\u03b5\u03b9 \u03c4\u03bf \u03cc\u03c1\u03b9\u03bf \u03c4\u03c9\u03bd 15 \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03b9\u03ce\u03bd.",
                    image_size: "%{count} \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2 \u03b4\u03b5\u03bd \u03c0\u03c1\u03bf\u03c3\u03c4\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b3\u03b9\u03b1\u03c4\u03af \u03be\u03b5\u03c0\u03b5\u03c1\u03bd\u03bf\u03cd\u03bd \u03c4\u03b1 2Mb.",
                    image_type: "%{count} \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2 \u03b4\u03b5\u03bd \u03c0\u03c1\u03bf\u03c3\u03c4\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b5\u03c0\u03b5\u03b9\u03b4\u03ae \u03b4\u03b5\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 - \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b1\u03bd\u03ad\u03b2\u03b1\u03c3\u03b5 \u03bc\u03cc\u03bd\u03bf \u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 .jpg \u03ba\u03b1\u03b9 .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
                confirm: "\u03a3\u03af\u03b3\u03bf\u03c5\u03c1\u03b1 \u03b8\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03b9\u03c2 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf;"
            },
            report: {
                title: "\u0391\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
                explain: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03be\u03b7\u03b3\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1\u03c4\u03af \u03b1\u03bd\u03b1\u03c6\u03ad\u03c1\u03b5\u03c4\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf..."
            },
            rating: {
                cancel: "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u0391\u03be\u03b9\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2",
                star1: "\u0398\u03ad\u03bb\u03b5\u03b9 \u0394\u03bf\u03c5\u03bb\u03b5\u03b9\u03ac \u0391\u03ba\u03cc\u03bc\u03b1",
                star2: "OK",
                star3: "\u039a\u03b1\u03bb\u03cc",
                star4: "\u0395\u03be\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc",
                star5: "\u03a4\u03ad\u03bb\u03b5\u03b9\u03bf!",
                average: {
                    one: "%{rating} / 5 \u03b1\u03c3\u03c4\u03ad\u03c1\u03b9\u03b1 (1 \u03c8\u03ae\u03c6\u03bf\u03c2)",
                    other: "%{rating} / 5 \u03b1\u03c3\u03c4\u03ad\u03c1\u03b9\u03b1 (%{display_count} \u03c8\u03ae\u03c6\u03bf\u03b9)"
                }
            }
        },
        video: {
            added_by: "\u03a0\u03c1\u03bf\u03c3\u03c4\u03ad\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc %{username}",
            label: {
                one: "%{count} \u0392\u03af\u03bd\u03c4\u03b5\u03bf",
                other: "%{count} \u0392\u03af\u03bd\u03c4\u03b5\u03bf"
            },
            show_more: {
                one: "\u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae \u03b5\u03bd\u03cc\u03c2 \u03b1\u03ba\u03cc\u03bc\u03b1 \u03b2\u03af\u03bd\u03c4\u03b5\u03bf",
                other: "\u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae %{count} \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03c9\u03bd \u03b2\u03af\u03bd\u03c4\u03b5\u03bf"
            },
            add_modal: {
                header: "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03b2\u03af\u03bd\u03c4\u03b5\u03bf \u03c3\u03c4\u03bf %{file_name}",
                instructions: "\u0393\u03c1\u03ac\u03c8\u03b5 \u03bf\u03bb\u03cc\u03ba\u03bb\u03b7\u03c1\u03bf \u03c4\u03bf URL \u03c4\u03bf\u03c5 \u03b2\u03af\u03bd\u03c4\u03b5\u03bf \u03c3\u03c4\u03bf YouTube, DailyMotion \u03ae \u03c4\u03bf Vimeo:",
                placeholder: "(\u03c0.\u03c7. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\u0391\u03bd \u03cc\u03bb\u03b1 \u03b4\u03b5\u03af\u03c7\u03bd\u03bf\u03c5\u03bd \u03ba\u03b1\u03bb\u03ac, \u03c0\u03ac\u03c4\u03b7\u03c3\u03b5 "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u0392\u03af\u03bd\u03c4\u03b5\u03bf" \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c4\u03bf \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03b5\u03b9\u03c2.',
                error: {
                    parse: "\u0394\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03c3\u03b1\u03bc\u03b5 \u03bd\u03b1 \u03b2\u03c1\u03bf\u03cd\u03bc\u03b5 \u03c4\u03bf \u03b2\u03af\u03bd\u03c4\u03b5\u03bf \u03b1\u03c0\u03cc \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf URL, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03ce\u03c3\u03bf\u03c5 \u03cc\u03c4\u03b9 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b7\u03c3\u03b5 \u03be\u03b1\u03bd\u03ac."
                }
            },
            "delete": {
                confirm: "\u03a3\u03af\u03b3\u03bf\u03c5\u03c1\u03b1 \u03b8\u03b5\u03c2 \u03bd\u03b1 \u03b1\u03c6\u03b1\u03b9\u03c1\u03ad\u03c3\u03b5\u03b9\u03c2 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03b2\u03af\u03bd\u03c4\u03b5\u03bf;"
            }
        },
        comment: {
            add: "\u039a\u03ac\u03bd\u03b5 \u03ad\u03bd\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf",
            label: {
                one: "1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf",
                other: "%{display_count} \u03c3\u03c7\u03cc\u03bb\u03b9\u03b1"
            },
            author: "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03cc\u03c2",
            reply: "\u0391\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7",
            pin: {
                title: "\u039a\u03b1\u03c1\u03c6\u03af\u03c4\u03c3\u03c9\u03bc\u03b1 \u03a3\u03c7\u03bf\u03bb\u03af\u03bf\u03c5",
                pinned: "\u039a\u03b1\u03c1\u03c6\u03b9\u03c4\u03c3\u03c9\u03bc\u03ad\u03bd\u03bf \u03a3\u03c7\u03cc\u03bb\u03b9\u03bf",
                unpin: "\u039e\u03b5\u03ba\u03b1\u03c1\u03c6\u03af\u03c4\u03c3\u03c9\u03bc\u03b1 \u03a3\u03c7\u03bf\u03bb\u03af\u03bf\u03c5"
            },
            report: {
                title: "\u0391\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
                explain: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03be\u03b7\u03b3\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1\u03c4\u03af \u03b1\u03bd\u03b1\u03c6\u03ad\u03c1\u03b5\u03c4\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf..."
            },
            "delete": {
                title: "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
                confirm: "\u03a3\u03af\u03b3\u03bf\u03c5\u03c1\u03b1 \u03b8\u03b5\u03c2 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03b9\u03c2 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf;"
            },
            show_previous: {
                one: "\u0394\u03b5\u03af\u03be\u03b5 1 \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf",
                other: "\u0394\u03b5\u03af\u03be\u03b5 %{count} \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03b1"
            },
            placeholder: "\u039a\u03ac\u03bd\u03b5 \u03ad\u03bd\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf...",
            submit: "\u0394\u03b7\u03bc\u03bf\u03c3\u03af\u03b5\u03c5\u03c3\u03b7 \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf\u03c5",
            loading: "\u03a4\u03bf \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf \u03b4\u03b7\u03bc\u03bf\u03c3\u03b9\u03b5\u03cd\u03b5\u03c4\u03b1\u03b9...",
            fetching: "\u03a4\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03b1 \u03c6\u03bf\u03c1\u03c4\u03ce\u03bd\u03bf\u03c5\u03bd...",
            flood_control: "\u0394\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c2 \u03bd\u03b1 \u03b4\u03b7\u03bc\u03bf\u03c3\u03b9\u03b5\u03cd\u03b5\u03b9\u03c2 \u03c3\u03c7\u03cc\u03bb\u03b9\u03b1 \u03c4\u03cc\u03c3\u03bf \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c0\u03b5\u03c1\u03af\u03bc\u03b5\u03bd\u03b5 \u03bc\u03b5\u03c1\u03b9\u03ba\u03ac \u03bb\u03b5\u03c0\u03c4\u03ac \u03ba\u03b1\u03b9 \u03be\u03b1\u03bd\u03b1\u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b7\u03c3\u03b5.",
            no_user_message: "\u039c\u03c0\u03b5\u03c2 \u03c3\u03c4\u03b7 \u03c3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7! %{log_in} \u03ae %{register} \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c2 \u03bd\u03b1 \u03c3\u03c7\u03bf\u03bb\u03b9\u03ac\u03c3\u03b5\u03b9\u03c2.",
            no_user_message_log_in: "\u03a3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bf\u03c5",
            no_user_message_register: "\u03ba\u03ac\u03bd\u03b5 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    "en-AU": {
        helpers: null
    },
    "en-CA": {
        helpers: null
    },
    "en-GB": {
        helpers: null
    },
    "en-IE": {
        helpers: null
    },
    "en-IN": {
        helpers: null
    },
    "en-NZ": {
        helpers: null
    },
    "en-US": {
        helpers: null
    },
    "en-ZA": {
        helpers: null
    },
    eo: {
        helpers: null
    },
    "es-419": {
        helpers: null
    },
    "es-AR": {
        helpers: null
    },
    "es-CL": {
        helpers: null
    },
    "es-CO": {
        helpers: null
    },
    "es-CR": {
        helpers: null
    },
    "es-EC": {
        helpers: null
    },
    "es-MX": {
        helpers: null
    },
    "es-PA": {
        helpers: null
    },
    "es-PE": {
        helpers: null
    },
    "es-US": {
        helpers: null
    },
    "es-VE": {
        helpers: null
    },
    es: {
        helpers: {
            label: {
                clear_all: "Limpiar todos",
                welcome: "Bienvenido a GTA5-Mods.com",
                site_info: "Tu fuente para los mods, scripts y herramientas mas recientes de GTA 5",
                intro: "Seleccionar una de las siguientes categor\xedas para comenzar a navegar por los mods mas recientes de GTA 5:",
                loading: "Cargando...",
                cancel: "Cancelar",
                send: "Enviar",
                donate: "Donar con %{paypal}",
                fix_errors: "Corregir los siguientes errores:",
                user: {
                    email: "Direcci\xf3n de correo electr\xf3nico",
                    email_confirmation: "Confirmar direcci\xf3n de correo electr\xf3nico",
                    username: "Nombre de Usuario",
                    password: "Contrase\xf1a",
                    password_new: "Nueva contrase\xf1a",
                    password_confirmation: "Confirmar contrase\xf1a",
                    password_confirmation_new: "Confirmar nueva contrase\xf1a",
                    password_requirements: {
                        one: "(el minimo es de %{count} car\xe1cter)",
                        other: "(el minimo es de %{count} caracteres)"
                    },
                    remember_me: "Recu\xe9rdame",
                    current_password: "Contrase\xf1a actual",
                    new_password: "Nueva contrase\xf1a"
                },
                filter: "Filtro:",
                sort_by: "Ordenar por:",
                time_frame: "Desde:",
                back_to_login: "Volver a iniciar sesi\xf3n",
                have_an_account: "\xbfYa tienes una cuenta?",
                dont_have_an_account: "\xbfNo tienes una cuenta?",
                log_in_here: "Inicia sesi\xf3n aqu\xed.",
                register_here: "Reg\xedstrate aqu\xed.",
                confirm: {
                    title: "\xbfEst\xe1s seguro?",
                    positive: "Si",
                    negative: "No"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "La direcci\xf3n de correo electr\xf3nico confirmada no concuerda, por favor, intentalo nuevamente."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Tu nombre de usuario o contrase\xf1a es incorrecto.",
                banned: "Ha sido expulsado del sitio. La raz\xf3n: %{reason}",
                captcha_incorrect: "Please fill out the reCAPTCHA box and try again.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Nombre de Skype",
                    header: "Otras cuentas en linea",
                    website: "Web personal",
                    paypal_error: "La ID de comerciante de PayPal es invalida.",
                    paypal_placeholder: "ID de comerciante o correo electr\xf3nico de Paypal"
                },
                header: "Cuenta & Perfil",
                account_details: "Detalles de la cuenta",
                location: {
                    header: "Ubicaci\xf3n",
                    placeholder: "(Por ejemplo: Los Santos, San Andreas)",
                    select: "Selecciona tu pa\xeds..."
                },
                avatar: {
                    header: "Foto de perfil",
                    upload: "Subir una foto personalizada:",
                    restrictions: "(Solo formato .jpg o .png, maximo 750Kb; 256x256 pixeles recomendado)",
                    select: "O selecciona una de abajo:",
                    error: {
                        image_size: "Este archivo excede nuestro limite de 750Kb.",
                        image_type: "Este tipo de archivo no es soportado, por favor usa solamente imagenes del formato .jpg o .png."
                    }
                },
                submit: "Guardar cambios",
                loading: {
                    saving_settings: "Guardando ajustes...",
                    uploading_avatar: "Subiendo foto de perfil..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Creando archivo...",
                saving_file: "Guardando archivo...",
                uploading_screenshots: "Subiendo captura de pantalla/in-game...",
                uploading_archive: "Subiendo archivo..."
            },
            error: {
                required: {
                    file_name: "Es necesario el nombre del archivo.",
                    author: "Es necesario el nombre de autor.",
                    category: "Por favor escoge una categor\xeda.",
                    file: "Por favor escoge el archivo para subir."
                },
                restrictions: {
                    file_size: "Este archivo excede nuestro limite de 110Mb",
                    file_type: "Este tipo de archivo no es compatible, por favor solo sube archivos en formato .zip, .rar y .oiv.",
                    image_limit: "Haz alcanzado el limite de 15 capturas de pantalla.",
                    image_size: "%{count} de tus capturas de pantalla no fueron a\xf1adidas por que excedieron el limite de 2Mb.",
                    image_type: "%{count} de tus capturas de pantalla no fueron a\xf1adidas ya que su formate no es compatible - por favor solo sube imagenes formato .jpg y .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Borrar",
                confirm: "\xbfEstas seguro que quieres borrar este archivo?"
            },
            report: {
                title: "Reportar",
                explain: "Por favor explica el motivo por el cual vas a reportar este archivo..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Necesita m\xe1s trabajo",
                star2: "OK",
                star3: "Bueno",
                star4: "Estupendo",
                star5: "Incre\xedble!",
                average: {
                    one: "%{rating} / 5 estrellas (1 voto)",
                    other: "%{rating} / 5 estrellas (%{display_count} votos)"
                }
            }
        },
        video: {
            added_by: "Subido por %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Videos"
            },
            show_more: {
                one: "Mostrar un video m\xe1s",
                other: "Mostrar %{count} videos m\xe1s"
            },
            add_modal: {
                header: "A\xf1adir un video para %{file_name}",
                instructions: "Introduce la URL de tu video de Youtube, DailyMotion o Vimeo:",
                placeholder: "(Por ejemplo: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Si todo luce bien, asegurate de apretar "A\xf1adir video" abajo para guardarlo.',
                error: {
                    parse: "No pudimos a\xf1adir el video de esa URL, por favor conprueba que estas usando un sitio web compatible e intentalo nuevamente."
                }
            },
            "delete": {
                confirm: "\xbfEst\xe1s seguro que quieres remover este video?"
            }
        },
        comment: {
            add: "A\xf1adir comentario",
            label: {
                one: "1 Comentario",
                other: "%{display_count} Comentarios"
            },
            author: "Autor",
            reply: "Responder",
            pin: {
                title: "Adherir comentario",
                pinned: "Comentario adherido",
                unpin: "Despegar comentario"
            },
            report: {
                title: "Reportar",
                explain: "Por favor indica el motivo por el cual reportas este comentario..."
            },
            "delete": {
                title: "Borrar",
                confirm: "\xbfEst\xe1s seguro que quieres eliminar este comentario?"
            },
            show_previous: {
                one: "Mostrar el comentario anterior",
                other: "Mostrar los %{count} comentarios anteriores"
            },
            placeholder: "A\xf1ade un comentario...",
            submit: "Publicar comentario",
            loading: "Publicando comentario...",
            fetching: "Cargando comentarios...",
            flood_control: "Los comentarios no pueden ser a\xf1adidos tan rapido, por favor espera unos minutos y vuelve a intertarlo.",
            no_user_message: "\xa1Unete a la conversaci\xf3n! %{log_in} o %{register} para comentar.",
            no_user_message_log_in: "Inicia sesi\xf3n",
            no_user_message_register: "reg\xedstrate",
            expand: "Expandirse para leer el comentario completo",
            context: "Ver contexto",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    et: {
        helpers: null
    },
    eu: {
        helpers: null
    },
    fa: {
        helpers: null
    },
    fi: {
        helpers: {
            label: {
                welcome: "Tervetuloa GTA5-mods.com sivustolle!",
                site_info: "Sinun l\xe4hde uusimmille GTA 5 auto modeille, scripteille, ty\xf6kaluille ja muulle!",
                intro: "Valitse yksi seuraavista kategorioista, ja aloita selailemaan uusimpia GTA 5 modeja:",
                loading: "Ladataan...",
                cancel: "Peruuta",
                send: "L\xe4het\xe4",
                donate: "Lahjoita %{paypal}",
                fix_errors: "Korjaa seuraavat ongelmat:",
                user: {
                    email: "S\xe4hk\xf6postiosoite",
                    email_confirmation: "Vahvista s\xe4hk\xf6postiosoite",
                    username: "K\xe4ytt\xe4j\xe4nimi",
                    password: "Salasana",
                    password_new: "Uusi salasana",
                    password_confirmation: "Varmista salasana",
                    password_confirmation_new: "Varmista uusi salasana",
                    password_requirements: {
                        one: "(%{count} merkki min.)",
                        other: "(%{count} merkki\xe4 min.)"
                    },
                    remember_me: "Muista minut",
                    current_password: "Nykyinen salasana",
                    new_password: "Uusi salasana"
                },
                filter: "Filtterit",
                sort_by: "J\xe4rjest\xe4:",
                time_frame: "Siit\xe4 asti kun:",
                back_to_login: "Takaisin kirjautumiseen",
                have_an_account: "Onko sinulla jo k\xe4ytt\xe4j\xe4?",
                dont_have_an_account: "Eik\xf6 sinulla ole viel\xe4 k\xe4ytt\xe4j\xe4\xe4?",
                log_in_here: "Kirjaudu sis\xe4\xe4n t\xe4\xe4ll\xe4.",
                register_here: "Rekister\xf6idy t\xe4\xe4ll\xe4.",
                confirm: {
                    title: "Oletko varma?",
                    positive: "Kyll\xe4",
                    negative: "En"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Vahvistus s\xe4hk\xf6postiosoite ei matchaa, kokeile uudelleen."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Sinun k\xe4ytt\xe4nimi ja salasana yhdistelm\xe4 on virheellinen. ",
                banned: "Sinut on b\xe4nnitty sivustolta. Syy: %{reason}",
                captcha_incorrect: "T\xe4yt\xe4 reCAPTCHA laatikko, ja kokeile uudelleen.",
                confirmation_notice: "Sinun k\xe4ytt\xe4j\xe4\xe4si ei ole viel\xe4 vahvistettu! Tarkasta s\xe4hk\xf6postisti vahvistuslinkki\xe4 varten, tai klickaa t\xe4t\xe4 %{click_here}.",
                confirmation_notice_click_here: "Klickaa t\xe4\xe4lt\xe4 l\xe4hett\xe4\xe4ksesi vahvistusinformaation uudelleen."
            }
        },
        settings: {
            account: {
                header: "K\xe4ytt\xe4j\xe4 & profiili",
                account_details: "K\xe4ytt\xe4j\xe4tiedot",
                location: {
                    header: "Sijainti",
                    placeholder: "(esim Los Santos, San Andreas)",
                    select: "Valitse maa..."
                },
                social: {
                    header: "Muut Online k\xe4ytt\xe4j\xe4t",
                    website: "Henkil\xf6kohtainen nettisivu",
                    paypal_error: "The PayPal merchant id you entered is invalid",
                    paypal_placeholder: "Paypal ID tai s\xe4hk\xf6postiosoite"
                },
                avatar: {
                    header: "Profiilikuva",
                    upload: "Lataa kustomoitu profiilikuva:",
                    restrictions: "(.jpg tai .png; Max 750Kb; Suositeltu 256x256 pixeleit\xe4)",
                    select: "Tai valitse alapuolelta:",
                    error: {
                        image_size: "T\xe4m\xe4 tiedosto on yli 750Kb.",
                        image_type: "T\xe4m\xe4 tiedosto ei ole tuettu, lataa ainoastaan .jpg ja .png kuvia."
                    }
                },
                submit: "Tallenna muutokset",
                loading: {
                    saving_settings: "Tallennetaan asetuksia...",
                    uploading_avatar: "Ladataan profiilikuvaa..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Luodaan tiedostoja...",
                saving_file: "Tallennetaan tiedostoa...",
                uploading_screenshots: "Ladataan kuvakaappauksia...",
                uploading_archive: "Ladataan arkistoa..."
            },
            error: {
                required: {
                    file_name: "Tiedoston nimi vaaditaan. ",
                    author: "Tekij\xe4n nimi vaaditaan.",
                    category: "Valitse kategoria.",
                    file: "Valitse tiedosto, jonka haluat ladata."
                },
                restrictions: {
                    file_size: "T\xe4m\xe4 tiedosto ylitt\xe4\xe4 meid\xe4n 100Mb rajan.",
                    file_type: "T\xe4m\xe4 tiedostotyyppi ei ole tuettu, lataa ainoastaan .zip, .rar ja .oiv tiedostoja",
                    image_limit: "Olet saavuttanut 15 kuvakaappauksen rajan.",
                    image_size: "%{count} kuvakaappauksistasi ei hyv\xe4ksytty, koska ne ovat yli 2Mb.",
                    image_type: "%{count} kuvakaappauksistasi ei lis\xe4tty, koska niiden muoto ei ole tuettu - lataa ainoastaan .jpg, ja .png kuvia."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Poista",
                confirm: "Oletko varma, ett\xe4 haluat poistaa t\xe4m\xe4n tiedoston?"
            },
            report: {
                title: "Reporttaa",
                explain: "Kerro, miksi olet reporttaamassa t\xe4m\xe4n tiedoston..."
            },
            rating: {
                cancel: "Poista luokitus",
                star1: "Tarvitsee t\xf6it\xe4 silti",
                star2: "Okei",
                star3: "Hyv\xe4",
                star4: "Tosi hyv\xe4",
                star5: "Mahtavaa!",
                average: {
                    one: "%{rating} / 5 t\xe4hte\xe4 (1 \xe4\xe4ni)",
                    other: "%{rating} / 5 t\xe4hte\xe4 (%{display_count} \xe4\xe4nt\xe4)"
                }
            }
        },
        video: {
            added_by: "Lis\xe4tty tekij\xe4lt\xe4 %{username}",
            label: {
                one: "%{count} video",
                other: "%{count} videota"
            },
            show_more: {
                one: "N\xe4yt\xe4 yksi video lis\xe4\xe4",
                other: "N\xe4yt\xe4 %{count} lis\xe4\xe4 videota"
            },
            add_modal: {
                header: "Lis\xe4\xe4 video tiedostoon %{file_name}",
                instructions: "Lis\xe4\xe4 URL sinun YouTube, DailyMotion tai Vimeo videostasi:",
                placeholder: "(esim. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Jos kaikki n\xe4ytt\xe4\xe4 hyv\xe4lt\xe4, muista painaa "Add Video" nappia tallentaaksesi sen.',
                error: {
                    parse: "Me emme pystyneet ottamaan videosi URL:llaa. Vahvista ett\xe4 olet k\xe4ytt\xe4m\xe4ss\xe4 tuettua nettisivua, ja kokeile uudestaan. "
                }
            },
            "delete": {
                confirm: "Oletko varma, ett\xe4 haluat poistaa t\xe4m\xe4n videon?"
            }
        },
        comment: {
            add: "Lis\xe4\xe4 kommentti",
            label: {
                one: "1 kommentti",
                other: "%{display_count} kommenttia"
            },
            author: "Tekij\xe4",
            reply: "Vastaa",
            pin: {
                title: "Kiinnit\xe4 kommentti",
                pinned: "Kiinnitetty kommentti",
                unpin: "Irroita kommentti"
            },
            report: {
                title: "Reporttaa",
                explain: "Kerro, miksi olet reporttaamassa t\xe4t\xe4 kommenttia..."
            },
            "delete": {
                title: "Poista",
                confirm: "Oletko varma, ett\xe4 haluat poistaa t\xe4m\xe4n kommentin?"
            },
            show_previous: {
                one: "N\xe4yt\xe4 viimeisin kommentti",
                other: "N\xe4yt\xe4 viimeisimm\xe4t %{count} kommenttia"
            },
            placeholder: "Lis\xe4\xe4 kommenttisi...",
            submit: "L\xe4het\xe4 kommenttisi",
            loading: "L\xe4hetet\xe4\xe4n kommenttiasi...",
            fetching: "Ladataan kommentteja...",
            flood_control: "Kommentteja ei voi lis\xe4t\xe4 noin nopeasti, odota pari minuuttia ja kokeile uudelleen.",
            no_user_message: "Liity keskusteluun %{log_in} tai %{register} k\xe4ytt\xe4j\xe4ksi, jotta voit kommentoida.",
            no_user_message_log_in: "kirjaudu sis\xe4\xe4n",
            no_user_message_register: "rekister\xf6idy",
            expand: "Laajenna lukeaksesi koko kommentin",
            context: "N\xe4yt\xe4 sis\xe4lt\xf6",
            rules: {
                agree: "Kommentoimalla hyv\xe4ksyt seuraavat s\xe4\xe4nn\xf6t %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com yhteis\xf6n suuntaviivat",
                offensive: "\xc4l\xe4 l\xe4het\xe4 hy\xf6kk\xe4\xe4vi\xe4 kommentteja muita k\xe4ytt\xe4ji\xe4 kohtaan. Jos sinulla on ongelma toisen kommentin kanssa, reporttaa se.",
                malware: "\xc4l\xe4 keskustele, tai l\xe4het\xe4 linkkej\xe4 haittaohjelma tai piraatti sis\xe4lt\xf6\xf6n.",
                rating: "\xc4l\xe4 anna luokittele mit\xe4\xe4n ilman kunnon palautetta, tai kritiikki\xe4.",
                warning: "Rikkomalla n\xe4it\xe4 s\xe4\xe4nt\xf6j\xe4 kommenttisi voidaan poistaa, tai sinun k\xe4ytt\xe4j\xe4si voidaan b\xe4nn\xe4t\xe4."
            }
        }
    },
    "fr-CA": {
        helpers: null
    },
    "fr-CH": {
        helpers: null
    },
    fr: {
        helpers: {
            label: {
                clear_all: "Effacer tout",
                welcome: "Bienvenue sur GTA5-Mods.com",
                site_info: "Le site n\xb01 des mods, scripts et utilitaires pour GTA 5 !",
                intro: "S\xe9lectionnez une des cat\xe9gories suivantes pour commencer \xe0 parcourir les derniers mods pour GTA 5 :",
                loading: "Chargement...",
                cancel: "Annuler",
                send: "Envoyer",
                donate: "Faire un don avec %{paypal}",
                fix_errors: "Merci de corriger les erreurs suivantes :",
                user: {
                    email: "Adresse mail",
                    email_confirmation: "Confirmer l'adresse mail.",
                    username: "Nom d'utilisateur",
                    password: "Mot de passe",
                    password_new: "Nouveau mot de passe",
                    password_confirmation: "Confirmer le mot de passe",
                    password_confirmation_new: "Confirmer le nouveau mot de passe",
                    password_requirements: {
                        one: "(%{count} caract\xe8re minimum)",
                        other: "(%{count} caract\xe8res minimum)"
                    },
                    remember_me: "Se souvenir de moi",
                    current_password: "Mot de passe actuel",
                    new_password: "Nouveau mot de passe"
                },
                filter: "Filtre :",
                sort_by: "Trier par :",
                time_frame: "Depuis :",
                back_to_login: "Retour \xe0 l'\xe9cran de connexion",
                have_an_account: "Utilisateur existant ?",
                dont_have_an_account: "Nouvel utilisateur ?",
                log_in_here: "Se connecter.",
                register_here: "S'inscrire.",
                confirm: {
                    title: "\xcates-vous s\xfbr ?",
                    positive: "Oui",
                    negative: "Non"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "L'adresse mail de confirmation ne correspond pas, merci de r\xe9essayer."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Le mot de passe et/ou nom d'utilisateur que vous avez saisi est incorrect.",
                banned: "Vous avez \xe9t\xe9 banni du site. Raison : %{reason}",
                captcha_incorrect: 'Merci de remplir la case "ReCAPTCHA" et r\xe9essayer.',
                confirmation_notice: "Votre compte n'a pas encore \xe9t\xe9 confirm\xe9. Merci de v\xe9rifier votre bo\xeete de r\xe9ception pour activer votre compte avec le lien de confirmation ou %{click_here}.",
                confirmation_notice_click_here: "cliquez ici pour renvoyer les instructions de confirmation"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Pseudo Skype",
                    header: "Autres comptes en ligne",
                    website: "Site web personnel",
                    paypal_error: "L'ID Paypal que vous avez entr\xe9 n'est pas valide.",
                    paypal_placeholder: "ID Paypal ou adresse mail"
                },
                header: "Compte et profil",
                account_details: "D\xe9tails du compte",
                location: {
                    header: "Emplacement",
                    placeholder: "(ex: Los Santos, San Andreas)",
                    select: "S\xe9lectionner le pays..."
                },
                avatar: {
                    header: "Image de profil",
                    upload: "Mettre en ligne une image de profil personnalis\xe9e :",
                    restrictions: "(.jpg ou .png seulement; poids maximum de 750Kb; taille recommand\xe9e de 256x256 pixels)",
                    select: "Ou en s\xe9lectionner une ci-dessous :",
                    error: {
                        image_size: "Ce fichier exc\xe8de la taille maximale de 750Kb.",
                        image_type: "Ce type de fichier n'est pas support\xe9, merci d'utiliser uniquement des images en .jpg ou .png"
                    }
                },
                submit: "Sauvegarder les changements",
                loading: {
                    saving_settings: "Sauvegarde des param\xe8tres...",
                    uploading_avatar: "Mise en ligne de l'image de profil..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Cr\xe9ation du fichier...",
                saving_file: "Sauvegarde du fichier...",
                uploading_screenshots: "Mise en ligne des captures d'\xe9cran...",
                uploading_archive: "Mise en ligne de l'archive..."
            },
            error: {
                required: {
                    file_name: "Nom du fichier requis",
                    author: "Nom d'auteur requis.",
                    category: "Merci de s\xe9lectionner une cat\xe9gorie.",
                    file: "Merci de s\xe9lectionner un fichier \xe0 mettre en ligne."
                },
                restrictions: {
                    file_size: "Ce fichier exc\xe8de la limite de 100Mb.",
                    file_type: "Ce type de fichier n'est pas support\xe9, merci de ne mettre en ligne que des fichiers en .zip, .rar ou .oiv.",
                    image_limit: "Vous avez atteint la limite maximale des 15 captures d'\xe9cran.",
                    image_size: "%{count} capture(s) d'\xe9cran n'ont pas \xe9t\xe9 ajout\xe9 car elle(s) exc\xe9dai(en)t la limite des 2Mb.",
                    image_type: "%{count} capture(s) d'\xe9cran n'ont pas \xe9t\xe9 ajout\xe9 car leur format n'est pas support\xe9 - merci de ne mettre en ligne que des images en .jpg ou .png"
                }
            }
        },
        user_file: {
            "delete": {
                title: "Supprimer",
                confirm: "\xcates-vous s\xfbr de vouloir supprimer ce fichier ?"
            },
            report: {
                title: "Signaler",
                explain: "Merci d'expliquer pourquoi vous signalez ce fichier..."
            },
            rating: {
                cancel: "Annuler le vote",
                star1: "Besoin de travail",
                star2: "OK",
                star3: "Bien",
                star4: "G\xe9nial",
                star5: "Excellent !",
                average: {
                    one: "%{rating} / 5 \xe9toiles (1 vote)",
                    other: "%{rating} / 5 \xe9toiles (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Ajout\xe9 par %{username}",
            label: {
                one: "%{count} vid\xe9o",
                other: "%{count} vid\xe9os"
            },
            show_more: {
                one: "Montrer 1 vid\xe9o de plus",
                other: "Montrer %{count} vid\xe9os de plus"
            },
            add_modal: {
                header: "Ajouter une vid\xe9o \xe0 %{file_name}",
                instructions: "Entrez l'URL compl\xe8te de votre vid\xe9o sur YouTube, DailyMotion ou Vimeo :",
                placeholder: "(ex: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Si tout semble correct, merci d\'appuyer sur "Ajouter une vid\xe9o" ci-dessous.',
                error: {
                    parse: "Nous n'avons pas pu r\xe9cup\xe9rer la vid\xe9o depuis cette URL. Merci de v\xe9rifier que vous avez \xe9crit l'adresse correctement et que vous utilisez une plateforme de partage de vid\xe9os support\xe9e, puis r\xe9essayez."
                }
            },
            "delete": {
                confirm: "\xcates-vous s\xfbr de vouloir supprimer cette vid\xe9o ?"
            }
        },
        comment: {
            add: "Ajouter un commentaire",
            label: {
                one: "1 commentaire",
                other: "%{display_count} commentaires"
            },
            author: "Auteur",
            reply: "R\xe9pondre",
            pin: {
                title: "Epingler le commentaire",
                pinned: "Commentaire \xe9pingl\xe9",
                unpin: "D\xe9s\xe9pingler le commentaire"
            },
            report: {
                title: "Signaler",
                explain: "Merci d'expliquer pourquoi vous signalez ce commentaire..."
            },
            "delete": {
                title: "Supprimer",
                confirm: "\xcates-vous s\xfbr de vouloir supprimer ce commentaire ?"
            },
            show_previous: {
                one: "Montrer le commentaire pr\xe9c\xe9dent",
                other: "Montrer les %{count} commentaires pr\xe9c\xe9dents"
            },
            placeholder: "Ajoutez votre commentaire...",
            submit: "Poster le commentaire",
            loading: "Post du commentaire...",
            fetching: "Chargement des commentaires...",
            flood_control: "Les commentaires ne peuvent \xeatre ajout\xe9s si rapidement, merci d'attendre quelques minutes puis r\xe9essayez.",
            no_user_message: "Joignez la conversation !  %{log_in} ou %{register} pour pouvoir commenter.",
            no_user_message_log_in: "Connectez-vous",
            no_user_message_register: "enregistrez-vous",
            expand: "Lire la suite",
            context: "Voir le contexte",
            rules: {
                agree: "En postant un commentaire, vous acceptez de suivre les %{community_guidelines}.",
                agree_community_guidelines: "directives communautaires de GTA5-Mods.com",
                offensive: "Ne postez pas de commentaire offensant \xe0 l'encontre d'autres utilisateurs. Si vous avez un probl\xe8me avec un autre commentaire, veuillez le signaler.",
                malware: "Ne parlez ou ne postez pas de liens vers des logiciels malveillants ou des contenus pirat\xe9s.",
                rating: "Ne notez pas sans fournir un avis ou une critique pertinente.",
                warning: "La violation d'une de ces directives peut entra\xeener la suppression de votre commentaire voire le bannissement de votre compte."
            }
        }
    },
    gl: {
        helpers: {
            label: {
                welcome: "Benvido a GTA5-Mods.com",
                site_info: "A t\xfaa fonte para os mods, scripts e ferramentas mais recentes de GTA 5",
                intro: "Escolle unha das seguintes categor\xedas para comezar a navegar polos mods m\xe1is recentes de GTA 5:",
                loading: "A cargar...",
                cancel: "Cancelar",
                send: "Enviar",
                donate: "Doar con %{paypal}",
                fix_errors: "Por favor, corrixe os seguintes erros:",
                user: {
                    email: "Enderezo de correo electr\xf3nico",
                    email_confirmation: "Confirmar enderezo",
                    username: "Nome de usuario",
                    password: "Contrasinal",
                    password_new: "Novo contrasinal",
                    password_confirmation: "Confirmar contrasinal",
                    password_confirmation_new: "Confirmar o novo contrasinal",
                    password_requirements: {
                        one: "(o m\xednimo \xe9 de %{count} car\xe1cter)",
                        other: "(o m\xednimo \xe9 de %{count} caracteres)"
                    },
                    remember_me: "Rec\xf3rdame",
                    current_password: "Contrasinal actual",
                    new_password: "Novo contrasinal"
                },
                filter: "Filtro:",
                sort_by: "Ordenar por:",
                time_frame: "Dende:",
                back_to_login: "Volver a iniciar sesi\xf3n",
                have_an_account: "Xa tes unha conta?",
                dont_have_an_account: "Non tes unha conta?",
                log_in_here: "Inicia sesi\xf3n aqu\xed.",
                register_here: "Rex\xedstrate aqu\xed.",
                confirm: {
                    title: "Seguro?",
                    positive: "S\xed",
                    negative: "Non"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Os enderezos de correo electr\xf3nico introducidos non coinciden, por favor, escr\xedbeos de novo."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "O nome de usuario e/ou contrasinal son incorrectos.",
                banned: "Fuches expulsado da web polo seguinte motivo: %{reason}",
                captcha_incorrect: "Por favor, enche o reCAPTCHA e t\xe9ntao de novo.",
                confirmation_notice: "A t\xfaa conta non foi confirmada a\xednda! Por favor, comproba a t\xfaa bandexa de entrada no teu correo electr\xf3nico para acceder \xe1 ligaz\xf3n de confirmaci\xf3n, ou %{click_here}",
                confirmation_notice_click_here: "pulsa aqu\xed para reenviar as instrucci\xf3ns de confirmaci\xf3n"
            }
        },
        settings: {
            account: {
                header: "Conta e perfil",
                account_details: "Detalles da conta",
                location: {
                    header: "Ubicaci\xf3n",
                    placeholder: "(por exemplo Os Santos, San Andreas)",
                    select: "Selecciona pa\xeds..."
                },
                social: {
                    header: "Outras contas",
                    website: "Sitio web persoal",
                    paypal_error: "A merchant ID de PayPal introducida non \xe9 v\xe1lida.",
                    paypal_placeholder: "Merchant ID de PayPal ou direcci\xf3n de correo electr\xf3nico"
                },
                avatar: {
                    header: "Imaxe de perfil",
                    upload: "Subir unha imaxe de perfil:",
                    restrictions: "(s\xf3 ac\xe9ptanse .jpg ou .png; peso m\xe1ximo 750Kb; tama\xf1o recomendado de 256x256)",
                    select: "Ou escolle unha das seguintes:",
                    error: {
                        image_size: "O arquivo excede o l\xedmite de 750Kb.",
                        image_type: "Este formato non est\xe1 soportado, por favor, sube s\xf3 imaxes .jpg ou .png"
                    }
                },
                submit: "Gardar cambios",
                loading: {
                    saving_settings: "Gardando a configuraci\xf3n...",
                    uploading_avatar: "Subindo a imaxe de perfil..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Creando ficheiro...",
                saving_file: "Gardando ficheiro...",
                uploading_screenshots: "Subindo capturas...",
                uploading_archive: "Subindo ficheiro..."
            },
            error: {
                required: {
                    file_name: "Requ\xedrese un nome para o ficheiro.",
                    author: "Requ\xedrese o nome do autor.",
                    category: "Por favor, escolle unha categor\xeda.",
                    file: "Por favor, escolle o ficheiro a subir."
                },
                restrictions: {
                    file_size: "O arquivo excede o l\xedmite de 100Mb.",
                    file_type: "O formato do arquivo non \xe9 aceptado, por favor, sube s\xf3 arquivos .zip, .rar ou .oiv.",
                    image_limit: "Alcanzaches o l\xedmite m\xe1ximo de 15 capturas.",
                    image_size: "%{count} das t\xfaas capturas non puideron ser engadidas porque exced\xedan o l\xedmite de 2Mb.",
                    image_type: "%{count} das t\xfaas capturas non puideron ser engadidas porque o seu formato non \xe9 aceptado - por favor, sube s\xf3 imaxes .jpg ou .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Eliminar",
                confirm: "Seguro que queres borrar este ficheiro?"
            },
            report: {
                title: "Reportar",
                explain: "Por favor, explica por qu\xe9 est\xe1s a reportar este ficheiro..."
            },
            rating: {
                cancel: "Cancelar valoraci\xf3n",
                star1: "Necesita m\xe1is traballo",
                star2: "OK",
                star3: "Bo",
                star4: "Estupendo",
                star5: "Incre\xedble!",
                average: {
                    one: "%{rating} / 5 estrelas (1 voto)",
                    other: "%{rating} / 5 estrelas (%{display_count} votos)"
                }
            }
        },
        video: {
            added_by: "Engadido por %{username}",
            label: {
                one: "%{count} v\xeddeo",
                other: "%{count} v\xeddeos"
            },
            show_more: {
                one: "Amosar 1 v\xeddeo m\xe1is",
                other: "Amosar %{count} v\xeddeos m\xe1is"
            },
            add_modal: {
                header: "Engadir un v\xeddeo a %{file_name}",
                instructions: "Introduce a ligaz\xf3n completa do teu v\xeddeo de YouTube, DailyMotion ou Vimeo:",
                placeholder: "(por exemplo youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Se todo est\xe1 correcto, pulsa "Engadir v\xeddeo" para gardalo.',
                error: {
                    parse: "Non se puido coller o v\xeddeo desa ligaz\xf3n, por favor, confirma que est\xe1s a empregar unha web soportada e t\xe9ntao de novo."
                }
            },
            "delete": {
                confirm: "Seguro que queres quitar este v\xeddeo?"
            }
        },
        comment: {
            add: "Engadir un comentario",
            label: {
                one: "1 comentario",
                other: "%{display_count} comentarios"
            },
            author: "Autor",
            reply: "Resposta",
            pin: {
                title: "Destacar comentario",
                pinned: "Comentario destacado",
                unpin: "Non destacar este comentario"
            },
            report: {
                title: "Reportar",
                explain: "Por favor, explica por qu\xe9 est\xe1s a reportar este ficheiro..."
            },
            "delete": {
                title: "Borrar",
                confirm: "Seguro que queres borrar este comentario?"
            },
            show_previous: {
                one: "Mostrar 1 comentario anterior",
                other: "Mostrar os %{count} comentarios anteriores"
            },
            placeholder: "Engade o teu comentario...",
            submit: "Publicar comentario",
            loading: "Publicando comentario...",
            fetching: "Cargando os comentarios...",
            flood_control: "Os comentarios non poden ser engadidos tan r\xe1pido, por favor, espera uns minutos e t\xe9ntao de novo.",
            no_user_message: "\xdanete \xe1 conversa! %{log_in} ou %{register} nunha conta para poder comentar.",
            no_user_message_log_in: "Accede",
            no_user_message_register: "rex\xedstrate",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    he: {
        helpers: null
    },
    "hi-IN": {
        helpers: null
    },
    hi: {
        helpers: {
            label: {
                welcome: "GTA5-Mods.com \u092e\u0947\u0902 \u0906\u092a\u0915\u093e \u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948",
                site_info: "\u0928\u0935\u0940\u0928\u0924\u092e GTA 5 \u0915\u093e\u0930 Mods, \u0932\u093f\u092a\u093f\u092f\u094b\u0902, \u0909\u092a\u0915\u0930\u0923 \u0914\u0930 \u0905\u0927\u093f\u0915 \u0915\u0947 \u0932\u093f\u090f \u0906\u092a\u0915\u093e \u0938\u094d\u0930\u094b\u0924 \u0964",
                intro: "\u0928\u0935\u0940\u0928\u0924\u092e GTA 5 mods \u0915\u0947 \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u093f\u0902\u0917 \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u093f\u092e\u094d\u0928\u0932\u093f\u0916\u093f\u0924 \u0936\u094d\u0930\u0947\u0923\u093f\u092f\u094b\u0902 \u092e\u0947\u0902 \u0938\u0947 \u090f\u0915 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902:",
                loading: "\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948 ...",
                cancel: "\u0930\u0926\u094d\u0926",
                send: "\u092d\u0947\u091c\u0947\u0902",
                donate: "\u0938\u093e\u0925 \u0926\u093e\u0928 %{paypal}",
                fix_errors: "\u0928\u093f\u092e\u094d\u0928\u0932\u093f\u0916\u093f\u0924 \u0924\u094d\u0930\u0941\u091f\u093f\u092f\u094b\u0902 \u0915\u094b \u0920\u0940\u0915 \u0915\u0930\u0947\u0902: ",
                user: {
                    email: "\u0908\u092e\u0947\u0932 \u092a\u0924\u093e",
                    email_confirmation: "Confirm email address",
                    username: "\u092f\u0942\u091c\u0930 \u0915\u093e \u0928\u093e\u092e ",
                    password: "\u092a\u093e\u0938\u0935\u0930\u094d\u0921",
                    password_new: "\u0928\u092f\u093e \u092a\u093e\u0938\u0935\u0930\u094d\u0921",
                    password_confirmation: "\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0940\u091c\u093f\u092f\u0947",
                    password_confirmation_new: "\u0928\u090f \u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902",
                    password_requirements: {
                        one: "(%{count} \u091a\u0930\u093f\u0924\u094d\u0930 \u0928\u094d\u092f\u0942\u0928\u0924\u092e)",
                        other: "(%{count} \u0905\u0915\u094d\u0937\u0930 \u0928\u094d\u092f\u0942\u0928\u0924\u092e )"
                    },
                    remember_me: "\u092e\u0941\u091d\u0947 \u092f\u093e\u0926 \u0930\u0916\u0947\u0902",
                    current_password: "\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u092a\u093e\u0938\u0935\u0930\u094d\u0921",
                    new_password: "\u0928\u092f\u093e \u092a\u093e\u0938\u0935\u0930\u094d\u0921"
                },
                filter: "\u092b\u093f\u0932\u094d\u091f\u0930:",
                sort_by: "\u0907\u0938\u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0915\u094d\u0930\u092e\u092c\u0926\u094d\u0927 \u0915\u0930\u0947\u0902",
                time_frame: "\u0915\u0947 \u092c\u093e\u0926 \u0938\u0947",
                back_to_login: "\u0932\u0949\u0917\u093f\u0928 \u092a\u0930 \u0935\u093e\u092a\u0938 \u091c\u093e\u090f\u0902",
                have_an_account: "\u0915\u094d\u092f\u093e \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u092a\u0939\u0932\u0947 \u0938\u0947 \u090f\u0915 \u0916\u093e\u0924\u093e \u092e\u094c\u091c\u0942\u0926 \u0939\u0948?",
                dont_have_an_account: "\u0915\u094b\u0908 \u0916\u093e\u0924\u093e \u0928\u0939\u0940\u0902 \u0939\u0948?",
                log_in_here: "\u092f\u0939\u093e\u0902 \u0932\u0949\u0917\u093f\u0928 \u0915\u0930\u0947\u0902\u0964",
                register_here: "\u092f\u0939\u093e\u0902 \u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0915\u0930\u0947\u0902\u0964",
                confirm: {
                    title: "\u0915\u094d\u092f\u093e \u0906\u092a\u0915\u094b \u092f\u0915\u0940\u0928 \u0939\u0948?",
                    positive: "\u0939\u093e\u0902",
                    negative: "\u0928\u0939\u0940\u0902"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\u0905\u092a\u0928\u0947 \u092f\u0942\u091c\u093c\u0930\u0928\u0947\u092e \u0914\u0930 \u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u0938\u0902\u092f\u094b\u091c\u0928 \u0917\u0932\u0924 \u0939\u0948\u0964",
                banned: "\u0906\u092a \u0938\u093e\u0907\u091f \u0938\u0947 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927 \u0932\u0917\u093e \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948\u0964 \u0915\u093e\u0930\u0923: %{reason}",
                captcha_incorrect: "ReCAPTCHA \u092c\u0949\u0915\u094d\u0938 \u0915\u094b \u092d\u0930\u0928\u0947 \u0914\u0930 \u092a\u0941\u0928: \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902 \u0964",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "\u0916\u093e\u0924\u093e \u0914\u0930 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932",
                account_details: "\u0916\u093e\u0924\u093e \u0935\u093f\u0935\u0930\u0923",
                location: {
                    header: "\u0938\u094d\u0925\u093e\u0928",
                    placeholder: "(\u091c\u0948\u0938\u0947 \u0932\u0949\u0938 \u0938\u0948\u0902\u091f\u094b\u0938, \u0938\u0948\u0928 \u090f\u0902\u0921\u094d\u0930\u093f\u092f\u093e\u0938 )",
                    select: "\u0926\u0947\u0936 \u091a\u0941\u0928\u0947\u0902 ..."
                },
                social: {
                    header: "\u0905\u0928\u094d\u092f \u0911\u0928\u0932\u093e\u0907\u0928 \u0916\u093e\u0924\u094b\u0902",
                    website: "\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u0935\u0947\u092c\u0938\u093e\u0907\u091f",
                    paypal_error: "\u0906\u092a\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0926\u0930\u094d\u091c \u092a\u0947\u092a\u0948\u0932 \u0935\u094d\u092f\u093e\u092a\u093e\u0930\u0940 \u0906\u0908\u0921\u0940 \u0905\u092e\u093e\u0928\u094d\u092f \u0939\u0948\u0964",
                    paypal_placeholder: "\u092a\u0947\u092a\u0948\u0932 \u0935\u094d\u092f\u093e\u092a\u093e\u0930\u0940 \u0906\u0908\u0921\u0940 \u092f\u093e \u0908\u092e\u0947\u0932 \u092a\u0924\u0947"
                },
                avatar: {
                    header: "\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u092b\u094b\u091f\u094b",
                    upload: "\u090f\u0915 \u0915\u0938\u094d\u091f\u092e \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0924\u0938\u094d\u0935\u0940\u0930 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902:",
                    restrictions: "(.jpg \u092f\u093e \u0915\u0947\u0935\u0932 .png \u0905\u0927\u093f\u0915\u0924\u092e 750Kb ; 256x256 \u092a\u093f\u0915\u094d\u0938\u0932 \u0905\u0928\u0941\u0936\u0902\u0938\u093f\u0924)",
                    select: "\u092f\u093e \u0928\u0940\u091a\u0947 \u0938\u0947 \u090f\u0915 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902:",
                    error: {
                        image_size: "\u0935\u0939 \u092b\u093e\u0907\u0932 \u0939\u092e\u093e\u0930\u0947 750Kb \u0938\u0940\u092e\u093e \u0938\u0947 \u0905\u0927\u093f\u0915 \u0939\u0948 \u0964",
                        image_type: "\u0909\u0938 \u092b\u093c\u093e\u0907\u0932 \u092a\u094d\u0930\u0915\u093e\u0930 \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948 , \u0915\u0947\u0935\u0932 \u091c\u0947\u092a\u0940\u091c\u0940 \u0914\u0930 .png \u091b\u0935\u093f\u092f\u094b\u0902 \u0915\u094b \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902\u0964"
                    }
                },
                submit: "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928\u094b\u0902 \u0915\u094b \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0915\u0930\u0947\u0902",
                loading: {
                    saving_settings: "\u0938\u0947\u091f\u093f\u0902\u0917 \u0938\u0939\u0947\u091c \u0930\u0939\u093e \u0939\u0948 ..",
                    uploading_avatar: "\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0924\u0938\u094d\u0935\u0940\u0930 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930 \u0930\u0939\u093e \u0939\u0948 ..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u092b\u093c\u093e\u0907\u0932 \u092c\u0928\u093e \u0930\u0939\u093e \u0939\u0948 ...",
                saving_file: "\u092b\u093e\u0907\u0932 \u0938\u0939\u0947\u091c \u0930\u0939\u093e \u0939\u0948 ...",
                uploading_screenshots: "\u0938\u094d\u0915\u094d\u0930\u0940\u0928\u0936\u0949\u091f \u0905\u092a\u0932\u094b\u0921 \u0915\u0930 \u0930\u0939\u093e \u0939\u0948 ...",
                uploading_archive: "\u0938\u0902\u0917\u094d\u0930\u0939 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930 \u0930\u0939\u093e \u0939\u0948 ..."
            },
            error: {
                required: {
                    file_name: "\u092b\u093c\u093e\u0907\u0932 \u0928\u093e\u092e \u0906\u0935\u0936\u094d\u092f\u0915 \u0939\u0948\u0964",
                    author: "\u0932\u0947\u0916\u0915 \u0928\u093e\u092e \u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0939\u0948 \u0964",
                    category: "\u0915\u0943\u092a\u092f\u093e \u090f\u0915 \u0915\u0948\u091f\u0947\u0917\u0930\u0940 \u091a\u092f\u0928\u093f\u0924 \u0915\u0930\u0947\u0902\u0964",
                    file: "\u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u090f\u0915 \u092b\u093c\u093e\u0907\u0932 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902\u0964"
                },
                restrictions: {
                    file_size: "\u0935\u0939 \u092b\u093e\u0907\u0932 \u0939\u092e\u093e\u0930\u0947 100 \u090f\u092e\u092c\u0940 \u0938\u0940\u092e\u093e \u0938\u0947 \u0905\u0927\u093f\u0915 \u0939\u0948 \u0964",
                    file_type: "\u0909\u0938 \u092b\u093c\u093e\u0907\u0932 \u092a\u094d\u0930\u0915\u093e\u0930 , \u0915\u0947\u0935\u0932 .zip \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902 \u0914\u0930 \u092b\u093c\u093e\u0907\u0932\u094b\u0902 .rar \u0915\u0943\u092a\u092f\u093e \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
                    image_limit: "\u0906\u092a 15 \u0938\u094d\u0915\u094d\u0930\u0940\u0928\u0936\u0949\u091f \u0905\u0927\u093f\u0915\u0924\u092e \u0938\u0940\u092e\u093e \u0924\u0915 \u092a\u0939\u0941\u0902\u091a \u0917\u090f \u0964",
                    image_size: "%{count} \u0935\u0947 2Mb \u0938\u0947 \u0905\u0927\u093f\u0915 \u0915\u0940 \u0935\u091c\u0939 \u0938\u0947 \u0905\u092a\u0928\u0947 \u0938\u094d\u0915\u094d\u0930\u0940\u0928\u0936\u0949\u091f \u091c\u094b\u0921\u093c\u0947 \u0928\u0939\u0940\u0902 \u0917\u090f \u0925\u0947 \u0964",
                    image_type: "%{count} \u0909\u0928\u0915\u0947 \u0938\u094d\u0935\u0930\u0942\u092a \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0905\u092a\u0928\u0947 \u0938\u094d\u0915\u094d\u0930\u0940\u0928\u0936\u0949\u091f \u0928\u0939\u0940\u0902 \u091c\u094b\u0921\u093c\u093e \u0917\u092f\u093e \u0939\u0948 - \u0915\u0947\u0935\u0932 \u091c\u0947\u092a\u0940\u091c\u0940 \u0914\u0930 .png \u091b\u0935\u093f\u092f\u094b\u0902 \u0915\u094b \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902\u0964"
                }
            }
        },
        user_file: {
            "delete": {
                title: "\u0939\u091f\u093e\u0928\u093e",
                confirm: "\u0915\u094d\u092f\u093e \u0906\u092a \u0926\u094d\u0935\u093e\u0930\u093e \u0907\u0938 \u092b\u093e\u0907\u0932 \u0915\u094b \u0939\u091f\u093e\u092f\u093e \u091c\u093e\u0928\u093e \u0938\u0941\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0939\u0948?"
            },
            report: {
                title: "\u0930\u093f\u092a\u094b\u0930\u094d\u091f",
                explain: "\u0906\u092a \u0907\u0938 \u092b\u093e\u0907\u0932 \u0915\u094b \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0915\u094d\u092f\u094b\u0902 \u0915\u0940 \u0935\u094d\u092f\u093e\u0916\u094d\u092f\u093e \u0915\u0930\u0947\u0902 ..."
            },
            rating: {
                cancel: "\u0930\u0947\u091f\u093f\u0902\u0917 \u0930\u0926\u094d\u0926",
                star1: "\u0915\u093e\u092e \u0915\u0940 \u091c\u0930\u0942\u0930\u0924 \u0939\u0948",
                star2: "\u0920\u0940\u0915",
                star3: "\u0905\u091a\u094d\u091b\u093e",
                star4: "\u092e\u0939\u093e\u0928",
                star5: "\u092d\u092f\u093e\u0928\u0915!",
                average: {
                    one: "%{rating} / 5 \u0938\u093f\u0924\u093e\u0930\u0947 (1 \u0935\u094b\u091f)",
                    other: "%{rating} / 5 \u0938\u093f\u0924\u093e\u0930\u0947 (%{display_count} \u0935\u094b\u091f)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "%{count} \u0935\u0940\u0921\u093f\u092f\u094b",
                other: "%{count} \u0935\u0940\u0921\u093f\u092f\u094b"
            },
            show_more: {
                one: "1 \u0914\u0930 \u0935\u0940\u0921\u093f\u092f\u094b \u0926\u093f\u0916\u093e\u090f\u0901",
                other: "\u0926\u093f\u0916\u093e\u090f\u0901 %{count} \u0905\u0927\u093f\u0915 \u0935\u0940\u0921\u093f\u092f\u094b"
            },
            add_modal: {
                header: "\u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u090f\u0915 \u0935\u0940\u0921\u093f\u092f\u094b \u091c\u094b\u0921\u093c\u0947\u0902 %{file_name}",
                instructions: "\u092f\u0942\u091f\u094d\u092f\u0942\u092c , Dailymotion \u092f\u093e Vimeo \u092a\u0930 \u0905\u092a\u0928\u0947 \u0935\u0940\u0921\u093f\u092f\u094b \u0915\u0947 \u0932\u093f\u090f \u092a\u0942\u0930\u094d\u0923 URL \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902:",
                placeholder: "(\u091c\u0948\u0938\u0947: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\u0938\u092c \u0915\u0941\u091b \u0905\u091a\u094d\u091b\u093e \u0932\u0917 \u0930\u0939\u093e \u0939\u0948, \u0907\u0938\u0947 \u092c\u091a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u0940\u091a\u0947 \u0926\u093f\u090f \u0917\u090f " \u0935\u0940\u0921\u093f\u092f\u094b \u091c\u094b\u0921\u093c\u0947\u0902" \u092a\u094d\u0930\u0947\u0938 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u0941\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0915\u0930\u0947\u0902\u0964',
                error: {
                    parse: "\u0939\u092e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902 \u0915\u093f URL \u0938\u0947 \u0935\u0940\u0921\u093f\u092f\u094b \u0915\u094b \u092a\u0915\u0921\u093c \u0928\u0939\u0940\u0902 \u0938\u0915\u093e , \u0924\u094b \u0906\u092a \u090f\u0915 \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0928\u0947 \u0914\u0930 \u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902\u0964"
                }
            },
            "delete": {
                confirm: "\u0906\u092a \u0907\u0938 \u0935\u0940\u0921\u093f\u092f\u094b \u0915\u094b \u0939\u091f\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902 \u0906\u092a \u092f\u0915\u0940\u0928 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902?"
            }
        },
        comment: {
            add: "\u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u091c\u094b\u0921\u093c\u0947\u0902",
            label: {
                one: "1 \u091f\u093f\u092a\u094d\u092a\u0923\u0940",
                other: "%{display_count} \u091f\u093f\u092a\u094d\u092a\u0923\u093f\u092f\u093e\u0901"
            },
            author: "\u0932\u0947\u0916\u0915",
            reply: "\u0909\u0924\u094d\u0924\u0930",
            pin: {
                title: "\u092a\u093f\u0928 \u091f\u093f\u092a\u094d\u092a\u0923\u0940",
                pinned: "\u091f\u093f\u0915\u0940 \u091f\u093f\u092a\u094d\u092a\u0923\u0940",
                unpin: "\u0905\u0928\u092a\u093f\u0928 \u091f\u093f\u092a\u094d\u092a\u0923\u0940"
            },
            report: {
                title: "\u0930\u093f\u092a\u094b\u0930\u094d\u091f",
                explain: "\u0906\u092a \u0907\u0938 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u0915\u094b \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0915\u094d\u092f\u094b\u0902 \u0915\u0940 \u0935\u094d\u092f\u093e\u0916\u094d\u092f\u093e \u0915\u0930\u0947\u0902 ..."
            },
            "delete": {
                title: "\u0939\u091f\u093e\u0928\u093e",
                confirm: "\u0915\u094d\u092f\u093e \u0906\u092a \u0907\u0938 \u0915\u092e\u0947\u0902\u091f \u0915\u094b \u092e\u093f\u091f\u093e\u0928\u0947 \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u092a\u0915\u094d\u0915\u0947 \u0939\u0948\u0902?"
            },
            show_previous: {
                one: "\u092a\u093f\u091b\u0932\u0947 1 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u0926\u093f\u0916\u093e\u090f\u0902",
                other: "\u092a\u093f\u091b\u0932\u0947 \u0926\u093f\u0916\u093e\u090f\u0901 %{count} \u091f\u093f\u092a\u094d\u092a\u0923\u093f\u092f\u093e\u0901"
            },
            placeholder: "\u0905\u092a\u0928\u0940 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u091c\u094b\u0921\u0947 ..",
            submit: "\u0924\u0947\u091c\u093c\u0940 \u0938\u0947 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u0915\u0930\u0928\u093e",
            loading: "\u092a\u094b\u0938\u094d\u091f\u093f\u0902\u0917 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 ...",
            fetching: "\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 ...",
            flood_control: "\u091f\u093f\u092a\u094d\u092a\u0923\u093f\u092f\u093e\u0901 \u0915\u0941\u091b \u092e\u093f\u0928\u091f \u092a\u094d\u0930\u0924\u0940\u0915\u094d\u0937\u093e \u0915\u0930\u0947\u0902 \u0914\u0930 \u092a\u0941\u0928: \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902 , \u0924\u093e\u0915\u093f \u091c\u0932\u094d\u0926\u0940 \u0938\u0947 \u0928\u0939\u0940\u0902 \u091c\u094b\u0921\u093c\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0964",
            no_user_message: "\u092c\u093e\u0924\u091a\u0940\u0924 \u092e\u0947\u0902 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902 ! %{log_in} \u092f\u093e %{register} \u090f\u0915 \u0916\u093e\u0924\u0947 \u0915\u0947 \u0932\u093f\u090f \u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u0915\u094d\u0937\u092e \u0939\u094b\u0964",
            no_user_message_log_in: "\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902",
            no_user_message_register: "\u0930\u091c\u093f\u0938\u094d\u091f\u0930",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    hr: {
        helpers: {
            label: {
                welcome: "Dobrodosli na GTA5-Mods.com",
                site_info: "Va\u0161 izvor za najnovije GTA 5 aute, skripte, alate i vi\u0161e.",
                intro: "Odaberite jednu od sljede\u0107ih kategorija i pogledajte \u0161to je novo na GTA 5 mods:",
                loading: "U\u010ditavanje...",
                cancel: "Otka\u017ei",
                send: "Po\u0161alji",
                donate: "Donirajte putem %{paypal}",
                fix_errors: "Molimo popraviti sljede\u0107e gre\u0161ke:",
                user: {
                    email: "Email adresa",
                    email_confirmation: "Confirm email address",
                    username: "Korisni\u010dko ime",
                    password: "Lozinka",
                    password_new: "Nova lozinka",
                    password_confirmation: "Potvrda lozinke",
                    password_confirmation_new: "Potvrdite novu lozinku",
                    password_requirements: {
                        one: "(minimalno %{count} znak)",
                        few: "(minimalno %{count} znakova)",
                        many: "(minimalno %{count} znakova)",
                        other: "(minimalno %{count} znakova)"
                    },
                    remember_me: "Zapamti me",
                    current_password: "Trenutna lozinka",
                    new_password: "Nova lozinka"
                },
                filter: "Filter:",
                sort_by: "Poredaj po:",
                time_frame: "Od:",
                back_to_login: "Povratak na prijavu",
                have_an_account: "Ve\u0107 imate ra\u010dun?",
                dont_have_an_account: "Nemate ra\u010dun?",
                log_in_here: "Prijavite se ovdje.",
                register_here: "Registrirajte se ovdje",
                confirm: {
                    title: "Jeste li sigurni?",
                    positive: "Da",
                    negative: "Ne"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Kombinacija korisni\u010dkog imena i lozinke nije to\u010dna",
                banned: "Zabranjen vam je pristup ovoj stranici zbog: %{reason}",
                captcha_incorrect: "Molimo vas da popunite reCAPTCHu i poku\u0161ate ponovno.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "Ra\u010dun i profil",
                account_details: "Detalji ra\u010duna",
                location: {
                    header: "Lokacija",
                    placeholder: "(npr. Los Santos, San Andreas)",
                    select: "Odaberite dr\u017eavu..."
                },
                social: {
                    header: "Ostali online ra\u010duni",
                    website: "Osobna web stranica",
                    paypal_error: "Va\u0161 PayPal ID je neto\u010dan",
                    paypal_placeholder: "PayPal ID ili email adresa"
                },
                avatar: {
                    header: "Slika profila",
                    upload: "Dodajte svoju sliku:",
                    restrictions: "(samo .jpg ili .png ; Maksimalna veli\u010dina 750Kb; Preporu\u010deno 256x256 piksela)",
                    select: "Ili odaberite jednu od sljede\u0107ih:",
                    error: {
                        image_size: "Datoteka je ve\u0107a od 750Kb",
                        image_type: "Datoteka nije podr\u017eana, molimo vas da koristite .jpg ili .png format"
                    }
                },
                submit: "Spremi promjene",
                loading: {
                    saving_settings: "Spremi postavke...",
                    uploading_avatar: "Dodavanje profilne slike..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Kreiranje datoteke...",
                saving_file: "Spremanje datoteke...",
                uploading_screenshots: "Dodavanje screenshotova...",
                uploading_archive: "Dodavanje arhive..."
            },
            error: {
                required: {
                    file_name: "Ime datoteke je nu\u017eno.",
                    author: "Ime autora je nu\u017eno.",
                    category: "Odaberite kategoriju.",
                    file: "Odaberite datoteku za dodavanje."
                },
                restrictions: {
                    file_size: "Ta datoteka je ve\u0107a od dopu\u0161tenih 100Mb.",
                    file_type: "Ta datoteka nije podr\u017eana, podr\u017eane su samo .zip, .rar i .oiv arhive.",
                    image_limit: "Dosegli ste maksimum od 15 screenshotova.",
                    image_size: "%{count} va\u0161ih screenshotova nije dodano je su ve\u0107i od 2Mb.",
                    image_type: "%{count} screenshotova nije dodano je format nije podr\u017ean - koristite .jpg i .png slike."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Obri\u0161i",
                confirm: "Jeste li sigurni da \u017eelite ukloniti ovu datoteku?"
            },
            report: {
                title: "Prijavi",
                explain: "Objasnite nam za\u0161to prijavljujete ovu datoteku..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Needs Work",
                star2: "OK",
                star3: "Good",
                star4: "Great",
                star5: "Awesome!",
                average: {
                    one: "%{rating} / 5 stars (1 vote)",
                    few: "%{rating} / 5 stars (%{display_count} votes)",
                    many: "%{rating} / 5 stars (%{display_count} votes)",
                    other: "%{rating} / 5 stars (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                zero: "%{count} videa",
                one: "%{count} video",
                few: "%{count} videa",
                many: "%{count} videa",
                other: "%{count} videa"
            },
            show_more: {
                one: "Poka\u017ei prethodno video",
                few: "Poka\u017ei %{count} prethodnih videa",
                many: "Poka\u017ei %{count} prethodnih videa",
                other: "Poka\u017ei %{count} prethodnih videa"
            },
            add_modal: {
                header: "Dodaj videu u %{file_name}",
                instructions: "Unesite punu YouTube, DailyMotion ili Vimeo adresu:",
                placeholder: "(npr. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Ako je sve u redu pritisnite "Dodaj video" ispod i spremite.',
                error: {
                    parse: "Nismo mogli dodati video s te adrese, molimo vas provjerite koristite li podr\u017eanu web stranicu i poku\u0161ajte ponovno."
                }
            },
            "delete": {
                confirm: "Jeste li sigurni da \u017eelite ukloniti ovaj video?"
            }
        },
        comment: {
            add: "Komentiraj",
            label: {
                zero: "%{count} komentara",
                one: "%{count} komentar",
                few: "%{count} komentara",
                many: "%{count} komentara",
                other: "%{count} komentara"
            },
            author: "Autor",
            reply: "Odgovri",
            pin: {
                title: "Oka\u010di komentar",
                pinned: "Oka\u010deni komentari",
                unpin: "Otkva\u010di komentar"
            },
            report: {
                title: "Prijavi",
                explain: "Objasnite za\u0161to prijavljujete ovu datoteku..."
            },
            "delete": {
                title: "Obri\u0161i",
                confirm: "Jeste li sigurni da \u017eelite ukloniti ovaj komentar?"
            },
            show_previous: {
                one: "Poka\u017ei prethodni komentar",
                few: "Poka\u017ei %{count} prethodnih komentara",
                many: "Poka\u017ei %{count} prethodnih komentara",
                other: "Poka\u017ei %{count} prethodnih komentara"
            },
            placeholder: "Dodajte svoj komentar...",
            submit: "Komentiraj",
            loading: "Komentiranje...",
            fetching: "U\u010ditavanje komentara...",
            flood_control: "Ne mo\u017eete komentirati tako brzo, sa\u010dekajte nekoliko minuta.",
            no_user_message: "Uklju\u010dite se u raspravu! %{log_in} ili %{register} kako bi mogli komentirati.",
            no_user_message_log_in: "Prijavite se",
            no_user_message_register: "se registrirajte",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    hu: {
        helpers: {
            label: {
                clear_all: "\xd6sszes T\xf6rl\xe9se",
                welcome: "\xdcdv\xf6zl\xfcnk a GTA5-Mods.com-on",
                site_info: "A legfrissebb GTA 5 kocsi mod-ok, szkriptek, eszk\xf6z\xf6k \xe9s m\xe9g sok m\xe1s forr\xe1sa.",
                intro: "V\xe1lassz egyet a k\xf6vetkez\u0151 kateg\xf3ri\xe1k k\xf6z\xfcl, hogy megkezdhesd a b\xf6ng\xe9sz\xe9st a leg\xfajabb GTA 5 mod-ok k\xf6z\xf6tt:",
                loading: "T\xf6lt\xe9s...",
                cancel: "M\xe9gse",
                send: "Elk\xfcld",
                donate: "Adom\xe1nyozz %{paypal}-on kereszt\xfcl",
                fix_errors: "K\xe9rlek, jav\xedtsd az al\xe1bbi hib\xe1kat:",
                user: {
                    email: "E-mail c\xedm",
                    email_confirmation: "E-mail c\xedm meger\u0151s\xedt\xe9se",
                    username: "Felhaszn\xe1l\xf3n\xe9v",
                    password: "Jelsz\xf3",
                    password_new: "\xdaj jelsz\xf3",
                    password_confirmation: "Jelsz\xf3 meger\u0151s\xedt\xe9se",
                    password_confirmation_new: "\xdaj jelsz\xf3 meger\u0151s\xedt\xe9se",
                    password_requirements: {
                        one: "(%{count} karakter minimum)",
                        other: "(%{count} karakter minimum)"
                    },
                    remember_me: "Eml\xe9kezz r\xe1m",
                    current_password: "Jelenlegi jelsz\xf3",
                    new_password: "\xdaj jelsz\xf3"
                },
                filter: "Sz\u0171r\xe9s",
                sort_by: "Rendez\xe9s",
                time_frame: "Ideje:",
                back_to_login: "Vissza a bejelentkez\xe9shez",
                have_an_account: "Van m\xe1r fi\xf3kod?",
                dont_have_an_account: "Nincs m\xe9g fi\xf3kod?",
                log_in_here: "Itt jeletkezhetsz be.",
                register_here: "Itt regisztr\xe1lhatsz.",
                confirm: {
                    title: "Biztos vagy benne?",
                    positive: "Igen",
                    negative: "Nem"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "A meger\u0151s\xedt\u0151 e-mail nem egyezik, k\xe9rlek jav\xedtsd!"
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "A felhaszn\xe1l\xf3n\xe9v \xe9s jelsz\xf3 kombin\xe1ci\xf3 hib\xe1s.",
                banned: "Ki lett\xe9l tiltva az oldalr\xf3l. Oka: %{reason}",
                captcha_incorrect: "K\xe9rlek, t\xf6ltsd ki a reCAPTCHA dobozt \xe9s pr\xf3b\xe1ld \xfajra.",
                confirmation_notice: "A fi\xf3kod m\xe9g nem lett meger\u0151s\xedtve! K\xe9rlek, ellen\u0151rizd a be\xe9rkezett leveleid a visszaigazol\xf3 link\xe9rt vagy %{click_here}.",
                confirmation_notice_click_here: "kattints ide a visszaigazol\xe1shoz sz\xfcks\xe9ges instrukci\xf3k \xfajrak\xfcld\xe9s\xe9hez"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype n\xe9v",
                    header: "Egy\xe9b Online Fi\xf3kok",
                    website: "Szem\xe9lyes Honlap",
                    paypal_error: "Az \xe1ltalad megadott PayPal keresked\u0151i azonos\xedt\xf3 \xe9rv\xe9nytelen.",
                    paypal_placeholder: "PayPal keresked\u0151i azonos\xedt\xf3 vagy e-mail c\xedm"
                },
                header: "Fi\xf3k \xe9s Profil",
                account_details: "Fi\xf3kadatok",
                location: {
                    header: "Hely",
                    placeholder: "(pl. Los Santos, San Andreas)",
                    select: "V\xe1lassz Orsz\xe1got..."
                },
                avatar: {
                    header: "Profilk\xe9p",
                    upload: "Saj\xe1t profilk\xe9p felt\xf6lt\xe9se:",
                    restrictions: "(kiz\xe1r\xf3lag .jpg vagy .png; Maximum 750Kb; Aj\xe1nlott felbont\xe1s 256x256 pixel)",
                    select: "Vagy v\xe1lassz az al\xe1bbiak k\xf6z\xfcl:",
                    error: {
                        image_size: "A f\xe1jl meghaladta a 750Kb-es limitet.",
                        image_type: "A f\xe1jlt\xedpus nem t\xe1mogatott, kiz\xe1r\xf3lag .jpg \xe9s .png k\xe9pek t\xf6lthet\u0151ek fel."
                    }
                },
                submit: "V\xe1ltoz\xe1sok Ment\xe9se",
                loading: {
                    saving_settings: "V\xe1ltoz\xe1sok ment\xe9se...",
                    uploading_avatar: "Profilk\xe9p felt\xf6lt\xe9se..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "F\xe1jl l\xe9trehoz\xe1sa...",
                saving_file: "F\xe1jl ment\xe9se...",
                uploading_screenshots: "K\xe9perny\u0151k\xe9pek felt\xf6lt\xe9se...",
                uploading_archive: "T\xf6m\xf6r\xedtett f\xe1jl felt\xf6lt\xe9se..."
            },
            error: {
                required: {
                    file_name: "Meg kell adni a f\xe1jl nev\xe9t.",
                    author: "A szerz\u0151 nev\xe9t meg kell adni.",
                    category: "K\xe9rlek, v\xe1lassz kateg\xf3ri\xe1t.",
                    file: "K\xe9rlek, v\xe1laszd ki a felt\xf6lteni k\xedv\xe1nt f\xe1jlt."
                },
                restrictions: {
                    file_size: "Ez a f\xe1jl t\xfall\xe9pi a 100Mb-os felt\xf6lt\xe9si hat\xe1rt.",
                    file_type: "Ez a f\xe1jlt\xedpus nem t\xe1mogatott, k\xe9rlek csak .zip, .rar \xe9s .oiv f\xe1jlokat t\xf6lts fel.",
                    image_limit: "El\xe9rted a maxim\xe1lis 15 k\xe9perny\u0151k\xe9p limitet.",
                    image_size: "%{count} k\xe9peny\u0151k\xe9p nem lett hozz\xe1aadva, mert meghaladta a 2Mb-ot.",
                    image_type: "%{count} k\xe9peny\u0151k\xe9p nem lett hozz\xe1aadva, mert a form\xe1tumuk nem t\xe1mogatott - k\xe9rlek csak .jpg \xe9s .png k\xe9peket t\xf6lts fel."
                }
            }
        },
        user_file: {
            "delete": {
                title: "T\xf6rl\xe9s",
                confirm: "Biztos, hogy t\xf6r\xf6lni akarod ezt a f\xe1jlt?"
            },
            report: {
                title: "Jelent\xe9s",
                explain: "K\xe9rlek, fejtsd ki, hogy mi\xe9rt jelented ezt a f\xe1jlt..."
            },
            rating: {
                cancel: "\xc9rt\xe9kel\xe9s Visszavon\xe1sa",
                star1: "M\xe9g dolgozni kell rajta",
                star2: "Rendben van",
                star3: "J\xf3",
                star4: "Nagyszer\u0171",
                star5: "Eszm\xe9letlen",
                average: {
                    one: "%{rating} / 5 csillag (1 szavazat)",
                    other: "%{rating} / 5 csillag (%{display_count} szavazat)"
                }
            }
        },
        video: {
            added_by: "%{username} \xe1ltal hozz\xe1adva",
            label: {
                one: "%{count} Vide\xf3",
                other: "%{count} Vide\xf3"
            },
            show_more: {
                one: "Mutass m\xe9g 1 vide\xf3t",
                other: "Mutass tov\xe1bbi %{count} vide\xf3t"
            },
            add_modal: {
                header: "Adj vide\xf3t a k\xf6vetkez\u0151h\xf6z: %{file_name}",
                instructions: "Add meg a vide\xf3d teljes hivatkoz\xe1s\xe1t a YouTube, DailyMotion vagy Vimeo vide\xf3megoszt\xf3n:",
                placeholder: "(pl. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Ha minden j\xf3nak t\u0171nik, nyomd meg az al\xe1bbi "Vide\xf3 Hozz\xe1ad\xe1sa" gombot, hogy elmentsd.',
                error: {
                    parse: "Nem tudjuk beh\xfazni a vide\xf3t a megadott hivatkoz\xe1sr\xf3l, k\xe9rlek ellen\u0151rizd, hogy t\xe1mogatott weboldalt haszn\xe1lsz-e \xe9s pr\xf3b\xe1ld \xfajra."
                }
            },
            "delete": {
                confirm: "Biztos, hogy elt\xe1vol\xedtod ezt a vide\xf3t?"
            }
        },
        comment: {
            add: "Hozz\xe1sz\xf3lok",
            label: {
                one: "1 Hozz\xe1sz\xf3l\xe1s",
                other: "%{display_count} Hozz\xe1sz\xf3l\xe1s"
            },
            author: "Szerz\u0151",
            reply: "V\xe1lasz",
            pin: {
                title: "Hozz\xe1sz\xf3l\xe1s R\xf6gz\xedt\xe9se",
                pinned: "R\xf6gz\xedtett Hozz\xe1sz\xf3l\xe1s",
                unpin: "R\xf6gz\xedt\xe9s Megsz\u0171ntet\xe9se"
            },
            report: {
                title: "Jelent\xe9s",
                explain: "K\xe9rlek, fejtsd ki, hogy mi\xe9rt jelented ezt a hozz\xe1sz\xf3l\xe1st..."
            },
            "delete": {
                title: "T\xf6rl\xe9s",
                confirm: "Biztos vagy benne, hogy t\xf6r\xf6lni akarod ezt a hozz\xe1sz\xf3l\xe1st?"
            },
            show_previous: {
                one: "Mutasd az el\u0151z\u0151 1 hozz\xe1sz\xf3l\xe1st",
                other: "Mutasd az el\u0151z\u0151 %{count} hozz\xe1sz\xf3l\xe1st"
            },
            placeholder: "Sz\xf3lj hozz\xe1...",
            submit: "Bek\xfcld\xe9s",
            loading: "Hozz\xe1sz\xf3l\xe1s bek\xfcld\xe9se...",
            fetching: "Hozz\xe1sz\xf3l\xe1sok bet\xf6lt\xe9se...",
            flood_control: "Nem lehet ilyen gyosan hozz\xe1sz\xf3l\xe1sokat bek\xfcldeni, k\xe9rlek v\xe1rj p\xe1r percet.",
            no_user_message: "Csatlakozz a besz\xe9lget\xe9shez! %{log_in} vagy %{register} egy fi\xf3kot, hogy hozz\xe1sz\xf3lhass.",
            no_user_message_log_in: "Jelentkezz be",
            no_user_message_register: "regisztr\xe1lj",
            expand: "Kinyit\xe1s a teljes hozz\xe1sz\xf3l\xe1s megtekint\xe9s\xe9hez",
            context: "Kontextus Megtekint\xe9se",
            rules: {
                agree: "A hozz\xe1sz\xf3l\xe1ssal elfogadod a %{community_guidelines} -et.",
                agree_community_guidelines: "GTA5-Mods.com k\xf6z\xf6ss\xe9gi ir\xe1nyelvek",
                offensive: "Ne t\xe9gy k\xf6zz\xe9 m\xe1s felhaszn\xe1l\xf3knak c\xe9lzott b\xe1nt\xf3 hozz\xe1sz\xf3l\xe1sokat. Ha probl\xe9m\xe1d van valakinek a hozz\xe1sz\xf3l\xe1s\xe1val, k\xe9rlek jelentsd azt.",
                malware: "Ne besz\xe9lgess, vagy t\xe9gy k\xf6zz\xe9 linkeket \xe1rt\xf3 vagy kal\xf3z tartalmakr\xf3l.",
                rating: "Ne adj \xe9rt\xe9kel\xe9st relev\xe1ns visszajelz\xe9s vagy kritika n\xe9lk\xfcl.",
                warning: "B\xe1rmely ezen ir\xe1nyelvek megs\xe9rt\xe9se a hozz\xe1sz\xf3l\xe1sod t\xf6rl\xe9s\xe9vel, vagy a fi\xf3kod kitilt\xe1s\xe1val j\xe1rhat."
            }
        }
    },
    id: {
        helpers: {
            label: {
                clear_all: "Kosongkan Semua",
                welcome: "Selamat Datang di GTA5-Mods.com",
                site_info: "Sumbermu untuk modifikasi mobil, skrip, alat-alat, dll terkini untuk GTA 5.",
                intro: "Pilih salah satu dari kategori-kategori berikut untuk mulai memilih modifikasi GTA 5 terkini:",
                loading: "Memuat...",
                cancel: "Batal",
                send: "Kirim",
                donate: "Donasikan dengan %{paypal}",
                fix_errors: "Harap perbaiki kesalahan-kesalahan berikut:",
                user: {
                    email: "Alamat email",
                    email_confirmation: "Konfirmasi alamat email",
                    username: "Nama pengguna",
                    password: "Kata Sandi",
                    password_new: "Kata sandi baru",
                    password_confirmation: "Konfirmasi kata sandi",
                    password_confirmation_new: "Konfirmasi kata sandi baru",
                    password_requirements: {
                        other: "(minimal %{count} karakter)"
                    },
                    remember_me: "Ingat saya",
                    current_password: "Kata sandi saat ini",
                    new_password: "Kata sandi baru"
                },
                filter: "Saring:",
                sort_by: "Urut berdasarkan:",
                time_frame: "Sejak:",
                back_to_login: "Kembali ke halaman Masuk",
                have_an_account: "Sudah memiliki akun?",
                dont_have_an_account: "Belum memiliki akun?",
                log_in_here: "Masuk disini.",
                register_here: "Daftar disini.",
                confirm: {
                    title: "Apakah kau yakin?",
                    positive: "Ya",
                    negative: "Tidak!"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Email konfirmasi tidak cocok, harap coba lagi."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Kombinasi nama pengguna dan kata sandi salah.",
                banned: "Kau telah dibanned dari situs. Alasan: %{reason}",
                captcha_incorrect: "Harap isi kotak reCAPTCHA dan coba lagi.",
                confirmation_notice: "Akun anda belum dikonfirmasi! Harap cek kotak masuk email anda untuk tautan konfirmasi atau %{click_here}.",
                confirmation_notice_click_here: "klik disini untuk mengirim ulang pentunjuk konfirmasi"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Nama Skype",
                    header: "Akun Online Lainnya",
                    website: "Situs Web Pribadi",
                    paypal_error: "ID PayPal yang dimasukkan salah.",
                    paypal_placeholder: "ID PayPal atau alamat email"
                },
                header: "Akun & Profil",
                account_details: "Rincian Akun",
                location: {
                    header: "Lokasi",
                    placeholder: "(contoh Milan, Los Santos, San Andreas)",
                    select: "Pilih Negara..."
                },
                avatar: {
                    header: "Foto Profil",
                    upload: "Unggah foto profil kustom:",
                    restrictions: "(hanya .jpg atau .png; Maksimal 750Kb; Direkomendasikan 256x256 pixels)",
                    select: "Atau pilih salah satu dibawah ini:",
                    error: {
                        image_size: "Berkas tersebut melebihi batas 750Kb kami.",
                        image_type: "Tipe berkas tersebut tidak didukung, harap unggah gambar .jpg dan .png."
                    }
                },
                submit: "Simpan Perubahan",
                loading: {
                    saving_settings: "Menyimpan pengaturan...",
                    uploading_avatar: "Mengunggah foto profil..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Membuat berkas...",
                saving_file: "Menyimpan berkas...",
                uploading_screenshots: "Mengunggah screenshot...",
                uploading_archive: "Mengunggah arsip..."
            },
            error: {
                required: {
                    file_name: "Nama berkas dibutuhkan.",
                    author: "Nama pencipta dibutuhkan.",
                    category: "Silahkan pilih kategori.",
                    file: "SIlahkan pilih berkas untuk diunggah."
                },
                restrictions: {
                    file_size: "Berkas tersebut melebihi batas 100Mb kami.",
                    file_type: "Jenis berkas tersebut tidak didukung, harap upload berkas .zip, .rar dan .oiv.",
                    image_limit: "Kau telah mencapai batas maksimal 15 screenshot.",
                    image_size: "%{count} screenshot-mu tidak ditambahkan karena melebihi 2Mb.",
                    image_type: "%{count} screenshotmu tidak ditambahkan karena format tidak didukung - harap unggah gambar .jpg dan .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Hapus",
                confirm: "Apakah kau yakin ingin menghapus berkas ini?"
            },
            report: {
                title: "Lapor",
                explain: "Harap jelaskan mengapa kau melaporkan berkas ini..."
            },
            rating: {
                cancel: "Batalkan Rating",
                star1: "Butuh Kerjaan Lagi",
                star2: "Oke",
                star3: "Bagus",
                star4: "Hebat",
                star5: "Luar Biasa!",
                average: {
                    other: "%{rating} / 5 stars (%{display_count} vote)"
                }
            }
        },
        video: {
            added_by: "Ditambahkan oleh %{username}",
            label: {
                other: "%{count} Video"
            },
            show_more: {
                other: "Tampilkan %{count} video lagi"
            },
            add_modal: {
                header: "Tambahkan video untuk %{file_name}",
                instructions: "Masukkan URL ke video-mu di YouTube, DailyMotion atau Vimeo:",
                placeholder: "(contoh youtube.com/watch?v=ycs89_O__IY)",
                confirm: 'Jika semuanya terlihat bagus, pastikan untuk menekan "Tambahkan Video" dibawah untuk menyimpannya.',
                error: {
                    parse: "Kami tidak dapat mengambil video dari URL tersebut, harap pastikan kau menggunakan situs web yang didukung dan coba lagi."
                }
            },
            "delete": {
                confirm: "Apakah kau yakin ingin menghapus video ini?"
            }
        },
        comment: {
            add: "Tambahkan Komentar",
            label: {
                other: "%{display_count} Komentar"
            },
            author: "Pencipta",
            reply: "Balas",
            pin: {
                title: "Sematkan Komentar",
                pinned: "Komentar yang disematkan",
                unpin: "Lepas Sematan Komentar"
            },
            report: {
                title: "Lapor",
                explain: "Harap jelaskan mengapa kau melaporkan komentar ini..."
            },
            "delete": {
                title: "Hapus",
                confirm: "Apakah kau yakin ingin menghapus komentar ini?"
            },
            show_previous: {
                other: "Tampilkan %{count} komentar sebelumnya"
            },
            placeholder: "Tambahkan komentar-mu...",
            submit: "Post Komentar",
            loading: "Mem-posting Komentar...",
            fetching: "Memuat komentar...",
            flood_control: "Komentar tidak dapat ditambahkan dengan seketika, harap tunggu beberapa menit dan coba lagi.",
            no_user_message: "Gabung dalam pembicaraan! %{log_in} atau %{register} akun untuk dapat komentar.",
            no_user_message_log_in: "Masuk",
            no_user_message_register: "daftar",
            expand: "Perbesar untuk membaca komentar lengkapnya",
            context: "Lihat Konteks",
            rules: {
                agree: "Dengan mengomentari, anda setuju untuk mengikuti %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com panduan komunitas",
                offensive: "Jangan mem-posting komentar yang menghina pengguna lain. Jika anda memiliki masalah dengan komentar orang lain, harap laporkan.",
                malware: "Jangan diskusikan atau mem-posting tautan ke konten malware atau bajakan.",
                rating: "Jangan memberikan rating tanpa menyediakan masukan atau kritikan yang relevan.",
                warning: "Melanggar salah satu pedoman tersebut dapat berakibat komentar anda dihapus atau akun anda di banned."
            }
        }
    },
    is: {
        helpers: null
    },
    "it-CH": {
        helpers: null
    },
    it: {
        helpers: {
            label: {
                welcome: "Benvenuto su GTA5-Mods.com",
                site_info: "La tua risorsa principale per le ultime mod, script, aggiornamenti e molto altro su GTA 5.",
                intro: "Seleziona una delle seguenti categorie per iniziare a navigare tra le ultime mod su GTA 5:",
                loading: "Caricamento...",
                cancel: "Annulla",
                send: "Invia",
                donate: "Fai una donazione con %{paypal}",
                fix_errors: "Correggi i seguenti errori:",
                user: {
                    email: "Indirizzo email",
                    email_confirmation: "Confirm email address",
                    username: "Nome utente",
                    password: "Password",
                    password_new: "Nuova password",
                    password_confirmation: "Conferma password",
                    password_confirmation_new: "Conferma nuova password",
                    password_requirements: {
                        one: "(minimo %{count} carattere)",
                        other: "(minimo %{count} caratteri)"
                    },
                    remember_me: "Ricordami",
                    current_password: "Password corrente",
                    new_password: "Nuova password"
                },
                filter: "Filtro:",
                sort_by: "Ordina per:",
                time_frame: "Dal:",
                back_to_login: "Torna al login",
                have_an_account: "Hai gi\xe0 un account?",
                dont_have_an_account: "Non hai un account?",
                log_in_here: "Accedi qui.",
                register_here: "Registrati qui.",
                confirm: {
                    title: "Sei sicuro?",
                    positive: "Si",
                    negative: "No"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "La combinazione nome utente e password non \xe8 corretta.",
                banned: "Sei stato bagnato dal sito: Motivazione: %{reason}",
                captcha_incorrect: "Riempi il riquadro del CAPTCHA e riprova.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "Account & Profilo",
                account_details: "Dettagli Account",
                location: {
                    header: "Posizione",
                    placeholder: "(es. Los Santos, San Andreas)",
                    select: "Seleziona Paese..."
                },
                social: {
                    header: "Altri Account Online",
                    website: "Sito Personale",
                    paypal_error: "L'ID di commerciante PayPal che hai inserito non \xe8 valido.",
                    paypal_placeholder: "L'ID di commerciante PayPal o indirizzo email"
                },
                avatar: {
                    header: "Immagine del Profilo",
                    upload: "Carica un'immagine del profilo personalizzata:",
                    restrictions: "(solo .jpg o .png; Massimo 750Kb; Raccomandati 256x256 pixels)",
                    select: "O selezionane uno da qui sotto:",
                    error: {
                        image_size: "Il file supera il limite di 750Kb.",
                        image_type: "Questo tipo di file non \xe8 supportato, carico solo immagini .jpg o .png."
                    }
                },
                submit: "Salva Cambiamenti",
                loading: {
                    saving_settings: "Salvo impostazioni...",
                    uploading_avatar: "Carico immagine del profilo..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Creando il file...",
                saving_file: "Salvando il file...",
                uploading_screenshots: "Caricando gli screenshots...",
                uploading_archive: "Caricando l'archivio..."
            },
            error: {
                required: {
                    file_name: "Il nome del file \xe8 richiesto.",
                    author: "L'Autore \xe8 richiesto.",
                    category: "Seleziona una categoria.",
                    file: "Seleziona un file da caricare."
                },
                restrictions: {
                    file_size: "Il file supera il limite di 100Mb.",
                    file_type: "Questo tipo di file non \xe8 supportato, carica solo file .zip, .rar o .oiv.",
                    image_limit: "Hai superato il limite di 15 screenshots.",
                    image_size: "%{count} dei tuoi screenshots non sono stati aggiunti perch\xe8 superano il limite di 2Mb.",
                    image_type: "%{count} dei tuoi screenshots non sono stati aggiunti perch\xe8 il loro formato non \xe8 supportato - carica solo immagini .jpg o .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Cancella",
                confirm: "Sei sicuro di voler eliminare questo file?"
            },
            report: {
                title: "Segnala",
                explain: "Spiega perch\xe8 stai segnalando questo file..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Needs Work",
                star2: "OK",
                star3: "Good",
                star4: "Great",
                star5: "Awesome!",
                average: {
                    one: "%{rating} / 5 stars (1 vote)",
                    other: "%{rating} / 5 stars (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Video"
            },
            show_more: {
                one: "Mostra un altro video",
                other: "Mostra altri %{count} video"
            },
            add_modal: {
                header: "Aggiungi un video a %{file_name}",
                instructions: "Inserisci l'URL completo del tuo video su YouTube, DailyMotion o Vimeo:",
                placeholder: "(es. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Se ti sembra tutto ok, assicurati di premere "Aggiungi Video" qui sotto.',
                error: {
                    parse: "Non siamo riusciti a trovare il video da quell'URL. Assicurati di usare un sito supportato e riprova."
                }
            },
            "delete": {
                confirm: "Sicuro di voler rimuovere questo video?"
            }
        },
        comment: {
            add: "Commenta",
            label: {
                one: "1 Commento",
                other: "%{display_count} Commenti"
            },
            author: "Autore",
            reply: "Rispondi",
            pin: {
                title: "Fissa  il commento",
                pinned: "Commento fissato",
                unpin: "Stacca il commento"
            },
            report: {
                title: "Segnala",
                explain: "Spiega perch\xe8 stai segnalando questo commento..."
            },
            "delete": {
                title: "Cancella",
                confirm: "Sicuro di voler eliminare questo commento?"
            },
            show_previous: {
                one: "Mostra un commento precedente",
                other: "Mostra %{count} commenti precedenti"
            },
            placeholder: "Scrivi il tuo commento...",
            submit: "Pubblica",
            loading: "Pubblicando il commento...",
            fetching: "Caricamento dei commenti...",
            flood_control: "I commenti non possono essere aggiunti cos\xec frequentemente. Aspetta qualche minuti e riprova.",
            no_user_message: "Partecipa alla conversazione! %{log_in} o %{register} per poter commentare.",
            no_user_message_log_in: "Accedi",
            no_user_message_register: "registrati",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    ja: {
        helpers: null
    },
    km: {
        helpers: null
    },
    kn: {
        helpers: null
    },
    ko: {
        helpers: {
            label: {
                clear_all: "\ubaa8\ub450 \uc815\ub9ac",
                welcome: "GTA5-Mods.com \uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4",
                site_info: "\ucd5c\uc2e0 GTA 5 \ucc28\ub7c9 \ubaa8\ub4dc, \uc2a4\ud06c\ub9bd\ud2b8, \ub3c4\uad6c \ub4f1\uc744 \uc704\ud55c \uc18c\uc2a4.",
                intro: "\ucd5c\uc2e0 GTA 5 \ubaa8\ub4dc\ub97c \ucc3e\uc544\ubcf4\ub824\uba74 \ub2e4\uc74c \uce74\ud14c\uace0\ub9ac \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud558\uc138\uc694:",
                loading: "\ub85c\ub529\uc911...",
                cancel: "\ucde8\uc18c",
                send: "\ubcf4\ub0b4\uae30",
                donate: "%{paypal} \uae30\ubd80\ud558\uae30",
                fix_errors: "\ub2e4\uc74c \uc624\ub958\ub97c \uc218\uc815\ud558\uc2ed\uc2dc\uc624:",
                user: {
                    email: "\uc774\uba54\uc77c \uc8fc\uc18c",
                    email_confirmation: "\uc774\uba54\uc77c \uc8fc\uc18c \ud655\uc778",
                    username: "\uc720\uc800\uc774\ub984",
                    password: "\ube44\ubc00\ubc88\ud638",
                    password_new: "\uc0c8 \ube44\ubc00\ubc88\ud638",
                    password_confirmation: "\ube44\ubc00\ubc88\ud638 \ud655\uc778",
                    password_confirmation_new: "\uc0c8 \ube44\ubc00\ubc88\ud638 \ud655\uc778",
                    password_requirements: {
                        other: "\ucd5c\uc18c %{count}\uc790 \uc774\uc0c1"
                    },
                    remember_me: "\ub85c\uadf8\uc778 \uc0c1\ud0dc \uc720\uc9c0",
                    current_password: "\ud604\uc7ac \ube44\ubc00\ubc88\ud638",
                    new_password: "\uc0c8 \ube44\ubc00\ubc88\ud638"
                },
                filter: "\ud544\ud130",
                sort_by: "\ubd84\ub958:",
                time_frame: "\uc2dc\uac01:",
                back_to_login: "\ub85c\uadf8\uc778\uc73c\ub85c \ub3cc\uc544\uac00\uae30",
                have_an_account: "\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\ub098\uc694?",
                dont_have_an_account: "\uacc4\uc815\uc774 \uc5c6\uc73c\uc2dc\ub098\uc694?",
                log_in_here: "\uc5ec\uae30\uc5d0\uc11c \ub85c\uadf8\uc778 \ud558\uc138\uc694.",
                register_here: "\uc5ec\uae30\uc5d0\uc11c \ub4f1\ub85d\uc744 \ud558\uc138\uc694.",
                confirm: {
                    title: "\ud655\uc2e4\ud574\uc694?",
                    positive: "\uc608",
                    negative: "\uc544\ub2c8\uc694"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\ud655\uc778 \uc774\uba54\uc77c \uc8fc\uc18c\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4, \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2ed\uc2dc\uc624."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\uadc0\ud558\uc758 \uc720\uc800\uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638 \uc870\ud569\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
                banned: "\ub2f9\uc2e0\uc740 \uc0ac\uc774\ud2b8\uc5d0\uc11c \ubc34 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc720: %{reason}",
                captcha_incorrect: "reCAPTCHA \uc0c1\uc790\ub97c \uc644\uc804\ud788 \uc791\uc131\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694.",
                confirmation_notice: "\ub2f9\uc2e0\uc758 \uacc4\uc815\uc740 \uc544\uc9c1 \ud655\uc778\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4! \ud655\uc778 \ub9c1\ud06c\ub97c \uc704\ud574 \uc774\uba54\uc77c\uc744 \ubc1b\uc740 \ud3b8\uc9c0\ud568\uc744 \ud655\uc778\ud558\uac70\ub098 %{click_here}.",
                confirmation_notice_click_here: "\ud655\uc778 \uc9c0\uce68\uc744 \uc7ac\uc804\uc1a1\ud558\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "\uc2a4\uce74\uc774\ud504 \uc774\ub984",
                    header: "\ub2e4\ub978 \uc628\ub77c\uc778 \uacc4\uc815",
                    website: "\uac1c\uc778 \uc6f9\uc0ac\uc774\ud2b8",
                    paypal_error: "\uadc0\ud558\uac00 \uc785\ub825\ud55c \ud398\uc774\ud314 ID\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
                    paypal_placeholder: "\ud398\uc774\ud314 ID \ub610\ub294 \uc774\uba54\uc77c \uc8fc\uc18c"
                },
                header: "\uacc4\uc815 \uff06 \ud504\ub85c\ud544",
                account_details: "\uacc4\uc815 \uc0c1\uc138\uc815\ubcf4",
                location: {
                    header: "\uac70\uc8fc\uc9c0",
                    placeholder: "(\uc608\uc2dc: Los Santos, San Andreas)",
                    select: "\ub098\ub77c\ub97c \uc120\ud0dd\ud558\uc138\uc694..."
                },
                avatar: {
                    header: "\ud504\ub85c\ud544 \uc0ac\uc9c4",
                    upload: "\ucee4\uc2a4\ud140 \ud504\ub85c\ud544 \uc0ac\uc9c4 \uc5c5\ub85c\ub4dc:",
                    restrictions: "(\uc624\uc9c1 .jpg \ub610\ub294 .png\ub9cc \uac00\ub2a5; \ucd5c\ub300 750Kb \uae4c\uc9c0; 256 \xd7 256 \ud53d\uc140 \ucd94\ucc9c)",
                    select: "\ub610\ub294 \uc544\ub798\uc5d0 \uc788\ub294 \uc0ac\uc9c4 \uc911 \ud55c \uac1c\ub97c \uc120\ud0dd\ud558\uc138\uc694:",
                    error: {
                        image_size: "\ud574\ub2f9 \ud30c\uc77c\uc740 \uc6b0\ub9ac\uc758 750Kb \uc81c\ud55c\uc744 \ucd08\uacfc\ud569\ub2c8\ub2e4.",
                        image_type: "\ud574\ub2f9 \ud30c\uc77c\uc758 \ud615\uc2dd\uc740 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4, .jpg \ub610\ub294 .png \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc73c\ub85c \uc5c5\ub85c\ub4dc\ub97c \ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."
                    }
                },
                submit: "\uc800\uc7a5",
                loading: {
                    saving_settings: "\uc124\uc815 \uc800\uc7a5\uc911...",
                    uploading_avatar: "\ud504\ub85c\ud544 \uc0ac\uc9c4 \uc5c5\ub85c\ub4dc\uc911..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\ud30c\uc77c\uc744 \ub9cc\ub4dc\ub294\uc911...",
                saving_file: "\ud30c\uc77c\uc744 \uc800\uc7a5\ud558\ub294\uc911...",
                uploading_screenshots: "\uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294\uc911...",
                uploading_archive: "\uc544\uce74\uc774\ube0c\ub97c \uc5c5\ub85c\ub4dc\ud558\ub294\uc911..."
            },
            error: {
                required: {
                    file_name: "\ud30c\uc77c \uc774\ub984\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
                    author: "\uc81c\uc791\uc790 \uc774\ub984\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
                    category: "\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
                    file: "\uc5c5\ub85c\ub4dc \ud560 \ud30c\uc77c\uc744 \uc120\ud0dd\ud558\uc138\uc694."
                },
                restrictions: {
                    file_size: "\uadf8 \ud30c\uc77c\uc740 \uc6b0\ub9ac\uc758 100Mb \uc81c\ud55c\uc744 \ucd08\uacfc\ud569\ub2c8\ub2e4.",
                    file_type: "\uadf8 \ud30c\uc77c \uc720\ud615\uc740 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. .zip , .rar , .oiv \ud30c\uc77c\ub85c \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
                    image_limit: "\ub2f9\uc2e0\uc740 15\uac1c \uc774\uc0c1\uc758 \uc2a4\ud06c\ub9b0\uc0f7 \ucd5c\ub300 \ud55c\uacc4\uc5d0 \ub3c4\ub2ec\ud588\uc2b5\ub2c8\ub2e4.",
                    image_size: "\ub2f9\uc2e0\uc758 \uc2a4\ud06c\ub9b0\uc0f7\uc758 %{count}\uc774(\uac00) \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uadf8\uac83\ub4e4\uc740 2MB\ub97c \ucd08\uacfc\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.",
                    image_type: "\ub2f9\uc2e0\uc758 \uc2a4\ud06c\ub9b0\uc0f7\uc758 %{count}\uc774(\uac00) \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uadf8\uac83\ub4e4\uc758 \ud615\uc2dd\uc740 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4 - .jpg \ub098 .png \ub85c \uc5c5\ub85c\ub4dc\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."
                }
            }
        },
        user_file: {
            "delete": {
                title: "\uc0ad\uc81c",
                confirm: "\uc774 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"
            },
            report: {
                title: "\uc2e0\uace0",
                explain: "\uc774 \ud30c\uc77c\uc744 \uc2e0\uace0\ud558\ub824\ub294 \uc774\uc720\ub97c \uc124\uba85\ud574\uc8fc\uc138\uc694."
            },
            rating: {
                cancel: "\ud3c9\uac00 \ucde8\uc18c",
                star1: "\uc791\uc5c5 \ud544\uc694",
                star2: "\ud655\uc778",
                star3: "\uc88b\uc544\uc694",
                star4: "\ud6cc\ub96d\ud574\uc694",
                star5: "\uba4b\uc838\uc694!",
                average: {
                    other: "%{rating} / 5 (%{display_count}\uba85\uc774 \ud22c\ud45c\ud568)"
                }
            }
        },
        video: {
            added_by: "%{username}\uc5d0 \uc758\ud574 \ucd94\uac00\ub428",
            label: {
                other: "%{count}\uac1c\uc758 \ube44\ub514\uc624"
            },
            show_more: {
                other: "%{count}\uac1c\uc758 \ub354 \ub9ce\uc740 \ube44\ub514\uc624 \ubcf4\uae30"
            },
            add_modal: {
                header: "%{file_name} \uc5d0 \ube44\ub514\uc624 \ucd94\uac00\ud558\uae30",
                instructions: "\uc720\ud29c\ube0c, Dailymotion \ub610\ub294 Vimeo \uc5d0\uc11c \ub3d9\uc601\uc0c1\uc758 \uc804\uccb4 URL\uc744 \uc785\ub825\ud558\uc138\uc694 :",
                placeholder: "(\uc608\uc2dc: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\ubaa8\ub4e0 \uac83\uc774 \uc88b\uc544 \ubcf4\uc774\uba74, \uc544\ub798\uc5d0 \uc788\ub294 "\ube44\ub514\uc624 \ucd94\uac00" \ubc84\ud2bc\uc744 \ub20c\ub974\uc138\uc694.',
                error: {
                    parse: "\ud574\ub2f9 URL \uc5d0\uc11c \ube44\ub514\uc624\ub97c \uc7a1\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc911\uc778 \uc9c0\uc6d0\ub418\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ud655\uc778\ud574\uc8fc\uc2dc\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694."
                }
            },
            "delete": {
                confirm: "\uc774 \ub3d9\uc601\uc0c1\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"
            }
        },
        comment: {
            add: "\ub313\uae00 \ucd94\uac00",
            label: {
                other: "\ub313\uae00 %{display_count}"
            },
            author: "\uc81c\uc791\uc790",
            reply: "\ub2f5\uae00",
            pin: {
                title: "\uace0\uc815 \ub313\uae00",
                pinned: "\uace0\uc815\ub41c \ub313\uae00",
                unpin: "\uace0\uc815 \ub313\uae00 \ud480\uae30"
            },
            report: {
                title: "\uc2e0\uace0",
                explain: "\uc774 \ub313\uae00\uc744 \uc2e0\uace0\ud558\ub824\ub294 \uc774\uc720\ub97c \uc124\uba85\ud558\uc2ed\uc2dc\uc624..."
            },
            "delete": {
                title: "\uc0ad\uc81c",
                confirm: "\uc774 \ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"
            },
            show_previous: {
                other: "\uc774\uc804 %{count} \ub313\uae00 \ud45c\uc2dc"
            },
            placeholder: "\ub313\uae00 \uc4f0\uae30",
            submit: "\ub367\uae00 \uac8c\uc2dc",
            loading: "\ub367\uae00 \uac8c\uc2dc\uc911...",
            fetching: "\ub313\uae00 \ub85c\ub529\uc911...",
            flood_control: "\ub313\uae00\uc744 \ube68\ub9ac \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uba87 \ubd84 \uc815\ub3c4 \uae30\ub2e4\ub824\uc8fc\uc2dc\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \ubcf4\uc2ed\uc2dc\uc624.",
            no_user_message: "\ub300\ud654\uc5d0 \ucc38\uc5ec\ud574\ubcf4\uc138\uc694! %{log_in} \ub610\ub294 %{register} \uc744 \ud558\uba74 \ub313\uae00\uc744 \ub2ec \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            no_user_message_log_in: "\ub85c\uadf8\uc778",
            no_user_message_register: "\uac00\uc785",
            expand: "\uc804\uccb4 \ub313\uae00 \ud655\uc7a5\ud558\uae30",
            context: "\ub0b4\uc6a9 \ubcf4\uae30",
            rules: {
                agree: "\ub313\uae00\uc744 \uc791\uc131\ud568\uc73c\ub85c\uc368 \ub2f9\uc2e0\uc740 %{community_guidelines} \uc744 \ub530\ub974\ub3c4\ub85d \ub3d9\uc758\ud569\ub2c8\ub2e4.",
                agree_community_guidelines: "GTA5-Mods.com \ucee4\ubba4\ub2c8\ud2f0 \uac00\uc774\ub4dc\ub77c\uc778",
                offensive: "\ub2e4\ub978 \uc720\uc800\ub4e4\uc5d0\uac8c \uacf5\uaca9\uc801\uc778 \ub313\uae00\uc744 \uc791\uc131\ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624. \ub9cc\uc57d \ub2e4\ub978 \ub313\uae00\uc5d0 \ubb38\uc81c\uac00 \uc788\uc744 \uacbd\uc6b0, \uc2e0\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
                malware: "\uc545\uc131\ucf54\ub4dc \ub610\ub294 \ubd88\ubc95 \ucf58\ud150\uce20\uc5d0 \ub300\ud55c \ub9c1\ud06c\ub97c \uac8c\uc2dc\ud558\uac70\ub098 \ub17c\uc758\ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624.",
                rating: "\uc801\uc808\ud55c \ud53c\ub4dc\ubc31 \ub610\ub294 \ube44\ud310\uc744 \uc81c\uacf5 \uc5c6\uc774\ub294 \ud3c9\uac00\ub97c \ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624.",
                warning: "\uc774 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \uc704\ubc18\ud55c\ub2e4\uba74 \ub2f9\uc2e0\uc774 \uc791\uc131\ud55c \ub313\uae00\uc774 \uc81c\uac70\ub418\uac70\ub098 \uacc4\uc815\uc774 \ucc28\ub2e8\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
            }
        }
    },
    lb: {
        helpers: null
    },
    lo: {
        helpers: null
    },
    lt: {
        helpers: null
    },
    lv: {
        helpers: null
    },
    mk: {
        helpers: {
            label: {
                clear_all: "\u0418\u0441\u0447\u0438\u0441\u0442\u0438 \u0441\u0435",
                welcome: "\u0414\u043e\u0431\u0440\u0435\u0434\u043e\u0458\u0434\u0435 \u043d\u0430 GTA5-Mods.com",
                site_info: "\u0422\u0432\u043e\u0458\u043e\u0442 \u0438\u0437\u0432\u043e\u0440 \u0437\u0430 \u043c\u043e\u0434\u043e\u0432\u0438 \u0437\u0430 GTA 5 , \u0437\u0430 \u043a\u043e\u043b\u0438 , \u0441\u043a\u0440\u0438\u043f\u0442\u0438 , \u0430\u043b\u0430\u0442\u043a\u0438 \u0438 \u0434\u0440\u0443\u0433\u043e",
                intro: "\u0418\u0437\u0431\u0435\u0440\u0438 \u0435\u0434\u043d\u0430 \u043e\u0434 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438\u0442\u0435 \u0437\u0430 \u0434\u0430 \u0433\u0438 \u043f\u0440\u0435\u0431\u0430\u0440\u0430\u0448 \u043d\u0430\u0458\u043d\u043e\u0432\u0438\u0442\u0435 \u043c\u043e\u0434\u043e\u0432\u0438 \u0437\u0430 GTA 5:",
                loading: "\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",
                cancel: "\u041e\u0442\u043a\u0430\u0436\u0438",
                send: "\u0418\u0441\u043f\u0440\u0430\u0442\u0438",
                donate: "\u0414\u043e\u043d\u0438\u0440\u0430\u0458 \u043f\u0440\u0435\u043a\u0443 %{paypal}",
                fix_errors: "\u0421\u0440\u0435\u0434\u0435\u0442\u0435 \u0441\u0438 \u0433\u0438 \u0441\u043b\u0435\u0434\u043d\u0438\u0432\u0435 \u0433\u0440\u0435\u0448\u043a\u0438:",
                user: {
                    email: "\u0415\u043c\u0430\u0458\u043b \u0430\u0434\u0440\u0435\u0441\u0430",
                    email_confirmation: "\u041f\u043e\u0442\u0432\u0440\u0434\u0438 \u043d\u043e\u0432\u0430 \u0430\u0434\u0440\u0435\u0441\u0430",
                    username: "\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u0447\u043a\u043e \u0438\u043c\u0435",
                    password: "\u041b\u043e\u0437\u0438\u043d\u043a\u0430",
                    password_new: "\u041d\u043e\u0432\u0430 \u043b\u043e\u0437\u0438\u043d\u043a\u0430",
                    password_confirmation: "\u041f\u043e\u0442\u0432\u0440\u0434\u0438 \u043b\u043e\u0437\u0438\u043d\u043a\u0430",
                    password_confirmation_new: "\u041f\u043e\u0442\u0432\u0440\u0434\u0438 \u043d\u043e\u0432\u0430 \u043b\u043e\u0437\u0438\u043d\u043a\u0430",
                    password_requirements: {
                        one: "(%{count} \u0431\u0443\u043a\u0432\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c)",
                        other: "(%{count} \u0431\u0443\u043a\u0432\u0438 \u043d\u0430\u0458\u043c\u043d\u043e\u0433\u0443)"
                    },
                    remember_me: "\u0417\u0430\u043f\u0430\u043c\u0442\u0438 \u043c\u0435",
                    current_password: "\u0421\u0435\u0433\u0430\u0448\u043d\u0430 \u043b\u043e\u0437\u0438\u043d\u043a\u0430",
                    new_password: "\u041d\u043e\u0432\u0430 \u043b\u043e\u0437\u0438\u043d\u043a\u0430"
                },
                filter: "\u0424\u0438\u043b\u0442\u0435\u0440:",
                sort_by: "\u041f\u043e\u0434\u0440\u0435\u0434\u0435\u043d\u043e \u043f\u043e\u0434:",
                time_frame: "\u041e\u0434:",
                back_to_login: "\u0412\u0440\u0430\u0442\u0438 \u0441\u0435 \u043a\u0430\u0458 \u043d\u0430\u0458\u0430\u0432\u0430",
                have_an_account: "\u0412\u0435\u045c\u0435 \u0438\u043c\u0430\u0448 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0447\u043a\u043e \u0438\u043c\u0435 ?",
                dont_have_an_account: "\u041d\u0435\u043c\u0430 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0447\u043a\u043e \u0438\u043c\u0435 ?",
                log_in_here: "\u041d\u0430\u0458\u0430\u0432\u0438 \u0441\u0435 \u043e\u0432\u0434\u0435.",
                register_here: "\u0420\u0435\u0433\u0438\u0441\u0442\u0438\u0440\u0430\u0458 \u0441\u0435 \u043e\u0432\u0434\u0435.",
                confirm: {
                    title: "\u0421\u0438\u0433\u0443\u0440\u0435\u043d \u043b\u0438 \u0441\u0438?",
                    positive: "\u0414\u0430.",
                    negative: "\u041d\u0435."
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\u041f\u043e\u0442\u0432\u0440\u0434\u0435\u043d\u0430\u0442\u0430 \u0415\u043c\u0430\u0458\u043b \u0430\u0434\u0440\u0435\u0441\u0430 \u043d\u0435 \u0441\u0435 \u0441\u043e\u0432\u043f\u0430\u0453\u0430, \u043f\u0440\u043e\u0431\u0430\u0458\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u0447\u043a\u043e\u0442\u043e \u0438\u043c\u0435 \u0438 \u043b\u043e\u0437\u0438\u043d\u043a\u0430\u0442\u0430 \u0441\u0435 \u043d\u0435\u0442\u043e\u0447\u043d\u0438",
                banned: "\u0422\u0438 \u0431\u0435\u0448\u0435 \u0431\u0430\u043d\u0438\u0440\u0430\u043d \u043e\u0434 \u043e\u0432\u0430\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430.\u041f\u0440\u0438\u0447\u0438\u043d\u0430:%{reason}",
                captcha_incorrect: "\u041f\u043e\u043f\u043e\u043b\u043d\u0438 \u0433\u043e CAPTCHA \u043f\u043e\u043b\u0435\u0442\u043e \u0438 \u043f\u0440\u043e\u0431\u0430\u0458 \u043f\u0430\u043a",
                confirmation_notice: "\u0422\u0432\u043e\u0458\u043e\u0442 \u0430\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u0435 \u043f\u043e\u0442\u0432\u0440\u0434\u0435\u043d! \u041f\u0440\u043e\u0432\u0435\u0440\u0438 \u0458\u0430 \u0415\u043c\u0430\u0458\u043b \u0430\u0434\u0440\u0435\u0441\u0430\u0442\u0430 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0441\u043a\u0438 \u043b\u0438\u043d\u043a \u0438\u043b\u0438 %{click_here}",
                confirmation_notice_click_here: "\u0441\u0442\u0438\u0441\u043d\u0438 \u0442\u0443\u043a\u0430 \u0437\u0430 \u0434\u0430 \u043f\u0440\u0430\u0442\u0438\u0448 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype \u0438\u043c\u0435",
                    header: "\u0414\u0440\u0443\u0433\u0438 \u041e\u043d\u043b\u0430\u0458\u043d \u0421\u043c\u0435\u0442\u043a\u0438",
                    website: "\u041b\u0438\u0447\u043d\u0430 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430",
                    paypal_error: "ID \u043d\u0430 PayPal \u0441\u043c\u0435\u0442\u043a\u0430\u0442\u0430 \u043d\u0435 \u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e. ",
                    paypal_placeholder: "ID \u043d\u0430 PayPal \u0441\u043c\u0435\u0442\u043a\u0430 \u0438\u043b\u0438 \u0415\u043c\u0430\u0458\u043b \u0430\u0434\u0440\u0435\u0441\u0430"
                },
                header: "\u0421\u043c\u0435\u0442\u043a\u0430 \u0438 \u041f\u0440\u043e\u0444\u0438\u043b",
                account_details: "\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430 \u0421\u043c\u0435\u0442\u043a\u0430",
                location: {
                    header: "\u041b\u043e\u043a\u0430\u0446\u0438\u0458\u0430",
                    placeholder: "(\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041b\u043e\u0441 \u0421\u0430\u043d\u0442\u043e\u0441 , \u0421\u0430\u043d \u0410\u043d\u0434\u0440\u0435\u0430\u0441)",
                    select: "\u0418\u0437\u0431\u0435\u0440\u0438 \u0434\u0440\u0436\u0430\u0432\u0430..."
                },
                avatar: {
                    header: "\u041f\u0440\u043e\u0444\u0438\u043b\u043d\u0430 \u0441\u043b\u0438\u043a\u0430",
                    upload: "\u041f\u0440\u0438\u043a\u0430\u0447\u0438 \u0442\u0432\u043e\u0458\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u043d\u0430 \u0441\u043b\u0438\u043a\u0430:",
                    restrictions: "(.jpg \u0438\u043b\u0438 .png \u0441\u0430\u043c\u043e: \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 750Kb; \u041f\u0440\u0435\u043f\u043e\u0440\u0430\u0447\u0430\u043d\u043e 256x256 \u043f\u0438\u043a\u0441\u0435\u043b\u0438)",
                    select: "\u0418\u043b\u0438 \u0438\u0437\u0431\u0435\u0440\u0438 \u0435\u0434\u043d\u0430 \u043e\u0434 \u043e\u0432\u0438\u0435:",
                    error: {
                        image_size: "\u0424\u0430\u0458\u043b\u043e\u0442 \u0433\u043e \u043d\u0430\u0434\u043c\u0438\u043d\u0443\u0432\u0430 \u043d\u0430\u0448\u0438\u043e\u0442 \u043b\u0438\u043c\u0438\u0442 \u043e\u0434 750Kb.",
                        image_type: "\u0422\u043e\u0458 \u0442\u0438\u043f \u043d\u0430 \u0444\u0430\u0458\u043b \u043d\u0435 \u0435 \u043f\u043e\u0434\u0440\u0436\u0430\u043d, \u0434\u043e\u0434\u0430\u0434\u0438 \u0441\u0430\u043c\u043e .jpg \u0438 .png \u0441\u043b\u0438\u043a\u0438."
                    }
                },
                submit: "\u0421\u043d\u0438\u043c\u0438 \u0433\u0438 \u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435",
                loading: {
                    saving_settings: "\u0421\u043d\u0438\u043c\u0443\u0432\u0430\u043c \u043f\u043e\u0434\u0435\u0441\u0443\u0432\u0430\u045a\u0430...",
                    uploading_avatar: "\u0421\u0435 \u043f\u0440\u0438\u043a\u0430\u0447\u0443\u0432\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u043d\u0430 \u0441\u043b\u0438\u043a\u0430..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u0424\u0430\u0458\u043b\u043e\u0442 \u0441\u0435 \u043a\u0440\u0435\u0438\u0440\u0430...",
                saving_file: "\u0424\u0430\u0458\u043b\u043e\u0442 \u0441\u0435 \u0441\u043d\u0438\u043c\u0443\u0432\u0430...",
                uploading_screenshots: "\u041f\u0440\u0438\u043a\u0430\u0447\u0443\u0432\u0430\u045a\u0435 \u0441\u043b\u0438\u043a\u0430...",
                uploading_archive: "\u0414\u043e\u0434\u0430\u0432\u0430\u045a\u0435 \u0430\u0440\u0445\u0438\u0432\u0430..."
            },
            error: {
                required: {
                    file_name: "\u041f\u043e\u0442\u0440\u0435\u0431\u043d\u043e \u0435 \u0438\u043c\u0435 \u043d\u0430 \u0444\u0430\u0458\u043b\u043e\u0442.",
                    author: "\u041f\u043e\u0442\u0440\u0435\u0431\u043d\u043e \u0435 \u0438\u043c\u0435 \u043d\u0430 \u0430\u0432\u0442\u043e\u0440.",
                    category: "\u0412\u0435 \u043c\u043e\u043b\u0438\u043c\u0435 \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0458\u0430.",
                    file: "\u0418\u0437\u0431\u0435\u0440\u0438 \u0444\u0430\u0458\u043b \u0437\u0430 \u043f\u0440\u0438\u043a\u0430\u0447\u0443\u0432\u0430\u045a\u0435."
                },
                restrictions: {
                    file_size: "\u0424\u0430\u0458\u043b\u043e\u0442 \u0433\u043e \u043d\u0430\u0434\u043c\u0438\u043d\u0443\u0432\u0430 \u043d\u0430\u0448\u0438\u043e\u0442 \u043b\u0438\u043c\u0438\u0442 \u043e\u0434 100Mb.",
                    file_type: "\u0422\u043e\u0458 \u0442\u0438\u043f \u043d\u0430 \u0444\u0430\u0458\u043b \u043d\u0435 \u0435 \u043f\u043e\u0434\u0440\u0436\u0430\u043d, \u0434\u043e\u0434\u0430\u0434\u0438 \u0441\u0430\u043c\u043e .zip, .rar \u0438 .oiv \u0444\u0430\u0458\u043b\u043e\u0432\u0438.",
                    image_limit: "\u0413\u043e \u043d\u0430\u0434\u043c\u0438\u043d\u0430 \u043b\u0438\u043c\u0438\u0442\u043e\u0442 \u043e\u0434 15 \u0441\u043b\u0438\u043a\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c",
                    image_size: "%{count} \u0441\u043b\u0438\u043a\u0438 \u043d\u0435 \u0431\u0435\u0430 \u0434\u043e\u0434\u0430\u0434\u0435\u043d\u0438 \u0431\u0438\u0434\u0435\u0458\u043a\u0438 \u0433\u043e \u043d\u0430\u0434\u043c\u0438\u043d\u0443\u0432\u0430\u0430\u0442 \u043b\u0438\u043c\u0438\u0442\u043e\u0442 \u043e\u0434 2Mb. ",
                    image_type: "%{count} \u0441\u043b\u0438\u043a\u0438 \u043d\u0435 \u0431\u0435\u0430 \u0434\u043e\u0434\u0430\u0434\u0435\u043d\u0438 \u0431\u0438\u0434\u0435\u0458\u043a\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0442 \u043d\u0435 \u0435 \u043f\u043e\u0434\u0434\u0440\u0436\u0430\u043d - \u0434\u043e\u0434\u0430\u0434\u0438 \u0441\u0430\u043c\u043e .jpg \u0438 .png \u0441\u043b\u0438\u043a\u0438."
                }
            }
        },
        user_file: {
            "delete": {
                title: "\u0418\u0437\u0431\u0440\u0438\u0448\u0438",
                confirm: "\u0421\u0438\u0433\u0443\u0440\u0435\u043d \u043b\u0438 \u0441\u0438 \u0434\u0435\u043a\u0430 \u045c\u0435 \u0433\u043e \u0431\u0440\u0438\u0448\u0435\u0448 \u043e\u0432\u043e\u0458 \u0444\u0430\u0458\u043b ?"
            },
            report: {
                title: "\u041f\u0440\u0438\u0458\u0430\u0432\u0430",
                explain: "\u041e\u0431\u0458\u0430\u0441\u043d\u0438 \u0437\u0430\u0448\u0442\u043e \u0433\u043e \u043f\u0440\u0438\u0458\u0430\u0432\u0443\u0432\u0430\u0448 \u043e\u0432\u043e\u0458 \u0444\u0430\u0458\u043b.."
            },
            rating: {
                cancel: "\u041e\u0442\u043a\u0430\u0436\u0438 \u0420\u0435\u0458\u0442\u0438\u043d\u0433",
                star1: "\u041f\u043e\u0442\u0440\u0435\u0431\u043d\u0430 \u0435 \u0440\u0430\u0431\u043e\u0442\u0430",
                star2: "\u041e\u041a",
                star3: "\u0414\u043e\u0431\u0440\u043e",
                star4: "\u041e\u0434\u043b\u0438\u0447\u043d\u043e",
                star5: "\u0421\u0443\u043f\u0435\u0440!",
                average: {
                    one: "%{rating} / 5 \u0455\u0432\u0435\u0437\u0434\u0438 (1 \u0433\u043b\u0430\u0441\u0430\u0458)",
                    other: "%{rating} / 5 \u0455\u0432\u0435\u0437\u0434\u0438 (%{display_count} \u0433\u043b\u0430\u0441\u043e\u0432\u0438)"
                }
            }
        },
        video: {
            added_by: "\u0414\u043e\u0434\u0430\u0434\u0435\u043d\u043e \u043e\u0434 %{username}",
            label: {
                one: "%{count} \u0412\u0438\u0434\u0435\u043e",
                other: "%{count} \u0412\u0438\u0434\u0435\u0430"
            },
            show_more: {
                one: "\u041f\u043e\u043a\u0430\u0436\u0438 \u0443\u0448\u0442\u0435 \u0435\u0434\u043d\u043e \u0432\u0438\u0434\u0435\u043e",
                other: "\u041f\u043e\u043a\u0430\u0436\u0438 \u0443\u0448\u0442\u0435 %{count} \u0432\u0438\u0434\u0435\u0430"
            },
            add_modal: {
                header: "\u0414\u043e\u0434\u0430\u0434\u0438 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 %{file_name}",
                instructions: "\u0414\u043e\u0434\u0430\u0434\u0438 \u0446\u0435\u043b URL \u043e\u0434 YouTube, DailyMotion \u0438\u043b\u0438 Vimeo:",
                placeholder: "(\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\u0410\u043a\u043e \u0441\u0435 \u0438\u0437\u0433\u043b\u0435\u0434\u0430 \u043e\u043a\u0435\u0458 , \u0431\u0438\u0434\u0438 \u0441\u0438\u0433\u0443\u0440\u0435\u043d \u0434\u0435\u043a\u0430 \u0441\u0438 \u043f\u0440\u0438\u0442\u0438\u0441\u043d\u0430\u043b "\u0414\u043e\u0434\u0430\u0434\u0438 \u0412\u0438\u0434\u0435\u043e" \u0437\u0430 \u0434\u0430 \u0441\u043d\u0438\u043c\u0438\u0448.',
                error: {
                    parse: "\u041d\u0435\u043c\u043e\u0436\u0435\u043c\u0435 \u0434\u0430 \u043f\u0440\u0435\u0432\u0437\u0435\u043c\u0435\u043c\u0435 URL \u043e\u0434 \u0442\u043e\u0430 \u0432\u0438\u0434\u0435\u043e , \u0431\u0438\u0434\u0438 \u0441\u0438\u0433\u0443\u0440\u0435\u043d \u0434\u0435\u043a\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u0448 \u043f\u043e\u0434\u0434\u0440\u0436\u0430\u043d\u0430 \u0432\u0435\u0431 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438 \u043f\u0440\u043e\u0431\u0430\u0458 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e."
                }
            },
            "delete": {
                confirm: "\u0421\u0438\u0433\u0443\u0440\u0435\u043d \u0441\u0438 \u0434\u0435\u043a\u0430 \u0433\u043e \u0431\u0440\u0438\u0448\u0435\u0448 \u043e\u0432\u0430 \u0432\u0438\u0434\u0435\u043e ?"
            }
        },
        comment: {
            add: "\u0414\u043e\u0434\u0430\u0434\u0438 \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            label: {
                one: "1 \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                other: "%{display_count} \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438"
            },
            author: "\u0410\u0432\u0442\u043e\u0440",
            reply: "\u041e\u0434\u0433\u043e\u0432\u043e\u0440\u0438",
            pin: {
                title: "\u0412\u0430\u0436\u0435\u043d \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                pinned: "\u0412\u0430\u0436\u0435\u043d \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                unpin: "\u041d\u0435\u0432\u0430\u0436\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440"
            },
            report: {
                title: "\u041f\u0440\u0438\u0458\u0430\u0432\u0438",
                explain: "\u041e\u0431\u0458\u0430\u0441\u043d\u0438 \u0437\u0430\u0448\u0442\u043e \u0433\u043e \u043f\u0440\u0438\u0458\u0430\u0432\u0443\u0432\u0430\u0448 \u043e\u0432\u043e\u0458 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440..."
            },
            "delete": {
                title: "\u0418\u0437\u0431\u0440\u0438\u0448\u0438",
                confirm: "\u0421\u0438\u0433\u0443\u0440\u0435\u043d \u043b\u0438 \u0441\u0438 \u0434\u0435\u043a\u0430 \u0433\u043e \u0431\u0440\u0438\u0448\u0435\u0448 \u043e\u0432\u043e\u0458 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 ?"
            },
            show_previous: {
                one: "\u041f\u043e\u043a\u0430\u0436\u0438 1 \u043f\u0440\u0435\u0442\u0445\u043e\u0434\u0435\u043d \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                other: "\u041f\u043e\u043a\u0430\u0436\u0438 \u043f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u0438 %{count} \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438"
            },
            placeholder: "\u0414\u043e\u0434\u0430\u0434\u0438 \u0442\u0432\u043e\u0458 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            submit: "\u041f\u043e\u0441\u0442\u0438\u0440\u0430\u0458 \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            loading: "\u0421\u0435 \u041f\u043e\u0441\u0442\u0438\u0440\u0430 \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440...",
            fetching: "\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430\u0430\u0442 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438...",
            flood_control: "\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0442\u0435 \u043d\u0435\u043c\u043e\u0436\u0435 \u0442\u043e\u043b\u043a\u0443 \u0431\u0440\u0437\u043e \u0434\u0430 \u0431\u0438\u0434\u0430\u0442 \u0434\u043e\u0434\u0430\u0434\u0435\u043d\u0438 , \u043f\u0440\u0438\u0447\u0435\u043a\u0430\u0458 \u043f\u0430 \u043e\u0431\u0438\u0434\u0438 \u0441\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e.",
            no_user_message: "\u041f\u0440\u0438\u0434\u0440\u0443\u0436\u0438 \u0441\u0435 \u043d\u0430 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043e\u0442! %{log_in} \u0438\u043b\u0438 %{register} \u0441\u043e \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0434\u0440\u0443\u0436\u0438\u0448 \u043d\u0430 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0442\u0435.",
            no_user_message_log_in: "\u041d\u0430\u0458\u0430\u0432\u0438 \u0421\u0435",
            no_user_message_register: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0458 \u0441\u0435 ",
            expand: "\u041f\u0440\u043e\u0448\u0438\u0440\u0438 \u0434\u0430 \u0433\u043e \u0432\u0438\u0434\u0438\u0448 \u0446\u0435\u043b \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            context: "\u041f\u043e\u0433\u043b\u0435\u0434\u043d\u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",
            rules: {
                agree: "\u0421\u043e \u043a\u043e\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u045a\u0435 \u0442\u0438 \u0441\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0432\u0430\u0448 \u0441\u043f\u043e\u0440\u0435\u0434 %{community_guidelines}",
                agree_community_guidelines: "GTA5-Mods.com \u0443\u043f\u0430\u0442\u0441\u0442\u0432\u0430 \u0437\u0430 \u0437\u0430\u0435\u0434\u043d\u0438\u0446\u0430\u0442\u0430",
                offensive: "\u041d\u0435 \u043f\u043e\u0441\u0442\u0438\u0440\u0430\u0458 \u043d\u0430\u0432\u0440\u0435\u0434\u043b\u0438\u0432\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438 \u043a\u043e\u043d \u0434\u0440\u0443\u0433\u0438\u0442\u0435.\u0410\u043a\u043e \u0438\u043c\u0430\u0448 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u043e \u0434\u0440\u0443\u0433 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 , \u0442\u043e\u0433\u0430\u0448 \u043f\u0440\u0438\u0458\u0430\u0432\u0438 \u0433\u043e.",
                malware: "\u041d\u0435 \u043f\u043e\u0441\u0442\u0438\u0440\u0430\u0458 \u043b\u0438\u043d\u043a\u043e\u0432\u0438 \u0441\u043e \u0432\u0438\u0440\u0443\u0441\u043d\u0430 \u0438 \u043f\u0438\u0440\u0430\u0442\u0441\u043a\u0430 \u0441\u043e\u0434\u0440\u0436\u0438\u043d\u0430.",
                rating: "\u041d\u0435 \u0434\u0430\u0432\u0430\u0458 \u043a\u0440\u0438\u0442\u0438\u043a\u0438 \u0431\u0435\u0437 \u043e\u0431\u0435\u0437\u0431\u0435\u0434\u0443\u0432\u0430\u045a\u0435 \u043d\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0458\u0430 \u0438\u043b\u0438 \u043a\u0440\u0438\u0442\u0438\u043a\u0430.",
                warning: "\u0421\u043e \u043d\u0435\u043f\u043e\u0447\u0438\u0442\u0443\u0432\u0430\u045a\u0435 \u043d\u0430 \u043e\u0432\u0438\u0435 \u0443\u043f\u0430\u0442\u0441\u0442\u0432\u0430 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0442\u0438 \u0431\u0438\u0434\u0435 \u0438\u0437\u0431\u0440\u0438\u0448\u0430\u043d \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u043e\u0442 \u0438\u043b\u0438 \u0441\u043c\u0435\u0442\u043a\u0430\u0442\u0430 \u0434\u0430 \u0442\u0438 \u0431\u0438\u0434\u0435 \u0431\u0430\u043d\u0438\u0440\u0430\u043d\u0430."
            }
        }
    },
    mn: {
        helpers: null
    },
    "mr-IN": {
        helpers: null
    },
    ms: {
        helpers: {
            label: {
                welcome: "Selamat datang ke GTA5-Mods.com",
                site_info: "Sumber anda untuk GTA 5 mod kereta, skrip, alat dan banyak lagi.",
                intro: "Pilih salah satu daripada kategori berikut untuk mula menyemak kandungan terkini GTA 5:",
                loading: "Menunggu...",
                cancel: "Batal",
                send: "Hantar",
                donate: "Derma dengan %{paypal}",
                fix_errors: "Sila betulkan ralat berikut:",
                user: {
                    email: "Alamat email",
                    email_confirmation: "Sahkan alamat e-mel",
                    username: "Nama pengguna",
                    password: "Katalaluan",
                    password_new: "Katalaluan baru",
                    password_confirmation: "Sahkan katalaluan",
                    password_confirmation_new: "Sahkan katalaluan baru",
                    password_requirements: {
                        other: "(%{count} minimum perkataan)"
                    },
                    remember_me: "Ingat saya",
                    current_password: "Katalaluan sekarang",
                    new_password: "Katalaluan baru"
                },
                filter: "Tapis:",
                sort_by: "Susun ikut:",
                time_frame: "Sejak:",
                back_to_login: "Kembali kepada log-masuk",
                have_an_account: "Sudah mempunyai akaun?",
                dont_have_an_account: "Tidak mempunyai akaun?",
                log_in_here: "Log-masuk disini.",
                register_here: "Daftar disini.",
                confirm: {
                    title: "Adakah anda pasti?",
                    positive: "Ya",
                    negative: "Tidak"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Alamat e-mel pengesahan tidak sepadan, sila cuba lagi."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Nama pengguna dan katalaluan kombinasi anda tidak betul.",
                banned: "Anda telah dilarang daripada laman web ini. Sebab: %{reason}",
                captcha_incorrect: "Sila isi kotak reCAPTCHA dan cuba lagi.",
                confirmation_notice: "Akaun anda belum disahkan lagi! Sila semak peti masuk e-mel anda untuk mendapatkan pautan pengesahan atau %{click_here}.",
                confirmation_notice_click_here: "klik di sini untuk menghantar semula arahan pengesahan"
            }
        },
        settings: {
            account: {
                header: "Akaun & Profil",
                account_details: "Butiran Akaun",
                location: {
                    header: "Lokasi",
                    placeholder: "(contoh: Los Santos, San Andreas)",
                    select: "Pilih Negara..."
                },
                social: {
                    header: "Lain-lain Akaun Online",
                    website: "Laman web Peribadi",
                    paypal_error: "PayPal ID anda masukkan tidak sah.",
                    paypal_placeholder: "PayPal Merchant ID atau alamat e-mel"
                },
                avatar: {
                    header: "Gambar Profil",
                    upload: "Memuat naik gambar profil adat:",
                    restrictions: "(.jpg atau .png sahaja; 750Kb maksimum; Disyorkan 256x256 piksel)",
                    select: "Atau pilih satu di bawah:",
                    error: {
                        image_size: "Fail yang melebihi had 750KB.",
                        image_type: "Jenis fail tidak disokong, sila hanya memuat naik .jpg dan imej png."
                    }
                },
                submit: "Simpan Perubahan",
                loading: {
                    saving_settings: "Simpan tetapan...",
                    uploading_avatar: "Muatnaik gambar profil..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Mencipta fail ...",
                saving_file: "Menyimpan fail ...",
                uploading_screenshots: "Memuat naik tangkapan skrin ...",
                uploading_archive: "Arkib memuat naik ..."
            },
            error: {
                required: {
                    file_name: "Nama fail yang diperlukan.",
                    author: "Nama pengarang diperlukan.",
                    category: "Sila pilih kategori.",
                    file: "Sila pilih fail untuk dimuat naik."
                },
                restrictions: {
                    file_size: "Fail yang melebihi had 100MB kami.",
                    file_type: "Jenis fail tidak disokong, sila hanya memuat naik .zip, .rar dan .oiv fail.",
                    image_limit: "Anda telah mencapai had 15 screenshot maksimum.",
                    image_size: "%{count} screenshot anda tidak ditambah kerana mereka melebihi 2MB.",
                    image_type: "%{count} screenshot anda tidak ditambah kerana format mereka tidak disokong - sila muat naik hanya .jpg .png dan imej."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Padam",
                confirm: "Adakah anda pasti anda mahu memadam fail ini?"
            },
            report: {
                title: "Laporan",
                explain: "Sila jelaskan mengapa anda melaporkan fail ini ..."
            },
            rating: {
                cancel: "Batal Rating",
                star1: "Perlukan Kerja",
                star2: "OK",
                star3: "Bagus",
                star4: "Sangat Bagus",
                star5: "Terbaekkk!",
                average: {
                    other: "%{rating} / 5 bintang (%{display_count} undian)"
                }
            }
        },
        video: {
            added_by: "Ditambah oleh %{username}",
            label: {
                other: "%{count} Video"
            },
            show_more: {
                other: "Tunjuk %{count} video lagi"
            },
            add_modal: {
                header: "Tambah video kepada %{file_name}",
                instructions: "Masukkan URL yang penuh kepada video anda di YouTube, YouTube atau Vimeo:",
                placeholder: "(contoh. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Jika semuanya kelihatan baik, pastikan anda tekan "Tambah Video" di bawah untuk menyimpannya.',
                error: {
                    parse: "Kami tidak dapat merebut video dari URL tersebut, sila sahkan anda menggunakan laman web yang disokong dan cuba lagi."
                }
            },
            "delete": {
                confirm: "Adakah anda pasti anda mahu mengeluarkan video ini?"
            }
        },
        comment: {
            add: "Tambah Komen",
            label: {
                other: "%{display_count} Komen"
            },
            author: "Pengarang",
            reply: "Balas",
            pin: {
                title: "Lekat Komen",
                pinned: "Komen Dilekat",
                unpin: "Jangan Lekat Komen"
            },
            report: {
                title: "Lapor",
                explain: "Sila jelaskan mengapa anda melaporkan komen ini ..."
            },
            "delete": {
                title: "Padam",
                confirm: "Adakah anda pasti anda mahu memadamkan komen ini?"
            },
            show_previous: {
                other: "Tunjuk sebelum %{count} komen"
            },
            placeholder: "Tambah komen anda ...",
            submit: "Catat Ulasan",
            loading: "Menghantar Ulasan ...",
            fetching: "Menunggu komen...",
            flood_control: "Komen tidak boleh ditambah begitu cepat, sila tunggu beberapa minit dan cuba lagi.",
            no_user_message: "Sertai perbualan! %{log_in} atau %{register} untuk mendaftar akaun untuk dapat komen.",
            no_user_message_log_in: "Log masuk",
            no_user_message_register: "daftar",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    nb: {
        helpers: {
            label: {
                welcome: "Velkommen til GTA5-Mods.com",
                site_info: "Din kilde til de nyeste GTA 5 bil mods, script, programmer og mer.",
                intro: "Velg en av f\xf8lgende kategoriene for \xe5 begynne \xe5 bla gjennom de nyeste GTA 5 mods:",
                loading: "Laster...",
                cancel: "Avbryt",
                send: "Send",
                donate: "Doner med %{paypal}",
                fix_errors: "Rett opp f\xf8lgende feil:",
                user: {
                    email: "E-postadresse",
                    email_confirmation: "Confirm email address",
                    username: "Brukernavn",
                    password: "Passord",
                    password_new: "Nytt passord",
                    password_confirmation: "Bekreft passord",
                    password_confirmation_new: "Bekreft nytt passord",
                    password_requirements: {
                        one: "(minimum er %{count} tegn)",
                        other: "(minimum er %{count} tegn)"
                    },
                    remember_me: "Husk meg",
                    current_password: "N\xe5v\xe6rende passord",
                    new_password: "Nytt passord"
                },
                filter: "Filter:",
                sort_by: "Sorter etter:",
                time_frame: "Since:",
                back_to_login: "Tilbake til innlogging",
                have_an_account: "Har du allerede en konto?",
                dont_have_an_account: "Har du ikke en konto?",
                log_in_here: "Logg inn her.",
                register_here: "Registrer deg her.",
                confirm: {
                    title: "Er du sikker?",
                    positive: "Ja",
                    negative: "Nei"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Brukernavn og passord kombinasjon er feil.",
                banned: "Du har blitt utestengt fra nettsiden. Grunn: %{reason}",
                captcha_incorrect: "Please fill out the reCAPTCHA box and try again.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "Bruker & Profil",
                account_details: "Bruker Detaljer",
                location: {
                    header: "Beliggenhet",
                    placeholder: "(f.eks Los Santos, San Andreas)",
                    select: "Velg Land..."
                },
                social: {
                    header: "Andre Online kontoer",
                    website: "Personlig nettside",
                    paypal_error: "PayPal ID-en du skrev inn er ugyldig.",
                    paypal_placeholder: "PayPal ID eller E-post adresse"
                },
                avatar: {
                    header: "Profilebilde",
                    upload: "Last opp tilpasset profilbilde:",
                    restrictions: "(.jpg eller .png bare; Maximum 750Kb; Anbefalt 256x256 piksler)",
                    select: "Eller velge et under:",
                    error: {
                        image_size: "Den filen overskrider v\xe5r 750Kb grense.",
                        image_type: "Den filtypen st\xf8ttes ikke, kan bare laste opp .jpg og .png bilder."
                    }
                },
                submit: "Lagre Endringer",
                loading: {
                    saving_settings: "Lagre innstillinger...",
                    uploading_avatar: "Laster opp profilbilde ..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Oppretter fil...",
                saving_file: "Lagrer fil...",
                uploading_screenshots: "Laster opp bilder...",
                uploading_archive: "Laster opp arkivet..."
            },
            error: {
                required: {
                    file_name: "Filnavnet er n\xf8dvendig.",
                    author: "Utvikler navn er p\xe5krevd.",
                    category: "Vennligst velg en kategori.",
                    file: "Velg en fil \xe5 laste opp."
                },
                restrictions: {
                    file_size: "Den filen overskrider v\xe5r 100Mb grense.",
                    file_type: "Den filtypen st\xf8ttes ikke, du kan bare laste opp .zip, .rar og .oiv filer.",
                    image_limit: "Du har n\xe5dd 15 bilder maksimale grensen.",
                    image_size: "%{count} av dine bilder ble ikke lagt til fordi de overskrider 2Mb.",
                    image_type: "%{count} av dine bilder ble ikke lagt til fordi formatet st\xf8ttes ikke - last opp kun .jpg og .png bilder."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Slett",
                confirm: "Er du sikker p\xe5 at du vil slette denne filen?"
            },
            report: {
                title: "Anmeld",
                explain: "Vennligst forklar hvorfor du rapporterer denne filen..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Needs Work",
                star2: "OK",
                star3: "Good",
                star4: "Great",
                star5: "Awesome!",
                average: {
                    one: "%{rating} / 5 stars (1 vote)",
                    other: "%{rating} / 5 stars (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Videoer"
            },
            show_more: {
                one: "Vis 1 video til",
                other: "Vis %{count} videoer til"
            },
            add_modal: {
                header: "Legg en video til %{file_name}",
                instructions: "Skriv inn hele URL-en til videoen p\xe5 YouTube, Dailymotion eller Vimeo:",
                placeholder: "(f.eks. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Hvis alt ser bra ut, m\xe5 du trykke "Legg til video" nedenfor for \xe5 lagre den.',
                error: {
                    parse: "Vi kunne ikke finne videoen fra denne nettadressen, du m\xe5 bekrefte at du bruker en nettside st\xf8ttet og pr\xf8v igjen."
                }
            },
            "delete": {
                confirm: "Er du sikker p\xe5 at du vil fjerne denne videoen?"
            }
        },
        comment: {
            add: "Legg til kommentar",
            label: {
                one: "1 Kommentar",
                other: "%{display_count} Kommentarer"
            },
            author: "Utvikler",
            reply: "Svar",
            pin: {
                title: "Pin Comment",
                pinned: "Pinned Comment",
                unpin: "Unpin Comment"
            },
            report: {
                title: "Anmeld",
                explain: "Vennligst forklar hvorfor du rapporterer denne kommentaren..."
            },
            "delete": {
                title: "Slett",
                confirm: "Er du sikker p\xe5 at du vil slette denne kommentaren?"
            },
            show_previous: {
                one: "Vis forrige kommentar",
                other: "Vis siste %{count} kommentarer"
            },
            placeholder: "Legg inn din kommentar...",
            submit: "Post Kommentar",
            loading: "Poster Kommentar...",
            fetching: "Laster kommentarer...",
            flood_control: "Kommentarer kan ikke postet s\xe5 raskt, du m\xe5 vente noen minutter og pr\xf8v igjen.",
            no_user_message: "Bli med i diskusjonen! %{log_in} eller %{register} for en konto for \xe5 kunne kommentere.",
            no_user_message_log_in: "Logg inn",
            no_user_message_register: "registrer",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    ne: {
        helpers: null
    },
    nl: {
        helpers: {
            label: {
                clear_all: "Wis Alles",
                welcome: "Welkom bij GTA5-Mods.com",
                site_info: "De plek voor de laatste GTA 5 auto, scripts, tools en meer.",
                intro: "Selecteer een van de volgende categorie\xebn om de laatste GTA 5 mods te bekijken:",
                loading: "Laden...",
                cancel: "Annuleren",
                send: "Versturen",
                donate: "Doneren met %{paypal}",
                fix_errors: "Verbeter de volgende fouten:",
                user: {
                    email: "Email adres",
                    email_confirmation: "Herhaal e-mailadres",
                    username: "Gebruikersnaam",
                    password: "Wachtwoord",
                    password_new: "Nieuw wachtwoord",
                    password_confirmation: "Herhaal wachtwoord",
                    password_confirmation_new: "Herhaal nieuw wachtwoord",
                    password_requirements: {
                        one: "(%{count} karakter minimaal)",
                        other: "(%{count} karakters minimaal)"
                    },
                    remember_me: "Onthoud mijn gegevens",
                    current_password: "Huidig wachtwoord",
                    new_password: "Nieuw wachtwoord"
                },
                filter: "Filter:",
                sort_by: "Sorteren op:",
                time_frame: "Sinds:",
                back_to_login: "Terug naar inloggen",
                have_an_account: "Heb je al een account?",
                dont_have_an_account: "Heb je nog geen account?",
                log_in_here: "Log hier in.",
                register_here: "Registreer hier.",
                confirm: {
                    title: "Weet je het zeker?",
                    positive: "Ja",
                    negative: "Nee"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "De bevestigde e-mailadres komt niet overeen, probeer het opnieuw."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Je gebruikersnaam en wachtwoord komen niet overeen!",
                banned: "Je bent verbannen van de website. Reden: %{reason}",
                captcha_incorrect: "Vul alstublieft de reCAPTCHA balk in en probeer opnieuw.",
                confirmation_notice: "Je account is noch niet bevestigd! Check alstublieft je email postvak voor een bevestigings link of %{click_here}",
                confirmation_notice_click_here: "klik hier om bevestigings instructies te verzenden"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype naam",
                    header: "Andere Online Accounts",
                    website: "Persoonlijke Website",
                    paypal_error: "De ingevoerde PayPal merchant ID is onjuist.",
                    paypal_placeholder: "PayPal Merchant ID of e-mailadres"
                },
                header: "Account & Profiel",
                account_details: "Account Details",
                location: {
                    header: "Locatie",
                    placeholder: "(bijv. Los Santos, San Andreas)",
                    select: "Selecteer Land..."
                },
                avatar: {
                    header: "Profielfoto",
                    upload: "Upload je eigen profielfoto",
                    restrictions: "(Alleen .jpg of .png; Maximaal 750Kb; Aanbevolen 256x256 pixels)",
                    select: "Of kies er \xe9\xe9n hieronder:",
                    error: {
                        image_size: "Dit bestand is groter dan het limiet van 750kb!",
                        image_type: "Dit bestand is niet ondersteund, Upload alleen .jpg en .png bestanden."
                    }
                },
                submit: "Wijzigingen opslaan",
                loading: {
                    saving_settings: "Instellingen opslaan...",
                    uploading_avatar: "Profielfoto uploaden..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Bestand aanmaken...",
                saving_file: "Bestand opslaan...",
                uploading_screenshots: "Screenshot uploaden...",
                uploading_archive: "Bestand uploaden..."
            },
            error: {
                required: {
                    file_name: "Bestandsnaam is verplicht.",
                    author: "Naam ontwikkelaar is verplicht.",
                    category: "Selecteer alsjeblieft een categorie.",
                    file: "Selecteer alstublieft een bestand om te uploaden."
                },
                restrictions: {
                    file_size: "Dit bestand overschrijdt onze 100Mb limiet.",
                    file_type: "Dit bestandstype wordt niet ondersteund. Alleen .zip, .rar en .oiv bestanden uploaden alstublieft.",
                    image_limit: "Je hebt het maximum limiet van 15 screenshots bereikt.",
                    image_size: "%{count} van jouw screenshots zijn niet toegevoegd, omdat het in totaal meer dan 2Mb is.",
                    image_type: "%{count} screenshots van jou zijn niet toegevoegd, omdat het formaat niet wordt ondersteund - upload alsjeblieft alleen .jpg en .png afbeeldingen."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Verwijder",
                confirm: "Weet je zeker dat je dit bestand wilt verwijderen"
            },
            report: {
                title: "Raporteer",
                explain: "Leg alsjeblieft uit waarom je dit bestand wilt aangeven..."
            },
            rating: {
                cancel: "Annuleer Beoordeling",
                star1: "Meer werk nodig",
                star2: "Oke",
                star3: "Goed",
                star4: "Uitstekend",
                star5: "Geweldig!",
                average: {
                    one: "%{rating} / 5 sterren (1 stem)",
                    other: "%{rating} / 5 sterren (%{display_count} stemmen)"
                }
            }
        },
        video: {
            added_by: "Toegevoegd door %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Videos"
            },
            show_more: {
                one: "Laat 1 video zien",
                other: "Laat %{count} videos zien"
            },
            add_modal: {
                header: "Voeg een video toe aan %{file_name}",
                instructions: "Voer de volledige URL in naar jouw video op Youtube, DailyMotion of Vimeo:",
                placeholder: "(bijv. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Als alles er goed uitziet, druk onderaan dan op "Video toevoegen" om op te slaan.',
                error: {
                    parse: "Er is geen video gevonden bij de URL die je hebt ingevoerd, controleer alsjeblieft of de website wordt ondersteund en probeer het opnieuw."
                }
            },
            "delete": {
                confirm: "Weet je zeker dat je deze video wilt verwijderen?"
            }
        },
        comment: {
            add: "Reactie toevoegen",
            label: {
                one: "1 Reactie",
                other: "%{display_count} Reacties"
            },
            author: "Ontwikkelaar",
            reply: "Antwoorden",
            pin: {
                title: "Reactie Vastzetten",
                pinned: "Reactie Vastgezet",
                unpin: "Reactie Losmaken"
            },
            report: {
                title: "Rapporteer",
                explain: "Leg alstublieft uit waarom je deze reactie wilt aangeven..."
            },
            "delete": {
                title: "Verwijder",
                confirm: "Weet je zeker dat je deze reactie wilt verwijderen?"
            },
            show_previous: {
                one: "Geef de vorige reactie weer",
                other: "Geef de vorige %{count} reacties weer"
            },
            placeholder: "Voeg jouw reactie toe...",
            submit: "Plaats Reactie",
            loading: "Reactie wordt geplaatst...",
            fetching: "Reacties laden...",
            flood_control: "Reacties kunnen niet zo snel worden toegevoegd, Probeer het later nog eens.",
            no_user_message: "Praat mee! %{log_in} of %{register} voor een account om een reactie te plaatsen.",
            no_user_message_log_in: "Log in",
            no_user_message_register: "registreer",
            expand: "Breidt uit om alle reacties te lezen",
            context: "Bekijk Context",
            rules: {
                agree: "Als je en reactie plaatst ga je akkoord met de volgende %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com richtlijnen",
                offensive: "Plaats geen haatdragende reacties naar andere gebruikers. Als je een probleem hebt met een bepaalde reactie, rapporteer het alstublieft.",
                malware: "Discussieer of plaats geen links naar malware of gestolen content.",
                rating: "Geef geen waardering (sterretjes) zonder eerst relevante feedback of kritiek te geven.",
                warning: "Het overtreden van deze richtlijnen kan als gevolg hebben dat je reactie wordt verwijderd of je account wordt be\xebindigt."
            }
        }
    },
    nn: {
        helpers: null
    },
    or: {
        helpers: null
    },
    pa: {
        helpers: null
    },
    pl: {
        helpers: {
            label: {
                welcome: "Witaj na GTA5-Mods.com",
                site_info: "Twoje \u017ar\xf3d\u0142o najnowszych mod\xf3w do GTA 5 m.in. samochod\xf3w, skrypt\xf3w, narz\u0119dzi i wi\u0119cej.",
                intro: "Wybierz jedn\u0105 z poni\u017cszych kategorii, aby rozpocz\u0105\u0107 przegl\u0105danie najnowszych modyfikacji:",
                loading: "\u0141adowanie...",
                cancel: "Anuluj",
                send: "Wy\u015blij",
                donate: "Przeka\u017c darowizn\u0119 w systemie %{paypal}",
                fix_errors: "Prosz\u0119 poprawi\u0107 nast\u0119puj\u0105ce b\u0142\u0119dy:",
                user: {
                    email: "Adres e-mail",
                    email_confirmation: "Potwierd\u017a adres e-mail",
                    username: "Nazwa u\u017cytkownika",
                    password: "Has\u0142o",
                    password_new: "Nowe has\u0142o",
                    password_confirmation: "Potwierd\u017a has\u0142o",
                    password_confirmation_new: "Potwierd\u017a nowe has\u0142o",
                    password_requirements: {
                        one: "(%{count} znak minimum)",
                        few: "(%{count} znaki minimum)",
                        many: "(%{count} znak\xf3w minimum)",
                        other: "(%{count} znak\xf3w minimum)"
                    },
                    remember_me: "Zapami\u0119taj mnie",
                    current_password: "Aktualne has\u0142o",
                    new_password: "Nowe has\u0142o"
                },
                filter: "Filtr:",
                sort_by: "Sortuj wed\u0142ug:",
                time_frame: "Kiedy:",
                back_to_login: "Wr\xf3\u0107 do strony logowania",
                have_an_account: "Masz ju\u017c konto?",
                dont_have_an_account: "Nie masz konta?",
                log_in_here: "Zaloguj si\u0119 tutaj.",
                register_here: "Zarejestruj si\u0119 tutaj.",
                confirm: {
                    title: "Jeste\u015b pewny?",
                    positive: "Tak",
                    negative: "Nie"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Potwierdzenie adresu e-mail nie pasuje, prosimy spr\xf3bowa\u0107 ponownie."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Twoja kombinacja nazwy u\u017cytkownika i has\u0142a jest nieprawid\u0142owa.",
                banned: "Zosta\u0142e\u015b zbanowany na stronie. Pow\xf3d: %{reason}",
                captcha_incorrect: "Prosz\u0119 wype\u0142ni\u0107 pole reCAPTCHA i spr\xf3bowa\u0107 ponownie.",
                confirmation_notice: "Twoje konto nie zosta\u0142o jeszcze potwierdzone! Sprawd\u017a swoj\u0105 skrzynk\u0119 e-mail lub %{click_here}.",
                confirmation_notice_click_here: "kliknij tutaj, aby ponownie wys\u0142a\u0107 instrukcje potwierdzania"
            }
        },
        settings: {
            account: {
                header: "Konto & Profil",
                account_details: "Szczeg\xf3\u0142y konta",
                location: {
                    header: "Lokalizacja",
                    placeholder: "(np. Los Santos, San Andreas)",
                    select: "Wybierz kraj..."
                },
                social: {
                    header: "Inne konta Online",
                    website: "Strona osobista",
                    paypal_error: "Identyfikator PayPal jest nieprawid\u0142owy",
                    paypal_placeholder: "Identyfikator PayPal lub e-mail"
                },
                avatar: {
                    header: "Obrazek profilu",
                    upload: "Prze\u015blij w\u0142asny obrazek profilu:",
                    restrictions: "(tylko .jpg lub .png; Maksymalnie 750Kb; Zalecana rozdzielczo\u015b\u0107 256x256 pikseli)",
                    select: "lub wybierz jeden z poni\u017cszych",
                    error: {
                        image_size: "Ten plik przekracza limit 750Kb.",
                        image_type: "Ten typ pliku nie jest obs\u0142ugiwany, prosz\u0119 przesy\u0142a\u0107 tylko pliki .jpg i .png."
                    }
                },
                submit: "Zapisz zmiany",
                loading: {
                    saving_settings: "Zapisywanie ustawie\u0144...",
                    uploading_avatar: "Przesy\u0142anie obrazka profilu..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Tworzenie pliku...",
                saving_file: "Zapisywanie pliku...",
                uploading_screenshots: "Przesy\u0142anie zdj\u0119\u0107...",
                uploading_archive: "Przesy\u0142anie archiwum..."
            },
            error: {
                required: {
                    file_name: "Nazwa pliku jest wymagana.",
                    author: "Nazwa autora jest wymagana.",
                    category: "Wybierz kategori\u0119.",
                    file: "Prosz\u0119 wybra\u0107 plik do przes\u0142ania."
                },
                restrictions: {
                    file_size: "Ten plik przekracza limit 100Mb.",
                    file_type: "Ten typ pliku jest nieobs\u0142ugiwany, prosimy przesy\u0142a\u0107 pliki .zip, .rar lub .oiv.",
                    image_limit: "Osi\u0105gni\u0119to maksymalny limit 15 zdj\u0119\u0107.",
                    image_size: "%{count} z Twoich zdj\u0119\u0107 nie zosta\u0142o dodanych poniewa\u017c przekroczono limit 2Mb.",
                    image_type: "%{count} z Twoich zdj\u0119\u0107 nie zosta\u0142o dodanych poniewa\u017c format nie jest obs\u0142ugiwany - prosimy przesy\u0142a\u0107 tylko pliki .jpg i .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Usu\u0144",
                confirm: "Czy na pewno chcesz usun\u0105\u0107 ten plik?"
            },
            report: {
                title: "Zg\u0142o\u015b",
                explain: "Wyt\u0142umacz dlaczego zg\u0142aszasz ten plik..."
            },
            rating: {
                cancel: "Anuluj ocenianie",
                star1: "Wymaga pracy",
                star2: "OK",
                star3: "Dobre",
                star4: "\u015awietne",
                star5: "Niesamowite!",
                average: {
                    one: "%{rating} / 5 gwiazdek (1 g\u0142os)",
                    few: "%{rating} / 5 gwiazdek (%{display_count} g\u0142os\xf3w)",
                    many: "%{rating} / 5 gwiazdek (%{display_count} g\u0142os\xf3w)",
                    other: "%{rating} / 5 gwiazdek (%{display_count} g\u0142osy)"
                }
            }
        },
        video: {
            added_by: "Dodany przez %{username}",
            label: {
                one: "%{count} Film",
                few: "%{count} Filmy",
                many: "%{count} Film\xf3w",
                other: "%{count} Film\xf3w"
            },
            show_more: {
                one: "Poka\u017c jeszcze jeden film",
                few: "Poka\u017c jeszcze %{count} filmy",
                many: "Poka\u017c jeszcze %{count} film\xf3w",
                other: "Poka\u017c  jeszcze%{count} film\xf3w"
            },
            add_modal: {
                header: "Dodaj film do %{file_name}",
                instructions: "Wpisz pe\u0142ny adres URL do filmu na YouTube, DailyMotion czy Vimeo:",
                placeholder: "(np. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Je\u015bli wszystko wygl\u0105da dobrze, nale\u017cy nacisn\u0105\u0107 przycisk "Dodaj zdj\u0119cie" poni\u017cej, aby je zapisa\u0107.',
                error: {
                    parse: "Nie mogli\u015bmy przechwyci\u0107 filmu z tego adresu URL, prosz\u0119 potwierdzi\u0107, \u017ce u\u017cywasz wspieranej strony i spr\xf3buj ponownie."
                }
            },
            "delete": {
                confirm: "Czy na pewno chcesz usun\u0105\u0107 ten film?"
            }
        },
        comment: {
            add: "Dodaj komentarz",
            label: {
                one: "1 Komentarz",
                few: "%{display_count} Komentarzy",
                many: "%{display_count} Komentarzy",
                other: "%{display_count} Komentarzy"
            },
            author: "Autor",
            reply: "Odpowiedz",
            pin: {
                title: "Przypnij komentarz",
                pinned: "Komentarz przypi\u0119ty",
                unpin: "Odepnij komentarz"
            },
            report: {
                title: "Zg\u0142o\u015b",
                explain: "Wyt\u0142umacz dlaczego zg\u0142aszasz ten komentarz..."
            },
            "delete": {
                title: "Usu\u0144",
                confirm: "Czy na pewno chcesz usun\u0105\u0107 ten komentarz?"
            },
            show_previous: {
                one: "Poka\u017c 1 poprzedni komentarz",
                few: "Poka\u017c %{count} poprzednie komentarze",
                many: "Poka\u017c %{count} poprzednich komentarzy",
                other: "Poka\u017c %{count} poprzednich komentarzy"
            },
            placeholder: "Dodaj sw\xf3j komentarz...",
            submit: "Dodaj komentarz",
            loading: "Dodawanie komentarza...",
            fetching: "Wczytywanie komentarzy...",
            flood_control: "Komentarze nie mog\u0105 by\u0107 dodawane tak szybko, odczekaj kilka minut i spr\xf3buj ponownie.",
            no_user_message: "Do\u0142\u0105cz do rozmowy! %{log_in} lub %{register} konto, aby m\xf3c komentowa\u0107.",
            no_user_message_log_in: "zaloguj si\u0119",
            no_user_message_register: "zarejestruj",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    "pt-BR": {
        helpers: {
            label: {
                clear_all: "Limpar Tudo",
                welcome: "Seja bem-vindo \xe0 GTA5-Mods.com",
                site_info: "Sua fonte para as mais novas modifica\xe7\xf5es para GTA 5 de ve\xedculos, scripts, ferramentas e mais.",
                intro: "Selecione uma das seguintes categorias para come\xe7ar a checar os mais novos mods para GTA 5:",
                loading: "Carregando...",
                cancel: "Cancelar",
                send: "Enviar",
                donate: "Doar com %{paypal}",
                fix_errors: "Por favor, corrija os seguintes erros:",
                user: {
                    email: "Endere\xe7o de email",
                    email_confirmation: "Confirme o email",
                    username: "Nome de Usu\xe1rio",
                    password: "Senha",
                    password_new: "Nova Senha",
                    password_confirmation: "Confirmar Senha",
                    password_confirmation_new: "Confirmar nova Senha",
                    password_requirements: {
                        one: "(m\xednimo de %{count} caractere)",
                        other: "(m\xednimo de %{count} caracteres)"
                    },
                    remember_me: "Lembrar-me",
                    current_password: "Senha Atual",
                    new_password: "Nova Senha"
                },
                filter: "Filtros",
                sort_by: "Organizar por:",
                time_frame: "Desde:",
                back_to_login: "Voltar \xe0 p\xe1gina de Login",
                have_an_account: "J\xe1 possui uma conta?",
                dont_have_an_account: "N\xe3o possui uma conta?",
                log_in_here: "Entre aqui.",
                register_here: "Registre-se aqui.",
                confirm: {
                    title: "Voc\xea tem certeza?",
                    positive: "Sim",
                    negative: "N\xe3o"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Os endere\xe7os de email n\xe3o s\xe3o iguais, por favor, corrija e tente novamente."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Seu nome de usu\xe1rio ou senha est\xe3o incorretos.",
                banned: "Voc\xea foi expulso de nosso site. Motivo: %{reason}",
                captcha_incorrect: "Por favor, digite o reCAPTCHA corretamente e tente novemente.",
                confirmation_notice: "Sua conta ainda n\xe3o foi confirmada! Por favor, d\xea uma olhada em seu email pelo endere\xe7o de confirma\xe7\xe3o ou %{click_here}",
                confirmation_notice_click_here: "clique aqui para reenviar as instru\xe7\xf5es de ativa\xe7\xe3o."
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Nome Skype",
                    header: "Suas outras Contas",
                    website: "Site Pessoal",
                    paypal_error: "Seu ID de comercial PayPal est\xe1 incorreto.",
                    paypal_placeholder: "ID de Comerciante PayPal ou Endere\xe7o de email"
                },
                header: "Conta & Perfil",
                account_details: "Detalhes da Conta",
                location: {
                    header: "Localiza\xe7\xe3o",
                    placeholder: "(ex: Los Santos, San Andreas)",
                    select: "Selecione um pa\xeds..."
                },
                avatar: {
                    header: "Foto de Perfil",
                    upload: "Enviar uma foto de perfil personalizada:",
                    restrictions: "(Somente .jpg ou .png; Peso m\xe1ximo 750Kb; Tamanho recomendado de 256x256 pixels)",
                    select: "Ou selecione uma das imagens abaixo:",
                    error: {
                        image_size: "A foto excede nosso limite de 750Kb.",
                        image_type: "O tipo do arquivo enviado n\xe3o \xe9 permitido, por favor somente envie imagens .jpg ou .png."
                    }
                },
                submit: "Salvar Altera\xe7\xf5es",
                loading: {
                    saving_settings: "Salvando configura\xe7\xf5es...",
                    uploading_avatar: "Enviando imagem de perfil..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Criando arquivo...",
                saving_file: "Salvando arquivo...",
                uploading_screenshots: "Enviando captura de telas...",
                uploading_archive: "Enviando arquivo..."
            },
            error: {
                required: {
                    file_name: "Nome do arquivo \xe9 necess\xe1rio.",
                    author: "Nome do autor \xe9 necess\xe1rio.",
                    category: "Por favor, escolha uma categoria.",
                    file: "Por favor, escolha um arquivo para enviar."
                },
                restrictions: {
                    file_size: "Este arquivo excede nosso limite de 100Mb.",
                    file_type: "Este tipo de arquivo n\xe3o \xe9 suportado, por favor, inclua somente arquivos .zip, .rar e .oiv.",
                    image_limit: "Voc\xea atingiu o limite de 15 capturas de tela.",
                    image_size: "%{count} das suas capturas de telas n\xe3o foram adicionadas pois elas excederam nosso limite de 2Mb.",
                    image_type: "%{count} das suas capturas de telas n\xe3o foram adicionadas pois elas possuem um tipo de arquivo n\xe3o suportado - por favor, utilize somente imagens .jpg e .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Remover",
                confirm: "Voc\xea tem certeza que deseja remover este arquivo?"
            },
            report: {
                title: "Den\xfanciar",
                explain: "Por favor, explique porque voc\xea est\xe1 den\xfanciando este arquivo..."
            },
            rating: {
                cancel: "Cancelar Voto",
                star1: "Precisa ser mais Desenvolvido",
                star2: "OK",
                star3: "Bom",
                star4: "\xd3timo",
                star5: "Incr\xedvel!",
                average: {
                    one: "%{rating} / 5 estrelas (1 voto)",
                    other: "%{rating} / 5 estrelas (%{display_count} votos)"
                }
            }
        },
        video: {
            added_by: "Adicionado por %{username}",
            label: {
                one: "%{count} V\xeddeo",
                other: "%{count} V\xeddeos"
            },
            show_more: {
                one: "Mostar 1 outro v\xeddeo",
                other: "Mostar %{count} outros v\xeddeos"
            },
            add_modal: {
                header: "Adicionar um v\xeddeo para %{file_name}",
                instructions: "Digite a URL completa para seu v\xeddeo no YouTube, DailyMotion ou Vimeo:",
                placeholder: "(ex: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Se tudo parece estar correto, clique em "Adicionar V\xeddeo" abaixo para salvar.',
                error: {
                    parse: "N\xe3o foi possivel encontrar um v\xeddeo nesta URL. Por favor, verifique se est\xe1 utilizando um site suportado e tente novamente."
                }
            },
            "delete": {
                confirm: "Voc\xea tem certeza que deseja remover este v\xeddeo?"
            }
        },
        comment: {
            add: "Enviar Coment\xe1rio",
            label: {
                one: "1 Coment\xe1rio",
                other: "%{display_count} Coment\xe1rios"
            },
            author: "Autor",
            reply: "Responder",
            pin: {
                title: "Marcar Coment\xe1rio",
                pinned: "Coment\xe1rio Marcado",
                unpin: "Desmarcar Coment\xe1rio"
            },
            report: {
                title: "Den\xfanciar",
                explain: "Por favor, explique o motivo de estar den\xfanciando este coment\xe1rio..."
            },
            "delete": {
                title: "Remover",
                confirm: "Voc\xea tem certeza que deseja remover este coment\xe1rio?"
            },
            show_previous: {
                one: "Mostar 1 coment\xe1rio anterior",
                other: "Mostar %{count} coment\xe1rios anteriores"
            },
            placeholder: "Digite seu coment\xe1rio...",
            submit: "Enviar Coment\xe1rio",
            loading: "Enviando coment\xe1rio...",
            fetching: "Carregando coment\xe1rios...",
            flood_control: "Coment\xe1rios n\xe3o podem ser adicionados t\xe3o r\xe1pido. Por favor, espere alguns minutos e tente novamente mais tarde.",
            no_user_message: "Participe da discuss\xe3o! %{log_in} ou %{register} para poder comentar!",
            no_user_message_log_in: "Entre",
            no_user_message_register: "cadastre-se",
            expand: "Expandir para ler todo o coment\xe1rio",
            context: "Ver Contexto",
            rules: {
                agree: "Quando comentar, voc\xea estar\xe1 concordando a seguir as %{community_guidelines}.",
                agree_community_guidelines: "regras da comunidade do GTA5-Mods.com",
                offensive: "N\xe3o envie coment\xe1rios ofensivos sobre outros usu\xe1rios. Se voc\xea tiver algo contra algum coment\xe1rio, por favor, denuncie.",
                malware: "N\xe3o discuta sobre ou envie links para v\xedrus ou conte\xfado pirata.",
                rating: "N\xe3o deixe sua nota sem enviar uma cr\xedtica construtiva.",
                warning: "Violar qualquer uma dessas regras pode resultar em seu coment\xe1rio sendo removido ou sua conta expulsa!"
            }
        }
    },
    pt: {
        helpers: null
    },
    ro: {
        helpers: {
            label: {
                welcome: "Bun venit pe GTA5-Mods.com",
                site_info: "Sursa ta pentru cele mai noi moduri, scripturi, unelete si multe altele",
                intro: "Selecteaza una din urmatoarele categorii pentru cautarea celor mai noi moduri GTA 5",
                loading: "Se incarca...",
                cancel: "Anulare",
                send: "Trimite",
                donate: "Doneaza cu %{paypal}",
                fix_errors: "Te rugam sa corectezi urmatoarele erori",
                user: {
                    email: "Adresa de e-mail",
                    email_confirmation: "Confirm email address",
                    username: "Nume de utilizator",
                    password: "Parola",
                    password_new: "Parola noua",
                    password_confirmation: "Confirma parola",
                    password_confirmation_new: "Confirma noua parola",
                    password_requirements: {
                        one: "%{count} caractere minim",
                        few: "%{count} caractere minim",
                        other: "%{count} caractere minim"
                    },
                    remember_me: "Tine-ma logat",
                    current_password: "Parola curenta",
                    new_password: "Parola noua"
                },
                filter: "Filtru:",
                sort_by: "Sorteaza dupa",
                time_frame: "Vechime:",
                back_to_login: "Inapoi la pagina de logare",
                have_an_account: "Ai deja un cont?",
                dont_have_an_account: "Nu ai un cont inregistrat inca?",
                log_in_here: "Logheaza-te aici",
                register_here: "Inregistreaza-te aici",
                confirm: {
                    title: "Esti sigur?",
                    positive: "Da",
                    negative: "Nu"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "The confirmation email address doesn't match, please try again."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Combinatia numelui de utilizator si a parolei sunt incorecte.",
                banned: "Contul tau a fost banat pe acest site. Motiv:  %{reason}",
                captcha_incorrect: "Te rugam sa completezi casuta reCaptcha din nou.",
                confirmation_notice: "Your account has not been confirmed yet! Please check your email inbox for the confirmation link or %{click_here}.",
                confirmation_notice_click_here: "click here to resend the confirmation instructions"
            }
        },
        settings: {
            account: {
                header: "Cont si Profil",
                account_details: "Detalii cont",
                location: {
                    header: "Locatie",
                    placeholder: "(exemplu: Los Santos, San Andreas)",
                    select: "Selecteaza tara..."
                },
                social: {
                    header: "Alte conturi online",
                    website: "Website personal",
                    paypal_error: "ID-ul de comerciant al contului de PayPal este invalid.",
                    paypal_placeholder: "ID-ul de PayPAl sau adresa de e-mail"
                },
                avatar: {
                    header: "Poza de profil",
                    upload: "Incarca o poza pentru profil:",
                    restrictions: "(.jpg sau .png doar; Maxim 750Kb; Recomandat 256x256 pixeli)",
                    select: "Sau selecteaza una de mai jos:",
                    error: {
                        image_size: "Fisierul a atins limita de 750kb.",
                        image_type: "Extensia fisierului nu este permisa, te rugam sa incarci doar fisiere cu extensia .jpg si .png"
                    }
                },
                submit: "Salveaza schimbarile",
                loading: {
                    saving_settings: "Se salveaza schimbarile...",
                    uploading_avatar: "Poza de profil se incarca..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Creare fisier...",
                saving_file: "Fisierul se salveaza...",
                uploading_screenshots: "Incarcare imagini...",
                uploading_archive: "Incarcare arhiva..."
            },
            error: {
                required: {
                    file_name: "Numele fisierului este obligatoriu.",
                    author: "Numele autorului este obligatoriu.",
                    category: "Te rugam selecteaza o categorie.",
                    file: "Te rugam selecteaza un fsier pentru upload."
                },
                restrictions: {
                    file_size: "Fisierul a depasit limita de 100mb.",
                    file_type: "Extensia fisierului nu este permisa, te rugam incarca doar fisiere in format .zip, .rar sau .oiv.",
                    image_limit: "Ai atins limita maxima de 15 imagini.",
                    image_size: "%{count} imaginilor tale nu au fost adaugate pentru ca au depasit 2 mb ca marime.",
                    image_type: "%{count} imaginilor tale nu au fost adaugate pentru ca formatul lor nu este permis - te rugam incarca doar imagini in format .jpg sau .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Sterge",
                confirm: "Esti sigur ca doresti sa stergi acest fisier?"
            },
            report: {
                title: "Report",
                explain: "Te rugam sa explici de ce raportezi acest fisier..."
            },
            rating: {
                cancel: "Cancel Rating",
                star1: "Needs Work",
                star2: "OK",
                star3: "Good",
                star4: "Great",
                star5: "Awesome!",
                average: {
                    one: "%{rating} / 5 stars (1 vote)",
                    few: "%{rating} / 5 stars (%{display_count} votes)",
                    other: "%{rating} / 5 stars (%{display_count} votes)"
                }
            }
        },
        video: {
            added_by: "Added by %{username}",
            label: {
                one: "%{count} Video",
                few: "%{count} Video-uri",
                other: "%{count} Video-uri"
            },
            show_more: {
                one: "Arata inca un video",
                few: "Arata %{count} video-uri",
                other: "Arata %{count} video-uri"
            },
            add_modal: {
                header: "Adauga un video la %{file_name}",
                instructions: "Adauga link-ul intreg catre vide-ul dupa YouTube, DailyMotion sau Vimeo:",
                placeholder: "(Exemplu: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: "Daca totul arata bine, apasa pe Adauga video pentru a salva.",
                error: {
                    parse: "Link-ul introdus nu este suportat, te rugam sa introduci un link care este suportat de website-ul nostru."
                }
            },
            "delete": {
                confirm: "Esti sigur ca doresti sa stergi acest video?"
            }
        },
        comment: {
            add: "Adauga comentariu",
            label: {
                one: "1 Comentariu",
                few: "%{display_count} Comentarii",
                other: "%{display_count} Comentarii"
            },
            author: "Autor",
            reply: "Raspunde",
            pin: {
                title: "Pin Comment",
                pinned: "Pinned Comment",
                unpin: "Unpin Comment"
            },
            report: {
                title: "Report",
                explain: "Te rugam sa detaliezi motivul raportarii acesti comentariu..."
            },
            "delete": {
                title: "Sterge",
                confirm: "Esti sigur ca doresti sa stergi acest comentariu?"
            },
            show_previous: {
                one: "Arata comentariul anterior",
                few: "Arata %{count} comentarii anterioare",
                other: "Arata %{count} comentarii anterioare"
            },
            placeholder: "Adauga un comentariu....",
            submit: "Posteaza comentariu",
            loading: "Comentariul este in curs de postare...",
            fetching: "Comentariile se incarca...",
            flood_control: "Comentariile nu pot fi adaugate atat de rapid, te rugam asteapta cateva minute si incearca din nou.",
            no_user_message: "Alatura-te conversatiei! %{log_in} sau %{register} pentru crearea unui cont ca sa poti scrie comentarii.",
            no_user_message_log_in: "Logheaza-te",
            no_user_message_register: "Inregistreaza-te",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    ru: {
        helpers: {
            label: {
                clear_all: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0451",
                welcome: "\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 GTA5-Mods.com",
                site_info: "\u0412\u0430\u0448 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u043c\u043e\u0434\u043e\u0432 \u0434\u043b\u044f GTA 5: \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439, \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432, \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c \u0434\u043b\u044f \u043c\u043e\u0434\u0434\u0438\u043d\u0433\u0430 \u0438 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e",
                intro: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043c\u043e\u0434\u044b \u0434\u043b\u044f GTA 5",
                loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
                cancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
                send: "\u041f\u043e\u0441\u043b\u0430\u0442\u044c",
                donate: "\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 %{paypal}",
                fix_errors: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438:",
                user: {
                    email: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",
                    email_confirmation: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",
                    username: "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                    password: "\u041f\u0430\u0440\u043e\u043b\u044c",
                    password_new: "\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    password_confirmation: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",
                    password_confirmation_new: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    password_requirements: {
                        one: "(\u041c\u0438\u043d\u0438\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b)",
                        few: "(\u041c\u0438\u043d\u0438\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u0430)",
                        many: "(\u041c\u0438\u043d\u0438\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)",
                        other: "(\u041c\u0438\u043d\u0438\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)"
                    },
                    remember_me: "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",
                    current_password: "\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    new_password: "\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"
                },
                filter: "\u0424\u0438\u043b\u044c\u0442\u0440:",
                sort_by: "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:",
                time_frame: "\u0417\u0430:",
                back_to_login: "\u041d\u0430\u0437\u0430\u0434 \u043a\u043e \u0432\u0445\u043e\u0434\u0443",
                have_an_account: "\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c?",
                dont_have_an_account: "\u041d\u0435\u0442\u0443 \u043f\u0440\u043e\u0444\u0438\u043b\u044f?",
                log_in_here: "\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c.",
                register_here: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0437\u0434\u0435\u0441\u044c.",
                confirm: {
                    title: "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",
                    positive: "\u0414\u0430",
                    negative: "\u041d\u0435\u0442"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u0430 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0432\u0435\u0440\u043d\u044b.",
                banned: "\u0412\u044b \u0431\u044b\u043b\u0438 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u0441\u0430\u0439\u0442\u0435. \u041f\u0440\u0438\u0447\u0438\u043d\u0430: %{reason}",
                captcha_incorrect: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430 \u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 reCAPTCHA \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.",
                confirmation_notice: "\u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0435\u0449\u0451 \u043d\u0435 \u0431\u044b\u043b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043d! \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448\u0443 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443 \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0438\u0441\u044c\u043c\u0430 \u0441 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 %{click_here}.",
                confirmation_notice_click_here: "\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c \u0447\u0442\u043e\u0431\u044b \u0435\u0449\u0451 \u0440\u0430\u0437 \u043e\u0442\u043e\u0441\u043b\u0430\u0442\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044e"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "\u0418\u043c\u044f Skype",
                    header: "\u0414\u0440\u0443\u0433\u0438\u0435 \u041e\u043d\u043b\u0430\u0439\u043d \u041f\u0440\u043e\u0444\u0438\u043b\u0438",
                    website: "\u041b\u0438\u0447\u043d\u044b\u0439 \u0412\u0435\u0431\u0441\u0430\u0439\u0442",
                    paypal_error: "PayPal ID, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0432\u0432\u0435\u043b\u0438 - \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439.",
                    paypal_placeholder: "PayPal ID \u0438\u043b\u0438 \u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"
                },
                header: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c",
                account_details: "\u0414\u0430\u043d\u043d\u044b\u0435 \u041f\u0440\u043e\u0444\u0438\u043b\u044f",
                location: {
                    header: "\u041c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",
                    placeholder: "(\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Los Santos, San Andreas)",
                    select: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0421\u0442\u0440\u0430\u043d\u0443"
                },
                avatar: {
                    header: "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u041f\u0440\u043e\u0444\u0438\u043b\u044f",
                    upload: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
                    restrictions: "(\u0422\u043e\u043b\u044c\u043a\u043e .jpg \u0438\u043b\u0438 .png; \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 750\u043a\u0431; \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f 256x256 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439)",
                    select: "\u0418\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445:",
                    error: {
                        image_size: "\u042d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0431\u043e\u043b\u044c\u0448\u0435 750\u043a\u0431.",
                        image_type: "\u042d\u0442\u043e\u0442 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e .jpg \u0438 .png \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"
                    }
                },
                submit: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
                loading: {
                    saving_settings: "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a...",
                    uploading_avatar: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u0421\u043e\u0437\u0434\u0430\u044e \u0444\u0430\u0439\u043b...",
                saving_file: "\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u044e \u0444\u0430\u0439\u043b...",
                uploading_screenshots: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b...",
                uploading_archive: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0430\u0440\u0445\u0438\u0432..."
            },
            error: {
                required: {
                    file_name: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430.",
                    author: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430.",
                    category: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e.",
                    file: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."
                },
                restrictions: {
                    file_size: "\u042d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 100\u041c\u0411.",
                    file_type: "\u042d\u0442\u043e\u0442 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u043f\u043e\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e .zip, .rar \u0438 .oiv \u0444\u0430\u0439\u043b\u044b.",
                    image_limit: "\u0412\u044b \u0434\u043e\u0441\u0442\u0438\u0433\u043b\u0438 \u043b\u0438\u043c\u0438\u0442 \u0432 15 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432.",
                    image_size: "%{count} \u0432\u0430\u0448\u0438\u0445 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432 (-\u0430) \u043d\u0435 \u0431\u044b\u043b\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 2\u041c\u0431.",
                    image_type: "%{count} \u0432\u0430\u0448\u0438\u0445 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432 (-\u0430) \u043d\u0435 \u0431\u044b\u043b\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u0445 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e .jpg \u0438 .png \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f."
                }
            }
        },
        user_file: {
            "delete": {
                title: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                confirm: "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b?"
            },
            report: {
                title: "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c",
                explain: "\u041e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0444\u0430\u0439\u043b\u0435..."
            },
            rating: {
                cancel: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u041e\u0446\u0435\u043d\u043a\u0443",
                star1: "\u041d\u0443\u0436\u043d\u043e \u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
                star2: "\u041e\u043a",
                star3: "\u0425\u043e\u0440\u043e\u0448\u043e",
                star4: "\u041e\u0442\u043b\u0438\u0447\u043d\u043e",
                star5: "\u0412\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u043e!",
                average: {
                    one: "%{rating} / 5 \u0437\u0432\u0451\u0437\u0434 (1 \u0433\u043e\u043b\u043e\u0441)",
                    few: "%{rating} / 5 \u0437\u0432\u0451\u0437\u0434 (%{display_count} \u0433\u043e\u043b\u043e\u0441\u0430)",
                    many: "%{rating} / 5 \u0437\u0432\u0451\u0437\u0434 (%{display_count} \u0433\u043e\u043b\u043e\u0441\u043e\u0432)",
                    other: "%{rating} / 5 \u0437\u0432\u0451\u0437\u0434 (%{display_count} \u0433\u043e\u043b\u043e\u0441\u043e\u0432)"
                }
            }
        },
        video: {
            added_by: "\u0414\u043e\u0431\u0430\u0432\u0438\u043b %{username}",
            label: {
                one: "%{count} \u0432\u0438\u0434\u0435\u043e",
                few: "%{count} \u0432\u0438\u0434\u0435\u043e",
                many: "%{count} \u0432\u0438\u0434\u0435\u043e",
                other: "%{count} \u0432\u0438\u0434\u0435\u043e"
            },
            show_more: {
                one: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u043e \u0432\u0438\u0434\u0435\u043e",
                few: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 %{count} \u0432\u0438\u0434\u0435\u043e",
                many: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 %{count} \u0432\u0438\u0434\u0435\u043e",
                other: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 %{count} \u0432\u0438\u0434\u0435\u043e"
            },
            add_modal: {
                header: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u0434\u043b\u044f %{file_name}",
                instructions: "\u0412\u0432\u0435\u0441\u0442\u0438 \u043f\u043e\u043b\u043d\u044b\u0439 URL \u0430\u0434\u0440\u0435\u0441 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube, DailyMotion \u0438\u043b\u0438 Vimeo:",
                placeholder: "(\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\u0435\u0441\u043b\u0438 \u0432\u0441\u0451 \u0445\u043e\u0440\u043e\u0448\u043e, \u0442\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e", \u0447\u0442\u043e \u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0433\u043e.',
                error: {
                    parse: "\u041c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u0441 \u044d\u0442\u043e\u0433\u043e URL \u0430\u0434\u0440\u0435\u0441\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0431\u0441\u0430\u0439\u0442 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."
                }
            },
            "delete": {
                confirm: "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e?"
            }
        },
        comment: {
            add: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
            label: {
                one: "1 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                few: "%{display_count} \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f",
                many: "%{display_count} \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432",
                other: "%{display_count} \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"
            },
            author: "\u0410\u0432\u0442\u043e\u0440",
            reply: "\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c",
            pin: {
                title: "\u0417\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                pinned: "\u0417\u0430\u043a\u0440\u0435\u043f\u043b\u0451\u043d\u043d\u044b\u0439 \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                unpin: "\u041e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"
            },
            report: {
                title: "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c",
                explain: "\u041e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438..."
            },
            "delete": {
                title: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                confirm: "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439?"
            },
            show_previous: {
                one: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                few: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c %{count} \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f",
                many: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c %{count} \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432",
                other: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c %{count} \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"
            },
            placeholder: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...",
            submit: "\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
            loading: "\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u044b\u0432\u0430\u044e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...",
            fetching: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438...",
            flood_control: "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.",
            no_user_message: "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043a \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044e! %{log_in} \u0438\u043b\u0438 %{register}, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c.",
            no_user_message_log_in: "\u0412\u043e\u0439\u0434\u0438\u0442\u0435",
            no_user_message_register: "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c",
            expand: "\u0420\u0430\u0441\u0448\u0438\u0440\u044c\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
            context: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",
            rules: {
                agree: "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u0443\u044f \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c %{community_guidelines}",
                agree_community_guidelines: "\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 GTA5-Mods.com",
                offensive: "\u041d\u0435 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0439\u0442\u0435 \u043e\u0441\u043a\u043e\u0440\u0431\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u043c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c.",
                malware: "\u041d\u0435 \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u0442\u044c \u0438\u043b\u0438 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u0438\u043b\u0438 \u043f\u0438\u0440\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442.",
                rating: "\u041d\u0435 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0446\u0435\u043d\u043e\u043a, \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043e\u0442\u0437\u044b\u0432\u044b \u0438\u043b\u0438 \u043a\u0440\u0438\u0442\u0438\u043a\u0443.",
                warning: "\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043b\u044e\u0431\u043e\u0433\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u043f\u0440\u0430\u0432\u0438\u043b \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u0438\u043b\u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0435 \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438."
            }
        }
    },
    sk: {
        helpers: null
    },
    sl: {
        helpers: {
            label: {
                clear_all: "Po\u010disti vse",
                welcome: "Dobrodo\u0161li na GTA5-Mods.com",
                site_info: "Va\u0161 vir za najnovej\u0161e GTA 5 avtomobile, skripte, orodja in \u0161e ve\u010d.",
                intro: "Izberite eno od na\u0161tetih kategorij za brskanje po najnovej\u0161ih dodatkih:",
                loading: "Nalaganje...",
                cancel: "Prekli\u010di",
                send: "Po\u0161lji",
                donate: "Donirajte z %{paypal}",
                fix_errors: "Prosimo popravite naslednje napake:",
                user: {
                    email: "E-po\u0161tni naslov",
                    email_confirmation: "Potrditveni e-po\u0161tni naslov",
                    username: "Uporabni\u0161ko ime",
                    password: "Geslo",
                    password_new: "Novo geslo",
                    password_confirmation: "Potrditveno geslo",
                    password_confirmation_new: "Potrdite novo geslo",
                    password_requirements: {
                        one: "%{count} znakov minimalno",
                        two: "",
                        few: "",
                        other: "%{count} znakov minimalno"
                    },
                    remember_me: "Shranite prijavne podatke",
                    current_password: "Trenutno geslo",
                    new_password: "Novo geslo"
                },
                filter: "Filter:",
                sort_by: "Razporedi po:",
                time_frame: "Obdobje:",
                back_to_login: "Nazaj na prijavo",
                have_an_account: "\u017de imate ra\u010dun?",
                dont_have_an_account: "\u0160e nimate ra\u010duna?",
                log_in_here: "Prijavite se tukaj.",
                register_here: "Registrirajte se tukaj.",
                confirm: {
                    title: "Ali ste prepri\u010dani?",
                    positive: "Da",
                    negative: "Ne"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Potrditveni e-po\u0161tni naslov se ne ujema, poskusite ponovno"
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Va\u0161a kombinacija uporabni\u0161kega imena in gesla je nepravilna,",
                banned: "Prepovedan dostop do spletne strani. Razlog: %{reason}",
                captcha_incorrect: "Prosimo, da preverite vnos znakov za preverjanje prisotnosti in poskusite ponovno.",
                confirmation_notice: "Va\u0161 ra\u010dun \u0161e ni potrjen. Prosimo preverite va\u0161 e-po\u0161tni naslov kjer se nahaja povezava za potrditev ali pa %{click_here}",
                confirmation_notice_click_here: "kliknite tukaj za ponovno po\u0161iljanje potrditvene povezave"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype",
                    header: "Ostali ra\u010duni",
                    website: "Spletna stran",
                    paypal_error: "PayPal ID uporabnika, ki ste ga vnesli ni pravilen.",
                    paypal_placeholder: "PayPal ID uporabnika ali e-po\u0161tni naslov"
                },
                header: "Ra\u010dun in profil",
                account_details: "Podatki ra\u010duna",
                location: {
                    header: "Lokacija",
                    placeholder: "(npr. Los Santos, San Andreas)",
                    select: "Izberi dr\u017eavo..."
                },
                avatar: {
                    header: "Profilna slika",
                    upload: "Nalo\u017eite svojo profilno sliko:",
                    restrictions: "(samo .jpg ali .png; Najve\u010d 750Kb; predlagana dimenzija 256x256)",
                    select: "oz. izberite eno od spodnjih sli\u010dic",
                    error: {
                        image_size: "Ta datoteka presega limit 750Kb)",
                        image_type: "Ta vrsta datoteke ni podprta. Dovoljena formata sta samo .jpg in .png)"
                    }
                },
                submit: "Shrani spremembe",
                loading: {
                    saving_settings: "Shranjujem nastavitve...",
                    uploading_avatar: "Nalaganje profilne slike..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Kreiranje datoteke...",
                saving_file: "Shranjevanje datoteke...",
                uploading_screenshots: "Nalaganje slik/e...",
                uploading_archive: "Nalaganje arhiva..."
            },
            error: {
                required: {
                    file_name: "Ime datoteke je potrebno.",
                    author: "Ime avtorja je potrebno.",
                    category: "Prosimo izberite kategorijo.",
                    file: "Prosimo izberite datoteko za nalaganje."
                },
                restrictions: {
                    file_size: "Ta datoteka presega omejitev 100Mb.",
                    file_type: "Ta vrsta datoteke ni podprta. Prosimo da nalo\u017eite samo .zip, .rar ali .oiv arhiv.",
                    image_limit: "Dosegli ste omejitev 15 slik na prispevek.",
                    image_size: "%{count} va\u0161ih slik ni bilo nalo\u017eenih, ker presegajo omejitev 2Mb.",
                    image_type: "%{count} va\u0161ih slik ni bilo nalo\u017eenih, ker njihov format ni podprt - Prosimo da nalo\u017eite samo slike formata .jpg in .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Izbris",
                confirm: "Ali ste prepri\u010dani, da \u017eelite izbrisati to datoteko?"
            },
            report: {
                title: "Prijava",
                explain: "Prosimo za pojasnilo zakaj prijavljate to datoteko..."
            },
            rating: {
                cancel: "Brez ocene",
                star1: "Potrebno posodobitve",
                star2: "V redu",
                star3: "Dobro",
                star4: "Odli\u010dno",
                star5: "Zelo odli\u010dno!",
                average: {
                    one: "%{rating} / 5 zvezdic (1 glas)",
                    two: "%{rating} / 5 zvezdic (%{display_count} glasov)",
                    few: "%{rating} / 5 zvezdic (%{display_count} glasov)",
                    other: "%{rating} / 5 zvezdic (%{display_count} glasov)"
                }
            }
        },
        video: {
            added_by: "Dodal, %{username}",
            label: {
                one: "%{count} Video",
                two: "%{count} Videa",
                few: "",
                other: "%{count} Videov"
            },
            show_more: {
                one: "Poka\u017ei \u0161e 1 video",
                two: "Poka\u017ei \u0161e 2 videa",
                few: "",
                other: "Poka\u017ei %{count} ve\u010d videov"
            },
            add_modal: {
                header: "Dodajanje videa k %{file_name}",
                instructions: "Vpi\u0161ite celotno povezavo va\u0161ega videa na YouTube, DailyMotion ali Vimeo:",
                placeholder: "(npr. youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\u010ce ste preverili povezavo, kliknite "Dodaj video".',
                error: {
                    parse: "Ta povezava za video ne deluje, prosimo preverite \u010de je video objavljen na podprti spletni strani in poskusite ponovno."
                }
            },
            "delete": {
                confirm: "Ali ste prepri\u010dani, da \u017eelite odstraniti ta video?"
            }
        },
        comment: {
            add: "Dodaj komentar",
            label: {
                one: "1 Komentar",
                two: "%{display_count} Komentarja",
                few: "%{display_count} Komentarjev",
                other: "%{display_count} Komentarjev"
            },
            author: "Avtor",
            reply: "Odgovori",
            pin: {
                title: "Pripopaj komentar",
                pinned: "Pripopan komentar",
                unpin: "Odpopaj komentar"
            },
            report: {
                title: "Prijava",
                explain: "Prosimo za pojasnilo zakaj prijavljate ta komentar..."
            },
            "delete": {
                title: "Izbris",
                confirm: "Ali ste prepri\u010dani, da \u017eelite izbrisati ta komentar?"
            },
            show_previous: {
                one: "Poka\u017ei prej\u0161nji komentar",
                two: "Poka\u017ei prej\u0161nja komentarja",
                few: "",
                other: "Poka\u017ei prej\u0161njih %{count} komentarjev"
            },
            placeholder: "Dodaj svoj komentar...",
            submit: "Objavi komentar",
            loading: "Objavljanje komentarja...",
            fetching: "Nalaganje komentarjev...",
            flood_control: "Za dodajanje novega komentarja je treba po\u010dakati nekaj minut.",
            no_user_message: "Za komentiranje morate biti %{log_in} ali %{register}.",
            no_user_message_log_in: "prijavljeni",
            no_user_message_register: "registrirani",
            expand: "Raz\u0161iri za ogled celotnega komentarja",
            context: "Poglej vsebino",
            rules: {
                agree: "Z komentiranjem se strinjate, da upo\u0161tevate %{community_guidelines}",
                agree_community_guidelines: "pravila skupnosti GTA5-Mods.com",
                offensive: "Prepovedano je objavljanje \u017ealjivih komentarjev, ki so naslovljeni na ostale uporabnike. \u010ce opazite \u017ealjiv komentar vas prosimo, da ga prijavite.",
                malware: "Ne razpravljajte in ne objavljajte povezav do sumljive ali piratske vsebine.",
                rating: "Ne podajajte ocene brez ustreznega razloga oz. kritike.",
                warning: "Neupo\u0161tevanje navodil vas lahko pripelje do tega, da bo va\u0161 komentar odstranjen ali pa va\u0161 ra\u010dun zaklenjen."
            }
        }
    },
    sr: {
        helpers: null
    },
    sv: {
        helpers: {
            label: {
                clear_all: "Rensa allt",
                welcome: "V\xe4lkomen till GTA5-Mods.com",
                site_info: "Din k\xe4lla f\xf6r de senaste GTA 5 bil mods, skript, verktyg och mer.",
                intro: "V\xe4lj en av de f\xf6ljande kategorier f\xf6r att hitta det senaste av GTA 5 modden:",
                loading: "Laddar...",
                cancel: "Avbryt",
                send: "Skicka",
                donate: "Donera med %{paypal}",
                fix_errors: "Please fix the following errors:",
                user: {
                    email: "E-postadress",
                    email_confirmation: "Bekr\xe4fta E-postadress",
                    username: "Anv\xe4ndarnamn",
                    password: "L\xf6senord",
                    password_new: "Nytt l\xf6senord",
                    password_confirmation: "Bekr\xe4fta l\xf6senordet",
                    password_confirmation_new: "Bekr\xe4fta det nya l\xf6senordet",
                    password_requirements: {
                        one: "(minimalt \xe4r %{count} bokstav)",
                        other: "(minimalt \xe4r %{count} bokst\xe4ver)"
                    },
                    remember_me: "Kom ih\xe5g mig",
                    current_password: "Nuvarande l\xf6senord",
                    new_password: "Nytt l\xf6senord"
                },
                filter: "Filtrering",
                sort_by: "Sortera efter:",
                time_frame: "Sedan",
                back_to_login: "Tillbaka till logga in",
                have_an_account: "Har du redan ett konto?",
                dont_have_an_account: "Har du inget konto?",
                log_in_here: "Logga in h\xe4r.",
                register_here: "Skapa konto",
                confirm: {
                    title: "\xc4r du s\xe4ker?",
                    positive: "Ja",
                    negative: "Nej"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Bekr\xe4ftelse e-postadressen st\xe4mmer inte \xf6verens, v\xe4nligen f\xf6rs\xf6k igen."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Ditt anv\xe4ndarnamn och l\xf6senord kombination \xe4r felaktig.",
                banned: "Du har blivit bannad fr\xe5n hemsidan. Anledning: %{reason}",
                captcha_incorrect: "V\xe4nligen fyll i reCAPTCHA rutan och f\xf6rs\xf6k igen.",
                confirmation_notice: "Ditt konto har inte bekr\xe4ftats \xe4n, v\xe4nligen kolla din inkorg f\xf6r bekr\xe4ftelse l\xe4nk eller %{click_here}.",
                confirmation_notice_click_here: "Klicka h\xe4r f\xf6r att skicka bekr\xe4ftelse instruktionerna"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype namn",
                    header: "Andra online konton",
                    website: "Personlig hemsida",
                    paypal_error: "PayPal handelsfartyg ID du angav \xe4r ogiltigt.",
                    paypal_placeholder: "PayPal Merchant ID eller e-postadress"
                },
                header: "Konto & Profil",
                account_details: "Konto detaljer",
                location: {
                    header: "Plats",
                    placeholder: "(t.ex Los Santos, San Andreas)",
                    select: "V\xe4lj land..."
                },
                avatar: {
                    header: "Profil bild",
                    upload: "Ladda upp en anpassad bild:",
                    restrictions: "( .jpg eller .png endast; Maximal 750Kb ; Rekommenderat 256x256 pixlar)",
                    select: "Eller v\xe4lj ett under:",
                    error: {
                        image_size: "Filen \xe4r \xf6ver v\xe5r 750Kb gr\xe4ns.",
                        image_type: "Denna filtyp st\xf6ds inte, v\xe4nligen och bara ladda upp .jpg och .png bilder."
                    }
                },
                submit: "Spara \xe4ndringar",
                loading: {
                    saving_settings: "Sparar inst\xe4llningar...",
                    uploading_avatar: "Laddar upp en profil bild..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Skapar fil...",
                saving_file: "Sparar fil...",
                uploading_screenshots: "Laddar upp bilder...",
                uploading_archive: "Laddar upp akriv..."
            },
            error: {
                required: {
                    file_name: "Filnamn kr\xe4vs.",
                    author: "Skaparens namn kr\xe4vs.",
                    category: "V\xe4lj en kategori.",
                    file: "V\xe4lj en fil att ladda upp."
                },
                restrictions: {
                    file_size: "Filen \xe4r \xf6ver v\xe5r 100Mb gr\xe4ns.",
                    file_type: "Denna filtyp st\xf6ds inte, var v\xe4nligen och bara ladda .zip, .rar och .oiv filer.",
                    image_limit: "Du har n\xe5tt gr\xe4nsen f\xf6r 15 bilder.",
                    image_size: "%{count} av dina bilder laddades inte upp eftersom de \xe4r \xf6ver 2Mb gr\xe4nsen.",
                    image_type: "%{count} av dina bilder var inte uppladdade d\xe5 det format inte st\xf6ds - var sn\xe4ll och bara ladda upp .jpg och .png bilder."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Radera",
                confirm: "\xe4r du s\xe4ker p\xe5 att du vill ta bort denna fil?"
            },
            report: {
                title: "Rapportera",
                explain: "Var v\xe4nlig och f\xf6rklara varf\xf6r du rapporterar denna fil..."
            },
            rating: {
                cancel: "Avbryt Betygss\xe4ttning",
                star1: "Beh\xf6ver mer arbete",
                star2: "OK",
                star3: "Bra",
                star4: "Toppen",
                star5: "H\xe4ftigt!",
                average: {
                    one: "%{rating} / 5 stj\xe4rnor (1 r\xf6st)",
                    other: "%{rating} / 5 stj\xe4rnor (%{display_count} r\xf6ster)"
                }
            }
        },
        video: {
            added_by: "Tillagt av %{username}",
            label: {
                one: "%{count} Video",
                other: "%{count} Videos"
            },
            show_more: {
                one: "Visa 1 till video",
                other: "Visa %{count} mer videos"
            },
            add_modal: {
                header: "Adda en video till %{file_name}",
                instructions: "Ange den fullst\xe4ndiga webbadressen till din video p\xe5 YouTube, Dailymotion eller Vimeo :",
                placeholder: "(t.ex youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'Om allt ser bra ut, var noga med att trycka p\xe5 "L\xe4gg till video" under f\xf6r att spara det.',
                error: {
                    parse: "Vi kunde inte ta videon fr\xe5n den URL du angav, var sn\xe4ll och bekr\xe4fta att du anv\xe4nder den webbplats som st\xf6ds och f\xf6rs\xf6k igen."
                }
            },
            "delete": {
                confirm: "\xc4r du s\xe4ker p\xe5 att radera denna video?"
            }
        },
        comment: {
            add: "Kommentera",
            label: {
                one: "1 Kommentar",
                other: "%{display_count} Kommentarer"
            },
            author: "Skapare",
            reply: "Svara",
            pin: {
                title: "stifta kommentaren",
                pinned: "Kommentaren har stiftas",
                unpin: "Ta bort stiftningen"
            },
            report: {
                title: "Rapportera",
                explain: "F\xf6rklara varf\xf6r du vill rapporterara denna h\xe4r kommentaren..."
            },
            "delete": {
                title: "Radera",
                confirm: "\xc4r du s\xe4ker p\xe5 att du ska ta bort denna kommentaren?"
            },
            show_previous: {
                one: "Visa 1 f\xf6reg\xe5ende kommentar",
                other: "Visa %{count} f\xf6reg\xe5ende kommentarer"
            },
            placeholder: "L\xe4gg till din kommentar...",
            submit: "Posta kommentaren",
            loading: "Postar kommentaren...",
            fetching: "Laddar kommentarer...",
            flood_control: "Kommentarer kan inte l\xe4ggas s\xe5 snabbt, v\xe4nta n\xe5gra minuter och f\xf6rs\xf6k igen.",
            no_user_message: "Joina konversation! %{log_in} eller %{register} ett konto f\xf6r att kunna kommentera.",
            no_user_message_log_in: "Logga in",
            no_user_message_register: "skapa",
            expand: "Expandera f\xf6r att l\xe4sa fulla kommentaren",
            context: "Visa Sammanhang",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com riktlinjer f\xf6r sajten",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    sw: {
        helpers: null
    },
    ta: {
        helpers: null
    },
    th: {
        helpers: null
    },
    tl: {
        helpers: null
    },
    tr: {
        helpers: {
            label: {
                welcome: "GTA5-Mods.com'a hos geldiniz",
                site_info: "En son \xe7\u0131kan GTA 5 araba modlar\u0131, scriptler, ara\xe7lar ve daha fazlas\u0131 i\xe7in kayna\u011f\u0131n\u0131z",
                intro: "GTA 5 modlar\u0131na g\xf6z gezdirmek i\xe7in kategorilerden birini se\xe7iniz:",
                loading: "Y\xfckleniyor...",
                cancel: "\u0130ptal",
                send: "G\xf6nder",
                donate: "%{paypal} ile Ba\u011f\u0131\u015fta Bulunun",
                fix_errors: "L\xfctfen bahsi ge\xe7en hatalar\u0131 d\xfczeltiniz:",
                user: {
                    email: "E-mail adresi",
                    email_confirmation: "E-mail adresini tekrar yaz\u0131n\u0131z",
                    username: "Kullan\u0131c\u0131 Ad\u0131",
                    password: "\u015eifre",
                    password_new: "Yeni \u015fifre",
                    password_confirmation: "\u015eifreyi onayla",
                    password_confirmation_new: "Yeni \u015fifreyi onayla",
                    password_requirements: {
                        one: "(en az %{count} karakter gereklidir)",
                        other: "(en az %{count} karakter gereklidir)"
                    },
                    remember_me: "Beni hat\u0131rla",
                    current_password: "\u015eu anki \u015fifre",
                    new_password: "Yeni \u015fifre"
                },
                filter: "Filtre:",
                sort_by: "S\u0131ralama \xf6l\xe7\xfct\xfc:",
                time_frame: "Tarih:",
                back_to_login: "Giri\u015fe geri d\xf6n",
                have_an_account: "Zaten hesab\u0131n\u0131z var m\u0131?",
                dont_have_an_account: "Hesab\u0131n\u0131z yok mu?",
                log_in_here: "Buradan giri\u015f yap\u0131n.",
                register_here: "Buradan kay\u0131t olun.",
                confirm: {
                    title: "Emin misiniz?",
                    positive: "Evet",
                    negative: "Hay\u0131r"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "Onaylama e-mail adresi uyu\u015fmuyor, l\xfctfen tekrar deneyiniz."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "Kullan\u0131c\u0131 ad\u0131 ve \u015fifre kombinasyonunuz yanl\u0131\u015f.",
                banned: "Bu siteden banland\u0131n\u0131z. Sebep: %{reason}",
                captcha_incorrect: "L\xfctfen reCAPTCHA kutusunu doldurun ve tekrar deneyin.",
                confirmation_notice: "Hesab\u0131n\u0131z hen\xfcz onaylanmad\u0131! L\xfctfen mailinizdeki gelen kutunuzu kontrol edin veya %{click_here}.",
                confirmation_notice_click_here: "onaylama talimatlar\u0131n\u0131 tekrar g\xf6ndermek i\xe7in buraya t\u0131klay\u0131n\u0131z"
            }
        },
        settings: {
            account: {
                header: "Hesap ve Profil",
                account_details: "Hesap Detaylar\u0131",
                location: {
                    header: "Yer",
                    placeholder: "(Los Santos, San Andreas vb.)",
                    select: "\xdclke Se\xe7iniz..."
                },
                social: {
                    header: "Di\u011fer Online Hesaplar",
                    website: "Ki\u015fisel Website",
                    paypal_error: "Girdi\u011finiz PayPal T\xfcccar ID'si yanl\u0131\u015ft\u0131r.",
                    paypal_placeholder: "PayPal T\xfcccar ID'si veya e-mail adresi"
                },
                avatar: {
                    header: "Profil Foto\u011fraf\u0131",
                    upload: "\xd6zel bir profil resmi y\xfckle:",
                    restrictions: "(Sadece .jpg veya .png: En fazla 750 kb; 256x256 \xe7\xf6z\xfcn\xfcrl\xfc\u011f\xfc \xf6nerilir)",
                    select: "Veya a\u015fa\u011f\u0131dan bir tane se\xe7iniz:",
                    error: {
                        image_size: "Dosya 750kb limitimizi a\u015fmaktad\u0131r.",
                        image_type: "Y\xfckledi\u011finiz dosya format\u0131 desteklenmemektedir, l\xfctfen sadece .jpg veya .png resimler y\xfckleyiniz."
                    }
                },
                submit: "De\u011fi\u015fiklikleri Kaydet",
                loading: {
                    saving_settings: "Ayarlar kaydediliyor...",
                    uploading_avatar: "Profil resmi y\xfckleniyor..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "Dosya yarat\u0131l\u0131yor...",
                saving_file: "Dosya kaydediliyor...",
                uploading_screenshots: "Ekran g\xf6r\xfcnt\xfcleri y\xfckleniyor...",
                uploading_archive: "Ar\u015fiv y\xfckleniyor..."
            },
            error: {
                required: {
                    file_name: "Dosya ad\u0131 gereklidir.",
                    author: "Sahip ad\u0131 gereklidir.",
                    category: "L\xfctfen bir kategori se\xe7iniz.",
                    file: "L\xfctfen y\xfcklemek i\xe7in bir dosya se\xe7iniz."
                },
                restrictions: {
                    file_size: "Bu dosya 100Mb limitimizi a\u015fmaktad\u0131r.",
                    file_type: "Bu dosya t\xfcr\xfc desteklenmemektedir, l\xfctfen sadece .zip, .rar ve .oiv dosyalar\u0131 y\xfckleyiniz.",
                    image_limit: "15 ekran g\xf6r\xfcnt\xfcs\xfc limitine ula\u015ft\u0131n\u0131z.",
                    image_size: "Ekran g\xf6r\xfcnt\xfclerinizin %{count} tanesi eklenemedi, \xe7\xfcnk\xfc 2Mb'l\u0131k limiti a\u015fmaktad\u0131r.",
                    image_type: "Ekran g\xf6r\xfcnt\xfclerinizin %{count} tanesi eklenemedi, \xe7\xfcnk\xfc desteklenen formatta de\u011filler - l\xfctfen sadece .jpg ve .png dosyalar\u0131 y\xfckleyiniz."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Sil",
                confirm: "Bu dosyay\u0131 silmek istedi\u011finizden emin misiniz?"
            },
            report: {
                title: "Rapor Et",
                explain: "L\xfctfen bu dosyas\u0131 neden rapor etti\u011finizi a\xe7\u0131klay\u0131n\u0131z..."
            },
            rating: {
                cancel: "Oylamay\u0131 \u0130ptal Et",
                star1: "\u0130yile\u015ftirilmesi Gerekiyor",
                star2: "Fena De\u011fil",
                star3: "\u0130yi",
                star4: "Harika",
                star5: "M\xfckemmel!",
                average: {
                    one: "5 \xfczerinden %{rating} y\u0131ld\u0131z (1 oy ile)",
                    other: "5 \xfczerinden %{rating} y\u0131ld\u0131z (%{display_count} oy ile)"
                }
            }
        },
        video: {
            added_by: "%{username} taraf\u0131ndan eklendi",
            label: {
                one: "%{count} Video",
                other: "%{count} Video"
            },
            show_more: {
                one: "1 video daha g\xf6ster",
                other: "%{count} tane daha video g\xf6ster"
            },
            add_modal: {
                header: "%{file_name} dosyas\u0131na video ekle",
                instructions: "Youtube, DailyMotion veya Vimeo'daki videonuz i\xe7in full link giriniz:",
                placeholder: "(youtube.com/watch?v=8ITAnNzj-zg vb.)",
                confirm: 'E\u011fer her \u015fey yerli yerinde g\xf6r\xfcn\xfcyorsa, alttaki "Video Ekle" tu\u015funa basarak kaydetti\u011finizden emin olun.',
                error: {
                    parse: "Linkten videoyu alamad\u0131k. L\xfctfen desteklenen bir website oldu\u011fundan emin olup tekrar deneyiniz."
                }
            },
            "delete": {
                confirm: "Bu video'yu kald\u0131rmak istedi\u011finizden emin misiniz?"
            }
        },
        comment: {
            add: "Yorum Yap",
            label: {
                one: "1 Yorum",
                other: "%{display_count} Yorum"
            },
            author: "Sahip",
            reply: "Cevap Ver",
            pin: {
                title: "Yorumu Sabitle",
                pinned: "Sabitlenmi\u015f Yorum",
                unpin: "Sabit Yorumu \u0130ptal Et"
            },
            report: {
                title: "Rapor Et",
                explain: "L\xfctfen bu yorumu neden rapor etti\u011finizi a\xe7\u0131klay\u0131n\u0131z..."
            },
            "delete": {
                title: "Sil",
                confirm: "Bu yorumu silmek istedi\u011finizden emin misiniz?"
            },
            show_previous: {
                one: "\xd6nceki 1 yorumu g\xf6ster",
                other: "\xd6nceki %{count} adet yorumu g\xf6ster"
            },
            placeholder: "Yorumunuzu ekleyin...",
            submit: "Yorumu G\xf6nderin",
            loading: "Yorum g\xf6nderiliyor...",
            fetching: "Yorumlar y\xfckleniyor...",
            flood_control: "Yorumlar bu kadar \xe7abuk eklenemez, l\xfctfen birka\xe7 dakika bekleyip tekrar deneyiniz.",
            no_user_message: "Sohbete kat\u0131l\u0131n! Yorum yapabilmek i\xe7in %{log_in} ya da %{register}.",
            no_user_message_log_in: "Giri\u015f Yap",
            no_user_message_register: "Kay\u0131t Ol",
            expand: "Expand to read the full comment",
            context: "View Context",
            rules: {
                agree: "By commenting you are agreeing to follow the %{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com community guidelines",
                offensive: "Do not post offensive comments directed at other users. If you have an issue with another comment, please report it.",
                malware: "Do not discuss or post links to malware or pirated content.",
                rating: "Do not give ratings without providing relevant feedback or criticism.",
                warning: "Violating any of these guidelines can result in your comment being removed or your account being banned."
            }
        }
    },
    tt: {
        helpers: null
    },
    ug: {
        helpers: null
    },
    uk: {
        helpers: {
            label: {
                clear_all: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435",
                welcome: "\u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e\u0441\u0438\u043c\u043e \u043d\u0430 GTA5-Mods.com",
                site_info: "\u0422\u0443\u0442 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u043d\u0430\u0439\u0442\u0438 \u043e\u0441\u0442\u0430\u043d\u043d\u0456 \u043c\u043e\u0434\u0438, \u0441\u043a\u0440\u0456\u043f\u0442\u0438, \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438 \u0442\u0430 \u0456\u043d\u0448\u0435 \u0434\u043b\u044f GTA 5.",
                intro: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e \u0449\u043e\u0431\u0438 \u043d\u0430\u0447\u0430\u0442\u0438 \u043f\u043e\u0448\u0443\u043a \u043f\u043e \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u043c \u043c\u043e\u0434\u0430\u043c \u0434\u043b\u044f GTA 5.",
                loading: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...",
                cancel: "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
                send: "\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438",
                donate: "\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u0443\u0432\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 %{paypal}",
                fix_errors: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0438\u043f\u0440\u0430\u0432\u0442\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438:",
                user: {
                    email: "\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430",
                    email_confirmation: "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0442\u0443",
                    username: "\u041b\u043e\u0433\u0456\u043d",
                    password: "\u041f\u0430\u0440\u043e\u043b\u044c",
                    password_new: "\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    password_confirmation: "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",
                    password_confirmation_new: "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    password_requirements: {
                        one: "\u043c\u0456\u043d\u0456\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",
                        few: "\u043c\u0456\u043d\u0456\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",
                        many: "\u043c\u0456\u043d\u0456\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",
                        other: "\u043c\u0456\u043d\u0456\u043c\u0443\u043c %{count} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"
                    },
                    remember_me: "\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438 \u043c\u0435\u043d\u0435",
                    current_password: "\u041f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    new_password: "\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"
                },
                filter: "\u0424\u0456\u043b\u0442\u0440",
                sort_by: "\u0412\u0456\u0434\u0441\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:",
                time_frame: "\u0417\u0430:",
                back_to_login: "\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u0434\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457",
                have_an_account: "\u0412\u0436\u0435 \u0454 \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",
                dont_have_an_account: "\u041d\u0435\u043c\u0430 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443?",
                log_in_here: "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0442\u0443\u0442.",
                register_here: "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0442\u0443\u0442.",
                confirm: {
                    title: "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456?",
                    positive: "\u0422\u0430\u043a",
                    negative: "\u041d\u0456"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\u041f\u043e\u0448\u0442\u0430 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0454. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\u0412\u0430\u0448 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u044f \u043b\u043e\u0433\u0456\u043d\u0443 \u0442\u0430 \u043f\u0430\u0440\u043e\u043b\u044e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430.",
                banned: "\u0412\u0430\u043c \u0431\u0443\u0432 \u0437\u0430\u0431\u043e\u0440\u043e\u043d\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0441\u0430\u0439\u0442\u0443. \u041f\u0440\u0438\u0447\u0438\u043d\u0430: %{reason}",
                captcha_incorrect: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u043e\u043b\u0435 reCAPTCHA \u0456 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
                confirmation_notice: "\u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0435\u0449\u0435 \u043d\u0435 \u0431\u0443\u0432 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u0438\u0439! \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u043d\u0430\u0439\u0434\u0456\u0442\u044c \u043b\u0438\u0441\u0442 \u0437 \u043f\u0456\u0442\u0434\u0432\u0435\u0440\u0436\u0435\u043d\u043d\u044f\u043c, \u0430\u0431\u043e %{click_here}",
                confirmation_notice_click_here: "\u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0442\u0443\u0442 \u0449\u043e\u0431\u0438 \u043f\u0435\u0440\u0435\u0441\u043b\u0430\u0442\u0438 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0436\u0435\u043d\u043d\u044f \u043d\u0430 \u043f\u043e\u0448\u0442\u0443 \u0449\u0435 \u0440\u0430\u0437"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype",
                    header: "\u0406\u043d\u0448\u0456 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0438",
                    website: "\u0412\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442",
                    paypal_error: "\u0412\u0430\u0448 ID PayPal, \u0449\u043e \u0432\u0438 \u0432\u0432\u0435\u043b\u0438 - \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439. ",
                    paypal_placeholder: "\u0410\u043a\u043a\u0430\u0443\u043d\u0442 PayPal \u0447\u0438 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430"
                },
                header: "\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0442\u0430 \u043f\u0440\u043e\u0444\u0456\u043b\u044c",
                account_details: "\u0414\u0435\u0442\u0430\u043b\u0456 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443",
                location: {
                    header: "\u041b\u043e\u043a\u0430\u0446\u0456\u044f",
                    placeholder: "(\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 Los Santos, San Andreas)",
                    select: "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0440\u0430\u0457\u043d\u0443"
                },
                avatar: {
                    header: "\u0410\u0432\u0430\u0442\u0430\u0440 \u0432\u0430\u0448\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0456\u043b\u044f",
                    upload: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0432\u043e\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",
                    restrictions: "(\u043b\u0438\u0448\u0435 .jpg \u0447\u0438 .png; \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 750\u043a\u0431; \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e 256x256 \u043f\u0438\u043a\u0441\u0435\u043b\u0456\u0432)",
                    select: "\u0410\u0431\u043e \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043e\u0434\u043d\u0443 \u0437 \u0446\u0456\u0445:",
                    error: {
                        image_size: "\u0426\u0435\u0439 \u0444\u0430\u0439\u043b \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454 750\u043a\u0431.",
                        image_type: "\u0426\u0435\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0443 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 .jpg \u0430\u0431\u043e .png \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f."
                    }
                },
                submit: "\u0417\u0431\u0435\u0440\u0438\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438",
                loading: {
                    saving_settings: "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d...",
                    uploading_avatar: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0444\u0456\u043b\u044e"
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0443...",
                saving_file: "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0443...",
                uploading_screenshots: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0456\u0432...",
                uploading_archive: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0430\u0440\u0445\u0456\u0432\u0443..."
            },
            error: {
                required: {
                    file_name: "\u041d\u0430\u0437\u0432\u0430 \u0444\u0430\u0439\u043b\u0443 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0430.",
                    author: "\u0406\u043c'\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e.",
                    category: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e.",
                    file: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f."
                },
                restrictions: {
                    file_size: "\u0426\u0435\u0439 \u0444\u0430\u0439\u043b \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454 \u043b\u0456\u043c\u0456\u0442 \u0443 100 \u043c\u0431.",
                    file_type: "\u0426\u0435\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0443 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 .zip, .rar \u0430\u0431\u043e .oiv \u0444\u0430\u0439\u043b\u0438.",
                    image_limit: "\u0412\u0438 \u0434\u043e\u0441\u044f\u0433\u043b\u0438 \u043b\u0456\u043c\u0456\u0442 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0456\u0432 (15 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c).",
                    image_size: "%{count} \u0432\u0430\u0448\u0438\u0445 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0456\u0432 \u043d\u0435 \u0431\u0443\u043b\u043e \u0434\u043e\u0434\u0430\u043d\u043e, \u0442\u043e\u043c\u0443 \u0449\u043e \u0432\u043e\u043d\u0438 \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u044e\u0442\u044c \u043b\u0456\u043c\u0456\u0442 \u0443 2 \u043c\u0431.",
                    image_type: "%{count} \u0432\u0430\u0448\u0438\u0445 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0456\u0432 \u043d\u0435 \u0431\u0443\u043b\u043e \u0434\u043e\u0434\u0430\u043d\u043e, \u0442\u043e\u043c\u0443 \u0449\u043e \u0457\u0445\u043d\u0456\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0456\u043c\u0443\u0454\u0442\u044c\u0441\u044f - \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 .jpg \u0447\u0438 .png \u0444\u0430\u0439\u043b\u0438."
                }
            }
        },
        user_file: {
            "delete": {
                title: "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
                confirm: "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456 \u0449\u043e\u0434\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443?"
            },
            report: {
                title: "\u0417\u0432\u0456\u0442\u0443\u0432\u0430\u0442\u0438",
                explain: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u043e\u044f\u0441\u043d\u0456\u0442\u044c \u0447\u043e\u043c\u0443 \u0432\u0438 \u0437\u0432\u0456\u0442\u0443\u0454\u0442\u0435 \u043d\u0430 \u0446\u0435\u0439 \u0444\u0430\u0439\u043b..."
            },
            rating: {
                cancel: "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0439\u0442\u0438\u043d\u0433",
                star1: "\u041f\u043e\u0442\u0440\u0456\u0431\u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0430",
                star2: "\u041e\u041a",
                star3: "\u0414\u043e\u0431\u0440\u0435",
                star4: "\u0412\u0456\u0434\u043c\u0456\u043d\u043d\u043e",
                star5: "\u0417\u0434\u043e\u0440\u043e\u0432\u043e!",
                average: {
                    one: "%{rating} / 5 \u0437\u0456\u0440\u043e\u043a (1 \u0433\u043e\u043b\u043e\u0441)",
                    few: "%{rating} / 5 \u0437\u0456\u0440\u043e\u043a (%{display_count} \u0433\u043e\u043b\u043e\u0441\u0456\u0432)",
                    many: "%{rating} / 5 \u0437\u0456\u0440\u043e\u043a (%{display_count} \u0433\u043e\u043b\u043e\u0441\u0456\u0432)",
                    other: "%{rating} / 5 \u0437\u0456\u0440\u043e\u043a (%{display_count} \u0433\u043e\u043b\u043e\u0441\u0456\u0432)"
                }
            }
        },
        video: {
            added_by: "\u0414\u043e\u0434\u0430\u0432 %{username}",
            label: {
                one: "%{count} \u0432\u0456\u0434\u0435\u043e",
                few: "%{count} \u0432\u0456\u0434\u0435\u043e",
                many: "%{count} \u0432\u0456\u0434\u0435\u043e",
                other: "%{count} \u0432\u0456\u0434\u0435\u043e"
            },
            show_more: {
                one: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435 1 \u0432\u0456\u0434\u0435\u043e",
                few: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435 \u043a\u0456\u043b\u044c\u043a\u0430 \u0432\u0456\u0434\u0435\u043e",
                many: "",
                other: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435 %{count} \u0432\u0456\u0434\u0435\u043e"
            },
            add_modal: {
                header: "\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u0435\u043e \u0434\u043e %{file_name}",
                instructions: "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0432\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0434\u043e \u0432\u0430\u0448\u043e\u0433\u043e \u0432\u0456\u0434\u0435\u043e \u043d\u0430 YouTube, DailyMotion \u0447\u0438 Vimeo:",
                placeholder: "(\u043d\u0430\u0440\u0438\u043a\u043b\u0430\u0434 youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: '\u042f\u043a\u0449\u043e \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u043d\u0430\u0442\u0438\u0441\u043d\u0438\u0442\u0435 "\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u0435\u043e" \u043d\u0438\u0436\u0447\u0435 \u0449\u043e\u0431\u0438 \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0439\u043e\u0433\u043e.',
                error: {
                    parse: "\u041c\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u043c\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u0435\u043e \u0437 \u0446\u044c\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0443. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0439\u0442\u0435\u0441\u044f, \u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0438\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0442\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437."
                }
            },
            "delete": {
                confirm: "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435 \u0432\u0456\u0434\u0435\u043e?"
            }
        },
        comment: {
            add: "\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            label: {
                one: "1 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                few: "%{display_count} \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456",
                many: "%{display_count} \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u044f",
                other: "%{display_count} \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0432"
            },
            author: "\u0410\u0432\u0442\u043e\u0440",
            reply: "\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0441\u0442\u0438",
            pin: {
                title: "\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                pinned: "\u041f\u0440\u0438\u043a\u0440\u0438\u043f\u043b\u0435\u043d\u0438\u0439 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                unpin: "\u0412\u0456\u0434\u043a\u0440\u0435\u043f\u0438\u0442\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440"
            },
            report: {
                title: "\u0417\u0432\u0456\u0442\u0443\u0432\u0430\u0442\u0438",
                explain: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u043e\u044f\u0441\u043d\u0456\u0442\u044c \u0447\u043e\u043c\u0443 \u0432\u0438 \u0437\u0432\u0456\u0442\u0443\u0454\u0442\u0435 \u043d\u0430 \u0446\u0435\u0439 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440..."
            },
            "delete": {
                title: "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
                confirm: "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456 \u0449\u043e\u0434\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u044f?"
            },
            show_previous: {
                one: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 1 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
                few: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456",
                many: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456",
                other: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456 %{count} \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456"
            },
            placeholder: "\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0432\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440...",
            submit: "\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            loading: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u044f...",
            fetching: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0432...",
            flood_control: "\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456 \u043d\u0435 \u043c\u043e\u0436\u0443\u0442\u044c \u0434\u043e\u0434\u0430\u0432\u0430\u0442\u0438\u0441\u044c \u0442\u0430\u043a \u0448\u0432\u0438\u0434\u043a\u043e. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435 \u043a\u0456\u043b\u044c\u043a\u0430 \u0445\u0432\u0438\u043b\u0438\u043d \u0442\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
            no_user_message: "\u0414\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435\u0441\u044f \u0434\u043e \u0440\u043e\u0437\u043c\u043e\u0432\u0438! %{log_in} \u0447\u0438 %{register} \u0434\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 \u0449\u043e\u0431\u0438 \u0434\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440.",
            no_user_message_log_in: "\u0443\u0432\u0456\u0439\u0434\u0456\u0442\u044c",
            no_user_message_register: "\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044f",
            expand: "\u0420\u043e\u0437\u0433\u043e\u0440\u043d\u0443\u0442\u0438, \u0449\u043e\u0431 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438 \u043f\u043e\u0432\u043d\u0438\u0439 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",
            context: "\u041f\u043e\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",
            rules: {
                agree: "\u041a\u043e\u043c\u0435\u043d\u0442\u0443\u044e\u0447\u0438, \u0432\u0438 \u0437\u0433\u043e\u0434\u0436\u0443\u044e\u0442\u0435\u0441\u044c \u0437 %{community_guidelines}",
                agree_community_guidelines: "\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c\u0438 \u0441\u043f\u0456\u043b\u044c\u043d\u043e\u0442\u0438 GTA5-Mods.com",
                offensive: "\u041d\u0435 \u043f\u0438\u0448\u0456\u0442\u044c \u043e\u0431\u0440\u0430\u0437\u043b\u0438\u0432\u0456 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456, \u0441\u043f\u0440\u044f\u043c\u043e\u0432\u0430\u043d\u0456 \u043d\u0430 \u0456\u043d\u0448\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432. \u042f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 \u043f\u0440\u0435\u0442\u0435\u043d\u0437\u0456\u0457 \u0434\u043e \u0456\u043d\u0448\u043e\u0433\u043e \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0442\u0435 \u043f\u0440\u043e \u0446\u0435.",
                malware: "\u041d\u0435 \u043e\u0431\u0433\u043e\u0432\u043e\u0440\u044e\u0439\u0442\u0435 \u0430\u0431\u043e \u043d\u0435 \u043f\u0438\u0448\u0456\u0442\u044c \u0441\u0438\u043b\u043a\u0438 \u0437 \u0432\u0456\u0440\u0443\u0441\u0430\u043c\u0438 \u0447\u0438 \u043f\u0438\u0440\u0430\u0442\u044c\u0441\u043a\u0438\u043c \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c.",
                rating: "\u041d\u0435 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0446\u0456\u043d\u043a\u0438 \u0431\u0435\u0437 \u043f\u043e\u0432\u043e\u0434\u0443 \u0430\u0431\u043e \u043a\u0440\u0438\u0442\u0438\u043a\u0438.",
                warning: "\u041f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0437 \u0446\u0438\u0445 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0456\u0432 \u043c\u043e\u0436\u0435 \u043f\u0440\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u044f \u0430\u0431\u043e \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u0430\u043a\u0430\u0443\u043d\u0442\u0443."
            }
        }
    },
    ur: {
        helpers: null
    },
    uz: {
        helpers: null
    },
    vi: {
        helpers: {
            label: {
                welcome: "Cha\u0300o m\u01b0\u0300ng ba\u0323n \u0111\xea\u0301n v\u01a1\u0301i GTA5-Mods.com",
                site_info: "Trang web chia s\u1ebb mods d\xe0nh cho GTA 5, c\u1eadp nh\u1eadt th\u01b0\u1eddng xuy\xean, mods xe, scripts, c\xf4ng c\u1ee5 v\xe0 vv...",
                intro: "Cho\u0323n ca\u0301c mu\u0323c sau \u0111\xe2y \u0111\xea\u0309 m\u01a1\u0309 ca\u0301c loa\u0323i mods:",
                loading: "\u0110ang t\u1ea3i...",
                cancel: "Huy\u0309 bo\u0309",
                send: "G\u1eedi",
                donate: "\u0110\xf3ng g\xf3p v\u1edbi %{paypal}",
                fix_errors: "Ha\u0303y s\u01b0\u0309a ca\u0301c l\xf4\u0303i sau \u0111\xe2y:",
                user: {
                    email: "\u0110i\u0323a chi\u0309 Email",
                    email_confirmation: "X\xe1c nh\u1eadn \u0111\u1ecba ch\u1ec9 email",
                    username: "T\xean \u0111\u0103ng nh\xe2\u0323p",
                    password: "M\xe2\u0323t kh\xe2\u0309u",
                    password_new: "M\xe2\u0323t kh\xe2\u0309u m\u01a1\u0301i",
                    password_confirmation: "Xa\u0301c nh\xe2\u0323n m\xe2\u0323t kh\xe2\u0309u",
                    password_confirmation_new: "Xa\u0301c nh\xe2\u0323n m\xe2\u0323t kh\xe2\u0309u m\u01a1\u0301i",
                    password_requirements: {
                        other: "(t\xf4\u0301i thi\xea\u0309u %{count} ky\u0301 t\u01b0\u0323)"
                    },
                    remember_me: "Duy tri\u0300 \u0111\u0103ng nh\xe2\u0323p",
                    current_password: "M\xe2\u0323t kh\xe2\u0309u cu\u0303",
                    new_password: "M\xe2\u0323t kh\xe2\u0309u m\u01a1\u0301i"
                },
                filter: "B\xf4\u0323 lo\u0323c:",
                sort_by: "S\u0103\u0301p x\xea\u0301p theo:",
                time_frame: "Nga\u0300y ta\u0309i l\xean:",
                back_to_login: "Tr\u01a1\u0309 la\u0323i \u0111\xea\u0309 \u0111\u0103ng nh\xe2\u0323p",
                have_an_account: "Ba\u0323n \u0111a\u0303 co\u0301 ta\u0300i khoa\u0309n?",
                dont_have_an_account: "Ba\u0323n ch\u01b0a co\u0301 ta\u0300i khoa\u0309n?",
                log_in_here: "\u0110\u0103ng nh\xe2\u0323p ta\u0323i \u0111\xe2y.",
                register_here: "\u0110\u0103ng ky\u0301 ta\u0323i \u0111\xe2y.",
                confirm: {
                    title: "Ba\u0323n co\u0301 ch\u0103\u0301c kh\xf4ng?",
                    positive: "Co\u0301",
                    negative: "Kh\xf4ng"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\u0110\u1ecba ch\u1ec9 email x\xe1c nh\u1eadn kh\xf4ng kh\u1edbp, vui l\xf2ng th\u1eed l\u1ea1i."
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "T\xean \u0111\u0103ng nh\xe2\u0323p v\xe0 m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n kh\xf4ng ch\xednh x\xe1c.",
                banned: "B\u1ea1n \u0111\xe3 b\u1ecb c\u1ea5m t\u1eeb trang web. L\xfd do: %{reason}",
                captcha_incorrect: "H\xe3y \u0111i\u1ec1n v\xe0o reCAPTCHA v\xe0 th\u1eed l\u1ea1i.",
                confirmation_notice: "\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n ch\u01b0a \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn ch\u01b0a! Vui l\xf2ng ki\u1ec3m tra h\u1ed9p th\u01b0 email c\u1ee7a b\u1ea1n \u0111\u1ec3 li\xean k\u1ebft x\xe1c nh\u1eadn ho\u1eb7c %{click_here}",
                confirmation_notice_click_here: "b\u1ea5m v\xe0o \u0111\xe2y \u0111\u1ec3 g\u1eedi l\u1ea1i c\xe1c th\xf4ng tin x\xe1c nh\u1eadn"
            }
        },
        settings: {
            account: {
                header: "T\xe0i kho\u1ea3n & H\u1ed3 s\u01a1 c\xe1 nh\xe2n",
                account_details: "Chi ti\u1ebft v\u1ec1 t\xe0i kho\u1ea3n",
                location: {
                    header: "V\u1ecb tr\xed",
                    placeholder: "(VD: Los Santos, San Andreas)",
                    select: "Ch\u1ecdn qu\u1ed1c gia.."
                },
                social: {
                    header: "C\xe1c t\xe0i kho\u1ea3n tr\u1ef1c tuy\u1ebfn kh\xe1c",
                    website: "Trang web c\xe1 nh\xe2n",
                    paypal_error: "PayPal ID m\xe0 b\u1ea1n cho v\xe0o l\xe0 kh\xf4ng h\u1ee3p l\u1ec7.",
                    paypal_placeholder: "PayPal ID ho\u1eb7c \u0111\u1ecba ch\u1ec9 email"
                },
                avatar: {
                    header: "\u1ea2nh \u0111\u1ea1i di\u1ec7n",
                    upload: "T\u1ea3i l\xean m\u1ed9t h\xecnh \u1ea3nh t\xf9y ch\u1ec9nh h\u1ed3 s\u01a1:",
                    restrictions: "(Ch\u1ec9 c\xf3 .jpg ho\u1eb7c .png ; T\u1ed1i \u0111a 750Kb; Y\xeau c\u1ea7u 256x256 pixels)",
                    select: "Ho\u1eb7c ch\u1ecdn d\u01b0\u1edbi \u0111\xe2y:",
                    error: {
                        image_size: "T\u1eadp tin v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n 750Kb.",
                        image_type: "\u0110\xf3 l\xe0 lo\u1ea1i t\u1eadp tin kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3, vui l\xf2ng ch\u1ec9 t\u1ea3i l\xean h\xecnh \u1ea3nh .jpg v\xe0 .png."
                    }
                },
                submit: "L\u01b0u thay \u0111\u1ed5i",
                loading: {
                    saving_settings: "\u0110ang l\u01b0u c\xe0i \u0111\u1eb7t...",
                    uploading_avatar: "\u0110ang t\u1ea3i h\xecnh \u1ea3nh c\xe1 nh\xe2n..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u0110ang t\u1ea1o t\u1eadp tin...",
                saving_file: "\u0110ang l\u01b0u t\u1eadp tin...",
                uploading_screenshots: "\u0110ang t\u1ea3i l\xean \u1ea3nh ch\u1ee5p m\xe0n h\xecnh...",
                uploading_archive: "\u0110ang t\u1ea3i l\xean kho l\u01b0u tr\u1eef..."
            },
            error: {
                required: {
                    file_name: "Y\xeau c\u1ea7u ph\u1ea3i c\xf3 t\xean t\u1eadp tin.",
                    author: "B\u1eaft bu\u1ed9c ph\u1ea3i c\xf3 t\xean t\xe1c gi\u1ea3",
                    category: "H\xe3y ch\u1ecdn m\u1ed9t danh m\u1ee5c.",
                    file: "Vui l\xf2ng ch\u1ecdn m\u1ed9t t\u1eadp tin \u0111\u1ec3 t\u1ea3i l\xean."
                },
                restrictions: {
                    file_size: "T\u1eadp tin v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n 100MB.",
                    file_type: "\u0110\xf3 l\xe0 lo\u1ea1i t\u1eadp tin kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3, vui l\xf2ng ch\u1ec9 t\u1ea3i l\xean c\xe1c t\u1eadp tin .zip ho\u0103\u0323c .rar va\u0300 .oiv",
                    image_limit: "B\u1ea1n \u0111\xe3 \u0111\u1ea1t \u0111\u1ebfn gi\u1edbi h\u1ea1n t\u1ed1i \u0111a 15 \u1ea3nh ch\u1ee5p m\xe0n h\xecnh.",
                    image_size: "%{count} \u1ea3nh ch\u1ee5p m\xe0n h\xecnh c\u1ee7a b\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c b\u1ed5 sung b\u1edfi v\xec \u1ea3nh v\u01b0\u1ee3t qu\xe1 2Mb.",
                    image_type: "%{count} \u1ea3nh ch\u1ee5p m\xe0n h\xecnh c\u1ee7a b\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c b\u1ed5 sung b\u1edfi v\xec \u0111\u1ecbnh d\u1ea1ng c\u1ee7a n\xf3 kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 - xin vui l\xf2ng ch\u1ec9 t\u1ea3i l\xean h\xecnh \u1ea3nh .jpg v\xe0 .png."
                }
            }
        },
        user_file: {
            "delete": {
                title: "Xo\xe1",
                confirm: "B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a t\u1eadp tin n\xe0y?"
            },
            report: {
                title: "B\xe1o c\xe1o",
                explain: "Xin gi\u1ea3i th\xedch l\xfd do t\u1ea1i sao b\u1ea1n l\u1ea1i b\xe1o c\xe1o t\u1eadp tin n\xe0y..."
            },
            rating: {
                cancel: "H\u1ee7y b\u1ecf \u0111\xe1nh gi\xe1",
                star1: "Y\xeau c\u1ea7u l\xe0m vi\u1ec7c",
                star2: "OK",
                star3: "T\xf4\u0301t",
                star4: "Hay",
                star5: "Tuy\xea\u0323t v\u01a1\u0300i!",
                average: {
                    other: "%{rating} / 5 sao (%{display_count} bo\u0309 phi\xea\u0301u)"
                }
            }
        },
        video: {
            added_by: "Th\xeam b\u1edfi %{username}",
            label: {
                other: "%{count} Videos"
            },
            show_more: {
                other: "Hi\u1ec3n th\u1ecb %{count} videos nhi\u1ec1u h\u01a1n"
            },
            add_modal: {
                header: "Th\xeam m\u1ed9t video v\xe0o %{file_name}",
                instructions: "Nh\u1eadp URL \u0111\u1ea7y \u0111\u1ee7 cho video c\u1ee7a b\u1ea1n tr\xean YouTube, DailyMotion ho\u1eb7c Vimeo:",
                placeholder: "(VD: youtube.com/watch?v=8ITAnNzj-zg)",
                confirm: 'N\u1ebfu t\u1ea5t c\u1ea3 m\u1ecdi th\u1ee9 c\xf3 v\u1ebb t\u1ed1t, h\xe3y nh\u1ea5n "Th\xeam Video" d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\u01b0u n\xf3.',
                error: {
                    parse: "Ch\xfang t\xf4i kh\xf4ng th\u1ec3 l\u1ea5y video t\u1eeb URL \u0111\xf3, xin vui l\xf2ng  ki\u1ec3m tra b\u1ea1n \u0111ang s\u1eed d\u1ee5ng m\u1ed9t trang web h\u1ed7 tr\u1ee3 n\xe0o v\xe0 th\u1eed l\u1ea1i."
                }
            },
            "delete": {
                confirm: "B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a video n\xe0y?"
            }
        },
        comment: {
            add: "Th\xeam b\xecnh lu\u1eadn",
            label: {
                other: "%{display_count} B\xecnh lu\u1eadn"
            },
            author: "T\xe1c gi\u1ea3",
            reply: "Tr\u1ea3 l\u1eddi",
            pin: {
                title: "\u0110\xe1nh d\u1ea5u b\xecnh lu\u1eadn",
                pinned: "\u0110\xe3 \u0111\xe1nh d\u1ea5u b\xecnh lu\u1eadn",
                unpin: "B\u1ecf \u0111\xe1nh d\u1ea5u b\xecnh lu\u1eadn"
            },
            report: {
                title: "B\xe1o c\xe1o",
                explain: "Xin gi\u1ea3i th\xedch l\xfd do t\u1ea1i sao b\u1ea1n l\u1ea1i b\xe1o c\xe1o nh\u1eadn x\xe9t n\xe0y..."
            },
            "delete": {
                title: "Xo\xe1",
                confirm: "B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a b\xecnh lu\u1eadn n\xe0y?"
            },
            show_previous: {
                other: "Hi\u1ec3n th\u1ecb %{count} b\xecnh lu\u1eadn tr\u01b0\u1edbc"
            },
            placeholder: "Th\xeam b\xecnh lu\u1eadn c\u1ee7a b\u1ea1n...",
            submit: "\u0110\u0103ng b\xecnh lu\u1eadn",
            loading: "\u0110ang \u0111\u0103ng b\xecnh lu\u1eadn...",
            fetching: "\u0110ang t\u1ea3i b\xecnh lu\u1eadn...",
            flood_control: "B\xecnh lu\u1eadn kh\xf4ng th\u1ec3 th\xeam v\xe0o m\u1ed9t c\xe1ch nhanh ch\xf3ng, h\xe3y ch\u1edd m\u1ed9t v\xe0i ph\xfat v\xe0 th\u1eed l\u1ea1i.",
            no_user_message: "Tham gia v\xe0o cu\u1ed9c tr\xf2 chuy\u1ec7n! %{log_in} ho\u1eb7c %{register} m\u1ed9t t\xe0i kho\u1ea3n \u0111\u1ec3 c\xf3 th\u1ec3 b\xecnh lu\u1eadn.",
            no_user_message_log_in: "\u0110\u0103ng nh\u1eadp",
            no_user_message_register: "\u0111\u0103ng k\xfd",
            expand: "M\u01a1\u0309 r\xf4\u0323ng \u0111\xea\u0309 \u0111o\u0323c \u0111\xe2\u0300y \u0111u\u0309 bi\u0300nh lu\xe2\u0323n",
            context: "View Context",
            rules: {
                agree: "\u0110\xea\u0309 bi\u0300nh lu\xe2\u0323n \u0111\u01b0\u01a1\u0323c ch\xe2\u0301p nh\xe2\u0323n ba\u0323n pha\u0309i tu\xe2n thu\u0309 theo %{community_guidelines}",
                agree_community_guidelines: "nguy\xean t\u1eafc c\u1ed9ng \u0111\u1ed3ng GTA5-Mods.com",
                offensive: "Kh\xf4ng \u0111\u0103ng b\xecnh lu\u1eadn ch\u01b0\u0309i tu\u0323c v\xe0o nh\u1eefng ng\u01b0\u1eddi d\xf9ng kh\xe1c. N\u1ebfu b\u1ea1n c\xf3 m\u1ed9t v\u1ea5n \u0111\u1ec1 v\u1edbi b\xecnh lu\u1eadn kh\xe1c, xin vui l\xf2ng b\xe1o c\xe1o.",
                malware: "Kh\xf4ng th\u1ea3o lu\u1eadn ho\u1eb7c post link d\u1eabn t\u1edbi ph\u1ea7n m\u1ec1m \u0111\u1ed9c h\u1ea1i ho\u1eb7c c\xe1c n\u1ed9i dung vi ph\u1ea1m b\u1ea3n quy\u1ec1n.",
                rating: "\u0110\u1eebng \u0111\u01b0a x\u1ebfp h\u1ea1ng m\xe0 kh\xf4ng cung c\u1ea5p th\xf4ng tin ph\u1ea3n h\u1ed3i ho\u1eb7c l\u1eddi ch\u1ec9 tr\xedch li\xean quan.",
                warning: "Vi ph\u1ea1m b\u1ea5t k\u1ef3 c\u1ee7a c\xe1c nguy\xean t\u1eafc n\xe0y c\xf3 th\u1ec3 d\u1eabn \u0111\u1ebfn nh\u1eadn x\xe9t c\u1ee7a b\u1ea1n \u0111ang \u0111\u01b0\u1ee3c g\u1ee1 b\u1ecf ho\u1eb7c t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n b\u1ecb c\u1ea5m."
            }
        }
    },
    wo: {
        helpers: null
    },
    "zh-CN": {
        helpers: {
            label: {
                clear_all: "\u6e05\u9664\u6240\u6709",
                welcome: "\u6b22\u8fce\u6765\u5230GTA5\u6a21\u7ec4\u7f51 GTA5-Mods.com",
                site_info: "\u4f60\u7684\u4e00\u7ad9\u5f0fGTA5\u6a21\u7ec4\u3001\u811a\u672c\u3001\u5de5\u5177\u7f51\u3002",
                intro: "\u9009\u62e9\u4ee5\u4e0b\u7c7b\u522b\u4e4b\u4e00\u5f00\u59cb\u6d4f\u89c8\u6700\u65b0\u7684GTA5\u6a21\u7ec4\uff1a",
                loading: "\u8f7d\u5165\u4e2d...",
                cancel: "\u53d6\u6d88",
                send: "\u53d1\u9001",
                donate: "\u4f7f\u7528%{paypal}\u6350\u8d60",
                fix_errors: "\u8bf7\u4fee\u6b63\u4ee5\u4e0b\u9519\u8bef\uff1a",
                user: {
                    email: "\u7535\u90ae",
                    email_confirmation: "\u786e\u8ba4\u7535\u90ae",
                    username: "\u7528\u6237\u540d",
                    password: "\u5bc6\u7801",
                    password_new: "\u65b0\u5bc6\u7801",
                    password_confirmation: "\u786e\u8ba4\u5bc6\u7801",
                    password_confirmation_new: "\u786e\u8ba4\u65b0\u5bc6\u7801",
                    password_requirements: {
                        other: "(\u5c0f\u4e8e%{count}\u4e2a\u5b57)"
                    },
                    remember_me: "\u81ea\u52a8\u767b\u5165",
                    current_password: "\u5f53\u524d\u5bc6\u7801",
                    new_password: "\u65b0\u5bc6\u7801"
                },
                filter: "\u8fc7\u6ee4\uff1a",
                sort_by: "\u6392\u5e8f\u65b9\u5f0f\uff1a",
                time_frame: "\u4ece\uff1a",
                back_to_login: "\u56de\u5230\u767b\u5165",
                have_an_account: "\u5df2\u6709\u5e10\u53f7\uff1f",
                dont_have_an_account: "\u6ca1\u6709\u5e10\u53f7\uff1f",
                log_in_here: "\u73b0\u5728\u767b\u5f55",
                register_here: "\u6ce8\u518c",
                confirm: {
                    title: "\u4f60\u786e\u5b9a\uff1f",
                    positive: "\u662f",
                    negative: "\u4e0d"
                }
            }
        },
        activerecord: {
            errors: {
                models: {
                    user: {
                        attributes: {
                            email_confirmation: {
                                incorrect: "\u786e\u8ba4\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4e0d\u5339\u914d\uff0c\u8bf7\u91cd\u8bd5\u3002"
                            }
                        }
                    }
                }
            }
        },
        user: {
            login: {
                unauthorized: "\u60a8\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0d\u6b63\u786e\u3002",
                banned: "\u4f60\u5df2\u88ab\u5c01\u53f7\u3002 \u539f\u56e0\uff1a%{reason}",
                captcha_incorrect: "\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801\u3002",
                confirmation_notice: "\u60a8\u7684\u5e10\u6237\u8fd8\u6ca1\u6709\u9a8c\u8bc1\u5462\uff01\u8bf7\u68c0\u67e5\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u786e\u8ba4\u94fe\u63a5\uff0c\u6216%{click_here}\u3002",
                confirmation_notice_click_here: "\u70b9\u51fb\u8fd9\u91cc\u91cd\u65b0\u53d1\u9001"
            }
        },
        settings: {
            account: {
                social: {
                    skype_placeholder: "Skype\u540d\u5b57",
                    header: "\u8054\u7cfb\u65b9\u5f0f",
                    website: "\u4e2a\u4eba\u7f51\u7ad9",
                    paypal_error: "\u60a8\u8f93\u5165\u8d1d\u5b9d\u5546\u5bb6ID\u65e0\u6548\u3002",
                    paypal_placeholder: "\u8d1d\u5b9d\u5546\u5bb6ID\u6216\u7535\u90ae"
                },
                header: "\u5e10\u53f7\u4e0e\u4e2a\u4eba\u8d44\u6599",
                account_details: "\u57fa\u672c\u8d44\u6599",
                location: {
                    header: "\u6240\u5728\u5730",
                    placeholder: "(\u5982\uff1a\u6d1b\u5723\u90fd\u5e02\uff0c\u5723\u5b89\u5fb7\u70c8\u65af)",
                    select: "\u9009\u62e9\u56fd\u5bb6..."
                },
                avatar: {
                    header: "\u5934\u50cf",
                    upload: "\u4e0a\u4f20\u5934\u50cf",
                    restrictions: "(JPG\u6216PNG\u683c\u5f0f\uff1b\u6700\u5927750KB\uff1b\u63a8\u8350256\xd7256\u50cf\u7d20)",
                    select: "\u6216\u8005\u9009\u62e9\u4e00\u4e2a\uff1a",
                    error: {
                        image_size: "\u8be5\u6587\u4ef6\u8d85\u51fa\u4e86\u6211\u4eec\u7684750KB\u9650\u5236\u3002",
                        image_type: "\u4e0d\u652f\u6301\u8be5\u6587\u4ef6\u7c7b\u578b\uff0c\u8bf7\u53ea\u4e0a\u4f20JPG\u6216PNG\u683c\u5f0f\u7684\u5934\u50cf\u3002"
                    }
                },
                submit: "\u4fdd\u5b58\u66f4\u6539",
                loading: {
                    saving_settings: "\u6b63\u5728\u4fdd\u5b58...",
                    uploading_avatar: "\u6b63\u5728\u4e0a\u4f20\u5934\u50cf..."
                }
            }
        },
        upload: {
            loading: {
                creating_file: "\u6b63\u5728\u521b\u5efa\u6587\u4ef6...",
                saving_file: "\u6b63\u5728\u4fdd\u5b58\u6587\u4ef6...",
                uploading_screenshots: "\u6b63\u5728\u4e0a\u4f20\u622a\u56fe...",
                uploading_archive: "\u6b63\u5728\u4e0a\u4f20\u6587\u4ef6..."
            },
            error: {
                required: {
                    file_name: "\u6587\u4ef6\u540d\u662f\u5fc5\u9700\u7684\u3002",
                    author: "\u4f5c\u8005\u540d\u662f\u5fc5\u9700\u7684\u3002",
                    category: "\u8bf7\u9009\u62e9\u4e00\u4e2a\u7c7b\u522b\u3002",
                    file: "\u8bf7\u9009\u62e9\u4e00\u4e2a\u6587\u4ef6\u4e0a\u4f20\u3002"
                },
                restrictions: {
                    file_size: "\u8be5\u6587\u4ef6\u8d85\u51fa\u4e86100MB\u7684\u9650\u5236\u3002",
                    file_type: "\u4e0d\u652f\u6301\u8fd9\u4e2a\u6587\u4ef6\u683c\u5f0f\uff0c\u8bf7\u4e0a\u4f20ZIP\u3001RAR\u6216\u8005OIV\u683c\u5f0f\u7684\u6587\u4ef6\u3002",
                    image_limit: "\u60a8\u5df2\u8fbe\u523015\u5f20\u622a\u56fe\u7684\u9650\u5236\u3002",
                    image_size: "%{count}\u5f20\u622a\u56fe\u4e0a\u4f20\u5931\u8d25\uff0c\u539f\u56e0\u662f\u8d85\u51fa\u4e862MB\u7684\u9650\u5236\u3002",
                    image_type: "%{count}\u5f20\u622a\u56fe\u4e0a\u4f20\u5931\u8d25\uff0c\u539f\u56e0\u662f\u4e0d\u652f\u6301\u8be5\u622a\u56fe\u683c\u5f0f - \u8bf7\u4e0a\u4f20JPG\u6216PNG\u683c\u5f0f\u7684\u6587\u4ef6\u3002"
                }
            }
        },
        user_file: {
            "delete": {
                title: "\u5220\u9664",
                confirm: "\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u6587\u4ef6\uff1f"
            },
            report: {
                title: "\u4e3e\u62a5",
                explain: "\u8bf7\u89e3\u91ca\u4e3a\u4ec0\u4e48\u8981\u4e3e\u62a5\u8fd9\u4e2a\u6587\u4ef6..."
            },
            rating: {
                cancel: "\u53d6\u6d88\u8bc4\u7ea7",
                star1: "\u70c2",
                star2: "\u4e0d\u9519",
                star3: "\u5f88\u597d",
                star4: "\u975e\u5e38\u597d",
                star5: "\u8d85\u8d5e\uff01",
                average: {
                    other: "%{rating} / 5 (%{display_count} \u8bc4\u7ea7)"
                }
            }
        },
        video: {
            added_by: "\u7531%{username}\u6dfb\u52a0",
            label: {
                other: "%{count}\u4e2a\u89c6\u9891"
            },
            show_more: {
                other: "\u663e\u793a%{count}\u4e2a\u89c6\u9891"
            },
            add_modal: {
                header: "\u5c06\u89c6\u9891\u6dfb\u52a0\u5230%{file_name}",
                instructions: "\u8f93\u5165\u5b8c\u6574\u7684YouTube\u3001DailyMotion\u3001Vimeo\u89c6\u9891\u94fe\u63a5\uff1a",
                placeholder: "(\u5982\uff1ayoutube.com/watch?v=8ITAnNzj-zg)",
                confirm: "\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8bf7\u52a1\u5fc5\u6309\u201c\u6dfb\u52a0\u89c6\u9891\u201d\u4fdd\u5b58\u3002",
                error: {
                    parse: "\u6211\u4eec\u65e0\u6cd5\u627e\u5230\u8fd9\u4e2a\u7f51\u5740\u7684\u89c6\u9891\uff0c\u8bf7\u786e\u8ba4\u60a8\u4f7f\u7528\u662f\u652f\u6301\u7684\u7f51\u7ad9\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002"
                }
            },
            "delete": {
                confirm: "\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u89c6\u9891\uff1f"
            }
        },
        comment: {
            add: "\u6d41\u53e3\u6c34",
            label: {
                other: "%{display_count}\u4e2a\u8bc4\u8bba"
            },
            author: "\u4f5c\u8005",
            reply: "\u56de\u590d",
            pin: {
                title: "\u7f6e\u9876",
                pinned: "\u7f6e\u9876\u5e16",
                unpin: "\u53d6\u6d88\u7f6e\u9876"
            },
            report: {
                title: "\u4e3e\u62a5",
                explain: "\u8bf7\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4f60\u4e3e\u62a5\u8fd9\u4e2a\u8bc4\u8bba..."
            },
            "delete": {
                title: "\u5220\u9664",
                confirm: "\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u8bc4\u8bba\u5417\uff1f"
            },
            show_previous: {
                other: "\u663e\u793a\u5176\u4ed6%{count}\u65e7\u8bc4\u8bba"
            },
            placeholder: "\u7559\u4e0b\u4f60\u7684\u53e3\u6c34...",
            submit: "\u53d1\u8868\u8bc4\u8bba",
            loading: "\u53d1\u8868\u8bc4\u8bba...",
            fetching: "\u52a0\u8f7d\u8bc4\u8bba...",
            flood_control: "\u62b1\u6b49\uff0c\u60a8\u4e24\u6b21\u53d1\u8868\u592a\u5feb\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
            no_user_message: "\u52a0\u5165\u5bf9\u8bdd\uff01%{log_in}\u6216%{register}\u4e00\u4e2a\u5e10\u53f7\u624d\u80fd\u591f\u53d1\u8868\u8bc4\u8bba\u3002",
            no_user_message_log_in: "\u767b\u5165",
            no_user_message_register: "\u6ce8\u518c",
            expand: "\u6269\u5c55\u9605\u8bfb\u5b8c\u6574\u8bc4\u8bba",
            context: "\u67e5\u770b\u4e0a\u4e0b\u6587",
            rules: {
                agree: "\u901a\u8fc7\u8bc4\u8bba\u8868\u793a\u60a8\u540c\u610f\u9075\u5b88%{community_guidelines}.",
                agree_community_guidelines: "GTA5-Mods.com\u793e\u533a\u51c6\u5219",
                offensive: "\u4e0d\u8bb8\u53d1\u5e03\u9488\u5bf9\u5176\u4ed6\u7528\u6237\u7684\u8bc4\u8bba\u3002\u5982\u679c\u4f60\u6709\u5176\u4ed6\u610f\u89c1\uff0c\u8bf7\u4e3e\u62a5\u3002",
                malware: "\u4e0d\u8bb8\u8bc4\u8bba\u6216\u8ba8\u8bba\u542b\u6709\u76d7\u7248\u3001\u6076\u610f\u8f6f\u4ef6\u6216\u75c5\u6bd2\u7684\u5185\u5bb9\u3002",
                rating: "\u4e0d\u8bb8\u518d\u672a\u63d0\u4f9b\u76f8\u5173\u53cd\u9988\u610f\u89c1\u6216\u6279\u8bc4\u7ed9\u4e88\u8bc4\u7ea7\u3002",
                warning: "\u4efb\u4f55\u8fdd\u53cd\u8fd9\u4e9b\u51c6\u5219\u53ef\u80fd\u5bfc\u81f4\u60a8\u7684\u8bc4\u8bba\u88ab\u5220\u9664\u6216\u60a8\u7684\u5e10\u6237\u88ab\u5c01\u3002"
            }
        }
    },
    "zh-HK": {
        helpers: null
    },
    "zh-TW": {
        helpers: null
    },
    "zh-YUE": {
        helpers: null
    }
},
function(e) {
    "use strict";
    var t = {
        init: function(n) {
            return this.each(function() {
                this.self = e(this), t.destroy.call(this.self), this.opt = e.extend(!0, {}, e.fn.raty.defaults, n), t._adjustCallback.call(this), t._adjustNumber.call(this), t._adjustHints.call(this), this.opt.score = t._adjustedScore.call(this, this.opt.score), "img" !== this.opt.starType && t._adjustStarType.call(this), t._adjustPath.call(this), t._createStars.call(this), this.opt.cancel && t._createCancel.call(this), this.opt.precision && t._adjustPrecision.call(this), t._createScore.call(this), t._apply.call(this, this.opt.score), t._setTitle.call(this, this.opt.score), t._target.call(this, this.opt.score), this.opt.readOnly ? t._lock.call(this) : (this.style.cursor = "pointer", t._binds.call(this))
            })
        },
        _adjustCallback: function() {
            for (var e = ["number", "readOnly", "score", "scoreName", "target"], t = 0; t < e.length; t++) "function" == typeof this.opt[e[t]] && (this.opt[e[t]] = this.opt[e[t]].call(this))
        },
        _adjustedScore: function(e) {
            return e ? t._between(e, 0, this.opt.number) : e
        },
        _adjustHints: function() {
            if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half)
                for (var e = this.opt.precision ? 10 : 2, t = 0; t < this.opt.number; t++) {
                    var n = this.opt.hints[t];
                    "[object Array]" !== Object.prototype.toString.call(n) && (n = [n]), this.opt.hints[t] = [];
                    for (var i = 0; e > i; i++) {
                        var o = n[i],
                            a = n[n.length - 1];
                        void 0 === a && (a = null), this.opt.hints[t][i] = void 0 === o ? a : o
                    }
                }
        },
        _adjustNumber: function() {
            this.opt.number = t._between(this.opt.number, 1, this.opt.numberMax)
        },
        _adjustPath: function() {
            this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "/")
        },
        _adjustPrecision: function() {
            this.opt.half = !0
        },
        _adjustStarType: function() {
            var e = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
            this.opt.path = "";
            for (var t = 0; t < e.length; t++) this.opt[e[t]] = this.opt[e[t]].replace(".", "-")
        },
        _apply: function(e) {
            t._fill.call(this, e), e && (e > 0 && this.score.val(e), t._roundStars.call(this, e))
        },
        _between: function(e, t, n) {
            return Math.min(Math.max(parseFloat(e), t), n)
        },
        _binds: function() {
            this.cancel && (t._bindOverCancel.call(this), t._bindClickCancel.call(this), t._bindOutCancel.call(this)), t._bindOver.call(this), t._bindClick.call(this), t._bindOut.call(this)
        },
        _bindClick: function() {
            var n = this;
            n.stars.on("click.raty", function(i) {
                var o = !0,
                    a = n.opt.half || n.opt.precision ? n.self.data("score") : this.alt || e(this).data("alt");
                n.opt.click && (o = n.opt.click.call(n, +a, i)), (o || void 0 === o) && (n.opt.half && !n.opt.precision && (a = t._roundHalfScore.call(n, a)), t._apply.call(n, a))
            })
        },
        _bindClickCancel: function() {
            var e = this;
            e.cancel.on("click.raty", function(t) {
                e.score.removeAttr("value"), e.opt.click && e.opt.click.call(e, null, t)
            })
        },
        _bindOut: function() {
            var e = this;
            e.self.on("mouseleave.raty", function(n) {
                var i = +e.score.val() || void 0;
                t._apply.call(e, i), t._target.call(e, i, n), t._resetTitle.call(e), e.opt.mouseout && e.opt.mouseout.call(e, i, n)
            })
        },
        _bindOutCancel: function() {
            var e = this;
            e.cancel.on("mouseleave.raty", function(n) {
                var i = e.opt.cancelOff;
                if ("img" !== e.opt.starType && (i = e.opt.cancelClass + " " + i), t._setIcon.call(e, this, i), e.opt.mouseout) {
                    var o = +e.score.val() || void 0;
                    e.opt.mouseout.call(e, o, n)
                }
            })
        },
        _bindOver: function() {
            var e = this,
                n = e.opt.half ? "mousemove.raty" : "mouseover.raty";
            e.stars.on(n, function(n) {
                var i = t._getScoreByPosition.call(e, n, this);
                t._fill.call(e, i), e.opt.half && (t._roundStars.call(e, i, n), t._setTitle.call(e, i, n), e.self.data("score", i)), t._target.call(e, i, n), e.opt.mouseover && e.opt.mouseover.call(e, i, n)
            })
        },
        _bindOverCancel: function() {
            var e = this;
            e.cancel.on("mouseover.raty", function(n) {
                var i = e.opt.path + e.opt.starOff,
                    o = e.opt.cancelOn;
                "img" === e.opt.starType ? e.stars.attr("src", i) : (o = e.opt.cancelClass + " " + o, e.stars.attr("class", i)), t._setIcon.call(e, this, o), t._target.call(e, null, n), e.opt.mouseover && e.opt.mouseover.call(e, null)
            })
        },
        _buildScoreField: function() {
            return e("<input />", {
                name: this.opt.scoreName,
                type: "hidden"
            }).appendTo(this)
        },
        _createCancel: function() {
            var t = this.opt.path + this.opt.cancelOff,
                n = e("<" + this.opt.starType + " />", {
                    title: this.opt.cancelHint,
                    "class": this.opt.cancelClass
                });
            "img" === this.opt.starType ? n.attr({
                src: t,
                alt: "x"
            }) : n.attr("data-alt", "x").addClass(t), "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(n) : this.self.append("&#160;").append(n), this.cancel = n
        },
        _createScore: function() {
            var n = e(this.opt.targetScore);
            this.score = n.length ? n : t._buildScoreField.call(this)
        },
        _createStars: function() {
            for (var n = 1; n <= this.opt.number; n++) {
                var i = t._nameForIndex.call(this, n),
                    o = {
                        alt: n,
                        src: this.opt.path + this.opt[i]
                    };
                "img" !== this.opt.starType && (o = {
                    "data-alt": n,
                    "class": o.src
                }), o.title = t._getHint.call(this, n), e("<" + this.opt.starType + " />", o).appendTo(this), this.opt.space && this.self.append(n < this.opt.number ? "&#160;" : "")
            }
            this.stars = this.self.children(this.opt.starType)
        },
        _error: function(t) {
            e(this).text(t), e.error(t)
        },
        _fill: function(e) {
            for (var n = 0, i = 1; i <= this.stars.length; i++) {
                var o, a = this.stars[i - 1],
                    r = t._turnOn.call(this, i, e);
                if (this.opt.iconRange && this.opt.iconRange.length > n) {
                    var s = this.opt.iconRange[n];
                    o = t._getRangeIcon.call(this, s, r), i <= s.range && t._setIcon.call(this, a, o), i === s.range && n++
                } else o = this.opt[r ? "starOn" : "starOff"], t._setIcon.call(this, a, o)
            }
        },
        _getFirstDecimal: function(e) {
            var t = e.toString().split(".")[1],
                n = 0;
            return t && (n = parseInt(t.charAt(0), 10), "9999" === t.slice(1, 5) && n++), n
        },
        _getRangeIcon: function(e, t) {
            return t ? e.on || this.opt.starOn : e.off || this.opt.starOff
        },
        _getScoreByPosition: function(n, i) {
            var o = parseInt(i.alt || i.getAttribute("data-alt"), 10);
            if (this.opt.half) {
                var a = t._getWidth.call(this),
                    r = parseFloat((n.pageX - e(i).offset().left) / a);
                o = o - 1 + r
            }
            return o
        },
        _getHint: function(e, n) {
            if (0 !== e && !e) return this.opt.noRatedMsg;
            var i = t._getFirstDecimal.call(this, e),
                o = Math.ceil(e),
                a = this.opt.hints[(o || 1) - 1],
                r = a,
                s = !n || this.move;
            return this.opt.precision ? (s && (i = 0 === i ? 9 : i - 1), r = a[i]) : (this.opt.halfShow || this.opt.half) && (i = s && 0 === i ? 1 : i > 5 ? 1 : 0, r = a[i]), "" === r ? "" : r || e
        },
        _getWidth: function() {
            var e = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
            return e || t._error.call(this, "Could not get the icon width!"), e
        },
        _lock: function() {
            var e = t._getHint.call(this, this.score.val());
            this.style.cursor = "", this.title = e, this.score.prop("readonly", !0), this.stars.prop("title", e), this.cancel && this.cancel.hide(), this.self.data("readonly", !0)
        },
        _nameForIndex: function(e) {
            return this.opt.score && this.opt.score >= e ? "starOn" : "starOff"
        },
        _resetTitle: function(e) {
            for (var n = 0; n < this.opt.number; n++) this.stars[n].title = t._getHint.call(this, n + 1)
        },
        _roundHalfScore: function(e) {
            var n = parseInt(e, 10),
                i = t._getFirstDecimal.call(this, e);
            return 0 !== i && (i = i > 5 ? 1 : .5),
            n + i
        },
        _roundStars: function(e, n) {
            var i, o = (e % 1).toFixed(2);
            if (n || this.move ? i = o > .5 ? "starOn" : "starHalf" : o > this.opt.round.down && (i = "starOn", this.opt.halfShow && o < this.opt.round.up ? i = "starHalf" : o < this.opt.round.full && (i = "starOff")), i) {
                var a = this.opt[i],
                    r = this.stars[Math.ceil(e) - 1];
                t._setIcon.call(this, r, a)
            }
        },
        _setIcon: function(e, t) {
            e["img" === this.opt.starType ? "src" : "className"] = this.opt.path + t
        },
        _setTarget: function(e, t) {
            t && (t = this.opt.targetFormat.toString().replace("{score}", t)), e.is(":input") ? e.val(t) : e.html(t)
        },
        _setTitle: function(e, n) {
            if (e) {
                var i = parseInt(Math.ceil(e), 10),
                    o = this.stars[i - 1];
                o.title = t._getHint.call(this, e, n)
            }
        },
        _target: function(n, i) {
            if (this.opt.target) {
                var o = e(this.opt.target);
                o.length || t._error.call(this, "Target selector invalid or missing!");
                var a = i && "mouseover" === i.type;
                if (void 0 === n) n = this.opt.targetText;
                else if (null === n) n = a ? this.opt.cancelHint : this.opt.targetText;
                else {
                    "hint" === this.opt.targetType ? n = t._getHint.call(this, n, i) : this.opt.precision && (n = parseFloat(n).toFixed(1));
                    var r = i && "mousemove" === i.type;
                    a || r || this.opt.targetKeep || (n = this.opt.targetText)
                }
                t._setTarget.call(this, o, n)
            }
        },
        _turnOn: function(e, t) {
            return this.opt.single ? e === t : t >= e
        },
        _unlock: function() {
            this.style.cursor = "pointer", this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1);
            for (var e = 0; e < this.opt.number; e++) this.stars[e].title = t._getHint.call(this, e + 1);
            this.cancel && this.cancel.css("display", "")
        },
        cancel: function(n) {
            return this.each(function() {
                var i = e(this);
                i.data("readonly") !== !0 && (t[n ? "click" : "score"].call(i, null), this.score.removeAttr("value"))
            })
        },
        click: function(n) {
            return this.each(function() {
                e(this).data("readonly") !== !0 && (n = t._adjustedScore.call(this, n), t._apply.call(this, n), this.opt.click && this.opt.click.call(this, n, e.Event("click")), t._target.call(this, n))
            })
        },
        destroy: function() {
            return this.each(function() {
                var t = e(this),
                    n = t.data("raw");
                n ? t.off(".raty").empty().css({
                    cursor: n.style.cursor
                }).removeData("readonly") : t.data("raw", t.clone()[0])
            })
        },
        getScore: function() {
            var e, t = [];
            return this.each(function() {
                e = this.score.val(), t.push(e ? +e : void 0)
            }), t.length > 1 ? t : t[0]
        },
        move: function(n) {
            return this.each(function() {
                var i = parseInt(n, 10),
                    o = t._getFirstDecimal.call(this, n);
                i >= this.opt.number && (i = this.opt.number - 1, o = 10);
                var a = t._getWidth.call(this),
                    r = a / 10,
                    s = e(this.stars[i]),
                    l = s.offset().left + r * o,
                    c = e.Event("mousemove", {
                        pageX: l
                    });
                this.move = !0, s.trigger(c), this.move = !1
            })
        },
        readOnly: function(n) {
            return this.each(function() {
                var i = e(this);
                i.data("readonly") !== n && (n ? (i.off(".raty").children("img").off(".raty"), t._lock.call(this)) : (t._binds.call(this), t._unlock.call(this)), i.data("readonly", n))
            })
        },
        reload: function() {
            return t.set.call(this, {})
        },
        score: function() {
            var n = e(this);
            return arguments.length ? t.setScore.apply(n, arguments) : t.getScore.call(n)
        },
        set: function(t) {
            return this.each(function() {
                e(this).raty(e.extend({}, this.opt, t))
            })
        },
        setScore: function(n) {
            return this.each(function() {
                e(this).data("readonly") !== !0 && (n = t._adjustedScore.call(this, n), t._apply.call(this, n), t._target.call(this, n))
            })
        }
    };
    e.fn.raty = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist!") : t.init.apply(this, arguments)
    }, e.fn.raty.defaults = {
        cancel: !1,
        cancelClass: "raty-cancel",
        cancelHint: "Cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png",
        cancelPlace: "left",
        click: void 0,
        half: !1,
        halfShow: !0,
        hints: ["bad", "poor", "regular", "good", "gorgeous"],
        iconRange: void 0,
        mouseout: void 0,
        mouseover: void 0,
        noRatedMsg: "Not rated yet!",
        number: 5,
        numberMax: 20,
        path: void 0,
        precision: !1,
        readOnly: !1,
        round: {
            down: .25,
            full: .6,
            up: .76
        },
        score: void 0,
        scoreName: "score",
        single: !1,
        space: !0,
        starHalf: "star-half.png",
        starOff: "star-off.png",
        starOn: "star-on.png",
        starType: "img",
        target: void 0,
        targetFormat: "{score}",
        targetKeep: !1,
        targetScore: void 0,
        targetText: "",
        targetType: "hint"
    }
}(jQuery);
var GTA5M = {} || GTA5M;
$.ajaxSetup({
    headers: {
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
    }
}), I18n.fallbacks = !0;
var $comments = $("#comments").on("click", "a.comment-delete", function(e) {
    e.preventDefault();
    var t = $(this).closest(".comment").data("comment-id");
    GTA5M.Utils.confirm(I18n.t("comment.delete.confirm"), function() {
        GTA5M.API["delete"]({
            url: "/comment/destroy/" + t
        });
        var e = $(".num-comments");
        if (e.length) {
            var n = e.data("count") - 1;
            e.data("count", n).text(I18n.t("comment.label", {
                count: n,
                display_count: n.toLocaleString(I18n.locale)
            }))
        }
        $(".comment[data-comment-id=" + t + "]", $comments).fadeOut("fast", function() {
            $(this).remove()
        })
    })
});
$.extend($.fn.raty.defaults, {
    scoreName: "rating",
    space: !1,
    cancel: !0,
    cancelOn: "fa fa-times-circle",
    cancelOff: "fa fa-times-circle-o",
    half: !0,
    starType: "i",
    starOn: "fa fa-star",
    starOff: "fa fa-star-o",
    starHalf: "fa fa-star-half-o",
    hints: [I18n.t("user_file.rating.star1"), I18n.t("user_file.rating.star2"), I18n.t("user_file.rating.star3"), I18n.t("user_file.rating.star4"), I18n.t("user_file.rating.star5")],
    cancelHint: I18n.t("user_file.rating.cancel")
}), $(".comment-rating, .comment-average-rating").raty({
    readOnly: !0,
    score: function() {
        return $(this).attr("data-rating")
    }
}),
function() {
    var e = $("ul.pagination");
    if (e.length) {
        var t = parseInt(e.data("page"), 10),
            n = parseInt(e.data("total"), 10);
        1 === t ? $(".previous", e).addClass("disabled") : t === n && $(".next", e).addClass("disabled"), $("li[data-page=" + t + "]", e).addClass("active")
    }
}(), $(function() {
    function e() {
        o.val("").prop("disabled", !1), a.html("").hide(), $(".preview", n).show(), $(".save", n).hide(), i = "ENTRY"
    }

    function t() {
        o.prop("disabled", !0), $(".preview", n).hide(), $(".save", n).show(), n.hideErrors(), i = "SAVE"
    }
    var n = $("#add-video-modal");
    if (n.length) {
        var i, o = $("input[name=video_url]", n),
            a = $(".video-preview", n);
        n.on("shown.bs.modal", function() {
            o.focus(), e()
        }).on("hidden.bs.modal", function() {
            e(), n.hideErrors()
        });
        var r = $(".preview", n).click(function(e) {
            e.preventDefault();
            var i, r, s, l, c = o.val();
            if (-1 !== c.indexOf("youtube.com/watch") || -1 !== c.indexOf("youtu.be/")) {
                var u = c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                u && 11 === u[2].length && (r = u[2])
            } else -1 !== c.indexOf("dailymotion.com/video/") ? (i = c.split("/video/"), i = i[i.length - 1].split("_"), s = i[0]) : -1 !== c.indexOf("vimeo.com/") && (i = c.split("/"), l = i[i.length - 1]);
            if (r || s || l) {
                var d;
                d = r ? "https://www.youtube.com/embed/" + r + "?rel=0" : s ? "http://www.dailymotion.com/embed/video/" + s : "https://player.vimeo.com/video/" + l, a.html($("<iframe>", {
                    width: 560,
                    height: 315,
                    src: d,
                    frameborder: 0,
                    allowfullscreen: "allowfullscreen"
                })).show(), t()
            } else $(".alert-parse", n).removeClass("collapse")
        }),
            s = $("form", n).submit(function(t) {
                t.preventDefault(), "ENTRY" === i ? r.trigger("click") : GTA5M.API.post({
                    url: "/video/create/",
                    data: {
                        video: {
                            user_file_id: $("input[name=user_file_id]", this).val(),
                            video_url: o.val()
                        }
                    },
                    success: function() {
                        window.location.reload(!0)
                    },
                    error: function(t) {
                        s.showError(t), e(), o.focus()
                    }
                })
            })
    }
}),
function() {
    var e = $("#header"),
        t = $("#banner"),
        n = $("#page-cover");
    $("a.language-dropdown", e).click(function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).toggleClass("active"),
            n = $(".language-dropdown-menu").toggle();
        n.is(":visible") ? $(document).on("click.dropdown.language", function(e) {
            n.has($(e.target)).length || (t.removeClass("active"), n.hide(), $(this).off("click.dropdown.language"))
        }) : $(document).off("click.dropdown.language")
    }), $("a.search-dropdown", e).click(function(e) {
        function t() {
            i.removeClass("active"), o.hide(), a.val(""), $(document).off("click.dropdown.search").off("keydown.dropdown.search")
        }

        function n() {
            var e = $.trim(a.val());
            e.length ? window.location.href = "/search/" + encodeURIComponent(e.replace("/", "-")).replace("%20", "+") : a.focus()
        }
        e.preventDefault(), e.stopPropagation();
        var i = $(this).toggleClass("active"),
            o = $(".search-dropdown-menu").toggle(),
            a = $("input", o);
        o.is(":visible") ? ($(document).on("click.dropdown.search", function(e) {
            o.has($(e.target)).length || t()
        }), $(document).on("keydown.dropdown.search", function(e) {
            13 === e.which ? n() : 27 === e.which && t()
        }), $("button", o).click(n), a.focus()) : t()
    }), $("a.notification-dropdown", e).click(function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).toggleClass("active"),
            n = $(".notification-dropdown-menu").toggle();
        n.is(":visible") ? ($(document).on("click.dropdown.notification", function(e) {
            n.has($(e.target)).length || (t.removeClass("active"), n.hide(), $(this).off("click.dropdown.notification"))
        }), $(".badge", this).remove(), $(this).hasClass("fetched") || GTA5M.API.get({
            url: "/user/notifications",
            success: function() {
                t.addClass("fetched")
            }
        }), n.css("right", t.closest(".container").width() - (t.position().left + t.outerWidth()) + 15)) : $(document).off("click.dropdown.notification")
    }), $("a.user-dropdown", e).click(function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).toggleClass("active"),
            n = $(".user-dropdown-menu").toggle();
        n.is(":visible") ? ($(document).on("click.dropdown.user", function(e) {
            n.has($(e.target)).length || (t.removeClass("active"), n.hide(), $(this).off("click.dropdown.user"))
        }), n.css("right", t.closest(".container").width() - (t.position().left + t.outerWidth()) + 15)) : $(document).off("click.dropdown.user")
    }), $(".open-menu", e).click(function(e) {
        e.preventDefault(), t.addClass("open"), n.addClass("active").on("click.close", function() {
            $(".close-menu", t).trigger("click")
        }), $("body").addClass("page-covered")
    }), $(".close-menu", t).click(function(e) {
        e.preventDefault(), t.removeClass("open"), n.removeClass("active").off("click.close"), $("body").removeClass("page-covered")
    })
}(),
/*!
 * JavaScript Cookie v2.0.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
function(e) {
    if ("function" == typeof define && define.amd) define(e);
    else if ("object" == typeof exports) module.exports = e();
    else {
        var t = window.Cookies,
            n = window.Cookies = e();
        n.noConflict = function() {
            return window.Cookies = t, n
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }

    function t(n) {
        function i(t, o, a) {
            var r;
            if (arguments.length > 1) {
                if (a = e({
                    path: "/"
                }, i.defaults, a), "number" == typeof a.expires) {
                    var s = new Date;
                    s.setMilliseconds(s.getMilliseconds() + 864e5 * a.expires), a.expires = s
                }
                try {
                    r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
                } catch (l) {}
                return o = encodeURIComponent(String(o)), o = o.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", o, a.expires && "; expires=" + a.expires.toUTCString(), a.path && "; path=" + a.path, a.domain && "; domain=" + a.domain, a.secure ? "; secure" : ""].join("")
            }
            t || (r = {});
            for (var c = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < c.length; d++) {
                var p = c[d].split("="),
                    h = p[0].replace(u, decodeURIComponent),
                    m = p.slice(1).join("=");
                '"' === m.charAt(0) && (m = m.slice(1, -1));
                try {
                    if (m = n && n(m, h) || m.replace(u, decodeURIComponent), this.json) try {
                        m = JSON.parse(m)
                    } catch (l) {}
                    if (t === h) {
                        r = m;
                        break
                    }
                    t || (r[h] = m)
                } catch (l) {}
            }
            return r
        }
        return i.get = i.set = i, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(t, n) {
            i(t, "", e(n, {
                expires: -1
            }))
        }, i.withConverter = t, i
    }
    return t()
});
var CategoryController = Paloma.controller("Category");
CategoryController.prototype.index = function() {
    var e = $("#category"),
        t = e.data("category-id"),
        n = $(".filters-container", e),
        i = $(".filters-list", n);
    $(".input-parent", i).change(function() {
        $(".input-child", $(this).closest("li")).prop("checked", $(this).prop("checked"))
    }), $(".input-child", i).change(function() {
        var e = $(this).closest("ul"),
            t = $(".input-parent", e.closest("li")),
            n = $("input:checked", e);
        t.prop("checked", $(this).prop("checked") || n.length > 0), t[0].indeterminate = t.prop("checked") && $("input", e).length !== n.length
    }), $("a", i).click(function(e) {
        e.preventDefault(), $("input", i).prop("checked", !1).trigger("change"), $("input", $(this).parent()).prop("checked", !0).trigger("change"), o.trigger("click")
    });
    var o = $(".submit-filters", n).click(function(e) {
        e.preventDefault();
        var n = [];
        $("input[data-subcategory-id]:checked", i).each(function() {
            n.push($(this).data("subcategory-id"))
        });
        var o = Cookies.getJSON("category_filters") || {};
        $("input:checked", i).length === $("input", i).length ? delete o[t] : o[t] = n, Cookies.set("category_filters", o, {
            path: "/",
            expires: 365
        }), window.location.reload(!0)
    })
};
var GeneralController = Paloma.controller("General");
GeneralController.prototype.home = function() {
    var e, t = $("#featured"),
        n = function() {
            clearInterval(e), e = setInterval(function() {
                var e = $("ul li.active", t).next();
                e.length || (e = $("ul li:first-child", t)), i(e)
            }, 3500)
        }, i = function(e) {
            n(), $("ul li", t).removeClass("active"), e.addClass("active"), $(".main", t).removeClass("active"), $(".main:nth-child(" + (e.index() + 1) + ")", t).addClass("active")
        };
    n(), $("ul li a", t).click(function(e) {
        var t = $(this).closest("li");
        t.hasClass("active") || (e.preventDefault(), i(t))
    })
};
var PasswordsController = Paloma.controller("Passwords");
PasswordsController.prototype["new"] = function() {
    var e = $("#forgot-password"),
        t = $("form", e).on("ajax:beforeSend", function(e, t) {
            var i = $('input[name="user[email]"]');
            i.val().length ? n.button("loading") : (i.focus(), t.abort())
        }).on("ajax:success", function() {
            $(this).hideErrors(), $(".alert-success", this).removeClass("collapse"), $(".form-inputs", this).hide()
        }).on("ajax:error", function(e, t) {
            $(".alert-error", this).removeClass("collapse").text(t.responseJSON.errors), n.button("reset")
        }),
        n = $("[type=submit]", t)
}, PasswordsController.prototype.edit = function() {
    var e = $("#reset-password");
    $("form", e).on("ajax:success", function() {
        window.location.href = "/"
    }).on("ajax:error", function(e, t) {
        $(".alert-error", this).removeClass("collapse").text(t.responseJSON.errors)
    })
};
var RegistrationsController = Paloma.controller("Registrations");
RegistrationsController.prototype["new"] = function() {
    function e(e, t) {
        var i = n.find('input[name="user[' + e + ']"]');
        i.closest(".form-group").addClass("has-error"), $("<li>").text(t).appendTo(o)
    }
    var t = $("#register"),
        n = $("form", t).on("ajax:beforeSend", function(t, n) {
            var r = $('[name="user[email]"]', this),
                s = $('[name="user[email_confirmation]"]', this);
            r.val().length ? s.val().length ? r.val() !== s.val() ? (i.removeClass("collapse"), o.empty(), e("email_confirmation", I18n.t("activerecord.errors.models.user.attributes.email_confirmation.incorrect")), s.focus(), n.abort()) : a.button("loading") : (s.focus(), n.abort()) : (r.focus(), n.abort())
        }).on("ajax:success", function() {
            $(".form-group", n).hide(), $(".alert-error", n).hide(), $(".alert-success", n).removeClass("collapse")
        }).on("ajax:error", function(t, n) {
            a.button("reset"), $("input", this).closest(".form-group").removeClass("has-error"), i.removeClass("collapse"), o.empty(), $.each(n.responseJSON.errors, e)
        }),
        i = $(".alert-error", n),
        o = $("ul", i).empty(),
        a = $("[type=submit]", n)
};
var SessionsController = Paloma.controller("Sessions");
GTA5M.Captcha = {
    element: "captcha",
    sitekey: "6LcG0QcTAAAAADD35b4iX35o_pg7B1P4DQlfaZVH",
    widget: null,
    verified: !0,
    show: function() {
        this.verified = !1, null !== this.widget ? grecaptcha.reset(this.widget) : this.widget = grecaptcha.render(this.element, {
            sitekey: this.sitekey,
            callback: function(e) {
                GTA5M.Captcha.verified = e && e.length
            }
        })
    }
};
var onRecaptchaLoaded = function() {
    $("#captcha").data("required") && GTA5M.Captcha.show()
};
SessionsController.recaptcha_sitekey = "", SessionsController.prototype["new"] = function() {
    var e = $("#login"),
        t = $("form", e).submit(function(e) {
            return $('input[name="user[username]"]', this).val().length && $('input[name="user[password]"]', this).val().length ? GTA5M.Captcha.verified ? void n.button("loading") : (e.preventDefault(), $(this).showError(null, I18n.t("user.login.captcha_incorrect")), !1) : (e.preventDefault(), $(this).showError(null, I18n.t("user.login.unauthorized")), !1)
        }).on("ajax:success", function() {
            window.location = GTA5M.Utils.getQueryRedirect()
        }).on("ajax:error", function(e, t) {
            var i = t.responseJSON;
            $(this).showError(null, i.errors), i.captcha_required && GTA5M.Captcha.show(), i.token && $.ajaxSetup({
                headers: {
                    "X-CSRF-Token": i.token
                }
            }), n.button("reset")
        }),
        n = $("[type=submit]", t);
    e.on("click", "a.resend", function(e) {
        e.preventDefault(), GTA5M.API.post({
            url: "/confirmation/resend",
            data: {
                email: $(this).data("email")
            },
            success: function() {
                t.hideErrors()
            }
        })
    })
},
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, i) {
        var o, a, r, s = t.nodeName.toLowerCase();
        return "area" === s ? (o = t.parentNode, a = o.name, t.href && a && "map" === o.nodeName.toLowerCase() ? (r = e("img[usemap='#" + a + "']")[0], !! r && n(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(s) ? !t.disabled : "a" === s ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var n = this.css("position"),
                i = "absolute" === n,
                o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() {
                    var t = e(this);
                    return i && "static" === t.css("position") ? !1 : o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(n) {
            return t(n, !isNaN(e.attr(n, "tabindex")))
        },
        tabbable: function(n) {
            var i = e.attr(n, "tabindex"),
                o = isNaN(i);
            return (o || i >= 0) && t(n, !o)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
        function i(t, n, i, a) {
            return e.each(o, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            a = n.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(t) {
            return void 0 === t ? r["inner" + n].call(this) : this.each(function() {
                e(this).css(a, i(this, t) + "px")
            })
        }, e.fn["outer" + n] = function(t, o) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                e(this).css(a, i(this, t, !0, o) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), i && i.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var n, i, o = e(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(o.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    o = o.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, n, i) {
            var o, a = e.ui[t].prototype;
            for (o in i) a.plugins[o] = a.plugins[o] || [], a.plugins[o].push([n, i[o]])
        },
        call: function(e, t, n, i) {
            var o, a = e.plugins[t];
            if (a && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (o = 0; o < a.length; o++) e.options[a[o][0]] && a[o][1].apply(e.element, n)
        }
    }
}),
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    var t = 0,
        n = Array.prototype.slice;
    return e.cleanData = function(t) {
        return function(n) {
            var i, o, a;
            for (a = 0; null != (o = n[a]); a++) try {
                i = e._data(o, "events"), i && i.remove && e(o).triggerHandler("remove")
            } catch (r) {}
            t(n)
        }
    }(e.cleanData), e.widget = function(t, n, i) {
        var o, a, r, s, l = {}, c = t.split(".")[0];
        return t = t.split(".")[1], o = c + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][o.toLowerCase()] = function(t) {
            return !!e.data(t, o)
        }, e[c] = e[c] || {}, a = e[c][t], r = e[c][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
        }, e.extend(r, a, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
            return e.isFunction(i) ? void(l[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }, o = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = o, t = i.apply(this, arguments), this._super = n, this._superApply = a, t
                }
            }()) : void(l[t] = i)
        }), r.prototype = e.widget.extend(s, {
            widgetEventPrefix: a ? s.widgetEventPrefix || t : t
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: t,
            widgetFullName: o
        }), a ? (e.each(a._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, r, n._proto)
        }), delete a._childConstructors) : n._childConstructors.push(r), e.widget.bridge(t, r), r
    }, e.widget.extend = function(t) {
        for (var i, o, a = n.call(arguments, 1), r = 0, s = a.length; s > r; r++)
            for (i in a[r]) o = a[r][i], a[r].hasOwnProperty(i) && void 0 !== o && (e.isPlainObject(o) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], o) : e.widget.extend({}, o) : t[i] = o);
        return t
    }, e.widget.bridge = function(t, i) {
        var o = i.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var r = "string" == typeof a,
                s = n.call(arguments, 1),
                l = this;
            return r ? this.each(function() {
                var n, i = e.data(this, o);
                return "instance" === a ? (l = i, !1) : i ? e.isFunction(i[a]) && "_" !== a.charAt(0) ? (n = i[a].apply(i, s), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
            }) : (s.length && (a = e.widget.extend.apply(null, [a].concat(s))), this.each(function() {
                var t = e.data(this, o);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, o, new i(a, this))
            })), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(n, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, n) {
            var i, o, a, r = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (r = {}, i = t.split("."), t = i.shift(), i.length) {
                    for (o = r[t] = e.widget.extend({}, this.options[t]), a = 0; a < i.length - 1; a++) o[i[a]] = o[i[a]] || {}, o = o[i[a]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                    o[t] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    r[t] = n
                }
            return this._setOptions(r), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !! t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, n, i) {
            var o, a = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), e.each(i, function(i, r) {
                function s() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : void 0
                }
                "string" != typeof r && (s.guid = r.guid = r.guid || s.guid || e.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/),
                    c = l[1] + a.eventNamespace,
                    u = l[2];
                u ? o.delegate(u, c, s) : n.bind(c, s)
            })
        },
        _off: function(t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var o, a, r = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], a = n.originalEvent)
                for (o in a) o in n || (n[o] = a[o]);
            return this.element.trigger(n, i), !(e.isFunction(r) && r.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, o, a) {
            "string" == typeof o && (o = {
                effect: o
            });
            var r, s = o ? o === !0 || "number" == typeof o ? n : o.effect || n : t;
            o = o || {}, "number" == typeof o && (o = {
                duration: o
            }), r = !e.isEmptyObject(o), o.complete = a, o.delay && i.delay(o.delay), r && e.effects && e.effects.effect[s] ? i[t](o) : s !== t && i[s] ? i[s](o.duration, o.easing, a) : i.queue(function(n) {
                e(this)[t](), a && a.call(i[0]), n()
            })
        }
    }), e.widget
}),
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], e) : e(jQuery)
}(function(e) {
    var t = !1;
    return e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    o = 1 === n.which,
                    a = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return o && !a && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(n) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(n)), t = !1, !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}),
/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], e) : e(jQuery)
}(function(e) {
    return e.widget("ui.sortable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(e, t, n) {
            return e >= t && t + n > e
        },
        _isFloating: function(e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, n) {
            var i = null,
                o = !1,
                a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, a.widgetName + "-item") === a ? (i = e(this), !1) : void 0
            }), e.data(t.target, a.widgetName + "-item") === a && (i = e(t.target)), i && (!this.options.handle || n || (e(this.options.handle, i).find("*").addBack().each(function() {
                this === t.target && (o = !0)
            }), o)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(t, n, i) {
            var o, a, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", r.cursor), this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(a)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var n, i, o, a, r = this.options,
                s = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - this.document.scrollTop() < r.scrollSensitivity ? s = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < r.scrollSensitivity && (s = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), t.pageX - this.document.scrollLeft() < r.scrollSensitivity ? s = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (s = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), s !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                if (i = this.items[n], o = i.item[0], a = this._intersectsWithPointer(i), a && i.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== o && !e.contains(this.placeholder[0], o) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], o) : !0)) {
                    if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                    this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, n) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this,
                        o = this.placeholder.offset(),
                        a = this.options.axis,
                        r = {};
                    a && "x" !== a || (r.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (r.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(t)
                    })
                } else this._clear(t, n);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, n.each(function() {
                i.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                i = this.positionAbs.top,
                o = i + this.helperProportions.height,
                a = e.left,
                r = a + e.width,
                s = e.top,
                l = s + e.height,
                c = this.offset.click.top,
                u = this.offset.click.left,
                d = "x" === this.options.axis || i + c > s && l > i + c,
                p = "y" === this.options.axis || t + u > a && r > t + u,
                h = d && p;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : a < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < r && s < i + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                i = t && n,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return i ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                i = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n : i && ("down" === i && t || "up" === i && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function n() {
                s.push(this)
            }
            var i, o, a, r, s = [],
                l = [],
                c = this._connectWith();
            if (c && t)
                for (i = c.length - 1; i >= 0; i--)
                    for (a = e(c[i], this.document[0]), o = a.length - 1; o >= 0; o--) r = e.data(a[o], this.widgetFullName), r && r !== this && !r.options.disabled && l.push([e.isFunction(r.options.items) ? r.options.items.call(r.element) : e(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--) l[i][0].each(n);
            return e(s)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var n, i, o, a, r, s, l, c, u = this.items,
                d = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                p = this._connectWith();
            if (p && this.ready)
                for (n = p.length - 1; n >= 0; n--)
                    for (o = e(p[n], this.document[0]), i = o.length - 1; i >= 0; i--) a = e.data(o[i], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                        item: this.currentItem
                    }) : e(a.options.items, a.element), a]), this.containers.push(a));
            for (n = d.length - 1; n >= 0; n--)
                for (r = d[n][1], s = d[n][0], i = 0, c = s.length; c > i; i++) l = e(s[i]), l.data(this.widgetName + "-item", r), u.push({
                    item: l,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, i, o, a;
            for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item, t || (i.width = o.outerWidth(), i.height = o.outerHeight()), a = o.offset(), i.left = a.left, i.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--) a = this.containers[n].element.offset(), this.containers[n].containerCache.left = a.left, this.containers[n].containerCache.top = a.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var n, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function() {
                    var i = t.currentItem[0].nodeName.toLowerCase(),
                        o = e("<" + i + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(o)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, o) : "img" === i && o.attr("src", t.currentItem.attr("src")), n || o.css("visibility", "hidden"), o
                },
                update: function(e, o) {
                    (!n || i.forcePlaceholderSize) && (o.height() || o.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, n) {
            var i = this;
            t.children().each(function() {
                e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
            })
        },
        _contactContainers: function(t) {
            var n, i, o, a, r, s, l, c, u, d, p = null,
                h = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (p && e.contains(this.containers[n].element[0], p.element[0])) continue;
                        p = this.containers[n], h = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (p)
                if (1 === this.containers.length) this.containers[h].containerCache.over || (this.containers[h]._trigger("over", t, this._uiHash(this)), this.containers[h].containerCache.over = 1);
                else {
                    for (o = 1e4, a = null, u = p.floating || this._isFloating(this.currentItem), r = u ? "left" : "top", s = u ? "width" : "height", d = u ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) e.contains(this.containers[h].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[r], c = !1, t[d] - l > this.items[i][s] / 2 && (c = !0), Math.abs(t[d] - l) < o && (o = Math.abs(t[d] - l), a = this.items[i], this.direction = c ? "up" : "down"));
                    if (!a && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[h]) return void(this.currentContainer.containerCache.over || (this.containers[h]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[h].element, !0), this._trigger("change", t, this._uiHash()), this.containers[h]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[h], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[h]._trigger("over", t, this._uiHash(this)), this.containers[h].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var n = this.options,
                i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, i, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (t = e(o.containment)[0], n = e(o.containment).offset(), i = "hidden" !== e(t).css("overflow"), this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" === t ? 1 : -1,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(o[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : o.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : o.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var n, i, o = this.options,
                a = t.pageX,
                r = t.pageY,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(s[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), o.grid && (n = this.originalPageY + Math.round((r - this.originalPageY) / o.grid[1]) * o.grid[1], r = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - o.grid[1] : n + o.grid[1] : n, i = this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0], a = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - o.grid[0] : i + o.grid[0] : i)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : s.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function() {
                o === this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function(e, t) {
            function n(e, t, n) {
                return function(i) {
                    n._trigger(e, i, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && o.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || o.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (t || (o.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }), o.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), o.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || o.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (o.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (i = 0; i < o.length; i++) o[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
});
var UserFileController = UserFileController || Paloma.controller("UserFile");
UserFileController.prototype.upload = function() {
    var e = $("#upload"),
        t = $("form", e),
        n = this.params.user_file || {}, i = this.params.s3_url,
        o = this.params.s3_file_fields,
        a = this.params.s3_image_fields,
        r = $("input[name=file]", t),
        s = n.images || [],
        l = !1,
        c = function() {
            $.pageLoading(I18n.t("upload.loading.creating_file")), n.file_url = null, GTA5M.API.post({
                url: "/file/create",
                data: {
                    user_file: n
                },
                success: function(e) {
                    e && e.user_file ? (n = e.user_file, i = e.s3_url, o = e.s3_file_fields, a = e.s3_image_fields, d()) : t.showError()
                },
                error: function(e) {
                    t.showError(e), l = !1
                }
            })
        }, u = function() {
            $.pageLoading(I18n.t("upload.loading.saving_file")), GTA5M.API.post({
                url: "/file/update",
                data: {
                    user_file: n
                },
                success: function(e) {
                    e && e.user_file ? window.location = e.user_file.full_url : (l = !1, t.showError())
                },
                error: function(e) {
                    l = !1, t.showError(e)
                }
            })
        }, d = function() {
            var e = function() {
                n.file_url && (d === p ? (n.images = s, u()) : $.pageLoading(I18n.t("upload.loading.uploading_screenshots") + " " + (p + 1) + "/" + d))
            }, c = r.get(0).files[0];
            c && (n.file_url = null, function() {
                $.pageLoading(I18n.t("upload.loading.uploading_archive"));
                var a = new FormData;
                $.each(o, function(e, t) {
                    a.append(e, t)
                }), a.append("file", c), a.append("Content-Type", c.type), GTA5M.API.s3_post({
                    url: i,
                    data: a,
                    success: function(t) {
                        n.file_url = $("Key", t).text(), e()
                    },
                    error: function(e) {
                        var i = $("Message", e.responseXML).text();
                        t.showError(null, i), NREUM.noticeError(new Error("Error uploading file (user_file_id: " + n.id + "): " + i)), l = !1
                    }
                })
            }()), n.images = [];
            var d = 0,
                p = 0;
            s.length && $.each(s, function(o, r) {
                if (r instanceof File) {
                    d++;
                    var l = new FormData;
                    $.each(a, function(e, t) {
                        l.append(e, t)
                    }), l.append("file", r), l.append("Content-Type", r.type), GTA5M.API.s3_post({
                        url: i,
                        data: l,
                        success: function(t) {
                            s[o] = $("Key", t).text(), p++, e()
                        },
                        error: function(e) {
                            var i = $("Message", e.responseXML).text();
                            t.showError(null, i), NREUM.noticeError(new Error("Error uploading image (user_file_id: " + n.id + "): " + i))
                        }
                    })
                }
            }), e()
        };
    t.submit(function(e) {
        if (e.preventDefault(), !l) {
            var i = ["name", "version", "author", "category_id", "subcategory_ids[]", "description", "gtaforums_url", "virustotal_url", "uploaded_by_author", "is_approved", "apply_pending_version", "is_rejected"],
                o = $(this).serializeArray();
            if (n.subcategory_ids = [], $.each(o, function(e, t) {
                -1 !== i.indexOf(t.name) && ("subcategory_ids[]" === t.name ? n.subcategory_ids.push(t.value) : (n[t.name] = "on" === t.value ? !0 : t.value, i.splice(i.indexOf(t.name), 1)))
            }), $.each(i, function(e, t) {
                n[t] = !1
            }), n.name.isEmpty()) return t.showError(null, I18n.t("upload.error.required.file_name"));
            if (n.author.isEmpty()) return t.showError(null, I18n.t("upload.error.required.author"));
            if (!n.category_id) return t.showError(null, I18n.t("upload.error.required.category"));
            if (!n.file_url && !r.val()) return t.showError(null, I18n.t("upload.error.required.file"));
            l = !0, n.id ? d() : c()
        }
    }), $("#input-file", e).change(function() {
        var e = this.files[0];
        if (e) {
            var n = null,
                i = e.name.split("."),
                o = i[i.length - 1];
            e.size > 104857600 ? n = I18n.t("upload.error.restrictions.file_size") : "application/zip" !== e.type && "application/x-rar-compressed" !== e.type && "zip" !== o && "rar" !== o && "oiv" !== o && (n = I18n.t("upload.error.restrictions.file_type")), n ? (t.showError(null, n), $(this).wrap("<form>").closest("form").get(0).reset(), $(this).unwrap()) : t.hideErrors()
        }
    }), $("#input-images", e).change(function() {
        var n = 0,
            i = 0;
        t.hideErrors(), $.each(this.files, function(o, a) {
            if (s.length < 15)
                if (a.size <= 2097152) {
                    var r = a.name.split("."),
                        l = r[r.length - 1];
                    if ("image/jpeg" === a.type || "image/png" === a.type || "jpg" === l || "jpeg" === l || "png" === l) {
                        var c = new FileReader;
                        c.onload = function(t) {
                            var n = $(".image-list", e),
                                i = $(".template", n).clone().removeClass("template").appendTo(n);
                            $("img", i).attr("src", t.target.result).data("file", a)
                        }, s.push(a), c.readAsDataURL(a)
                    } else i++
                } else n++;
                else t.showError(null, I18n.t("upload.error.restrictions.image_limit"))
        }), n > 0 ? t.showError(null, I18n.t("upload.error.restrictions.image_size", {
            count: n
        })) : i > 0 && t.showError(null, I18n.t("upload.error.restrictions.image_type", {
            count: i
        })), $(this).wrap("<form>").closest("form").get(0).reset(), $(this).unwrap()
    }), $(".image-list", e).on("click", "button", function(e) {
        e.preventDefault();
        var t = $(this).closest(".image-item");
        s.splice(t.index() - 1, 1), t.remove()
    }).sortable({
        update: function() {
            s = [], $(".image-item:visible:not(.ui-sortable-placeholder)", $(this)).each(function(e, t) {
                var n = $("img", t);
                n.data("file") ? s.push(n.data("file")) : s.push(n.data("image"))
            })
        }
    }).magnificPopup({
        delegate: "a",
        type: "image"
    }),
    function() {
        function t() {
            var e = $("option:selected", i).data("slug");
            n.show().not("." + e).hide(), $("input:hidden", n).prop("checked", !1)
        }
        var n = $(".subcategories", e),
            i = $("#input-category", e).change(t);
        t()
    }()
};
var UserController = UserController || Paloma.controller("User");
UserController.prototype.settings = function() {
    var e = $("#settings");
    ! function(t) {
        function n() {
            d.wrap("<form>").closest("form").get(0).reset(), d.unwrap()
        }

        function i() {
            $("li", r).removeClass("active")
        }
        var o = $("#form-account", e),
            a = $(".custom-avatar-form", o),
            r = $(".avatar-list", o),
            s = null,
            l = {
                avatar_url: t.avatar_url
            }, c = t.s3_url,
            u = t.s3_avatar_fields,
            d = $("input[name=custom_avatar]", e).change(function() {
                var e = this.files[0];
                if (e) {
                    var t = null;
                    if (GTA5M.Utils.isFileUnderSize(e, "avatar"))
                        if (GTA5M.Utils.isFileSupportedImage(e)) {
                            var r = new FileReader;
                            r.onload = function(e) {
                                $("img", a).attr("src", e.target.result)
                            }, s = e, r.readAsDataURL(e), i()
                        } else t = I18n.t("settings.account.avatar.error.image_type");
                        else t = I18n.t("settings.account.avatar.error.image_size");
                    t ? (o.showError(null, t), n()) : o.hideErrors()
                }
            });
        $("a", r).click(function(e) {
            e.preventDefault(), n(), i(), $(this).closest("li").addClass("active"), $("img", a).attr("src", $("img", this).attr("src")), l.avatar_url = $(this).data("avatar-url")
        }), o.submit(function(e) {
            function t() {
                $.pageLoading(I18n.t("settings.account.loading.saving_settings")), GTA5M.API.post({
                    url: "/user/update",
                    data: {
                        user: l
                    },
                    success: function() {
                        window.location.reload(!0)
                    },
                    error: function(e) {
                        o.showError(e)
                    }
                })
            }
            e.preventDefault(), $.each($(this).serializeArray(), function(e, t) {
                l[t.name] = t.value
            }), s ? (l.avatar_url = null, $.pageLoading(I18n.t("settings.account.loading.uploading_avatar")), function() {
                var e = new FormData;
                $.each(u, function(t, n) {
                    e.append(t, n)
                }), e.append("file", s), e.append("Content-Type", s.type), GTA5M.API.s3_post({
                    url: c,
                    data: e,
                    success: function(e) {
                        l.avatar_url = $("Key", e).text(), t()
                    },
                    error: function(e) {
                        o.showError(e)
                    }
                })
            }()) : t()
        })
    }(this.params),
    function() {
        var t = $("#form-password", e).submit(function(e) {
            e.preventDefault(), t.hideErrors();
            var n = {};
            return $.each($(this).serializeArray(), function(e, t) {
                n[t.name] = t.value
            }), n.current_password.length ? n.new_password.length ? n.new_password !== n.confirm_password ? void $(this).showError(null, I18n.t("settings.password.error.confirmation_incorrect")) : void GTA5M.API.post({
                url: "/user/password/edit",
                data: {
                    user: n
                },
                success: function() {
                    $("input", t).val("").blur();
                    var e = $(".success", t).fadeIn("fast");
                    setTimeout(function() {
                        e.fadeOut("fast")
                    }, 3e3)
                },
                error: function(e) {
                    t.showError(e)
                }
            }) : void $("input[name=new_password]", this).focus() : void $(this).showError(null, I18n.t("settings.password.error.current_empty"))
        })
    }()
}, UserController.prototype.profile = function() {
    var e = $("#profile"),
        t = !1;
    $(".user-follow", e).click(function(n) {
        n.preventDefault(), t || (t = !0, $(this).toggleClass("active"), GTA5M.API.post({
            url: "/user/follow",
            data: {
                user: {
                    id: e.data("user-id")
                }
            },
            success: function() {
                t = !1
            },
            error: function() {
                t = !1
            }
        }))
    })
};
var UserFileController = UserFileController || Paloma.controller("UserFile");
UserFileController.prototype.index = function() {
    function e(e, t) {
        var n = parseInt(e.text());
        n += t ? 1 : -1, e.text(n)
    }
    var t = $("#file"),
        n = this.params.user_file,
        i = !1,
        o = !1,
        a = !1,
        r = $(".num-likes", t),
        s = $("#new-comment", t),
        l = $("textarea", s);
    $(".file-like", t).click(function(t) {
        if (t.preventDefault(), !i) {
            i = !0, $(this).toggleClass("active");
            var o = $(this).hasClass("active");
            e(r, o), o ? GTA5M.API.post({
                url: "/file/like",
                data: {
                    user_file: {
                        id: n.id
                    },
                    is_like: !0
                },
                success: function() {
                    i = !1
                },
                error: function() {
                    i = !1
                }
            }) : GTA5M.API["delete"]({
                url: "/file/like",
                data: {
                    user_file: {
                        id: n.id
                    }
                },
                success: function() {
                    i = !1
                },
                error: function() {
                    i = !1
                }
            })
        }
    }), $(".file-follow", t).click(function(e) {
        e.preventDefault(), o || (o = !0, $(this).toggleClass("active"),
            GTA5M.API.post({
                url: "/file/follow",
                data: {
                    user_file: {
                        id: n.id
                    }
                },
                success: function() {
                    o = !1
                },
                error: function() {
                    o = !1
                }
            }))
    }), $(".file-bookmark", t).click(function(e) {
        e.preventDefault(), a || (a = !0, $(this).toggleClass("active"), GTA5M.API.post({
            url: "/file/bookmark",
            data: {
                user_file: {
                    id: n.id
                }
            },
            success: function() {
                a = !1
            },
            error: function() {
                a = !1
            }
        }))
    });
    var c = $("#share-list");
    $("a", c).click(function(e) {
        e.preventDefault(), GTA5M.Utils.openSharer($(this).attr("class"), $(this).data("text")), c.removeClass("active"), $("html").off("click.share")
    }), $(".share-container > .btn", t).click(function(e) {
        e.stopPropagation(), c.toggleClass("active"), c.hasClass("active") ? $("html").one("click.share", function() {
            c.removeClass("active")
        }) : $("html").off("click.share")
    }), $("a.file-delete", t).click(function(e) {
        e.preventDefault(), window.confirm(I18n.t("user_file.delete.confirm")) && (window.location = window.location.origin + window.location.pathname + "/delete")
    }), $("a.file-report", t).click(function(e) {
        e.preventDefault(), GTA5M.Utils.promptSend(I18n.t("user_file.report.explain"), function(e) {
            GTA5M.API.post({
                url: "/file/report",
                data: {
                    id: n.id,
                    reason: e
                }
            })
        })
    }),
    function() {
        var e, t = $("#comments"),
            i = 1;
        t.on("click", "a.comment-reply", function(e) {
            e.preventDefault();
            var t = $(this).closest(".comment");
            l.val("@" + t.data("username") + " " + l.val()), GTA5M.Utils.isElementInViewport(l) || l.animatedScrollToTop(), l.focus()
        }).on("click", "a.comment-report", function(e) {
            e.preventDefault();
            var t = $(this).closest(".comment"),
                n = t.data("comment-id");
            GTA5M.Utils.promptSend(I18n.t("comment.report.explain"), function(e) {
                GTA5M.API.post({
                    url: "/comment/report",
                    data: {
                        id: n,
                        reason: e
                    },
                    success: function() {
                        t.css("opacity", .5)
                    }
                })
            })
        }).on("click", "a.comment-pin", function(e) {
            e.preventDefault();
            var t = $(this).closest(".comment").data("comment-id");
            $.pageLoading(), GTA5M.API.post({
                url: "/comment/pin",
                data: {
                    id: t
                },
                success: function() {
                    window.location.reload(!0)
                },
                error: function() {
                    $.pageLoading(!1)
                }
            })
        }).on("click", "a.mention", function(n) {
            n.preventDefault();
            var i = $(this).closest(".comment").prevAll("[data-username=" + $(this).data("username") + "]:first");
            i.length && (GTA5M.Utils.isElementInViewport(i) || i.animatedScrollToTop(500, 100), $(".comment", t).removeClass("active"), clearTimeout(e), i.addClass("active"), e = setTimeout(function() {
                i.removeClass("active")
            }, 3500))
        }).on("click", "a.comment-limit", function(e) {
            e.preventDefault(), $(".comment-text", $(this).closest(".comment")).removeClass("comment-limited"), $(this).remove()
        });
        var o = $("#add-comment", t).on("ajax:beforeSend", function(e, t) {
            $(".alert", s).remove(), l.val().length ? $("[type=submit]", this).button("loading") : (l.focus(), t.abort())
        }).on("ajax:success", function() {
            l.val(""), u.remove()
        }).on("ajax:complete", function() {
            $("[type=submit]", this).button("reset")
        });
        $("#goto-add-comment").click(function(e) {
            e.preventDefault(), GTA5M.Utils.isElementInViewport(o) || o.animatedScrollToTop(500, 250), $("textarea", o).focus()
        });
        var a = $(".view-more", t).click(function(e) {
            e.preventDefault(), i++, $(this).prop("disabled", !0).text(I18n.t("comment.fetching")), GTA5M.API.get({
                url: "/file/comments",
                data: {
                    user_file_id: n.id,
                    page: i
                },
                error: function() {
                    a.remove()
                }
            })
        });
        if ($(".comment-guidelines a", s).click(function(e) {
            e.preventDefault(), $(".toggled-guidelines", s).removeClass("collapse"), $(this).blur()
        }), window.location.hash && -1 !== window.location.hash.indexOf("comment-")) {
            var r = window.location.hash.replace("#", "").replace("comment-", ""),
                c = $("#comment-" + r, t);
            c.length && (c.animatedScrollToTop(500, 110).addClass("active"), setTimeout(function() {
                c.removeClass("active")
            }, 3500))
        }
        var u = $(".star-rating", t).raty()
    }(), $(".file-images", t).magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: !0
        },
        image: {
            titleSrc: function(e) {
                return e.el.attr("title") + "<small>" + n.author + "</small>"
            }
        }
    });
    var u = $(".file-videos", t).magnificPopup({
        delegate: "a",
        type: "iframe",
        gallery: {
            enabled: !0
        },
        iframe: {
            patterns: {
                dailymotion: {
                    index: "dailymotion.com/",
                    id: function(e) {
                        var t = e.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                        return null !== t ? void 0 !== t[4] ? t[4] : t[2] : null
                    },
                    src: "https://www.dailymotion.com/embed/video/%id%?autoplay=1"
                }
            },
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title"></div></div>'
        },
        callbacks: {
            markupParse: function(e, t, n) {
                t.title = I18n.t("video.added_by", {
                    username: '<a href="/users/' + $(n.el).data("username") + '">' + $(n.el).data("username")
                }) + "</a>"
            }
        }
    });
    $(".view-more", u).click(function(e) {
        e.preventDefault(), $(".video-list", u).animate({
            "max-height": "10000px"
        }), $(".view-more", u).remove()
    }), $(".remove-button", u).click(function(e) {
        e.stopPropagation(), e.preventDefault();
        var n = $(this).data("video-id"),
            i = $(this).closest("li");
        GTA5M.Utils.confirm(I18n.t("video.delete.confirm"), function() {
            GTA5M.API["delete"]({
                url: "/video/destroy/" + n,
                success: function(e) {
                    $(".num-videos", t).text(e.num_videos)
                }
            }), i.fadeOut("fast", function() {
                var e = $(this).closest("ul").children().length - 1;
                $(".num-videos", t).text(I18n.t("video.label", {
                    count: e
                })), $(this).remove()
            })
        })
    })
}, $("a[data-video-source=VIMEO]").each(function() {
    var e = $(this);
    $.ajax({
        type: "GET",
        url: "https://vimeo.com/api/v2/video/" + $(this).data("video-source-id") + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function(t) {
            $("img", e).attr("src", t[0].thumbnail_large)
        }
    })
}), UserFileController.prototype.download = function() {
    var e = $("iframe.download-frame");
    setTimeout(function() {
        e.attr("src", e.data("src"))
    }, 1e3)
}, GTA5M.API = {
    get: function(e) {
        e.type = "GET", $.ajax(e)
    },
    post: function(e) {
        e.type = "POST", e.data = JSON.stringify(e.data), e.beforeSend = function(e) {
            e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("Content-Type", "application/json")
        }, $.ajax(e)
    },
    "delete": function(e) {
        e.type = "DELETE", e.beforeSend = function(e) {
            e.setRequestHeader("Accept", "application/json")
        }, $.ajax(e)
    },
    s3_post: function(e) {
        e.type = "POST", e.dataType = "XML", e.contentType = !1, e.processData = !1, $.ajax(e)
    }
}, $.fn.showError = function(e, t) {
    try {
        t = e.responseJSON.errors ? e.responseJSON.errors[0] : e.responseJSON.error.message
    } catch (n) {
        t = t || "An unknown error occurred."
    }
    var i = $(".alert-error", this).html(t).removeClass("collapse");
    return i.length && !GTA5M.Utils.isElementInViewport(i) && i.animatedScrollToTop(200), $.pageLoading(!1), $(this)
}, $.fn.hideErrors = function() {
    return $(".alert-danger, .alert-error", this).addClass("collapse"), $(this)
}, $.fn.animatedScrollToTop = function(e, t) {
    return $("html, body").animate({
        scrollTop: Math.max(0, $(this).offset().top - (t || 75))
    }, e || 500), $(this)
}, $.pageLoading = function(e) {
    var t = $("#page-loading");
    e !== !1 ? (t.fadeIn("fast"), $(".message", t).text(e || I18n.t("helpers.label.loading")), $(".graphic", t).spin("large")) : (t.fadeOut("fast"), $(".graphic", t).spin(!1))
}, String.prototype.isEmpty = function() {
    return !this || !this.length || !$.trim(this)
}, ! function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.bootbox = t(e.jQuery)
}(this, function e(t, n) {
    "use strict";

    function i(e) {
        var t = g[m.locale];
        return t ? t[e] : g.en[e]
    }

    function o(e, n, i) {
        e.stopPropagation(), e.preventDefault();
        var o = t.isFunction(i) && i.call(n, e) === !1;
        o || n.modal("hide")
    }

    function a(e) {
        var t, n = 0;
        for (t in e) n++;
        return n
    }

    function r(e, n) {
        var i = 0;
        t.each(e, function(e, t) {
            n(e, t, i++)
        })
    }

    function s(e) {
        var n, i;
        if ("object" != typeof e) throw new Error("Please supply an object of options");
        if (!e.message) throw new Error("Please specify a message");
        return e = t.extend({}, m, e), e.buttons || (e.buttons = {}), n = e.buttons, i = a(n), r(n, function(e, o, a) {
            if (t.isFunction(o) && (o = n[e] = {
                callback: o
            }), "object" !== t.type(o)) throw new Error("button with key " + e + " must be an object");
            o.label || (o.label = e), o.className || (o.className = 2 >= i && a === i - 1 ? "btn-primary" : "btn-default")
        }), e
    }

    function l(e, t) {
        var n = e.length,
            i = {};
        if (1 > n || n > 2) throw new Error("Invalid argument length");
        return 2 === n || "string" == typeof e[0] ? (i[t[0]] = e[0], i[t[1]] = e[1]) : i = e[0], i
    }

    function c(e, n, i) {
        return t.extend(!0, {}, e, l(n, i))
    }

    function u(e, t, n, i) {
        var o = {
            className: "bootbox-" + e,
            buttons: d.apply(null, t)
        };
        return p(c(o, i, n), t)
    }

    function d() {
        for (var e = {}, t = 0, n = arguments.length; n > t; t++) {
            var o = arguments[t],
                a = o.toLowerCase(),
                r = o.toUpperCase();
            e[a] = {
                label: i(r)
            }
        }
        return e
    }

    function p(e, t) {
        var i = {};
        return r(t, function(e, t) {
            i[t] = !0
        }), r(e.buttons, function(e) {
            if (i[e] === n) throw new Error("button key " + e + " is not allowed (options are " + t.join("\n") + ")")
        }), e
    }
    var h = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    }, m = {
            locale: "en",
            backdrop: "static",
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        }, f = {};
    f.alert = function() {
        var e;
        if (e = u("alert", ["ok"], ["message", "callback"], arguments), e.callback && !t.isFunction(e.callback)) throw new Error("alert requires callback property to be a function when provided");
        return e.buttons.ok.callback = e.onEscape = function() {
            return t.isFunction(e.callback) ? e.callback.call(this) : !0
        }, f.dialog(e)
    }, f.confirm = function() {
        var e;
        if (e = u("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), e.buttons.cancel.callback = e.onEscape = function() {
            return e.callback.call(this, !1)
        }, e.buttons.confirm.callback = function() {
            return e.callback.call(this, !0)
        }, !t.isFunction(e.callback)) throw new Error("confirm requires a callback");
        return f.dialog(e)
    }, f.prompt = function() {
        var e, i, o, a, s, l, u;
        if (a = t(h.form), i = {
            className: "bootbox-prompt",
            buttons: d("cancel", "confirm"),
            value: "",
            inputType: "text"
        }, e = p(c(i, arguments, ["title", "callback"]), ["cancel", "confirm"]), l = e.show === n ? !0 : e.show, e.message = a, e.buttons.cancel.callback = e.onEscape = function() {
            return e.callback.call(this, null)
        }, e.buttons.confirm.callback = function() {
            var n;
            switch (e.inputType) {
                case "text":
                case "textarea":
                case "email":
                case "select":
                case "date":
                case "time":
                case "number":
                case "password":
                    n = s.val();
                    break;
                case "checkbox":
                    var i = s.find("input:checked");
                    n = [], r(i, function(e, i) {
                        n.push(t(i).val())
                    })
            }
            return e.callback.call(this, n)
        }, e.show = !1, !e.title) throw new Error("prompt requires a title");
        if (!t.isFunction(e.callback)) throw new Error("prompt requires a callback");
        if (!h.inputs[e.inputType]) throw new Error("invalid prompt type");
        switch (s = t(h.inputs[e.inputType]), e.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                s.val(e.value);
                break;
            case "select":
                var m = {};
                if (u = e.inputOptions || [], !t.isArray(u)) throw new Error("Please pass an array of input options");
                if (!u.length) throw new Error("prompt with select requires options");
                r(u, function(e, i) {
                    var o = s;
                    if (i.value === n || i.text === n) throw new Error("given options in wrong format");
                    i.group && (m[i.group] || (m[i.group] = t("<optgroup/>").attr("label", i.group)), o = m[i.group]), o.append("<option value='" + i.value + "'>" + i.text + "</option>")
                }), r(m, function(e, t) {
                    s.append(t)
                }), s.val(e.value);
                break;
            case "checkbox":
                var g = t.isArray(e.value) ? e.value : [e.value];
                if (u = e.inputOptions || [], !u.length) throw new Error("prompt with checkbox requires options");
                if (!u[0].value || !u[0].text) throw new Error("given options in wrong format");
                s = t("<div/>"), r(u, function(n, i) {
                    var o = t(h.inputs[e.inputType]);
                    o.find("input").attr("value", i.value), o.find("label").append(i.text), r(g, function(e, t) {
                        t === i.value && o.find("input").prop("checked", !0)
                    }), s.append(o)
                })
        }
        return e.placeholder && s.attr("placeholder", e.placeholder), e.pattern && s.attr("pattern", e.pattern), e.maxlength && s.attr("maxlength", e.maxlength), a.append(s), a.on("submit", function(e) {
            e.preventDefault(), e.stopPropagation(), o.find(".btn-primary").click()
        }), o = f.dialog(e), o.off("shown.bs.modal"), o.on("shown.bs.modal", function() {
            s.focus()
        }), l === !0 && o.modal("show"), o
    }, f.dialog = function(e) {
        e = s(e);
        var i = t(h.dialog),
            a = i.find(".modal-dialog"),
            l = i.find(".modal-body"),
            c = e.buttons,
            u = "",
            d = {
                onEscape: e.onEscape
            };
        if (t.fn.modal === n) throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");
        if (r(c, function(e, t) {
            u += "<button data-bb-handler='" + e + "' type='button' class='btn " + t.className + "'>" + t.label + "</button>", d[e] = t.callback
        }), l.find(".bootbox-body").html(e.message), e.animate === !0 && i.addClass("fade"), e.className && i.addClass(e.className), "large" === e.size ? a.addClass("modal-lg") : "small" === e.size && a.addClass("modal-sm"), e.title && l.before(h.header), e.closeButton) {
            var p = t(h.closeButton);
            e.title ? i.find(".modal-header").prepend(p) : p.css("margin-top", "-10px").prependTo(l)
        }
        return e.title && i.find(".modal-title").html(e.title), u.length && (l.after(h.footer), i.find(".modal-footer").html(u)), i.on("hidden.bs.modal", function(e) {
            e.target === this && i.remove()
        }), i.on("shown.bs.modal", function() {
            i.find(".btn-primary:first").focus()
        }), "static" !== e.backdrop && i.on("click.dismiss.bs.modal", function(e) {
            i.children(".modal-backdrop").length && (e.currentTarget = i.children(".modal-backdrop").get(0)), e.target === e.currentTarget && i.trigger("escape.close.bb")
        }), i.on("escape.close.bb", function(e) {
            d.onEscape && o(e, i, d.onEscape)
        }), i.on("click", ".modal-footer button", function(e) {
            var n = t(this).data("bb-handler");
            o(e, i, d[n])
        }), i.on("click", ".bootbox-close-button", function(e) {
            o(e, i, d.onEscape)
        }), i.on("keyup", function(e) {
            27 === e.which && i.trigger("escape.close.bb")
        }), t(e.container).append(i), i.modal({
            backdrop: e.backdrop ? "static" : !1,
            keyboard: !1,
            show: !1
        }), e.show && i.modal("show"), i
    }, f.setDefaults = function() {
        var e = {};
        2 === arguments.length ? e[arguments[0]] = arguments[1] : e = arguments[0], t.extend(m, e)
    }, f.hideAll = function() {
        return t(".bootbox").modal("hide"), f
    };
    var g = {
        bg_BG: {
            OK: "\u041e\u043a",
            CANCEL: "\u041e\u0442\u043a\u0430\u0437",
            CONFIRM: "\u041f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u043c"
        },
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zru\u0161it",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "\u0395\u03bd\u03c4\u03ac\u03be\u03b5\u03b9",
            CANCEL: "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
            CONFIRM: "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fa: {
            OK: "\u0642\u0628\u0648\u0644",
            CANCEL: "\u0644\u063a\u0648",
            CONFIRM: "\u062a\u0627\u06cc\u06cc\u062f"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "\u05d0\u05d9\u05e9\u05d5\u05e8",
            CANCEL: "\u05d1\u05d9\u05d8\u05d5\u05dc",
            CONFIRM: "\u05d0\u05d9\u05e9\u05d5\u05e8"
        },
        hu: {
            OK: "OK",
            CANCEL: "M\xe9gsem",
            CONFIRM: "Meger\u0151s\xedt"
        },
        hr: {
            OK: "OK",
            CANCEL: "Odustani",
            CONFIRM: "Potvrdi"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "\u30ad\u30e3\u30f3\u30bb\u30eb",
            CONFIRM: "\u78ba\u8a8d"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "At\u0161aukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprin\u0101t"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierd\u017a"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "\u041e\u0442\u043c\u0435\u043d\u0430",
            CONFIRM: "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"
        },
        sq: {
            OK: "OK",
            CANCEL: "Anulo",
            CONFIRM: "Prano"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        th: {
            OK: "\u0e15\u0e01\u0e25\u0e07",
            CANCEL: "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",
            CONFIRM: "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "\u0130ptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "\u53d6\u6d88",
            CONFIRM: "\u786e\u8ba4"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "\u53d6\u6d88",
            CONFIRM: "\u78ba\u8a8d"
        }
    };
    return f.addLocale = function(e, n) {
        return t.each(["OK", "CANCEL", "CONFIRM"], function(e, t) {
            if (!n[t]) throw new Error("Please supply a translation for '" + t + "'")
        }), g[e] = {
            OK: n.OK,
            CANCEL: n.CANCEL,
            CONFIRM: n.CONFIRM
        }, f
    }, f.removeLocale = function(e) {
        return delete g[e], f
    }, f.setLocale = function(e) {
        return f.setDefaults("locale", e)
    }, f.init = function(n) {
        return e(n || t)
    }, f
}), GTA5M.Utils = {
    getQueryParam: function(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            n = t.exec(location.search);
        return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : null
    },
    getQueryRedirect: function() {
        var e = this.getQueryParam("r");
        return e && "/" === e[0] || (e = "/"), e
    },
    isPageLoading: function() {
        return $("#page-loading").is(":visible")
    },
    isElementInViewport: function(e) {
        "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
        var t = e.getBoundingClientRect();
        return t.top >= 50 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
    },
    confirm: function(e, t) {
        bootbox.confirm({
            title: I18n.t("helpers.label.confirm.title"),
            message: e,
            buttons: {
                cancel: {
                    label: I18n.t("helpers.label.confirm.negative")
                },
                confirm: {
                    label: I18n.t("helpers.label.confirm.positive")
                }
            },
            callback: function(e) {
                e && t()
            }
        })
    },
    promptSend: function(e, t) {
        bootbox.prompt({
            title: e,
            buttons: {
                cancel: {
                    label: I18n.t("helpers.label.cancel")
                },
                confirm: {
                    label: I18n.t("helpers.label.send")
                }
            },
            callback: t
        });
        var n = $(".bootbox-input");
        $("button[data-bb-handler=confirm]").click(function(e) {
            n.val().length < 5 && (e.preventDefault(), e.stopPropagation(), n.focus())
        })
    },
    openSharer: function(e, t) {
        var n;
        "twitter" === e ? (n = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&via=5mods", t && (n += "&text=" + encodeURIComponent(t))) : n = "vk" === e ? "http://vk.com/share.php?url=" + encodeURIComponent(window.location.href) : "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
        var i = 600,
            o = 300;
        window.open(n, "5mods_sharer", "top=" + (screen.height - o) / 2 + ", left=" + (screen.width - i) / 2 + ", width=" + i + ", height=" + o + ", toolbar=0, status=0")
    },
    isFileUnderSize: function(e, t) {
        return "file" === t ? e.size <= 104857600 : "image" === t ? e.size <= 2097152 : "avatar" === t ? e.size <= 768e3 : !1
    },
    isFileSupportedImage: function(e) {
        if ("image/jpeg" === e.type || "image/png" === e.type) return !0;
        var t = e.name.split("."),
            n = t[t.length - 1];
        return "jpg" === n || "jpeg" === n || "png" === n
    }
};