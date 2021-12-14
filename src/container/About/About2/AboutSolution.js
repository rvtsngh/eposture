import React from 'react'
import './AboutSolution.css'
import ScrollAnimation from 'react-animate-on-scroll';

const AboutSolution = () => {
    return (
        <>
            <section className="about_solution mb-5 pb-5 ">
                <div className="container">
                    <div className="about_solution_layout">
                        <div className="a_box">
                            <div className="question_heading mb-5 ">
                                <ScrollAnimation duration={2} animateIn='bounceIn' animateOnce={true} >
                                    <h2>それ <span>  <img className="img-fluid " style={{ width: "15%" }} src="/images/logo.png" alt="logo heading Image" /></span> で解決できます！</h2>
                                </ScrollAnimation>

                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 solution_left">
                                <ScrollAnimation  duration={2} animateIn='bounceInLeft' animateOnce={true} >
                                      <img className="img-fluid a2Img" src="/images/solution.png" alt="logo heading Image" />
                                </ScrollAnimation>
                                    
                                </div>
                                <div className="col-lg-7 ">
                                    <div className="solution_right" style={{ paddingTop: "3rem" }}>
                                    <ScrollAnimation  duration={2} animateIn='bounceInRight' animateOnce={true} >
                                    <p>多数の顧客のデータ集計から <br />
                                            データの分析,共有,ユーザーへの <br />
                                            フィードバックまで 全て自動で。</p>
                                </ScrollAnimation>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    .

                </div>
            </section>
        </>
    )
}

export default AboutSolution
