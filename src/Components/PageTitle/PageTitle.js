import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-weight: 300;
    color: #9a9a9a;
    padding: 0;
    font-size: 18px;
    margin-bottom: 45px;
`

const PageTitle = props => 
(
    <StyledTitle>
        {props.title}
    </StyledTitle>
)

export default PageTitle;