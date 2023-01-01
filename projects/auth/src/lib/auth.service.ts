import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserDto, UserBase } from 'projects/shared/src';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

export const AccessTokenLocalStorage = 'access_token';
const headers = new HttpHeaders().set('access-control-allow-origin',"*");
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;
  redirectUrl: string = '/';
  isLogged(): boolean {
    if (this.currentAccessToken) {
      return true;
    } else return false;
  }

  private currentAccessTokenSubject: BehaviorSubject<any>;

  constructor(
    private readonly http: HttpClient,
    private router: Router,
    // private userStore: Store<fromUser.State>
  ) {
    this.currentAccessTokenSubject = new BehaviorSubject<any>(localStorage.getItem(AccessTokenLocalStorage));
  }

  public get currentAccessToken(): string {
    return this.currentAccessTokenSubject.value;
  }

  public get $currentAccessToken(): Observable<any> {
    return this.currentAccessTokenSubject.asObservable();
  }

  /* local login */
  login(email: string, password: string) {
    return this.http.post<any>('api/auth/signin', { email, password }, httpOptions)
    
    .pipe(
      map(res => {
        // login successful if there's a jwt token in the response
        const tt: any = res;
        if (tt && tt.access_token) {
          this.successLogin(tt.access_token);
          return tt.access_token;
        } else {
          this.isLoggedIn = false;
          return null;
        }
      }),
      catchError((error) => this.handleError(error))
    );
  }

  /* Register */
  register(user: CreateUserDto): Observable<any> {
    return this.http.post<UserBase>('api/user/register', user).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  successLogin(access_token: string) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem(AccessTokenLocalStorage, access_token);
    this.currentAccessTokenSubject.next(access_token);
    this.isLoggedIn = true;
  }

  logout(url?: string) {
    // remove user from local storage to log user out
    //console.log('Log out call (optional url:)',url);
    this.localLogout();
    this.redirectToLogin(url);
  }

  localLogout() {
    localStorage.removeItem(AccessTokenLocalStorage);
    this.currentAccessTokenSubject.next(null);
    this.isLoggedIn = false;
  }

  private redirectToLogin(url?: string) {
    if (url) {
      this.router.navigate(['/public/login'], { queryParams: { returnUrl: url } });
    } else {
      this.router.navigate(['/public/login']);
    }
  }

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

