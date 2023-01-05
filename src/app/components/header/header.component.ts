import { Component, OnInit } from '@angular/core';
import { UserBase } from 'projects/shared/src';
import { UserService } from 'projects/user/src';
import { Observable } from 'rxjs';


@Component({
  selector: 'lib-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  showFiller = false;
  currentUser$: Observable<UserBase>

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.currentUser$ = this.userService.getConnectedUser();
  }

}
