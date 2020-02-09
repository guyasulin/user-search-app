import { RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserModel } from "./user-model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('/posts')    
  }
}