import React from 'react';

import './styles.scss'

export const Button = ({active, children, ...props}) => {

    return (
        <button 
        type="button" 
        {...props} 
        className={ active ? "button button_active" : "button" }>
            {children}
        </button>
    )
}