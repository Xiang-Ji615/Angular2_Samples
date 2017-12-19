import { Component, OnInit, AfterViewInit, AfterViewChecked } from "@angular/core";
import { Http } from "@angular/http";
import * as _ from "lodash";
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { appService } from './user.service';
import { AppComponent } from './app.component';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';


@Component({
    selector: 'datatable',
    templateUrl: 'customdatatable.component.html'
})
export class ServerComponent implements OnInit, AfterViewInit  {
public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public activePage = 1;
    public sortBy = "name";
    public sortOrder = "asc";
    public itemsTotal = 0;
    constructor(private http: Http, public _appService: appService) {
       
    }

    
    ngOnInit(): void {
        this.loadData();
    }

    ngAfterViewInit() {
        // $('#table1').DataTable({
        //     responsive: true,
        //     // "scrollX":true,
        //     "searching": false, 
        //     "paging": false
        // });
        $('#focusField').focus();
     }

     
    ngAfterViewChecked() {
       
     }


    public loadData() {
        this.http.get("http://localhost:9090/Rest/V1/GetUsers")
            .subscribe((data) => {
                setTimeout(() => {
                    this.data = _.orderBy(data.json(), this.sortBy, [this.sortOrder]);
                    this.data = _.slice(this.data, this.activePage, this.activePage + this.rowsOnPage);
                    this.itemsTotal = data.json().length;
                }, 200);
            });
    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item) {
        // let index = this.data.indexOf(item);
        // if (index > -1) {
        //     this.data.splice(index, 1);
        // }
        this._appService.userModel.name = item.email;
        this._appService.userModel.age = item.agel;
        this._appService.userModel.city = item.city;
        this._appService.userModel.name = item.name;
        // console.log(this._appService);
        this._appService.closeModal();
    
    }
    public onSortOrder(event) {
        this.loadData();
    }
    public onPageChange(event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.loadData();
    }

    public startSearch(event){
        console.log(event);
        this.http.get("http://localhost:9090/Rest/V1/GetUsers?search="+this.filterQuery)
        .subscribe((data) => {
            setTimeout(() => {
                this.data = _.orderBy(data.json(), this.sortBy, [this.sortOrder]);
                // console.log(this.data);
                if(this.filterQuery.trim() == ''){
                   this.rowsOnPage = 10;
                   this.activePage=1;
                   this.data = _.slice(this.data, this.activePage, this.activePage + this.rowsOnPage);
                 
                }
                // console.log(this.data);
                else{
                    this.activePage=1;
                    console.log(data.json());
                    this.itemsTotal = data.json().length;
                    this.rowsOnPage = data.json().length;
                }
              
            }, 200);
        });

    }

    onSelectionChange(item) {
        this._appService.item = item;
        this._appService.closeModal();
    }

}