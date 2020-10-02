import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  products = [];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.sendGetRequest().subscribe((users: any[]) => {
      console.log(users);
      this.products = users;
    });
  }
}

