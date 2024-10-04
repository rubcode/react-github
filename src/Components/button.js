import React from 'react';
import styled from 'styled-components'
import {isValidElement} from 'react'

const ButtonStyled = styled.button`
    background: var(--buttonBG);
    color: var(--white);
    border: 1px solid var(--grey);
    border-radius: .5rem;
    padding-block: .25rem;
    min-inline-size: 135px;
    display: inline-flex;
    align-items:center;
    justify-content: center;
    font: var(--button);
    cursor: pointer;
    text-decoration: none !important;
    gap: .5rem;
    &:hover{
        background: var(--white);
        color: var(--button)
    }
    @media screen and (prefers-color-scheme: light) {
        background: var(--white);
        color: var(--black);
        border: 1px solid var(--black);
        &:hover{
            background: var(--buttonBG);
            color: var(--white)
        }
    }
`


function Button({text,link,className,Icon}) {
    const component = link ? "a" : "button"
    let iconComponent = null
    if(Icon){
        if(isValidElement(Icon)){
            iconComponent = Icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {iconComponent}
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background-color: var(--white);
    color: var(--buttonBG);
    &:hover{
        background-color: var(--buttonBG);
        color: var(--white);
    }
`

export const ButtonRounded = styled(Button)`
    min-inline-size: initial;
    border-radius: 50%;
    padding: .75rem;
    border: 2px solid var(--grey-2);
    &:hover{
        background: var(--buttonBG);
        transform: scale(1.1);
    }
    @media screen and (prefers-color-scheme: light) {
        &:hover{
            background: var(--white);
        }
    }
`

export default Button
