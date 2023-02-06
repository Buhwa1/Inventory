<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Order;

class TripController extends Controller
{
    //
    public function index(){
        return view('admin.trips.index');
    }

    public function show($id){
        return view('admin.trips.show',['id'=>$id]);
    }

    public function add(Request $request){
        $request->validate([
            'truck_id'=>'required'
        ]);

        $query = DB::table('trips')->insert([
            'truck_id'=>$request->input('truck_id'),
            'order_id'=>$request->input('order_id')
        ]);
        $data=Order::find($request->id);

        $query = DB::table('orders')->update([
            $data['status']=>$request->input('status')
        ]);
        if($query){
            return back()->with('success','Truck has been successfully assigned for this order!!');
        }
        else{
            return back()->with('fail','Truck was not assigned!!');
        }
    }
}
