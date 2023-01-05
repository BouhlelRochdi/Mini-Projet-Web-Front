import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/lib/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  isDark = false;
  isLogged$: Observable<string>;

  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) {}


  loadParamsFromUrl() {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.localLogout();
  }

  toggleLogout(){
    this.logout();
    this.router.navigate(['/public/login']);
  }
}