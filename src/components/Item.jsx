import React from "react";
import styled from "styled-components";

const Item = (props) => {
    return (
        <span>
            <h2>
                <a href="/">{props.name}</a>
            </h2>
        </span>
    )
}

export default Item