import React from 'react';
import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
    grid-area: repo-list;
    display: flex;
    flex-direction: column;
    gap:2rem;
    .label{
        font: var(--body1-regular);
        text-align: center;
    }
`

function RepoList({repoList,search,language}) {
    let list = repoList;
    if(search !== ''){
        list = list.filter(item =>{
            return item.name.search(search) >= 0
        });
    }
    if(language !== ''){
        list = list.filter(item => {
            return item.language.search(language) >= 0
        });
    }
    return (
        <RepoListStyled>
            {
                list.length > 0 ? 
                    list.map((item) => {
                        return <RepoItem {...item} key={item.id}/>
                    }) : 
                    <p className='label'>No existen repositorios con tus búsqueda</p>
                
            }
            
        </RepoListStyled>
    )
}

export default RepoList
