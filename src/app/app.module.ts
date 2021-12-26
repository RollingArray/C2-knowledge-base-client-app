import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
//fa
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ApiInterceptor } from "./shared/interceptor/api-interceptor.interceptor";
import { AngularFireModule } from "@angular/fire";

@NgModule({
	declarations: [
    AppComponent
	],
	entryComponents: [
		
	],
	imports: [
    BrowserModule,
    IonicModule.forRoot({hardwareBackButton: false}),
		AppRoutingModule,
    HttpClientModule,
    //CreateEditProjectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
	],
	providers: [
    //Push,
		DatePipe,
    //SocialSharing,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
