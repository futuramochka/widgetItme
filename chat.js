  ! function(t, e) {
    e();
}(window, function() {
    return function(t) {
        var e = {};

        function i(a) {
            if (e[a]) return e[a].exports;
            var o = e[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, a) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: a
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(a, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return a
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "/", i(i.s = 26)
    }([function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return o
        }), i.d(e, "b", function() {
            return n
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };

        function o(t) {
            return function(e, i) {
                var n = o.prefix + t;
                "string" == typeof e && (n += "__" + e);
                var r = [n],
                    s = {};
                return "object" === (void 0 === e ? "undefined" : a(e)) ? s = e : "object" === (void 0 === i ? "undefined" : a(i)) && (s = i),
                    function(t) {
                        return Object.keys(t).filter(function(e) {
                            var i = t[e];
                            return i || 0 === i
                        }).map(function(e) {
                            var i = e.trim(),
                                a = t[e];
                            return !0 === a ? "_" + i : "_" + i + "_" + a
                        })
                    }(s).forEach(function(t) {
                        r.push(n + t)
                    }), r.join(" ")
            }
        }

        function n(t, e, i) {
            return o(t)(e, i).split(" ").pop() || ""
        }
        o.prefix = "ya-chat-"
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        }), i.d(e, "b", function() {
            return r
        }), i.d(e, "c", function() {
            return s
        });
        var a = i(5),
            o = i(14);
        Object(a.d)({
            project: "messenger-widget",
            version: "1.17.0",
            env: void 0
        });
        var n = a.d,
            r = function(t) {
                try {
                    t()
                } catch (t) {
                    throw Object(o.a)(t), t
                }
            };

        function s(t, e, i) {
            var a = i.value;
            return i.value = function() {
                try {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    a.apply(this, e)
                } catch (t) {
                    throw Object(o.a)(t), t
                }
            }, i
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return a
        });

        function a(t, e, i, a) {
            var o, n = arguments.length,
                r = n < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, a);
            else
                for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
            return n > 3 && r && Object.defineProperty(e, i, r), r
        }
    }, function(t, e, i) {
        "use strict";

        function a(t, e) {
            return null == e || "" === e ? "" : encodeURIComponent(t) + "=" + encodeURIComponent(String(e))
        }

        function o(t, e) {
            var i = -1 === t.search(/\?/) ? "?" : "&",
                o = function(t) {
                    return t.map(function(t) {
                        var e = t.name,
                            i = t.value;
                        return Array.isArray(i) ? i.map(function(t) {
                            return a(e, t)
                        }).filter(Boolean).join("&") : a(e, i)
                    }).filter(Boolean).join("&")
                }(Object.keys(e).map(function(t) {
                    return {
                        name: t,
                        value: e[t]
                    }
                }));
            return t + (o ? i + o : "")
        }

        function n() {
            return window.location.origin || window.location.protocol + "//" + window.location.host
        }

        function r(t) {
            return -1 !== t.search(/\.yandex-team\.ru$/)
        }
        i.d(e, "c", function() {
            return o
        }), i.d(e, "a", function() {
            return n
        }), i.d(e, "b", function() {
            return r
        })
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        }), i.d(e, "b", function() {
            return r
        }), i.d(e, "c", function() {
            return c
        });
        var a = i(9),
            o = "ru";

        function n(t) {
            var e = new RegExp(a.URL_REGEX_YANDEX_TLD + "$").exec(t);
            return e && e[1] || ""
        }

        function r(t) {
            return t && "net" !== t
        }
        var s, l, p = (s = window.location.hostname, r(l = n(s)) ? l : o);

        function c(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
            return t.replace(/\{tld\}/, e)
        }
    }, function(t, e, i) {
        "use strict";
        var a = function(t, e) {
            var i = function(t, e) {
                    return ["/path=" + t, e ? "/vars=" + e : "", "/cts=" + (new Date).getTime(), "/*"]
                }(t, e).join(""),
                a = r().clck;
            if (a && !(navigator && navigator.sendBeacon && navigator.sendBeacon(a, i)))
                if ("undefined" != typeof window && window.fetch) fetch(a, {
                    method: "POST",
                    body: i
                });
                else {
                    var o = new XMLHttpRequest;
                    o.open("POST", a), o.send(i)
                }
        };
        i.d(e, "d", function() {
            return n
        }), i.d(e, "b", function() {
            return r
        }), i.d(e, "a", function() {
            return s
        }), i.d(e, "c", function() {
            return c
        });
        var o = {
                clck: "https://yandex.ru/clck/click",
                project: "unknown",
                additional: {},
                level: "error"
            },
            n = function(t) {
                o = Object.assign({}, o, t)
            },
            r = function() {
                return o
            },
            s = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.filename || t.fileName || "",
                    i = t.error && t.error.stack || t.stack || "",
                    a = t.message || "";
                return {
                    file: e,
                    line: t.lineno || t.lineNumber,
                    col: t.colno || t.colNumber,
                    stack: i,
                    message: a,
                    additional: t.additional
                }
            };

        function l() {

        }
        var p = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r(),
                    o = {
                        "-url": t.file,
                        "-line": t.line,
                        "-col": t.col,
                        "-stack": t.stack,
                        "-env": i.env,
                        "-msg": t.message,
                        "-project": i.project,
                        "-page": t.page || i.page,
                        "-level": t.level,
                        "-version": i.version,
                        "-additional": e.additional,
                        "-ua": "undefined" != typeof navigator && navigator.userAgent,
                        "-ts": +new Date
                    };
                i.debug && l("[error-counter]", o), a(t.path, function(t) {
                    var e = [];
                    return Object.keys(t).map(function(i) {
                        if (t.hasOwnProperty(i) && (t[i] || 0 === t[i])) {
                            var a = encodeURIComponent(t[i]).replace(/\*/g, "%2A");
                            e.push(i + "=" + a)
                        }
                    }), e.join(",")
                }(o))
            },
            c = function(t) {
                var e = r();
                t.path = "690.2354";
                var i = "";
                try {
                    i = JSON.stringify(Object.assign({}, e.additional, t.additional))
                } catch (t) {
                    l("[error-counter] json.stringify:", t)
                }
                p(t, {
                    additional: i
                })
            }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "b", function() {
            return o
        }), i.d(e, "a", function() {
            return r
        }), i.d(e, "c", function() {
            return s
        });
        var a = !1;
        try {
            document.createEvent("TouchEvent"), a = !0
        } catch (t) {}
        var o = Math.max(window.screen.width, window.screen.height) < 900 && a;
        var n = window.navigator.userAgent,
            r = /iPad|iPhone|iPod/.test(n),
            s = function(t) {
                return /^((?!chrome|android).)*safari/i.test(t)
            }(n)
    }, function(t, e, i) {
        "use strict";
        var a = i(2),
            o = i(20),
            n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, i, a) {
                    return i && t(e.prototype, i), a && t(e, a), e
                }
            }();
        var r = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.listeners = {}
            }
            return n(t, [{
                key: "addListener",
                value: function(t, e) {
                    this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(e)
                }
            }, {
                key: "removeListener",
                value: function(t, e) {
                    this.listeners[t] && (this.listeners[t] = this.listeners[t].filter(function(t) {
                        return t !== e
                    }), this.listeners[t].length || this.removeAllListeners(t))
                }
            }, {
                key: "removeAllListeners",
                value: function(t) {
                    var e = this;
                    t ? this.listeners[t] && delete this.listeners[t] : Object.keys(this.listeners).forEach(function(t) {
                        return delete e.listeners[t]
                    })
                }
            }, {
                key: "emit",
                value: function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) i[a - 1] = arguments[a];
                    (this.listeners[t] || []).forEach(function(t) {
                        return t.apply(void 0, i)
                    })
                }
            }]), t
        }();

        function s(t) {
            try {
                t && t.parentNode && t.parentNode.removeChild(t)
            } catch (t) {}
        }
        var l = i(3),
            p = i(4),
            c = i(0),
            m = i(1),
            h = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, i, a) {
                    return i && t(e.prototype, i), a && t(e, a), e
                }
            }();
        var d = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.delayedMessages = [], this.isReady = !1, this.params = e, this.iframeOpenData = Object.assign({}, this.params.iframeOpenData)
                }
                return h(t, [{
                    key: "create",
                    value: function() {
                        this.reset(), this.iframe = document.createElement("iframe"), this.iframe.setAttribute("scrolling", "no"), this.iframe.src = this.params.url, this.iframe.className = Object(c.b)("messenger-iframe"), this.iframe.onerror = this.params.onError, this.params.allow && this.iframe.setAttribute("allow", this.params.allow.join("; ")), this.params.container.appendChild(this.iframe)
                    }
                }, {
                    key: "sendMessage",
                    value: function(t, e, i) {
                        if (this.isReady) this.sendMessageToIframe(t, e);
                        else {
                            i && this.removeDelayedMessages(t);
                            var a = e;
                            "iframe-open" === t && (e ? (a = e, this.iframeOpenData = e) : a = this.iframeOpenData), this.delayedMessages.push({
                                type: t,
                                payload: a
                            })
                        }
                    }
                }, {
                    key: "sendMessageToIframe",
                    value: function(t, e) {
                        var i = this.params.url.split("/").slice(0, 3).join("/");
                        i && 0 === i.indexOf("http") || (i = Object(l.a)()), this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage({
                            namespace: "messenger",
                            type: t,
                            payload: Object.assign({}, e, {
                                parentUrl: window.location.href
                            })
                        }, i)
                    }
                }, {
                    key: "sendDelayedMessages",
                    value: function() {
                        var t = this;
                        this.delayedMessages.forEach(function(e) {
                            t.sendMessage(e.type, e.payload)
                        }), this.delayedMessages = []
                    }
                }, {
                    key: "removeDelayedMessages",
                    value: function(t) {
                        this.delayedMessages = this.delayedMessages.filter(function(e) {
                            return e.type !== t
                        })
                    }
                }, {
                    key: "setVisible",
                    value: function() {
                        this.iframe && this.iframe.classList.add(Object(c.b)("messenger-iframe", {
                            visible: !0
                        }))
                    }
                }, {
                    key: "setReady",
                    value: function() {
                        this.isReady = !0, this.sendDelayedMessages(), this.setVisible()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.isReady = !1, this.delayedMessages = [], s(this.iframe), delete this.iframe
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reset(), delete this.params
                    }
                }]), t
            }(),
            u = d;
        a.a([m.c], d.prototype, "create", null), a.a([m.c], d.prototype, "sendMessage", null), a.a([m.c], d.prototype, "sendMessageToIframe", null), a.a([m.c], d.prototype, "sendDelayedMessages", null), a.a([m.c], d.prototype, "removeDelayedMessages", null), a.a([m.c], d.prototype, "setVisible", null), a.a([m.c], d.prototype, "setReady", null), a.a([m.c], d.prototype, "reset", null), a.a([m.c], d.prototype, "destroy", null), i.d(e, "c", function() {
            return b
        }), i.d(e, "b", function() {
            return f
        }), i.d(e, "a", function() {
            return g
        });
        var b, f, y = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var a = e[i];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e
            }
        }();
        ! function(t) {
            t.AUTH_CHANGE = "authChange", t.AUTH_REQUEST = "authRequest", t.CHAT_SHOW = "chatShow", t.CHAT_HIDE = "chatHide", t.CHAT_ENTER = "chatEnter", t.CHAT_LEAVE = "chatLeave", t.CHANNEL_SUBBSCRIBED = "channelSubscribed", t.ERROR = "error", t.MEMBERS_CHANGE = "membersChange", t.MESSAGE_SENT = "messageSent", t.READY = "ready", t.UNREAD_COUNTER_CHANGE = "unreadCounterChange"
        }(b || (b = {})),
        function(t) {
            t.AUTH = "auth", t.AUTH_REQUEST = "authRequest", t.CHAT_CHANGE = "chatChange", t.CHAT_LEAVE = "chatLeave", t.CHANNEL_SUBBSCRIBED = "channelSubscribed", t.CLOSE = "close", t.COUNTER = "counter", t.ERROR = "error", t.FULLSCREEN_ON = "fullscreenOn", t.FULLSCREEN_OFF = "fullscreenOff", t.MEMBERS = "members", t.READY = "ready", t.SEND_MESSAGE = "send-message", t.SHOW_CHAT = "showChat"
        }(f || (f = {}));
        var g = function(t) {
            function e() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.isChatVisible = !1, t.domElems = {}, t.isChatLoadFailed = !1, t.isChatCreated = !1, t.lastUnreadData = {}, t.ERROR_TIMEOUT = 3e4, Object(m.b)(function() {
                    window.addEventListener("message", t.handleMessage)
                }), t
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, r), y(e, [{
                key: "initMessengerIframe",
                value: function() {
                    this.messengerIframe = new u({
                        container: this.domElems.mount,
                        allow: this.options.iframeAllow,
                        iframeOpenData: {
                            guid: this.options.guid,
                            chatId: this.options.chatId,
                            inviteHash: this.options.inviteHash
                        },
                        onError: this.handleIframeError,
                        url: Object(p.c)(this.options.iframeUrl)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("message", this.handleMessage), this.messengerIframe.destroy(), this.clearErrorTimeout(), this.removeAllListeners(), Object.keys(this.domElems).forEach(function(e) {
                        s(t.domElems[e])
                    }), this.domElems = {}, this.destroyed = !0
                }
            }, {
                key: "sendServiceMeta",
                value: function(t) {
                    this.messengerIframe.sendMessage("serviceMeta", t, !0)
                }
            }, {
                key: "getIframeUrl",
                value: function(t) {
                    var e = Object.assign({
                            lang: t.lang,
                            parentOrigin: Object(l.a)(),
                            parentUrl: window.location.href,
                            serviceId: t.serviceId
                        }, t.iframeUrlParams),
                        i = Object(l.c)(Object(p.c)(t.iframeUrl || this.config.iframeUrl), e);
                    return t.chatId && (i += "#/chats/" + encodeURIComponent(t.chatId)), i
                }
            }, {
                key: "getDomElem",
                value: function(t) {
                    return this.domElems.widget.querySelector("." + t)
                }
            }, {
                key: "attachStyles",
                value: function() {
                    var t = document.createElement("style");
                    t.appendChild(document.createTextNode(this.options.styles)), this.domElems.styles = t, document.body.appendChild(t)
                }
            }, {
                key: "createMessengerIframe",
                value: function() {
                    this.messengerIframe.create(), this.hideError(), this.errorTimeout = window.setTimeout(this.showErrorOnTimeout, this.ERROR_TIMEOUT), this.showLoader()
                }
            }, {
                key: "handleIframeError",
                value: function() {
                    this.showErrorOnTimeout()
                }
            }, {
                key: "showErrorOnTimeout",
                value: function() {
                    this.emit(b.ERROR, {
                        code: "TIMEOUT"
                    }), this.messengerIframe.reset(), this.hideLoader(), this.showError(), this.isChatLoadFailed = !0
                }
            }, {
                key: "handleOnErrorRetryClick",
                value: function() {
                    this.createMessengerIframe()
                }
            }, {
                key: "handleMessage",
                value: function(t) {
                    var e = t.data;
                    if (e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (t) {}
                        if (e && e.type && "messenger" === e.namespace) {
                            if ("ready" === e.type) {
                                if (this.isChatCreated) return;
                                this.isChatCreated = !0, this.messengerIframe.setReady()
                            }
                            this.handleMessengerMessage(e.type, e.payload)
                        }
                    }
                }
            }, {
                key: "handleMessengerMessage",
                value: function(t, e) {
                    switch (t) {
                        case f.READY:
                            this.handleReadyMessage();
                            break;
                        case f.COUNTER:
                            this.handleUnreadCounter(Object.assign({}, e, {
                                from: "postMessage"
                            }));
                            break;
                        case f.CHAT_CHANGE:
                            this.emit(b.CHAT_ENTER, e);
                            break;
                        case f.CHAT_LEAVE:
                            this.emit(b.CHAT_LEAVE, e);
                            break;
                        case f.CHANNEL_SUBBSCRIBED:
                            this.emit(b.CHANNEL_SUBBSCRIBED, e);
                            break;
                        case f.MEMBERS:
                            this.emit(b.MEMBERS_CHANGE, e);
                            break;
                        case f.ERROR:
                            this.handleErrorMessage(e);
                            break;
                        case f.AUTH:
                            this.emit(b.AUTH_CHANGE, e);
                            break;
                        case f.FULLSCREEN_OFF:
                            this.cancelFullscreen();
                            break;
                        case f.FULLSCREEN_ON:
                            this.setFullscreen();
                            break;
                        case f.SEND_MESSAGE:
                            this.emit(b.MESSAGE_SENT, e);
                            break;
                        case f.AUTH_REQUEST:
                            this.emit(b.AUTH_REQUEST, e)
                    }
                }
            }, {
                key: "handleReadyMessage",
                value: function() {
                    this.emit(b.READY), this.hideLoader(), this.hideError(), this.isChatLoadFailed = !1, this.isChatCreated = !0
                }
            }, {
                key: "handleErrorMessage",
                value: function(t) {
                    this.emit(b.ERROR, t), t && "NEED_COOKIE" === t.code && (this.hideLoader(), this.hideError(), this.messengerIframe.setVisible())
                }
            }, {
                key: "handleUnreadCounter",
                value: function(t) {
                    var e = t.value,
                        i = void 0 === e ? 0 : e,
                        a = t.lastTimestamp;
                    if (i !== this.lastUnreadData.value || a !== this.lastUnreadData.lastTimestamp) return this.emit(b.UNREAD_COUNTER_CHANGE, {
                        value: i,
                        lastTimestamp: a
                    }), this.lastUnreadData = {
                        value: i,
                        lastTimestamp: a
                    }, this.lastUnreadData
                }
            }, {
                key: "showLoader",
                value: function() {
                    this.domElems.loader.classList.add(Object(c.b)("loader", {
                        visible: !0
                    }))
                }
            }, {
                key: "hideLoader",
                value: function() {
                    this.domElems.loader.classList.remove(Object(c.b)("loader", {
                        visible: !0
                    }))
                }
            }, {
                key: "showError",
                value: function() {
                    this.clearErrorTimeout(), this.domElems.error.classList.add(Object(c.b)("error", {
                        visible: !0
                    }))
                }
            }, {
                key: "hideError",
                value: function() {
                    this.clearErrorTimeout(), this.domElems.error.classList.remove(Object(c.b)("error", {
                        visible: !0
                    }))
                }
            }, {
                key: "clearErrorTimeout",
                value: function() {
                    window.clearTimeout(this.errorTimeout), this.errorTimeout = void 0
                }
            }, {
                key: "cancelFullscreen",
                value: function() {
                    document.body.style.overflowX = this.bodyOverflowX, document.body.style.overflowY = this.bodyOverflowY
                }
            }, {
                key: "setFullscreen",
                value: function() {
                    this.bodyOverflowX = document.body.style.overflowX, this.bodyOverflowY = document.body.style.overflowY, document.body.style.overflowX = "hidden", document.body.style.overflowY = "hidden"
                }
            }]), e
        }();
        a.a([m.c], g.prototype, "initMessengerIframe", null), a.a([m.c], g.prototype, "sendServiceMeta", null), a.a([o.a], g.prototype, "handleIframeError", null), a.a([o.a], g.prototype, "showErrorOnTimeout", null), a.a([o.a], g.prototype, "handleOnErrorRetryClick", null), a.a([o.a], g.prototype, "handleMessage", null)
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return r
        });
        var a = i(10),
            o = i(11),
            n = {
                ru: a,
                en: o
            };

        function r(t, e) {
            return (n[e] || {})[t] || ""
        }
    }, function(t, e) {
        function i(t) {
            return (t.match(/\./g) || []).length
        }
        var a = ["ua", "ru", "kz", "by", "com.tr", "com", "net", "uz", "fr", "com.ge", "az", "com.am", "co.il", "kg", "lv", "lt", "md", "tj", "tm", "ee"].sort(function(t, e) {
                return i(e) - i(t)
            }),
            o = "yandex\\.(" + a.map(function(t) {
                return t.replace(/\./g, "\\.")
            }).join("|") + ")";
        t.exports = {
            YANDEX_TLD: a,
            URL_REGEX_YANDEX_TLD: o
        }
    }, function(t) {
        t.exports = {
            close: "Р—Р°РєСЂС‹С‚СЊ",
            "error-title": "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‡Р°С‚",
            "error-try-again": "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·"
        }
    }, function(t) {
        t.exports = {
            close: "Close",
            "error-title": "Failed to load chat",
            "error-try-again": "Try again"
        }
    }, function(t, e, i) {
        "use strict";
        var a = i(0),
            o = i(8);
        e.a = function(t) {
            var e = Object(a.a)("error");
            return '\n        <div class="' + e({
                mobile: t.isMobile,
                theme: t.theme
            }) + '">\n            <div class="' + e("title") + '">' + Object(o.a)("error-title", t.lang) + '</div>\n            <div class="' + e("button") + '">' + Object(o.a)("error-try-again", t.lang) + "</div>\n        </div>\n    "
        }
    }, function(t, e, i) {
        "use strict";
        var a = i(0);
        e.a = function(t) {
            var e = Object(a.a)("loader");
            return '\n        <div class="' + e({
                theme: t
            }) + '">\n            <div class="' + e("spinner") + '"></div>\n        </div>\n    '
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        });
        var a = i(5),
            o = ["type", "additional", "level"],
            n = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = Object(a.a)(t);
                i.message = [e.message, i.message].filter(Boolean).join("; ") || "Empty error";
                for (var n = 0; n < o.length; n++) {
                    var r = o[n];
                    e[r] ? i[r] = e[r] : t && t[r] && (i[r] = t[r])
                }
                Object(a.c)(i)
            }
    }, , , function(t, e) {
        Object.assign || Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(t) {
                if (null == t) throw new TypeError("Cannot convert first argument to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var a = arguments[i];
                    if (null != a)
                        for (var o = Object.keys(Object(a)), n = 0, r = o.length; n < r; n++) {
                            var s = o[n],
                                l = Object.getOwnPropertyDescriptor(a, s);
                            void 0 !== l && l.enumerable && (e[s] = a[s])
                        }
                }
                return e
            }
        })
    }, function(t, e, i) {
        "use strict";

        function a() {
            return "function" == typeof window.yandexChatWidgetCallback
        }

        function o() {
            a() && (window.yandexChatWidgetCallback(), delete window.yandexChatWidgetCallback, document.removeEventListener("DOMContentLoaded", o, !1))
        }

        function n(t) {
            window.Ya = window.Ya || {}, window.Ya.ChatWidget = t, a() && ("interactive" === document.readyState || "complete" === document.readyState ? o() : document.addEventListener("DOMContentLoaded", o, !1))
        }
        i.d(e, "a", function() {
            return n
        })
    }, function(t, e, i) {
        "use strict";
        var a = i(2),
            o = i(20),
            n = "undefined" != typeof document,
            r = "undefined" != typeof window,
            s = "undefined" != typeof navigator,
            l = "undefined" != typeof screen;

        function p() {
            return r && window.location ? window.location.href : ""
        }

        function c() {
            return n ? document.referrer : ""
        }

        function m(t, e) {
            return (t || "").slice(0, e)
        }

        function h() {
            return Math.floor(1e6 * Math.random())
        }
        var d = 512;

        function u(t, e, i) {
            (i || 0 === i) && t.push(e + ":" + (!0 === i ? "1" : i))
        }

        function b(t, e) {
            var i = [];
            return t && Object.keys(t).forEach(function(e) {
                return u(i, e, t[e])
            }), u(i, "rn", h()), u(i, "c", !!s && navigator.cookieEnabled), u(i, "s", l ? [screen.width, screen.height, screen.colorDepth].join("x") : ""), u(i, "en", n && "string" == typeof document.charset ? document.charset.toLowerCase() : ""), u(i, "t", m(e, d)), i.join(":")
        }
        var f = 1024;

        function y(t) {
            return m(t, f)
        }

        function g(t, e) {
            var i, a = "https://mc.yandex.ru/watch/" + t + "?" + (i = e, Object.keys(i).filter(function(t) {
                var e = i[t];
                return "" !== e && null != e
            }).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
            }).join("&"));
            "undefined" != typeof navigator && navigator.sendBeacon ? navigator.sendBeacon(a, " ") : "undefined" != typeof fetch ? fetch(a, {
                credentials: "include"
            }) : "undefined" != typeof Image && ((new Image).src = a)
        }

        function v(t) {
            var e = t.browserInfo,
                i = t.counterId,
                a = t.pageParams,
                o = t.userVars,
                n = {
                    "browser-info": b(e, a.title),
                    rn: h(),
                    ut: a.ut
                };
            a.url && (n["page-url"] = y(a.url)), a.referrer && (n["page-ref"] = y(a.referrer)), o && (n["site-info"] = JSON.stringify(o)), g(i, n)
        }

        function _(t, e, i) {
            v({
                counterId: t,
                pageParams: {
                    referrer: e && void 0 !== e.referrer ? e.referrer : c(),
                    title: e && void 0 !== e.title ? e.title : n ? document.title : "",
                    url: e && void 0 !== e.url ? e.url : p()
                },
                userVars: i
            })
        }

        function w(t, e, i) {
            var a, o;
            e ? (a = p(), o = "goal://" + (r && window.location ? window.location.hostname : "") + "/" + e) : (a = c(), o = p()), v({
                counterId: t,
                pageParams: {
                    referrer: a,
                    url: o
                },
                userVars: i
            })
        }
        var x, k = "52122583";

        function E(t) {
            w(k, t)
        }! function(t) {
            t.CLICKED = "widget-clicked", t.OPENED = "widget-opened", t.CLOSED = "widget-closed"
        }(x || (x = {}));
        var O = 10,
            C = 300,
            j = 1e3 * O,
            T = 1e3 * C,
            M = 19,
            L = 5;

        function S() {
            return -1 !== document.cookie.search(/(^|; )yandex_login=[^;]+/)
        }

        function R(t) {
            return t === M ? L : void 0
        }
        var D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        var A = i(3),
            I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            U = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, i, a) {
                    return i && t(e.prototype, i), a && t(e, a), e
                }
            }();
        var P = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.isStarted = !1, this.needFetch = !1, this.reqNum = 0, this.rn = Math.floor(1e6 * Math.random()), this.timeout = j, this.timeoutId = -1, this.params = e, this.fetch = this.fetch.bind(this), this.handleOnline = this.handleOnline.bind(this), this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
                }
                return U(t, [{
                    key: "start",
                    value: function() {
                        !this.isStarted && this.params.url && window.navigator.cookieEnabled && (this.isStarted = !0, this.bindEvents(), this.fetch())
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.isStarted = !1, this.clearTimeout(), this.unbindEvents()
                    }
                }, {
                    key: "removeData",
                    value: function() {
                        ! function(t) {
                            try {
                                window.localStorage && window.localStorage.removeItem(t)
                            } catch (t) {}
                        }("yachat-unread")
                    }
                }, {
                    key: "fetch",
                    value: function() {
                        if (this.clearTimeout(), document.hidden || !window.navigator.onLine) return this.needFetch = !0, void this.retryFetch();
                        this.needFetch = !1;
                        var t = function(t) {
                            try {
                                var e = window.localStorage && window.localStorage.getItem(t);
                                if ("string" == typeof e) {
                                    var i = JSON.parse(e);
                                    if (i && "object" === (void 0 === i ? "undefined" : D(i))) return i
                                }
                            } catch (t) {}
                            return null
                        }("yachat-unread");
                        ! function(t) {
                            var e = Date.now();
                            return Boolean(t && t.currentTimestamp < e && e < t.expiredTimestamp && t.expiredTimestamp - e <= T && t.hasAuth === S())
                        }(t) ? this.makeRequest(): (this.runCallback(t.response), this.timeoutId = window.setTimeout(this.fetch, function(t) {
                            return t.expiredTimestamp - Date.now()
                        }(t)))
                    }
                }, {
                    key: "retryFetch",
                    value: function() {
                        this.clearTimeout(), this.timeoutId = window.setTimeout(this.fetch, this.timeout)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), window.addEventListener("online", this.handleOnline, !1)
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), window.removeEventListener("online", this.handleOnline, !1)
                    }
                }, {
                    key: "handleVisibilityChange",
                    value: function() {
                        this.needFetch && !document.hidden && this.fetch()
                    }
                }, {
                    key: "handleOnline",
                    value: function() {
                        this.needFetch && this.fetch()
                    }
                }, {
                    key: "makeRequest",
                    value: function() {
                        var t = this,
                            e = new XMLHttpRequest;
                        e.open("GET", this.getUrl(), !0), e.withCredentials = !0, e.onload = function() {
                            if (t.isStarted)
                                if (200 === e.status) {
                                    var i = void 0;
                                    try {
                                        i = JSON.parse(e.responseText)
                                    } catch (t) {
                                        i = null
                                    }
                                    if (i && "object" === (void 0 === i ? "undefined" : I(i))) {
                                        if ("Status" in i) return void t.handleError(i);
                                        if ("Ttl" in i) return void t.handleResponse(i)
                                    }
                                    t.stop()
                                } else t.handleError({
                                    Status: e.status
                                })
                        }, e.onerror = e.onabort = e.ontimeout = function() {
                            return t.handleError({
                                Status: e.status
                            })
                        }, e.send(null)
                    }
                }, {
                    key: "runCallback",
                    value: function(t) {
                        "Ttl" in t && !("Status" in t) && this.params.callback({
                            from: "xhr",
                            lastTimestamp: t.LastUnreadTsMcs,
                            value: t.UnreadCount || 0
                        })
                    }
                }, {
                    key: "getUrl",
                    value: function() {
                        this.reqNum++;
                        var t = this.params,
                            e = t.serviceId,
                            i = t.url;
                        return Object(A.c)(i, {
                            all_ns: R(e),
                            parentOrigin: Object(A.a)(),
                            rn: this.rn,
                            reqNum: this.reqNum,
                            serviceId: e
                        })
                    }
                }, {
                    key: "clearTimeout",
                    value: function() {
                        window.clearTimeout(this.timeoutId)
                    }
                }, {
                    key: "handleResponse",
                    value: function(t) {
                        var e;
                        this.runCallback(t), this.timeout = 1e3 * ((e = t.Ttl) < O ? O : e > C ? C : e), this.saveData(t, this.timeout), this.retryFetch()
                    }
                }, {
                    key: "handleError",
                    value: function(t) {
                        var e, i, a;
                        this.timeout = (e = t.Status, i = this.timeout, a = Math.max(j, i), 401 === e || 403 === e ? T : Math.min(2 * a, T)), this.saveData(t, this.timeout), this.retryFetch()
                    }
                }, {
                    key: "saveData",
                    value: function(t, e) {
                        var i = Date.now();
                        ! function(t, e) {
                            try {
                                window.localStorage && window.localStorage.setItem(t, JSON.stringify(e))
                            } catch (t) {}
                        }("yachat-unread", {
                            currentTimestamp: i,
                            expiredTimestamp: i + e,
                            hasAuth: S(),
                            response: t
                        })
                    }
                }]), t
            }(),
            N = i(0),
            z = i(6),
            H = i(14);
        var F = i(4);
        var B = i(1),
            Y = "disable-page-scroll",
            V = void 0,
            G = "",
            X = "",
            q = 0,
            W = 0,
            J = 300;

        function Q() {
            window.clearTimeout(V)
        }
        var K = function(t) {
                var e = Object(N.a)("button"),
                    i = t.text ? '\n        <div class="' + e("text") + '">\n            <div class="' + e("text-container") + '">' + t.text + "</div>\n        </div>" : "";
                return '\n        <a class="' + e({
                    theme: t.theme,
                    mobile: t.isMobile,
                    collapsed: t.collapsed,
                    size: t.size,
                    desktop: !t.isMobile
                }) + '">\n            <div class="' + e("container", {
                    size: t.size
                }) + '">\n                ' + function(t) {
                    return '<svg class="' + Object(N.a)("icon")({
                        type: t.type,
                        size: t.size
                    }) + '" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" fill="currentColor" d="M9 18a9 9 0 1 1 8.317-5.555c-.306.738-.372 1.468.49 4.82a.444.444 0 0 1-.542.543l-2.583-.676a3.555 3.555 0 0 0-.26-.057v-.001c-.642-.118-1.302-.037-1.977.243A8.973 8.973 0 0 1 9 18zm0-5.063a3.938 3.938 0 1 0 0-7.875 3.938 3.938 0 0 0 0 7.875z"></path></svg>'
                }({
                    type: t.icon,
                    size: t.size
                }) + "\n                " + i + "\n            </div>\n            " + function(t) {
                    var e = Object(N.a)("badge"),
                        i = t.maxCount < (t.count || 0) ? t.maxCount + "+" : t.count;
                    return '\n        <div class="' + e({
                        theme: t.theme,
                        type: t.type,
                        "has-count": Boolean(t.count),
                        size: t.size
                    }) + '">\n            <div class="' + e("count") + '">' + (i || "") + "</div>\n        </div>\n    "
                }({
                    count: t.badgeCount,
                    maxCount: t.badgeMaxCount,
                    theme: t.theme,
                    type: t.badgeType,
                    size: t.size
                }) + "\n        </a>"
            },
            $ = i(12),
            Z = i(13),
            tt = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, i, a) {
                    return i && t(e.prototype, i), a && t(e, a), e
                }
            }();
        var et = 10;
        var it = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.params = e
            }
            return tt(t, [{
                key: "bindEvents",
                value: function() {
                    window.addEventListener("resize", this.handleUpdatePosition), window.addEventListener("scroll", this.handleUpdatePosition), window.addEventListener("orientationchange", this.handleUpdatePosition)
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    window.removeEventListener("resize", this.handleUpdatePosition), window.removeEventListener("scroll", this.handleUpdatePosition), window.removeEventListener("orientationchange", this.handleUpdatePosition)
                }
            }, {
                key: "handleUpdatePosition",
                value: function() {
                    var t = this.params.targetElem.getBoundingClientRect();
                    this.setPosition(function(t, e) {
                        var i = e.left,
                            a = e.right,
                            o = e.top,
                            n = e.bottom,
                            r = i,
                            s = n,
                            l = t.offsetWidth,
                            p = t.offsetHeight,
                            c = function() {
                                var t = window.innerWidth,
                                    e = window.innerHeight;
                                return {
                                    left: 0 + et,
                                    top: 0 + et,
                                    right: 0 + t - et,
                                    bottom: 0 + e - et
                                }
                            }(),
                            m = {
                                left: c.left + (c.right - c.left) / 2,
                                top: c.top + (c.bottom - c.top) / 2
                            };
                        i + l > c.right && (r = a > m.left ? Math.max(a - l, et) : Math.min(i, c.right - l));
                        n + p > c.bottom && o > m.top && (s = o - p);
                        return {
                            left: Math.floor(r),
                            top: Math.floor(s)
                        }
                    }(this.params.popupElem, t))
                }
            }, {
                key: "setPosition",
                value: function(t) {
                    this.params.popupElem.setAttribute("style", "left: " + t.left + "px !important; top: " + t.top + "px !important;")
                }
            }, {
                key: "setFullscreen",
                value: function() {
                    this.params.popupElem.classList.add(Object(N.b)("popup", {
                        fullscreen: !0
                    })), "target" === this.params.position && (this.setPosition({
                        left: 0,
                        top: 0
                    }), this.unbindEvents())
                }
            }, {
                key: "cancelFullscreen",
                value: function() {
                    this.params.popupElem.classList.remove(Object(N.b)("popup", {
                        fullscreen: !0
                    })), "target" === this.params.position && (this.handleUpdatePosition(), this.bindEvents())
                }
            }, {
                key: "show",
                value: function() {
                    this.params.popupElem.classList.add(Object(N.b)("popup", {
                        visible: !0
                    })), "target" === this.params.position && (this.handleUpdatePosition(), this.bindEvents())
                }
            }, {
                key: "hide",
                value: function() {
                    this.params.popupElem.classList.remove(Object(N.b)("popup", {
                        visible: !0
                    })), "target" === this.params.position && this.unbindEvents()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unbindEvents(), delete this.params
                }
            }]), t
        }();
        a.a([o.a], it.prototype, "handleUpdatePosition", null), a.a([B.c], it.prototype, "setPosition", null), a.a([B.c], it.prototype, "setFullscreen", null), a.a([B.c], it.prototype, "cancelFullscreen", null), a.a([B.c], it.prototype, "show", null), a.a([B.c], it.prototype, "hide", null), a.a([B.c], it.prototype, "destroy", null);
        var at = i(8),
            ot = function(t) {
                var e, i = Object(N.a)("widget"),
                    a = Boolean(t.isMobile),
                    o = "always" === t.buttonCollapsed ? "large" : "normal",
                    n = "\n        " + function(t) {
                        var e = Object(N.a)("mobile-header");
                        return '\n        <div class="' + e({
                            mobile: t.isMobile
                        }) + '">\n            <div class="' + e("close") + '">' + Object(at.a)("close", t.lang) + '</div>\n            <div class="' + e("slider") + '"></div>\n        </div>\n    '
                    }({
                        isMobile: a,
                        lang: t.lang
                    }) + "\n        " + function(t) {
                        var e = Object(N.a)("header");
                        return '\n        <div class="' + e({
                            empty: !t.text,
                            theme: t.theme,
                            mobile: t.isMobile
                        }) + '">\n            <div class="' + e("text") + '">\n                ' + (t.text || "") + '\n            </div>\n            <div class="' + e("close") + '"></div>\n        </div>\n    '
                    }({
                        isMobile: a,
                        lang: t.lang,
                        text: t.title,
                        theme: t.theme
                    }) + "\n        " + Object($.a)({
                        isMobile: a,
                        lang: t.lang,
                        theme: t.theme
                    }) + '\n        <div class="' + i("mount") + '">\n            ' + Object(Z.a)(t.theme) + "\n        </div>\n    ";
                return '\n        <div class="' + i({
                    desktop: !a,
                    theme: t.theme,
                    mobile: a,
                    size: o
                }) + '">\n            ' + K({
                    badgeType: t.badgeType,
                    badgeCount: t.badgeCount,
                    badgeMaxCount: t.badgeMaxCount,
                    collapsed: t.buttonCollapsed,
                    icon: t.buttonIcon,
                    isMobile: a,
                    text: t.buttonText,
                    theme: t.theme,
                    size: o
                }) + "\n            " + (e = {
                    isMobile: a
                }, '<div class="' + Object(N.a)("paranja")({
                    mobile: e.isMobile
                }) + '"></div>') + "\n            " + function(t, e) {
                    var i = Object(N.a)("popup");
                    return '\n        <div class="' + i({
                        position: t.position,
                        desktop: !t.isMobile,
                        theme: t.theme,
                        mobile: t.isMobile
                    }) + '">\n            <div class="' + i("content-wrapper") + '">\n                ' + e + "\n            </div>\n        </div>\n    "
                }({
                    isMobile: a,
                    position: t.chatPosition,
                    theme: t.theme
                }, n) + "\n        </div>\n    "
            },
            nt = i(7),
            rt = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, i, a) {
                    return i && t(e.prototype, i), a && t(e, a), e
                }
            }(),
            st = function t(e, i, a) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, i);
                if (void 0 === o) {
                    var n = Object.getPrototypeOf(e);
                    return null === n ? void 0 : t(n, i, a)
                }
                if ("value" in o) return o.value;
                var r = o.get;
                return void 0 !== r ? r.call(a) : void 0
            };
        var lt = function(t) {
            function e(t, i) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var a = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return a.isChatVisible = !1, Object(B.b)(function() {
                    var o, n;
                    a.config = t, a.options = a.prepareOptions(i), o = void 0, n = {
                        guid: a.options.guid,
                        serviceId: "" + a.options.serviceId,
                        version: e.version
                    }, _(k, o, n), a.attachStyles(), a.buildTemplate(), a.findDomElems(), a.moveDomElemsToBody(), a.bindEvents(), a.initMessengerIframe(), a.popup = new it({
                        position: a.options.chatPosition,
                        popupElem: a.domElems.popup,
                        targetElem: a.domElems.button
                    }), a.unreadCounter = new P({
                        callback: a.handleUnreadCounter.bind(a),
                        serviceId: a.options.serviceId,
                        url: Object(F.c)(a.options.unreadUrl)
                    }), a.options.unreadDisabled || a.unreadCounter.start()
                }), a
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, nt["a"]), rt(e, [{
                key: "hideChat",
                value: function() {
                    this.isChatVisible && (this.isChatVisible = !1, this.options.autocloseable && document.removeEventListener("click", this.handleDocumentClick, !0), this.options.isMobile && Object(B.b)(function() {
                        Q();
                        var t = document.body;
                        t.classList.remove(Object(N.b)(Y)), z.a && (t.classList.remove(Object(N.b)(Y, {
                            ios: !0
                        })), t.style.marginLeft = G, t.style.marginTop = X, window.scrollTo(q, W))
                    }), this.domElems.widget.classList.remove(Object(N.b)("widget", {
                        visible: !0
                    })), this.domElems.button.classList.remove(Object(N.b)("button", {
                        hidden: !0
                    })), this.domElems.header.classList.remove(Object(N.b)("header", {
                        visible: !0
                    })), this.domElems.paranja.classList.remove(Object(N.b)("paranja", {
                        visible: !0
                    })), this.domElems.mobileHeader.classList.remove(Object(N.b)("mobile-header", {
                        visible: !0
                    })), this.domElems.mount.classList.remove(Object(N.b)("widget", "mount", {
                        visible: !0
                    })), this.popup.hide(), this.hideLoader(), this.hideError(), this.isChatCreated || this.messengerIframe.reset(), this.emit(nt.c.CHAT_HIDE), E(x.CLOSED))
                }
            }, {
                key: "showChat",
                value: function(t) {
                    this.isChatCreated || this.createMessengerIframe(), this.messengerIframe.sendMessage("iframe-open", t), this.isChatVisible || (this.isChatVisible = !0, this.options.autocloseable && document.addEventListener("click", this.handleDocumentClick, !0), this.options.isMobile && (Q(), V = window.setTimeout(function() {
                        Object(B.b)(function() {
                            var t = document.body;
                            z.a && (q = window.scrollX, W = window.scrollY, G = t.style.marginLeft, X = t.style.marginTop, t.style.marginLeft = "-" + q + "px", t.style.marginTop = "-" + W + "px", t.classList.add(Object(N.b)(Y, {
                                ios: !0
                            }))), t.classList.add(Object(N.b)(Y))
                        })
                    }, J)), this.domElems.widget.classList.add(Object(N.b)("widget", {
                        visible: !0
                    })), this.domElems.button.classList.add(Object(N.b)("button", {
                        hidden: !0
                    })), this.domElems.header.classList.add(Object(N.b)("header", {
                        visible: !0
                    })), this.domElems.paranja.classList.add(Object(N.b)("paranja", {
                        visible: !0
                    })), this.domElems.mobileHeader.classList.add(Object(N.b)("mobile-header", {
                        visible: !0
                    })), this.domElems.mount.classList.add(Object(N.b)("widget", "mount", {
                        visible: !0
                    })), this.popup.show(), this.emit(nt.c.CHAT_SHOW), E(x.OPENED))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.destroyed || (this.removeAllListeners(), this.hideChat(), this.unbindEvents(), this.unreadCounter && this.unreadCounter.stop(), this.popup.destroy(), st(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this))
                }
            }, {
                key: "prepareOptions",
                value: function(t) {
                    var e = this.config,
                        i = t.collapsedDesktop || e.collapsedDesktop; - 1 === ["always", "never", "hover"].indexOf(i) && (i = "hover");
                    var a = t.collapsedTouch || e.collapsedTouch; - 1 === ["always", "never"].indexOf(a) && (a = "always"), t.buttonText || (i = "always", a = "always");
                    var o = Object.assign({}, t, {
                        autocloseable: "autocloseable" in t ? t.autocloseable : e.autocloseable,
                        badgeType: t.badgeType || e.badgeType,
                        badgeCount: Number(t.badgeCount || 0),
                        badgeMaxCount: Number(t.badgeMaxCount || e.badgeMaxCount),
                        collapsedDesktop: i,
                        collapsedTouch: a,
                        iframeUrl: this.getIframeUrl(t),
                        serviceId: void 0 === t.serviceId ? void 0 : Number(t.serviceId),
                        iframeAllow: e.iframeAllow,
                        isMobile: void 0 === t.isMobile ? z.b : t.isMobile,
                        lang: t.lang || e.lang,
                        mountNode: t.mountNode || document.body,
                        theme: t.theme || e.theme,
                        unreadUrl: Object(F.c)(t.unreadUrl || e.unreadUrl)
                    });
                    o.buttonIcon = t.buttonIcon || e.buttonIconByTheme[o.theme] || e.buttonIcon, o.buttonCollapsed = o.isMobile ? a : i;
                    var n = t.chatPosition;
                    return n || (n = o.isMobile ? "fixed" : o.mountNode === document.body ? "static" : "target"), o.chatPosition = n, o
                }
            }, {
                key: "buildTemplate",
                value: function() {
                    var t = document.createElement("div");
                    t.innerHTML = ot(this.options), this.domElems.widget = t.querySelector("." + Object(N.b)("widget")), this.options.mountNode.appendChild(this.domElems.widget)
                }
            }, {
                key: "findDomElems",
                value: function() {
                    this.domElems.badge = this.getDomElem(Object(N.b)("badge")), this.domElems.badgeCount = this.getDomElem(Object(N.b)("badge", "count")), this.domElems.button = this.getDomElem(Object(N.b)("button")), this.domElems.container = this.getDomElem(Object(N.b)("widget", "container")), this.domElems.error = this.getDomElem(Object(N.b)("error")), this.domElems.header = this.getDomElem(Object(N.b)("header")), this.domElems.headerClose = this.getDomElem(Object(N.b)("header", "close")), this.domElems.loader = this.getDomElem(Object(N.b)("loader")), this.domElems.mount = this.getDomElem(Object(N.b)("widget", "mount")), this.domElems.overlay = this.getDomElem(Object(N.b)("widget", "overlay")), this.domElems.paranja = this.getDomElem(Object(N.b)("paranja")), this.domElems.popup = this.getDomElem(Object(N.b)("popup")), this.domElems.mobileHeader = this.getDomElem(Object(N.b)("mobile-header")), this.domElems.mobileHeaderClose = this.getDomElem(Object(N.b)("mobile-header", "close"))
                }
            }, {
                key: "moveDomElemsToBody",
                value: function() {
                    "target" === this.options.chatPosition && (document.body.appendChild(this.domElems.paranja), document.body.appendChild(this.domElems.popup))
                }
            }, {
                key: "bindEvents",
                value: function() {
                    this.domElems.button.addEventListener("click", this.handleButtonClick), this.domElems.error.addEventListener("click", this.handleOnErrorRetryClick), this.domElems.header.addEventListener("click", this.handleHeaderClick), this.domElems.headerClose.addEventListener("click", this.handleCloseClick), this.domElems.mobileHeaderClose.addEventListener("click", this.handleCloseClick)
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    this.domElems.button.removeEventListener("click", this.handleButtonClick), this.domElems.error.removeEventListener("click", this.handleOnErrorRetryClick), this.domElems.header.removeEventListener("click", this.handleHeaderClick), this.domElems.headerClose.removeEventListener("click", this.handleCloseClick), this.domElems.mobileHeaderClose.removeEventListener("click", this.handleCloseClick)
                }
            }, {
                key: "handleReadyMessage",
                value: function() {
                    st(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "handleReadyMessage", this).call(this), this.unreadCounter.stop()
                }
            }, {
                key: "handleUnreadCounter",
                value: function(t) {
                    var i = st(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "handleUnreadCounter", this).call(this, t);
                    return i && (this.updateBadge(i.value || 0), "xhr" !== i.from && this.unreadCounter.removeData()), i
                }
            }, {
                key: "handleMessengerMessage",
                value: function(t, i) {
                    switch (st(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "handleMessengerMessage", this).call(this, t, i), t) {
                        case nt.b.CLOSE:
                            this.hideChat();
                            break;
                        case nt.b.SHOW_CHAT:
                            this.showChat(i)
                    }
                }
            }, {
                key: "handleDocumentClick",
                value: function(t) {
                    var e = t.target;
                    !e || this.domElems.widget.contains(e) || this.domElems.popup.contains(e) || this.hideChat()
                }
            }, {
                key: "handleHeaderClick",
                value: function(t) {
                    t.stopPropagation()
                }
            }, {
                key: "handleCloseClick",
                value: function() {
                    this.isChatLoadFailed && (this.isChatLoadFailed = !1, this.isChatCreated = !1, this.hideError(), this.messengerIframe.reset()), this.hideChat()
                }
            }, {
                key: "handleButtonClick",
                value: function() {
                    E(x.CLICKED);
                    var t, e, i, a = this.options,
                        o = a.guid,
                        n = a.iframeUrlParams,
                        r = this.domElems.button;
                    if (o && function(t) {
                            var e = window.YandexApplicationsFeatureAvailability && window.YandexApplicationsFeatureAvailability.getFeatureInfo(t);
                            if ("string" == typeof e) try {
                                e = JSON.parse(e)
                            } catch (t) {
                                Object(H.a)(t, {
                                    message: "Can not get yandex application availability feature",
                                    additional: {
                                        featureInfo: e
                                    }
                                }), e = void 0
                            }
                            return Boolean(e && e.isAvailable)
                        }("dialog-business")) {
                        var s = Object(A.c)("dialog-business://", {
                            bot_id: o,
                            reqid: n && n.reqid
                        });
                        r.setAttribute("href", s), r.removeAttribute("target")
                    } else if (t = z.c, e = window.location.hostname, i = Object(F.a)(e), !t || Object(F.b)(i) || Object(A.b)(e)) r.removeAttribute("href"), r.removeAttribute("target"), this.isChatVisible ? this.hideChat() : this.showChat();
                    else {
                        var l = Object(A.c)(this.options.iframeUrl, Object.assign({}, this.options.iframeUrlParams, {
                            botId: o
                        }));
                        r.setAttribute("href", l), r.setAttribute("target", "_blank")
                    }
                }
            }, {
                key: "updateBadge",
                value: function(t) {
                    var e = t > 0,
                        i = Object(N.b)("badge", {
                            "has-count": !0
                        }),
                        a = this.domElems.badge,
                        o = this.domElems.badgeCount,
                        n = this.options.badgeMaxCount;
                    e ? (a.classList.add(i), o.innerText = String(n < t ? n + "+" : t)) : (a.classList.remove(i), o.innerText = "")
                }
            }, {
                key: "cancelFullscreen",
                value: function() {
                    this.popup.cancelFullscreen(), this.domElems.header.classList.remove(Object(N.b)("header", {
                        hidden: !0
                    })), st(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "cancelFullscreen", this).call(this)
                }
            }, {
                key: "setFullscreen",
                value: function() {
                    this.popup.setFullscreen(), this.domElems.header.classList.add(Object(N.b)("header", {
                        hidden: !0
                    })), st(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setFullscreen", this).call(this)
                }
            }]), e
        }();
        e.a = lt;
        lt.version = "1.17.0", a.a([B.c], lt.prototype, "hideChat", null), a.a([B.c], lt.prototype, "showChat", null), a.a([B.c], lt.prototype, "destroy", null), a.a([o.a], lt.prototype, "handleDocumentClick", null), a.a([o.a], lt.prototype, "handleCloseClick", null), a.a([o.a], lt.prototype, "handleButtonClick", null)
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return a
        });
        var a = function(t, e, i) {
            if ("function" == typeof t) throw new TypeError("Cannot bind static method " + e);
            var a = i.value,
                o = !1;
            return {
                configurable: !0,
                get: function() {
                    if (o) return a;
                    var t = a.bind(this);
                    return o = !0, Object.defineProperty(this, e, {
                        configurable: !0,
                        get: function() {
                            return t
                        }
                    }), o = !1, t
                }
            }
        }
    }, function(t, e) {
        t.exports = ".ya-chat-paranja,.ya-chat-paranja *,.ya-chat-popup,.ya-chat-popup *,.ya-chat-widget,.ya-chat-widget *{font-family:YS Text Chat Widget,Helvetica Neue,Helvetica,Arial,sans-serif!important;font-weight:400!important;font-style:normal!important;line-height:normal!important;position:static!important;z-index:auto!important;top:auto!important;right:auto!important;bottom:auto!important;left:auto!important;display:block!important;overflow:visible!important;clip:auto!important;zoom:normal!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;width:auto!important;min-width:0!important;max-width:none!important;height:auto!important;min-height:0!important;max-height:none!important;margin:0!important;padding:0!important;resize:none!important;cursor:auto!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-webkit-animation:0s none;animation:0s none;text-align:left!important;text-decoration:none!important;text-indent:0!important;letter-spacing:normal!important;word-spacing:normal!important;text-transform:none!important;-o-text-overflow:clip!important;text-overflow:clip!important;word-wrap:normal!important;word-break:normal!important;opacity:1!important;color:inherit!important;border:0!important;outline:0 none!important;background:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important;direction:ltr!important;-webkit-flex:none!important;-ms-flex:none!important;flex:none!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important;-o-object-fit:fill!important;object-fit:fill!important;-webkit-order:1!important;-ms-flex-order:1!important;order:1!important;-webkit-perspective:none!important;perspective:none!important;unicode-bidi:normal!important}@font-face{font-family:YS Text Chat Widget;src:url(//yastatic.net/s3/home/fonts/ys/1/text-medium.woff2) format(\"woff2\"),url(//yastatic.net/s3/home/fonts/ys/1/text-medium.woff) format(\"woff\");font-weight:500;font-style:normal;font-stretch:normal}.ya-chat-disable-page-scroll{overscroll-behavior:none!important;overflow:hidden!important}.ya-chat-disable-page-scroll_ios{position:fixed!important;left:0!important;top:0!important;right:0!important}.ya-chat-widget__mount{position:relative!important;-webkit-flex:1 1!important;-ms-flex:1 1!important;flex:1 1!important;width:100%!important;visibility:hidden!important;-webkit-transition:visibility .4s ease!important;-o-transition:visibility ease .4s!important;transition:visibility .4s ease!important;border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important}.ya-chat-widget__mount_visible{visibility:visible!important;-webkit-transition-delay:0s!important;-o-transition-delay:0s!important;transition-delay:0s!important}.ya-chat-widget_theme_legacy{position:relative!important;width:35px!important;height:35px!important}.ya-chat-widget_theme_dark,.ya-chat-widget_theme_light{position:fixed!important;top:auto!important;right:20px!important;bottom:20px!important;z-index:10000!important}.ya-chat-widget_theme_dark.ya-chat-widget_desktop,.ya-chat-widget_theme_light.ya-chat-widget_desktop{display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important;min-width:40px!important;height:40px!important;-webkit-box-shadow:0 6px 20px -5px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)!important;box-shadow:0 6px 20px -5px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)!important;border-radius:24px!important;-webkit-transition:min-width .4s ease,height .4s ease,max-height .4s ease,border-radius .4s ease,-webkit-box-shadow .4s ease!important;transition:min-width .4s ease,height .4s ease,max-height .4s ease,border-radius .4s ease,-webkit-box-shadow .4s ease!important;-o-transition:min-width .4s ease,height .4s ease,max-height .4s ease,box-shadow .4s ease,border-radius .4s ease!important;transition:min-width .4s ease,height .4s ease,max-height .4s ease,box-shadow .4s ease,border-radius .4s ease!important;transition:min-width .4s ease,height .4s ease,max-height .4s ease,box-shadow .4s ease,border-radius .4s ease,-webkit-box-shadow .4s ease!important}@media screen and (max-height:560px){.ya-chat-widget_theme_dark.ya-chat-widget_desktop,.ya-chat-widget_theme_light.ya-chat-widget_desktop{max-height:calc(100vh - 40px)!important}}.ya-chat-widget_theme_dark.ya-chat-widget_desktop.ya-chat-widget_visible,.ya-chat-widget_theme_light.ya-chat-widget_desktop.ya-chat-widget_visible{min-width:360px!important;height:520px!important;max-height:calc(100vh - 40px)!important;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)!important;box-shadow:0 10px 20px -5px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)!important;border-radius:8px!important}.ya-chat-widget_theme_dark.ya-chat-widget_desktop.ya-chat-widget_theme_light,.ya-chat-widget_theme_light.ya-chat-widget_desktop.ya-chat-widget_theme_light{background-color:#fff!important}.ya-chat-widget_theme_dark.ya-chat-widget_desktop.ya-chat-widget_theme_dark,.ya-chat-widget_theme_light.ya-chat-widget_desktop.ya-chat-widget_theme_dark{background-color:#292c33!important}.ya-chat-widget_theme_dark.ya-chat-widget_size_large,.ya-chat-widget_theme_light.ya-chat-widget_size_large{min-width:60px!important;height:60px!important;border-radius:36px!important}.ya-chat-widget_theme_hidden{position:fixed!important;top:auto!important;right:20px!important;bottom:20px!important;z-index:10000!important}.ya-chat-paranja{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;z-index:10005!important;display:none!important;visibility:hidden!important;-webkit-transition:opacity .32s ease .08s,visibility 0s ease .4s!important;-o-transition:opacity .32s ease .08s,visibility 0s ease .4s!important;transition:opacity .32s ease .08s,visibility 0s ease .4s!important;opacity:0!important;background-color:rgba(0,0,0,.56)!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.ya-chat-paranja_visible{visibility:visible!important;-webkit-transition-delay:0s!important;-o-transition-delay:0s!important;transition-delay:0s!important;opacity:1!important}.ya-chat-paranja_mobile{display:block!important}.ya-chat-popup{z-index:10010!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;opacity:0!important;-webkit-transform:scale(0)!important;transform:scale(0)!important;-webkit-transition:opacity .32s ease .08s,visibility 0s ease .4s,-webkit-transform 0s ease .4s!important;transition:opacity .32s ease .08s,visibility 0s ease .4s,-webkit-transform 0s ease .4s!important;-o-transition:opacity .32s ease .08s,visibility 0s ease .4s,transform 0s ease .4s!important;transition:opacity .32s ease .08s,visibility 0s ease .4s,transform 0s ease .4s!important;transition:opacity .32s ease .08s,visibility 0s ease .4s,transform 0s ease .4s,-webkit-transform 0s ease .4s!important}.ya-chat-popup__content-wrapper{display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;visibility:hidden!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-flex:1 1 auto!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important;width:100%!important;height:100%!important}.ya-chat-popup:before{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;content:\"\"!important;background:#fff!important}.ya-chat-popup_mobile.ya-chat-popup:before{top:8px!important}.ya-chat-popup_position_static{position:absolute!important;bottom:0!important;right:0!important}.ya-chat-popup_position_target{position:fixed!important;left:-9999px!important;top:-9999px!important}.ya-chat-popup_position_absolute{position:absolute!important;left:-9999px!important;top:-9999px!important}.ya-chat-popup_fullscreen,.ya-chat-popup_position_fixed{position:fixed!important;left:0!important;top:40px!important;bottom:0!important;right:0!important;border-radius:0!important;-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important;overflow:visible!important}.ya-chat-popup_visible{visibility:visible!important;opacity:1!important;-webkit-transition-delay:0s!important;-o-transition-delay:0s!important;transition-delay:0s!important;-webkit-transform:translateY(0)!important;transform:translateY(0)!important}.ya-chat-popup.ya-chat-popup_visible.ya-chat-popup_fullscreen{width:100%!important;height:100%!important;max-height:100%!important;top:0!important;border-radius:0!important}.ya-chat-popup_mobile{-webkit-transition-duration:.4s,.32s,0s!important;-o-transition-duration:.4s,.32s,0s!important;transition-duration:.4s,.32s,0s!important}.ya-chat-popup_mobile.ya-chat-popup_visible{-webkit-transition-delay:0s,.08s,0s!important;-o-transition-delay:0s,.08s,0s!important;transition-delay:0s,.08s,0s!important}.ya-chat-popup_theme_hidden.ya-chat-popup_desktop,.ya-chat-popup_theme_legacy.ya-chat-popup_desktop{overflow:visible!important;border:none!important;border-radius:4px!important;-webkit-box-shadow:0 1.5ex 2ex -1ex rgba(0,0,0,.3)!important;box-shadow:0 1.5ex 2ex -1ex rgba(0,0,0,.3)!important;width:420px!important;height:600px!important}.ya-chat-popup_theme_hidden.ya-chat-popup_desktop:before,.ya-chat-popup_theme_legacy.ya-chat-popup_desktop:before{border-radius:inherit!important;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05)!important;box-shadow:0 0 0 1px rgba(0,0,0,.05)!important}.ya-chat-popup_theme_hidden.ya-chat-popup_desktop{max-height:calc(100vh - 40px)!important}.ya-chat-popup_theme_legacy.ya-chat-popup_desktop{max-height:calc(100vh - 80px)!important}.ya-chat-popup_theme_dark,.ya-chat-popup_theme_hidden.ya-chat-popup_mobile,.ya-chat-popup_theme_legacy.ya-chat-popup_mobile,.ya-chat-popup_theme_light{-webkit-transition-timing-function:ease,ease-in,ease!important;-o-transition-timing-function:ease,ease-in,ease!important;transition-timing-function:ease,ease-in,ease!important;-webkit-transition-property:opacity,visibility,-webkit-transform!important;transition-property:opacity,visibility,-webkit-transform!important;-o-transition-property:transform,opacity,visibility!important;transition-property:transform,opacity,visibility!important;transition-property:transform,opacity,visibility,-webkit-transform!important;-webkit-transition-delay:0s,0s,.4s!important;-o-transition-delay:0s,0s,.4s!important;transition-delay:0s,0s,.4s!important}.ya-chat-popup_theme_dark.ya-chat-popup_desktop,.ya-chat-popup_theme_light.ya-chat-popup_desktop{overflow:hidden!important;border-radius:inherit!important;width:100%!important;height:100%!important;-webkit-transition-duration:.4s,.16s,0s!important;-o-transition-duration:.4s,.16s,0s!important;transition-duration:.4s,.16s,0s!important}.ya-chat-popup_theme_dark.ya-chat-popup_desktop:not(.ya-chat-popup_fullscreen) .ya-chat-popup__content-wrapper,.ya-chat-popup_theme_light.ya-chat-popup_desktop:not(.ya-chat-popup_fullscreen) .ya-chat-popup__content-wrapper{min-width:360px!important;height:520px!important;max-height:calc(100vh - 40px)!important}.ya-chat-popup_theme_dark.ya-chat-popup_desktop.ya-chat-popup_visible,.ya-chat-popup_theme_light.ya-chat-popup_desktop.ya-chat-popup_visible{-webkit-transition-delay:0s,.24s,0s!important;-o-transition-delay:0s,.24s,0s!important;transition-delay:0s,.24s,0s!important}.ya-chat-badge{position:absolute!important;-webkit-transition:-webkit-transform .08s ease-out!important;transition:-webkit-transform .08s ease-out!important;-o-transition:transform .08s ease-out!important;transition:transform .08s ease-out!important;transition:transform .08s ease-out,-webkit-transform .08s ease-out!important;-webkit-transform:scale(0)!important;transform:scale(0)!important}.ya-chat-badge_has-count{-webkit-transform:scale(1)!important;transform:scale(1)!important}.ya-chat-badge_type_dot{bottom:auto!important;left:auto!important;width:8px!important;height:8px!important;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;border:2px solid #fff!important;border-radius:50%!important;background-clip:padding-box!important;background-color:red!important}.ya-chat-badge_type_dot .ya-chat-badge__count{display:none!important}.ya-chat-badge__count{font-size:13px!important;font-weight:700!important;line-height:15px!important;color:#fff!important;vertical-align:middle!important;text-align:center!important;border-radius:15px!important;cursor:pointer!important;padding:0 4px!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;background-color:red!important}.ya-chat-badge_theme_legacy{top:3px!important;right:3px!important}.ya-chat-badge_theme_dark,.ya-chat-badge_theme_light{top:-3px!important;right:-3px!important}.ya-chat-button{display:block!important;visibility:visible!important;cursor:pointer!important;text-decoration:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;-webkit-user-select:none!important}.ya-chat-button_mobile{top:12px!important;left:12px!important}.ya-chat-button__container{display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.ya-chat-button__container,.ya-chat-button__text{overflow:hidden!important;cursor:pointer!important}.ya-chat-button__text{-webkit-flex:1 1 auto!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.ya-chat-button__text-container{overflow:hidden!important;padding-left:8px!important;font-size:14px!important;font-weight:500!important;line-height:40px!important;vertical-align:middle!important;white-space:nowrap!important;-o-text-overflow:ellipsis!important;text-overflow:ellipsis!important;cursor:pointer!important}.ya-chat-button_theme_legacy{width:100%!important;height:100%!important}.ya-chat-button_theme_legacy .ya-chat-button__container{padding:0 7px!important;height:100%!important}.ya-chat-button_theme_legacy .ya-chat-button__text{display:none!important}.ya-chat-button_theme_legacy .ya-chat-icon{width:21px!important;height:21px!important}.ya-chat-button_theme_legacy:active .ya-chat-icon{-webkit-transform:scale(.9)!important;transform:scale(.9)!important}.ya-chat-button_theme_dark,.ya-chat-button_theme_light{position:relative!important;-webkit-transition:opacity .32s ease .08s!important;-o-transition:opacity .32s ease .08s!important;transition:opacity .32s ease .08s!important}.ya-chat-button_theme_dark.ya-chat-button_hidden,.ya-chat-button_theme_light.ya-chat-button_hidden{opacity:0!important;-webkit-transition-delay:0s!important;-o-transition-delay:0s!important;transition-delay:0s!important}.ya-chat-button_theme_dark .ya-chat-button__container,.ya-chat-button_theme_light .ya-chat-button__container{vertical-align:top!important;white-space:nowrap!important;padding-left:12px!important;padding-right:16px!important;height:40px!important;max-width:280px!important;-webkit-transition:padding .4s ease,max-width .4s ease!important;-o-transition:padding .4s ease,max-width .4s ease!important;transition:padding .4s ease,max-width .4s ease!important;-webkit-transform-origin:100% 50%!important;transform-origin:100% 50%!important;border-radius:24px!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important}.ya-chat-button_theme_dark .ya-chat-button__container_size_large,.ya-chat-button_theme_light .ya-chat-button__container_size_large{height:60px!important;max-width:420px!important;border-radius:36px!important}.ya-chat-button_theme_dark.ya-chat-button_desktop .ya-chat-button__container:after,.ya-chat-button_theme_light.ya-chat-button_desktop .ya-chat-button__container:after{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;width:calc(100% + 20px)!important;height:calc(100% + 20px)!important}.ya-chat-button_theme_dark.ya-chat-button_mobile .ya-chat-button__container,.ya-chat-button_theme_light.ya-chat-button_mobile .ya-chat-button__container{-webkit-box-shadow:0 6px 20px -5px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)!important;box-shadow:0 6px 20px -5px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)!important}.ya-chat-button_theme_dark.ya-chat-button_mobile .ya-chat-button__container:after,.ya-chat-button_theme_light.ya-chat-button_mobile .ya-chat-button__container:after{content:\"\"!important;position:absolute!important;left:-12px!important;top:-12px!important;width:calc(100% + 24px)!important;height:calc(100% + 24px)!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_always .ya-chat-button__container,.ya-chat-button_theme_light.ya-chat-button_collapsed_always .ya-chat-button__container{padding-left:8px!important;padding-right:8px!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_always .ya-chat-button__container_size_large,.ya-chat-button_theme_light.ya-chat-button_collapsed_always .ya-chat-button__container_size_large{padding-left:12px!important;padding-right:12px!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_always .ya-chat-button__text,.ya-chat-button_theme_light.ya-chat-button_collapsed_always .ya-chat-button__text{display:none!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_hover .ya-chat-button__text,.ya-chat-button_theme_light.ya-chat-button_collapsed_hover .ya-chat-button__text{-webkit-transition:opacity .4s ease!important;-o-transition:opacity .4s ease!important;transition:opacity .4s ease!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_hover:not(:hover) .ya-chat-button__container,.ya-chat-button_theme_light.ya-chat-button_collapsed_hover:not(:hover) .ya-chat-button__container{max-width:40px!important;padding-left:8px!important;padding-right:8px!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_hover:not(:hover) .ya-chat-button__container_size_large,.ya-chat-button_theme_light.ya-chat-button_collapsed_hover:not(:hover) .ya-chat-button__container_size_large{max-width:60px!important;padding-left:12px!important;padding-right:12px!important}.ya-chat-button_theme_dark.ya-chat-button_collapsed_hover:not(:hover) .ya-chat-button__text,.ya-chat-button_theme_light.ya-chat-button_collapsed_hover:not(:hover) .ya-chat-button__text{opacity:0!important}.ya-chat-button_theme_light .ya-chat-button__container{background-color:#fff!important}.ya-chat-button_theme_light .ya-chat-button__text{color:#292c33!important}.ya-chat-button_theme_dark .ya-chat-button__container{background-color:#292c33!important}.ya-chat-button_theme_dark .ya-chat-button__text{color:#fff!important}.ya-chat-button.ya-chat-button_theme_hidden{display:none!important}.ya-chat-icon{position:relative!important;width:24px!important;height:24px!important;-webkit-flex:none!important;-ms-flex:none!important;flex:none!important;cursor:pointer!important;color:#4e66ff!important}.ya-chat-icon_type_black{color:#000!important}.ya-chat-icon_type_white{color:#fff!important}.ya-chat-icon_size_large{height:36px!important;width:36px!important}.ya-chat-header{display:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;position:relative!important;width:100%!important;height:49px!important;border-bottom:1px solid #e6ebf1!important;border-top-left-radius:inherit!important;border-top-right-radius:inherit!important;background-color:#f3f5f8!important;visibility:hidden!important;display:block!important;-webkit-transition:visibility .4s ease!important;-o-transition:visibility ease .4s!important;transition:visibility .4s ease!important}.ya-chat-header__text{font-size:16px!important;font-weight:500!important;line-height:48px!important;overflow:hidden!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;width:100%!important;max-width:100%!important;padding:0 48px 0 16px!important;white-space:nowrap!important;-o-text-overflow:ellipsis!important;text-overflow:ellipsis!important;color:#333!important;-webkit-user-select:none!important}.ya-chat-header__close{position:absolute!important;top:0!important;right:0!important;width:48px!important;height:100%!important;cursor:pointer!important;opacity:.8!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.566 17.566a.8.8 0 000-1.132L13.13 12l4.435-4.434a.8.8 0 10-1.132-1.132L12 10.87 7.566 6.434a.8.8 0 10-1.132 1.132L10.87 12l-4.435 4.434a.8.8 0 001.132 1.132L12 13.13l4.434 4.435a.8.8 0 001.132 0z' fill='%23919CB5'/%3E%3C/svg%3E\") no-repeat 50%!important;background-size:50%!important}.ya-chat-header__close:hover{opacity:1!important}.ya-chat-header_visible{visibility:visible!important;-webkit-transition-delay:0s!important;-o-transition-delay:0s!important;transition-delay:0s!important}.ya-chat-header_hidden,.ya-chat-header_mobile .ya-chat-header__close{display:none!important}.ya-chat-header_mobile{border-radius:8px 8px 0 0!important}.ya-chat-header_theme_hidden.ya-chat-header_empty,.ya-chat-header_theme_legacy.ya-chat-header_empty{display:none!important}.ya-chat-messenger-iframe{position:absolute!important;left:0!important;top:0!important;width:100%!important;height:100%!important;border:0!important;border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important;display:none!important}.ya-chat-messenger-iframe_visible{display:block!important}.ya-chat-error{position:absolute!important;z-index:10020!important;top:50%!important;left:50%!important;color:#292c33!important;display:none!important;max-width:95%!important;padding:10px!important;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important;text-align:center!important}.ya-chat-error_visible{display:block!important}.ya-chat-error__title{font-size:22.5px!important;font-weight:700!important;line-height:1.467!important;margin-bottom:12px!important;text-align:center!important}.ya-chat-error__button{font-size:14px!important;font-weight:500!important;line-height:36px!important;padding:0 16px!important;cursor:pointer!important;text-align:center!important;white-space:nowrap!important;letter-spacing:.5px!important;text-transform:uppercase!important;color:#1c70c4!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.ya-chat-error_mobile{background-color:rgba(0,0,0,.05)!important}.ya-chat-error_theme_dark{color:#fff!important}.ya-chat-mobile-header{left:0!important;display:none!important;height:40px!important;-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;visibility:hidden!important}.ya-chat-mobile-header,.ya-chat-mobile-header__close{position:absolute!important;right:0!important;top:0!important}.ya-chat-mobile-header__close{font-size:14px!important;line-height:40px!important;height:100%!important;padding:0 12px!important;vertical-align:middle!important;color:#fff!important;cursor:pointer!important;-webkit-user-select:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.ya-chat-mobile-header__slider{display:none!important;position:absolute!important;bottom:4px!important;left:50%!important;width:32px!important;height:4px!important;-webkit-transform:translateX(-50%)!important;transform:translateX(-50%)!important;border-radius:2px!important;background-color:#fff!important}.ya-chat-mobile-header_mobile{display:block!important}.ya-chat-mobile-header_visible{visibility:visible!important}.ya-chat-loader{position:absolute!important;z-index:10030!important;top:0!important;right:0!important;bottom:0!important;left:0!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;visibility:hidden!important;-webkit-transition:visibility 0s ease-in-out .2s,opacity .2s ease-in-out!important;-o-transition:visibility 0s ease-in-out .2s,opacity .2s ease-in-out!important;transition:visibility 0s ease-in-out .2s,opacity .2s ease-in-out!important;opacity:0!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.ya-chat-loader__spinner{width:38px!important;height:38px!important;border-color:#1c70c4 transparent transparent #1c70c4!important;border-style:solid!important;border-width:2px!important;border-radius:50%!important}.ya-chat-loader_visible{visibility:visible!important;-webkit-transition-delay:0s!important;-o-transition-delay:0s!important;transition-delay:0s!important;opacity:1!important}.ya-chat-loader_visible .ya-chat-loader__spinner{-webkit-animation:ya-chat-loader-spinner-rotate 1s linear infinite;animation:ya-chat-loader-spinner-rotate 1s linear infinite}@-webkit-keyframes ya-chat-loader-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ya-chat-loader-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"
    }, , , , , function(t, e, i) {
        "use strict";
        i.r(e);
        i(17);
        var a = i(1),
            o = "https://yandex.ru/chat?build=widget";
        var n = {
            name: "external",
            badgeType: "num",
            badgeMaxCount: 99,
            buttonIcon: "colored",
            buttonIconByTheme: {
                light: "colored",
                dark: "white"
            },
            collapsedDesktop: "hover",
            collapsedTouch: "always",
            iframeUrl: o,
            serviceId: 11,
            iframeAllow: ["microphone", "camera"],
            lang: "ru",
            theme: "light",
            unreadUrl: ""
        };
        Object(a.a)({
            page: n.name,
            additional: n
        });
        var r = n,
            s = i(19),
            l = i(18),
            p = i(21);
        var c = function(t) {
            function e(t) {
                return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, Object.assign({}, t, {
                        styles: p
                    })))
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, s["a"]), e
        }();
        e.default = c;
        Object(l.a)(c)
    }])
});      
  $(document).ready(function(){
    setTimeout(() => {
        if(AMOCRM.constant('managers')[system.amouser_id].is_admin=='Y') {
            window.yandexChatWidget = new Ya.ChatWidget({
                guid: '31582e71-7054-47f4-a5aa-560c78ec3d58',
                buttonText: 'NOVA',
                title: 'NOVA',
                theme: 'dark',
                collapsedDesktop: 'hover',
                collapsedTouch: 'always'
            });

            setTimeout(function(){
            if($('.close_chat').length==0)
                $('.ya-chat-widget').append('<div class="uikit_nova close_chat" onclick="$(\'.ya-chat-widget\').remove()" style="position: absolute!important;"><div style="    margin-top: -50px!important;margin-right: -20px!important;cursor: pointer!important;font-family: \'PT Sans\'!important;">x</div></div>')
            },2000)
        }
    }, 1000)
  })