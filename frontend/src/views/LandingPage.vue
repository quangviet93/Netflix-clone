<template>
  <div class="landingPage">
    <Header />
    <div class="background-image">
      <img src="../assets/image-backgroup/backgroup1.jpg" alt="" />
      <div class="concord-img-gradient"></div>
    </div>
    <div class="landing-title">
      <div class="title">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <form class="form-email">
          <h3 class="email-form-title">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div class="email-form-lockup">
            <div>
              <input
                class="nfTextField"
                type="text"
                placeholder="Email address"
              />
            </div>
            <div>
              <button class="nfButtonField">
                <span>Get Started</span>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="landing-get-the-app">
      <div class="get-the-app-container">
        <div class="get-the-app">
          <h1>Have an Android Phone? Get our new free plan!</h1>
          <h2>
            Watch a selection of new movies and TV shows without adding any
            payment details!
          </h2>
          <div>
            <a href="">
              <span>Get the app</span>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="get-the-app-img">
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="our-story-card">
      <div class="our-story-card-title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div class="our-story-card-li">
        <ul>
          <li
            v-for="(paidForm, index) in paidForms"
            :key="index"
            @click="showDescription"
          >
            <button class="our-story-card-btn">
              <p>{{ paidForm.title }}</p>
              <i class="fa-solid fa-plus"></i>
            </button>
            <div class="our-story-card-btn our-story-card-div display-none">
              <span>{{ paidForm.description }}</span>
            </div>
          </li>
        </ul>
        <form class="form-email">
          <h3 class="email-form-title">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div class="email-form-lockup">
            <div>
              <input
                class="nfTextField"
                type="text"
                placeholder="Email address"
              />
            </div>
            <div>
              <button class="nfButtonField">
                <span>Get Started</span>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'landing-page',
  data() {
    return {
      isLoading: true,
      isShowScollToTop: false,
      paidForms: [
        {
          title: 'What is Netflix?',
          description:
            'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        },
        {
          title: 'How much does Netflix cost?',
          description:
            'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
        },
        {
          title: 'How do I cancel?',
          description:
            'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
        },
        {
          title: 'What can I watch on Netflix?',
          description:
            'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
        },
        {
          title: 'Is Netflix good for kids?',
          description:
            '1231The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.23123',
        },
      ],
    };
  },
  methods: {
    showDescription(e) {
      if (e.path[0].children[1].classList.contains('display-none')) {
        e.path[0].children[1].classList.add('show');
        e.path[0].children[1].classList.remove('display-none');
      } else {
        e.path[0].children[1].classList.add('display-none');
        e.path[0].children[1].classList.remove('show');
      }
    },
  },
  components: {
    Header,
    Footer,
  },
  created() {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      this.$router.push({ name: 'home-page' });
    }
  },
};
</script>
<style lang="scss" scoped>
.landingPage {
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
  .our-story-card,
  .landing-get-the-app {
    border-bottom: 8px solid #222;
  }
  .landing-title,
  .our-story-card-li {
    position: relative;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    color: #fff;
    .nfTextField {
      border: solid 1px #8c8c8c;
    }
    .nfButtonField {
      color: #fff;
      background-color: #e50914;
      border: solid 1px #8c8c8c;
    }
  }
  .landing-get-the-app {
    position: relative;
    margin: 100px 0;
    padding: 50px 5%;
    .get-the-app-container {
      color: #fff;
      display: flex;
      justify-self: center;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
      .get-the-app {
        width: 52%;
        height: 100%;
        div {
          font-size: 1.625rem;
          font-weight: 400;
          min-height: 76px;
        }
        a {
          color: #fff;
          background: 0 0;
          margin: 0.5em auto;
          text-decoration: none;
        }
      }
      .get-the-app-img {
        width: 48%;
        div {
          height: 350px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
  .our-story-card {
    position: relative;
    color: #fff;
    padding: 70px 45px;
    .our-story-card-title {
      text-align: center;
    }
    .our-story-card-li ul {
      list-style-type: none;
      width: 75%;
      margin: 2em auto;
      max-width: 815px;
      padding: 0;
      li {
        list-style-type: none;
        margin: 0 0 8px 0;
        font-size: 1.625rem;
        .our-story-card-btn {
          padding: 0.8em 2.2em 0.8em 1.2em;
          margin-bottom: 1px;
          font-weight: 400;
          position: relative;
          width: 100%;
          border: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          background: #303030;
          color: #fff;
          pointer-events: none;
          p {
            margin: 0;
          }
        }
        .display-none {
          display: none !important;
        }
      }
    }
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    .landing-title .title {
    }
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 1.625rem;
    }
    .form-email {
      max-width: 950px;
      padding-top: 0.85rem;
      .email-form-title {
        padding-bottom: 20px !important;
        font-size: 1.2rem;
        padding: 0 5%;
        margin: 0 auto;
        font-weight: 400;
      }
      .email-form-lockup {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (min-width: 1450px) {
    .nfTextField {
      min-width: 500px;
      height: 70px !important;
      padding: 10px 11px;
      &:focus-visible {
        outline: 0;
      }
    }
    .nfButtonField {
      font-size: 1.875rem;
      min-height: 70px;

      & :first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
