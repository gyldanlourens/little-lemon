import { useState } from "react";
import restaurant from "../images/restaurant.jpg"

function Reservations() {

    const [diners, setDiners] = useState(1)



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
        </section>
        <form>
            <h2>Reserve a table</h2>
            <fieldset>
                <label htmlFor="diners">Diners: {diners}</label>
                <input id="diners" type="range" min="1" max="100" value={diners} onChange={(e) => setDiners(e.target.value)}/>
                <p><i>Please note that we have a maximum capacity of 100 diners.</i></p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" />
                <label htmlFor="time">Time</label>
                <input id="time" type="time" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option value="none">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="graduation">Graduation</option>
                    <option value="other">Other</option>
                </select><br/>
                <label htmlFor="section">Section</label><br/>
                    <input type="radio" id="non-smoking" name="section" value="Non-smoking"/>
                    <label for="non-smoking">Non-smoking</label><br/>
                    <input type="radio" id="smoking" name="section" value="Smoking" />
                    <label for="smoking">Smoking</label><br/>
                    <input type="radio" id="outside" name="section" value="Outside" />
                    <label for="outside">Outside</label><br/>
                <label htmlFor="comments">Comments / Special Requests</label><br/>
                <textarea />
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" maxLength={100} min={3}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </section>
                <button type="submit">Check availability</button>
            </fieldset>
        </form>



    </main>
    )
}

export default Reservations;