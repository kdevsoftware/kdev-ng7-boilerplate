import { Component, OnInit } from '@angular/core';
import { KdevConfigService } from '@kdev/services/config.service';

@Component({
  selector: 'app-backend-page6',
  templateUrl: './backend-page6.component.html',
  styleUrls: ['./backend-page6.component.scss']
})
export class BackendPage6Component implements OnInit {

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
