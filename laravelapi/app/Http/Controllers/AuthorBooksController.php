<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AuthorBook;

class AuthorBooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AuthorBook::join('authors','authors.id','=','author_books.author_id')
        ->leftjoin('books','books.id','=','author_books.book_id')
        ->select('author_books.id','author_books.author_id','author_books.book_id','authors.first_name','authors.last_name','books.title')
        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'author_id' => 'required',
            'book_id' => 'required'
        ]);

        return AuthorBook::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return AuthorBook::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'author_id' => 'required',
            'book_id' => 'required'
        ]);

        $authorbook = AuthorBook::find($id);
        $authorbook->update($request->all());
        return $authorbook;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return AuthorBook::destroy($id);
    }
}
