import React from 'react';
import styled from 'styled-components'

const SeparatorStyled = styled.div`
    margin-block: 1.5rem;
    border-block-end: 1px solid var(--grey);
`

function Separator() {
    return (
        <SeparatorStyled>
        </SeparatorStyled>
    )
}

export default Separator
