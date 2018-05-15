<template>
  <div class="layout">  
     <!-- 头部导航 -->
     <HeaderNav></HeaderNav>
     <!-- 侧边内容 暂时无法提取-->
     <Layout class="iview-contbox">
          <Sider collapsible :collapsed-width="78" v-model="isCollapsed" :style="{height: '100vh', left: 0, overflow: 'auto'}" v-if='!isCollapsed'>
              <Menu theme="dark" width="auto" accordion :class="menuitemClasses" :open-names="['1']">
                  <Submenu name="1">
                      <template slot="title">
                          <Icon type="ios-navigate"></Icon>
                          KPI分析
                      </template>
                      <router-link :to="{path:'/kpianalysis/productlinemoniter',query:{like:'tomato'}}">
                        <i-menu-item name="1-1">生产线监控KPI</i-menu-item>
                      </router-link>
                      <router-link :to="{path:'/kpianalysis/similarequipmentmonitor',query:{like:'beef'}}">
                        <i-menu-item name="1-2">同类设备监控KPI</i-menu-item>
                      </router-link>
                      <router-link :to="{path:'/kpianalysis/singledevicemonitor',query:{like:'carrets'}}">
                        <i-menu-item name="1-3">单台设备监控KPI</i-menu-item>
                      </router-link>
                  </Submenu>
                  <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                      实时监控
                    </template>
                    <router-link :to="{path:'/realtimemoniter/firstlevelwaring',query:{like:'tomato'}}">
                        <i-menu-item name="2-1">一级警示</i-menu-item>
                    </router-link>
                    <router-link :to="{path:'/realtimemoniter/singlerealtimemoniter',query:{like:'tomato'}}">
                        <i-menu-item name="2-2">单台设备实时监控</i-menu-item>
                    </router-link>
                    <router-link :to="{path:'/realtimemoniter/singlerealtimeparams',query:{like:'tomato'}}">
                        <i-menu-item name="2-3">单台设备实时参数</i-menu-item>
                    </router-link>
                    <router-link :to="{path:'/realtimemoniter/singlerealtimecomponentmoniter',query:{like:'tomato'}}">
                        <i-menu-item name="2-4">单台设备关键部件实时监控</i-menu-item>
                    </router-link>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        设备生命周期
                    </template>
                      <router-link :to="{path:'/devicelifecycle/equipmentacceptance',query:{like:'tomato'}}">
                         <i-menu-item name="3-1">设备验收</i-menu-item>
                      </router-link>
                      <router-link :to="{path:'/devicelifecycle/productionpreparation',query:{like:'tomato'}}">
                         <i-menu-item name="3-2">生产准备</i-menu-item>
                      </router-link>
                      <router-link :to="{path:'/devicelifecycle/productionkpi',query:{like:'tomato'}}">
                        <i-menu-item name="3-3">生产KPI</i-menu-item>
                      </router-link>
                </Submenu>
              </Menu>
          </Sider>
          <Sider collapsible :collapsed-width="78" v-model="isCollapsed" :style="{height: '100vh', left: 0, overflow: 'auto'}" v-else>
              <Menu theme="dark" width="auto" accordion :class="menuitemClasses" :open-names="['1']">
                   <i-menu-item name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>KPI分析</span>
                   </i-menu-item>
                    <i-menu-item name="1-2">
                        <Icon type="ios-keypad"></Icon>
                        <span>实时监控</span>
                    </i-menu-item>
                    <i-menu-item name="1-3">
                        <Icon type="ios-analytics"></Icon>
                        <span>设备生命周期</span>
                    </i-menu-item>
              </Menu>
          </Sider>
        <!-- 右侧主内容区域 -->
        <Layout>
             <div class="iview-content">
              <Content>
                <router-view :style="{height:'900px'}"></router-view> 
                 <!-- 这里布局有问题 -->
              </Content>
            </div>
        </Layout>
    </Layout>
  </div>
</template>
<script>
//  面包屑导航应该是在每个页面下
import HeaderNav from '@/components/header/HeaderNav'
export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isCollapsed: false
    }
  },
  computed: {
      rotateIcon () {
          return [
              'menu-icon',
              this.isCollapsed ? 'rotate-icon' : ''
          ];
      },
      menuitemClasses () {
          return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
      }
  },
  methods:{
    collapsedSider () {
      this.$refs.side1.toggleCollapse();
    }
  },
  components: {
    HeaderNav: HeaderNav
  }
}
</script>
<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.menu-icon{
    transition: all .3s;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.layout-con{
    height: 100%;
    width: 100%;
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
</style>
