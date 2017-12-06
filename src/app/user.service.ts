import { Injectable } from '@angular/core'; 
import { DialogRef } from 'ngx-modialog/src/models/dialog-ref';

@Injectable() 
export class appService {  
    name:string = "";
    myModal:DialogRef<any> ;
    closeModal():void{
        this.myModal.close();
    }
}