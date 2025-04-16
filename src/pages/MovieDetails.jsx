import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { useDefaultState } from "../contexts/DefaultContext"

export default function MovieDetails() {

    const { id } = useParams()
    const { navigate } = useNavigate()
    const { movies, isLoaded } = useDefaultState()

    return (
        <>
            <div className="container">
                <h1 className="text-center mb-5">Movie Details</h1>

                <div className="row">
                    <div class="card p-5">
                        <img class="card-img-top" src="placeholder" alt="Title" />
                        <div class="card-body">
                            <h4 class="card-title">Movie {id} details</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum nam hic?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}