import Cabecera from './components/sack_plus/Cabecera'
import Servicios from './components/sack_plus/Servicios'
import Emprende from './components/sack_plus/Emprende'
import Footer from './components/sack_plus/Footer'
import Modales from './components/sack_plus/Modales'
import Vista2 from './pages/Pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" /*It allows the possiblity of change the contents of the index. We have to install it in the package.json*/
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Cabecera/>
      <GlobalStyle/> 
        <Switch>

      <Route path="/" exact>
        <Cabecera/>
        <Servicios/>
        <Emprende/>
        <Modales/>
      </Route>

      <Route path="/Vista2" exact component={Vista2} />
      
      <Footer/>
      
       </Switch>
      </Router>

      <Footer/>
      
      
    </div>
  );
}

export default App;
