import React from "react";
import styled from "styled-components";

const UnderLine = styled.div`
  flex:0;
  ::before,::after {
    position: absolute;
    content: "";
    background-color: grey;
    bottom: 0;
    width: 0%;
    height: 1px;
  }
  ::before{
      left:50%;
  }
  ::after{
      right:50%;
  }
    
`
const Category = styled.a`
  width:60%;
  cursor: pointer;
  padding:.3rem 0 ;
  position: relative;
  display: flex;
  justify-content: center;
  &:hover {
      ${UnderLine}::before,${UnderLine}::after{
          width:50%;
          transition: width .2s linear;
      }
  }
`;
const Item = (props) => {
  return (
    <Category href="/">
      <UnderLine></UnderLine>
      <h2>{props.name}</h2>
    </Category>
  );
};

export default Item;
