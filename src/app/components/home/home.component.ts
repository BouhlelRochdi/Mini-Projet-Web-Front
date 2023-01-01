import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/lib/auth.service';
import { Observable, switchMap, of, first } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  isDark = false;
  isLogged$: Observable<string>;

  private _mobileQueryListener: () => void;

  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) {}


  loadParamsFromUrl() {
    // return this.routerStore.pipe(
    //   select(getCurrentUrl),
    //   switchMap(res => {
    //     if (res) {
    //       return of(res)
    //     } else {
    //       return of(null)
    //     }
    //   }));
  }

  ngOnInit() {
    // this.isLogged$.subscribe(res => {
    //   if (res) {
    //     this.userStoreService.loadCurrentUser();
    //     this.profileStoreService.loadProfilyUser();
    //   }
    // })
    // this.loadParamsFromUrl().pipe(first()).subscribe(
    //   res => {
    //     if (res.url === '/u') this.router.navigate(['u/p']);
    //     if(res.url.startsWith('/public')) this.logout();
    //   }
    // );
  }

  logout() {
    this.authService.localLogout();
    // this.profileStoreService.resetState();
    // this.userStoreService.resetState();
  }

  toggleLogout(){
    this.logout();
    this.router.navigate(['/public/login']);
  }
}