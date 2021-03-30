import React from 'react'
import styled from 'styled-components'

const StyledSubDesc = styled.header`
  text-align: center;
  margin-top: 50px;
  font-size: 28px;
  max-width: 812px;
  color: ${props => props.theme.greyTextColor};
`

const Content = (props) => {
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
      <StyledSubDesc>{props.subDescText}</StyledSubDesc>
    </div>
  );
};

export default Content