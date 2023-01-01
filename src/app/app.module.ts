import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from 'projects/auth/src/lib/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { errorInterceptorProvider, jwtInterceptorProvider, MaterialModule, redirectInterceptorProvider } from 'projects/shared/src';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundpageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,

    //forms
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    jwtInterceptorProvider,
    errorInterceptorProvider,
    redirectInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
