import React from "react";
import styled from "styled-components";

const Category = styled.h2`
`
const Item = (props) => {
    return (
        <h2> <a href="/">{props.name}</a>
        </h2>
    )
}

export default Item