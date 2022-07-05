import React from "react";
import styled from 'styled-components'
import Item from "./Item";

const Container = styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    align-items: center;
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
            {Category.map((category) => {return <Item name={category}></Item>})}
        </Container>
    )
}
export default Sidebar