import { useEffect, useState } from 'react';
import axios from 'axios';
import './components/Header';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { Container, Card, Button, Row, Col, Alert } from 'react-bootstrap'; 
// import { BsFillStarFill } from 'react-icons/fa';
import { FaReact,FaStar } from "react-icons/fa";
import Loader from './components/Loader';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, [] );

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response= await axios ('http://localhost:4000/movies');
      setLoading(false);
      setMovies(response.data)
    }
    catch (e) {
      setLoading(false);
      setError(`Server Error ${e.message} ${e.stack}`);
    }
  }
  return (
   <div>
     <Header/>
     <Container className='mt-5'>
       <SearchBar onClickRefresh={fetchMovies} />
       {error && <Alert variant="danger">{error}</Alert>}
       {loading ? <Loader /> :
       <Row className=''>
         <Col className='d-flex flex-wrap'>
       {movies.map(({title,id,Poster,rating}) =>{
         return (
          <Card className='m-3' style={{ width: '15rem' }}>
          <Card.Body key={id}>
          <img src={Poster} key={id} style={{ width: '13rem',height: '200px' }} />
          <div className='d-flex'>
            <Card.Title style={{width: '100%'}}>{title}</Card.Title>
            <span className='d-flex '>{rating}<FaStar className='mt-1' color='#ff8d00' /></span>
          </div >
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
         )
       })}
       </Col>
       </Row>
}
     </Container>
   </div>
  );
}

export default App;
