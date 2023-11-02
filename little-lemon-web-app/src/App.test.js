import { render, screen, within, cleanup} from '@testing-library/react';
import ReservationForm from './components/ReservationForm';
import {Reservations} from './components/Reservations';
import { updateTimesReducer } from './components/Reservations';
import { types } from "./components/types";
import { fetchAPI } from './BookingsAPI';

afterEach(cleanup);

test('Renders the Reservations heading', () => {
    render(<Reservations/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

describe("updateTimes Reducer", () => {

  it("Should return initialTimes", () => {
      const newState = updateTimesReducer(fetchAPI(new Date()),{});
      expect(newState).toEqual(fetchAPI(new Date()))
  })

  it("Should return return new State if it receives a type", () => {
    const preSelectedDate = "03/11/2023"
    const times = fetchAPI(preSelectedDate)
    const newState = updateTimesReducer(undefined,{type: types.update_times, payload: '03/11/2023'});
    expect(newState).toEqual(times)
})

})

test("User is able to submit the form", () =>{
  const handleSubmit = jest.fn();
  render(<ReservationForm onSubmit={handleSubmit} />);
})