<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(PostsTableSeeder::class);
        $this->call(tags_table_seeder::class);
        $this->call(PostTagsTableSeeder::class);
    }
}
