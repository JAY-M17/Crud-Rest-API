import {useState} from 'react'
import Router from 'next/router'

const AddAuthor = () =>{
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')

    const submitAuthor = async() => {
        const res = await fetch(process.env.baseURL+`/api/authors`,{
            method: 'POST',
            body: JSON.stringify({ first_name,last_name }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
    })
    const author = await res.json()
    Router.reload(window.location.pathname)
}
    return(
        <div className="modal fade" id="add-author" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Author</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label>First name</label>
                        <input type="text" className="form-control form-control-sm mb-2" value={first_name} onChange={(e) => setFname(e.target.value)}/>
                        <label>Last name</label>
                        <input type="text" className="form-control form-control-sm mb-2" value={last_name} onChange={(e) => setLname(e.target.value)}/>
                        <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-sm btn-success mx-1" onClick={submitAuthor}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddAuthor