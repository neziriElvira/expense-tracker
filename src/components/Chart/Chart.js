import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {

    const maxValues = props.dataPoints.map(expense => expense.value);
    const totalMaximum = Math.max(...maxValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />)
            }
        </div>
    )
}

export default Chart;