import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { movieId } = useParams();


    return (
        <div>
            <h1>
                Movie Details {movieId}
            </h1>
        </div>
    )
}

export default MovieDetails;