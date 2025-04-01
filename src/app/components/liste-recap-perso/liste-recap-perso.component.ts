import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecapPersoComponent } from '../recap-perso/recap-perso.component';
import { PersoService } from '../../services/perso.service';
import { PersoModel } from '../../interfaces/perso-model';

@Component({
  selector: 'app-liste-recap-perso',
  imports: [CommonModule, RecapPersoComponent],
  templateUrl: './liste-recap-perso.component.html',
  styleUrl: './liste-recap-perso.component.scss'
})
export class ListeRecapPersoComponent {

  persoService: PersoService = inject(PersoService)
  persos: PersoModel[] = this.persoService.getAllPersos()

  childClicked(id: number) {
    console.log(`feuille clicked (parent) : ${id}`)
    console.log(this.persoService.getPersoById(id))
  }

}
