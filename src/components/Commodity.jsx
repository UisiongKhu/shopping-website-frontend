import React from "react";
import styled from 'styled-components'
import apple from '../img/apple.png'

const Container = styled.div`
    border: 1px solid #909090;
    border-radius: 10px;
    padding: .5rem .5rem;
    :hover{
        transform: translateY(-3px);
    }
`
const Image = styled.img`

`
const Name = styled.span`
    display: flex;
    justify-content: center;
`
const Price = styled.div`
    display: flex;
    justify-content: center;
    color: #ff5d0e;
`


const Commodity = (props) => {
    return (
        <Container>
            <Image src={apple}></Image>
            <Name>
                <a href="/">{props.info[0]}</a>
            </Name>
            <Price>${props.format(props.info[1])}</Price>
        </Container>
    )
}

export default Commodity