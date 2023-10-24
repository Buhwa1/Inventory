import React, { useEffect, useState } from 'react'
import AppContainer from '../../Structure/AppContainer'
import axios from 'axios';

function ViewProducts() {


    const [productList,setProductList] = useState(false)

    useEffect(() => {
        getProducts()
    }, [])
console.log(Array.isArray(productList))
    const getProducts = async() =>{
      await axios.post('http://localhost:8000/api/product/list')
        .then(response => {
          // Handle the response data
          setProductList(response.data.data);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });

    }
    

  return (
    <AppContainer title="Product List">
<div class="card">
<div class="card-body">
{/* <div class="table-top">
<div class="search-set">
<div class="search-path">
<a class="btn btn-filter" id="filter_search">
<img src="assets/img/icons/filter.svg" alt="img"/>
<span><img src="assets/img/icons/closes.svg" alt="img"/></span>
</a>
</div>
<div class="search-input">
<a class="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img"/></a>
</div>
</div>
<div class="wordset">
<ul>
<li>
<a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img"/></a>
</li>
<li>
<a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img"/></a>
</li>
<li>
<a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img"/></a>
</li>
</ul>
</div>
</div>

<div class="card mb-0" id="filter_inputs">
<div class="card-body pb-0">
<div class="row">
<div class="col-lg-12 col-sm-12">
<div class="row">
<div class="col-lg col-sm-6 col-12">
<div class="form-group">
<select class="select">
<option>Choose Product</option>
<option>Macbook pro</option>
<option>Orange</option>
</select>
</div>
</div>
<div class="col-lg col-sm-6 col-12">
<div class="form-group">
<select class="select">
<option>Choose Category</option>
<option>Computers</option>
<option>Fruits</option>
</select>
</div>
</div>
<div class="col-lg col-sm-6 col-12">
<div class="form-group">
<select class="select">
<option>Choose Sub Category</option>
<option>Computer</option>
</select>
</div>
</div>
<div class="col-lg col-sm-6 col-12">
<div class="form-group">
<select class="select">
<option>Brand</option>
<option>N/D</option>
</select>
</div>
</div>
<div class="col-lg col-sm-6 col-12 ">
<div class="form-group">
<select class="select">
<option>Price</option>
<option>150.00</option>
</select>
</div>
</div>
<div class="col-lg-1 col-sm-6 col-12">
<div class="form-group">
<a class="btn btn-filters ms-auto"><img src="assets/img/icons/search-whites.svg" alt="img"/></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div> */}

<div class="table-responsive">
<table class="table  datanew">
<thead>
<tr>
<th>
<label class="checkboxs">
<input type="checkbox" id="select-all"/>
<span class="checkmarks"></span>
</label>
</th>
<th>#NO</th>
<th>Part Number</th>
<th>Quantity</th>
<th>Re-Order Level</th>
<th>Price</th>
<th>Supplier</th>
<th>Action</th>
</tr>
</thead>
<tbody>
  {Array.isArray(productList) && productList.map((item,key)=>
  <tr>
  <td>
  <label class="checkboxs">
  <input type="checkbox"/>
  <span class="checkmarks"></span>
  </label>
  </td>
  <td>
 {key+1}
  </td>
  <td>{item.part_number}</td>
  <td>{item.quantity}</td>
  <td>{item.reorder_level}</td>
  <td>{item.price}</td>
  <td>{item.supplier_id}</td>
  {/* <td>{item.category}</td> */}
  <td>
  <a class="me-3" href="product-details.html">
  <img src="assets/img/icons/eye.svg" alt="img"/>
  </a>
  <a class="me-3" href="editproduct.html">
  <img src="assets/img/icons/edit.svg" alt="img"/>
  </a>
  <a class="confirm-text" href="javascript:void(0);">
  <img src="assets/img/icons/delete.svg" alt="img"/>
  </a>
  </td>
  </tr>
  )}




</tbody>
</table>
</div>
</div>
</div>
    </AppContainer>
    
  )
}

export default ViewProducts