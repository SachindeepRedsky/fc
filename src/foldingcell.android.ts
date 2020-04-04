import { FoldingCellCommon } from './foldingcell.common';
import * as utils from "tns-core-modules/utils/utils";

declare module com {
    export module ramotion {
        export module foldingcell {
            export class FoldingCell {
                constructor(params0: android.content.Context);
            }
        }
    }
}

global.moduleMerge(FoldingCellCommon, exports);


export class Foldingcell extends FoldingCellCommon {

    private _android: com.ramotion.foldingcell.FoldingCell;

    get android() {
        return this._android;
    }

    public constructor() {
        super();
    }

    public createNativeView() {
        this._android = new com.ramotion.foldingcell.FoldingCell(utils.ad.getApplicationContext());
        return this._android;
    }
}
