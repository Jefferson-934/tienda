import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaballerosData } from '../caballero/caballero';

@Component({
  selector: 'app-addcaba',
  templateUrl: './addcaba.page.html',
  styleUrls: ['./addcaba.page.scss'],
})
export class AddcabaPage implements OnInit {

  constructor(private router:Router, public caballero: CaballerosData) {
    

   }

  ngOnInit() {
  }
  saveProduc(articulo: HTMLInputElement,img: HTMLInputElement,marca: HTMLInputElement,talla: HTMLInputElement,precio: HTMLInputElement){
    this.caballero.arrayCaballeros.push({
      titulo : articulo.value,
      imagen : img.value,
      marca : marca.value,
      talla : talla.value,
      precio : precio.value,
      id: this.caballero.arrayCaballeros.length + 1 + ""
    });
    this.router.navigate(['/caballeros'])
    

  }

}
