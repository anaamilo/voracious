import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodListComponent } from './food-list/food-list.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodActivationService} from '../services/food-activation.service';
import { FoodCategoryComponent } from './food-category/food-category.component';



export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'api/foods/category/:foodCategory', component: FoodCategoryComponent },
  {
    path: 'profile', component: UserprofileComponent,
    // canActivate: [FoodActivationService]
  },
  { path: 'foods', component: FoodListComponent },
  { path: 'foods/add', component: NewFoodComponent },
  {
    path: 'foods/:id', component: FoodDetailsComponent,
    canActivate: [FoodActivationService]
  },
  { path: '**', redirectTo: '' }
];
