import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Material } from '../model/material';
import { Crypto } from '../model/crypto';



@Component({
  selector: 'app-kryptowaluty',
  templateUrl: './kryptowaluty.component.html',
  styleUrls: ['./kryptowaluty.component.css']
})
export class KryptowalutyComponent implements OnInit{


 
  chosenArrow ="";
  isArrowUp:boolean = false;

  sort(arrowName:string, arrowUp:boolean) {

    if ( this.chosenArrow == arrowName && this.isArrowUp == arrowUp) {

      this.chosenArrow= "";
      this.getCryptosByPage("1");
    
    } else {
      this.chosenArrow = arrowName;
      this.isArrowUp = arrowUp;
      this.getCryptosByPage("1");
    }
 
  }

  isArrowChosen(arrowName:string,arrowUp:boolean) {
    
    if (this.chosenArrow == arrowName && arrowUp == this.isArrowUp ) {
      return true;
    } else {
      return false;
    }

  }


  constructor(private cryptoService:CryptoService, private router :Router,
    private route:ActivatedRoute) {
}


ngOnInit(): void {
  this.getAllCryptos(); 
}


cryptos:Crypto[]= [];


selectCrypto(crypto:Crypto ){

  localStorage.setItem("crypto",JSON.stringify(crypto));
  this.router.navigate(["kryptowaluta/" + crypto.name ], {relativeTo: this.route} )
}


getAllCryptos() {
  this.cryptoService.getAllCryptos("PLN").subscribe( response => {

    this.cryptos = response;

  })
}

sortWaluta(page:string) {
  
  if ( this.chosenArrow == "waluta" && this.isArrowUp == true) {

    this.cryptoService.getCryptosPageAlphabetically("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })
  } else if (this.chosenArrow == "waluta" && this.isArrowUp == false){
    this.cryptoService.getCryptosPageAlphabeticallyReversed("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })

  } else {

  }

}


sortKurs(page:string) {

  if ( this.chosenArrow == "kurs" && this.isArrowUp == true) {

    this.cryptoService.getCryptosPageByPriceFall("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })
  } else if (this.chosenArrow == "kurs" && this.isArrowUp == false){
    this.cryptoService.getCryptosPageByPriceGrow("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })

  } else {

  }

}

sortZmianaProc(page:string) {

  if ( this.chosenArrow == "zmianaProc" && this.isArrowUp == true) {

    this.cryptoService.getCryptosPageByPercentFall("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })
  } else if (this.chosenArrow == "zmianaProc" && this.isArrowUp == false){
    this.cryptoService.getCryptosPageByPercentGrow("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })

  } else {

  }
} 


sortKapitalizacjaRynkowa(page:string) {

  if ( this.chosenArrow == "kapitalizacjaRynkowa" && this.isArrowUp == true) {

    this.cryptoService.getCryptosPageByMarketCapFall("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })
  } else if (this.chosenArrow == "kapitalizacjaRynkowa" && this.isArrowUp == false){
    this.cryptoService.getCryptosPageByMarketCapGrow("PLN",page).subscribe( response=>{
      this.cryptos = response;
    })

  } else {

  }

} 




getCryptosByPage(page:string) {


  if ( this.chosenArrow == "" ) 

  this.cryptoService.getCryptosPage("PLN",page).subscribe( response => {
    this.cryptos = response;
  });

  this.sortWaluta(page);
  this.sortKurs(page);
  this.sortZmianaProc(page);
  this.sortKapitalizacjaRynkowa(page);

}





}