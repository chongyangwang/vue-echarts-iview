<template>
       <div class="welcome">
           <BreadCrumb :breadcrumbList="breadcrumbList"></BreadCrumb>
           <div class="welcomeinner" style="margin-top:10px">
              <h3>欢迎使用华瑞工业智造云服务平台:{{name}}</h3>
              <ul>
                <li>1.将路由搭好  已完成</li>
                <li>2.将登录那块儿交互写完 已完成</li>
                <li>3.面包屑导航功能 已完成</li>
                <li>4.利用node起个服务端模拟假数据 已完成</li>
                <li>5.判断一下路由的逻辑 登录则跳转页面 未登录则返回登录 已完成</li>
                <li>6.解决h5的history与hash的问题</li>
                <li>7.将代码上传</li>
                <li>8.vue各种指令及语法 vuex的引用 页面的布局的优化</li>
              </ul>
           </div>
       </div>
</template>
<script>
import BreadCrumb from '@/components/breadcrumb/BreadCrumb'
export default {
  name: 'Welcome',
  data: function () {
    return {
      name: '王重阳',
      breadcrumbList:[]
    }
  },
  components: {
    BreadCrumb: BreadCrumb
  },
  created: function () {
    this.getBreadcrumb()
  },
  methods:{
    getBreadcrumb () {
      this.breadcrumbList=this.$route.meta
    }
  }
}
</script>
<style scoped>

</style>
