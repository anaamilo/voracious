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
<<<<<<< HEAD
        (user) => this.router.navigate(['/home']),
        (err) => this.error = err
      );

      console.log(`${this.username} is logged`)
=======
        (user) =>   this.router.navigate(['/home']),
        (err) => this.error = err
      );
      console.log(`${this.username} incorrect user`)
>>>>>>> ea2c2b6fa39fa8323227a5b4d6e58f9156ee64f0
    }
  }
