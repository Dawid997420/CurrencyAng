import { Component, OnInit } from '@angular/core';
import { Material } from '../model/material';
import { AssetType } from '../model/AssetType';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{

  assetType!:AssetType ;

  ngOnInit(): void {

    this.assetType = AssetType.Material;
    this.getMaterial()
    console.log(this.material);
  }

  material!:Material;

  getMaterial() {
    this.material =JSON.parse(localStorage.getItem("material") || '');
  }

}
