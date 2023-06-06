import { Component, OnInit } from '@angular/core';
import { CurrencyHttpService } from '../services/currency-http.service';
import { Currency } from '../model/currency-ab';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-waluty',
  templateUrl: './waluty.component.html',
  styleUrls: ['./waluty.component.css']
})
export class WalutyComponent implements OnInit {

  currencies:Currency[] = [];

  chosenArrow ="";
  isArrowUp:boolean = false;

  isArrowChosen(arrowName:string,arrowUp:boolean) {
    
    if (this.chosenArrow == arrowName && arrowUp == this.isArrowUp ) {
      return true;
    } else {
      return false;
    }

  }


  
  sort(arrowName:string, arrowUp:boolean) {

    if ( this.chosenArrow == arrowName && this.isArrowUp == arrowUp) {

      this.chosenArrow= "";
      this.getCurrenciesByPage("1");
    
    } else {
      this.chosenArrow = arrowName;
      this.isArrowUp = arrowUp;
      this.getCurrenciesByPage("1");
    }
 
  }


  constructor( private currencyService:CurrencyHttpService, private router:Router, 
    private route:ActivatedRoute) {
  
    
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getAllCurrencies().subscribe( response => {
     this.currencies.push(...response);

      
    })
  }



  sortWaluta(page:string) {
  
    if ( this.chosenArrow == "waluta" && this.isArrowUp == true) {
  
      this.currencyService.getCurrenciesPageAlphabetically(page).subscribe( response=>{
        this.currencies = response;
      })
    } else if (this.chosenArrow == "waluta" && this.isArrowUp == false) {

      this.currencyService.getCurrenciesPageAlphabeticallyReversed(page).subscribe( response=>{
        this.currencies = response;
      })
    }
    
  }


  
sortKurs(page:string) {

  if ( this.chosenArrow == "kurs" && this.isArrowUp == true) {

    this.currencyService.getCurrenciesPageByPriceFall(page).subscribe( response=>{
      this.currencies = response;
    })
  } else if (this.chosenArrow == "kurs" && this.isArrowUp == false){

    this.currencyService.getCurrenciesPageByPriceGrow(page).subscribe( response=>{
      this.currencies = response;
    })
  } 
}

sortZmianaProc(page:string) {

  if ( this.chosenArrow == "zmianaProc" && this.isArrowUp == true) {

    this.currencyService.getCurrenciesPageByPercentFall(page).subscribe( response=>{
      this.currencies = response;
    })
  } else if (this.chosenArrow == "zmianaProc" && this.isArrowUp == false){
    this.currencyService.getCurrenciesPageByPercentGrow(page).subscribe( response=>{
      this.currencies = response;
    })

  } 
  
} 


sortZmiana( page:string ) {

  if ( this.chosenArrow == "zmiana" && this.isArrowUp == true) {

    this.currencyService.getCurrenciesPageByChangeFall(page).subscribe( response=>{
      this.currencies = response;
    })
  } else if (this.chosenArrow == "zmiana" && this.isArrowUp == false){
    this.currencyService.getCurrenciesPageByChangeGrow(page).subscribe( response=>{
      this.currencies = response;
    })

  } 

}

  


  getCurrenciesByPage(page:string) {

    if ( this.chosenArrow == "") {

      this.currencyService.getCurrenciesByPage(page).subscribe(response=>{
        this.currencies = response;
      })
    }

    this.sortKurs(page);
    this.sortWaluta(page);
    this.sortZmiana(page);
    this.sortZmianaProc(page);
  

  }

  
  selectCurrency(currency:Currency) {

    localStorage.setItem("currency",JSON.stringify(currency));
    this.router.navigate(["currency/" + currency.code ], {relativeTo: this.route} )
  }
  



}
