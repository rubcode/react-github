import React from 'react';
import styled from 'styled-components'

const LayoutStyled = styled.main`
    display: grid;
    min-block-size: 100vh;
    max-inline-size: 75rem;
    padding-block:2.5rem ;
    @media screen and (min-width: 768px){
        grid-template-columns: 278px 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        padding-inline: 20px;
        grid-template-areas: "profile filters" "profile repo-list";
    }
`

function Layout({children}){
    return(
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout