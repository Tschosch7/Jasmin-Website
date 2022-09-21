import React from "react";
import { useRef } from "react";
import { faStar,   faArrowRight,
    faArrowLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from 'react-dom'


const QuestionWrapper = ({question, answer}) => {
  const ref = useRef(null)
  const handleClick = event => {
    if(event.currentTarget.children[1].classList.contains('answer--open')) {
      event.currentTarget.children[1].classList.remove("answer--open")
      event.currentTarget.children[0].children[2].classList += ' hide'
      event.currentTarget.children[0].children[1].classList.remove('hide')
      console.log(event.currentTarget.children)
      console.log(event.currentTarget.children[0].children)
    } else {
      event.currentTarget.children[1].classList += " answer--open"
      event.currentTarget.children[0].children[2].classList.remove('hide')
      event.currentTarget.children[0].children[1].classList += ' hide'
      console.log(event.currentTarget.children[0].children[1])
      console.log(event.currentTarget.children[0].children[2])
      console.log(event.currentTarget.children)
      console.log(event.currentTarget.children[0].children)
    }
  }

  return (
    <div className="question__wrapper" ref={ref} onClick={handleClick}>
      <div className="question">
        <h5 className="question__title">
        {question}
        </h5>
        <FontAwesomeIcon icon={faChevronDown} className="arrow-down-icon"/>
        <FontAwesomeIcon icon={faChevronUp} className="arrow-up-icon hide"/>
      </div>
      <div className="answer">
        {answer}
      </div>
    </div>
  );
};

export default QuestionWrapper;
