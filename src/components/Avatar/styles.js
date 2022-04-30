import styled from 'styled-components'

export const Container = styled.div`
        
`
export const Wrapper = styled.div`
        height: 45px;
        width: 45px;
        border-radius: 50%;
        position: relative;
        display: inline-block;

`

export const Image = styled.img`
        width: 100%;
        border-radius:50%;

`

export const Status = styled.div`
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: ${props => props.status == 'online' ? 'green' : ''};
        background-color: ${props => props.status == 'offline' ? 'red' : ''};
        position: absolute;
        right: 10%;
        bottom: 5%;

`