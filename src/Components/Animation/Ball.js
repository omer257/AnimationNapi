import React from "react";
import styled from "styled-components"; 
import KeyFrameBounce from '../../KeyFrames/KeyFrameBounce';
import KeyFrameColorChange from '../../KeyFrames/KeyFrameColorChange';  

const BALL_SIZE = "48px";   
const BallWrapper = styled.div` 
top: calc(50% - ${BALL_SIZE} / 2);
transform: translateY(calc(50% - ${BALL_SIZE} / 2));
position: absolute; 
left: calc(50% - ${BALL_SIZE} / 2);
animation: 
${KeyFrameBounce} 
`;

const BallComponent = styled.div`
width: ${BALL_SIZE};
height: ${BALL_SIZE};  
border:1px solid black; 
border-radius:100%; 
animation:  
${KeyFrameColorChange} 
`;

const Ball = (props)=> {  
  return ( 
    <BallWrapper {...props} className={!props.stateAnimation?'pause':''}>
      <BallComponent {...props} className={!props.stateAnimationColor?'pause':''}></BallComponent> 
    </BallWrapper> 
  );
}

export default Ball;