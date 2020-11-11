import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["../../app.android.scss"]
})
export class HomeComponent implements OnInit {
    items = [];

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this._itemService.getItems().subscribe((res: any) => {
            console.log(res);
            this.items = res;
        });
    }
}
