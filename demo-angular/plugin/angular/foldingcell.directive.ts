import { Directive } from "@angular/core"; // TODO: check require .Directive without hacks

@Directive({
    selector: "FoldingCell"
})
export class FoldingCellDirective { }


@Directive({
    selector: "FoldingCellItem"
})
export class FoldingCellItemDirective { }

export const DIRECTIVES = [FoldingCellDirective, FoldingCellItemDirective];