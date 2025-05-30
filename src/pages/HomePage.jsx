import { Link } from 'react-router-dom'

import { useDefaultState } from "../contexts/DefaultContext.jsx"
import Loader from "../components/Loader.jsx"

export default function HomePage() {

    const { movies, isLoaded } = useDefaultState()

    return (
        <>
            <div className="container">
                <h1 className="text-center mb-5">Movies List</h1>

                {!isLoaded ? (
                    <Loader />
                ) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {movies.map((movie, index) => (
                            <div key={index} className="col">
                                <Link to={`/movies/${movie.id}`} className="text-decoration-none text-reset">
                                    <div className="card card-in-list p-3">
                                        <img className="card-img-top" src={`http://localhost:3000${movie.image}`} alt={`Movie ${movie.id}`} />
                                        <div className="card-body">
                                            <h4 className="card-title">{movie.title}</h4>
                                            <p className="card-text">{movie.abstract}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}