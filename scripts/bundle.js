/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(1);
/* unused harmony export NonDeclaredType */
/* unused harmony export Any */
/* unused harmony export Unit */
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;
/* unused harmony export Array */
/* unused harmony export Tuple */
/* unused harmony export GenericParam */
/* harmony export (immutable) */ __webpack_exports__["b"] = Interface;
/* unused harmony export makeGeneric */
/* unused harmony export isGeneric */
/* unused harmony export getDefinition */
/* unused harmony export extendInfo */
/* unused harmony export hasInterface */
/* unused harmony export getPropertyNames */
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["e"] = getRestParams;
/* harmony export (immutable) */ __webpack_exports__["d"] = toString;
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["g"] = equals;
/* harmony export (immutable) */ __webpack_exports__["f"] = compare;
/* unused harmony export equalsRecords */
/* unused harmony export compareRecords */
/* unused harmony export equalsUnions */
/* unused harmony export compareUnions */
/* unused harmony export createDisposable */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export round */
/* unused harmony export randomNext */
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultArg;

var NonDeclaredType = function () {
    function NonDeclaredType(kind, definition, generics) {
        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }
    NonDeclaredType.prototype.Equals = function (other) {
        if (this.kind === other.kind && this.definition === other.definition) {
            return typeof this.generics === "object" ? equalsRecords(this.generics, other.generics) : this.generics === other.generics;
        }
        return false;
    };
    return NonDeclaredType;
}();

var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, t);
}
function FableArray(t, isTypedArray) {
    if (isTypedArray === void 0) {
        isTypedArray = false;
    }
    var def = null,
        genArg = null;
    if (isTypedArray) {
        def = t;
    } else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, genArg);
}

function Tuple(ts) {
    return new NonDeclaredType("Tuple", null, ts);
}
function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = Object.getPrototypeOf(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo_1 = {},
            parentInfo_1 = parent[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]();
        Object.getOwnPropertyNames(info).forEach(function (k) {
            var i = info[k];
            if (typeof i === "object") {
                newInfo_1[k] = Array.isArray(i) ? (parentInfo_1[k] || []).concat(i) : Object.assign(parentInfo_1[k] || {}, i);
            } else {
                newInfo_1[k] = i;
            }
        });
        return newInfo_1;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[Symbol.iterator] === "function";
    } else if (typeof obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return Object.getOwnPropertyNames(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function getRestParams(args, idx) {
    for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++) restArgs[_key - idx] = args[_key];
    return restArgs;
}
function toString(o) {
    return o != null && typeof o.ToString == "function" ? o.ToString() : String(o);
}
function hash(x) {
    var s = JSON.stringify(x);
    var h = 5381,
        i = 0,
        len = s.length;
    while (i < len) {
        h = h * 33 ^ s.charCodeAt(i++);
    }
    return h;
}
function equals(x, y) {
    if (x === y) return true;else if (x == null) return y == null;else if (y == null) return false;else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return false;else if (typeof x.Equals === "function") return x.Equals(y);else if (Array.isArray(x)) {
        if (x.length != y.length) return false;
        for (var i = 0; i < x.length; i++) if (!equals(x[i], y[i])) return false;
        return true;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) return false;
        var dv1 = new DataView(x.buffer),
            dv2 = new DataView(y.buffer);
        for (var i = 0; i < x.byteLength; i++) if (dv1.getUint8(i) !== dv2.getUint8(i)) return false;
        return true;
    } else if (x instanceof Date) return x.getTime() == y.getTime();else return false;
}
function compare(x, y) {
    if (x === y) return 0;
    if (x == null) return y == null ? 0 : -1;else if (y == null) return 1;else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return -1;else if (typeof x.CompareTo === "function") return x.CompareTo(y);else if (Array.isArray(x)) {
        if (x.length != y.length) return x.length < y.length ? -1 : 1;
        for (var i = 0, j = 0; i < x.length; i++) if ((j = compare(x[i], y[i])) !== 0) return j;
        return 0;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength != y.byteLength) return x.byteLength < y.byteLength ? -1 : 1;
        var dv1 = new DataView(x.buffer),
            dv2 = new DataView(y.buffer);
        for (var i = 0, b1 = 0, b2 = 0; i < x.byteLength; i++) {
            b1 = dv1.getUint8(i), b2 = dv2.getUint8(i);
            if (b1 < b2) return -1;
            if (b1 > b2) return 1;
        }
        return 0;
    } else if (x instanceof Date) return compare(x.getTime(), y.getTime());else return x < y ? -1 : 1;
}
function equalsRecords(x, y) {
    if (x === y) {
        return true;
    } else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            if (!equals(x[keys[i]], y[keys[i]])) return false;
        }
        return true;
    }
}
function compareRecords(x, y) {
    if (x === y) {
        return 0;
    } else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            var res = compare(x[keys[i]], y[keys[i]]);
            if (res !== 0) return res;
        }
        return 0;
    }
}
function equalsUnions(x, y) {
    if (x === y) {
        return true;
    } else if (x.Case !== y.Case) {
        return false;
    } else {
        for (var i = 0; i < x.Fields.length; i++) {
            if (!equals(x.Fields[i], y.Fields[i])) return false;
        }
        return true;
    }
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    } else {
        var res = compare(x.Case, y.Case);
        if (res !== 0) return res;
        for (var i = 0; i < x.Fields.length; i++) {
            res = compare(x.Fields[i], y.Fields[i]);
            if (res !== 0) return res;
        }
        return 0;
    }
}
function createDisposable(f) {
    return _a = {
        Dispose: f
    }, _a[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return { interfaces: ["System.IDisposable"] };
    }, _a;
    var _a;
}
function createObj(fields) {
    var iter = fields[Symbol.iterator]();
    var cur = iter.next(),
        o = {};
    while (!cur.done) {
        o[cur.value[0]] = cur.value[1];
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor != Object) {
        var target = {};
        var props = Object.getOwnPropertyNames(source);
        for (var i = 0; i < props.length; i++) {
            target[props[i]] = source[props[i]];
        }
        var proto = Object.getPrototypeOf(source);
        if (proto != null) {
            props = Object.getOwnPropertyNames(proto);
            for (var i = 0; i < props.length; i++) {
                var prop = Object.getOwnPropertyDescriptor(proto, props[i]);
                if (prop.value) {
                    target[props[i]] = prop.value;
                } else if (prop.get) {
                    target[props[i]] = prop.get.apply(source);
                }
            }
        }
        return target;
    } else {
        return source;
    }
}
function round(value, digits) {
    if (digits === void 0) {
        digits = 0;
    }
    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n),
        f = n - i;
    var e = 1e-8;
    var r = f > 0.5 - e && f < 0.5 + e ? i % 2 == 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : f != null ? f(arg) : arg;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["b"] = setType;
