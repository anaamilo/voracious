import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import { Router } from '@angular/router';
import $ from 'jquery';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: string;
  username:string;
  password:string;
  newUser = {
    username: '',
    password: '',
    name: '',
    lastname: '',
    email: '',
    city: '',
    description: '',
    birthdate: new Date()
  };

  start = '';

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
    $('.datepicker').pickadate({
   selectMonths: true,
   selectYears: 10
 });
  }

  login() {
    this.session.login(this.username,this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

  signup() {
    console.log(this.newUser);
    this.session.signup(this.newUser)
    .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
      this.router.navigate(['/home']);
      console.log(`${this.username} is created`)
  }

  logout() {
    this.session.logout()
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
}
}
