import React from 'react'

function PageHeader(props) {
  return (
    <div class="page-header">
    <div class="page-title">
    <h4>{props.title}</h4>
    {/* <h6>Create new product</h6> */}
    </div>
    </div>
  )
}

export default PageHeader