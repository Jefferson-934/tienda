import { Injectable } from "@angular/core";

@Injectable()
export class DamasData {
    arrayDamas: Damas[] = [
        {
          id: '1',
          titulo: 'Blusa',
          imagen: 'https://i.pinimg.com/originals/8d/77/56/8d77565ad077be4b5270b6521c740e02.jpg',
          marca: 'Marca:Hollister',
          talla: 'Talla:S-M-L',
          precio: '30.00 $',
    
        },
    
        {
          id: '2',
          titulo: 'Pantalones',
          imagen: 'https://i.pinimg.com/originals/9a/4f/07/9a4f07e905ff48cf0412600528d56bdc.jpg',
          marca: 'Marca:Lucero',
          talla: 'Talla:S-M-L',
          precio: '35.00 $',
    
        },
        {
          id: '3',
          titulo: 'Zapatos Deprtivos',
          imagen: 'https://ep01.epimg.net/elpais/imagenes/2020/01/07/escaparate/1578393787_794117_1578409611_sumario_normal.jpg',
          marca: 'Marca:Kike',
          talla: 'Talla:35 a 42',
          precio: '50.00 $',
    
        },
        {
          id: '4',
          titulo: 'Vestidos',
          imagen: '    https://ae01.alicdn.com/kf/H988f6c30dbec4ccba35f9a3c38df8ad2f/Vestido-de-dise-ador-de-mujer-de-la-mejor-marca-maxi-Vestidos-para-mujeres-de-dibujos.jpg_q50.jpg      ',
          marca: 'Marca:Cooppel',
          talla: 'Talla:S-M-L',
          precio: '50.00 $',
    
        },
    
      ]
      num_damas: number = 2;
      constructor() {}

}



interface Damas {
    id: string;
    titulo: string;
    imagen: string;
    marca: string;
    talla: string;
    precio: string;
  
  }