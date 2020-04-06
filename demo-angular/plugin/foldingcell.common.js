// import { View, Property } from "tns-core-modules/ui/core/view"

// export class FoldingCellCommon extends View {

//     constructor() {
//         super();
//     }

// }



// function __export(m) {
//     for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
// }
// Object.defineProperty(exports, "__esModule", { value: true });
// var view_1 = require("@nativescript/core/ui/core/view");
// __export(require("@nativescript/core/ui/core/view"));



// var FoldingCellCommon = (function (_super) {
//     __extends(FoldingCellCommon, _super);
//     function FoldingCellCommon() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
    
//     // FoldingCellCommon.tapEvent = "tap";


//        return FoldingCellCommon;
// }(view_1.View));

// exports.FoldingCellCommon = FoldingCellCommon;


// var FoldingCellItemCommon = (function (_super) {
//     __extends(FoldingCellItemCommon, _super);
//     function FoldingCellItemCommon() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//        return FoldingCellItemCommon;
// }(view_1.View));

// exports.FoldingCellItemCommon = FoldingCellItemCommon;



function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var layout_base_1 = require("@nativescript/core/ui/layouts/layout-base");
__export(require("@nativescript/core/ui/layouts/layout-base"));
var FoldingCellCommon = (function (_super) {
    __extends(FoldingCellCommon, _super);
    function FoldingCellCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FoldingCellCommon = __decorate([
        layout_base_1.CSSType("FoldingCell")
    ], FoldingCellCommon);
    return FoldingCellCommon;
}(layout_base_1.LayoutBase));
exports.FoldingCellCommon = FoldingCellCommon;
// StackLayoutBase.prototype.recycleNativeView = "auto";
// var converter = layout_base_1.makeParser(layout_base_1.makeValidator("horizontal", "vertical"));
// exports.orientationProperty = new layout_base_1.Property({ name: "orientation", defaultValue: "vertical", affectsLayout: layout_base_1.isIOS, valueConverter: converter });
// exports.orientationProperty.register(StackLayoutBase);
//# sourceMappingURL=stack-layout-common.js.map