/* unused harmony export getType */
var fableGlobal = function () {
    var globalObj = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    if (typeof globalObj.__FABLE_CORE__ === "undefined") {
        globalObj.__FABLE_CORE__ = {
            types: new Map(),
            symbols: {
                reflection: Symbol("reflection")
            }
        };
    }
    return globalObj.__FABLE_CORE__;
}();
function setType(fullName, cons) {
    fableGlobal.types.set(fullName, cons);
}
function getType(fullName) {
    return fableGlobal.types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = (fableGlobal.symbols);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeSpan__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Long__ = __webpack_require__(4);
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* unused harmony export parse */
/* unused harmony export tryParse */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* unused harmony export daysInMonth */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export kind */
/* harmony export (immutable) */ __webpack_exports__["e"] = day;
/* harmony export (immutable) */ __webpack_exports__["c"] = hour;
/* unused harmony export millisecond */
/* harmony export (immutable) */ __webpack_exports__["f"] = minute;
/* harmony export (immutable) */ __webpack_exports__["d"] = month;
/* harmony export (immutable) */ __webpack_exports__["a"] = second;
/* harmony export (immutable) */ __webpack_exports__["b"] = year;
/* unused harmony export dayOfWeek */
/* unused harmony export ticks */
/* unused harmony export toBinary */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addTicks */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */



function minValue() {
    return parse(-8640000000000000, 1);
}
function maxValue() {
    return parse(8640000000000000, 1);
}
function parse(v, kind) {
    if (kind == null) {
        kind = typeof v == "string" && v.slice(-1) == "Z" ? 1 : 2;
    }
    var date = v == null ? new Date() : new Date(v);
    if (kind === 2) {
        date.kind = kind;
    }
    if (isNaN(date.getTime())) {
        throw new Error("The string is not a valid Date.");
    }
    return date;
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    } catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day, h, m, s, ms, kind) {
    if (h === void 0) {
        h = 0;
    }
    if (m === void 0) {
        m = 0;
    }
    if (s === void 0) {
        s = 0;
    }
    if (ms === void 0) {
        ms = 0;
    }
    if (kind === void 0) {
        kind = 2;
    }
    var date;
    if (kind === 2) {
        date = new Date(year, month - 1, day, h, m, s, ms);
        date.kind = kind;
    } else {
        date = new Date(Date.UTC(year, month - 1, day, h, m, s, ms));
    }
    if (isNaN(date.getTime())) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    return date;
}
function now() {
    return parse();
}
function utcNow() {
    return parse(null, 1);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
function daysInMonth(year, month) {
    return month == 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
}
function toUniversalTime(d) {
    return d.kind === 2 ? new Date(d.getTime()) : d;
}
function toLocalTime(d) {
    if (d.kind === 2) {
        return d;
    } else {
        var d2 = new Date(d.getTime());
        d2.kind = 2;
        return d2;
    }
}
function timeOfDay(d) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__TimeSpan__["a" /* create */])(0, hour(d), minute(d), second(d), millisecond(d));
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind || 1);
}
function kind(d) {
    return d.kind || 1;
}
function day(d) {
    return d.kind === 2 ? d.getDate() : d.getUTCDate();
}
function hour(d) {
    return d.kind === 2 ? d.getHours() : d.getUTCHours();
}
function millisecond(d) {
    return d.kind === 2 ? d.getMilliseconds() : d.getUTCMilliseconds();
}
function minute(d) {
    return d.kind === 2 ? d.getMinutes() : d.getUTCMinutes();
}
function month(d) {
    return (d.kind === 2 ? d.getMonth() : d.getUTCMonth()) + 1;
}
function second(d) {
    return d.kind === 2 ? d.getSeconds() : d.getUTCSeconds();
}
function year(d) {
    return d.kind === 2 ? d.getFullYear() : d.getUTCFullYear();
}
function dayOfWeek(d) {
    return d.kind === 2 ? d.getDay() : d.getUTCDay();
}
function ticks(d) {
    return __WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime()).add(62135596800000).sub(d.kind == 2 ? d.getTimezoneOffset() * 60 * 1000 : 0).mul(10000);
}
function toBinary(d) {
    return ticks(d);
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++) _day += daysInMonth(_year, i);
    return _day;
}
function add(d, ts) {
    return parse(d.getTime() + ts, d.kind || 1);
}
function addDays(d, v) {
    return parse(d.getTime() + v * 86400000, d.kind || 1);
}
function addHours(d, v) {
    return parse(d.getTime() + v * 3600000, d.kind || 1);
}
function addMinutes(d, v) {
    return parse(d.getTime() + v * 60000, d.kind || 1);
}
function addSeconds(d, v) {
    return parse(d.getTime() + v * 1000, d.kind || 1);
}
function addMilliseconds(d, v) {
    return parse(d.getTime() + v, d.kind || 1);
}
function addTicks(d, t) {
    return parse(__WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime()).add(t.div(10000)).toNumber(), d.kind || 1);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function subtract(d, that) {
    return typeof that == "number" ? parse(d.getTime() - that, d.kind || 1) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() == d2.getTime();
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["f" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["f" /* compare */])(x, y);
}
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["b"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* harmony export (immutable) */ __webpack_exports__["a"] = getSubArray;
/* unused harmony export fill */
function addRangeInPlace(range, xs) {
    var iter = range[Symbol.iterator]();
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--) target[targetIndex++] = source[sourceIndex++];
}
function partition(f, xs) {
    var ys = [],
        zs = [],
        j = 0,
        k = 0;
    for (var i = 0; i < xs.length; i++) if (f(xs[i])) ys[j++] = xs[i];else zs[k++] = xs[i];
    return [ys, zs];
}
function permute(f, xs) {
    var ys = xs.map(function () {
        return null;
    });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length) throw new Error("Not a valid permutation");
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var i = 0; i < xs.length; i++) if (checkFlags[i] != 1) throw new Error("Not a valid permutation");
    return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length) target.set(source, lower);else for (var i = lower | 0, j = 0; j <= length; i++, j++) target[i] = source[j];
}
function sortInPlaceBy(f, xs, dir) {
    if (dir === void 0) {
        dir = 1;
    }
    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x == y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length),
        cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length),
        cs = new Array(xs.length),
        ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(1);
/* unused harmony export Long */
/* unused harmony export isLong */
/* unused harmony export fromInt */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromNumber;
/* unused harmony export fromBits */
/* unused harmony export fromString */
/* unused harmony export fromValue */
/* unused harmony export ZERO */
/* unused harmony export UZERO */
/* unused harmony export ONE */
/* unused harmony export UONE */
/* unused harmony export NEG_ONE */
/* unused harmony export MAX_VALUE */
/* unused harmony export MAX_UNSIGNED_VALUE */
/* unused harmony export MIN_VALUE */

