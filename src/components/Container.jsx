import React, { useState } from 'react'
import Icon from './Icon';

function Container() {
    const [bill, setBill] = useState("")
    const [tipPercentage, setTipPercentage] = useState("")
    const [numberOfPeople, setNumberOfPeople] = useState("")

    const [button_selected_5, set_button_selected_5] = useState(false)
    const [button_selected_10, set_button_selected_10] = useState(false)
    const [button_selected_15, set_button_selected_15] = useState(false)
    const [button_selected_25, set_button_selected_25] = useState(false)
    const [button_selected_50, set_button_selected_50] = useState(false)
    const [customTip, setCustomTip] = useState("")

    const [tipAmount, setTipAmount] = useState("$0.00")
    const [totalAmount, setTotalAmount] = useState("$0.00")

    const [resetBtn, setResetBtn] = useState(false)

    const handleBillInput = (e) => {
        let verifyLetter = /[a-zA-Z]/
        let price = e.target.value

        if (!verifyLetter.test(price)) {
            setBill(price)
            //console.log(bill)
            CalculateTip(price, tipPercentage, numberOfPeople)
        }
    }

    const handleTipButton = (e) => {
        console.log("clicked")
        let value = e.target.value

        if (value === "5") {
            setTipPercentage(value)
            setCustomTip("")
            CalculateTip(bill, value, numberOfPeople)

            set_button_selected_5(true)
            set_button_selected_10(false)
            set_button_selected_15(false)
            set_button_selected_25(false)
            set_button_selected_50(false)
        }
        else if (value === "10") {
            setTipPercentage(value)
            setCustomTip("")
            CalculateTip(bill, value, numberOfPeople)

            set_button_selected_5(false)
            set_button_selected_10(true)
            set_button_selected_15(false)
            set_button_selected_25(false)
            set_button_selected_50(false)
        }
        else if (value === "15") {
            setTipPercentage(value)
            setCustomTip("")
            CalculateTip(bill, value, numberOfPeople)

            set_button_selected_5(false)
            set_button_selected_10(false)
            set_button_selected_15(true)
            set_button_selected_25(false)
            set_button_selected_50(false)
        }
        else if (value === "25") {
            setTipPercentage(value)
            setCustomTip("")
            CalculateTip(bill, value, numberOfPeople)

            set_button_selected_5(false)
            set_button_selected_10(false)
            set_button_selected_15(false)
            set_button_selected_25(true)
            set_button_selected_50(false)
        }
        else if (value === "50") {
            setTipPercentage(value)
            setCustomTip("")
            CalculateTip(bill, value, numberOfPeople)

            set_button_selected_5(false)
            set_button_selected_10(false)
            set_button_selected_15(false)
            set_button_selected_25(false)
            set_button_selected_50(true)
        }
    }

    const handleCustomTipButton = (e) => {
        let verifyPrice = /^\d+(,\d{3})*(\.\d{1,2})?$/
        let price = e.target.value

        if (price.match(verifyPrice)) {
            setCustomTip(price)
            setTipPercentage(price)
            CalculateTip(bill, price, numberOfPeople)

            set_button_selected_5(false)
            set_button_selected_10(false)
            set_button_selected_15(false)
            set_button_selected_25(false)
            set_button_selected_50(false)
        }
    }

    const handleNumberOfPeople = (e) => {
        let verifyLetter = /[a-zA-Z]/
        let people = e.target.value

        if (!verifyLetter.test(people)) {
            setNumberOfPeople(people)
            CalculateTip(bill, tipPercentage, people)
        }
    }

    const CalculateTip = (billNum, tipNum, peopleNum) => {
        setResetBtn(true)
        if (billNum && tipNum && peopleNum) {

            let Localbill = parseFloat(billNum)
            let LocalTip = parseFloat(tipNum)
            let LocalPeople = parseInt(peopleNum)

            let tipAmountPerPerson = (Localbill * (LocalTip / 100)) / LocalPeople
            setTipAmount(`$${tipAmountPerPerson.toFixed(2)}`);

            let totalPerPerson = (Localbill + (Localbill * (LocalTip / 100))) / LocalPeople
            setTotalAmount(`$${totalPerPerson.toFixed(2)}`)
        }
        else {
            setTipAmount("$0.00")
            setTotalAmount("$0.00")
        }
    }

    const handleReset = () => {
        console.log("reset");
        setBill("")
        setTipPercentage("")
        setNumberOfPeople("")
        set_button_selected_5(false)
        set_button_selected_10(false)
        set_button_selected_15(false)
        set_button_selected_25(false)
        set_button_selected_50(false)
        setCustomTip("")
        setTipAmount("$0.00")
        setTotalAmount("$0.00")
        setResetBtn(false)
    }
    return (
        <div className="container">
            {/* <Table />
            <Amount /> */}
            <div className="table column">
                <div className="info">
                    <p className="info-label">Bill</p>
                    <input type="text" placeholder="0" style={{ textAlign: "right" }} value={bill} onChange={(e) => handleBillInput(e)} />
                    <Icon img="/images/icon-dollar.png" />
                </div>
                <div className="info">
                    <p className="info-label">Select tip %</p>
                    <div className="btn">
                        <button className={button_selected_5 ? "tip-btn tip-btn-active" : "tip-btn"} onClick={(e) => handleTipButton(e)} value={5} >5%</button>
                        <button className={button_selected_10 ? "tip-btn tip-btn-active" : "tip-btn"} onClick={(e) => handleTipButton(e)} value={10} >10%</button>
                        <button className={button_selected_15 ? "tip-btn tip-btn-active" : "tip-btn"} onClick={(e) => handleTipButton(e)} value={15} >15%</button>
                        <button className={button_selected_25 ? "tip-btn tip-btn-active" : "tip-btn"} onClick={(e) => handleTipButton(e)} value={25} >25%</button>
                        <button className={button_selected_50 ? "tip-btn tip-btn-active" : "tip-btn"} onClick={(e) => handleTipButton(e)} value={50} >50%</button>
                        <input className="custom-input"
                            value={customTip}
                            onChange={(e) => handleCustomTipButton(e)}
                            placeholder="Custom"
                            type="number"
                        />
                    </div>
                </div>
                <div className="info">
                    <p className="info-label">Number of people</p>
                    <input type="text" placeholder="0" style={{ textAlign: "right" }} value={numberOfPeople} onChange={(e) => handleNumberOfPeople(e)} />
                    <Icon img="/images/icon-person.png" />
                </div>
            </div>

            <div className="amount column" style={{ color: "hsl(189, 41%, 97%)" }}>
                <div className="values">
                    <div className="total">
                        <p style={{ fontSize: "15px" }}>Tip Amount <br /> <span style={{ color: "#778b8b", fontWeight: "700", fontSize: "13px" }}>/person</span></p>
                        <p className="val" style={{ color: "hsl(172, 67%, 45%)" }}>{tipAmount}</p>
                    </div>
                    <div className="total">
                        <p style={{ fontSize: "15px" }}>Total <br /> <span style={{ color: "#778b8b", fontWeight: "700", fontSize: "13px" }}>/person</span></p>
                        <p className="val" style={{ color: "hsl(172, 67%, 45%)" }}>{totalAmount}</p>
                    </div>
                </div>
                <button className={resetBtn ? "reset active" : "reset notActive"}
                    onClick={() => handleReset()} style={{ color: "hsl(183, 100%, 15%)", width: "100%" }}>RESET</button>
            </div>
        </div >
    )
}

export default Container;