import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserBase } from 'projects/shared/src';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient,
    private router: Router,
  ) { }

  getConnectedUser(): Observable<UserBase>{
    return this.http.get<UserBase>('api/user/currentUser').pipe(
      catchError((error) => this.handleError(error))
    );
  }

  // register(user: CreateUserDto): Observable<any> {
  //   return this.http.post<UserBase>('api/user/register', user).pipe(
  //     catchError((error) => this.handleError(error))
  //   );
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
