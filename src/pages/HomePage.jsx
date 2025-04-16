import { useDefaultState } from "../contexts/DefaultContext"

export default function HomePage() {

    const { movies, isLoaded } = useDefaultState()

    return (
        <>
            <div className="container">
                <h1 className="text-center mb-5">Movies List</h1>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-3">
                    {
                        isLoaded && movies.map((movie, index) => (
                            <div key={index} className="col">
                                <div className="card p-3">
                                    <img className="card-img-top" src="placeholder" alt="Title" />
                                    <div className="card-body">
                                        <h4 className="card-title">{movie.title}</h4>
                                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste laborum mollitia quos</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}