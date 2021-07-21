<!-- login -->
<template>
  <div class="login">
    <div class="middle-wrapper">
      <div class="title-wrapper">
        <div class="title">Lorena 后台管理系统</div>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules">
          <!-- 账号 -->
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="请输入账号（随意输）">
              <i
                slot="prefix"
                class="el-icon-user-solid el-input__icon"
                style="font-size: 18px;"/>
            </el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码（随意输）" show-password>
              <i
                slot="prefix"
                class="el-icon-key el-input__icon"
                style="font-size: 18px;"/>
            </el-input>
          </el-form-item>
          <!-- 提交 -->
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
  data() {
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '必填，请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '必填，请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /* 提交 */
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.login()
        }
      })
    },
    /* 重置表单 */
    resetForm(form) {
      this.$refs[form].resetFields()
    },
    /* 登录 */
    login() {
      /*
       *  在这边可以进行登陆请求
       *  将请求返回的Token对象存到store中
       *  @Token  token对象
       */
      const token = 'a94756da-2962-40ae-bdea-787fd02c9d92'
      this.$store.commit('login/SET_TOKEN', token)
      this.$router.replace('home')
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
  background-image: url('../../img/yule/background.jpg');

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
