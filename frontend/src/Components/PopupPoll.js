import React from "react";
import '../Components/PopupPoll.css';

export default function PopupPoll(props) {
    return (
        <div className="popup-box-poll">
            <div style={{position: "relative", left: "25vw"}}>
                <div className="box-poll">
                    <button className="btn-close" id="btn1" onClick={props.handleClose}></button>
                    <div className="pollTitle">
                        {props.content}
                    </div>
                    <h1 className="titleName">
                        Title
                    </h1>
                    <input className="title" type="text" placeholder="  Type your question here"/>
                    <h5 className="voting">
                        Voting type
                    </h5>
                    <div className='form-checkk'>
                        <div className="choice1">
                            <input
                            type='radio'
                            name='choices'
                            className='form-choice1'
                            />
                            <label className='form-label1'>Single choice</label>
                        </div>
                        <div className="choice2">
                            <input
                            type='radio'
                            name='choices'
                            className='form-choice2'
                            />
                            <label className='form-label2'>Multiple choice</label>
                        </div>
                    </div>
                    <div className="ans">
                        Answer Options
                    </div>
                    <button className="create">
                        Create poll
                    </button>
                </div>
            </div>
        </div>
    );
}