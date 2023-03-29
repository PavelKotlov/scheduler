import React from 'react';
import { useVisualMode } from '../../hooks/useVisualMode';
import axios from 'axios';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

import './styles.scss';

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  // Declare Hooks

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // Declare Functions
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)

    axios.put(`/api/appointments/${props.id}`, {interview})
      .then(() => {
        props.bookInterview(props.id, interview);
        transition(SHOW);
      });
  }

  const deleteAppointment = (id) => {
    transition(DELETING)

    axios.delete(`/api/appointments/${props.id}`)
      .then(() => {
        props.cancelInterview(id)
        transition(EMPTY);
      });
  };

  console.log("Appointment props", props);
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      {mode === SHOW && 
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
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
    </article>
  );
} 