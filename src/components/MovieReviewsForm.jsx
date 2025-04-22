import { useState } from 'react'

export default function MovieReviewsForm({ movieId }) {

    const url = `http://localhost:3000/${movieId}/reviews/`

    const [formData, setFormData] = useState({
        name: '',
        vote: 0,
        text: ''
    })

    function handleFormSubmit(e) {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <>
            <h2 className="my-5">Add your review</h2>
            <form className="d-flex gap-3" action="POST" onSubmit={handleFormSubmit}>

                <input className='form-control' type="text" name="review-name" id="review-name" placeholder="Username" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                <select name="review-vote" id="review-vote" value={formData.vote} onChange={(e) => setFormData({...formData, vote: Number(e.target.value)})} required>
                    <option value=" ">Choose your vote</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className='form-control' type="text" name="review-text" id="review-text" placeholder="Review text" value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})} required />
                <button type="submit" className="btn btn-outline-primary">Submit</button>

            </form>
        </>
    )
}