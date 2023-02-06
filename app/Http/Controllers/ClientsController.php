<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class ClientsController extends Controller
{
    //
    public function index(){
        return view('client.order.index');
    }

     public function home(){
        return view('client.home');
    }

    public function show($id){
        return view('client.order.show',['id'=>$id]);
    }

    public function create(){
        return view('client.order.create');
    }
    public function add(Request $request){
        $request->validate([
            'productName'=>'required',
            'email'=>'required|email|unique:orders',
            'packaging'=>'required',
            'phone'=>'required',
            'dropoff'=>'required',
            'loadingPoint'=>'required',
            'extra'=>'required',
            'date'=>'required',
            'weight'=>'required'
        ]);

        $query = DB::table('orders')->insert([
            'productName'=>$request->input('productName'),
            'email'=>$request->input('email'),
            'packaging'=>$request->input('packaging'),
            'phone'=>$request->input('phone'),
            'dropoff'=>$request->input('dropoff'),
            'loadingPoint'=>$request->input('loadingPoint'),
            'extra'=>$request->input('extra'),
            'date'=>$request->input('date'),
            'weight'=>$request->input('weight')
        ]);
        if($query){
            return back()->with('success','Data has been successfully inserted!!');
        }
        else{
            return back()->with('fail','Data was not inserted!!');
        }
    }
}
