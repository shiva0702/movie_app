import { useEffect, useState } from 'react';
import axios from 'axios';
import './components/Header';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { Container, Card, Button, Row, Col, Alert } from 'react-bootstrap'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [] );

  const fetchMovies = async () => {
    try {
      const response= await axios ('http://localhost:5000/movies');
      debugger;
      setMovies(response)
    }
    catch(e) {
      setError(`Server Error ${e.message} ${e.stack}`);
    }
  }
  return (
   <div>
     <Header/>
     <Container className='mt-5'>
       <SearchBar />
       {error && <Alert variant="danger">{error}</Alert>}
       <Row className=''>
         <Col className='d-flex'>
       {movies.map(({title,id}) =>{
         return (
          <Card className='m-3' style={{ width: '18rem' }}>
          <Card.Body key={id}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Lorem
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
         )
       })}
       </Col>
       </Row>
     </Container>
   </div>
  );
}

export default App;
