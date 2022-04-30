import styled from 'styled-components'


export const Container = styled.div`
    position: fixed;
    background-color: rgba(25, 25, 55, 0.25);
    z-index: 999;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? '1' : '0'};
    transition: all 0.3s;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    float: right;
    padding: 20px;


`

export const Wrapper = styled.div`
    background-color: white;
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;


`