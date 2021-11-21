// import { Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';





const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-cove-16901.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReview(data);

            })
    }, [])


    return (
        <div>
            <h2> techLand Client review</h2>
            <div>
                {
                    review.map(ele => <div style={{ margin: '5px', padding: '10px', borderRadius: '13px', border: '2px solid' }}>
                        <p> feedback:{ele.review}</p>
                        <h3> name :{ele.firstName}</h3>
                        <Typography component="legend">Rate Star</Typography>
                        {
                            [...Array(parseInt(ele.star)).keys()].map(e => <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '25px', color: 'goldenrod' }} className="h-1 w-1 inline" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>)
                        }

                        {/* <Rating name="half-rating" defaultValue={parseInt(review.star)} precision={0.5} /> */}


                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;