<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Order;
use App\Truck;


class TruckController extends Controller
{
    //
    public function index(){
        $orders = Order::all();
        return view('admin.trucks.index');
    }

    public function show($id){
        return view('admin.trucks.show',['id'=>$id]);
    }
}
