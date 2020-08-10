import React from 'react';

import './styles.scss'

export const Field = (props) => {

    const {label, width, ...inputProps} = props;

    return (
    <label className="field">
        <div className="field__label">{label}</div>
        <input {...inputProps} style={{width}} className="field__input" />
    </label>
    )
}