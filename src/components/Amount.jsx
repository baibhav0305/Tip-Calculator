import React from 'react'

function Amount() {
    return (
        <div className="amount" style={{ color: "hsl(189, 41%, 97%)" }}>
            <div className="total">
                <p>Tip Amount <br /> <span style={{ color: "hsl(184, 14%, 56%)" }}>/person</span></p>
                <h1 className="val" style={{ color: "hsl(172, 67%, 45%)" }}>$0.00</h1>
            </div>
            <div className="total">
                <p>Total <br /> <span style={{ color: "hsl(184, 14%, 56%)" }}>/person</span></p>
                <h1 className="val" style={{ color: "hsl(172, 67%, 45%)" }}>$0.00</h1>
            </div>
            <button id="reset" style={{ color: "hsl(183, 100%, 15%)" }}><h4> RESET </h4></button>
        </div>
    )
}

export default Amount;