import { Injectable } from "@angular/core";

@Injectable()
export class CaballerosData {
    arrayCaballeros: Caballeros[] = [
        {
            id: '1',
            titulo: 'Camisetas',
            imagen: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/tgIAAOSwhAJcjmlo/$_57.JPG',
            marca: 'Marca:Calvin Klein',
            talla: 'Talla:S-M-L',
            precio: '27.00 $',

        },

        {
            id:'2',
            titulo: 'Camisetas',
            imagen: 'https://images.segundamano.mx/api/v1/smmx/images/17/1796556828.jpg?rule=medium',
            marca: 'Marca:American Eagle',
            talla: 'Talla:S-M-L',
            precio: '35.00 $',

        },
        {
            id: '3',
            titulo: 'Pantalones',
            imagen: 'https://www.fillow.net/blog/wp-content/uploads/2015/09/Fit-Vaqueros-Levis-1-768x881.jpg',
            marca: 'Marca:Levi´s',
            talla: 'Talla:S-M-L',
            precio: '50.00 $',

        },
        {
            id:'4',
            titulo: 'Zapatos Casual',
            imagen: '   https://http2.mlstatic.com/zapato-de-moda-casual-para-hombre-miel-cafe-moda-masculina-D_NQ_NP_988109-MCO27109340003_032018-F.jpg      ',
            marca: 'Marca:Salvatore',
            talla: 'Talla:38 a 42',
            precio: '50.00 $',

        },

    ]
    num_caballeros: number = 2;
    constructor() { }

}



interface Caballeros {
    id: string;
    titulo: string;
    imagen: string;
    marca: string;
    talla: string;
    precio: string;

}