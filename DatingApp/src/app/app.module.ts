import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyDRn7YgxmsExy8wpfmhOit4voBgP_uH6_k",
    authDomain: "datingapp-f091d.firebaseapp.com",
    databaseURL: "https://datingapp-f091d.firebaseio.com",
    projectId: "datingapp-f091d",
    storageBucket: "datingapp-f091d.appspot.com",
    messagingSenderId: "161171182298"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
