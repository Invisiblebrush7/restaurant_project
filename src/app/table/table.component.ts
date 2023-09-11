import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableFillService } from '../service/table-fill/table-fill.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'species',
    'type',
    'gender',
    'created',
  ];
  dataSource: any;
  characters: CharacterElement[] = [];

  constructor(private charactersService: TableFillService) {
    this.getCharacters();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue, this.dataSource.filter);
    this.dataSource.filter = filterValue.toLowerCase();
  }

  async getCharacters() {
    const response = await this.charactersService.getCharacters();
    response.subscribe((apiData) => {
      this.characters = apiData['results'];
      this.dataSource = new MatTableDataSource(this.characters);
    });
  }
}
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
