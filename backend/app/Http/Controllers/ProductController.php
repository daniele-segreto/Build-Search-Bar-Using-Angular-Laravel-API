<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function products()
    {
        // Recupera tutti i prodotti dal database utilizzando il modello Product e assegnali alla variabile $products.
        $products = Product::all();

        // Restituisce la collezione di prodotti.
        return $products;
    }

    public function searchProduct(Request $request)
    {
        // Inizializza una nuova query per il modello Product.
        $query = Product::query();

        // Ottieni i dati di ricerca dalla richiesta.
        $data = $request->input('search_product');

        // Se sono presenti dati di ricerca...
        if ($data) {
            // Aggiungi una clausola WHERE alla query per cercare il titolo del prodotto che contiene la stringa di ricerca.
            // Aggiungi anche una clausola OR per cercare nella descrizione del prodotto che contiene la stringa di ricerca.
            $query->whereRaw("title LIKE '%" . $data . "%'")
                ->orWhereRaw("description LIKE '%" . $data . "%'");
        }

        // Esegui la query e restituisci i risultati.
        return $query->get();
    }
}
