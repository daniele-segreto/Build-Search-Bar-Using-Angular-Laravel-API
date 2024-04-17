import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { };

  ngOnInit(): void {
  }

  getproductsSearch(name: any) {
      const keyword = name.target.value; // Ottiene il valore dell'input dell'utente
      console.log(keyword); // Stampa il valore dell'input nella console
  }

}
