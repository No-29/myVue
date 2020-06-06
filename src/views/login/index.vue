<template>
  <div class="login-container">
    <div class="form-container">
      <form class="login-form">
        <div class="login-form-title">
          <span :class="loginActive ? 'title-span-active' : 'title-span'" @click="loginActive=true">Login</span>
          <span>/</span>
          <span :class="loginActive ? 'title-span' : 'title-span-active'" @click="loginActive=false">Sign Up</span>
        </div>
        <div class="input-container"><span class="input-label">Username</span><input /></div>
        <div class="input-container"><span class="input-label">Password</span><input /></div>

        <button class="form-button">LOGIN</button>
        <button class="form-button">SIGN UP</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginActive: true
    }
  }
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
    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    .login-form{
      width: 200px;
      float: right;
      padding: 16px;
      position: relative;
      transform: translateY(50%);
      line-height: 30px;
      .login-form-title{
        font-size: 18px;
        text-align: center;
        color: #919191;
        .title-span{
          cursor: pointer;
          color: #919191;
        }
        .title-span-active{
          cursor: pointer;
          color: rgb(181, 154, 254);
        }
      }
      .input-container{
        height: 50px;
        .input-label{
          position: absolute;
          color:rgb(181, 154, 254);
        }
        input{
          outline-style: none;
          width: 100%;
          border: none;
          border-bottom: .1rem solid rgb(181, 154, 254);
          text-align: center;
          font-size: 16px;
        }
        .input-container:focus .input-label{

        }
      }

    }
  }
}

</style>
