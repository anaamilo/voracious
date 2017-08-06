import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';
import $ from 'jquery'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Observable<Array<object>>;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getList()
      .subscribe((foods) => {
        this.foods = foods;
      });



  }
}
