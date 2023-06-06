import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CurrencyHttpService } from '../services/currency-http.service';
import { Currency } from '../model/currency-ab';
import { Chart } from 'chart.js';
import { AssetType } from '../model/AssetType';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{


  code!:string ;
  currency!:Currency;

  assetType:AssetType=AssetType.Currency;

  constructor(public location: Location, private currencyService :CurrencyHttpService) {
    let url = location.path();
    this.code= url.slice(10);
  }

  ngOnInit(): void {
    this.currency = JSON.parse( localStorage.getItem("currency")|| "");
   
  }


 

  getCurrencyActual() {
    

  }



  


}
