import { useState } from 'react'

export default function MovieReviewsForm({ movieId }) {

    const url = `http://localhost:3000/movies/${movieId}/reviews`

    const [formData, setFormData] = useState({
        name: '',
        vote: '',
        text: '',
    })
    const [formErrors, setFormErrors] = useState({})

    function isFormValid(data) {
        const errors = {}

        if (!data.name) errors.name = 'Username is required'
        if (!data.vote) errors.vote = 'Vote is required'
        if (!data.text) errors.text = 'Text is required'

        if (data.name.length < 3) errors.name = 'Username must be at least 3 characters long'
        if (data.name.length > 50) errors.name = 'Username must be less than 50 characters long'

        if (data.text.length < 3) errors.text = 'Review text must be at least 3 characters long'
        if (data.text.length > 500) errors.text = 'Review text must be less than 500 characters long'

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        console.log(formData)

        if (!isFormValid(formData)) {
            console.log('Form is not valid');
            return
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFormData({
                    name: '',
                    vote: '',
                    text: ''
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <h2 className="my-5">Add your review</h2>
            <form className="d-flex gap-3" action="POST" onSubmit={handleFormSubmit}>

                <input className='form-control' type="text" name="review-name" id="review-name" placeholder="Username" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <select className='form-control' name="review-vote" id="review-vote" value={formData.vote} onChange={(e) => setFormData({ ...formData, vote: Number(e.target.value) })} required>
                    <option value=" ">Enter your vote</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className='form-control' type="text" name="review-text" id="review-text" placeholder="Review text" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} required />
                <button type="submit" className="btn btn-outline-primary">Submit</button>

            </form>
        </>
    )
}