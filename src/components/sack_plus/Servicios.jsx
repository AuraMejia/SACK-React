import React from 'react' /*Import React*/
import '../../utils/css/servicios.css'
import Bordadora from '../../utils/images/sack_plus/bordado.png'
import Paleta from '../../utils/images/sack_plus/paleta_colores .png'

function Servicios (){
    return(
        <div className="Container_Services">
            <div className="Text">
                <div className="SecctionTittle">
                    <h4>Mayoristas</h4>
                </div>
                <div className="cuadro_info">
                    <h5>Realiza tus pedidos con la mejor calidad y al mejor costo</h5>
                </div>
            </div>

            <div className="contenido">
                <div className="bordados">
                    <h3>Bordados</h3>
                    <img id="bordadora" src={Bordadora} alt="boradora" />
                </div>

            <div className="material">
                <h3>Materiales</h3> 
                <div class="materiales">
                    <div className="img_fondo">
                        <p id="texto">Satín</p>
                        <p id="texto">Bengalina</p>
                        <p id="texto">Lino</p>
                        <p id="texto">Pana</p>
                    </div>
                </div>
            </div>

            <div className="paleta">
                <img id="paleta" src={Paleta} alt="Paleta" />
            </div>
            </div>
        </div>

    )

}
export default Servicios