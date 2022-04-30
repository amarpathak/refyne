import { Container, HeaderContainer, ChildrenContainer } from "./styles"
import Header from '../Header';

const Layout = (props) => {
    return (
        <Container>
            <HeaderContainer><Header /></HeaderContainer>
            <ChildrenContainer>{props.children}</ChildrenContainer>
        </Container>
    )
}
export default Layout