import styled from 'styled-components'


export const Container = styled.div`
    margin-top: 50px;
    table{
        width: 100%;
        border-spacing: 0px;
    }

    color:#545255;
`;



export const TH = styled.th`
    background-color: #fef3ff;
    text-transform: uppercase;
    padding-top: 8px;
    padding-bottom: 8px;

    font-size: 12px;
    color:#545255;
    @media (max-width:480px) {
        display: ${props => props.hideInMobile && 'none'};
    }

`;

export const TD = styled.td`
    padding-top: 25px;
    padding-bottom: 25px;
    @media (max-width:480px) {
        display: ${props => props.hideInMobile && 'none'};
    }

`;


export const TR = styled.tr`
    margin-top:8px;
`;


export const THEAD = styled.thead`

`