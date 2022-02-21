import {useState} from 'react'
import Router from 'next/router'

const AddAuthorBook = ({authors,books}) =>{
    const [author_id, setAuthor] = useState('')
    const [book_id, setBook] = useState('')

    const submitAssign = async() => {
    const res = await fetch(`http://localhost:8000/api/authorbooks`,{
        method: 'POST',
        body: JSON.stringify({ author_id,book_id }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const authorbook = await res.json()
    Router.reload(window.location.pathname)
}
    return(
        <div className="modal fade" id="assign" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Assign</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label>Select Author</label>
                        <select className="form-control form-control-sm mb-2" value={author_id} onChange={(e) => setAuthor(e.target.value)}>
                        <option defaultValue=""></option>
                        {
                            authors.map((author) => (
                                <option key={author.id} value={author.id}>{author.first_name + ' ' + author.last_name}</option>
                            ))
                        }
                        </select>
    
                        <label>Select Book</label>
                        <select className="form-control form-control-sm mb-2" value={book_id} onChange={(e) => setBook(e.target.value)}>
                        <option defaultValue=""></option>
                        {
                            books.map((book) => (
                                <option key={book.id} value={book.id}>{book.title}</option>
                            ))
                        }
                        </select>
                        <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-sm btn-success mx-1" onClick={submitAssign}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddAuthorBook