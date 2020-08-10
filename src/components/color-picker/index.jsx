import React from 'react';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';

import './styles.scss'

export const ColorPicker = CustomPicker(({ hex, hsl, hsv, onChange, onChangeComplete }) => {
    const styles = {
        hue: {
            height: 10,
            position: "relative",
            marginTop: 8
        }, 
        saturation: {
            position: "relative",
            width: "100%",
            height: 200,
        }
    }
    return (
        <>
            <div style={styles.saturation}>
                <Saturation hsl={hsl} hsv={hsv} onChange={onChange} onChangeComplete={onChangeComplete}/>
            </div>
            <div style={styles.hue}>
                <Hue hsl={hsl} onChange={onChange}/>
            </div>
        </>
    )
})