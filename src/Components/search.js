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
    function handlerClick(){
        setModal(true)
    }
    return (
        <SearchStyled onClick={handlerClick}>
            <ButtonRounded Icon={<Icon name="search" size="24"/>}/>
        </SearchStyled>
    )
}

export default Search
