<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class authorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fname = ['John','Jane','Peter','Axiel','Josh'];
        $lname = ['Smith','Monkey','Jayson','Grande','Croft'];
        $time = Carbon::now()->toDateTimeString();

        for($a=0;$a<5;$a++){
            DB::table('authors')->insert([
                'first_name'=>$fname[$a],
                'last_name'=>$lname[$a],
                'created_at'=>$time,
                'updated_at'=>$time
            ]);
        }
    }
}
