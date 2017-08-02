import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
