import { Observable, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model';
import { UsersService } from './users.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public users$: Observable<UserModel[]>;
  public userName:string;
  public pageIndex:number;
  public  errorMessage = '';
  
  constructor(private usersService:UsersService){}

  ngOnInit() {
      this.users$ = this.usersService.getUsers()
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
  }

  pageEvent(page: number) {
    this.pageIndex = page;
   }
}
