import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <>
            <section className="service my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 pBox">
                            <div className="service-box first">
                                <div className="center_service">
                                    <div className="container">
                                        <div className="row pb-3">
                                            <div className="col-lg-8">
                                                <span className="service_title">8900万人</span>
                                            </div>
                                            <div className="col-lg-4">
                                                <img className="img-fluid" style={{ marginTop: "-15px", width: "65%" }} src="/images/service1.png" alt="Service Image 1" />
                                            </div>

                                        </div>
                                        <div className="service-para ">
                                            <p>もの国内ユーザー数のLINEを
                                                活用したユーザーに優しい仕組み</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box second "></div>
                        </div>
                        <div className="col-lg-4 pBox">
                            <div className="service-box first">
                                <div className="center_service">
                                    <div className="container">
                                        <div className="row pb-3">
                                            <div className="col-lg-8">
                                                <span className="service_title">AIが</span>
                                            </div>
                                            <div className="col-lg-4">
                                                <img className="img-fluid" style={{ marginTop: "-15px", width: "65%" }} src="/images/service2.png" alt="Service Image 2" />
                                            </div>

                                        </div>
                                        <div className="service-para ">
                                            <p>それぞれのユーザーに最適化した運動方法,食事を自動で提案</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box second "></div>
                        </div>
                        <div className="col-lg-4 pBox">
                            <div className="service-box first">
                                <div className="center_service">
                                    <div className="container">
                                        <div className="row pb-3">
                                            <div className="col-lg-8">
                                                <span className="service_title">自動で</span>
                                            </div>
                                            <div className="col-lg-4">
                                                <img className="img-fluid" style={{ marginTop: "-15px", width: "65%" }} src="/images/service3.png" alt="Service Image 3" />
                                            </div>

                                        </div>
                                        <div className="service-para ">
                                            <p>生活リズムからバイタル数値を
                                                一括で収集し,一箇所で管理</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box second "></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
