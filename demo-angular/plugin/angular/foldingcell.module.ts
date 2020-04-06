// import { FoldingCell } from './../foldingcell.android';

import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./foldingcell.directive"

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class FoldingCellModule { }

registerElement("FoldingCell", () => require("../").FoldingCell);
// registerElement("FoldingCellItem", () => require("../").FoldingCellItem);