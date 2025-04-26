import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Metrics() {
    return (
        <section className="metrics">
          <div className="container">
            <h1 className="display-m">Raqamlar so‘zlaydi</h1>
            <p className="body-m">
              Minglab o‘quvchilar bizga ishonadi va bu biz uchun sharaf!
            </p>
    
            {/* Cards */}
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="400" className="metric">
                <span className="display-m">500+</span>
                <h4 className="body-m">Tajribali o‘qituvchilar</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="300" className="metric">
                <span className="display-m">15+</span>
                <h4 className="body-m"> Yillik o‘qituvchilar tajribasi</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="200" className="metric">
                <span className="display-m">4 ta</span>
                <h4 className="body-m">Tillar bo‘yicha kurslar</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="100" className="metric">
                <span className="display-m">98%</span>
                <h4 className="body-m">Mamnun o‘quvchilar</h4>
              </div>
            </div>
            {/* /Cards */}
          </div>
        </section>
      )
}


export default Metrics;