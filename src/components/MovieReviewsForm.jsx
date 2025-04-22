export default function MovieReviewsForm() {
    return (
        <>
            <h2 className="my-5">Add your review</h2>
            <form className="d-flex gap-3">
                <input type="text" placeholder="Enter your username" required />
                <label htmlFor="review-vote">Vote</label>
                <select name="review-vote" id="review-vote">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="text" placeholder="Enter your review text" required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}