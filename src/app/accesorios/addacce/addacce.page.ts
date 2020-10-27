import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoriosData } from '../Accesorio/accesorio';

@Component({
  selector: 'app-addacce',
  templateUrl: './addacce.page.html',
  styleUrls: ['./addacce.page.scss'],
})
export class AddaccePage implements OnInit {

  constructor(private router:Router, public accesorio: AccesoriosData) { 
   
  }

  ngOnInit() {
  }

  saveProduc(articulo: HTMLInputElement,img: HTMLInputElement,precio: HTMLInputElement){
    this.accesorio.arrayAccesorios.push({
      titulo : articulo.value,
      imagen : img.value,
      precio : precio.value,
      id: this.accesorio.arrayAccesorios.length + 1 + ""
    });
    this.router.navigate(['/accesorios'])
    

  }
}
