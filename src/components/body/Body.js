import React from 'react'
import BodyLeft from '../bodyleft/BodyLeft'
import BodyRight from '../bodyright/BodyRight'

import './Body.css'

const Body = () => {
  return (
    <div className='body'>
                
                <BodyLeft/>
                <BodyRight/>
    </div>
  )
}

export default Body