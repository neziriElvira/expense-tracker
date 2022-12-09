
import { useState } from 'react'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        console.log('changed');
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;