import React from 'react'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Panel() {
  return (
    <>
    <div className='profile'></div>
    <div className='finderbar'>
      <div className='findersubbar'> 
        <div id='item1'>
          <LunchDiningIcon/>

        </div>
        <div id='item2'>
          <SportsTennisIcon/>
        </div>
        <div id='item3'>
          <ShoppingCartIcon/>
      </div>
    </div>
    </div>
    </>
  )
}
