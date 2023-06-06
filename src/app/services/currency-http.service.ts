import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Currency } from '../model/currency-ab';

@Injectable({
  providedIn: 'root'
})
export class CurrencyHttpService {


  url:string =  "http://localhost:7777/currency"

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
      return this.httpClient.get<Currency[]>(this.url + "/change/fall"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/change/fall" + "?page="+page).pipe(retry(5));
  }


  getCurrenciesPageByChangeGrow(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/change/grow"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/change/grow" + "?page="+page).pipe(retry(5));
  }


  getCurrenciesPageByPercentFall(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/percent/fall"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/percent/fall" + "?page="+page).pipe(retry(5));
  }


  
  getCurrenciesPageByPercentGrow(page:string, size?:string ):Observable<Currency[]> {
    
    if ( size != undefined) {
      return this.httpClient.get<Currency[]>(this.url + "/percent/grow"+ "?page="+page+"&size="+size).pipe(retry(5));
    }
    return this.httpClient.get<Currency[]>(this.url + "/percent/grow" + "?page="+page).pipe(retry(5));
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
