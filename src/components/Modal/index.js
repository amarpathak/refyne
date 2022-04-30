import { Container, Button, Wrapper } from "./styles";

export default function Modal(props) {
    const { toggleModal, children, open } = props
    return (
        <Container open={open}>
            <Wrapper >
                <Button onClick={toggleModal}>close</Button>
                {children}
            </Wrapper>
        </Container>
    )

}