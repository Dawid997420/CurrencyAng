import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Currency } from '../model/currency-ab';
import { CurrencyHttpService } from '../services/currency-http.service';
import { Material } from '../model/material';
import { Crypto } from '../model/crypto';
import { MaterialHttpService } from '../services/material-http.service';
import { CryptoService } from '../services/crypto.service';
import { AssetTypeTimeService } from '../services/asset-type-time.service';
import { TimeOption } from '../model/time-option';
import { AssetType } from '../model/AssetType';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit{

constructor( private currencyHttp:CurrencyHttpService, private materialHttp:MaterialHttpService,
  private cryptoService :CryptoService, private assetTypeService:AssetTypeTimeService) {}

@Input("currency")
currency!:Currency;

@Input("crypto")
crypto!:Crypto

@Input("material")
material!:Material;

labels:string[] = [];
data:string[] = [];

@Input("type")
type!:AssetType ;

timeOptions:TimeOption[] = [];

  ngOnInit(): void {



    Chart.register(...registerables);
    this.getCurrencyOrMaterialDays('365');
    this.getAllowedOptions();
  
  }

 

  getAllowedOptions() {
    this.assetTypeService.getAllowedOptions(this.type).subscribe( response => {
    
      
      this.timeOptions = response;

    });

  };


  getCurrencyOrMaterialDays(days:string) {

    if ( this.material != null) {

      this.getMaterialForDays(days);
      this.type = AssetType.Material;
    } else if ( this.currency != null) {

      this.getCurrencyForDays(days);
      this.type = AssetType.Currency;
    } else if ( this.crypto != null) {

      this.getCryptoForDays(days.toString());
      this.type = AssetType.Crypto;
    }


  }


  
  getCurrencyOrMaterialYears(years:number) {

    if ( this.material != null) {

      this.getMaterialForYears(years);
    } else if ( this.currency != null) {
      this.getCurrencyForYears(years);
    }


  }


  renderChart() {

    const chart = Chart.getChart('barchart');
 
    if (chart) 
      chart.destroy();
   

    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'PLN',
          data: this.data,
         
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

  }


  getMaterialForDays( days:string) {
    let materialList :Material[] = [] ;

    this.clearValues()
    
 
    this.materialHttp.getMaterialForDays(this.material.id, days)
    .subscribe( response => {
  
      materialList = response;

      for ( let i =0 ; i < materialList.length ; i++) {
        this.labels.push(materialList[i].data.toString())
        this.data.push(materialList[i].price.toString())
      }

      this.renderChart();    
    
    })
  }


  getCryptoForDays( days:string) {
    let cryptoList :Crypto[] = [] ;

    this.clearValues()
    
 
    this.cryptoService.getCryptoForDays(this.crypto.id, days)
    .subscribe( response => {
  
      cryptoList = response;

      for ( let i =0 ; i < cryptoList.length ; i++) {
        this.labels.push(cryptoList[i].date.toString())
        this.data.push(cryptoList[i].price.toString())
      }

      this.renderChart();    
    
    })
  }




  getCurrencyForDays( days:string) {
    let currencyList :Currency[] = [] ;

    this.clearValues()
    
 
    this.currencyHttp.getCurrencyForDays(this.currency.group,this.currency.code, days)
    .subscribe( response => {
  
      currencyList = response;

      for ( let i =0 ; i < currencyList.length ; i++) {
        this.labels.push(currencyList[i].effectiveDate.toString())
        this.data.push(currencyList[i].midPrice.toString())
      }

      this.renderChart();    
    
    })
  }

  getCurrencyForYears( days:number) {
    let currencyList :Currency[] = [] ;

    this.clearValues()
    
 
    this.currencyHttp.getCurrencyForYears(this.currency.group,this.currency.code, days)
    .subscribe( response => {
  
      currencyList = response;

      for ( let i =0 ; i < currencyList.length ; i++) {
        this.labels.push(currencyList[i].effectiveDate.toString())
        this.data.push(currencyList[i].midPrice.toString())
      }

      this.renderChart();    
    
    })
  }



  getMaterialForYears( years:number) {
    let materialList :Material[] = [] ;

    this.clearValues()
    
 
    this.materialHttp.getMaterialForYears(this.material.id,years)
    .subscribe( response => {
  
      materialList = response;

      for ( let i =0 ; i < materialList.length ; i++) {
        this.labels.push(materialList[i].data.toString())
        this.data.push(materialList[i].price.toString())
      }

      this.renderChart();    
    
    })
  }




  getMaximum( ) {

    if (this.type == AssetType.Crypto) {
      
      this.getCryptoForDays("max");
    }


  }




  clearValues() {
    this.data = [];
    this.labels = [];
  }





  


}
