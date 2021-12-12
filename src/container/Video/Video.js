import React from 'react'
import './Video.css'
import ScrollAnimation from 'react-animate-on-scroll';
const Video = () => {
    return (
        <>
            <section className="video">
                <div className="featureTwo_heading">
                <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                    <div className="fTwoBox">
                        <div className="featureTwo_box fTwo_one">
                            <div className="video_title">
                                <div className="">
                                    <p>詳しくはこちらの動画を</p>
                                </div>
                            </div>

                        </div>R
                        <div className="featureTwo_box fTwo_two"></div>
                    </div>
                    </ScrollAnimation>
                </div>

                <div className="video_play">
                <ScrollAnimation delay={400} animateIn='bounceInUp' animateOnce={true}>
                    <div className="video_box">

                    </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
}

export default Video
