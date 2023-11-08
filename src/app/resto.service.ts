import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/restaurants"
  constructor(private http:HttpClient) { }
    getList(){
      console.warn("some")
      return this.http.get(this.url);
    }
   saveResto(data:any){
    console.warn("service ",data);
   return this.http.post(this.url,data);
   }
   deleteResto(id:any){
    
      return this.http.delete('http://localhost:3000/restaurants/'+id);
   }
}
