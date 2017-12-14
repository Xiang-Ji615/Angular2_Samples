import { Injectable } from '@angular/core'; 
import { DialogRef } from 'ngx-modialog/src/models/dialog-ref';

@Injectable() 
export class appService {  
    userModel = {name:"", email:"", city:"", age:""}
    item ={name:"", email:"", city:"", age:""};
    myModal:DialogRef<any> ;
    closeModal():void{
        this.myModal.close();
    }
}