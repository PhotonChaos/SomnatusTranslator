import React from "react";
import KeyboardButton from "./KeyboardButton";

export default function() {
    const [message, setMessage] = React.useState("TYPE MESSAGE HERE")
    const [capital, setCapital] = React.useState("NO")

    const shifted = capital === "YES"

    function keyPressed(key) {
        if(key === "←") {
            if(message.length > 0) setMessage(message.slice(0, -1));
        } else if (key === "×") {
            setMessage("");
        } else if(key === "⎵") {
            setMessage(message + " ");
         }else if (key === "↑") {
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

    function letterToButton(letter) {
        return (
            <KeyboardButton letter={shifted ? letter.toUpperCase() : letter.toLowerCase()} shifted={shifted} onClick={keyPressed}/>
        )
    }

    const row1= "QWERTYUIOP".split('').map(letterToButton);
    const row2 = "ASDFGHJKL".split('').map(letterToButton);
    const row3 = "ZXCVBNM".split('').map(letterToButton);

    return (
        <>
            <main>
                <h1>Somnatus Alphabet Translator</h1>
                <h4>COMMUNITY PROJECT - NOT AFFILIATED WITH FURALITY</h4>
                <div className="output-container">
                    <input type="text" className="decoded-text" onChange={inputChanged} value={message}/>
                    <p className="encoded-text">{message}</p>
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
                    <KeyboardButton letter={shifted ? "↓" : "↑"} shifted={capital === "YES"} onClick={keyPressed}/>
                    <KeyboardButton letter={"⎵"} shifted={shifted} onClick={keyPressed}/>
                    <KeyboardButton letter={"←"} shifted={shifted} onClick={keyPressed}/>
                    <KeyboardButton letter={"×"} shifted={shifted} onClick={keyPressed}/>
                </div>
            </main>
            <footer>
                <b>Somnatus Translator</b> by <a href="https://github.com/PhotonChaos">Carbon</a> | Somnatus symbol design by <a href="https://furality.org/">Furality Creative Team</a> | Somnatus Community Font by <a href="https://pandorapanther.carrd.co/">PandoraPanther</a>
            </footer>
        </>
    )
}