@extends('client.layouts.layout')
@section('content')
<div class="pagetitle">
      <h1>Trips</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
          <li class="breadcrumb-item active">Trips</li>
        </ol>
      </nav>
    </div>

 <!-- Recent trips -->
 <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" style="float:right" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
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
                  <h5 class="card-title">Recent Trips <span>| Today</span></h5>

                  <table class="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Truck ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="{{url('/trip/1')}}">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="#" class="text-primary">2</a></td>
                        <td>Laptops</td>
                        <td>Gulu</td>
                        <td><span class="badge bg-success">Delivered</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2147</a></th>
                        <td>Bridie Kessler</td>
                        <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                        <td>54</td>
                        <td>Nairobi</td>
                        <td><span class="badge bg-warning">In Transit</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2049</a></th>
                        <td>Ashleigh Langosh</td>
                        <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                        <td>20</td>
                        <td>Mbarara</td>
                        <td><span class="badge bg-success">Delivered</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Angus Grady</td>
                        <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                        <td>100</td>
                        <td>Dar es salaam</td>
                        <td><span class="badge bg-danger">Picked Up</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Raheem Lehner</td>
                        <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                        <td>50</td>
                        <td>Kigali</td>
                        <td><span class="badge bg-success">Delivered</span></td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div><!-- End Recent Sales -->


@endsection