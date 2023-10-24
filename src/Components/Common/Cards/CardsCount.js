import React from 'react'

function CardsCount(props) {
  return (
    <div class={`dash-count ${props.dashtype}`}>
    <div class="dash-counts">
    <h4>{props.count}</h4>
    <h5>{props.title}</h5>
    </div>
    <div class="dash-imgs">
    {props.icon}
    </div>
    </div>
  )
}

export default CardsCount