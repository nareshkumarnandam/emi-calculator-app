import React, {useState} from 'react';
import Slider from '@mui/material/Slider';

const SliderWithInfo = ({min , max, value, symbol, title, steps, setValue}) => {
    

    function valuetext(value) {
        return `${value}°C`;
      }
      
    return (
        <div>
            <div><h5 style={{fontWeight:'400'}}>{title}</h5></div>
            
            <div><h2 style={{fontWeight:'400'}}>{symbol} {value}</h2></div>
            <div>
                <Slider
                    aria-label="Temperature"
                    defaultValue={value}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={steps}
                    marks
                    min={min}
                    max={max}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div><p>{symbol} {min}</p></div>
                <div><p>{symbol} {max}</p></div>
            </div>
        </div>
    )
}

export default SliderWithInfo