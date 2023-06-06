import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { TimeOption } from '../model/time-option';
import { AssetType } from '../model/AssetType';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeTimeService {

  url:string =  "http://localhost:7777/time"

  constructor(private httpClient:HttpClient ) {}

  getAllowedOptions(assetType:AssetType):Observable<TimeOption[]> {
      return this.httpClient.get<TimeOption[]>(this.url + "/" + assetType.toString())
      .pipe(retry(5));
  }

}
