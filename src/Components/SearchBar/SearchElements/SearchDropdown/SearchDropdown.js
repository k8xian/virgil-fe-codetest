import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSelect = styled.select`
margin-left: 18px;
border: 0;
-webkit-appearance: button;
-webkit-border-radius: 0;
border-radius: 0;
width: 145px;
background-color: transparent;
border-bottom: 1px solid #5FB6C5;
height: 21px;
padding-left: 6px;
color: #354C52;
z-index: 5;
`

const StyledCaret = styled.button`
margin-left: -14px;
color: #585858;
border: 0;
width: 8px;
z-index: 0
`

const SearchDropdown = props => 
(
    <div>
<StyledSelect>
    <option value="0">Active and Inactive</option>
    <option value="0">Active</option>
    <option value="0">Inactive</option>
</StyledSelect>
<StyledCaret><FontAwesomeIcon icon="caret-down" /></StyledCaret>
</div>
)

export default SearchDropdown;