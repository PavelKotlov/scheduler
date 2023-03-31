import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
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
  
  const bookInterview = (id, interview, adjSpots) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    let operation = "decrease"
    
    if (adjSpots) {
      operation = "";
    }

    return axios
      .put(`/api/appointments/${id}`, {interview})
      .then(() => {setState(prev => ({...prev, appointments, days: updateSpots(operation)}))})
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
      .then(() => {
        setState(prev => ({
          ...prev, 
          appointments, 
          days: updateSpots("increase")
        }))
      })
  };

  const updateSpots = (operation) => {
    const dayIndex = state.days.findIndex(day => {return day.name === state.day})
    
    let num = 0;
    if (operation === "increase") {
      num += 1;
    } else if (operation === "decrease") {
      num -= 1;
    }

    const day = {
      ...state.days[dayIndex],
      spots: state.days[dayIndex].spots + num
    }

    const days = {
      ...state.days,
      [dayIndex]: day
    }
    
    return Object.values(days);
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}

export default useApplicationData;