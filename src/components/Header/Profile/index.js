import { Container, Name, Role, Info } from "./styles";
import Avatar from '../../Avatar';

const Profile = () => {
    return (
        <Container>
            <Info>
                <Name>John Doe</Name>
                <Role>Admin</Role>
            </Info>
            <Avatar status="online" url={"https://reqres.in/img/faces/1-image.jpg"} />
        </Container>
    )
}

export default Profile