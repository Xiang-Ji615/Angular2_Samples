import { Component, ViewContainerRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { ServerComponent } from './customdatatable.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public modal: Modal) { 
   
  }

  onClick(){
    this.modal.open(ServerComponent);
  }
}
