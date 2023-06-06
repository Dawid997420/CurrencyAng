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


  getCurrenciesByPage(page:string) {
    this.currencyService.getCurrenciesByPage(page).subscribe(response=>{
      this.currencies = response;
    })

  }

  
  selectCurrency(currency:Currency) {

    localStorage.setItem("currency",JSON.stringify(currency));
    this.router.navigate(["currency/" + currency.code ], {relativeTo: this.route} )
  }
  



}