var Long = function () {
    function Long(low, high, unsigned) {
        this.eq = this.equals;
        this.neq = this.notEquals;
        this.lt = this.lessThan;
        this.lte = this.lessThanOrEqual;
        this.gt = this.greaterThan;
        this.gte = this.greaterThanOrEqual;
        this.comp = this.compare;
        this.neg = this.negate;
        this.abs = this.absolute;
        this.sub = this.subtract;
        this.mul = this.multiply;
        this.div = this.divide;
        this.mod = this.modulo;
        this.shl = this.shiftLeft;
        this.shr = this.shiftRight;
        this.shru = this.shiftRightUnsigned;
        this.Equals = this.equals;
        this.CompareTo = this.compare;
        this.ToString = this.toString;
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
    }
    Long.prototype.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
    };
    Long.prototype.toNumber = function () {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    Long.prototype.toString = function (radix) {
        if (radix === void 0) {
            radix = 10;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError('radix');
        if (this.isZero()) return '0';
        if (this.isNegative()) {
            if (this.eq(MIN_VALUE)) {
                var radixLong = fromNumber(radix),
                    div = this.div(radixLong),
                    rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else return '-' + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
            rem = this;
        var result = '';
        while (true) {
            var remDiv = rem.div(radixToPower),
                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;else {
                while (digits.length < 6) digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };
    Long.prototype.getHighBits = function () {
        return this.high;
    };
    Long.prototype.getHighBitsUnsigned = function () {
        return this.high >>> 0;
    };
    Long.prototype.getLowBits = function () {
        return this.low;
    };
    Long.prototype.getLowBitsUnsigned = function () {
        return this.low >>> 0;
    };
    Long.prototype.getNumBitsAbs = function () {
        if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) if ((val & 1 << bit) != 0) break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };
    Long.prototype.isZero = function () {
        return this.high === 0 && this.low === 0;
    };
    Long.prototype.isNegative = function () {
        return !this.unsigned && this.high < 0;
    };
    Long.prototype.isPositive = function () {
        return this.unsigned || this.high >= 0;
    };
    Long.prototype.isOdd = function () {
        return (this.low & 1) === 1;
    };
    Long.prototype.isEven = function () {
        return (this.low & 1) === 0;
    };
    Long.prototype.equals = function (other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
    };
    Long.prototype.notEquals = function (other) {
        return !this.eq(other);
    };
    Long.prototype.lessThan = function (other) {
        return this.comp(other) < 0;
    };
    Long.prototype.lessThanOrEqual = function (other) {
        return this.comp(other) <= 0;
    };
    Long.prototype.greaterThan = function (other) {
        return this.comp(other) > 0;
    };
    Long.prototype.greaterThanOrEqual = function (other) {
        return this.comp(other) >= 0;
    };
    Long.prototype.compare = function (other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(),
            otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    Long.prototype.negate = function () {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
    };
    Long.prototype.absolute = function () {
        if (!this.unsigned && this.isNegative()) return this.negate();else return this;
    };
    Long.prototype.add = function (addend) {
        if (!isLong(addend)) addend = fromValue(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;
        var c48 = 0,
            c32 = 0,
            c16 = 0,
            c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    Long.prototype.subtract = function (subtrahend) {
        if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };
    Long.prototype.multiply = function (multiplier) {
        if (this.isZero()) return ZERO;
        if (!isLong(multiplier)) multiplier = fromValue(multiplier);
        if (multiplier.isZero()) return ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;
        var c48 = 0,
            c32 = 0,
            c16 = 0,
            c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    Long.prototype.divide = function (divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (divisor.isZero()) throw Error('division by zero');
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx = 0,
            rem = ZERO,
            res = ZERO;
        if (!this.unsigned) {
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE;else if (divisor.eq(MIN_VALUE)) return ONE;else {
                    var halfThis = this.shr(1);
                    var approx_1 = halfThis.div(divisor).shl(1);
                    if (approx_1.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    } else {
                        rem = this.sub(divisor.mul(approx_1));
                        res = approx_1.add(rem.div(divisor));
                        return res;
                    }
                }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative()) return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) return UONE;
            res = UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
                approxRes = fromNumber(approx),
                approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            if (approxRes.isZero()) approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };
    Long.prototype.modulo = function (divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        return this.sub(this.div(divisor).mul(divisor));
    };
    ;
    Long.prototype.not = function () {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };
    ;
    Long.prototype.and = function (other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    Long.prototype.or = function (other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    Long.prototype.xor = function (other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    Long.prototype.shiftLeft = function (numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    Long.prototype.shiftRight = function (numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    Long.prototype.shiftRightUnsigned = function (numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0) return this;else {
            var high = this.high;
            if (numBits < 32) {
                var low = this.low;
                return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
            } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
        }
    };
    Long.prototype.toSigned = function () {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
    };
    Long.prototype.toUnsigned = function () {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
    };
    Long.prototype.toBytes = function (le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };
    Long.prototype.toBytesLE = function () {
        var hi = this.high,
            lo = this.low;
        return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24 & 0xff, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24 & 0xff];
    };
    Long.prototype.toBytesBE = function () {
        var hi = this.high,
            lo = this.low;
        return [hi >>> 24 & 0xff, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24 & 0xff, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
    };
    Long.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "System.Int64",
            interfaces: ["FSharpRecord", "System.IComparable"],
            properties: {
                low: "number",
                high: "number",
                unsigned: "boolean"
            }
        };
    };
    return Long;
}();

var INT_CACHE = {};
var UINT_CACHE = {};
function isLong(obj) {
    return obj && obj instanceof Long;
}
function fromInt(value, unsigned) {
    if (unsigned === void 0) {
        unsigned = false;
    }
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache) UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = -128 <= value && value < 128) {
            cachedObj = INT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache) INT_CACHE[value] = obj;
        return obj;
    }
}
function fromNumber(value, unsigned) {
    if (unsigned === void 0) {
        unsigned = false;
    }
    if (isNaN(value) || !isFinite(value)) return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0) return UZERO;
        if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
    }
    if (value < 0) return fromNumber(-value, unsigned).neg();
    return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
var pow_dbl = Math.pow;
function fromString(str, unsigned, radix) {
    if (unsigned === void 0) {
        unsigned = false;
    }
    if (radix === void 0) {
        radix = 10;
    }
    if (str.length === 0) throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;
    if (typeof unsigned === 'number') {
        radix = unsigned, unsigned = false;
    } else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0) throw Error('interior hyphen');else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
function fromValue(val) {
    if (val instanceof Long) return val;
    if (typeof val === 'number') return fromNumber(val);
    if (typeof val === 'string') return fromString(val);
    return fromBits(val.low, val.high, val.unsigned);
}
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
var UZERO = fromInt(0, true);
var ONE = fromInt(1);
var UONE = fromInt(1, true);
var NEG_ONE = fromInt(-1);
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListClass__ = __webpack_require__(8);
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* unused harmony export toList */
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* unused harmony export choose */
/* unused harmony export compareWith */
/* unused harmony export delay */
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* unused harmony export exists */
/* unused harmony export exists2 */
/* unused harmony export filter */
/* harmony export (immutable) */ __webpack_exports__["b"] = where;
/* harmony export (immutable) */ __webpack_exports__["f"] = fold;
/* unused harmony export foldBack */
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* unused harmony export forAll */
/* unused harmony export forAll2 */
/* harmony export (immutable) */ __webpack_exports__["d"] = tryHead;
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* unused harmony export item */
/* harmony export (immutable) */ __webpack_exports__["e"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["c"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export map2 */
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* unused harmony export rangeStep */
/* unused harmony export rangeChar */
/* unused harmony export range */
/* unused harmony export readOnly */
/* unused harmony export reduce */
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export scan */
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* unused harmony export sortWith */
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* harmony export (immutable) */ __webpack_exports__["a"] = tryFind;
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* unused harmony export tryPick */
/* unused harmony export pick */
/* unused harmony export unfold */
/* unused harmony export zip */
/* unused harmony export zip3 */




var Enumerator = function () {
    function Enumerator(iter) {
        this.iter = iter;
    }
    Enumerator.prototype.MoveNext = function () {
        var cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    };
    Object.defineProperty(Enumerator.prototype, "Current", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Enumerator.prototype.Reset = function () {
        throw new Error("JS iterators cannot be reset");
    };
    Enumerator.prototype.Dispose = function () {};
    return Enumerator;
}();

function getEnumerator(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next: function () {
            return en.MoveNext() ? { done: false, value: en.Current } : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null) throw new Error("Seq did not contain any matching element");
    return res;
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_2__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_2__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () {
        return unfold(function (x) {
            return x.tail != null ? [x.head, x.tail] : null;
        }, xs);
    });
}
function ofArray(xs) {
    return delay(function () {
        return unfold(function (i) {
            return i < xs.length ? [xs[i], i + 1] : null;
        }, 0);
    });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = xs[Symbol.iterator]();
        var iters = [i, null];
        return unfold(function () {
            var cur;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                } else {
                    firstDone = true;
                    iters = [null, ys[Symbol.iterator]()];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        var output = null;
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    } else {
                        hasFinished = true;
                    }
                } else {
                    var cur = innerIter.next();
                    if (!cur.done) {
                        output = cur.value;
                        hasFinished = true;
                    } else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    var trySkipToNext = function (iter) {
        var cur = iter.next();
        if (!cur.done) {
            var y = f(cur.value);
            return y != null ? [y, iter] : trySkipToNext(iter);
        }
        return void 0;
    };
    return delay(function () {
        return unfold(function (iter) {
            return trySkipToNext(iter);
        }, xs[Symbol.iterator]());
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) {
        return i != 0;
    }, map2(function (x, y) {
        return f(x, y);
    }, xs, ys));
    return nonZero != null ? nonZero : count(xs) - count(ys);
}
function delay(f) {
    return _a = {}, _a[Symbol.iterator] = function () {
        return f()[Symbol.iterator]();
    }, _a;
    var _a;
}
function empty() {
    return unfold(function () {
        return void 0;
    });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () {
        return cond() ? [xs, true] : null;
    }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter;
        try {
            iter = xs[Symbol.iterator]();
        } catch (err) {
            return void 0;
        } finally {
            finalFn();
        }
        return unfold(function (iter) {
            try {
                var cur = iter.next();
                return !cur.done ? [cur.value, iter] : null;
            } catch (err) {
                return void 0;
            } finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function () {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    } catch (err) {
        return void 0;
    } finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = xs[Symbol.iterator]();
    var fst = iter.next();
    if (fst.done) throw new Error("Seq was empty");
    var snd = iter.next();
    if (!snd.done) throw new Error("Seq had multiple items");
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = Array.from(itemsToExclude);
    var testIsNotInExclusionItems = function (element) {
        return !exclusionItems.some(function (excludedItem) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* equals */])(excludedItem, element);
        });
    };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    function aux(iter) {
        var cur = iter.next();
        return !cur.done && (f(cur.value) || aux(iter));
    }
    return aux(xs[Symbol.iterator]());
}
function exists2(f, xs, ys) {
    function aux(iter1, iter2) {
        var cur1 = iter1.next(),
            cur2 = iter2.next();
        return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
    }
    return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
}
function filter(f, xs) {
    function trySkipToNext(iter) {
        var cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return void 0;
    }
    return delay(function () {
        return unfold(trySkipToNext, xs[Symbol.iterator]());
    });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    } else {
        var cur = void 0;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done) break;
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = xs[Symbol.iterator](),
        iter2 = ys[Symbol.iterator]();
    var cur1, cur2;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) {
        return acc && f(x);
    }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) {
        return acc && f(x, y);
    }, true, xs, ys);
}
function tryHead(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    return cur.done ? null : cur.value;
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) {
            return i < n ? [f(i), i + 1] : null;
        }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) {
            return [f(i), i + 1];
        }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0) return null;
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return i < xs.length ? xs[i] : null;
    for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
        var cur = iter.next();
        if (cur.done) return null;
        if (j === i) return cur.value;
    }
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) {
        return f(x);
    }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) {
        return f(x, y);
    }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) {
        return f(i, x);
    }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) {
        return f(i, x, y);
    }, null, xs, ys);
}
function isEmpty(xs) {
    var i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    try {
        return reduce(function (_, x) {
            return x;
        }, xs);
    } catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
        return acc + 1;
    }, 0, xs);
}
function map(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(),
                cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(),
                cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        var iter3 = zs[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(),
                cur2 = iter2.next(),
                cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function mapFold(f, acc, xs) {
    var result = [];
    var r;
    var cur;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done) break;
        _a = f(acc, cur.value), r = _a[0], acc = _a[1];
        result.push(r);
    }
    return [result, acc];
    var _a;
}
function mapFoldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var result = [];
    var r;
    for (var i = arr.length - 1; i >= 0; i--) {
        _a = f(arr[i], acc), r = _a[0], acc = _a[1];
        result.push(r);
    }
    return [result, acc];
    var _a;
}
function max(xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* compare */])(acc, x) === 1 ? acc : x;
    }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* compare */])(f(acc), f(x)) === 1 ? acc : x;
    }, xs);
}
function min(xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* compare */])(acc, x) === -1 ? acc : x;
    }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* compare */])(f(acc), f(x)) === -1 ? acc : x;
    }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) {
        return [last[1], next];
    }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Array__["b" /* permute */])(f, Array.from(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0) throw new Error("Step cannot be 0");
    return delay(function () {
        return unfold(function (x) {
            return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
        }, first);
    });
}
function rangeChar(first, last) {
    return delay(function () {
        return unfold(function (x) {
            return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
        }, first);
    });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) {
        return x;
    }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return xs.reduce(f);
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done) throw new Error("Seq was empty");
    var acc = cur.value;
    for (;;) {
        cur = iter.next();
        if (cur.done) break;
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0) throw new Error("Seq was empty");
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--) acc = f(ar[i], acc, i);
    return acc;
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (acc) {
            if (acc == null) return [seed, seed];
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) {
        return f(x, acc);
    }, seed, reverse(xs)));
}
function singleton(x) {
    return unfold(function (x) {
        return x != null ? [x, null] : null;
    }, x);
}
function skip(n, xs) {
    return _a = {}, _a[Symbol.iterator] = function () {
        var iter = xs[Symbol.iterator]();
        for (var i = 1; i <= n; i++) if (iter.next().done) throw new Error("Seq has not enough elements");
        return iter;
    }, _a;
    var _a;
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) {
            return hasPassed || (hasPassed = !f(x));
        }, xs);
    });
}
function sortWith(f, xs) {
    var ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) {
        return acc + x;
    }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) {
        return acc + f(x);
    }, 0, xs);
}
function tail(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done) throw new Error("Seq was empty");
    return _a = {}, _a[Symbol.iterator] = function () {
        return iter;
    }, _a;
    var _a;
}
function take(n, xs, truncate) {
    if (truncate === void 0) {
        truncate = false;
    }
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done) return [cur.value, i + 1];
                if (!truncate) throw new Error("Seq has not enough elements");
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value)) return [cur.value, null];
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) return defaultValue === void 0 ? null : defaultValue;
        if (f(cur.value, i)) return cur.value;
    }
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var match = null;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) return match === null ? defaultValue === void 0 ? null : defaultValue : match;
        if (f(cur.value, i)) match = cur.value;
    }
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) return null;
        if (f(cur.value, i)) return i;
    }
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var match = -1;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) return match === -1 ? null : match;
        if (f(cur.value, i)) match = i;
    }
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) break;
        var y = f(cur.value, i);
        if (y != null) return y;
    }
    return void 0;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, acc) {
    return _a = {}, _a[Symbol.iterator] = function () {
        return {
            next: function () {
                var res = f(acc);
                if (res != null) {
                    acc = res[1];
                    return { done: false, value: res[0] };
                }
                return { done: true };
            }
        };
    }, _a;
    var _a;
}
function zip(xs, ys) {
    return map2(function (x, y) {
        return [x, y];
    }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) {
        return [x, y, z];
    }, xs, ys, zs);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegExp__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Date__ = __webpack_require__(2);
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export indexOfAny */
/* harmony export (immutable) */ __webpack_exports__["b"] = fsFormat;
/* harmony export (immutable) */ __webpack_exports__["e"] = format;
/* unused harmony export endsWith */
/* unused harmony export initialize */
/* unused harmony export insert */
/* unused harmony export isNullOrEmpty */
/* unused harmony export isNullOrWhiteSpace */
/* unused harmony export join */
/* unused harmony export newGuid */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* unused harmony export remove */
/* harmony export (immutable) */ __webpack_exports__["c"] = replace;
/* unused harmony export replicate */
/* harmony export (immutable) */ __webpack_exports__["a"] = split;
/* harmony export (immutable) */ __webpack_exports__["d"] = trim;









