<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->unsignedBigInteger('role_id');
            $table->string('username', 50);
            $table->string('password', 150);
            $table->string('avt_image', 50);
            $table->string('first_name', 20);
            $table->string('last_name', 20);
            $table->string('telephone', 11);
            $table->timestamps();

            // Khóa ngoại role_id
            $table->foreign('role_id')->references('role_id')->on('role')->onDelete('cascade')->onUpdate('cascade');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};