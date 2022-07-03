<template>
  <div class="footer-netflix">
    <div class="footer-container">
      <p>
        <a href="">Questions? Contact us.</a>
      </p>
      <ul>
        <li>Help Center</li>
        <li>Account</li>
        <li>Contact Us</li>
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
.footer-netflix {
  max-width: 1000px;
  margin: 0 auto;
  .footer-container {
    padding: 10px 50px 30px 50px;
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
