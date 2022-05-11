<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('headerContainer');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('stuck');
        } else {
          header.classList.remove('stuck');
        }
      }
    });
    window.addEventListener('touchmove', () => {
      const header = document.getElementById('headerContainer');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('stuck');
        } else {
          header.classList.remove('stuck');
        }
      }
    });
  },
};
</script>
<style scoped></style>
