import React from 'react'
import AppContainer from '../../Structure/AppContainer'

function AddProducts() {


  

  return (
    <AppContainer title="Add Product">
        <div class="card">
<div class="card-body">
<div class="row">
<div class="col-lg-12 col-sm-6 col-12">
<div class="form-group">
<label>Product Name</label>
<input className='form-control' type="text"/>
</div>
</div>

<div class="col-lg-12 col-sm-6 col-12">
<div class="form-group">
<label>Part Number</label>
<input className='form-control' type="text"/>
</div>
</div>




<div class="col-lg-12">
<div class="form-group">
<label>Description</label>
<textarea class="form-control"></textarea>
</div>
</div>

<div class="col-lg-12 col-sm-6 col-12">
<div class="form-group">
<label>Price</label>
<input className='form-control' type="text"/>
</div>
</div>


<div class="col-lg-12" style={{float:'right',textAlign:'right',alignItems:'end'}}>
<button class="btn btn-submit me-2">Submit</button>
<button class="btn btn-cancel">Cancel</button>
</div>
</div>
</div>
</div>
    </AppContainer>
    
  )
}

export default AddProducts