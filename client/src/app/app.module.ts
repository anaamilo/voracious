import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SessionService} from '../services/session.service'
import { AppComponent } from './app.component';
import { AuthAppComponent } from './auth-app/auth-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
