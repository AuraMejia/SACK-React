import React from 'react' /*Import React*/
import '../../utils/css/emprende.css'
import Part1 from '../../utils/images/sack_plus/plus_1.png'
import Part2 from '../../utils/images/sack_plus/plus_2.png'
import Part3 from '../../utils/images/sack_plus/plus_3.png'


function Emprende(){
    return(
        <div className="emprendedores">
                <div className="SecctionTitulo">
                    <h4>Emprendedores</h4>
                </div>
                <div className="parte1">
                    <img id="info" src={Part1} alt="Img"/>
                    <img id="info" src={Part2} alt="Img"/>
                </div>
                <div className="parte2">
                    <img id="info" src={Part3} alt="Img"/>
                </div>
            </div>
    )
}
export default Emprende 