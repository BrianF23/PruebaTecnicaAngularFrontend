import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterFinderComponent } from './character-finder/character-finder.component';

import { ResultsComponent } from './pages/results/results.component';
import { CatalogComponent } from './pages/catalog/catalog.component';


@NgModule({
  declarations: [    
    CatalogComponent,
    CharacterFinderComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogComponent
  ],
})
export class CartoonCharactersModule { }
