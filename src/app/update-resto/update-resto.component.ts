import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent {
  [x: string]: any;
  editResto = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  
   })
   
}
