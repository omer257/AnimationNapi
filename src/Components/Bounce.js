import React,{useState} from "react";
import styled, { keyframes } from "styled-components"; 
import ColorPicker from './ColorPicker';

const LOGO_SIZE = "48px";
const DURATION = "0.5s";
const SHADOW_HEIGHT = `${Math.round(48 / 5)}px`;
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
  from {
    background-color:pink;
  }
  to { 
    background-color:blue;
  }
`;


const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
`;

const LogoWrapper = styled.div`
  width: ${LOGO_SIZE};
  height: ${LOGO_SIZE};
  position: absolute;
  top: ${OFFSET};
  background-color:red;
  border-radius:100%;
  left: calc(50% - ${LOGO_SIZE} / 2);
  animation: 
  ${bounce} ${DURATION} alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite,
  ${changeColors} 3s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite;
`;
 
// animation-name: ${bounce} 3s;
// animation-duration: ${DURATION};
// animation-direction: alternate;
// animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
// animation-iteration-count: infinite;

function Loading() {
const [state,setState] = useState('#fff'); 

  const handleChangeComplete = (color) => {
    setState(color.hex);
    console.log(color);
    
  };

  return (
    <Container>
      <ColorPicker color={ state}
        onChange={handleChangeComplete}></ColorPicker>
      <LogoWrapper /> 
    </Container>
  );
}

export default Loading;