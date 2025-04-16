import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { useDefaultState } from "../contexts/DefaultContext"

export default function MovieDetails() {

    const { id } = useParams()
    const navigate = useNavigate()
    const url = `http://localhost:3000/movies/${id}`
    const [movieDetails, setMovieDetails] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovieDetails(data)
                setIsLoaded(true)
            })
            .catch(err => {
                console.error(err)
                setIsLoaded(true)
            })
    }, [])

    return (
        <>
            {
                isLoaded && (
                    <div className="container">
                        <h1 className="text-center mb-5">{movieDetails.title}</h1>

                        <div className="row">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="card-img-top" src={`http://localhost:3000${movieDetails.image}`} alt={`${movieDetails.title} cover`} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className='mt-5 mb-4'>Reviews</h2>
                        <div className="row g-3">
                            {
                                isLoaded && movieDetails.reviews.map((review, index) => (
                                    <div key={index}>
                                        <div className="card p-3">
                                            <img className="card-img-top user-image" src="../../public/img/Unknown_user.jpg" alt="User image" />
                                            <div className="card-body">
                                                <h4 className="card-title mb-3">{review.name}</h4>
                                                <p className="card-text">Vote: {review.vote}</p>
                                                <p className="card-text">{review.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}