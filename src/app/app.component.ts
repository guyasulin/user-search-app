import { catchError, finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserModel } from './user-model';
import { UsersService } from './users.service';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';

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
