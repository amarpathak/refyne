import {
    Container, Logo,
    LogoAndSearchBar,
    ProfileContainer, LogoContainer
} from "./styles"
import SearchBar from '../Search';
import Profile from "./Profile";
import LogoImage from '../../logo.png'
const Header = () => {
    return (
        <Container>
            <LogoAndSearchBar>
                <LogoContainer>
                    <Logo src={LogoImage} />
                </LogoContainer>
                <SearchBar />
            </LogoAndSearchBar>
            <ProfileContainer>
                <Profile />
            </ProfileContainer>
        </Container>
    )
}

export default Header