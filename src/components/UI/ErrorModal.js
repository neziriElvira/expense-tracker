import React from "react";
import ReactDOM from "react-dom";
import './ErrorModal.css';
import Card from "./Card";

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onClick} />
}

const ModalOverlay = (props) => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <button onClick={props.onClick}>Okay</button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {

    const clickHandler = () => {
        props.onGetMessage();
    }

    return (
        <div>
            {ReactDOM.createPortal(<Backdrop onClick={clickHandler} />,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={clickHandler} />,
                document.getElementById('modal-root'))}
        </div>
    );
}

export default ErrorModal;