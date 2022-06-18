<template>
  <div class="home-netflix">
    <div class="header-netflix">
      <div class="container-header">
        <div class="header-logo">
          <a href="">
            <svg
              viewBox="0 0 111 30"
              class="svg-icon svg-icon-netflix-logo"
              focusable="false"
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div class="header-login-logout">
          <div class="header-login-logout">Avatar</div>
          <button @click="handleLogout">Log Out</button>
        </div>
      </div>
    </div>
    <div class="background-image">
      <img src="../assets/image-backgroup/backgroup1.jpg" alt="" />
      <div class="concord-img-gradient"></div>
    </div>
    <div class="row-film-container">
      <h2 class="row-film-title">
        <a href="">Sản xuất tại Việt Nam</a>
      </h2>
      <div class="row-film">
        <div v-for="(movie, index) in allMovie" :key="index" class="film-item">
          <div class="film-item">
            <iframe
              width="300"
              height="215"
              :src="movie.video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>{{ movie.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-login">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import aipMovie from "@/api/api_movie.js";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      currentPath: window.location.hash,
      allMovie: [],
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("TOKEN");
      this.$router.push({ name: "login-page" });
    },
    async getAllMovie() {
      try {
        const allMovie = await aipMovie.getAllMovie();
        this.allMovie = allMovie.data.dataMovie;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getAllMovie();
  },
};
</script>

<style lang="scss" scoped>
.background-image {
  height: unset !important;
}
.header-netflix {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 20px;
  margin-bottom: 50px;
  z-index: 10;
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    margin: 0 50px;
    .header-logo {
      a {
        svg {
          height: 45px;
          width: 167px;
          fill: #e50914;
          line-height: normal;
        }
      }
    }
    .header-login-logout {
      display: flex;
      color: #fff;
      gap: 30px;
    }
  }
}
.home-netflix {
  background-color: #000;
  .background-image {
    height: 747.766px;
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .concord-img-gradient {
      background: rgba(0, 0, 0, 0.4);
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%
      );
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
}
.row-film-container {
  position: relative;
  padding-top: 50px;
  .row-film-title {
    margin-bottom: 30px;
  }
  h2 a {
    color: #fff;
    text-decoration: none;
  }
  .row-film {
    display: flex;
    padding: 0 60px;
    flex-wrap: wrap;
    .film-item {
      padding: 0 5px;
    }
  }
}

.footer-login {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
