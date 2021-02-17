import React from 'react'

export const FlexContainer = ({children}) => {
    return (
        <div className="flex container space-between">
            {children}
        </div>
    )
}
