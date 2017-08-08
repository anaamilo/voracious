import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import $ from 'jquery';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/auth/signup`
   });

  error: string;
  username:string;
  password:string;
  newUser = {
    username: '',
    password: '',
    name: '',
    avatarImage: '',
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



  signup() {
    console.log(this.newUser);
    this.session.signup(this.newUser)
    .subscribe(
        (user) =>       this.router.navigate(['/login']),
        (err) => this.error = err
      );
      console.log(`${this.username} is created`)
  }

  logout() {
    this.session.logout()
      .subscribe(
        (user) => console.log(`${user} has logged out`),
        (err) => this.error = err
      );
}
}
