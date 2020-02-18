import React from "react";
import styled from "styled-components"; 
import KeyFrameBounce from '../KeyFrames/KeyFrameBounce';
import KeyFrameColorChange from '../KeyFrames/KeyFrameColorChange';  

const BALL_SIZE = "48px";   
const BallComponent = styled.div`
width: ${BALL_SIZE};
height: ${BALL_SIZE}; 
top: calc(50% - ${BALL_SIZE} / 2);
transform: translateY(calc(50% - ${BALL_SIZE} / 2));
position: absolute;
border:1px solid black; 
border-radius:100%;
left: calc(50% - ${BALL_SIZE} / 2);
animation: 
${KeyFrameBounce},
${KeyFrameColorChange} 
`;

function Ball(props) {  
  return ( 
      <BallComponent {...props}/>
  );
}

export default Ball;