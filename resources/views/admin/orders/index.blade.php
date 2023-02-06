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
<div class="card">
            <div class="card-body">
              <h5 class="card-title">Order details</h5>

              <!-- Table with hoverable rows -->
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Packaging</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Loading Point</th>
                    <th scope="col">Drop Off</th>
                    <th scope="col">Pick up date</th>
                    <th scope="col">Order date</th>

                  </tr>
                </thead>
                <tbody>
                <?php $count = 1; ?>
                @foreach($orders as $item)

                  <tr>
                    <th scope="row">{{ $count }}</th>
                    <td>{{ $item->productName }}</td>
                    <td>{{ $item->packaging }}</td>
                    <td>{{ $item->weight }}</td>
                    <td>{{ $item->email }}</td>
                    <td>{{ $item->phone }}</td>
                    <td>{{ $item->loadingPoint }}</td>
                    <td>{{ $item->dropoff }}</td>
                    <td>{{ $item->date }}</td>
                    <td>{{ $item->created_at }}</td>
                  </tr>
                 <?php $count++ ?>
                  @endforeach
                
                </tbody>
              </table>
              <!-- End Table with hoverable rows -->

            </div>
          </div>
@endsection