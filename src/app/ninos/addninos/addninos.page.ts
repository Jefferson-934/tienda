import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NinosData } from '../Nino/nino';

@Component({
  selector: 'app-addninos',
  templateUrl: './addninos.page.html',
  styleUrls: ['./addninos.page.scss'],
})
export class AddninosPage implements OnInit {

  constructor(private router:Router, public nino: NinosData) { 
   
  }

  ngOnInit() {
  }

  saveProduc(articulo: HTMLInputElement,img: HTMLInputElement,talla: HTMLInputElement,precio: HTMLInputElement){
    this.nino.arrayNinos.push({
      titulo : articulo.value,
      imagen : img.value,
      talla : talla.value,
      precio : precio.value,
      id: this.nino.arrayNinos.length + 1 + ""
    });
    this.router.navigate(['/ninos'])

  }
}
