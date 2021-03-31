import React from 'react'
import styled from 'styled-components'

const StyledSubDesc = styled.header`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
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
          fontSize: "4rem",
          lineHeight: "5rem",
          marginBottom: "2rem"
        }}
      >{props.titleText}</div>
      {props.desc}
      <div 
        style={{
          marginTop: "2rem",
          fontSize: "3rem"
        }}
      >{props.subTitleText}</div>
      <StyledSubDesc>{props.subDescText}</StyledSubDesc>
    </div>
  );
};

export default Content