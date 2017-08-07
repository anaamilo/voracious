import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';


export interface Food{
   _id:string,

 }

@Injectable()
export class FoodService {
  food:Food;
   BASE_URL:string = `${environment.BASE_URL}/api/foods`;
   options:object = {withCredentials:true};


   constructor(private http: Http) {}

   handleError(e) {
     return Observable.throw(e.json().message);
   }

   getList() {
     return this.http.get(`${this.BASE_URL}`)
       .map((res) => res.json());
   }

   createFood(food):Observable<Food>{
     return this.http.post(`${this.BASE_URL}`, food,this.options)
     .map(res => res.json())
     .catch(this.handleError);
 }


   get(id) {
     return this.http.get(`${this.BASE_URL}/${id}`)
       .map((res) => res.json());
   }

   edit(food) {
     return this.http.put(`${this.BASE_URL}/${food.id}`, food)
       .map((res) => res.json());
   }

   remove(id) {
     return this.http.delete(`${this.BASE_URL}/${id}`)
       .map((res) => res.json());
   }
}