var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
var StringComparison = {
    CurrentCulture: 0,
    CurrentCultureIgnoreCase: 1,
    InvariantCulture: 2,
    InvariantCultureIgnoreCase: 3,
    Ordinal: 4,
    OrdinalIgnoreCase: 5
};
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true || i === StringComparison.CurrentCultureIgnoreCase || i === StringComparison.InvariantCultureIgnoreCase || i === StringComparison.OrdinalIgnoreCase;
    }
    function isOrdinal(i) {
        return i === StringComparison.Ordinal || i === StringComparison.OrdinalIgnoreCase;
    }
    if (x == null) return y == null ? 0 : -1;
    if (y == null) return 1;
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x === y ? 0 : x < y ? -1 : 1;
    } else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 2:
            return cmp(args[0], args[1], false);
        case 3:
            return cmp(args[0], args[1], args[2]);
        case 4:
            return cmp(args[0], args[1], args[2] === true);
        case 5:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default:
            throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareTo(x, y) {
    return cmp(x, y, false);
}
function indexOfAny(str, anyOf) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (str == null || str === "") return -1;
    var startIndex = args.length > 0 ? args[0] : 0;
    if (startIndex < 0) throw new Error("String.indexOfAny: Start index cannot be negative");
    var length = args.length > 1 ? args[1] : str.length - startIndex;
    if (length < 0) throw new Error("String.indexOfAny: Length cannot be negative");
    if (length > str.length - startIndex) throw new Error("String.indexOfAny: Invalid startIndex and length");
    str = str.substr(startIndex, length);
    for (var _a = 0, anyOf_1 = anyOf; _a < anyOf_1.length; _a++) {
        var c = anyOf_1[_a];
        var index = str.indexOf(c);
        if (index > -1) return index + startIndex;
    }
    return -1;
}
function toHex(value) {
    return value < 0 ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16) : value.toString(16);
}
function fsFormat(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _cont;
    function isObject(x) {
        return x !== null && typeof x === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    function formatOnce(str, rep) {
        return str.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
            switch (format) {
                case "f":
                case "F":
                    rep = rep.toFixed(precision || 6);
                    break;
                case "g":
                case "G":
                    rep = rep.toPrecision(precision);
                    break;
                case "e":
                case "E":
                    rep = rep.toExponential(precision);
                    break;
                case "O":
                    rep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["d" /* toString */])(rep);
                    break;
                case "A":
                    try {
                        rep = JSON.stringify(rep, function (k, v) {
                            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v && typeof v.ToString === "function" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["d" /* toString */])(v) : v;
                        });
                    } catch (err) {
                        rep = "{" + Object.getOwnPropertyNames(rep).map(function (k) {
                            return k + ": " + String(rep[k]);
                        }).join(", ") + "}";
                    }
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
            }
            var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
            if (!isNaN(pad = parseInt(pad))) {
                var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
                rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
            }
            var once = prefix + (plusPrefix ? "+" + rep : rep);
            return once.replace(/%/g, "%%");
        });
    }
    function makeFn(str) {
        return function (rep) {
            var str2 = formatOnce(str, rep);
            return fsFormatRegExp.test(str2) ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
        };
    }
    if (args.length === 0) {
        return function (cont) {
            _cont = cont;
            return fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
        };
    } else {
        for (var i = 0; i < args.length; i++) {
            str = formatOnce(str, args[i]);
        }
        return str.replace(/%%/g, "%");
    }
}
function format(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return str.replace(formatRegExp, function (match, idx, pad, format) {
        var rep = args[idx],
            padSymbol = " ";
        if (typeof rep === "number") {
            switch ((format || "").substring(0, 1)) {
                case "f":
                case "F":
                    rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
                    break;
                case "g":
                case "G":
                    rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
                    break;
                case "e":
                case "E":
                    rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
                    break;
                case "p":
                case "P":
                    rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
                default:
                    var m = /^(0+)(\.0+)?$/.exec(format);
                    if (m != null) {
                        var decs = 0;
                        if (m[2] != null) rep = rep.toFixed(decs = m[2].length - 1);
                        pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                        padSymbol = "0";
                    } else if (format) {
                        rep = format;
                    }
            }
        } else if (rep instanceof Date) {
            if (format.length === 1) {
                switch (format) {
                    case "D":
                        rep = rep.toDateString();
                        break;
                    case "T":
                        rep = rep.toLocaleTimeString();
                        break;
                    case "d":
                        rep = rep.toLocaleDateString();
                        break;
                    case "t":
                        rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
                        break;
                    case "o":
                    case "O":
                        if (rep.kind === 2) {
                            var offset = rep.getTimezoneOffset() * -1;
                            rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["a" /* second */])(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
                        } else {
                            rep = rep.toISOString();
                        }
                }
            } else {
                rep = format.replace(/\w+/g, function (match2) {
                    var rep2 = match2;
                    switch (match2.substring(0, 1)) {
                        case "y":
                            rep2 = match2.length < 4 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* year */])(rep) % 100 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* year */])(rep);
                            break;
                        case "h":
                            rep2 = rep.getHours() > 12 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep) % 12 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep);
                            break;
                        case "M":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["d" /* month */])(rep);
                            break;
                        case "d":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["e" /* day */])(rep);
                            break;
                        case "H":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep);
                            break;
                        case "m":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["f" /* minute */])(rep);
                            break;
                        case "s":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["a" /* second */])(rep);
                            break;
                    }
                    if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
                        rep2 = "0" + rep2;
                    }
                    return rep2;
                });
            }
        }
        if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
            rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    var idx = str.lastIndexOf(search);
    return idx >= 0 && idx == str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) throw new Error("String length must be non-negative");
    var xs = new Array(n);
    for (var i = 0; i < n; i++) xs[i] = f(i);
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length == 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function join(delimiter, xs) {
    xs = typeof xs == "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["e" /* getRestParams */])(arguments, 1) : xs;
    return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
}
function newGuid() {
    var uuid = "";
    for (var i = 0; i < 32; i++) {
        var random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
        uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }
    return uuid;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    str = String(str);
    len = len - str.length;
    for (var i = -1; ++i < len;) str = isRight ? str + ch : ch + str;
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && startIndex + count > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count == "number" ? count : null;
    removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
    if (count < 0) throw new Error("Count cannot be less than zero");
    if (count === 0) return [];
    splitters = Array.isArray(splitters) ? splitters : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["e" /* getRestParams */])(arguments, 1);
    splitters = splitters.map(function (x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(x);
    });
    splitters = splitters.length > 0 ? splitters : [" "];
    var m;
    var i = 0;
    var splits = [];
    var reg = new RegExp(splitters.join("|"), "g");
    while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
        if (!removeEmpty || m.index - i > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || str.length - i > 0) splits.push(str.substring(i));
    return splits;
}
function trim(str, side) {
    var chars = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        chars[_i - 2] = arguments[_i];
    }
    if (side == "both" && chars.length == 0) return str.trim();
    if (side == "start" || side == "both") {
        var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side == "end" || side == "both") {
        var reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(reg, "");
    }
    return str;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_fable_import_sharepoint_HSharp__ = __webpack_require__(12);
