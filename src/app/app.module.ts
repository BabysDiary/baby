import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './views/home/home.component';
import { AddBabyDetailsComponent } from './views/add-baby-details/add-baby-details.component';
import { ShowBabyDetailsComponent } from './views/show-baby-details/show-baby-details.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, HomeComponent, AddBabyDetailsComponent, ShowBabyDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
