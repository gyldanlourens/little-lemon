import "../App.css"
import logo from "../images/logo.svg"
import Main from "./Main"
import {Routes, Route, Link} from "react-router-dom"
import  Reservations from "./Reservations"

function Nav(){
    return (
    <div>

    <nav className="nav">
        <header className="header">
           <img src={logo} alt="logo"/>
        </header>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/">Order Online</Link>
        <Link to="/">Login</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
    </Routes>
    </div>
    )
}

export default Nav;