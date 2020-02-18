import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ColorPicker from './ColorPicker';
import './App.css'

function Loading() {
  const [state, setState] = useState(['blue', 'red', 'yellow']);
  const [stateAnimation, setStateAnimation] = useState(true);

  const handleStopAnim = () => {
    setStateAnimation(!stateAnimation);
  };

  const handleChangeComplete = (id, color) => {
    const newColors = state.slice();
    newColors[id] = color;
    setState(newColors);
  };

  const CIRCLE_SIZE = "48px";
  const DURATION = "0.5s";
  const DROP_HEIGHT = "200px";
  const OFFSET = "100px";

  const bounce = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(${DROP_HEIGHT}) scale(1, 0.7);
  }
`;

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
  ${bounce} ${DURATION} alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite,
  ${changeColors} 3s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite;
  ${props => {
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
      <div>Change colors</div>
      <LogoWrapper onClick={handleStopAnim} toggle={stateAnimation} />
    </React.Fragment>
  );
}

export default Loading;