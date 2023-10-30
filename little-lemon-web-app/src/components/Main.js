import restaurantfood from "../images/restaurantfood.jpg"
import marioAndAdrianA from "../images/mario-and-adrian-a.jpg"
import marioAndAdrianB from "../images/mario-and-adrian-b.jpg"
import greekSalad from "../images/greek-salad.jpg"
import bruchetta from "../images/bruchetta.jpg"
import lemonDessert from "../images/lemon-dessert.jpg"
import placeholder from "../images/placeholder.png"

function Main(){
    return (
        <main className="main">
            <section className="landing">
            <span>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button href="reservations">Reserve a table</button>
            </span>
            <span>
                <img src={restaurantfood} alt="Restaurant Food" id="restaurantfood" className="landing-image"/>
            </span>
            </section>
            <section className="specials">
                <h2>Specials</h2>
                <span>
                    <article className="specials-card">
                        <img src={greekSalad} alt="Greek Salad" className="specials-photos"></img>
                        <h6 className="dishName">Greek Salad</h6>
                        <h6 className="dishPrice">$12.99</h6>
                        <p>
                            The famous greek salad of crispy lettuce, peppers,
                             olives and our Chicago style feta cheese, garnished
                             with crunchy garlic and rosemary croutons. </p>
                        <h6 className="specials-delivery">Order a delivery 🚲</h6>
                    </article>
                    <article className="specials-card">
                        <img src={bruchetta} alt="Bruchetta" className="specials-photos"></img>
                        <h6 className="dishName">Bruchetta</h6>
                        <h6 className="dishPrice">$5.99</h6>
                        <p>
                        Our Bruschetta is made from grilled bread that has been smeared
                         with garlic and seasoned with salt and olive oil.
                        </p>
                        <h6 className="specials-delivery">Order a delivery 🚲</h6>
                    </article>
                    <article className="specials-card">
                        <img src={lemonDessert} alt="Lemon Dessert" className="specials-photos"></img>
                        <h6 className="dishName">Lemon Dessert</h6>
                        <h6 className="dishPrice">$5.00</h6>
                        <p>
                        This comes straight from grandma’s recipe book,
                         every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <h6 className="specials-delivery">Order a delivery 🚲</h6>
                    </article>
                </span>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <span>
                    <article>
                        <p><strong>Rating</strong></p>
                        <img src={placeholder} className="reviewer"/>
                        <h6  className="reviewer">Name</h6>
                        <p>Review text</p>
                    </article>
                    <article>
                        <p><strong>Rating</strong></p>
                        <img src={placeholder}  className="reviewer"/>
                        <h6  className="reviewer">Name</h6>
                        <p>Review text</p>
                    </article>
                    <article>
                        <p><strong>Rating</strong></p>
                        <img src={placeholder}  className="reviewer"/>
                        <h6  className="reviewer">Name</h6>
                        <p>Review text</p>
                    </article>
                    <article>
                        <p><strong>Rating</strong></p>
                        <img src={placeholder}  className="reviewer"/>
                        <h6  className="reviewer">Name</h6>
                        <p>Review text</p>
                    </article>
                </span>
            </section>
            <section className="about">
                <span className= "about-par">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                        in a lively but casual environment. The restaurant features a locally-sourced menu with
                        daily specials.
                    </p>
                </span>
                <span className="owner-photos">
                    <img src={marioAndAdrianA} alt="Mario and Adrian" id="owners-photo-a" />
                    <img src={marioAndAdrianB} alt="Mario and Adrian" id="owners-photo-b" />
                </span>
            </section>
        </main>
    )

}

export default Main;