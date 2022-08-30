//// [enumIsNotASubtypeOfAnythingButNumber.ts]
// enums are only subtypes of number, any and no other types
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var E;
(function(E) {
    E[E["A"] = 0] = "A";
})(E || (E = {}));
var A = function A() {
    "use strict";
    _class_call_check(this, A);
};
var A2 = function A2() {
    "use strict";
    _class_call_check(this, A2);
};
var E2;
(function(E2) {
    E2[E2["A"] = 0] = "A";
})(E2 || (E2 = {}));
function f() {}
(function(f) {
    var bar = f.bar = 1;
})(f || (f = {}));
var c = function c() {
    "use strict";
    _class_call_check(this, c);
};
(function(c) {
    var bar = c.bar = 1;
})(c || (c = {}));