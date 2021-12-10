import React from 'react';
import './WhyUs.css'

const WhyUs = () => { 
    return (
        <>
            <section className="why_us" style={{ paddingTop: "10rem", marginBottom: "5rem" }}>
                <div className="pBox why_center">
                    <div className="why_box fFirst">
                        <div className="why_us_para" style={{ paddingTop: "6rem" }}>
                            <p>
                                日本国内でも利用者数(8,400万人)が最も多いSNSである, “LINE”。
                                それを活用、連携することができるチャットボット（LINE上で動く自動応答ロボット）によって、ヘルスケアに役立つビジネスモデルを届けることが可能になります。
                            </p>
                        </div>
                        <div className="why_us_para">
                            <p>
                                運動・スポーツ施設などに加えて、顧客が継続的に利用することが見込まれる運営形態を有するサービスであれば、
                                こちらのチャットボットシステムは応用的に活用することができます。

                            </p>
                        </div>
                        <div className="why_us_para">
                            <p>
                                With コロナの中で非接触で顧客とコミュニケーションを取ることは必須ですが、それが人件費かからず自動で継続,完了し,
                                データを蓄積することができるのは非常に大きなポイントです。


                            </p>
                        </div>
                        <div className="why_us_para">
                            <p>
                                人員削減、無人化の施設が急激に増加する中、今までのように従業員の確保、接客の質を担保することが難しくなっています。
                                この課題を解決する手段として、IoT を活用したサービスの提供が注目されていますが、まだ、Youtube やSNS
                                を活用したサービス提供を強化する動きはあるが、未だ手探り状態に留まっています。LINE チャットボットを活用したコミュニケーション主体型であるサービスを提供することで、
                                「お客様のつながり」を強化するうえで、従業員の手助けになり、運営事業者にとっても役立てるはずです。

                            </p>
                        </div>
                    </div>
                    <div className="why_box fSecond" >

                    </div>
                    <div className="why_small_box why_Third">
                        <p className="why_text">なぜ e-posture を導入すべきか？</p>
                    </div>
                    <div className="why_us1 why_us_one">
                    <img className="img-fluid " style={{ width: "70%" }} src="/images/service1.png" alt="Why Us Image 1" />
                    </div>
                    <div className="why_us2 why_us_two">
                        <img className="img-fluid " style={{ width: "80%" }} src="/images/whyUs2.png" alt="Why Us Image 2" />
                    </div>

                    <div className="why_us3 why_us_three">
                    <img className="img-fluid " style={{ width: "80%" }} src="/images/whyUs3.png" alt="Why Us Image 3" />
                    </div>

                    <div className="why_us4 why_us_four">
                      <img className="img-fluid " style={{ width: "80%" }} src="/images/service2.png" alt="Why Us Image 4" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs
