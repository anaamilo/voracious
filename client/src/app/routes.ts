import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'foods', component: FoodListComponent },
  { path: 'foods/add', component: NewFoodComponent },
  { path: 'foods/:id', component: FoodDetailsComponent },
  { path: '**', redirectTo: '' }
];
