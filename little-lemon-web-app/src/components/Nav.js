import "../App.css"
import logo from "../images/logo.svg"
import Main from "./Main"
import {Routes, Route, Link} from "react-router-dom"
import About from "./About"
import OrderOnline from "./OrderOnline"
import  {Reservations} from "./Reservations"
import  Login from "./Login"
import Menu from "./Menu"
import ConfirmedBooking from "./ConfirmedBooking"

function Nav(){
    return (
    <div>

    <nav className="nav">
        <header className="header">
           <img src={logo} alt="logo"/>
        </header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/order-online" element={<OrderOnline/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/bookingsconfirmation" element={<ConfirmedBooking/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
    )
}

export default Nav;