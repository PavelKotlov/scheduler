import React from 'react'
import InterviewerListItem from './InterviewerListItem';
import PropTypes from 'prop-types';
import 'components/InterviewerList.scss'

const InterviewerList = props => {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        avatar={interviewer.avatar}
        name={interviewer.name}
        selected={interviewer.id === props.value}
        setInterviewer={() => {props.onChange(interviewer.id)}}
      />
    )
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;