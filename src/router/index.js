import Vue from "vue";
import VueRouter from "vue-router";
import ModulesView from "@/views/ModulesView.vue";
import LoginFamily from "@/views/login/FamilyCode.vue";
import IntroPage from "@/views/login/IntroPage.vue";
import LoginEmail from "@/views/login/EmailPage.vue";
import LoginCode from "@/views/login/CodePage.vue";
import store from "@/store";

const indexA = () =>
  import(
    "@/views/modules/a-module/ModuleIndex.vue" /* webpackChunkName: "indexA" */
  );

const indexB = () =>
  import(
    "@/views/modules/b-module/ModuleIndex.vue" /* webpackChunkName: "indexB" */
  );

const indexC = () =>
  import(
    "@/views/modules/c-module/ModuleIndex.vue" /* webpackChunkName: "indexC" */
  );

const indexD = () =>
  import(
    "@/views/modules/d-module/ModuleIndex.vue" /* webpackChunkName: "indexD" */
  );

const indexE = () =>
  import(
    "@/views/modules/e-module/ModuleIndex.vue" /* webpackChunkName: "indexE" */
  );

const indexF = () =>
  import(
    "@/views/modules/f-module/ModuleIndex.vue" /* webpackChunkName: "indexF" */
  );

const indexG = () =>
  import(
    "@/views/modules/g-module/ModuleIndex.vue" /* webpackChunkName: "indexG" */
  );

const indexH = () =>
  import(
    "@/views/modules/h-module/ModuleIndex.vue" /* webpackChunkName: "indexH" */
  );

const indexI = () =>
  import(
    "@/views/modules/i-module/ModuleIndex.vue" /* webpackChunkName: "indexI" */
  );

const indexJ = () =>
  import(
    "@/views/modules/j-module/ModuleIndex.vue" /* webpackChunkName: "indexJ" */
  );

const indexK = () =>
  import(
    "@/views/modules/k-module/ModuleIndex.vue" /* webpackChunkName: "indexK" */
  );

const indexL = () =>
  import(
    "@/views/modules/l-module/ModuleIndex.vue" /* webpackChunkName: "indexL" */
  );

const indexM = () =>
  import(
    "@/views/modules/m-module/ModuleIndex.vue" /* webpackChunkName: "indexM" */
  );

const indexN = () =>
  import(
    "@/views/modules/n-module/ModuleIndex.vue" /* webpackChunkName: "indexN" */
  );

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login_family",
    component: LoginFamily,
  },
  {
    path: "/login-email",
    name: "login-email",
    component: LoginEmail,
  },
  {
    path: "/login-code",
    name: "login-code",
    component: LoginCode,
  },
  {
    path: "/intro",
    name: "intro-page",
    component: IntroPage,
  },
  {
    path: "/modules",
    name: "modules",
    component: ModulesView,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-a",
    name: "module_a",
    component: indexA,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-b",
    name: "module_b",
    component: indexB,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-c",
    name: "module_c",
    component: indexC,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-d",
    name: "module_d",
    component: indexD,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-e",
    name: "module_e",
    component: indexE,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-f",
    name: "module_f",
    component: indexF,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-g",
    name: "module_g",
    component: indexG,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-h",
    name: "module_h",
    component: indexH,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-i",
    name: "module_i",
    component: indexI,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-j",
    name: "module_j",
    component: indexJ,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-k",
    name: "module_k",
    component: indexK,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-l",
    name: "module_l",
    component: indexL,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-m",
    name: "module_m",
    component: indexM,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/module-n",
    name: "module_n",
    component: indexN,
    beforeEnter(to, from, next) {
      if (store.state.auth.token) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
