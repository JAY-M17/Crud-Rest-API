<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class booksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $books = ['Art War','Hamlet','Lost Time','Greed','End Time'];
        $time = Carbon::now()->toDateTimeString();
        foreach ($books as $book) {
            DB::table('books')->insert([
                'title'=>$book,
                'created_at'=>$time,
                'updated_at'=>$time
            ]);
        }
    }
}
