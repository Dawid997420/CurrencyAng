import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Currency } from '../model/currency-ab';

@Injectable({
  providedIn: 'root'
})
export class CurrencyHttpService {


  url:string =  "http://localhost:7777/currencies"

  constructor(private httpClient:HttpClient) { }


 

  getAllCurrencies():Observable<Currency[]> {

  
    return this.httpClient.get<Currency[]>(this.url).pipe( retry(5));

  }

  getCurrenciesByPage(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "?page="+page+"&size="+size).pipe(retry(5));
    }

    return this.httpClient.get<Currency[]>(this.url + "?page="+page).pipe(retry(5));
  }

  getCurrenciesPageByChangeFall(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/change/DESC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/change/DESC" + "?page="+page).pipe(retry(5));
  }


  getCurrenciesPageByChangeGrow(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/change/ASC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/change/ASC" + "?page="+page).pipe(retry(5));
  }


  getCurrenciesPageByPercentFall(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/percentChange/DESC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/percentChange/DESC" + "?page="+page).pipe(retry(5));
  }


  
  getCurrenciesPageByPercentGrow(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/percentChange/ASC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/percentChange/ASC" + "?page="+page).pipe(retry(5));
  }


   
  getCurrenciesPageByPriceGrow(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/price/ASC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/price/ASC" + "?page="+page).pipe(retry(5));
  }


    
  getCurrenciesPageByPriceFall(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/price/DESC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/price/DESC" + "?page="+page).pipe(retry(5));
  }


     
  getCurrenciesPageAlphabetically(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/abc/ASC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/abc/ASC" + "?page="+page).pipe(retry(5));
  }


  getCurrenciesPageAlphabeticallyReversed(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/abc/DESC"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/abc/DESC" + "?page="+page).pipe(retry(5));
  }



  getCurrencyActual(group:string,code:string):Observable<Currency> {

    return this.httpClient.get<Currency>(this.url + "/" + group + "/" + code)
    .pipe(retry(5));
  }


  getCurrencyForDays(group:string,code:string,days:string) : Observable<Currency[]> {
      return this.httpClient.get<Currency[]>(this.url + "/days" + "/" +group + "/" + code + "/" + days)
      .pipe(retry(5));
  }
 
  getCurrencyForYears(group:string,code:string,days:number) : Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(this.url + "/years" + "/" +group + "/" + code + "/" + days)
    .pipe(retry(5));
  }

  getCurrencyMaximum(group:string,code:string) : Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(this.url +"/max" + "/years" + "/" +group + "/" + code)
    .pipe(retry(5));
  }



}
