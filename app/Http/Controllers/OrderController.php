<?php

namespace App\Http\Controllers;
use App\Order;
use App\Truck;



use Illuminate\Http\Request;


class OrderController extends Controller
{
    //
    public function index(){
        $orders = Order::all();
        return view('admin.orders.index',compact('orders'));
    }

    public function show($id){
        $orders = Order::all();
        $trucks = Truck::all();


        $data= Order::findOrFail($id);
        // return view('admin.layouts.layout',compact('orders'));

        return view('admin.orders.show',compact('data','id','orders','trucks'));

    }
}
