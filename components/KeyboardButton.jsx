import React from "react";

export default function KeyboardButton({letter, shifted, onClick}) {
    let classes = "keyboard-button"

    if (!shifted) {
        classes += " shift-inactive";
    }  else {
        classes += " shift-active";
    }

    return (
        <button className={classes} onClick={() => onClick(letter)}>
            <div className="encoded-text">{letter}</div>
            <div className="button-text">{letter}</div>
        </button>
    )
}