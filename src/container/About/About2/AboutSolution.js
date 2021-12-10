import React from 'react'
import './AboutSolution.css'

const AboutSolution = () => {
    return (
        <>
            <section className="about_solution mb-5 pb-5 ">
                <div className="container">
                <div className="about_solution_layout">
                <div className="a_box">
                        <div className="question_heading mb-5 ">
                            <h2>それ <span>  <img className="img-fluid " style={{ width: "15%" }} src="/images/logo.png" alt="logo heading Image" /></span> で解決できます！</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 solution_left">
                                <img className="img-fluid " style={{ width: "65%" }} src="/images/solution.png" alt="logo heading Image" />
                            </div>
                            <div className="col-md-7 ps-4">
                                <div className="solution_right" style={{ paddingTop: "3rem" }}>
                                    <p>多数の顧客のデータ集計から <br />
                                        データの分析,共有,ユーザーへの <br />
                                        フィードバックまで 全て自動で。</p>
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