/* unused harmony export CoGoS2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}




var CoGoS2 = function () {
    _createClass(CoGoS2, [{
        key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "App.CoGoS2",
                interfaces: ["HSharp.IApplicationV2"],
                properties: {}
            };
        }
    }]);

    function CoGoS2() {
        _classCallCheck(this, CoGoS2);
    }

    _createClass(CoGoS2, [{
        key: "getPages",
        value: function () {
            return [];
        }
    }, {
        key: "getSites",
        value: function () {
            return [];
        }
    }, {
        key: "getScheduledTasks",
        value: function () {
            return [];
        }
    }, {
        key: "isDebug",
        get: function () {
            return false;
        }
    }]);

    return CoGoS2;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("App.CoGoS2", CoGoS2);
var Helpers = function () {
    _createClass(Helpers, [{
        key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "App.Helpers",
                properties: {}
            };
        }
    }]);

    function Helpers() {
        _classCallCheck(this, Helpers);

        this.app = new CoGoS2();
    }

    _createClass(Helpers, [{
        key: "start",
        value: function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__node_modules_fable_import_sharepoint_HSharp__["a" /* startApplication */])(new __WEBPACK_IMPORTED_MODULE_1__node_modules_fable_import_sharepoint_HSharp__["b" /* ApplicationV2Wrapper */](this.app));
        }
    }]);

    return Helpers;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("App.Helpers", Helpers);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* unused harmony export ofArray */




