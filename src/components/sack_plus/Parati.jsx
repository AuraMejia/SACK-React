import React from 'react' /*Import React*/
import '../../utils/css/parati.css'
import Img1 from '../../utils/images/para_ti/neon.jpg'
import Img2 from '../../utils/images/para_ti/shorts_pareja.png'
import Img3 from '../../utils/images/para_ti/paleta_colores.png'
import Img4 from '../../utils/images/para_ti/recordardatorio_escribenos.png'
function Parati (){
    return(
        <div className="Container_Fotos">

            <div className="fotos1">
            <img id="img1" src={Img1} alt="Esta es la img" />
            <img id="img5" src={Img2} alt="Esta es la img" />
            </div>

            <div className="texto">
                 <p>Elige el color, modelo y talla perfecto para ti ;)</p>
            </div>

            <div className="fotos2">
            <img id="img3" src={Img3} alt="Esta es la img" />
            <a href="https://api.whatsapp.com/message/P7JDS6WZTV5LM1"><img id="img4" src={Img4} alt="Esta es la img" /></a>
            </div>


         </div>

             

                
    )
}
export default Parati