<template>
  <div>
    <div>
      <form @submit.prevent="createFilm" class="create-input">
        <div class="title">Create Film</div>
        <div class="form-input">
          <v-text-field
            label="Name :"
            v-model="name"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="form-input">
          <v-text-field
            label="Description :"
            v-model="description"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="form-input">
          <v-select
            label="Genre :"
            v-model="genresUser"
            :items="genres"
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
            v-model="actorsUser"
            :items="actors"
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
          <button>Submit</button>
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
      name: '',
      description: '',
      genres: [],
      actors: [],
      genresUser: '',
      actorsUser: [],
      thumbnail: '',
      video: null,
      trailer: null,
    };
  },
  methods: {
    handleVideo(e, name) {
      console.log('e', e, name);
      if (name === 'video') {
        this.video = e;
      } else if (name === 'trailer') {
        this.trailer = e;
      } else if (name === 'thumbnail') {
        this.thumbnail = e;
      }
    },
    async createFilm() {
      const dataUserInput = {
        name: this.name,
        description: this.description,
        genre: [this.genresUser],
        actor: [this.actorsUser],
        thumbnail: this.thumbnail,
        video: this.video,
        trailer: this.trailer,
      };
      try {
        console.log('dataUserInput', dataUserInput);
        const [res1, res2, res3] = await Promise.all([
          apiUpload.uploadToCloudinary(this.video, 'video'),
          apiUpload.uploadToCloudinary(this.trailer, 'video'),
          apiUpload.uploadToCloudinary(this.thumbnail, 'image'),
        ]);
        dataUserInput.video = res1.data.url;
        dataUserInput.trailer = res2.data.url;
        dataUserInput.thumbnail = res3.data.url;
        await apiMovie.createMovie(dataUserInput);
        await apiMovie.getAllMovie();
        alert('Create Film successful !');
      } catch (error) {
        console.log(error);
        alert('Create Film fail !');
      }
    },
    async getActors() {
      const dataActor = await apiActor.getAll();
      this.actors = dataActor.data.allActor;
    },
    async getGenre() {
      const dataGenres = await apiGenre.getAll();
      this.genres = dataGenres.data.allGenre;
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
  button {
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    background: #e50914;
    color: #fff;
    min-width: 98px;
    min-height: 55px;
  }
}
</style>
