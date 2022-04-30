import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;

`

export const Name = styled.div`
    color: #5a5656;
    font-size: 15px;
`

export const Role = styled.div`
    color: #8e8888;
    font-size: 12px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    height: 100%;
    margin-right: 8px;

    @media (max-width:480px) {
       display: none;
    }


`
