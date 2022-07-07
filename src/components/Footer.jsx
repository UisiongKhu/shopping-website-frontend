import React from "react";
import styled from "styled-components";
const Container = styled.div`
  border-top: 5px;
  padding: 1rem 1rem;
  border-top:1px solid grey;
  display: flex;
  justify-content: space-between;
`
const Title = styled.h2`
  color :black;
  font-weight: bold;
  font-size: 1.2rem;
`
const ButtonContainer = styled.div`
  display: flex;
  gap:.5rem;
`
const Button = styled.button`
  border: none;
  :not(:last-child)::after{
    content :'  |';
  }
`
const Copyright = styled.h2`
  color: grey;

`

const Footer = () => {
  return (
    <Container>
      <Title>TEST.</Title>
      <ButtonContainer>
        <Button>Contact</Button>
        <Button>Home</Button>
        <Button>Service</Button>
        <Button>Ya</Button>
      </ButtonContainer>
      <Copyright>copyright © HTM. all rights reserved</Copyright>
    </Container>
  )
};

export default Footer;
