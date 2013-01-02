/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 */
(function (c) {
    var a, b;
    a = (typeof window.pe !== "undefined" && window.pe !== null) ? window.pe : { fn: {} };
    b = { language: (c("html").attr("lang").length > 0 ? c("html").attr("lang") : "en"), 
    touchscreen: "ontouchstart" in document.documentElement, mobileview: (wet_boew_theme !== null && typeof wet_boew_theme.mobileview === "function"), 
    suffix: c('body script[src*="/pe-ap-min.js"]').length > 0 ? "-min" : "", header: c("#wb-head"), main: c("#wb-main"), secnav: c("#wb-sec"), 
    footer: c("#wb-foot"), urlpage: "", urlhash: "", urlquery: "", svg: (c('<svg xmlns="http://www.w3.org/2000/svg" />').get(0).ownerSVGElement !== undefined), 
    document: c(document), ie: (/(MSIE) ([\w.]+)/.exec(navigator.userAgent) || [])[2] || "0", _init: function () {
        var g = c("html"), l, i, k, m, e, f, h, j, d = false; 
        a.polyfills.init(); 
        a.urlpage = a.url(window.location.href); 
        a.urlhash = a.urlpage.hash; 
        a.urlquery = a.urlpage.params; 
        g.removeClass("no-js").addClass(wet_boew_theme !== null ? wet_boew_theme.theme : "").addClass(a.touchscreen ? "touchscreen" : ""); 
        l = a.main.find("a").filter(function () { 
        return this.href.indexOf("#") !== -1 
        }); 
        i = l.filter(function () { 
        return c(this).attr("href").indexOf("#") === 0 
        }); 
        
        if (a.mobilecheck()) { 
        a.mobile = true; 
        c("body > div").attr("data-role", "page").addClass("ui-page-active"); 
        j = navigator.userAgent.indexOf("BlackBerry"); 
        g.addClass((j === 0 || (j !== -1 && navigator.userAgent.indexOf("Version/6") !== -1) ? "bb-pre7" : "")); 
        if (a.urlhash.length !== 0) { 
        j = c("#" + a.urlhash); 
        if (j.length !== 0 && j.attr("data-role") !== "page") { 
        m = ""; 
        for (f in a.urlquery) { 
        if (a.urlquery.hasOwnProperty(f) && f !== "hashtarget") { 
        m += f + "=" + e[f] + "&amp;" 
        } 
        } 
        m += "hashtarget=" + a.urlhash; 
        window.location.search = m 
        } 
        window.location.hash = "" 
        } a.document.on("mobileinit", function () { 
        c.extend(c.mobile, { ajaxEnabled: false, pushStateEnabled: false, autoInitializePage: (d ? true : false) }); if (d) { a.mobilelang() } }); 
        a.document.on("pageinit", function () { i.off("click vclick").on("click vclick", function () { k = c(c(this).attr("href").replace(/[.:]/, "\\$1")); 
        k.filter(":not(a, button, input, textarea, select)").attr("tabindex", "-1"); if (k.length > 0) { c.mobile.silentScroll(a.focus(k).offset().top) } }); 
        if (a.urlquery.hashtarget !== undefined) { h = a.main.find("#" + a.urlquery.hashtarget.replace(/[.:]/, "\\$1")); 
        h.filter(":not(a, button, input, textarea, select)").attr("tabindex", "-1"); 
        
        if (h.length > 0) { setTimeout(function () { c.mobile.silentScroll(a.focus(h).offset().top) }, 200) } } }); 
        a.add.css([a.add.themecsslocation + "jquery.mobile" + a.suffix + ".css"]); a.add._load([a.add.liblocation + "jquery.mobile/jquery.mobile.min.js"]) } 
        else { i.on("click vclick", function () { k = c(c(this).attr("href").replace(/[.:]/, "\\$1")); 
        k.filter(":not(a, button, input, textarea, select)").attr("tabindex", "-1"); if (k.length > 0) { a.focus(k) } }); if (a.urlhash.length > 0) { 
        k = c(a.urlhash.replace(/[.:]/, "\\$1")); k.filter(":not(a, button, input, textarea, select)").attr("tabindex", "-1"); if (k.length > 0) { a.focus(k) } } 
        }
        c.when.apply(c, c.map(c("*[data-ajax-replace], *[data-ajax-append]"),
function (r) {
    var q = c(r), p = false, n;
    if (q.attr("data-ajax-replace") !== undefined) {
        p = true;
        n = q.attr("data-ajax-replace")
    }
    else {
        if (q.attr("data-ajax-append") !== undefined) {
            n = q.attr("data-ajax-append")
        }
    }
    return c.get(n,
function (o) {
    if (p) {
        q.empty()
    }
    q.append(c(o))
}, "html")
})).always(
function () {
    a.document.one("languageloaded",
function () {
    if (a.pedisable() === true) {
        return false
    } if (wet_boew_theme !== null) {
        wet_boew_theme.init();
        if (a.mobile) {
            a.document.one("mobileviewloaded",
function () {
    if (typeof c.mobile !== "undefined") { a.mobilelang(); c.mobile.initializePage() } else { d = true } 
}); wet_boew_theme.mobileview()
        } 
    } else { if (a.mobile) { if (typeof c.mobile !== "undefined") { a.mobilelang(); c.mobile.initializePage() } else { d = true } } } a.dance()
}); a.add.language(a.language)
})
}, mobile: false, mobilecheck: function () { 
return (a.mobileview && (screen.width < 768 || (window.innerWidth < 768 && 
(window.innerHeight === document.documentElement.clientHeight || window.outerWidth - window.innerWidth < 50))) && 
!(a.ie > 0 && a.ie < 9)) }, mobilelang: function () { 
c.mobile.collapsible.prototype.options.expandCueText = a.dic.get("%jqm-expand"); 
c.mobile.collapsible.prototype.options.collapseCueText = a.dic.get("%jqm-collapse"); 
c.mobile.dialog.prototype.options.closeBtnText = a.dic.get("%close"); 
c.mobile.page.prototype.options.backBtnText = a.dic.get("%back"); 
c.mobile.textinput.prototype.options.clearSearchButtonText = a.dic.get("%jqm-clear-search"); 
c.mobile.selectmenu.prototype.options.closeText = a.dic.get("%close");
c.mobile.listview.prototype.options.filterPlaceholder = a.dic.get("%jqm-filter") 
}, pagecontainer: function () { 
return c("#wb-body-sec-sup,#wb-body-sec,#wb-body").add("body").eq(0) 
}, resize: function (d) { 
ResizeEvents.initialise(); 
ResizeEvents.eventElement.bind("x-text-resize x-zoom-resize x-window-resize", function () { 
d() 
}); 
return 
}, url: function (f) { 
var e = document.createElement("div"), d; 
e.innerHTML = '<a href="' + f + '">x</a>'; 
d = e.firstChild; 
return { 
source: d.href, protocol: d.protocol.replace(":", ""), host: d.hostname, port: d.port === "0" ? "80" : d.port, query: d.search, params: (function () { 
var j, i, k, h, l, g;
i = {}; 
h = d.search.replace(/^\?/, "").split("&"); 
for (l = 0, g = h.length; l < g; l += 1) 
{ 
    j = h[l]; if (j) { 
        k = j.split("="); i[k[0]] = k[1] 
        } 
    } 
    return i 
} ()), 
file: d.pathname.match(/\/([^\/?#]+)$/i) ? d.pathname.match(/\/([^\/?#]+)$/i)[1] : "", hash: d.hash.replace("#", ""), 
path: d.pathname.replace(/^([^\/])/, "/$1"), relative: d.href.match(/tps?:\/\/[^\/]+(.+)/) ? d.href.match(/tps?:\/\/[^\/]+(.+)/)[1] : "", 
segments: d.pathname.replace(/^\//, "").split("/"), 
removehash: function () { 
return this.source.replace(/#([A-Za-z0-9\-_=&]+.:)/, "") 
} 
} 
}, cssenabled: function () { 

return c("link").get(0).disabled 
}, limit: function (e) { 
var d; d = c(e).attr("class").match(/\blimit-\d+/); 
if (!d) { return 0 } return Number(d[0].replace(/limit-/i, "")) }, 
focus: function (d) { 
setTimeout(function () { 
return (typeof d.jquery !== "undefined" ? d.focus() : c(d).focus()) 
}, 0); 
return d 
}, string: { ify: (function () { 
return { 
link: function (d) { 
return d.replace(/[a-z]+:\/\/[a-z0-9\-_]+\.[a-z0-9\-_@:~%&\?\+#\/.=]+[^:\.,\)\s*$]/ig, function (e) { 
return '<a href="' + e + '">' + ((e.length > 25) ? e.substr(0, 24) + "..." : e) + "</a>" 
}) 
}, at: function (d) { 
return d.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15}(\/[a-zA-Z0-9\-_]+)*)/g, function (e, g, f) { 
return g + '@<a href="http://twitter.com/' + f + '">' + f + "</a>" 
}) 
}, hash: function (d) { 
return d.replace(/(^|[^&\w'"]+)\#([a-zA-Z0-9_]+)/g, function (e, g, f) { 
return g + '#<a href="http://search.twitter.com/search?q=%23' + f + '">' + f + "</a>" 
}) 
}, clean: function (d) { 
return this.hash(this.at(this.link(d))) 
} 
} 
} ()), pad: function (e, d) { 
var f; f = String(e); while (f.length < d) { f = "0" + f } return f 
} 
}, array: { 
noduplicates: function (d) { 
var h, e, g, f = [], k = {}; 
for (h = 0, e = d.length; h !== e; h += 1) { 
k[d[h]] = 0 
} 
for (g in k) { 
if (k.hasOwnProperty(g)) { 
f.push(g) 
} 
} return f 
}, diff: function (l, k) { 
var f, n, m, e, h, g, d = []; 
for (f = 0, n = l.length; f !== n; f += 1) { 
m = l[f]; g = false; 
for (e = 0, h = k.length; e !== h; e += 1) {
 if (k[e] === m) { 
 g = true; break 
 } 
 } if (!g) { 
 d.push(m) 
 } 
 } 
 }, keys: function (e) { 
 var d = []; c.each(e, function (f) { d.push(f) }); 
 return d 
 } 
 }, date: { 
 convert: function (e) { 
 if (e.constructor === Date) { return e } 
 if (e.constructor === Array) { return new Date(e[0], e[1], e[2]) } 
 if (e.constructor === Number) { return new Date(e) } 
 if (e.constructor === String) { return new Date(e) } 
 if (typeof e === "object") { return new Date(e.year, e.month, e.date) } 
 return NaN 
 }, compare: function (e, d) { 
 if (isFinite(e = this.convert(e).valueOf()) && isFinite(d = this.convert(d).valueOf())) { 
 return (e > d) - (e < d) 
 } 
 return NaN }, in_range: function (f, g, e) { 
 if (isFinite(f = this.convert(f).valueOf()) && isFinite(g = this.convert(g).valueOf()) && isFinite(e = this.convert(e).valueOf())) { 
 return g <= f && f <= e 
 } 
 return NaN 
 }, to_iso_format: function (g, f) { 
 var e; e = this.convert(g); 
 if (f) { 
 return e.getFullYear() + "-" + a.string.pad(e.getMonth() + 1, 2, "0") + "-" + a.string.pad(e.getDate(), 2, "0") + " " + a.string.pad(e.getHours(), 2, "0") + ":" + 
 a.string.pad(e.getMinutes(), 2, "0") 
 } 
 return e.getFullYear() + "-" + a.string.pad(e.getMonth() + 1, 2, "0") + "-" + a.string.pad(e.getDate(), 2, "0") 
 } 
 }, pedisable: function () { 
 var i = (typeof localStorage !== "undefined"), h = (i ? localStorage.getItem("pedisable") : null),
  g = (a.urlquery.pedisable !== undefined ? a.urlquery.pedisable : h), 
 f = document.getElementById("wb-tphp"), d = document.createElement("li"), k = a.urlquery, j, e = "?"; for (j in k) { 
 if (k.hasOwnProperty(j) && j !== "pedisable") { 
 e += j + "=" + k[j] + "&amp;" 
 } 
 } 
 
 if ((a.ie > 0 && a.ie < 7 && g !== "false") || g === "true") { 
 c("html").addClass("no-js pe-disable"); 
 if (i) { localStorage.setItem("pedisable", "true") 
 } 
 d.innerHTML = '<a href="' + e + 'pedisable=false">' + a.dic.get("%pe-enable") + "</a>"; 
 f.appendChild(d); 
 return true 
 } else { 
 if (g === "false" || h !== null) { 
 if (i) { localStorage.setItem("pedisable", "false") 
 } 
 } 
 } 
 d.innerHTML = '<a href="' + e + 'pedisable=true">' + a.dic.get("%pe-disable") + "</a>"; 
 f.appendChild(d); 
 return false }, 
 menu: { 
 navcurrent: function (d, p, g) { 
 var h = window.location.pathname, j = h + window.location.search, o, l, e, r, n, i, f, q, s, m = a.main.find("h1").text(), k = false; 
 d = typeof d.jquery !== "undefined" ? d : c(d); 
 o = d.find("a").get(); 
 n = o.length; 
 p = typeof p.jquery !== "undefined" ? p : c(p); 
 i = p.find("a").get(); 
 q = i.length; 
 g = (typeof g === "undefined") ? "nav-current" : g; 
 
 while (n--) { 
 l = o[n]; 
 if (l.getAttribute("href").indexOf("#") !== 0) { 
 e = l.pathname; 
 r = l.search; 
 s = q; 
 if ((r.length !== 0 && (e + r).indexOf(j) !== -1) || (r.length === 0 && e.indexOf(h) !== -1) || l.innerHTML === m) { 
 k = true; 
 break 
 } 
 while (s--) { 
 f = i[s]; 
 if (f.pathname.indexOf(e) !== -1) { 
 k = true; break 
 } 
 } 
 if (k) { break } } } return (k ? c(l).addClass(g) : c()) }, buildmobile: function (l, q, t, e, w) {
    var f = c('<div data-role="controlgroup"></div>'), i = "h" + q, v = "<" + i + ">", s = "</" + i + ">", 
    p = (typeof l.jquery !== "undefined" ? l : c(l)).find("> div, > ul, " + i), o, n, m, j, k, u = (e !== undefined ? e : false), 
    d = (w !== undefined ? w : false), h = a.dic.get("%main-page"), r = '<div data-role="collapsible-set" data-theme="' + t + '"></div>', 
    g = '<ul data-role="listview" data-theme="' + t + '"></ul>'; if (p.get(0).tagName.toLowerCase() === "ul") { f.append(c(g).append(p.first().children("li"))) }
     else {
        k = p.filter(i).length !== 0; p.each(function () {
            var y = c(this), x = this.tagName.toLowerCase(); if (x === i) {
                m = y.children("a"); n = c('<div data-role="collapsible"' + (d || m.hasClass("nav-current") ? ' data-collapsed="false"' : "") + ">" + v + y.text() + s + "</div>");
                o = y.next(); 
                if (o.get(0).tagName.toLowerCase() === "ul") 
                { 
                if (!u) { 
                o.append(c("<li></li>").append(y.children("a").html(m[0].innerHTML + " - " + h))) 
                } 
                j = o.find("li ul"); 
                j.each(function (B) { 
                var D = c(this), A, z = "<h" + (q + 1 + B) + ">", C = "</h" + (q + 1 + B) + ">"; 
                
                if ((q + 1 + B) < 7) { 
                m = D.prev("a"); 
                A = m[0].innerHTML; 
                D.attr({ "data-role": "listview", "data-theme": t }).wrap('<div data-role="collapsible"' + (d || m.hasClass("nav-current") ? ' data-collapsed="false"' : "") + 
                "></div>"); 
                D.parent().prepend(z + A + C); 
                D.append('<li><a href="' + m.attr("href") + '">' + A + " - " + h + "</a></li>"); 
                m.remove() 
                } 
                else { 
                D.attr({ "data-role": "listview", "data-theme": t }) 
                } 
                });
                n.append(c(g).append(o.children("li"))); 
                n.find("ul").wrap('<div data-role="controlgroup">' + (j.length > 0 ? r : "") + "</div>") 
                }
                else 
                {
                    if (u) {
                        n.append(a.menu.buildmobile(y.parent().find(".mb-sm"), q + 1, t, false, d))
                    }
                    else {
                        n.append(a.menu.buildmobile(y.parent(), q + 1, t, false, d))
                    }
                    if (!u) {
                        n.find('div[data-role="collapsible-set"]').eq(0).append(y.children("a").html(m[0].innerHTML + " - " + h).attr({ "data-role": "button", "data-theme": t, 
                        "data-icon": "arrow-r", "data-iconpos": "right" }))
                    }
                }
                f.append(n)
            }
            else {
                if (x === "div") {
                    o = y.children("a, ul");
                    if (o.length > 0) {
                        if (o.get(0).tagName.toLowerCase() === "a") {
                            if (k) {
                                f.append('<a href="' + o.attr("href") + '" data-role="button" data-theme="' + t + '" data-icon="arrow-r" data-iconpos="right">' + o.html() + 
                                "</a>")
                            }
                            else {
                                f.append('<ul data-role="listview" data-theme="' + t + '"><li><a href="' + o.attr("href") + '">' + o.html() + "</a></li></ul>")
                            }
                        }
                        else {
                            f.append(y.children("ul").attr({ "data-role": "listview", "data-theme": t }))
                        }
                    }
                }
            }
        });
        f.children().wrapAll(r)
    } return f
}, expandcollapsemobile: function (h, d, f, e) {
    var g = c((typeof h.jquery !== "undefined" ? h : c(h))).find(d);
    if (e) {
        g.parents('div[data-role="collapsible"]').attr("data-collapsed", f) 
    }
    else {
        g.closest('div[data-role="collapsible"]').attr("data-collapsed", f)
    } 
}, correctmobile: function (f) { var d = (typeof f.jquery !== "undefined" ? f : c(f)), e = d.parent(); d.detach().find(".ui-collapsible-set").each(function () { 
var g = c(this); if (g.find("> ul .ui-collapsible").length > 0) { g = g.children("ul") } g.children().each(function () { 
var i = c(this), h = (this.tagName.toLowerCase() === "a" ? i : i.find("a").first()); if (i.prev().length > 0) { h.removeClass("ui-corner-top") } 
else { h.addClass("ui-corner-top") } if (i.next().length > 0) { h.removeClass("ui-corner-bottom") } else { h.addClass("ui-corner-bottom") } }) }); 
d.appendTo(e) } 
}, polyfills: { init: function () { var d = a.add.liblocation; if (!window.localStorage) { a.add._load(d + "polyfills/localstorage" + a.suffix + ".js", "localstorage-loaded"); 
c("html").addClass("polyfill-localstorage") } else { c("html").addClass("localstorage") } }, polyload: function (e, h, t) { 
var s = this.polyfill, f, l, n, j = {}, v = [], m, d, g, k = a.add.liblocation, p = [], q = [], o = [], r, u; for (f in s) { if (s.hasOwnProperty(f)) { 
l = s[f]; n = t ? c(l.selector) : c(); if (n.length !== 0 || c.inArray(f, e) !== -1) { if (typeof l.supported === "undefined") { 
l.supported = (typeof l.support_check === "function" ? l.support_check() : l.support_check); if (!l.supported) { 
m = l.depends; if (typeof m !== "undefined") { d = a.add.depends(m); g = []; for (r = 0, u = m.length; r !== u; r += 1) { if (c.inArray(m[r], a.add.staged) === -1) { 
g.push(m[r]) } } if (g.length !== 0) { j[f] = g } else { v.push(f) } } else { v.push(f) } c("html").addClass("polyfill-" + f); n.addClass("polyfill") } 
else { c("html").addClass(f) } } else { if (!l.supported && typeof l.loaded === "undefined") { v.push(f) } } } } } 
for (r = 0, u = v.length; r !== u; r += 1) { l = s[v[r]]; o[o.length] = (typeof l.load !== "undefined" ? l.load : k + "polyfills/" + v[r] + a.suffix + ".js"); 
if (typeof l.init !== "undefined") { q.push(v[r]) } l.loaded = true } p.push(j); 
p.push(q); a.add._load_arr(o, h, p) }, polyfill: { datalist: { selector: "input[list]", depends: ["resize", "outside"], update: function (d) { 
d.datalist() }, support_check: !!(document.createElement("datalist") && window.HTMLDataListElement) }, datepicker: { selector: 'input[type="date"]', 
depends: ["calendar", "xregexp", "outside"], update: function (d) { d.datepicker() }, support_check: function () { var e = document.createElement("input"), d; 
e.setAttribute("type", "date"); e.value = ":)"; 
e.style.cssText = "position:absolute;visibility:hidden;"; 
document.body.appendChild(e); d = (e.value !== ":)"); document.body.removeChild(e); return d 
} 
}, detailssummary: { selector: "details", update: function (d) { 
d.details() }, support_check: function () { var h = document, f = h.createElement("details"), e, d, g; 

if (typeof f.open === "undefined") { return false } d = h.body || (function () { var i = h.documentElement; e = true; 
return i.insertBefore(h.createElement("body"), i.firstElementChild || i.firstChild) } ()); f.innerHTML = "<summary>a</summary>b"; 
f.style.display = "block"; d.appendChild(f); g = f.offsetHeight; f.open = true; g = g !== f.offsetHeight; d.removeChild(f); 

if (e) { d.parentNode.removeChild(d) } return g } },
 mathml: { selector: "math", load: "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=Accessible", support_check: function () { 
 var f = false, g, j, k, e, d, h, i; if (document.createElementNS) { g = "http://www.w3.org/1998/Math/MathML"; j = document.createElement("div"); 
 k = j.appendChild(document.createElement("div")); k.style.position = "absolute"; k.style.color = "#fff"; 
 d = k.appendChild(document.createElementNS(g, "math")).appendChild(document.createElementNS(g, "mrow")); 
 h = d.appendChild(document.createElementNS(g, "mo")); h.appendChild(document.createTextNode("|")); 
 i = d.appendChild(document.createElementNS(g, "mfrac")); 
 i.appendChild(document.createElementNS(g, "mi")).appendChild(document.createTextNode("xx")); 
 i.appendChild(document.createElementNS(g, "mi")).appendChild(document.createTextNode("yy")); 
 d.appendChild(document.createElementNS(g, "mo")).appendChild(document.createTextNode("|")); 
 e = j.appendChild(document.createElement("div")); e.style.color = "#fff"; e.style.display = "inline"; 
 e.appendChild(document.createTextNode("|xx|")); 
 document.body.appendChild(j); 
 f = k.offsetHeight > k.offsetWidth; k.style.position = "static"; k.style.display = "inline"; 
 f = f && k.offsetWidth < e.offsetWidth; j.parentNode.removeChild(j) } return f } }, progress: { selector: "progress", update: function (d) { 
 d.progress() }, support_check: document.createElement("progress").position !== undefined }, slider: { 
 selector: 'input[type="range"]', depends: ["metadata"], init: function () { fdSlider.onDomReady() }, update: function () { 
 fdSlider.onDomReady() }, support_check: function () { var e = document.createElement("input"), f, d; e.setAttribute("type", "range"); 
 e.value = ":)"; e.style.cssText = "position:absolute;visibility:hidden;"; document.body.appendChild(e); f = document.defaultView; 
 d = e.style.WebkitAppearance !== undefined && f.getComputedStyle && f.getComputedStyle(e, null).WebkitAppearance !== "textfield" && (e.offsetHeight !== 0); 
 document.body.removeChild(e); return d } }} }, add: (function () { return { head: document.head || document.getElementsByTagName("head"), liblocation: (function () { 
 var d = c('body script[src*="/pe-ap"]').attr("src"); return d.substr(0, d.lastIndexOf("/") + 1) 
 } ()), themecsslocation: (function () { var d = (wet_boew_theme !== null ? c('head link[rel="stylesheet"][href*="' + wet_boew_theme.theme + '"]') : ""); 
 return d.length > 0 ? d.attr("href").substr(0, d.attr("href").lastIndexOf("/") + 1) : "theme-not-found/" } ()), staged: [], _load: function (g, e) { 
 var d = a.add.head, h = (e !== undefined ? e : "wet-boew-dependency-loaded"); if (c.inArray(g, this.staged) > -1) { a.document.trigger({ type: h, js: g }); 
 return this } setTimeout(function f() { if (typeof d.item !== "undefined") { if (!d[0]) { 
 setTimeout(f, 25); return } d = d[0] } var i = document.createElement("script"), j = false; a.add.set(i, "async", "async"); 
 i.onload = i.onreadystatechange = function () { if ((i.readyState && i.readyState !== "complete" && i.readyState !== "loaded") || j) { return false } 
 
 i.onload = i.onreadystatechange = null; j = true; a.document.trigger({ type: h, js: g }) }; i.src = g; if ((a.ie > 0 && a.ie < 9) || !d.insertBefore) { 
 c(i).appendTo(c(d)).delay(100) } else { d.insertBefore(i, d.firstChild) } }, 0); this.staged[this.staged.length] = g; 
 return this }, _load_arr: function (k, g, j) { var e = 0, f, d, h = g + "-single"; a.document.on(h, function () { 
 e += 1; if (e === k.length) { a.document.off(h); a.document.trigger({ type: g, payload: j }) } }); if (k.length > 0) { 
 for (f = 0, d = k.length; f < d; f += 1) { a.add._load(k[f], h) } } else { a.document.off(h); a.document.trigger({ type: g, payload: j }) } 
 return this }, set: function (f, d, e) { f.setAttribute(d, e); return this }, css: function (f) { 
 var e = a.add.head, d = document.createElement("link"); a.add.set(d, "rel", "stylesheet").set(d, "href", f); 
 if ((a.ie > 0 && a.ie < 10) || !e.insertBefore) { c(d).appendTo(c(e)).attr("href", f) } else { e.insertBefore(d, e.firstChild) } return this }, depends: function (g) { 
 var f = a.add.liblocation, e = c.map(g, function (d) { return (/^http(s)?/i.test(d)) ? d : f + "dependencies/" + d + a.suffix + ".js" }); return e 
 }, language: function (e) { var d = a.add.liblocation + "i18n/" + e + a.suffix + ".js"; a.add._load(d) }, meta: function (e, f) {
  var d; d = document.createElement("meta"); a.add.set(d, "name", e).set(d, "content", f); a.add.head.appendChild(d); return this } } } ()), wb_load: function (e, h) { 
  if (typeof e === "undefined") { e = {} } if (typeof h === "undefined") { h = "wb-loaded" } 
  var q, u, r = (typeof wet_boew_properties !== "undefined" && wet_boew_properties !== null) ? wet_boew_properties : false, 
  n = typeof e.plugins !== "undefined" ? e.plugins : {}, d, l = typeof e.global !== "undefined" ? e.global : [], v, j = typeof e.dep !== "undefined" ? e.dep : [], 
  g = typeof e.poly !== "undefined" ? e.poly : [], t = typeof e.checkdom !== "undefined" ? e.checkdom : false, 
  f = typeof e.polycheckdom !== "undefined" ? e.polycheckdom : false, m = t ? c('[class^="wet-boew-"]') : c(), 
  k = (new Date()).getTime(), o = "wb-polyinit-loaded-" + k, s = "wb-pcalldeps-loaded-" + k, p = "wb-polydeps-loaded-" + k; for (d in n) { 
  
  if (n.hasOwnProperty(d)) { m = m.add(n[d].addClass("wet-boew-" + d)) } } m.each(function () { var w = c(this), i = w.attr("class").split(" "), x = []; 
  for (q = 0, u = i.length; q !== u; q += 1) { if (i[q].indexOf("wet-boew-") === 0) { x.push(i[q].substr(9).toLowerCase()) } } 
  w.attr("data-load", x.join(",")); l.push.apply(l, x) }); if (r) { l.push(r.globals) } l = a.array.noduplicates(l); 
  for (q = 0, u = l.length; q !== u; q += 1) { v = l[q]; if (typeof a.fn[v] !== "undefined") { if (typeof a.fn[v].polyfills !== "undefined") {
   g.push.apply(g, a.fn[v].polyfills) } if (typeof a.fn[v].depends !== "undefined") { j.push.apply(j, a.fn[v].depends) } } } 
   a.document.one(o, function (y) { var w = a.polyfills.polyfill, A = y.payload[0], z = y.payload[1], i = [], x; 
   for (q = 0, u = z.length; q !== u; q += 1) { w[z[q]].init() } for (x in A) { if (A.hasOwnProperty(x)) { j.push.apply(j, A[x]); i.push(x) } } 
   a.document.one(s, function () { a.document.one(p, function (B) { z = typeof B.payload !== "undefined" ? B.payload[1] : []; 
   for (q = 0, u = z.length; q !== u; q += 1) { w[z[q]].init() } m.each(function () { var C = c(this), D = C.attr("data-load").split(","); 
   for (q = 0, u = D.length; q !== u; q += 1) { if (typeof a.fn[D[q]] !== "undefined") { a.fn[D[q]]._exec(C) } } }); if (r) { 
   for (q = 0, u = r.globals.length; q !== u; q += 1) { a.fn[r.globals[q]]._exec(document) } } a.document.trigger(h) }); 
   if (i.length !== 0) { a.polyfills.polyload(i, p, false) } else { a.document.trigger(p) } }); a.add._load_arr(a.add.depends(a.array.noduplicates(j)), s) }); 
   a.polyfills.polyload(a.array.noduplicates(g), o, f) }, dance: function () { var d = "wb-init-loaded"; a.document.one(d, function () { a.resize(function () { 
   var e = a.mobilecheck(); if (a.mobile !== e) { a.mobile = e; window.location.href = decodeURI(a.url(window.location.href).removehash()) } }) }); 
   a.wb_load({ dep: ["resize", "equalheights"], checkdom: true, polycheckdom: true }, d) } 
}; window.pe = c.extend(true, a, b); return window.pe
} 
(jQuery))._init(); 
(function (b) { 
var a = window.pe || { fn: {} }; 
a.fn.archived = { type: "plugin", _exec: function (d) { 
if (pe.mobile) { return } 
var c = b('<div class="archived" role="toolbar"><a class="archived-top-page" href="#archived" role="link">' + pe.dic.get("%archived-page") + "</a></div>"); 
b(window).on("scroll", function () { 
if (b(this).scrollTop() > 10) { 
c.fadeIn("normal").attr("aria-hidden", "false") 
} 
else { 
c.fadeOut("normal").attr("aria-hidden", "true") 
} 
}); 
b(document).on("focusin", function (g) { var f = b(g.target); if (c.attr("aria-hidden") === "false" && (f.offset().top + f.outerHeight()) <= (c.offset().top + c.outerHeight())) 
{ 
b(window).scrollTop(b(window).scrollTop() - c.outerHeight()) 
} 
}); 
if (b(window).scrollTop() < 10 || b(window).scrollTop() === "undefined") { 
c.fadeOut("normal").attr("aria-hidden", "true") 
} 
else { 
c.fadeIn("normal").attr("aria-hidden", "false") 
} 
pe.pagecontainer().append(c) 
} 
}; 
window.pe = a; 
return a 
} (jQuery)); (function (b) { 
var a = window.pe || { fn: {} }; 
a.fn.charts = { 
type: "plugin", depends: ["raphael"], polyfills: ["detailssummary"], _exec: function (k) { 
var p = {}, e, n = b(k), h = new Date().getTime(), j = {}, c = {}, q, m, g = ""; 
if (typeof (wet_boew_charts) !== "undefined" && wet_boew_charts !== null) { 
p = wet_boew_charts 
} 
e = b.extend(true, { "default-namespace": ["wb-charts", "wb-chart", "wb-graph"], "graphclass-autocreate": true, "graphclass-overwrite-array-mode": true, 
"graphclass-typeof": "string", "noencapsulation-autocreate": true, "topvalue-autocreate": true, "topvalue-typeof": "number", "topvaluenegative-autocreate": true, 
"topvaluenegative-typeof": "boolean", "bottomvalue-autocreate": true, "bottomvalue-typeof": "number", "bottomvaluenegative-autocreate": true, 
"bottomvaluenegative-typeof": "boolean", "nocutaxis-autocreate": true, "nocutaxis-typeof": "boolean", "steps-autocreate": true, 
"steps-typeof": "number", "decimal-autocreate": true, "decimal-typeof": "number", "execdelay-autocreate": true, "execdelay-typeof": "number", 
serie: { type: "line", color: "blue" }, serie2dAxis: { dasharray: "", fillopacity: 100 }, heading2dAxis: { fill: "white", fillover: "blue", 
foreground: "black", foregroundover: "red" }, "default-option": "type", type: "bar", "type-autocreate": true, 
optionsClass: { "default-option": "type", "type-autocreate": true, "color-autocreate": true, "overcolor-autocreate": true, 
"default-namespace": ["wb-charts", "wb-chart", "wb-graph"], "dasharray-autocreate": true, "noencapsulation-autocreate": true, "fillopacity-autocreate": true, 
"fillopacity-typeof": "number" }, width: b(k).width(), "width-typeof": "number", height: b(k).height(), "height-typeof": "number", maxwidth: "9999", 
"maxwidth-typeof": "number", widthPadding: 2, colors: ["#be1e2d", "#666699", "#92d5ea", "#ee8310", "#8d10ee", "#5a3b16", "#26a4ed", "#f45a90", "#e9e744"], 
textColors: [], parsedirection: "x", "parsedirection-typeof": "string", "parsedirection-autocreate": true, drawDirection: "x", pieMargin: 20, 
pieLabelsAsPercent: true, pieLabelPos: "inside", lineWeight: 4, barGroupMargin: 10, barMargin: 1, font: { height: 20, width: 10, size: 14 }, 
axis: { top: { tick: null, lenght: null, padding: null }, right: { tick: null, lenght: null, padding: null }, bottom: { tick: null, lenght: null, padding: null }, 
left: { tick: null, lenght: null, padding: null }, tick: true, lenght: 4, padding: 4, minNbIncrementStep: 6} }, p); function d(o) { 
var r = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", 
bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", 
cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", 
cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", 
darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", 
darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", 
deepskyblue: "#00bfff", dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", 
gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", 
hotpink: "#ff69b4", "indianred ": "#cd5c5c", "indigo ": "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", 
lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgrey: "#d3d3d3", 
lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", 
lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", 
mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", 
mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", 
moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", 
orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", 
peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", 
saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", 
slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", 
tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" };
return (r[o.toLowerCase()] !== "undefined" ? r[o.toLowerCase()] : (b.isArray(e.colors) ? e.colors[0] : e.colors)) 
} 
j.circleGraph = { 
height: undefined, width: undefined, offset: { top: undefined, right: undefined, bottom: undefined, left: undefined }, sizeMode: "minimal", maxWidth: 600, minWidth: 150, 
strokeWidth: 3, minLevelWidth: 25, levelPadding: 10, nbPieByRow: undefined, props: { minWidth: 100, minLevelWidth: 50 }, captionFontSize: 20, fontSize: 10, piePadding: 10, 
graphPadding: 10, pieByRow: undefined, minPieWidth: undefined, graphTitle: undefined, legendContainer: undefined, paperContainer: undefined, paper: undefined, 
paperDOM: undefined, series: {}, options: {}, init: function (r, y) { j.circleGraph.width = undefined; j.circleGraph.minWidth = 150; j.circleGraph.minLevelWidth = 25; 
j.circleGraph.levelPadding = 10; j.circleGraph.series = r; j.circleGraph.options = y; j.circleGraph.width = j.circleGraph.options.width; 
var u = 1, v = j.circleGraph.series.nbColLevel - 1, x = (v * ((j.circleGraph.minLevelWidth * 2) + (j.circleGraph.levelPadding * 2)) + 
(v * (j.circleGraph.strokeWidth * 2))), w = j.circleGraph.minWidth + (j.circleGraph.levelPadding * 2) + (j.circleGraph.strokeWidth * 2), o = x + w, s, t; 
j.circleGraph.pieByRow = u; if (!j.circleGraph.width || o > j.circleGraph.width) { j.circleGraph.width = o } else { s = j.circleGraph.minWidth / o; 
t = j.circleGraph.minLevelWidth / o; j.circleGraph.minWidth = Math.floor(s * (j.circleGraph.width)); j.circleGraph.minLevelWidth = Math.floor(t * (j.circleGraph.width)) } 
j.circleGraph.height = j.circleGraph.width }, generateGraph: function (s, v) { j.circleGraph.paperContainer = s; j.circleGraph.paper = v; 

var o = 1, u = 1, r = 0, t = 0, w = false; b.each(j.circleGraph.series.series, function () { var M = [], z, O, A, P, H, y, x, I, E, B, L, N, C, K, G, D = []; 
w = false; O = b("<ul>").appendTo((b.isArray(j.circleGraph.paperContainer) ? b(j.circleGraph.paperContainer[u - 1]) : j.circleGraph.paperContainer)); 
j.circleGraph.legendContainer = O; A = (b.isArray(j.circleGraph.paper) ? j.circleGraph.paper[u - 1] : j.circleGraph.paper); u += 1; 
if (o >= (j.circleGraph.pieByRow * (u + 1))) { r = 0 } P = 0; H = false; b.each(this.cell, function () { if (this.value < 0) { H = true } 
if (j.circleGraph.options.decimal) { this.value = Math.floor(this.value * Math.pow(10, j.circleGraph.options.decimal)) } P += this.value });
 y = (j.circleGraph.width / 2) + (j.circleGraph.width * r); x = (j.circleGraph.width / 2) + (j.circleGraph.width * r); E = "#000"; B = 0; L = 90; 
 N = Math.PI / 180; K = 500; function J(S, Q) { var R = (j.circleGraph.minWidth / 2) + j.circleGraph.strokeWidth + j.circleGraph.levelPadding + 
 (j.circleGraph.series.nbColLevel - S - Q - 1) * (j.circleGraph.levelPadding + (j.circleGraph.strokeWidth * 2) + j.circleGraph.minLevelWidth); return R } 
 function F(R, Q) { return (J(R, Q) + j.circleGraph.minLevelWidth + j.circleGraph.strokeWidth) } G = j.circleGraph.series.nbColLevel; 
 b.each(this.cell, function () { var ai = this.colPos, W = "", Q = G, ag = [], ab = [], al, aj, am, T, ad, ak, S, ae, ah, R, V, af, aq, Z, Y, U, an, aa, X, ap, ac, ao; 
 b.each(j.circleGraph.series.heading, function () { if (this.colPos < ai && ai <= (this.colPos + this.width)) { if (this.level <= G && G <= (this.level + this.height)) {
  W = this.header; Q = this.level } else { var ar = { level: this.level, height: this.height, id: this.id, header: this.header, param: this.param }; ag.push(ar) } } });
   ab.push("M", y, x); al = 360 * this.value / P; I = (j.circleGraph.minWidth / 2); if (Q < (G - 1)) { I += ((j.circleGraph.minLevelWidth + j.circleGraph.levelPadding + 
   (j.circleGraph.strokeWidth * 2)) * ((G - 1) - Q)) } aj = L; am = y + I * Math.cos(-aj * N); T = x + I * Math.sin(-aj * N); ab.push("L", am, T); ad = L + al; 
   ak = y + I * Math.cos(-ad * N); S = x + I * Math.sin(-ad * N); C = ad; ab.push("A", I, I, 0, +(ad - aj > 180), 0, ak, S); ab.push("z"); b.each(ag, function () { 
   var ar = this, av = true, at, au; ar.still = false; b.each(D, function () { if (this.id === ar.id) { ar.still = true; this.still = true; av = false; return false } }); 
   
   if (!this.topX1) { at = J(this.level, this.height); au = F(this.level, this.height); this.topX1 = y + au * Math.cos(-aj * N); this.topY1 = x + au * Math.sin(-aj * N); 
   this.bottomX1 = y + at * Math.cos(-aj * N); this.bottomY1 = x + at * Math.sin(-aj * N); this.r1 = au; this.r2 = at; this.startAngle = aj; this.bcolor = Raphael.hsb(B, 1, 1); 
   this.color = Raphael.hsb(B, 0.75, 1); this.start = B; B += 0.05 } if (av) { this.still = true; D.push(this) } }); b.each(D, function () { if (!this.still && !this.ignoreMe) { 
   var aF = J(this.level, this.height), aG = F(this.level, this.height), aK = y + aG * Math.cos(-aj * N), aw = x + aG * Math.sin(-aj * N), av = y + aF * Math.cos(-aj * N), 
   aD = x + aF * Math.sin(-aj * N), aB = [], ar = (aj - this.startAngle) / 360 * 100, au = "90-" + this.bcolor + "-" + this.color, aL, az, ax, at, aE, aH, aA, ay, aJ, aC, aI;
    aB.push("M", this.topX1, this.topY1); aB.push("A", aG, aG, 0, +(aj - this.startAngle > 180), 0, Math.ceil(aK), Math.ceil(aw)); aB.push("L", Math.ceil(av), Math.ceil(aD)); 
    aB.push("A", aF, aF, 0, +(aj - this.startAngle > 180), 1, Math.ceil(this.bottomX1), Math.ceil(this.bottomY1)); aB.push("z"); if (j.circleGraph.options.decimal) { 
    ar = ar * (Math.pow(10, j.circleGraph.options.decimal)) } ar = Math.ceil(ar * 1000); ar = Math.floor(ar / 1000); if (j.circleGraph.options.decimal) { 
    ar = ar / (Math.pow(10, j.circleGraph.options.decimal)) } if (this.param.color) { au = d(this.param.color) } if (!w) { aL = b("<li></li>").appendTo(b(O)); 
    az = b('<span style="margin-right:7px;"></span>').appendTo(b(aL)); ax = new Raphael(b(az).get(0), j.circleGraph.options.font.size, j.circleGraph.options.font.size); 
    at = ax.rect(2, 2, j.circleGraph.options.font.size - (2 * 2) + (2 / 2), j.circleGraph.options.font.size - (2 * 2) + (2 / 2)); b(aL).append(this.header); at.attr("fill", au) 
    } aE = A.path(aB).attr({ fill: au, stroke: E, "stroke-width": 3, title: this.header + " (" + ar + "%)" }); aH = ((aj - this.startAngle) / 2) + this.startAngle; 
    aA = A.text(y + (aG * Math.cos(-aH * N)), x + (aG * Math.sin(-aH * N)), ar + "%").attr({ fill: "#000", stroke: "none", opacity: 1, "font-size": j.circleGraph.fontSize }); 
    ay = aA.getBBox(); aJ = A.rect(ay.x - 10, ay.y - 10, ay.width + (2 * 10), ay.height + (2 * 10)).attr({ fill: "#FFF", stroke: "black", "stroke-width": "1", opacity: 1 }); 
    M.push({ txt: aA, bg: aJ }); aC = this.start; aI = Raphael.hsb(aC, 1, 0.3); if (this.param.overcolor) { aI = d(this.param.overcolor) } aE.mouseover(function () { 
    aE.stop().attr({ fill: aI }); aJ.stop().attr({ "stroke-width": "3" }); aA.insertAfter(z); aJ.insertBefore(aA); z = aA }).mouseout(function () { aE.stop().attr({ fill: au }); 
    aJ.stop().attr({ "stroke-width": "1" }) }); aJ.mouseover(function () { aE.stop().attr({ fill: aI }); aJ.stop().attr({ "stroke-width": "3" }); 
    aA.insertAfter(z); aJ.insertBefore(aA); z = aA }).mouseout(function () { aE.stop().attr({ fill: au }); aJ.stop().attr({ "stroke-width": "1" }) }); 
    aA.mouseover(function () { aE.stop().attr({ fill: aI }); aJ.stop().attr({ "stroke-width": "3" }); aA.insertAfter(z); aJ.insertBefore(aA); z = aA }).mouseout(function () { 
    aE.stop().attr({ fill: au }); aJ.stop().attr({ "stroke-width": "1" }) }); this.ignoreMe = true } this.still = false }); ae = Raphael.hsb(B, 1, 1); 
    ah = Raphael.hsb(B, 0.75, 1); R = (ad - aj) / 360 * 100; if (j.circleGraph.options.decimal) { R = R * (Math.pow(10, j.circleGraph.options.decimal)) } 
    R = Math.ceil(R * 1000); R = Math.floor(R / 1000); if (j.circleGraph.options.decimal) { R = R / (Math.pow(10, j.circleGraph.options.decimal)) } 
    V = "90-" + ae + "-" + ah; if (this.param.color) { V = d(this.param.color) } af = A.path(ab).attr({ fill: V, stroke: E, "stroke-width": 3, title: W + " (" + R + "%)" });
     if (!w) { aq = b("<li></li>").appendTo(b(O)); Z = b('<span style="margin-right:7px;"></span>').appendTo(b(aq)); 
     Y = new Raphael(b(Z).get(0), j.circleGraph.options.font.size, j.circleGraph.options.font.size); 
     U = Y.rect(2, 2, j.circleGraph.options.font.size - (2 * 2) + (2 / 2), j.circleGraph.options.font.size - (2 * 2) + (2 / 2)); b(aq).append(W); 
     U.attr("fill", V) } an = L + (al / 2); aa = A.text(y + (I * Math.cos(-an * N)), x + (I * Math.sin(-an * N)), R + "%").attr({ fill: "#000", stroke: "none", opacity: 1, 
     "font-size": j.circleGraph.fontSize }); X = aa.getBBox(); ap = A.rect(X.x - 10, X.y - 10, X.width + (2 * 10), X.height + (2 * 10)).attr({ fill: "#FFF", 
     stroke: "black", "stroke-width": "1", opacity: 1 }); M.push({ txt: aa, bg: ap }); ac = B; ao = Raphael.hsb(ac, 1, 0.3); if (this.param.overcolor) { ao = d(this.param.overcolor) } af.mouseover(function () { af.stop().attr({ fill: ao }); ap.stop().attr({ "stroke-width": "3" }); aa.insertAfter(z); ap.insertBefore(aa); z = aa }).mouseout(function () { af.stop().attr({ fill: V }); ap.stop().attr({ "stroke-width": "1" }) }); ap.mouseover(function () { af.stop().attr({ fill: ao }); ap.stop().attr({ "stroke-width": "3" }); aa.insertAfter(z); ap.insertBefore(aa); z = aa }).mouseout(function () { af.stop().attr({ fill: V }); ap.stop().attr({ "stroke-width": "1" }) }); aa.mouseover(function () { af.stop().attr({ fill: ao }); ap.stop().attr({ "stroke-width": "3" }); aa.insertAfter(z); ap.insertBefore(aa); z = aa }).mouseout(function () { af.stop().attr({ fill: V }); ap.stop().attr({ "stroke-width": "1" }) }); L += al; B += 0.1; o += 1; r += 1 }); b.each(D, function () { if (!this.ignoreMe) { var ad = J(this.level, this.height), ae = F(this.level, this.height), ai = y + ae * Math.cos(-C * N), U = x + ae * Math.sin(-C * N), T = y + ad * Math.cos(-C * N), ab = x + ad * Math.sin(-C * N), Z = [], Q, S, R, V, X, aj, ac, af, Y, W, ah, aa, ag; Z.push("M", this.topX1, this.topY1); Z.push("A", ae, ae, 0, +(C - this.startAngle > 180), 0, Math.ceil(ai), Math.ceil(U)); Z.push("L", Math.ceil(T), Math.ceil(ab)); Z.push("A", ad, ad, 0, +(C - this.startAngle > 180), 1, Math.ceil(this.bottomX1), Math.ceil(this.bottomY1)); Z.push("z"); Q = (C - this.startAngle) / 360 * 100; if (j.circleGraph.options.decimal) { Q = Q * (Math.pow(10, j.circleGraph.options.decimal)) } Q = Math.ceil(Q * 1000); Q = Math.floor(Q / 1000); if (j.circleGraph.options.decimal) { Q = Q / (Math.pow(10, j.circleGraph.options.decimal)) } S = "90-" + this.bcolor + "-" + this.color; if (this.param.color) { S = d(this.param.color) } if (!w) { aj = b("<li></li>").appendTo(b(O)); X = b('<span style="margin-right:7px;"></span>').appendTo(b(aj)); V = new Raphael(b(X).get(0), j.circleGraph.options.font.size, j.circleGraph.options.font.size); R = V.rect(2, 2, j.circleGraph.options.font.size - (2 * 2) + (2 / 2), j.circleGraph.options.font.size - (2 * 2) + (2 / 2)); b(aj).append(this.header); R.attr("fill", S) } ac = A.path(Z).attr({ fill: S, stroke: E, "stroke-width": 3, title: this.header + " (" + Q + "%)" }); af = ((C - this.startAngle) / 2) + this.startAngle; Y = A.text(y + (ae * Math.cos(-af * N)), x + (ae * Math.sin(-af * N)), Q + "%").attr({ fill: "#000", stroke: "none", opacity: 1, "font-size": j.circleGraph.fontSize }); W = Y.getBBox(); ah = A.rect(W.x - 10, W.y - 10, W.width + (2 * 10), W.height + (2 * 10)).attr({ fill: "#FFF", stroke: "black", "stroke-width": "1", opacity: 1 }); M.push({ txt: Y, bg: ah }); aa = this.start; ag = Raphael.hsb(aa, 1, 0.3); if (this.param.overcolor) { ag = d(this.param.overcolor) } ac.mouseover(function () { ac.stop().attr({ fill: ag }); ah.stop().attr({ "stroke-width": "3" }); Y.insertAfter(z); ah.insertBefore(Y); z = Y }).mouseout(function () { ac.stop().attr({ fill: S }); ah.stop().attr({ "stroke-width": "1" }) }); ah.mouseover(function () { ac.stop().attr({ fill: ag }); ah.stop().attr({ "stroke-width": "3" }); Y.insertAfter(z); ah.insertBefore(Y); z = Y }).mouseout(function () { ac.stop().attr({ fill: S }); ah.stop().attr({ "stroke-width": "1" }) }); Y.mouseover(function () { ac.stop().attr({ fill: ag }); ah.stop().attr({ "stroke-width": "3" }); Y.insertAfter(z); ah.insertBefore(Y); z = Y }).mouseout(function () { ac.stop().attr({ fill: S }); ah.stop().attr({ "stroke-width": "1" }) }); this.ignoreMe = true } }); z = A.rect(0, 0, 1, 1).attr({ opacity: 0 }); b.each(M, function () { this.txt.insertAfter(z); this.bg.insertBefore(this.txt) }); z = M[M.length - 1].txt; M = []; w = true }) } }; j.graph2dAxis = { drawDirection: "x", height: undefined, width: undefined, offset: { top: undefined, right: undefined, bottom: undefined, left: undefined }, cuttingOffset: undefined, xAxisOffset: undefined, cuttingPosPaper: undefined, NbColumnHeading: 0, NbColumnHeaderLevel: undefined, zeroPos: undefined, cuttingPos: undefined, incrementation: undefined, nbStep: undefined, layout: { headingMinSize: undefined, nbColHeading: undefined }, top: undefined, bottom: undefined, graphTitle: undefined, legendContainer: undefined, paperContainer: undefined, paper: undefined, paperDOM: undefined, series: {}, options: {}, setNbColumnHeading: function () { j.graph2dAxis.NbColumnHeading = 0; j.graph2dAxis.NbColumnHeaderLevel = 0; var o, r = []; b.each(j.graph2dAxis.series.heading, function () { if (!this.isGroup && (this.colPos + this.width) > j.graph2dAxis.series.nbRowLevel) { j.graph2dAxis.NbColumnHeading += 1; if (!r[this.level] || (this.header.length * j.graph2dAxis.options.font.width) > (r[this.level] * j.graph2dAxis.options.font.width)) { r[this.level] = this.header.length * j.graph2dAxis.options.font.width } } if (this.level > j.graph2dAxis.NbColumnHeaderLevel || j.graph2dAxis.NbColumnHeaderLevel === undefined) { j.graph2dAxis.NbColumnHeaderLevel = this.level } }); j.graph2dAxis.NbColumnHeaderLevel += 1; o = (j.graph2dAxis.options.font.height * j.graph2dAxis.NbColumnHeaderLevel) + (j.graph2dAxis.options.axis.top.padding !== null ? j.graph2dAxis.options.axis.top.padding : j.graph2dAxis.options.axis.padding); j.graph2dAxis.layout.headingMinSize = o }, utils: { topRound: function (o) { if (o >= 0) { o = Math.ceil(o) } else { o = Math.floor(o) } return o } }, setHeightXLabel: function () { j.graph2dAxis.offset.top = (j.graph2dAxis.options.font.height / 2); var r = Math.ceil((j.graph2dAxis.options.height - j.graph2dAxis.layout.headingMinSize) / j.graph2dAxis.options.font.height), o = r - j.graph2dAxis.NbColumnHeaderLevel; if (o < j.graph2dAxis.options.axis.minNbIncrementStep) { o = j.graph2dAxis.options.axis.minNbIncrementStep; r = j.graph2dAxis.options.axis.minNbIncrementStep + j.graph2dAxis.NbColumnHeaderLevel } j.graph2dAxis.nbStep = o; j.graph2dAxis.options.height = (j.graph2dAxis.options.font.height * r) }, setLeftOffset: function () { if (j.graph2dAxis.top.toString().length > j.graph2dAxis.bottom.toString().length) { j.graph2dAxis.offset.left = j.graph2dAxis.options.font.width * j.graph2dAxis.top.toString().length } else { j.graph2dAxis.offset.left = j.graph2dAxis.options.font.width * j.graph2dAxis.bottom.toString().length } }, setBottomOffset: function () { j.graph2dAxis.offset.bottom = j.graph2dAxis.options.height - (j.graph2dAxis.nbStep * j.graph2dAxis.options.font.height); if (j.graph2dAxis.cuttingPos > 0) { j.graph2dAxis.offset.bottom -= (2 * j.graph2dAxis.options.font.height) } }, setMetric: function () { var o, y, s, z, u = 0, r, v, t, x, w; if (j.graph2dAxis.options.topvalue) { if (j.graph2dAxis.options.topvaluenegative) { o = -(j.graph2dAxis.options.topvalue) } else { o = j.graph2dAxis.options.topvalue } } if (j.graph2dAxis.options.bottomvalue) { if (j.graph2dAxis.options.bottomvaluenegative) { y = -(j.graph2dAxis.options.bottomvalue) } else { y = j.graph2dAxis.options.bottomvalue } } b.each(j.graph2dAxis.series.series, function () { b.each(this.cell, function () { if (o === undefined) { o = this.value } if (o < this.value) { o = this.value } if (y === undefined) { y = this.value } if (y > this.value) { y = this.value } }) }); if (o > 0) { r = Math.floor(o); o = (o - r > 0 ? r + 1 : r) } else { o = Math.ceil(o) } y = Math.floor(y); if (o === y) { if (o > 0) { y = 0 } else { if (o < 0) { o = 0 } else { y = -5; o = 5 } } } v = j.graph2dAxis.utils.topRound(o - y); s = j.graph2dAxis.utils.topRound(v / j.graph2dAxis.nbStep); z = Math.round(j.graph2dAxis.nbStep * o / v); if (z > j.graph2dAxis.nbStep) { z = j.graph2dAxis.nbStep } if (z < 0) { z = 1 } t = j.graph2dAxis.utils.topRound(o / (z - 1)); x = Math.abs(j.graph2dAxis.utils.topRound(y / (j.graph2dAxis.nbStep - z))); if (t > s && (y >= 0 || (o > 0 && 0 > y))) { s = t } if (x > s && (o <= 0 || (o > 0 && 0 > y))) { s = x } w = j.graph2dAxis.utils.topRound(v / (j.graph2dAxis.nbStep - 2)); if (!j.graph2dAxis.options.nocutaxis) { if (w < t && y > 0) { u = (j.graph2dAxis.nbStep - 1); j.graph2dAxis.nbStep = j.graph2dAxis.nbStep - 2; s = w } if (w < x && o < 0) { u = 2; j.graph2dAxis.nbStep = j.graph2dAxis.nbStep - 2; s = w } } if (j.graph2dAxis.options.steps) { s = j.graph2dAxis.options.steps } if (u === 0) { o = j.graph2dAxis.utils.topRound((z - 1) * s); y = Math.floor(o - ((j.graph2dAxis.nbStep - 1) * s)) } else { y = Math.floor(o - ((j.graph2dAxis.nbStep - 1) * s)) } j.graph2dAxis.top = o; j.graph2dAxis.bottom = y; j.graph2dAxis.zeroPos = z; j.graph2dAxis.cuttingPos = u; j.graph2dAxis.incrementation = s }, init: function (r, o) { j.graph2dAxis.series = r; j.graph2dAxis.options = o; j.graph2dAxis.setNbColumnHeading(); if (j.graph2dAxis.drawDirection === "x") { j.graph2dAxis.setHeightXLabel(); j.graph2dAxis.setMetric(); j.graph2dAxis.cuttingOffset = 0; if (j.graph2dAxis.cuttingPos === (j.graph2dAxis.nbStep - 1)) { j.graph2dAxis.cuttingOffset = j.graph2dAxis.options.font.height } } }, generateGraph: function (o, r) { j.graph2dAxis.paperContainer = o; j.graph2dAxis.paper = r; if (j.graph2dAxis.drawDirection === "x") { j.graph2dAxis.setLeftOffset(); j.graph2dAxis.setBottomOffset(); j.graph2dAxis.xAxis(); j.graph2dAxis.xLabel(); j.graph2dAxis.yAxisLabel(); j.graph2dAxis.graph() } }, xAxis: function () { j.graph2dAxis.xAxisOffset = (j.graph2dAxis.options.font.height * (j.graph2dAxis.zeroPos - 1) + j.graph2dAxis.offset.top + j.graph2dAxis.cuttingOffset); var w = "M " + j.graph2dAxis.offset.left + " " + j.graph2dAxis.xAxisOffset + " ", o, r, v, u, s; for (u = 1, s = j.graph2dAxis.NbColumnHeading; u <= s; u += 1) { o = (u * ((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / j.graph2dAxis.NbColumnHeading)); if (j.graph2dAxis.options.axis.tick || (j.graph2dAxis.options.axis.top.tick !== null ? j.graph2dAxis.options.axis.top.tick : false) || (j.graph2dAxis.options.axis.bottom.tick !== null ? j.graph2dAxis.options.axis.bottom.tick : false)) { r = ((u - 1) * ((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / j.graph2dAxis.NbColumnHeading)); v = ((o - r) / 2) + r; v += j.graph2dAxis.offset.left; w += "L " + v + " " + j.graph2dAxis.xAxisOffset + " "; if (j.graph2dAxis.options.axis.top.tick !== null ? j.graph2dAxis.options.axis.top.tick : j.graph2dAxis.options.axis.tick) { w += "L " + v + " " + (j.graph2dAxis.xAxisOffset - (j.graph2dAxis.options.axis.top.lenght !== null ? j.graph2dAxis.options.axis.top.lenght : j.graph2dAxis.options.axis.lenght)) + " " } if (j.graph2dAxis.options.axis.bottom.tick !== null ? j.graph2dAxis.options.axis.bottom.tick : j.graph2dAxis.options.axis.tick) { w += "L " + v + " " + (j.graph2dAxis.xAxisOffset + (j.graph2dAxis.options.axis.bottom.lenght !== null ? j.graph2dAxis.options.axis.bottom.lenght : j.graph2dAxis.options.axis.lenght)) + " " } w += "L " + v + " " + j.graph2dAxis.xAxisOffset + " " } o += j.graph2dAxis.offset.left; w += "L " + o + " " + j.graph2dAxis.xAxisOffset + " " } try { j.graph2dAxis.paper.path(w) } catch (t) { } }, xLabel: function () { b.each(j.graph2dAxis.series.heading, function () { var E = this.colPos, t = (this.colPos + this.width), z, A, w, D = "middle", x, G, F, v, o, r, u, B, C, y, s, H; if (E >= j.graph2dAxis.series.nbRowLevel) { E -= j.graph2dAxis.series.nbRowLevel; t = t - j.graph2dAxis.series.nbRowLevel; z = Math.floor((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / (j.graph2dAxis.NbColumnHeading) * E); A = Math.floor((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / (j.graph2dAxis.NbColumnHeading) * t); w = z; w = Math.floor((A - z) / 2) + z; w += j.graph2dAxis.offset.left; x = (j.graph2dAxis.series.nbColLevel - this.height - this.level); o = (j.graph2dAxis.options.height - j.graph2dAxis.layout.headingMinSize) + (j.graph2dAxis.options.font.height * x); r = o + (this.height * j.graph2dAxis.options.font.height); u = o + ((r - o) / 2); B = z + j.graph2dAxis.offset.left; C = ((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / (j.graph2dAxis.NbColumnHeading)) * (this.width); y = r - o; s = "50-#F4F4F4-#FFF"; H = "90-#FFF-#F4F4F4"; if (this.param.fill) { s = d(this.param.fill) } if (this.param.fillover) { H = d(this.param.fillover) } G = j.graph2dAxis.paper.rect(B, o, C, y); G.attr("fill", s); G.attr("stroke-width", "0"); F = this.header; if ((F.length * j.graph2dAxis.options.font.width) > C) { F = F.substring(0, Math.floor(C / j.graph2dAxis.options.font.width)) } v = j.graph2dAxis.paper.text(w, u, F); v.attr("text-anchor", D); v.attr("font-size", j.graph2dAxis.options.font.size + "px"); v.attr("title", this.header); G.mouseover(function () { G.attr("fill", H) }).mouseout(function () { G.attr("fill", s) }); v.mouseover(function () { G.attr("fill", H) }).mouseout(function () { G.attr("fill", s) }) } }) }, yAxisLabel: function () { var t = "M " + j.graph2dAxis.offset.left + " " + j.graph2dAxis.offset.top + " ", u, s, r, o; j.graph2dAxis.cuttingPosPaper = 0; if (j.graph2dAxis.top < 0) { u = j.graph2dAxis.paper.text(j.graph2dAxis.offset.left - 4, j.graph2dAxis.offset.top, 0); u.attr("text-anchor", "end"); u.attr("font-size", j.graph2dAxis.options.font.size + "px"); t += "L " + j.graph2dAxis.offset.left + " " + j.graph2dAxis.offset.top + " "; t += "L " + (j.graph2dAxis.offset.left + 4) + " " + j.graph2dAxis.offset.top + " "; t += "L " + (j.graph2dAxis.offset.left - 2) + " " + j.graph2dAxis.offset.top + " "; t += "L " + j.graph2dAxis.offset.left + " " + j.graph2dAxis.offset.top + " "; t += "L " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + (j.graph2dAxis.options.font.height) - (j.graph2dAxis.options.font.height / 4)) + " "; t += "L " + (j.graph2dAxis.offset.left + 10) + " " + (j.graph2dAxis.offset.top + (j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left - 10) + " " + (j.graph2dAxis.offset.top + (j.graph2dAxis.options.font.height) - (j.graph2dAxis.options.font.height / 2)) + " "; j.graph2dAxis.paper.path(t); t = "M " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + j.graph2dAxis.options.font.height + (j.graph2dAxis.options.font.height / 4)) + " "; t += "L " + (j.graph2dAxis.offset.left + 10) + " " + (j.graph2dAxis.offset.top + j.graph2dAxis.options.font.height + (j.graph2dAxis.options.font.height / 2)) + " "; t += "L " + (j.graph2dAxis.offset.left - 10) + " " + (j.graph2dAxis.offset.top + j.graph2dAxis.options.font.height) + " "; t += "L " + (j.graph2dAxis.offset.left) + " " + (j.graph2dAxis.offset.top + j.graph2dAxis.options.font.height + (j.graph2dAxis.options.font.height / 4)) + " "; j.graph2dAxis.cuttingPosPaper = (j.graph2dAxis.offset.top + j.graph2dAxis.options.font.height); j.graph2dAxis.offset.top += (2 * j.graph2dAxis.options.font.height) } for (s = 0, r = j.graph2dAxis.nbStep; s < r; s += 1) { if (j.graph2dAxis.cuttingPos === 0 || (j.graph2dAxis.cuttingPos > s && j.graph2dAxis.bottom > 0) || j.graph2dAxis.top < 0) { u = j.graph2dAxis.paper.text(j.graph2dAxis.offset.left - 4, j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height), (j.graph2dAxis.top - (s * j.graph2dAxis.incrementation))); u.attr("text-anchor", "end"); u.attr("font-size", j.graph2dAxis.options.font.size + "px"); t += "L " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left + 4) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left - 2) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)) + " "; t += "L " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)) + " " } } if (j.graph2dAxis.cuttingPos > j.graph2dAxis.nbStep && j.graph2dAxis.bottom > 0) { t += "L " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height) - (j.graph2dAxis.options.font.height / 4)) + " "; t += "L " + (j.graph2dAxis.offset.left - 10) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left + 10) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height) - (j.graph2dAxis.options.font.height / 2)) + " "; j.graph2dAxis.paper.path(t); t = "M " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height) + (j.graph2dAxis.options.font.height / 4)) + " "; t += "L " + (j.graph2dAxis.offset.left - 10) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height) + (j.graph2dAxis.options.font.height / 2)) + " "; t += "L " + (j.graph2dAxis.offset.left + 10) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left) + " " + (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height) + (j.graph2dAxis.options.font.height / 4)) + " "; u = j.graph2dAxis.paper.text(j.graph2dAxis.offset.left - 4, j.graph2dAxis.offset.top + ((s + 1) * j.graph2dAxis.options.font.height), 0); u.attr("text-anchor", "end"); u.attr("font-size", j.graph2dAxis.options.font.size + "px"); t += "L " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + ((s + 1) * j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left + 4) + " " + (j.graph2dAxis.offset.top + ((s + 1) * j.graph2dAxis.options.font.height)) + " "; t += "L " + (j.graph2dAxis.offset.left - 2) + " " + (j.graph2dAxis.offset.top + ((s + 1) * j.graph2dAxis.options.font.height)) + " "; t += "L " + j.graph2dAxis.offset.left + " " + (j.graph2dAxis.offset.top + ((s + 1) * j.graph2dAxis.options.font.height)) + " "; j.graph2dAxis.cuttingPosPaper = (j.graph2dAxis.offset.top + (s * j.graph2dAxis.options.font.height)); j.graph2dAxis.options.height -= (2 * j.graph2dAxis.options.font.height) } o = j.graph2dAxis.paper.path(t) }, graph: function () { var u = 0, r, s = "line", v, o, t; b.each(j.graph2dAxis.series.series, function () { s = this.type; if (s === "bar") { u += 1; r = "bar" } if (s === "stacked" && (r !== "stacked" || r === undefined)) { u += 1; r = "stacked" } }); r = undefined; v = -1; o = b("<ul>").appendTo(b(j.graph2dAxis.paperContainer)); t = 0; j.graph2dAxis.legendContainer = o; b.each(j.graph2dAxis.series.series, function () { var E = this, R = b("<li></li>").appendTo(b(o)), F = b('<span style="margin-right:7px;"></span>').appendTo(b(R)), D = new Raphael(b(F).get(0), j.graph2dAxis.options.font.size, j.graph2dAxis.options.font.size), A = D.rect(2, 2, j.graph2dAxis.options.font.size - (2 * 2) + (2 / 2), j.graph2dAxis.options.font.size - (2 * 2) + (2 / 2)), Q, B = "", x = 0, H, G, J, S, K, O, P, L, I, N, M, z, C, w, y; s = this.type; if (j.graph2dAxis.options.colors[t]) { Q = j.graph2dAxis.options.colors[t] } else { Q = j.graph2dAxis.options.colors[0] } if (E.param.color) { Q = d(E.param.color) } if (E.param.dasharray) { B = E.param.dasharray.toLowerCase(); B = B.replace("space", " ").replace("dash", "-").replace("dot", ".").replace("none", "") } if (G === undefined) { G = E.header.rawValue } b.each(this.cell, function () { var U = (x * ((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / j.graph2dAxis.NbColumnHeading)), T = ((x + 1) * ((j.graph2dAxis.options.width - j.graph2dAxis.offset.left) / j.graph2dAxis.NbColumnHeading)), V = ((T - U) / 2) + U + j.graph2dAxis.offset.left; if (!this.isHeader) { this.graphMinPos = U; this.graphMaxPos = T; this.graphCenterPos = V; this.graphValue = (((j.graph2dAxis.top - this.value) * (j.graph2dAxis.options.font.height * (j.graph2dAxis.nbStep - 1)) / (j.graph2dAxis.top - j.graph2dAxis.bottom)) + j.graph2dAxis.offset.top); if (H === undefined) { H = T - U } x += 1 } }); b(R).append(G); if (s === "line" || s === "area") { b.each(this.cell, function () { if (!this.isHeader) { if (J === undefined) { J = "M " + this.graphCenterPos + " " } else { J += "L " + this.graphCenterPos + " " } J += this.graphValue + " "; if (S === undefined) { S = this.graphCenterPos } K = this.graphCenterPos } }); if (s === "area") { if (j.graph2dAxis.cuttingPosPaper === 0) { J += "L " + K + " " + j.graph2dAxis.xAxisOffset + " "; J += "L " + S + " " + j.graph2dAxis.xAxisOffset + " "; J += "z" } else { if (j.graph2dAxis.top < 0) { J += " L " + K + " " + (j.graph2dAxis.cuttingPosPaper + (j.graph2dAxis.options.font.height / 2)); J += " L " + S + " " + j.graph2dAxis.cuttingPosPaper; J += " z"; O = j.graph2dAxis.paper.path(J); O.attr("stroke", Q); O.attr("stroke-dasharray", B); if (s === "area") { O.attr("fill", Q); O.attr("fill-opacity", (30 / 100)) } J = "M " + S + " " + (j.graph2dAxis.cuttingPosPaper - (j.graph2dAxis.options.font.height / 2)); J += " L " + K + " " + j.graph2dAxis.cuttingPosPaper; J += " L " + K + " " + j.graph2dAxis.xAxisOffset; J += " L " + S + " " + j.graph2dAxis.xAxisOffset; J += " z" } else { J += " L " + K + " " + (j.graph2dAxis.cuttingPosPaper - (j.graph2dAxis.options.font.height / 2)); J += " L " + S + " " + j.graph2dAxis.cuttingPosPaper; J += " z"; O = j.graph2dAxis.paper.path(J); O.attr("stroke", Q); O.attr("stroke-dasharray", B); if (s === "area") { O.attr("fill", Q); O.attr("fill-opacity", (30 / 100)) } J = "M " + S + " " + (j.graph2dAxis.cuttingPosPaper + (j.graph2dAxis.options.font.height / 2)); J += " L " + K + " " + j.graph2dAxis.cuttingPosPaper; J += " L " + K + " " + j.graph2dAxis.xAxisOffset; J += " L " + S + " " + j.graph2dAxis.xAxisOffset; J += " z" } } } O = j.graph2dAxis.paper.path(J); O.attr("stroke", Q); A.attr("stroke", Q); O.attr("stroke-dasharray", B); A.attr("stroke-dasharray", B); if (s === "area") { O.attr("fill", Q); A.attr("fill", Q); O.attr("fill-opacity", (30 / 100)); A.attr("fill-opacity", (30 / 100)) } else { A.attr("fill", Q) } } if (s === "bar" || s === "stacked") { if ((r !== "stacked" && s !== "stacked") || r !== s) { v += 1 } r = s; P = 50; L = 50; I = (u * 100) + P + L; N = (P * H / I); M = (L * H / I); z = H - N - M; C = z / u; w = C * v; y = w + C; b.each(this.cell, function () { if (!this.isHeader) { var V = this.graphMinPos + w + N + j.graph2dAxis.offset.left, U, T, W = C, Y = "", X; if (j.graph2dAxis.xAxisOffset >= this.graphValue) { U = this.graphValue; T = j.graph2dAxis.xAxisOffset - this.graphValue } else { U = j.graph2dAxis.xAxisOffset; T = this.graphValue - j.graph2dAxis.xAxisOffset } if (j.graph2dAxis.cuttingPosPaper === 0) { Y = "M " + V + " " + U; Y += " L " + (V + W) + " " + U; Y += " L " + (V + W) + " " + (U + T); Y += " L " + V + " " + (U + T); Y += " z" } else { if (j.graph2dAxis.top < 0) { Y = "M " + V + " " + U; Y += " L " + (V + W) + " " + U; Y += " L " + (V + W) + " " + j.graph2dAxis.cuttingPosPaper; Y += " L " + V + " " + (j.graph2dAxis.cuttingPosPaper - (j.graph2dAxis.options.font.height / 2)); Y += " z"; X = j.graph2dAxis.paper.path(Y); X.attr("fill", Q); if (E.param.fillopacity) { X.attr("fill-opacity", (E.param.fillopacity / 100)) } Y = "M " + V + " " + j.graph2dAxis.cuttingPosPaper; Y += " L " + (V + W) + " " + (j.graph2dAxis.cuttingPosPaper + (j.graph2dAxis.options.font.height / 2)); Y += " L " + (V + W) + " " + (U + T); Y += " L " + V + " " + (U + T); Y += " z" } else { Y = "M " + V + " " + U; Y += " L " + (V + W) + " " + U; Y += " L " + (V + W) + " " + (j.graph2dAxis.cuttingPosPaper - (j.graph2dAxis.options.font.height / 2)); Y += " L " + V + " " + j.graph2dAxis.cuttingPosPaper; Y += " z"; X = j.graph2dAxis.paper.path(Y); X.attr("fill", Q); if (E.param.fillopacity) { X.attr("fill-opacity", (E.param.fillopacity / 100)) } Y = "M " + V + " " + (j.graph2dAxis.cuttingPosPaper + (j.graph2dAxis.options.font.height / 2)); Y += " L " + (V + W) + " " + j.graph2dAxis.cuttingPosPaper; Y += " L " + (V + W) + " " + (U + T); Y += " L " + V + " " + (U + T); Y += " z" } } X = j.graph2dAxis.paper.path(Y); X.attr("fill", Q); A.attr("fill", Q); if (E.param.fillopacity) { X.attr("fill-opacity", (E.param.fillopacity / 100)); A.attr("fill-opacity", (E.param.fillopacity / 100)) } } }) } t += 1 }) } }; c = { sourceTblSelf: undefined, param: {}, parse: function () { c.sourceTblSelf = n; if (c.param.parsedirection === "y" || e.parsedirection === "y") { n = c.swapTable(c.sourceTblSelf) } c.setSeriesHeadingLenght(); var r = [], o = []; b("tbody", n).each(function () { var t = [], s = { headerList: [], series: [], param: c.classToJson(this) }; b("tr", this).each(function () { var D = 0, B = 0, w = 0, u = b(this).children(), E = [], C = [], y = "", x, A = false, v = "", z; b.each(t, function () { if (this.colpos === B && this.rowspan > 0) { var F = Number(b(this.ele.obj).attr("colspan") !== undefined ? b(this.ele.obj).attr("colspan") : 1), G; for (G = 1; G <= F; G += 1) { this.ele.colPos = G + B; if (this.ele.isHeader) { C.push(jQuery.extend(true, {}, this.ele)) } else { E.push(jQuery.extend(true, {}, this.ele)) } } B += F; if (b(this.ele.obj).get(0).nodeName.toLowerCase() === "th" && c.seriesHeadingLenght > B) { D += 1; if (this.rowspan >= 1) { w = this.ele.id } } this.rowspan -= 1 } }); b("th, td", this).each(function () { c.cellID += 1; var G = false, P = c.getCellValue(b(this).text()), H = { id: c.cellID, isHeader: false, rowPos: c.rowPos, rawValue: b(this).text(), value: P.cellValue, unit: P.cellUnit, obj: b(this), param: c.classToJson(this) }, Q = Number(b(this).attr("colspan") !== undefined ? b(this).attr("colspan") : 1), I = (b(this).attr("rowspan") !== undefined ? b(this).attr("rowspan") : 1), L = "", J, R, M = "", K, F, S, O, N; for (J = B, R = (B + Q); J < R; J += 1) { if (r[J] !== undefined) { if (L === "") { L = r[J] } else { N = c.removeDuplicateElement(L.split(" ").concat(r[J].split(" "))); L = N.join(" ") } } } if (o[c.rowPos] !== undefined) { M = o[c.rowPos] } if (this.nodeName.toLowerCase() === "th") { H.isHeader = true; F = b(this).attr("id"); if (F === undefined || F === "") { F = "graphcellid" + h + "row" + c.rowPos + "col" + B; b(this).attr("id", F) } for (J = 0; J < I; J += 1) { S = J + c.rowPos; if (o[S] === undefined) { o[S] = F } else { o[S] = o[S] + " " + F } } } if (I > 1) { O = I - 1; t.push({ ele: H, rowspan: O, colpos: B, groupId: w }); if (H.isHeader && c.seriesHeadingLenght > B) { D += 1; H.isHeader = true; K = { id: c.cellID, level: D, width: I, height: Q, header: b(this).text(), groupId: w, isGroup: true, rowPos: c.rowPos, param: c.classToJson(this) }; s.headerList.push(K); w = c.cellID } } for (J = 1; J <= Q; J += 1) { H.colPos = J + B; if (H.isHeader) { C.push(jQuery.extend(true, {}, H)) } else { E.push(jQuery.extend(true, {}, H)) } } B += Q; if (c.seriesHeadingLenght === B) { if (!H.isHeader) { A = true; v = "Serie heading not good, current cell value:" + b(this).text() } y = b(this).text(); x = b(this); K = { id: c.cellID, level: D, width: I, height: Q, header: b(this).text(), groupId: w, isGroup: false, rowPos: c.rowPos, param: c.classToJson(this) }; s.headerList.push(K) } b.each(t, function () { if (this.colpos === B && this.rowspan > 0) { var T = Number(b(this.ele.obj).attr("colspan") !== undefined ? b(this.ele.obj).attr("colspan") : 1), V, U; for (J = 1; J <= T; J += 1) { this.ele.colPos = J + B; if (this.ele.isHeader) { C.push(jQuery.extend(true, {}, this.ele)) } else { E.push(jQuery.extend(true, {}, this.ele)) } } B += T; V = (b(this.ele.obj).attr("headers") !== undefined ? b(this.ele.obj).attr("headers") : ""); U = c.removeDuplicateElement(V.split(" ").concat(o[c.rowPos].split(" "))); b(this.ele.obj).attr("headers", U.join(" ")); this.rowspan -= 1 } }) }); z = { cell: E, cellHeading: C, header: y, headerParam: c.classToJson(x), level: D, GroupId: w, rowPos: c.rowPos, isRejected: A, rejectedRaison: v }; if ((c.tBodySeries.nbRowLevel <= D || c.tBodySeries.nbRowLevel === undefined) && !A) { c.tBodySeries.nbRowLevel = (D + 1) } s.series.push(z); c.rowPos += 1 }); c.tBodySeries.series.push(s); return }) }, seriesHeadingLenght: 0, setSeriesHeadingLenght: function () { b("tbody:first tr:first th", n).each(function () { var o = Number(b(this).attr("colspan") !== undefined ? b(this).attr("colspan") : 1); c.seriesHeadingLenght += o }) }, rowPos: 0, cellID: 0, removeDuplicateElement: function (u) { var o = [], t, r, s, v; label: for (t = 0, r = u.length; t < r; t += 1) { for (s = 0, v = o.length; s < v; s += 1) { if (o[s] === u[t]) { continue label } } o[o.length] = u[t] } return o }, swapTable: function () { var r = [], v = 0, B, u = 0, F = "Table caption tag is missing", x = 10, E = 0, C, D = [], o, z, y, w, A; F = b("caption", n).text(); b("tr ", n).each(function () { x += 1; if (E < 1) { b("td,th", b(this)).each(function () { if (b(this).attr("colspan") === undefined) { b(this).attr("colspan", 1) } x += Number(b(this).attr("colspan")) }) } E += 1 }); for (E = 0; E < x; E += 1) { D[E] = []; for (C = 0; C < x; C += 1) { D[E][C] = 0 } } b("tr ", n).each(function () { u = 0; var t = 1, s = 1; b("td,th", b(this)).each(function () { if (b(this).attr("colspan") === undefined) { b(this).attr("colspan", 1) } if (b(this).attr("rowspan") === undefined) { b(this).attr("rowspan", 1) } t = Number(b(this).attr("colspan")); s = Number(b(this).attr("rowspan")); while (D[v][u] === 3) { u += 1 } var H = v, K = v + s - 1, J, G, I; if (s > 1 && t > 1) { J = u; G = u + t - 1; for (J = u; J <= G; J += 1) { for (H = v; H <= K; H += 1) { D[H][J] = 3 } } } else { if (s > 1) { for (H = v; H <= K; H += 1) { D[H][u] = 3 } } } I = b(this).clone(); I.attr("colspan", s); I.attr("rowspan", t); (r[u] = r[u] || [])[v] = I; u = u + t }); v += 1 }); o = b("<table>"); b.each(r, function (G) { var t = b("<tr>"); o.append(t); b.each(r[G], function (s, H) { t.append(H) }) }); z = o.html(); y = '<table id="swappedGraph"><caption>' + F + " (Horizontal to Virtical)</caption><thead>"; z = z.replace(/<tbody>/gi, y); z = z.replace(/<\/tbody>/gi, "</tbody></table>"); z = z.replace(/\n/g, ""); z = z.replace(/<tr/gi, "\n<tr"); w = z.split("\n"); for (v = 0, B = w.length; v < B; v += 1) { A = w[v]; if (A.match(/<td/i) !== null) { w[v] = "</thead><tbody>" + A; break } } z = w.join("\n"); b(z).insertAfter(n).hide(); return b(z) }, compute: function () { b.each(c.tBodySeries.series, function () { var r, o, s; b.each(this.series, function () { if (!this.isRejected) { var v, u, t = 0; b.each(this.cell, function () { if (!this.isHeader) { if (this.value > v || v === undefined) { v = this.value } if (this.value < u || u === undefined) { u = this.value } t += 1 } }); this.maxValue = v; this.minValue = u; this.length = t; if (s === undefined) { s = t } if (t !== s) { this.isRejected = true; this.rejectedRaison = "The data length need to be equal for all the series" } if ((v > r || r === undefined) && !this.isRejected) { r = v } if ((u < o || o === undefined) && !this.isRejected) { o = u } } }); this.maxValue = r; this.minValue = o; this.dataLength = s }) }, getCellValue: function (r) { r = r.replace(/\s\s+/g, " "); r = r.replace(/^\s+|\s+$/g, ""); var o = { cellUnit: r.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/), cellValue: parseFloat(r.match(/[\+\-0-9]+[0-9,\. ]*/)) }; return o }, 
     classToJson: function (r, o) {
     var s = ""; 
     
     if (typeof (r) === "string") { s = r } else { 
     s = (b(r).attr("class") !== undefined ? b(r).attr("class") : "") } 
     return c.setClassOptions(jQuery.extend(true, e.optionsClass, e.axis2dgraph), s, o) }, 
     
     setClassOptions: function (r, x, s) { 
     var w = "", v = "", t = false, u, o; 
     if (typeof (r) !== "object") { return {} } 
     r = jQuery.extend(true, {}, r); 
     
     if (typeof (x) !== "string" || x.lenght === 0) { return r } 
     
     if (typeof (s) !== "string" || s.lenght === 0) { 
     if (r["default-namespace"] && (typeof (r["default-namespace"]) === "string" || b.isArray(r["default-namespace"]))) { 
     s = r["default-namespace"] } else { return r } } 
     
     if (r["default-namespace-separator"] && typeof (r["default-namespace-separator"]) === "string") { 
     w = r["default-namespace-separator"] } else { w = "-" } if (r["default-separator"] && typeof (r["default-separator"]) === "string") { 
     v = r["default-separator"] } else { v = " " } if (r["default-autocreate"]) { t = true } o = x.split(v); 
     b.each(o, function () { var J, D = r, F, E, K, C, G, z, y, B = false, H = false, I, A; if (b.isArray(s)) { for (E = 0, K = s.length; E < K; E += 1) { 
     if (s[E] === (this.length > s[E].length + w.length ? this.slice(0, s[E].length) : "")) { u = s[E].split(w); J = this.split(w).slice(u.length); 
     F = u[u.length - 1]; break } } } else { if (s === (this.length > s.length + w.length ? this.slice(0, s.length) : "")) { u = s.split(w); 
     J = this.split(w).slice(u.length); F = u[u.length - 1] } } if (J && F) { for (E = 0, K = J.length; E < K; E += 1) { G = (E + 2 === K ? true : false); 
     z = (E + 1 === K ? true : false); if (z && K === 1 && r["default-option"]) { F = r["default-option"] } else { if (!z) { F = J[E] } } 
     if (D[F + "-typeof"]) { y = []; for (C = (E + 1); C < K; C += 1) { y.push(J[C]) } J[E] = y.join(w); G = false; z = true; switch (D[F + "-typeof"]) { 
     case "boolean": if (J[E] === "true" || J[E] === "1" || J[E] === "vrai" || J[E] === "yes" || J[E] === "oui") { J[E] = true } else { 
     if (J[E] === "false" || J[E] === "0" || J[E] === "faux" || J[E] === "no" || J[E] === "non") { J[E] = false } else { J[E] = undefined } } break; 
     case "number": if (!isNaN(parseInt(J[E], 10))) { J[E] = parseInt(J[E], 10) } else { J[E] = undefined } break; case "string": break; 
     
     case "undefined": case "function": case "locked": J[E] = undefined; break; default: break } } if (D[F + "-overwrite-array-mode"]) { B = true } 
     
     if (D[F + "-autocreate"]) { H = true } if (G && J[E] !== undefined) { F = J[E] } else { if (z && J[E] !== undefined) { if (D[F] && B) { if (b.isArray(D[F])) { D[F].push(J[E]) } else { A = D[F]; D[F] = []; D[F].push(A); D[F].push(J[E]) } } else { if (D[F] || t || H || D[F] === 0 || D[F] === false) { I = ""; if (typeof (J[E]) === "boolean" || typeof (J[E]) === "number") { I = '{"' + F + '": ' + J[E] + "}" } else { I = '{"' + F + '": "' + J[E] + '"}' } D = jQuery.extend(true, D, jQuery.parseJSON(I)) } } E = K } else { if (J[E] !== undefined && D[J[E]]) { D = D[J[E]]; F = J[E] } else { if ((t || H) && J[E] !== undefined) { I = '{"' + J[E] + '": {}}'; D = jQuery.extend(true, D, jQuery.parseJSON(I)); D = D[J[E]] } else { E = K } } } } } } }); return r }, tBodySeries: { series: [], nbRowLevel: undefined, nbColLevel: undefined} }; e = c.setClassOptions(e, (b(n).attr("class") !== undefined ? b(n).attr("class") : "")); c.param = e; if (a.fn.charts.graphprocessed && !a.fn.charts.graphdelayed) { if (!a.fn.charts.graphstacked) { a.fn.charts.graphstacked = [] } a.fn.charts.graphstacked.push(k); if (!a.fn.charts.graphdelayedset) { a.fn.charts.graphdelayedset = true; var i, f = 0; (function l() { if (f > 0) { a.fn.charts.graphdelayed = true } if (a.fn.charts.graphstacked.length === 0) { clearTimeout(i); return } a.fn.charts._exec(a.fn.charts.graphstacked.shift()); f += 1; var o = 200; if (e.execdelay) { o = e.execdelay } i = setTimeout(l, o) })() } return } a.fn.charts.graphprocessed = true; c.parse(); if (!b(n).data().tblparser) { a.fn.parsertable._exec(b(n)) } q = function () { var r = b(n).data().tblparser, o = 0, s = -1; b.each(r.theadRowStack, function () { b.each(this.cell, function () { if (this.uid > s) { s = this.uid; var t = { id: this.uid, uniqueID: this.uid, level: o, width: this.width, height: this.height, header: b(this.elem).text(), groupId: 0, isGroup: (this.width > 1 ? true : false), colPos: this.colpos - 1, param: c.classToJson(b(this.elem)) }; if (!c.tBodySeries.ColHeading) { c.tBodySeries.ColHeading = [] } c.tBodySeries.ColHeading.push(t) } }); o += 1 }); c.tBodySeries.nbColLevel = r.theadRowStack.length; c.rowPos = r.theadRowStack.length - 1 }; q(); c.compute(); e.width = parseFloat((c.param.width ? c.param.width - e.widthPadding : e.width - e.widthPadding)); e.width = parseFloat(e.width > (e.maxwidth - e.widthPadding) ? e.maxwidth - e.widthPadding : e.width); e.height = parseFloat(c.param.height || e.height); m = c.tBodySeries.nbRowLevel; if (c.param.graph) { g = c.param.graph } else { if (c.param.type) { g = c.param.type } else { g = e.type } } b.each(c.tBodySeries.series, function () { var A = 0, V = [], x = 0, O = [], R, s, u = "line", w = -1, I = [], D, z = "", t = {}, M = {}, H = [], J, v = true, C = [], r, Q, B, G, T, F = [], L, S, o, P, y, E, N, U, W, K; if (c.param.type) { u = c.param.type } if (this.param.graph) { u = this.param.graph } D = u; b.each(this.series, function () { if (this.cellHeading.length === 0) { this.isRejected = true } if (!this.isRejected) { v = false; var aa = false, X = {}, Z = [], Y = ""; if (this.cellHeading.length > m) { X = this.cellHeading[m]; if (w === X.id) { I.push(jQuery.extend(true, {}, X)) } else { b.each(I, function () { for (R = 0, s < this.cell.length; R < s; R += 1) { if (Z.length <= R) { Z.push(this.cell[R]) } else { Z[R] += this.cell[R] } } }); for (R = 0, s = Z.length; R < s; R += 1) { Z[R] = Z[R] / I.length } if (z === "2daxis") { J = { cell: Z, type: D, param: t, header: M }; V.push(J) } else { if (z === "cicle") { J = { cell: Z, type: D, param: t, header: M }; O.push(J) } } I = []; I.push(jQuery.extend(true, {}, X)); t = X.param } } else { X = this.cellHeading[this.cellHeading.length - 1]; if (z === "2daxis") { J = { cell: H, type: D, param: t, header: M }; V.push(J) } else { if (z === "cicle") { J = { cell: H, type: D, param: t, header: M }; O.push(J) } } H = this.cell; t = X.param } M = X; if (X.param.type) { Y = X.param.type } else { Y = u } if (Y === "bar" || Y === "stacked" || Y === "line" || Y === "area") { A += 1; z = "2daxis"; D = Y } else { if (Y === "pie") { x += 1; z = "cicle"; D = Y } } w = X.id } }); b.each(I, function () { for (R = 0, s = this.cell.length; R < s; R += 1) { if (C.length <= R) { C.push(this.cell[R]) } else { C[R] += this.cell[R] } } }); for (R = 0, s = C.length; R < s; R += 1) { C[R] = C[R] / I.length } if (C.length !== 0) { H = C } if (z === "2daxis") { J = { cell: H, type: D, param: t, header: M }; V.push(J) } else { if (z === "cicle") { J = { cell: H, type: D, param: t, header: M }; O.push(J) } } r = { heading: c.tBodySeries.ColHeading, nbRowLevel: c.tBodySeries.nbRowLevel, nbColLevel: c.tBodySeries.nbColLevel, series: V }; Q = { heading: c.tBodySeries.ColHeading, nbRowLevel: c.tBodySeries.nbRowLevel, nbColLevel: c.tBodySeries.nbColLevel, series: O }; if (r.series.length > 0) { j.graph2dAxis.init(r, e) } if (Q.series.length > 0) { j.circleGraph.init(Q, e) } B = b("<figure />").insertAfter(c.sourceTblSelf); b(B).width(e.width + e.widthPadding); b(B).addClass(e["default-namespace"]); if (c.param.graphclass) { if (b.isArray(c.param.graphclass)) { for (R = 0, s = c.param.graphclass.length; R < s; R += 1) { b(B).addClass(c.param.graphclass[R]) } } else { b(B).addClass(c.param.graphclass) } } T = b("caption", c.sourceTblSelf).html(); S = function (Y, X) { var Z = b(X).children((Raphael.svg ? "svg:eq(0)" : "div:eq(0)")); F.push(Z); b(Z).attr("role", "img"); b(Z).attr("aria-label", (Y ? b(Y).text() + " " : "") + a.dic.get("%table-following")) }; if (Q.series.length === 1 && Q.series[0].header.rawValue === T) { G = []; L = []; L.push(B); o = new Raphael(b(B).get(0), j.circleGraph.width, j.circleGraph.height); G.push(o); j.circleGraph.generateGraph(L, G) } else { if (Q.series.length > 0) { G = []; L = []; b.each(Q.series, function () { var X = b("<figcaption />"), Z = b("<figure />"), Y; b(X).append(this.header.rawValue); b(B).append(Z); L.push(Z); Y = new Raphael(b(Z).get(0), j.circleGraph.width, j.circleGraph.height); b(X).prependTo(b(Z)); G.push(Y); S(this.header.obj, Z) }); j.circleGraph.generateGraph(L, G) } } if (r.series.length > 0) { G = new Raphael(b(B).get(0), e.width, e.height); j.graph2dAxis.generateGraph(B, G) } if (!v) { U = b(n).attr("aria-describedby"); E = b("caption", n).data().tblparser; if (E.caption) { N = b("<figcaption />"); b(B).prepend(N); if (b(E.caption).get(0).nodeType !== 3) { if (b(E.caption).get(0).nodeName.toLowerCase() === "caption") { b(N).append(b(E.caption).html()) } else { b(N).append(b(E.caption).clone()) } } else { b(N).append(b("<strong></strong>").append(b(E.caption).text())) } if (E.description) { P = E.description; if (P.length > 1) { P = b(P).wrapAll("<div></div>").parent() } y = b(P).attr("id"); if (y === undefined || y === "") { y = "graphsourcedesc" + new Date().getTime(); b(P).attr("id", y) } b(N).append(P); if (U === undefined || U === "") { b(n).attr("aria-describedby", y) } } } S(E.caption, B); if (y) { b.each(F, function () { b(this).attr("aria-describedby", y) }) } if (b(n).attr("aria-label") === undefined || b(n).attr("aria-label") === "") { b(n).attr("aria-label", (E.caption ? b(E.caption).text() + " " : "") + a.dic.get("%table-mention")) } if (!c.param.noencapsulation) { W = b("<details />"); K = b("<summary />"); b(W).appendTo(B); b(K).text((E.caption ? b(E.caption).text() + " " : "") + a.dic.get("%table-mention")).appendTo(W).after(n); if (b("html").hasClass("polyfill-detailssummary")) { b(W).details() } } else { b(n).appendTo(B) } } else { b(B).remove() } }) } }; window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.css3ie = { type: "plugin", depends: (pe.ie > 0 && pe.ie < 9 ? ["pie", "resize"] : []), _exec: function (j) { if (pe.mobile || !(pe.ie > 0 && pe.ie < 9)) { return } var l = b(".rounded, .pie-enhance"), g = false, k = b("#wb-core"), d = k.children("#wb-core-in"), i = k.css("margin-bottom"), h, c, f, e; f = function () { l.each(function () { PIE.attach(this) }); return true }; e = function () { l.each(function () { PIE.detach(this) }); return false }; if (window.PIE) { l.filter(function () { return b(this).css("position") === "static" }).css("position", "relative"); if (pe.ie === 7) { h = document.body; c = h.getBoundingClientRect(); if ((c.left - c.right) / h.offsetWidth === -1) { g = f() } else { k.css("margin-bottom", (d.offset().top + d.height()) - (k.offset().top + k.height())) } } else { if (pe.ie === 8) { g = f() } else { g = f() } } pe.resize(function () { if (pe.ie === 7) { var m = document.body, n = m.getBoundingClientRect(); if ((n.left - n.right) / m.offsetWidth !== -1) { g = e(l); k.css("margin-bottom", (d.offset().top + d.height()) - (k.offset().top + k.height())) } else { if (!g) { f() } k.css("margin-bottom", i) } } }) } return j } }; window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.deselectradio = { type: "plugin", depends: [], _exec: function (d) { var c = b('input[type="radio"]:not(.deselectable, .deselect-off)').attr("role", "radio").attr("aria-checked", "false").addClass("deselectable"); c.filter(":checked").attr("aria-checked", "true"); c.closest("fieldset").attr("role", "radiogroup"); c.on("click vclick", function () { var e = b(this); if (e.attr("aria-checked") === "true") { e.prop("checked", false).attr("aria-checked", "false") } else { e.closest("fieldset").find('input[type="radio"]').prop("checked", false).attr("aria-checked", "false"); e.prop("checked", true).attr("aria-checked", "true") } }); return d } }; window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.equalize = { type: "plugin", depends: (pe.mobile ? [] : ["equalheights", "resize"]), _exec: function (c) { if (pe.mobile) { return } b(".equalize").children().css("min-height", "").parent().equalHeights(true); pe.resize(function () { b(".equalize").children().css("min-height", "").parent().equalHeights(true) }); return c } }; window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.eventscalendar = { type: "plugin", depends: ["calendar", "xregexp"], _exec: function (i) { var v = new Date(), p = a.fn.calendar, h = a.fn.calendar.dates, m = v.getFullYear(), w = v.getMonth(), x = i.find(".year"), j = i.find(".month"), r, d, n, y, u, s, o, e, l, c, q, t, g, k, f; y = function (C) { var B = !(b(C).hasClass("event-anchoring")), A = { minDate: null, maxDate: null, iCount: 0, list: [{ a: 1}] }, z = null; if (C.find("ol").length > 0) { z = C.find("ol") } else { if (C.find("ul").length > 0) { z = C.find("ul") } } if (z.length > 0) { z.children("li").each(function () { var E = b(this), J = E.find("*:header:first"), N = J.text(), H = E.find("a").first(), L = H.attr("href"), F, G, D, P, O, M, K, I; if (!B) { F = (E.attr("id") !== undefined) ? E.attr("id") : u(6); E.attr("id", F); if (pe.ie > 0) { E.attr("tabindex", "-1") } L = "#" + F } G = new Date(); D = E.find("time, span.datetime"); if (D.length > 1) { P = (b(D[0]).get(0).nodeName.toLowerCase() === "time") ? b(D[0]).attr("datetime").substr(0, 10).split("-") : b(D[0]).attr("class").match(/datetime\s+\{date\:\s*(\d+-\d+-\d+)\}/)[1].substr(0, 10).split("-"); O = (b(D[1]).get(0).nodeName.toLowerCase() === "time") ? b(D[1]).attr("datetime").substr(0, 10).split("-") : b(D[1]).attr("class").match(/datetime\s+\{date\:\s*(\d+-\d+-\d+)\}/)[1].substr(0, 10).split("-"); G.setFullYear(P[0], P[1] - 1, P[2]); for (K = 0, I = h.daysBetween(P, O) + 1; K < I; K += 1) { if (A.minDate === null || G < A.minDate) { A.minDate = G } if (A.maxDate === null || G > A.maxDate) { A.maxDate = G } A.list[A.iCount] = { title: N, date: new Date(G.getTime()), href: L }; G = new Date(G.setDate(G.getDate() + 1)); if (!J.hasClass("filter-" + (G.getFullYear()) + "-" + p.strPad(G.getMonth() + 1, 2))) { J.addClass("filter-" + (G.getFullYear()) + "-" + p.strPad(G.getMonth() + 1, 2)) } A.iCount += 1 } } else { if (D.length === 1) { M = (b(D[0]).get(0).nodeName.toLowerCase() === "time") ? b(D[0]).attr("datetime").substr(0, 10).split("-") : b(D[0]).attr("class").match(/datetime\s+\{date\:\s*(\d+-\d+-\d+)\}/)[1].substr(0, 10).split("-"); G.setFullYear(M[0], M[1] - 1, M[2]); if (A.minDate === null || G < A.minDate) { A.minDate = G } if (A.maxDate === null || G > A.maxDate) { A.maxDate = G } A.list[A.iCount] = { title: N, date: G, href: L }; if (!J.hasClass("filter-" + (G.getFullYear()) + "-" + p.strPad(G.getMonth() + 1, 2))) { J.addClass("filter-" + (G.getFullYear()) + "-" + p.strPad(G.getMonth() + 1, 2)) } A.iCount += 1 } } }) } window.events = A; return A }; u = function (B) { var A = "", z, C; z = function () { C = Math.floor(Math.random() * 62); if (C < 10) { return C } if (C < 36) { return String.fromCharCode(C + 55) } return String.fromCharCode(C + 61) }; while (A.length < B) { A += z() } return "id" + A }; l = function (B) { var A, z; switch (B.keyCode) { case 13: case 32: case 38: case 40: pe.focus(B.data.details.find("a").first()); return false; case 37: A = b(this).closest("li").index(); z = b(this).closest("ol").children("li:lt(" + A + ")").children("a").last(); pe.focus(z); return false; case 39: A = b(this).closest("li").index(); z = b(this).closest("ol").children("li:gt(" + A + ")").children("a").first(); pe.focus(z); return false; case 27: b(this).siblings(".ev-details").removeClass("ev-details").addClass("wb-invisible"); return false } }; e = function (C) { var A, z, B; switch (C.keyCode) { case 38: A = b(this).closest("li").index(); B = b(this).closest("ul").children("li").length; pe.focus(b(this).closest("ul").children("li").eq((A - 1) % B).children("a")); return false; case 40: A = b(this).closest("li").index(); B = b(this).closest("ul").children("li").length; pe.focus(b(this).closest("ul").children("li").eq((A + 1) % B).children("a")); return false; case 37: A = b(this).closest("li[id^=cal-]").index(); z = b(this).closest("ol").children("li:lt(" + A + ")").children("a").last(); pe.focus(z); return false; case 39: A = b(this).closest("li[id^=cal-]").index(); z = b(this).closest("ol").children("li:gt(" + A + ")").children("a").first(); pe.focus(z); return false; case 27: pe.focus(b(this).closest("li[id^=cal-]").children("a.calEvent")); return false } }; c = function (z) { z.data.details.dequeue(); z.data.details.removeClass("wb-invisible"); z.data.details.addClass("ev-details") }; q = function (z) { z.data.details.delay(100).queue(function () { b(this).removeClass("ev-details"); b(this).addClass("wb-invisible"); b(this).dequeue() }) }; t = function (z) { z.data.details.removeClass("wb-invisible"); z.data.details.addClass("ev-details") }; g = function (z) { setTimeout(function () { if (z.data.details.find("a:focus").length === 0) { z.data.details.removeClass("ev-details"); z.data.details.addClass("wb-invisible") } }, 5) }; k = function (z) { setTimeout(function () { if (z.data.details.find("a:focus").length === 0) { z.data.details.removeClass("ev-details"); z.data.details.addClass("wb-invisible") } }, 5) }; f = function (z) { z.data.details.removeClass("wb-invisible"); z.data.details.addClass("ev-details") }; s = function (I, G, L, B, A) { var H, M, z, K, F, D, J, E, C; L.each(function (O, N) { b(N).css("z-index", 31 - O) }); for (H = 0, M = A.length; H !== M; H += 1) { z = new Date(A[H].date); if (z.getMonth() === G && z.getFullYear() === I) { K = b(L[z.getDate() - 1]); F = K.children("div").html(); if (K.children("a").length < 1) { K.empty(); J = b('<a href="#ev-' + K.attr("id") + '" class="calEvent">' + F + "</a>"); K.append(J);
      D = b('<ul class="wb-invisible"></ul>'); 
      J.on("keydown", { details: D }, l); K.on("mouseover", { details: D }, c); 
      
      K.on("mouseout", { details: D }, q); 
      J.on("focus", { details: D }, t); 
      J.on("blur", { details: D }, g); 
      K.append(D) } 
      else { 
      D = K.find("ul.wb-invisible") } 
      E = b('<li><a href="' + A[H].href + '">' + A[H].title + "</a></li>"); 
      
      if (pe.cssenabled) { E.children("a").attr("tabindex", "-1") } 
      D.append(E); C = E.children("a"); 
      C.on("keydown", e); 
      C.on("blur", { details: D }, k); 
      C.on("focus", { details: D }, f) } } }; 
      o = function (A, B, z) { b("." + z + " li.calendar-display-onshow").addClass("wb-invisible"); 
      b("." + z + " li.calendar-display-onshow").has(":header[class*=filter-" + A + "-" + p.strPad(parseInt(B, 10) + 1, 2) + "]").removeClass("wb-invisible") }; 
      if (x.length > 0 && j.length > 0) { m = x.text(); if (j.hasClass("textformat")) { r = b.inArray(j.text(), pe.dic.get("%calendar-monthNames")); w = r } else { 
      w = j.text() - 1 } } d = y(i); n = b(i).attr("class").split(" ").slice(-1); 
      
      if (b("#wb-main-in").css("padding-left") === "0px") { b("#" + n).css("margin-left", "10px") } 
      b("#" + n).on("calendarDisplayed", function (B, z, A, C) { s(z, A, C, n, d.list); o(z, A, n) }); p.create(n, m, w, true, p.getISOStringFromDate(d.minDate), p.getISOStringFromDate(d.maxDate)); 
      b("#" + n).attr("role", "application") 
      } 
      }; 
      
      window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.feedback = { type: "plugin", depends: [], _exec: function (j) { var d = j.find("#feedback"), i = j.find("#web"), h = i.find("#access"), c = i.find("#mobile"), k = i.find("#computer"), m = j.find("#contact-coord"), n = m.find("#contact1"), l = m.find("#contact2"), g = m.find("#info"), f = document.referrer, e = pe.url(window.location.href).params, o; 
      
      d.attr("aria-controls", "web").on("keyup click load", function (p) { 
      o = (p.type === "load"); if (!o && b(this).val() === "web") { 
      i.attr("aria-hidden", "false").show("slow") } else { i.attr("aria-hidden", "true").hide((o ? "" : "slow")) 
      } }); if (e.submit === undefined && e.feedback !== undefined) { d.find('option[value="' + e.feedback + '"]').attr("selected", "selected") } 
      d.trigger("load"); h.attr("aria-controls", "mobile computer").on("keyup click load", function (p) { o = (p.type === "load"); if (!o && h.val() === "mobile") { 
      c.attr("aria-hidden", "false").show("slow");       
      k.attr("aria-hidden", "true").hide("slow") } else { k.attr("aria-hidden", "false").show((o ? "" : "slow")); 
      c.attr("aria-hidden", "true").hide((o ? "" : "slow")) } }).trigger("load"); n.on("keyup click load", function (p) { o = (p.type === "load"); 
      if (!o && b(this).val() === "yes") { g.attr("aria-hidden", "false").show("slow") } else { 
      if (o || ((b(this).val() === "no" || b(this).val() === null) && (l.val() === "no" || l.val() === null))) { 
      g.attr("aria-hidden", "true").hide((o ? "" : "slow")) } } }).trigger("click"); l.on("keyup click load", function (p) { o = (p.type === "load"); 
      if (!o && b(this).val() === "yes") { g.attr("aria-hidden", "false").show("slow") } else { 
      if (o || ((b(this).val() === "no" || b(this).val() === null) && (n.val() === "no" || n.val() === null))) { 
      g.attr("aria-hidden", "true").hide((o ? "" : "slow")) } } }).trigger("load"); i.find("#page").attr("value", f); 
      j.find("input[type=reset]").on("click", function () { d.trigger("load"); h.trigger("load"); n.trigger("load"); l.trigger("load") }); return j } }; 
      window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.footnotes = { type: "plugin", _exec: function (e) { 
      var c = b("#wb-main-in").not(".wet-boew-footnotes"), d = e.find("dd").attr("tabindex", "-1"); d.each(function () { var g = b(this), f = this.id + "-dt"; 
      g.attr("aria-labelledby", f).prev().attr("id", f) }); d.find("p.footnote-return a").each(function () { var f = b(this); f.find("span span").remove(); 
      f.off("click vclick").on("click vclick", function () { var g = c.find(b(this).attr("href")).find("a"); if (pe.mobile) { b.mobile.silentScroll(pe.focus(g).offset().top) } 
      else { pe.focus(g) } return false }) }); c.find("sup a.footnote-link").on("click vclick", function () { var f = e.find(b(this).attr("href")); 
      f.find("p.footnote-return a").attr("href", "#" + this.parentNode.id).off("click vclick").on("click vclick", function () { 
      var g = c.find(b(this).attr("href")).find("a"); if (pe.mobile === true) { b.mobile.silentScroll(pe.focus(g).offset().top) } else { pe.focus(g) } return false }); 
      if (pe.mobile) { b.mobile.silentScroll(pe.focus(f).offset().top) } else { pe.focus(f) } if (pe.ie > 0 && pe.ie < 8) { f.addClass("footnote-focus").one("blur", function () 
      { b(this).removeClass("footnote-focus") }) } return false }) } }; window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} };
       a.fn.formvalid = { type: "plugin", depends: ["validate", "validateAdditional", "metadata"], _exec: function (i) { 
       var f = i.find("form"), c = false, h = f.find("[required]").attr("aria-required", "true"), e = "errors-" + (f.attr("id") === undefined ? "default" : f.attr("id")), d; 
       
       if (pe.language !== "en") { pe.add._load(pe.add.liblocation + "i18n/formvalid/messages_" + pe.language + pe.suffix + ".js") } 
       if (pe.language === "de" || pe.language === "nl" || pe.language === "pt") { 
       pe.add._load(pe.add.liblocation + "i18n/formvalid/methods_" + pe.language + pe.suffix + ".js") } h.attr("aria-required", "true"); 
       f.find("label").each(function () { var j = b(this); j.html(this.innerHTML + " ") }); function g(n, l, m) { 
       var j = n.attr("class"), o = (j !== undefined ? j.search(/validate\s?:\s?\{/) : -1), k; if (o > -1) { if (j.search("/" + l + "\\s?:/") === -1) { 
       k = j.substring(o, j.indexOf("{", o) + 1); n.attr("class", j.replace(k, k + l + ":" + m + ", ")) } } else { n.addClass("{validate:{" + l + ":" + m + "}}") } 
       return } f.find("input[pattern]").removeAttr("pattern"); if (pe.ie > 0 && pe.ie < 9) { h.removeAttr("required").each(function () { g(b(this), "required", "true") });
        f.find('input[type="date"]').each(function () { var l = b(this), j = l.wrap("<div/>").parent(), k = b(j.html().replace("type=" + l.attr("type"), "type=text")); 
        j.replaceWith(k) }) } if (pe.mobile) { 
        f.attr("data-ajax", "false").find('input[type="checkbox"]').closest("fieldset").attr("data-role", "controlgroup") } 
        d = f.validate({ meta: "validate", focusInvalid: false, errorElement: "strong", errorPlacement: function (j, k) { 
        j.appendTo(f.find('label[for="' + b(k).attr("id") + '"]')) }, showErrors: function (o, p) { this.defaultShowErrors();
         var q = f.find("strong.error").filter(":not(:hidden)"), n = f.find("input.error, select.error, textarea.error"), m = f.find("#" + e), l = '<span class="prefix">' + 
         pe.dic.get("%error") + "&#160;", k = pe.dic.get("%colon") + " </span>", j; f.find('[aria-invalid="true"]').removeAttr("aria-invalid"); if (q.length > 0) { 
         if (m.length === 0) { m = b('<div id="' + e + '" class="errorContainer" role="alert" tabindex="-1"/>').prependTo(f) } else { m.empty() } 
         
         j = "<p>" + pe.dic.get("%form-not-submitted") + q.length + (q.length !== 1 ? pe.dic.get("%errors-found") : pe.dic.get("%error-found")) + "</p><ul>"; 
         n.attr("aria-invalid", "true"); q.each(function (s) { var u = b(this), t = l + (s + 1) + k, r = u.closest("label"); u.find("span.prefix").detach(); 
         j += '<li><a href="#' + r.attr("for") + '">' + t + r.find(".field-name").html() + " - " + this.innerHTML + "</a></li>"; u.prepend(t) }); j += "</ul>";
          m.append(j); if (c) { pe.focus(m) } if (pe.ie === 0 || pe.ie > 7) { f.find(".errorContainer a").on("click vclick", function () { 
          var r = pe.focus(b(b(this).attr("href"))).prev().offset().top; if (pe.mobile) { b.mobile.silentScroll(r) } else { b(document).scrollTop(r) } 
          return false }) } c = false } else { m.detach() } }, invalidHandler: function (k, j) { c = true } }); f.find('input[type="reset"]').on("click", function () { 
          d.resetForm(); var j = f.find("#" + e); if (j.length > 0) { j.empty() } f.find('[aria-invalid="true"]').removeAttr("aria-invalid"); f.find("#" + e) }); return i } }; 
          window.pe = a; return a } (jQuery)); (function (b) { var a = window.pe || { fn: {} }; a.fn.langselect = { type: "plugin", _exec: function (c) { 
          c.on("click", function () { var d = window.location.toString(); if ((d.search(/_f\.htm/) > -1) || (d.search(/-fra\./) > -1)) { 
          d = d.replace(/_f\./, "_e.").replace(/-fra\./, "-eng.") } else { d = d.replace(/_e\./, "_f.").replace(/-eng\./, "-fra.") } if (d.search(/lang=eng/) > -1) { 
          d = d.replace(/lang=eng/, "lang=fra") } else { d = d.replace(/lang=fra/, "lang=eng") } window.location = d; return false }) } }; window.pe = a; return a } (jQuery)); 
          (function (b) { var a = window.pe || { fn: {} }; a.fn.lightbox = { type: "plugin", depends: ["colorbox", "metadata"], groupindex: 0, _exec: function (h) { 
          var c, e = {}, j, l, d, f, m, i, k, g = false; c = { transition: "elastic", loop: true, current: pe.dic.get("%lb-current"), previous: pe.dic.get("%lb-prev"), 
          next: pe.dic.get("%lb-next"), close: pe.dic.get("%close"), xhrError: pe.dic.get("%lb-xhr-error"), imgError: pe.dic.get("%lb-img-error"), maxWidth: "100%", 
          maxHeight: "100%", slideshowStart: pe.dic.get("%start") + " " + pe.dic.get("%lb-slideshow"), slideshowStop: pe.dic.get("%stop") + " " + pe.dic.get("%lb-slideshow"), 
          slideshow: false, slideshowAuto: false, onLoad: function () { var o = d.find("#cboxTitle"), n = o.next(); o.hide(); n.hide() }, onComplete: function () { 
          var o = d.find("#cboxTitle"), n = o.next(); f = d.find("#cboxLoadedContent").attr("tabindex", "0"); f.attr("aria-label", o.text() + " " + n.text()); 
          if (f.children(".cboxPhoto").length === 0) { f.attr("role", "document") } else { f.children().attr("alt", o.text()) } o.show(); n.show(); pe.focus(f); g = true }, 
          onClosed: function () { g = false } }; j = { transition: (h.hasClass("transition-fade") ? "fade" : (h.hasClass("transition-none") ? "none" : undefined)), 
          loop: h.hasClass("loop-none") ? false : undefined, slideshow: h.hasClass("slideshow") ? true : undefined, slideshowAuto: h.hasClass("slideshow-auto") ? true : undefined }; 
          b.metadata.setType("attr", "data-wet-boew"); if (typeof wet_boew_lightbox !== "undefined" && wet_boew_lightbox !== null) { b.extend(c, wet_boew_lightbox, j, h.metadata()) } else { b.extend(c, j, h.metadata()) } 
          l = h.find(".lb-item, .lb-gallery, .lb-hidden-gallery").on("vclick", function () { b.colorbox.launch(this) }); b.extend(e, c, { inline: "true" }); l.filter(".lb-item").attr("aria-haspopup", "true").each(function () { var n = b(this); n.colorbox(n.attr("href").substring(0, 1) !== "#" ? c : e) }); 
          l.filter(".lb-gallery, .lb-hidden-gallery").each(function () { var n = { rel: "group" + (pe.fn.lightbox.groupindex += 1) }; b.extend(c, n); b.extend(e, n);
          
          b(this).find(".lb-item-gal").attr("aria-haspopup", "true").each(function () { var o = b(this); o.colorbox(o.attr("href").substring(0, 1) !== "#" ? c : e) }) }); d = b("body").find("#colorbox #cboxContent").attr("role", "dialog"); 
          d.find("#cboxNext, #cboxPrevious, #cboxClose").attr("tabindex", "0").attr("role", "button").attr("aria-controls", "cboxLoadedContent"); m = d.find("#cboxNext"); i = d.find("#cboxPrevious"); k = d.find("#cboxClose"); d.on("keydown", function (o) { var n = b(o.target); if (!(o.ctrlKey || o.altKey || o.metaKey)) { 
          if (o.keyCode === 9) { if (o.shiftKey && n.attr("id") === "cboxLoadedContent") { pe.focus(k); o.preventDefault() } else { if (!o.shiftKey && n.attr("id") === "cboxClose") { pe.focus(f); o.preventDefault() } } } else { if (o.keyCode === 13 || o.keyCode === 32) { if (n.attr("id") === "cboxLoadedContent" || n.attr("id") === "cboxNext") { 
          b.colorbox.next(); o.preventDefault() } else { if (n.attr("id") === "cboxPrevious") { b.colorbox.prev(); o.preventDefault() } else { if (n.attr("id") === "cboxClose") { b.colorbox.close(); o.preventDefault() } } } } } } }) } }; window.pe = a; return a } (jQuery)); (function (b) {
    var a = window.pe || { fn: {} }; 
    a.fn.menubar = { type: "plugin", depends: (a.mobile ? [] : ["resize", "equalheights", "hoverintent", "outside"]), _exec: function (i) 
    {
        if (pe.mobile) { 
        return 
        } var d, h, k = i, f = k.parent(), m, j, g, c, e, l = pe.dic.get("%sub-menu-help"); 
        e = function (p) {
            g();
var o=b(p).closest("li"),n=o.find(".mb-sm");
n.attr({"aria-expanded":"true","aria-hidden":"false"}).toggleClass("mb-sm mb-sm-open");
if((Math.floor(n.offset().left+n.width())-Math.floor(h.offset().left+h.width()))>=-1)
{
n.css("right","0px")
}
o.addClass("mb-active");
return};

j=function(p){
var o=b(p),n=o.closest("li").find(".mb-sm-open");
if(pe.cssenabled){
n.find("a").attr("tabindex","0")
}
o.trigger("item-next");
return
};
c=function(p){
var o=b(p).closest("li"),n=o.find(".mb-sm-open");
n.attr({"aria-expanded":"false","aria-hidden":"true"}).toggleClass("mb-sm mb-sm-open").css("right","");
if(pe.cssenabled){
n.find("a").attr("tabindex","-1")
}
o.removeClass("mb-active");
return};
g=function(){
d.find(".mb-sm-open").each(function(){
var n=b(this).closest("li");
return c(n)
});
return};
m=function(){
var n=d.children("li:last"),o=(n.offset().top+n.outerHeight())-k.offset().top;
return k.css("min-height",o)
};
h=k.children("div");
d=h.children("ul");
k.detach();
k.attr("role","application");
k.find("> div > ul").attr("role","menubar").find("a").attr("role","menuitem");
pe.resize(m);
k.find("ul.mb-menu > li").find("a:eq(0)").each(function(o,q){
var n=b(q).addClass("knav-"+o+"-0-0"),p=n.closest("li").find(".mb-sm");
if(p.length>0){n.attr("aria-haspopup","true").addClass("mb-has-sm").wrapInner('<span class="expandicon"><span class="sublink"></span></span>');
p.attr({role:"menu","aria-expanded":"false","aria-hidden":"true"}).find(":has(:header) ul").attr("role","menu");
n.append('<span class="wb-invisible">'+l+"</span>");
n.closest("li").hoverIntent({over:function(){return e(this)},out:function(){return c(this)},timeout:500});
p.find("h3 a, h4 a, > div > a").each(function(r){
var s=b(this);
s.addClass("knav-"+o+"-"+(r+1)+"-0");
s.parent().next("ul").find("a").each(
function(t){
b(this).addClass("knav-"+o+"-"+(r+1)+"-"+(t+1));
return
});
return});
p.find("> ul a, > div > ul a").each(function(r){
b(this).addClass("knav-"+o+"-0-"+(r+1))
})
}
});

if(pe.cssenabled){
k.find(".mb-sm a").attr("tabindex","-1")
}
k.appendTo(f);
m();
k.find(".mb-sm").on("click vclick touchstart",function(n){
if(n.stopPropagation){
n.stopPropagation()
}
else{
n.cancelBubble=true
}
}).parent().on("click vclick touchstart","> :header a",function(){
if(b(this).closest("li").hasClass("mb-active")){
c(this)
}
else{
e(this)
}
return false});
k.on("keydown focusin section-next section-previous item-next item-previous close","li",function(v){
var r,z=b(v.target),t=k.find(".mb-active"),y,w=v.keyCode,x=v.type,s,u,o,q,p,n;
y=b.map(/\bknav-(\d+)-(\d+)-(\d+)/.exec(z.attr("class")),function(A){
return parseInt(A,10)
});
if(x==="keydown"){
if(!(v.ctrlKey||v.altKey||v.metaKey)){if(w===13){if(y[2]===0&&y[3]===0){j(v.target);return false}}else{if(w===27){z.trigger("close");return false}else{if(w===32){if(y[2]===0&&y[3]===0){j(v.target)}else{window.location=z.attr("href")}return false}else{if(w===37){z.trigger("section-previous");
return false}else{if(w===38){if(y[2]===0&&y[3]===0){j(v.target)}else{z.trigger("item-previous")}return false}else{if(w===39){
z.trigger("section-next");return false}else{if(w===40){if(y[2]===0&&y[3]===0){j(v.target)}else{z.trigger("item-next")}return false}else{if((w>47&&w<58)||(w>64&&w<91)){s=String.fromCharCode(w).toLowerCase();u=(y[2]!==0||y[3]!==0);o=z.text();
q=t.find(".mb-sm-open a").filter(function(){
var A=b(this);
return(A.text().substring(0,1).toLowerCase()===s||(u&&A.text()===o))
});
if(q.length>0){
if(u){
q.each(function(A){
if(b(this).text()===o){
p=A;
return false
}
});
if(p<(q.length-1)){
pe.focus(q.eq(p+1));
return false
}
}
pe.focus(q.eq(0))}return false}}}}}}}}}}else{if(x==="close"){
pe.focus(t.find(".knav-"+y[1]+"-0-0"));
setTimeout(function(){
return g()
},5)
}
else{
if(x==="section-previous"){
n=!!y[2]<<1|!!y[3]
;switch(n){
case 0:
case 1:
r=k.find(".knav-"+(y[1]-1)+"-0-0");
if(r.length>0){
pe.focus(r)
}
else{
pe.focus(k.find("ul.mb-menu > li:last").find("a:eq(0)"))
}
break;
case 2:
case 3:
r=t.find(".knav-"+(y[1])+"-"+(y[2]-1)+"-0");
if(r.length>0&&y[2]>1){
pe.focus(r)
}
else{
r=k.find(".knav-"+(y[1]-1)+"-0-0");
if(r.length>0){
pe.focus(r)
}
else{
pe.focus(k.find("ul.mb-menu > li:last").find("a:eq(0)"))
}}break}}else{if(x==="section-next"){n=!!y[2]<<1|!!y[3];
switch(n){
case 0:case 1:
r=k.find(".knav-"+(y[1]+1)+"-0-0");
if(r.length>0){
pe.focus(r)
}
else{
pe.focus(k.find(".knav-0-0-0"))
}
break;
case 2:case 3:
r=t.find(".knav-"+(y[1])+"-"+(y[2]+1)+"-0");

if(r.length>0){
pe.focus(r)
}
else{
r=k.find(".knav-"+(y[1]+1)+"-0-0");
if(r.length>0){
pe.focus(r)
}
else{
pe.focus(k.find(".knav-0-0-0"))
}
}
break
}
}
else{
if(x==="item-next"){
r=t.find(".knav-"+y[1]+"-"+(y[2])+"-"+(y[3]+1));
if(r.length>0){
pe.focus(r)
}
else{
r=t.find(".knav-"+y[1]+"-"+(y[2]+1)+"-0");
if(r.length>0){
pe.focus(r)
}else{
pe.focus(t.find(".knav-"+y[1]+"-1-0, .knav-"+y[1]+"-0-1,"))
}
}
}
else{
if(x==="item-previous"){
r=((y[2]>0||y[3]>1)?t.find(".knav-"+y[1]+"-"+(y[2])+"-"+(y[3]-1)):"");

if((y[2]>0||y[3]>1)&&r.length>0)
{
pe.focus(r)
}
else{
r=((y[2]>1||y[3]>0)?t.find("[class*='knav-"+y[1]+"-"+(y[2]-1)+"-']").last():"");
if((y[2]>1||y[3]>0)&&r.length>0){
pe.focus(r)
}
else{
pe.focus(t.find("[class*='knav-']").last())
}
}
}
else{
if(x==="focusin"&&y[2]===0&&y[3]===0){g();if(z.find(".expandicon").length>0){e(v.target)}}}}}}}}});b(document).on("click vclick touchstart",function(){k.trigger("focusoutside")});k.on("focusoutside",function(){return g()});return k}};window.pe=a;return a}(jQuery));(function(b){
var a=window.pe||{fn:{}}
;a.fn.multimedia={type:"plugin",polyfills:["progress"],icons:b('<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g id="play"><path d="M 14.299775,10.18788 5.7002247,4.610169 5.7867772,15.389831 14.299775,10.18788 z" /></g><g id="pause" style="display:inline"><path d="M 5.3405667,4.610169 5.3405667,15.389831 8.9169966,15.389831 8.9169966,4.610169 5.3405667,4.610169 z M 11.083003,4.610169 11.083003,15.389831 14.659433,15.389831 14.659433,4.610169 11.083003,4.610169 z" /></g><g id="rewind" transform="matrix(-1,0,0,-1,20,20)"><path d="M 8.4182018,15.389831 16.924761,10.187472 8.3244655,4.610169 8.3478995,8.03154 3.0752388,4.610169 3.168975,15.389831 8.3947677,12.202801 8.4182018,15.389831 z" /></g><g id="ff"><path  d="M 16.929004,10.187879 8.3294498,4.610169 8.4160023,15.389831 16.929004,10.187879 z M 11.67055,10.187879 3.0709963,4.610169 3.157549,15.389831 11.67055,10.187879 z" /></g><g id="mute_off"><path d="M 12.476712,4.599486 9.3409347,7.735268 5.5431537,7.735268 5.5431537,12.22989 9.3235137,12.22989 12.476712,15.400514 12.476712,4.599486 z"/></g><g id="mute_on"><path  d="M 12.466782,4.5994858 9.3309993,7.7352682 5.5332183,7.7352682 5.5332183,12.22989 9.3135782,12.22989 12.466782,15.400514 12.466782,4.5994858 z" /><path d="M 10,1.75 C 5.454363,1.75 1.78125,5.4543629 1.78125,10 1.78125,14.545637 5.454363,18.25 10,18.25 14.545637,18.25 18.25,14.545637 18.25,10 18.25,5.4543629 14.545637,1.75 10,1.75 z M 10,3.25 C 11.602784,3.25 13.062493,3.7896774 14.21875,4.71875 L 4.71875,14.21875 C 3.8057703,13.065541 3.28125,11.593619 3.28125,10 3.28125,6.2650231 6.2650232,3.25 10,3.25 z M 15.25,5.8125 C 16.169282,6.9656383 16.75,8.4065929 16.75,10 16.75,13.734977 13.734977,16.75 10,16.75 8.4063811,16.75 6.9279359,16.200753 5.78125,15.28125 L 15.25,5.8125 z"/></g><g id="cc"><path d="M 9.2241211,6.4042969 9.2241211,8.4003906 C 8.8914318,8.1725317 8.5564712,8.0039121 8.2192383,7.8945312 7.88655,7.7851623 7.5401961,7.7304748 7.1801758,7.7304687 6.4965774,7.7304748 5.9633748,7.9309955 5.5805664,8.3320313 5.2023079,8.7285207 5.0131804,9.2845097 5.0131836,10 5.0131804,10.715498 5.2023079,11.273766 5.5805664,11.674805 5.9633748,12.071291 6.4965774,12.269533 7.1801758,12.269531 7.5629826,12.269533 7.9252869,12.212567 8.2670898,12.098633 8.6134373,11.984702 8.9324474,11.816083 9.2241211,11.592773 L 9.2241211,13.595703 C 8.8413016,13.736979 8.4516536,13.841797 8.0551758,13.910156 7.6632429,13.983073 7.2690376,14.019531 6.8725586,14.019531 5.4916956,14.019531 4.4116185,13.666341 3.6323242,12.959961 2.8530264,12.249025 2.4633783,11.262372 2.4633789,10 2.4633783,8.7376353 2.8530264,7.7532613 3.6323242,7.046875 4.4116185,6.335945 5.4916956,5.9804766 6.8725586,5.9804687 7.2735948,5.9804766 7.6678002,6.0169349 8.0551758,6.0898437 8.4470963,6.1582108 8.8367443,6.2630284 9.2241211,6.4042969" /><path d="M 17.536621,6.4042969 17.536621,8.4003906 C 17.203932,8.1725317 16.868971,8.0039121 16.531738,7.8945312 16.19905,7.7851623 15.852696,7.7304748 15.492676,7.7304687 14.809077,7.7304748 14.275875,7.9309955 13.893066,8.3320313 13.514808,8.7285207 13.32568,9.2845097 13.325684,10 13.32568,10.715498 13.514808,11.273766 13.893066,11.674805 14.275875,12.071291 14.809077,12.269533 15.492676,12.269531 15.875483,12.269533 16.237787,12.212567 16.57959,12.098633 16.925937,11.984702 17.244947,11.816083 17.536621,11.592773 L 17.536621,13.595703 C 17.153802,13.736979 16.764154,13.841797 16.367676,13.910156 15.975743,13.983073 15.581538,14.019531 15.185059,14.019531 13.804196,14.019531 12.724119,13.666341 11.944824,12.959961 11.165526,12.249025 10.775878,11.262372 10.775879,10 10.775878,8.7376353 11.165526,7.7532613 11.944824,7.046875 12.724119,6.335945 13.804196,5.9804766 15.185059,5.9804687 15.586095,5.9804766 15.9803,6.0169349 16.367676,6.0898437 16.759596,6.1582108 17.149244,6.2630284 17.536621,6.4042969" /></g><g id="overlay"><rect rx="3" ry="3" width="20" height="20" style="fill:#000;opacity:0.4"/><polygon points="5,5 15,10, 5,15" fill="#FFF" style="fill:#FFF;" /></g><g id="loading"><rect rx="3" ry="3" width="20" height="20" style="fill:#000;opacity:0.4"/><g id="spinner" style="stroke-linecap:round;stroke:#FFF;stroke-width:1.5px" transform="translate(9.8,9.8)"><line x1="0" y1="5" x2="0" y2="7" transform="rotate(0,0,0)" opacity="0.09"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(30,0,0)" opacity="0.17"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(60,0,0)" opacity="0.25"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(90,0,0)" opacity="0.33"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(120,0,0)" opacity="0.42"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(150,0,0)" opacity="0.50"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(180,0,0)" opacity="0.58"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(210,0,0)" opacity="0.66"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(240,0,0)" opacity="0.75"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(270,0,0)" opacity="0.83"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(300,0,0)" opacity="0.91"/><line x1="0" y1="5" x2="0" y2="7" transform="rotate(330,0,0)" opacity="1"/></g></g></svg>'),get_image:function(i,h,c,e){var d,f;c=c!==undefined?c:20;e=e!==undefined?e:20;if(pe.svg){d=a.fn.multimedia.icons.clone();d.attr({height:c,width:e});d.prepend("<title>"+h+"</title>");d.children(':not(g[id="'+i+'"])').remove();f=d.children("g");f.removeAttr("id");if(c!==20||e!==20){f.attr("transform","scale("+e/20+","+c/20+")")}return d.attr({role:"img","aria-label":h})}return b('<img src="'+a.add.liblocation+"images/multimedia/"+i+'.png" alt="'+h+'" height="'+c+'" width="'+e+'" />')},_exec:function(p){var d,m=false,f=p.children("audio, video").eq(0),l=f.is("video")?"video":"audio",g,e=l==="video"?f.attr("width"):"0",s=l==="video"?f.attr("height"):"0",j,k=true,c,r,o="video/mp4",i="audio/mp3",n=a.add.liblocation+"bin/multimedia.swf?seed="+Math.random(),q,h;if(p.attr("id")!==undefined){d=p.attr("id")}else{d="wet-boew-mediaplayer"+p.index();p.attr("id",d)}if(f.attr("id")!==undefined){g=f.attr("id")}else{g=d+"-media";f.attr("id",g)}if(f.children('track[kind="captions"]')){j=f.children('track[kind="captions"]').attr("src")}if(f.get(0).error===null&&f.get(0).currentSrc!==""&&f.get(0).currentSrc!==undefined){m=true}else{q="id="+p.attr("id");if(l==="video"){r='<img src="'+f.attr("poster")+'" width="'+e+'" height="'+s+'" alt="'+f.attr("title")+'"/>';if(k&&f.find("source").filter('[type="'+o+'"]').length>0){q+="&height="+f.height()+"&width="+f.width()+"&posterimg="+encodeURI(a.url(f.attr("poster")).source)+"&media="+encodeURI(a.url(f.find("source").filter('[type="'+o+'"]').attr("src")).source);m=true}}else{if(k&&l==="audio"&&f.find("source").filter('[type="'+i+'"]').length>0){q+="&media="+a.url(f.find("source").filter('[type="'+i+'"]').attr("src")).source;m=true}else{m=false}}if(m){c=b('<object play="" pause="" id="'+g+'" width="'+e+'" height="'+s+'" class="'+l+'" type="application/x-shockwave-flash" data="'+n+'" tabindex="-1"><param name="movie" value="'+n+'"/><param name="flashvars" value="'+q+'"/><param name="allowScriptAccess" value="always"/><param name="bgcolor" value="#000000"/><param name="wmode" value="opaque"/>'+(typeof r==="string"?r:""));f.before(c);f.remove();f=c}else{if(r!==undefined){f.before(b(r));f.remove()}}}if(m){h=f.is("object")?f.children(":first-child"):f;b.extend(p.get(0),{object:f.get(0),evtmgr:h},a.fn.multimedia._intf);if(l==="video"){f.before(b('<button class="wb-mm-overlay"/>').append(a.fn.multimedia.get_image("overlay",a.dic.get("%play"),100,100)).attr("title",a.dic.get("%play")))}f.after(a.fn.multimedia._get_ui(g,l==="video"?true:false));if(b("html").hasClass("polyfill-progress")){p.find("progress").progress()}b(window).on("resize",{media:f,ratio:s/e},function(u){var t=u.data.media.parent().width()*u.data.ratio;u.data.media.height(t);f.parent().find(".wb-mm-overlay").height(t)});b(window).trigger("resize");p.on("click",function(w){var t=b(w.target),v,u;if(t.hasClass("playpause")||w.target===this.object||t.hasClass("wb-mm-overlay")){if(this.getPaused()===true){this.play()}else{this.pause()}}if(t.hasClass("cc")){this.setCaptionsVisible(!this.getCaptionsVisible())}if(t.hasClass("mute")){this.setMuted(!this.getMuted())}if(t.is("progress")||t.hasClass("wb-progress-inner")||t.hasClass("wb-progress-outer")){v=(w.pageX-t.offset().left)/t.width();this.setCurrentTime(this.getDuration()*v)}if(t.hasClass("rewind")||t.hasClass("fastforward")){u=this.getDuration()*0.05;if(t.hasClass("rewind")){u*=-1}this.setCurrentTime(this.getCurrentTime()+u)}});p.on("keydown",function(w){var u=b(this),t=0;if((w.which===32||w.which===13)&&w.target===this.object){u.find(".wb-mm-controls .playpause").click();return false}if(w.keyCode===37){u.find(".wb-mm-controls .rewind").click();return false}if(w.keyCode===39){u.find(".wb-mm-controls .fastforward").click();return false}if(w.keyCode===38){t=Math.round(this.getVolume()*10)/10+0.1;t=t<1?t:1;this.setVolume(t);return false}if(w.keyCode===40){t=Math.round(this.getVolume()*10)/10-0.1;t=t>0?t:0;this.setVolume(t);return false}return true});h.on("timeupdate seeked canplay play volumechange pause ended waiting captionsloaded captionsloadfailed captionsvisiblechange progress",b.proxy(function(x){var v=b(this),t,w,y,u;switch(x.type){case"play":t=v.find(".playpause");t.empty().append(a.fn.multimedia.get_image("pause",a.dic.get("%pause")));t.attr("title",a.dic.get("%pause"));v.find(".wb-mm-overlay").hide();break;case"pause":case"ended":t=v.find(".playpause");t.empty().append(a.fn.multimedia.get_image("play",a.dic.get("%play")));t.attr("title",a.dic.get("%play"));y=v.find(".wb-mm-overlay");y.empty().append(a.fn.multimedia.get_image("overlay",a.dic.get("%play"),100,100)).attr("title",a.dic.get("%play"));y.show();clearTimeout(this.loading);this.loading=false;break;case"volumechange":t=v.find(".mute").empty();if(this.getMuted()){t.append(a.fn.multimedia.get_image("mute_on",a.dic.get("%mute","disable")));t.attr("title",a.dic.get("%mute","disable"))}else{t.append(a.fn.multimedia.get_image("mute_off",a.dic.get("%mute","enable")));t.attr("title",a.dic.get("%mute","enable"))}break;case"captionsvisiblechange":t=v.find(".cc").empty();if(this.getCaptionsVisible()){t.append(a.fn.multimedia.get_image("cc",a.dic.get("%closed-caption","disable")));t.attr("title",a.dic.get("%closed-caption","disable"))}else{t.append(a.fn.multimedia.get_image("cc",a.dic.get("%closed-caption","enable")));t.attr("title",a.dic.get("%closed-caption","enable"))}break;case"timeupdate":w=Math.round(this.getCurrentTime()/this.getDuration()*1000)/10;u=v.find(".wb-mm-timeline progress");u.attr("value",w);v.find(".wb-mm-timeline-current span:not(.wb-invisible)").text(a.fn.multimedia._format_time(this.getCurrentTime()));v.find(".wb-mm-timeline-total span:not(.wb-invisible)").text(a.fn.multimedia._format_time(this.getDuration()));if(b.data(x.target,"captions")!==undefined){a.fn.multimedia._update_captions(v.find(".wb-mm-captionsarea"),this.getCurrentTime(),b.data(x.target,"captions"))}break;case"captionsloaded":b.data(x.target,"captions",x.captions);break;case"captionsloadfailed":v.find(".wb-mm-captionsarea").append("<p>"+a.dic.get("%captionserror")+"</p>");break;case"waiting":if(this.getPaused()===false&&!this.loading){this.loading=setTimeout(function(){y=v.find(".wb-mm-overlay");y.empty().append(a.fn.multimedia._get_loading_ind(this,"loading",a.dic.get("%loading"),100,100));y.show()},500)}break;case"canplay":clearTimeout(this.loading);this.loading=false;if(this.getPaused()===false){y=v.find(".wb-mm-overlay");y.empty().append(a.fn.multimedia.get_image("overlay",a.dic.get("%play"),100,100)).attr("title",a.dic.get("%play"));y.hide()}break;case"progress":if(this.getWaiting()===true){if(this.getBuffering()===false){this.setBuffering(true);h.trigger("waiting")}}else{if(this.getBuffering()===true){this.setBuffering(false);h.trigger("canplay")}}this.setPreviousTime(this.getCurrentTime());break}},p.get(0)));if(j!==undefined){f.after(b('<div class="wb-mm-captionsarea"/>').hide());a.fn.multimedia._load_captions(h,j)}}return p},_get_loading_ind:function(d,c,i,j,g){var f=a.fn.multimedia.get_image(c,i,j,g).attr("title",i),e=0,k,l;if(f.is("svg")){k=f.find("#spinner");l=k.attr("transform");clearInterval(d.spin);d.spin=setInterval(function(){k.attr("transform",l+",rotate("+(e+=20)+" 0 0)")},50)}return f},_get_ui:function(h,g){var e=b('<div class="wb-mm-controls">'),d=b('<div class="wb-mm-controls-start">'),f=b('<div class="wb-mm-timeline" tabindex="0"><p class="wb-mm-timeline-current"><span class="wb-invisible">'+a.dic.get("%position")+'</span><span>00:00:00</span></p><p class="wb-mm-timeline-total"><span class="wb-invisible">'+a.dic.get("%duration")+'</span><span>--:--:--</span></p><p class="wb-mm-timeline-inner"><span class="wb-invisible">'+a.dic.get("%percentage")+'</span><progress value="0" max="100" aria-live="off" /></p>'),c=b('<div class="wb-mm-controls-end">');d.append(b("<button>").attr({type:"button","class":"rewind","aria-controls":h,title:a.dic.get("%rewind")}).append(a.fn.multimedia.get_image("rewind",a.dic.get("%rewind"))));d.append(b("<button>").attr({type:"button","class":"playpause","aria-controls":h,title:a.dic.get("%play")}).append(a.fn.multimedia.get_image("play",a.dic.get("%play"))));d.append(b("<button>").attr({type:"button","class":"fastforward","aria-controls":h,title:a.dic.get("%fast-forward")}).append(a.fn.multimedia.get_image("ff",a.dic.get("%fast-forward"))));if(g===true){c.append(b("<button>").attr({type:"button","class":"cc","aria-controls":h,title:a.dic.get("%closed-caption","enable")}).append(a.fn.multimedia.get_image("cc",a.dic.get("%closed-caption","enable"))))}else{e.addClass("wb-mm-no-cc")}c.append(b("<button>").attr({type:"button","class":"mute","aria-controls":h,title:a.dic.get("%mute","enable")}).append(a.fn.multimedia.get_image("mute_off",a.dic.get("%mute","enable"))));e.append(d).append(f).append(c);return e},_intf:{play:function(){try{this.object.play()}catch(c){this.object.doPlay()}},pause:function(){try{this.object.pause()}catch(c){this.object.doPause()}},getPaused:function(){return(typeof this.object.paused!=="function"?this.object.paused:this.object.paused())},getPlayed:function(){return(typeof this.object.played!=="function"?this.object.played:this.object.played())},getEnded:function(){return(typeof this.object.ended!=="function"?this.object.ended:this.object.ended())},getSeeking:function(){return(typeof this.object.seeking!=="function"?this.object.seeking:this.object.seeking())},getDuration:function(){return(typeof this.object.duration!=="function"?this.object.duration:this.object.duration())},getBuffered:function(){return(typeof this.object.buffered!=="function"?(this.object.buffered.length>0?this.object.buffered.end(0):0):this.object.buffered())},getCurrentTime:function(){return(typeof this.object.currentTime!=="function"?this.object.currentTime:this.object.currentTime())},setCurrentTime:function(c){if(typeof this.object.currentTime!=="function"){this.object.currentTime=c}else{this.object.setCurrentTime(c)}},getPreviousTime:function(){return(typeof this.object.previousTime!=="undefined"?this.object.previousTime:0)},setPreviousTime:function(c){this.object.previousTime=c},getCaptionsVisible:function(){return b(this).find(".wb-mm-captionsarea").is(":visible")},setCaptionsVisible:function(c){if(c){b(this).find(".wb-mm-captionsarea").show()}else{b(this).find(".wb-mm-captionsarea").hide()}b(this.evtmgr).trigger("captionsvisiblechange")},getMuted:function(){return(typeof this.object.muted!=="function"?this.object.muted:this.object.muted())},setMuted:function(c){if(typeof this.object.muted!=="function"){this.object.muted=c}else{this.object.setMuted(c)}},getVolume:function(){return(typeof this.object.volume!=="function"?this.object.volume:this.object.volume())},setVolume:function(c){if(typeof this.object.volume!=="function"){this.object.volume=c}else{this.object.setVolume(c)}},getWaiting:function(){return this.getPaused()===false&&this.getCurrentTime()===this.getPreviousTime()},getBuffering:function(){return(typeof this.object.buffering!=="undefined"?this.object.buffering:false)},setBuffering:function(c){this.object.buffering=c}},_format_time:function(g){var e="",d,h,f;g=Math.floor(g);for(d=2;d>=0;d-=1){f=Math.pow(60,d);h=Math.floor(g/f);if(e!==""){e+=":"}e+=a.string.pad(h,2);g-=f*h}return e},_load_captions:function(g,d){var m,e,f,i,l,h,j,k;m=function(o){var t,q=0,r,n,c;if(o!==undefined){if(o.substring(o.length-1)==="s"){return parseFloat(o.substring(0,o.length-1))}else{t=o.split(":").reverse();for(r=0,n=t.length;r<n;r+=1){c=(r===0)?parseFloat(t[r]):parseInt(t[r],10);q+=c*Math.pow(60,r)}return q}}return -1};e=function(o){var n=".wet-boew-tt",p=o.find(n),c=[];p.each(function(){var t=b(this),s=-1,q=-1,r;if(t.attr("data-begin")!==undefined){s=m(t.attr("data-begin"));q=t.attr("data-end")!==undefined?m(t.attr("data-end")):m(t.attr("data-dur"))+s}else{if(t.attr("data")!==undefined){r=t.attr("data");r=r.replace(/(begin|dur|end)/gi,'"$1"').replace(/'/g,'"');r=b.parseJSON(r);s=m(r.begin);q=r.end!==undefined?m(r.end):m(r.dur)+s}}t=t.clone();t.find(n).detach();c[c.length]={text:t.html(),begin:s,end:q}});return c};f=function(o){var n="[begin]",p=o.find(n),c=[];p.each(function(){var s=b(this),r=-1,q=-1;r=m(s.attr("begin"));q=s.attr("end")!==undefined?m(s.attr("end")):m(s.attr("dur"))+r;s=s.clone();s.find(n).detach();c[c.length]={text:s.html(),begin:r,end:q}});return c};i=function(n){var c={type:"captionsloaded",captions:e(n)};g.trigger(c)};l=function(c){b.ajax({url:c,context:g,dataType:"html",success:function(o){var n={type:"captionsloaded"};if(o.indexOf("<html")>-1){n.captions=e(b(o))}else{n.captions=f(b(o))}b(this).trigger(n)},error:function(n,p,o){b(this).trigger({type:"captionsloadfailed",error:o})}})};if(d!==undefined){h=a.url(window.location.href);j=a.url(d);if(j.removehash()===h.source){k=b("#"+j.hash);if(k.length>0){i(k);return}g.trigger({type:"captionsloadfailed",error:new Error('Object with id "'+j.anchor+'" not found')});return}else{l(j.source);return}}g.trigger({type:"captionsloadfailed",error:new Error("Caption source is missing")})},_update_captions:function(f,h,e){var i,g,d;f.empty();for(i=0,g=e.length;i<g;i+=1){d=e[i];if(h>=d.begin&&h<=d.end){f.append(b("<div>"+d.text+"</div>"))}}}};a.triggermediaevent=function(d,c){b("#"+d).find("param:eq(0)").trigger(c)};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.parsertable={type:"plugin",onParserError:undefined,_exec:function(n){var q=n,C=function(J,I){if(typeof a.fn.parsertable.onParserError==="function"){a.fn.parsertable.onParserError(J,I)}},H={allParserObj:[],nbDescriptionRow:0},A=[],i=[],g=0,B=0,D=0,s=[],x=0,w=false,F=false,E=[],l,k=[],m=false,j=[],f,e,t=[],G=false,d=b(q).has("tfoot"),v,h;if(b(n).get(0).nodeName.toLowerCase()!=="table"){C(1,n);return}if(b(q).tblparser){C(2,q);return}b(q).data().tblparser=H;H.colgroup=A;if(!H.rowgroup){H.rowgroup=[]}if(!H.lstrowgroup){H.lstrowgroup=t}H.elem=q;H.uid=g;g+=1;H.colcaption={};H.colcaption.uid=g;g+=1;H.colcaption.elem=undefined;H.colcaption.type=7;H.colcaption.dataset=[];H.colcaption.summaryset=[];H.rowcaption={};H.rowcaption.uid=g;g+=1;H.rowcaption.elem=undefined;H.rowcaption.type=7;H.rowcaption.dataset=[];H.rowcaption.summaryset=[];H.col=[];function r(L){H.colcaption.elem=L;H.rowcaption.elem=L;var I={colcaption:H.colcaption,rowcaption:H.rowcaption,elem:L},J,M,K=[];if(b(L).children().length>0){b(L).contents().filter(function(){if(!J&&this.nodeType===3){J=b(this).text().replace(/^\s+|\s+$/g,"");if(J.length!==0){J=this;M=true;return}J=false}else{if(!J&&this.nodeType===1){J=this;return}}});b(L).children().filter(function(){if(M){K.push(this)}else{M=true}})}else{J=L}if(K.length>1){I.description=b(K)}else{if(K.length===1){I.description=K[0]}}if(J){I.caption=J}I.groupZero=H;I.type=1;H.groupheadercell=I;b(L).data().tblparser=I}function z(P,M){var K={elem:{},start:0,end:0,col:[],groupZero:H},I=0,O,N,J,L;K.elem=P;if(P){b(P).data().tblparser=K}K.uid=g;g+=1;H.allParserObj.push(K);if(A.length!==0){K.start=A[A.length-1].end+1}else{K.start=1}if(P){b("col",P).each(function(){var S=b(this),R=S.attr("span")!==undefined?parseInt(S.attr("span"),10):1,Q={elem:{},start:0,end:0,groupZero:H};Q.uid=g;g+=1;H.allParserObj.push(Q);Q.start=K.start+I;Q.end=K.start+I+R-1;Q.elem=this;Q.groupZero=H;S.data().tblparser=Q;K.col.push(Q);i.push(Q);I+=R})}if(K.col.length===0){if(P){O=b(P).attr("span")!==undefined?parseInt(b(P).attr("span"),10):1}else{if(typeof M==="number"){O=M}else{C(31);return}}I+=O;for(N=K.start,J=(K.start+I);N<J;N+=1){L={start:0,end:0,groupZero:H,elem:undefined};L.uid=g;g+=1;H.allParserObj.push(L);L.start=N;L.end=N;K.col.push(L);i.push(L)}}K.end=K.start+I-1;A.push(K)}function o(W){var ac,J,ab,M,Z,Y,aa=[],af,L,U,S,T,O,ae,Q,I,ad,N,X,R,ag,K,P,V;if(H.colgrouphead||G){return}G=true;if(W&&W>0){if(A.length>0&&(A[0].start!==1||(A[0].end!==W&&A[0].end!==(W+1)))){C(3);A=[]}}else{W=0}for(ac=0,J=k.length;ac<J;ac+=1){V=k[ac];if(!V.type){V.type=1}for(ab=0,M=V.cell.length;ab<M;ab+=1){K=k[ac].cell[ab];K.scope="col";if(ac===0&&ab===0&&b(K.elem).html().length===0){K.type=6;if(!H.layoutCell){H.layoutCell=[]}H.layoutCell.push(K);ab=K.width-1;if(ab>=M){break}}R=k[ac+1];ag=(R?R.cell[ab]:"");if(!K.descCell&&K.elem.nodeName.toLowerCase()==="th"&&!K.type&&R&&R.uid!==K.uid&&ag&&!ag.type&&ag.elem.nodeName.toLowerCase()==="td"&&ag.width===K.width&&ag.height===1){R.type=5;ag.type=5;ag.row=V;K.descCell=ag;if(!H.desccell){H.desccell=[]}H.desccell.push(ag);ab=K.width-1;if(ab>=M){break}}if(!K.type){K.type=1}}}for(ac=0,J=k.length;ac<J;ac+=1){V=k[ac];if(V.type===5){for(ab=0,M=V.cell.length;ab<M;ab+=1){K=V.cell[ab];if(K.type!==5&&K.type!==6&&K.height===1){C(4,K.elem)}if(K.uid===k[ac-1].cell[ab].uid){K.height-=1}}H.nbDescriptionRow+=1}else{aa.push(V)}}H.colgrp=[];if(W>0&&(A.length===1||A.length===0)){U={};S=[];T={start:(W+1),end:x,col:[],groupZero:H,elem:undefined,type:2};T.uid=g;g+=1;H.allParserObj.push(T);if(T.start>T.end){C(5)}U=T;for(ac=T.start,J=T.end;ac<=J;ac+=1){O={start:0,end:0,groupZero:H,elem:undefined};O.uid=g;g+=1;H.allParserObj.push(O);if(!H.col){H.col=[]}S.push(O);O.start=ac;O.end=ac;O.groupstruct=T;T.col.push(O);i.push(O)}H.colgrp[1]=[];H.colgrp[1].push(H.colcaption);if(W>0){ae={start:1,elem:undefined,end:W,col:[],groupZero:H,type:1};ae.uid=g;g+=1;H.allParserObj.push(ae);A.push(ae);A.push(U);H.colcaption.dataset=U.col;for(ac=ae.start,J=ae.end;ac<=J;ac+=1){O={start:0,end:0,groupZero:H,elem:undefined};O.uid=g;g+=1;H.allParserObj.push(O);if(!H.col){H.col=[]}H.col.push(O);O.start=ac;O.end=ac;O.groupstruct=ae;ae.col.push(O);i.push(O)}for(ac=0,J=S.length;ac<J;ac+=1){H.col.push(S[ac])}}if(A.length===0){A.push(U);H.colcaption.dataset=U.col}for(ac=0,J=H.col.length;ac<J;ac+=1){P=H.col[ac];P.header=[];for(ab=0,M=aa.length;ab<M;ab+=1){for(Z=P.start,Y=P.end;Z<=Y;Z+=1){if((ab===0||(ab>0&&aa[ab].cell[Z-1].uid!==aa[ab-1].cell[Z-1].uid))&&aa[ab].cell[Z-1].type===1){P.header.push(aa[ab].cell[Z-1])}}}}}else{Q=[];I=(W===0?1:A[0].end+1);T={start:I,end:undefined,col:[],row:[],type:2};ad=[];N=0;X=false;b.each(A,function(){var ai=this,ak,ah,aj,al;N+=1;if(X||H.colgrp[0]){C(6,ai);return}b.each(ai.col,function(){var am=this;if(!H.col){H.col=[]}H.col.push(am);am.type=1;am.groupstruct=ai});if(ai.start<I){if(W!==ai.end){C(7,ai)}for(ac=0,J=ai.col.length;ac<J;ac+=1){P=ai.col[ac];P.header=[];for(ab=0,M=aa.length;ab<M;ab+=1){for(Z=P.start,Y=P.end;Z<=Y;Z+=1){if((ab===0||(ab>0&&aa[ab].cell[Z-1].uid!==aa[ab-1].cell[Z-1].uid))&&aa[ab].cell[Z-1].type===1){P.header.push(aa[ab].cell[Z-1])}}}}return}ak=undefined;for(ac=0,J=aa.length;ac<J;ac+=1){L=aa[ac].cell[ai.end-1];if((L.colpos+L.width-1)===ai.end&&(L.colpos>=ai.start)){if(!ak||ak>(ac+1)){ak=(ac+1)}}}if(!ak){ak=1}for(ac=(ak-1),J=aa.length;ac<J;ac+=1){af=aa[ac];for(ab=ai.start-1,M=ai.end;ab<M;ab+=1){L=af.cell[ab];if(L.colpos<ai.start||(L.colpos+L.width-1)>ai.end){C(9);return}}}for(ac=ad.length,J=(ak-1);ac<J;ac+=1){L=aa[ac].cell[ai.start-1];if(L.uid!==aa[ac].cell[ai.end-1].uid||L.colpos>ai.start||L.colpos+L.width-1<ai.end){C(10);return}ah=L;ah.level=(ac+1);ah.start=ah.colpos;ah.end=ah.colpos+ah.width-1;ah.type=7;ad.push(ah);if(!H.virtualColgroup){H.virtualColgroup=[]}H.virtualColgroup.push(ah);if(!H.colgrp[(ac+1)]){H.colgrp[(ac+1)]=[]}H.colgrp[(ac+1)].push(ah)}ai.header=[];for(ac=ak-(ak>=2?2:1);ac<aa.length;ac+=1){for(ab=ai.start;ab<=ai.end;ab+=1){if(aa[ac].cell[ab-1].rowpos===ac+1){ai.header.push(aa[ac].cell[ab-1]);aa[ac].cell[ab-1].colgroup=ai}ab+=aa[ac].cell[ab-1].width-1}}aj=[];for(ac=0;ac<ad.length-1;ac+=1){aj.push(ad[ac])}ai.parentHeader=aj;if(ad.length<ak){if(!ai.type){ai.type=2;ai.level=ak}ad.push(ai);if(!H.colgrp[ak]){H.colgrp[ak]=[]}H.colgrp[ak].push(ai)}al=false;for(ac=ad.length-1;ac>=0;ac-=1){if(ad[ac].end<=ai.end){if(ad[ac].level<ak&&k.length>0){ai.type=3}if(ai.type===3&&!al){ad[ad.length-1].summary=ai;al=true}ad.pop()}}if(ak===1&&H.colgrp[1]&&H.colgrp[1].length>1&&k.length>0){for(ac=0;ac<H.colgrp[1].length;ac+=1){if(H.colgrp[1][ac].type===3){ai.level=0;if(!H.colgrp[0]){H.colgrp[0]=[]}H.colgrp[0].push(ai);H.colgrp[1].pop();X=true;break}}ai.type=3}if(ai.level===1&&ai.type===2){ai.repheader="caption"}if(!H.col){H.col=[]}b.each(ai.col,function(){var am=this;am.type=ai.type;am.level=ai.level;am.groupstruct=ai;am.header=[];for(ab=(ak-1);ab<aa.length;ab+=1){for(ac=(ai.start-1);ac<ai.end;ac+=1){if((aa[ab].cell[ac].colpos>=am.start&&aa[ab].cell[ac].colpos<=am.end)||(aa[ab].cell[ac].colpos<=am.start&&(aa[ab].cell[ac].colpos+aa[ab].cell[ac].width-1)>=am.end)||((aa[ab].cell[ac].colpos+aa[ab].cell[ac].width-1)<=am.start&&(aa[ab].cell[ac].colpos+aa[ab].cell[ac].width-1)>=am.end)){if(am.header.length===0||(am.header.length>0&&am.header[am.header.length-1].uid!==aa[ab].cell[ac].uid)){am.header.push(aa[ab].cell[ac]);aa[ab].cell[ac].level=ai.level}}}}})});if(!H.virtualColgroup){H.virtualColgroup=[]}b.each(H.virtualColgroup,function(){var ah=this;for(ac=(ah.start-1);ac<ah.end;ac+=1){if(!H.col[ac].headerLevel){H.col[ac].headerLevel=[]}H.col[ac].headerLevel.push(ah)}})}if(A.length>0&&W>0){H.colgrouphead=A[0];H.colgrouphead.type=1}}function c(){if(!f.type||!f.level){p()}t.push(f);f={}}function u(){if(f&&f.type){c()}f={};f.elem=e;f.row=[];f.headerlevel=[];f.groupZero=H;f.uid=g;g+=1}function p(K){var J,I,L;if(j.length>0){if(f&&f.type&&f.row.length>0){e={};u()}f.type=2;f.row=j;for(J=0;J<j.length;J+=1){j[J].cell[0].type=7;j[J].cell[0].scope="row";j[J].cell[0].row=j[J];f.headerlevel.push(j[J].cell[0])}}if(j.length===0&&t.length===0){if(f.type&&f.type===1){e={};u()}f.type=2;f.level=1}if(j.length===0&&t.length>0&&!f.type&&A[0]&&(A[0].type===1||(!A[0].type&&A.length>0))&&!K){f.type=3}else{f.type=2}if(!f.level){if(t.length>0){I=t[t.length-1];if(f.type===2){if(f.headerlevel.length===I.headerlevel.length){f.level=I.level}else{if(f.headerlevel.length<I.headerlevel.length){L=f.headerlevel;f.headerlevel=[];for(J=0;J<(I.headerlevel.length-f.headerlevel.length);J+=1){f.headerlevel.push(I.headerlevel[J])}for(J=0;J<L.length;J+=1){f.headerlevel.push(L[J])}f.level=I.level}else{if(f.headerlevel.length>I.headerlevel.length){f.level=f.headerlevel.length+1}}}}else{if(f.type===3){if(I.type===3){f.level=I.level-1}else{f.level=I.level}if(f.level<0){C(12)}for(J=0;J<I.headerlevel.length;J+=1){if(I.headerlevel[J].level<f.level){f.headerlevel.push(I.headerlevel[J])}}}else{f.level="Error, not calculated";C(13)}}}else{f.level=1+j.length}}for(J=0;J<f.headerlevel.length;J+=1){f.headerlevel[J].level=J+1;f.headerlevel[J].rowlevel=f.headerlevel[J].level}j=[];if(f.level===undefined||f.level<0){C(14,f.elem)}}function y(X){D+=1;var R=1,M="",Y=false,I=b(X).children(),K={colgroup:[],cell:[],elem:X,rowpos:D},P,J,Q,W,Z,L,V,T,S,N,O,U;b(X).data().tblparser=K;K.uid=g;g+=1;K.groupZero=H;H.allParserObj.push(K);P={cell:[],cgsummary:undefined,type:false};P.uid=g;g+=1;H.allParserObj.push(P);J=function(aa){if(!P.type){P.type=1}if(P.type!==1){K.colgroup.push(P);P={cell:[],type:1};P.uid=g;g+=1;H.allParserObj.push(P)}P.cell.push(aa);Y=aa.colpos+aa.width-1};Q=function(aa){if(!P.type){P.type=2}if(P.type!==2){K.colgroup.push(P);P={cell:[],type:2};P.uid=g;g+=1;H.allParserObj.push(P)}P.cell.push(aa)};W=function(){var aa;b.each(s,function(){if(this.colpos===R&&this.spanHeight>0&&(this.height+this.rowpos-this.spanHeight===D)){if(this.elem.nodeName.toLowerCase()==="th"){J(this)}if(this.elem.nodeName.toLowerCase()==="td"){Q(this)}this.spanHeight-=1;R+=this.width;for(aa=1;aa<=this.width;aa+=1){K.cell.push(this)}M=this.elem.nodeName.toLowerCase()}})};W();b.each(I,function(){var af=b(this),ac=af.attr("colspan")!==undefined?parseInt(af.attr("colspan"),10):1,aa=af.attr("rowspan")!==undefined?parseInt(af.attr("rowspan"),10):1,ad,ae,ab;switch(this.nodeName.toLowerCase()){case"th":ad={rowpos:D,colpos:R,width:ac,height:aa,data:[],summary:[],elem:this};af.data().tblparser=ad;ad.groupZero=H;ad.uid=g;g+=1;H.allParserObj.push(ad);J(ad);ad.parent=P;if(aa>1){ad.spanHeight=aa-1;s.push(ad)}R+=ad.width;for(ab=1;ab<=ac;ab+=1){K.cell.push(ad)}W();break;case"td":ae={rowpos:D,colpos:R,width:ac,height:aa,elem:this};af.data().tblparser=ae;ae.groupZero=H;ae.uid=g;g+=1;H.allParserObj.push(ae);Q(ae);ae.parent=P;if(aa>1){ae.spanHeight=aa-1;s.push(ae)}R+=ae.width;for(ab=1;ab<=ac;ab+=1){K.cell.push(ae)}W();break;default:C(15,this);break}M=this.nodeName.toLowerCase()});W();if(x===0){x=K.cell.length}if(x!==K.cell.length){K.spannedRow=s;C(16,K.elem)}if(m){k.push(K);return}K.colgroup.push(P);if(M==="th"){K.type=1;if(K.colgroup.length===2&&D===1){if(K.colgroup[0].type===2&&K.colgroup[0].cell.length===1){if(b(K.colgroup[0].cell[0].elem).html().length===0){k.push(K);return}C(17)}else{C(18)}}if(K.colgroup.length===1){if(K.colgroup[0].cell.length>1){if(!w){k.push(K);return}C(18)}else{if(D!==1){j.push(K);w=true;return}C(18)}}if(K.colgroup.length>1&&D!==1){C(21)}}else{K.type=2;w=true;if(j.length>0&&K.cell[0].uid===K.cell[K.cell.length-1].uid){K.type=5;K.cell[0].type=5;K.cell[0].row=K;if(!K.cell[0].describe){K.cell[0].describe=[]}j[j.length-1].cell[0].descCell=K.cell[0];K.cell[0].describe.push(j[j.length-1].cell[0]);if(!H.desccell){H.desccell=[]}H.desccell.push(K.cell[0]);return}if(j.length>0||!f.type){p()}K.type=f.type;K.level=f.level;if(A[0]&&Y&&A[0].end!==Y&&A[0].end===(Y+1)){Y+=1}K.lastHeadingColPos=Y;if(!f.lastHeadingColPos){f.lastHeadingColPos=Y}if(!h){h=Y}K.rowgroup=f;if(f.lastHeadingColPos!==Y){if((!v&&f.lastHeadingColPos<Y)||(v&&v===Y)){b.each(s,function(){if(this.spanHeight>0){C(29,this)}});s=[];j=[];E=[];l+=1;c();e=undefined;u();p();K.type=f.type}else{if(v&&h===Y){b.each(s,function(){if(this.spanHeight>0){C(29,this)}});s=[];j=[];E=[];l+=1;c();e=undefined;u();p(true);K.type=f.type;C(34,K.elem)}else{C(32)}}}if(!f.lastHeadingColPos){f.lastHeadingColPos=Y}if(f.type===3&&!v){v=Y}if(Y){Z=[];L=undefined;V=[];for(T=0;T<Y;T+=1){if(K.cell[T].elem.nodeName.toLowerCase()==="td"){if(!K.cell[T].type&&K.cell[T-1]&&!(K.cell[T-1].descCell)&&K.cell[T-1].type===1&&K.cell[T-1].height===K.cell[T].height){K.cell[T].type=5;K.cell[T-1].descCell=K.cell[T];if(!K.cell[T].describe){K.cell[T].describe=[]}K.cell[T].describe.push(K.cell[T-1]);if(!K.desccell){K.desccell=[]}K.desccell.push(K.cell[T]);if(!H.desccell){H.desccell=[]}H.desccell.push(K.cell[T]);K.cell[T].scope="row"}if(!K.cell[T].type){V.push(K.cell[T])}}if(K.cell[T].elem.nodeName.toLowerCase()==="th"){K.cell[T].type=1;K.cell[T].scope="row";if(L&&L.uid!==K.cell[T].uid){if(L.height>=K.cell[T].height){if(L.height===K.cell[T].height){C(23)}if(!L.subheader){L.subheader=[];L.isgroup=true}L.subheader.push(K.cell[T]);L=K.cell[T];Z.push(K.cell[T])}else{C(24)}}if(!L){L=K.cell[T];Z.push(K.cell[T])}for(S=0;S<V.length;S+=1){if(!(V[S].type)&&!(K.cell[T].keycell)&&V[S].height===K.cell[T].height){V[S].type=4;K.cell[T].keycell=V[S];if(!K.keycell){K.keycell=[]}K.keycell.push(V[S]);if(!H.keycell){H.keycell=[]}H.keycell.push(V[S]);if(!V[S].describe){V[S].describe=[]}V[S].describe.push(K.cell[T])}}}}b.each(V,function(){if(!(this.type)){C(25);if(!K.errorcell){K.errorcell=[]}K.errorcell.push(this)}});K.header=Z}else{Y=0;if(A.length===0){z(undefined,x)}}o(Y);K.headerset=(f.headerlevel||[]);if(Y!==0){Y=A[0].end}if(!K.datacell){K.datacell=[]}for(T=Y;T<K.cell.length;T+=1){N=true;O=true;for(S=(Y===0?0:1);S<A.length;S+=1){if(A[S].start<=K.cell[T].colpos&&K.cell[T].colpos<=A[S].end){if(K.type===3||A[S].type===3){K.cell[T].type=3}else{K.cell[T].type=2}if(K.type===3&&A[S].type===3&&(b(K.cell[T].elem).text().length===0)){K.cell[T].type=6;if(!H.layoutCell){H.layoutCell=[]}H.layoutCell.push(K.cell[T])}K.cell[T].collevel=A[S].level;K.datacell.push(K.cell[T])}O=!O}if(A.length===0){K.cell[T].type=2;K.datacell.push(K.cell[T])}if(K.cell[T].rowpos<D){if(!K.cell[T].addrowheaders){K.cell[T].addrowheaders=[]}if(K.header){for(S=0;S<K.header.length;S+=1){if((K.header[S].rowpos===D&&K.cell[T].addrowheaders.length===0)||(K.header[S].rowpos===D&&K.cell[T].addrowheaders[K.cell[T].addrowheaders.length-1].uid!==K.header[S].uid)){K.cell[T].addrowheaders.push(K.header[S])}}}}}U=(A.length===0);if(A.length===0){U=false}if(!H.col){H.col=[]}for(T=0;T<H.col.length;T+=1){for(S=(H.col[T].start-1);S<H.col[T].end;S+=1){if(!H.col[T].cell){H.col[T].cell=[]}if(!(S>(H.col[T].start-1)&&H.col[T].cell[H.col[T].cell.length-1].uid===K.cell[S].uid)){H.col[T].cell.push(K.cell[S]);if(!K.cell[S].col){K.cell[S].col=H.col[T]}}}}for(T=0;T<K.cell.length;T+=1){if(!K.cell[T].row){K.cell[T].row=K}K.cell[T].rowlevel=f.level;K.cell[T].rowlevelheader=f.headerlevel;K.cell[T].rowgroup=f;if(T>0&&K.cell[T-1].uid===K.cell[T].uid&&K.cell[T].type!==1&&K.cell[T].type!==5&&K.cell[T].rowpos===D&&K.cell[T].colpos<=T){if(!K.cell[T].addcolheaders){K.cell[T].addcolheaders=[]}if(H.col[T]&&H.col[T].header){for(S=0;S<H.col[T].header.length;S+=1){if(H.col[T].header[S].colpos===(T+1)){K.cell[T].addcolheaders.push(H.col[T].header[S])}}}}}F=true}B+=1;if(!H.row){H.row=[]}H.row.push(K);f.row.push(K);delete K.colgroup}if(d){b("tfoot",q).appendTo(b("tbody:last",q).parent())}b(q).children().each(function(){var I=b(this);switch(this.nodeName.toLowerCase()){case"caption":r(this);break;case"colgroup":z(this);break;case"thead":e=this;if(k.length!==0||(H.row&&H.row.length>0)){C(26,this)}b(this).data("tblparser",H);m=true;b(this).children().each(function(){if(this.nodeName.toLowerCase()!=="tr"){C(27,this)}y(this)});m=false;break;case"tbody":case"tfoot":e=this;u();I.data().tblparser=f;I.children().each(function(){if(this.nodeName.toLowerCase()!=="tr"){C(27,this);return}y(this)});c();b.each(s,function(){if(this.spanHeight>0){C(29,this)}});s=[];j=[];E=[];l+=1;break;case"tr":y(this);break;default:C(30,this);break}});H.theadRowStack=k;delete H.colgroupFrame;H.colgrouplevel=H.colgrp;delete H.colgrp}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.prettify={type:"plugin",depends:["prettify"],executed:false,_exec:function(g){if(!pe.fn.prettify.executed){var c,k,d=b("body").find("pre"),e=g.attr("class").split(" "),f,l,j,h=pe.add.liblocation;for(f=0,l=e.length;f<l;f+=1){j=e[f];if(j.length<12&&j.indexOf("lang-")===0){pe.add._load([h+"dependencies/prettify/"+j+pe.suffix+".js"])}}c={linenums:false,allpre:false};k={linenums:g.hasClass("linenums")?true:undefined,allpre:g.hasClass("all-pre")?true:undefined};if(typeof wet_boew_prettify!=="undefined"&&wet_boew_prettify!==null){b.extend(c,wet_boew_prettify,k)}else{b.extend(c,k)}if(c.allpre){d.addClass("prettyprint")}if(c.linenums){d.filter(".prettyprint").addClass("linenums")}prettyPrint();pe.fn.prettify.executed=true}}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.sessiontimeout={type:"plugin",depends:["metadata"],_exec:function(m){var c,j='<div class="sOverlay jqmOverlay">&#160;</div>',d,e,p,f,i,o,g,l,h,n,k;c={inactivity:1200000,reactionTime:30000,sessionalive:1200000,logouturl:"./",refreshOnClick:true,refreshCallbackUrl:"./",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1000,das:10000,hs:100000,ks:1000000}};b.metadata.setType("attr","data-wet-boew");if(typeof wet_boew_sessiontimeout!=="undefined"&&wet_boew_sessiontimeout!==null){b.extend(c,wet_boew_sessiontimeout,m.metadata())}else{b.extend(c,m.metadata())}p=function(){clearTimeout(e);if(c.refreshCallbackUrl.length>2){b.post(c.refreshCallbackUrl,function(q){if(q&&q.replace(/\s/g,"")!=="false"){e=setTimeout(p,n(c.sessionalive))}else{alert(pe.dic.get("%st-already-timeout-msg"));l()}})}};f=function(){clearTimeout(d);d=setTimeout(o,n(c.inactivity));if(c.sessionalive){p()}};i=function(){var r=k(),s=document.activeElement,q;b(document.body).append(j);q=confirm(pe.dic.get("%st-timeout-msg").replace("#expireTime#",r));s.focus();b(".jqmOverlay").detach();return q};o=function(){var q=g();if(i()&&g()-q<=c.reactionTime){h()}else{l()}};g=function(){return(new Date()).getTime()};l=function(){window.location.href=c.logouturl};h=f;n=function(s){var q,r,t;if(typeof s==="undefined"||s===null){return null}q=c.regex.exec(b.trim(s.toString()));if(q[2]){r=parseFloat(q[1]);t=c.powers[q[2]]||1;return r*t}else{return s}};k=function(){var s=new Date(g()+c.reactionTime),r=s.getHours(),t=s.getMinutes(),u=s.getSeconds(),q=r<12?" AM":" PM";r=r%12;if(r===0){r=12}r=r<10?"0"+r:r;t=t<10?"0"+t:t;u=u<10?"0"+u:u;return r+":"+t+":"+u+q};f();if(c.refreshOnClick){b(document).on("click",f)}return m}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.share={type:"plugin",depends:["metadata","bookmark","outside"],_exec:function(l){var d,n,c,m,i,o,k,e,j,f,h,g;d={url:"",sourceTag:"",title:"",description:"",sites:[],compact:false,hint:pe.dic.get("%share-text")+pe.dic.get("%share-hint"),popup:true,popupTag:"h2",popupText:pe.dic.get("%share-text"),includeDisclaimer:true,popupDisclaimer:pe.dic.get("%share-disclaimer"),hideText:(pe.dic.get("%hide")+" - "),addFavorite:false,favoriteText:pe.dic.get("%favourite"),addEmail:false,emailText:pe.dic.get("%email"),emailSubject:pe.dic.get("%share-email-subject"),emailBody:pe.dic.get("%share-email-body"),manualBookmark:pe.dic.get("%share-manual"),addShowAll:false,showAllText:pe.dic.get("%share-showall"),showAllTitle:pe.dic.get("%share-showall-title"),addAnalytics:false,analyticsName:"/share/{r}/{s}"};n={compact:l.hasClass("compact")?true:undefined,popup:l.hasClass("popup-none")?false:undefined,addFavorite:l.hasClass("favourite")?true:undefined,addEmail:l.hasClass("email")?true:undefined,addShowAll:l.hasClass("showall")?true:undefined,addAnalytics:l.hasClass("analytics")?true:undefined};b.metadata.setType("attr","data-wet-boew");if(typeof wet_boew_share!=="undefined"&&wet_boew_share!==null){b.extend(d,wet_boew_share,n,l.metadata())}else{b.extend(d,n,l.metadata())}l.bookmark(d);
if(d.popup&&pe.cssenabled){
l.attr("role","application");

if(d.popupTag.substring(0,1)==="h"){
l.wrapInner("<section />")
}
c=l.find(".bookmark_popup").attr({
id:"bookmark_popup","aria-hidden":"true",role:"menu"
}).prepend('<p class="popup_title">'+d.popupText+"</p>");
m=c.children("ul").detach();
o=m.find("li").attr("role","presentation").find("a").attr("role","menuitem").each(function(){
var q=b(this),p=q.children("span");
if(p.length>0){
q.attr("title",p.attr("title"));
p.removeAttr("title")
}
});
c.append(m);

if(d.includeDisclaimer){
c.append('<p class="popup_disclaimer">'+d.popupDisclaimer+"</p>")
}
c.on("click vclick touchstart",function(p){if(p.stopPropagation){p.stopImmediatePropagation()}else{p.cancelBubble=true}});
i=l.find(".bookmark_popup_text").off("click vclick touchstart keydown").wrap("<"+d.popupTag+" />");
i.attr({role:"button","aria-controls":"bookmark_popup"}).on("click vclick touchstart keydown",function(p){
if(p.type==="keydown"){if(!(p.ctrlKey||p.altKey||p.metaKey)){if(p.keyCode===13||p.keyCode===32){
p.preventDefault();

if(c.attr("aria-hidden")==="true"){
c.trigger("open")
}else{
c.trigger("close")
}}
else{
if(p.keyCode===38||p.keyCode===40){
p.preventDefault();c.trigger("open")
}
}
}}else{
if(c.attr("aria-hidden")==="true"){
c.trigger("open")
}
else{c.trigger("close")
}
return false}});
c.on("keydown focusoutside open close closenofocus",function(p){if(p.type==="keydown"){if(!(p.ctrlKey||p.altKey||p.metaKey)){switch(p.keyCode){
case 27:c.trigger("close");return false;
case 37:
k=b(p.target).closest("li").prev().find("a");
if(k.length===0){k=o}pe.focus(k.last());return false;case 38:e=b(p.target).offset().left;
k=b(p.target).closest("li").prevAll().find("a").filter(function(){return(b(this).offset().left===e)});
if(k.length>0){pe.focus(k.first())}else{k=o.filter(function(){return(b(this).offset().left<e)});
if(k.length>0){pe.focus(k.last())}else{e=o.last().offset().left;k=o.filter(function(){return(b(this).offset().left>e)});if(k.length>0){
pe.focus(k.last())}else{pe.focus(o.last())}}}return false;case 39:k=b(p.target).closest("li").next().find("a");if(k.length===0){k=o}pe.focus(k.first());
return false;case 40:e=b(p.target).offset().left;k=b(p.target).closest("li").nextAll().find("a").filter(function(){return(b(this).offset().left===e)});
if(k.length>0){pe.focus(k.first())}else{k=o.filter(function(){return(b(this).offset().left>e)});if(k.length>0){pe.focus(k.first())}else{pe.focus(o.first())}}
return false;default:if((p.keyCode>47&&p.keyCode<58)||(p.keyCode>64&&p.keyCode<91)){j=String.fromCharCode(p.keyCode).toLowerCase();f=b(p.target).text();
h=o.filter(function(){return(b(this).text().substring(1,2).toLowerCase()===j||b(this).text()===f)});if(h.length>0){if(b(p.target).hasClass("bookmark_popup_text")){
pe.focus(h.eq(0))}else{h.each(function(q){if(b(this).text()===f){g=q;return false}});if(g<(h.length-1)){pe.focus(h.eq(g+1));return false}pe.focus(h.eq(0))}}return false}}}
}else{if(p.type==="focusoutside"&&!b(p.target).is(i)){
if(c.attr("aria-hidden")==="false"){
c.trigger("closenofocus")}}
else{
if(p.type==="open"){i.text(d.hideText+d.popupText);
c.attr("aria-hidden","false").show();
pe.focus(c.show().find("li a").first())}
else{if(p.type==="close"||p.type==="closenofocus"){
i.text(d.popupText);c.attr("aria-hidden","true").hide();
if(p.type==="close"){pe.focus(i.first())}}}}}});
b(document).on("click vclick touchstart",function(){if(c.attr("aria-hidden")==="false"){
c.trigger("close")}})}else{l.addClass("popup-none")}return l}};window.pe=a;return a}(jQuery));
(function(b){var a=window.pe||{fn:{}};a.fn.slideout={type:"plugin",depends:["resize","metadata"],opened:false,_exec:function(h){
var t=10,s=pe.dic.get("%hide")+'<span class="wb-invisible">'+pe.dic.get("%table-contents")+"</span>",q=2,r=false,n,i=true,c=true,m,o,d,p=0,g,j,e,l,f,k;
b.metadata.setType("attr","data-wet-boew");
k={imgShow:{src:pe.add.liblocation+"images/slideout/"+pe.dic.get("%show-image"),height:147,width:30,alt:pe.dic.get("%show-toc")+pe.dic.get("%table-contents")},imgHide:{src:pe.add.liblocation+"images/slideout/"+pe.dic.get("%hide-image"),height:147,width:30,alt:pe.dic.get("%hide")+pe.dic.get("%table-contents")}};b.extend(k,h.metadata());f=b('<div style="display: none;">').appendTo("body");if(f.css("display")!=="none"){return}f.remove();
g=h.wrap('<div id="slideoutWrapper" role="application" />').parent();
h.wrap('<div id="slideoutInnerWrapper" />');

h.attr({role:"menu",id:"slideout-body"}).find("li").attr("role","presentation");
if(i){h.find('a[href="'+window.location.href+'"]').replaceWith('<span class="so-active">'+b(this).text()+"</span>")}
e=h.find("a").attr("role","menuitem");n=function(){if(!r){
var u=b("#wb-core-in").offset().left;if(u<=t){u=0}g.css("top",b("#wb-core-in").offset().top);g.css("right",u)}};m=function(v){o.off("click vclick touchstart",m);e.off("click vclick touchstart",m);d.off("click vclick touchstart",m);g.off("keydown",j);h.off("keydown",j);b(document).off("click vclick touchstart",l);if(!r){var u=g.position();if(pe.ie<=0||document.documentMode!==undefined){g.removeClass("slideoutWrapper").addClass("slideoutWrapperRel").css({top:u.top-b("#wb-core-in").offset().top,right:t-10})}setTimeout(function(){h.show()},50);pe.focus(e.eq(0))}r=!r;g.animate({width:parseInt(g.css("width"),10)===(k.imgShow.width+q)?h.outerWidth()+(k.imgShow.width+q):(k.imgShow.width+q)+"px"},function(){if(!r){h.hide();g.find("#slideoutInnerWrapper").css("width",k.imgHide.width);if(pe.ie<=0||document.documentMode!==undefined){g.addClass("slideoutWrapper");g.removeClass("slideoutWrapperRel");g.css("width",(k.imgShow.width+q)+"px").css("top",b("#wb-core-in").offset().top);n()}}else{if(parseInt(pe.ie,10)===7&&document.documentMode===undefined){h.find("ul").html(h.find("ul").html())}}o.on("click vclick touchstart",m);e.on("click vclick touchstart",m);d.on("click vclick touchstart",m);g.on("keydown",j);h.on("keydown",j);b(document).on("click vclick touchstart",l)});if(r){g.find("#slideoutToggle a img").attr({src:k.imgHide.src,title:k.imgHide.alt,alt:k.imgHide.alt});g.find("#slideoutToggle a");h.attr("aria-hidden","false");g.find("#slideoutInnerWrapper").css("width","")}else{g.find("#slideoutToggle a img").attr({src:k.imgShow.src,title:k.imgShow.alt,alt:k.imgShow.alt});g.find("#slideoutToggle a");h.attr("aria-hidden","true")}if(b(v.target).is(d)){return false}};j=function(A){var z=b(A.target),y=z.is('[role="menuitem"]'),u,B,x,v,w;if(y){e.each(function(C){if(b(this).is(z)){u=C;return false}})}if(!(A.ctrlKey||A.altKey||A.metaKey)){switch(A.keyCode){case 9:if(r&&((A.shiftKey&&z.is(o))||(!A.shiftKey&&z.is(d)))){o.trigger("click");pe.focus(o);return false}break;case 13:z.trigger("click");if(z.is(d)){pe.focus(o);return false}break;case 27:if(r){m();pe.focus(o);return false}break;case 32:z.trigger("click");if(z.is(d)){pe.focus(o);return false}break;case 38:if(!y){if(r){pe.focus(e.eq(e.length-1))}else{o.trigger("click")}}else{if(u===0){pe.focus(e.eq(e.length-1))}else{pe.focus(e.eq(u-1))}}return false;case 40:if(!y){if(r){pe.focus(e.eq(0))}else{o.trigger("click")}}else{if(u===e.length-1){pe.focus(e.eq(0))}else{pe.focus(e.eq(u+1))}}return false;default:if((A.keyCode>47&&A.keyCode<58)||(A.keyCode>64&&A.keyCode<91)){B=String.fromCharCode(A.keyCode).toLowerCase();x=b(A.target).text();w=h.find("a").filter(function(){return(b(this).text().substring(0,1).toLowerCase()===B||b(this).text()===x)});if(w.length>0){w.each(function(C){if(b(this).text()===x){v=C;return false}});if(v<(w.length-1)){pe.focus(w.eq(v+1));return false}pe.focus(w.eq(0))}return false}}}else{if(A.metaKey&&A.keycode===9){if(z.is(o)){o.trigger("click");return false}}}};e.on("click vclick touchstart",m);g.on("keydown",j);h.on("keydown",j);l=function(u){if(r&&!b(u.target).is(h)&&!b(u.target).is(g)&&b(u.target).closest(h).length===0){m()}};b(document).on("click vclick touchstart",l);h.append('<a href="#" id="slideoutClose" role="button" aria-controls="slideout-body">'+s+"</a>");d=h.find("#slideoutClose");g.find("#slideoutInnerWrapper").css("padding",(q/2)+"px").prepend('<div id="slideoutToggle" class="slideoutToggle"><a id="toggleLink" role="button" aria-controls="slideout-body" aria-label="'+k.imgShow.alt+'" href="#" onclick="return false;"><img width="'+k.imgShow.width+'px" height="'+k.imgShow.height+'px" src="'+k.imgShow.src+'" alt="'+k.imgShow.alt+'" /></a></div>');o=g.find("#toggleLink");g.find("#slideoutToggle").css({width:k.imgShow.width,height:k.imgShow.height});h.addClass("tabbedSlideout");p=h.outerHeight();g.css("width",(k.imgShow.width+q)+"px").css("top",b("#wb-core-in").offset().top);h.hide().attr("aria-hidden","true");g.find("#slideoutInnerWrapper").css("width",k.imgHide.width);if(pe.ie>0&&pe.ie<8&&document.documentMode===undefined){c=false}if(c){g.addClass("slideoutWrapper");pe.resize(n);n()}else{g.addClass("so-ie7");g.addClass("slideoutWrapperRel").css({right:t-10,top:"0"})}o.on("click vclick touchstart",m);d.on("click vclick touchstart",m);if(parseInt(pe.ie,10)===7){b("html").css("overflowY","auto")}}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.tabbedinterface={type:"plugin",depends:(pe.mobile?[]:["metadata","easytabs","equalheights"]),mobile:function(h,i){if(typeof i==="undefined"||!i){h.find(".wet-boew-tabbedinterface").each(function(){a.fn.tabbedinterface.mobile(b(this),true)})}var g=h.children(".tabs").children("li"),l,c=h.children(".tabs-panel").children("div"),f='<div data-role="collapsible-set" data-mini="true" data-content-theme="b" data-theme="b">',j=(h.hasClass("tabs-style-4")||h.hasClass("tabs-style-5")),n,o,e,m,d,k;if(j){n=h.closest("section").find(":header:first");o=(n.length>0?(parseInt(n.prop("tagName").substr(1),10)+1):3);e="<h"+o+">";m="</h"+o+">"}c.each(function(p){l=g.eq(p);d=b(this);k=d.children();if(k.length!==0){f+='<div data-role="collapsible"'+(l.hasClass("default")?' data-collapsed="false"':"")+">";if(j){f+=e+l.children("a").html()+m+this.innerHTML}else{while(k.length===1){d=k;k=d.children()}if(k.length!==0){f+=d.html()}}f+="</div>"}});f+="</div>";h.html(f);return h},_exec:function(h){if(pe.mobile){return a.fn.tabbedinterface.mobile(h).trigger("create")}var f,r=h.children(".tabs"),d=r.find("a").filter(":not(.tabs-toggle)"),c=h.children(".tabs-panel"),j=c.children(),e,p,l,n,m,g,s,v,k=pe.dic.get("%pause"),t=pe.dic.get("%tab-rotation","disable"),u=pe.dic.get("%play"),i=pe.dic.get("%tab-rotation","enable"),o,q,x,w="-link";n={panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",autoHeight:true,cycle:false,carousel:false,autoPlay:false,animate:false,animationSpeed:"normal",updateHash:false};m={defaultTab:((h.find(".default").length)?".default":undefined),autoHeight:h.hasClass("auto-height-none")?false:undefined,cycle:(h.hasClass("cycle-slow")?8000:(h.hasClass("cycle-fast")?2000:(h.hasClass("cycle")?6000:undefined))),carousel:h.hasClass("style-carousel")?true:undefined,autoPlay:h.hasClass("auto-play")?true:undefined,animate:(h.hasClass("animate")||h.hasClass("animate-slow")||h.hasClass("animate-fast"))?true:undefined,animationSpeed:(h.hasClass("animate-slow")?"slow":(h.hasClass("animate-fast")?"fast":undefined))};b.metadata.setType("attr","data-wet-boew");if(typeof wet_boew_tabbedinterface!=="undefined"&&wet_boew_tabbedinterface!==null){b.extend(n,wet_boew_tabbedinterface,m,h.metadata())}else{b.extend(n,m,h.metadata())}r.attr("role","tablist").children("li").attr("role","presentation");d.attr({role:"tab","aria-selected":"false"}).each(function(){var z=b(this),y=z.attr("href").substring(1)});c.attr("id",j.eq(0).attr("id")+"-parent");j.attr({tabindex:"-1",role:"tabpanel","aria-hidden":"true"}).each(function(){var y=b(this);if(pe.ie>0){y.attr("aria-labelledby",y.attr("id")+w)}});f=(r.find(".default").length>0?r.find(".default"):r.find("li:first-child"));d.on("keydown click",function(z){var y=b(z.target),A;if(z.type==="keydown"){if(z.keyCode===13||z.keyCode===32){if(z.stopPropagation){z.stopImmediatePropagation()}else{z.cancelBubble=true}z.preventDefault();if(!y.is(d.filter("."+n.tabActiveClass))){v(y,d,j,n,false)}else{pe.focus(j.filter(y.attr("href")))}}else{if(z.keyCode===37||z.keyCode===38){v(s(d),d,j,n,false);z.preventDefault()}else{if(z.keyCode===39||z.keyCode===40){v(g(d),d,j,n,false);z.preventDefault()}}}}else{A=j.filter(y.attr("href"));if(!A.data("easytabs").lastHeight){A.data("easytabs").lastHeight=A.outerHeight()}}});f.children("a").each(function(){var y=b(this);y.attr("aria-selected","true");return b("#"+y.attr("href").substring(1)).attr("aria-hidden","false")});g=function(y){var z=y.filter("."+n.tabActiveClass).parent().next(":not(.tabs-toggle)");return(z.length===0?y.first():z.children())};s=function(y){var z=y.filter("."+n.tabActiveClass).parent().prev();return(z.length===0?y.last():z.children())};v=function(z,y,D,C,B){var A,F,E;D.stop(true,true);if(C.animate){F=D.filter("."+C.panelActiveClass).removeClass(C.panelActiveClass).attr("aria-hidden","true");E=D.filter("#"+z.attr("href").substr(1));F.fadeOut(C.animationSpeed,function(){return E.fadeIn(C.animationSpeed,function(){return b(this).addClass(C.panelActiveClass).attr("aria-hidden","false")})})}else{D.removeClass(C.panelActiveClass).attr("aria-hidden","true").hide();D.filter("#"+z.attr("href").substr(1)).show().addClass(C.panelActiveClass).attr("aria-hidden","false")}y.parent().removeClass(C.tabActiveClass).children().removeClass(C.tabActiveClass).attr("aria-selected","false");z.parent().addClass(C.tabActiveClass).children().addClass(C.tabActiveClass).attr("aria-selected","true");A=z.parent().siblings(".tabs-toggle");if(!B&&(A.length===0||A.data("state")==="stopped")){return pe.focus(z)}};q=function(){if(p.data("state")==="stopped"){l(d,j,n);e.removeClass("tabs-start").addClass("tabs-stop").html(k+'<span class="wb-invisible">'+t+"</span>").attr("aria-pressed",true);return b(".wb-invisible",e).text(t)}if(p.data("state")==="started"){return o()}};if(n.autoHeight&&!h.hasClass("tabs-style-4")&&!h.hasClass("tabs-style-5")){j.show();c.equalHeights(true)}h.easytabs(b.extend({},n,{cycle:false}));if(n.cycle){l=function(y,B,A){var z,C;z=y.filter("."+A.tabActiveClass);C=z.siblings(".tabs-roller");h.find(".tabs-toggle").data("state","started");return C.show().animate({width:z.parent().width()},A.cycle-200,"linear",function(){b(this).width(0).hide();v(g(y),y,B,A,true);return h.data("interval",setTimeout(function(){return l(y,B,A)},0))})};o=function(){clearTimeout(h.data("interval"));h.find(".tabs-roller").width(0).hide().stop();h.find(".tabs-toggle").data("state","stopped");e.removeClass("tabs-stop").addClass("tabs-start").html(u+'<span class="wb-invisible">'+i+"</span>").attr("aria-pressed",false);return b(".wb-invisible",e).text(i)};x=c.attr("id");r.append('<li class="tabs-toggle"><a class="tabs-prev" href="javascript:;" role="button">&nbsp;&nbsp;&nbsp;<span class="wb-invisible">'+pe.dic.get("%previous")+"</span></a></li>");r.find(".tabs-prev").on("click",function(){v(s(d),d,j,n,true)});r.append('<li class="tabs-toggle"><a class="tabs-next" href="javascript:;" role="button">&nbsp;&nbsp;&nbsp;<span class="wb-invisible">'+pe.dic.get("%next")+"</span></a></li>");r.find(".tabs-next").on("click",function(){v(g(d),d,j,n,true)});p=b('<li class="tabs-toggle"><a class="tabs-stop" href="javascript:;" role="button" aria-pressed="true">'+k+'<span class="wb-invisible">'+t+"</span></a></li>");e=p.find("a");r.append(p);p.click(q).on("keydown",function(y){if(y.keyCode===32){q();return y.preventDefault()}});r.find("li a").not(p.find("a")).on("click",function(){return o()});d.each(function(){var y;y=b('<div class="tabs-roller">').hide().on("click",function(){return b(this).siblings("a").trigger("click")}).on("hover",function(){return b(this).css("cursor","text")});if(pe.ie>0&&pe.ie<8){b(".tabs-style-2 .tabs, .tabs-style-2 .tabs li").css("filter","")}return b(this).parent().append(y)});l(d,j,n);if(!n.autoPlay){o()}}h.find("a").filter('[href^="#"]').each(function(){var A=b(this),y,z;z=A.attr("href");if(z.length>1){y=b(z,j);if(y.length){return A.on("click",function(D){var B,C;B=y.parents('[role="tabpanel"]:hidden');if(B){D.preventDefault();C=B.attr("id");B.parent().siblings(".tabs").find("a").filter('[href="#'+C+'"]').trigger("click");return y.get(0).scrollIntoView(true)}})}}});return h.attr("class",h.attr("class").replace(/\bwidget-style-/,"style-"))}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.texthighlight={type:"plugin",_exec:function(d){function c(h,k){var e,j,g,f;h=h.replace(/^\s+|\s+$/g,"");h=h.replace(/\|+/g,"");e=h.split("+");if(e.length>0){h="";for(g=0,f=e.length;g<f;g+=1){h+=e[g]+" "}h=h.replace(/^\s+|\s+$|\"|\(|\)/g,"")}h=h.replace(/\s+/g,"|");h=decodeURIComponent(h);h="(?=([^>]*<))([\\s'])?("+h+")(?!>)";j=k.html().replace(new RegExp(h,"gi"),function(n,m,l,i){return(typeof l==="undefined"?"":l)+'<span class="texthighlight"><mark>'+i+"</mark></span>"});k.html(j);return null}if(pe.urlquery.texthighlight!==undefined){c(pe.urlquery.texthighlight,d)}return this}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.wamethod={type:"plugin",_exec:function(j){var g=j.find("#summary"),i=g.find("td"),e=j.find("#checklist input"),d=g.find("span").html("0"),f=d.filter("#rsltAAA").length>0;i.find("td").attr("aria-live","polite").attr("aria-relevant","text").attr("aria-atomic","true").attr("aria-busy","false");e.on("change",function(){var l=e.filter('[id^="ap"]:checked, [id^="an"]:checked').length,m=l+e.filter('[id^="af"]:checked').length,q=e.filter('[id^="aap"]:checked, [id^="aan"]:checked').length,p=q+e.filter('[id^="aaf"]:checked').length,o=e.filter('[id^="aaap"]:checked, [id^="aaan"]:checked').length,n=o+e.filter('[id^="aaaf"]:checked').length,k=e.filter('[id^="an"]:checked, [id^="aan"]:checked, , [id^="aaan"]:checked').length;i.attr("aria-busy","true");d.filter("#rsltA").html(l);d.filter("#percA").html(Math.round(l/0.25));d.filter("#rsltAA").html(q);d.filter("#percAA").html(Math.round(q/0.13));d.filter("#naTotal").html(k);if(f){d.filter("#rsltAAA").html(o);d.filter("#percAAA").html(Math.round(o/0.23))}d.filter("#evalTotal").html(m+p+n);d.filter("#percEvalTotal").html(Math.round((m+p+n)/0.61));d.filter("#rsltTotal").html(l+q+o);d.filter("#percTotal").html(Math.round((l+q+o)/0.61));d.filter("#percNATotal").html(Math.round(k/0.61));i.attr("aria-busy","false")});function c(){j.find("h2, #checklist h3, .last").each(function(){var k=b(this);k.before("<"+k.get(0).tagName+' class="print">'+k.text()+"</"+k.get(0).tagName+">");k.hide()})}function h(){j.find("h2, #checklist h3, .last").each(function(){j.find(".print").remove();j.find("h2, #checklist h3, .last").show()})}if(pe.ie>0&&pe.ie<9){window.onbeforeprint=c;window.onafterprint=h}return j}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.webwidget={type:"plugin",twitter:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.created_at.replace("+0000 ","")+" GMT",k.created_at.replace("+0000 ","")+" GMT")});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a class="float-left" href="http://www.twitter.com/';c+=f[g].user.name+"/status/"+f[g].user.id+'"><img class="widget-avatar" src="'+f[g].user.profile_image_url+'" alt="'+f[g].user.name+'" /></a> ';c+=pe.string.ify.clean(f[g].text);c+=' <span class="widget-datestamp-accent">'+pe.dic.ago(f[g].created_at)+"</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},_map_entries:function(c){return c},_json_request:function(c){if(c.toLowerCase().indexOf("!/search/")>-1){return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/search\/(.+$)/,function(e,d){return"http://search.twitter.com/search.json?q="+encodeURI(decodeURI(d))})}return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/(.+$)/i,function(e,d){return"http://twitter.com/status/user_timeline/"+encodeURI(decodeURI(d))+".json?callback=?"})}},weather:{_parse_entries:function(d,e,f){var c;c='<ul class="widget-content">';c+='<li><a href="'+d[1].link+'">'+d[1].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(d[1].publishedDate,true)+"]</span></li>";c+="</ul>";return f.replaceWith(c)},_map_entries:function(c){return c.responseData.feed.entries},_json_request:function(d,c){var e;d=d.replace(/^.*?\.gc\.ca\/([a-z]+).+\/(.*?)_[a-z]+_([ef])\.html/i,"http://www.weatheroffice.gc.ca/rss/$1/$2_$3.xml");e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},rss:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.publishedDate,k.publishedDate)});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a href="'+f[g].link+'">'+f[g].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(f[g].publishedDate,true)+"]</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},_map_entries:function(c){return c.responseData.feed.entries},_json_request:function(d,c){var e;e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},_exec:function(j,k){var c,p,n,e,g,h,f,m,o,l,d;c=b(j);e=a.limit(c);n=c.find("a").map(function(){var i;i=b(this).attr("href");if(!k&&/twitter.com/i.test(i)){k="twitter"}if(!k&&/weatheroffice.gc.ca/i.test(i)){k="weather"}if(!k){k="rss"}return b(this).attr("href")});p=b('<ul class="widget-content"><li class="widget-state-loading"><img src="'+pe.add.liblocation+'/images/webfeeds/ajax-loader.gif" alt="'+pe.dic.get("%loading")+'" /></li></ul>');c.find(".widget-content").replaceWith(p);g=a.fn.webwidget[k];m=n.length-1;h=[];l=g._parse_entries;f=n.length-1;d=[];o=function(q){var i;i=0;q=g._map_entries(q);while(i<q.length){h.push(q[i]);i+=1}if(!m){l(h,e,p)}m-=1;return m};while(f>=0){b.getJSON(g._json_request(n[f]),o);d.push(f-=1)}b.extend({},d);return}};window.pe=a;return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.zebra={type:"plugin",_exec:function(g){var e,o,n,h,l,m,k,c,s,p,d,r=[],q=false,f=[];c={noheaderhighlight:false,norowheaderhighlight:false,nocolheaderhighlight:false,columnhighlight:false,nohover:false,justgroup:false};s={noheaderhighlight:g.hasClass("noheaderhighlight")?true:undefined,norowheaderhighlight:g.hasClass("norowheaderhighlight")?true:undefined,nocolheaderhighlight:g.hasClass("nocolheaderhighlight")?true:undefined,columnhighlight:g.hasClass("columnhighlight")?true:undefined,nohover:g.hasClass("nohover")?true:undefined,justgroup:g.hasClass("justgroup")?true:undefined};if(typeof wet_boew_zebra!=="undefined"&&wet_boew_zebra!==null){b.extend(c,wet_boew_zebra,s)}else{b.extend(c,s)}if(c.norowheaderhighlight&&c.nocolheaderhighlight){c.noheaderhighlight=true}if(g.is("table")){if(!b(g).data().tblparser){a.fn.parsertable._exec(b(g))}l=b(g).data().tblparser;if(l.keycell){for(m=0;m<l.keycell.length;m+=1){b(l.keycell[m].elem).addClass("table-keycell")}}if(l.desccell){for(m=0;m<l.desccell.length;m+=1){b(l.desccell[m].elem).addClass("table-desccell")}}if(l.layoutCell){for(m=0;m<l.layoutCell.length;m+=1){b(l.layoutCell[m].elem).addClass("table-layoutCell")}}if(l.row){for(m=0;m<l.row.length;m+=1){for(k=0;k<l.row[m].cell.length;k+=1){if(l.row[m].cell[k].type===3){if(l.row[m].cell[k].col.type===3){b(l.row[m].cell[k].elem).addClass("table-summarycol"+l.row[m].cell[k].collevel)}if(l.row[m].type===3){b(l.row[m].cell[k].elem).addClass("table-summaryrow"+l.row[m].cell[k].rowlevel);if(l.row[m].level===0&&l.row[m].header.elem){b(l.row[m].header.elem).addClass("table-summaryrow"+l.row[m].cell[k].rowlevel)}}}}if(l.row[m].type&&l.row[m].type===3&&l.row[m].rowgroup.elem&&m>0&&l.row[m-1].type&&l.row[m-1].type===3&&l.row[m-1].rowgroup.uid!==l.row[m].rowgroup.uid){b(l.row[m].rowgroup.elem).addClass("table-rowgroupmarker")}}}b("th",g).each(function(){var i=b(this);if(i.data().tblparser.type===7){i.addClass("table-headgroup"+i.data().tblparser.scope+i.data().tblparser.level)}});if(l.colgroup){for(m=0;m<l.colgroup.length;m+=1){if(l.colgroup[m].elem&&((m>0&&l.colgroup[m].type===3&&l.colgroup[m-1].type===3&&l.colgroup[m-1].level>l.colgroup[m].level)||(l.colgroup[m].type===2&&((m>0&&l.colgroup[0].type===2)||(m>1&&l.colgroup[0].type===1))))){b(l.colgroup[m].elem).addClass("table-colgroupmarker")}}}if(l.lstrowgroup){for(m=0;m<l.lstrowgroup.length;m+=1){if(l.lstrowgroup[m].elem&&l.lstrowgroup[m].type===2&&m>0){b(l.lstrowgroup[m].elem).addClass("table-rowgroupmarker")}}}if(!c.noheaderhighlight||c.columnhighlight){p=function(t){var j=[],i=b(t).data().tblparser;if(i.row&&i.row.header&&!c.norowheaderhighlight){for(m=0;m<i.row.header.length;m+=1){j.push(i.row.header[m].elem)}if(i.addrowheaders){for(m=0;m<i.addrowheaders.length;m+=1){j.push(i.addrowheaders[m].elem)}}}if(i.col&&i.col.header&&!c.nocolheaderhighlight){for(m=0;m<i.col.header.length;m+=1){j.push(i.col.header[m].elem)}if(i.addcolheaders){for(m=0;m<i.addcolheaders.length;m+=1){j.push(i.addcolheaders[m].elem)}}}b(t).data().cellsheader=j};b("td, th",g).on("mouseenter focusin",function(){var i=b(this).data().tblparser,j,t=b(this);if(!c.noheaderhighlight){clearTimeout(d);j=b("th.table-hover",g);if(i.type!==1){if(!t.data().cellsheader){p(this)}b.each(t.data().cellsheader,function(){var u=b(this);u.addClass("table-hover");u.data().zebrafor=i.uid})}else{if(i.scope==="row"&&!c.norowheaderhighlight){t.addClass("table-hover");t.data().zebrafor=i.uid}}b.each(j,function(){var u=b(this);if(u.data().zebrafor&&u.data().zebrafor!==i.uid){u.removeClass("table-hover");delete u.data().zebrafor}})}if(c.columnhighlight&&i.col&&i.col.elem){b(i.col.elem).addClass("table-hover")}});b("td, th",g).on("mouseleave focusout",function(){var i=b(this).data().tblparser,j=this;if(!c.noheaderhighlight){d=setTimeout(function(){var t;if(i.type===1){b(j).removeClass("table-hover");delete b(j).data().zebrafor;return}for(t=0;t<b(j).data().cellsheader.length;t+=1){if(b(b(j).data().cellsheader[t]).data().zebrafor===i.uid){b(b(j).data().cellsheader[t]).removeClass("table-hover");delete b(b(j).data().cellsheader[t]).data().zebrafor}}},25)}if(c.columnhighlight&&i.col&&i.col.elem){b(i.col.elem).removeClass("table-hover")}})}e=(g.children("tr").add(g.children("tbody").children("tr"))).filter(function(){return b(this).children("td").length>0});e.on("mouseleave focusout",function(i){i.stopPropagation();b(this).removeClass("table-hover")});e.on("mouseenter focusin",function(i){i.stopPropagation();b(this).addClass("table-hover")});if(!c.justgroup){if(!c.columnhighlight){e.filter(":odd").addClass("table-even");e.filter(":even").addClass("table-odd")}else{o=[];for(m=0;m<l.col.length;m+=1){if(l.col[m].elem){o.push(l.col[m].elem)}}b(o).filter(":odd").addClass("table-even");b(o).filter(":even").addClass("table-odd")}}}else{if(g.is("dl")){b(g).children().each(function(){var i=b(this);switch(this.nodeName.toLowerCase()){case"dt":if(q){q=false;i.addClass("list-even")}else{q=true;i.addClass("list-odd")}f=[];r.push(i.get(0));i.data().dlitem=f;f.push(i.get(0));break;case"dd":if(q){i.addClass("list-odd")}else{i.addClass("list-even")}r.push(i.get(0));i.data().dlitem=f;f.push(i.get(0));break;default:break}});if(!c.nohover){b(r).on("mouseleave focusout",function(i){i.stopPropagation();b(b(this).data().dlitem).removeClass("list-hover")});b(r).on("mouseenter focusin",function(i){i.stopPropagation();b(b(this).data().dlitem).addClass("list-hover")})}}else{n=g.children("li");h=(g.parents("li").length+1)%2;n.filter(":odd").addClass(h===0?"list-odd":"list-even");n.filter(":even").addClass(h===1?"list-odd":"list-even");if(!c.nohover){n.on("mouseleave focusout",function(i){i.stopPropagation();b(this).removeClass("list-hover")});n.on("mouseenter focusin",function(i){i.stopPropagation();b(this).addClass("list-hover")})}}}}};window.pe=a;return a}(jQuery));