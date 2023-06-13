import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Crypto } from '../model/crypto';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  url:string =  "http://localhost:7777/cryptos"

  constructor(private httpClient:HttpClient) {}

  getCryptosPage( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/" + currencyCode + "?page=" + page
      + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }

  getCryptosPageByPriceGrow( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/price/ASC" + "/" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/price/ASC" + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }

  getCryptosPageByPriceFall( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/price/DESC" + "/" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/price/DESC" + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }


  getCryptosPageByPercentGrow( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/percentChange/ASC" + "/" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/percentChange/ASC" + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }

  getCryptosPageByPercentFall( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/percentChange/DESC" + "/" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/percentChange/DESC" + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }


  getCryptosPageByMarketCapFall( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/marketCap/DESC" + "/" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/marketCap/DESC" + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }

  getCryptosPageByMarketCapGrow( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/marketCap/ASC" + "/" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/marketCap/ASC" + "/" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }


  getCryptosPageAlphabetically( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/abc" + "/ASC" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/abc" + "/ASC" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }



  getCryptosPageAlphabeticallyReversed( currencyCode:string,page:string,size?:number ):Observable<Crypto[]> {
    
    if ( size!= undefined) {
      return this.httpClient.get<Crypto[]>(this.url + "/abc" + "/DESC" + currencyCode + "?page=" 
      + page + "&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Crypto[]>(this.url  + "/abc" + "/DESC" + currencyCode + "?page=" + page)
    .pipe(retry(5));
  }



  getAllCryptos(currencyCode:string):Observable<Crypto[]> {
    
    return this.httpClient.get<Crypto[]>(this.url + "/" + currencyCode)
    .pipe(retry(5));
  }

  getCryptoForDays(cryptoName:string,days:string):Observable<Crypto[]> {
    
    return this.httpClient.get<Crypto[]>(this.url + "/days/" + cryptoName + "/" +days).pipe(retry(5)
    );  }


}
