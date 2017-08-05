import "materialize-css";
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from '../services/session.service';
import { FoodService } from '../services/food.service';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FileSelectDirective } from "ng2-file-upload";





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    FoodListComponent,
    NewFoodComponent,
    FoodDetailsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, FoodService],
  bootstrap: [AppComponent]
})

export class AppModule { }
