import { Container, Input, Button } from "./styles";
import SearchLogo from './search.png'
const Search = () => {
    return (
        <Container>

            <Input placeholder="Search Here" />
            <Button>
                <img src={SearchLogo} />
            </Button>
        </Container>
    )
}


export default Search