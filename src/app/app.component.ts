import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';


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
    this.modal.alert()
    .title('Hello World')
    .body('In Angular')
    .open();
  }
}
