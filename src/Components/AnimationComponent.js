import React, { useState } from "react"; 
import ColorPickerWrap from './ColorPickerWrap'; 
import Button from './Button';
import Ball from './Ball';
import CreateRandomColor from '../HelperMethods/CreateRandomColor';

const Animation = ()=> {
  const [colors, setColors] = useState([CreateRandomColor(), CreateRandomColor(),CreateRandomColor()]);
  const [stateAnimation, setStateAnimation] = useState(false);
  const [stateAnimationColor, setStateShowAnimationColor] = useState(false);

  const clickAnimationBounce = () => {
    setStateAnimation(!stateAnimation);
  };
  const clickAnimationColor = () => {
    setStateShowAnimationColor(!stateAnimationColor); 
  }; 
  
  const handleColorPickerComplete = (id, color) => {
    const newColors = colors.slice();
    newColors[id] = color;
    setColors(newColors);
  }; 

  const addColor = () => { 
    setColors([...colors,CreateRandomColor()]);
  }; 

  return (
    <React.Fragment> 
      <ColorPickerWrap colors={colors} handleColorPickerComplete={handleColorPickerComplete}></ColorPickerWrap>
      <Ball toggle={stateAnimation} showColor={stateAnimationColor} colorList={colors} className={!stateAnimation?'pause':''}></Ball>
      <div>
        <Button onClick={addColor}>Add Color</Button>
        <Button onClick={clickAnimationBounce} status={stateAnimation}>Bounce ball</Button> 
        <Button onClick={clickAnimationColor} status={stateAnimationColor}>Change colors </Button>
      </div>
     </React.Fragment>
  );
}

export default Animation;