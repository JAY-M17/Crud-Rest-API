import {useState} from 'react'
import Router from 'next/router'

const AddBook = () =>{
    const [title, setBook] = useState('')

    const submitBook = async() => {
    const res = await fetch(`http://localhost:8000/api/books`,{
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const books = await res.json()
    console.log(books)
    //Router.reload(window.location.pathname)
    }
    return(
        <div className="modal fade" id="add-book" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Book</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <label>Enter book title</label>
                            <input type='text' className='form-control form-control-sm' value={title} onChange={(e) => setBook(e.target.value)}/>
                            <button type="button" className="btn btn-sm btn-danger mt-1" data-bs-dismiss="modal">Cancel</button>
                            <button className='btn btn-success btn-sm mt-1 mx-1' onClick={submitBook}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddBook