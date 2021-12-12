import React from 'react'
import './Hero.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
    return (
        <section className="hero my-5">
            <div className="box1">
                <div className="container mt-5">
                    <div className="a_box hero_margin" >
                        <div className="row ">
                            <div className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center ">
                                <ScrollAnimation delay={400} animateIn='bounceInLeft' animateOnce={true}>
                                    <div className="box">
                                        {/* <ScrollAnimation animateIn='fadeIn'> */}
                                            <div className="center">
                                                <span className="text mx-auto">
                                                    AIで顧客との継続的な
                                                    <br />
                                                    関係性を築き上げる。
                                                </span>
                                            </div>
                                        {/* </ScrollAnimation> */}
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                                <ScrollAnimation delay={800} animateIn='bounceInRight' animateOnce={true}>
                                    <img className="img-fluid imgRes" src="/images/hero .png" alt="hero Image" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
