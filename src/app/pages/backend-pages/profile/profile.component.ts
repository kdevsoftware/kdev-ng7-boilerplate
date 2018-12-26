import { Component, OnInit } from '@angular/core';
import { KdevConfigService } from '@kdev/services/config.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _kdevConfigService: KdevConfigService,
  ) {
    // Configure the layout
    this._kdevConfigService.config = {
      layout: {
        style: 'backend',
        navbar: {
          hidden: false,
        },
        toolbar: {
          customBackgroundColor: false,
          hidden: false,
        },
        footer: {
          hidden: false,
        }
      }
    };
  }

  ngOnInit() {
  }

}
