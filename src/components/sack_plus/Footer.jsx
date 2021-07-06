import React from 'react' /*Import React*/
import '../../utils/css/footer.css'
import Contacto from '../../utils/images/footer/whatsapp_icono.svg'
import Redes from '../../utils/images/footer/people_icono.svg'
import Instagram from '../../utils/images/footer/instagram.svg'
import Facebook from '../../utils/images/footer/facebook.svg'
import Pago from '../../utils/images/footer/icono_hands.svg'

function Footer() {
    return(
        <div className="Footer">
            <div className="footerGri">
            <div className="contacto">
                <img id="icono_contacto" src={Contacto} alt="Img"/>
                <h1>CONTACTO</h1>
                <a href="https://api.whatsapp.com/message/P7JDS6WZTV5LM1"><h3>301-525-2844</h3></a>
                <a href="https://www.google.com/maps/place/Av.+1+de+Mayo+%2312g-34,+Bogot%C3%A1/@4.5806788,-74.1033948,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f98dd90a33e15:0xb0f5c57c528b9f18!8m2!3d4.5806788!4d-74.1012061"><h3>Avenida 1 de mayo #12g-34 sur</h3></a>
            </div>

            <div className="redes">
                <img id="icono_redes" src={Redes} alt="Img" />
                <h1>REDES SOCIALES</h1>
                <div className="redes_sociales">
                <a href="https://www.instagram.com/sackstore_/"><img id="instagram" src={Instagram} alt="Img"/></a>
                <a href="https://www.facebook.com/davidfelipe.mejiaruiz"><img id="facebook"src={Facebook} alt="Img"/></a>
                </div>
            </div>

            <div className="pago">
                <img id="icono_pago" src={Pago} alt="Img" />
                <h1>MEDIOS DE PAGO</h1>
            <h3>Bancolombia</h3>
            <h3>Nequi</h3>
            <h3>Daviplata</h3>
            </div>
        </div>

        <div className="franja_verde">
            <h1>Somos arte, somos Sack</h1>
        </div>

        </div>
        
    )
}
export default Footer