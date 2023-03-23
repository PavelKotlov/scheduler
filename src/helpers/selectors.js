export function getAppointmentsForDay(state, name) {
  for (const day of state.days) {
    if (day.name === name) {
      const filteredData = Object.values(state.appointments).filter((appointment) => {return day.appointments.includes(appointment.id)})

      return filteredData;
    }
  }
  return [];
}

export function getInterview(state, interview) {
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