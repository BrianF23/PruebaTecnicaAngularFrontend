import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Result, SearchPersonResponse } from '../interfaces/cartooncharacters.interface';

@Injectable({
  providedIn: 'root'
})
export class CarttonService {

  constructor(private http:HttpClient) {
    this.allResultsCharacters();
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultadosAll = JSON.parse(localStorage.getItem('resultados')!) || []; 
    }
  }
  
  private _base = 'https://rickandmortyapi.com/api/';
  private _limit = '1';
  private _historial:string[] = [];

  public resultadosAll:Result[] = [];

  get historial(){
    return [...this._historial];
  }

  SearchCharacters(query:string){
    query = query.trim().toLocaleLowerCase();    
    if(!this._historial.includes(query)){      
      this._historial.unshift(query);      
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial',  JSON.stringify(this._historial));
    }
    this.resultadosAll.pop();
    const params = new HttpParams()
      .set('character', this._limit)
      .set('name', query);
    this.http.get<SearchPersonResponse>(`${this._base}/character`, {params}).subscribe((response) => {
      this.resultadosAll = response.results;     
      localStorage.setItem('resultados',  JSON.stringify(this.resultadosAll));
    });
  }

  allResultsCharacters(){    
    const params = new HttpParams()
      .set('character', this._limit)
    this.http.get<SearchPersonResponse>(`${this._base}/character`, {params}).subscribe((response) => {
      this.resultadosAll = response.results;
    });
  }


  
}
