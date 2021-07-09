import React from "react" /*Import React*/ 
import Emprende from "../components/sack_plus/Emprende"
import Servicios from "../components/sack_plus/Servicios"

const Vista1 = () =>{ /*It is going to show us the components that we export. It works with the button*/
	return(
	<>
	<Servicios/>
    <Emprende/>
    </>
	)
} 

export default Vista1