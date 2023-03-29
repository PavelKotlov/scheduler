import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAppointmentsForDay } from '../helpers/selectors';

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'), 
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(values => {
      setState(prev => (
        { ...prev, 
          days: values[0].data, 
          appointments: values[1].data,
          interviewers: values[2].data
        }
      ));
    });
  }, [])
  
  // Declare Functions
  const setDay = day => setState({ ...state, day });
  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, {interview})
      .then(() => {setState(prev => ({...prev, appointments, days: updateSpots("reduce")}))})
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null 
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {setState(prev => ({...prev, appointments, days: updateSpots("increase")}))})
  };

  const updateSpots = (operation) => {
    // return array of empty appointments
    const appointments = getAppointmentsForDay(state, state.day);
    const availableSpots = appointments.filter(appointment => {
      return appointment.interview === null;
    })

    // set increase or reduce spots available
    let num = 0;
    num = operation ? num += 1 : num -= 1;

    // rebuild days object with updated day object 
    const selectedDay = state.days.findIndex(day => day.name === state.day)
    
    const day = {
      ...state.days[selectedDay],
      spots: availableSpots.length + num
    }
    
    const days = {
      ...state.days,
      [selectedDay]: day
    }
    
    // return days as an array
    return Object.values(days);
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}