import React from 'react';
import ReviewForm from './reviewForm';
import {useState} from 'react'

const MovieList = (props) => {
   const [allReviews, setAllReviews] = useState([])  
    //state hooks

    //function to handle user submit/review
    return (
        <>
        
        {props.movies.map((movie, index) => (
           <>
           <div className='fw-bold fs-3 mt-5 ms-5'>{movie.Title}</div>
            <div className='image-container justify-content-start m-5'>
                
                <img src={movie.Poster} alt='movie'/>
                
                <br></br>
                <ReviewForm />
            </div>
            </>
            
        ))}
        
        </>
    );
};

export default MovieList;