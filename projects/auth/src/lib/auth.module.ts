import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth.module-routing';
import { MaterialModule } from 'projects/shared/src';
import { PublicFormsCardComponent } from './components/public-forms-card/public-forms-card.component';


@NgModule({
  declarations: [
    LoginComponent,
    PublicFormsCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    MaterialModule,
  ],
  exports: [
  ]
})
export class AuthModule { }
