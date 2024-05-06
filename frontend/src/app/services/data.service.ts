import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSearchProductName(name: string) {
    const response = new Promise(resolve => { // Crea una nuova Promise per la gestione asincrona della richiesta HTTP
      this.http.get(environment.apiUrl + `/products/search_product?search_product=${name}`).subscribe(data => { // Effettua una richiesta GET all'API con il parametro di ricerca
        resolve(data); // Risolve la Promise con i dati ottenuti dalla richiesta
      }, err => { // Gestisce eventuali errori nella richiesta
        console.log(err); // Stampa l'errore nella console
      });
    });
    return response; // Restituisce la Promise
  }
}
