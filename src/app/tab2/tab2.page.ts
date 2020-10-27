import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

imgSlides: {img: string, titulo: string, }[]=[
    {
      img: 'https://p0.pikist.com/photos/675/822/building-city-street-architecture-facade-shop-urban-window-boutique.jpg',
      titulo: '¡¡Asterix store cuenta con una tienda física!!',
    },
    {
      img: 'https://d26lpennugtm8s.cloudfront.net/stores/159/720/products/envio-a-domicilio1-2a2d150c87330af2f015478576326876-640-0.png',
      titulo: 'Envios 100% seguros a todo el país',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ93KVszv8Ip5kNnor1DnevxV0WfvGkqXGzA&usqp=CAU',
      titulo: 'Aceptamos todas las tarjetas de crédito ',
    }
  ];
  constructor() {}

}
