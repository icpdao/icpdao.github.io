import React from 'react'

export default (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: 100,
          lineHeight: "118px",
          marginBottom: 50
        }}
      >{props.titleText}</div>
      {props.desc}
      <div 
        style={{
          marginTop: 50,
          fontSize: 55
        }}
      >{props.subTitleText}</div>
      <div 
        style={{
          textAlign: 'center',
          marginTop: 50,
          fontSize: 28,
          maxWidth: 812,
          color: "#E8E9EA"
        }}
      >{props.subDescText}</div>
    </div>
  );
};
