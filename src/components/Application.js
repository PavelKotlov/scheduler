import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "../helpers/selectors"; 
import axios from 'axios';

import "components/Application.scss";

export default function Application() {
  // Declare Hooks
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'), 
      axios.get('/api/appointments')
    ]).then((values) => {
      setState(prev => (
        { ...prev, 
          days: values[0].data, 
          appointments: values[1].data
        }
      ));
    });
  }, [])
  
  // Declare Functions
  const setDay = day => setState({ ...state, day });

  // Declare Variables
  const dailyAppointments =  getAppointmentsForDay(state, state.day);
  
  const appointments = dailyAppointments.map(appointment => {
    return (
      <Appointment 
        key={appointment.id}
        {...appointment}
      />
    );
  });

  // Run functions to prepare component for render
  appointments.push(<Appointment key="last" time="5pm" />);
  
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        value={state.day}
        onChange={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {appointments}
      </section>
    </main>
  );
}
