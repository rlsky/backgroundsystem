<!-- login -->
<template>
  <div class="login">
    <div class="middle-wrapper">
      <div class="title-wrapper">
        <div class="title">VUE-ADMIN 后台管理系统</div>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="account">
            <el-input placeholder="请输入账号" v-model="form.account">
              <i
                class="el-icon-user-solid el-input__icon"
                slot="prefix"
                style="font-size: 18px;">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password" show-password>
              <i
                class="el-icon-key el-input__icon"
                slot="prefix"
                style="font-size: 18px;">
              </i>
            </el-input>
          </el-form-item>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="24" :offset="13">
              <el-button type="primary" @click="submitForm('form')">登录系统</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        account:'',
        password:''
      },
      rules: {
        account: [
          { required: true, message: '必填，请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '必填，请输入密码', trigger: 'blur' }
        ]
      }
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods:{
    resetForm(form) {
      this.$refs[form].resetFields();
    }
  }
}

</script>
<style lang='scss' scoped>
.login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(32, 160, 255);

  .middle-wrapper {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-60%);

    .title-wrapper {
      margin-top: 50px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #ffffff;
    }
    .login-form {
      position: relative;
      margin: 0 auto;
      width: 520px;
      padding: 30px 50px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #ffffff;

      .el-row {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .login-btn {
          width: 100%;
        }
      }

      .check-code-wrapper {
        display: flex;
        justify-content: space-between;
        height: 40px;

        .yanzhengma-wrapper {
          flex: 0 1 auto;
        }

        .validate-code-wrapper {
          flex: 0 0 160px;
        }
      }
    }
  }
}
</style>