function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}
var List = function () {
    function List(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    List.prototype.ToString = function () {
        return "[" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* toString */]).join("; ") + "]";
    };
    List.prototype.Equals = function (x) {
        if (this === x) {
            return true;
        } else {
            var iter1 = this[Symbol.iterator](),
                iter2 = x[Symbol.iterator]();
            for (;;) {
                var cur1 = iter1.next(),
                    cur2 = iter2.next();
                if (cur1.done) return cur2.done ? true : false;else if (cur2.done) return false;else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* equals */])(cur1.value, cur2.value)) return false;
            }
        }
    };
    List.prototype.CompareTo = function (x) {
        if (this === x) {
            return 0;
        } else {
            var acc = 0;
            var iter1 = this[Symbol.iterator](),
                iter2 = x[Symbol.iterator]();
            for (;;) {
                var cur1 = iter1.next(),
                    cur2 = iter2.next();
                if (cur1.done) return cur2.done ? acc : -1;else if (cur2.done) return 1;else {
                    acc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["f" /* compare */])(cur1.value, cur2.value);
                    if (acc != 0) return acc;
                }
            }
        }
    };
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            var cur = this,
                acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype[Symbol.iterator] = function () {
        var cur = this;
        return {
            next: function () {
                var tmp = cur;
                cur = cur.tail;
                return { done: tmp.tail == null, value: tmp.head };
            }
        };
    };
    List.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Collections.FSharpList",
            interfaces: ["System.IEquatable", "System.IComparable"]
        };
    };
    return List;
}();
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* unused harmony export unescape */
/* unused harmony export isMatch */
/* unused harmony export match */
/* unused harmony export matches */
/* unused harmony export options */
/* unused harmony export replace */
/* unused harmony export split */
function create(pattern, options) {
    var flags = "g";
    flags += options & 1 ? "i" : "";
    flags += options & 2 ? "m" : "";
    return new RegExp(pattern, flags);
}
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern, options) {
    if (options === void 0) {
        options = 0;
    }
    var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern, options) {
    if (options === void 0) {
        options = 0;
    }
    var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern, options) {
    if (options === void 0) {
        options = 0;
    }
    var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    if (!reg.global) throw new Error("Non-global RegExp");
    var m;
    var matches = [];
    while ((m = reg.exec(str)) !== null) matches.push(m);
    return matches;
}
function options(reg) {
    var options = 256;
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit, offset) {
    if (offset === void 0) {
        offset = 0;
    }
    function replacer() {
        var res = arguments[0];
        if (limit !== 0) {
            limit--;
            var match_1 = [];
            var len = arguments.length;
            for (var i = 0; i < len - 2; i++) match_1.push(arguments[i]);
            match_1.index = arguments[len - 2];
            match_1.input = arguments[len - 1];
            res = replacement(match_1);
        }
        return res;
    }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement == "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    } else {
        if (limit != null) {
            var m = void 0;
            var sub1 = input.substring(offset);
            var _matches = matches(reg, sub1);
            var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        } else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit, offset) {
    if (offset === void 0) {
        offset = 0;
    }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Long__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromTicks */
/* unused harmony export fromDays */
/* unused harmony export fromHours */
/* unused harmony export fromMinutes */
/* unused harmony export fromSeconds */
/* unused harmony export days */
/* unused harmony export hours */
/* unused harmony export minutes */
/* unused harmony export seconds */
/* unused harmony export milliseconds */
/* unused harmony export ticks */
/* unused harmony export totalDays */
/* unused harmony export totalHours */
/* unused harmony export totalMinutes */
/* unused harmony export totalSeconds */
/* unused harmony export negate */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export duration */


function create(d, h, m, s, ms) {
    if (d === void 0) {
        d = 0;
    }
    if (h === void 0) {
        h = 0;
    }
    if (m === void 0) {
        m = 0;
    }
    if (s === void 0) {
        s = 0;
    }
    if (ms === void 0) {
        ms = 0;
    }
    switch (arguments.length) {
        case 1:
            return fromTicks(arguments[0]);
        case 3:
            d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
            break;
        default:
            d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
            break;
    }
    return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
}
function fromTicks(ticks) {
    return ticks.div(10000).toNumber();
}
function fromDays(d) {
    return create(d, 0, 0, 0);
}
function fromHours(h) {
    return create(h, 0, 0);
}
function fromMinutes(m) {
    return create(0, m, 0);
}
function fromSeconds(s) {
    return create(0, 0, s);
}
function days(ts) {
    return Math.floor(ts / 86400000);
}
function hours(ts) {
    return Math.floor(ts % 86400000 / 3600000);
}
function minutes(ts) {
    return Math.floor(ts % 3600000 / 60000);
}
function seconds(ts) {
    return Math.floor(ts % 60000 / 1000);
}
function milliseconds(ts) {
    return Math.floor(ts % 1000);
}
function ticks(ts) {
    return __WEBPACK_IMPORTED_MODULE_1__Long__["a" /* fromNumber */](ts).mul(10000);
}
function totalDays(ts) {
    return ts / 86400000;
}
function totalHours(ts) {
    return ts / 3600000;
}
function totalMinutes(ts) {
    return ts / 60000;
}
function totalSeconds(ts) {
    return ts / 1000;
}
function negate(ts) {
    return ts * -1;
}
function add(ts1, ts2) {
    return ts1 + ts2;
}
function subtract(ts1, ts2) {
    return ts1 - ts2;
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* compare */])(x, y);
}
function duration(x) {
    return Math.abs(x);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_String__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_Array__ = __webpack_require__(3);
/* unused harmony export onDocumentReady */
/* unused harmony export windowParentLocation */
/* unused harmony export getUrlWithoutParams */
/* unused harmony export getIndexOfUrlPart */
/* harmony export (immutable) */ __webpack_exports__["a"] = locationHasPart;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCurrentUrl;
/* unused harmony export setCurrentUrl */
/* unused harmony export parentHasPart */
/* unused harmony export reloadPage */
/* unused harmony export elH */
/* unused harmony export toString */
/* unused harmony export setElementHValue */
/* unused harmony export setElementValue */
/* unused harmony export getElementValue */
/* unused harmony export getElementHValue */
/* unused harmony export checkHRadio */
/* unused harmony export checkRadio */
/* unused harmony export ajaxParameters */
/* unused harmony export postJSON */
/* unused harmony export showAll */
/* unused harmony export change */
/* unused harmony export submit */
/* unused harmony export attr */
/* unused harmony export hide */
/* unused harmony export show */
/* unused harmony export append */
/* unused harmony export parent */
/* unused harmony export remove */
/* unused harmony export prop */
/* unused harmony export getInnerText */
/* unused harmony export readonlyAll */
/* unused harmony export querySelector */
/* unused harmony export matchRuleShort */
/* unused harmony export find */
/* unused harmony export last */
/* unused harmony export first */
/* unused harmony export toStringSafe */
/* unused harmony export has */
/* unused harmony export disable */
/* unused harmony export enable */
/* unused harmony export enableOrDisable */
/* unused harmony export on */
/* unused harmony export width */
/* unused harmony export empty */
/* unused harmony export pathname */
/* unused harmony export hostname */
/* unused harmony export host */
/* unused harmony export links */
/* unused harmony export getElementById */
/* unused harmony export getElementsByClass */
/* unused harmony export getElementsByName */
/* unused harmony export getChildrenByClass */
/* unused harmony export getHostname */
/* unused harmony export getPathname */
/* unused harmony export createParamLinkPostfix */
/* unused harmony export createLinkElement */
/* unused harmony export getSelectedText */
/* unused harmony export createSimpleLink */
/* unused harmony export createLineBreak */
/* unused harmony export createTextElement */
/* unused harmony export createInput */
/* unused harmony export createTable */
/* unused harmony export createRow */
/* unused harmony export createColumn */
/* unused harmony export getUrlParamValue */
/* unused harmony export createButton */
/* unused harmony export createDiv */
/* unused harmony export addButton */
/* unused harmony export addHeading */
/* unused harmony export getQueryParameterValue */
/* unused harmony export confirm */
/* unused harmony export sliceUrlFrom */
/* unused harmony export clearElementChildren */
/* unused harmony export getInputValueLength */
/* unused harmony export after */
/* unused harmony export dateTimeToStringSafe */
/* unused harmony export nearestRow */
/* unused harmony export closest */
/* unused harmony export test */
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}







function onDocumentReady(callback) {
    document.onreadystatechange = function (_arg1) {
        if (document.readyState === "complete") {
            callback(null);
        }

        return null;
    };
}
var windowParentLocation = function () {
    try {
        return window.parent.location.href;
    } catch (matchValue) {
        return null;
    }
}();
function getUrlWithoutParams() {
    var urlWithoutParams = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["c" /* replace */])(window.location.href, window.location.search, "");
    return urlWithoutParams;
}
function getIndexOfUrlPart(part) {
    var urlWithoutParams = getUrlWithoutParams().toLocaleLowerCase();
    var index = urlWithoutParams.indexOf(part.toLocaleLowerCase());
    return index;
}
function locationHasPart(part) {
    return getIndexOfUrlPart(part) > -1;
}
function getCurrentUrl() {
    return window.location.href;
}
function setCurrentUrl(url) {
    window.location.href = url;
}
function parentHasPart(part) {
    var parent = windowParentLocation;

    if (parent != null) {
        return parent.indexOf(part) > -1;
    } else {
        return false;
    }
}
function reloadPage() {
    window.location.reload(false);
}
function elH(elementId) {
    return jQuery("#" + elementId);
}
function toString(obj) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(obj);
}
function setElementHValue(elementId, text) {
    elH(elementId).val(text);
}
function setElementValue(selector, text) {
    jQuery(selector).val(text);
}
function getElementValue(selector) {
    var s = selector + " option:selected";
    return toString(jQuery(s).text());
}
function getElementHValue(elementId) {
    return toString(elH(elementId).text());
}
function checkHRadio(elementId) {
    elH(elementId).prop("checked", true);
}
function checkRadio(selector) {
    jQuery(selector).prop("checked", true);
}
var ajaxParameters = function () {
    function ajaxParameters(beforeSend, type, url, data, dataType, success) {
        _classCallCheck(this, ajaxParameters);

        this.beforeSend = beforeSend;
        this.type = type;
        this.url = url;
        this.data = data;
        this.dataType = dataType;
        this.success = success;
    }

    _createClass(ajaxParameters, [{
        key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Browser.Support.ajaxParameters",
                interfaces: ["FSharpRecord"],
                properties: {
                    beforeSend: "function",
                    type: "string",
                    url: "string",
                    data: "string",
                    dataType: "string",
                    success: "function"
                }
            };
        }
    }]);

    return ajaxParameters;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Browser.Support.ajaxParameters", ajaxParameters);
