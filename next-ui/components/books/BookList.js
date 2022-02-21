import Router from 'next/router'
import {useState} from 'react'

const BookList = ({books}) => {
    const deleteBook = async bookId =>{
    const res = await fetch(`http://localhost:8000/api/books/${bookId}`,{
        method: 'DELETE'
    })
    const book = await res.json()
    Router.reload(window.location.pathname)
    }


    //Update
    const [title, setBook] = useState('')
    const updateBook = async bookId => {
    const res = await fetch(`http://localhost:8000/api/books/${bookId}`,{
        method: 'PUT',
        body: JSON.stringify({ title }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const books = await res.json()
    Router.reload(window.location.pathname)
    }

    return(
        <table className='table table-bordered table-hover'>
            <caption>Books</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody>
            {
                books.map((book) => (
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>
                        <button className="btn btn-success btn-sm mx-1" data-bs-toggle="modal" data-bs-target={'#set'+book.id}>edit</button>
                        <div className="modal fade" id={'set'+book.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="" id="exampleModalLabel">Update {book.title}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <label>Enter book title</label>
                                        <input type='text' className='form-control form-control-sm' value={title} onChange={(e) => setBook(e.target.value)}/>
                                        <button type="button" className="btn btn-sm btn-danger mt-1" data-bs-dismiss="modal">Cancel</button>
                                        <button className='btn btn-success btn-sm mt-1 mx-1' onClick={()=>updateBook(book.id)}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-danger btn-sm' onClick={()=>deleteBook(book.id)}>delete</button>
                    </td>
                </tr>))
            }
            </tbody>
        </table>
    )
}

export default BookList