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

export default Button
