import React from 'react';
import styled from 'styled-components'

const LanguageStyled = styled.div`
   display: flex;
   gap: .5rem;
   align-items: center;
   &:before{
    content: '';
    inline-size: 1rem;
    block-size: 1rem;
    border-radius: 50%;
    background: ${({color}) => color};
   }
`
const languages = {
    html:{
        color: "orange"
    },
    python: {
        color: "purple"
    },
    javascript: {
        color: "yellow"
    },
    css: {
        color: "green"
    },
    php: {
        color: "blue"
    }
}

function Language({name}) {
    const formattedName = name.toLowerCase();
    const color= languages[formattedName] ? languages[formattedName].color : "white"
    return (
        <LanguageStyled color={color}>
            {name}
        </LanguageStyled>
    )
}

export default Language
