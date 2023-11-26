import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
import Score from './Score';
import qBank from './QuestionBank';
import './css/Box.css';

const Box = ({id}) => {
  const [questionBank, setQuestionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  useEffect(() => {
    if (quizEnd) {
      // Perform any cleanup or additional actions when the quiz ends
    }
  }, [quizEnd]);

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      {!quizEnd ? (
        <Question
          question={questionBank[id]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <Score score={score} onNextQuestion={handleNextQuestion} className="score" />
      )}
    </div>
  );
};

export default Box;