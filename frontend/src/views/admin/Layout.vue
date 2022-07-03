<template>
  <div class="admin-container">
    <Header />
    <Sidebar />
    <router-view class="content-page"></router-view>
  </div>
</template>

<script>
import Header from '../../components/Admin/Layout/Header.vue';
import Sidebar from '../../components/Admin/Layout/Sidebar.vue';
export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.admin-container {
  background-color: #f4f6fa;
}
.content-page {
  height: 100%;
  position: relative;
  margin-top: 64px;
  margin-left: 300px;
}
</style>
