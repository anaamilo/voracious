import { Component, OnInit } from '@angular/core';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Observable } from 'rxjs';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  locations: Object
  products: Observable<Array<Object>>;

  constructor(private foodService: FoodService) {
    this.locations = {};
  }
  ngOnInit() {
    this.foodService.getSearch().subscribe(searchList => {
      searchList.map(e => {
        this.locations[e.foodName] = null;
      });
      console.log(this.locations)
    })
    this.locations = { 'apple': null, 'google': null };
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.products = this.foodService.getFoodName(searchTerm.value)
  }

}
