import React from 'react'
import './AboutQuestion.css'
import ScrollAnimation from 'react-animate-on-scroll';

const AboutQuestion = () => {
    return (
        <>
            <section className="about_question">
                <div className="container">
                    <div className="a_box">
                        <div className="about_question_layout">
                            <div className="question_heading mb-5 ">
                            <ScrollAnimation duration={3} animateIn='bounceInDown' animateOnce={true} >
                                  <h2>こんな<span style={{ color: "#F78A8A" }}>お悩み</span>をお持ちでないですか？</h2>
                                </ScrollAnimation>
                                
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <ScrollAnimation delay={200} duration={3} animateIn='bounceInLeft' animateOnce={true} >
                                    <div className="question_left mt-5 ">
                                            <p>多くの顧客を抱えており, <br />
                                                データ用紙を集計して,入力するのが<br />
                                                面倒で時間がかかりすぎる,,,。</p>
                                        </div>
                                </ScrollAnimation>
                                        
                                    </div>
                                    <div className="col-lg-5">
                                    <div className="about1Img">
                                    <ScrollAnimation delay={400} duration={3} animateIn='bounceInRight'animateOnce={true} >
                                    <img className="img-fluid a1Img" src="/images/question.png" alt="Question Image" />
                                </ScrollAnimation>
                                       
                                    </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutQuestion
