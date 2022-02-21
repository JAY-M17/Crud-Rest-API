import Router from 'next/router'
import {useState} from 'react'

const AuthorList = ({authors}) => {
    //Delete
    const deleteAuthor = async authorId =>{
        const res = await fetch(process.env.baseURL+`/api/authors/${authorId}`,{
        method: 'DELETE'
    })
    const book = await res.json()
    Router.reload(window.location.pathname)
    }

    //Update
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')

    const updateAuthor = async authorId => {
    const res = await fetch(process.env.baseURL+`/api/authors/${authorId}`,{
        method: 'PUT',
        body: JSON.stringify({ first_name,last_name }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const author = await res.json()
    console.log(author)
    // Router.reload(window.location.pathname)
    }

    return(
        <table className='table table-bordered table-hover'>
            <caption>Authors</caption>
            <thead>
            <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Settings</th>
            </tr>
            </thead>
            <tbody>
            {
                authors.map((author) => (
                <tr key={author.id}>
                    <td>{author.id}</td>
                    <td>{author.first_name}</td>
                    <td>{author.last_name}</td>
                    <td>
                    <button className='btn btn-success btn-sm mx-1' data-bs-toggle="modal" data-bs-target={'#set'+author.id}>edit</button>
                    <div className="modal fade" id={'set'+author.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update {author.first_name + ' ' + author.last_name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label>First name</label>
                                    <input type="text" className="form-control form-control-sm mb-2" value={first_name} onChange={(e) => setFname(e.target.value)}/>
                                    <label>Last name</label>
                                    <input type="text" className="form-control form-control-sm mb-2" value={last_name} onChange={(e) => setLname(e.target.value)}/>
                                    <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-sm btn-success mx-1" onClick={()=>updateAuthor(author.id)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-danger btn-sm' onClick={()=>deleteAuthor(author.id)}>delete</button>
                    </td>
                </tr>))
            }
            </tbody>
        </table>
    )
}
export default AuthorList