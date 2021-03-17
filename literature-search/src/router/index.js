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
      {
        path: '/',
        redirect: '/home',
        name: 'home',
        component: () => import('../views/home/home'),
        meta: {title: '首页'},
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home'),
        meta: {title: '首页'},
      },
      {
        path: '/teachingTeam',
        name: 'teachingTeam',
        component: () => import('../views/home/teachingTeam'),
        meta: {title: '教学队伍'},
      },
      {
        path: '/teachingVideo',
        name: 'teachingVideo',
        component: () => import('../views/home/teachingVideo'),
        meta: {title: '教学视频'},
      },
      {
        path: '/studentTask',
        name: 'studentTask',
        component: () => import('../views/home/studentTask'),
        meta: {title: '学生作业'},
      },
      {
        path: '/courseContent',
        name: 'courseContent',
        component: () => import('../views/home/courseContent'),
        meta: {title: '课程内容'},
      },
      {
        path: '/resources',
        name: 'resources',
        component: () => import('../views/home/resources'),
        meta: {title: '参考资料'},
      },
      {
        path: '/teachingCourse',
        name: 'teachingCourse',
        component: () => import('../views/home/teachingCourse'),
        meta: {title: '教学课件'},
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
