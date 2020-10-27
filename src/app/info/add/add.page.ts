import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamasData } from '../Damas/damas';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],

})
export class AddPage implements OnInit {
  
  
  constructor(private router:Router, public damas: DamasData) {
    
  }

  ngOnInit() {
  }

  

  saveProduc(articulo: HTMLInputElement,img: HTMLInputElement,marca: HTMLInputElement,talla: HTMLInputElement,precio: HTMLInputElement){
    this.damas.arrayDamas.push({
      titulo : articulo.value,
      imagen : img.value,
      marca : marca.value,
      talla : talla.value,
      precio : precio.value,
      id: this.damas.arrayDamas.length + 1 + ""
    });
    this.router.navigate(['/info'])
    

  }
}

