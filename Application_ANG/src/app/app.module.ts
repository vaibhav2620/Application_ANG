import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { FormCompComponent } from './form-comp/form-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavHeaderComponent,
    FormCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
