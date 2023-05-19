import { useUserStore } from "src/stores/users";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/inicio-sesion");
  }
};

const userIsAuthenticated = async (to, from, next) => {
  const userStore = useUserStore();
  const user = await userStore.currentUser();
  if (!user) {
    next();
  } else {
    next("/");
  }
};

const routes = [
  {
    path: "/personas/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/DashboardPage.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "inicio-sesion",
        component: () => import("../pages/LoginPage.vue"),
        beforeEnter: userIsAuthenticated,
      },
      {
        path: "registro",
        component: () => import("../pages/RegisterPage.vue"),
        beforeEnter: userIsAuthenticated,
      },
      {
        path: "avaluo-inmueble",
        component: () => import("../pages/FormReport.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "reportes",
        component: () => import("../pages/ReportPage.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "vista-reporte",
        component: () => import("../pages/ReportView.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "mi-cuenta",
        component: () => import("pages/AccountPage.vue"),
        beforeEnter: requireAuth,
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/DashboardPage.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "inicio-sesion",
        component: () => import("../pages/LoginPage.vue"),
        beforeEnter: userIsAuthenticated,
      },
      {
        path: "registro",
        component: () => import("../pages/RegisterPage.vue"),
        beforeEnter: userIsAuthenticated,
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