function postJSON(url, data, callback) {
    return jQuery.ajax(function () {
        var beforeSend = function beforeSend(xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Accept", "application/json");
        };

        return new ajaxParameters(beforeSend, "POST", url, data, "json", callback);
    }());
}
function showAll(el) {
    el.find("*").show();
    el.show();
}
function change(func, el) {
    return el.change(function () {
        func(null);
    });
}
function submit(func, el) {
    return el.submit(function () {
        func(null);
    });
}
function attr(value, el) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(el.attr(value));
}
function hide(el) {
    return el.hide();
}
function show(el) {
    return el.show();
}
function append(value, el) {
    return el.append(value);
}
function parent(el) {
    return el.parent();
}
function remove(el) {
    return el.remove();
}
function prop(value_0, value_1, el) {
    var value = [value_0, value_1];
    return el.prop(value[0], value[1]);
}
function getInnerText(el) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(el.innerText);
}
function readonlyAll(el) {
    el.find("*").prop("contentEditable", false);
    el.find("*").prop("disabled", true);
}
function querySelector(query) {
    console.log(query);
    return document.querySelector(query);
}
function matchRuleShort(str, rule) {
    return RegExp("^" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(rule.split("*").join(".*")) + "$").test(str);
}
function find(selector, el) {
    return el.find(selector);
}
function last(el) {
    return el.last();
}
function first(el) {
    return el.first();
}
function toStringSafe(v) {
    if (v == null) {
        return "";
    } else {
        var vs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(v);

        if (vs === "null") {
            return "";
        } else {
            return vs;
        }
    }
}
function has(containedOrSelector, el) {
    return el.has(containedOrSelector);
}
function disable(el) {
    (function () {
        var tupledArg = ["disabled", true];
        return function (el_1) {
            return prop(tupledArg[0], tupledArg[1], el_1);
        };
    })()(el);
}
function enable(el) {
    (function () {
        var tupledArg = ["disabled", false];
        return function (el_1) {
            return prop(tupledArg[0], tupledArg[1], el_1);
        };
    })()(el);
}
function enableOrDisable(enabled, el) {
    (function () {
        var tupledArg = ["disabled", !enabled];
        return function (el_1) {
            return prop(tupledArg[0], tupledArg[1], el_1);
        };
    })()(el);
}
function on(event, func, el) {
    return el.on(event, function () {
        func(null);
    });
}
function width(param, el) {
    el.width(param);
}
function empty(el) {
    el.empty();
}
var pathname = window.location.pathname;
var hostname = window.location.hostname;
var host = window.location.host;
var links = document.getElementsByTagName("a");
function getElementById(id) {
    return document.getElementById(id);
}
function getElementsByClass(className) {
    return document.getElementsByClassName(className);
}
function getElementsByName(name) {
    return document.getElementsByName(name);
}
function getChildrenByClass(className, parent_1) {
    return parent_1.getElementsByClassName(className);
}
function getHostname(el) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(el.hostname);
}
function getPathname(el) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(el.pathname);
}
function createParamLinkPostfix(linkDescription, paramValue, url, paramName, source) {
    var path = source ? url + "?" + paramName + "=" + paramValue + "&Source=" + location.href : url + "?" + paramName + "=" + paramValue;
    var link = document.createElement("a");
    link.setAttribute("href", path);
    link.textContent = linkDescription;
    return link;
}
function createLinkElement(linkDescription, url) {
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.textContent = linkDescription;
    return link;
}
function getSelectedText(el) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(el.text());
}
function createSimpleLink(linkDescription, url, source) {
    var path = source ? url + "?Source=" + location.href : url;
    var link = document.createElement("a");
    link.setAttribute("href", path);
    link.textContent = linkDescription;
    return link;
}
var createLineBreak = document.createElement("br");
function createTextElement(value) {
    return document.createTextNode(value);
}
function createInput(value, t) {
    var input = document.createElement("input");
    input.type = t;
    input.value = value;
    return input;
}
var createTable = function () {
    var t = document.createElement('table');
    t.id = "boardsTable";
    t.border = "1";
    return t;
}();
function createRow(table) {
    return table.insertRow(-1);
}
function createColumn(row, content) {
    var cell = row.insertCell(-1);
    cell.appendChild(content);
    return cell;
}
function getUrlParamValue(paramName) {
    var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["a" /* split */])(location.search.substr(1), "&").map(function (x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["a" /* split */])(x, "=");
    }).find(function (y) {
        return y[0] === paramName;
    });
    return result[1];
}
function createButton(text) {
    var submit_1 = document.createElement("button");
    submit_1.textContent = text;
    return submit_1;
}
function createDiv(id) {
    var div = document.createElement("div");
    div.id = id;
    return div;
}
function addButton(name, parent_1, onClick) {
    var submit_1 = createButton(name);
    submit_1.id = name;
    submit_1.addEventListener("click", onClick);
    parent_1.appendChild(submit_1);
}
function addHeading(value, parent_1) {
    var h = document.createElement("h3");
    var t = document.createTextNode(value);
    h.appendChild(t);
    parent_1.appendChild(h);
}
function getQueryParameterValue(name) {
    var query = location.search.substr(1);
    var prms = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["a" /* split */])(query, "&");
    var paramValue = prms.filter(function (x_1) {
        var pair = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["a" /* split */])(x_1, "=");
        return pair[0] === name;
    }).map(function (x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["a" /* split */])(x, "=")[1];
    });
    var matchValue = paramValue.length;

    if (matchValue === 0) {
        return "";
    } else {
        return paramValue[0];
    }
}
function confirm(message) {
    return window.confirm(message);
}
function sliceUrlFrom(start) {
    var urlParts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["a" /* split */])(location.href, "/");
    var length = urlParts.findIndex(function (x) {
        return x === start;
    }) + 1;
    var res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["d" /* trim */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["f" /* fold */])(function (acc, i) {
        return acc + "/" + i;
    }, "", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_Array__["a" /* getSubArray */])(urlParts, 0, length)), "both", "/");
    return res;
}
function clearElementChildren(el) {
    elH(el.id).empty();
    return el;
}
function getInputValueLength(input) {
    var iEl = input;
    var res = iEl.value;
    console.log(res);
    return res.length;
}
function after(html, el) {
    return el.after(html);
}
function dateTimeToStringSafe(d) {
    var res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["e" /* format */])('{0:' + "dd.MM.yyyy" + '}', d);

    if (res === "null") {
        return "";
    } else {
        return res;
    }
}
function nearestRow(el) {
    try {
        return el.parents("tr");
    } catch (ex) {
        console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_String__["b" /* fsFormat */])("nearestRow FAILED for %A [%A]")(function (x) {
            return x;
        })(el)(ex));
        return null;
    }
}
function closest(sel, el) {
    return el.closest(sel);
}
function test(o) {
    return o.franta;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Browser_Support__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_String__ = __webpack_require__(6);
/* unused harmony export PathAsterixSeparator */
/* unused harmony export ApplicationV2EndPoint */
/* unused harmony export ApplicationV2Site */
/* unused harmony export logD */
/* unused harmony export logO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApplicationV2Wrapper; });
/* harmony export (immutable) */ __webpack_exports__["a"] = startApplication;
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}







var PathAsterixSeparator = "*";
var ApplicationV2EndPoint = function () {
    _createClass(ApplicationV2EndPoint, [{
        key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "HSharp.ApplicationV2EndPoint",
                interfaces: ["HSharp.IEndPoint"],
                properties: {
                    Page: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* Option */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* Interface */])("HSharp.IPage")),
                    ScheduledTask: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* Option */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* Interface */])("HSharp.IScheduledTask"))
                }
            };
        }
    }]);

    function ApplicationV2EndPoint(page, task) {
        _classCallCheck(this, ApplicationV2EndPoint);

        this.page = page;
        this.task = task;
    }

    _createClass(ApplicationV2EndPoint, [{
        key: "Page",
        get: function () {
            return this.page;
        }
    }, {
        key: "ScheduledTask",
        get: function () {
            return this.task;
        }
    }]);

    return ApplicationV2EndPoint;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("HSharp.ApplicationV2EndPoint", ApplicationV2EndPoint);
