import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import { FoodListComponent } from './food-list/food-list.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'foods', component: FoodListComponent },
    { path: '**', redirectTo: '' }
];
