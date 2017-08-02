import { Component, OnInit } from '@angular/core';
// import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  // uploader: FileUploader = new FileUploader({
  //   url: `${environment.BASE_URL}/api/foods/`
  // });

  newFood = {
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

  constructor(public router:Router) { }


  ngOnInit() {
    };



  submit(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newFood.foodName);
      form.append('category', this.newFood.foodCategory);
      form.append('SubCategory', this.newFood.foodSubCategory);
      form.append('user id', this.newFood.foodCreator);
      form.append('price', this.newFood.price);
      form.append('rate', this.newFood.rate);
      form.append('imgAvatar', this.newFood.imgAvatar);
      form.append('restaurant name', this.newFood.restaurantName);
      form.append('restaurant address', this.newFood.restaurantAddress);
      form.append('restaurant foodname', this.newFood.restaurantFoodName);
      form.append('review', this.newFood.review);
      ;
    };

}

}