var ApplicationV2Site = function () {
    _createClass(ApplicationV2Site, [{
        key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "HSharp.ApplicationV2Site",
                interfaces: ["HSharp.ISite"],
                properties: {
                    Site: "string"
                }
            };
        }
    }]);

    function ApplicationV2Site(site) {
        _classCallCheck(this, ApplicationV2Site);

        this.site = site;
    }

    _createClass(ApplicationV2Site, [{
        key: "Site",
        get: function () {
            return this.site;
        }
    }]);

    return ApplicationV2Site;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("HSharp.ApplicationV2Site", ApplicationV2Site);
function logD(isDebug, message) {
    if (isDebug) {
        console.log(message);
    }
}
function logO(isDebug, message, value) {
    logD(isDebug, message + ":");

    if (isDebug) {
        console.log(value);
    }

    logD(isDebug, "----------------------------------------------------------------------------------");
}
var ApplicationV2Wrapper = function () {
    _createClass(ApplicationV2Wrapper, [{
        key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "HSharp.ApplicationV2Wrapper",
                interfaces: ["HSharp.IApplication"],
                properties: {
                    ApplicationV2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* Interface */])("HSharp.IApplicationV2"),
                    w: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* Interface */])("HSharp.IApplication")
                }
            };
        }
    }]);

    function ApplicationV2Wrapper(app) {
        _classCallCheck(this, ApplicationV2Wrapper);

        this.app = app;
    }

    _createClass(ApplicationV2Wrapper, [{
        key: "getSiteFromUrl",
        value: function (url) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* defaultArg */])(function (array) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["a" /* tryFind */])(function (part) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Browser_Support__["a" /* locationHasPart */])(part);
                }, array);
            }(this.app.getSites()), null, function (p) {
                return new ApplicationV2Site(p);
            });
        }
    }, {
        key: "getEndPointFromUrl",
        value: function (url) {
            var _this = this;

            var site = this.w.getSiteFromUrl(url);

            var localPart = function localPart(p) {
                return function () {
                    var p_1 = p.path;
                    return _this.splitByPathAsterixSeparator(p_1);
                }()[1];
            };

            var potentialPages = Array.from(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["b" /* where */])(function ($var40) {
                return function (part) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Browser_Support__["a" /* locationHasPart */])(part);
                }(function (arg00) {
                    return localPart(arg00);
                }($var40));
            }, this.app.getPages()));
            var potentialScheduledTasks = Array.from(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["b" /* where */])(function ($var41) {
                return function (part_1) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Browser_Support__["a" /* locationHasPart */])(part_1);
                }(function (arg00_1) {
                    return localPart(arg00_1);
                }($var41));
            }, this.app.getScheduledTasks()));

            var findByPathAndConvert = function findByPathAndConvert(x) {
                var convert1 = function convert1(arr) {
                    var convertOne = function convertOne(x_1) {
                        return x_1;
                    };

                    return Array.from(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["c" /* map */])(function (arg00_2) {
                        return convertOne(arg00_2);
                    }, arr));
                };

                var findByPath = function findByPath(potentials) {
                    var localizedWithSite = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["a" /* tryFind */])(function (p_2) {
                        return p_2.path.indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(site)) >= 0;
                    }, potentials);

                    if (function () {
                        return localizedWithSite == null;
                    }(null)) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["d" /* tryHead */])(potentials);
                    } else {
                        return localizedWithSite;
                    }
                };

                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* defaultArg */])(findByPath(convert1(x)), null, function (p_3) {
                    return p_3;
                });
            };

            var page = findByPathAndConvert(potentialPages);
            var task = findByPathAndConvert(potentialScheduledTasks);

            if (function () {
                return page == null;
            }(null) ? function () {
                return task == null;
            }(null) : false) {
                return null;
            } else {
                return new ApplicationV2EndPoint(page, task);
            }
        }
    }, {
        key: "render",
        value: function (site, endPoint) {
            var _this2 = this;

            (function () {
                var which = function which(ep) {
                    return ep.Page;
                };

                var what = function what(page) {
                    page.render();
                };

                return function (endPoint_1) {
                    _this2.runIfMatch(which, what, endPoint_1);
                };
            })()(endPoint);
            (function () {
                var which_1 = function which_1(ep_1) {
                    return ep_1.ScheduledTask;
                };

                var what_1 = function what_1(task) {
                    task.runOnce();
                };

                return function (endPoint_2) {
                    _this2.runIfMatch(which_1, what_1, endPoint_2);
                };
            })()(endPoint);
        }
    }, {
        key: "scheduled",
        value: function (site, endPoint) {
            var _this3 = this;

            (function () {
                var which = function which(ep) {
                    return ep.ScheduledTask;
                };

                var what = function what(task) {
                    task.run();
                };

                return function (endPoint_1) {
                    _this3.runIfMatch(which, what, endPoint_1);
                };
            })()(endPoint);
        }
    }, {
        key: "splitByPathAsterixSeparator",
        value: function (p) {
            var pathAsterixSeparatorForSplit = "*".split("")[0];
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["a" /* split */])(p, pathAsterixSeparatorForSplit);
        }
    }, {
        key: "runIfMatch",
        value: function (which, what, endPoint) {
            var runOnEp = function runOnEp(ep) {
                (function (option) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["e" /* iterate */])(what, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* defaultArg */])(option, [], function (x) {
                        return [x];
                    }));
                })(which(ep));
            };

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Seq__["e" /* iterate */])(runOnEp, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* defaultArg */])(endPoint, [], function (x) {
                return [x];
            }));
        }
    }, {
        key: "ApplicationV2",
        get: function () {
            return this.app;
        }
    }, {
        key: "w",
        get: function () {
            return this;
        }
    }, {
        key: "isDebug",
        get: function () {
            return this.app.isDebug;
        }
    }]);

    return ApplicationV2Wrapper;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("HSharp.ApplicationV2Wrapper", ApplicationV2Wrapper);
function startApplication(application) {
    var isDebug = application.isDebug;

    var logD_1 = function logD_1(message) {
        if (isDebug) {
            console.log(message);
        }
    };

    var logDF = function logDF(formatString) {
        return function (args) {
            logD_1(formatString(function (x) {
                return x;
            })(args));
        };
    };

    var currentUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Browser_Support__["b" /* getCurrentUrl */])();
    (function () {
        var clo0 = logDF;
        return function (arg00) {
            var clo1 = clo0(arg00);
            return function (arg10) {
                clo1(arg10);
            };
        };
    })()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["b" /* fsFormat */])("Application started @ %A"))(currentUrl);
    var site = application.getSiteFromUrl(currentUrl);
    (function () {
        var clo0_1 = logDF;
        return function (arg00_1) {
            var clo1_1 = clo0_1(arg00_1);
            return function (arg10_1) {
                clo1_1(arg10_1);
            };
        };
    })()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["b" /* fsFormat */])("@ Site %A"))(site);
    var endpoint = application.getEndPointFromUrl(currentUrl);
    (function () {
        var clo0_2 = logDF;
        return function (arg00_2) {
            var clo1_2 = clo0_2(arg00_2);
            return function (arg10_2) {
                clo1_2(arg10_2);
            };
        };
    })()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["b" /* fsFormat */])("@ EndPoint %A"))(endpoint);
    (function (arg00_3) {
        return function (arg10_3) {
            application.render(arg00_3, arg10_3);
        };
    })(site)(endpoint);
    logD_1("Rendered");

    var scheduler = function scheduler() {
        (function (arg00_4) {
            return function (arg10_4) {
                application.scheduled(arg00_4, arg10_4);
            };
        })(site)(endpoint);
        setTimeout(scheduler, 1000);
    };

    logD_1("Scheduling the task for the very first time");
    setTimeout(scheduler, 1000);
    logD_1("start done");
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_App_js__ = __webpack_require__(7);


var wrapper = new __WEBPACK_IMPORTED_MODULE_0__build_App_js__["a" /* Helpers */]();
window.HSharp = wrapper;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map