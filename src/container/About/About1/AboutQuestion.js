import React from 'react'
import './AboutQuestion.css'

const AboutQuestion = () => {
    return (
        <>
            <section className="about_question">
                <div className="container">
                    <div className="a_box">
                    <div className="about_solution_layout">
                    <div className="question_heading mb-5 ">
                            <h2>こんな<span style={{ color: "#F78A8A" }}>お悩み</span>をお持ちでないですか？</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="question_left mt-5 ps-5">
                                        <p>多くの顧客を抱えており, <br />
                                            データ用紙を集計して,入力するのが<br />
                                            面倒で時間がかかりすぎる,,,。</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img className="img-fluid " style={{  marginLeft:"5rem", width: "60%" }} src="/images/question.png" alt="Question Image" />
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
