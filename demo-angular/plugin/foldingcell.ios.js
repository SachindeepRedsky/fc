// import { FoldingCellCommon } from 'nativescript-foldingcell/foldingcell.common';

// export class Foldingcell extends FoldingCellCommon {

// }

"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view_1 = require("@nativescript/core/ui/core/view");
var utils = require("utils/utils");
var folding_list_view_common_1 = require("./foldingcell.common");
__export(require("./foldingcell.common"));

var FoldingCellExtended = (function (_super) {
    __extends(FoldingCellExtended, _super);
    function FoldingCellExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Object.defineProperty(FoldingCellExtended.prototype, "foregroundViewTNS", {
    //     get: function () {
    //         return this.foregroundViewWeakRef ? this.foregroundViewWeakRef.get() : null;
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // Object.defineProperty(FoldingCellExtended.prototype, "containerViewTNS", {
    //     get: function () {
    //         return this.containerViewWeakRef ? this.containerViewWeakRef.get() : null;
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // FoldingListViewCell.prototype.willMoveToSuperview = function (newSuperview) {
    //     var parent = (this.foregroundViewTNS ? this.foregroundViewTNS.parent : null);
    //     if (parent && !newSuperview) {
    //         parent._removeContainer(this);
    //     }
    // };
    FoldingCellExtended.prototype.resetNativeViews = function (cellHeight) {
        // var parent = (this.foregroundViewTNS ? this.foregroundViewTNS.parent : null);
        // for (var loop = this.contentView.subviews.count - 1; loop >= 0; loop--) {
        //     this.contentView.subviews.objectAtIndex(loop).removeFromSuperview();
        // }
        this._createForegroundView(75);
        this._createContainerView(75);
        // this.backViewColor = parent.backViewColor.ios;
        this.commonInit();
    };
    FoldingCellExtended.prototype.resetContainerViewHeightContraint = function (newHeight) {
        var topConstraintValue = view_1.layout.toDeviceIndependentPixels(this.containerViewTNS._constraintTop);
        if (this._containerViewHeightConstraints) {
            NSLayoutConstraint.deactivateConstraints(this._containerViewHeightConstraints);
        }
        this._containerViewHeightConstraints = NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:[layer(==" + (view_1.layout.toDeviceIndependentPixels(newHeight) - topConstraintValue) + ")]", 0, null, { layer: this.containerView });
        NSLayoutConstraint.activateConstraints(this._containerViewHeightConstraints);
    };
    FoldingCellExtended.prototype.animationDurationType = function (itemIndex, type) {
        var parent = (this.foregroundViewTNS ? this.foregroundViewTNS.parent : null);
        return parent.foldAnimationDuration / 1000;
    };
    FoldingCellExtended.prototype._bindContainerView = function (index, dataItem) {
        var containerView = this.containerViewTNS;
        var parent = containerView.parent;
        var width = view_1.layout.getMeasureSpecSize(parent.widthMeasureSpec);
        containerView.bindingContext = dataItem;
        var size = parent._measureConstraintedChild(containerView, infinity);
        var cellHeight = parent.getHeight(index);
        cellHeight.container = size.measuredHeight + containerView._constraintTop;
        parent.setHeight(index, cellHeight);
        if (containerView && containerView.isLayoutRequired) {
            parent._layoutConstraintedView(containerView, width, cellHeight.container);
        }
        this.resetContainerViewHeightContraint(cellHeight.container);
    };
    FoldingCellExtended.prototype._initForegroundView = function (height) {
        var topConstraintValue = view_1.layout.toDeviceIndependentPixels(this.foregroundViewTNS._constraintTop);
        var foregroundView = RotatedView.alloc().initWithFrame(CGRectZero);
        foregroundView.translatesAutoresizingMaskIntoConstraints = false;
        foregroundView.addSubview(this.foregroundViewTNS.nativeViewProtected);
        this.contentView.addSubview(foregroundView);
        NSLayoutConstraint.activateConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:[layer(==" + (view_1.layout.toDeviceIndependentPixels(height) - topConstraintValue) + ")]", 0, null, { layer: foregroundView }));
        NSLayoutConstraint.activateConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("H:|-" + view_1.layout.toDeviceIndependentPixels(this.foregroundViewTNS._constraintLeft) + "-[layer]-" + view_1.layout.toDeviceIndependentPixels(this.foregroundViewTNS._constraintRight) + "-|", 0, null, { layer: foregroundView }));
        var top = NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:|-" + topConstraintValue + "-[layer]", 0, null, { layer: foregroundView });
        NSLayoutConstraint.activateConstraints(top);
        this.foregroundView = foregroundView;
        this.foregroundViewTop = top.objectAtIndex(0);
    };

    FoldingCellExtended.prototype._createForegroundView = function (height) {
        height=75;
        var topConstraintValue = view_1.layout.toDeviceIndependentPixels(10);
        var foregroundView = RotatedView.alloc().initWithFrame(CGRectZero);
        foregroundView.translatesAutoresizingMaskIntoConstraints = false;
        // foregroundView.addSubview(this.foregroundViewTNS.nativeViewProtected);
        this.contentView.addSubview(foregroundView);
        NSLayoutConstraint.activateConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:[layer(==" + (view_1.layout.toDeviceIndependentPixels(height) - topConstraintValue) + ")]", 0, null, { layer: foregroundView }));
        NSLayoutConstraint.activateConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("H:|-" + view_1.layout.toDeviceIndependentPixels(20) + "-[layer]-" + view_1.layout.toDeviceIndependentPixels(20) + "-|", 0, null, { layer: foregroundView }));
        var top = NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:|-" + topConstraintValue + "-[layer]", 0, null, { layer: foregroundView });
        NSLayoutConstraint.activateConstraints(top);
        this.foregroundView = foregroundView;
        this.foregroundViewTop = top.objectAtIndex(0);
    };
    FoldingCellExtended.prototype._initContainerView = function (height) {
        var topConstraintValue = view_1.layout.toDeviceIndependentPixels(this.containerViewTNS._constraintTop);
        var containerView = UIView.alloc().initWithFrame(CGRectZero);
        containerView.translatesAutoresizingMaskIntoConstraints = false;
        containerView.addSubview(this.containerViewTNS.nativeViewProtected);
        this.contentView.addSubview(containerView);
        this.containerView = containerView;
        this.resetContainerViewHeightContraint(height);
        NSLayoutConstraint.activateConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("H:|-" + view_1.layout.toDeviceIndependentPixels(this.containerViewTNS._constraintLeft) + "-[layer]-" + view_1.layout.toDeviceIndependentPixels(this.containerViewTNS._constraintRight) + "-|", 0, null, { layer: containerView }));
        var top = NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:|-" + topConstraintValue + "-[layer]", 0, null, { layer: containerView });
        NSLayoutConstraint.activateConstraints(top);
        this.containerViewTop = top.objectAtIndex(0);
        containerView.layoutIfNeeded();
    };

    FoldingCellExtended.prototype._createContainerView = function (height) {
        height=75
        var topConstraintValue = view_1.layout.toDeviceIndependentPixels(20);
        var containerView = UIView.alloc().initWithFrame(CGRectZero);
        containerView.translatesAutoresizingMaskIntoConstraints = false;
        // containerView.addSubview(this.containerViewTNS.nativeViewProtected);
        this.contentView.addSubview(containerView);
        this.containerView = containerView;
        this.resetContainerViewHeightContraint(height);
        NSLayoutConstraint.activateConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("H:|-" + view_1.layout.toDeviceIndependentPixels(10) + "-[layer]-" + view_1.layout.toDeviceIndependentPixels(10) + "-|", 0, null, { layer: containerView }));
        var top = NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews("V:|-" + topConstraintValue + "-[layer]", 0, null, { layer: containerView });
        NSLayoutConstraint.activateConstraints(top);
        this.containerViewTop = top.objectAtIndex(0);
        containerView.layoutIfNeeded();
    };
    return FoldingCellExtended;
}(FoldingCell));
// exports.FoldingCell = FoldingCellExtended;




