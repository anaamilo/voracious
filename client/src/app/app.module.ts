import "materialize-css";
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './routes';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SessionService} from '../services/session.service'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
