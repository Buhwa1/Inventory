<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TripController extends Controller
{
    //
    public function index(){
        return view('client.trips.index');
    }

    public function show($id){
        return view('client.trips.show',['id'=>$id]);
    }
}
