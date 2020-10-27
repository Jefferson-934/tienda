import { Component,OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { NinosData } from './Nino/nino';
@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.page.html',
  styleUrls: ['./ninos.page.scss'],
})
export class NinosPage implements OnInit {
  /*arrayNinos:Ninos[]=[
    {
      titulo:'Zapatos deportivos Niña',
      imagen:'https://ae01.alicdn.com/kf/HTB1xFshSpXXXXbzXFXXq6xXFXXX3/Nuevas-zapatillas-de-deporte-bordadas-a-la-moda-para-ni-as-zapatos-deportivos-con-cordones-para.jpg',
      talla:'Talla:26 al 34',
      precio:'20.00 $',

    },
    {
      titulo:'Zapatos deportivos Niño',
      imagen:'https://www.dhresource.com/0x0/f2/albu/g7/M01/15/E1/rBVaSlus1XaAKPMXAACsMExCm8A446.jpg',
      talla:'Talla:26 al 34',
      precio:'20.00 $',

    },
    {
      titulo:'Conjunto Deportivo',
      imagen:'https://i.pinimg.com/736x/e9/d5/22/e9d5220aa7af20af9158efaf242a3ad1.jpg',
      talla:'Talla: P-S',
      precio:'35.00 $',

    },
    {
      titulo:'Conjunto Deportivo Niña',
      imagen:'https://i.pinimg.com/originals/9f/96/25/9f9625c0d59879595f492c34d7d1e54e.jpg',
      talla:'Talla:P-S',
      precio:'50.00 $',

    },
    {
      titulo:'Vestidos',
      imagen:'https://i.ytimg.com/vi/R51AippDo30/maxresdefault.jpg',
      talla:'Talla:S-M-L',
      precio:'50.00 $',

    },
    
      ]
      */
      num_ninos:number=2;
      @ViewChild(IonInfiniteScroll) scroll:IonInfiniteScroll;

  constructor(public router: Router, public nino: NinosData) { }

  ngOnInit() {
  }
  mostrarNinos(event){
    setTimeout(()=>{
      if (this.nino.num_ninos<this.nino.arrayNinos.length) {
        this.nino.num_ninos++;
        event.target.complete();
      } else {
        this.scroll.disabled=true;
      }
    },600);
    console.log(this.nino.num_ninos);
     }

     addProducto(titulo: string, imagen: string, talla: string, precio: string) {
      this.nino.arrayNinos.push({
        titulo,
        imagen,
        talla,
        precio,
        id: this.nino.arrayNinos.length + 1 + ""
      });
  
    }
  }
 
