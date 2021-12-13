import React from 'react'
import './Service.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Service = () => {
    return (
        <>
            <section className="service my-5 pt-5">
                <div className="container "> 
                    <div className="row ">
                        <div className="col-lg-4 col-12  mx-auto  pBox service_responsive">
                          
                                <ScrollAnimation duration={3} animateIn='bounceInLeft' animateOnce={true}>
                                   
                                        <div className="service-box first">
                                            <div className="center_service d-flex ">

                                                <div className="container">
                                                    <div className="row pb-3">
                                                        <div className="col-8">
                                                            <span className="service_title">8900万人</span>
                                                        </div>
                                                        <div className="col-4">
                                                            <img className="img-fluid service_img" style={{ marginTop: "-15px", width: "65%" }} src="/images/service1.png" alt="Service Image 1" />
                                                        </div>

                                                    </div>
                                                    <div className="service-para ">
                                                        <p>もの国内ユーザー数のLINEを <br />
                                                            活用したユーザーに優しい仕組み</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="service-box second "></div>
                                    
                                </ScrollAnimation>

                           




                        </div>
                        <div className="col-lg-4 col-11 mx-auto pBox  service_responsive">
                          
                                <ScrollAnimation duration={3} animateIn='bounceInDown' animateOnce={true}>
                                   
                                        <div className="service-box first">
                                            <div className="center_service">
                                                <div className="container">
                                                    <div className="row pb-3">
                                                        <div className="col-8">
                                                            <span className="service_title">AIが</span>
                                                        </div>
                                                        <div className="col-4">
                                                            <img className="img-fluid" style={{ marginTop: "-15px", width: "65%" }} src="/images/service2.png" alt="Service Image 2" />
                                                        </div>

                                                    </div>
                                                    <div className="service-para ">
                                                        <p>それぞれのユーザーに最適化した <br />
                                                            運動方法,食事を自動で提案</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service-box second "></div>
                                    
                                </ScrollAnimation>


                           


                        </div>
                        <div className="col-lg-4 col-11 mx-auto pBox service_responsive">
                            
                                <ScrollAnimation  duration={3} animateIn='bounceInRight' animateOnce={true}>
                                
                                    <div className="service-box first">
                                        <div className="center_service">
                                            <div className="container">
                                                <div className="row pb-3">
                                                    <div className="col-8">
                                                        <span className="service_title">自動で</span>
                                                    </div>
                                                    <div className="col-4">
                                                        <img className="img-fluid" style={{ marginTop: "-15px", width: "65%" }} src="/images/service3.png" alt="Service Image 3" />
                                                    </div>

                                                </div>
                                                <div className="service-para ">
                                                    <p>生活リズムからバイタル数値を <br />
                                                        一括で収集し,一箇所で管理</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-box second "></div>
                                
                                </ScrollAnimation>
                                
                            

                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
