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
        type: "Exhibition",
        mainImg: "assets/images/work/perich.png"
    },
    {
        listName: "Mapes",
        name: "Mapes, país, futur. Centenari de l'exposició cartogràfica catalana (1919)",
        year: "2020", 
        type: "Exhibition",
        mainImg: "assets/images/work/mapes.png"
    },
    {
        listName: "Espais",
        name: "Espais d'il·luminació",
        year: "2019", 
        type: "Web design",
        mainImg: "assets/images/work/espais.jpg"
    },
    {
        listName: "Santes",
        name: "[Re]Construir la festa. Les santes de 1979",
        year: "2019", 
        type: "Exhibition",
        mainImg: "assets/images/work/santes.jpg"
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




