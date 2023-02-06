@extends('client.layouts.layout')
@section('content')
<div class="pagetitle">
      <h1>Order Truck</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
          <li class="breadcrumb-item active">Truck order</li>
        </ol>
      </nav>
    </div>

<div class="card">
            <div class="card-body">
              <h5 class="card-title">Truck Order Form</h5>
          
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


              <!-- Floating Labels Form -->
              <form action="/add" method='post' class="row g-3">
              @csrf
                <div class="col-md-12">
                  <div class="form-floating">
                    <input type="text" name='productName' value="{{ old('productName') }}" class="form-control" id="floatingName" placeholder="Product Name">
                    <label for="floatingName">Product Name</label>
                    <span style="color:red">@error('productName'){{$message}} @enderror</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                  <select class="form-select" name='packaging' value="{{ old('packaging') }}" id="floatingSelect" aria-label="State">
                      <!-- <option default>Select cargo packaging</option> -->
                      <option value="Containerised">Containerised</option>
                      <option value="Loose">Loose</option>
                    </select>
                    <label for="floatingEmail">Select cargo packaging</label>
                    <span style="color:red">@error('packaging'){{$message}} @enderror</span>

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="number" name='weight' value="{{ old('weight') }}" class="form-control" id="floatingPassword" placeholder="Product weight/volume(in tonnes)">
                    <label for="floatingPassword">Product weight/volume(in tonnes)</label>
                    <span style="color:red">@error('weight'){{$message}} @enderror</span>
                  </div>
                </div>
  
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="text" name='loadingPoint' value="{{ old('loadingPoint') }}" class="form-control" id="floatingPassword" placeholder="Loading/Pick up Point">
                    <label for="floatingPassword">Loading/Pick up Point</label>
                    <span style="color:red">@error('loadingPoint'){{$message}} @enderror</span>

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="date" name='date' value="{{ old('date') }}" class="form-control" id="floatingDate">
                    <label for="floatingDate">Set off Date</label>
                    <span style="color:red">@error('date'){{$message}} @enderror</span>

                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="text" name='dropoff' value="{{ old('dropoff') }}" class="form-control" id="floatingDrop" placeholder="Drop off Point">
                    <label for="floatingDrop">Drop off Point</label>
                    <span style="color:red">@error('dropoff'){{$message}} @enderror</span>

                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="email" name='email' value="{{ old('email') }}" class="form-control" id="floatingEmail" placeholder="Contact Email">
                    <label for="floatingEmail">Contact Email</label>
                    <span style="color:red">@error('email'){{$message}} @enderror</span>

                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="tel" name='phone' value="{{ old('phone') }}" class="form-control" id="floatingTel" placeholder="Contact Phone">
                    <label for="floatingTel">Contact Phone</label>
                    <span style="color:red">@error('phone'){{$message}} @enderror</span>

                  </div>
                </div>
 
                <div class="col-12">
                  <div class="form-floating">
                    <textarea class="form-control" name='extra' value="{{ old('extra') }}" placeholder="Address" id="floatingTextarea" style="height: 100px;"></textarea>
                    <label for="floatingTextarea">Extra Trip Information</label>
                    <span style="color:red">@error('extra'){{$message}} @enderror</span>

                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
              </form><!-- End floating Labels Form -->

            </div>
          </div>

        </div>
      </div>

@endsection