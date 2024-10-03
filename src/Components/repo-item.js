import React from 'react';
import styled from 'styled-components'
import Language from './language'
import Icon from './Icon'

const RepoItemStyled = styled.div`
    padding-block: 1rem;
    display: flex;
    gap:1rem;
    flex-direction: column;
    border-block-end: 1px solid var(--grey);
    &:last-child{
        border-block-end: none;
    }
    .title{
        display: flex;
        gap: 1rem;
        margin: 0;
        a{
            color: var(--primary);
            text-decoration: none;
        }
    }
    .public{
        border: 1px solid var(--grey);
        padding-inline: .5rem;
        padding-block: .125rem;
        border-radius: .5rem ;
        font: var(--caption-regular);
    }
    .description{
        margin: 0;
        font: var(--body2-regular);
    }
    .topicList{
        display: flex;
        gap: 0.25rem;
    }
    .topicItem{
        color: var(--primary);
        font: var(--caption-medium);
        background: #15223A;
        padding-inline: .75rem;
        padding-block: .25rem;
        border-radius: 32px;

    }
    .details{
        display: flex;
        gap: 1rem;
        font: var(--caption-regular);
    }
    .details-item{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--grey-1);
    }
`

function RepoItem(props) {
    const updatedAt = new Date(props.updated_at)
    const today = new Date();
    const diffMilliseconds = updatedAt - today;
    const diffDays = Math.ceil(diffMilliseconds / (1000*60*60*24));
    const timeAgo =  new Intl.RelativeTimeFormat("es").format(diffDays,'days')
    return (
        <RepoItemStyled>
            <h3 className='title'>
                <a href={props.html_url}>{props.name}</a>
                {
                    !props.private ? (<span className='public'>Public</span>) : null
                }
            </h3>
            {
                props.description ? (
                    <p className='description'>{props.description}</p>
                ) : null
            }
            {
                props.topics.length ? (
                    <div className='topicList'>
                        {
                            props.topics.map(item => <span className='topicItem' key={item}>{item}</span>)
                        }
                    </div>
                ) : null
            }
            {
                props.language ? (
                    <Language 
                        name={props.language}
                    />
                ) : null
            }
            <div className='details'>
                <span className='details-item'>
                    <Icon name="star"/>
                    <span>{props.stargazers_count}</span>
                </span>
                <span className='details-item'>
                    <Icon name="branch"/>
                    <span>{props.forks_count}</span>
                </span>
                <span className='details-item'>
                    <span>{timeAgo}</span>
                </span>
            </div>

        </RepoItemStyled>
    )
}

export default RepoItem
