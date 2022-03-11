import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-base-login',
  templateUrl: './base-login.component.html',
  styleUrls: ['./base-login.component.scss']
})
export class BaseLoginComponent implements OnInit {
  public users:User[] = [];

  constructor(private _userService:UsersService) { }

  ngOnInit(): void {
    this.fetchGetUsers();
  }

  fetchGetUsers(){
    this._userService.getUsers().subscribe(res=>{
      //console.log(res.data);
      this.users = res.data;
      console.log(this.users);
    });
  }

}
