import React from 'react';
import styled from 'styled-components'

const OverlayStyled = styled.div`
    backdrop-filter: blur(10px);
    inset: 0;
    position: fixed;
`

function Overlay({children}) {
    return (
        <OverlayStyled>
            {children}
        </OverlayStyled>
    )
}

export default Overlay
