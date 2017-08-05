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

      console.log(`${this.username} is logged`);
        (user) =>   this.router.navigate(['/home']);
        (err) => this.error = err


      console.log(`${this.username} is logged`);

        (user) =>   this.router.navigate(['/home']);
        (err) => this.error = err;
<<<<<<< HEAD

=======
>>>>>>> 7f149f8f9733ee398aec92a50fa47a80aab235ae
      console.log(`${this.username} incorrect user`);

    }
  }
