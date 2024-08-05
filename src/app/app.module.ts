import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { SharedModule } from './shared';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({ 
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        AuthModule.forRoot({...env.auth0}),
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [provideHttpClient(), provideAnimationsAsync()] })
export class AppModule {}
