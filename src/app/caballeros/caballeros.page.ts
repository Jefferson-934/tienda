import { Component,OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { DamasData } from '../info/Damas/damas';
import { CaballerosData } from './caballero/caballero';

@Component({
  selector: 'app-caballeros',
  templateUrl: './caballeros.page.html',
  styleUrls: ['./caballeros.page.scss'],
})
export class CaballerosPage implements OnInit {

      num_caballeros:number=2;
      @ViewChild(IonInfiniteScroll) scroll:IonInfiniteScroll;

  constructor(public router: Router, public caballero: CaballerosData) { }

  ngOnInit() {
  }

  mostrarCaballeros(event){
    setTimeout(()=>{
      if (this.caballero.num_caballeros<this.caballero.arrayCaballeros.length) {
        this.caballero.num_caballeros++;
        event.target.complete();
      } else {
        this.scroll.disabled=true;
      }
    },600);
    console.log(this.caballero.num_caballeros);
     }

     addProducto(titulo: string, imagen: string, marca: string, talla: string, precio: string) {
      this.caballero.arrayCaballeros.push({
        titulo,
        imagen,
        marca,
        talla,
        precio,
        id: this.caballero.arrayCaballeros.length + 1 + ""
      });
  
    }
    
  }
 /* interface Caballeros{
    titulo:string;
    imagen:string;
    marca:string;
    talla:string;
    precio:string;

  }
*/

