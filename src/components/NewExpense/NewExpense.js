import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHendler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const clickHandler = () => {
        setShowForm(true)
    }

    const cancel = () => {
        setShowForm(false);
    }


    return (
        <div className="new-expense">
            {
                showForm
                && <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHendler}
                    onCancel={cancel}
                />}
            {
                !showForm
                && <button onClick={clickHandler}>Add new expense</button>}
        </div>
    )

};

export default NewExpense;