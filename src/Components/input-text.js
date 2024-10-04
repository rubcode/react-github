import styled from 'styled-components'

const InputText = styled.input`
    border: 1px solid var(--grey);
    color: var(--white);
    background: var(--bg);
    padding-inline: 1rem;
    padding-block: .5rem;
    border-radius: .5rem;
    font: var(--body2-regular);
    flex: 1;
    @media screen and (prefers-color-scheme: light) {
        border: 1px solid var(--black);
        color: var(--bg);
        background: var(--white);
    }

`


export default InputText
