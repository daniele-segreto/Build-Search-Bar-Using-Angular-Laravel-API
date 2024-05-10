import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { };

  ngOnInit(): void {
  }

  getproductsSearch(name: any) {
    const keyword = name.target.value; // Ottiene il valore dell'input dell'utente
    // console.log(keyword); // Commentato, quindi non verrà stampato il valore dell'input nella console

    const search = this.dataService.getSearchProductName(keyword).then(response => { // Chiama il metodo del servizio per effettuare la ricerca
      this.data = response; // Assegna i dati ottenuti dalla ricerca alla variabile 'data'
      console.log(this.data); // Stampa i dati ottenuti dalla ricerca nella console
    })
  }

}
