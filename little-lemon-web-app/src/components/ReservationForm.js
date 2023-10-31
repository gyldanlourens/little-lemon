import { useState } from "react";
import { RadioGroup, RadioOption } from "./Radio";
import { useReducer } from "react";



const ReservationForm = () => {

    const [date, setDate] = useState(new Date())
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("None")
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selected, setSelected] = useState("");
    const [time, setTime] = useState ("17:00")
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${date}, ${guests}, ${availableTimes}, ${occasion}, ${comment}, ${name}, ${email}, ${selected}`)
      }

    const handleDateChange = (e) => {
        setDate(e.target.value)
        const dateSelected = e.target.value

    }

    const timeSlots = availableTimes.map((availableTime) => {
        return <option>{availableTime}</option>
    })

    return (


        <form onSubmit={handleSubmit}>
            <fieldset>
            <section>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" value={date} onChange={handleDateChange}/>
            </section>
            <secton>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                    {timeSlots}
                </select>
            </secton>
            <section>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)} />
            </section>
            <section>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                </section>
                <section id="section">
                <label htmlFor="section">Section</label>
                    <RadioGroup onChange={setSelected} selected={selected}>
                        <RadioOption value="non-smoking">Non-smoking</RadioOption>
                        <RadioOption value="smoking">Smoking</RadioOption>
                        <RadioOption value="outside">Outside</RadioOption>
                    </RadioGroup>
                </section>
                <section>
                <label htmlFor="comments">Comments</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
                </section>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" maxLength={100} min={3} value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </section>
                <button type="submit">Check availability</button>
            </fieldset>
        </form>
    )
}

export default ReservationForm;