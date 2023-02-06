@extends('admin.layouts.layout')
@section('content')
<div class="pagetitle">
      <h1>Truck Orders</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{url('/admin/home')}}">Home</a></li>
          <li class="breadcrumb-item active">Truck orders</li>
        </ol>
      </nav>
    </div>


              <!-- Recent Sales -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Recent Orders <span>| Today</span></h5>

                  <table class="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Loading Point</th>
                        <th scope="col">Drop Off</th>
                        <th scope="col">Pick up date</th>
                        <th scope="col">Order date</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                          <?php $count = 1; ?>
                      @foreach($orders as $item)
                        <tr>
                          <th scope="row">{{ $count }}</th>
                          <td>{{ $item->productName }}</td>
                          <td>{{ $item->phone }}</td>
                          <td>{{ $item->loadingPoint }}</td>
                          <td>{{ $item->dropoff }}</td>
                          <td>{{ $item->date }}</td>
                          <td>{{ $item->created_at }}</td>
                          <td style="font-size:20px">
                            @if($item->orderStatus==='Pending')
                                <span class="badge bg-danger">{{ $item->orderStatus }}</span>
                            @elseif($item->orderStatus==='Truck Assigned')
                                <span class="badge bg-warning">{{ $item->orderStatus }}</span>

                            @elseif($item->orderStatus==='Completed')
                                <span class="badge bg-success" >{{ $item->orderStatus }}</span>
                            @endif
                          </td>
                        </tr>
                          <?php $count++ ?>
                      @endforeach
                     
              
                    </tbody>
                  </table>

                </div>

              </div>
            </div><!-- End Recent Sales -->

@endsection