import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableFillService {
  url = 'https://rickandmortyapi.com/api/character';
  characters: any;

  constructor(private http: HttpClient) {}

  async getCharacters(): Promise<Observable<Response>> {
    return this.http.get<Response>(this.url);
  }
}
type Response = {
  [key: string]: any;
};
export interface CharacterElement {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Object;
  location: Object;
  image: string;
  episode: [];
  url: string;
  created: string;
}
