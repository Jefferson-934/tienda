import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { DamasData } from './Damas/damas';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],

})
export class InfoPage implements OnInit {

  num_damas: number = 2;
  @ViewChild(IonInfiniteScroll) scroll: IonInfiniteScroll;;

  constructor(public router: Router, public damas: DamasData) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

 

  mostrarInfo(event) {
    setTimeout(() => {
      if (this.damas.num_damas < this.damas.arrayDamas.length) {
        this.damas.num_damas++;
        event.target.complete();
      } else {
        this.scroll.disabled = true;
      }
    }, 600);
    console.log(this.damas.num_damas);
  }
  addProducto(titulo: string, imagen: string, marca: string, talla: string, precio: string) {
    this.damas.arrayDamas.push({
      titulo,
      imagen,
      marca,
      talla,
      precio,
      id: this.damas.arrayDamas.length + 1 + ""
    });

  }
  
addnewProduc(){

}
}
