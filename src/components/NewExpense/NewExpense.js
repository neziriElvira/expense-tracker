import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHendler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense();
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpanseData={saveExpenseDataHendler} />
        </div>
    )

};

export default NewExpense;