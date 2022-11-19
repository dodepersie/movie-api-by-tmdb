import { Container, Row, Alert } from 'react-bootstrap';
import Differenttitle from '../utilities/differentTitle';

const Main = () => {
    Differenttitle("Movie API: Home")

    return (
        <>
            <Container>
                <Row className="my-3">
                <Alert variant="primary">
                    <h4 class="alert-heading">Information</h4>
                    <p>Movie API is a website based on ReactJS;
                    This website using API from TMDB;
                    You can see popular movies, see playing movies on cinema and search for movies!
                    </p>
                    <hr />
                    <p className="mb-0">
                    Created by: <a href="https://github.com/dodepersie" target="_blank" rel="noopener noreferrer">@dodepersie</a> - Tutorial by: <a href="https://www.youtube.com/deaafrizal" target="_blank" rel="noopener noreferrer">Dea Afrizal</a>  - Powered by TMDB
                    </p>
                </Alert>
                </Row>
            </Container>
        </>
    )
}

export default Main;