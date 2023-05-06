import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SplashScreen } from '@capacitor/splash-screen';


import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer';
import { StatusBar } from '@capacitor/status-bar';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Storage } from '@ionic/storage';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ],
  
  providers: [ [SplashScreen], [StatusBar], { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
 File],
  bootstrap: [AppComponent],
})
export class AppModule {}
