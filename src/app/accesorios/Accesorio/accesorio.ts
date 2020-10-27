import { Injectable } from "@angular/core";

@Injectable()
export class AccesoriosData {
    arrayAccesorios: Accesorios[] = [
        {
            id: '1',
            titulo:'Reloj para Hombre',
            imagen:'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg',
            precio:'27.00 $',
      
          },
          {
            id: '2',
            titulo:'Gafas',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKnvs3jv0cCIIb3NkICxmznW-k4maWYiktrQ&usqp=CAU',
            precio:'20.00 $',
      
          },
          {
            id: '3',
            titulo:'Billetera',
            imagen:'https://cdn1-prd.beautymovers.com/sys-master/s3medias/h21/h0d/9291864539166/210091482_productPicture_prodGallery_product',
            precio:'27.00 $',
      
          },
          {
            id: '4',
            titulo:'Bolso de Mano',
            imagen:'https://images-na.ssl-images-amazon.com/images/I/61HiVey74JL._AC_SX522_.jpg',
            precio:'23.00 $',
      
          },
          {
            id: '1',
            titulo:'Corbata',
            imagen:'https://www.dhresource.com/0x0/f2/albu/g9/M00/97/4B/rBVaVVwdk66AAY5HADK7EvpeTO8322.jpg/tieset-students-neckwear-necktie-for-kids.jpg',
            precio:'23.00 $',
      
          },
      ]
      num_accesorios: number = 2;
      constructor() {}

}



interface Accesorios {
    id: string;
    titulo: string;
    imagen: string;
    precio: string;
  
  }