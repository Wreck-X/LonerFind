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
      <div className='findersubsubbar'>
        <div id='item1'>
          <div id='itemsub1'>
          <LunchDiningIcon/>
          </div>
        </div>
        <div id='item2'>
          <div id='itemsub2'>
            <SportsTennisIcon/>
          </div>
        </div>
        <div id='item3'>
          <div id='itemsub3'>
          <ShoppingCartIcon/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
