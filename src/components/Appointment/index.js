import React from 'react';
import { useVisualMode } from '../../hooks/useVisualMode';
import axios from 'axios';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';

import './styles.scss';

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  // Declare Hooks

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // Declare Functions
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    
    axios.put(`/api/appointments/${props.id}`, {interview})
      .then(transition(SAVING))
      .then(props.bookInterview(props.id, interview))
      .then(transition(SHOW))
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
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
        />}

    </article>
  );
} 