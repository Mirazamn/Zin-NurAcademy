import './style.css'
import '../variable.css'
import '../../index.css'
import { Sergeli, Uchtepa } from '../../asstes/plan'

function Branches() {
    return(
        <div className="branches">
            <div className="container flex">
                    <div data-aos="fade-up-right" className="card">
                        <div className="branch-txt">
                            <h2>UCHTEPA FILIALI</h2>
                            <a href='https://yandex.uz/maps/org/66856939225/?ll=69.183645%2C41.310394&z=16' target='_blank'>
                                Oqtepa ko'chasi, 489A, Toshkent
                            </a>
                        </div>
                        <img src={Uchtepa} className="sergeli column" />
                    </div>

                    <div data-aos="fade-down-left" className="card">
                        <div className="branch-txt">
                            <h2>SERGELI FILIALI</h2>
                            <a href='https://yandex.uz/maps/org/zin_nur_akademiyasi/155272257265/?ll=69.210049%2C41.220986&z=16.77' target='_blank'>
                                Sergeli-VII, 29A, Toshkent
                            </a>
                        </div>
                        <img src={Sergeli} className="uchtepa column" />
                    </div>
            </div>
        </div>
    )
}


export default Branches;