import { Component, Input, Output } from '@angular/core';
import { PersoModel } from '../../interfaces/perso-model';
import { EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recap-perso',
  imports: [RouterLink],
  templateUrl: './recap-perso.component.html',
  styleUrl: './recap-perso.component.scss'
})

export class RecapPersoComponent {
  @Input() perso!:PersoModel
  @Output() clickedEvent = new EventEmitter<number>()

  recapClicked(id: number) {
    console.log(`recap clicked (child) : ${id}`)
    this.clickedEvent.emit(id)
  }
}
