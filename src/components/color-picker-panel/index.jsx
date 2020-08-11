import React from 'react';
import { useStore } from 'store';
import { ColorModSwitcher, Buttons, ColorPicker, Field } from '../';

import './styles.scss'

export const ColorPickerPanel = () => {
    const { state: {data, selectIdItem }, updateItem, deleteItem } = useStore();
    const [currentItem, setCurrentItem] = React.useState(data.find(({id}) => id === selectIdItem) || data[0]);
    const { color: currentColor, name: currentName, type: currentType } = currentItem || {};

    React.useEffect(() => {document.body.style.backgroundColor = currentColor}, [currentColor]);
    React.useEffect(() => {setCurrentItem(data.find(({id}) => id === selectIdItem) || data[0])}, [selectIdItem, data]);

    const handleChangeName = (event) => {
        setCurrentItem({...currentItem, name: event.target.value});
    }

    const handleChangeType = (event) => {
        setCurrentItem({...currentItem, type: event.target.value});
    }

    const handleChangeColor = ({hex}) => {
        document.body.style.backgroundColor = hex;
        setCurrentItem({...currentItem, color: hex});
    }

    const handleSave = () => {
        updateItem({item: currentItem, id: selectIdItem});
    }

    const handleDelete = () => {
        deleteItem(selectIdItem);
    }

    const handleChangeHex = (hex) => {
        if(hex.length > 7) {
            return
        };
        
        setCurrentItem({...currentItem, color: hex});
    }
    
    return (
        <div className="color-picker-panel">
            <div className="color-picker-panel__fields">
                <div className="color-picker-panel__field">
                    <Field label="Name:" type="text" value={currentName} onChange={handleChangeName}/>
                </div>
                <div className="color-picker-panel__field">
                    <Field label="Type:" type="text" value={currentType} onChange={handleChangeType}/>
                </div>
            </div>
            <div className="color-picker-panel__color-picker">
                <ColorPicker color={currentColor} onChange={handleChangeColor}/>
            </div>
            <div className="color-picker-panel__fields">
                <ColorModSwitcher currentItem={currentItem} onChangeHex={handleChangeHex}/>
            </div>
            <div className="color-picker-panel__controls">
                <Buttons onSave={handleSave} onDelete={handleDelete}/>
            </div>
        </div>
    )
}