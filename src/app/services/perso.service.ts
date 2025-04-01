import { Injectable } from '@angular/core';
import { PersoModel } from '../interfaces/perso-model';
import { CaracModel } from '../interfaces/carac-model';

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  persoList: PersoModel[] = [
    {
      id: 0,
      name: "dorfir",
      caracs: [16,12,14,10,11,9],
    },
    {
      id: 1,
      name: "karlath",
      caracs: [11,18,14,10,15,12],
    },
    {
      id: 2,
      name: "elmshore",
      caracs: [14,12,14,10,17,9],
    },
  ]

  caracModel: CaracModel = {
    names: [
      "force", "agilité", "constitution", "sagesse", "intelligence", "charisme"
    ]
  }

  constructor() { }

  getAllPersos() : PersoModel[] {
    return this.persoList
  }

  getPersoById(id : number) : PersoModel|undefined {
    return this.persoList.find((elem) => elem.id == id)
  }

  getCaracModel() : CaracModel {
    return this.caracModel
  }
  
}
