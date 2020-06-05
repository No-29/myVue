<template>
  <div class="login-container">
    <div class="form-container">
      <form>
        <span>Login</span><span>/</span><span>Sign Up</span>
      </form>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.login-container{
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
  .form-container{
    width: 800px;
    height: 450px;
    border-radius: 5px;
    background: url('../../../static/images/login_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    text-align: right;
    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
  }
}

</style>
