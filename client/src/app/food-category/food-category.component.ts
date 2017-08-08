import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  foods: Observable<Array<object>>;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public foodService: FoodService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getFoodCategory(params['foodCategory']);
      console.log(params);
    });
  }

  getFoodCategory(foodCategory) {
    console.log("COMPONENT", foodCategory)
    this.foodService.getFoodCategory(foodCategory)
      .subscribe((foods) => {
        console.log(foods)
        this.foods = foods;
      });
  }

}
