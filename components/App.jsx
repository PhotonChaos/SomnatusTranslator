import React from "react";
import KeyboardButton from "./KeyboardButton";

export default function() {
    const [message, setMessage] = React.useState("MESSAGE GOES HERE")
    const [capital, setCapital] = React.useState("NO")

    function keyPressed(key) {
        if(key === "←") {
            if(message.length > 0) setMessage(message.slice(0, -1));
        } else if (key === "❌") {
            setMessage("");
        } else if (key === "↑") {
            setCapital("YES");
        }  else if (key === "↓") {
            setCapital("NO");
        } else {
            setMessage(message + key)
        }
    }

    function inputChanged(event) {
        setMessage(event.target.value);
    }

    let row1 = []
    let row2 = []
    let row3 = []

    if(capital === "YES") {
        row1 = "QWERTYUIOP".split('').map((letter) => {
            return (
                <KeyboardButton letter={letter} onClick={keyPressed}/>
            )
        })
        row2 = "ASDFGHJKL".split('').map((letter) => {
            return (
                <KeyboardButton letter={letter}  onClick={keyPressed}/>
            )
        })
        row3 = "ZXCVBNM".split('').map((letter) => {
            return (
                <KeyboardButton letter={letter}  onClick={keyPressed}/>
            )
        })
    } else {
        row1 = "qwertyuiop".split('').map((letter) => {
            return (
                <KeyboardButton letter={letter} onClick={keyPressed}/>
            )
        })
        row2 = "asdfghjkl".split('').map((letter) => {
            return (
                <KeyboardButton letter={letter}  onClick={keyPressed}/>
            )
        })
        row3 = "zxcvbnm".split('').map((letter) => {
            return (
                <KeyboardButton letter={letter}  onClick={keyPressed}/>
            )
        })
    }



    return (
        <main>
            {/*<h1>Somnatus Translator</h1>*/}
            <div className="output-container">
                <p className="encoded-text">{message}</p>
                <input type="text" className="decoded-text" onChange={inputChanged} value={message} />
            </div>
            <div className="keyboard-row">
                {row1}
            </div>
            <div className="keyboard-row">
                {row2}
            </div>
            <div className="keyboard-row">
                {row3}
            </div>
            <div className="keyboard-row">
                <KeyboardButton letter={capital === "YES" ? "↓" : "↑"} onClick={keyPressed}/>
                <KeyboardButton letter={" "} onClick={keyPressed}/>
                <KeyboardButton letter={"←"} onClick={keyPressed}/>
                <KeyboardButton letter={"❌"} onClick={keyPressed}/>
            </div>
        </main>
    )
}