import { useState } from 'react';
import './ExpenseForm.css';
import ErrorModal from '../UI/ErrorModal';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate === '') {
            setIsValid(false);
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: parseInt(enteredAmount, 10),
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const clickHandler = () => {
        props.onCancel();
    }

    const getMeesage = () => {
        setIsValid(true);
    }

    return (
        <div>
            {!isValid && <ErrorModal title='An error ocured!' message='Something wants wrong' onGetMessage={getMeesage} />}
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                    </div>
                    <div className='new-expense__actions'>
                        <button type='button' onClick={clickHandler}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default ExpenseForm;