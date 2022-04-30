import styled from 'styled-components'

export const Container = styled.div`
        height:75px;
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-between;
`

export const Logo = styled.img`
        height:100%;
`

export const LogoContainer = styled.div`
        height: 50px;
        width: 50px;
        margin: 0px 70px 0px 20px;

        @media (max-width:480px) {
        margin: 0px 20px 0px 0px;
    }
`


export const ProfileContainer = styled.div`
`

export const LogoAndSearchBar = styled.div`
        display: flex;
        width: 50%;

        @media (max-width:480px) {
       width: 75%;
    }
`