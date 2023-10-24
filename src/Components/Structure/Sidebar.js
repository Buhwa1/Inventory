import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  const toggleDropdown = (e) =>{
    console.log(e.target)
    if(e.target.parentElement.parentElement.classList.contains('submenu')){
      if(e.target.parentElement.classList.contains('subdrop') && e.target.parentElement.nextElementSibling.style.display==='block'){
      e.target.parentElement.classList.remove('subdrop')
      e.target.parentElement.nextElementSibling.style.display='none'
    }
    else{
      e.target.parentElement.classList.add('subdrop')
      e.target.parentElement.nextElementSibling.style.display='block'
    }
  }
    
  }

  const toggleDropdownSubs = (e) =>{
    console.log(e.target)
    // if(e.target.parentElement.parentElement.classList.contains('submenu')){
    //   if(e.target.parentElement.classList.contains('subdrop') && e.target.parentElement.nextElementSibling.style.display==='block'){
    //   e.target.parentElement.classList.remove('subdrop')
    //   e.target.parentElement.nextElementSibling.style.display='none'
    // }
    // else{
    //   e.target.parentElement.classList.add('subdrop')
    //   e.target.parentElement.nextElementSibling.style.display='block'
    // }
  // }
    
  }


  return (
    <div class="sidebar" id="sidebar">
<div class="sidebar-inner slimscroll">
<div style={{width:'100%'}} id="sidebar-menu" class="sidebar-menu">
<ul style={{width:'100%'}}>
<li class="active" style={{width:'100%'}}>
<Link to="/" style={{width:'100%'}}>
<img src="assets/img/icons/dashboard.svg" alt="img"/>
    <span> Dashboard</span> </Link>
</li>

<li class="submenu" onClick={(e)=>toggleDropdown(e)}>
<Link to="">
<img src="assets/img/icons/product.svg" alt="img"/>
  <i data-feather="package"></i>
  <span> Product</span> 
  <span class="menu-arrow"></span>
  </Link>
<ul>
<li><Link to="/products">Product List</Link></li>
<li><Link to="/products/create">Add Product</Link></li>
</ul>
</li>
<li class="submenu" onClick={(e)=>toggleDropdown(e)}>
<Link ><img src="assets/img/icons/sales1.svg" alt="img"/><span> Sales</span> <span class="menu-arrow"></span></Link>
<ul>
<li><a href="saleslist.html">Sales List</a></li>
<li><a href="pos.html">POS</a></li>
<li><a href="pos.html">New Sales</a></li>
<li><a href="salesreturnlists.html">Sales Return List</a></li>
<li><a href="createsalesreturns.html">New Sales Return</a></li>
</ul>
</li>
<li class="submenu">
<a href="javascript:void(0);"><img src="assets/img/icons/purchase1.svg" alt="img"/><span> Purchase</span> <span class="menu-arrow"></span></a>
<ul>
<li><a href="purchaselist.html">Purchase List</a></li>
<li><a href="addpurchase.html">Add Purchase</a></li>
<li><a href="importpurchase.html">Import Purchase</a></li>
</ul>
</li>
<li class="submenu">
<a href="javascript:void(0);"><img src="assets/img/icons/expense1.svg" alt="img"/><span> Expense</span> <span class="menu-arrow"></span></a>
<ul>
<li><a href="expenselist.html">Expense List</a></li>
<li><a href="createexpense.html">Add Expense</a></li>
<li><a href="expensecategory.html">Expense Category</a></li>
</ul>
</li>
<li class="submenu">
<a href="javascript:void(0);"><img src="assets/img/icons/quotation1.svg" alt="img"/><span> Quotation</span> <span class="menu-arrow"></span></a>
<ul>
<li><a href="quotationList.html">Quotation List</a></li>
 <li><a href="addquotation.html">Add Quotation</a></li>
</ul>
</li>

<li class="submenu">
<a href="javascript:void(0);"><img src="assets/img/icons/users1.svg" alt="img"/><span> People</span> <span class="menu-arrow"></span></a>
<ul>
<li><a href="customerlist.html">Customer List</a></li>
<li><a href="addcustomer.html">Add Customer </a></li>
<li><a href="supplierlist.html">Supplier List</a></li>
<li><a href="addsupplier.html">Add Supplier </a></li>
<li><a href="userlist.html">User List</a></li>
<li><a href="adduser.html">Add User</a></li>
<li><a href="storelist.html">Store List</a></li>
<li><a href="addstore.html">Add Store</a></li>
</ul>

</li>
</ul>
</div>
</div>
</div>
  )
}

export default Sidebar