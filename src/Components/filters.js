import React from 'react';
import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector';
import Separator from './separator';


const FiltersStyled = styled.div`
    grid-area: filters;
    .count{
        font: var(--headline2-semi-bold);
        color: var(--white);
        margin-block-end: 1.5rem;
    }
    .action-list{
        display: flex;
        gap: 1rem;
    }
    .select-list{
        display: flex;
        gap: .5rem;
    }

`

function Filters({repoListCount = 100,setSearch}) {
    function handlerChange(event){
        setSearch(event.target.value)
    }
    return (
        <FiltersStyled>
            <h2 className='count'>Repositorios ({repoListCount})</h2>
            <div className='action-list'>
                <InputText
                    placeholder='Busca un repositorio'
                    type="search"
                    onChange={handlerChange}
                />
                <div className='select-list'>
                    <Selector>
                        <option value="Tipo" disabled selected>Tipo</option>
                        <option value="sources">Sources</option>
                        <option value="forks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="mirrors">Mirrors</option>
                    </Selector>
                    <Selector>
                        <option value="Lenguaje" disabled selected>Lenguaje</option>
                        <option value="HTML">HTML</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="CSS">CSS</option>
                        <option value="PHP">PHP</option>
                    </Selector>
                    <Selector>
                        <option value="Ordenar" disabled selected>Ordenar</option>
                        <option value="tiempo">Tiempo</option>
                        <option value="estrellas">Estrellas</option>
                    </Selector>
                </div>
                
            </div>
            <Separator/>
        </FiltersStyled>
    )
}

export default Filters
