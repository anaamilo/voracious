import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class FoodService{
   BASE_URL:string = environment.BASE_URL;

   constructor(private http: Http) {}

   getList() {
     return this.http.get(`${this.BASE_URL}/api/foods`)
       .map((res) => res.json());
   }

   get(id) {
     return this.http.get(`${this.BASE_URL}/api/foods/${id}`)
       .map((res) => res.json());
   }

   edit(food) {
     return this.http.put(`${this.BASE_URL}/api/foods/${food.id}`, food)
       .map((res) => res.json());
   }

   remove(id) {
     return this.http.delete(`${this.BASE_URL}/api/food/${id}`)
       .map((res) => res.json());
   }
}
