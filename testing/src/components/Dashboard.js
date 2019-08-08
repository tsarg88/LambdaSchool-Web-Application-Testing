import React from 'react';

const Dashboard = (props) => {
    let {recordStrike, recordBall, recordFoul, recordHit} = props
    return (
        <div>
            <button data-testid="strike" onClick={recordStrike}>Strike</button>
            <button data-testid="ball" onClick={recordBall}>Ball</button>
            <button data-testid="foul" onClick={recordFoul}>Foul</button>   
            <button data-testid="hit" onClick={recordHit}>Hit</button>
        </div>
    )
}

export default Dashboard
