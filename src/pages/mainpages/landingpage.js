import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Secpage from '../secpage'

export default function Landingpage() {
  return (
    <div>
    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
    <ParallaxLayer offset={0} speed={0.4}>
      <div className="animation_layer parallax" id="back"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.3}>
      <div className="animation_layer parallax" id="three"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.2}>
      <div className="animation_layer parallax" id="two"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.1}>
      <div className="animation_layer parallax" id="one"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.1}>
      <Secpage/>
    </ParallaxLayer>
  </Parallax></div>
  )
}
