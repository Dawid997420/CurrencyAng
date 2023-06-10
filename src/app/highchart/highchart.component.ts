import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Material } from '../model/material';
import { Currency } from '../model/currency-ab';
import { Crypto } from '../model/crypto';
import { CryptoService } from '../services/crypto.service';
import { CurrencyHttpService } from '../services/currency-http.service';
import { MaterialHttpService } from '../services/material-http.service';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit{


  @Input("crypto")
  crypto!:Crypto;

  @Input("currency")
  currency!:Currency;

  @Input("material")
  material!:Material;
  

  date: Date = new Date(500000000000);  
  date2: Date = new Date(400000000000);  
  date3: Date = new Date(300000000000);  
  date5: Date = new Date(100000000000);  


  
  dates:string[]=[];



  prices:number[]=[];


  labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];

  constructor( private cryptoService:CryptoService, private currencyService:CurrencyHttpService,
    private materialService:MaterialHttpService){

      
  }

  ngOnInit(): void {

    this.getValuesForYear();

  }



  getValuesForYear() {

    if ( this.isCryptoChosen() ) {
    
      

      this.getCryptoValuesForDays("365");

    } else if ( this.isCurrencyChosen() ) {
      
      this.getCurrencyValuesForDays("365");
    }
    
  }

  getCryptoValuesForDays(days:string) {

    let cryptos:Crypto[]=[]

    this.cryptoService.getCryptoForDays(this.crypto.id,days)
    .subscribe(response => {

      cryptos = response;
      this.initDatesAndPricesCrypto(cryptos);

    });

  }


  getCurrencyValuesForDays(days:string) {

    let currencies:Currency[]=[]

    this.currencyService.getCurrencyForDays(this.currency.group,this.currency.code,days)
    .subscribe(response => {

      currencies = response;
      this.initDatesAndPricesCurrency(currencies);

    });
  }



  isCryptoChosen() {
   return this.crypto != null && this.crypto != undefined;
  }

  isCurrencyChosen() {
    return this.currency!= null && this.currency != undefined
   }

  initDatesAndPricesCrypto( cryptos:Crypto[]) {

    
    for ( let i = 0; i < cryptos.length; i++ ) {

      let crypto = cryptos[i];

      this.dates.push(crypto.date.toLocaleString());
      this.prices.push(crypto.price );

    }

    this.initChart()
 

  }

  initDatesAndPricesCurrency( currencies:Currency[]) {

    for ( let i = 0; i < currencies.length; i++ ) {

      let currency = currencies[i];

      this.dates.push(currency.effectiveDate.toLocaleDateString());
      this.prices.push((currency.midPrice )) ;;

    }
  }

  initDatesAndPricesMaterial( materials:Material[]) {

    for ( let i = 0; i < materials.length; i++ ) {

      let material = materials[i];

      this.dates.push(material.data.toLocaleString());
      this.prices.push(material.price );
    }

    this.initChart()
    

  }




  getCryptosForYear() {

  }


  renderDataChart(pricesFromLow:string[] , pricesByDate:string[] ) {


  }
  

  initChart() {

    let objects = [{x:1, y:1}];

    let pricesY = [""];
    let dataToShowX = [];

    this.prices.sort( (a,b)=> a - b );

    let pricesZ = [4,31,5,12,9,43,14,5,19,51,33,43,21,22,26,29,34]

    for ( let i = 0 ; i < this.prices.length ; i++) {

      if ( i < this.prices.length+1 ){
      pricesY.push(this.prices[i].toString() )
      }

      objects.push({x:i  , y:this.prices[i]})

    }

   

    console.log(this.dates)
    console.log(this.prices)
    const chart = Highcharts.chart('chart-container', this.chartOptions);
    chart.update( {
      xAxis:{
  
       type: 'datetime', 
       categories:this.dates
      },
  
      yAxis:{
        title:{
          text:""
        },
        categories: pricesY

      },
      series: [
        {
          type: 'line',
          pointInterval: 24 * 3600 * 1000,
          data:this.prices
        },
      ],
    });

  }

  tablica = ["xd","xd"]

 

 Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  
   chartOptions: Highcharts.Options = {

    
    title:{
      text:""
    },
    xAxis:{

      categories:this.dates
    },

    yAxis:{
      title: {
        text:""
      },
      categories:["1","2","3"]
    },
    series: [
      {
       
        type: 'line',
        pointInterval: 24 * 3600 * 1000,
        data: this.dates.map((date, index) => [date, this.prices[index]]) 
      },
    ],
  };



  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } 
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false

  
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  
}
