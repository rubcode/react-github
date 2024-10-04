import React from 'react';
import styled from 'styled-components'
import Icon from './Icon'
import { ButtonRounded } from './button';

const SearchStyled = styled.div`
    position: fixed;
    inset-block-end: 1.5rem;
    inset-inline-end: 1.5rem;
`

function Search({setModal}) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let color = "white";
    if(!prefersDarkScheme){
        color = "black";
    }
    function handlerClick(){
        setModal(true)
    }
    return (
        <SearchStyled onClick={handlerClick}>
            <ButtonRounded Icon={<Icon name="search" size="24" color={color}/>}/>
        </SearchStyled>
    )
}

export default Search
