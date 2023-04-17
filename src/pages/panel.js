import React from 'react'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from 'react-bootstrap/Button';
export default function Panel({filterfood,filtershopping,filtersport}) {
  return (
    <>
    <div className='profile'></div>
    <div className='finderbar'>
      <div className='findersubbar'> 
      <div className='findersubsubbar'>
        <div id='item1' onClick={filterfood}>
          <div id='itemsub1' >
          <LunchDiningIcon/>
          </div>
        </div>
        <div id='item2' onClick={filtersport}>
          <div id='itemsub2'>
            <SportsTennisIcon/>
          </div>
        </div>
        <div id='item3' onClick={filtershopping}>
          <div id='itemsub3' >
          <ShoppingCartIcon/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
