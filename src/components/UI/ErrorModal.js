import React from "react";
import './ErrorModal.css';
import Card from "./Card";

const ErrorModal = (props) => {

    const clickHandler = () => {
        props.onGetMessage();
    }

    return (
        <div>
            <div className='backdrop' />
            <Card className='modal'>
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>{props.message}</p>
                </div>
                <footer className='actions'>
                    <button onClick={clickHandler}>Okay</button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;