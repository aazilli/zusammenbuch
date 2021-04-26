(window.webpackJsonp = window.webpackJsonp || []).push([
	[52, 66], {
		0: function(e, t, n) {
			var i, r;
			i = [n(55)], void 0 === (r = function(e) {
				return window.$ = window.jQuery = e, e
			}.apply(t, i)) || (e.exports = r)
		},
		12: function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var i = n(1);
			const r = new(n(7).b)("failure", {}, 1);

			function a(e, t) {
				i.b("failure", e, t), r.log_error("failure", e, {
					message: t
				}), r.report()
			}

			function o(e, t) {
				t = t || {};
				const n = {};
				n.log = t.log || "failure", n.metrics = t.metrics || "failure", n.context = t.context || null, n.message = t.message || null;
				const a = [];
				null !== n.message && a.push(n.message), null !== n.context && a.push(n.context), i.b(n.log, e, ...a), r.log_error(n.metrics, e, {
					context: n.context,
					message: n.message
				}), r.report()
			}
		},
		131: function(e, t, n) {
			"use strict";

			function i(e) {
				if(!e) return "";
				if(!window.getComputedStyle) return "";
				const t = window.getComputedStyle(e, ":before").content;
				return "none" === t ? null : t.replace(/["']/g, "")
			}
			n.d(t, "a", (function() {
				return i
			}))
		},
		14: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			class i {
				constructor() {
					this.promise = new Promise((e, t) => {
						this.resolve = e, this.reject = t
					})
				}
			}
		},
		141: function(e, t, n) {
			"use strict";
			var i = n(22),
				r = n(45),
				a = n(0),
				o = n.n(a);
			n(68);
			o.a.fn.mergeNode = function(e) {
				e = o()(e).single("merge node");
				var t = [];
				if(e[0].attributes)
					for(let n = 0, i = e[0].attributes.length; n < i; ++n) t.push(e[0].attributes.item(n).name);
				this.contents().trash(), this.each((function(n, i) {
					const r = [];
					for(let e = 0, t = i.attributes.length; e < t; ++e) r.push(i.attributes.item(e).name);
					for(let e = 0, t = r.length; e < t; ++e) "id" != r[e] && "data-dz-viewport" != r[e] && i.removeAttribute(r[e]);
					for(let n = 0, r = t.length; n < r; ++n) i.setAttribute(t[n], e[0].getAttribute(t[n]))
				})), this.append(e.contents())
			}, o.a.fn.serializeXML = function() {
				var e = this[0];
				return void 0 !== e.xml ? e.xml : i.b(e)
			}, o.a.fn.serializeInnerXML = function() {
				var e = "";
				return this.children().each((function() {
					e += o()(this).serializeXML()
				})), e
			}, o.a.fn.mergeXslt = function(e) {
				const t = e.importTo(this[0].ownerDocument);
				return this.mergeNode(t), this.trigger("contentInserted", t), this
			}, o.a.fn.mergeXsltRaw = function(e) {
				return this.mergeXslt(new r.a(e))
			}, o.a.fn.replaceXslt = function(e) {
				return this.empty().appendXslt(e), this
			}, o.a.fn.replaceXsltRaw = function(e) {
				return this.replaceXslt(new r.a(e))
			}, o.a.fn.appendXslt = function(e) {
				const t = e.importTo(this[0].ownerDocument);
				return this.append(t), this.trigger("contentInserted", t), this
			}, o.a.fn.appendXsltRaw = function(e) {
				return this.appendXslt(new r.a(e))
			};
			o.a
		},
		143: function(e, t, n) {
			"use strict";
			var i = {};
			n.r(i), n.d(i, "Native", (function() {
				return f
			})), n.d(i, "check", (function() {
				return p
			}));
			var r = {};
			n.r(r), n.d(r, "Manual", (function() {
				return g
			})), n.d(r, "check", (function() {
				return m
			}));
			var a = {};
			n.r(a), n.d(a, "ActiveX_Xml", (function() {
				return v
			})), n.d(a, "ActiveX_Dispatch", (function() {
				return b
			})), n.d(a, "check", (function() {
				return y
			}));
			var o = n(0),
				s = n.n(o),
				l = n(19),
				c = n(1),
				d = n(5);
			var u = class {
					iterateNext() {
						throw Object(d.c)("XPathBase#iterateNext() called: should be overwritten by derived class")
					}
					evaluate() {
						throw Object(d.c)("XPathBase#evaluate() called: should be overwritten by derived class")
					}
				},
				h = n(2);
			class f extends u {
				evaluate(e, t, n) {
					h.f(arguments, 2, 3), n || (n = t);
					try {
						this.xPathResult = t.evaluate(e, n, null, window.XPathResult.ANY_TYPE, null)
					} catch(t) {
						throw new Error('Error for xPath "' + e + '": ' + t)
					}
				}
				iterateNext() {
					return h.f(arguments, 0), this.xPathResult.iterateNext()
				}
			}

			function p() {
				return h.f(arguments, 0), void 0 === window.document.evaluate ? (c.a("xpath", "native", "failed", "No document.evaluate"), null) : (c.a("xpath", "native", "success", "Implementation available"), f)
			}
			class g extends u {
				evaluate(e, t, n) {
					h.f(arguments, 2, 3);
					var i, r = /^self::(.*)$/,
						a = /^child::text\(\)$/,
						o = /^(\.|\*|\w*)(?:\[@([\w-]+)(?:='(.*?)')?\])?$/,
						l = /^(\.|\*|\w*)\[(\d+)\]$/,
						d = null,
						u = e.split("/");
					if("." == u[0]) d = n, u.shift();
					else if(i = u[0].match(/^id\('(.*)'\)$/)) d = t.getElementById(i[1]), u.shift();
					else if("" === u[0] && "" === u[1] && (i = u[2].match(/^(\*|\w*)\[@id='(.*?)'\]$/))) d = t.getElementById(i[2]), u.shift(), u.shift(), u.shift();
					else {
						if("" !== u[0]) throw new Error("XPath emulation: Unknown root element: " + e);
						d = {
							childNodes: [t.documentElement]
						}, u.shift()
					}
					for(var f = [d], p = 0; p < u.length; p++) {
						var g = [],
							m = "" === u[p];
						if(m) {
							if(++p >= u.length) {
								if(!this.fallback) throw new Error("XPath emulation: Trailing wildcard: " + e);
								this.fallback(e, t, n)
							}
							c.a("path", "xpath expression containing // will cause full subtree search (might be inefficient): " + e)
						}
						var v = !1,
							b = r.exec(u[p]);
						null !== b && (v = !0, u[p] = b[1]);
						var y = !1;
						if((b = a.exec(u[p])) && (y = !0, u[p] = "*"), null === (b = o.exec(u[p])) && (b = l.exec(u[p])), null === b) {
							if(!this.fallback) throw new Error("XPath emulation: Unknown selector: '" + u[p] + "' in " + e);
							this.fallback(e, t, n)
						}
						for(var w = 0; w < f.length; w++) {
							var x, _;
							x = "." === b[1] || v ? [f[w]] : f[w].childNodes;
							var k = 0;
							for(_ = 0; _ < x.length; ++_) {
								var S = x[_];
								if(y) 3 !== S.nodeType && 4 !== S.nodeType || g.push(S);
								else if(1 === S.nodeType && (m && f.push(S), !b[1] || "*" == b[1] || "." == b[1] || S.nodeName.toLowerCase() == b[1].toLowerCase())) {
									if(b[2])
										if(void 0 !== b[3]) {
											if(S.getAttribute(b[2]) !== b[3]) continue
										} else if(isNaN(b[2])) {
										if(void 0 === s()(S).attr(b[2])) continue
									} else if(++k != +b[2]) continue;
									g.push(S)
								}
							}
						}
						f = g
					}
					this.foundNodes = f, this.foundIdx = 0
				}
				iterateNext() {
					return this.foundNodes[this.foundIdx++]
				}
			}

			function m() {
				return h.f(arguments, 0), c.a("xpath", "manual", "success", "Implementation available"), g
			}
			class v extends u {
				evaluate(e, t, n) {
					Object(h.e)(arguments, 2, 3), t.setProperty("SelectionLanguage", "XPath"), this.iterator = 0, this.xPathResult = n ? n.selectNodes(e) : t.selectNodes(e)
				}
				iterateNext() {
					if(Object(h.e)(arguments, 0), this.xPathResult.constructor == Array && this.xPathResult.length > 0) return this.xPathResult.pop();
					if("object" == typeof this.xPathResult) return this.xPathResult.length > this.iterator ? this.xPathResult[this.iterator++] : null;
					throw new Error("unknown xpath result type")
				}
			}
			class b extends u {
				evaluate(e, t, n) {
					return this.worker = null, this.worker = "selectNodes" in t ? new v : new g, this.worker.evaluate(e, t, n)
				}
				iterateNext() {
					return this.worker.iterateNext()
				}
			}

			function y() {
				return Object(h.e)(arguments, 0), "ActiveXObject" in window ? (c.a("xpath", "activex", "success", "Implementation available"), b) : (c.a("xpath", "activex", "failed", "No ActiveXObject"), null)
			}
			const w = new l.a;
			class x {
				constructor() {
					if(!w.value) throw x.unavailable.exception("XPath");
					this._impl = new w.value
				}
				evaluate(e, t, n) {
					this._impl.evaluate(e, t, n)
				}
				iterateNext() {
					return this._impl.iterateNext()
				}
				selectAll(e, t, n) {
					this._impl.evaluate(e, t, n);
					for(var i, r = []; i = this._impl.iterateNext();) r.push(i);
					return r
				}
				selectOne(e, t, n) {
					return this._impl.evaluate(e, t, n), this.impl_.iterateNext()
				}
			}
			x.unavailable = l.a.unavailable.specialValue("XPath unavailable"), w.detect([i, a, r], e => e.check()) || c.b("xpath", "No XPath implementation found");
			var _ = x;
			let k = null;
			s.a.fn.xpath = function(e) {
				null === k && (k = new _);
				var t = [];
				return this.each((function() {
					var n, i;
					for(n = 9 === this.nodeType ? this.documentElement : this, k.evaluate(e, n.ownerDocument, n); i = k.iterateNext();) t.push(i)
				})), this.pushStack(t)
			}
		},
		145: function(e, t, n) {
			"use strict";
			var i = n(0),
				r = n.n(i);
			r.a.node = function(e, t) {
				return r()("<" + e + "></" + e + ">", t)
			}, r.a.fn.createElement = function(e, t) {
				const n = r()(this[0].ownerDocument.createElement(e));
				return t && n.attr(t), n
			};
			const a = document.implementation.createHTMLDocument("");
			r.a.parseDzHTML = function(e) {
				return r.a.parseHTML(e, a)
			};
			r.a
		},
		16: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return b
			}));
			var i = navigator.userAgent.toLowerCase(),
				r = parseInt(navigator.appVersion, 10);
			const a = (-1 != i.indexOf("msie") || -1 != i.indexOf("trident") || -1 != i.indexOf("edge")) && -1 == i.indexOf("opera"),
				o = a && 5 == r && -1 != i.indexOf("msie 9."),
				s = a && 5 == r && -1 != i.indexOf("msie 10."),
				l = a && !o && r >= 5,
				c = a && 5 == r && -1 != i.indexOf("rv:11.0"),
				d = -1 != i.indexOf("edge");
			let u;
			a && (null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(i) && (u = parseFloat(RegExp.$1)));
			const h = -1 != i.indexOf("opera") || -1 != i.indexOf("opr"),
				f = -1 != i.indexOf("opr/"),
				p = -1 != i.indexOf("safari"),
				g = -1 != i.indexOf("chrome"),
				m = -1 != i.indexOf("android"),
				v = -1 != i.indexOf("iphone") || -1 != i.indexOf("ipod") || -1 != i.indexOf("ipad"),
				b = (i.indexOf("win"), -1 != i.indexOf("mac"))
		},
		17: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			}));
			var i = n(1);

			function r(e, t) {
				if(void 0 === t || "object" != typeof e && "function" != typeof e) throw new Error("invalid parameters")
			}

			function a(e, t) {
				return e && e.__dz_deprecation && e.__dz_deprecation[t] ? e.__dz_deprecation[t] : e[t] && e[t].__dz_deprecation_data ? e[t].__dz_deprecation_data : {
					context: null,
					value: e[t],
					legacy_value: !1
				}
			}

			function o(e) {
				try {
					throw new Error(e)
				} catch(e) {
					return e
				}
			}

			function s(e, t) {
				var n = o(t);
				i.b("deprecated", e, n)
			}

			function l(e, t) {
				var n = o(t);
				i.f("deprecated", e, n)
			}

			function c(e, t) {
				i.a("deprecated", "planned", e, t + " (planned for later deprecation)", o("deprecation planned"))
			}

			function d(e, t, n) {
				e && e.context && e.context.legacy_accessor || l(t, n), e && e.context && (e.context.legacy_accessee = !0)
			}

			function u(e, t, n, i, o) {
				var s = n[i];
				r(n, i);
				var l, c, u = a(n, i);
				n.__dz_deprecation || (n.__dz_deprecation = {}), n.__dz_deprecation[i] || (n.__dz_deprecation[i] = u), u.deprecated = !0, u.value = s, o && (l = o.get, c = o.set);
				var h = !1;
				if(Object.defineProperty) try {
					Object.defineProperty(n, i, {
						enumerable: !1,
						get: function() {
							return d(u, e, t), l ? l.call(this) : u.value
						},
						set: function(n) {
							return d(u, e, t), c ? c.call(this, n) : u.value = n
						}
					}), h = !0
				} catch(e) {
					h = !1
				}
				u.prop = h, h || n[i] instanceof Function && (u.legacy_value = !0, n[i] = function(e, t, n, i) {
					var r;
					r = i && i.depr ? i.depr : {
						context: null,
						value: n,
						legacy_value: !0
					}, i && !1 === i.compat_call && (r.compat_call = !1);
					var a = function() {
						return d(r, e, t), n.apply(this, arguments)
					};
					return a.__dz_deprecation_data = r, a
				}(e, t, u.value, Object.assign({
					depr: u
				}, o)))
			}

			function h(e, t, n, i, o) {
				r(n, i), i in n || l(e, "obsolete access to removed legacy property '" + i + "': " + t);
				var s = a(n, i),
					c = s.context,
					d = s.context = {
						legacy_accessor: !0,
						legacy_accessee: s.legacy_value
					};
				try {
					return o(n[i], s)
				} finally {
					s.context = c, d.legacy_accessee || l(e, "legacy property overwritten: " + t)
				}
			}

			function f(e, t, n, i, a) {
				return r(n, i), h(e, t, n, i, (function(e, t) {
					return t.value = a, t.prop || (n[i] = t.value), t.value
				}))
			}

			function p(e, t, n, i) {
				return r(n, i), !(i in n) || h(e, t, n, i, (function(e, t) {
					return void 0 === t || t.context.legacy_accessee
				}))
			}

			function g(e, t, n, i) {
				n.length >= i + 1 && l(e, "argument #" + i + ": " + t)
			}
		},
		18: function(e, t, n) {
			var i, r, a;
			r = [n(0)], void 0 === (a = "function" == typeof(i = function(e) {
				return e.ui = e.ui || {}, e.ui.version = "1.12.1"
			}) ? i.apply(t, r) : i) || (e.exports = a)
		},
		19: function(e, t, n) {
			"use strict";
			var i = n(5),
				r = n(12);
			class a {
				constructor(e) {
					this.setter = e || null, this.value = null
				}
				detect(e, t) {
					return t = t || (e => e()), e.some(e => {
						var n;
						try {
							n = t(e)
						} catch(e) {
							Object(r.a)(e, "Unexpected exception in feature detection"), n = null
						}
						return !!n && (this.set(n), !0)
					})
				}
				set(e) {
					this.value = e, this.setter && this.setter(e)
				}
				reset() {
					this.set(null)
				}
			}
			a.unavailable = i.i.specialValue("Feature unavailable"), t.a = a
		},
		2: function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return m
			}));
			var i = n(17),
				r = n(5);
			const a = new r.b("Invalid Option", r.m);

			function o(e, t, n) {
				var r;
				for(r in n) "__version" != r && "__message" != r && (t.__legacy && r in t.__legacy ? (e[r] = t.__legacy[r], delete t.__legacy[r]) : r in t ? (i.g(n.__version, "option '" + r + "' deprecated:" + n.__message), e[r] = t[r], delete t[r]) : e[r] = n[r])
			}

			function s() {
				var e;
				for(e = 0; e < arguments.length; e++)
					if(void 0 !== arguments[e]) return arguments[e]
			}
			const l = {},
				c = {},
				d = {};

			function u(e, t, n) {
				void 0 === n && (n = t), e.length < t && r.m.raise("not enough arguments (" + e.length + " instead of " + t + ")"), null !== n && e.length > n && r.m.raise("too many arguments (" + e.length + " instead of " + n + ")")
			}
			const h = u;

			function f(e, t) {
				u(arguments, 2), e = s(e, {});
				var n, i = {};
				for(n in t)
					if("__deprecated" == n.substr(0, 12)) o(i, e, t[n]);
					else if(n in e) i[n] = e[n], delete e[n];
				else {
					if(t[n] === l && a.raise("required option '" + n + "' missing"), t[n] === c) continue;
					i[n] = t[n]
				}
				return i
			}

			function p(e, t) {
				if(u(arguments, 2), e = Object.assign({}, e), t === d) return e;
				var n, r, o = f(e, t);
				for(n in e)
					if("__legacy" == n)
						for(r in e.__legacy) i.g("removed legacy option: " + r);
					else a.raise("invalid option '" + n + "'");
				return o
			}

			function g(e, t) {
				return Object.assign({}, t, e)
			}

			function m(e, t) {
				return function(e, t) {
					return Object.assign({}, e, t)
				}(e, t)
			}
		},
		21: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var i = n(14);

			function r(e) {
				return new Promise(t => {
					window.setTimeout(t, e)
				})
			}

			function a(e) {
				Promise.resolve().then(e)
			}

			function o(e) {
				const t = new i.a;
				return e(t.promise), [e => (t.resolve(), e), e => (t.resolve(), Promise.reject(e))]
			}

			function s(e) {
				return [t => (e.resolve(), t), t => (e.reject(t), Promise.reject(t))]
			}
		},
		22: function(e, t, n) {
			"use strict";
			var i = {};
			n.r(i), n.d(i, "Impl", (function() {
				return c
			})), n.d(i, "check", (function() {
				return d
			}));
			var r = {};
			n.r(r), n.d(r, "Impl", (function() {
				return u
			})), n.d(r, "check", (function() {
				return h
			}));
			var a = {};
			n.r(a), n.d(a, "Impl", (function() {
				return g
			})), n.d(a, "check", (function() {
				return m
			}));
			var o = {};
			n.r(o), n.d(o, "Impl", (function() {
				return b
			})), n.d(o, "check", (function() {
				return y
			}));
			n(2);
			var s = n(19),
				l = n(1);
			const c = {
				createNamed: e => document.implementation.createDocument("", e, null)
			};

			function d() {
				return void 0 === document.implementation ? (l.a("xml.create", "native", "failed", "No document.implementation"), null) : void 0 === document.implementation.createDocument ? (l.a("xml.create", "native", "failed", "No document.implementation.createDocument"), null) : (l.a("xml.create", "native", "success", "Implementation available"), c)
			}
			const u = {
				createNamed(e) {
					var t = new window.ActiveXObject("Microsoft.XMLDOM");
					return t.appendChild(t.createElement(e)), t
				}
			};

			function h() {
				if(void 0 === window.ActiveXObject) return l.a("xml.create", "activex", "failed", "No ActiveXObject"), null;
				try {
					new window.ActiveXObject("Microsoft.XMLDOM"), l.a("xml.create", "activex", "success", "Has ActiveXObject Microsoft.XMLDOM")
				} catch(e) {
					return l.a("xml.create", "activex", "failed", "No ActiveXObject Microsoft.XMLDOM"), null
				}
				return l.a("xml.create", "activex", "success", "Implementation available"), u
			}
			var f = n(0),
				p = n.n(f);
			const g = {
				parse: e => p.a.parseXML(e)
			};

			function m() {
				return p.a ? p.a.parseXML ? (l.a("xml.parse", "jquery", "success", "Implementation available"), g) : (l.a("xml.parse", "jquery", "failed", "No $.parseXML"), null) : (l.a("xml.parse", "jquery", "failed", "No $"), null)
			}
			const v = "Microsoft.XMLDOM",
				b = {
					parse(e) {
						var t = new window.ActiveXObject(v);
						if(t.loadXML(e), null === t.documentElement) throw l.b("xml.parse", "Cannot parse XML", e), new Error("Parsing xml failed");
						return t
					}
				};

			function y() {
				if(!("ActiveXObject" in window)) return l.a("xml.parse", "activex", "failed", "No ActiveXObject"), null;
				try {
					new window.ActiveXObject(v), l.a("xml.parse", "activex", "success", "Has ActiveXObject " + v)
				} catch(e) {
					return l.a("xml.parse", "activex", "failed", "Has ActiveXObject " + v), null
				}
				return l.a("xml.parse", "activex", "success", "Implementation available"), b
			}
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			}));
			const w = new s.a,
				x = new s.a;

			function _(e) {
				if(!x.value) throw s.a.unavailable.exception("Xml.parse unavailable");
				return x.value.parse(e)
			}

			function k(e) {
				return(new window.XMLSerializer).serializeToString(e)
			}
			w.detect([r, i], e => e.check()) || l.b("xml.create", "No Xml.create Implementation found"), x.detect([o, a], e => e.check()) || l.b("xml.parse", "No Xml.parse Implementation found")
		},
		221: function(e, t, n) {
			"use strict";
			n.r(t);
			n(332), n(76), n(381);
			var i = n(35),
				r = n(15),
				a = (n(246), n(387)),
				o = n.n(a),
				s = n(24),
				l = n(39),
				c = n(252),
				d = n(16),
				u = n(0),
				h = n.n(u),
				f = (n(272), n(321), n(274), n(59)),
				p = n(9),
				g = n(40),
				m = n(31);

			function v() {
				var e = new Date;
				return e.setTime(e.getTime() + 31536e7), {
					domain: "leo.org",
					path: "/",
					expires: e
				}
			}
			if("mobile" == r.b.size) {
				let e = new m.d(h()("#goto-desktop"));
				f.a.register({
					switchdesktop: {
						attach(e) {
							e.on("click.switchdesktop", e => {
								p.remove("rewrite"), g.g("rewrite", () => {
									p.set("rewrite", "desktop", v())
								}), p.remove("redirect-to-mobile"), window.location.reload(), Object(l.a)(e)
							}), h()("#goto-desktop").find("[data-dz-role='close']").on("click", () => {
								g.g("redirect-to-desktop", () => {
									p.set("redirect-to-desktop", "false", v())
								})
							})
						}, detach(e) {
							e.off("click.switchdesktop")
						}
					}
				}), "false" != p.get("redirect-to-desktop") && ((!Object(c.a)() || h()(window).width() >= 1e3) && e.show(), h()(window).on("resize", () => {
					h()(window).width() >= 1e3 && e.show(), h()(window).width() < 800 && e.hide()
				}))
			}
			if("desktop" == r.b.size) {
				let e = new m.d(h()("#goto-mobile"));
				f.a.register({
					switchmobile: {
						attach(e) {
							e.on("click.switchmobile", e => {
								p.remove("rewrite"), p.set("rewrite", "mobile", v()), p.remove("redirect-to-desktop"), window.location.reload(), Object(l.a)(e)
							}), h()("#goto-mobile").find("[data-dz-role='close']").on("click", () => {
								p.set("redirect-to-mobile", "false", v())
							})
						}, detach(e) {
							h()("#goto-mobile").addClass("ui-helper-hidden"), e.off("click.switchmobile")
						}
					}
				}), "false" != p.get("redirect-to-mobile") && ((Object(c.a)() || h()(window).width() < 800) && e.show(), h()(window).on("resize", () => {
					h()(window).width() < 800 && e.show(), h()(window).width() >= 1e3 && e.hide()
				}))
			}
			var b = n(255),
				y = n(382);
			n(30).c.de = {
				"Anmeldung fehlgeschlagen.": "Anmeldung fehlgeschlagen.",
				"Leider kam es zu einem Fehler bei der Anfrage. Bitte laden Sie die Seite neu und probieren Sie es erneut.": "Leider kam es zu einem Fehler bei der Anfrage. Bitte laden Sie die Seite neu und probieren Sie es erneut.",
				"Die Vokabel wurde gespeichert, jetzt sortieren?": "Die Vokabel wurde gespeichert, jetzt sortieren?",
				"Leider konnte die Vokabel nicht gespeichert werden.": "Leider konnte die Vokabel nicht gespeichert werden.",
				"Flexionstabelle konnte nicht geladen werden": "Flexionstabelle konnte nicht geladen werden",
				"Bitte aktualisieren Sie": "Bitte aktualisieren Sie",
				"Das Wort kann leider nicht vorgesprochen werden. Bitte schicken Sie uns": "Das Wort kann leider nicht vorgesprochen werden. Bitte schicken Sie uns",
				"eine E-Mail": "eine E-Mail",
				"Eingabehelfer wirklich deaktivieren? Sie können den Eingabehelfer jederzeit unter Suchtipps wieder aktivieren.": "Eingabehelfer wirklich deaktivieren? Sie können den Eingabehelfer jederzeit unter Suchtipps wieder aktivieren.",
				"Texteingaben werden automatisch ersetzt.": "Texteingaben werden automatisch ersetzt.",
				"Da Ihr Browser kein AJAX unterstützt steht diese Funktion leider nicht zur Verfügung.": "Da Ihr Browser kein AJAX unterstützt steht diese Funktion leider nicht zur Verfügung.",
				"Da Ihr Browser kein XSLT unterstützt steht diese Funktion leider nicht zur Verfügung.": "Da Ihr Browser kein XSLT unterstützt steht diese Funktion leider nicht zur Verfügung.",
				"Diese Funktion steht mit Ihrem Browser leider nicht zur Verfügung.": "Diese Funktion steht mit Ihrem Browser leider nicht zur Verfügung.",
				"Viele Funktionen auf dieser Seite stehen erst ab Version 12.11 zu Verfügung.": "Viele Funktionen auf dieser Seite stehen erst ab Version 12.11 zu Verfügung.",
				"Keine Audiowiedergabe möglich.": "Keine Audiowiedergabe möglich.",
				"Mögliche Lösungen:": "Mögliche Lösungen:",
				"Installation eines aktuelleren": "Installation eines aktuelleren",
				Browsers: "Browsers",
				"Installation des ": "Installation des ",
				"Flash-Plugins": "Flash-Plugins",
				"Für weitere Informationen, besuchen Sie bitte unsere": "Für weitere Informationen, besuchen Sie bitte unsere",
				Hilfeseiten: "Hilfeseiten",
				"Direkte Treffer:": "Direkte Treffer:",
				"Teiltreffer:": "Teiltreffer:",
				"Keine Suchhistorie verfügbar": "Keine Suchhistorie verfügbar",
				"Ihre Antwort war korrekt.": "Ihre Antwort war korrekt.",
				"Ihre Antwort war leider nicht korrekt. Richtig wäre gewesen:": "Ihre Antwort war leider nicht korrekt. Richtig wäre gewesen:",
				Spenden: "Spenden",
				"Sie scheinen einen AdBlocker zu verwenden.": "Sie scheinen einen AdBlocker zu verwenden.",
				"Wollen Sie LEO unterstützen?": "Wollen Sie LEO unterstützen?",
				"Dann deaktivieren Sie AdBlock für LEO oder spenden Sie!": "Dann deaktivieren Sie AdBlock für LEO oder spenden Sie!"
			};
			var w = n(250);
			const x = new i.b("dict-setup");
			r.b.debug || (r.b.compat ? o()(window.RWURL("/js/dist/compat/dict.webpack-4291a27f.css")) : o()(window.RWURL("/js/dist/modern/dict.webpack-d292ca5c.css"))), r.b.gentesting && y.b(), r.b.translate && Promise.all([n.e(0), n.e(1), n.e(4), n.e(56)]).then(n.bind(null, 325)), "en" == r.b.lang && n.e(70).then(n.bind(null, 411)), "fr" == r.b.lang && n.e(72).then(n.bind(null, 412)), "es" == r.b.lang && n.e(71).then(n.bind(null, 413)), "it" == r.b.lang && n.e(73).then(n.bind(null, 414)), "ch" == r.b.lang && n.e(69).then(n.bind(null, 415)), "ru" == r.b.lang && n.e(76).then(n.bind(null, 416)), "pt" == r.b.lang && n.e(75).then(n.bind(null, 417)), "pl" == r.b.lang && n.e(74).then(n.bind(null, 418)), f.a.register({
				"dict:vocables:openManagerButton": {
					attach(e) {
						e.on("click.dict:vocables", (function(e) {
							l.a(e), b.a()
						}))
					}, detach(e) {
						e.off("click.dict:vocables")
					}
				},
				"dict:unsolvedquery:openDialogButton": {
					attach(e) {
						e.on("click.dict:unsolvedquery", (function(e) {
							l.a(e),
								function(e) {
									const t = Promise.all([n.e(0), n.e(1), n.e(4), n.e(5), n.e(54)]).then(n.bind(null, 421));
									w.a({
										description: "forum"
									}).then(() => t).then(t => t.open(e))
								}(h()(this).attr("data-dz-rel-word"))
						}))
					}, detach(e) {
						e.off("click.dict:unsolvedquery")
					}
				},
				"dict:searchhistory:openDialogButton": {
					attach(e) {
						e.on("click.dict:searchhistory", (function(e) {
							l.a(e), Promise.all([n.e(0), n.e(1), n.e(83)]).then(n.bind(null, 422)).then(e => e.show())
						}))
					}, detach(e) {
						e.off("click.dict:searchhistory")
					}
				}
			}), Object(s.a)("dom", (function() {
				-1 != d.a.indexOf("android") && h()("#android-market").show(0)
			})), x.log_time("complete"), x.report()
		},
		227: function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "a", (function() {
				return T
			}));
			var i = n(15),
				r = n(226),
				a = n(1),
				o = n(5),
				s = n(33),
				l = n(23),
				c = (n(237), n(24)),
				d = n(0),
				u = n.n(d),
				h = n(9),
				f = n(22),
				p = n(59);
			let g = !0,
				m = window.logedon,
				v = null;
			const b = new o.b("no active login session"),
				y = new l.a;

			function w() {
				var e = encodeURI("ajax=info&postback=managethread&value[action]=count&value[object]=notificationlisting&lang=" + i.b.lang + "&lp=" + i.b.lp);
				u.a.get("/myleo/markers.php?ajax=info", e, (function(e) {
					var t = parseInt(u()(e).find("count").text(), 10);
					_(t, "marker-notification");
					var n = parseInt(u()(e).find("unread").text(), 10);
					_(n, "marker-pm");
					var r = parseInt(u()(e).find("trainer").text(), 10);
					_(r, "marker-trainer", {
						lp: u()(e).find("trainer").attr("lp")
					});
					var a = parseInt(u()(e).find("content").text(), 10);
					_(a, "marker-content", {
						idunit: u()(e).find("content").attr("idunit")
					});
					var o = Math.min(1, n) + Math.min(1, r) + Math.min(1, a) + Math.min(1, t);
					"desktop" == i.b.size && (o ? (u()("[data-dz-role='marker-icon']").addClass("icon_account-alert").removeClass("icon_account"), u()("[data-dz-role='loginComponent']").find("figcaption").html(o), u()("[data-dz-role='loginComponent'] figure").addClass("badge badge-bottom")) : 0 === o && (u()("[data-dz-role='marker-icon']").addClass("icon_account").removeClass("icon_accoun-alertt"), u()("[data-dz-role='loginComponent']").find("figcaption").html(" "), u()("[data-dz-role='loginComponent'] figure").removeClass("badge badge-bottom"))), x(o)
				}))
			}

			function x(e) {
				e && e > 0 ? u()("link[rel='icon'], link[rel='apple-touch-icon']").each((function() {
					u()(this).attr("href", u()(this).attr("href").replace(/(\d+).*\.png/, "$1-badge-" + e + ".png"))
				})) : u()("link[rel='icon'], link[rel='apple-touch-icon']").each((function() {
					u()(this).attr("href", u()(this).attr("href").replace(/-badge-(\d+).*\.png/, ".png"))
				}))
			}

			function _(e, t, n) {
				if((!e || e <= 0) && (e = 0), e > 0) {
					if("mobile" == i.b.size) {
						if("marker-trainer" !== t) {
							var r = u()("<figcaption>" + e + "</figcaption>");
							u()("figure[data-dz-role='" + t + "']").append(r)
						}
					} else if(u()("li[data-dz-role='" + t + "']").removeClass("d-n"), "marker-trainer" == t) {
						const e = u()("li[data-dz-role='marker-trainer']").find("a"),
							t = e.attr("href"),
							i = t.indexOf("lp=");
						e.attr("href", t.substring(0, i) + "lp=" + n.lp + t.substring(i + 7))
					} else if("marker-content" == t) {
						const e = u()("li[data-dz-role='marker-content']").find("a"),
							t = e.attr("href"),
							i = t.indexOf("idunit="); - 1 == i ? e.attr("href", t + "&idunit=" + n.idunit) : e.attr("href", t.substring(0, i) + "idunit=" + n.idunit)
					}
					return k(e, t), !0
				}
				return "mobile" == i.b.size ? "marker-trainer" !== t && u()("figure[data-dz-role='" + t + "']").find("figcaption").remove() : u()("li[data-dz-role='" + t + "']").addClass("d-n"), k(e, t), !1
			}

			function k(e, t) {
				"desktop" == i.b.size && ("marker-notification" == t ? function(e) {
					u()("nav[data-dz-ui='nav'] li[data-dz-nav-name='bookmark']") && (e > 0 ? u()("nav[data-dz-ui='nav'] li[data-dz-nav-name='bookmark']").find("figcaption").html(Math.min(e, 99)) : u()("nav[data-dz-ui='nav'] li[data-dz-nav-name='bookmark']").find("figcaption").html(""))
				}(e) : "marker-pm" === t && function(e) {
					u()("nav[data-dz-ui='nav'] li[data-dz-nav-name='message']") && (e > 0 ? u()("nav[data-dz-ui='nav'] li[data-dz-nav-name='message']").find("figcaption").html(Math.min(e, 99)) : u()("nav[data-dz-ui='nav'] li[data-dz-nav-name='message']").find("figcaption").html(""))
				}(e))
			}

			function S() {
				if("BOA" != i.b.corp) {
					var e = h.get("PHPSESSID"),
						t = h.get("token"),
						n = !1;
					Promise.resolve().then((function() {
						if(!m && e) return a.c("login", "trying session id"), n = !0, C()
					})).then((function() {
						if(!m && t) return a.c("login", "trying token login"), s.a(r.n("/myleo/loginInfo.php"), {
							cache: !1
						}).then((function() {
							return n = !0, C()
						}))
					})).then((function() {
						if(a.c("login", m ? "logged in" : "not logged in"), !n) return C()
					}))
				}
			}

			function C() {
				if("BOA" == i.b.corp) return Promise.resolve();
				h.remove("xDTcarriers", {
					path: "/"
				});
				const e = r.k(i.b.lp, "serviceData.xml", {
					target: "ajax"
				});
				return s.a(e, {
					dataType: "xml",
					cache: !1
				}).then((function(e) {
					const t = u()(e.documentElement).find("servicedata")[0];
					return Object(c.a)("dom").then(() => {
						A(t)
					})
				}))
			}

			function A(e) {
				u()("#entriesNumber").text("" + e.getAttribute("entries")), u()("#queriesNumber").text("" + e.getAttribute("queries")), u()("#hostName").text("" + e.getAttribute("hostName")), u()("#timeUsed").text("" + e.getAttribute("timeUsed")), u()("#entriesAndQueries").fadeIn(300), "true" == e.getAttribute("login") ? y.trigger("loggedin-status", {
					nick: e.getAttribute("nick")
				}) : y.trigger("loggedout-status")
			}

			function T(e) {
				let t = null;
				try {
					t = f.a(e.xhr.responseText)
				} catch(t) {
					return Promise.reject(e)
				}
				if(t && function(e) {
						return u()(e.documentElement).is('error[code="authFailed"]')
					}(t)) throw y.trigger("loggedout-status"), b.exception(e);
				return Promise.reject(e)
			}
			y.on("loggedin-status", e => {
				m && !g || (g = !1, m = !0, v = e, y.trigger("loggedin", e))
			}), y.on("loggedout-status", () => {
				(m || g) && (g = !1, m = !1, v = null, y.trigger("loggedout"))
			}), y.on("loggedin", e => (function(e) {
				u()("#usersNickName").html(e), "mobile" == i.b.size ? (u()("[data-dz-role='link-bookmark']").show(), u()("[data-dz-role='link-pm']").show(), u()("[data-dz-role='link-logout']").show(), u()("[data-dz-role='link-login']").hide()) : (u()("[data-dz-role='loginComponent'] [class~='icon_account']").removeClass("darkgray").addClass("darkblue"), u()("#userProfileMenu [data-dz-area='user']").show(), u()("#userProfileMenu [data-dz-area='login']").hide()), w(), window.setInterval((function() {
					w()
				}), 6e5)
			})(e.nick)), y.on("loggedout", () => (u()("#usersNickName").html(""), void("mobile" == i.b.size ? (u()("[data-dz-role='link-bookmark']").hide(), u()("[data-dz-role='link-pm']").hide(), u()("[data-dz-role='link-logout']").hide(), u()("[data-dz-role='link-login']").show()) : (u()("[data-dz-ui='data-dz-role'] > span").removeClass("bg-darkblue").addClass("bg-darkblue"), u()("[data-dz-ui='data-dz-role'] > span > *").removeClass("darkblue").addClass("darkgray"), u()("[data-dz-ui='data-dz-role']").attr("data-dz-ui-options", '{"menu": {"align": "right", "menu": "#loginForm"}}'))))), p.a.register({
				logout: {
					attach(e) {
						e.on("click.logout", (function() {
							window.location = "logout.php"
						}))
					}, detach(e) {
						e.off("click.logout")
					}
				}
			})
		},
		23: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var i = n(12);
			const r = (a = class {}, class extends a {
				constructor() {
					super(), this._events = {}
				}
				registered(e) {
					return this._events[e] && this._events[e].length > 0
				}
				on(e, t) {
					let n = this._events[e];
					return n || (n = this._events[e] = []), n.push(t), t
				}
				off(e, t) {
					let n = this._events[e];
					if(!n) return;
					let i = n.indexOf(t); - 1 !== i && (n.splice(i, 1), n[i] && n[i]._simpleevents_guard && n.splice(i, 1))
				}
				trigger(e, ...t) {
					let n = this._events[e];
					n && (n.slice().forEach(e => {
						try {
							e.apply(this, t)
						} catch(e) {
							Object(i.a)(e, "Unhandled exception in event handler")
						}
					}), "*" != e && this._events["*"] && this.trigger("*", e, ...t))
				}
				triggerNamed(e, t, ...n) {
					this.trigger(e + ":" + t, ...n)
				}
				one(e, t) {
					var n = () => {
						this.off(e, t)
					};
					return n._simpleevents_guard = !0, this.on(e, t), this.on(e, n), t
				}
			});
			var a
		},
		230: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var i = n(40),
				r = (n(30), n(0), n(9));

			function a(e, t) {
				return i.g(e, () => {
					r.set(e, t, {
						path: "/",
						domain: "leo.org",
						expires: 1e4
					})
				}), r.get(e) == t
			}

			function o(e) {
				a(e, !("true" == r.get(e)))
			}
		},
		233: function(e, t) {
			$.noty.layouts.bottomRight = {
				name: "bottomRight",
				options: {},
				container: {
					object: '<ul id="noty_bottomRight_layout_container" />',
					selector: "ul#noty_bottomRight_layout_container",
					style: function() {
						$(this).css({
							bottom: 20,
							right: 20,
							position: "fixed",
							width: "310px",
							height: "auto",
							margin: 0,
							padding: 0,
							listStyleType: "none",
							zIndex: 1e7
						}), window.innerWidth < 600 && $(this).css({
							right: 5
						})
					}
				},
				parent: {
					object: "<li />",
					selector: "li",
					css: {}
				},
				css: {
					display: "none",
					width: "310px"
				},
				addClass: ""
			}
		},
		236: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var i, r = n(227),
				a = n(33),
				o = n(15),
				s = n(0),
				l = n.n(s);
			i = new class {
				constructor() {
					this.data = null, r.e ? this.loadData(!1) : r.c.on("loggedin", () => this.refreshDataAndView())
				}
				loadData(e) {
					var t = this;
					a.a("/dict/vocabulary.php", {
						dataType: "json"
					}).then(n => {
						if(this.data = n, e && o.b.lp in this.data) {
							var i = this.data[o.b.lp];
							l()("tr[data-dz-ui='dictentry']").each((function() {
								l()(this).attr("data-dz-rel-uid") in i && t.updateDictEntryView(l()(this))
							}))
						}
					})
				}
				addVocable(e) {
					this.data[o.b.lp][e] = null;
					var t = l()("tr[data-dz-rel-uid='" + e + "']");
					this.updateDictEntryView(t)
				}
				refreshDataAndView() {
					r.e && this.loadData(!0)
				}
				updateDictEntryView(e) {
					e.find("[data-dz-ui='dictentry:saveVocab']").getUi("dictentry:saveVocab").setupCheckIcon()
				}
			}
		},
		237: function(e, t, n) {
			"use strict";
			var i = n(230),
				r = n(59),
				a = n(9);
			r.a.register({
				"autologin-checkbox": {
					attach(e) {
						"true" == a.get("neverautologin") && e.prop("checked", !1), e.on("click.autologin", () => {
							i.b("neverautologin")
						})
					}, detach(e) {
						e.off("click.autologin")
					}
				}
			})
		},
		239: function(e, t, n) {
			"use strict";
			var i = n(9),
				r = n(230);
			const a = {
				audio: {
					player: "",
					load(e) {
						this.player = e
					},
					save() {
						return this.player
					}
				},
				audio_jplayer: {
					codec: "mp3, oga",
					custom_codec: !1,
					custom: !1,
					solution: "html, flash",
					__solution: {
						0: "html, flash",
						1: "flash, html",
						2: "flash"
					},
					__codec: {
						0: "mp3, oga",
						1: "mp3",
						2: "oga",
						3: "oga, mp3"
					},
					set(e) {
						this.load(e), this.custom = !0
					},
					save() {
						if(this.custom) {
							var e = "0";
							switch(this.codec) {
								case "mp3":
									e = "1";
									break;
								case "oga":
									e = "2"
							}
							return "html, flash" == this.solution ? e += "0" : e += "1", e + ";"
						}
						return ";"
					},
					load(e) {
						2 == e.length && (this.codec = this.__codec[e.substr(0, 1)], this.solution = this.__solution[e.substr(1, 1)], this.custom_codec = !0, this.custom = !0)
					}
				},
				trainer: {
					showIntro: !0,
					audio: !0,
					audiofrom: !0,
					custom: !1,
					setIntro: function(e) {
						this.showIntro = e, this.custom = !0
					},
					setAudio: function(e) {
						this.audio = e, this.custom = !0
					},
					setAudioFrom: function(e) {
						this.audiofrom = e, this.custom = !0
					},
					save: function() {
						return this.custom ? (this.showIntro ? "1" : "0") + (this.audio ? "1" : "0") + (this.audiofrom ? "1" : "0") + ";" : ";"
					},
					load: function(e) {
						2 == e.length && (this.custom = !0, this.showIntro = "1" == e.substr(0, 1), this.audio = "1" == e.substr(1, 1)), 3 == e.length && (this.audiofrom = "1" == e.substr(2, 1))
					}
				},
				save() {
					var e = this.audio_jplayer.save();
					e += this.trainer.save(), e += this.audio.save(), Object(r.a)("config", e)
				},
				load() {
					var e = i.get("config");
					e && ((e = e.split(/;/)).length >= 1 && this.audio_jplayer.load(e[0]), e.length >= 2 && this.trainer.load(e[1]), e.length >= 3 && this.audio.load(e[2]))
				}
			};
			a.load(), t.a = a
		},
		24: function(e, t, n) {
			"use strict";
			var i = n(14),
				r = n(0),
				a = n.n(r),
				o = n(3),
				s = n(8),
				l = n(35);

			function c(e) {
				let t, n = !1;
				return function() {
					return n || (n = !0, t = e()), t
				}
			}
			var d = n(21),
				u = n(11);
			n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			}));
			const h = u.b;
			o.a.defaults({
				debug_ready: !1,
				debug_slow_ready: !1
			}), h.log_time("main");
			let f = 1;
			h.mark("pagevisible", {
				kind: "inital",
				counter: f
			}), h.marks.pagevisible.timestamp = h.marks.init.timestamp, s.a.on("pagevisible", () => {
				h.mark("pagevisible", {
					kind: "repeated",
					counter: ++f
				})
			});
			let p = !0;

			function g() {
				const e = new l.b("navigation");
				let t = null;
				if(window.performance) try {
					const n = window.performance.getEntriesByType("navigation");
					n.length > 0 && (t = n[0], e.tags.source = "perfnavtime", void 0 === t.responseStart && (t = null))
				} catch(e) {
					t = null
				}!t && window.performance && (t = window.performance.timing, e.tags.source = "perftime"), t || (e.tags.source = "none"), e.log_event("setup"), t ? (e.log_event("request", {
					interval: t.responseStart - t.requestStart
				}), e.log_event("response", {
					interval: t.responseEnd - t.responseStart
				}), e.log_event("dominteractive", {
					interval: t.domInteractive - t.responseEnd
				}), e.log_event("domloaded", {
					interval: t.domContentLoadedEventStart - t.responseEnd
				}), e.log_event("domcomplete", {
					interval: t.domComplete - t.responseEnd
				}), e.log_event("contentevent", {
					interval: t.domContentLoadedEventEnd - t.domContentLoadedEventStart
				}), e.log_event("loadevent", {
					interval: t.loadEventEnd - t.loadEventStart
				}), e.report()) : e.report()
			}
			s.a.on("pagehidden", () => {
				h.log_time("visibility", "pagevisible", {
					repeated: p ? "no" : "yes"
				}), p = !1
			}), u.c("dom", (function() {
				h.log_time("dom-called")
			})), u.c("page", (function() {
				h.log_time("page-called"), h.report(), window.setTimeout(g, 0)
			})), u.c("dom+package:dict", (function() {}));
			var m = {};

			function v(e) {
				return e in m || (m[e] = new i.a, o.a.debug_slow_ready && (m[e].promise = m[e].promise.then(() => d.a(2e3))), o.a.debug_ready && (m[e].promise = m[e].promise.then((function(e) {
					return e
				})))), m[e]
			}

			function b(e) {
				return v(e).promise
			}
			var y = c((function() {
					s.a.trigger("dom:ready"), h.log_time("dom-trigger"), v("dom").resolve()
				})),
				w = c((function() {
					y(), h.log_time("page-trigger"), v("page").resolve()
				}));

			function x(e, t) {
				v(e).resolve(t)
			}

			function _(e, t) {
				var n = e.split("+").map(b);
				return 1 == n.length ? n[0].then(t) : Promise.all(n).then(t)
			}
			u.a ? (h.log_time("evdom-exec"), y(), Promise.resolve().then((function() {
				a.a.ready()
			}))) : (h.log_event("jquery-register"), a()(document).ready(() => {
				h.log_time("jquery-trigger"), y()
			})), "complete" == document.readyState ? (h.log_event("readystate-complete"), w()) : (h.log_event("evload-register"), a()(window).on("load", () => {
				h.log_time("evload-trigger"), w()
			})), s.a.on("package:ready", (function(e) {
				v("package:" + e).resolve()
			})), u.c.implement(_), u.d.implement(x);
			t.a = _
		},
		241: function(e, t, n) {
			"use strict";
			var i = n(254),
				r = (n(63), n(15)),
				a = n(76);
			n(107);

			function o(e, t) {
				return "mobile" == r.a.size ? n.e(11).then(n.bind(null, 404)).then(() => {
					a.e({
						pathname: "/pages/flecttab/flectionTable.php",
						search: "?kvz=" + e.join(",kvz=") + "&lang=" + r.a.lang + "&lp=" + r.a.lp,
						hash: null,
						state: null
					})
				}) : Promise.all([n.e(0), n.e(1), n.e(58)]).then(n.bind(null, 405)).then(n => {
					n.show(e, t)
				})
			}
			"mobile" == r.a.size && a.i.register({
				match: "/pages/flecttab/flectionTable.php?kvz&lang&lp",
				activate(e) {
					if(e.target.search.lang != r.a.lang || e.target.search.lp != r.a.lp) throw a.d.exception("language changed");
					let t;
					t = /,kvz=/.test(e.target.search.kvz) ? e.target.search.kvz.split(",kvz=") : e.target.search.kvz.split(",");
					let i = 0;
					const o = t.map(() => ++i + "");
					n.e(11).then(n.bind(null, 404)).then(e => e.show(t, o))
				}
			});
			var s = n(243);

			function l(e) {
				return "mobile" == r.a.size ? n.e(12).then(n.bind(null, 406)).then(a.e({
					pathname: "/pages/addinfo/addInfo.php",
					search: "?aiid=" + e + "&lang=" + r.a.lang + "&lp=" + r.a.lp,
					hash: null,
					state: null
				})) : Promise.all([n.e(0), n.e(1), n.e(59)]).then(n.bind(null, 407)).then(t => t.show(e))
			}
			"mobile" == r.a.size && a.i.register({
				match: "/pages/addinfo/addInfo.php?aiid&lang&lp",
				activate(e) {
					if(e.target.search.lang != r.a.lang || e.target.search.lp != r.a.lp) throw Error("langpage change needs pageload");
					return n.e(12).then(n.bind(null, 406)).then(t => {
						t.show(e.target.search.aiid)
					})
				}
			});
			var c = n(0),
				d = n.n(c);
			var u = n(255);
			var h = n(236),
				f = n(48),
				p = n(1),
				g = n(19),
				m = n(23),
				v = n(39),
				b = n(49),
				y = n(30),
				w = n(227),
				x = n(60);
			n(245);
			d.a.fn.attrArray = function(e) {
				const t = [];
				for(let n = 1; this.hasAttr(e + "-" + n); n++) t.push(this.attr(e + "-" + n));
				return !t.length && this.hasAttr(e) && t.push(this.attr(e)), t
			};
			var _ = n(31),
				k = n(59);
			const S = !0;

			function C(e) {
				const t = d()(e).closest("a").attr("href");
				t && b.a(t)
			}

			function A(e) {
				const t = d()(this),
					n = t.attrArray("data-dz-rel-audio");
				s.a(n).catch(e => {
					g.a.unavailable.is(e) ? (p.c("audio", "Dynamic audio playback unavailable:", e.message), C(this)) : (p.b("audio", "Dynamic audio playback failed:", e), f.c(Object(y.b)("Die Aussprachedatei konnte nicht abgespielt werden")))
				}), t.trigger("metrics", {
					type: "leoaudioclick",
					audios: n
				}), v.a(e)
			}

			function T(e) {
				const t = d()(this);
				l(t.attr("data-dz-rel-aiid")).catch(e => {
					g.a.unavailable.is(e) ? (p.c("audio", "Dynamic infobox unavailable:", e.message), C(this)) : (p.b("audio", "Showing dynamic infobox failed:", e), f.c(Object(y.b)("Die weiteren Informationen konnten nicht geladen werden.")))
				}), t.trigger("metrics", {
					type: "infoclick",
					aiid: t.attr("data-dz-rel-aiid")
				}), v.a(e)
			}

			function E(e) {
				const t = d()(this),
					n = t.attrArray("data-dz-flex-table"),
					i = t.attrArray("data-dz-flex-label");
				if(!n.length) {
					var r = d()(this).attr("data-dz-rel-href");
					let e;
					"?" == r[0] && (r = r.substring(5)), e = /&kvz=/.test(r) ? r.split("&kvz=") : r.split(","), n.push(...e)
				}
				const a = d()(this).closest("a").attr("href");
				"grammar" == x.a && void 0 !== a && d()(this).parents("[class~='ui-dialog']").length ? (window.open(a, "_blank"), v.a(e)) : (o(n, i).catch(e => {
					g.a.unavailable.is(e) ? (p.c("audio", "Flection table unavailable:", e.message), C(this)) : (p.b("audio", "Showing flection table failed:", e), f.c(Object(y.b)("Die Flexionstabelle konnte nicht geladen werden")))
				}), t.trigger("metrics", {
					type: "flecttabclick",
					tabs: n
				}), v.a(e))
			}

			function I(e) {
				var t = d()(this).attr("data-dz-rel-ltec"),
					n = t.indexOf(":"),
					i = t.slice(0, n).trim(),
					r = t.slice(n + 1).trim();
				s.c(r, i, e), v.a(e)
			}

			function j(e) {
				d()(this).attr("data-dz-rel-lion"), v.a(e)
			}

			function N(e) {
				var t;
				v.a(e), t = d()(this).attr("data-dz-rel-uid"), Promise.all([n.e(0), n.e(1), n.e(67)]).then(n.bind(null, 408)).then(e => {
					new e.ExtInfo(d()("#info")).show(t)
				})
			}
			const P = new m.a;
			k.a.register({
				"dictentry:playLeoAudio": {
					attach(e) {
						e.on("click.dictentry", A).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictentry")
					}
				},
				"dictentry:showInfobox": {
					attach(e) {
						e.on("click.dictentry", T).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictentry")
					}
				},
				"dictentry:showFlecttab": {
					attach(e) {
						e.on("click.dictentry", E).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictentry")
					}
				},
				"dictentry:playLtecAudio": {
					attach(e) {
						e.on("click.dictentry", I).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictentry")
					}
				},
				"dictentry:lion": {
					attach(e) {
						e.on("click.leoAddInfo", j).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictentry")
					}
				},
				"dictentry:showExtinfo": {
					attach(e) {
						e.on("click.dictentry", N)
					}, detach(e) {
						e.off("click.dictentry")
					}
				},
				dictentry: {
					attach(e) {
						e.on("click.dictentry", (function(t) {
							0 == d()(t.target).closest("a[href]").length && i.a && (i.a.load({
								aiid: e.attr("data-dz-rel-aiid"),
								lang: r.b.lang,
								langpair: r.b.lp
							}), v.a(t))
						})), i.a && void 0 !== e.hoverIntent && e.hoverIntent({
							over: () => {
								i.a.load({
									aiid: e.attr("data-dz-rel-aiid"),
									lang: r.b.lang,
									langpair: r.b.lp
								})
							},
							out: () => {},
							interval: 400,
							sensitivity: 4
						}), P.trigger("attach", e)
					}, detach(e) {
						P.trigger("detach", e), e.off("click.dictentry")
					}
				}
			}), k.a.registerClass("dictentry:saveVocab", class extends _.b {
				constructor(e, t) {
					if(super(e), this.addUiName("dictentry:saveVocab"), this.saved = null, this.status = null, this.element.on("click.dictentry", e => {
							const t = d()(e.currentTarget).attr("data-dz-rel-uid");
							u.b(t), v.a(e)
						}).addClass("is-clickable"), S && this.element.one("mouseenter.dictentry", () => {
							this.element.hasClass("icon_check") && (this._setupIconHover(), this.show())
						}), h.a.data && w.e) {
						var n = h.a.data[r.b.lp];
						n && d()(this.element).attr("data-dz-rel-uid") in n && this.setupCheckIcon()
					}
				}
				setupCheckIcon() {
					this.showCheckIcon(), S && this._setupIconHover()
				}
				showCheckIcon() {
					this.element.removeClass("icon_content-save").addClass("icon_check").attr("title", Object(y.b)("Im Trainer gespeichert"))
				}
				showReSaveIcon() {
					this.element.removeClass("icon_check").addClass("icon_content-save").attr("title", Object(y.b)("Zum aktuellen Trainerwortschatz hinzufügen"))
				}
				_setupIconHover() {
					this.status = !this.element.hasClass("icon_check"), this.element.off("mouseenter.dictentry mouseleave.dictentry").on("mouseenter.dictentry", () => this.show()).on("mouseleave.dictentry", () => this.hide())
				}
				__show() {
					this.status = !0, this.showReSaveIcon()
				}
				__hide() {
					this.status = !1, this.showCheckIcon()
				}
				detach(e) {
					e.off("click.dictentry mouseenter.dictentry mouseleave.dictentry")
				}
			})
		},
		242: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n(33),
				r = n(226),
				a = n(15);

			function o(e) {
				var t = r.n("/dict/save.php?lp=" + a.b.lp + "&lang=" + a.b.lang + "&uid=" + e + "&postback=savevocable&ajax=info");
				return i.a(t, {
					dataType: "xml"
				})
			}
		},
		243: function(e, t, n) {
			"use strict";
			var i = n(226),
				r = n(63),
				a = n(239),
				o = n(1),
				s = n(2),
				l = n(35),
				c = n(14),
				d = n(127),
				u = n(21),
				h = n(0),
				f = n.n(h);
			class p {
				constructor(e) {
					e = s.c(e, {
						playerNode: "#nplayer",
						method: p.UNDECIDED,
						extension: null
					}), this.playerNode = e.playerNode, this.method = e.method, this.format_choice = null, this.extension = e.extension, this.confidence = null, this.metrics = new l.a("audio-leo", {
						method: "none"
					})
				}
				detect_() {
					var e = this.getPlayer_();
					if(!e || !e.canPlayType) return this.method = p.FALLBACK, this.metrics.tags.method = "fallback", o.c("audio", "no html 5 audio available"), void this.metrics.log_event("detect", {
						reason: "nohtml5"
					});
					this.format_choice = 0, this.confidence_choice = "probably", this.tryFormat_()
				}
				tryFormat_() {
					var e = this.getPlayer_(),
						t = p.formats[this.format_choice],
						n = e.canPlayType(t.mediatype);
					n == this.confidence_choice ? (this.method = p.TRYHTML5, this.extension = t.extension, this.confidence = n, o.c("audio", "trying " + t.extension + ' with confidence "' + this.confidence_choice + '"')) : (o.c("audio", "no support for " + t.extension + ' with confidence "' + this.confidence_choice + '"'), this.tryNextFormat_())
				}
				tryNextFormat_() {
					if(this.format_choice++, this.format_choice >= p.formats.length) {
						if("probably" != this.confidence_choice) return this.method = p.FALLBACK, this.metrics.tags.method = "fallback", this.metrics.log_event("detect", {
							reason: "nooptions"
						}), void o.c("audio", "fallback to jplayer");
						this.format_choice = 0, this.confidence_choice = "maybe"
					}
					this.tryFormat_()
				}
				getPlayer_() {
					var e = f()(this.playerNode);
					return e.is("audio") ? e.get(0) : e.children("audio").get(0)
				}
				play(e) {
					if(this.method == p.UNDECIDED && this.detect_(), this.method == p.FALLBACK) return this.metrics.log_event("play", {
						baseurl: e
					}), r.d ? (o.b("audio", "no html5 audio available and no fallback"), Promise.reject(new Error("No audio playback possible"))) : new Promise((t, i) => {
						n.e(64).then(n.bind(null, 403)).then(n => t(n.play(e)))
					});
					var t, i, a = this.getPlayer_(),
						s = new c.a,
						d = this;
					this.method == p.TRYHTML5 ? f()(a).off(".leoAudioDispatch").on("error.leoAudioDispatch", (function() {
						f()(a).off(".leoAudioDispatch"), a.error.code != a.error.MEDIA_ERR_ABORTED && a.error.code != a.error.MEDIA_ERR_NETWORK ? (o.f("audio", "playback error for " + d.extension + ' (confidence "' + d.confidence + '")'), d.tryNextFormat_(), s.resolve(d.play(e))) : s.reject(a.error)
					})).on("ended.leoAudioDispatch", () => {
						f()(a).off(".leoAudioDispatch"), o.c("audio", "playback ok for " + d.extension), d.method = p.USEHTML5, this.metrics.tags.method = d.extension, this.metrics.log_event("detect", {
							reason: "success"
						}), this.metrics.log_event("play", {
							baseurl: e
						}), this.metrics.log_event("complete"), this.metrics.report(), s.resolve()
					}) : (this.metrics.log_event("play", {
						baseurl: e
					}), t = n => {
						f()(a).off({
							error: t,
							ended: i
						}), o.f("audio", "playback error for " + d.extension);
						const r = a.error || {};
						this.metrics.log_event("failed", l.c(r.message, {
							context: {
								baseurl: e,
								errorcode: r.code
							}
						})), this.metrics.report(1), s.reject(a.error)
					}, i = () => {
						f()(a).off({
							error: t,
							ended: i
						}), o.a("audio", "playback complete for " + d.extension), this.metrics.log_event("complete"), this.metrics.report(), s.resolve()
					}, f()(a).on({
						error: t,
						ended: i
					}));
					return this.method != p.TRYHTML5 && this.method != p.USEHTML5 || (a.src = e + "." + this.extension, a.load(), a.play()), s.promise
				}
				stop() {
					this.method != p.TRYHTML5 && this.method != p.USEHTML5 || this.getPlayer_().stop()
				}
			}
			p.UNDECIDED = 0, p.TRYHTML5 = 1, p.USEHTML5 = 2, p.FALLBACK = 3, p.formats = [{
				mediatype: 'audio/ogg; codecs="vorbis"',
				extension: "ogg"
			}, {
				mediatype: 'audio/ogg; codec="vorbis"',
				extension: "ogg"
			}, {
				mediatype: 'audio/mpeg; codecs="mp3"',
				extension: "mp3"
			}, {
				mediatype: 'audio/mpeg; codec="mp3"',
				extension: "mp3"
			}, {
				mediatype: "audio/ogg",
				extension: "ogg"
			}, {
				mediatype: "audio/mpeg",
				extension: "mp3"
			}, {
				mediatype: "audio/mp3",
				extension: "mp3"
			}];
			const g = "html-ogg" == a.a.audio.player ? new p({
				method: p.USEHTML5,
				extension: "ogg"
			}) : "html-mp3" == a.a.audio.player ? new p({
				method: p.USEHTML5,
				extension: "mp3"
			}) : "jplayer" == a.a.audio.player ? new p({
				method: p.FALLBACK
			}) : new p;

			function m(e) {
				var t;
				return e && "/" == e[0] ? (l.e("audio-play", "trigger", {
					provider: "leo",
					kind: "url",
					url: e
				}), t = i.n(e)) : (l.e("audio-play", "trigger", {
					provider: "leo",
					kind: "hash",
					hash: e
				}), t = i.n("/media/audio/" + e)), g.play(t)
			}
			const v = new d.a;
			const b = 600;
			var y = n(15),
				w = n(34),
				x = n(30);

			function _(e, t) {
				var n = function(e) {
					return v.change(), m(e)
				}(e);
				return t && t.ended && n.then(t.ended), n
			}

			function k(e, t) {
				var n = function e(t) {
					const n = v.change();
					return 0 == t.length ? Promise.resolve() : m(t.shift()).then(() => {
						if(t.length > 0) return u.a(b).then(() => {
							if(!n.obsolete()) return e(t)
						})
					})
				}(e);
				return t && t.ended && n.then(t.ended), n
			}

			function S(e, t, i) {
				if(s.e(arguments, 3), e) {
					var r = document.createElement("audio");
					if(!!(!r.canPlayType || !r.canPlayType("audio/mpeg;").replace(/no/, ""))) return o.b("audio", "linguatec player: no support for mp3"), void Object(w.a)({
						type: "error",
						layout: "center",
						text: Object(x.b)("Keine Linguatec-Audiowiedergabe möglich.") + "<br/>" + Object(x.b)("Ihr Browser unterstützt die Wiedergabe von mp3-Dateien nicht."),
						timeout: 4e3
					});
					window.vrweb_customerid = "10011", window.vrweb_player_type = "hover", window.vrweb_player_form = "1", window.vrweb_player_color = "grey", window.vrweb_guilang = y.b.lang, window.vrweb_no_icon = 1, window.vrweb_sndspeed = "80", window.vrweb_path_prefix = "//vrweb15.linguatec.org/VoiceReaderWeb15User/player/scripts/", window.vrweb_debug = "0", Promise.all([n.e(0), n.e(1), n.e(57)]).then(n.bind(null, 427)).then(n => n.show(e, t, i))
				}
			}
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return S
			}))
		},
		245: function(e, t) {
			/*!
			 * hoverIntent v1.8.3 // 2014.08.11 // jQuery v1.9.1+
			 * http://cherne.net/brian/resources/jquery.hoverIntent.html
			 *
			 * You may use hoverIntent under the terms of the MIT license. Basically that
			 * means you are free to use hoverIntent as long as this header is left intact.
			 * Copyright 2007, 2014 Brian Cherne
			 */
			! function(e) {
				e.fn.hoverIntent = function(t, n, i) {
					var r, a, o, s, l = {
						interval: 100,
						sensitivity: 6,
						timeout: 0
					};
					l = "object" == typeof t ? e.extend(l, t) : e.isFunction(n) ? e.extend(l, {
						over: t,
						out: n,
						selector: i
					}) : e.extend(l, {
						over: t,
						out: t,
						selector: n
					});
					var c = function(e) {
							r = e.pageX, a = e.pageY
						},
						d = function(t, n) {
							if(n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) < l.sensitivity) return e(n).off("mousemove.hoverIntent", c), n.hoverIntent_s = !0, l.over.apply(n, [t]);
							o = r, s = a, n.hoverIntent_t = setTimeout((function() {
								d(t, n)
							}), l.interval)
						},
						u = function(t) {
							var n = e.extend({}, t),
								i = this;
							i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), "mouseenter" === t.type ? (o = n.pageX, s = n.pageY, e(i).on("mousemove.hoverIntent", c), i.hoverIntent_s || (i.hoverIntent_t = setTimeout((function() {
								d(n, i)
							}), l.interval))) : (e(i).off("mousemove.hoverIntent", c), i.hoverIntent_s && (i.hoverIntent_t = setTimeout((function() {
								! function(e, t) {
									t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, l.out.apply(t, [e])
								}(n, i)
							}), l.timeout)))
						};
					return this.on({
						"mouseenter.hoverIntent": u,
						"mouseleave.hoverIntent": u
					}, l.selector)
				}
			}(jQuery)
		},
		246: function(e, t) {
			window.RWURL = function(e) {
				return e
			}
		},
		248: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var i = n(30),
				r = n(15),
				a = n(59),
				o = n(39),
				s = n(0),
				l = n.n(s);

			function c(e) {
				var t;
				l.a.get("/dict/donate.php?lp=" + r.b.lp + "&lang" + r.b.lang), t = "mobile" == r.b.size ? '<div class="lh-n m-top p-h">' : '<div class="fl-right p-h tf1" style="position: absolute; right: 0; top: 20px; width: 550px;">', l()("[data-dz-ui='donateOrDeactivateAdBlock'] > button").length ? t += l()("[data-dz-ui='donateOrDeactivateAdBlock']").html() : "mobile" == r.b.size ? t += '<img src="/img/32x32/memory-back.png" width="32" height="32" alt="leo" title="leo" class="fl-left"/><p>' + Object(i.b)("LEO unterstützen? AdBlock deaktivieren oder ") + '<button type="button" class="button button-flat donateButton">' + Object(i.b)("Spenden") + "</button></p>" : t += '<img src="/img/64x64/memory-back.png" width="64" height="64" alt="leo" title="leo" class="fl-left"/><p>' + Object(i.b)("Sie scheinen einen AdBlocker zu verwenden.") + "</p><p>" + Object(i.b)("Wollen Sie LEO unterstützen?") + "</p><p>" + Object(i.b)("Dann deaktivieren Sie AdBlock für LEO oder spenden Sie!") + '</p><button type="button" class="button button-flat donateButton">' + Object(i.b)("Spenden") + "</button>", t += "</div>", l()(e).append(t).find("button.donateButton").on("click", () => d(!0))
			}

			function d(e) {
				e ? (l()("#donate-add").show(), l()("#donate-support").hide()) : (l()("#donate-add").hide(), l()("#donate-support").show()), Promise.all([n.e(0), n.e(1)]).then(n.t.bind(null, 106, 7)).then(() => {
					l()("#donate").dialog({
						width: "mobile" == r.b.size ? "auto" : 640,
						height: "mobile" == r.b.size ? "auto" : 480,
						modal: "mobile" == r.b.size
					})
				})
			}
			a.a.register({
				"common:showDonationDialog": {
					attach(e) {
						e.on("click.common:showDonationDialog", (function(e) {
							o.a(e), d(!1)
						}))
					}, detach(e) {
						e.off("click.common:showDonationDialog")
					}
				}
			})
		},
		25: function(e, t, n) {
			"use strict";
			var i = n(23);
			n(57);
			var r = n(5),
				a = n(21),
				o = n(4),
				s = n(0),
				l = n.n(s),
				c = n(36);
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return u
			}));
			class d extends i.a {
				constructor(e) {
					super(), this.element = e, this.uinames = [], this.guid = this.getGUID(), this._events_tracked = {}
				}
				addUiName(e) {
					this.uinames.push(e)
				}
				detach() {
					this.element = null
				}
				getGUID() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
						var t = 16 * Math.random() | 0;
						return("x" == e ? t : 3 & t | 8).toString(16)
					}))
				}
			}
			class u extends d {
				constructor(e) {
					super(e), this.controls_nested = !1, this._controls = null, Object.defineProperty(this, "controls", {
						get() {
							return this._controls || this._findControls(), this._controls
						}
					})
				}
				detach() {
					this._controls = null, super.detach()
				}
				_findControls() {
					const e = c.a("uicontrols");
					this._controls = {};
					const t = {
							acceptNode: e => e.hasAttribute("data-dz-ui") ? window.NodeFilter.FILTER_ACCEPT : window.NodeFilter.FILTER_SKIP
						},
						n = this.element[0].ownerDocument.createTreeWalker(this.element[0], window.NodeFilter.SHOW_ELEMENT, t),
						i = () => {
							if(n.firstChild()) {
								do {
									const e = n.currentNode.getAttribute("data-dz-ui").split(" ");
									let t = !1;
									for(const i of e) "." == i.charAt(0) ? this._controls[i.substr(1)] = l()(n.currentNode) : t = !0;
									t && !this.controls_nested || i(n)
								} while (n.nextSibling());
								n.parentNode()
							}
						};
					i(), e.done()
				}
				trackEvent(e, t) {
					t || (t = o.b()), this._events_tracked[e] = t, super.on(e, this._events_tracked[e])
				}
				_processTrackedEvent(e, t) {
					this._events_tracked[e] && (this._events_tracked[e].implement(t), super.off(e, this._events_tracked[e]), delete this._events_tracked[e])
				}
				on(e, t) {
					this._processTrackedEvent(e, t), super.on(e, t)
				}
				one(e, t) {
					this._processTrackedEvent(e, t), super.one(e, t)
				}
				destroy() {}
			}

			function h(e, t) {
				let n;
				return async function(...i) {
					new Promise((e, i) => {
						n && n(r.f.exception("debounced")), n = i, a.a(t).then(e)
					}).then(() => e.apply(this, i), () => {})
				}
			}
		},
		250: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var i = n(227);

			function r(e) {
				return i.e ? Promise.resolve() : function(e) {
					return Promise.all([n.e(0), n.e(1), n.e(78)]).then(n.bind(null, 287)).then(t => t.open(e))
				}(e)
			}
		},
		252: function(e, t, n) {
			"use strict";
			var i = n(2),
				r = n(15),
				a = n(24),
				o = n(0),
				s = n.n(o),
				l = n(248),
				c = n(23),
				d = n(1),
				u = n(21);
			class h extends c.a {
				constructor(e) {
					super();
					var t = this;
					if(this.options = Object.assign({
							autorun: !1,
							resetOnEnd: !0,
							loopCheckTime: 50,
							loopMaxNumber: 5,
							adv: null,
							baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
							baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
						}, e), this.bait = null, this.detected = !1, this.options.on)
						for(const [t, n] of Object.entries(e.on)) this.on(t, n);
					this.options.autorun && s()(document).ready((function() {
						t.run()
					}))
				}
				run() {
					this.i = 0, this.check()
				}
				check() {
					var e = this;
					this.i++, this.__createBait();
					var t = !1,
						n = this.bait[0];
					if(void 0 === s()("body").attr("abp") && null !== n.offsetParent && 0 != n.offsetHeight && 0 != n.offsetLeft && 0 != n.offsetTop && 0 != n.offsetWidth && 0 != n.clientHeight && 0 != n.clientWidth || (t = !0), void 0 !== window.getComputedStyle) {
						var i = window.getComputedStyle(n, null);
						"none" != i.getPropertyValue("display") && "hidden" != i.getPropertyValue("visibility") || (t = !0)
					}
					if(!t) return d.a("donate", "no adblock detected"), void e.trigger("done", t);
					this.i < this.options.loopMaxNumber ? (this.__destroyBait(), u.a(this.options.loopCheckTime).then((function() {
						e.check()
					}))) : (d.a("donate", "adblock detected"), e.trigger("done", t))
				}
				__createBait() {
					this.options.adv ? this.bait = s()(this.options.adv) : this.bait = s()("<div class='" + this.options.baitClass + "' style='" + this.options.baitStyle + "' aria-hidden='true'>&#160;</div>").appendTo("body")
				}
				__destroyBait() {
					this.options.adv || s()(this.bait).remove()
				}
			}

			function f(e, t, n) {
				i.e(arguments, 1, 3);
				var a = function(e, t) {
					var n, i;
					t || (t = r.b.lp), null != e && "" !== e || (e = "1"), !1 === e && (e = "0"), !0 === e && (e = "1"), e += "", n = t.substr(0, 2), i = t.substr(2, 2);
					var a = {};
					if("chde" != t) e && "0" != e ? (a.from = n, a.to = i) : (a.from = i, a.to = n);
					else switch(e) {
						default:
							case "0":
							a.from = i,
						a.to = n,
						a.toCC = "cs";
						break;
						case "1":
								a.from = n,
							a.to = i;
							break;
						case "2":
								a.from = i,
							a.to = n,
							a.toCC = "ct";
							break;
						case "3":
								a.from = i,
							a.to = n,
							a.toCC = "pn"
					}
					return a
				}(t, n);
				return function(e, t) {
					e.setParameter("from", t.from), e.setParameter("to", t.to), e.setParameter("_from", t.from), e.setParameter("_to", t.to)
				}(e, a), a
			}

			function p() {
				const e = window.navigator.msMaxTouchPoints,
					t = "ontouchstart" in document.createElement("div");
				return !(!e && !t)
			}
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return p
			})), a.b("dom", (function() {
				new h({
					on: {
						done: function(e) {
							e ? (r.b.set({
								donate: "yes"
							}), l.a(s()("#topBranding"))) : r.b.set({
								donate: "no"
							}), a.c("donate-status")
						}
					}
				}).run()
			}))
		},
		254: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			let i = null,
				r = null;

			function a(e) {
				i = e
			}

			function o(e) {
				r = e
			}
		},
		255: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return b
			}));
			var i = n(242),
				r = n(250),
				a = n(227),
				o = n(48),
				s = n(39),
				l = n(30),
				c = n(1),
				d = n(5),
				u = n(60),
				h = n(236),
				f = n(0),
				p = n.n(f),
				g = n(34),
				m = (n(233), n(12));

			function v() {
				const e = Promise.all([n.e(0), n.e(1), n.e(53)]).then(n.bind(null, 297));
				r.a({
					description: "trainer"
				}).then(() => e).then(e => e.open()).catch(a.a).catch(d.l([{
					match: d.i
				}, {
					match: a.f,
					handle() {
						c.f("vocables", "no session"), v()
					}
				}, {
					wrap: d.h,
					notify(e) {
						m.d.log_error("vocable-openmanager", e), c.b("vocables", "opening vocable manager failed:", e), o.c(Object(l.b)("Leider konnte die Vokabel nicht gespeichert werden."))
					}
				}]))
			}

			function b(e, t) {
				return t && s.a(t), r.a({
					description: "trainer"
				}).then((function() {
					return function(e) {
						i.a(e).then((function(t) {
							if(t) {
								if("dict" != u.a) return;
								var n = p()("div[data-dz-ui='vocablesaved']:first").clone();
								p()(n).css({
									display: "block"
								}), Object(g.a)({
									type: "success",
									layout: "bottomRight",
									text: n,
									timeout: 8e3
								}), h.a.addVocable(e), n.closest(".noty_message").on("click", (function() {
									v()
								}))
							} else Object(g.a)({
								type: "error",
								layout: "bottomRight",
								text: Object(l.b)("Leider konnte die Vokabel nicht gespeichert werden."),
								timeout: 8e3
							})
						})).catch(a.a).catch(d.l([{
							match: d.i
						}, {
							match: a.f,
							handle() {
								c.f("vocables", "no session"), b(e)
							}
						}, {
							wrap: d.h,
							notify(t) {
								m.d.log_error("vocable-save", t, {
									context: {
										uid: e
									}
								}), c.b("vocables", "saving vocable failed:", t), o.c(Object(l.b)("Leider konnte die Vokabel nicht gespeichert werden."))
							}
						}]))
					}(e)
				}))
			}
		},
		26: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			}));
			const i = new(n(5).j)("XSLT processor behaves incorrectly");
			class r {
				setParameter() {
					throw new Error("abstract function called")
				}
				transformToDocument() {
					throw new Error("abstract function called")
				}
			}
			t.c = r
		},
		262: function(e, t, n) {
			"use strict";
			var i = n(226),
				r = n(15),
				a = n(63),
				o = n(48),
				s = n(38),
				l = n(2),
				c = n(1),
				d = n(30),
				u = n(5);
			class h {
				constructor(e) {
					e = l.c(e, {
						xslfile: l.a
					}), this.xslfile = e.xslfile, this.xslt_ = new s.b;
					var t = this;
					null !== this.xslt_ && this.xslt_.initAsync(i.i(this.xslfile[r.b.lang]), {
						type: "GET"
					}).then((function() {
						t.xslt_.setParameter("ccconfig", "all")
					}), (function(e) {
						o.a(e) || (c.b("dictsearch", "Loading Xslt failed", e), a.g() ? o.c(Object(d.b)('Leider kam es zu einem Fehler bei der Anfrage. Bitte laden Sie die Seite einmalig mit der Tastenkombination "STRG+F5" (englische Tastatur: "CTRL+F5", Mac: "CMD+R" neu. Sollte der Fehler bestehen bleiben, schreiben Sie uns bitte eine E-Mail.') + " (dict@leo.org)") : a.c())
					}))
				}
				awaitInit() {
					return null === this.xslt_ ? new Promise(() => {
						throw new Error("Xslt not available")
					}) : this.xslt_.initResultF
				}
				render(e, t) {
					if(null === this.xslt_) throw new Error("Xslt not available");
					"mobile" == r.b.size && e.ownerDocument.documentElement.setAttribute("touch", "true");
					try {
						return this.xslt_.render(e, t)
					} catch(e) {
						return u.k(e, [{
							match: s.c,
							notify: function() {
								a.c()
							}
						}, {}])
					}
				}
			}
			h.failed = new u.b("Creating renderer failed"), t.a = h
		},
		274: function(e, t, n) {
			"use strict";
			n(144), n(275);
			n(227).d()
		},
		275: function(e, t, n) {
			"use strict";
			var i = n(244),
				r = n(226),
				a = n(39),
				o = n(76),
				s = n(60),
				l = n(0),
				c = n.n(l);
			n(59).a.register({
				"moredictionaries:switchdict": {
					attach(e) {
						e.on("click.moredictionaries", (function(e) {
							"dict" === s.a && (i.a.then(e => {
								var t = e.getParams();
								t.langpair = c()(this).attr("data-dz-rel-langpair"), o.e(r.d(t))
							}), a.a(e))
						}))
					}, detach(e) {
						e.off("click.moredictionaries")
					}
				},
				"moredictionaries:extendedLink": {
					attach(e) {
						e.on("click.moredictionaries", (function(e) {
							var t = c()(this).find("a").first();
							t && (window.location = t.attr("href"), a.a(e))
						}))
					}, detach(e) {
						e.off("click.moredictionaries")
					}
				},
				"moredictionaries:switchdictExtendedLink": {
					attach(e) {
						e.on("click.moredictionaries", (function(e) {
							var t = c()(this).find("a").first();
							t && ("dict" === s.a ? i.a.then(e => {
								var n = e.getParams();
								n.langpair = t.attr("data-dz-rel-langpair"), o.e(r.d(n))
							}) : window.location = t.attr("href"), a.a(e))
						}))
					}, detach(e) {
						e.off("click.moredictionaries")
					}
				},
				"moredictionaries:switchdictSearchfieldExtended": {
					attach(e) {
						e.on("click.moredictionaries", (function(e) {
							var t = c()(this).find("a").first();
							t && (t.trigger("click"), a.a(e))
						}))
					}, detach(e) {
						e.off("click.moredictionaries")
					}
				}
			})
		},
		279: function(e, t, n) {
			"use strict";
			n(241);
			var i = n(63),
				r = n(39),
				a = n(38),
				o = n(0),
				s = n.n(o);

			function l(e) {
				if(!i.a()) return;
				const t = s()(this).closest("[data-dz-name]").attr("data-dz-name");
				var n = s()(this).closest("[data-dz-ui~='dictresult']").data("dictresult").getSection(t);
				n.ready().then(() => {
					n.showMore()
				}), r.a(e)
			}

			function c(e) {
				if(!i.a()) return;
				const t = s()(this).closest("[data-dz-name]").attr("data-dz-name");
				var n = s()(this).closest("[data-dz-ui~='dictresult']").data("dictresult").getSection(t);
				n.ready().then(() => {
					n.hideMore()
				}), r.a(e)
			}
			n(59).a.register({
				dictresult: {
					detach(e) {
						const t = e.data("dictresult");
						t && t.detach(e)
					}
				},
				"dictresult:showMore": {
					attach(e) {
						a.a.value || e.parent("footer").hide(), e.on("click.dictresult", l).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictresult")
					}
				},
				"dictresult:hideMore": {
					attach(e) {
						e.on("click.dictresult", c).addClass("is-clickable")
					}, detach(e) {
						e.off("click.dictresult")
					}
				}
			})
		},
		280: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			n(246);
			var i = n(262),
				r = n(19),
				a = n(1);
			const o = {
				de: window.RWURL("/Xsl/de/dictExtra-9a11aa16.xsl"),
				en: window.RWURL("/Xsl/en/dictExtra-e030e830.xsl"),
				fr: window.RWURL("/Xsl/fr/dictExtra-c64f0295.xsl"),
				es: window.RWURL("/Xsl/es/dictExtra-1ffb30fb.xsl"),
				it: window.RWURL("/Xsl/it/dictExtra-057d6e84.xsl"),
				ru: window.RWURL("/Xsl/ru/dictExtra-1dc95880.xsl"),
				ch: window.RWURL("/Xsl/ch/dictExtra-735edb90.xsl"),
				pt: window.RWURL("/Xsl/pt/dictExtra-4abb84e7.xsl"),
				pl: window.RWURL("/Xsl/pl/dictExtra-954aa911.xsl")
			};
			class s extends i.a {
				constructor() {
					super({
						xslfile: o
					})
				}
			}
			let l;
			const c = (() => {
				try {
					return new s
				} catch(e) {
					return r.a.unavailable.is(e) ? (l = e, a.c("dictsearch", "Cannot create extra renderer:", e.message)) : (l = i.a.failed("Creating renderer failed", e), a.b("dictsearch", "Cannot create extra renderer:", e)), null
				}
			})();

			function d() {
				return c ? c.awaitInit().then(() => c) : Promise.reject(l)
			}
			t.a = c
		},
		288: function(e, t, n) {
			"use strict";
			var i = n(262),
				r = (n(246), n(19)),
				a = n(1);
			const o = {
				de: window.RWURL("/Xsl/de/search-776e8dbd.xsl"),
				en: window.RWURL("/Xsl/en/search-bf957087.xsl"),
				fr: window.RWURL("/Xsl/fr/search-198c687f.xsl"),
				es: window.RWURL("/Xsl/es/search-df5e3ae7.xsl"),
				it: window.RWURL("/Xsl/it/search-cc163b45.xsl"),
				ru: window.RWURL("/Xsl/ru/search-dd530172.xsl"),
				ch: window.RWURL("/Xsl/ch/search-4b89d0fd.xsl"),
				pt: window.RWURL("/Xsl/pt/search-71321aa9.xsl"),
				pl: window.RWURL("/Xsl/pl/search-2614dee4.xsl")
			};
			class s extends i.a {
				constructor() {
					super({
						xslfile: o
					})
				}
			}
			let l;
			const c = (() => {
				try {
					return new s
				} catch(e) {
					return r.a.unavailable.is(e) ? (l = e, a.c("dictsearch", "Cannot create search renderer:", e.message)) : (l = i.a.failed("Creating renderer failed", e), a.b("dictsearch", "Cannot create search renderer:", e)), null
				}
			})();
			t.a = c
		},
		289: function(e, t, n) {
			"use strict";
			var i = n(226),
				r = n(15),
				a = n(48),
				o = (n(143), n(141), n(33)),
				s = n(1),
				l = n(14),
				c = n(8),
				d = n(30),
				u = n(0),
				h = n.n(u),
				f = (n(107), n(35));

			function p(e, t) {
				!t.custom || "on" != t.custom.insertLine && "on" != t.custom.insertPrio || e.documentElement.setAttribute("insertDebugInfo", "on"), "lion/3" != r.b.api && "lion/4" != r.b.api || e.documentElement.setAttribute("lion", "1")
			}
			class g {
				constructor(e, t, n) {
					this.d = new l.a, this.result = e, this.sctName = t, this.params = n;
					var i = h()(e.data_).xpath("//section[@sctName='" + t + "']");
					this.baseCount_ = parseInt(i.attr("sctCount"), 10), this.totalCount_ = parseInt(i.attr("sctTotalCnt"), 10), this.loadedCount_ = 0, this.moreCount_ = null, this.moreVisible_ = !1, this.moreSect_ = null, this.morePrio_ = null, this.updateMoreParams_(i), this.collapsedHeight_ = null, this.expandedHeight_ = null, this.$hsect = null, e.manager.ui.then(e => {
						this.$hsect = e.$results.find("[data-dz-role='section'][data-dz-name='" + t + "']"), this.d.resolve(!0)
					})
				}
				ready() {
					return this.d.promise
				}
				getHNode() {
					return this.$hsect
				}
				updateMoreParams_(e) {
					var t = e.children("minprio");
					this.moreSect_ = t.attr("fixedSect"), this.morePrio_ = t.attr("val"), t.length ? this.moreCount_ = parseInt(t.attr("cnt"), 10) : this.moreCount_ = 0;
					var n = this.totalCount_ - this.baseCount_ - this.loadedCount_;
					n != this.moreCount_ && s.f("dictsearch", "inconsistent tailing element counts in loaded section (got " + this.moreCount_ + " instead of " + n + ")")
				}
				showMoreComplete_() {
					this.moreVisible_ = !0;
					var e = this.getHNode();
					if(e.find("[data-dz-ui='dictresult:hideMore']").css("display", "inline"), this.moreCount_ && this.baseCount_ + this.loadedCount_ - 1 != 225) {
						var t = this.baseCount_ + this.loadedCount_ - 1;
						e.find("[data-dz-role='moreEntries:count']").text(" (" + t + " / " + this.totalCount_ + ")")
					} else e.find("[data-dz-ui='dictresult:showMore']").css("display", "none"), e.find("[data-dz-ui='dictresult:changesearch']").css("display", "inline")
				}
				hideMoreComplete_() {
					this.moreVisible_ = !1;
					var e = this.getHNode();
					e.find("[data-dz-ui='dictresult:showMore']").css("display", "inline"), e.find("[data-dz-ui='dictresult:hideMore']").css("display", "none"), e.find("[data-dz-ui='dictresult:changesearch']").css("display", "none");
					var t = this.baseCount_ - 1;
					e.find("[data-dz-role='moreEntries:count']").text(" (" + t + " / " + this.totalCount_ + ")")
				}
				showMoreLocal_() {
					this.getHNode().animate({
						height: this.expandedHeight_ + "px"
					}, {
						duration: 300,
						complete: this.showMoreComplete_.bind(this)
					})
				}
				showMore() {
					if(null === this.collapsedHeight_) {
						var e = this.getHNode();
						this.collapsedHeight_ = e.height(), e.height(this.collapsedHeight_)
					}
					this.loadedCount_ && !this.moreVisible_ ? this.showMoreLocal_() : this.loadMore_()
				}
				hideMore() {
					var e = this.getHNode();
					this.expandedHeight_ = e.height(), e.animate({
						height: this.collapsedHeight_ + "px"
					}, {
						duration: 300,
						complete: this.hideMoreComplete_.bind(this)
					}), h()(window).scrollTop() > e.offset().top && h()(document).scrollTo(e[0], 150)
				}
				toggleMore() {
					this.moreVisible_ ? this.hideMore() : this.showMore()
				}
				loadMoreSuccess_(e) {
					e.documentElement.removeAttribute("leorendertarget"), p(e, this.params);
					var t = h()(e).xpath("//section"),
						n = this.result.manager.renderer.render(t[0]),
						i = this.getHNode(),
						r = i.children("table").children("tbody"),
						a = r.children("tr").length;
					r.appendXslt(n), this.loadedCount_ += t.children("entry").length;
					var o = parseInt(t.attr("sctTotalCnt"), 10);
					o != this.totalCount_ && (s.f("dictsearch", "sctTotalCount changed when paging (got " + o + " instead of " + this.totalCount_ + ")"), this.totalCount_ = o), this.updateMoreParams_(t);
					var l, d = i.children("table").height();
					d += 36, 0 == this.moreCount_ && this.baseCount_ + this.loadedCount_ - 1 != 225 || (d -= r.children("tr:last").height()), l = a ? r.children("tr:gt(" + (a - 1) + ")") : r.children("tr"), this.result.manager.relinkResults(l, this.params), c.a.trigger("htmlInserted", l);
					var u = this;
					i.animate({
						height: d + "px"
					}, {
						duration: 300,
						complete: function() {
							u.showMoreComplete_()
						}
					})
				}
				loadMoreError_() {
					a.c(Object(d.b)('Leider kam es zu einem Fehler bei der Anfrage. Bitte laden Sie die Seite einmalig mit der Tastenkombination "STRG+F5" (englische Tastatur: "CTRL+F5", Mac: "CMD+R" neu. Sollte der Fehler bestehen bleiben, schreiben Sie uns bitte eine E-Mail.') + " (dict@leo.org)")
				}
				loadMore_() {
					var e = i.e(this.result.params) + "&fixedSect=" + this.moreSect_ + "&minPrio=" + this.morePrio_ + "&sectLenMax=30";
					o.a(e).then(this.loadMoreSuccess_.bind(this), this.loadMoreError_.bind(this))
				}
			}
			const m = ["sim", "ffsyn", "grammar", "forumResults"];
			t.a = class {
				constructor(e, t, n) {
					p(t, n), this.manager = e, this.data_ = t, this.params = n, this.sections_ = {}, this.metrics = new f.b("results", {}, .01)
				}
				getSection(e) {
					return e in this.sections_ || (this.sections_[e] = new g(this, e, this.params)), this.sections_[e]
				}
				attach(e) {
					e.attr("data-dz-ui", "dictresult").data("dictresult", this), m.forEach(t => {
						e.find("#" + t).find("a").on("click", () => {
							this.metrics.log_event("clicked", {
								section: t
							}), this.metrics.report()
						})
					})
				}
				detach(e) {
					e.removeData("dictresult")
				}
			}
		},
		311: function(e, t, n) {
			"use strict";
			var i = n(69),
				r = n(25),
				a = n(31),
				o = n(2),
				s = n(0),
				l = n.n(s),
				c = n(16),
				d = n(59);
			const u = Object(a.e)(class extends r.c {
				constructor(e, t) {
					super(e), this.addUiName("navdrawer");
					var n, r = this,
						s = l()("body").width() - 56;
					s = Math.min(s, 280), (t = o.c(t, {
						modal: !0,
						position: "left",
						global: !0
					})).modal && (n = new i.a({
						scroll: !1
					})).element.on("click", (function() {
						r.hide()
					})), "left" == t.position && (t = o.g(t, {
						show: {
							animation: {
								left: 0
							},
							display: "block"
						},
						hide: {
							animation: {
								left: -1 * s
							},
							display: "none"
						}
					}), this.element.on("swipe", (function(e) {
						"left" === e.direction && r.hide()
					})), this.element.css({
						left: -1 * s,
						width: s
					}), t.global && !c.i && l()("html").on("swipe", (function(e) {
						"right" == e.direction && e.pageX < 50 && (e.preventDefault(), r.show())
					}))), "right" == t.position && ((t = o.g(t, {
						show: {
							animation: {
								right: 0
							},
							display: "block"
						},
						hide: {
							animation: {
								right: -1 * s
							},
							display: "none"
						}
					})).modal && this.modal.element.css({
						top: 56,
						zIndex: 4,
						bottom: Math.max(l()(document).height() - l()(window).height(), 0)
					}), this.element.on("swipe", (function(e) {
						"right" === e.direction && r.hide()
					})), this.element.css({
						right: -1 * s,
						width: s
					})), this.element.appendTo("body");
					var d = new a.d(e, {
						show: t.show,
						hide: t.hide
					});
					this.__toggle = new a.c(t.modal ? [d, n] : [d]), this.__toggle.on("shown", (function() {
						l()(window).trigger("lookup.unveil")
					}))
				}
			});
			d.a.registerClass("navdrawer", u)
		},
		331: function(e, t, n) {
			"use strict";

			function i(e, t = {}) {
				const n = document.createElement("script");
				n.asyc = !0, n.setAttribute("type", "text/javascript"), n.setAttribute("src", e), n.setAttribute("async", "async");
				for(const [e, i] of Object.entries(t)) n.setAttribute(e, i);
				const i = new Promise((e, t) => {
					n.onload = e, n.onerror = t
				});
				return document.head.appendChild(n), i
			}

			function r(e) {
				if("string" != typeof e) throw new Error("expected raw source code string: " + e);
				const t = document.createElement("script");
				t.setAttribute("type", "text/javascript"), t.textContent = e, document.head.appendChild(t)
			}
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			}))
		},
		332: function(e, t, n) {
			"use strict";
			var i = n(60);
			Object(i.b)({
				module: "dict"
			})
		},
		333: function(e, t, n) {
			"use strict";
			var i = n(0),
				r = n.n(i);
			t.a = function(e) {
				return class extends e {
					constructor(e) {
						super(e), this.titles = {
							start: r()("#starttitle-content").text(),
							result: r()("#resulttitle-content").text()
						}, this.descriptions = {
							start: r()("#startdescription-content").text(),
							result: r()("#resultdescription-content").text()
						}
					}
					setParams(e, t) {
						super.setParams(e, t), e.search ? (document.title = this.titles.result.replace("SUCHWORT", e.search), r()("meta[name='description']").attr("content", this.descriptions.result.replace("SUCHWORT", e.search))) : (document.title = this.titles.start, r()("meta[name='description']").attr("content", this.descriptions.start))
					}
					startResultLoad(e) {
						e && (this.setParams(e), window.scrollTo(0, 0), this.startSearchInput({
							expected: e.search
						}))
					}
					stopResultLoad() {}
					startCardLoad() {}
					stopCardLoad() {}
					adjustRenderedCards() {}
					targetCardSize() {
						return "md"
					}
				}
			}
		},
		345: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var i = n(15),
				r = n(331),
				a = n(1),
				o = n(24),
				s = n(8),
				l = n(0),
				c = n.n(l);
			n(350);
			const d = "https://cdn.cookielaw.org/consent/tcf.stub.js",
				u = "https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",
				h = "c4cb5e0c-7a6d-45e7-a4ae-0ff988e707ec",
				f = "c45b9d8a-4508-42d3-b3a8-4ba96a08333b",
				p = "462b667d-f802-4737-ae6f-cfcabfb48770";
			const g = function() {
				let e = h,
					t = !1;
				if(i.b.cookiepro) {
					let n = i.b.cookiepro;
					a.f("leocookie", "CookiePro script Id override:", n), n.endsWith("-test") && (t = !0, n = n.substr(0, n.length - 5)), e = "leoorg" == n ? h : "tdict" == n ? f : "devsth1" == n ? p : n
				}
				let n = e;
				return t && (n += "-test"), n
			}();
			async function m(e) {
				await r.a(e, {
					charset: "UTF-8",
					"data-domain-script": g
				})
			}
			async function v() {
				! function() {
					let e, t = !1;
					window.OptanonWrapper = function() {
						t ? e ? (e = !1, s.a.trigger("cookiepro:consentready"), o.c("cookiepro")) : s.a.trigger("cookiepro:consentupdate") : (t = !0, s.a.trigger("cookiepro:initial"), o.c("cookiepro:init"), (e = c()("#onetrust-banner-sdk").is(":visible")) || (s.a.trigger("cookiepro:consentready"), o.c("cookiepro")))
					}
				}(), await m(u), await m(d)
			}
			a.c("leocookie", "CookiePro script Id:", g);
			let b = !1,
				y = null;

			function w() {
				return b ? (a.a("leooil", "setupStub already started"), y) : (a.c("leooil", "setupStub"), b = !0, "wkal" === i.b.scope || i.b.app ? y = Promise.resolve() : (a.a("leocookie", "loading stub"), y = v()), y.catch(e => {
					a.b("leocookie", "Loading CookiePro script failed", e)
				}), y)
			}
		},
		347: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return y
			}));
			var i = n(231),
				r = n(226),
				a = n(15),
				o = n(39),
				s = n(2),
				l = n(43),
				c = n(235),
				d = n(58),
				u = n(37),
				h = n(59),
				f = n(0),
				p = n.n(f);

			function g(e, t, n) {
				const i = n.startsearch;
				i && p()(e).on("click.leoRelink", (function(n) {
					o.b(n) || (p()(e).parents("tr:first").trigger("mouseout"), i(t), o.a(n))
				}))
			}

			function m(e, t) {
				return function(n) {
					const a = function(e, t) {
						return(e = i.a(e)).search = t, e.side = i.b.side, e
					}(e, n);
					return r.c(a, t)
				}
			}

			function v(e, t, n) {
				(n = s.c(n, {
					buildhref: null,
					startsearch: null
				})).buildhref && e.setAttribute("href", n.buildhref(t)), g(e, t, n)
			}

			function b(e, t) {
				s.e(arguments, 1, 2);
				let n = !0;

				function i(e) {
					var n = document.createElement("a");
					return n.appendChild(document.createTextNode(e)), v(n, e, t), n
				}

				function r(e) {
					var n = function e(n) {
						var r, a, o, s = [];
						for(r = 0, a = n.childNodes.length; r < a; ++r) s.push(n.childNodes[r]);
						var h = n.cloneNode(!1);
						for(r = 0, a = s.length; r < a; ++r) {
							var f = s[r],
								p = /(?:\s|\u200b|[\[\]\/!?,;:()|])+/g;
							if(f.nodeType == l.c && "singlelink" == f.parentNode.getAttribute("data-dz-attr")) o = i(f.data), h.appendChild(o);
							else if(f.nodeType == l.c)
								for(var m, v = f.data, b = 0, y = 0; b < v.length;) {
									if((y = null !== (m = p.exec(v)) ? m.index : v.length) > b) o = i(v.substr(b, y - b)), h.appendChild(o), b = y;
									null !== m && (o = document.createTextNode(m[0]), h.appendChild(o), b = m.index + m[0].length)
								} else if(f.hasAttribute("data-leo-searchterm")) {
									var w = i(f.getAttribute("data-leo-searchterm"));
									for(w.removeChild(w.firstChild); f.firstChild;) w.appendChild(f.firstChild);
									h.appendChild(w)
								} else if("a" == f.tagName.toLowerCase() && f.hasAttribute("href")) {
								const e = f.getAttribute("href");
								let n = null;
								const i = d.parsePath(e),
									r = new u.a(i);
								"/" == e[0] ? r.pathname[0] in c.a && (n = r.pathname[1]) : n = r.pathname[0], null !== n && g(f, n, t), h.appendChild(f)
							} else "a" != f.tagName.toLowerCase() && "img" != f.tagName.toLowerCase() ? h.appendChild(e(f)) : h.appendChild(f)
						}
						return h
					}(this);
					p()(this).off(".leoRelink"), h.a.detach(this), this.parentNode.replaceChild(n, this), h.a.attach(n)
				}
				"mobile" == a.b.size && (n = !1), t = s.c(t, {
					buildhref: null,
					startsearch: null
				}), n ? e.on("click.leoRelink", (function(e) {
					if(t.startsearch) {
						var n = p()(this).getClickedWord({
							relink: !0
						});
						n && t.startsearch(n), o.a(e)
					}
				})).on("mouseover.leoRelink", r).addClass("isRelinked") : e.addClass("isRelinked").each((function() {
					r.call(this)
				}))
			}

			function y(e, t) {
				s.e(arguments, 1, 2), b(e.find("td[data-dz-attr='relink']"), t)
			}
		},
		35: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "b", (function() {
				return o
			}));
			var i = n(8),
				r = (n(51), n(3)),
				a = n(7);
			a.e;
			const o = a.a,
				s = a.h,
				l = a.d,
				c = a.c,
				d = {
					schema: 1,
					hostname: window.location.hostname,
					useragent: window.navigator.userAgent
				},
				u = a.f;
			i.a.on("pagehidden:after", (function() {
				u.forEach(e => {
					e.flush()
				}), u.forEach(e => {
					e.report()
				}), h && h.flush()
			}));
			let h = null;

			function f() {
				if(h) {
					s.forEach(e => {
						null === e.ratio && (e.ratio = r.a.metrics_reportratio)
					});
					const e = s.filter(e => r.a.metrics_level > 1 - e.ratio);
					s.length = 0, h.process(e, d)
				}
			}

			function p(e) {
				r.a.defaults({
					metrics_reportratio: 1,
					metrics_level: Math.random()
				}), h = e, f()
			}
			class g {
				process(e, t) {}
				flush() {}
			}

			function m() {
				p(new g)
			}

			function v(e) {
				n.e(63).then(n.bind(null, 89)).then(t => {
					p(new t.AjaxReporter(e))
				})
			}
			a.g.implement(f), o.debuglog = new o("debuglog");
			o.debuglog
		},
		350: function(e, t, n) {},
		352: function(e, t, n) {
			"use strict";
			var i = n(333),
				r = n(296),
				a = (n(275), n(1)),
				o = n(123),
				s = n(8),
				l = n(0),
				c = n.n(l);
			t.a = class extends(Object(i.a)(r.b)) {
				constructor(e) {
					super(e), this.$results = c()("#centerColumn"), this.resultsLoader = new o.a(this.$results, {
						autostart: !1
					}), c()("#secondColumn").length && (this.$cards = c()("#secondColumn"), this.cardsLoader = new o.b(this.$cards, {
						autostart: !1
					}))
				}
				startResultLoad(e) {
					super.startResultLoad(e), s.a.trigger("htmlRemove", this.$results), this.$results.empty(), this.resultsLoader.run()
				}
				stopResultLoad() {
					this.resultsLoader.pause()
				}
				startCardLoad() {
					s.a.trigger("htmlRemove", this.$cards), this.$cards.empty(), this.cardsLoader.run()
				}
				stopCardLoad() {
					this.cardsLoader.pause()
				}
				adjustRenderedCards(e) {
					if(e) {
						var t = this.$results.find("[data-dz-rel-aiid='" + e + "']").closest("tr");
						if(t.length) {
							var n = t.offset().top - this.$results.offset().top + t.height() / 2 - 44;
							this.$cards.stop(), this.$cards.animate({
								marginTop: n
							})
						} else a.f("dictsearch", "couldn't find result row for aiid=" + e)
					}
				}
				targetCardSize() {
					if(!c()(".l-dict-content-second").is(":visible")) return "none";
					const e = c()(".l-dict-content-second").width();
					return 0 == e ? "none" : e <= 160 ? "sm" : "md"
				}
			}
		},
		353: function(e, t, n) {
			"use strict";
			var i = n(333),
				r = n(296),
				a = n(231),
				o = n(15),
				s = n(69),
				l = n(2),
				c = n(31),
				d = n(25),
				u = n(123),
				h = n(0),
				f = n.n(h),
				p = n(16),
				g = n(14);
			n(311);
			const m = {
				INPAGE: 1,
				FIXED: 2,
				FOCUS: 3
			};
			class v extends d.a {
				constructor(e) {
					super(e), this.addUiName("searchboxmobile"), this.setup()
				}
				setup() {
					this.state = m.INPAGE, this.running = !1, this.$input = this.element.find("input[type='search']"), this.$searchbar = f()(".l-dict-searchbar"), this.autocomplete = new c.d(f()("[data-dz-ui='dictsearch:autocomplete']")), this.autocomplete.on("showing", (function() {
						f()(window).trigger("lookup.unveil")
					})), this.autocomplete.element.on("scroll", (function() {
						f()(window).trigger("scroll.unveil")
					})), this.drawer = f()("#left-drawer").navdrawer(), this.scroll = new c.d(f()("#searchBar"), {
						show: {
							animation: "scroll"
						},
						hide: {
							animation: ""
						}
					}), this.modal.element.css({
						top: 56,
						width: Math.min(768, f()(window).width())
					}), this.modal.element.on("click", () => {
						this.fixed()
					}), this.$input.on("focus", () => {
						this.focus()
					}), this.element.find("button[type='reset']").on("click.dictsearch", e => {
						"" == this.$input.val() ? (this.$input.blur(), this.inpage(), e.preventDefault(), e.stopImmediatePropagation()) : this.$input.focus()
					}), this.element.find("[ data-dz-button-role='drawer']").on("click", e => {
						this.drawer.show(), e.preventDefault(), e.stopImmediatePropagation()
					}), this.on(m.FOCUS, () => {
						this.drawer.hide()
					}), this.on(m.INPAGE, () => {
						this.$input.blur()
					}), this.drawer.on("shown", () => {
						this.inpage()
					})
				}
				inpage() {
					var e = new g.a;
					return this.state == m.INPAGE ? (e.resolve(!0), this.trigger(m.INPAGE)) : this.state == m.FIXED ? (this.running && this.stop(), this.running = !0, this.inpageFromFixed(e)) : (this.running && this.stop(), this.running = !0, this.inpageFromFocus(e)), this.state = m.INPAGE, e.promise
				}
				fixed() {
					var e = new g.a;
					return this.state == m.INPAGE ? (this.running && this.stop(), this.running = !0, this.fixedInpage(e)) : this.state == m.FIXED ? (e.resolve(!0), this.trigger(m.FIXED)) : (this.running && this.stop(), this.running = !0, this.fixedFocus(e)), this.state = m.FIXED, e.promise
				}
				focus() {
					var e = new g.a;
					return this.state == m.INPAGE ? (this.running && this.stop(), this.running = !0, this.focusInpage(e)) : this.state == m.FIXED ? (this.running && this.stop(), this.running = !0, this.focusFixed(e)) : (e.resolve(!0), this.trigger(m.FOCUS)), this.state = m.FOCUS, e.promise
				}
			}
			class b extends v {
				setup() {
					this.modal = new s.a({}), super.setup(), this.autocomplete.element.addClass("l-dict-autocomplete-absolute")
				}
				stop() {
					this.autocomplete.element.stop(!0), this.modal.element.stop(!0)
				}
				inpageFromFixed(e) {
					e.resolve(!0), this.running = !1, this.trigger(m.INPAGE)
				}
				inpageFromFocus(e) {
					Promise.all([this.autocomplete.hide(), this.modal.hide()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.INPAGE)
					})
				}
				fixedInpage(e) {
					e.resolve(!0), this.running = !1, this.trigger(m.FIXED)
				}
				fixedFocus(e) {
					Promise.all([this.autocomplete.hide(), this.modal.hide()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.FIXED)
					})
				}
				focusInpage(e) {
					Promise.all([this.autocomplete.show(), this.modal.show()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.FOCUS)
					})
				}
				focusFixed(e) {
					Promise.all([this.autocomplete.show(), this.modal.show()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.FOCUS)
					})
				}
			}
			class y extends v {
				setup() {
					this.modal = new s.a({
						scroll: !1
					}), super.setup(), this.autocomplete.element.addClass("l-dict-autocomplete-fixed"), f()(document).on("scroll", Object(d.b)(() => {
						this.running || this.state == m.FOCUS || (Math.max(document.documentElement.scrollTop, document.body.scrollTop) >= 55 ? this.fixed() : this.inpage())
					}, 50))
				}
				stop() {
					this.autocomplete.element.stop(!0), this.modal.element.stop(!0), this.scroll.element.stop(!0)
				}
				inpageFromFixed(e) {
					this.$searchbar.removeClass("l-dict-searchbar-fixed"), e.resolve(!0), this.running = !1, this.trigger(m.INPAGE)
				}
				inpageFromFocus(e) {
					this.$searchbar.removeClass("l-dict-searchbar-fixed"), Promise.all([this.autocomplete.hide(), this.modal.hide(), this.scroll.hide()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.INPAGE)
					})
				}
				fixedInpage(e) {
					this.$searchbar.addClass("l-dict-searchbar-fixed"), e.resolve(!0), this.running = !1, this.trigger(m.FIXED)
				}
				fixedFocus(e) {
					Promise.all([this.autocomplete.hide(), this.modal.hide(), this.scroll.hide()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.FIXED)
					})
				}
				focusInpage(e) {
					this.$searchbar.addClass("l-dict-searchbar-fixed"), Promise.all([this.autocomplete.show(), this.modal.show(), this.scroll.show()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.FOCUS)
					})
				}
				focusFixed(e) {
					Promise.all([this.autocomplete.show(), this.modal.show(), this.scroll.show()]).then(() => {
						e.resolve(!0), this.running = !1, this.trigger(m.FOCUS)
					})
				}
			}
			t.a = class extends(Object(i.a)(r.b)) {
				constructor(e) {
					super(e), this.$results = f()("#centerColumn"), this.resultsLoader = new u.a(this.$results, {
						autostart: !1
					}), this.$cards = f()("[data-dz-ui='dictsearch:autocomplete']"), this.cardsLoader = null, p.i ? this.mobileui = new b(this.$form) : this.mobileui = new y(this.$form)
				}
				startSearchInput(e) {}
				stopSearchInput() {
					super.stopSearchInput(), this.mobileui.inpage()
				}
				startResultLoad(e) {
					super.startResultLoad(e), this.$results.empty(), this.resultsLoader.run()
				}
				stopResultLoad() {
					this.mobileui.inpage(), this.$input.blur(), this.resultsLoader.pause()
				}
				setParams(e, t) {
					l.e(arguments, 1, 2), null !== (t = l.c(t, {
						expected: null
					})).expected && t.expected != this.$input.val() || this.$input.val(e.search), this.baseparams = e
				}
				getParams(e) {
					l.e(arguments, 0, 1), e || (e = this.baseparams);
					var t = this.$input.val() || "";
					t = t.trim();
					const n = a.a(e);
					return n.search = t, n.langpair = o.b.lp, n.lang = o.b.lang, n.side = this.getSide(), n
				}
				startCardLoad() {
					this.$cards.empty()
				}
				stopCardLoad() {}
			}
		},
		36: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n(1),
				r = n(24);
			let a = {};

			function o(e) {
				a[e] || (a[e] = {
					count: 0,
					interval: 0
				});
				const t = a[e];
				if(window.performance) {
					const e = window.performance.now();
					return {
						done: () => {
							const n = window.performance.now();
							t.count += 1, t.interval += n - e
						}
					}
				}
				return {
					done() {}
				}
			}
			r.b("page").then((function() {
				for(const [e, t] of Object.entries(a)) i.c("timing", e + ": " + t.interval + "ms for " + t.count + " calls")
			}))
		},
		379: function(e, t, n) {
			"use strict";
			var i = n(29),
				r = n(12),
				a = n(14),
				o = n(35),
				s = n(24),
				l = n(21),
				c = n(1),
				d = n(331),
				u = n(15);
			var h = "/* eslint-disable */\n\n    var queue = [];\n    var taskInProgress = false;\n\n    var bidheadtag = {\n        reload : function(config) {\n            if (taskInProgress) {queue.push(config); return;}\n            taskInProgress = true;\n            window.googletag.cmd.push(function() {\n                Object.keys(slots).forEach(function(key) {slots[key].loaded = false;});\n                oa_reloadBid(config);\n            });\n        }\n    };\n\n    var slots = {\n        slot1 : {active: false},\n        slot2 : {active: false},\n        slot3 : {active: false},\n        slot4 : {active: false},\n        slot5 : {active: false},\n        slotNative : {active: false}\n    };\n\n    var slotContainers = {\n        slot1 : oa_boxId('slot1') || 'adv-skyscaper',\n        slot2 : oa_boxId('slot2') || 'adv-banner',\n        slot3 : oa_boxId('slot3') || 'adv-halfpage',\n        // slot3 : 'adv-rightcol',\n        slot4 : oa_boxId('slot4') || 'adv-pbutton',\n        slot5 : oa_boxId('slot5') || 'adv-pbanner',\n        slotNative : oa_boxId('slotNative') || 'adv-native'\n    };\n\n    var slot_1_sizes = [\n        [160, 600], [120, 600], [1, 1]\n    ];\n    var slot_2_sizes = [\n        [728, 90], [468, 60], [1, 1]\n    ];\n    var slot_3_sizes = [\n        [300, 600], [160, 600], [120, 600], [300, 250], [1, 1]\n    ];\n    var slot_4_sizes = [\n        [320, 50], [1, 1]\n    ];\n    var slot_5_sizes = [\n        [320, 50], [1, 1]\n    ];\n\n    var slot_native_sizes = [\n        [1, 1], [300, 250], ['fluid']\n    ];\n\n    var BIDHEAD_TIMEOUT = 2000;\n\n    var _oa_appNexusAdServerSlotIdMapping =\n\t{\n\t\t'slot1' :  {\n\t\t\t'FB-LIB' : 11048768,\n\t\t\t'FB-MAP' : 11048772,\n\t\t\t'HP': 6200135,\n\t\t\t'WB-ENG': 6200220,\n\t\t\t'WB-CN': 6200250,\n\t\t\t'WB-CH': 6200250,\n\t\t\t'WB-ES': 6200252,\n\t\t\t'WB-FR': 6200258,\n\t\t\t'WB-IT': 6200261,\n\t\t\t'WB-PL': 6200264,\n\t\t\t'WB-PT': 6200269,\n\t\t\t'WB-RU': 6200271,\n\t\t\t'TEST': 7404542\n\t\t},\n\t\t'slot2' : {\n\t\t\t'FB-LIB' : 11048767,\n\t\t\t'FB-MAP' : 11048771,\n\t\t\t'HP': 6200134,\n\t\t\t'WB-ENG': 6200217,\n\t\t\t'WB-CN': 6200241,\n\t\t\t'WB-CH': 6200241,\n\t\t\t'WB-ES': 6200251,\n\t\t\t'WB-FR': 6200254,\n\t\t\t'WB-IT': 6200260,\n\t\t\t'WB-PL': 6200263,\n\t\t\t'WB-PT': 6200267,\n\t\t\t'WB-RU': 6200270,\n\t\t\t'FORUM': 6200133,\n\t\t\t'TRAINER': 6200209,\n\t\t\t'TEST': 7404536\n\t\t},\n\t\t'slot3' : {\n\t\t\t'FB-LIB' : 11048769,\n\t\t\t'FB-MAP' : 11048773,\n          \t'HP' : 10012759,\n\t\t\t'WB-ENG': 9829560,\n\t\t\t'WB-CN': 9829563,\n\t\t\t'WB-CH': 9829563,\n\t\t\t'WB-ES': 9829567,\n\t\t\t'WB-FR': 9829572,\n\t\t\t'WB-IT': 9829576,\n\t\t\t'WB-PL': 9829583,\n\t\t\t'WB-PT': 9829598,\n\t\t\t'WB-RU': 9829608,\n\t\t\t'TEST': 9829615\n\t\t},\n\t\t'slot4' : {'FB-MAP' : 11088549, 'FB-LIB' : 11088549, 'MOB' : 11088549},\n\t\t'slot5' : {'FB-MAP' : 11088550, 'FB-LIB' : 11088550, 'MOB' : 11088550},\n        'slotNative' : {'FB-MAP' : 14198599, 'FB-LIB' : 14198599, 'MOB' : 14198599}\n\t};\n\n    var pbjs = pbjs || {};\n    pbjs.que = pbjs.que || [];\n\n    var _oa_adUnits = [\n        {\n            slotId: \"slot1\",\n            code: slotContainers.slot1,\n            mediaTypes: {\n                banner: {\n                    sizes: slot_1_sizes\n                }\n            },\n            bids: [\n                {\n                    bidder: \"rubicon\",\n                    params: {\n                        accountId: 13286,\n                        siteId: 56090,\n                        zoneId: 438824,\n                        position : \"atf\",\n                        sizes: [9,8]\n                    }\n                },  {\n                    bidder: \"appnexus\",\n                    params: {\n                        placementId: oa_loadAppnexusPlacementIdbySlotAndArea('slot1'),\n                    }\n                }, {\n                    bidder: 'ix',\n                    params: {\n                        siteId: '235637',\n                        size: slot_1_sizes[0]\n                    }\n                }, {\n                    bidder: 'ix',\n                    params: {\n                        siteId: '235637',\n                        size: slot_1_sizes[1]\n                    }\n                }, {\n                    bidder: 'criteo',\n                    params: {\n                        zoneId: '731052',\n                        organisation: 'oneAG'\n                    }\n                }, {\n                    bidder: 'yieldlab',\n                    params: {\n                        adslotId: \"830759\",\n                        supplyId: \"830726\",\n                        adSize: \"160x600\"\n                    }\n                },  {\n                    bidder: 'yieldlab',\n                    params: {\n                        adslotId: \"830767\",\n                        supplyId: \"830726\",\n                        adSize: \"120x600\"\n                    }\n                }, {\n                    bidder: 'pubmatic',\n                    params: {\n                        publisherId : \"142525\",\n                        adSlot: 'LEO_SLOT1@160x600',\n                    }\n                }, {\n                    bidder: 'pubmatic',\n                    params: {\n                        publisherId : \"142525\",\n                        adSlot: 'LEO_SLOT1@120x600',\n                    }\n                }, {\n                    bidder: 'openx',\n                    params: {\n                        unit: '538748271',\n                        delDomain: 'oneadvertising-d.openx.net'\n                    }\n                }\n            ]\n        },\n        {\n            slotId: \"slot2\",\n            code: slotContainers.slot2,\n            mediaTypes: {\n                banner: {\n                    sizes: slot_2_sizes\n                }\n            },\n            bids: [{\n                bidder: \"rubicon\",\n                params: {\n                    accountId: 13286,\n                    siteId: 56090,\n                    zoneId: 438824,\n                    position : \"atf\",\n                    sizes: [2,1]\n                }\n            },  {\n                bidder: \"appnexus\",\n                params: {\n                    placementId: oa_loadAppnexusPlacementIdbySlotAndArea('slot2'),\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_2_sizes[0]\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_2_sizes[1]\n                }\n            }, {\n                bidder: 'criteo',\n                params: {\n                    zoneId: '731055',\n                    organisation: 'oneAG'\n                }\n            }, {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"830772\",\n                    supplyId: \"830726\",\n                    adSize: \"728x90\"\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT2@728x90',\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT2@468x60',\n                }\n            }, {\n                bidder: 'openx',\n                params: {\n                    unit: '538748272',\n                    delDomain: 'oneadvertising-d.openx.net'\n                }\n            }]\n        },\n        {\n            slotId: \"slot3\",\n            code: slotContainers.slot3,\n            mediaTypes: {\n                banner: {\n                    sizes: slot_3_sizes\n                }\n            },\n            bids: [{\n                bidder: \"rubicon\",\n                params: {\n                    accountId: 13286,\n                    siteId: 56090,\n                    zoneId: 438824,\n                    position : \"atf\",\n                    sizes: [10,15,9,8]\n                }\n            }, {\n                bidder: \"appnexus\",\n                params: {\n                    placementId: oa_loadAppnexusPlacementIdbySlotAndArea('slot3'),\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_3_sizes[0]\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_3_sizes[1]\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_3_sizes[2]\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_3_sizes[3]\n                }\n            }, {\n                bidder: 'criteo',\n                params: {\n                    zoneId: '731054',\n                    organisation: 'oneAG'\n                }\n            }, {\n                bidder: 'criteo',\n                params: {\n                    zoneId: '731053',\n                    organisation: 'oneAG'\n                }\n            }, {\n                bidder: 'criteo',\n                params: {\n                    zoneId: '731052',\n                    organisation: 'oneAG'\n                }\n            }, {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"830776\",\n                    supplyId: \"830726\",\n                    adSize: \"300x600\"\n                }\n            },  {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"830780\",\n                    supplyId: \"830726\",\n                    adSize: \"300x250\"\n                }\n            }, {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"830784\",\n                    supplyId: \"830726\",\n                    adSize: \"160x600\"\n                }\n            },  {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"830788\",\n                    supplyId: \"830726\",\n                    adSize: \"120x600\"\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT3@300x600',\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT3@300x250',\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT3@160x600',\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT3@120x600',\n                }\n            }, {\n                bidder: 'openx',\n                params: {\n                    unit: '538748273',\n                    delDomain: 'oneadvertising-d.openx.net'\n                }\n            }]\n        },\n        {\n            slotId: \"slot4\",\n            code: slotContainers.slot4,\n            mediaTypes: {\n                banner: {\n                    sizes: slot_4_sizes\n                }\n            },\n            bids: [{\n                bidder: \"rubicon\",\n                params: {\n                    accountId: 13286,\n                    siteId: 56090,\n                    zoneId: 374740,\n                    position : \"atf\",\n                    sizes: [43,44]\n                }\n            },  {\n                bidder: \"appnexus\",\n                params: {\n                    placementId: oa_loadAppnexusPlacementIdbySlotAndArea('slot4'),\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_4_sizes[0]\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_4_sizes[1]\n                }\n            }, {\n                bidder: 'criteo',\n                params: {\n                    zoneId: '740884',\n                    organisation: 'oneAG'\n                }\n            }, {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"896542\",\n                    supplyId: \"830726\",\n                    adSize: \"320x50\"\n                }\n            },  {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"896547\",\n                    supplyId: \"830726\",\n                    adSize: \"300x50\"\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT4@320x50',\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT4@300x50',\n                }\n            }, {\n                bidder: 'openx',\n                params: {\n                    unit: '538782106',\n                    delDomain: 'oneadvertising-d.openx.net'\n                }\n            }]\n        },\n        {\n            slotId: \"slot5\",\n            code: slotContainers.slot5,\n            mediaTypes: {\n                banner: {\n                    sizes: slot_5_sizes\n                }\n            },\n            bids: [{\n                bidder: \"rubicon\",\n                params: {\n                    accountId: 13286,\n                    siteId: 56090,\n                    zoneId: 374740,\n                    position : \"atf\",\n                    sizes: [2,1]\n                }\n            },  {\n                bidder: \"appnexus\",\n                params: {\n                    placementId: oa_loadAppnexusPlacementIdbySlotAndArea('slot5'),\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_5_sizes[0]\n                }\n            }, {\n                bidder: 'ix',\n                params: {\n                    siteId: '235637',\n                    size: slot_5_sizes[1]\n                }\n            }, {\n                bidder: 'criteo',\n                params: {\n                    zoneId: '731055',\n                    organisation: 'oneAG'\n                }\n            }, {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"896550\",\n                    supplyId: \"830726\",\n                    adSize: \"728x90\"\n                }\n            },  {\n                bidder: 'yieldlab',\n                params: {\n                    adslotId: \"896555\",\n                    supplyId: \"830726\",\n                    adSize: \"468x60\"\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT5@728x90',\n                }\n            }, {\n                bidder: 'pubmatic',\n                params: {\n                    publisherId : \"142525\",\n                    adSlot: 'LEO_SLOT5@468x60',\n                }\n            }, {\n                bidder: 'openx',\n                params: {\n                    unit: '538782108',\n                    delDomain: 'oneadvertising-d.openx.net'\n                }\n            }]\n        },\n        {\n            slotId: \"slotNative\",\n            code: slotContainers.slotNative,\n            mediaTypes: {\n                native: {\n                    title: {\n                  \t\trequired: true\n                  \t},\n                  \timage: {\n                    \trequired: true\n                  \t},\n                  \tsponsoredBy: {\n                    \trequired: false\n                  \t},\n                  \tbody: {\n                    \trequired: false\n                  \t},\n                  \ticon: {\n                    \trequired: false\n                  \t},\n                  \tclickURL: {\n                    \trequired: false\n                  \t},\n                  \tprivacyLink: {\n                    \trequired: false\n                  \t},\n                  \tprivacyIcon: {\n                   \t\trequired: false\n                  \t}\n                }\n            },\n            bids: [ {\n                bidder: \"appnexus\",\n                params: {\n                    placementId: oa_loadAppnexusPlacementIdbySlotAndArea('slotNative'),\n                }\n            }]\n        }\n\n    ];\n\n\n    function oa_loadAppnexusPlacementIdbySlotAndArea(slotId) {\n    \tvar _oa_currentSiteArea = \"WB-ENG\";\n    \tvar _oa_temp_fromDataLayer = _oa_loadSiteAreaFromDataLayer();\n    \tif (_oa_temp_fromDataLayer) {\n    \t\t_oa_currentSiteArea = _oa_temp_fromDataLayer.toUpperCase();\n    \t}\n    \tvar backupSiteArea = 'FB-MAP';\n    \tif (slotId === 'slot1') {\n    \t\treturn _oa_appNexusAdServerSlotIdMapping.slot1[_oa_currentSiteArea] ? _oa_appNexusAdServerSlotIdMapping.slot1[_oa_currentSiteArea] : _oa_appNexusAdServerSlotIdMapping.slot1[backupSiteArea];\n    \t}\n    \tif (slotId === 'slot2') {\n    \t\treturn _oa_appNexusAdServerSlotIdMapping.slot2[_oa_currentSiteArea] ? _oa_appNexusAdServerSlotIdMapping.slot2[_oa_currentSiteArea] : _oa_appNexusAdServerSlotIdMapping.slot2[backupSiteArea];\n    \t}\n    \tif (slotId === 'slot3') {\n    \t\treturn _oa_appNexusAdServerSlotIdMapping.slot3[_oa_currentSiteArea] ? _oa_appNexusAdServerSlotIdMapping.slot3[_oa_currentSiteArea] : _oa_appNexusAdServerSlotIdMapping.slot3[backupSiteArea];\n    \t}\n    \tif (slotId === 'slot4') {\n    \t\treturn _oa_appNexusAdServerSlotIdMapping.slot4[_oa_currentSiteArea] ? _oa_appNexusAdServerSlotIdMapping.slot4[_oa_currentSiteArea] : _oa_appNexusAdServerSlotIdMapping.slot4[backupSiteArea];\n    \t}\n    \tif (slotId === 'slot5') {\n    \t\treturn _oa_appNexusAdServerSlotIdMapping.slot5[_oa_currentSiteArea] ? _oa_appNexusAdServerSlotIdMapping.slot5[_oa_currentSiteArea] : _oa_appNexusAdServerSlotIdMapping.slot5[backupSiteArea];\n    \t}\n    \tif (slotId === 'slotNative') {\n    \t\treturn _oa_appNexusAdServerSlotIdMapping.slotNative[_oa_currentSiteArea] ? _oa_appNexusAdServerSlotIdMapping.slotNative[_oa_currentSiteArea] : _oa_appNexusAdServerSlotIdMapping.slotNative[backupSiteArea];\n    \t}\n    \treturn null;\n    }\n\n\n    function oa_loadSlotPropertyFromDataLayer(slotId, key) {\n        window.bhDataLayer = window.bhDataLayer || window.dataLayer;\n        var _dataLayerVar = window.bhDataLayer;\n        if (typeof _dataLayerVar === 'undefined' || !_dataLayerVar) {\n            return null;\n        }\n        for (var index = 0; index < _dataLayerVar.length; index++) {\n            var arrData = _dataLayerVar[index];\n            if (typeof arrData === 'undefined') {\n                continue;\n            }\n            if (arrData.dataId && arrData.dataId === 'bidheadConf' ) {\n                var slots = arrData.bidhead_slots;\n                for (var j = 0 ; j < slots.length; j++) {\n                    var slot = slots[j];\n                    if (slot.id === slotId) {\n                        return slot[key];\n                    }\n                }\n            }\n        }\n        return null;\n    }\n\n    function oa_isSlotActive(slotId) {\n        return oa_loadSlotPropertyFromDataLayer(slotId, 'active');\n    }\n\n    function oa_initSlotsStatus() {\n        slots.slot1.active = oa_isSlotActive('slot1');\n        slots.slot2.active = oa_isSlotActive('slot2');\n        slots.slot3.active = oa_isSlotActive('slot3');\n        slots.slot4.active = oa_isSlotActive('slot4');\n        slots.slot5.active = oa_isSlotActive('slot5');\n        slots.slotNative.active = oa_isSlotActive('slotNative');\n    }\n\n    function addGPTDisplay(boxId) {\n    \tvar box = document.getElementById(boxId);\n    \tif (!box) {\n    \t\treturn;\n    \t}\n    \tvar additionalBox = '';\n\t\tbox.innerHTML = additionalBox + '<script>googletag.cmd.push(function() { googletag.display(\"' + boxId + '\"); });' + '<' + '/script>';\n    }\n\n    function oa_callGPTShowTagForActiveSlots() {\n        if (slots.slot1.active) {\n        \taddGPTDisplay(slotContainers.slot1);\n        }\n        if (slots.slot2.active) {\n        \taddGPTDisplay(slotContainers.slot2);\n        }\n        if (slots.slot3.active) {\n        \taddGPTDisplay(slotContainers.slot3);\n        }\n        if (slots.slot4.active) {\n        \taddGPTDisplay(slotContainers.slot4);\n        }\n        if (slots.slot5.active) {\n        \taddGPTDisplay(slotContainers.slot5);\n        }\n        if (slots.slotNative.active) {\n        \taddGPTDisplay(slotContainers.slotNative);\n        }\n    }\n\n    function _oa_loadSiteAreaFromDataLayer() {\n        window.bhDataLayer = window.bhDataLayer || window.dataLayer;\n        var _dataLayerVar = window.bhDataLayer;\n        if (typeof _dataLayerVar === 'undefined' || !_dataLayerVar) {\n            return null;\n        }\n        for (var index = 0; index < _dataLayerVar.length; index++) {\n            var arrData = _dataLayerVar[index];\n            if (typeof arrData === 'undefined') {\n                continue;\n            }\n            if (arrData.dataId && arrData.dataId === 'bidheadConf' ) {\n                return arrData.bidhead_siteArea;\n            }\n        }\n    }\n\n    function oa_prepareSlotsByConfig(config) {\n        if (config && config.slots) {\n            for (var j = 0; j < config.slots.length; j++) {\n                var slot = config.slots[j];\n                if (typeof(slot.id) === 'undefined' || typeof(slot.active) === 'undefined') {continue;}\n                var currentSlot = slots[slot.id];\n                if (!currentSlot) {continue;}\n                if (slot.active) {\n                    currentSlot.active = true;\n                    continue;\n                }\n                currentSlot.active = false;\n            }\n        }\n    }\n\n    function oa_cleanUpActiveSlots() {\n    \toa_callGPTShowTagForActiveSlots();\n    }\n\n    function oa_getRequestAdUnits() {\n        var _oa_requestAdUnits = _oa_adUnits.slice();\n        if (!slots.slotNative.active) {\n            _oa_requestAdUnits.splice(5, 1);\n        }\n        if (!slots.slot5.active) {\n            _oa_requestAdUnits.splice(4, 1);\n        }\n        if (!slots.slot4.active) {\n            _oa_requestAdUnits.splice(3, 1);\n        }\n        if (!slots.slot3.active) {\n            _oa_requestAdUnits.splice(2, 1);\n        }\n        if (!slots.slot2.active) {\n            _oa_requestAdUnits.splice(1, 1);\n        }\n        if (!slots.slot1.active) {\n            _oa_requestAdUnits.splice(0, 1);\n        }\n        return _oa_requestAdUnits;\n    }\n\n    function oa_requestBids(adUnits, callback) {\n        var bidderOptions = {};\n        if (adUnits) {\n            bidderOptions.adUnits = adUnits;\n        }\n        bidderOptions.bidsBackHandler = function() {\n            callback('bidhead');\n        };\n        bidderOptions.timeout = BIDHEAD_TIMEOUT;\n        pbjs.requestBids(bidderOptions);\n    }\n\n    function oa_reloadBid(config) {\n        pbjs.requestSent = false;\n        oa_prepareSlotsByConfig(config);\n        var adUnits = oa_getRequestAdUnits();\n       \tfetchHeaderBids(adUnits);\n    }\n\n    function oa_boxId(slotId) {\n        return oa_loadSlotPropertyFromDataLayer(slotId, 'code');\n    }\n\n    oa_initSlotsStatus();\n\n    var _oa_leoPriceGranularity = {\n        \"buckets\" : [{\n            \"precision\": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12\n            \"min\" : 0,\n            \"max\" : 15,\n            \"increment\" : 0.05  // from $0 to $15, 5-cent increments\n        },\n            {\n                \"precision\": 2,\n                \"min\" : 15,\n                \"max\" : 50,\n                \"increment\" : 0.5  // from $15 to $50, round down to the previous 50-cent increment\n            },\n            {\n                \"precision\": 2,\n                \"min\" : 50,\n                \"max\" : 80,\n                \"increment\" : 5   // from $50 to $80, round down to the previous 1-$ increment\n            }]\n    };\n\n    pbjs.que.push(function() {\n        // set custom config object\n        // use custom price granularity for price buckets\n        // set userSync config\n        // activate and configure consent module\n        // disable send all bids\n        // enable single request for rubicon\n        pbjs.setConfig({\n            debug: false,\n            enableSendAllBids: false,\n            priceGranularity: _oa_leoPriceGranularity,\n            currency : {\n                \"adServerCurrency\": \"EUR\"\n            },\n            rubicon: {singleRequest: true},\n            consentManagement: {\n                gdpr: {\n                   cmpApi: 'iab',   // activates the enforcement module\n                   defaultGdprScope: true,\n                   timeout: 8000,   // GDPR timeout 3000ms\n                   rules: [{        // these are the default values\n                      purpose: \"storage\",\n                      enforcePurpose: true,\n                      enforceVendor: true\n                    },{\n                      purpose: \"basicAds\",\n                      enforcePurpose: true,\n                      enforceVendor: true\n                    }]\n               }\n            },\n            userSync: {\n                iframeEnabled: true,\n                enabledBidders: ['pubmatic', 'rubicon', 'openx', 'ix', 'criteo', 'yieldlab', 'appnexus'],\n                syncsPerBidder: 50, // and no more than 3 syncs at a time\n                syncDelay: 6000, // 6 seconds after the auction\n            }\n        });\n        pbjs.bidderSettings = {\n            standard: {\n                sendStandardTargeting : true,\n                suppressEmptyKeys: true,\n                adserverTargeting: [\n                    {\n                        key: \"EXTINVCODE\",\n                        val: function(bidResponse) {\n                            return bidResponse.bidderCode;\n                        }\n                    },{\n                        key: \"HB_BIDDER\",\n                        val: function(bidResponse) {\n                            return bidResponse.bidderCode;\n                        }\n                    }, {\n                        key: \"HB_ADID\",\n                        val: function(bidResponse) {\n                            return bidResponse.adId;\n                        }\n                    }, {\n                        key: \"HB_PB\",\n                        val: function(bidResponse) {\n                            return bidResponse.pbCg;\n                        }\n                    }, {\n                        key: 'HB_SIZE',\n                        val: function (bidResponse) {\n                            return bidResponse.size;\n                        }\n                    }, {\n                        key: 'HB_SOURCE',\n                        val: function (bidResponse) {\n                            return bidResponse.source;\n                        }\n                    }, {\n                        key: 'HB_FORMAT',\n                        val: function (bidResponse) {\n                            return bidResponse.mediaType;\n                        }\n                    }, {\n                        key: 'HB_CACHE_ID',\n                        val: function (bidResponse) {\n                            return bidResponse.videoCacheKey;\n                        }\n                    }, {\n                        key: 'HB_UUID',\n                        val: function (bidResponse) {\n                            return bidResponse.videoCacheKey;\n                        }\n                    }, {\n                        key: 'DOMAIN',\n                        val: function (bidResponse) {\n                            return window.location.hostname;\n                        }\n                    }, {\n                        key: 'SITE_AREA',\n                        val: function (bidResponse) {\n                            return _oa_loadSiteAreaFromDataLayer();;\n                        }\n                    }\n                ]\n            },\n            yieldlab: {\n                bidCpmAdjustment : function(bidCpm){\n                    // adjust the bid in real time before the auction takes place\n                    return bidCpm * .84;\n                }\n            },\n            rubicon: {\n                bidCpmAdjustment : function(bidCpm){\n                    // adjust the bid in real time before the auction takes place\n                    return bidCpm * .80;\n                }\n            },\n            pubmatic: {\n                bidCpmAdjustment : function(bidCpm){\n                    // adjust the bid in real time before the auction takes place\n                    return bidCpm * .85;\n                }\n            }\n        };\n    });\n\n    /* Bidhead Config Section END */\n\n\n    var _oa_dfpNetwork = \"2426274\";\n\n    var _oa_dfpAdServerSlotIdMapping = {\n    \t\t'slot1' :  {\n                'FB-LIB' : 'leo-eng-slot1',\n                'FB-MAP' : 'leo-eng-slot1',\n                'HP': 'leo-hp-slot1',\n                'WB-ENG':'leo-eng-slot1',\n                'WB-CN': 'leo-cn-slot1',\n                'WB-CH': 'leo-cn-slot1',\n                'WB-ES': 'leo-es-slot1',\n                'WB-ENES': 'leo-es-slot1',\n                'WB-FR': 'leo-fr-slot1',\n                'WB-ENFR': 'leo-fr-slot1',\n                'WB-IT': 'leo-it-slot1',\n                'WB-PL': 'leo-pl-slot1',\n                'WB-PT': 'leo-pt-slot1',\n                'WB-ESPT': 'leo-pt-slot1',\n                'WB-RU': 'leo-ru-slot1',\n                'WB-ENRU': 'leo-ru-slot1',\n                'TEST': 'leo-eng-slot1'\n            },\n            'slot2' : {\n                'FB-LIB' : 'leo-eng-slot2',\n                'FB-MAP' : 'leo-eng-slot2',\n                'HP': 'leo-hp-slot2',\n                'WB-ENG':'leo-eng-slot2',\n                'WB-CN': 'leo-cn-slot2',\n                'WB-CH': 'leo-cn-slot2',\n                'WB-ES': 'leo-es-slot2',\n                'WB-ENES': 'leo-es-slot2',\n                'WB-FR': 'leo-fr-slot2',\n                'WB-ENFR': 'leo-fr-slot2',\n                'WB-IT': 'leo-it-slot2',\n                'WB-PL': 'leo-pl-slot2',\n                'WB-PT': 'leo-pt-slot2',\n                'WB-ESPT': 'leo-pt-slot2',\n                'WB-RU': 'leo-ru-slot2',\n                'WB-ENRU': 'leo-ru-slot2',\n                'FORUM': 'leo-forum-slot2',\n                'TRAINER': 'leo-eng-slot2',\n                'TEST': 'leo-eng-slot2'\n            },\n            'slot3' : {\n                'FB-LIB' : 'leo-eng-slot3',\n                'FB-MAP' : 'leo-eng-slot3',\n                'HP' : 'leo-hp-slot3',\n                'WB-ENG': 'leo-eng-slot3',\n                'WB-CN': 'leo-cn-slot3',\n                'WB-CH': 'leo-cn-slot3',\n                'WB-ES': 'leo-es-slot3',\n                'WB-ENES': 'leo-es-slot3',\n                'WB-FR': 'leo-fr-slot3',\n                'WB-ENFR': 'leo-fr-slot3',\n                'WB-IT': 'leo-it-slot3',\n                'WB-PL': 'leo-pl-slot3',\n                'WB-PT': 'leo-pt-slot3',\n                'WB-ESPT': 'leo-pt-slot3',\n                'WB-RU': 'leo-ru-slot3',\n                'WB-ENRU': 'leo-ru-slot3',\n                'TEST': 'leo-eng-slot3'\n            },\n            'slot4' : {'FB-MAP' : 'leo-all-slot4', 'FB-LIB' : 'leo-all-slot4e', 'MOB' : 'leo-all-slot4'},\n            'slot5' : {'FB-MAP' : 'leo-all-slot5', 'FB-LIB' : 'leo-all-slot5', 'MOB' : 'leo-all-slot5'},\n            'slotNative' : {'FB-MAP' : 'leo-all-native', 'FB-LIB' : 'leo-all-native', 'MOB' : 'leo-all-native'}\n    };\n\n    function oa_configureGPT() {\n        var _oa_currentSiteArea = \"WB-ENG\";\n        var _oa_temp_fromDataLayer = _oa_loadSiteAreaFromDataLayer();\n        if (_oa_temp_fromDataLayer) {\n            _oa_currentSiteArea = _oa_temp_fromDataLayer.toUpperCase();\n        }\n\n        var backupSiteArea = 'FB-MAP';\n        var adUnitPath1 = '/' + _oa_dfpNetwork + '/' + (_oa_dfpAdServerSlotIdMapping.slot1[_oa_currentSiteArea] ? _oa_dfpAdServerSlotIdMapping.slot1[_oa_currentSiteArea] : _oa_dfpAdServerSlotIdMapping.slot1[backupSiteArea]);\n        var adUnitPath2 = '/' + _oa_dfpNetwork + '/' + (_oa_dfpAdServerSlotIdMapping.slot2[_oa_currentSiteArea] ? _oa_dfpAdServerSlotIdMapping.slot2[_oa_currentSiteArea] : _oa_dfpAdServerSlotIdMapping.slot2[backupSiteArea]);\n        var adUnitPath3 = '/' + _oa_dfpNetwork + '/' + (_oa_dfpAdServerSlotIdMapping.slot3[_oa_currentSiteArea] ? _oa_dfpAdServerSlotIdMapping.slot3[_oa_currentSiteArea] : _oa_dfpAdServerSlotIdMapping.slot3[backupSiteArea]);\n        var adUnitPath4 = '/' + _oa_dfpNetwork + '/' + (_oa_dfpAdServerSlotIdMapping.slot4[_oa_currentSiteArea] ? _oa_dfpAdServerSlotIdMapping.slot4[_oa_currentSiteArea] : _oa_dfpAdServerSlotIdMapping.slot4[backupSiteArea]);\n        var adUnitPath5 = '/' + _oa_dfpNetwork + '/' + (_oa_dfpAdServerSlotIdMapping.slot5[_oa_currentSiteArea] ? _oa_dfpAdServerSlotIdMapping.slot5[_oa_currentSiteArea] : _oa_dfpAdServerSlotIdMapping.slot5[backupSiteArea]);\n        var adUnitPathNative = '/' + _oa_dfpNetwork + '/' + (_oa_dfpAdServerSlotIdMapping.slotNative[_oa_currentSiteArea] ? _oa_dfpAdServerSlotIdMapping.slotNative[_oa_currentSiteArea] : _oa_dfpAdServerSlotIdMapping.slotNative[backupSiteArea]);\n\n        window.googletag.cmd.push(function () {\n\n        \tslots.slot1.dfpSlot = window.googletag.defineSlot(adUnitPath1, slot_1_sizes, slotContainers.slot1);\n        \tif (slots.slot1.dfpSlot) {\n        \t\tslots.slot1.dfpSlot.addService(googletag.pubads());\n        \t}\n            slots.slot2.dfpSlot = window.googletag.defineSlot(adUnitPath2, slot_2_sizes, slotContainers.slot2);\n            if (slots.slot2.dfpSlot) {\n        \t\tslots.slot2.dfpSlot.addService(googletag.pubads());\n        \t}\n            slots.slot3.dfpSlot = window.googletag.defineSlot(adUnitPath3, slot_3_sizes, slotContainers.slot3);\n            if (slots.slot3.dfpSlot) {\n        \t\tslots.slot3.dfpSlot.addService(googletag.pubads());\n        \t}\n            slots.slot4.dfpSlot = window.googletag.defineSlot(adUnitPath4, slot_4_sizes, slotContainers.slot4);\n            if (slots.slot4.dfpSlot) {\n        \t\tslots.slot4.dfpSlot.addService(googletag.pubads());\n        \t}\n            slots.slot5.dfpSlot = window.googletag.defineSlot(adUnitPath5, slot_5_sizes, slotContainers.slot5);\n            if (slots.slot5.dfpSlot) {\n        \t\tslots.slot5.dfpSlot.addService(googletag.pubads());\n        \t}\n            slots.slotNative.dfpSlot = window.googletag.defineSlot(adUnitPathNative, slot_native_sizes, slotContainers.slotNative);\n            if (slots.slotNative.dfpSlot) {\n        \t\tslots.slotNative.dfpSlot.addService(googletag.pubads());\n        \t}\n\t\t\twindow.googletag.pubads().enableSingleRequest();\n\t\t\twindow.googletag.enableServices();\n\t    });\n    }\n    oa_configureGPT();\n    // oa_callGPTShowTagForActiveSlots();\n\n    function loadGPTSlotsForRefresh() {\n    \tvar dfpSlots = [];\n    \tif (slots.slot1.active) {\n    \t\tdfpSlots.push(slots.slot1.dfpSlot);\n    \t}\n    \tif (slots.slot2.active) {\n    \t\tdfpSlots.push(slots.slot2.dfpSlot);\n    \t}\n    \tif (slots.slot3.active) {\n    \t\tdfpSlots.push(slots.slot3.dfpSlot);\n    \t}\n    \tif (slots.slot4.active) {\n    \t\tdfpSlots.push(slots.slot4.dfpSlot);\n    \t}\n    \tif (slots.slot5.active) {\n    \t\tdfpSlots.push(slots.slot5.dfpSlot);\n    \t}\n    \tif (slots.slotNative.active) {\n    \t\tdfpSlots.push(slots.slotNative.dfpSlot);\n    \t}\n    \treturn dfpSlots;\n    }\n\n\n    function fetchHeaderBids(adUnits) {\n        var TIMEOUT = BIDHEAD_TIMEOUT;\n        //declare bidders\n        var bidders = ['bidhead'];\n        // create a requestManager to keep track of bidder state to determine when to send ad server\n        var requestManager = {\n            adserverRequestSent: false,\n            adUnits: adUnits\n        };\n        //loop through bidder array and add the bidders to the request manager:\n        bidders.forEach(function(bidder) {\n            requestManager[bidder] = false;\n        });\n        // return true if all bidders have returned\n        function allBiddersBack() {\n            var allBiddersBack = bidders\n            // get the booleans from the object\n                .map(function(bidder) {\n                    return requestManager[bidder];\n                })\n                // get rid of false values - indicates that the bidder has responded\n                .filter(Boolean)\n                // if length is equal to bidders, all bidders are back\n                .length === bidders.length;\n            return allBiddersBack;\n        }\n        // handler for header bidder responses\n        function headerBidderBack(bidder) {\n            // return early if request to adserver is already sent\n            if (requestManager.adserverRequestSent === true) {\n                return;\n            }\n            // set the bidder targeting and flip bidder back flag\n            if (bidder === 'bidhead') {\n                requestManager.bidhead = true;\n            }\n            if (allBiddersBack()) {\n                sendAdserverRequest();\n            }\n        }\n\n        // actually get ads from DFP\n        function sendAdserverRequest() {\n            // return early if request already sent\n            if (requestManager.adserverRequestSent === true) {\n            \ttaskInProgress = false;\n                return;\n            }\n            oa_cleanUpActiveSlots();\n            // flip the boolean that keeps track of whether the adserver request was sent\n            requestManager.adserverRequestSent = true;\n            // make ad request to DFP\n            window.googletag.cmd.push(function() {\n            \tpbjs.setTargetingForGPTAsync();\n                googletag.pubads().refresh(loadGPTSlotsForRefresh());\n\n                taskInProgress = false;\n                processQueue();\n            });\n\n\n        }\n        function requestBids() {\n            pbjs.que.push(function() {\n                oa_requestBids(requestManager.adUnits, headerBidderBack);\n            });\n        }\n\n\n        if (adUnits.length == 0) {\n            return;\n        }\n        requestBids();\n        // set timeout to send request to call sendAdserverRequest() after timeout\n        // if all bidders haven't returned before then\n        window.setTimeout(function() {sendAdserverRequest();}, TIMEOUT);\n\n    }\n\n    fetchHeaderBids(oa_getRequestAdUnits());\n\n    function allSlotsLoaded() {\n        return Object.keys(slots).map(function(slot) {\n            return slot.active;\n        })\n        // get rid of false values - indicates that the bidder has responded\n            .filter(Boolean)\n            // if length is equal to active slots, all slots are loaded\n            .length === Object.keys(slots).map(function(slot) {\n            return slot.loaded;\n        })\n        // get rid of false values - indicates that the bidder has responded\n            .filter(Boolean).length;\n    }\n\n\n    function processQueue() {\n        if (!allSlotsLoaded()) {\n            return;\n        }\n        window.setTimeout(function() {\n            if (!taskInProgress && queue.length !== 0) {\n                bidheadtag.reload(queue.shift());\n            }\n        }, 20);\n    }\n\n\n\n    var googletag = googletag || {};\n    googletag.cmd = googletag.cmd || [];\n    googletag.cmd.push(function() {\n        googletag.pubads().disableInitialLoad();\n        var pageConfig = {\n  \t\t    sandbox: true\n  \t\t};\n  \t\tgoogletag.pubads().setSafeFrameConfig(pageConfig);\n    });\n    \n\n\n";
			class f {
				constructor(e, t) {
					this.name = e, this.initcheck = t, this.metrics = new o.b("bidhead-resource", function(e = {}) {
						return Object.assign({}, e, {
							barea: u.b.bidheadSiteArea
						})
					}({
						resource: e
					})), this.complete = !1, this.state = "initial", this.readyD = new a.a, this.ready = this.readyD.promise, this.ready.then(void 0, () => {})
				}
				statePending() {
					if("initial" != this.state) throw new Error("repeated call of bidhead " + this.name + " Resource#load()");
					this.state = "pending"
				}
				setSuccessState(e) {
					this.complete || (this.complete = !0, this.state = e, this.readyD.resolve(e))
				}
				setFailureState(e) {
					this.complete || (this.complete = !0, this.state = e, this.readyD.reject(e))
				}
			}
			class p extends f {
				constructor(e, t, n) {
					super(e, n), this.url = t
				}
				load() {
					const e = new Promise((e, t) => {
						this.statePending(), this.metrics.log_event("start");
						const n = this.initcheck();
						s.b("page").then(() => l.a(1e4)).then(() => {
							this.complete || (this.metrics.log_event("missing", {
								state: this.state
							}), this.metrics.report())
						});
						s.b("page").then(() => l.a(3e4)).then(() => {
							this.complete || this.metrics.log_event("timeout", {
								state: this.state
							})
						}), c.a("leobidhead", "loading " + this.name + " (async)"), d.a(this.url).then(() => (this.metrics.log_time("loaded"), this.complete ? (c.f("leobidhead", "resource loaded after already in completed state " + this.complete), void this.metrics.log_time("obsolete-loaded", {
							complete: this.complete
						})) : n.then(() => {
							c.a("leobidhead", "resource " + this.name + " complete"), e("complete"), this.metrics.log_time("complete"), this.metrics.report()
						}, e => {
							c.b("leobidhead", "initializing " + this.name + " failed", e), this.metrics.log_event("failed", {
								step: "init"
							}), this.metrics.report(), t("failed")
						})), e => {
							c.b("leobidhead", "loading " + this.name + " failed", e), this.metrics.log_event("failed", {
								step: "load"
							}), this.metrics.report(), t("failed")
						})
					}).then(e => {
						this.setSuccessState(e)
					}, e => (this.setFailureState(e), Promise.reject(new Error("loading resource '" + this.name + "' failed"))));
					return this.readyD.resolve(e), e
				}
				skip() {
					this.readyD.resolve("skipped")
				}
			}
			const g = new p("bidhead", "https://app.bidhead.net/bidhead_3.23.0.js", () => (window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], new Promise(e => window.pbjs.que.push(e)))),
				m = new p("gpt", "https://securepubads.g.doubleclick.net/tag/js/gpt.js", () => (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], new Promise(e => window.googletag.cmd.push(e)))),
				v = new class extends f {
					load(e) {
						try {
							if(this.statePending(), window.datalayer = window.bhDataLayer = e, d.b(h), !window.bidheadtag) throw new Error("window.bidheadtag missing after loading pagescript");
							return this.setSuccessState("complete"), window.bidheadtag
						} catch(e) {
							throw this.setFailureState("failed"), e
						}
					}
				}("pagescript", () => Promise.resolve()),
				b = new f("combined", null);
			var y = n(345),
				w = n(11);
			let x = null,
				_ = null;

			function k(e) {
				if(null === x) throw new Error("bidheadtag unavailable");
				e(x)
			}
			var S = n(40),
				C = n(5),
				A = n(2);
			const T = "v2";
			let E = {};

			function I(e) {
				E = {};
				for(const t of Object.values(e)) "bidhead" == t.content && t.visible && (E[t.htmlid] = t)
			}
			let j = !0;

			function N(e, t, n) {
				n = A.c(n, {
					time: !1,
					report: !1,
					errorcapture: !1
				});
				const i = function(e) {
					return e.toLowerCase().substr(2)
				}(e);
				window.apntag.onEvent(e, t, (r, a) => {
					c.c("leobidhead", "APN event: " + e, r, a);
					const o = E[t];
					if(!o) return void c.b("leobidhead", "apn event without registered slot: aid=" + t + " ev=" + e);
					if(!o.state) return void c.b("leobidhead", "apn event without registered slot state: aid=" + t + " ev=" + e);
					if("bidhead" == !o.content) return void c.f("leobidhead", "apn event without registered bidhead slot: aid=" + t + " ev=" + e);
					const s = {
						eventsource: "apn"
					};
					n.errorcapture && (s.context = JSON.stringify({
						error: r,
						obj: a
					})), !1 !== n.time ? o.state.metrics.log_time("apn" + i, n.time, s) : o.state.metrics.log_event("apn" + i, s), "loaded" == i ? (o.state.loaded(), j && (j = !1, w.b.log_time("bidhead-adloaded", null, {
						bversion: T
					}), w.b.report())) : "nobid" == i || "badrequest" == i ? o.state.pending_state = null : "requested" != i && "available" != i || (o.state.pending_state = i), n.report && o.state.metrics.report()
				})
			}

			function P() {
				return S.g("__gads", () => (async function() {
					if(null !== _) return await _;
					c.a("leobidhead", "setup CookiePro"), await y.a(), c.a("leobidhead", "loading gpt (async)");
					const e = m.load();
					c.a("leobidhead", "loading bidhead (async)");
					const t = g.load();
					return b.statePending(), b.metrics.log_event("start"), _ = Promise.all([e, t]), await _
				})(), () => Promise.reject(new C.a("No Google cookie consent")))
			}

			function z(e) {
				e = A.c(e, {
					slots: A.a,
					bidhead: A.a
				});
				const t = [{
					dataId: "bidheadConf",
					bidhead_siteArea: u.b.bidheadSiteArea,
					bidhead_lang: (n = u.b.lang, "ch" == n ? "zh" : n),
					bidhead_slots: Object.values(e.bidhead)
				}];
				var n, i;
				return w.b.log_time("bidhead-enable", null, {
						bversion: T
					}), i = e.slots, window.apntag = window.apntag || {}, window.apntag.anq = window.apntag.anq || [], window.apntag.anq.push((function() {
						const e = new Set;
						for(const t of Object.values(i)) e.add(t.htmlid);
						for(const t of e.values()) N("adRequested", t, {
							report: !1,
							time: "request"
						}), N("adAvailable", t, {
							report: !1,
							time: "apnrequested"
						}), N("adBadRequest", t, {
							report: !0
						}), N("adLoaded", t, {
							report: !0,
							time: "apnavailable"
						}), N("adNoBid", t, {
							report: !0
						}), N("adRequestFailure", t, {
							report: !0,
							errorcapture: !0
						}), N("adError", t, {
							report: !0,
							errorcapture: !0
						}), N("adCollapse", t, {
							report: !0
						})
					})), I(e.slots), c.c("leobidhead", "enable"),
					function(e) {
						return new Promise(t => {
							c.a("leobidhead", "loading Pagescript (sync)"), x = v.load(e), t()
						}).then(() => {
							b.setSuccessState("complete")
						}, e => (b.setFailureState("failed"), Promise.reject(e))).then(() => {
							b.metrics.log_time(b.state), w.d("bidhead-status")
						}, e => (b.metrics.log_time(b.state), w.d("bidhead-status"), Promise.reject(e)))
					}(t).then(() => {
						w.b.log_time("bidhead-initialized", null, {
							bversion: T
						})
					})
			}
			let L = !1;

			function D(e) {
				for(const t of Object.values(e)) "bidhead" == t.content && t.setContent("fallback", {
					reason: "bidheadfallback"
				})
			}

			function O(e, {
				reason: t
			}) {
				for(const n of Object.values(e)) "bidhead" == n.content && n.visible && (n.state.request(t, n.content), n.state.metrics.report())
			}
			let R = null;

			function B(e, {
				reason: t
			}) {
				if(!R) return function(e, {
					reason: t
				}) {
					null === R ? (R = P().then(() => {
						O(e.slots, {
							reason: t
						})
					}, t => {
						throw L = !0, D(e.slots), t
					}).then(() => z(e).catch(t => {
						throw L = !0, D(e.slots), t
					}))).catch(e => {
						e instanceof C.a ? c.c("slots", "bidhead", "Bidhead not loaded: " + e.message) : c.b("slots", "bidhead", e)
					}) : r.c(new Error("duplicate setup call"), {
						log: "slots",
						metrics: "slots-bidhead"
					})
				}(e, {
					reason: t
				});
				const n = R;
				R = n.then(() => {
					O(e.slots, {
						reason: t
					});
					try {
						! function(e) {
							e = A.c(e, {
								slots: A.a,
								bidhead: A.a
							}), c.c("leobidhead", "update"), I(e.slots);
							const t = {
								slots: Object.values(e.bidhead)
							};
							k(e => e.reload(t))
						}(e)
					} catch(e) {
						r.c(e, {
							log: "slots",
							metrics: "slots-bidhead-configure"
						})
					}
				}, () => {
					D(e.slots)
				}).catch(e => {
					r.c(e, {
						log: "slots",
						metrics: "slots-bidhead",
						message: "in configure()"
					})
				}).then(() => n)
			}

			function M() {
				if(!R) return void r.c(new Error("unexpected refresh() before configure()"), {
					log: "slots",
					metrics: "slots-bidhead"
				});
				const e = R;
				R = e.then(() => {
					try {
						c.c("leobidhead", "refresh"), k(e => e.reload(null))
					} catch(e) {
						r.c(e, {
							log: "slots",
							metrics: "slots-bidhead-refresh",
							message: "in refresh()"
						})
					}
					return e
				})
			}
			var q = n(226),
				F = n(248),
				U = n(7);
			class H extends U.b {
				constructor(e, t = {}) {
					super(e, t), this.active = !1, this.report_pending = !1
				}
				activate() {
					this.active || (this.active = !0, this.report_pending && this.report())
				}
				flush() {
					this.activate()
				}
				report() {
					this.active ? super.report() : this.report_pending = !0
				}
			}
			class W extends H {
				constructor(e, t, n = {}) {
					const i = {
							slot: t.name,
							content: t.content
						},
						r = [];
					"bidhead" == t.content && Object.assign(i, {
						barea: u.b.bidheadSiteArea,
						bslot: t.bidhead.id
					}), super(e, n = Object.assign({}, n, i, {
						donate: u.b.donate,
						consent: u.b.oil
					})), r.push(s.b("donate-status").then(() => {
						this.tags.donate = u.b.donate
					})), r.push(s.b("oil-status").then(() => {
						this.tags.consent = u.b.oil
					})), Promise.all(r).then(() => this.activate())
				}
			}
			class X {
				constructor(e) {
					this.metrics = new W("slots-impressions", e), this.pending_state = null, this.done_state = null, this.wasdone = !1
				}
				prepare(e) {
					this.pending_state = "prepare", this.metrics.log_event("prepare", {
						reason: e
					})
				}
				request(e, t) {
					this.metrics.tags.content = t, this.metrics.log_event("request", {
						reason: e
					}), this.pending_state = "request", this.done_state = null, this.wasdone = null
				}
				loaded() {
					this.metrics.log_event("loaded"), this.metrics.report(), this.pending_state = null
				}
				done(e) {
					"prepare" != this.pending_state ? this.wasdone ? this.metrics.log_time("doneagain", "notdone", {
						reason: e
					}) : (this.done_state = this.pending_state, this.pending_state ? this.metrics.log_time("earlydone", "request", {
						reason: e,
						pending: this.pending_state
					}) : this.metrics.log_time("done", "loaded", {
						reason: e
					}), this.metrics.report()) : this.pending_state = null
				}
				notdone() {
					this.metrics.log_time("notdone", "done", {
						donestate: this.done_state
					}), this.wasdone = !0
				}
			}
			var $ = n(33);
			const V = new U.b("timing");
			let G = 0;
			var Q = n(42),
				K = n(131),
				Y = n(8),
				J = n(0),
				Z = n.n(J);
			n(246), n(70), n(145);
			n.d(t, "a", (function() {
				return le
			}));
			const ee = {
				banner: {
					htmlid: "adv-banner",
					data: null
				},
				wbanner: {
					htmlid: "adv-wbanner",
					data: null
				},
				fbanner: {
					htmlid: "adv-fbanner",
					data: null
				},
				pbutton: {
					htmlid: "adv-pbutton",
					data: null
				},
				pbanner: {
					htmlid: "adv-pbutton",
					data: null
				}
			};
			let te = !1,
				ne = !1;
			const ie = {
				slot1: {
					id: "slot1",
					active: !1,
					code: null,
					size: [160, 600],
					additionalSizes: [
						[120, 600]
					]
				},
				slot2: {
					id: "slot2",
					active: !1,
					code: null,
					size: [728, 90],
					additionalSizes: [
						[468, 60]
					]
				},
				slot3: {
					id: "slot3",
					active: !1,
					code: null,
					size: [300, 600],
					additionalSizes: [
						[300, 250],
						[160, 600]
					]
				},
				slot4: {
					id: "slot4",
					active: !1,
					code: null,
					size: [320, 50],
					additionalSizes: [
						[300, 50]
					]
				},
				slot5: {
					id: "slot5",
					active: !1,
					code: null,
					size: [728, 90],
					additionalSizes: [
						[468, 60]
					]
				},
				slotNative: {
					id: "slotNative",
					active: !1,
					code: null,
					size: [1, 1]
				}
			};
			const re = {
				halfpage: {
					action: function(e) {
						const t = {
							href: e.fallbackleo.href.replace("$LANG", u.b.lang).replace("$LP", u.b.lp)
						};
						e.fallbackleo.internal || (t.target = "_blank", t.rel = "noopener"), Z()("#" + e.htmlid).html(Z.a.node("a", t).append(Z.a.node("img", {
							src: e.fallbackleo.img
						})))
					},
					img: window.RWURL("/img/leo/fallb_leo_halfp-26fcd398.gif"),
					href: "/content/index.php?lang=$LANG&lp=$LP",
					internal: !0
				},
				banner: {
					action: function(e) {
						F.a(Z()("#" + e.htmlid))
					}
				}
			};
			class ae {
				constructor(e) {
					this.content = null, this.visible = !1, Object.assign(this, e), this.newstate()
				}
				checkSize({
					reason_unused: e
				}) {}
				newstate() {
					this.state = new X(this)
				}
				makeContentVisible(e, {
					reason: t
				}) {
					if(this.content)
						if(e)
							if("bidhead" == this.content) {
								if(!this.bidhead) throw new Error("bidhead config missing for slot " + this.name);
								this.bidhead.active = !0, te = !0, this.state.prepare(t)
							} else if("htmlinsert" == this.content) {
						if(!this.htmlinsert) throw new Error("htmlinsert config missing for slot " + this.name);
						this.state.request(t, this.content), Z()("#" + this.htmlid).html(this.htmlinsert.data), this.state.loaded()
					} else if("fallbackleo" == this.content) {
						if(!this.fallbackleo) throw new Error("fallbackleo config missing for slot " + this.name);
						this.state.request(t, this.content), this.fallbackleo.action(this), this.state.loaded()
					} else {
						if("empty" != this.content) throw new Error("unknown slot content: " + this.content);
						this.state.request(t, this.content), this.state.loaded()
					} else if("bidhead" == this.content) {
						if(!this.bidhead) throw new Error("bidhead config missing for slot " + this.name);
						"prepare" !== this.state.pending_state && (te = !0), this.state.done(t), this.bidhead.active = !1, Z()("#" + this.htmlid).contents().trash()
					} else if("htmlinsert" == this.content || "fallbackleo" == this.content) this.state.done(t), Z()("#" + this.htmlid).contents().trash();
					else {
						if("empty" != this.content) throw new Error("unknown slot content: " + this.content);
						this.state.done(t)
					}
				}
				setVisible(e, {
					reason: t
				}) {
					this.visible != e && (this.visible = e, this.makeContentVisible(e, {
						reason: t
					}))
				}
				setContent(e, {
					reason: t
				}) {
					"bidhead" == e && L && (e = "fallback"), "fallback" == e && (e = this.fallbackleo ? "fallbackleo" : "empty"), this.content !== e && (this.visible && this.makeContentVisible(!1, {
						reason: t
					}), this.content = e, "bidhead" == this.content && (this.bidhead.code = this.htmlid), this.newstate(), this.visible && this.makeContentVisible(!0, {
						reason: t
					}))
				}
				setup(e, t, {
					reason: n
				}) {
					this.setContent(e, {
						reason: n
					}), "htmlinsert" == this.content ? (this.visible = t, this.newstate(), t && (this.state.request(n, this.content), this.state.loaded())) : this.setVisible(t, {
						reason: n
					})
				}
				refresh() {
					this.visible && this.content && (this.state.done("refresh"), this.newstate(), this.state.request("refresh", this.content), "bidhead" == this.content ? ne = !0 : this.state.loaded())
				}
			}
			class oe {
				constructor() {
					this.visible = !1, this.active_slot = null
				}
				allSlots() {
					return []
				}
				setActiveSlot(e, {
					reason: t = null
				}) {
					e !== this.active_slot && (this.active_slot && this.active_slot.setVisible(!1, {
						reason: t
					}), this.active_slot = e, this.active_slot && this.active_slot.setVisible(this.visible, {
						reason: t
					}))
				}
				setVisible(e, {
					reason: t
				}) {
					this.visible != e && (this.visible = e, this.active_slot && this.active_slot.setVisible(e, {
						reason: t
					}))
				}
				setContent(e, {
					reason: t
				}) {
					for(const n of this.allSlots()) n.setContent(e, {
						reason: t
					})
				}
				setup(e, t, {
					reason: n
				}) {
					for(const t of this.allSlots()) t.setup(e, !1, {
						reason: n
					});
					this.visible = t
				}
				refresh() {
					this.active_slot && this.active_slot.refresh()
				}
			}
			class se extends ae {
				checkSize({
					reason: e
				}) {
					this.setVisible(Z()("#" + this.htmlid).is(":visible"), {
						reason: e
					})
				}
			}
			const le = {
					banner: new ae({
						name: "banner",
						htmlid: "adv-banner",
						htmlinsert: ee.banner,
						bidhead: ie.slot2,
						fallbackleo: re.banner
					}),
					wbanner: new ae({
						name: "wbanner",
						htmlid: "adv-wbanner",
						htmlinsert: ee.wbanner,
						bidhead: ie.slot2,
						fallbackleo: re.banner
					}),
					fbanner: new ae({
						name: "fbanner",
						htmlid: "adv-fbanner",
						htmlinsert: ee.fbanner,
						bidhead: ie.slot2,
						fallbackleo: re.banner
					}),
					skyscraper: new se({
						name: "skyscraper",
						htmlid: "adv-skyscraper",
						htmlinsert: null,
						bidhead: ie.slot1,
						fallbackleo: null
					}),
					halfpage: new se({
						name: "halfpage",
						htmlid: "adv-halfpage",
						htmlinsert: null,
						bidhead: ie.slot3,
						fallbackleo: re.halfpage
					}),
					native: new ae({
						name: "native",
						htmlid: "adv-native",
						htmlinsert: null,
						bidhead: ie.slotNative,
						fallbackleo: null
					}),
					pbutton_small: new ae({
						name: "pbutton_small",
						htmlid: "adv-pbutton",
						htmlinsert: ee.pbutton,
						bidhead: ie.slot4,
						fallbackleo: null
					}),
					pbutton_large: new ae({
						name: "pbutton_large",
						htmlid: "adv-pbutton",
						htmlinsert: ee.pbanner,
						bidhead: ie.slot5,
						fallbackleo: null
					})
				},
				ce = {
					pbutton: new class extends oe {
						constructor(e) {
							super(), Object.assign(this, e)
						}
						allSlots() {
							return Object.values(this.sizes).filter(e => null != e)
						}
						getTarget() {
							if(this.sizes) {
								const e = document.getElementById(this.htmlid);
								if(!e) return null;
								let t = Object(K.a)(e);
								return null === t && (t = "default"), this.sizes[t] ? this.sizes[t] : this.sizes.default
							}
							return null
						}
						checkSize({
							reason: e
						}) {
							this.setActiveSlot(this.getTarget(), {
								reason: e
							})
						}
					}({
						name: "pbutton",
						htmlid: "adv-pbutton",
						sizes: {
							small: le.pbutton_small,
							large: le.pbutton_large,
							default: le.pbutton_small
						}
					})
				},
				de = {
					"adv-banner": {
						slot: le.banner,
						htmlinsert: ee.banner
					},
					"adv-wbanner": {
						slot: le.wbanner,
						htmlinsert: ee.wbanner
					},
					"adv-fbanner": {
						slot: le.fbanner,
						htmlinsert: ee.fbanner
					},
					"adv-pbutton": {
						slot: le.pbutton_small,
						htmlinsert: ee.pbutton
					},
					"adv-pbanner": {
						slot: le.pbutton_large,
						htmlinsert: ee.pbanner
					},
					"adv-logo": null,
					"adv-text": null
				};
			let ue = !1;

			function he({
				reason: e
			}) {
				te && ue && (te = !1, ne = !1, B({
					slots: le,
					bidhead: ie
				}, {
					reason: e
				}))
			}

			function fe() {
				ne = !1;
				for(const e of Object.values(le)) e.refresh();
				te ? he({
					reason: "configupdate"
				}) : ne && M()
			}

			function pe() {
				return {
					slots: le,
					multisizeslots: ce
				}
			}
			let ge = null;

			function me(e) {
				if("BOA" == u.b.corp) return;
				if(ge == e) return;
				ge = e, c.a("adv", "loading advurl " + ge);
				const t = function() {
					const e = "_dztiming_" + G++;
					return V.mark(e), e
				}();
				$.c(q.n(e), {
					type: "GET"
				}).then((function(n) {
					! function(e, t, n) {
						if(n.context && "string" != typeof n.context) try {
							n.context = JSON.stringify(n.context)
						} catch(e) {
							n.context = "Error in JSON.stringify(): " + e
						}
						V.log_time(e, t, n), V.report()
					}("slots-ajax", t, {
						context: {
							url: e
						}
					}), ge == e && (c.a("adv", "loaded advurl " + e), Z()(n.documentElement).find("adv").each((function(t, n) {
						const i = Z()(n),
							a = i.attr("position"),
							o = i.find("[data-leo-slot-manager]").attr("data-leo-slot-manager"),
							s = de[a];
						if(null !== s) try {
							if(!s) return void r.c(new Error("got advmedia position without config: position=" + a + " advMedia=" + e), {
								log: "slots",
								metrics: "slots-update-advmedia"
							});
							"bidhead" == o || "bidheadbanner" == o ? s.slot.setContent("bidhead", {
								reason: "configupdate"
							}) : "htmlinsert" != o && "insert" != o && o || (s.htmlinsert.data = i.serializeInnerXML(), s.slot.setContent(null, {
								reason: "configupdate"
							}), s.slot.setContent("htmlinsert", {
								reason: "configupdate"
							}))
						} catch(e) {
							r.c(e, {
								log: "slots",
								metrics: "slots-update-apply",
								message: "setting up adv slot '" + s.slot.name + "' failed"
							})
						}
					})))
				}), (function(t) {
					ge == e && r.c(t, {
						log: "slots",
						metrics: "slots-update-ajax",
						context: {
							url: e,
							status: t.xhr.status,
							error: t.error
						}
					})
				})).then(() => {
					he({
						reason: "configupdate"
					}), c.c("adv", "active config", pe())
				})
			}
			let ve = !0;
			i.a.setActive.implement((e, t, n) => {
				ve && ("banner" == e ? n && "adv-banner" != n ? "adv-wbanner" == n ? le.wbanner.setup("bidhead", !0, {
					reason: "pageload"
				}) : "adv-fbanner" == n && le.fbanner.setup("bidhead", !0, {
					reason: "pageload"
				}) : le.banner.setup("bidhead", !0, {
					reason: "pageload"
				}) : "halfpage" == e ? le.halfpage.setup("bidhead", !1, {
					reason: "pageload"
				}) : "skyscraper" == e ? le.skyscraper.setup("bidhead", !1, {
					reason: "pageload"
				}) : "native" == e ? le.native.setup("bidhead", !0, {
					reason: "pageload"
				}) : "pbutton" == e ? (le.pbutton_small.setup("bidhead", !1, {
					reason: "pageload"
				}), le.pbutton_large.setup("bidhead", !1, {
					reason: "pageload"
				}), ce.pbutton.visible = !0) : c.b("slot", "unknown slot name"))
			}), Object(s.a)("page").then(() => {
				ve = !1;
				for(const e of Object.values(le)) {
					if(e.content) continue;
					if("native" == e.name) {
						le.native.setup("bidhead", !1, {
							reason: "pageload"
						}), e.bidhead.code = e.htmlid;
						continue
					}
					const t = document.getElementById(e.htmlid);
					t && (e.htmlinsert.data = Z()(t).clone(), e.bidhead && (e.bidhead.code = e.htmlid), "pbutton_large" == e.name ? (e.setup("htmlinsert", !1, {
						reason: "pageload"
					}), ce.pbutton.visible = !0) : "pbutton_small" == e.name ? (e.setup("htmlinsert", !0, {
						reason: "pageload"
					}), ce.pbutton.visible = !0) : e.setup("htmlinsert", !0, {
						reason: "pageload"
					}))
				}
				for(const e of Object.values(ce)) e.checkSize({
					reason: "pageload"
				});
				for(const e of Object.values(le)) e.checkSize({
					reason: "pageload"
				});
				Z()(window).on("resize", () => {
					for(const e of Object.values(ce)) e.checkSize({
						reason: "resize"
					});
					for(const e of Object.values(le)) e.checkSize({
						reason: "resize"
					});
					he({
						reason: "resize"
					})
				}), S.c(() => {
					ue = !0, he({
						reason: "pageload"
					})
				}), Q.a("pagehidden", () => {
					for(const e of Object.values(le)) e.visible && e.state.done("hidden")
				}), Q.a("pagevisible", () => {
					for(const e of Object.values(le)) e.visible && e.state.notdone()
				}), c.c("adv", "active config", pe()), Y.a.on("navigated", () => fe()), Y.a.on("cookiepro:consentupdate", () => fe()), Y.a.on("slots:mediaurl:preset", e => {
					ge || (ge = e)
				}), Y.a.on("slots:mediaurl:update", e => {
					me(e)
				})
			})
		},
		381: function(e, t, n) {
			"use strict";
			var i = n(2);
			var r = class {
					constructor(e) {
						i.e(arguments, 1), this.limit = e, this.words = []
					}
					add(e) {
						var t = this.words.indexOf(e); - 1 != t && this.words.splice(t, 1), this.words.push(e), this.words.length > this.limit && this.words.shift()
					}
				},
				a = n(288),
				o = n(280),
				s = n(226),
				l = n(15),
				c = n(33),
				d = n(8),
				u = n(22),
				h = n(1),
				f = n(0),
				p = n.n(f),
				g = n(35);
			var m, v, b = class {
					constructor(e) {
						this.ui = e, this.ui_pending = !1, this.ui.finally(() => {
							this.ui_pending = !1
						}), this.renderer = o.a, this.xml = null, this.vsize = null, this.params = null, this.aiid = null;
						const t = [this.ui];
						this.renderer && t.push(this.renderer.awaitInit()), this.ready = Promise.all(t).then(([e]) => {
							if(1 == e.$cards.length) return this;
							h.f("cards", "invalid CardRenderer target node set:", e.$cards)
						}), "desktop" == l.b.size && p()(window).on("resize", e => this.resizeHandler(e)), this.metrics = new g.b("cards", {}, .01)
					}
					resizeHandler(e) {
						this.ui_pending || this.ui.then(e => {
							const t = e.targetCardSize();
							"none" != t && (t != this.vsize ? this.render(t) : e.adjustRenderedCards(this.aiid))
						})
					}
					_loadData(e) {
						if(this.renderer) {
							const t = s.h(e.langpair, e.lang, e.aiid, {
								cards: !0
							});
							return c.a(t, {
								dataType: "xml"
							}).then(e => {
								this.xml = e
							})
						}
						return Promise.resolve()
					}
					load(e) {
						e = i.c(e, {
							aiid: i.a,
							langpair: i.a,
							lang: i.a
						}), this.params = e, this.aiid != e.aiid && (this.aiid = e.aiid, this.xml = null, this._loadData(e).then(() => this.render(), e => {
							h.b("cards", "Loading cards failed", e), this.ui.then(e => {
								e.$cards.html("Unexpected error while loading additional data.")
							})
						}))
					}
					empty() {
						if(this.aiid = null, !this.emptyXml) {
							var e = p()("script[data-dz-name='top']");
							if(e.length) try {
								this.emptyXml = u.a(e.html())
							} catch(t) {
								h.b("cards", "Parsing default cards Xml failed", t), h.c("cards", "Default cards Dom node: ", e)
							} else h.f("cards", "Couldn't read default cards Xml from DOM");
							this.emptyXml || (this.emptyXml = u.a('<info lp="' + l.b.lp + '" www="' + l.b.www + '"><dummy/></info>'))
						}
						return this.xml = this.emptyXml, this.ui.then(e => {
							e.$cards.css({
								marginTop: 0
							})
						}), this.render()
					}
					_renderContent(e) {
						if(this.renderer) return this.renderer.awaitInit().then(() => this.xml ? this.renderer.render(this.xml.documentElement, {
							mode: e,
							vsize: this.vsize
						}) : null); {
							if(!this.params) return Promise.resolve(null);
							const e = s.b(this.params.langpair, this.params.lang, this.params.aiid, {
								vsize: this.vsize
							});
							return c.a(e, {
								dataType: "html"
							})
						}
					}
					render(e) {
						this.ui.then(t => {
							return e || (e = t.targetCardSize()), "none" == e ? Promise.resolve(null) : (this.vsize = e, n = this.aiid ? "card" : "landing", this._renderContent(n, e).then(e => {
								if(t.stopCardLoad(), e) {
									if(d.a.trigger("htmlRemove", t.$cards), t.$cards.empty().attr("data-dz-role", "result").appendXslt(e), d.a.trigger("htmlInserted", t.$cards), this.metrics.report(), "card" == n) {
										var i = t.$cards.find(".card"),
											r = this;
										let e = 0;
										i.each((function() {
											p()(this).data("dzCardPosLabel", e.toString()), r.metrics.log_event("shown", {
												card: p()(this).data("dzCard"),
												position: e.toString()
											}), e++
										}));
										const n = i.first();
										n.on("metrics", (e, t) => {
											this.metrics.log_event("clicked", {
												card: "entry",
												button: t.type,
												position: "0"
											})
										}), n.find("a").on("click", (function() {
											r.metrics.log_event("clicked", {
												card: "entry",
												button: "link",
												position: n.data("dzCardPosLabel")
											}), r.metrics.report()
										}));
										const a = i.filter("[data-dz-card='forum']");
										a.find("a").on("click", (function() {
											r.metrics.log_event("clicked", {
												card: "forum",
												button: "link",
												position: a.data("dzCardPosLabel")
											}), r.metrics.report()
										})), a.on("metrics", () => {
											this.metrics.log_event("clicked", {
												card: "forum",
												button: "expand",
												position: a.data("dzCardPosLabel")
											})
										});
										const o = i.filter("[data-dz-card='lesson']");
										o.find("a").on("click", (function() {
											r.metrics.log_event("clicked", {
												card: "lesson",
												button: "link",
												position: o.data("dzCardPosLabel")
											}), r.metrics.report()
										})), o.on("metrics", (e, t) => {
											switch(t.action) {
												case "expanded":
													this.metrics.log_event("clicked", {
														card: "lesson",
														button: "expand",
														position: o.data("dzCardPosLabel")
													})
											}
										});
										const s = i.filter("[data-dz-card='example']");
										s.find("samp").on("click", (function() {
											r.metrics.log_event("clicked", {
												card: "example",
												button: "link",
												position: s.data("dzCardPosLabel")
											})
										})), s.on("metrics", () => {
											this.metrics.log_event("clicked", {
												card: "example",
												button: "expand",
												position: s.data("dzCardPosLabel")
											})
										})
									}
									t.adjustRenderedCards(this.aiid)
								}
							}));
							var n
						})
					}
				},
				y = n(347),
				w = n(39),
				x = (m = 0, v = ["#99D0F1", "#7BBB77", "#EAEA2C", "#DFA620", "#D85429", "#D22924", "#87309A", "#413F9E", "#3E57AE", "#4B878C", "#418033", "#94BF23", "#61521F", "#602529", "#E18080", "#AE80C6"], function() {
					var e = v[m];
					return m = (m + 1) % v.length, e
				});
			class _ {
				constructor(e) {
					this.suborder = [], this.subvalues = {}, this.minordiff = !1, e.startsWith("prio: ") && (e = e.substr(6)), e.split(",").forEach((function(e) {
						var t = e.split("="),
							n = t[0],
							i = parseInt(t[1], 10);
						this.suborder.push(n), this.subvalues[n] = {
							name: n,
							value: i,
							color: "",
							bold: !1
						}
					}), this)
				}
				format() {
					var e = [];
					return this.suborder.forEach((function(t) {
						var n = this.subvalues[t];
						if(!(t in _.unused && 0 === n.value)) {
							var i = n.name;
							i += "=" + n.value.toString(), n.bold && (i = "<b>" + i + "</b>"), n.color && (i = '<span style="color: ' + n.color + '">' + i + "</span>"), e.push(i)
						}
					}), this), "prio: " + e.join(",")
				}
				diff(e) {
					var t = null,
						n = !0;
					this.suborder.forEach((function(i) {
						var r = e.subvalues[i],
							a = this.subvalues[i];
						r.value != a.value && (n && (a.bold = !0, t = a.name, n = !1), a.value < r.value ? a.color = "green" : a.color = "red", n = !1)
					}), this), this.minordiff = "src" == t || "α" == t
				}
			}
			_.unused = {
				usr: 1,
				usrl: 1,
				_: 1
			};
			var k = function(e) {
					let t = null;

					function n(e, t, n) {
						if(n = i.c(n, {
								colors: !0
							}), null !== t) {
							e = p()(e), t = p()(t);
							var r, a = new _(e.attr("data-dz-rel-prio")),
								o = new _(t.attr("data-dz-rel-prio"));
							if(a.diff(o), e.contents().remove(), e.append(a.format()), n.colors) r = a.minordiff ? t.closest("tr").find("td:first").css("background-color") : x(), e.closest("tr").find("td:first").css("background-color", r), e.closest("tr").prev().prev().find("td:first").css("background-color", r).css("border-bottom-color", r)
						}
					}

					function r(e, t) {
						var i;
						e.each((function() {
							if(void 0 === i) {
								var e = p()(this).closest("table").find("[data-dz-rel-prio]"),
									r = e.index(this) - 1;
								i = r >= 0 ? p()(e[r]) : this
							}
							n(this, i, t), i = this
						}))
					}

					function a(e, t) {
						e.each((function() {
							n(this, t, {
								colors: !1
							})
						}))
					}
					var o = e.find("[data-dz-rel-prio]");
					if(null == t) {
						var s = e.find("[data-dz-role='section']");
						s.length ? (s.forEach((function(e) {
							r(p()(e).find("[data-dz-rel-prio]"))
						})), r(s.find("[data-dz-rel-prio]:first"), {
							colors: !1
						})) : r(o)
					} else a(o, t);
					o.on("click", (function(e) {
						w.a(e), t = this, a(p()(this).closest("table").parent().parent().find("[data-dz-rel-prio]"), this)
					}))
				},
				S = n(289),
				C = n(382),
				A = n(227),
				T = n(379),
				E = (n(279), n(63)),
				I = n(48),
				j = n(383),
				N = n(49),
				P = n(21),
				z = (n(141), n(5)),
				L = n(34),
				D = (n(57), n(236));
			const O = new g.b("dictsearch"),
				R = new g.b("dictinfo", {}, .01);
			var B = !0,
				M = {
					general: 100,
					incomplete: 800,
					equal: 600,
					triple: 600,
					delayed: 1500
				},
				q = 1e3;
			class F {
				constructor(e, t) {
					i.e(arguments, 2), this.aborted_ = !1, this.retried_ = !1, this.manager_ = e, this.params_ = t
				}
				abort() {
					i.e(arguments, 0), this.aborted_ = !0, this.manager_ = null, this.params_ = null
				}
				run(e) {
					i.e(arguments, 1), this.url_ = e, c.a(e, {
						dataType: "xml"
					}).then(this.handleSuccess_.bind(this), this.handleFail_.bind(this))
				}
				handleSuccess_(e) {
					if(this.aborted_) h.a("dictsearch", "ignoring obsolete ajax result (success)");
					else {
						if("parsererror" == e.documentElement.nodeName) return this.manager_.handleAjaxSearchFail_(p()(e.documentElement).text(), this.params_), void(this.manager_ = null);
						if(D.a.data && l.b.lp in D.a.data) {
							var t = D.a.data[l.b.lp];
							p()(e.documentElement).find("section > entry").each((function() {
								p()(this).attr("uid") in t && p()(this).attr("saved", "true")
							}))
						}
						var n = this;
						this.manager_.renderer.awaitInit().then(this.renderResult_.bind(this, e)).catch((function(e) {
							h.f("dictsearch", "dynamic search failed", e), n.params_.forceStatic = "on", n.manager_.handleAjaxSearchFail_(e, n.params_)
						}))
					}
				}
				handleFail_(e) {
					if(this.aborted_ || z.d.is(e)) h.a("dictsearch", "ignoring obsolete ajax result (error)");
					else {
						if(B && !this.retried_) return h.a("dictsearch", "first-chance ajax error, retrying"), O.log_event("ajax-retry"), this.retried_ = !0, void this.run(this.url_ + "&retry=1");
						this.manager_.handleAjaxSearchFail_(e, this.params_), this.manager_ = null
					}
				}
				renderResult_(e) {
					this.aborted_ ? h.a("dictsearch", "ignoring obsolete ajax result (render)") : (this.manager_.handleAjaxSearchSuccess_(e, this.params_), this.manager_ = null)
				}
			}
			var U = class {
					constructor(e) {
						e = i.c(e, {
							ui: i.a
						}), this.ui = e.ui, this.renderer = a.a, this.history = new r(30), "mobile" == l.b.size && n.e(82).then(n.bind(null, 420)).then(e => {
							this.cache = new e.SearchCache
						}), this.infocards = new b(this.ui), this.ui.then(e => {
							1 == e.$results.length || h.f("dictsearch", "invalid SearchManager target node set:", e.$results)
						}), this.pendingQuery_ = null, this.result = null, this.requestNum = 0, this.searchNum = 0, this.filteredNum = 0, this.lastSearchUrl = "", this.lastSearchTime = 0, this.lastSearchDelayed = !1, this.lastSearchEqual = !1, this.lastSearchComplete = !0, this.delayTrigger = "", this.delayPending_ = !1, this.delayedParams_ = null, this.historyWatcher = {
							_specs: [],
							_watcher: null,
							set(e) {
								this._watcher = e;
								for(const t of this._specs) e.register(t)
							},
							register(e) {
								this._specs.push(e), this._watcher && this._watcher.register(e)
							}
						}
					}
					triggerPageloadSearch_(e) {
						i.e(arguments, 1), Object(j.a)("SearchManager.triggerPageloadSearch_()"), O.log_event("fallback-pageload"), l.b.debug ? I.b("Error in dynamic seach. Not falling back to static page in debug mode.") : "firefox" != l.b.app ? (h.c("navigation", "triggering pageload", e), N.b()) : I.b("Leider kann nicht gesucht werden.")
					}
					startDynamicQuery(e) {
						return i.e(arguments, 1), O.mark("trigger-search"), this.searchNoty && (this.searchNoty.close(), this.searchNoty = null), this.ui.then(t => {
							t.startResultLoad(e)
						}), window.scrollTo(0, 0), T.a.native.setVisible(!0, {
							reason: "dynamic-search"
						}), Promise.resolve().then(() => this.execDynamicQuery_(e))
					}
					processXml(e, t, n) {
						n = i.c(n, {
							prerendered: !1
						}), this.result = new S.a(this, e, t), this.updateInfoCards(e);
						var r = e.getElementsByTagName("advMedia")[0].getAttribute("url");
						if(r ? n.prerendered ? d.a.trigger("slots:mediaurl:preset", r) : d.a.trigger("slots:mediaurl:update", r) : h.f("dictsearch", "missing advMedia url in search result"), !n.prerendered) {
							var a = e.getElementsByTagName("servicedata")[0];
							"BOA" != l.b.corp && A.g(a)
						}
					}
					processRendered(e, t, n) {
						this.result.attach(e), this.ui.then(e => {
							e.stopResultLoad()
						});
						var i = p()(t).find("xml>search").attr("canonicalSearch");
						i && "" !== i && (p()("link[rel='alternate']").each((function() {
							if(p()(this).attr("hreflang")) {
								const e = p()(this).attr("hreflang"),
									t = s.d({
										langpair: n.langpair
									}, {
										lang: e
									});
								p()(this).attr("href", "https://dict.leo.org" + t.pathname + i)
							}
						})), p()("link[rel='canonical']").each((function() {
							const e = s.d({
								langpair: n.langpair
							}, {
								lang: n.lang
							});
							p()(this).attr("href", "https://dict.leo.org" + e.pathname + i)
						})));
						var r = "",
							a = p()(t).find("xml>sectionlist>section");
						for(let e = 0; e < a.length; e++) r += a[e].getAttribute("sctTitle") + ": ", r += p()(a[e]).xpath("entry[1]/side[1]/words[1]/word[1]").text() + " - ", r += p()(a[e]).xpath("entry[1]/side[2]/words[1]/word[1]").text(), e < a.length - 1 && (r += " | ");
						"" != r && p()("meta[name='keywords']").attr("content", r), l.b.gentesting && C.a.then(e => e.showControls()), O.mark("relink-start"), this.relinkResults(e, n), O.log_time("relink", "relink-start"), R.report(), R.log_event("show"), e.on("metrics", (e, t) => {
							R.log_event("clicked", {
								button: t.type
							})
						})
					}
					adaptSearchOptions(e) {
						this.ui.then(t => {
							t.setParams(e, {
								expected: ""
							}), t.startSearchInput({
								expected: e.search
							})
						})
					}
					adaptPreRendered(e) {
						l.b.debug && (this.searchNoty = Object(L.a)({
							type: "warning",
							layout: "bottomRight",
							text: "<b>Debuginfo:</b><br>Statisches Suchergebnis"
						})), this.adaptSearchOptions(e);
						let t = "";
						if(p()("[data-dz-name='searchresult']").contents().forEach(e => {
								t += e.nodeValue
							}), !t) return void h.b("dictsearch", "No result Xml for prerendered content found");
						const n = u.a(t);
						this.processXml(n, e, {
							prerendered: !0
						}), this.ui.then(t => {
							this.processRendered(t.$results, n, e)
						})
					}
					execDynamicQuery_(e) {
						i.e(arguments, 1), this.pendingQuery_ && (this.pendingQuery_.abort(), this.pendingQuery_ = null), this.attemptNum++;
						var t = null;
						this.cache && (t = this.cache.get(s.c(e), !0)), t ? (O.log_event("cached-result"), this.ui.then(e => {
							e.stopResultLoad()
						}), this.showResults_(t, e)) : this.startAjaxSearch_(e)
					}
					startAjaxSearch_(e) {
						i.e(arguments, 1), O.log_event("ajax-start");
						var t = (new Date).getTime(),
							n = t - this.lastSearchTime,
							r = s.e(e),
							a = r == this.lastSearchUrl,
							o = !1;
						n < M.general ? (o = !0, this.delayTrigger || (this.delayTrigger = "general")) : !this.lastSearchComplete && n < M.incomplete ? (o = !0, this.delayTrigger || (this.delayTrigger = "incomplete")) : this.lastSearchDelayed && n < M.delayed ? (o = !0, this.delayTrigger || (this.delayTrigger = "delayed")) : a && this.lastSearchEqual && n < M.triple && (o = !0, this.delayTrigger || (this.delayTrigger = "triple")), this.lastSearchUrl = r, this.lastSearchTime = t, this.lastSearchEqual = a && n < M.equal, this.lastSearchDelayed = o, this.lastSearchComplete = !1, o ? (h.a("dictsearch", "delaying search", new Date), this.runDelayedAjaxSearch_(e)) : this.runAjaxSearch_(e)
					}
					runDelayedAjaxSearch_(e) {
						this.delayedParams_ = e, this.delayPending_ || (this.delayPending_ = !0, this.loadingAnimation(), this.checkDelayedAjaxSearch_())
					}
					checkDelayedAjaxSearch_() {
						var e = (new Date).getTime() - this.lastSearchTime;
						return e >= q ? (this.delayPending_ = !1, h.a("dictsearch", "searching now", new Date), this.runAjaxSearch_(this.delayedParams_), Promise.resolve()) : (h.a("dictsearch", "waiting for " + (q - e) + "ms", new Date), P.a(q - e).then(this.checkDelayedAjaxSearch_.bind(this)))
					}
					runAjaxSearch_(e) {
						p.a.ui.dialog && p()("body > .ui-dialog > .ui-dialog-content").filter(":data('ui-dialog')").dialog("close"), p()(".vrweb_hover_player").length && (p()(".vrweb_hover_player").hide(), p()(".vrweb_settings_wrapper").hide()), this.pendingQuery_ = new F(this, e);
						var t = s.e(e);
						t += "&sectLenMax=16", t += "&n=" + ++this.requestNum;
						var n = this.searchNum - this.requestNum - this.filteredNum;
						n && (t += "&filtered=" + n + "&trigger=" + this.delayTrigger, this.filteredNum += n, this.delayTrigger = null), this.pendingQuery_.run(t), this.loadingAnimation()
					}
					loadingAnimation() {
						this.ui.then(e => {
							e.startResultLoad(), e.startCardLoad()
						})
					}
					handleAjaxSearchFail_(e, t) {
						if(this.pendingQuery_ = null, this.lastSearchComplete = !0, O.log_event("ajax-failed", O.errorTags(e, {
								context: c.e(e, {
									url: this._url
								})
							})), O.report(1), E.f) {
							var n = !1;
							if(c.g.is(e)) {
								var i = e.xhr.responseXML;
								i && "xml" == i.documentElement.nodeName && (this.renderer.awaitInit().then(() => {
									var e = this.renderer.render(i.documentElement);
									this.ui.then(t => {
										var i = t.$results;
										d.a.trigger("htmlRemove", i), i.empty().appendXslt(e), d.a.trigger("htmlInserted", i), n = !0, t.stopResultLoad(), t.stopCardLoad()
									})
								}).catch(e => {
									h.b("dictsearch", "Rendering error message failed", e), O.log_event("failed-errorrender", O.errorTags(e, {
										context: t
									})), O.report(1), this.triggerPageloadSearch_(t)
								}), n = !0)
							}
							n || this.triggerPageloadSearch_(t)
						} else this.triggerPageloadSearch_(t)
					}
					handleAjaxSearchSuccess_(e, t) {
						O.log_time("ajax", "ajax-start"), this.pendingQuery_ = null, this.history.add(t.search), this.cache && this.cache.push(s.c(t), e), this.ui.then(e => {
							e.stopResultLoad()
						}), this.showResults_(e, t), this.lastSearchComplete = !0, O.log_time("complete", "trigger-search"), O.report()
					}
					updateInfoCards(e) {
						if(e) {
							const t = p()(e).xpath("//section[1]/entry[1]");
							0 != t.length ? (this.infocards.aiid = "", this.infocards.load({
								aiid: t.attr("aiid"),
								lang: l.b.lang,
								langpair: l.b.lp
							})) : this.infocards.empty()
						} else this.infocards.empty()
					}
					showResults_(e, t) {
						var n;
						this.processXml(e, t), O.mark("render-start");
						try {
							n = this.renderer.render(e.documentElement, {
								includeIds: "true()"
							})
						} catch(e) {
							return O.log_event("failed-render", O.errorTags(e, {
								context: t
							})), O.report(1), h.b("dictsearch", "Rendering search results failed", e), void this.triggerPageloadSearch_(t)
						}
						O.log_time("render", "render-start"), this.ui.then(i => {
							var r = i.$results;
							try {
								d.a.trigger("htmlRemove", r), r.empty().appendXslt(n), d.a.trigger("htmlInserted", r)
							} catch(e) {
								return O.log_event("failed-insert", O.errorTags(e, {
									context: t
								})), O.report(1), h.b("dictsearch", "Inserting search results failed", e), void this.triggerPageloadSearch_(t)
							}
							O.log_time("insert", "render"), this.processRendered(r, e, t)
						})
					}
					relinkResults(e, t) {
						i.e(arguments, 2);
						const n = {
							buildhref: y.a(t, {
								relative: !0
							}),
							startsearch: null
						};
						n.startsearch = e => {
							this.ui.then(t => {
								t.search(e, {
									side: "both"
								})
							})
						}, y.c(e, n), t.custom && "on" == t.custom.insertPrio && k(e), t.custom && "on" == t.custom.insertAudio && C.a.then(t => t.markupAudio(e))
					}
				},
				H = n(231);
			const W = {
					search: "",
					searchLoc: "0",
					resultOrder: "basic",
					multiwordShowSingle: "on"
				},
				X = {
					forceStatic: null,
					translate: null,
					pos: 0
				},
				$ = {
					k_info: !0,
					k_flection: !0,
					k_character: !0
				};
			var V;
			for(V in W) $["k_" + V] = !0;
			for(V in X) $["k_" + V] = !0;
			class G {
				constructor() {
					var e;
					for(e in W) this[e] = W[e];
					for(e in X) this[e] = X[e]
				}
				known(e) {
					return "k_" + e in $
				}
			}

			function Q(e) {
				if(e && "#" == e.charAt(0) && (e = e.substr(1)), e && "/" == e.charAt(0)) {
					h.a("navigation", "hashquery", "found possible legacy hash query", document.location.hash);
					const t = function(e) {
						i.e(arguments, 1), e = e.replace(/\+/g, "%20");
						var t = new G;
						return e && e.split("&").forEach((function(e) {
							var n, i = e.split("="),
								r = decodeURIComponent(i[0]);
							n = void 0 !== i[1] ? decodeURIComponent(i[1]) : "", /^(lion|insert|debug|sect|hit)/.test(r) && (X[r] = null, $["k_" + r] = !0), t.known(r) ? t[r] && t[r].push ? t[r].push(n) : t[r] = n : h.a("dictsearch", "unknown query parameter: " + r)
						}), this), t
					}(e.substr(1));
					if(t.search) {
						h.a("navigation", "hashquery", "found legacy hash query"), h.c("navigation", "hashquery", "trigger new search from legacy hash query");
						const e = H.a(H.b);
						return e.langpair = l.b.lp, e.lang = l.b.lang, e.search = t.search, e
					}
				}
				return null
			}
			var K = n(254),
				Y = n(235),
				J = n(244);
			n(59).a.register({
				"dictsearch:link": {
					attach(e) {
						e.on("click.dictsearch", t => {
							const n = e.attr("data-dz-searchterm");
							J.b.then(e => {
								e.search(n)
							}), w.a(t)
						}), e.prop("nodeName")
					}, detach(e) {
						e.off(".dictsearch")
					}
				}
			});
			var Z = n(24),
				ee = n(76),
				te = n(58),
				ne = n(37),
				ie = n(100),
				re = n(102),
				ae = n(19),
				oe = n(14),
				se = n(352),
				le = n(353);
			"mobile" == l.b.size ? Object(J.c)(le.a) : Object(J.c)(se.a), n.d(t, "b", (function() {
				return he
			}));
			const ce = new oe.a,
				de = (() => {
					try {
						return new U({
							ui: ce.promise
						})
					} catch(e) {
						return ae.a.unavailable.is(e) ? h.c("dictsearch", "Cannot create search manager:", e.message) : h.b("dictsearch", "Cannot create search manager", e), null
					}
				})();

			function ue() {
				Z.b("dom").then(() => {
					const e = p()("#adv-banner, #adv-pbanner, #adv-fbanner, #adv-wbanner #adv-skyscraper, #adv-halfpage").filter("[data-advMedia]");
					if(e.length) {
						const t = e.attr("data-advMedia");
						t && d.a.trigger("slots:mediaurl:preset", t)
					}
				})
			}

			function he(e) {
				const t = e.diff;
				h.c("navigation", "newlocation", "change handler triggered", e.target);
				const i = s.m(e.target.location()),
					r = s.m(e.source.location());
				if(i) {
					if(!de.renderer || !E.e()) throw ee.d.exception("No async update available");
					if(i.langpair !== l.b.lp || i.lang !== l.b.lang) throw ee.d.exception("Different langpair/lang");
					if(t.pagechange = !1, r && s.c(r) == s.c(i)) h.c("navigation", "newlocation", "we alreay seem to be in the correct location, so we don't do anything.");
					else if(i.search) h.c("navigation", "newlocation", "requested parameters are different from current state, so trigger a new search.", i), de.startDynamicQuery(i).catch(e => {
						h.b("navigation", "Failed to start the dynamic search request", e), de.triggerPageloadSearch_(i)
					});
					else {
						h.c("navigation", "newlocation", "back to startpage"), de.ui.then(e => e.setParams(i)), de.infocards.empty(), n.e(68).then(n.bind(null, 419)).then(e => e.show()).catch(e => {
							h.b("navigation", "Failed to show start page", e), N.a(Object(te.createPath)(t.location.n))
						})
					}
				} else;
			}

			function fe(e) {
				ee.i.register({
					match: e + "/:searchword?side=both&order=basic&partial=show",
					enter(e) {},
					leave(e) {
						"mobile" == l.b.size && p()("#searchForm").getParentUi("dictsearch").mobileui.inpage()
					},
					activate(e) {
						he(e), "mobile" == l.b.size && p()("#searchForm").getParentUi("dictsearch").mobileui.inpage()
					},
					existing(e) {
						! function(e) {
							const t = Q(e.target.location().hash);
							if(t && t.search) return J.b.then(e => {
								e.stopSearchInput(), e.setParams(t, {
									expected: ""
								})
							}), void ee.g(s.d(t));
							const n = s.m(e.target.location());
							if(n)
								if(n.search) {
									if(!l.b.staticsearch) {
										const t = s.d(H.a({
												langpair: l.b.lp
											})),
											n = new re.c(t, e.target.location());
										return he(n), void(n.pagechange && h.f("navigation", "We might be on the wrong page because we don't have a static search backend"))
									}
									Z.b("dom", (function() {
										de.adaptPreRendered(n), de.history.add(n.search)
									}))
								} else de.adaptSearchOptions(n), ue();
							else l.b.api || h.f("navigation", "Unrecognized search url: ", e.target), Z.b("dom", (function() {
								h.a("navigation", "domready", "checking initial navigation state");
								const e = ee.c.location;
								let t = null;
								const n = p()("[data-dz-search='result']");
								if(n.length) {
									h.a("navigation", "domready", e.pathname, "found static search result"), t = {
										langpair: l.b.lp,
										lang: l.b.lang,
										search: n.attr("data-leo-search-term"),
										side: n.attr("data-leo-search-side")
									};
									const i = Object(ne.a)(e);
									s.l(t, i)
								} else t = null;
								t ? (de.adaptPreRendered(t), de.history.add(t.search)) : de.updateInfoCards(null)
							}))
						}(e)
					},
					subregister(e) {
						de && de.historyWatcher.set(e)
					}
				}), ee.i.register({
					match: e + "/?side=both&order=basic&partial=show",
					existing() {
						ue()
					},
					leave(e) {
						"mobile" == l.b.size && p()("#searchForm").getParentUi("dictsearch").mobileui.inpage()
					},
					activate(e) {
						"mobile" == l.b.size && p()("#searchForm").getParentUi("dictsearch").mobileui.inpage()
					}
				})
			}
			if(de) {
				const e = ie.b(ee.c.location.pathname);
				let t;
				if(e.length >= 3 && "api" == e[0] && l.b.extend({
						api: e[1] + "/" + e[2]
					}), l.b.api && "results" == e[3]) t = {
					langpair: e[4],
					search: e[5],
					lang: e[6]
				}, de.adaptPreRendered(H.a(t));
				else {
					if(Y.a[e[0]]) {
						const t = ie.c([e[0]]);
						fe(t);
						const n = ee.c.location.pathname.indexOf("/", 1);
						if(-1 != n) {
							const e = ee.c.location.pathname.substring(0, n);
							e != t && (h.f("history", "watcher", "url path is not in canonical encoding"), fe(e))
						}
					}
				}
				K.c(de), K.b(de.infocards)
			}
			J.b.then(e => ce.resolve(e));
			t.a = de
		},
		382: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			const i = new(n(14).a),
				r = i.promise;

			function a() {
				const e = n.e(60).then(n.bind(null, 401));
				return i.resolve(e), e
			}
			t.a = r
		},
		383: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			let i = function() {};
			t.a = function(...e) {
				i(...e)
			};
			let r = !1;

			function a(e) {
				r = !0, i = e.errorpoint
			}
		},
		387: function(e, t, n) {
			var i = n(388);
			e.exports = function(e, t) {
				t || (t = {}), "[object Function]" === {}.toString.call(t) && (t = {
					complete: t
				});
				var n, r = document,
					a = r.styleSheets,
					o = "[object Array]" === {}.toString.call(e) ? e : [e],
					s = t.media ? t.media : "all",
					l = t.complete || function() {},
					c = [];
				if(t.before) n = t.before;
				else {
					var d = (r.body || r.getElementsByTagName("head")[0]).childNodes;
					n = d[d.length - 1]
				}

				function u() {
					for(var e = 0, t = -1, n = c.length; ++t < n;)
						if(h(c[t].href) && ++e === n) return l(c);
					i(u)
				}

				function h(e) {
					for(var t = -1, n = a.length; ++t < n;)
						if(null !== a[t].href && 0 !== a[t].href.length && a[t].href === e) return !0
				}
				return function e(t) {
					if(r.body) return t();
					i((function() {
						e(t)
					}))
				}((function() {
					for(var e = -1, a = o.length, l = t.before ? n : n.nextSibling; ++e < a;) c[e] = r.createElement("link"), c[e].rel = "stylesheet", c[e].href = o[e], c[e].media = s, n.parentNode.insertBefore(c[e], l);
					i(u)
				})), c
			}
		},
		388: function(e, t) {
			e.exports = function(e) {
				n.push(e), 0 === i && (i = setTimeout(r, 0))
			};
			var n = [],
				i = 0,
				r = function() {
					var e = -1,
						t = n.length,
						r = n;
					for(n = [], i = 0; ++e < t;) r[e]()
				}
		},
		39: function(e, t, n) {
			"use strict";

			function i(e) {
				return(e = e || window.event).stopImmediatePropagation && e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1, !1
			}

			function r(e) {
				return 1 != e.which && 0 != e.which || !!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
			}
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			})), window.cancelEvent = i
		},
		41: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "polyfillXslt", (function() {
				return u
			})), n.d(t, "Native", (function() {
				return h
			})), n.d(t, "check", (function() {
				return f
			}));
			var i = n(0),
				r = n.n(i),
				a = n(16),
				o = n(26),
				s = n(22),
				l = n(2),
				c = n(1),
				d = n(3);

			function u(e) {
				for(var t = e.getElementsByTagName("dz-data"); t.length;) {
					for(var n = t.item(0), i = n.parentNode, r = n.attributes, a = r.length - 1; a >= 0; a--) i.setAttribute(r[a].name, r[a].value);
					i.removeChild(n)
				}
			}
			class h extends o.a {
				constructor() {
					l.e(arguments, 0), super(), this.processor = null, this._srcurl = null, this._params = {}
				}
				initXml(e, t) {
					t = l.c(t, {
						srcurl: null
					}), this.processor = new window.XSLTProcessor, e.getElementsByTagNameNS("http://www.w3.org/1999/XSL/Transform", "output")[0].setAttribute("method", "html");
					var n = e.getElementsByTagNameNS("urn:schemas-microsoft-com:xslt", "script")[0];
					n && n.parentNode.removeChild(n), this.processor.importStylesheet(e), this._srcurl = t.srcurl, this.ready = !0
				}
				setParameter(e, t) {
					l.e(arguments, 2);
					try {
						this.processor.setParameter(null, e, t)
					} catch(e) {
						throw new Error(e.toString())
					}
					this._params[e] = t
				}
				transformToDocument(e, t) {
					t = l.b(t, document), e.setAttribute("leorendertarget", "1");
					try {
						var n, i;
						if(d.a.debug_xslt && r()(e.ownerDocument.documentElement).reflexive("find", "[leorendertarget]").single((function() {
								return {
									msg: "leorendertarget in Xml input",
									context: [e.ownerDocument.documentElement]
								}
							})), d.a.profile) {
							const t = new window.URLSearchParams([
								["xsl", this._srcurl],
								["params", window.JSON.stringify(this._params)],
								["xml", s.b(e.ownerDocument.documentElement)]
							]);
							window.fetch("/admin/profile-xsl.php", {
								method: "POST",
								body: t
							})
						}
						try {
							i = this.processor.transformToFragment(e.ownerDocument.documentElement, t)
						} catch(e) {
							throw new Error(e)
						}
						return i || o.b.raise("No XSLT transformation result"), n = i, a.d && u(n.firstChild), n
					} finally {
						e.removeAttribute("leorendertarget")
					}
				}
			}

			function f() {
				function e(e) {
					c.a("xslt", "native", "failure", e)
				}
				return a.k && !a.l ? (e("Browser is old opera and not supported"), null) : void 0 === window.XSLTProcessor ? (e("No window.XSLTProcessor"), null) : (t = "Implementation available", c.a("xslt", "native", "success", t), h);
				var t
			}
		},
		42: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var i = n(4);
			const r = Object(i.b)()
		},
		43: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			}));
			const i = 1,
				r = 2,
				a = 3
		},
		49: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var i = n(2),
				r = n(0),
				a = n.n(r);

			function o(e, t) {
				if("object" == typeof e && (t = e, e = i.h(t, {
						url: i.a
					}).url), "GET" == (t = i.c(t, {
						type: "GET",
						data: null
					})).type.toUpperCase()) t.data ? document.location = e + "?" + a.a.param(t.data) : document.location = e;
				else {
					if("POST" != t.type.toUpperCase()) throw new Error("unsupported request type: " + t.type);
					var n, r = a()("<form>", {
						action: e,
						method: "POST"
					});
					for(n in t.data) a()("<input>", {
						type: "hidden",
						name: n,
						value: t.data[n]
					}).appendTo(r);
					r.appendTo(document.body).submit()
				}
			}

			function s(e) {
				e = i.c(e, {
					force: !1
				}), window.location.reload(e.force)
			}
		},
		5: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "k", (function() {
				return x
			}));
			var i = n(12);
			class r extends Error {
				constructor(e, t) {
					!(t = Object.assign({
						label: null,
						inner: null,
						errval: null
					}, t)).label && t.errval && (t.label = t.errval.message), t.label && e ? e = t.label + ": " + e : e || (e = t.label), super(e), this.inner = t.inner, this.kind = t.errval
				}
			}
			class a {
				constructor(e, t) {
					void 0 === t && "string" != typeof e && (t = e, e = ""), this.message = e, this.base = t;
					const n = this.base ? this.base.ExceptionType : r,
						i = this;
					this.ExceptionType = class extends n {
						constructor(e, t) {
							super(e, t = Object.assign({
								errval: i
							}, t))
						}
					}
				}
				specialValue(e) {
					return new a(e, this)
				}
				exception(e, t) {
					var n;
					void 0 === t && "string" != typeof e && (t = e, e = ""), n = this.message && e ? this.message + ": " + e : this.message ? this.message : e || "";
					var i = new this.ExceptionType(n);
					return i.kind = this, t && (i.inner = t), i
				}
				raise(e, t) {
					throw this.exception(e, t)
				}
				rejection(e, t) {
					return new Promise(() => this.raise(e, t))
				}
				reject(e, t) {
					return this.rejection(e, t)
				}
				is(e) {
					return !!(e && e.kind && this.isErrorValue(e.kind) || e instanceof this.ExceptionType)
				}
				isErrorValue(e) {
					return e === this || e.base && this.isErrorValue(e.base)
				}
			}
			const o = new a("Promise canceled"),
				s = new a("Action aborted", o),
				l = s.specialValue("Action aborted on purpose"),
				c = l.specialValue("Obsolete action aborted"),
				d = l.specialValue("Action aborted by user"),
				u = new a("Error already reported", o),
				h = new a("Unrecoverable error in program logic"),
				f = new a("Incorrect program logic", h),
				p = new a("Functionality not implemented", f),
				g = new a("Invalid Arguments", f),
				m = new a("Unexpected exception", f),
				v = new a("Invalid exception map", g),
				b = (o.ExceptionType, s.ExceptionType, l.ExceptionType),
				y = (c.ExceptionType, d.ExceptionType, u.ExceptionType, h.ExceptionType, f.ExceptionType, p.ExceptionType);
			g.ExceptionType, m.ExceptionType, v.ExceptionType;

			function w(e) {
				return function(t) {
					x(t, e)
				}
			}

			function x(e, t) {
				! function(e) {
					e.forEach((function(e) {
						!("match" in e) || e.match && e.match.is || v.raise("invalid value for 'match': " + e.match), !("wrap" in e) || e.wrap && e.wrap.is || v.raise("invalid value for 'wrap': " + e.match)
					}))
				}(t);
				var n = function(e, t) {
					var n;
					return t.some((function(t) {
						if(t.match)
							if(t.match instanceof Array) {
								if(!t.match.some((function(t) {
										return t.is(e)
									}))) return !1
							} else if(!t.match.is(e)) return !1;
						if(t.notify && t.notify(e), t.ignore) n = {
							value: null
						};
						else if(t.wrap) n = {
							error: t.wrap.exception(e)
						};
						else if(t.handle) try {
							n = {
								value: t.handle(e)
							}
						} catch(t) {
							t.handling = e, n = {
								error: t
							}
						} else n = {
							error: e
						};
						return !0
					}), this), n || (m.is(e) ? n = {
						error: e
					} : (Object(i.a)(e), n = {
						error: m.exception(e)
					})), n
				}(e, t);
				if(n.error) throw n.error;
				return n.value
			}
			t.j = a
		},
		51: function(e, t, n) {
			"use strict";
			var i = n(8),
				r = n(16);
			let a = !1;

			function o() {
				a && (a = !1, i.a.trigger("pagehidden"), i.a.trigger("pagehidden:after"))
			}

			function s() {
				a || (a = !0, i.a.trigger("pagevisible"))
			}
			window.addEventListener("visibilitychange", (function() {
				"hidden" == document.visibilityState ? o() : "visible" == document.visibilityState && s()
			}), !0), window.addEventListener("pageshow", s, !0), window.addEventListener("pagehide", o, !0), r.m && window.addEventListener("beforeunload", o, !0), s()
		},
		54: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return p
			}));
			var i = n(43),
				r = n(0),
				a = n.n(r),
				o = n(12),
				s = n(1),
				l = n(36);
			n(70);

			function c(e) {
				if(e.jquery) {
					if(1 != e.length) throw new Error("Require single node");
					return e[0]
				}
				return e
			}

			function d(e, t, n) {
				let i = e.getAttribute(t);
				i = function(e, t) {
					if(!e) return t;
					const n = e.split(" ");
					return -1 != n.indexOf(t) ? e : (n.push(t), n.join(" "))
				}(i, n), e.setAttribute(t, i)
			}

			function u(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function h(e, t, n) {
				const i = (e = c(e)).getAttribute(t + "-options");
				if(!i) return {};
				let r;
				try {
					r = JSON.parse(i)
				} catch(e) {
					return s.f("dombind", "invalid value for " + t + "-options", e), {}
				}
				return r && u(r, n) ? r[n] : {}
			}
			const f = !1;
			class p {
				constructor(e) {
					this.attribute = e, this._registered = {}, this._attached = {}, this._$managed = a()(), this._obs = null, f && (this._obs = new window.MutationObserver(e => {
						e.forEach(e => {
							"childList" == e.type && ([].forEach.call(e.addedNodes, e => {
								e.nodeType == i.b && this.attach(e)
							}), [].forEach.call(e.removedNodes, e => {
								e.nodeType == i.b && this.detach(e)
							}))
						})
					})), this._nodefilter = {
						acceptNode: t => t.hasAttribute(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
					}
				}
				_treewalker(e) {
					let t;
					return 9 == e.nodeType ? e = (t = e).documentElement : t = e.ownerDocument, t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, this._nodefilter)
				}
				_walktoplevel(e, t) {
					if(e.jquery) return void e.each((e, n) => this._walktoplevel(n, t));
					const n = this._treewalker(e),
						i = () => {
							if(n.firstChild()) {
								do {
									t(n.currentNode, i)
								} while (n.nextSibling());
								n.parentNode()
							}
						};
					i()
				}
				_twalk_postorder(e, t) {
					this._walktoplevel(e, (e, n) => {
						n(), t(e)
					})
				}
				_twalk_preorder(e, t) {
					this._walktoplevel(e, (e, n) => {
						t(e), n()
					})
				}
				_walk_postorder(e, t) {
					const n = a()(e).findSelf("[" + this.attribute + "]");
					for(let e = n.length - 1; e >= 0; --e) t(n[e])
				}
				_walk_preorder(e, t) {
					const n = a()(e).findSelf("[" + this.attribute + "]");
					for(let e = 0, i = n.length; e < i; ++e) t(n[e])
				}
				attach_object(e, t, n) {}
				_attachrun(e, t, n, i) {
					const r = h(t, this.attribute, n);
					return i = Object.assign({}, r, i), e(a()(t), i)
				}
				_attachnow(e, t) {
					const n = l.a("dombind attachnow " + this.attribute);
					this._walk_postorder(e, e => {
						const n = e.getAttribute(this.attribute).split(" ");
						for(const i of n)
							if("." != i.charAt(0) && u(t, i)) {
								const n = t[i];
								if(n.attach) {
									let t;
									try {
										t = this._attachrun(n.attach, e, i)
									} catch(e) {
										Object(o.a)(e);
										continue
									}
									t && (this._attached[i].set(e, t), this.attach_object(i, e, t))
								}
							}
					}), n.done()
				}
				detach_object(e, t, n) {}
				_detachnow(e, t) {
					const n = l.a("dombind detachnow " + this.attribute);
					this._walk_preorder(e, e => {
						const n = e.getAttribute(this.attribute).split(" ");
						for(const i of n)
							if("." != i.charAt(0) && u(t, i)) {
								const n = t[i],
									r = this._attached[i].get(e);
								if(r && r.detach) try {
									r.detach(a()(e))
								} catch(e) {
									Object(o.a)(e)
								}
								if(n.detach) try {
									n.detach(a()(e))
								} catch(e) {
									Object(o.a)(e)
								}
								r && (this.detach_object(i, e, r), this._attached[i].delete(e))
							}
					}), n.done()
				}
				register(e) {
					for(const [t, n] of Object.entries(e)) u(this._registered, t) && s.b("duplicate dombind registration: " + t), this._attached[t] = new WeakMap, this._registered[t] = n;
					this._attachnow(this._$managed, e)
				}
				unregister(e) {
					this._detachnow(this._$managed, e);
					for(const t of Object.values(e)) u(this._registered, t) ? s.b("unregister for unknwon dombind registration: " + t) : (delete this._registered[t], delete this._attached[t])
				}
				attach(e) {
					this._attachnow(a()(e), this._registered)
				}
				detach(e) {
					this._detachnow(a()(e), this._registered)
				}
				manage(e) {
					this._$managed = this._$managed.add(e), this.attach(e), this._obs && a()(e).forEach(e => {
						this._obs.observe(e, {
							childList: !0,
							subtree: !0
						})
					})
				}
				findMissing(e) {
					const t = this.attribute;
					this._walk(this._$managed, n => {
						const i = n.dataDzUiApplied || [];
						n.getAttribute(t).split(" ").forEach(t => {
							t && -1 == i.indexOf(t) && e(t, a()(n))
						})
					})
				}
				access(e, t) {
					if(e = c(e), u(this._attached, t)) return this._attached[t].get(e)
				}
				create(e, t, n) {
					if(e.jquery && (e = c(e)), !Object.prototype.hasOwnProperty.call(this._registered, t)) throw new Error("no binding registered for " + this.attribute + "=" + t);
					const i = this._registered[t];
					if(!i.attach) throw new Error("no attach action registered for " + this.attribute + "=" + t);
					d(e, this.attribute, t);
					const r = this._attachrun(i.attach, e, t, n);
					r && (this._attached[t].set(e, r), this.attach_object(t, e, r))
				}
			}
		},
		55: function(e, t, n) {
			var i;
			/*!
			 * jQuery JavaScript Library v3.5.1
			 * https://jquery.com/
			 *
			 * Includes Sizzle.js
			 * https://sizzlejs.com/
			 *
			 * Copyright JS Foundation and other contributors
			 * Released under the MIT license
			 * https://jquery.org/license
			 *
			 * Date: 2020-05-04T22:49Z
			 */
			! function(t, n) {
				"use strict";
				"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
					if(!e.document) throw new Error("jQuery requires a window with a document");
					return n(e)
				} : n(t)
			}("undefined" != typeof window ? window : this, (function(n, r) {
				"use strict";
				var a = "undefined";

				function o(e, t) {
					if("string" == typeof e.textContent) e.textContent = t;
					else {
						if("string" != typeof e.text) throw new Error("Don't know how to set text content");
						for(; e.firstChild;) e.removeChild(e.firstChild);
						e.text = t
					}
				}
				var s = [],
					l = Object.getPrototypeOf,
					c = s.slice,
					d = s.flat ? function(e) {
						return s.flat.call(e)
					} : function(e) {
						return s.concat.apply([], e)
					},
					u = s.push,
					h = s.indexOf,
					f = {},
					p = f.toString,
					g = f.hasOwnProperty,
					m = g.toString,
					v = m.call(Object),
					b = {},
					y = function(e) {
						return "function" == typeof e && "number" != typeof e.nodeType
					},
					w = function(e) {
						return null != e && e === e.window
					},
					x = n.document,
					_ = {
						type: !0,
						src: !0,
						nonce: !0,
						noModule: !0
					};

				function k(e, t, n) {
					var i, r, a = (n = n || x).createElement("script");
					if(a.text = e, t)
						for(i in _)(r = t[i] || t.getAttribute && t.getAttribute(i)) && a.setAttribute(i, r);
					n.head.appendChild(a).parentNode.removeChild(a)
				}

				function S(e) {
					return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
				}
				var C = function(e, t) {
					return new C.fn.init(e, t)
				};

				function A(e) {
					var t = !!e && "length" in e && e.length,
						n = S(e);
					return !y(e) && !w(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
				}
				C.fn = C.prototype = {
					jquery: "3.5.1",
					constructor: C,
					length: 0,
					toArray: function() {
						return c.call(this)
					},
					get: function(e) {
						return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
					},
					pushStack: function(e) {
						var t = C.merge(this.constructor(), e);
						return t.prevObject = this, t
					},
					each: function(e) {
						return C.each(this, e)
					},
					map: function(e) {
						return this.pushStack(C.map(this, (function(t, n) {
							return e.call(t, n, t)
						})))
					},
					slice: function() {
						return this.pushStack(c.apply(this, arguments))
					},
					first: function() {
						return this.eq(0)
					},
					last: function() {
						return this.eq(-1)
					},
					even: function() {
						return this.pushStack(C.grep(this, (function(e, t) {
							return(t + 1) % 2
						})))
					},
					odd: function() {
						return this.pushStack(C.grep(this, (function(e, t) {
							return t % 2
						})))
					},
					eq: function(e) {
						var t = this.length,
							n = +e + (e < 0 ? t : 0);
						return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
					},
					end: function() {
						return this.prevObject || this.constructor()
					},
					push: u,
					sort: s.sort,
					splice: s.splice
				}, C.extend = C.fn.extend = function() {
					var e, t, n, i, r, a, o = arguments[0] || {},
						s = 1,
						l = arguments.length,
						c = !1;
					for("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || y(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
						if(null != (e = arguments[s]))
							for(t in e) i = e[t], "__proto__" !== t && o !== i && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[t], a = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}, r = !1, o[t] = C.extend(c, a, i)) : void 0 !== i && (o[t] = i));
					return o
				}, C.extend({
					expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
					isReady: !0,
					error: function(e) {
						throw new Error(e)
					},
					noop: function() {},
					isPlainObject: function(e) {
						var t, n;
						return !(!e || "[object Object]" !== p.call(e)) && (!(t = l(e)) || "function" == typeof(n = g.call(t, "constructor") && t.constructor) && m.call(n) === v)
					},
					isEmptyObject: function(e) {
						var t;
						for(t in e) return !1;
						return !0
					},
					globalEval: function(e, t, n) {
						k(e, {
							nonce: t && t.nonce
						}, n)
					},
					each: function(e, t) {
						var n, i = 0;
						if(A(e))
							for(n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
						else
							for(i in e)
								if(!1 === t.call(e[i], i, e[i])) break; return e
					},
					makeArray: function(e, t) {
						var n = t || [];
						return null != e && (A(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
					},
					inArray: function(e, t, n) {
						return null == t ? -1 : h.call(t, e, n)
					},
					merge: function(e, t) {
						for(var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
						return e.length = r, e
					},
					grep: function(e, t, n) {
						for(var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
						return i
					},
					map: function(e, t, n) {
						var i, r, a = 0,
							o = [];
						if(A(e))
							for(i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r);
						else
							for(a in e) null != (r = t(e[a], a, n)) && o.push(r);
						return d(o)
					},
					guid: 1,
					support: b
				}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
					f["[object " + t + "]"] = t.toLowerCase()
				}));
				var T =
					/*!
					 * Sizzle CSS Selector Engine v2.3.5
					 * https://sizzlejs.com/
					 *
					 * Copyright JS Foundation and other contributors
					 * Released under the MIT license
					 * https://js.foundation/
					 *
					 * Date: 2020-03-14
					 */
					function(e) {
						var t, n, i, r, o, s, l, c, d, u, h, f, p, g, m, v, b, y, w, x = "sizzle" + 1 * new Date,
							_ = e.document,
							k = 0,
							S = 0,
							C = ce(),
							A = ce(),
							T = ce(),
							E = ce(),
							I = function(e, t) {
								return e === t && (h = !0), 0
							},
							j = {}.hasOwnProperty,
							N = [],
							P = N.pop,
							z = N.push,
							L = N.push,
							D = N.slice,
							O = function(e, t) {
								for(var n = 0, i = e.length; n < i; n++)
									if(e[n] === t) return n;
								return -1
							},
							R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
							B = "[\\x20\\t\\r\\n\\f]",
							M = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
							q = "\\[" + B + "*(" + M + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + B + "*\\]",
							F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
							U = new RegExp(B + "+", "g"),
							H = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
							W = new RegExp("^" + B + "*," + B + "*"),
							X = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
							$ = new RegExp(B + "|>"),
							V = new RegExp(F),
							G = new RegExp("^" + M + "$"),
							Q = {
								ID: new RegExp("^#(" + M + ")"),
								CLASS: new RegExp("^\\.(" + M + ")"),
								TAG: new RegExp("^(" + M + "|[*])"),
								ATTR: new RegExp("^" + q),
								PSEUDO: new RegExp("^" + F),
								CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
								bool: new RegExp("^(?:" + R + ")$", "i"),
								needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
							},
							K = /HTML$/i,
							Y = /^(?:input|select|textarea|button)$/i,
							J = /^h\d$/i,
							Z = /^[^{]+\{\s*\[native \w/,
							ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
							te = /[+~]/,
							ne = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
							ie = function(e, t) {
								var n = "0x" + e.slice(1) - 65536;
								return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
							},
							re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
							ae = function(e, t) {
								return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
							},
							oe = function() {
								f()
							},
							se = xe((function(e) {
								return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
							}), {
								dir: "parentNode",
								next: "legend"
							});
						try {
							L.apply(N = D.call(_.childNodes), _.childNodes), N[_.childNodes.length].nodeType
						} catch(e) {
							L = {
								apply: N.length ? function(e, t) {
									z.apply(e, D.call(t))
								} : function(e, t) {
									for(var n = e.length, i = 0; e[n++] = t[i++];);
									e.length = n - 1
								}
							}
						}

						function le(e, t, i, r) {
							var a, o, l, d, u, h, g, b = t && t.ownerDocument,
								y = t ? t.nodeType : 9;
							if(i = i || [], "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y) return i;
							if(!r && (f(t), t = t || p, m)) {
								if(11 !== y && (u = ee.exec(e)))
									if(a = u[1]) {
										if(9 === y) {
											if(!(l = t.getElementById(a))) return i;
											if(l.id === a) return i.push(l), i
										} else if(b && (l = b.getElementById(a)) && w(t, l) && l.id === a) return i.push(l), i
									} else {
										if(u[2]) return L.apply(i, t.getElementsByTagName(e)), i;
										if((a = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(a)), i
									}
								if(n.qsa && !E[e + " "] && (!v || !v.test(e)) && (1 !== y || "object" !== t.nodeName.toLowerCase())) {
									if(g = e, b = t, 1 === y && ($.test(e) || X.test(e))) {
										for((b = te.test(e) && be(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(re, ae) : t.setAttribute("id", d = x)), o = (h = s(e)).length; o--;) h[o] = (d ? "#" + d : ":scope") + " " + we(h[o]);
										g = h.join(",")
									}
									try {
										return L.apply(i, b.querySelectorAll(g)), i
									} catch(t) {
										E(e, !0)
									} finally {
										d === x && t.removeAttribute("id")
									}
								}
							}
							return c(e.replace(H, "$1"), t, i, r)
						}

						function ce() {
							var e = [];
							return function t(n, r) {
								return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
							}
						}

						function de(e) {
							return e[x] = !0, e
						}

						function ue(e) {
							var t = p.createElement("fieldset");
							try {
								return !!e(t)
							} catch(e) {
								return !1
							} finally {
								t.parentNode && t.parentNode.removeChild(t), t = null
							}
						}

						function he(e, t) {
							for(var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
						}

						function fe(e, t) {
							var n = t && e,
								i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
							if(i) return i;
							if(n)
								for(; n = n.nextSibling;)
									if(n === t) return -1;
							return e ? 1 : -1
						}

						function pe(e) {
							return function(t) {
								return "input" === t.nodeName.toLowerCase() && t.type === e
							}
						}

						function ge(e) {
							return function(t) {
								var n = t.nodeName.toLowerCase();
								return("input" === n || "button" === n) && t.type === e
							}
						}

						function me(e) {
							return function(t) {
								return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
							}
						}

						function ve(e) {
							return de((function(t) {
								return t = +t, de((function(n, i) {
									for(var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
								}))
							}))
						}

						function be(e) {
							return e && typeof e.getElementsByTagName !== a && e
						}
						for(t in n = le.support = {}, o = le.isXML = function(e) {
								var t = e.namespaceURI,
									n = (e.ownerDocument || e).documentElement;
								return !K.test(t || n && n.nodeName || "HTML")
							}, f = le.setDocument = function(e) {
								var t, r, s = e ? e.ownerDocument || e : _;
								return s != p && 9 === s.nodeType && s.documentElement ? (g = (p = s).documentElement, m = !o(p), _ != p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ue((function(e) {
									return g.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
								})), n.attributes = ue((function(e) {
									return e.className = "i", !e.getAttribute("className")
								})), n.getElementsByTagName = ue((function(e) {
									return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
								})), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = ue((function(e) {
									return g.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
								})), n.getById ? (i.filter.ID = function(e) {
									var t = e.replace(ne, ie);
									return function(e) {
										return e.getAttribute("id") === t
									}
								}, i.find.ID = function(e, t) {
									if(typeof t.getElementById !== a && m) {
										var n = t.getElementById(e);
										return n ? [n] : []
									}
								}) : (i.filter.ID = function(e) {
									var t = e.replace(ne, ie);
									return function(e) {
										var n = typeof e.getAttributeNode !== a && e.getAttributeNode("id");
										return n && n.value === t
									}
								}, i.find.ID = function(e, t) {
									if(typeof t.getElementById !== a && m) {
										var n, i, r, o = t.getElementById(e);
										if(o) {
											if((n = o.getAttributeNode("id")) && n.value === e) return [o];
											for(r = t.getElementsByName(e), i = 0; o = r[i++];)
												if((n = o.getAttributeNode("id")) && n.value === e) return [o]
										}
										return []
									}
								}), i.find.TAG = n.getElementsByTagName ? function(e, t) {
									return typeof t.getElementsByTagName !== a ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
								} : function(e, t) {
									var n, i = [],
										r = 0,
										a = t.getElementsByTagName(e);
									if("*" === e) {
										for(; n = a[r++];) 1 === n.nodeType && i.push(n);
										return i
									}
									return a
								}, i.find.CLASS = n.getElementsByClassName && function(e, t) {
									if(typeof t.getElementsByClassName !== a && m) return t.getElementsByClassName(e)
								}, b = [], v = [], (n.qsa = Z.test(p.querySelectorAll)) && (ue((function(e) {
									var t;
									g.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
								})), ue((function(e) {
									e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
									var t = p.createElement("input");
									t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), g.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
								}))), (n.matchesSelector = Z.test(y = g.matches || g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector)) && ue((function(e) {
									n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), b.push("!=", F)
								})), v = v.length && new RegExp(v.join("|")), b = b.length && new RegExp(b.join("|")), t = Z.test(g.compareDocumentPosition), w = t || Z.test(g.contains) ? function(e, t) {
									var n = 9 === e.nodeType ? e.documentElement : e,
										i = t && t.parentNode;
									return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
								} : function(e, t) {
									if(t)
										for(; t = t.parentNode;)
											if(t === e) return !0;
									return !1
								}, I = t ? function(e, t) {
									if(e === t) return h = !0, 0;
									var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
									return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == _ && w(_, e) ? -1 : t == p || t.ownerDocument == _ && w(_, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1)
								} : function(e, t) {
									if(e === t) return h = !0, 0;
									var n, i = 0,
										r = e.parentNode,
										a = t.parentNode,
										o = [e],
										s = [t];
									if(!r || !a) return e == p ? -1 : t == p ? 1 : r ? -1 : a ? 1 : u ? O(u, e) - O(u, t) : 0;
									if(r === a) return fe(e, t);
									for(n = e; n = n.parentNode;) o.unshift(n);
									for(n = t; n = n.parentNode;) s.unshift(n);
									for(; o[i] === s[i];) i++;
									return i ? fe(o[i], s[i]) : o[i] == _ ? -1 : s[i] == _ ? 1 : 0
								}, p) : p
							}, le.matches = function(e, t) {
								return le(e, null, null, t)
							}, le.matchesSelector = function(e, t) {
								if(f(e), n.matchesSelector && m && !E[t + " "] && (!b || !b.test(t)) && (!v || !v.test(t))) try {
									var i = y.call(e, t);
									if(i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
								} catch(e) {
									E(t, !0)
								}
								return le(t, p, null, [e]).length > 0
							}, le.contains = function(e, t) {
								return(e.ownerDocument || e) != p && f(e), w(e, t)
							}, le.attr = function(e, t) {
								(e.ownerDocument || e) != p && f(e);
								var r = i.attrHandle[t.toLowerCase()],
									a = r && j.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
								return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
							}, le.escape = function(e) {
								return(e + "").replace(re, ae)
							}, le.error = function(e) {
								throw new Error("Syntax error, unrecognized expression: " + e)
							}, le.uniqueSort = function(e) {
								var t, i = [],
									r = 0,
									a = 0;
								if(h = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(I), h) {
									for(; t = e[a++];) t === e[a] && (r = i.push(a));
									for(; r--;) e.splice(i[r], 1)
								}
								return u = null, e
							}, r = le.getText = function(e) {
								var t, n = "",
									i = 0,
									a = e.nodeType;
								if(a) {
									if(1 === a || 9 === a || 11 === a) {
										if("string" == typeof e.textContent) return e.textContent;
										if("string" == typeof e.text) return e.text;
										for(e = e.firstChild; e; e = e.nextSibling) n += r(e)
									} else if(3 === a || 4 === a) return e.nodeValue
								} else
									for(; t = e[i++];) n += r(t);
								return n
							}, (i = le.selectors = {
								cacheLength: 50,
								createPseudo: de,
								match: Q,
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
										return e[1] = e[1].replace(ne, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
									},
									CHILD: function(e) {
										return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || le.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && le.error(e[0]), e
									},
									PSEUDO: function(e) {
										var t, n = !e[6] && e[2];
										return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
									}
								},
								filter: {
									TAG: function(e) {
										var t = e.replace(ne, ie).toLowerCase();
										return "*" === e ? function() {
											return !0
										} : function(e) {
											return e.nodeName && e.nodeName.toLowerCase() === t
										}
									},
									CLASS: function(e) {
										var t = C[e + " "];
										return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && C(e, (function(e) {
											return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== a && e.getAttribute("class") || "")
										}))
									},
									ATTR: function(e, t, n) {
										return function(i) {
											var r = le.attr(i, e);
											return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
										}
									},
									CHILD: function(e, t, n, i, r) {
										var a = "nth" !== e.slice(0, 3),
											o = "last" !== e.slice(-4),
											s = "of-type" === t;
										return 1 === i && 0 === r ? function(e) {
											return !!e.parentNode
										} : function(t, n, l) {
											var c, d, u, h, f, p, g = a !== o ? "nextSibling" : "previousSibling",
												m = t.parentNode,
												v = s && t.nodeName.toLowerCase(),
												b = !l && !s,
												y = !1;
											if(m) {
												if(a) {
													for(; g;) {
														for(h = t; h = h[g];)
															if(s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
														p = g = "only" === e && !p && "nextSibling"
													}
													return !0
												}
												if(p = [o ? m.firstChild : m.lastChild], o && b) {
													for(y = (f = (c = (d = (u = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (y = f = 0) || p.pop();)
														if(1 === h.nodeType && ++y && h === t) {
															d[e] = [k, f, y];
															break
														}
												} else if(b && (y = f = (c = (d = (u = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === y)
													for(;
														(h = ++f && h && h[g] || (y = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (b && ((d = (u = h[x] || (h[x] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [k, y]), h !== t)););
												return(y -= r) === i || y % i == 0 && y / i >= 0
											}
										}
									},
									PSEUDO: function(e, t) {
										var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || le.error("unsupported pseudo: " + e);
										return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? de((function(e, n) {
											for(var i, a = r(e, t), o = a.length; o--;) e[i = O(e, a[o])] = !(n[i] = a[o])
										})) : function(e) {
											return r(e, 0, n)
										}) : r
									}
								},
								pseudos: {
									not: de((function(e) {
										var t = [],
											n = [],
											i = l(e.replace(H, "$1"));
										return i[x] ? de((function(e, t, n, r) {
											for(var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
										})) : function(e, r, a) {
											return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
										}
									})),
									has: de((function(e) {
										return function(t) {
											return le(e, t).length > 0
										}
									})),
									contains: de((function(e) {
										return e = e.replace(ne, ie),
											function(t) {
												return(t.textContent || r(t)).indexOf(e) > -1
											}
									})),
									lang: de((function(e) {
										return G.test(e || "") || le.error("unsupported lang: " + e), e = e.replace(ne, ie).toLowerCase(),
											function(t) {
												var n;
												do {
													if(n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return(n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
												} while ((t = t.parentNode) && 1 === t.nodeType);
												return !1
											}
									})),
									target: function(t) {
										var n = e.location && e.location.hash;
										return n && n.slice(1) === t.id
									},
									root: function(e) {
										return e === g
									},
									focus: function(e) {
										return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
									},
									enabled: me(!1),
									disabled: me(!0),
									checked: function(e) {
										var t = e.nodeName.toLowerCase();
										return "input" === t && !!e.checked || "option" === t && !!e.selected
									},
									selected: function(e) {
										return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
									},
									empty: function(e) {
										for(e = e.firstChild; e; e = e.nextSibling)
											if(e.nodeType < 6) return !1;
										return !0
									},
									parent: function(e) {
										return !i.pseudos.empty(e)
									},
									header: function(e) {
										return J.test(e.nodeName)
									},
									input: function(e) {
										return Y.test(e.nodeName)
									},
									button: function(e) {
										var t = e.nodeName.toLowerCase();
										return "input" === t && "button" === e.type || "button" === t
									},
									text: function(e) {
										var t;
										return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
									},
									first: ve((function() {
										return [0]
									})),
									last: ve((function(e, t) {
										return [t - 1]
									})),
									eq: ve((function(e, t, n) {
										return [n < 0 ? n + t : n]
									})),
									even: ve((function(e, t) {
										for(var n = 0; n < t; n += 2) e.push(n);
										return e
									})),
									odd: ve((function(e, t) {
										for(var n = 1; n < t; n += 2) e.push(n);
										return e
									})),
									lt: ve((function(e, t, n) {
										for(var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
										return e
									})),
									gt: ve((function(e, t, n) {
										for(var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
										return e
									}))
								}
							}).pseudos.nth = i.pseudos.eq, {
								radio: !0,
								checkbox: !0,
								file: !0,
								password: !0,
								image: !0
							}) i.pseudos[t] = pe(t);
						for(t in {
								submit: !0,
								reset: !0
							}) i.pseudos[t] = ge(t);

						function ye() {}

						function we(e) {
							for(var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
							return i
						}

						function xe(e, t, n) {
							var i = t.dir,
								r = t.next,
								a = r || i,
								o = n && "parentNode" === a,
								s = S++;
							return t.first ? function(t, n, r) {
								for(; t = t[i];)
									if(1 === t.nodeType || o) return e(t, n, r);
								return !1
							} : function(t, n, l) {
								var c, d, u, h = [k, s];
								if(l) {
									for(; t = t[i];)
										if((1 === t.nodeType || o) && e(t, n, l)) return !0
								} else
									for(; t = t[i];)
										if(1 === t.nodeType || o)
											if(d = (u = t[x] || (t[x] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
											else {
												if((c = d[a]) && c[0] === k && c[1] === s) return h[2] = c[2];
												if(d[a] = h, h[2] = e(t, n, l)) return !0
											} return !1
							}
						}

						function _e(e) {
							return e.length > 1 ? function(t, n, i) {
								for(var r = e.length; r--;)
									if(!e[r](t, n, i)) return !1;
								return !0
							} : e[0]
						}

						function ke(e, t, n, i, r) {
							for(var a, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), c && t.push(s)));
							return o
						}

						function Se(e, t, n, i, r, a) {
							return i && !i[x] && (i = Se(i)), r && !r[x] && (r = Se(r, a)), de((function(a, o, s, l) {
								var c, d, u, h = [],
									f = [],
									p = o.length,
									g = a || function(e, t, n) {
										for(var i = 0, r = t.length; i < r; i++) le(e, t[i], n);
										return n
									}(t || "*", s.nodeType ? [s] : s, []),
									m = !e || !a && t ? g : ke(g, h, e, s, l),
									v = n ? r || (a ? e : p || i) ? [] : o : m;
								if(n && n(m, v, s, l), i)
									for(c = ke(v, f), i(c, [], s, l), d = c.length; d--;)(u = c[d]) && (v[f[d]] = !(m[f[d]] = u));
								if(a) {
									if(r || e) {
										if(r) {
											for(c = [], d = v.length; d--;)(u = v[d]) && c.push(m[d] = u);
											r(null, v = [], c, l)
										}
										for(d = v.length; d--;)(u = v[d]) && (c = r ? O(a, u) : h[d]) > -1 && (a[c] = !(o[c] = u))
									}
								} else v = ke(v === o ? v.splice(p, v.length) : v), r ? r(null, o, v, l) : L.apply(o, v)
							}))
						}

						function Ce(e) {
							for(var t, n, r, a = e.length, o = i.relative[e[0].type], s = o || i.relative[" "], l = o ? 1 : 0, c = xe((function(e) {
									return e === t
								}), s, !0), u = xe((function(e) {
									return O(t, e) > -1
								}), s, !0), h = [function(e, n, i) {
									var r = !o && (i || n !== d) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
									return t = null, r
								}]; l < a; l++)
								if(n = i.relative[e[l].type]) h = [xe(_e(h), n)];
								else {
									if((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
										for(r = ++l; r < a && !i.relative[e[r].type]; r++);
										return Se(l > 1 && _e(h), l > 1 && we(e.slice(0, l - 1).concat({
											value: " " === e[l - 2].type ? "*" : ""
										})).replace(H, "$1"), n, l < r && Ce(e.slice(l, r)), r < a && Ce(e = e.slice(r)), r < a && we(e))
									}
									h.push(n)
								}
							return _e(h)
						}
						return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = le.tokenize = function(e, t) {
							var n, r, a, o, s, l, c, d = A[e + " "];
							if(d) return t ? 0 : d.slice(0);
							for(s = e, l = [], c = i.preFilter; s;) {
								for(o in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), n = !1, (r = X.exec(s)) && (n = r.shift(), a.push({
										value: n,
										type: r[0].replace(H, " ")
									}), s = s.slice(n.length)), i.filter) !(r = Q[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), a.push({
									value: n,
									type: o,
									matches: r
								}), s = s.slice(n.length));
								if(!n) break
							}
							return t ? s.length : s ? le.error(e) : A(e, l).slice(0)
						}, l = le.compile = function(e, t) {
							var n, r = [],
								a = [],
								o = T[e + " "];
							if(!o) {
								for(t || (t = s(e)), n = t.length; n--;)(o = Ce(t[n]))[x] ? r.push(o) : a.push(o);
								(o = T(e, function(e, t) {
									var n = t.length > 0,
										r = e.length > 0,
										a = function(a, o, s, l, c) {
											var u, h, g, v = 0,
												b = "0",
												y = a && [],
												w = [],
												x = d,
												_ = a || r && i.find.TAG("*", c),
												S = k += null == x ? 1 : Math.random() || .1,
												C = _.length;
											for(c && (d = o == p || o || c); b !== C && null != (u = _[b]); b++) {
												if(r && u) {
													for(h = 0, o || u.ownerDocument == p || (f(u), s = !m); g = e[h++];)
														if(g(u, o || p, s)) {
															l.push(u);
															break
														}
													c && (k = S)
												}
												n && ((u = !g && u) && v--, a && y.push(u))
											}
											if(v += b, n && b !== v) {
												for(h = 0; g = t[h++];) g(y, w, o, s);
												if(a) {
													if(v > 0)
														for(; b--;) y[b] || w[b] || (w[b] = P.call(l));
													w = ke(w)
												}
												L.apply(l, w), c && !a && w.length > 0 && v + t.length > 1 && le.uniqueSort(l)
											}
											return c && (k = S, d = x), y
										};
									return n ? de(a) : a
								}(a, r))).selector = e
							}
							return o
						}, c = le.select = function(e, t, n, r) {
							var a, o, c, d, u, h = "function" == typeof e && e,
								f = !r && s(e = h.selector || e);
							if(n = n || [], 1 === f.length) {
								if((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = o[0]).type && 9 === t.nodeType && m && i.relative[o[1].type]) {
									if(!(t = (i.find.ID(c.matches[0].replace(ne, ie), t) || [])[0])) return n;
									h && (t = t.parentNode), e = e.slice(o.shift().value.length)
								}
								for(a = Q.needsContext.test(e) ? 0 : o.length; a-- && (c = o[a], !i.relative[d = c.type]);)
									if((u = i.find[d]) && (r = u(c.matches[0].replace(ne, ie), te.test(o[0].type) && be(t.parentNode) || t))) {
										if(o.splice(a, 1), !(e = r.length && we(o))) return L.apply(n, r), n;
										break
									}
							}
							return(h || l(e, f))(r, t, !m, n, !t || te.test(e) && be(t.parentNode) || t), n
						}, n.sortStable = x.split("").sort(I).join("") === x, n.detectDuplicates = !!h, f(), n.sortDetached = ue((function(e) {
							return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
						})), ue((function(e) {
							return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
						})) || he("type|href|height|width", (function(e, t, n) {
							if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
						})), n.attributes && ue((function(e) {
							return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
						})) || he("value", (function(e, t, n) {
							if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
						})), ue((function(e) {
							return null == e.getAttribute("disabled")
						})) || he(R, (function(e, t, n) {
							var i;
							if(!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
						})), le
					}(n);
				C.find = T, C.expr = T.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = T.uniqueSort, C.text = T.getText, C.isXMLDoc = T.isXML, C.contains = T.contains, C.escapeSelector = T.escape;
				var E = function(e, t, n) {
						for(var i = [], r = void 0 !== n;
							(e = e[t]) && 9 !== e.nodeType;)
							if(1 === e.nodeType) {
								if(r && C(e).is(n)) break;
								i.push(e)
							}
						return i
					},
					I = function(e, t) {
						for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
						return n
					},
					j = C.expr.match.needsContext;

				function N(e, t) {
					return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
				}
				var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

				function z(e, t, n) {
					return y(t) ? C.grep(e, (function(e, i) {
						return !!t.call(e, i, e) !== n
					})) : t.nodeType ? C.grep(e, (function(e) {
						return e === t !== n
					})) : "string" != typeof t ? C.grep(e, (function(e) {
						return h.call(t, e) > -1 !== n
					})) : C.filter(t, e, n)
				}
				C.filter = function(e, t, n) {
					var i = t[0];
					return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, (function(e) {
						return 1 === e.nodeType
					})))
				}, C.fn.extend({
					find: function(e) {
						var t, n, i = this.length,
							r = this;
						if("string" != typeof e) return this.pushStack(C(e).filter((function() {
							for(t = 0; t < i; t++)
								if(C.contains(r[t], this)) return !0
						})));
						for(n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
						return i > 1 ? C.uniqueSort(n) : n
					},
					filter: function(e) {
						return this.pushStack(z(this, e || [], !1))
					},
					not: function(e) {
						return this.pushStack(z(this, e || [], !0))
					},
					is: function(e) {
						return !!z(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length
					}
				});
				var L, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
				(C.fn.init = function(e, t, n) {
					var i, r;
					if(!e) return this;
					if(n = n || L, "string" == typeof e) {
						if(!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
						if(i[1]) {
							if(t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), P.test(i[1]) && C.isPlainObject(t))
								for(i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
							return this
						}
						return(r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this
					}
					return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
				}).prototype = C.fn, L = C(x);
				var O = /^(?:parents|prev(?:Until|All))/,
					R = {
						children: !0,
						contents: !0,
						next: !0,
						prev: !0
					};

				function B(e, t) {
					for(;
						(e = e[t]) && 1 !== e.nodeType;);
					return e
				}
				C.fn.extend({
					has: function(e) {
						var t = C(e, this),
							n = t.length;
						return this.filter((function() {
							for(var e = 0; e < n; e++)
								if(C.contains(this, t[e])) return !0
						}))
					},
					closest: function(e, t) {
						var n, i = 0,
							r = this.length,
							a = [],
							o = "string" != typeof e && C(e);
						if(!j.test(e))
							for(; i < r; i++)
								for(n = this[i]; n && n !== t; n = n.parentNode)
									if(n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
										a.push(n);
										break
									}
						return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a)
					},
					index: function(e) {
						return e ? "string" == typeof e ? h.call(C(e), this[0]) : h.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
					},
					add: function(e, t) {
						return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
					},
					addBack: function(e) {
						return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
					}
				}), C.each({
					parent: function(e) {
						var t = e.parentNode;
						return t && 11 !== t.nodeType ? t : null
					},
					parents: function(e) {
						return E(e, "parentNode")
					},
					parentsUntil: function(e, t, n) {
						return E(e, "parentNode", n)
					},
					next: function(e) {
						return B(e, "nextSibling")
					},
					prev: function(e) {
						return B(e, "previousSibling")
					},
					nextAll: function(e) {
						return E(e, "nextSibling")
					},
					prevAll: function(e) {
						return E(e, "previousSibling")
					},
					nextUntil: function(e, t, n) {
						return E(e, "nextSibling", n)
					},
					prevUntil: function(e, t, n) {
						return E(e, "previousSibling", n)
					},
					siblings: function(e) {
						return I((e.parentNode || {}).firstChild, e)
					},
					children: function(e) {
						return I(e.firstChild)
					},
					contents: function(e) {
						return null != e.contentDocument && l(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
					}
				}, (function(e, t) {
					C.fn[e] = function(n, i) {
						var r = C.map(this, t, n);
						return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = C.filter(i, r)), this.length > 1 && (R[e] || C.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
					}
				}));
				var M = /[^\x20\t\r\n\f]+/g;

				function q(e) {
					return e
				}

				function F(e) {
					throw e
				}

				function U(e, t, n, i) {
					var r;
					try {
						e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
					} catch(e) {
						n.apply(void 0, [e])
					}
				}
				C.Callbacks = function(e) {
					e = "string" == typeof e ? function(e) {
						var t = {};
						return C.each(e.match(M) || [], (function(e, n) {
							t[n] = !0
						})), t
					}(e) : C.extend({}, e);
					var t, n, i, r, a = [],
						o = [],
						s = -1,
						l = function() {
							for(r = r || e.once, i = t = !0; o.length; s = -1)
								for(n = o.shift(); ++s < a.length;) !1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length, n = !1);
							e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
						},
						c = {
							add: function() {
								return a && (n && !t && (s = a.length - 1, o.push(n)), function t(n) {
									C.each(n, (function(n, i) {
										y(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== S(i) && t(i)
									}))
								}(arguments), n && !t && l()), this
							},
							remove: function() {
								return C.each(arguments, (function(e, t) {
									for(var n;
										(n = C.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= s && s--
								})), this
							},
							has: function(e) {
								return e ? C.inArray(e, a) > -1 : a.length > 0
							},
							empty: function() {
								return a && (a = []), this
							},
							disable: function() {
								return r = o = [], a = n = "", this
							},
							disabled: function() {
								return !a
							},
							lock: function() {
								return r = o = [], n || t || (a = n = ""), this
							},
							locked: function() {
								return !!r
							},
							fireWith: function(e, n) {
								return r || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this
							},
							fire: function() {
								return c.fireWith(this, arguments), this
							},
							fired: function() {
								return !!i
							}
						};
					return c
				}, C.extend({
					Deferred: function(e) {
						var t = [
								["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
								["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
								["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
							],
							i = "pending",
							r = {
								state: function() {
									return i
								},
								always: function() {
									return a.done(arguments).fail(arguments), this
								},
								catch: function(e) {
									return r.then(null, e)
								},
								pipe: function() {
									var e = arguments;
									return C.Deferred((function(n) {
										C.each(t, (function(t, i) {
											var r = y(e[i[4]]) && e[i[4]];
											a[i[1]]((function() {
												var e = r && r.apply(this, arguments);
												e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
											}))
										})), e = null
									})).promise()
								},
								then: function(e, i, r) {
									var a = 0;

									function o(e, t, i, r) {
										return function() {
											var s = this,
												l = arguments,
												c = function() {
													var n, c;
													if(!(e < a)) {
														if((n = i.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
														c = n && ("object" == typeof n || "function" == typeof n) && n.then, y(c) ? r ? c.call(n, o(a, t, q, r), o(a, t, F, r)) : (a++, c.call(n, o(a, t, q, r), o(a, t, F, r), o(a, t, q, t.notifyWith))) : (i !== q && (s = void 0, l = [n]), (r || t.resolveWith)(s, l))
													}
												},
												d = r ? c : function() {
													try {
														c()
													} catch(n) {
														C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= a && (i !== F && (s = void 0, l = [n]), t.rejectWith(s, l))
													}
												};
											e ? d() : (C.Deferred.getStackHook && (d.stackTrace = C.Deferred.getStackHook()), n.setTimeout(d))
										}
									}
									return C.Deferred((function(n) {
										t[0][3].add(o(0, n, y(r) ? r : q, n.notifyWith)), t[1][3].add(o(0, n, y(e) ? e : q)), t[2][3].add(o(0, n, y(i) ? i : F))
									})).promise()
								},
								promise: function(e) {
									return null != e ? C.extend(e, r) : r
								}
							},
							a = {};
						return C.each(t, (function(e, n) {
							var o = n[2],
								s = n[5];
							r[n[1]] = o.add, s && o.add((function() {
								i = s
							}), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), a[n[0]] = function() {
								return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
							}, a[n[0] + "With"] = o.fireWith
						})), r.promise(a), e && e.call(a, a), a
					},
					when: function(e) {
						var t = arguments.length,
							n = t,
							i = Array(n),
							r = c.call(arguments),
							a = C.Deferred(),
							o = function(e) {
								return function(n) {
									i[e] = this, r[e] = arguments.length > 1 ? c.call(arguments) : n, --t || a.resolveWith(i, r)
								}
							};
						if(t <= 1 && (U(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || y(r[n] && r[n].then))) return a.then();
						for(; n--;) U(r[n], o(n), a.reject);
						return a.promise()
					}
				});
				var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
				C.Deferred.exceptionHook = function(e, t) {
					n.console && n.console.warn && e && H.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
				}, C.readyException = function(e) {
					n.setTimeout((function() {
						throw e
					}))
				};
				var W = C.Deferred();

				function X() {
					x.removeEventListener("DOMContentLoaded", X), n.removeEventListener("load", X), C.ready()
				}
				C.fn.ready = function(e) {
					return W.then(e).catch((function(e) {
						C.readyException(e)
					})), this
				}, C.extend({
					isReady: !1,
					readyWait: 1,
					ready: function(e) {
						(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || W.resolveWith(x, [C]))
					}
				}), C.ready.then = W.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(C.ready) : (x.addEventListener("DOMContentLoaded", X), n.addEventListener("load", X));
				var $ = function(e, t, n, i, r, a, o) {
						var s = 0,
							l = e.length,
							c = null == n;
						if("object" === S(n))
							for(s in r = !0, n) $(e, t, s, n[s], !0, a, o);
						else if(void 0 !== i && (r = !0, y(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
								return c.call(C(e), n)
							})), t))
							for(; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
						return r ? e : c ? t.call(e) : l ? t(e[0], n) : a
					},
					V = /^-ms-/,
					G = /-([a-z])/g;

				function Q(e, t) {
					return t.toUpperCase()
				}

				function K(e) {
					return e.replace(V, "ms-").replace(G, Q)
				}
				var Y = function(e) {
					return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
				};

				function J() {
					this.expando = C.expando + J.uid++
				}
				J.uid = 1, J.prototype = {
					cache: function(e) {
						var t = e[this.expando];
						return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
							value: t,
							configurable: !0
						}))), t
					},
					set: function(e, t, n) {
						var i, r = this.cache(e);
						if("string" == typeof t) r[K(t)] = n;
						else
							for(i in t) r[K(i)] = t[i];
						return r
					},
					get: function(e, t) {
						return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
					},
					access: function(e, t, n) {
						return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
					},
					remove: function(e, t) {
						var n, i = e[this.expando];
						if(void 0 !== i) {
							if(void 0 !== t) {
								n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(M) || []).length;
								for(; n--;) delete i[t[n]]
							}(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
						}
					},
					hasData: function(e) {
						var t = e[this.expando];
						return void 0 !== t && !C.isEmptyObject(t)
					}
				};
				var Z = new J,
					ee = new J,
					te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
					ne = /[A-Z]/g;

				function ie(e, t, n) {
					var i;
					if(void 0 === n && 1 === e.nodeType)
						if(i = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
							try {
								n = function(e) {
									return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : te.test(e) ? JSON.parse(e) : e)
								}(n)
							} catch(e) {}
							ee.set(e, t, n)
						} else n = void 0;
					return n
				}
				C.extend({
					hasData: function(e) {
						return ee.hasData(e) || Z.hasData(e)
					},
					data: function(e, t, n) {
						return ee.access(e, t, n)
					},
					removeData: function(e, t) {
						ee.remove(e, t)
					},
					_data: function(e, t, n) {
						return Z.access(e, t, n)
					},
					_removeData: function(e, t) {
						Z.remove(e, t)
					}
				}), C.fn.extend({
					data: function(e, t) {
						var n, i, r, a = this[0],
							o = a && a.attributes;
						if(void 0 === e) {
							if(this.length && (r = ee.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
								for(n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = K(i.slice(5)), ie(a, i, r[i]));
								Z.set(a, "hasDataAttrs", !0)
							}
							return r
						}
						return "object" == typeof e ? this.each((function() {
							ee.set(this, e)
						})) : $(this, (function(t) {
							var n;
							if(a && void 0 === t) return void 0 !== (n = ee.get(a, e)) ? n : void 0 !== (n = ie(a, e)) ? n : void 0;
							this.each((function() {
								ee.set(this, e, t)
							}))
						}), null, t, arguments.length > 1, null, !0)
					},
					removeData: function(e) {
						return this.each((function() {
							ee.remove(this, e)
						}))
					}
				}), C.extend({
					queue: function(e, t, n) {
						var i;
						if(e) return t = (t || "fx") + "queue", i = Z.get(e, t), n && (!i || Array.isArray(n) ? i = Z.access(e, t, C.makeArray(n)) : i.push(n)), i || []
					},
					dequeue: function(e, t) {
						t = t || "fx";
						var n = C.queue(e, t),
							i = n.length,
							r = n.shift(),
							a = C._queueHooks(e, t);
						"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, (function() {
							C.dequeue(e, t)
						}), a)), !i && a && a.empty.fire()
					},
					_queueHooks: function(e, t) {
						var n = t + "queueHooks";
						return Z.get(e, n) || Z.access(e, n, {
							empty: C.Callbacks("once memory").add((function() {
								Z.remove(e, [t + "queue", n])
							}))
						})
					}
				}), C.fn.extend({
					queue: function(e, t) {
						var n = 2;
						return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
							var n = C.queue(this, e, t);
							C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
						}))
					},
					dequeue: function(e) {
						return this.each((function() {
							C.dequeue(this, e)
						}))
					},
					clearQueue: function(e) {
						return this.queue(e || "fx", [])
					},
					promise: function(e, t) {
						var n, i = 1,
							r = C.Deferred(),
							a = this,
							o = this.length,
							s = function() {
								--i || r.resolveWith(a, [a])
							};
						for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Z.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
						return s(), r.promise(t)
					}
				});
				var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
					ae = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
					oe = ["Top", "Right", "Bottom", "Left"],
					se = x.documentElement,
					le = function(e) {
						return C.contains(e.ownerDocument, e)
					},
					ce = {
						composed: !0
					};
				se.getRootNode && (le = function(e) {
					return C.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument
				});
				var de = function(e, t) {
					return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === C.css(e, "display")
				};

				function ue(e, t, n, i) {
					var r, a, o = 20,
						s = i ? function() {
							return i.cur()
						} : function() {
							return C.css(e, t, "")
						},
						l = s(),
						c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
						d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ae.exec(C.css(e, t));
					if(d && d[3] !== c) {
						for(l /= 2, c = c || d[3], d = +l || 1; o--;) C.style(e, t, d + c), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0), d /= a;
						d *= 2, C.style(e, t, d + c), n = n || []
					}
					return n && (d = +d || +l || 0, r = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = r)), r
				}
				var he = {};

				function fe(e) {
					var t, n = e.ownerDocument,
						i = e.nodeName,
						r = he[i];
					return r || (t = n.body.appendChild(n.createElement(i)), r = C.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), he[i] = r, r)
				}

				function pe(e, t) {
					for(var n, i, r = [], a = 0, o = e.length; a < o; a++)(i = e[a]).style && (n = i.style.display, t ? ("none" === n && (r[a] = Z.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && de(i) && (r[a] = fe(i))) : "none" !== n && (r[a] = "none", Z.set(i, "display", n)));
					for(a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
					return e
				}
				C.fn.extend({
					show: function() {
						return pe(this, !0)
					},
					hide: function() {
						return pe(this)
					},
					toggle: function(e) {
						return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
							de(this) ? C(this).show() : C(this).hide()
						}))
					}
				});
				var ge, me, ve = /^(?:checkbox|radio)$/i,
					be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
					ye = /^$|^module$|\/(?:java|ecma)script/i;
				ge = x.createDocumentFragment().appendChild(x.createElement("div")), (me = x.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), b.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue, ge.innerHTML = "<option></option>", b.option = !!ge.lastChild;
				var we = {
					thead: [1, "<table>", "</table>"],
					col: [2, "<table><colgroup>", "</colgroup></table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					_default: [0, "", ""]
				};

				function xe(e, t) {
					var n;
					return n = typeof e.getElementsByTagName !== a ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== a ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? C.merge([e], n) : n
				}

				function _e(e, t) {
					for(var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
				}
				we.tbody = we.tfoot = we.colgroup = we.caption = we.thead, we.th = we.td, b.option || (we.optgroup = we.option = [1, "<select multiple='multiple'>", "</select>"]);
				var ke = /<|&#?\w+;/;

				function Se(e, t, n, i, r) {
					for(var a, s, l, c, d, u, h = t.createDocumentFragment(), f = [], p = 0, g = e.length; p < g; p++)
						if((a = e[p]) || 0 === a)
							if("object" === S(a)) C.merge(f, a.nodeType ? [a] : a);
							else if(ke.test(a)) {
						for(s = s || h.appendChild(t.createElement("div")), l = (be.exec(a) || ["", ""])[1].toLowerCase(), c = we[l] || we._default, s.innerHTML = c[1] + C.htmlPrefilter(a) + c[2], u = c[0]; u--;) s = s.lastChild;
						C.merge(f, s.childNodes), o(s = h.firstChild, "")
					} else f.push(t.createTextNode(a));
					for(; h.firstChild;) h.removeChild(h.firstChild);
					for(p = 0; a = f[p++];)
						if(i && C.inArray(a, i) > -1) r && r.push(a);
						else if(d = le(a), s = xe(h.appendChild(a), "script"), d && _e(s), n)
						for(u = 0; a = s[u++];) ye.test(a.type || "") && n.push(a);
					return h
				}
				var Ce = /^key/,
					Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
					Te = /^([^.]*)(?:\.(.+)|)/;

				function Ee() {
					return !0
				}

				function Ie() {
					return !1
				}

				function je(e, t) {
					return e === function() {
						try {
							return x.activeElement
						} catch(e) {}
					}() == ("focus" === t)
				}

				function Ne(e, t, n, i, r, a) {
					var o, s;
					if("object" == typeof t) {
						for(s in "string" != typeof n && (i = i || n, n = void 0), t) Ne(e, s, n, i, t[s], a);
						return e
					}
					if(null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ie;
					else if(!r) return e;
					return 1 === a && (o = r, (r = function(e) {
						return C().off(e), o.apply(this, arguments)
					}).guid = o.guid || (o.guid = C.guid++)), e.each((function() {
						C.event.add(this, t, r, i, n)
					}))
				}

				function Pe(e, t, n) {
					n ? (Z.set(e, t, !1), C.event.add(e, t, {
						namespace: !1,
						handler: function(e) {
							var i, r, a = Z.get(this, t);
							if(1 & e.isTrigger && this[t]) {
								if(a.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
								else if(a = c.call(arguments), Z.set(this, t, a), i = n(this, t), this[t](), a !== (r = Z.get(this, t)) || i ? Z.set(this, t, !1) : r = {}, a !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
							} else a.length && (Z.set(this, t, {
								value: C.event.trigger(C.extend(a[0], C.Event.prototype), a.slice(1), this)
							}), e.stopImmediatePropagation())
						}
					})) : void 0 === Z.get(e, t) && C.event.add(e, t, Ee)
				}
				C.event = {
					global: {},
					add: function(e, t, n, i, r) {
						var a, o, s, l, c, d, u, h, f, p, g, m = Z.get(e);
						if(Y(e))
							for(n.handler && (n = (a = n).handler, r = a.selector), r && C.find.matchesSelector(se, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = Object.create(null)), (o = m.handle) || (o = m.handle = function(t) {
									return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
								}), c = (t = (t || "").match(M) || [""]).length; c--;) f = g = (s = Te.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (u = C.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, d = C.extend({
								type: f,
								origType: g,
								data: i,
								handler: n,
								guid: n.guid,
								selector: r,
								needsContext: r && C.expr.match.needsContext.test(r),
								namespace: p.join(".")
							}, a), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), C.event.global[f] = !0)
					},
					remove: function(e, t, n, i, r) {
						var a, o, s, l, c, d, u, h, f, p, g, m = Z.hasData(e) && Z.get(e);
						if(m && (l = m.events)) {
							for(c = (t = (t || "").match(M) || [""]).length; c--;)
								if(f = g = (s = Te.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
									for(u = C.event.special[f] || {}, h = l[f = (i ? u.delegateType : u.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) d = h[a], !r && g !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
									o && !h.length && (u.teardown && !1 !== u.teardown.call(e, p, m.handle) || C.removeEvent(e, f, m.handle), delete l[f])
								} else
									for(f in l) C.event.remove(e, f + t[c], n, i, !0);
							C.isEmptyObject(l) && Z.remove(e, "handle events")
						}
					},
					dispatch: function(e) {
						var t, n, i, r, a, o, s = new Array(arguments.length),
							l = C.event.fix(e),
							c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
							d = C.event.special[l.type] || {};
						for(s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
						if(l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
							for(o = C.event.handlers.call(this, l, c), t = 0;
								(r = o[t++]) && !l.isPropagationStopped();)
								for(l.currentTarget = r.elem, n = 0;
									(a = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (i = ((C.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
							return d.postDispatch && d.postDispatch.call(this, l), l.result
						}
					},
					handlers: function(e, t) {
						var n, i, r, a, o, s = [],
							l = t.delegateCount,
							c = e.target;
						if(l && c.nodeType && !("click" === e.type && e.button >= 1))
							for(; c !== this; c = c.parentNode || this)
								if(1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
									for(a = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? C(r, this).index(c) > -1 : C.find(r, this, null, [c]).length), o[r] && a.push(i);
									a.length && s.push({
										elem: c,
										handlers: a
									})
								}
						return c = this, l < t.length && s.push({
							elem: c,
							handlers: t.slice(l)
						}), s
					},
					addProp: function(e, t) {
						Object.defineProperty(C.Event.prototype, e, {
							enumerable: !0,
							configurable: !0,
							get: y(t) ? function() {
								if(this.originalEvent) return t(this.originalEvent)
							} : function() {
								if(this.originalEvent) return this.originalEvent[e]
							},
							set: function(t) {
								Object.defineProperty(this, e, {
									enumerable: !0,
									configurable: !0,
									writable: !0,
									value: t
								})
							}
						})
					},
					fix: function(e) {
						return e[C.expando] ? e : new C.Event(e)
					},
					special: {
						load: {
							noBubble: !0
						},
						click: {
							setup: function(e) {
								var t = this || e;
								return ve.test(t.type) && t.click && N(t, "input") && Pe(t, "click", Ee), !1
							},
							trigger: function(e) {
								var t = this || e;
								return ve.test(t.type) && t.click && N(t, "input") && Pe(t, "click"), !0
							},
							_default: function(e) {
								var t = e.target;
								return ve.test(t.type) && t.click && N(t, "input") && Z.get(t, "click") || N(t, "a")
							}
						},
						beforeunload: {
							postDispatch: function(e) {
								void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
							}
						}
					}
				}, C.removeEvent = function(e, t, n) {
					e.removeEventListener && e.removeEventListener(t, n)
				}, C.Event = function(e, t) {
					if(!(this instanceof C.Event)) return new C.Event(e, t);
					e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ie, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
				}, C.Event.prototype = {
					constructor: C.Event,
					isDefaultPrevented: Ie,
					isPropagationStopped: Ie,
					isImmediatePropagationStopped: Ie,
					isSimulated: !1,
					preventDefault: function() {
						var e = this.originalEvent;
						this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
					},
					stopPropagation: function() {
						var e = this.originalEvent;
						this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
					},
					stopImmediatePropagation: function() {
						var e = this.originalEvent;
						this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
					}
				}, C.each({
					altKey: !0,
					bubbles: !0,
					cancelable: !0,
					changedTouches: !0,
					ctrlKey: !0,
					detail: !0,
					eventPhase: !0,
					metaKey: !0,
					pageX: !0,
					pageY: !0,
					shiftKey: !0,
					view: !0,
					char: !0,
					code: !0,
					charCode: !0,
					key: !0,
					keyCode: !0,
					button: !0,
					buttons: !0,
					clientX: !0,
					clientY: !0,
					offsetX: !0,
					offsetY: !0,
					pointerId: !0,
					pointerType: !0,
					screenX: !0,
					screenY: !0,
					targetTouches: !0,
					toElement: !0,
					touches: !0,
					which: function(e) {
						var t = e.button;
						return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ae.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
					}
				}, C.event.addProp), C.each({
					focus: "focusin",
					blur: "focusout"
				}, (function(e, t) {
					C.event.special[e] = {
						setup: function() {
							return Pe(this, e, je), !1
						},
						trigger: function() {
							return Pe(this, e), !0
						},
						delegateType: t
					}
				})), C.each({
					mouseenter: "mouseover",
					mouseleave: "mouseout",
					pointerenter: "pointerover",
					pointerleave: "pointerout"
				}, (function(e, t) {
					C.event.special[e] = {
						delegateType: t,
						bindType: t,
						handle: function(e) {
							var n, i = this,
								r = e.relatedTarget,
								a = e.handleObj;
							return r && (r === i || C.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
						}
					}
				})), C.fn.extend({
					on: function(e, t, n, i) {
						return Ne(this, e, t, n, i)
					},
					one: function(e, t, n, i) {
						return Ne(this, e, t, n, i, 1)
					},
					off: function(e, t, n) {
						var i, r;
						if(e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
						if("object" == typeof e) {
							for(r in e) this.off(r, t, e[r]);
							return this
						}
						return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ie), this.each((function() {
							C.event.remove(this, e, n, t)
						}))
					}
				});
				var ze = /<script|<style|<link/i,
					Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
					De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

				function Oe(e, t) {
					return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
				}

				function Re(e) {
					return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
				}

				function Be(e) {
					return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
				}

				function Me(e, t) {
					var n, i, r, a, o, s;
					if(1 === t.nodeType) {
						if(Z.hasData(e) && (s = Z.get(e).events))
							for(r in Z.remove(t, "handle events"), s)
								for(n = 0, i = s[r].length; n < i; n++) C.event.add(t, r, s[r][n]);
						ee.hasData(e) && (a = ee.access(e), o = C.extend({}, a), ee.set(t, o))
					}
				}

				function qe(e, t) {
					var n = t.nodeName.toLowerCase();
					"input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
				}

				function Fe(e, t, n, i) {
					t = d(t);
					var r, a, o, s, l, c, u = 0,
						h = e.length,
						f = h - 1,
						p = t[0],
						g = y(p);
					if(g || h > 1 && "string" == typeof p && !b.checkClone && Le.test(p)) return e.each((function(r) {
						var a = e.eq(r);
						g && (t[0] = p.call(this, r, a.html())), Fe(a, t, n, i)
					}));
					if(h && (a = (r = Se(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
						for(s = (o = C.map(xe(r, "script"), Re)).length; u < h; u++) l = r, u !== f && (l = C.clone(l, !0, !0), s && C.merge(o, xe(l, "script"))), n.call(e[u], l, u);
						if(s)
							for(c = o[o.length - 1].ownerDocument, C.map(o, Be), u = 0; u < s; u++) l = o[u], ye.test(l.type || "") && !Z.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
								nonce: l.nonce || l.getAttribute("nonce")
							}, c) : k(T.getText(l).replace(De, ""), l, c))
					}
					return e
				}

				function Ue(e, t, n) {
					for(var i, r = t ? C.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || C.cleanData(xe(i)), i.parentNode && (n && le(i) && _e(xe(i, "script")), i.parentNode.removeChild(i));
					return e
				}
				C.extend({
					htmlPrefilter: function(e) {
						return e
					},
					clone: function(e, t, n) {
						var i, r, a, o, s = e.cloneNode(!0),
							l = le(e);
						if(!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
							for(o = xe(s), i = 0, r = (a = xe(e)).length; i < r; i++) qe(a[i], o[i]);
						if(t)
							if(n)
								for(a = a || xe(e), o = o || xe(s), i = 0, r = a.length; i < r; i++) Me(a[i], o[i]);
							else Me(e, s);
						return(o = xe(s, "script")).length > 0 && _e(o, !l && xe(e, "script")), s
					},
					cleanData: function(e) {
						for(var t, n, i, r = C.event.special, a = 0; null != (n = e[a]); a++)
							if(Y(n)) {
								if(t = n[Z.expando]) {
									if(t.events)
										for(i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
									n[Z.expando] = void 0
								}
								n[ee.expando] && (n[ee.expando] = void 0)
							}
					}
				}), C.fn.extend({
					detach: function(e) {
						return Ue(this, e, !0)
					},
					remove: function(e) {
						return Ue(this, e)
					},
					text: function(e) {
						return $(this, (function(e) {
							return void 0 === e ? C.text(this) : this.empty().each((function() {
								1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || o(this, e)
							}))
						}), null, e, arguments.length)
					},
					append: function() {
						return Fe(this, arguments, (function(e) {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
						}))
					},
					prepend: function() {
						return Fe(this, arguments, (function(e) {
							if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
								var t = Oe(this, e);
								t.insertBefore(e, t.firstChild)
							}
						}))
					},
					before: function() {
						return Fe(this, arguments, (function(e) {
							this.parentNode && this.parentNode.insertBefore(e, this)
						}))
					},
					after: function() {
						return Fe(this, arguments, (function(e) {
							this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
						}))
					},
					empty: function() {
						for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(xe(e, !1)), o(e, ""));
						return this
					},
					clone: function(e, t) {
						return e = null != e && e, t = null == t ? e : t, this.map((function() {
							return C.clone(this, e, t)
						}))
					},
					html: function(e) {
						return $(this, (function(e) {
							var t = this[0] || {},
								n = 0,
								i = this.length;
							if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
							if("string" == typeof e && !ze.test(e) && !we[(be.exec(e) || ["", ""])[1].toLowerCase()]) {
								e = C.htmlPrefilter(e);
								try {
									for(; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), t.innerHTML = e);
									t = 0
								} catch(e) {}
							}
							t && this.empty().append(e)
						}), null, e, arguments.length)
					},
					replaceWith: function() {
						var e = [];
						return Fe(this, arguments, (function(t) {
							var n = this.parentNode;
							C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this))
						}), e)
					}
				}), C.each({
					appendTo: "append",
					prependTo: "prepend",
					insertBefore: "before",
					insertAfter: "after",
					replaceAll: "replaceWith"
				}, (function(e, t) {
					C.fn[e] = function(e) {
						for(var n, i = [], r = C(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), C(r[o])[t](n), u.apply(i, n.get());
						return this.pushStack(i)
					}
				}));
				var He = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
					We = function(e) {
						var t = e.ownerDocument.defaultView;
						return t && t.opener || (t = n), t.getComputedStyle(e)
					},
					Xe = function(e, t, n) {
						var i, r, a = {};
						for(r in t) a[r] = e.style[r], e.style[r] = t[r];
						for(r in i = n.call(e), t) e.style[r] = a[r];
						return i
					},
					$e = new RegExp(oe.join("|"), "i");

				function Ve(e, t, n) {
					var i, r, a, o, s = e.style;
					return(n = n || We(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || le(e) || (o = C.style(e, t)), !b.pixelBoxStyles() && He.test(o) && $e.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 !== o ? o + "" : o
				}

				function Ge(e, t) {
					return {
						get: function() {
							if(!e()) return(this.get = t).apply(this, arguments);
							delete this.get
						}
					}
				}! function() {
					function e() {
						if(d) {
							c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(d);
							var e = n.getComputedStyle(d);
							i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), d.style.position = "absolute", a = 12 === t(d.offsetWidth / 3), se.removeChild(c), d = null
						}
					}

					function t(e) {
						return Math.round(parseFloat(e))
					}
					var i, r, a, o, s, l, c = x.createElement("div"),
						d = x.createElement("div");
					d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === d.style.backgroundClip, C.extend(b, {
						boxSizingReliable: function() {
							return e(), r
						},
						pixelBoxStyles: function() {
							return e(), o
						},
						pixelPosition: function() {
							return e(), i
						},
						reliableMarginLeft: function() {
							return e(), l
						},
						scrollboxSize: function() {
							return e(), a
						},
						reliableTrDimensions: function() {
							var e, t, i, r;
							return null == s && (e = x.createElement("table"), t = x.createElement("tr"), i = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", se.appendChild(e).appendChild(t).appendChild(i), r = n.getComputedStyle(t), s = parseInt(r.height) > 3, se.removeChild(e)), s
						}
					}))
				}();
				var Qe = ["Webkit", "Moz", "ms"],
					Ke = x.createElement("div").style,
					Ye = {};

				function Je(e) {
					var t = C.cssProps[e] || Ye[e];
					return t || (e in Ke ? e : Ye[e] = function(e) {
						for(var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
							if((e = Qe[n] + t) in Ke) return e
					}(e) || e)
				}
				var Ze = /^(none|table(?!-c[ea]).+)/,
					et = /^--/,
					tt = {
						position: "absolute",
						visibility: "hidden",
						display: "block"
					},
					nt = {
						letterSpacing: "0",
						fontWeight: "400"
					};

				function it(e, t, n) {
					var i = ae.exec(t);
					return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
				}

				function rt(e, t, n, i, r, a) {
					var o = "width" === t ? 1 : 0,
						s = 0,
						l = 0;
					if(n === (i ? "border" : "content")) return 0;
					for(; o < 4; o += 2) "margin" === n && (l += C.css(e, n + oe[o], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + oe[o], !0, r)), "margin" !== n && (l -= C.css(e, "border" + oe[o] + "Width", !0, r))) : (l += C.css(e, "padding" + oe[o], !0, r), "padding" !== n ? l += C.css(e, "border" + oe[o] + "Width", !0, r) : s += C.css(e, "border" + oe[o] + "Width", !0, r));
					return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5)) || 0), l
				}

				function at(e, t, n) {
					var i = We(e),
						r = (!b.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
						a = r,
						o = Ve(e, t, i),
						s = "offset" + t[0].toUpperCase() + t.slice(1);
					if(He.test(o)) {
						if(!n) return o;
						o = "auto"
					}
					return(!b.boxSizingReliable() && r || !b.reliableTrDimensions() && N(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), (a = s in e) && (o = e[s])), (o = parseFloat(o) || 0) + rt(e, t, n || (r ? "border" : "content"), a, i, o) + "px"
				}

				function ot(e, t, n, i, r) {
					return new ot.prototype.init(e, t, n, i, r)
				}
				C.extend({
					cssHooks: {
						opacity: {
							get: function(e, t) {
								if(t) {
									var n = Ve(e, "opacity");
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
						gridArea: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnStart: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowStart: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0
					},
					cssProps: {},
					style: function(e, t, n, i) {
						if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
							var r, a, o, s = K(t),
								l = et.test(t),
								c = e.style;
							if(l || (t = Je(s)), o = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : c[t];
							"string" === (a = typeof n) && (r = ae.exec(n)) && r[1] && (n = ue(e, t, r), a = "number"), null != n && n == n && ("number" !== a || l || (n += r && r[3] || (C.cssNumber[s] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
						}
					},
					css: function(e, t, n, i) {
						var r, a, o, s = K(t);
						return et.test(t) || (t = Je(s)), (o = C.cssHooks[t] || C.cssHooks[s]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = Ve(e, t, i)), "normal" === r && t in nt && (r = nt[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
					}
				}), C.each(["height", "width"], (function(e, t) {
					C.cssHooks[t] = {
						get: function(e, n, i) {
							if(n) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, t, i) : Xe(e, tt, (function() {
								return at(e, t, i)
							}))
						},
						set: function(e, n, i) {
							var r, a = We(e),
								o = !b.scrollboxSize() && "absolute" === a.position,
								s = (o || i) && "border-box" === C.css(e, "boxSizing", !1, a),
								l = i ? rt(e, t, i, s, a) : 0;
							return s && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - rt(e, t, "border", !1, a) - .5)), l && (r = ae.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = C.css(e, t)), it(0, n, l)
						}
					}
				})), C.cssHooks.marginLeft = Ge(b.reliableMarginLeft, (function(e, t) {
					if(t) return(parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
						marginLeft: 0
					}, (function() {
						return e.getBoundingClientRect().left
					}))) + "px"
				})), C.each({
					margin: "",
					padding: "",
					border: "Width"
				}, (function(e, t) {
					C.cssHooks[e + t] = {
						expand: function(n) {
							for(var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = a[i] || a[i - 2] || a[0];
							return r
						}
					}, "margin" !== e && (C.cssHooks[e + t].set = it)
				})), C.fn.extend({
					css: function(e, t) {
						return $(this, (function(e, t, n) {
							var i, r, a = {},
								o = 0;
							if(Array.isArray(t)) {
								for(i = We(e), r = t.length; o < r; o++) a[t[o]] = C.css(e, t[o], !1, i);
								return a
							}
							return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
						}), e, t, arguments.length > 1)
					}
				}), C.Tween = ot, ot.prototype = {
					constructor: ot,
					init: function(e, t, n, i, r, a) {
						this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (C.cssNumber[n] ? "" : "px")
					},
					cur: function() {
						var e = ot.propHooks[this.prop];
						return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
					},
					run: function(e) {
						var t, n = ot.propHooks[this.prop];
						return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
					}
				}, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
					_default: {
						get: function(e) {
							var t;
							return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
						},
						set: function(e) {
							C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
						}
					}
				}, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
					set: function(e) {
						e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
					}
				}, C.easing = {
					linear: function(e) {
						return e
					},
					swing: function(e) {
						return .5 - Math.cos(e * Math.PI) / 2
					},
					_default: "swing"
				}, C.fx = ot.prototype.init, C.fx.step = {};
				var st, lt, ct = /^(?:toggle|show|hide)$/,
					dt = /queueHooks$/;

				function ut() {
					lt && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, C.fx.interval), C.fx.tick())
				}

				function ht() {
					return n.setTimeout((function() {
						st = void 0
					})), st = Date.now()
				}

				function ft(e, t) {
					var n, i = 0,
						r = {
							height: e
						};
					for(t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
					return t && (r.opacity = r.width = e), r
				}

				function pt(e, t, n) {
					for(var i, r = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), a = 0, o = r.length; a < o; a++)
						if(i = r[a].call(n, t, e)) return i
				}

				function gt(e, t, n) {
					var i, r, a = 0,
						o = gt.prefilters.length,
						s = C.Deferred().always((function() {
							delete l.elem
						})),
						l = function() {
							if(r) return !1;
							for(var t = st || ht(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++) c.tweens[a].run(i);
							return s.notifyWith(e, [c, i, n]), i < 1 && o ? n : (o || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
						},
						c = s.promise({
							elem: e,
							props: C.extend({}, t),
							opts: C.extend(!0, {
								specialEasing: {},
								easing: C.easing._default
							}, n),
							originalProperties: t,
							originalOptions: n,
							startTime: st || ht(),
							duration: n.duration,
							tweens: [],
							createTween: function(t, n) {
								var i = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
								return c.tweens.push(i), i
							},
							stop: function(t) {
								var n = 0,
									i = t ? c.tweens.length : 0;
								if(r) return this;
								for(r = !0; n < i; n++) c.tweens[n].run(1);
								return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
							}
						}),
						d = c.props;
					for(! function(e, t) {
							var n, i, r, a, o;
							for(n in e)
								if(r = t[i = K(n)], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = C.cssHooks[i]) && "expand" in o)
									for(n in a = o.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
								else t[i] = r
						}(d, c.opts.specialEasing); a < o; a++)
						if(i = gt.prefilters[a].call(c, e, d, c.opts)) return y(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
					return C.map(d, pt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
						elem: e,
						anim: c,
						queue: c.opts.queue
					})), c
				}
				C.Animation = C.extend(gt, {
						tweeners: {
							"*": [function(e, t) {
								var n = this.createTween(e, t);
								return ue(n.elem, e, ae.exec(t), n), n
							}]
						},
						tweener: function(e, t) {
							y(e) ? (t = e, e = ["*"]) : e = e.match(M);
							for(var n, i = 0, r = e.length; i < r; i++) n = e[i], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t)
						},
						prefilters: [function(e, t, n) {
							var i, r, a, o, s, l, c, d, u = "width" in t || "height" in t,
								h = this,
								f = {},
								p = e.style,
								g = e.nodeType && de(e),
								m = Z.get(e, "fxshow");
							for(i in n.queue || (null == (o = C._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
									o.unqueued || s()
								}), o.unqueued++, h.always((function() {
									h.always((function() {
										o.unqueued--, C.queue(e, "fx").length || o.empty.fire()
									}))
								}))), t)
								if(r = t[i], ct.test(r)) {
									if(delete t[i], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
										if("show" !== r || !m || void 0 === m[i]) continue;
										g = !0
									}
									f[i] = m && m[i] || C.style(e, i)
								}
							if((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
								for(i in u && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Z.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (pe([e], !0), c = e.style.display || c, d = C.css(e, "display"), pe([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (h.done((function() {
										p.display = c
									})), null == c && (d = p.display, c = "none" === d ? "" : d)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function() {
										p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
									}))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(e, "fxshow", {
									display: c
								}), a && (m.hidden = !g), g && pe([e], !0), h.done((function() {
									for(i in g || pe([e]), Z.remove(e, "fxshow"), f) C.style(e, i, f[i])
								}))), l = pt(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
						}],
						prefilter: function(e, t) {
							t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
						}
					}), C.speed = function(e, t, n) {
						var i = e && "object" == typeof e ? C.extend({}, e) : {
							complete: n || !n && t || y(e) && e,
							duration: e,
							easing: n && t || t && !y(t) && t
						};
						return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
							y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
						}, i
					}, C.fn.extend({
						fadeTo: function(e, t, n, i) {
							return this.filter(de).css("opacity", 0).show().end().animate({
								opacity: t
							}, e, n, i)
						},
						animate: function(e, t, n, i) {
							var r = C.isEmptyObject(e),
								a = C.speed(t, n, i),
								o = function() {
									var t = gt(this, C.extend({}, e), a);
									(r || Z.get(this, "finish")) && t.stop(!0)
								};
							return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
						},
						stop: function(e, t, n) {
							var i = function(e) {
								var t = e.stop;
								delete e.stop, t(n)
							};
							return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
								var t = !0,
									r = null != e && e + "queueHooks",
									a = C.timers,
									o = Z.get(this);
								if(r) o[r] && o[r].stop && i(o[r]);
								else
									for(r in o) o[r] && o[r].stop && dt.test(r) && i(o[r]);
								for(r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
								!t && n || C.dequeue(this, e)
							}))
						},
						finish: function(e) {
							return !1 !== e && (e = e || "fx"), this.each((function() {
								var t, n = Z.get(this),
									i = n[e + "queue"],
									r = n[e + "queueHooks"],
									a = C.timers,
									o = i ? i.length : 0;
								for(n.finish = !0, C.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
								for(t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
								delete n.finish
							}))
						}
					}), C.each(["toggle", "show", "hide"], (function(e, t) {
						var n = C.fn[t];
						C.fn[t] = function(e, i, r) {
							return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, r)
						}
					})), C.each({
						slideDown: ft("show"),
						slideUp: ft("hide"),
						slideToggle: ft("toggle"),
						fadeIn: {
							opacity: "show"
						},
						fadeOut: {
							opacity: "hide"
						},
						fadeToggle: {
							opacity: "toggle"
						}
					}, (function(e, t) {
						C.fn[e] = function(e, n, i) {
							return this.animate(t, e, n, i)
						}
					})), C.timers = [], C.fx.tick = function() {
						var e, t = 0,
							n = C.timers;
						for(st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
						n.length || C.fx.stop(), st = void 0
					}, C.fx.timer = function(e) {
						C.timers.push(e), C.fx.start()
					}, C.fx.interval = 13, C.fx.start = function() {
						lt || (lt = !0, ut())
					}, C.fx.stop = function() {
						lt = null
					}, C.fx.speeds = {
						slow: 600,
						fast: 200,
						_default: 400
					}, C.fn.delay = function(e, t) {
						return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, i) {
							var r = n.setTimeout(t, e);
							i.stop = function() {
								n.clearTimeout(r)
							}
						}))
					},
					function() {
						var e = x.createElement("input"),
							t = x.createElement("select").appendChild(x.createElement("option"));
						e.type = "checkbox", b.checkOn = "" !== e.value, b.optSelected = t.selected, (e = x.createElement("input")).value = "t", e.type = "radio", b.radioValue = "t" === e.value
					}();
				var mt, vt = C.expr.attrHandle;
				C.fn.extend({
					attr: function(e, t) {
						return $(this, C.attr, e, t, arguments.length > 1)
					},
					removeAttr: function(e) {
						return this.each((function() {
							C.removeAttr(this, e)
						}))
					}
				}), C.extend({
					attr: function(e, t, n) {
						var i, r, o = e.nodeType;
						if(3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === a ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
					},
					attrHooks: {
						type: {
							set: function(e, t) {
								if(!b.radioValue && "radio" === t && N(e, "input")) {
									var n = e.value;
									return e.setAttribute("type", t), n && (e.value = n), t
								}
							}
						}
					},
					removeAttr: function(e, t) {
						var n, i = 0,
							r = t && t.match(M);
						if(r && 1 === e.nodeType)
							for(; n = r[i++];) e.removeAttribute(n)
					}
				}), mt = {
					set: function(e, t, n) {
						return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
					}
				}, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
					var n = vt[t] || C.find.attr;
					vt[t] = function(e, t, i) {
						var r, a, o = t.toLowerCase();
						return i || (a = vt[o], vt[o] = r, r = null != n(e, t, i) ? o : null, vt[o] = a), r
					}
				}));
				var bt = /^(?:input|select|textarea|button)$/i,
					yt = /^(?:a|area)$/i;

				function wt(e) {
					return(e.match(M) || []).join(" ")
				}

				function xt(e) {
					return e.getAttribute && e.getAttribute("class") || ""
				}

				function _t(e) {
					return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
				}
				C.fn.extend({
					prop: function(e, t) {
						return $(this, C.prop, e, t, arguments.length > 1)
					},
					removeProp: function(e) {
						return this.each((function() {
							delete this[C.propFix[e] || e]
						}))
					}
				}), C.extend({
					prop: function(e, t, n) {
						var i, r, a = e.nodeType;
						if(3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
					},
					propHooks: {
						tabIndex: {
							get: function(e) {
								var t = C.find.attr(e, "tabindex");
								return t ? parseInt(t, 10) : bt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
							}
						}
					},
					propFix: {
						for: "htmlFor",
						class: "className"
					}
				}), b.optSelected || (C.propHooks.selected = {
					get: function(e) {
						var t = e.parentNode;
						return t && t.parentNode && t.parentNode.selectedIndex, null
					},
					set: function(e) {
						var t = e.parentNode;
						t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
					}
				}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
					C.propFix[this.toLowerCase()] = this
				})), C.fn.extend({
					addClass: function(e) {
						var t, n, i, r, a, o, s, l = 0;
						if(y(e)) return this.each((function(t) {
							C(this).addClass(e.call(this, t, xt(this)))
						}));
						if((t = _t(e)).length)
							for(; n = this[l++];)
								if(r = xt(n), i = 1 === n.nodeType && " " + wt(r) + " ") {
									for(o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
									r !== (s = wt(i)) && n.setAttribute("class", s)
								}
						return this
					},
					removeClass: function(e) {
						var t, n, i, r, a, o, s, l = 0;
						if(y(e)) return this.each((function(t) {
							C(this).removeClass(e.call(this, t, xt(this)))
						}));
						if(!arguments.length) return this.attr("class", "");
						if((t = _t(e)).length)
							for(; n = this[l++];)
								if(r = xt(n), i = 1 === n.nodeType && " " + wt(r) + " ") {
									for(o = 0; a = t[o++];)
										for(; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
									r !== (s = wt(i)) && n.setAttribute("class", s)
								}
						return this
					},
					toggleClass: function(e, t) {
						var n = typeof e,
							i = "string" === n || Array.isArray(e);
						return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
							C(this).toggleClass(e.call(this, n, xt(this), t), t)
						})) : this.each((function() {
							var t, r, a, o;
							if(i)
								for(r = 0, a = C(this), o = _t(e); t = o[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
							else void 0 !== e && "boolean" !== n || ((t = xt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
						}))
					},
					hasClass: function(e) {
						var t, n, i = 0;
						for(t = " " + e + " "; n = this[i++];)
							if(1 === n.nodeType && (" " + wt(xt(n)) + " ").indexOf(t) > -1) return !0;
						return !1
					}
				});
				var kt = /\r/g;
				C.fn.extend({
					val: function(e) {
						var t, n, i, r = this[0];
						return arguments.length ? (i = y(e), this.each((function(n) {
							var r;
							1 === this.nodeType && (null == (r = i ? e.call(this, n, C(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = C.map(r, (function(e) {
								return null == e ? "" : e + ""
							}))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
						}))) : r ? (t = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(kt, "") : null == n ? "" : n : void 0
					}
				}), C.extend({
					valHooks: {
						option: {
							get: function(e) {
								var t = C.find.attr(e, "value");
								return null != t ? t : wt(C.text(e))
							}
						},
						select: {
							get: function(e) {
								var t, n, i, r = e.options,
									a = e.selectedIndex,
									o = "select-one" === e.type,
									s = o ? null : [],
									l = o ? a + 1 : r.length;
								for(i = a < 0 ? l : o ? a : 0; i < l; i++)
									if(((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
										if(t = C(n).val(), o) return t;
										s.push(t)
									}
								return s
							},
							set: function(e, t) {
								for(var n, i, r = e.options, a = C.makeArray(t), o = r.length; o--;)((i = r[o]).selected = C.inArray(C.valHooks.option.get(i), a) > -1) && (n = !0);
								return n || (e.selectedIndex = -1), a
							}
						}
					}
				}), C.each(["radio", "checkbox"], (function() {
					C.valHooks[this] = {
						set: function(e, t) {
							if(Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
						}
					}, b.checkOn || (C.valHooks[this].get = function(e) {
						return null === e.getAttribute("value") ? "on" : e.value
					})
				})), b.focusin = "onfocusin" in n;
				var St = /^(?:focusinfocus|focusoutblur)$/,
					Ct = function(e) {
						e.stopPropagation()
					};
				C.extend(C.event, {
					trigger: function(e, t, i, r) {
						var a, o, s, l, c, d, u, h, f = [i || x],
							p = g.call(e, "type") ? e.type : e,
							m = g.call(e, "namespace") ? e.namespace.split(".") : [];
						if(o = h = s = i = i || x, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(p + C.event.triggered) && (p.indexOf(".") > -1 && (m = p.split("."), p = m.shift(), m.sort()), c = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, t))) {
							if(!r && !u.noBubble && !w(i)) {
								for(l = u.delegateType || p, St.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
								s === (i.ownerDocument || x) && f.push(s.defaultView || s.parentWindow || n)
							}
							for(a = 0;
								(o = f[a++]) && !e.isPropagationStopped();) h = o, e.type = a > 1 ? l : u.bindType || p, (d = (Z.get(o, "events") || Object.create(null))[e.type] && Z.get(o, "handle")) && d.apply(o, t), (d = c && o[c]) && d.apply && Y(o) && (e.result = d.apply(o, t), !1 === e.result && e.preventDefault());
							return e.type = p, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !Y(i) || c && y(i[p]) && !w(i) && ((s = i[c]) && (i[c] = null), C.event.triggered = p, e.isPropagationStopped() && h.addEventListener(p, Ct), i[p](), e.isPropagationStopped() && h.removeEventListener(p, Ct), C.event.triggered = void 0, s && (i[c] = s)), e.result
						}
					},
					simulate: function(e, t, n) {
						var i = C.extend(new C.Event, n, {
							type: e,
							isSimulated: !0
						});
						C.event.trigger(i, null, t)
					}
				}), C.fn.extend({
					trigger: function(e, t) {
						return this.each((function() {
							C.event.trigger(e, t, this)
						}))
					},
					triggerHandler: function(e, t) {
						var n = this[0];
						if(n) return C.event.trigger(e, t, n, !0)
					}
				}), b.focusin || C.each({
					focus: "focusin",
					blur: "focusout"
				}, (function(e, t) {
					var n = function(e) {
						C.event.simulate(t, e.target, C.event.fix(e))
					};
					C.event.special[t] = {
						setup: function() {
							var i = this.ownerDocument || this.document || this,
								r = Z.access(i, t);
							r || i.addEventListener(e, n, !0), Z.access(i, t, (r || 0) + 1)
						},
						teardown: function() {
							var i = this.ownerDocument || this.document || this,
								r = Z.access(i, t) - 1;
							r ? Z.access(i, t, r) : (i.removeEventListener(e, n, !0), Z.remove(i, t))
						}
					}
				}));
				var At = n.location,
					Tt = {
						guid: Date.now()
					},
					Et = /\?/;
				C.parseXML = function(e) {
					var t;
					if(!e || "string" != typeof e) return null;
					try {
						t = (new n.DOMParser).parseFromString(e, "text/xml")
					} catch(e) {
						t = void 0
					}
					return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
				};
				var It = /\[\]$/,
					jt = /\r?\n/g,
					Nt = /^(?:submit|button|image|reset|file)$/i,
					Pt = /^(?:input|select|textarea|keygen)/i;

				function zt(e, t, n, i) {
					var r;
					if(Array.isArray(t)) C.each(t, (function(t, r) {
						n || It.test(e) ? i(e, r) : zt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
					}));
					else if(n || "object" !== S(t)) i(e, t);
					else
						for(r in t) zt(e + "[" + r + "]", t[r], n, i)
				}
				C.param = function(e, t) {
					var n, i = [],
						r = function(e, t) {
							var n = y(t) ? t() : t;
							i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
						};
					if(null == e) return "";
					if(Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
						r(this.name, this.value)
					}));
					else
						for(n in e) zt(n, e[n], t, r);
					return i.join("&")
				}, C.fn.extend({
					serialize: function() {
						return C.param(this.serializeArray())
					},
					serializeArray: function() {
						return this.map((function() {
							var e = C.prop(this, "elements");
							return e ? C.makeArray(e) : this
						})).filter((function() {
							var e = this.type;
							return this.name && !C(this).is(":disabled") && Pt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ve.test(e))
						})).map((function(e, t) {
							var n = C(this).val();
							return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
								return {
									name: t.name,
									value: e.replace(jt, "\r\n")
								}
							})) : {
								name: t.name,
								value: n.replace(jt, "\r\n")
							}
						})).get()
					}
				});
				var Lt = /%20/g,
					Dt = /#.*$/,
					Ot = /([?&])_=[^&]*/,
					Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
					Bt = /^(?:GET|HEAD)$/,
					Mt = /^\/\//,
					qt = {},
					Ft = {},
					Ut = "*/".concat("*"),
					Ht = x.createElement("a");

				function Wt(e) {
					return function(t, n) {
						"string" != typeof t && (n = t, t = "*");
						var i, r = 0,
							a = t.toLowerCase().match(M) || [];
						if(y(n))
							for(; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
					}
				}

				function Xt(e, t, n, i) {
					var r = {},
						a = e === Ft;

					function o(s) {
						var l;
						return r[s] = !0, C.each(e[s] || [], (function(e, s) {
							var c = s(t, n, i);
							return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
						})), l
					}
					return o(t.dataTypes[0]) || !r["*"] && o("*")
				}

				function $t(e, t) {
					var n, i, r = C.ajaxSettings.flatOptions || {};
					for(n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
					return i && C.extend(!0, e, i), e
				}
				Ht.href = At.href, C.extend({
					active: 0,
					lastModified: {},
					etag: {},
					ajaxSettings: {
						url: At.href,
						type: "GET",
						isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
						global: !0,
						processData: !0,
						async: !0,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						accepts: {
							"*": Ut,
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
							"text json": JSON.parse,
							"text xml": C.parseXML
						},
						flatOptions: {
							url: !0,
							context: !0
						}
					},
					ajaxSetup: function(e, t) {
						return t ? $t($t(e, C.ajaxSettings), t) : $t(C.ajaxSettings, e)
					},
					ajaxPrefilter: Wt(qt),
					ajaxTransport: Wt(Ft),
					ajax: function(e, t) {
						"object" == typeof e && (t = e, e = void 0), t = t || {};
						var i, r, a, o, s, l, c, d, u, h, f = C.ajaxSetup({}, t),
							p = f.context || f,
							g = f.context && (p.nodeType || p.jquery) ? C(p) : C.event,
							m = C.Deferred(),
							v = C.Callbacks("once memory"),
							b = f.statusCode || {},
							y = {},
							w = {},
							_ = "canceled",
							k = {
								readyState: 0,
								getResponseHeader: function(e) {
									var t;
									if(c) {
										if(!o)
											for(o = {}; t = Rt.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
										t = o[e.toLowerCase() + " "]
									}
									return null == t ? null : t.join(", ")
								},
								getAllResponseHeaders: function() {
									return c ? a : null
								},
								setRequestHeader: function(e, t) {
									return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, y[e] = t), this
								},
								overrideMimeType: function(e) {
									return null == c && (f.mimeType = e), this
								},
								statusCode: function(e) {
									var t;
									if(e)
										if(c) k.always(e[k.status]);
										else
											for(t in e) b[t] = [b[t], e[t]];
									return this
								},
								abort: function(e) {
									var t = e || _;
									return i && i.abort(t), S(0, t), this
								}
							};
						if(m.promise(k), f.url = ((e || f.url || At.href) + "").replace(Mt, At.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [""], null == f.crossDomain) {
							l = x.createElement("a");
							try {
								l.href = f.url, l.href = l.href, f.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host
							} catch(e) {
								f.crossDomain = !0
							}
						}
						if(f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Xt(qt, f, t, k), c) return k;
						for(u in (d = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Bt.test(f.type), r = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Et.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Ot, "$1"), h = (Et.test(r) ? "&" : "?") + "_=" + Tt.guid++ + h), f.url = r + h), f.ifModified && (C.lastModified[r] && k.setRequestHeader("If-Modified-Since", C.lastModified[r]), C.etag[r] && k.setRequestHeader("If-None-Match", C.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(u, f.headers[u]);
						if(f.beforeSend && (!1 === f.beforeSend.call(p, k, f) || c)) return k.abort();
						if(_ = "abort", v.add(f.complete), k.done(f.success), k.fail(f.error), i = Xt(Ft, f, t, k)) {
							if(k.readyState = 1, d && g.trigger("ajaxSend", [k, f]), c) return k;
							f.async && f.timeout > 0 && (s = n.setTimeout((function() {
								k.abort("timeout")
							}), f.timeout));
							try {
								c = !1, i.send(y, S)
							} catch(e) {
								if(c) throw e;
								S(-1, e)
							}
						} else S(-1, "No Transport");

						function S(e, t, o, l) {
							var u, h, y, w, x, _ = t;
							c || (c = !0, s && n.clearTimeout(s), i = void 0, a = l || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, o && (w = function(e, t, n) {
								for(var i, r, a, o, s = e.contents, l = e.dataTypes;
									"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
								if(i)
									for(r in s)
										if(s[r] && s[r].test(i)) {
											l.unshift(r);
											break
										}
								if(l[0] in n) a = l[0];
								else {
									for(r in n) {
										if(!l[0] || e.converters[r + " " + l[0]]) {
											a = r;
											break
										}
										o || (o = r)
									}
									a = a || o
								}
								if(a) return a !== l[0] && l.unshift(a), n[a]
							}(f, k, o)), !u && C.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function() {}), w = function(e, t, n, i) {
								var r, a, o, s, l, c = {},
									d = e.dataTypes.slice();
								if(d[1])
									for(o in e.converters) c[o.toLowerCase()] = e.converters[o];
								for(a = d.shift(); a;)
									if(e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
										if("*" === a) a = l;
										else if("*" !== l && l !== a) {
									if(!(o = c[l + " " + a] || c["* " + a]))
										for(r in c)
											if((s = r.split(" "))[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
												!0 === o ? o = c[r] : !0 !== c[r] && (a = s[0], d.unshift(s[1]));
												break
											}
									if(!0 !== o)
										if(o && e.throws) t = o(t);
										else try {
											t = o(t)
										} catch(e) {
											return {
												state: "parsererror",
												error: o ? e : "No conversion from " + l + " to " + a
											}
										}
								}
								return {
									state: "success",
									data: t
								}
							}(f, w, k, u), u ? (f.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (C.lastModified[r] = x), (x = k.getResponseHeader("etag")) && (C.etag[r] = x)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, h = w.data, u = !(y = w.error))) : (y = _, !e && _ || (_ = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || _) + "", u ? m.resolveWith(p, [h, _, k]) : m.rejectWith(p, [k, _, y]), k.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? h : y]), v.fireWith(p, [k, _]), d && (g.trigger("ajaxComplete", [k, f]), --C.active || C.event.trigger("ajaxStop")))
						}
						return k
					},
					getJSON: function(e, t, n) {
						return C.get(e, t, n, "json")
					},
					getScript: function(e, t) {
						return C.get(e, void 0, t, "script")
					}
				}), C.each(["get", "post"], (function(e, t) {
					C[t] = function(e, n, i, r) {
						return y(n) && (r = r || i, i = n, n = void 0), C.ajax(C.extend({
							url: e,
							type: t,
							dataType: r,
							data: n,
							success: i
						}, C.isPlainObject(e) && e))
					}
				})), C.ajaxPrefilter((function(e) {
					var t;
					for(t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
				})), C._evalUrl = function(e, t, n) {
					return C.ajax({
						url: e,
						type: "GET",
						dataType: "script",
						cache: !0,
						async: !1,
						global: !1,
						converters: {
							"text script": function() {}
						},
						dataFilter: function(e) {
							C.globalEval(e, t, n)
						}
					})
				}, C.fn.extend({
					wrapAll: function(e) {
						var t;
						return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
							for(var e = this; e.firstElementChild;) e = e.firstElementChild;
							return e
						})).append(this)), this
					},
					wrapInner: function(e) {
						return y(e) ? this.each((function(t) {
							C(this).wrapInner(e.call(this, t))
						})) : this.each((function() {
							var t = C(this),
								n = t.contents();
							n.length ? n.wrapAll(e) : t.append(e)
						}))
					},
					wrap: function(e) {
						var t = y(e);
						return this.each((function(n) {
							C(this).wrapAll(t ? e.call(this, n) : e)
						}))
					},
					unwrap: function(e) {
						return this.parent(e).not("body").each((function() {
							C(this).replaceWith(this.childNodes)
						})), this
					}
				}), C.expr.pseudos.hidden = function(e) {
					return !C.expr.pseudos.visible(e)
				}, C.expr.pseudos.visible = function(e) {
					return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
				}, C.ajaxSettings.xhr = function() {
					try {
						return new n.XMLHttpRequest
					} catch(e) {}
				};
				var Vt = {
						0: 200,
						1223: 204
					},
					Gt = C.ajaxSettings.xhr();
				b.cors = !!Gt && "withCredentials" in Gt, b.ajax = Gt = !!Gt, C.ajaxTransport((function(e) {
					var t, i;
					if(b.cors || Gt && !e.crossDomain) return {
						send: function(r, a) {
							var o, s = e.xhr();
							if(s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
								for(o in e.xhrFields) s[o] = e.xhrFields[o];
							for(o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(o, r[o]);
							t = function(e) {
								return function() {
									t && (t = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
										binary: s.response
									} : {
										text: s.responseText
									}, s.getAllResponseHeaders()))
								}
							}, s.onload = t(), i = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
								4 === s.readyState && n.setTimeout((function() {
									t && i()
								}))
							}, t = t("abort");
							try {
								s.send(e.hasContent && e.data || null)
							} catch(e) {
								if(t) throw e
							}
						},
						abort: function() {
							t && t()
						}
					}
				})), C.ajaxPrefilter((function(e) {
					e.crossDomain && (e.contents.script = !1)
				})), C.ajaxSetup({
					accepts: {
						script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
					},
					contents: {
						script: /\b(?:java|ecma)script\b/
					},
					converters: {
						"text script": function(e) {
							return C.globalEval(e), e
						}
					}
				}), C.ajaxPrefilter("script", (function(e) {
					void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
				})), C.ajaxTransport("script", (function(e) {
					var t, n;
					if(e.crossDomain || e.scriptAttrs) return {
						send: function(i, r) {
							t = C("<script>").attr(e.scriptAttrs || {}).prop({
								charset: e.scriptCharset,
								src: e.url
							}).on("load error", n = function(e) {
								t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
							}), x.head.appendChild(t[0])
						},
						abort: function() {
							n && n()
						}
					}
				}));
				var Qt, Kt = [],
					Yt = /(=)\?(?=&|$)|\?\?/;
				C.ajaxSetup({
					jsonp: "callback",
					jsonpCallback: function() {
						var e = Kt.pop() || C.expando + "_" + Tt.guid++;
						return this[e] = !0, e
					}
				}), C.ajaxPrefilter("json jsonp", (function(e, t, i) {
					var r, a, o, s = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
					if(s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
						return o || C.error(r + " was not called"), o[0]
					}, e.dataTypes[0] = "json", a = n[r], n[r] = function() {
						o = arguments
					}, i.always((function() {
						void 0 === a ? C(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && y(a) && a(o[0]), o = a = void 0
					})), "script"
				})), b.createHTMLDocument = ((Qt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), C.parseHTML = function(e, t, n) {
					return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(i)) : t = x), a = !n && [], (r = P.exec(e)) ? [t.createElement(r[1])] : (r = Se([e], t, a), a && a.length && C(a).remove(), C.merge([], r.childNodes)));
					var i, r, a
				}, C.fn.load = function(e, t, n) {
					var i, r, a, o = this,
						s = e.indexOf(" ");
					return s > -1 && (i = wt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && C.ajax({
						url: e,
						type: r || "GET",
						dataType: "html",
						data: t
					}).done((function(e) {
						a = arguments, o.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
					})).always(n && function(e, t) {
						o.each((function() {
							n.apply(this, a || [e.responseText, t, e])
						}))
					}), this
				}, C.expr.pseudos.animated = function(e) {
					return C.grep(C.timers, (function(t) {
						return e === t.elem
					})).length
				}, C.offset = {
					setOffset: function(e, t, n) {
						var i, r, a, o, s, l, c = C.css(e, "position"),
							d = C(e),
							u = {};
						"static" === c && (e.style.position = "relative"), s = d.offset(), a = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? (o = (i = d.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (u.top = t.top - s.top + o), null != t.left && (u.left = t.left - s.left + r), "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u))
					}
				}, C.fn.extend({
					offset: function(e) {
						if(arguments.length) return void 0 === e ? this : this.each((function(t) {
							C.offset.setOffset(this, e, t)
						}));
						var t, n, i = this[0];
						return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
							top: t.top + n.pageYOffset,
							left: t.left + n.pageXOffset
						}) : {
							top: 0,
							left: 0
						} : void 0
					},
					position: function() {
						if(this[0]) {
							var e, t, n, i = this[0],
								r = {
									top: 0,
									left: 0
								};
							if("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
							else {
								for(t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
								e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
							}
							return {
								top: t.top - r.top - C.css(i, "marginTop", !0),
								left: t.left - r.left - C.css(i, "marginLeft", !0)
							}
						}
					},
					offsetParent: function() {
						return this.map((function() {
							for(var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
							return e || se
						}))
					}
				}), C.each({
					scrollLeft: "pageXOffset",
					scrollTop: "pageYOffset"
				}, (function(e, t) {
					var n = "pageYOffset" === t;
					C.fn[e] = function(i) {
						return $(this, (function(e, i, r) {
							var a;
							if(w(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[i];
							a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
						}), e, i, arguments.length)
					}
				})), C.each(["top", "left"], (function(e, t) {
					C.cssHooks[t] = Ge(b.pixelPosition, (function(e, n) {
						if(n) return n = Ve(e, t), He.test(n) ? C(e).position()[t] + "px" : n
					}))
				})), C.each({
					Height: "height",
					Width: "width"
				}, (function(e, t) {
					C.each({
						padding: "inner" + e,
						content: t,
						"": "outer" + e
					}, (function(n, i) {
						C.fn[i] = function(r, a) {
							var o = arguments.length && (n || "boolean" != typeof r),
								s = n || (!0 === r || !0 === a ? "margin" : "border");
							return $(this, (function(t, n, r) {
								var a;
								return w(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? C.css(t, n, s) : C.style(t, n, r, s)
							}), t, o ? r : void 0, o)
						}
					}))
				})), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
					C.fn[t] = function(e) {
						return this.on(t, e)
					}
				})), C.fn.extend({
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
					hover: function(e, t) {
						return this.mouseenter(e).mouseleave(t || e)
					}
				}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
					C.fn[t] = function(e, n) {
						return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
					}
				}));
				var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				C.proxy = function(e, t) {
					var n, i, r;
					if("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = c.call(arguments, 2), (r = function() {
						return e.apply(t || this, i.concat(c.call(arguments)))
					}).guid = e.guid = e.guid || C.guid++, r
				}, C.holdReady = function(e) {
					e ? C.readyWait++ : C.ready(!0)
				}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = N, C.isFunction = y, C.isWindow = w, C.camelCase = K, C.type = S, C.now = Date.now, C.isNumeric = function(e) {
					var t = C.type(e);
					return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
				}, C.trim = function(e) {
					return null == e ? "" : (e + "").replace(Jt, "")
				}, void 0 === (i = function() {
					return C
				}.apply(t, [])) || (e.exports = i);
				var Zt = n.jQuery,
					en = n.$;
				return C.noConflict = function(e) {
					return n.$ === C && (n.$ = en), e && n.jQuery === C && (n.jQuery = Zt), C
				}, void 0 === r && (n.jQuery = n.$ = C), C
			}))
		},
		57: function(e, t, n) {
			var i, r, a;
			/*!
			 * jQuery UI :data 1.12.1
			 * http://jqueryui.com
			 *
			 * Copyright jQuery Foundation and other contributors
			 * Released under the MIT license.
			 * http://jquery.org/license
			 */
			r = [n(0), n(18)], void 0 === (a = "function" == typeof(i = function(e) {
				return e.extend(e.expr[":"], {
					data: e.expr.createPseudo ? e.expr.createPseudo((function(t) {
						return function(n) {
							return !!e.data(n, t)
						}
					})) : function(t, n, i) {
						return !!e.data(t, i[3])
					}
				})
			}) ? i.apply(t, r) : i) || (e.exports = a)
		},
		59: function(e, t, n) {
			"use strict";
			var i = n(54),
				r = n(25);
			var a = class extends i.a {
					constructor() {
						super("data-dz-ui")
					}
					attach_object(e, t, n) {
						if(n && n.uinames)
							for(const r of n.uinames) r != e && (Object.prototype.hasOwnProperty.call(this._attached, r) || (this._attached[r] = new WeakMap), this._attached[r].set(t, n), Object(i.b)(t, "data-dz-ui", r))
					}
					detach_object(e, t, n) {
						if(n && n.uinames)
							for(const i of n.uinames) i != e && Object.prototype.hasOwnProperty.call(this._attached, i) && this._attached[i].delete(t)
					}
					registerJQUI(e, t) {
						t || (t = e.toLowerCase()), this.register({
							[t]: {
								attach: t => t[e](),
								detach(t) {
									t[e]("destroy")
								}
							}
						})
					}
					registerClass(e, t) {
						this.register({
							[e]: {
								attach() {
									return new t(...arguments)
								}
							}
						})
					}
					registerFactory(e, t) {
						this.register({
							[e]: {
								attach() {
									return t(...arguments)
								}
							}
						})
					}
					registerObjects(e) {
						const t = {};
						for(const n of Object.keys(e)) {
							const i = e[n],
								a = class extends r.c {
									constructor() {
										super(...arguments), i.attach && i.attach.call(this, this.element)
									}
									detach() {
										i.detach && i.detach.call(this, this.element)
									}
								};
							t[n] = {
								attach() {
									return new a(...arguments)
								}
							}
						}
						this.register(t)
					}
				},
				o = n(8),
				s = n(24),
				l = n(2),
				c = n(0),
				d = n.n(c),
				u = n(41);
			const h = new class extends a {
				_addJQuery(e, t) {
					(t = l.c(t, {
						jqueryname: !0
					})).jqueryname && (!0 === t.jqueryname && (t.jqueryname = e), d.a.fn[t.jqueryname] = function(e, t) {
						return function(...n) {
							if("function" == typeof n[0]) {
								l.e(n, 1, 2);
								const t = n[0],
									i = n[1];
								return this.each((function(n) {
									const r = d()(this).getUi(e);
									t.call(i || r, r, n)
								})), this
							}
							if("string" == typeof n[0]) {
								l.e(n, 1, null);
								const t = n[0],
									i = n.slice(1);
								let r = this;
								return this.each((function(n) {
									const a = d()(this).getUi(e)[t](...i);
									0 == n && void 0 !== r && (r = a)
								})), r
							}
							l.e(n, 0, null);
							let i = this.getUi(e);
							return i || (t.create(this, e, ...n), i = this.getUi(e)), i
						}
					}(e, this))
				}
				registerClass(e, t, n) {
					super.registerClass(e, t), this._addJQuery(e, n)
				}
				registerFactory(e, t, n) {
					super.registerFactory(e, t), this._addJQuery(e, n)
				}
			};
			o.a.on("htmlInserted", (function(e) {
				h.attach(e)
			})), o.a.on("htmlRemove", (function(e) {
				h.detach(e)
			})), Object(s.a)("dom", (function() {
				Object(u.polyfillXslt)(document), h.manage(document)
			})), d.a.fn.attachUi = function(e, ...t) {
				return h.create(this, e, ...t), this
			}, d.a.fn.getUi = function(e) {
				if(0 != this.length) return h.access(this, e)
			}, d.a.fn.getChildUi = function(e) {
				return this.find("[data-dz-ui~='" + e + "']").getUi(e)
			}, d.a.fn.getChildUis = function(e) {
				return this.find("[data-dz-ui~='" + e + "']").map(t => h.access(t, e))
			}, d.a.fn.getParentUi = function(e) {
				return this.closest("[data-dz-ui~='" + e + "']").getUi(e)
			};
			t.a = h
		},
		64: function(e, t, n) {
			"use strict";
			var i = n(0),
				r = n.n(i);
			r.a.fn.forEach = function(e, t) {
				this.each((function() {
					e.call(t, this)
				}))
			}, r.a.fn.every = function() {
				return Array.prototype.every.apply(this, arguments)
			}, r.a.fn.any = function() {
				return Array.prototype.any.apply(this, arguments)
			}
		},
		69: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var i = n(0),
				r = n.n(i),
				a = n(2),
				o = n(31),
				s = n(25);
			const l = [32, 33, 34, 35, 36, 37, 38, 39, 40];
			const c = Object(o.e)(class extends s.c {
				constructor(e) {
					a.e(arguments, 1);
					var t = r()('<div class="ui-widget-overlay ui-helper-hidden"></div>');
					super(t), this.addUiName("modal"), e = a.c(e, {
						parent: r()("body"),
						scroll: !0,
						zIndex: 5
					}), t.appendTo(e.parent), t.css({
						zIndex: e.zIndex
					}), this.__toggle = new o.d(t, {
						show: {
							animation: {
								backgroundColorAlpha: .6
							},
							display: "block"
						},
						hide: {
							animation: {
								backgroundColorAlpha: .01
							},
							display: "none"
						}
					}), this.on("hidden", () => {
						this.enable()
					}), e.scroll || (this.lockToScrollPos = [0, 0], this.on("shown", () => {
						this.disable()
					}), this.on("hidden", () => {
						this.enable()
					}))
				}
				disable() {
					var e = r()(window),
						t = parseInt(this.element.css("zIndex"), 10),
						n = r()("body").children(":visible").filter((function() {
							return parseInt(r()(this).css("zIndex"), 10) > t
						}));
					e.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", (function(e) {
						var t = r()(e.target).parentsUntil("body").last();
						n.is(t) || e.preventDefault()
					})), this.element.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", (function(e) {
						e.preventDefault(), e.stopImmediatePropagation()
					})), this.lockToScrollPos = [e.scrollLeft(), e.scrollTop()], e.on("scroll.disablescroll", () => {
						e.scrollLeft(this.lockToScrollPos[0]), e.scrollTop(this.lockToScrollPos[1])
					}), r()(document).on("keydown.disablescroll", e => {
						r()(":focus").hasClass("ql-editor") || r()(":focus").filter("input, textarea").length > 0 && 33 != e.keyCode && 34 != e.keyCode || l.indexOf(e.keyCode) >= 0 && e.preventDefault()
					})
				}
				enable() {
					r()(window).add(document).off(".disablescroll")
				}
				destroy() {
					this.element.remove()
				}
			})
		},
		70: function(e, t, n) {
			"use strict";
			var i = n(1),
				r = n(49),
				a = n(0),
				o = n.n(a),
				s = n(21);
			n(64);
			o.a.fn.findSelf = function(e) {
				return this.find(e).addBack(e)
			}, o.a.fn.flatFind = function(e) {
				var t = this.find(e),
					n = t.find(e);
				return t.not(n)
			}, o.a.fn.randomize = function(e) {
				return this.each((function() {
					var t = o()(this),
						n = t.children(e);
					for(let e = 0; e < n.length; e++) n[e].setAttribute("rand", Math.random());
					n.sort((function(e, t) {
						return parseFloat(e.getAttribute("rand")) - parseFloat(t.getAttribute("rand"))
					})), t.remove(e);
					for(let e = 0; e < n.length; e++) t.append(n[e])
				}))
			}, o.a.fn.sortBy = function(e, t) {
				return this.each((function() {
					var n = o()(this),
						i = n.children(e);
					i.sort((function(e, n) {
						return parseFloat(e.getAttribute(t)) - parseFloat(n.getAttribute(t))
					})), n.remove(e);
					for(var r = 0; r < i.length; r++) n.append(i[r])
				}))
			}, o.a.fn.reflexive = function(e, t) {
				var n = this.filter(t),
					i = this.not(n)[e](t);
				return n.add(i)
			}, o.a.fn.addItem = function() {
				var e = this.closest("*[data-dz-mode='append']").children("*[data-dz-role='newobject']");
				if(o()(e).children("li").last().is(":visible")) {
					var t = o()(e).children("li").last().clone(),
						n = t.attr("data-dz-field-name"),
						i = t.attr("rel");
					i++;
					var r = n.replace(/\[\d*\]$/, "[" + i + "]");
					t.attr("rel", i), t.attr("data-dz-field-name", r), o()(t).find("*[name]").each((function() {
						o()(this).attr("name", o()(this).attr("name").replace(n, r))
					})), o()(t).find("*[data-dz-field-name]").each((function() {
						o()(this).attr("data-dz-field-name", o()(this).attr("data-dz-field-name").replace(n, r))
					})), o()(t).clearForm(), o()(e).append(t)
				} else o()(e).slideToggle(), o()(e.parentNode).find("h3 img, h3").toggleClass("rotated");
				return this
			}, o.a.fn.slideToogleIcon = function() {
				var e, t;
				return(e = o()(this).attr("aria-owns")) && (t = o()("#" + e + "[role='button']")), "none" == o()(this).css("display") ? (o()(t).animate({
					rotate: "0deg"
				}), o()(this).slideDown()) : (o()(t).animate({
					rotate: "-90deg"
				}), o()(this).slideUp())
			}, o.a.fn.dayPicker2 = function(e) {
				this.find("input.date").each((function() {
					var t = new Date;
					o()(this).val() || o()(this).val(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()), o()(this).next("div").datepicker({
						dateFormat: o.a.datepicker.ISO_8601,
						onSelect: function(t, n) {
							e.setDate(t)
						},
						defaultDate: o()(this).val()
					})
				}))
			}, o.a.fn.dayPicker = function() {
				this.find("input.date").each((function() {
					var e = this,
						t = new Date;
					o()(this).val() || o()(this).val(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()), o()(this).next("div").datepicker({
						dateFormat: o.a.datepicker.ISO_8601,
						onSelect: function(t, n) {
							o()(e).val(t)
						},
						defaultDate: o()(e).val()
					})
				}))
			}, o.a.fn.datepickers = function() {
				this.dayPicker(), this.weekPicker(), this.monthPicker()
			}, o.a.fn.hasAttr = function(e) {
				return void 0 !== this.attr(e)
			}, o.a.fn.pageload = r.a, o.a.addStyle = function(e) {
				var t = !1;
				if(document.createStyleSheet) try {
					document.createStyleSheet(e), t = !0
				} catch(e) {}
				t || o()("head").append(o()("<link>").attr({
					rel: "stylesheet",
					type: "text/css",
					href: e
				}))
			}, o.a.removeCSSRule = function(e) {
				var t, n = document.createElement("style");
				if(n.appendChild(document.createTextNode("")), document.head.appendChild(n), t = n.sheet, document.styleSheets)
					for(var r = 0; r < document.styleSheets.length; r++) {
						var a = document.styleSheets[r],
							o = 0,
							s = !1;
						do {
							var l;
							if(a.cssRules ? s = a.cssRules[o] : a.rules && (s = a.rules[o]), s)
								if("undefined" !== s.selectorText && (l = s.selectorText), l && l.toLowerCase().match(e)) {
									if(i.a("removeCSSRule", "editing: " + l), l = (l = (l = (l = l.replace(e, "")).replace(/^[\s,]*/g, "")).replace(/[\s,]*$/g, "")).replace(/(\s*,\s*)+/g, ","), "undefined" !== a.deleteRule) a.deleteRule(o);
									else {
										if("undefined" === a.removeRule) throw new Error("can't delete css rule");
										a.removeRule(o)
									}
									if("" != l) {
										var c = l + s.cssText.match(/\{.+\}/g);
										i.a("removeCSSRule", "rewriting: " + c), t.insertRule(c, 0)
									}
								}
							o++
						} while (s)
					}
				return !0
			}, o.a.fn.trash = function() {
				var e = this;
				return e.detach(), s.a(200).then((function() {
					e.remove()
				})), this.end()
			}, o.a.fn.trashContents = function() {
				return this.contents().trash(), this
			}, o.a.fn.root = function() {
				return this.closest(":root")
			};
			var l = function() {
				for(var e = document.createElement("div"), t = ["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"], n = t.shift(); n;) {
					if(void 0 !== e.style[n]) return n;
					n = t.shift()
				}
				return !1
			}();
			["", "X", "Y", "Z"].forEach(e => {
				var t = "rotate" + e;
				o.a.cssHooks[t] = {
					get: function(e) {
						if(l) {
							var n = e.style[l];
							if(n) {
								let e = new RegExp(".*" + t + "\\((.*)deg\\).*");
								return n.replace(e, "$1")
							}
							var i = window.getComputedStyle(e, null)[l];
							if("none" === i || i.match(/matrix\(1, *0, *0, *1, *0, *0\)/)) return "";
							var r = i.match(/matrix\([^,]+, *([^,]+),/);
							return Math.round(Math.asin(r[1]) * (180 / Math.PI))
						}
						return ""
					},
					set: function(e, n) {
						if(!l) return "";
						n = parseFloat(n, 10), e.style[l] = 0 == n ? "" : t + "(" + n % 360 + "deg)"
					}
				}, o.a.fx.step[t] = function(e) {
					o.a.cssHooks[t].set(e.elem, e.now)
				}
			}), o()(document).ready((function() {
				o()("body").on("dialogcreate", (function(e, t) {
					var n = e.target;
					n && "true" != n.getAttribute("data-dz-managed") && o()(n).parent().css("z-index", 100)
				}))
			}));
			o.a
		},
		8: function(e, t, n) {
			"use strict";
			var i = n(23),
				r = n(42);
			const a = new i.a;
			t.a = a, r.a.implement(a.on.bind(a))
		}
	}
]);
