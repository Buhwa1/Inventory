import React, { useEffect, useState } from 'react'
import AppContainer from '../../Structure/AppContainer'
import axios from 'axios';

function ViewCustomers() {


  const [customerList,setCustomerList] = useState(false)

  useEffect(() => {
    getCustomers()
  }, [])

  const getCustomers = async() =>{
    await axios.post('http://localhost:8000/api/customers/list')
      .then(response => {
        // Handle the response data
        setCustomerList(response.data.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });

  }


  return (
    <AppContainer title="Customer List">
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
<th>Customer Name</th>
<th>Contact</th>
<th>Address</th>
<th>Action</th>
</tr>
</thead>
<tbody>
  {Array.isArray(customerList) && customerList.map((item,key)=>
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
  <td>{item.customer_name}</td>
  <td>{item.contact_information}</td>
  <td>{item.address}</td>
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

export default ViewCustomers