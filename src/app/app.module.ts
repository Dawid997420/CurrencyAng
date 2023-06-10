import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalutyComponent } from './waluty/waluty.component';
import { SurowceComponent } from './surowce/surowce.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule} from '@angular/common/http';
import { CurrencyComponent } from './currency/currency.component';
import { ChartComponent } from './chart/chart.component';
import { MaterialComponent } from './material/material.component';
import { KeycloakInit } from './init/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { CryptoComponent } from './crypto/crypto.component';
import { KryptowalutyComponent } from './kryptowaluty/kryptowaluty.component';
import { StronyComponent } from './strony/strony.component';
import { HighchartComponent } from './highchart/highchart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    WalutyComponent,
    SurowceComponent,
    NavComponent,
    CurrencyComponent,
    ChartComponent,
    MaterialComponent,
    CryptoComponent,
    KryptowalutyComponent,
    StronyComponent,
    HighchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    HighchartsChartModule 
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: KeycloakInit,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
