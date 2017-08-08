import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

food:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getFoodCategory(params['category']);
    });
  }
  getFoodCategory(category) {
    this.foodService.get(category)
      .subscribe((food) => {
        console.log(food)
        this.food = food;
      });
  }

}
