import React from "react";
import styled from 'styled-components'
import Commodity from "./Commodity";

const Container = styled.div`
    flex:8;
    padding:1rem 1rem;
    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const Product = [
    ['蘋果',58564365474538],
    ['蘋果',543643],
    ['蘋果',24352],
    ['蘋果',423],
    ['蘋果',96846948],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
    ['蘋果',58564365474538],
]

const priceFormat = (num) => {
    let str = num.toString()
    let n = str.length - 3
    while(n>0){
        str = str.substring(0,n) + ',' + str.substring(n)
        n -= 3
    }
    return str
}

const ProductList = () => {
    return (
        <Container>
            {Product.map((product) =>{
                return <Commodity info={product} format={priceFormat}></Commodity>
            })}
        </Container>
    )
}

export default ProductList;