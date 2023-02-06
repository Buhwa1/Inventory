<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class HomeController extends Controller
{
    //
    public function index(){
        $orders = Order::all();

        return view('admin.home',compact('orders'));
    }
}
