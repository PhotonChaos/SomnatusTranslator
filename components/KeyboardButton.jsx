import React from "react";

export default function KeyboardButton({letter, onClick}) {
    let classes = "keyboard-button"

    if (letter === "↑") {
        classes += " shift-inactive";
    }  else if (letter === "↓") {
        classes += " shift-active";
    }

    return (
        <button className={classes} onClick={() => onClick(letter)}>
            <div className="encoded-text">{letter}</div>
            <div className="button-text">{letter}</div>
        </button>
    )
}