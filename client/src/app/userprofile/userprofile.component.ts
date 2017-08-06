import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionService} from '../../services/session.service'


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
user: any;
  constructor(private router: Router, private sessionService: SessionService) {

   }

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe( (user:any) =>{
      console.log(`Welcome again user ${user.username}`)
      this.user = user;
      console.log(this.user.username)
    });
    // this.user.getPrivateData().subscribe(res => console.log(res));
  }

}
