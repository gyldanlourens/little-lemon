import { useState } from "react";

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
    const [time, setTime] = useState ("17:00")

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            date: date,
            guests: guests,
            occasion: occasion,
            comment: comment,
            email: email,
            time: time}

            submitForm(formData)


      }

    const handleDateChange = (e) => {
        setDate(e.target.value)
        const dateSelected = e.target.value
        handleDateChangeUpdate(dateSelected)
    }

    let isValid = false

    if (date!= "" && (name.length>=2) && email!="" & guests>=1){
        isValid = true;
    }

        return (


        <form onSubmit={handleSubmit}>
            <fieldset>
            <section>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" value={date} onChange={handleDateChange} required min={`${year}-${month}-${day}`} aria-label="Date"/>
                <label>Available times for :</label>
                <p>{date}</p>
                <ul id="available-times">
                    {availableTimes.map((availableTime) => (
                    <li>{availableTime}</li>))}
                </ul>
            </section>
            <section>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)} aria-label="Choose time">
                    {availableTimes.map((availableTime) => (
                    <option>{availableTime}</option>))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="8" id="guests" onChange={(e) => setGuests(e.target.value)} required aria-label="Number of guests"/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <label htmlFor="comments">Comments</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} aria-label="Comments"/>
            </section>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" maxLength={100} minLength={2} value={name} onChange={(e) => setName(e.target.value)} required aria-label="Name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-label="Email"/>
                    <button type="submit" disabled={!isValid}>Reserve table</button>
                </section>
            </fieldset>
        </form>
    )
}

export default ReservationForm;