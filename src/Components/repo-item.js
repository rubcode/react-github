import styled from 'styled-components'

const RepoItemStyled = styled.div`

`

function RepoItem({name}) {
    return (
        <RepoItemStyled>
            {name}
        </RepoItemStyled>
    )
}

export default RepoItem
