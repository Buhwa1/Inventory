import React, { useEffect, useState } from 'react'
import AppContainer from '../../Structure/AppContainer'
import axios from 'axios';

function ViewUsers() {


  const [userList,setUserList] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async() =>{
    await axios.post('http://localhost:8000/api/user/list')
      .then(response => {
        // Handle the response data
        setUserList(response.data.users);
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
<th>Firstname</th>
<th>Lastname</th>
<th>Username</th>
<th>Action</th>
</tr>
</thead>
<tbody>
  {Array.isArray(userList) && userList.map((item,key)=>
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
  <td>{item.firstname}</td>
  <td>{item.lastname}</td>
  <td>{item.username}</td>
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

export default ViewUsers