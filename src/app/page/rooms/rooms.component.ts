import { Component } from '@angular/core';


export interface RoomsElement {
  room: string;
  employee: number;
  description: string;
}

const ELEMENT_DATA: RoomsElement[] = [
  { room: 'Hydrogen', employee: 1.0079, description: 'H'},
  { room: 'Helium', employee: 4.0026, description: 'He'},
  { room: 'Lithium', employee: 6.941, description: 'Li'},
  { room: 'Beryllium', employee: 9.0122, description: 'Be'},
  { room: 'Boron', employee: 10.811, description: 'B'},
  { room: 'Carbon', employee: 12.0107, description: 'C'},
  { room: 'Nitrogen', employee: 14.0067, description: 'N'},
  { room: 'Oxygen', employee: 15.9994, description: 'O'},
  { room: 'Fluorine', employee: 18.9984, description: 'F'},
  { room: 'Neon', employee: 20.1797, description: 'Ne'},
];

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
/**
 * @title Basic use of `<table mat-table>`
 */
export class RoomsComponent {
  displayedColumns: string[] = ['room', 'employee', 'description'];
  dataSource = ELEMENT_DATA;
}
