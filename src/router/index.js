import Vue from 'vue'
import Router from 'vue-router'
import entrance from '@/components/entrance'                        //暂时入口


Vue.use(Router);
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
};
export default new Router({ //type:1  为一级页面    type：2 为二级页面
  routes: [

    {
      path: '/',
      component: entrance,
      meta: {
        type: 1,

      }
    },

  ],

})
