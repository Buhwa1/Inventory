@extends('admin.layouts.layout')
@section('content')

     <!-- Card with header and footer -->
     <div class="card">
            <div class="card-header">
                  <div class="col-sm-12 mt-2" style="float:right">
                    Order from {{ $data['email'] }}
                  </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">
              Order Status 
              @if( $data['status'] ==='Pending')
                    {{ $data['status'] }} <i class="bi bi-x-circle text-danger"></i>
              @elseif( $data['status'] ==='Completed')
                    {{ $data['status']}} <i class="bi bi-check-circle text-success"></i>
              @endif


              
              </h5>
              <div class="row">
              <div class="col-md-6">
              <h6><b>Pick Up Date :</b> {{ $data['date'] }}</h6>
                <h6><b>Contact:</b> {{ $data['phone'] }}</h6>
                <h6><b>Email:</b> {{ $data['email'] }}</h6>
                <h6><b>Product:</b> {{ $data['productName'] }}</h6>
                <h6><b>Weight:</b> {{ $data['weight'] }}</h6>
                <h6><b>Packaging:</b> {{ $data['packaging'] }}</h6>
                <h6><b>Pick Up Location:</b> {{ $data['loadingPoint'] }}</h6>
                <h6><b>Drop Off:</b> {{ $data['dropoff'] }}</h6>

              </div>
              <div class="col-md-6">

              @if(Session::get('success'))
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ Session::get('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
              @endif

              @if(Session::get('fail'))
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ Session::get('fail') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
              @endif

              <form method="post" action="/add">
              @csrf
                  <div class="col-md-6">
                  <select id="inputState" name="truck_id" class="form-select" required>
                    <option selected>Assign Truck...</option>
                    @foreach($trucks as $truck)
                        @if($truck->status==='Available')
                          <option value="{{$truck->id}}">
                          {{ $truck->plate_number }}
                          </option>
                        @endif
                    @endforeach
                  </select>
                  <span style="color:red">@error('truck_id'){{$message}} @enderror</span>
                  <input type="hidden" name="order_id" value="{{$data['id']}}">
                  <input type="hidden" name="status" value="Assigned">
                </div>
                <div class="col-md-6 mt-2">
                <button type="submit" class="btn btn-primary" style="float:right">Submit</button>

                    </div>
                </form>
              </div>
              </div>
              
               
            </div>
            <div class="card-footer">
            Order sent on {{ $data['created_at'] }}
            </div>
          </div><!-- End Card with header and footer -->

@endsection