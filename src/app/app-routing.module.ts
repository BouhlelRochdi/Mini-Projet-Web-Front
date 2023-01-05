import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, Location, PathLocationStrategy } from '@angular/common';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { NgAuthGuard } from 'projects/shared/src/lib/services/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'private', pathMatch: 'full' },
  {
    path: 'public',
    children: [
      {
        path: '', loadChildren: () => import('projects/auth/src/lib/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'private',
    component: HomeComponent,
    canActivate: [NgAuthGuard],
    children: [
      {
        path: '', loadChildren: () => import('projects/user/src/lib/user.module').then(m => m.UserModule)
      }
    ]
  },
  {
    path: 'notfound',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '404' },
      { path: '404', component: NotfoundpageComponent }
    ]
  },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutingModule { }
