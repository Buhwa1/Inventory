import React from 'react'
import { Link } from 'react-router-dom'

function RecentCustomers() {
  return (
    <div class="card flex-fill">
<div class="card-header pb-0 d-flex justify-content-between align-items-center">
<h4 class="card-title mb-0">Recently Customers</h4>
<div class="dropdown">
<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" class="dropset">
<i class="fa fa-ellipsis-v"></i>
</a>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<li>
<Link to="/customer" class="dropdown-item">Customer List</Link>
</li>
<li>
<a href="/customer/create" class="dropdown-item">Customer Add</a>
</li>
</ul>
</div>
</div>
<div class="card-body">
<div class="table-responsive dataview">
<table class="table datatable ">
<thead>
<tr>
<th>Sno</th>
<th>Products</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td class="productimgname">
<a href="productlist.html" class="product-img">
<img src="assets/img/product/product22.jpg" alt="product"/>
</a>
<a href="productlist.html">Apple Earpods</a>
</td>
<td>$891.2</td>
</tr>
<tr>
<td>2</td>
<td class="productimgname">
<a href="productlist.html" class="product-img">
<img src="assets/img/product/product23.jpg" alt="product"/>
</a>
<a href="productlist.html">iPhone 11</a>
</td>
<td>$668.51</td>
</tr>
<tr>
<td>3</td>
<td class="productimgname">
<a href="productlist.html" class="product-img">
<img src="assets/img/product/product24.jpg" alt="product"/>
</a>
<a href="productlist.html">samsung</a>
</td>
<td>$522.29</td>
</tr>
<tr>
<td>4</td>
<td class="productimgname">
<a href="productlist.html" class="product-img">
<img src="assets/img/product/product6.jpg" alt="product"/>
</a>
<a href="productlist.html">Macbook Pro</a>
</td>
<td>$291.01</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
  )
}

export default RecentCustomers