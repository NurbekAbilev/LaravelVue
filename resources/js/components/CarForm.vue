<template>
  <vs-row>
      <vs-card>
          <div class="centerx labelx">
              <h3>Создание записи автомобиля:</h3>
              <b-container>
                <b-form>
                    <b-form-row>  
                            <b-col>
                                <b-form-group  label="Название модели:" label-for="input-1">
                                    <b-form-input id="input-1" v-model="name" type="text" required  />
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group  label="Год выпуска:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="pub_year" type="text" required />
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-row>  
                            <b-col>
                                <b-form-group  label="Номер двигателя:" label-for="input-1">
                                    <b-form-input id="input-1" v-model="engine_number" type="text" required  />
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group  label="Объем двигателя (в куб. см)" label-for="input-3">
                                    <b-form-input id="input-3" v-model="engine_volume" type="text" required />
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-group  label="Цвет (Список):" label-for="input-2">
                            <b-form-input id="input-2" v-model="color" type="text" required />
                        </b-form-group>
                        <b-form-group  label="Описание" label-for="input-3">
                            <b-form-textarea
                            id="textarea"
                            v-model="engine_volume"
                            placeholder="Описание"
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>

                        <vs-divider />
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Фото:</label>
                            <input type="file" class="image" id="exampleFormControlFile1">
                        </div>
                        <vs-divider />
                        <vs-button color="primary" type="filled">Создать</vs-button>
                </b-form>
              </b-container>


          </div>
      </vs-card>
  </vs-row>
  <!-- $table->increments('id');
            $table->string('name');
            $table->date('pub_year');
            $table->string('engine_volume');
            $table->string('engine_number');
            $table->string('color');
            $table->binary('image');
            $table->string('description'); -->

  <!-- // 1.      Название модели
        // 2.      Марка (Список)
        // 3.      Год выпуска
        // 4.      Объем двигателя (в куб. см)
        // 5.      Номер двигателя
        // 6.      Цвет (Список)
        // 7.      Фото
        // 8.      Описание -->

</template>



<script>
export default {
  data(){
    return {
        name:"",
        pub_year:"",
        engine_volume:"",
        engine_number:"",
        color:"",
        image:"",
        description:""
    }
  },
  methods : {
      successUpload(){

      }
  }
}
</script>

<style>
  .labelx .vs-input{
      margin: 15px;
  }
</style>