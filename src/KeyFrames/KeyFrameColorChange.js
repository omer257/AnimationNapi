import { css, keyframes } from 'styled-components'

const changeColors = props =>
  {  
    // if(!props.showColor){ 
    //   //return simple animation
    //   return keyframes`0% { background-color:${props.colorList[0]};} 100% { background-color:${props.colorList[0]};}`; 
    // }
    const segmentLength = 100/props.colorList.length;
    let buildKeyFrames='';
    for(let i=0;i<props.colorList.length;i++){  
        buildKeyFrames+=`${i===0?'0':segmentLength*i}% { background-color:${props.colorList[i]};}` 
    } 
    //Prevent white gaps
    buildKeyFrames+=`100% { background-color:${props.colorList[props.colorList.length-1]};}` 
    
    return keyframes` ${buildKeyFrames}`;   
  }

const chnageColorsAnimation = props =>
  { 
    return css`${changeColors} 3s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite` 
  }

export default chnageColorsAnimation;