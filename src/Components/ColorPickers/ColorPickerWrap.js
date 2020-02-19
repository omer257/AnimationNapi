import React from "react"; 
import ColorPicker from './ColorPicker'; 

const colorPickerWrap =  (props)=>{
  return (
    <React.Fragment> 
    {props.colors.map((item, i) => {
      return <ColorPicker key={i} id={i} color={props.colors[i]} onChange={props.handleColorPickerComplete} />
    })}
    </React.Fragment> 
  );
}

export default colorPickerWrap;