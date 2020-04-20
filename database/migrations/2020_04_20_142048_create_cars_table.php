<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 1.      Название модели
        // 2.      Марка (Список)
        // 3.      Год выпуска
        // 4.      Объем двигателя (в куб. см)
        // 5.      Номер двигателя
        // 6.      Цвет (Список)
        // 7.      Фото
        // 8.      Описание

        Schema::create('cars', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('name');
            $table->date('pub_year');
            $table->string('engine_volume');
            $table->string('engine_number');
            $table->string('color');
            $table->binary('image');
            $table->string('description');
        });
        Для каждого авто должны быть определены следующие поля:

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
