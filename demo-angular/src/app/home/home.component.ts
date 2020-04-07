import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { ListView } from "@nativescript/core/ui/list-view/list-view"
import { isAndroid } from "tns-core-modules/ui/page/page";
// import { Foldingcell } from "nativescript-foldingcell/foldingcell.android"

// registerElement("FoldingCell", () => require('nativescript-foldingcell/foldingcell.android'));

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})


export class HomeComponent implements OnInit {

    items;

    constructor() {
        // Use the component constructor to inject providers.
        this.items = [];
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.items = [{ 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }, { 'g': 1 }]
    }

    onLoaded(args: any) {
        console.log('Loaed')
        // var fc = args.object;
        // fc.height = 200;
    }

    onListLoaded(args: any) {
        var list = args.object;
        console.log('FoldingCelllist:::', list.ios);
        // var la = list.android;
        // la.setClipChildren(false);
        // la.setClipToPadding(false);
    }

    onTap(args: any) {
        console.log("Tapped:::", args.object)
        var fc = args.object;
        if (isAndroid) {
            fc.android.toggle(false);
        }
    }
}
