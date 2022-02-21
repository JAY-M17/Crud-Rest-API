import Head from 'next/head'
import Link from 'next/link'
import AuthorBookList from '../components/authorbooks/AuthorBookList'
import AddAuthorBook from '../components/authorbooks/AddAuthorBook'

export const getStaticProps = async () => {
    const res = await fetch(process.env.baseURL+`/api/authorbooks`)
    const authorbooks = await res.json()

    const res1 = await fetch(process.env.baseURL+`/api/authors`)
    const authors = await res1.json()
    const res2 = await fetch(process.env.baseURL+`/api/books`)
    const books = await res2.json()

    return{
        props:{
            authorbooks,
            authors,
            books
        }
    }
}

export default function AuthorBook({authorbooks,authors,books}) {
  return (
    <div className='container'>
        <Link href='/'><button className='btn btn-secondary btn-sm mt-5 mb-1'>back</button></Link>
        <button className='btn btn-success btn-sm mt-5 mx-1 mb-1' data-bs-toggle="modal" data-bs-target="#assign">Assign</button>
        <AuthorBookList authorbooks={authorbooks} authors={authors} books={books}/>
        <AddAuthorBook authors={authors} books={books}/>
    </div>
  )
}