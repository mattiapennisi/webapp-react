import { createContext, useContext, useEffect, useState } from 'react'

const DefaultContext = createContext()

function DefaultProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const url = 'http://localhost:3000/movies'

    const showLoader = () => setIsLoading(true)
    const hideLoader = () => setIsLoading(false)

    useEffect(() => {
        showLoader()

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
                hideLoader()
            })
            .catch(err => {
                console.error(err)
                setIsLoaded(true)
                hideLoader()
            })
    }, [])

    return (
        <DefaultContext.Provider
            value={{
                movies,
                setMovies,
                isLoaded,
                isLoading,
                showLoader,
                hideLoader
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