import restaurantfood from "../images/restaurantfood.jpg"
import marioAndAdrianA from "../images/mario-and-adrian-a.jpg"
import marioAndAdrianB from "../images/mario-and-adrian-b.jpg"
import placeholder from "../images/placeholder.png"
import Specials from "./Specials"
import Testimonials from "./Testimonials"

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
                    <Specials/>
                </span>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <span>
                    <Testimonials/>
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