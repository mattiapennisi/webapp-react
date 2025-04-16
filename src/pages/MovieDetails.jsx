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
                            <div className="card p-5">
                                <img className="card-img-top" src={`http://localhost:3000${movieDetails.image}`} alt={`${movieDetails.title} cover`} />
                                <div className="card-body">
                                    <h4 className="card-title">Movie {movieDetails.id} details</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum nam hic?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}