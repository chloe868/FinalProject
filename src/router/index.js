import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import MainPage from "../components/MainPage";
import FirstPage from "../components/FirstPage";
import Reserved from "../components/Reserved";
import Practice from "../components/Practice";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FirstPage
  },
  {
    path: "/header",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/mainpage",
    name:"mainpage",
    component:MainPage,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/practice",
    name:"practice",
    component:Practice,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/login",
    name:"login",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta:{
      tokenRequired: true
    }

  },
  {
    path:"/register",
    name:"register",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    meta: {
      tokenRequired: false
    }
  },
  {
    path:"/reserved",
    name:"reserved",
    component:Reserved,
    meta: {
      tokenRequired: false
  }
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../components/Reserved.vue")

  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
