import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  showSpinner = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected authenticationService: AuthService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    // reset login status
    this.authenticationService.logout(this.returnUrl);
  }

  onSubmit() {
    console.log('submited')
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.showSpinner = true;
    this.authenticationService
      .login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data){
            this.error = '';
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          console.log('error: ', error)
          this.error = error;
          this.showSpinner = false;
        }
      );
  }
}
