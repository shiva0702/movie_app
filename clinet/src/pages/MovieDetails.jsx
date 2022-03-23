import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Loader from '../components/Loader';

function MovieDetails() {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    const fetchMovieDetails = async () => {
        try {
            setLoading(true);
            const response = await axios({
                method: 'get',
                url: `http://localhost:4000/api/movies/${movieId}`
            });
            setLoading(false);
            setDetails(response.data.movie);
        }
        catch (e) {
            setError(e.message);
        }
    }

    return (
        <Card text="black" className='mt-4 p-3'>
            {error && <Alert variant='danger'>{error}</Alert>}
            {loading ?
                <Loader />
                :
                <>
                    <div className='detail'>
                        <h1>{details.title}</h1>
                        <div className='moviedetail d-flex' >
                            <div>
                                <img src={details.poster} style={{ width: '25rem', height: '500px' }} />
                            </div>
                            <div className='m-5'>
                                <p style={{ fontSize: '2rem' }} >Rating: <span style={{ color: '#0d6efd' }}>{details.rating}</span></p>
                                <p style={{ fontSize: '2rem' }}>Created At: <span style={{ color: '#0d6efd' }}>{moment(details.createdAt).format('DD-MMM-YYYY')}</span></p>
                                <p style={{ fontSize: '2rem' }}>Updated At: <span style={{ color: '#0d6efd' }}>{moment(details.updatedAt).format('DD-MMM-YYYY')}</span></p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </Card>
    )
}

export default MovieDetails;