<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import apiUser from '@/api/api_user'
import localStorageUtils from '@/utils/localStorage'
import { mapActions } from 'vuex'
import userActions from '@/store/modules/user/actionTypes';

export default {
  components: {},
  methods: {
    ...mapActions({
      setUser: userActions.ACT_SET_USER,
      logout: userActions.ACT_LOGOUT
    })
  },
  async created() {
    try {
      const accessToken = localStorageUtils.getAccessToken()
      if (accessToken) {
        const { data } = await apiUser.getProfile();
        this.setUser(data)
      }
    } catch (e) {
      this.logout();
      this.$router.push({ name: 'landing-page' })
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('headerContainer')
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('stuck')
        } else {
          header.classList.remove('stuck')
        }
      }
    })
    window.addEventListener('touchmove', () => {
      const header = document.getElementById('headerContainer')
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('stuck')
        } else {
          header.classList.remove('stuck')
        }
      }
    })
  },
}
</script>
<style scoped></style>
