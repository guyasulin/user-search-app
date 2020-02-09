import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public users: UserModel[];
  public userName:string;
  public pageIndex:number;

  constructor(private usersService:UsersService){}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
    .subscribe(res => {
        this.users = res;
    })
  }

  pageEvent(page: number) {
    this.pageIndex = page;
   }
}
