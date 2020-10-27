import { Injectable } from "@angular/core";

@Injectable()
export class NinosData {
    arrayNinos: Ninos[] = [
        {
            id: '1',
            titulo:'Zapatos deportivos Niña',
            imagen:'https://ae01.alicdn.com/kf/HTB1xFshSpXXXXbzXFXXq6xXFXXX3/Nuevas-zapatillas-de-deporte-bordadas-a-la-moda-para-ni-as-zapatos-deportivos-con-cordones-para.jpg',
            talla:'Talla:26 al 34',
            precio:'20.00 $',
      
          },
          {
            id: '2',
            titulo:'Zapatos deportivos Niño',
            imagen:'https://www.dhresource.com/0x0/f2/albu/g7/M01/15/E1/rBVaSlus1XaAKPMXAACsMExCm8A446.jpg',
            talla:'Talla:26 al 34',
            precio:'20.00 $',
      
          },
          {
            id: '3',
            titulo:'Conjunto Deportivo',
            imagen:'https://i.pinimg.com/736x/e9/d5/22/e9d5220aa7af20af9158efaf242a3ad1.jpg',
            talla:'Talla: P-S',
            precio:'35.00 $',
      
          },
          {
            id: '4',
            titulo:'Conjunto Deportivo Niña',
            imagen:'https://i.pinimg.com/originals/9f/96/25/9f9625c0d59879595f492c34d7d1e54e.jpg',
            talla:'Talla:P-S',
            precio:'50.00 $',
      
          },
          {
            id: '5',
            titulo:'Vestidos',
            imagen:'https://i.ytimg.com/vi/R51AippDo30/maxresdefault.jpg',
            talla:'Talla:S-M-L',
            precio:'50.00 $',
      
          },
          
    
      ]
      num_ninos: number = 2;
      constructor() {}

}



interface Ninos {
    id: string;
    titulo: string;
    imagen: string;
    talla: string;
    precio: string;
  
  }