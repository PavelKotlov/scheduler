import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

import './styles.scss';

const Appointment = props => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  // Declare Hooks
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // Declare Functions
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)

    const adjSpots = mode === EDIT ? true : false;

    Promise.resolve(props.bookInterview(props.id, interview, adjSpots))
      .then(() => {transition(SHOW)})
      .catch((err) => {
        transition(ERROR_SAVE, true)
      });
  }

  const deleteAppointment = (id) => {
    transition(DELETING, true)
    
    Promise.resolve(props.cancelInterview(id))
      .then(() => {transition(EMPTY)})
      .catch((err) => {
        transition(ERROR_DELETE, true)
      });
  };

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      {mode === SHOW && 
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => {transition(EDIT)}}
          onDelete={() => {transition(CONFIRM)}}
        />
      }
      {mode === CREATE && 
        <Form
          interviewers={props.interviewers}
          onCancel={() => {back()}}
          onSave={save}
        />
      }
      {mode === SAVING && 
        <Status
          message={SAVING}
        />
      }
      {mode === DELETING && 
        <Status
          message={DELETING}
        />
      }
      {mode === CONFIRM && 
        <Confirm 
          message={"Are you sure you would like to delete?"}
          onCancel={() => {back()}}
          onConfirm={() => {deleteAppointment(props.id)}}
        />
      }
      {mode === EDIT &&
        <Form 
          interviewers={props.interviewers}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          onCancel={() => {back()}}
          onSave={save}
        />
      }
      {mode === ERROR_SAVE &&
        <Error 
          message={"Could not save the appointment"}
          onClose={() => {back()}}
        />
      }
      {mode === ERROR_DELETE &&
        <Error 
          message={"Could not delete the appointment"}
          onClose={() => {back()}}
        />
      }
    </article>
  );
} 

export default Appointment;