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

 chosenArrow ="";
 isArrowUp:boolean = false;

 isArrowChosen(arrowName:string,arrowUp:boolean) {
   
   if (this.chosenArrow == arrowName && arrowUp == this.isArrowUp ) {
     return true;
   } else {
     return false;
   }

 }


 sort(arrowName:string, arrowUp:boolean) {

  if ( this.chosenArrow == arrowName && this.isArrowUp == arrowUp) {

    this.chosenArrow="";
    this.getAllMaterials();
  
  } else {
    this.chosenArrow = arrowName;
    this.isArrowUp = arrowUp;
    this.getAllMaterials();
  }

}




  materials:Material[]= [];


  selectMaterial(material:Material ){

    localStorage.setItem("material",JSON.stringify(material));
    this.router.navigate(["material/" + material.id ], {relativeTo: this.route} )
  }

  sortSurowiec() {
  
    if ( this.chosenArrow == "surowiec" && this.isArrowUp == true) {
  
      this.materialService.getAllMaterialsAlphabetically().subscribe( response=>{
        this.materials = response;
      })
    } else if (this.chosenArrow == "surowiec" && this.isArrowUp == false) {

      this.materialService.getAllMaterialsAlphabeticallyReversed().subscribe( response=>{
        this.materials = response;
      })
    }
    
  }


  sortKurs() {

    if ( this.chosenArrow == "kurs" && this.isArrowUp == true) {
  
      this.materialService.getAllMaterialsByPriceFall().subscribe( response=>{
        this.materials = response;
      })
    } else if (this.chosenArrow == "kurs" && this.isArrowUp == false){
  
      this.materialService.getAllMaterialsByPriceGrow().subscribe( response=>{
        this.materials = response;
      })
    } 
  }


  sortZmianaProc() {

    if ( this.chosenArrow == "zmianaProc" && this.isArrowUp == true) {
  
      this.materialService.getAllMaterialsByPercentFall().subscribe( response=>{
        this.materials = response;
      })
    } else if (this.chosenArrow == "zmianaProc" && this.isArrowUp == false){
      this.materialService.getAllMaterialsByPercentGrow().subscribe( response=>{
        this.materials = response;
      })
  
    } 
    
  } 


  sortZmiana( ) {

    if ( this.chosenArrow == "zmiana" && this.isArrowUp == true) {
  
      this.materialService.getAllMaterialsByChangeFall().subscribe( response=>{
        this.materials = response;
      })
    } else if (this.chosenArrow == "zmiana" && this.isArrowUp == false){
      this.materialService.getAllMaterialsByChangeGrow().subscribe( response=>{
        this.materials = response;
      })
  
    } 
  
  }
  


  getAllMaterials() {

    console.log(this.chosenArrow)
    if ( this.chosenArrow =="") {

      this.materialService.getAllMaterials().subscribe( response => {
      
        this.materials = response;
        console.log(this.materials)
        
      })
     
    }
    
    this.sortKurs();
    this.sortZmiana();
    this.sortZmianaProc();
    this.sortSurowiec();


  }




}
