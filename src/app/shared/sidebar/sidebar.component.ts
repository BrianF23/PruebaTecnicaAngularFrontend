import { Component } from '@angular/core';
import { CarttonService } from 'src/app/cartoon-characters/services/cartton.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    html,body{
      height: 100%;
    }

    #siderbar{
        height: 100%;
        min-height: 100vh;
        min-width: 210px;
        background-color: #d3f4fd!important;
    }
    
    `
  ]
})
export class SidebarComponent  {

  constructor(private carttonServices:CarttonService) { }

  get historial(){
    return this.carttonServices.historial;
  }

  buscar(arg: string)  {
    this.carttonServices.SearchCharacters(arg);
  }

}
