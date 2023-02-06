<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;


class AdminLayoutController extends Controller
{
    //
    public function index(){
        $orders = Order::all();
        return view('admin.layouts.layout',compact('orders'));
    }
}
