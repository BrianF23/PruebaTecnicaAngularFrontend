import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarttonService } from '../services/cartton.service';

@Component({
  selector: 'app-character-finder',
  templateUrl: './character-finder.component.html'
})
export class CharacterFinderComponent  {

  constructor(private carttonServices:CarttonService ) { }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){return;}
    this.carttonServices.SearchCharacters(valor);
    this.txtBuscar.nativeElement.value = '';
  }
  

}
