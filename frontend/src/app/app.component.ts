import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    android: any;


    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Init your component properties here.
       
        app.android.startActivity.getWindow().setFlags(
            this.android.view.WindowManager.LayoutParams.FLAG_SECURE,
            this.android.view.WindowManager.LayoutParams.FLAG_SECURE
        );
    }
}
