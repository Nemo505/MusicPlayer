import React from 'react'

const Navbar = () => {
  return (
      <nav className="navbar" style={{background: "linear-gradient(to right bottom, #FFA49F,#1ae5ec)", width:"100%", position:"fixed"}}>
        <a className="navbar-brand mx-3" href="#">
          <img src="../../src/assets/image/logo.png"  className="d-inline-block align-top me-3" height={30} width={30} alt=""/>
          Maple Player
        </a>
      </nav>
  )
}

export default Navbar