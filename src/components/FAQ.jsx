import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar,   faArrowRight,
    faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import QuestionWrapper from "./ui/question__wrapper";
import questions from "../data/faq.json"

const FAQ = () => {

  return (
    <section id="faq">
      <div className="container">
        <div className="row faq__row">
          <h3 className="section__title">FAQS</h3>
          <h2 className="section__headline">
            Fragen?
          </h2>
          <p className="section__para faq__para">
            Sehe hier die meistgestellten Fragen und natürlich die Antworten dazu!
          </p>
          <div className="questions">
          {questions.map((element) => (
            <QuestionWrapper
            key={element.id}
            question={element.question}
            answer={element.answer}
            />
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
