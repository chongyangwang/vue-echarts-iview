<template>
    <div class="iview-bg">
        <div class="iview-loginwrap">
              <div class="title">
                <b>欢迎登陆</b>
              </div>
              <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user" class="iview-formitem">
                    <i-input type="text" v-model="formInline.user" placeholder="Username" class="iview-form-inp" size="large">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem prop="password" class="iview-formitem">
                    <i-input type="password" v-model="formInline.password" placeholder="Password" class="iview-form-inp" size="large">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem class="iview-formitem">
                    <Button type="primary" @click="handleSubmit('formInline')" long class="iview-loginbtn">登录</Button>
                </FormItem>
              </Form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data () {
    var Usernamerule = /^[a-zA-Z0-9_-]{4,8}$/;   //用户名正则，4到16位（字母，数字，下划线，减号)
    const validateUser = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('用户名不能为空'));
        } else if (Usernamerule.test(value)==false) {
            callback(new Error('用户名格式不正确'));
        } else{
            callback();
        }
    };
    var Passwordrule=/^(\w){6,20}$/;    //密码强度正则，只能输入6-20个字母、数字、下划线   
    const validatePassword = (rule, value, callback) => {
        if (value === '') {
            callback(new Error("密码不能为空"));
        } else if (Passwordrule.test(value)==false) {
            callback(new Error('密码格式不正确'));
        } else {
            callback();
        }
    };
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
            { validator:validateUser , trigger: 'blur' }
        ],
        password: [
            { validator:validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //  登录方法没有用vuex触发
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        // console.log(valid);   //  返回一个布尔值 为true时表示本地规则验证成功  可以向后台发送请求
        if (valid) {
          // console.log(this.formInline.user)    //  取得表单的值
           return new Promise((resolve, reject) => {
              this.axios.post('/api/init/login',{
                username: this.formInline.user,
                password: this.formInline.password
              }).then((data)=>{
                  if(data.data.code=="200"){
                    window.localStorage.setItem("userId",data.data.userid)
                    this.$Message.success(data.data.msg)    //  弹出框
                    this.$router.push("/")
                  }else{
                    this.$Message.error(data.data.msg)
                  }
              })
           })
          // 可以取出数据
          // this.axios.post("/api/login").then((data)=>{
          //    console.log(data)
          // })
        } else {
          this.$Message.error('用户名或密码有误')
        }
      })
    }
  },
  mounted :function () {
      
  }
}
</script>
<style scoped>
.iview-bg{
    width:100%;
    height: 100%;
    background-image: url('../assets/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.iview-loginwrap{
  width: 420px;
  height: 360px;
  position: absolute;
  left:12%;
  top:10%;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: rgba(255,255,255,0.8);
  padding: 0 12px;
}
.title{
   width:100%;
   height: 80px;
   text-align: center;
   line-height: 80px;
}
.title b{
  font-size: 18px;
}
.iview-loginbtn{
  height: 40px;
}
</style>
