import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
import { getNowPlayingList } from "../utilities/api";
import Differenttitle from '../utilities/differentTitle';
import Modalinternal from '../utilities/Modalinternal';

const NowPlaying = () => {
    Differenttitle("Movie API: Now Playing")

    const[nowPlaying, setPNowPlaying] = useState([])

    useEffect(() => {
        getNowPlayingList().then((result) => {
            setPNowPlaying(result)
        })
    }, []);

    const NowPLayingList = () => {
        return nowPlaying.map((movie, i) => {
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

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col sm={12}>
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                    <NowPLayingList />
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NowPlaying;