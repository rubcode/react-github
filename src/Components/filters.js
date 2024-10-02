import React from 'react';
import styled from 'styled-components'
import ModalContent from './modal';

const FiltersStyled = styled.div`
    grid-area: filters;

`

function Filters() {
    return (
        <FiltersStyled>
            <ModalContent/>
            Filters
        </FiltersStyled>
    )
}

export default Filters
