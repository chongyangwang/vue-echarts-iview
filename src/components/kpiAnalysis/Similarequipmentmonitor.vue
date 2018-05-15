<template>
       <div class="similarequipmentmonitor">
        <BreadCrumb :breadcrumbList="breadcrumbList"></BreadCrumb>
        <div class="iview-component-cont">
          <p>同类设备监控kpi</p>
          <ul>
            <li v-for="(item,index) in list" :key="index"><span>时间:{{item.time}}</span>&nbsp;<span>赛程:{{item.match}}</span></li>
          </ul>
          <button @click="getuserinfo()">显示用户信息</button>
          <div>{{username}} {{password}}</div>
        </div>
       </div>
</template>
<script>

// 对于vuex  在需要事件触发的时候  则methods绑定事件 通过store.dispath来触发
// 对于需要默认执行的请求或方法   直接使用mapactions解构  当做方法在mounted created使用
// 对于mapstate可以直接解构  在页面上当做变量展示  跟一个箭头函数可以进行数据的过滤
//  getters 和mapMutation还需要学习
//  Getters 可以在这里对state的数据做一些筛选  用mapgetters得到

import { mapState, mapActions } from 'vuex'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb'
export default {
  name: 'Similarequipmentmonitor',
  data: function () {
    return {
      breadcrumbList:[]
    }
  },
  components: {
    BreadCrumb: BreadCrumb
  },
  created: function () { // 在模板渲染成html前调用可以初始化一些值
    this.getBreadcrumb();
    this.getNewList(this)
  },
  computed:{
    ...mapState({
        list:state => state.list.slice(1),
        username:state=>state.username,
        password:state=>state.password
    })
  },
  methods:{
    ...mapActions([
        'getNewList'
    ]),
    getBreadcrumb () {
      this.breadcrumbList=this.$route.meta
    },
    getuserinfo () {
      this.$store.dispatch('getUserInfo',{
        _this: this,
        num:15
      })
    }
  },
  mounted: function () {
    // html页面已经渲染完成可以在此钩子中执行相关对dom节点操作的方法
  }
}
</script>
<style scoped>
.iview-component-cont{
  padding: 10px;
}
</style>
