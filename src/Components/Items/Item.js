
import React from 'react'

function Item({image}) {

  return (
  
    <div className="item">
        <div className="item_image">
            <img src={image}/>
        </div>
    </div>
  )
}

export default Item


