import React, { useState } from 'react'
import './style.css'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColor(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Create Random Color</button>
            {
                <div className='colorStyle'>{color}</div>
            }
        </div >
    )
}

export default RandomColor;