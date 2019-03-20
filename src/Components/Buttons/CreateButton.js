import React from "react";
import styled from 'styled-components';

const StyledCreateButton = styled.button`
width: 95px;
height: 20px;
margin-left: 20%;
color: white;
text-transform: uppercase;
border: 0;
border-radius: 2px;
background-color: #5FB6C5;
font-size: 8px;
`

const CreateButton = props => 
(
<StyledCreateButton>Create New Role</StyledCreateButton>
)

export default CreateButton;