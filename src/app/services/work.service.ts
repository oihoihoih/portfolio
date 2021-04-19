import { Injectable } from '@angular/core';
import { Works } from '../interfaces/works.interface';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private works: Works[] = [
    {
        listName: "Perich",
        name: "Perich 1941-1995. Humor amb ulls de gat",
        year: "2020", 
        type: "Exposición",
        mainImg: "assets/images/work/perich.png",
        text:"Diseño gráfico e identidad visual de la exposición conmemorativa del Perich. El reto de este proyecto fue el de trasladar el carácter incisivo del personaje y su obra. Dando protagonismo a sus ilustraciones se creó una colección con la estética editorial y tipográfica de su tiempo.",
        client: "El Born CCM",
        images:["assets/images/single-work/perich/1-perich_opi.jpg", "assets/images/single-work/perich/2-perich_intro.jpg", 
        "assets/images/single-work/perich/3-perich-fanals-ani.gif", "assets/images/single-work/perich/4-perich_exh.jpg", 
        "assets/images/single-work/perich/5-perich_banners.png",
        "assets/images/single-work/perich/6-llibret.jpg",
        "assets/images/single-work/perich/7-perich_expo_int.jpg",
        "assets/images/single-work/perich/8-perich_intro2.jpg",
        "assets/images/single-work/perich/9-perich_av.jpg"]
    },
    {
        listName: "Mapes",
        name: "Mapes, país, futur. Centenari de l'exposició cartogràfica catalana (1919)",
        year: "2020", 
        type: "Exposición",
        mainImg: "assets/images/work/mapes.png",
        text:"Diseño gráfico e identidad visual de la exposición en conmemoración del centaenario de la primera exposición cartográfica catalana. Mediante un lenguaje sobrio y recuperando los elementos de comunicación de esta primera exposición se articuló este proyecto.",
        client: "ICGC",
        images:[]

    },
    {
        listName: "Espais",
        name: "Espais d'il·luminació",
        year: "2019", 
        type: "Diseño web",
        mainImg: "assets/images/work/espais.jpg",
        link: "https://www.2espais.com/es/",
        text:"Proyecto de diseño web en wordpress para esta tienda de luminarias en la que buscaban renovar su antigua web. El objetivo fue el de crear una web donde predomina la imagen y la claridad.",
        client: "Espais d'il·luminació",
        images:[]

    },
    {
        listName: "Santes",
        name: "[Re]Construir la festa. Les Santes de 1979",
        year: "2019", 
        type: "Exposición",
        mainImg: "assets/images/work/santes.jpg",
        text:"Diseño gráfico e identidad visual de exposición conmemorativa de las fiestas de Les Santes de Mataró desde la llegada de la democracia y cómo el trabajo colectivo de los anteriores años reformuló estas tradicionales fiestas. El objetivo fue de trasladar el carácter festivo y revindicativo de las colectividades participantes.",
        client: "Ajuntament de Mataró",
        images:[]
    }
]; 



  constructor() { }

  getWorks() {
    return this.works;
}

  getSingleWork (listName: string ): any {
    return this.works.find( obj => obj.listName === listName )
  }

}




