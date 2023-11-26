import React from "react";
import Options from "./Options";
import './css/Box.css';

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <div className="">
            <div className="question">{question.question}</div>
            <div className="choice-text">Make a choice</div>
            <form onSubmit={onSubmit} className="mt-2 mb-2">
                <Options
                options={question.options}
                selectedOption={selectedOption}
                onOptionChange={onOptionChange}
                />
                <button type="submit" className="btn btn-primary mt-2">
                    VOTE
                </button>
            </form>
        </div>
    );
};

export default Question;
