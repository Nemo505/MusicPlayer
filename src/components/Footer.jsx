import React from 'react'

const Footer = () => {
  return (

    <footer class=" " style={{background: "linear-gradient(to right bottom, #FFA49F,#1ae5ec)", padding:"10px"}}>
      <div class="container-fluid text-white">
          <div class="row">
              <div class="col-6">
                  <script>document.write(new Date().getFullYear())</script> © SCN
              </div>
              <div class="col-6">
                  <div class="text-sm-end d-none d-sm-block">
                      Designed & Developed by <a href="" class="text-decoration-underline text-black" target="_blank">Kazue</a>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  )
}

export default Footer