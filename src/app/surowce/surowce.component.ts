import { Component, OnInit } from '@angular/core';
import { Material } from '../model/material';
import { MaterialHttpService } from '../services/material-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surowce',
  templateUrl: './surowce.component.html',
  styleUrls: ['./surowce.component.css']
})
export class SurowceComponent implements OnInit{


  constructor(private materialService:MaterialHttpService, private router :Router,
      private route:ActivatedRoute) {
  }

  
  ngOnInit(): void {
    this.getAllMaterials(); 
 }


  materials:Material[]= [];


  selectMaterial(material:Material ){

    localStorage.setItem("material",JSON.stringify(material));
    this.router.navigate(["material/" + material.id ], {relativeTo: this.route} )
  }


  getAllMaterials() {
    this.materialService.getAllMaterials().subscribe( response => {

      this.materials = response;

      console.log(this.materials);

    })


  }




}
