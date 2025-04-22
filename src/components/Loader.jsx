import { useDefaultState } from '../contexts/DefaultContext'

export default function Loader() {
    const { isLoading } = useDefaultState()

    if (!isLoading) return null

    return (
        <div className="global-loader d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}