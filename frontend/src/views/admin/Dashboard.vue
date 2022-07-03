<template>
  <div>
    <div>
      <form @submit.prevent="createFilm" class="create-input">
        <div class="title">Create Film</div>
        <div class="form-input">
          <label for="name">Name :</label>
          <input type="text" placeholder="Name" v-model="name" />
        </div>
        <div class="form-input">
          <label for="description">Description :</label>
          <input type="text" placeholder="Description" v-model="description" />
        </div>
        <div class="form-input">
          <label for="genre">Genre :</label>
          <select v-model="genresUser" name="genre" id="genre">
            <option
              v-for="genre in genres"
              v-bind:key="genre._id"
              :value="genre._id"
            >
              {{ genre.name }}
            </option>
          </select>
        </div>
        <div class="form-input">
          <label for="actor">Actor :</label>
          <select v-model="actorsUser" name="actor" id="actor">
            <option
              v-for="actor in actors"
              v-bind:key="actor._id"
              :value="actor._id"
            >
              {{ actor.name }}
            </option>
          </select>
        </div>
        <div class="form-input">
          <label for="thumbnail">Thumbnail :</label>
          <input type="text" placeholder="Thumbnail" v-model="thumbnail" />
        </div>
        <div class="form-input">
          <label for="video">Video :</label>
          <input type="text" placeholder="Video" v-model="video" />
        </div>
        <div class="form-input">
          <label for="trailer">Trailer :</label>
          <input type="text" placeholder="Trailer" v-model="trailer" />
        </div>
        <div class="form-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import apiUser from "@/api/api_user.js";
import apiActor from "@/api/api_actor.js";
import apiGenre from "@/api/api_genre.js";

export default {
  data() {
    return {
      name: "",
      description: "",
      genres: [],
      actors: [],
      genresUser: "",
      actorsUser: "",
      thumbnail: "",
      video: "",
      trailer: "",
    };
  },
  methods: {
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
        const data = await apiUser.createFilm(dataUserInput);
        alert("Create Film successful !");
        console.log("data", data);
      } catch (error) {
        console.log(error);
        alert("Create Film fail !");
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
