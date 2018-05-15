import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
Vue.use(Router)

export const appRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      meta: [
        {
          title: '首页',
          linkpath: '/'
        }
      ],
      component: IndexPage,
      redirect: 'welcome',
      children: [
        {
          path: 'welcome',
          name: 'Welcome',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '欢迎页',
              linkpath: 'welcome'
            }
          ],
          component: () => import('@/components/defaultshow/Welcome.vue')
        }
      ]
    },
    //  登录页面路由  登录页无面包屑导航
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/view/LoginPage.vue')
    },
    // kpi分析模块
    {
      path: '/kpianalysis',
      name: 'kpianalysis',
      meta: [
        {
          title: '首页',
          linkpath: '/'
        },
        {
          title: 'kpi分析模块',
          linkpath: '/kpianalysis'
        }
      ],
      component: () => import('@/components/IndexPage.vue'),
      children: [
        {
          path: '/',
          name: 'Productlinemoniter',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: 'kpi分析模块',
              linkpath: '/kpianalysis'
            },
            {
              title: '生产线监控',
              linkpath: '/kpianalysis/productlinemoniter'
            }
          ],
          component: () => import('@/components/kpiAnalysis/Productlinemonitor')
        },
        {
          path: 'productlinemoniter',
          name: 'Productlinemoniter',
          meta: [ // 这个可以提出来
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: 'kpi分析模块',
              linkpath: '/kpianalysis'
            },
            {
              title: '生产线监控',
              linkpath: '/kpianalysis/productlinemoniter'
            }
          ],
          component: () => import('@/components/kpiAnalysis/Productlinemonitor')
        },
        {
          path: 'similarequipmentmonitor',
          name: 'Similarequipmentmonitor',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: 'kpi分析模块',
              linkpath: '/kpianalysis'
            },
            {
              title: '同类设备监控',
              linkpath: '/kpianalysis/similarequipmentmonitor'
            }
          ],
          component: () => import('@/components/kpiAnalysis/Similarequipmentmonitor')
        },
        {
          path: 'singledevicemonitor',
          name: 'Singledevicemonitor',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: 'kpi分析模块',
              linkpath: '/kpianalysis'
            },
            {
              title: '单台设备监控',
              linkpath: '/kpianalysis/singledevicemonitor'
            }
          ],
          component: () => import('@/components/kpiAnalysis/Singledevicemonitor')
        }
      ]
    },
    //  实时监控模块
    {
      path: '/realtimemoniter',
      name: 'Realtimemoniter',
      meta: [
        {
          title: '首页',
          linkpath: '/'
        },
        {
          title: '实时监控模块',
          linkpath: '/realtimemoniter'
        }
      ],
      component: () => import('@/components/IndexPage.vue'),
      children: [
        {
          path: '/',
          name: 'Firstlevelwaring',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '实时监控模块',
              linkpath: '/realtimemoniter'
            },
            {
              title: '一级警示',
              linkpath: '/realtimemoniter/firstlevelwaring'
            }
          ],
          component: () => import('@/components/realtimemoniter/Firstlevelwaring')
        },
        {
          path: 'firstlevelwaring',
          name: 'Firstlevelwaring',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '实时监控模块',
              linkpath: '/realtimemoniter'
            },
            {
              title: '一级警示',
              linkpath: '/realtimemoniter/firstlevelwaring'
            }
          ],
          component: () => import('@/components/realtimemoniter/Firstlevelwaring')
        },
        {
          path: 'singlerealtimecomponentmoniter',
          name: 'Singlerealtimecomponentmoniter',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '实时监控模块',
              linkpath: '/realtimemoniter'
            },
            {
              title: '单台设备部件实时监控',
              linkpath: '/realtimemoniter/singlerealtimecomponentmoniter'
            }
          ],
          component: () => import('@/components/realtimemoniter/Singlerealtimecomponentmoniter')
        },
        {
          path: 'singlerealtimemoniter',
          name: 'Singlerealtimemoniter',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '实时监控模块',
              linkpath: '/realtimemoniter'
            },
            {
              title: '单台设备实时监控',
              linkpath: '/realtimemoniter/singlerealtimemoniter'
            }
          ],
          component: () => import('@/components/realtimemoniter/Singlerealtimemoniter')
        },
        {
          path: 'singlerealtimeparams',
          name: 'Singlerealtimeparams',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '实时监控模块',
              linkpath: '/realtimemoniter'
            },
            {
              title: '单台设备实时参数',
              linkpath: '/realtimemoniter/singlerealtimeparams'
            }
          ],
          component: () => import('@/components/realtimemoniter/Singlerealtimeparams')
        }
      ]
    },
    // 设备生命周期模块
    {
      path: '/devicelifecycle',
      name: 'Devicelifecycle',
      meta: [
        {
          title: '首页',
          linkpath: '/'
        },
        {
          title: '设备生命监控模块',
          linkpath: '/devicelifecycle'
        }
      ],
      component: () => import('@/components/IndexPage.vue'),
      children: [
        {
          path: '/',
          name: 'Equipmentacceptance',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '设备生命监控模块',
              linkpath: '/devicelifecycle'
            },
            {
              title: '设备验收',
              linkpath: '/devicelifecycle/equipmentacceptance'
            }
          ],
          component: () => import('@/components/devicelifecycle/Equipmentacceptance')
        },
        {
          path: 'equipmentacceptance',
          name: 'Equipmentacceptance',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '设备生命监控模块',
              linkpath: '/devicelifecycle'
            },
            {
              title: '设备验收',
              linkpath: '/devicelifecycle/equipmentacceptance'
            }
          ],
          component: () => import('@/components/devicelifecycle/Equipmentacceptance')
        },
        {
          path: 'productionpreparation',
          name: 'Productionpreparation',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '设备生命监控模块',
              linkpath: '/devicelifecycle'
            },
            {
              title: '生产准备',
              linkpath: '/devicelifecycle/productionpreparation'
            }
          ],
          component: () => import('@/components/devicelifecycle/Productionpreparation')
        },
        {
          path: 'productionkpi',
          name: 'Productionkpi',
          meta: [
            {
              title: '首页',
              linkpath: '/'
            },
            {
              title: '设备生命监控模块',
              linkpath: '/devicelifecycle'
            },
            {
              title: '生产kpi',
              linkpath: '/devicelifecycle/productionkpi'
            }
          ],
          component: () => import('@/components/devicelifecycle/Productionkpi')
        }
      ]
    }
  ]
})
