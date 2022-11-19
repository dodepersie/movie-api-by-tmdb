import { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
import { searchMovie } from "../utilities/api";
import Differenttitle from '../utilities/differentTitle';
import Modalinternal from '../utilities/Modalinternal';

const Search = () => {
    Differenttitle("Movie API: Search")

    const[popularMovies, setPopularMovies] = useState([])

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
        return (
            <div key={i}>
                <Card className="d-flex justify-content-center align-items-center" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title}/>
                <Card.Body>
                    <Modalinternal activator={({ setShow }) => (
                    <Button className="d-inline-block text-truncate" style={{ maxWidth: '280px' }} variant="primary" onClick={() => setShow(true)}>{movie.title}</Button>)}>
                    <h5>{movie.title}</h5>
                    <hr />
                    <p>{movie.overview}</p>
                    <p><FontAwesomeIcon icon={faCalendar} /> Release date: <strong>{movie.release_date}</strong></p>
                    <p><FontAwesomeIcon icon={faStar} /> Vote average: <strong>{movie.vote_average}</strong></p>
                    </Modalinternal>
                </Card.Body>
                </Card>
            </div>
        )
        })
    }

    const search = async(q) => {
        if(q.length > 3) {
        const query = await searchMovie(q);
        setPopularMovies(query.results);
        }
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col sm={12}>
                <Form className="mb-3">
                    <InputGroup className="mb-2">
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                    <Form.Control id="searchMovie" onChange={({target}) => search(target.value)} placeholder="Enter movie name.." />
                    </InputGroup>
                </Form>

                <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                    <PopularMovieList />
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;