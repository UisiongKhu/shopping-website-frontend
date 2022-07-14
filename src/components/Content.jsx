import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const Container = styled.div`
  padding-top:60px;
  display: flex;
`;
const Content = () => {
  return (
    <Container>
      <Sidebar />
      <ProductList />
    </Container>
  );
};

export default Content;
