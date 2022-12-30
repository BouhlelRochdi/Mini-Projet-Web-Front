import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


// import { LoginRedirect } from './services/login-redirect.service';
// import { PublicComponent } from './public.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // Login
    { path: 'login', component: LoginComponent },
    // Register
    // { path: 'register', component: RegisterComponent },
    // { path: 'register/success', component: SuccessRegisterComponent },
    // ThirdParty login (google/facebook)
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
