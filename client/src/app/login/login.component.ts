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
              // console.log(`${this.username} is logged`);
        (user) => this.router.navigate(['/home']),
        (err) => this.error = err
        // console.log(`${this.username} incorrect user`);;
      );

<<<<<<< HEAD
      console.log(`${this.username} is logged`);
        (user) =>   this.router.navigate(['/home']);
        (err) => this.error = err


      console.log(`${this.username} is logged`);

        (user) =>   this.router.navigate(['/home']);
        (err) => this.error = err;

      console.log(`${this.username} incorrect user`);
=======
>>>>>>> 92f9d1817a44a540e2aa697eb100ec4bdfe93a29

    }
  }
