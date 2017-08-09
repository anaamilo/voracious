import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import $ from 'jquery';


@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

uploader: FileUploader = new FileUploader({
  url: `http://localhost:3000/api/foods`
 });
  error: string;
  foodName: string;
  newFood = {
    foodName: '',
    foodCategory: '',
    foodSubCategory: '',
    price:'',
    rate:'',
    imgAvatar:'',
    restaurantName:'',
    restaurantAddress:'',
    restaurantFoodName:'',
    review:'',
  };

  feedback: string;

  constructor(
    private foodService: FoodService,
    public router:Router) {}


  ngOnInit() {

    $('select').material_select();
  $('select').change((e) => {
       this.newFood[e.currentTarget.name] = e.currentTarget.value;
  });

  }



  createFood(food){
    console.log(this.newFood)
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('foodName', this.newFood.foodName);
      form.append('foodCategory', this.newFood.foodCategory);
      form.append('foodSubCategory', this.newFood.foodSubCategory);
      // form.append('user id', this.newFood.foodCreator);
      form.append('price', this.newFood.price);
      form.append('rate', this.newFood.rate);
      form.append('imgAvatar', this.newFood.imgAvatar);
      form.append('restaurantName', this.newFood.restaurantName);
      form.append('restaurantAddress', this.newFood.restaurantAddress);
      form.append('restaurantFoodName', this.newFood.restaurantFoodName);
      form.append('review', this.newFood.review);
    };
    this.uploader.uploadAll();
    this.router.navigate(['/foods']);

  }

}
