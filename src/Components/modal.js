import React from 'react';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Overlay from './overlay';
import {ButtonContrast} from './button';
import InputText from './input-text';

const ModalContentStyled = styled.form`
    background: var(--bg);
    color: var(--white);
    padding: 1.5rem;
    border-radius: 0.5rem;
    position: fixed;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    inline-size: 24rem;
    .title{
        font: var(--headline2-semi-bold);
        margin: 0;
    }
`;


function ModalContent() {
    const form = useRef(null)
    const navigator = useNavigate();

    function handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData(form.current)
        navigator(`/${formData.get("username")}`)
    }

    return (
        <Overlay>
            <ModalContentStyled ref={form} action="" onSubmit={handlerSubmit}>
                <h2 className='title'>Busca un usuario</h2>
                <InputText type="text" name="username" placeholder="Ingresa un username"/>
                <ButtonContrast
                    text="Buscar"
                />
            </ModalContentStyled>
        </Overlay>
        
    )
}

export default ModalContent
