import { useState } from "react";
import { RadioGroup, RadioOption } from "./Radio";
import {Reservations} from "./Reservations";
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from "../BookingsAPI";

const ReservationForm = ({availableTimes, handleDateChangeUpdate, submitForm}) => {

    const todaydate = new Date()
    let day = String(todaydate.getDate()).padStart(2,"0")
    let month = String(todaydate.getMonth() + 1).padStart(2,"0")
    let year = String(todaydate.getFullYear()).padStart(2,"0")



    const [date, setDate] = useState(`${year}-${month}-${day}`)
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("None")
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selected, setSelected] = useState("");
    const [time, setTime] = useState ("17:00")

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            date: {date},
            guests: {guests},
            occasion: {occasion},
            comment: {comment},
            email: {email},
            section: {selected},
            time: {time}}

        submitForm(formData)


      }

    const handleDateChange = (e) => {
        setDate(e.target.value)
        const dateSelected = e.target.value
        handleDateChangeUpdate(dateSelected)

    }

        return (


        <form onSubmit={handleSubmit}>
            <fieldset>
            <section>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" value={date} onChange={handleDateChange}/>
                <label>Available times for :</label>
                <p>{date}</p>
                <ul id="available-times">
                    {availableTimes.map((availableTime) => (
                    <li>{availableTime}</li>))}
                </ul>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((availableTime) => (
                    <option>{availableTime}</option>))}
                </select>
            </section>
            <section>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <section id="section">
                <label htmlFor="section">Section</label>
                    <RadioGroup onChange={setSelected} selected={selected}>
                        <RadioOption value="non-smoking">Non-smoking</RadioOption>
                        <RadioOption value="smoking">Smoking</RadioOption>
                        <RadioOption value="outside">Outside</RadioOption>
                    </RadioGroup>
                </section>
                <label htmlFor="comments">Comments</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
            </section>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" maxLength={100} min={3} value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit">Reserve table</button>
                </section>
            </fieldset>
        </form>
    )
}

export default ReservationForm;