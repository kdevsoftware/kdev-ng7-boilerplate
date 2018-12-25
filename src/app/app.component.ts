import { Component, OnInit, OnDestroy } from '@angular/core';
import { KdevSplashScreenService } from '@kdev/services/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private _kdevSplashScreenService: KdevSplashScreenService,
  ) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
