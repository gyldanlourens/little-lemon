import restaurant from "../images/restaurant.jpg"
import ReservationForm from "./ReservationForm";
import Main from "./Main";

function Reservations() {
    return (
    <main>
        <section className="landing">
            <span>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Join us for a delightful Mediterranean dining experience!
                    Indulge in the flavors of the Mediterranean at our restaurant.
                    Reserve your table now for a culinary journey filled with fresh ingredients and savory dishes.
                </p>
            </span>
            <span>
                <img src={restaurant} alt="Restaurant" id="restaurant" className="landing-image"/>
            </span>
        </section >
        <section className="reservations">
            <h2>Reserve a table</h2>
            <ReservationForm/>
        </section>
    </main>
    )
}

export default Reservations;