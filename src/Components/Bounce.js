import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ColorPicker from './ColorPicker';
import KeyFrameBounce from './KeyFrames/KeyFrameBounce'
import './App.css'

function Loading() {
  const [state, setState] = useState(['blue', 'red', 'yellow']);
  const [stateAnimation, setStateAnimation] = useState(false);
  const [stateAnimationColor, setStateAnimationColor] = useState(false);

  const handleStopAnim = () => {
    setStateAnimation(!stateAnimation);
  };
  const handleColorAnimation = () => {
    setStateAnimationColor(!stateAnimationColor);
  };

  const handleChangeComplete = (id, color) => {
    const newColors = state.slice();
    newColors[id] = color;
    setState(newColors);
  };

  const CIRCLE_SIZE = "48px";  
 
  const changeColors = keyframes`
  0% { background-color:${state[0]};} 
  30% { background-color:${state[1]};} 
  80% { background-color:${state[2]};} 
`;   

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
  ${changeColors} 3s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite
  ${props => {
    if (props.colors) {
      return `,${changeColors} 3s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite;`;
    }
    if (props.toggle) {
      return `
    -webkit-animation-play-state: paused !important;
    -moz-animation-play-state: paused !important;
    -o-animation-play-state: paused !important; 
    animation-play-state: paused !important;
    `;
    }
  }}
`;

  return (
    <React.Fragment>
      {state.map((item, i) => {
        return <ColorPicker key={i} id={i} color={state[i]} onChange={handleChangeComplete} />
      })}
      <div onClick={handleColorAnimation}>Change colors</div>
      <div onClick={handleStopAnim} >Animate</div>
      <LogoWrapper toggle={stateAnimation} colors={stateAnimationColor} />
    </React.Fragment>
  );
}

export default Loading;