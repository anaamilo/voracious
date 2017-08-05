import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  food:any;

  constructor(private route: ActivatedRoute, private foodService: FoodService) {
  }

  ngOnInit() {
    this.route.data.subscribe((resolved) => {
        this.food = resolved['food'];
      });
    }
}
