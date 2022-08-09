<template>
  <div>
    <div>
      <form @submit.prevent="createFilm" class="create-input">
        <div class="title">Create Film</div>
        <div class="form-input">
          <v-text-field
            label="Name :"
            v-model="dataUserInput.name"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="form-input">
          <v-text-field
            label="Description :"
            v-model="dataUserInput.description"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="form-input">
          <v-select
            label="Genre :"
            v-model="dataUserInput.genres"
            :items="genresUser"
            item-text="name"
            item-value="_id"
            attach
            chips
            multiple
          ></v-select>
        </div>
        <div class="form-input">
          <v-select
            label="Actor :"
            v-model="dataUserInput.actors"
            :items="actorsUser"
            item-text="name"
            item-value="_id"
            attach
            chips
            multiple
          ></v-select>
        </div>
        <div class="form-input">
          <v-file-input
            class="right-30"
            prepend-icon="mdi-camera"
            label="Thumbnail :"
            truncate-length="15"
            type="file"
            accept="image/*"
            @change="handleVideo($event, 'thumbnail')"
            name="thumbnail"
          ></v-file-input>
        </div>
        <div class="form-input">
          <v-file-input
            class="right-30"
            label="Video :"
            truncate-length="15"
            type="file"
            @change="handleVideo($event, 'video')"
            name="video"
          ></v-file-input>
        </div>
        <div class="form-input">
          <v-file-input
            class="right-30"
            label="Trailer :"
            truncate-length="15"
            type="file"
            @change="handleVideo($event, 'trailer')"
            name="trailer"
          ></v-file-input>
        </div>
        <div class="form-btn">
          <v-btn
            type="submit"
            :loading="loading"
            :disabled="loading"
            color="blue-grey"
            class="ma-2 white--text"
          >
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import apiActor from '@/api/api_actor.js';
import apiGenre from '@/api/api_genre.js';
import apiUpload from '@/api/api_cloudinary.js';
import apiMovie from '@/api/api_movie.js';

export default {
  data() {
    return {
      dataUserInput: {
        name: '',
        description: '',
        genres: [],
        actors: [],
        thumbnail: '',
        video: null,
        trailer: null,
      },
      genresUser: [],
      actorsUser: [],
      loader: null,
      loading: false,
    };
  },
  watch: {
    loader() {
      this.loading = false;
    },
  },
  methods: {
    handleVideo(e, name) {
      if (name === 'video') {
        this.dataUserInput.video = e;
      } else if (name === 'trailer') {
        this.dataUserInput.trailer = e;
      } else if (name === 'thumbnail') {
        this.dataUserInput.thumbnail = e;
      }
    },
    validateForm() {
      const { name, description, genres, actors, thumbnail, video, trailer } =
        this.dataUserInput;
      if (
        !!name ||
        !!description ||
        !!genres ||
        !!actors ||
        !!thumbnail ||
        !!video ||
        !!trailer
      ) {
        return true;
      } else {
        return false;
      }
    },
    async createFilm() {
      if (this.validateForm()) {
        this.loading = true;
        try {
          const [res1, res2, res3] = await Promise.all([
            apiUpload.uploadToCloudinary(this.dataUserInput.video, 'video'),
            apiUpload.uploadToCloudinary(this.dataUserInput.trailer, 'video'),
            apiUpload.uploadToCloudinary(this.dataUserInput.thumbnail, 'image'),
          ]);
          this.dataUserInput.video = res1.data.url;
          this.dataUserInput.trailer = res2.data.url;
          this.dataUserInput.thumbnail = res3.data.url;
          await apiMovie.createMovie(this.dataUserInput);
          await apiMovie.getAllMovie();
          alert('Create Film successful !');
        } catch (error) {
          console.log(error);
          alert('Create Film fail !');
        } finally {
          this.loading = false;
        }
      } else {
        alert('validate không thành công !');
      }
    },
    async getActors() {
      const dataActor = await apiActor.getAll();
      this.actorsUser = dataActor.data.allActor;
    },
    async getGenre() {
      const dataGenres = await apiGenre.getAll();
      this.genresUser = dataGenres.data.allGenre;
    },
  },
  created() {
    this.getActors();
    this.getGenre();
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  background: black;
}
::v-deep .v-input__icon {
  position: absolute;
}
::v-deep .right-30 .v-label {
  left: 30px !important;
}
.create-input {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
  .title {
    font-size: 48px;
    text-align: center;
    margin-bottom: 30px;
  }
  .form-input {
    padding-bottom: 16px;
    font-size: 16px;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      background: #333;
      border-radius: 4px;
      border: 0;
      color: #fff;
      height: 50px;
      line-height: 50px;
      padding: 0 20px 0;
    }
    label {
      min-width: 100px;
    }
  }
  .form-btn {
    display: flex;
    justify-content: flex-end;
  }
  .form-btn button {
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    background-color: #e50914;
    color: #fff;
    min-width: 98px;
    min-height: 55px;
  }
}
</style>
