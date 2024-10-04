import React from 'react';
import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: none;
    background-color: var(--grey-2);
    color: var(--white);
    padding-inline: 1rem;
    border-radius: .5rem;
    option{
        background-color: var(--buttoBG);
    }
    @media screen and (prefers-color-scheme: light) {
        border: 1px solid var(--black);
        background-color: var(--white);
        color: var(--black);
    }
`

function Selector({children}) {
    return (
        <SelectorStyled>
            {children}
        </SelectorStyled>
    )
}

export default Selector
