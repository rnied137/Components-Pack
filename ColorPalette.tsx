import React from 'react'

import { ColorSquare } from './ColorSquare';
import './ColorPalette.css';
import { Colors } from './Constants';

export const ColorPalette = () => {

    const onClick = ((color) => {
        document.body.style.backgroundColor = color;

})
    return (
        <div className="grid">
            {Colors.map((color, index) => <ColorSquare
                key={index}
                bcolor={color}
                onClick={() => onClick(color)} />)}
        </div>
    )
}
