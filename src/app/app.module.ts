import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NG2DataTableModule} from "angular2-datatable-pagination";

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { HttpModule } from "@angular/http";
import { ServerComponent } from './customdatatable.component';
import { FormsModule } from '@angular/forms';
import { appService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule, NG2DataTableModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    HttpModule,
    FormsModule
  ],
  providers: [ appService ],
  bootstrap: [AppComponent],
  entryComponents: [ ServerComponent ]
})
export class AppModule { }
