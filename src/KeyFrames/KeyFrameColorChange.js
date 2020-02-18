import { css, keyframes } from 'styled-components'

const changeColors = props =>
  { 
    console.log(props.showColor);
    if(props.showColor){ 
      return keyframes`0% { background-color:${props.colorList[0]};}`; 
    }
    const segmentLength = 100/props.colorList.length;
    let buildKeyFrames='';
    for(let i=0;i<props.colorList.length;i++){  
        buildKeyFrames+=`${i===0?'0':segmentLength*i}% { background-color:${props.colorList[i]};}` 
    } 
    return keyframes` ${buildKeyFrames}`;   
  }

const animation2 = props =>
  { 
    return css`${changeColors} 3s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035)  infinite` 
  }

export default animation2;