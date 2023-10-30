import {Routes, Route, Link} from "react-router-dom"
import OrderOnline from "./OrderOnline";

const Card = ({key, name, price, description, imageSrc}) => {
    return (
        <article className="specials-card">
            <img src={imageSrc} alt={name} className="specials-photos"></img>
            <h6 className="dishName">{name}</h6>
            <h6 className="dishPrice">{price}</h6>
            <p>{description}</p>
            <h6 className="specials-delivery"><Link to="/order-online">Order a delivery 🚲</Link></h6>
            <Routes>
                <Route path="/order-online" element={<OrderOnline/>}/>
            </Routes>
        </article>
    )
}

export default Card;