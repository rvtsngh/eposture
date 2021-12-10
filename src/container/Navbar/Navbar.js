import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="main_navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
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
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar
