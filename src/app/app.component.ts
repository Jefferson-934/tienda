import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InfoPageModule } from '../app/info/info.module';


@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
  
})

export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCCtrl: NavController,
) {

  
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  otraPagina(){
    this.navCCtrl.navigateForward('/tabs/info');
  }
  caballeros(){
    this.navCCtrl.navigateForward('/tabs/caballeros');
  } ninos(){
    this.navCCtrl.navigateForward('/tabs/ninos');
  } accesorios(){
    this.navCCtrl.navigateForward('/tabs/accesorios');
  }
}
