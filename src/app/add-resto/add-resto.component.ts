import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {
  alert:boolean=false;
 addResto = new FormGroup({
  id:new FormControl(''),
  name: new FormControl(''),
  address:new FormControl(''),
  email:new FormControl('')

 })
 constructor(private resto:RestoService){
      
 }
 collectResto():any{
  this.resto.saveResto(this.addResto.value).subscribe((result:any):any=>{
    console.warn("result is here",result)
    this.alert=true;
    this.addResto.reset({})
  })
 }

 closeAlert(){
  this.alert=false;
 }
}
