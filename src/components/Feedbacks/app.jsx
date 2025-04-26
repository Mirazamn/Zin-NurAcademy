import '../variable.css'
import '../../index.css'
import './style.css'

import {SarahK, MichaelL, LaurenM, StarIcon, EmptyStar
} from '../../asstes/plan'



function Feedbacks() {
    return (
        <section className="feedbacks">
          <div className="container">
            <div className="txt">
              <h3 className="display-m">Biz haqimizda o‘quvchilar nima deyishadi?</h3>
              <p className="body-m">
                Akademiyamizda o‘qigan o’nlab talabalar o‘zgarishni his qilishdi. Ularning fikrlarini o‘qing.
              </p>
            </div>
    
            {/* Comments */}
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="100" className="comment">
                <div className="profile">
                  <img src={SarahK} alt="" />
                  <h3 className="display-xs">Muxlisa A.</h3>
                  <h6 className="body-s">24 Yosh</h6>
                </div>
    
                <main>
                  <p className="body-m">
                  “Arab tilini tushunaman deb o‘ylamagan edim. Lekin Zin-Nur 
                  Akademiyasi bilan 2 oyda yozish va gaplashishni boshladim!"
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                </main>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="200" className="comment">
                <div className="profile">
                  <img src={MichaelL} alt="" />
                  <h3 className="display-xs">Diyor B.</h3>
                  <h6 className="body-s">30 Yosh</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    Online darslar juda qulay bo‘ldi. O‘qituvchilar ham doim sabrli va tushunarli tushuntirishadi.
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={EmptyStar} alt="" />
                  </div>
                </main>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="300" className="comment">
                <div className="profile">
                  <img src={LaurenM} alt="" />
                  <h3 className="display-xs">Firdavs K.</h3>
                  <h6 className="body-s">28 Yosh</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    Koreys tilida boshlang‘ich bilimlarim bor edi, lekin bu yerda o‘qib darajam oshdi. Hozir TOPIK 2 tayyorlanyapman.
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                </main>
              </div>
            </div>
            {/* /Comments */}
          </div>
        </section>
      )
}


export default Feedbacks;