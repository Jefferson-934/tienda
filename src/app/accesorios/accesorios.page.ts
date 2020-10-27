import { Component,OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { AccesoriosData } from './Accesorio/accesorio';
@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.page.html',
  styleUrls: ['./accesorios.page.scss'],
})
export class AccesoriosPage implements OnInit {

      num_accesorios:number=2;
      @ViewChild(IonInfiniteScroll) scroll:IonInfiniteScroll;

  constructor(public router: Router, public accesorio: AccesoriosData) { }

  ngOnInit() {
  }
  mostrarAccesorio(event){
    setTimeout(()=>{
      if (this.accesorio.num_accesorios<this.accesorio.arrayAccesorios.length) {
        this.accesorio.num_accesorios++;
        event.target.complete();
      } else {
        this.scroll.disabled=true;
      }
    },600);
    console.log(this.accesorio.num_accesorios);
     }

     addProducto(titulo: string, imagen: string,  precio: string) {
      this.accesorio.arrayAccesorios.push({
        titulo,
        imagen,
        precio,
        id: this.accesorio.arrayAccesorios.length + 1 + ""
      });
  }
  

 }

