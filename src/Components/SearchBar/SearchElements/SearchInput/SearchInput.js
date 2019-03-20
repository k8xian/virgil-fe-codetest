import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledInput = styled.input`
border: 0;
width: 140px;
border-bottom: 1px solid #5FB6C5;
line-height: 18px;
::placeholder {
    color: #C8C8C8;
}
`

const StyledSubmit = styled.button`
color: #585858;
border: 0;
margin-left: -16px;
`

const SearchInput = props => 
(
    <div>
<StyledInput type="text" placeholder="search"></StyledInput>
<StyledSubmit type="submit"><FontAwesomeIcon icon="search" /></StyledSubmit>
</div>
)

export default SearchInput;