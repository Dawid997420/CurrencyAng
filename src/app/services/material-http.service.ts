import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Material } from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialHttpService {


  url:string =  "http://localhost:7777/material"


  constructor(private httpClient:HttpClient) { }



  getAllMaterials():Observable<Material[]> {
    
    return this.httpClient.get<Material[]>(this.url).pipe(retry(5));
  }


  getAllMaterialsAlphabetically():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/a").pipe(retry(5));
  }

  getAllMaterialsAlphabeticallyReversed():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/z").pipe(retry(5));
  }

  getAllMaterialsByPriceFall():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/price/fall").pipe(retry(5));
  }

  getAllMaterialsByPriceGrow():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/price/grow").pipe(retry(5));
  }

  getAllMaterialsByChangeFall():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/change/fall").pipe(retry(5));
  }

  getAllMaterialsByChangeGrow():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/change/grow").pipe(retry(5));
  }
  
  getAllMaterialsByPercentFall():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/percent/fall").pipe(retry(5));
  }

  getAllMaterialsByPercentGrow():Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.url + "/percent/grow").pipe(retry(5));
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
