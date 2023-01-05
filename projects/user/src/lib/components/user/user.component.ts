import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateUserDto } from 'projects/shared/src';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../../user.service';

@Component({
  selector: 'lib-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  profileSettingForm: FormGroup;
  submitted = false;
  showSpinner = false;

  profileUser$: Observable<UpdateUserDto>;
  fullProfile: UpdateUserDto;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.profileSettingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: [{ value: '', disabled: true }, Validators.required]
    });
    this.profileUser$ = this.userService.getConnectedUser().pipe(
      tap(res => {
        if (res) {
          this.showSpinner = false;
          this.fullProfile = res;
          this.profileSettingForm.patchValue(res);
        };
      })
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileSettingForm.invalid) {
      return;
    } else {
      console.log('full profile to update: ', this.profileSettingForm.value)
    }
  }
}
