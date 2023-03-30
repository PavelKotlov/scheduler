import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const formatSpots = spots => {
    if (spots === 1) {
      return "1 spot remaining";
    }
    
    return `${spots ? spots : 'no'} spots remaining`;
  };

  const dayClass = classNames('day-list__item', {'day-list__item--selected': props.selected, 'day-list__item--full': !props.spots});

  const remainingSpots = formatSpots(props.spots);

  return (
    <li onClick={props.setDay} className={dayClass} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{remainingSpots}</h3>
    </li>
  );
}