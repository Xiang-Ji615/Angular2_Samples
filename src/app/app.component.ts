import { Component, ViewContainerRef, OnInit} from '@angular/core';
import { Overlay, overlayConfigFactory } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { ServerComponent } from './customdatatable.component';
import { appService } from './user.service';
import { DialogRef } from 'ngx-modialog/src/models/dialog-ref';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = "";
  title = 'app';
  private _myModal: DialogRef<any>;
  constructor(public modal: Modal, public _appService: appService) { 
  
  }
  

  onClick(event){
    event.preventDefault();
    event.stopPropagation();
    this.modal.open(ServerComponent, overlayConfigFactory({})).then( dialog => {
    this._myModal = dialog;
    this._appService.myModal = dialog;
  });
  }

 

  logService(){
    console.log(this._appService);
    console.log(this.name);
  }

  ngOnInit(): void {
    this.name = this._appService.name;
    // console.log(this._appService);
  }
}
