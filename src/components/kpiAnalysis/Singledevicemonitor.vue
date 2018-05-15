<template>
    <div class="singledevicemonitor">
      <BreadCrumb :breadcrumbList="breadcrumbList"></BreadCrumb>
      <div class="iview-component-cont">
        <p>单台设备监控kpi</p>
        <div class="iview-component-cont-tables">
            <Table border :columns="columns7" :data="data6"></Table>
            <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
        </div>
      </div>
    </div>
</template>
<script>

import BreadCrumb from '@/components/breadcrumb/BreadCrumb'
let alldatas= [
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park'
          },
          {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park'
          },
          {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park'
          },
          {
              name: 'Joe red',
              age: 38,
              address: 'Sydney No. 1 Lake Park'
          },
          {
              name: 'Jon skyblue',
              age: 26,
              address: 'Ottawa No. 2 Lake Park'
          },
          {
              name: 'Jon Snow',
              age: 21,
              address: 'Ottawa No. 2 Lake Park'
          },
          {
              name: 'Jon james',
              age: 26,
              address: 'Ottawa No. 2 Lake Park'
          },
          {
              name: 'Joe kobe',
              age: 42,
              address: 'Sydney No. 1 Lake Park'
          },
           {
              name: 'Jon poul',
              age: 32,
              address: 'Ottawa No. 2 Lake Park'
          },
          {
              name: 'kri drunt',
              age: 42,
              address: 'Sydney No. 1 Lake Park'
          }
      ]
export default {
  name: 'Singledevicemonitor',
  data: function () {
    return {
      breadcrumbList:[],
      ajaxHistoryData:[],
      load:true,
      // 初始化信息总条数
      dataCount:0,
      // 每页显示多少条
      pageSize:3,
      columns7: [
          {
              title: 'Name',
              key: 'name',
              render: (h, params) => {
                  return h('div', [
                      h('Icon', {
                          props: {
                              type: 'person'
                          }
                      }),
                      h('strong', params.row.name)
                  ]);
              }
          },
          {
              title: 'Age',
              key: 'age'
          },
          {
              title: 'Address',
              key: 'address'
          },
          {
              title: 'Action',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, params) => {
                  return h('div', [
                      h('Button', {
                          props: {
                              type: 'primary',
                              size: 'small'
                          },
                          style: {
                              marginRight: '5px'
                          },
                          on: {
                              click: () => {
                                  this.show(params.index)
                              }
                          }
                      }, '详情'),
                      h('Button', {
                          props: {
                              type: 'error',
                              size: 'small'
                          },
                          on: {
                              click: () => {
                                  this.remove(params.index)
                              }
                          }
                      }, '删除')
                  ]);
              }
          }
      ],
      data6:[]
    }
  },
  components: {
    BreadCrumb: BreadCrumb
  },
  created: function () {
    this.getBreadcrumb();
    this.handleListApproveHistory();
  },
  methods:{
    getBreadcrumb () {
      this.breadcrumbList=this.$route.meta
    },
    handleListApproveHistory(){
      // 保存取到的所有数据
      this.ajaxHistoryData = alldatas;
      this.dataCount = alldatas.length;
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if(alldatas.length < this.pageSize){
          this.data6 = this.ajaxHistoryData;
      }else{
          this.data6 = this.ajaxHistoryData.slice(0,this.pageSize);
      }
    },
    changepage(index){
        var _start = ( index - 1 ) * this.pageSize;
        var _end = index * this.pageSize;
        this.data6 = this.ajaxHistoryData.slice(_start,_end);
    },
    show (index) {
        this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
        })
    },
    remove (index) {
      const dataCounts=this.ajaxHistoryData.length--;
      this.dataCount=dataCounts-1;
      this.data6.splice(index, 1);
      
      if(this.data6.length<=0){
        console.log(index)
        this.changepage(index+1)
      };
    }
  }
}
</script>
<style scoped>
.singledevicemonitor{
  width:100%;
  height: 100%;
}
.iview-component-cont{
  padding: 10px;
}
.iview-component-cont-tables{
  width:100%;
  height: 100%;
  padding: 10px;
}
</style>
