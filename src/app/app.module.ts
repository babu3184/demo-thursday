import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { MenuIteamComponent } from './menu-iteam/menu-iteam.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterformComponent } from './registerform/registerform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CountryService } from './shared/country.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuIteamComponent,
    RegisterformComponent,
    UserprofileComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ UserService, CountryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
