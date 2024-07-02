import React from 'react'
import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt='logo'/>
      <h1>My Investment Calculator</h1>
    </div>
  )
}
