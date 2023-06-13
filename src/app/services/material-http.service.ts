import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Material } from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialHttpService {


  url:string =  "http://localhost:7777/materials"


  constructor(private httpClient:HttpClient) { }



  getAllMaterials():Observable<Material[]> {
    
    return this.httpClient.get<Material[]>(this.url).pipe(retry(5));
  }


  getAllMaterialsAlphabetically():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/abc/ASC").pipe(retry(5));
  }

  getAllMaterialsAlphabeticallyReversed():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/abc/DESC").pipe(retry(5));
  }

  getAllMaterialsByPriceFall():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/price/DESC").pipe(retry(5));
  }

  getAllMaterialsByPriceGrow():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/price/ASC").pipe(retry(5));
  }

  getAllMaterialsByChangeFall():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/change/DESC").pipe(retry(5));
  }

  getAllMaterialsByChangeGrow():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/change/ASC").pipe(retry(5));
  }
  
  getAllMaterialsByPercentFall():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/percentChange/DESC").pipe(retry(5));
  }

  getAllMaterialsByPercentGrow():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/percentChange/ASC").pipe(retry(5));
  }



  getMaterialForDays(name:string, days:string) :Observable<Material[]> {

    return this.httpClient.get<Material[]>(this.url + "/days" + "/" + name + "/" + days)
    .pipe(retry(5));
  }

  getMaterialForYears(name:string, years:number) :Observable<Material[]> {

    return this.httpClient.get<Material[]>(this.url + "/years" + "/" + name + "/" + years)
    .pipe(retry(5));
  }
  
}
