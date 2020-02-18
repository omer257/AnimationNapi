import React, { useState } from "react";
import styled from "styled-components";
import ColorPicker from './ColorPicker';
import KeyFrameBounce from '../KeyFrames/KeyFrameBounce';
import KeyFrameColorChange from '../KeyFrames/KeyFrameColorChange';
import Button from '../Components/Button';
import  './App.css'

const CIRCLE_SIZE = "48px";  


const LogoWrapper = styled.div`
width: ${CIRCLE_SIZE};
height: ${CIRCLE_SIZE}; 
top: calc(50% - ${CIRCLE_SIZE} / 2);
transform: translateY(calc(50% - ${CIRCLE_SIZE} / 2));
position: absolute;
border:1px solid black; 
border-radius:100%;
left: calc(50% - ${CIRCLE_SIZE} / 2);
animation: 
${KeyFrameBounce},
${KeyFrameColorChange} 
`;

function Loading() {
  const [colors, setColors] = useState([getRandomColor(), getRandomColor(),getRandomColor()]);
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

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const addColor = () => { 
    setColors([...colors,getRandomColor()]);
  };


  return (
    <React.Fragment> 
      {colors.map((item, i) => {
        return <ColorPicker key={i} id={i} color={colors[i]} onChange={handleColorPickerComplete} />
      })}
      <Button onClick={addColor}>Add Color</Button>
      <Button onClick={clickAnimationColor} status={stateAnimationColor}>Change colors</Button>
      <Button onClick={clickAnimationBounce} status={stateAnimation}>Animate</Button> 
      <LogoWrapper toggle={stateAnimation} showColor={stateAnimationColor} colorList={colors} className={!stateAnimation?'pause':''} />
    </React.Fragment>
  );
}

export default Loading;