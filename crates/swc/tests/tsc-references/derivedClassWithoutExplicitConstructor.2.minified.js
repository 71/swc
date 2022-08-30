//// [derivedClassWithoutExplicitConstructor.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Derived = function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived() {
        var _this;
        return _class_call_check(this, Derived), _this = _super.apply(this, arguments), _this.x = 1, _this.y = "hello", _this;
    }
    return Derived;
}(function Base(x) {
    "use strict";
    _class_call_check(this, Base), this.a = 1, this.a = x;
});
new Derived(), new Derived(1);
var D = function(Base2) {
    "use strict";
    _inherits(D, Base2);
    var _super = _create_super(D);
    function D() {
        var _this;
        return _class_call_check(this, D), _this = _super.apply(this, arguments), _this.x = 2, _this.y = null, _this;
    }
    return D;
}(function Base2(x) {
    "use strict";
    _class_call_check(this, Base2), this.a = x;
});
new D(), new D(new Date());