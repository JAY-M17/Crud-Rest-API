import Link from 'next/link'    
import BookList from '../components/books/BookList'
import AddBook from '../components/books/AddBook'
 
export const getStaticProps = async () => {
    const res = await fetch(process.env.baseURL+`/api/books`)
    const books = await res.json()

    return{
        props:{
            books
        }
    }
}

export default function Books({books}) {
  return (
    <div className='container'>
        <Link href='/'><button className='btn btn-secondary btn-sm mt-5 mb-1'>back</button></Link>
        <button className='btn btn-success btn-sm mt-5 mx-1 mb-1' data-bs-toggle="modal" data-bs-target="#add-book">Add Book</button>
        <BookList books={books}/>     
        <AddBook />
    </div>
  )
}