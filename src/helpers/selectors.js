export function getAppointmentsForDay(state, name) {
  for (const day of state.days) {
    if (day.name === name) {
      const filteredData = Object.values(state.appointments).filter((appointment) => {return day.appointments.includes(appointment.id)})

      return filteredData;
    }
  }
  return [];
}