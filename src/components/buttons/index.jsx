import React from 'react';
import { Button } from 'components';
import { useStore } from 'store';

import './styles.scss'

export const Buttons = ({onSave, onDelete}) => {
    const { state: {data}} = useStore();

    return (
        <div className="buttons">
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onDelete} disabled={data.length === 1}>Delete</Button>
        </div>
    )
}