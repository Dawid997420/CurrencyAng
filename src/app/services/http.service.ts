import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string =  "http://localhost:7777/"

  constructor(private httpClient:HttpClient) { }

  getActualCurrencyByCurrencyCode() :Observable<string>{

    return this.httpClient.get(this.url + "user",{responseType:'text'}).pipe(retry(5));

  }
 
  
  

}
