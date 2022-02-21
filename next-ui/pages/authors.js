import Head from 'next/head'
import Link from 'next/link'
import AuthorList from '../components/authors/AuthorList'
import AddAuthor from '../components/authors/AddAuthor'

export const getStaticProps = async () => {
    const res = await fetch(process.env.baseURL+`/api/authors`)
    const authors = await res.json()

    return{
        props:{
            authors
        }
    }
}

export default function Author({authors}) {
    const deleteAuthor = async authorId =>{
        const res = await fetch(process.env.baseURL+`/api/authors/${authorId}`,{
            method: 'DELETE'
        })
        const author = await res.json()
        console.log(author);
    }
  return (
    <div className='container'>
        <Link href='/'><button className='btn btn-secondary btn-sm mt-5 mb-1'>back</button></Link>
        <button className='btn btn-success btn-sm mt-5 mx-1 mb-1' data-bs-toggle="modal" data-bs-target="#add-author">Add Author</button>
        <AuthorList authors={authors} />
        <AddAuthor />
    </div>
  )
}