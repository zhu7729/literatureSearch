import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../views/Layout/Layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Layout',
    component: Layout,
    meta: {auth: true},
    hidden: true,
    children: [
      {
        path: '/example',
        name: 'example',
        component: () => import('../views/example/example'),
        meta: {title: '例子'},
      },

    ]
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
