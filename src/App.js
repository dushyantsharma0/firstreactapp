import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Data from './data';
import Detail from './Detail';
import AppData from './AddData';

function App() {


  return (
    <div>
   <Routes>
       
    <Route path='/home' element={ <Home/>}/>
    <Route path='about' element={ <About/>}/>
    <Route path='contact' element={ <Contact/>}/>
    <Route path='/data' element={ <Data/>}/>
    <Route path='/user/:name/:price/:company' element={ <Detail/>}/>
    <Route path='/dataadd' element={ <AppData/>}/>
   </Routes>
     
            
      
            
            
         
    </div>
  );
}

export default App;
