import Cabecera from './components/sack_plus/Cabecera'
import Footer from './components/sack_plus/Footer'
import Vista2 from './pages/Vista2'
import Vista1 from './pages/Vista1'
import GlobalStyle from './globalStyles.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" /*It allows the possiblity of change the contents of the index. We have to install it in the package.json*/
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Cabecera/>
      <GlobalStyle/> 
        <Switch>

      <Route path="/Vista1" exact component={Vista1} />
      <Route path="/Vista2" exact component={Vista2} />
      
      
       </Switch>
       <Footer/>
      </Router>

      
      
      
    </div>
  );
}

export default App;
