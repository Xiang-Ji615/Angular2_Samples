import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import * as _ from "lodash";

@Component({
    selector: 'datatable',
    templateUrl: 'customdatatable.component.html'
})
export class ServerComponent implements OnInit {
public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public activePage = 1;
    public sortBy = "email";
    public sortOrder = "asc";
    public itemsTotal = 0;
    constructor(private http: Http) {
    }

    
    ngOnInit(): void {
        this.loadData();
    }

    public loadData() {
        this.http.get("http://localhost:8080/Rest/V1/GetUsers")
            .subscribe((data) => {
                setTimeout(() => {

                    this.data = _.orderBy(data.json(), this.sortBy, [this.sortOrder]);
                    this.data = _.slice(this.data, this.activePage, this.activePage + this.rowsOnPage);
                    this.itemsTotal = data.json().length;
                }, 1000);
            });
    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
    public onSortOrder(event) {
        this.loadData();
    }
    public onPageChange(event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.loadData();
    }

}