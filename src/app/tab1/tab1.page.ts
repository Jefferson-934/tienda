import { Component,OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  arrayInfo:Informacion[]=[
{
  titulo:'ASTERIX STORE',
  imagen:'https://image.freepik.com/vector-gratis/plantilla-logotipo-tienda-linea_59362-81.jpg',
  contenido:'La tienda mas segura para comprar en en línea!',
},

{
  titulo:'Las Mejores Marcas',
  imagen:'https://israhdz78.files.wordpress.com/2016/12/marcas-de-ropa-2.jpg?w=720',
  contenido:'Le ofrecemos ropa en las mejores marcas nacionales y extranjeras!!',
},
{
  titulo:'Ropa para todas las edades',
  imagen:'https://http2.mlstatic.com/kit-de-patrones-franelas-damas-caballeros-ninos-pdf-D_NQ_NP_947644-MLV29914861360_042019-F.jpg',
  contenido:' Contamos con prendas de vestir para damas, caballeros y niños.',
},
{
  titulo:'Accesorios',
  imagen:'https://i.pinimg.com/originals/20/f8/c9/20f8c986491066eccf530adfe6fb707a.png',
  contenido:'Ofrecemos todo tipo de artículos y accesorios que complementen tu look!',
},
{
  titulo:'Calzado',
  imagen:'https://cdn.pixabay.com/photo/2016/10/04/01/26/shoes-1713338__340.jpg',
  contenido:' Adquuiere tu calzado deportivo o casual al mejor precio y en las mejores marcas!',
},
  ]

  num_informacion:number=2;
  @ViewChild(IonInfiniteScroll) scroll:IonInfiniteScroll;
  
  constructor() {}

  
ngOnInit(){}


mostrarInfo(event){
  setTimeout(()=>{
    if (this.num_informacion<this.arrayInfo.length) {
      this.num_informacion++;
      event.target.complete();
    } else {
      this.scroll.disabled=true;
    }
  },600);
  console.log(this.num_informacion);
   }
}
interface Informacion{
  titulo:string;
  imagen:string;
  contenido:string;
}