// var FoldingCellCommon = (function (_super) {
//     __extends(FoldingCellCommon, _super);
//     function FoldingCellCommon() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     FoldingCellCommon = __decorate([
//         layout_base_1.CSSType("FoldingCell")
//     ], FoldingCellCommon);
//     return FoldingCellCommon;
// }(FoldingCell));
// exports.FoldingCellCommon = FoldingCellCommon;




var FoldingCellView = (function (_super) {
    __extends(FoldingCellView, _super);
    function FoldingCellView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._totalLength = 0;
        return _this;
    }

    FoldingCellView.prototype.createNativeView = function () {
        var fcv = FoldingCellExtended.new().init(UITableViewCellStyleDefault,'Reuse');
        // fcv.resetNativeViews(90);
        // imageView.contentMode = 1;
        // imageView.userInteractionEnabled = true;
        return fcv;
    };
    FoldingCellView.prototype.initNativeView = function () {
        this._createForegroundView(75);
        this._createContainerView(75);
        // this.backViewColor = parent.backViewColor.ios;
        this.commonInit();      
          // _super.prototype.initNativeView.call(this);
        // this._setNativeClipToBounds();
    };
    FoldingCellView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = folding_list_view_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = folding_list_view_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = folding_list_view_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = folding_list_view_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var isVertical = this.orientation === "vertical";
        var horizontalPaddingsAndMargins = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalPaddingsAndMargins = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var measureSpec;
        var mode = isVertical ? heightMode : widthMode;
        var remainingLength;
        if (mode === folding_list_view_common_1.layout.UNSPECIFIED) {
            measureSpec = folding_list_view_common_1.layout.UNSPECIFIED;
            remainingLength = 0;
        }
        else {
            measureSpec = folding_list_view_common_1.layout.AT_MOST;
            remainingLength = isVertical ? height - verticalPaddingsAndMargins : width - horizontalPaddingsAndMargins;
        }
        var childMeasureSpec;
        var childWidth = (widthMode === folding_list_view_common_1.layout.UNSPECIFIED) ? 0 : width - horizontalPaddingsAndMargins;
        childWidth = Math.max(0, childWidth);
        childMeasureSpec = folding_list_view_common_1.layout.makeMeasureSpec(childWidth, widthMode);

        // if (isVertical) {
        //     var childWidth = (widthMode === folding_list_view_common_1.layout.UNSPECIFIED) ? 0 : width - horizontalPaddingsAndMargins;
        //     childWidth = Math.max(0, childWidth);
        //     childMeasureSpec = folding_list_view_common_1.layout.makeMeasureSpec(childWidth, widthMode);
        // }
        // else {
        //     var childHeight = (heightMode === folding_list_view_common_1.layout.UNSPECIFIED) ? 0 : height - verticalPaddingsAndMargins;
        //     childHeight = Math.max(0, childHeight);
        //     childMeasureSpec = folding_list_view_common_1.layout.makeMeasureSpec(childHeight, heightMode);
        // }
        var childSize;
        this.eachLayoutChild(function (child, last) {
            // if (isVertical) {
                childSize = folding_list_view_common_1.View.measureChild(_this, child, childMeasureSpec, folding_list_view_common_1.layout.makeMeasureSpec(remainingLength, measureSpec));
                if (measureSpec === folding_list_view_common_1.layout.AT_MOST && _this.isUnsizedScrollableView(child)) {
                    trace.write("Avoid using ListView or ScrollView with no explicit height set inside StackLayout. Doing so might result in poor user interface performance and poor user experience.", trace.categories.Layout, trace.messageType.warn);
                }
                measureWidth = Math.max(measureWidth, childSize.measuredWidth);
                var viewHeight = childSize.measuredHeight;
                measureHeight += viewHeight;
                remainingLength = Math.max(0, remainingLength - viewHeight);
            // }
            // else {
            //     childSize = folding_list_view_common_1.View.measureChild(_this, child, folding_list_view_common_1.layout.makeMeasureSpec(remainingLength, measureSpec), childMeasureSpec);
            //     measureHeight = Math.max(measureHeight, childSize.measuredHeight);
            //     var viewWidth = childSize.measuredWidth;
            //     measureWidth += viewWidth;
            //     remainingLength = Math.max(0, remainingLength - viewWidth);
            // }
        });
        measureWidth += horizontalPaddingsAndMargins;
        measureHeight += verticalPaddingsAndMargins;
        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);
        this._totalLength = isVertical ? measureHeight : measureWidth;
        var widthAndState = folding_list_view_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = folding_list_view_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    FoldingCellView.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var insets = this.getSafeAreaInsets();
        this.layoutVertical(left, top, right, bottom, insets);

        // if (this.orientation === "vertical") {
        //     this.layoutVertical(left, top, right, bottom, insets);
        // }
        // else {
        //     this.layoutHorizontal(left, top, right, bottom, insets);
        // }
    };
    FoldingCellView.prototype.layoutVertical = function (left, top, right, bottom, insets) {
        var _this = this;
        var paddingLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft + insets.left;
        var paddingTop = this.effectiveBorderTopWidth + this.effectivePaddingTop + insets.top;
        var paddingRight = this.effectiveBorderRightWidth + this.effectivePaddingRight + insets.right;
        var paddingBottom = this.effectiveBorderBottomWidth + this.effectivePaddingBottom + insets.bottom;
        var childTop;
        var childLeft = paddingLeft;
        var childRight = right - left - paddingRight;
        switch (this.verticalAlignment) {
            case folding_list_view_common_1.VerticalAlignment.MIDDLE:
                childTop = (bottom - top - this._totalLength) / 2 + paddingTop - paddingBottom;
                break;
            case folding_list_view_common_1.VerticalAlignment.BOTTOM:
                childTop = bottom - top - this._totalLength + paddingTop - paddingBottom;
                break;
            case folding_list_view_common_1.VerticalAlignment.TOP:
            case folding_list_view_common_1.VerticalAlignment.STRETCH:
            default:
                childTop = paddingTop;
                break;
        }
        this.eachLayoutChild(function (child, last) {
            var childHeight = child.getMeasuredHeight() + child.effectiveMarginTop + child.effectiveMarginBottom;
            folding_list_view_common_1.View.layoutChild(_this, child, childLeft, childTop, childRight, childTop + childHeight);
            childTop += childHeight;
        });
    };
    // FoldingCellView.prototype.layoutHorizontal = function (left, top, right, bottom, insets) {
    //     var _this = this;
    //     var paddingLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft + insets.left;
    //     var paddingTop = this.effectiveBorderTopWidth + this.effectivePaddingTop + insets.top;
    //     var paddingRight = this.effectiveBorderRightWidth + this.effectivePaddingRight + insets.right;
    //     var paddingBottom = this.effectiveBorderBottomWidth + this.effectivePaddingBottom + insets.bottom;
    //     var childTop = paddingTop;
    //     var childLeft;
    //     var childBottom = bottom - top - paddingBottom;
    //     switch (this.horizontalAlignment) {
    //         case folding_list_view_common_1.HorizontalAlignment.CENTER:
    //             childLeft = (right - left - this._totalLength) / 2 + paddingLeft - paddingRight;
    //             break;
    //         case folding_list_view_common_1.HorizontalAlignment.RIGHT:
    //             childLeft = right - left - this._totalLength + paddingLeft - paddingRight;
    //             break;
    //         case folding_list_view_common_1.HorizontalAlignment.LEFT:
    //         case folding_list_view_common_1.HorizontalAlignment.STRETCH:
    //         default:
    //             childLeft = paddingLeft;
    //             break;
    //     }
    //     this.eachLayoutChild(function (child, last) {
    //         var childWidth = child.getMeasuredWidth() + child.effectiveMarginLeft + child.effectiveMarginRight;
    //         folding_list_view_common_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childBottom);
    //         childLeft += childWidth;
    //     });
    // };
    FoldingCellView.prototype.isUnsizedScrollableView = function (child) {
        if (child.height === "auto" && (child.ios instanceof UITableView || child.ios instanceof UIScrollView)) {
            return true;
        }
        return false;
    };
    return FoldingCellView;
}(folding_list_view_common_1.FoldingCellCommon));
exports.FoldingCell = FoldingCellView;



