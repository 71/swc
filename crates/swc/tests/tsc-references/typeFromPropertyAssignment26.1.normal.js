//// [bug24730.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var UI = {};
UI.TreeElement = function _class() {
    "use strict";
    _class_call_check(this, _class);
    this.treeOutline = 12;
};
UI.context = new UI.TreeElement();
var C = /*#__PURE__*/ function(_TreeElement) {
    "use strict";
    _inherits(C, _TreeElement);
    var _super = _create_super(C);
    function C() {
        _class_call_check(this, C);
        return _super.apply(this, arguments);
    }
    var _proto = C.prototype;
    _proto.onpopulate = function onpopulate() {
        this.doesNotExist;
        this.treeOutline.doesntExistEither();
    };
    return C;
}(UI.TreeElement);