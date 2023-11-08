import { Component } from '@angular/core';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
  collections:any={};
    constructor(private resto:RestoService){
       this.resto.getList().subscribe((result: any)=>{
       console.warn(result)
      this.collections=result;
       });
       }

  deleteResto(items:any){
    this.collections.splice(items-1,1);
     this.resto.deleteResto(items).subscribe((result: any):any=>{
      console.warn("result",result)
     })
  }
}