var FoldingListViewDelegate = (function (_super) {
    __extends(FoldingListViewDelegate, _super);
    function FoldingListViewDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FoldingListViewDelegate_1 = FoldingListViewDelegate;
    FoldingListViewDelegate.initWithOwner = function (owner) {
        var delegate = FoldingListViewDelegate_1.new();
        delegate._owner = owner;
        return delegate;
    };
    FoldingListViewDelegate.prototype.tableViewHeightForRowAtIndexPath = function (tableView, indexPath) {
        var owner = this._owner.get();
        var cellHeight = owner.getHeight(indexPath.row);
        if (!cellHeight) {
            return view_1.layout.toDeviceIndependentPixels(owner._effectiveFoldedRowHeight);
        }
        return view_1.layout.toDeviceIndependentPixels(owner._getIsCellExpandedIn(indexPath.row) ? cellHeight.container : cellHeight.foreground);
    };
    FoldingListViewDelegate.prototype.tableViewDidSelectRowAtIndexPath = function (tableView, indexPath) {
        var _this = this;
        var cell = tableView.cellForRowAtIndexPath(indexPath);
        var owner = this._owner.get();
        if (cell.isAnimating()) {
            return;
        }
        var isExpandedIn = !owner._getIsCellExpandedIn(indexPath.row);
        var index = indexPath.row;
        if (isExpandedIn && owner.detailDataLoader) {
            owner._getDetailDataLoaderPromise(index)
                .then(function (value) {
                cell._bindContainerView(index, value);
                owner._setCachedDetailData(index, value);
                setTimeout(function () { _this._performCellUnfold(cell, index, isExpandedIn); }, 1);
            })
                .catch(function (e) { console.error("ERROR LOADING DETAILS:", e); });
        }
        else {
            this._performCellUnfold(cell, index, isExpandedIn);
        }
        if (!isExpandedIn) {
            owner.invalidateChachedDetailData(index);
        }
    };
    FoldingListViewDelegate.prototype.tableViewWillDisplayCellForRowAtIndexPath = function (tableView, cell, indexPath) {
        var foldingCell = cell;
        var owner = this._owner.get();
        var isExpandedIn = owner._getIsCellExpandedIn(indexPath.row);
        if (owner && (indexPath.row === owner.items.length - 1)) {
            owner.notify({
                eventName: folding_list_view_common_1.FoldingListViewBase.loadMoreItemsEvent,
                object: owner,
            });
        }
        foldingCell.unfoldAnimatedCompletion(isExpandedIn, false, null);
    };
    FoldingListViewDelegate.prototype._performCellUnfold = function (cell, index, isExpandedIn) {
        var owner = this._owner.get();
        if (owner.toggleMode && isExpandedIn) {
            var expandedIndex_1 = owner._cellExpanded.findIndex(function (value) { return value; });
            var expandedCell_1;
            owner._map.forEach(function (value, key) {
                if (value.index === expandedIndex_1) {
                    expandedCell_1 = key;
                }
            });
            if (!expandedCell_1) {
                owner._setIsCellExpandedIn(expandedIndex_1, false);
            }
            else {
                this._performCellUnfold(expandedCell_1, expandedIndex_1, false);
            }
        }
        owner._setIsCellExpandedIn(index, isExpandedIn);
        cell.unfoldAnimatedCompletion(isExpandedIn, true, null);
        var duration = owner.foldsCount * (owner.foldAnimationDuration / 1000);
        if (isExpandedIn) {
            duration /= 2;
        }
        UIView.animateWithDurationDelayOptionsAnimationsCompletion(duration, 0, 131072, function () {
            owner.ios.beginUpdates();
            owner.ios.endUpdates();
        }, null);
    };
    FoldingListViewDelegate = FoldingListViewDelegate_1 = __decorate([
        ObjCClass(UITableViewDelegate)
    ], FoldingListViewDelegate);
    return FoldingListViewDelegate;
    var FoldingListViewDelegate_1;
}(NSObject));
