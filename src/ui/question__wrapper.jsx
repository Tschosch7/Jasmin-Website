import React from "react";
import { faStar,   faArrowRight,
    faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const QuestionWrapper = () => {
  return (
    <div className="question__wrapper">
      <div className="question">
        <h5 className="question__title">
          Are all the templates easily customizable?
        </h5>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="answer">
        Yes Absolutely Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa saepe est beatae fuga dolorem delectus mollitia ducimus sunt nisi
        recusandae, quibusdam similique atque aliquid. Odit, asperiores.
        Nesciunt iusto excepturi autem?
      </div>
    </div>
  );
};

export default QuestionWrapper;
