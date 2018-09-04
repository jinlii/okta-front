import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageListComponent } from './messagelist.component';


const config = {
  issuer: 'https://dev-368187.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaeyr0t4kHdEtspN0h7' // this app needs to be type SPA in Okta
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
