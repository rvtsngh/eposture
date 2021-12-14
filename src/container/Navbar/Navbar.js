import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="main_navbar" style={{overflowX: "hidden"}}>
        <div className="nav_container">
          {/* <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img className="img-fluid " style={{ width: "50%" }} src="/images/logo.png" alt="Logo Image" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item mx-5 px-5">
                                        <a className="nav-link logoLink" aria-current="page" href="#">LINEとAIを活用したリハビリ・コンディションイングオンラインサポート</a>
                                    </li>
                                    <div className=" pBox">
                                    <div className="nav_box nav_box_first pt-1">
                                        <p>お問合せはこちら</p>
                                    </div>
                                    <div className="nav_box nav_box_second"></div>
                                </div>

                                </ul>
                                
                            </div>
                        </div>
                    </nav> */}
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img className="img-fluid mt-3 " style={{ width: "50%" }} src="/images/logo.png" alt="Logo Image" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-lg-5 me-auto">
                  <li className="nav-item ">
                    <a className="nav-link logoLink mt-2 " aria-current="page" href="#">LINEとAIを活用したリハビリ・コンディションイングオンラインサポート</a>
                  </li>
                </ul>
                 <div className="d-flex nav-item" style={{marginRight:"17rem", marginTop:"-30px"}}>
                 {/* <div className="nav-item "> */}
                    <Link to="/contact" className="nav-link">
                      <div className=" pBox">
                                    <div className="nav_box nav_box_first pt-1">
                                        <p>お問合せはこちら</p>
                                    </div>
                                    <div className="nav_box nav_box_second"></div>
                                    </div>
                    </Link>
                  {/* </div> */}
                 </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Navbar
