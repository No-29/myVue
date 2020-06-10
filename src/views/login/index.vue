<template>
  <div class="login-container">
    <div class="form-container">
      <form class="login-form" action="submit">
        <div class="login-form-header">
          <span :class="loginActive ? 'title-span-active' : 'title-span'" @click="loginActive=true">Login</span>
          <span>/</span>
          <span :class="loginActive ? 'title-span' : 'title-span-active'" @click="loginActive=false">Sign Up</span>
        </div>
        <div class="login-form-main">
          <div class="input-container"><span :class="username ? 'input-label-active' : 'input-label'">Username</span><input v-model="username" /></div>
          <div class="input-container"><span :class="password ? 'input-label-active' : 'input-label'">Password</span><input v-model="password"/></div>
          <div v-if="!loginActive" class="input-container"><span class="input-label">Email</span><input /></div>
          <div style="color:rgb(181, 154, 254);">Forget?</div>
        </div>
        <div class="login-form-footer">
          <button v-if="loginActive" class="form-button">LOGIN</button>
          <button v-else class="form-button">SIGN UP</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      loginActive: true,
      tableColumn: ['id', 'name'],
      tableData: [
        {id: 1, name: '111'},
        {id: 2, name: '222'}
      ]
    }
  },
  methods: {
    loginHandler () {

    }
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  margin:0;
  padding: 0;
  border: 0px solid #919191;
}
.login-container{
  width: 100%;
  height: 100%;
  background-color: white;
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
      line-height: 30px;
      position: relative;
      top: 100px;
      .login-form-header{
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
      .login-form-main{
        padding: 5px;
        .input-container{
          margin-top: 10px;
          margin-bottom: 16px;
          .input-label{
            font-size: 16px;
            position: absolute;
            color:rgb(181, 154, 254);
          }
          .input-label-active{
            font-size: 16px;
            color:rgb(181, 154, 254);
            margin-top: 30px;
          }
          input{
            outline-style: none;
            width: 100%;
            border: none;
            border-bottom: .1rem solid rgb(181, 154, 254);
            font-size: 16px;
          }
        }
      }

      .form-button{
        width: 100%;
        padding: 5px;
        height: 35px;
        border: 0;
        color: white;
        border-radius: 35px;
        outline-style: none;
        background: orchid;
        // mix-blend-mode: color-dodge;
      }
    }
  }
}
input:focus{
  margin-top: 30px;
}
</style>
