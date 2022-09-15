import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar,   faArrowRight,
    faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import QuestionWrapper from "../ui/question__wrapper";

const FAQ = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="row faq__row">
          <h3 className="section__title">FAQS</h3>
          <h2 className="section__headline">
            You have Questions?
          </h2>
          <p className="section__para">
            And we have got answers to all of them. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div className="questions">
            <QuestionWrapper />
            <QuestionWrapper />
            <QuestionWrapper />
            <QuestionWrapper />
            <QuestionWrapper />
            <QuestionWrapper />
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
