import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'u', pathMatch: 'full' },
  // {
  //   path: '',
  //   //component: HomeComponent,
  //   //canActivate: [NgAuthGuard],
  //   children: [
  //     {
  //       path: 'setting',
  //       loadChildren: () => import('./modules/profily-account/profily-account.module').then(m => m.ProfilyAccountModule)
  //     },
  //     {
  //       path: 'search',
  //       loadChildren: () => import('./modules/search/prf-search.module').then(m => m.PrfSearchModule)
  //     },
  //     {
  //       path: 'change-password',
  //       loadChildren: () => import('@mslibs/ms-auth').then(m => m.ChangePasswordModule)
  //     }
  //   ]
  // },
  // {
  //   path: 'u',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       loadChildren: () => import('@mslibs/profily/front/employee').then(m => m.ProfileModule)
  //     }
  //   ]
  // },
  // TODO Extract activation part to isolate module
  {
    path: 'public',
    //component: HomeComponent,
    children: [
      {
        path: '', loadChildren: () => import('projects/auth/src/lib/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'notfound',
    //component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '404' },
      //{ path: '404', component: NotfoundpageComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
