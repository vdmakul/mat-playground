import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  public results: Result[] = RESULTS;

  constructor() { }

  ngOnInit() {
  }

}


export interface Result {
  rank: number,
  bib: number,
  surname: string,
  name: string,
  year: number,
  group: string,
  country: string,
  club: string,
  time: number,
  penalties: number,
  finalTime: number,
  //todo second hear
  ignored: string

}

const RESULTS: Result[] = [
  {rank:1, bib:10, surname: 'Petrauskaite', name: 'Kamile', year: 2002, group: 'U-15', country: 'LIT', club: 'Regesa', time: 111.44, penalties: 6, finalTime: 117.44, ignored: '105,54 16 121,54 117,44'},
  {rank:2, bib:102, surname: 'Raudsalu', name: 'Kulli', year: 1973, group: 'Open', country: 'EST', club: 'Nelson', time: 123.00, penalties: 6, finalTime: 129.00, ignored: '125,33 10 135,33 129,00'},
  {rank:3, bib:11, surname: 'Abramovičiūte', name: 'Dominyka', year: 2002, group: 'U-15', country: 'LIT', club: 'Srautas', time: 121.71, penalties: 56, finalTime: 177.71, ignored: '123,5 8 131,50 131,50'},
  {rank:4, bib:13, surname: 'Lipska', name: 'Dalija', year: 2001, group: 'U-15', country: 'LIT', club: 'Srautas', time: 121.88, penalties: 106, finalTime: 227.88, ignored: '142,77 6 148,77 148,77'},
  {rank:5, bib:2, surname: 'Celmiņa', name: 'Elīna', year: 2003, group: 'U-15', country: 'LAT', club: 'VBSS', time: 159.96, penalties: 10, finalTime: 169.96, ignored: '149,97 6 155,97 155,97'},
  {rank:6, bib:20, surname: 'Grāvīte', name: 'Daila', year: 1999, group: 'U-18', country: 'LAT', club: 'Baldone', time: 162.95, penalties: 6, finalTime: 168.95, ignored: '144,44 58 202,44 168,95'},
  {rank:7, bib:1, surname: 'Šēfere', name: 'Elīza', year: 2002, group: 'U-15', country: 'LAT', club: 'NAS', time: 186.10, penalties: 114, finalTime: 300.10, ignored: '169,54 6 175,54 175,54'},
  {rank:8, bib:17, surname: 'Glēzere', name: 'Annija', year: 2002, group: 'U-15', country: 'LAT', club: 'SK Atvars', time: 146.96, penalties: 56, finalTime: 202.96, ignored: '162,26 14 176,26 176,26'},
  {rank:9, bib:9, surname: 'Zandere', name: 'Marta', year: 2002, group: 'U-15', country: 'LAT', club: 'Rīdzene', time: 132.66, penalties: 56, finalTime: 188.66, ignored: '211,41 62 273,41 188,66'},
  {rank:10, bib:8, surname: 'Midttun', name: 'Ingvile', year: 2003, group: 'U-15', country: 'LIT', club: 'Volatilis', time: 181.09, penalties: 18, finalTime: 199.09, ignored: 'DNF 999 999,00 199,09'},

];
