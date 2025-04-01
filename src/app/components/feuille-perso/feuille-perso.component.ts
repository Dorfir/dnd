import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersoModel } from '../../interfaces/perso-model';
import { PersoService } from '../../services/perso.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-feuille-perso',
  imports: [CommonModule,RouterLink],
  templateUrl: './feuille-perso.component.html',
  styleUrl: './feuille-perso.component.scss'
})
export class FeuillePersoComponent {
  
  route:ActivatedRoute = inject(ActivatedRoute)
  persoService:PersoService = inject(PersoService)


  // @Input() id!: number
  @Output() clickedEvent = new EventEmitter<number>()
  perso!:PersoModel|undefined

  constructor() {
    const url_id: number = this.route.snapshot.params['id']
    console.log(url_id)
    this.perso = this.persoService.getPersoById(url_id)
    console.table(this.perso)
  }

  feuilleClicked(clickedID: number|undefined) {
    console.log(`feuille clicked (child): ${clickedID}`)
    this.clickedEvent.emit(clickedID)
  }
}
