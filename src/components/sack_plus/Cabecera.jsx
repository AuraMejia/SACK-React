import React from 'react' /*Import React*/ 
import '../../utils/css/cabecera.css'/*Import the styles*/
import Cabeza from '../../utils/images/sack_plus/sack2.svg'
import Menu from '../../utils/images/sack_plus/menu_icono.svg'
/*import Fab from '../../utils/images/footer/button_wha.svg';
import AddIcon from '../../utils/images/footer/button_wha.svg';*/
import {Link} from 'react-router-dom' /*We are going to use this part to move in the Single page with the buttons to the other components*/ 

function Cabecera (){
    return (
        <div className="Container_Cabecera">
            
            <div className="franja_verde">
                <h1>ENVÍOS GRATIS A TODA COLOMBIA DESDE $80.000</h1>
            </div>

            <div className="cabecera">  
                  <img id="home" src={Cabeza} alt="Esta es la img" />
            </div>

            <div className="menu">  
                  <img id="img2" src={Menu} alt="Esta es la img" />

                  <div className="Botones">
                      <Link exact to="/Vista1">
                          <button> Primera vista</button>
                       </Link> 
                 </div>

                  <div className="Botones">
                      <Link exact to="/Vista2">
                          <button> Segunda vista</button>
                       </Link> 
                 </div> 
            </div> 

                    
        </div>   
    )
}
export default Cabecera /*Export of the funcion in the App.js*/