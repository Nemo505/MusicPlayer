import React from 'react'

const Footer = () => {
  return (

    <footer className=" " style={{background: "linear-gradient(to right bottom, #FFA49F,#1ae5ec)", padding:"10px"}}>
      <div className="container-fluid text-white">
          <div className="row">
              <div className="col-6">
                  <script>document.write(new Date().getFullYear())</script> © SCN
              </div>
              <div className="col-6">
                  <div className="text-sm-end d-none d-sm-block">
                      Designed & Developed by <a href="" className="text-decoration-underline text-black" target="_blank">Kazue</a>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  )
}

export default Footer