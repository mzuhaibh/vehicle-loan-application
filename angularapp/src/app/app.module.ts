import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ViewloanComponent } from './core/components/viewloan/viewloan.component';
import { CreateloanComponent } from './core/components/createloan/createloan.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditloanComponent } from './core/components/editloan/editloan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewloanComponent,
    CreateloanComponent,
    EditloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
