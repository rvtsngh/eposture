import React from 'react'
import Video from '../Video/Video'
import WhyUs from '../WhyUs/WhyUs'
import './Feature.css'
import Feature2 from './Feature2/Feature2'
import ScrollAnimation from 'react-animate-on-scroll';


const Feature = () => {
    return (
        <>
            <section className="feature">
                <div className="container_layout">
                    <div className="feature_layout">
                        <ScrollAnimation  animateIn='bounceIn' duration={2} animateOnce={true}>
                            <div className="" style={{ paddingTop: "10rem" }}>
                                <div className="pBox feature_center d-flex ">
                                    <div className="feature_box fFirst">
                                        <div className="feature_list mb-4" style={{ marginTop: "6rem" }}>
                                            <div className="row">
                                                <div className="col-md-3 col-12 feature_list_left">
                                                    <img className="img-fluid feature1_image " style={{ width: "30%" }} src="/images/feature1.png" alt="Feature Image 1" />
                                                </div>
                                                <div className="col-md-9 col-12 feature_list_right pt-3 ">
                                                    <p className="feature_list_text">画像分析・アンケートから結果をフィードバック</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="feature_list mb-4">
                                            <div className="row">
                                                <div className="col-md-3 col-12 feature_list_left">
                                                    <img className="img-fluid " style={{ width: "30%" }} src="/images/feature2.png" alt="Feature Image 2" />
                                                </div>
                                                <div className="col-md-9 col-12 feature_list_right pt-3 ">
                                                    <p className="feature_list_text">アンケートコンテンツを自由に作成</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="feature_list mb-4">
                                            <div className="row">
                                                <div className="col-md-3 col-12 feature_list_left">
                                                    <img className="img-fluid " style={{ width: "30%" }} src="/images/feature3.png" alt="Feature Image 3" />
                                                </div>
                                                <div className="col-md-9 col-12 feature_list_right pt-3 ">
                                                    <p className="feature_list_text">顧客,チーム内で自由に情報を共有</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="feature_list mb-4">
                                            <div className="row">
                                                <div className="col-md-3 col-12 feature_list_left">
                                                    <img className="img-fluid " style={{ width: "30%" }} src="/images/feature4.png" alt="Feature Image 4" />
                                                </div>
                                                <div className="col-md-9 col-12 feature_list_right pt-3 ">
                                                    <p className="feature_list_text">ユーザーの取り組み状況管理</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="feature_list mb-4">
                                            <div className="row">
                                                <div className="col-md-3 col-12 feature_list_left">
                                                    <img className="img-fluid " style={{ width: "30%" }} src="/images/feature5.png" alt="Feature Image 5" />
                                                </div>
                                                <div className="col-md-9 col-12 feature_list_right pt-3 ">
                                                    <p className="feature_list_text">ユーザーへのフィードバックの送信</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="feature_list  mb-4">
                                            <div className="row">
                                                <div className="col-md-3 col-12 feature_list_left">
                                                    <img className="img-fluid " style={{ width: "30%" }} src="/images/feature6.png" alt="Feature Image 6" />
                                                </div>
                                                <div className="col-md-9 col-12 feature_list_right  ">
                                                    <p className="feature_list_text">導入がシンプルで、サーバー構築や運用が不要</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature_box fSecond"></div>

                                    <div className="feature_small_box fThird">
                                        <p className="feature_text">サービスの特徴</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <Feature2 />
                        <Video />
                        <WhyUs />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
