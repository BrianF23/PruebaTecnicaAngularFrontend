import { Component } from '@angular/core';
import { CarttonService } from '../../services/cartton.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor(private carttonServices:CarttonService) { }

  get resultadosAll(){
    return this.carttonServices.resultadosAll;
  }  

}
