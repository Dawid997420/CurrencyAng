import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldHttpService {

  url:string =  "http://localhost:7777/"


  constructor(private httpClient:HttpClient) { }


  getActualGoldValue() {
    this.httpClient.get(this.url + "gold").pipe(retry(5));
  }



}
