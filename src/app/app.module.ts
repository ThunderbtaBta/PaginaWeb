import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { NavfooterComponent } from './shared/navfooter/navfooter/navfooter.component';
import { NavsidebarComponent } from './shared/navsidebar/navsidebar/navsidebar.component';
import { MainComponent } from './shared/main/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavfooterComponent,
    NavsidebarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
