<template>
  <div class="footer-netflix">
    <div class="footer-container">
      <div>
        <router-link to=""><p>Questions? Contact us.</p></router-link>
      </div>
      <ul>
        <li>
          <router-link to=""><p>Help Center</p></router-link>
        </li>
        <li>
          <router-link to=""><p>Account</p></router-link>
        </li>
        <li>
          <router-link to=""><p>Contact Us</p></router-link>
        </li>
      </ul>
      <div>
        <select name="" id="">
          <option value="Tiếng Việt">Tiếng Việt</option>
          <option value="English">English</option>
        </select>
      </div>
      <p>Netflix Vietnam</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
select {
  background-color: #f1f1f1;
  min-width: 100px;
  padding: 0 10px;
}
.footer-netflix {
  max-width: 1000px;
  margin: 0 auto;
  .footer-container {
    padding: 30px 50px 30px 50px;
    color: #757575;
    display: flex;
    flex-direction: column;
    gap: 20px;
    ul {
      display: flex;
      gap: 30px;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    a {
      color: #757575;
      text-decoration: none;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
