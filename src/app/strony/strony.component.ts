import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-strony',
  templateUrl: './strony.component.html',
  styleUrls: ['./strony.component.css']
})
export class StronyComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

    this.initStrony();
  }

  selected!:number;

  @Input("size")
  size!:number;

  @Input("pageSize")
  pageSize!:number;


  @Output("onSelect")
  onSelect:EventEmitter<any> = new EventEmitter<any>();

  strony:number[] = [];


  select(strona:number){
    this.selected = strona;
    this.onSelect.emit(strona);
  }

  initStrony() {
    this.selected = 1

    let numberOfPages = this.size / this.pageSize ;

    for ( let i =0 ; i < numberOfPages ; i++ ) {
      this.strony.push( (i+1) );
    }
  }


}
