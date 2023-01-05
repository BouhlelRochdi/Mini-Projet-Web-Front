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

  profilySettingForm: FormGroup;
  submitted = false;
  showSpinner = false;

  // published: Publish[] = [
  //   { key: 'PROFILE.TRUE', value: true },
  //   { key: 'PROFILE.FALSE', value: false }
  // ];
  // languages: Lang[] = [
  //   { key: 'MAIN.FRENCH', value: 'fr' },
  //   { key: 'MAIN.ENGLISH', value: 'en' }
  // ];
  profilyUser$: Observable<UpdateUserDto>;
  checkExisting$: Observable<string>;
  fullProfile: UpdateUserDto;
  generatedUniqueName$: Observable<string>;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.profilySettingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: [{ value: '', disabled: true }, Validators.required],
      // uniqueName: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      // isPublic: ['', Validators.required],
      // changePassword: [{ value: '**********', disabled: false }]
      // photo: []
    });
    this.profilyUser$ = this.userService.getConnectedUser().pipe(
      tap(res => {
        if (res) {
          this.showSpinner = false;
          this.fullProfile = res;
          this.profilySettingForm.patchValue(res);
        };
      })
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.profilySettingForm.invalid) {
      return;
    } else {
      const author = {
        ...this.fullProfile,
        firstName: this.profilySettingForm.controls.firstName.value,
        lastName: this.profilySettingForm.controls.lastName.value,
        email: this.profilySettingForm.controls.email.value,
      };
      // const updatedProfily: UpdateUserDto = {
      //   _id: this.fullProfile._id,
      //   uniqueName: this.profilySettingForm.controls.uniqueName.value,
      //   isPublic: this.profilySettingForm.controls.isPublic.value
      // };
      // this.profileStoreService.updateProfileWithPatch(updatedProfily);
      // this.userStoreService.updateCurrentUser(author);
    }
  }

  editPassword(){
    console.log('edit password works')
  }
}
