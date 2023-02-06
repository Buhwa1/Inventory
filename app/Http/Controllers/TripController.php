<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Order;
use App\Truck;
use App\Trips;



class TripController extends Controller
{
    //
    public function index(){
        $orders = Order::all();
        $results = Trips::join('trucks','trucks.id','=','trips.truck_id')
        ->join('orders','orders.id','=','trips.order_id')
        ->get(['plate_number','phone','loadingPoint','dropoff','date','tripStatus']);
    

        return view('admin.trips.index',compact('results','orders'));
    }

    public function show($id){
        $data= Trips::findOrFail($id);

        return view('admin.trips.show',compact('data'));
    }

    public function add(Request $request){
        $request->validate([
            'truck_id'=>'required'
        ]);

        $query = DB::table('trips')->insert([
            'truck_id'=>$request->input('truck_id'),
            'order_id'=>$request->input('order_id')
        ]);

        Order::where('id', $request->input('order_id'))->update(array('orderStatus' => 'Truck Assigned'));
        Truck::where('id', $request->input('truck_id'))->update(array('truckStatus' => 'Unavailable'));
        // $data=Order::find($request->id);

        // $query = DB::table('orders')->update([
        //     $data['status']=>$request->input('status')
        // ]);
        if($query){
            return back()->with('success','Truck has been successfully assigned for this order!!');
        }
        else{
            return back()->with('fail','Truck was not assigned!!');
        }
    }
}
