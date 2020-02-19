import React,{useState} from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

const SketchExample = (props)=>{
  const [displayColorPicker,setdisplayColorPicker] = useState(false);
  const [colors,setcolors] = useState(props.color); 

  const handleClick = () => {
    setdisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setdisplayColorPicker(false);
    props.onChange(props.id, colors);
  };

  const handleChange = (color) => {
    setcolors(color.hex);
  };
 
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${colors}`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <React.Fragment>
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>
        {displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={colors} onChange={handleChange} />
        </div> : null}
      </React.Fragment>
    )
  } 

export default SketchExample