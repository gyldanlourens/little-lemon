import restaurant from "../images/restaurant.jpg"
import ReservationForm from "./ReservationForm";
import { useReducer, useEffect } from "react";
import { types } from "./types";
import { fetchAPI } from "../BookingsAPI";
import { useNavigate, Routes, Route} from "react-router-dom";
import { submitAPI } from "../BookingsAPI";

export const updateTimesReducer = (availableTimes, action) => {
    switch(action.type){
        case types.update_times:
            return fetchAPI(action.payload)
        default:
            return availableTimes
        }
}


export function Reservations() {


    const navigate =useNavigate()
    const submitForm = (formData) => {
        if (submitAPI(formData) === true){
            navigate("../bookingsconfirmation")
        }
    }

    const initialTimes = fetchAPI(new Date())

    const [availableTimes, dispatch] = useReducer(updateTimesReducer , initialTimes)

    const handleDateChange = (dateSelected) => {
        dispatch({type: types.update_times, payload: dateSelected})

    }




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
            <ReservationForm availableTimes={availableTimes} handleDateChangeUpdate={handleDateChange} submitForm={submitForm} />
        </section>
    </main>
    )
}
