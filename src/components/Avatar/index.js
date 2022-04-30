import { Container, Image, Status, Wrapper } from "./styles"

const Avatar = (props) => {

    return (
        <Container>
            <Wrapper>
                <Image src={props.url} alt={props.alt} />
                <Status status={props.status} />
            </Wrapper>
        </Container>
    )
}

export default Avatar