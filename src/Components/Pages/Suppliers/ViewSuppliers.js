import React, { useEffect, useState } from 'react'
import AppContainer from '../../Structure/AppContainer'
import axios from 'axios';

function ViewSuppliers() {


  const [supplierList,setSupplierList] = useState(false)

  useEffect(() => {
    getSuppliers()
  }, [])

  const getSuppliers = async() =>{
    await axios.post('http://localhost:8000/api/supplier/list')
      .then(response => {
        // Handle the response data
        setSupplierList(response.data.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });

  }


  return (
    <AppContainer title="Suppliers List">
        <div class="card">
        <div class="card-body">

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
<th>Supplier Name</th>
<th>Contact</th>
<th>Action</th>
</tr>
</thead>
<tbody>
  {Array.isArray(supplierList) && supplierList.map((item,key)=>
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
  <td>{item.supplier_name}</td>
  <td>{item.contact_information}</td>
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

export default ViewSuppliers