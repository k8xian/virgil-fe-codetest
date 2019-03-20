import React from "react";
import styled from 'styled-components';
import SearchInput from './SearchElements/SearchInput'
import SearchDropdown from './SearchElements/SearchDropdown'
import CreateButton from '../Buttons/CreateButton'

const StyledSearchBar = styled.div`
display: flex;
flex-direction: row;
`
const SearchBar = props => 
(
<StyledSearchBar>
    <SearchInput/>
    <SearchDropdown/>
    <CreateButton/>
</StyledSearchBar>
)

export default SearchBar;