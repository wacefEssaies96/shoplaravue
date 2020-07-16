<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class SinglePageController extends Controller
{

    public function index(){
        $products = Product::paginate(10);
        return response()->json($products);
    }

    public function store(Request $request){
        $product = Product::create($request->all());
        if($product){
            $products = Product::paginate(10);
            return response()->json($products);  
        }
    }
}
