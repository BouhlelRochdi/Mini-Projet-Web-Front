import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountRole, AccountTypes, CreateUserDto, MatcherValidator } from 'projects/shared/src';
import { first } from 'rxjs/operators';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss']
})
export class RegisterComponent implements OnInit {

  accountTypes = [AccountTypes.CTO, AccountTypes.PROJECT_MANAGER, AccountTypes.DEVELOPER, AccountTypes.DESIGNER];
  roles = [AccountRole.ADMIN, AccountRole.MANAGER, AccountRole.COLLABORATOR];

  registerForm: FormGroup;
  showSpinner = false;
  submitted = false;
  error = '';

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      comfirmPassword: ['', Validators.required],
      adress: [''],
      phone: [''],
      matFiscal: ['', Validators.required],
      accountType: ['', Validators.required],
      jobtitle: ['', Validators.required],
    },
      {
        validator: MatcherValidator('password', 'comfirmPassword')
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.showSpinner = true;
    // @todo compleate profile
    this.authService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        {
          complete: () => {
            this.error = '';
            this.router.navigate(['public/login']);
          },
          error: (error) => {
            this.error = error;
            console.error(error);
            this.showSpinner = false;
          }
        }
      );
  }
}
