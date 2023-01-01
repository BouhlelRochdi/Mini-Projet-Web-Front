import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, Location, PathLocationStrategy } from '@angular/common';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { NgAuthGuard } from 'projects/shared/src/lib/services/auth.guard';

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
    canActivate: [NgAuthGuard],
    children: [
    ]
  },
  {
    path: 'notfound',
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
