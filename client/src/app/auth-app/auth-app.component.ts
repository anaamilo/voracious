import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service'

@Component({
  selector: 'app-auth-app',
  templateUrl: './auth-app.component.html',
  styleUrls: ['./auth-app.component.css']
})
export class AuthAppComponent implements OnInit {
  error: string;
  username:string;
  password:string;

  constructor(private session: SessionService) { }
  ngOnInit() {
  }

  login() {
    this.session.login(this.username,this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

  signup() {
    this.session.signup(this.username, this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

  logout() {
    this.session.logout()
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
}

}
