import { Directive } from "@angular/core"; // TODO: check require .Directive without hacks

@Directive({
    selector: "FoldingCell"
})
export class FoldingCellDirective { }

export const DIRECTIVES = [FoldingCellDirective];