import { createContext, useContext, useEffect, useState } from 'react'

const DefaultContext = createContext()

function DefaultProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const url = 'http://localhost:3000/movies'

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
                setMovies(data)
                setIsLoaded(true)
            })
            .catch(err => {
                console.error(err)
                setIsLoaded(true)
            })
    }, [])

    return (
        <DefaultContext.Provider
            value={{
                movies,
                setMovies,
                isLoaded
            }}
        >
            {children}
        </DefaultContext.Provider>
    )
}

function useDefaultState() {
    const context = useContext(DefaultContext)
    return context
}

export { DefaultProvider, useDefaultState }