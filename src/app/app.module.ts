import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Base64 } from '@ionic-native/base64/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/File/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { enterAnimation } from './nav-animation';
// import { BrowserAnimationsModule } from '@angular/-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HTTP } from '@ionic-native/http/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {OneSignal} from '@ionic-native/onesignal/ngx';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import{ LanguageService} from './providers/language.service';



// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,"./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
  
    
 ],
  entryComponents: [],
  imports: [

  BrowserModule, 
  IonicModule.forRoot({
    //navAnimation: enterAnimation // Animations!!!
  }), 
  
  AppRoutingModule, 
  // BrowserAnimationsModule,
  HttpClientModule, 
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    } 
  }),
],
  providers: [
    Camera,
    FileChooser,
    ImagePicker,
    NativeGeocoder,
    Base64,
    File,
    FilePath,
    HTTP ,
    LanguageService,
    CallNumber,
    Geolocation,
    StatusBar,
    SplashScreen,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
