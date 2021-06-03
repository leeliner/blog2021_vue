<template>
  <div>

    <el-container>
      <el-header>
<!--        <img class="mlogo" src="https://www.markerhub.com/dist/images/logo/markerhub-logo.png" alt="">-->
        <h1 style=" margin-top: 10px;color: lightpink;font-family: 华文行楷 ">用户登录</h1>
      </el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <el-input placeholder="请输入用户ID" v-model="ruleForm.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" plain @click="submitForm('ruleForm')">登录</el-button>
            <el-button  type="danger" plain @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          // username: '岭师吴彦祖',
          // password: '20010108'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择密码', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            const _this = this

            this.$axios.post('/login', this.ruleForm).then(res => {

              console.log(res.data)
              const jwt = res.headers['authorization']
              const userInfo = res.data.data

              // 把数据共享出去
              _this.$store.commit("SET_TOKEN", jwt)
              _this.$store.commit("SET_USERINFO", userInfo)

              // 获取
              console.log(_this.$store.getters.getUser)
               {

                 setTimeout(()=> {
                   this.$notify({
                     message: 'Hello '+_this.ruleForm.username+'!',
                     type: 'success'
                   });},5000)

                this.$notify({
                  title: '成功',
                  message: '登录成功，将在3秒后跳转到主页',
                  type: 'success',

                });
              }

              setTimeout(()=> {
                _this.$router.push("/blogs")
              },4000)



            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    border-radius: 30px;
    /*background: rgb(254, 240, 240);*/
    color: #333;
    text-align: center;
    line-height: 60px;
    max-width: 500px;

    margin: 0 auto;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .mlogo {
    height: 60%;
    margin-top: 10px;
  }

  .demo-ruleForm {
    max-width: 500px;
    margin: 0 auto;
  }

</style>