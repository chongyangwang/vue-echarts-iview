<template>
    <div class="productlinemoniter">
      <BreadCrumb :breadcrumbList="breadcrumbList" class="breadcrumb"></BreadCrumb>
        <div class="iview_content_inner">
          <!-- <vue-lazy-component v-if="root" :viewport="root">
            <Lazyload></Lazyload>
          </vue-lazy-component> -->
          <div id="product_chat1" class="section"></div>
          <div id="product_chat2" class="section"></div>
          <div id="product_chat3" class="section"></div>
          <div id="product_chat4" class="section"></div>
        </div>
        <Spin v-if="load" fix></Spin>
        <BackTop></BackTop>
    </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import BackTop from "@/components/backtop/BackTop"
import Lazyload from "@/components/kpiAnalysis/Lazyload";
import { mapActions, mapState } from "vuex";
// 包错误找不到对应的包
const echarts = require("echarts");

export default {
  name: "Productlinemonitor",
  data: function() {
    return {
      breadcrumbList: [],
      guagegeOptions: null,
      root: null,
      load: true
    };
  },
  created: function() {
    // console.log(this.$echarts)   将echarts挂载到vue原型上
    this.getBreadcrumb();
    //  this.getProductLineMonitorData(this);
    //  直接解构actions这里不好使只能去触发然后在回调里更新
  },
  computed: {
    ...mapState({
      barOptions: state => state.barOptions,
      pieOptions: state => state.pieOptions,
      lineOptions: state => state.lineOptions
    })
  },
  methods: {
    // ...mapActions([
    //   'getProductLineMonitorData'
    // ]),
    async getchartsdata() {
      await this.$store.dispatch("getProductLineMonitorData", this);
      const departmentBar = echarts.init(
        document.getElementById("product_chat1")
      );
      departmentBar.setOption(this.barOptions);
      const departmentPie = echarts.init(
        document.getElementById("product_chat2")
      );
      departmentPie.setOption(this.pieOptions);
      const departmentLine = echarts.init(
        document.getElementById("product_chat3")
      );
      departmentLine.setOption(this.lineOptions);
    },
    getguagedata() {
      this.axios.post("/api/productlinemonitor/guageoptiondata").then(res => {
        this.guagegeOptions = res.data.data;
        const departmentGuage = echarts.init(
          document.getElementById("product_chat4")
        );
        departmentGuage.setOption(this.guagegeOptions);
      });
    },
    getBreadcrumb() {
      this.breadcrumbList = this.$route.meta;
    },
    changEcharts() {
      window.addEventListener("resize", () => {
        echarts.init(document.getElementById("product_chat1")).resize();
        echarts.init(document.getElementById("product_chat2")).resize();
        echarts.init(document.getElementById("product_chat3")).resize();
        echarts.init(document.getElementById("product_chat4")).resize();
      });
    }
  },
  components: {
    BreadCrumb: BreadCrumb,
    Lazyload: Lazyload,
    BackTop: BackTop
  },
  watch: {
    // 一般可以用来监听路由
    $route() {}
  },
  mounted: function() {
    // 这个方法是当页面的尺寸发生改变时自动调整图表的大小 所以要放到mounted里面执行
    this.changEcharts();
    // 这是页面中的前三个表盘的数据接口
    // this.getchartsdata(); // 个人感觉放在created里更合适
    // 这个方法是直接在页面里通过请求去获得后台数据渲染  不经过vuex
    // this.getguagedata();

    setTimeout(()=>{
      this.getchartsdata();
      this.getguagedata();
      this.load=false;
    },2000)
    this.root = this.$parent.$el;
  }
};
</script>
<style scoped>
.productlinemoniter {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

