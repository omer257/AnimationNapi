import React from "react"; 

export default function App(props) {
  return (
  <div className={props.status?'red':'blue'} onClick={props.onClick}>{props.children}</div>
  );
}