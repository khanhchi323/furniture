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
        Schema::create('product', function (Blueprint $table) {
            $table->integer('product_id');
            $table->string('name', 50)->nullable();
            $table->text('description')->nullable();
            $table->integer('color_id');
            $table->integer('size_id');
            $table->integer('created_by_user_id')->nullable();
            $table->integer('product_category_id');
            $table->decimal('price', 11, 2)->nullable();
            $table->integer('stock')->nullable();
            $table->integer('discount_id');
            $table->timestamps();
            $table->softDeletes();

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};