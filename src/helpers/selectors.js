export const getAppointmentsForDay = (state, selectedDay) => {
  for (const day of state.days) {
    if (day.name === selectedDay) {
      const filteredData = Object.values(state.appointments).filter((appointment) => {return day.appointments.includes(appointment.id)})

      return filteredData;
    }
  }
  return [];
}

export const getInterviewersForDay = (state, selectedDay) => {
  for (const day of state.days) {
    if (day.name === selectedDay) {
      const filteredData = Object.values(state.interviewers).filter(interviewer => {return day.interviewers.includes(interviewer.id)})

      return filteredData;
    }
  }
  return [];
}

export const getInterview = (state, interview) => {
  if (interview) {
    const interviewDetails = {  
      "student": interview.student,
      "interviewer": {  
        "id": interview.interviewer,
        "name": state.interviewers[interview.interviewer].name,
        "avatar": state.interviewers[interview.interviewer].avatar
      }
    }

    return interviewDetails;
  }

  return null;
}