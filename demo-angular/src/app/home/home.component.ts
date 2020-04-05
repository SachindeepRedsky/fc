import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
// import { Foldingcell } from "nativescript-foldingcell/foldingcell.android"

// registerElement("FoldingCell", () => require('nativescript-foldingcell/foldingcell.android'));

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onLoaded(args: any) {
        console.log('Loaed')
    }

    onTap(args: any) {
        console.log("Tapped:::", args.object)
        var fc = args.object;
        fc.android.toggle(false);
        
    }
}
