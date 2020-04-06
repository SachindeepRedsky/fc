// import { FoldingCellCommon } from 'nativescript-foldingcell/foldingcell.common';
// import * as utils from "tns-core-modules/utils/utils";

// declare module com {
//     export module ramotion {
//         export module foldingcell {
//             export class FoldingCell {
//                 constructor(params0: android.content.Context);
//             }
//         }
//     }
// }


var utils=require('@nativescript/core/utils/utils')

var app = require('@nativescript/core/application');
var color=app.getNativeApplication().getResources().getIdentifier("ns_accent", "color", app.getNativeApplication().getPackageName());
var bcolor=app.getNativeApplication().getResources().getIdentifier("ns_blue", "color", app.getNativeApplication().getPackageName());


// function __export(m) {
//     for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
// }
// Object.defineProperty(exports, "__esModule", { value: true });

// var foldingcellcommon = require("./foldingcell.common");
// __export(require("./foldingcell.common"));


// var ClickListener;

// function initializeClickListener() {
//     if (ClickListener) {
//         return;
//     }
//     var ClickListenerImpl = (function (_super) {
//         __extends(ClickListenerImpl, _super);
//         function ClickListenerImpl(owner) {
//             var _this = _super.call(this) || this;
//             _this.owner = owner;
//             return global.__native(_this);
//         }
//         ClickListenerImpl.prototype.onClick = function (v) {
//             var owner = this.owner;
//             if (owner) {
//                 owner._emit(foldingcellcommon.FoldingCellCommon.tapEvent);
//             }
//         };
//         ClickListenerImpl = __decorate([
//             Interfaces([android.view.View.OnClickListener])
//         ], ClickListenerImpl);
//         return ClickListenerImpl;
//     }(java.lang.Object));
//     ClickListener = ClickListenerImpl;
// }



// var FoldingCell = (function (_super) {
//     __extends(FoldingCell, _super);
//     function FoldingCell() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         return _this;
//     }
//     FoldingCell.prototype.createNativeView = function () {
//         var fc= new com.ramotion.foldingcell.FoldingCell(utils.ad.getApplicationContext());
//      var   vf=new 	android.widget.FrameLayout(utils.ad.getApplicationContext());
// vf.setVisibility(2);
// var params= new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
// var cparams= new android.widget.FrameLayout.LayoutParams(android.widget.FrameLayout.LayoutParams.MATCH_PARENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
// var tparams= new android.widget.FrameLayout.LayoutParams(android.widget.FrameLayout.LayoutParams.MATCH_PARENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
// console.log('FCP:::',params)

// vf.setLayoutParams(cparams);
// // vf.setBackgroundColor(167);
// vf.setBackgroundColor(bcolor);


// console.log('FC:::',fc)

// var tv=new android.widget.TextView(utils.ad.getApplicationContext());
// tv.setText('Front View');
// tv.setHeight(250);

// // setBackgroundColor
// vf.addView(tv);
//       var  vs=new 	android.widget.FrameLayout(utils.ad.getApplicationContext());
//       vs.setLayoutParams(tparams);
//       vs.setBackgroundColor(color);

//       var t2=new android.widget.TextView(utils.ad.getApplicationContext());
//       t2.setText('Rear View');
//       t2.setHeight(100);
//       console.log('Color', color);
//       vs.addView(t2);

// fc.addView(vf,0)
// fc.addView(vs,1)
// fc.setLayoutParams(params);

//         return fc;
//     };


//     FoldingCell.prototype.initNativeView = function () {
//         _super.prototype.initNativeView.call(this);
//         var nativeView = this.nativeViewProtected;
//         initializeClickListener();
//         var clickListener = new ClickListener(this);
//         nativeView.setOnClickListener(clickListener);
//         nativeView.clickListener = clickListener;
//     };
  
//     return FoldingCell;
// }(foldingcellcommon.FoldingCellCommon));
// exports.FoldingCell = FoldingCell;


// var FoldingCellItem = (function (_super) {
//     __extends(FoldingCellItem, _super);
//     function FoldingCellItem() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         return _this;
//     }
//     FoldingCellItem.prototype.createNativeView = function () {
//     //  var params = android.widget.FrameLayout.LayoutParams(LayoutParams.MATCH_PARENT,100)
// var fl = new android.widget.TextView(this._context);
// fl.setText('bbjhbmbmmbnn')
// // fl.setLayoutParams(params)
//         return fl;
//     };
  
//     return FoldingCellItem;
// }(foldingcellcommon.FoldingCellItemCommon));
// exports.FoldingCellItem = FoldingCellItem;


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var folding_cell_common_1 = require("./foldingcell.common");
__export(require("./foldingcell.common"));
var FoldingCell = (function (_super) {
    __extends(FoldingCell, _super);
    function FoldingCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FoldingCell.prototype.createNativeView = function () {

var fc=new com.ramotion.foldingcell.FoldingCell(this._context);

var params= new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
// var cparams= new android.widget.FrameLayout.LayoutParams(android.widget.FrameLayout.LayoutParams.MATCH_PARENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
// var tparams= new android.widget.FrameLayout.LayoutParams(android.widget.FrameLayout.LayoutParams.MATCH_PARENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
// console.log('FCP:::',params)

fc.setLayoutParams(params);

        return fc;
    };
    // FoldingCell.prototype[stack_layout_common_1.orientationProperty.setNative] = function (value) {
    //     this.nativeViewProtected.setOrientation(value === "vertical" ? org.nativescript.widgets.Orientation.vertical : org.nativescript.widgets.Orientation.horizontal);
    // };
    return FoldingCell;
}(folding_cell_common_1.FoldingCellCommon));
exports.FoldingCell = FoldingCell;
//# sourceMappingURL=stack-layout.android.js.map
