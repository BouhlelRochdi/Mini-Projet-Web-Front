import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-public-forms-card',
  templateUrl: './public-forms-card.component.html',
  styleUrls: ['./public-forms-card.component.scss']
})
export class PublicFormsCardComponent implements OnInit {

  appLogo;
  appPhotoUrl: null;
  appTitle;
  @Input() pageTitle = '';

  constructor() {
    this.appLogo = 'settings_input_svideo';
    this.appPhotoUrl = null;
    this.appTitle = 'Team Office';
  }

  ngOnInit() { }

}
