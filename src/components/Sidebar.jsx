import React from "react";
import styled from 'styled-components'
import Item from "./Item";

const Container = styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    gap:1rem;
`

const Title = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: .3rem;
    width:80%;
    border-bottom: 1px solid black;
`

const Category = [ 
    'Clothes',
    'Pants',
    'Foods',
    'Toys',
    'CD',
    'Hats'
 ]
const Sidebar = () => {
    return (
        <Container>
            <Title>分類列表</Title>
            {Category.map((category) => {return <Item name={category}></Item>})}
        </Container>
    )
}
export default Sidebar