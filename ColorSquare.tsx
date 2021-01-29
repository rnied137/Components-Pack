import React from 'react'

type ColorSquareProps = {
    bcolor: string;
    onClick: Function;
}

export const ColorSquare = (props: ColorSquareProps) => {
   const { bcolor, onClick } = props;
    return (
        <div onClick={() => onClick(bcolor)}
            style={{ border: '1px solid white', backgroundColor: bcolor, width: '32px', height: '32px' }}>
        </div>
    )
}
