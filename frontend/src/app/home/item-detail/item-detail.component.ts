import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

import { DataService } from "../../shared/data.service";

@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    items = [];

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private _itemService: DataService
    ) { }

    // ngOnInit(): void {
    //     const id = +this._route.snapshot.params.id;
        
    // }
    ngOnInit(): void {
        this._itemService.getItems().subscribe((res: any) => {
            console.log(res);
            this.items = res;
        });
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
