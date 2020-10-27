import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DamasData } from './info/Damas/damas';
import { CaballerosData } from './caballeros/caballero/caballero';
import { AccesoriosData } from './accesorios/Accesorio/accesorio';
import { NinosData } from './ninos/Nino/nino';


@NgModule({
  
  declarations: [AppComponent,
    ],
  entryComponents: 
  [
    
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ],
  providers: [
    StatusBar,
    SplashScreen,
    DamasData,
    CaballerosData,
    AccesoriosData,
    NinosData,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
