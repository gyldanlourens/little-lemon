import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes,Route, Link} from "react-router-dom"

function App() {
  return (
    <body className="grid-container">
      <Nav/>
      <Footer/>
    </body>

  );
}

export default App;
