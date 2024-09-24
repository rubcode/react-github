import styled from 'styled-components'

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
`

function RepoItem(props) {
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
                            props.topics.map(item => <span className='topicItem'>{item}</span>)
                        }
                    </div>
                ) : null
            }
        </RepoItemStyled>
    )
}

export default RepoItem
