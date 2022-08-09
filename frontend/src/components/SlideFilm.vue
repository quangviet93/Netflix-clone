<template>
  <v-sheet class="mx-auto" elevation="8" max-width="100%">
    <v-slide-group class="pa-4" active-class="success" show-arrows max="4">
      <v-slide-item
        v-for="n in this.listFilm"
        :key="n.index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4 filmItem"
          height="200"
          width="400"
          @click="toggle"
        >
          <div class="image-filmItem">
            <img :src="n.thumbnail" />
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  components: {},
  props: ['listFilm'],
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.listFilm);
  },
};
</script>
<style scoped>
::v-deep .v-icon {
  color: #fff;
}
.filmItem {
  padding: 0 20px;
}
.theme--light {
  background-color: #141414;
}
.filmItem div {
  width: 100%;
  height: 100%;
}
.image-filmItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.filmItem:hover {
  padding: 0;
  z-index: 99;
  transition: all 0.5s;
  transform: scale(1.24);
}
</style>
