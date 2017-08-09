import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import $ from 'jquery'

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  food: any;
  Food = {
    foodName: '',
    foodCategory: '',
    foodSubCategory: '',
    foodCreator:'',
    price:'',
    rate:'',
    imgAvatar:'',
    restaurantName:'',
    restaurantAddress:'',
    restaurantFoodName:'',
    review:'',
  };

  constructor(
    private foodService: FoodService,
    private router : Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.editFood(params['id']);
      });

      $('select').material_select();
    $('select').change((e) => {
         this.food[e.currentTarget.name] = e.currentTarget.value;
    });


    }

    editFood(id) {
      this.foodService.edit(id)
        .subscribe((food) => {
          this.food = food;
        });
    }


  }
