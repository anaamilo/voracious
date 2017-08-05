import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  username:string;
  password:string;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.username,this.password)
      .subscribe(

        (user) => this.router.navigate(['/home']),
        (err) => this.error = err
      );
<<<<<<< HEAD
      console.log(`${this.username} is logged`);
        (user) =>   this.router.navigate(['/home']);
        (err) => this.error = err
=======

      console.log(`${this.username} is logged`);

        (user) =>   this.router.navigate(['/home']);
        (err) => this.error = err;
>>>>>>> aa9f8e3a29c0002758be34fffcbd190b18396507
      console.log(`${this.username} incorrect user`);

    }
  }
