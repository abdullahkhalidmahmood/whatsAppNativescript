import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor(private http:HttpClient){}


    // Localhost connection 
    getItems() {
        return this.http.get('http://192.168.3.239:5000/contacts');

    }

    // getItem(id: number) {
    //     return this.items.filter((item) => item.id === id)[0];
    // }
}
