import { Component, OnInit } from '@angular/core';
import { Crypto } from '../model/crypto';
import { AssetType } from '../model/AssetType';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit{

  assetType:AssetType=AssetType.Crypto;


  
  ngOnInit(): void {
    this.getMaterial()

  }

  crypto!:Crypto;

  getMaterial() {
    this.crypto = JSON.parse(localStorage.getItem("crypto") || '');
  }


}
