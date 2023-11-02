import { render, screen, within, cleanup} from '@testing-library/react';
import ReservationForm from './components/ReservationForm';
import {Reservations} from './components/Reservations';
import { updateTimesReducer } from './components/Reservations';
import { types } from "./components/types";

afterEach(cleanup);

test('Renders the Reservations heading', () => {
    render(<Reservations/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

describe("updateTimes Reducer", () => {

  it("Should return initialTimes", () => {
      const newState = updateTimesReducer(undefined,{});
      expect(newState).toEqual(undefined)
  })

  it("Should return return new State if it receives a type", () => {

    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    const newState = updateTimesReducer(undefined,{type: types.update_times, payload: times});
    expect(newState).toEqual(times)
})

})

test("User is able to submit the form", () =>{
  const handleSubmit = jest.fn();
  render(<ReservationForm onSubmit={handleSubmit} />);
})