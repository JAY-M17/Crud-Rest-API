export default function Home({books}) {
  return (
    <div className='container'>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="">Library</h1>
            <p className="lead text-muted"></p>
            <p>
                <a href="books" className="btn btn-secondary mx-2">Book Records</a>
                <a href="authors" className="btn btn-secondary mx-2">Author Records</a>
                <a href="authorbooks" className="btn btn-secondary mx-2">Authors Book Records</a>
            </p>
        </div>
        </div>
      </section>
    </div>
  )
  }