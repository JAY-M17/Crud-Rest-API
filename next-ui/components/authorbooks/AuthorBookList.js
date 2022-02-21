import Router from 'next/router'
import {useState} from 'react'  

const AuthorBookList = ({authorbooks,authors,books}) => {
    const deleteAuthorBook = async authorbookId =>{
        const res = await fetch(process.env.baseURL+`/api/authorbooks/${authorbookId}`,{
            method: 'DELETE'
        })
        const authorbook = await res.json()
        Router.reload(window.location.pathname)
    }

    //Update
    const [author_id, setAuthor] = useState('')
    const [book_id, setBook] = useState('')

    const updateAuthorBook = async authorId => {
    const res = await fetch(process.env.baseURL+`/api/authorbooks/${authorId}`,{
        method: 'PUT',
        body: JSON.stringify({author_id,book_id}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const authorbook = await res.json()
    Router.reload(window.location.pathname)
    }

    return(
        <table className='table table-bordered table-hover'>
            <caption>Assigned books & author</caption>
            <thead>
            <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Book</th>
            <th>Settings</th>
            </tr>
            </thead>
            <tbody>
            {
                authorbooks.map((authorbook) => (
                <tr key={authorbook.id}>
                    <td>{authorbook.id}</td>
                    <td>{authorbook.first_name + ' ' + authorbook.last_name}</td>
                    <td>{authorbook.title}</td>
                    <td>
                    <button className='btn btn-success btn-sm mx-1' data-bs-toggle="modal" data-bs-target={'#set'+authorbook.id}>edit</button>
                    <div className="modal fade" id={'set'+authorbook.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <button type="submit" className="btn btn-sm btn-success mx-1" onClick={()=>updateAuthorBook(authorbook.id)}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-danger btn-sm' onClick={()=>deleteAuthorBook(authorbook.id)}>delete</button>
                    </td>
                </tr>))
            }
            </tbody>
        </table>
    )
}
export default AuthorBookList