import React from 'react'
import './Feature2.css'
import ScrollAnimation from 'react-animate-on-scroll';


const FeatureTwo = () => {
    return (
        <>
            <div className="featureTwo" style={{ marginTop: "50rem" }}>
                <ScrollAnimation animateIn='bounceInDown' duration={2} animateOnce={true}>
                    <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 mx-auto">
                    <div className="featureTwo_heading">
                            <div className="fTwoBox">
                                <div className="featureTwo_box fTwo_one">
                                    <div className="row fm">
                                        <div className="col-sm-6 col-5 featureTwo_left">
                                            <img className="img-fluid " style={{ width: "80%" }} src="/images/logo.png" alt="Feature Image 1" />
                                        </div>
                                        <div className="col-sm-6 col-7 featureTwo_right pt-2">
                                            <p>導入のイメージ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="featureTwo_box fTwo_two"></div>
                            </div>
                        </div>
                    </div>
                       
                    </div>
                </ScrollAnimation>

                <div className="four_features">
                    <ScrollAnimation  animateIn='bounceInUp' duration={2} animateOnce={true}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 four_features_position">
                                <div className="four_features_ui four_features_1">
                                    <div className="four_features_list">
                                        <p className="text-center py-4" style={{ marginTop: "4rem" }}>コンディションアップ</p>
                                        <p className="text-center">体調管理</p>

                                        <p className="text-center py-4">運動・食事 <br />
                                            測定結果</p>
                                        <p className="text-center py-4">フィードバック</p>
                                    </div>
                                </div>
                                <div className="four_features_left four_features_left1">
                                    <p>患者</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 four_features_position">
                                <div className="four_features_ui four_features_2">
                                    <div className="four_features_list">
                                        <p className="text-center py-4" style={{ marginTop: "4rem" }}>写真撮影</p>
                                        <p className="text-center">個別プログラム提供</p>

                                        <p className="text-center py-4">結果説明 <br />
                                            帳票・動画送信</p>
                                        <p className="text-center py-4">オンライン <br />
                                            教室再開 </p>
                                    </div> </div>
                                <div className="four_features2 four_features_two ">
                                    <img className="img-fluid ps-3 " src="/images/service1.png" alt="Feature Img2" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 four_features_position">
                                <div className="four_features_ui four_features_3">
                                    <div className="four_features_list" style={{ color: "#fff" }}>
                                        <p className="text-center py-4" style={{ marginTop: "4rem" }}>運動指導</p>
                                        <p className="text-center py-4">食事指導</p>

                                        <p className="text-center py-4">ヒアリング
                                        </p>
                                        <p className="text-center py-4">
                                            測定 </p>
                                    </div>
                                </div>
                                <div className="four_features3 four_features_three">
                                    <img className="img-fluid pt-2 ms-3" style={{ width: "75%" }} src="/images/logo.png" alt="Feature Img2" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 four_features_position">
                                <div className="four_features_ui four_features_4">
                                    <div className="four_features_list">
                                        <p className="text-center py-3" style={{ marginTop: "3rem" }}>運動指針</p>
                                        <p className="text-center">食事指針</p>

                                        <p className="text-center py-3">問診作成
                                        </p>
                                        <p className="text-center py-3">測定結果
                                        </p>
                                        <p className="text-center pt-3">
                                            セミナー
                                            <br />
                                            コンテンツ作成 </p>
                                    </div>
                                </div>
                                <div className="four_features4 four_features_four">
                                    <p>専門家</p>
                                </div>
                            </div>

                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    )
}

export default FeatureTwo
