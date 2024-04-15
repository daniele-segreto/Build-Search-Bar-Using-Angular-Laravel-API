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
}
