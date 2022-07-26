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
          width="300"
          @click="toggle"
        >
          <div>
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
  padding: 0 5px;
}
.theme--light {
  background-color: #141414;
}
.filmItem div {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
