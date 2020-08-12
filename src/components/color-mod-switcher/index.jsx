import React from 'react';
import { Field, Button } from 'components';

import './styles.scss'

export const ColorModSwitcher = ({currentItem, onChangeHex}) => {
    // RGB, sRGB, HEX
    const [mod, setMod] = React.useState("RGB");
      
    const rgbToHex = ({r, g, b}) => {
        const componentToHex = (c) => {
            const hex = Number(c).toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const srgbToHex = ({sr, sg, sb}) => {
        const componentToHex = (c) => {
            const hex = Math.round(Number(c * 255)).toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        return "#" + componentToHex(sr) + componentToHex(sg) + componentToHex(sb);
    }

    const hexToRgbA = (hex) => {
        let c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length == 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return {
                r: (c>>16)&255,
                g: (c>>8)&255,
                b: c&255,
                sr: (((c>>16)&255) / 255).toFixed(1),
                sg: (((c>>8)&255) / 255).toFixed(1),
                sb: ((c&255) / 255).toFixed(1)
            };
        }
    }
    
    const rgbColor = React.useMemo(() => hexToRgbA(currentItem.color), [currentItem.color]);

    const handleChangeRGB = (newRGB) => {
        onChangeHex(rgbToHex({...rgbColor, ...newRGB}));
    }

    const handleChangeSRGB = (newRGB) => {
        onChangeHex(srgbToHex({...rgbColor, ...newRGB}));
    }

    const handleFocus = (event) => {
        event.target.select();
    }

    return (
        <div className="color-mod-switcher">
            {mod === "HEX" && <Field label="HEX:" type="text" value={currentItem.color} onChange={(event) => {onChangeHex(event.target.value)}}/>}
            {mod === "RGB" && <div className="color-mod-switcher__fields">
                <Field width={47} label="R:" type="number" max="255" min="0" value={rgbColor.r} onChange={(event) => {handleChangeRGB({r: event.target.value})}}/>
                <Field width={47} label="G:" type="number" max="255" min="0" value={rgbColor.g} onChange={(event) => {handleChangeRGB({g: event.target.value})}}/>
                <Field width={47} label="B:" type="number" max="255" min="0" value={rgbColor.b} onChange={(event) => {handleChangeRGB({b: event.target.value})}}/>
            </div>}
            {mod === "sRGB" && <div className="color-mod-switcher__fields">
                <Field width={47} step="0.1" label="R:" type="number" max="1" min="0" value={rgbColor.sr} onFocus={handleFocus} onChange={(event) => {handleChangeSRGB({sr: event.target.value})}}/>
                <Field width={47} step="0.1" label="G:" type="number" max="1" min="0" value={rgbColor.sg} onFocus={handleFocus} onChange={(event) => {handleChangeSRGB({sg: event.target.value})}}/>
                <Field width={47} step="0.1" label="B:" type="number" max="1" min="0" value={rgbColor.sb} onFocus={handleFocus} onChange={(event) => {handleChangeSRGB({sb: event.target.value})}}/>
            </div>}
            <div className="color-mod-switcher__tabs">
                <Button active={mod === "RGB"} onClick={() => {setMod("RGB")}}>RGB</Button>
                <Button active={mod === "sRGB"} onClick={() => {setMod("sRGB")}}>sRGB</Button>
                <Button active={mod === "HEX"} onClick={() => {setMod("HEX")}}>HEX</Button>
            </div>
        </div>
    )
}