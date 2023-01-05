import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'projects/shared/src';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user.module-routing';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    UserRoutingModule,
    FlexLayoutModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class UserModule { }
