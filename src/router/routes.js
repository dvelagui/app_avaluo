import { useUserStore } from "src/stores/users";
import { userDatabaseStore } from "../stores/database";
import { useRoute } from "vue-router";

const requireAuthEmpresas = async (to, from, next) => {
  const userStore = useUserStore();
  const useDataBase = userDatabaseStore();
  const user = await userStore.currentUser();
  if (user) {
    const userPath = await useDataBase.getUserData(user.uid);
    if (useDataBase.documents.plan === "free") {
      next("/empresas/planes");
    } else if (useDataBase.documents.typeUser === "empresas") {
      next();
    } else {
      next("/");
    }
  } else {
    next("/inicio-sesion");
  }
};
const requireAuthPersonas = async (to, from, next) => {
  const userStore = useUserStore();
  const useDataBase = userDatabaseStore();
  const user = await userStore.currentUser();
  if (user) {
    const userPath = await useDataBase.getUserData(user.uid);
    if (useDataBase.documents.typeUser === "personas") {
      next();
    } else {
      next("/");
    }
  } else {
    next("/inicio-sesion");
  }
};
const userPathHome = async (to, from, next) => {
  const userStore = useUserStore();
  const useDataBase = userDatabaseStore();
  const user = await userStore.currentUser();
  if (user) {
    const userPath = await useDataBase.getUserData(user.uid);
    next(`/${useDataBase.documents.typeUser}`);
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
    path: "/personas",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/DashboardPage.vue"),
        beforeEnter: requireAuthPersonas,
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
        beforeEnter: requireAuthPersonas,
      },
      {
        path: "avaluo-certificado",
        component: () => import("../pages/FormReport.vue"),
        beforeEnter: requireAuthPersonas,
      },
      {
        path: "reportes",
        component: () => import("../pages/ReportPage.vue"),
        beforeEnter: requireAuthPersonas,
      },
      {
        path: "vista-reporte",
        component: () => import("../pages/ReportView.vue"),
        beforeEnter: requireAuthPersonas,
      },
      {
        path: "mi-cuenta",
        component: () => import("pages/AccountPage.vue"),
        beforeEnter: requireAuthPersonas,
      },
    ],
  },
  {
    path: "/empresas",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/DashboardPage.vue"),
        beforeEnter: requireAuthEmpresas,
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
        path: "registro-asesor/finishSignUp",
        component: () => import("../pages/RegisterLinkPage.vue"),
        beforeEnter: userIsAuthenticated,
      },
      {
        path: "planes",
        component: () => import("../pages/PricingPage.vue"),
      },
      {
        path: "avaluo-inmueble",
        component: () => import("../pages/FormReport.vue"),
        beforeEnter: requireAuthEmpresas,
      },
      {
        path: "avaluo-certificado",
        component: () => import("../pages/FormReport.vue"),
        beforeEnter: requireAuthEmpresas,
      },
      {
        path: "reportes",
        component: () => import("../pages/ReportPage.vue"),
        beforeEnter: requireAuthEmpresas,
      },
      {
        path: "vista-reporte",
        component: () => import("../pages/ReportView.vue"),
        beforeEnter: requireAuthEmpresas,
      },
      {
        path: "mi-cuenta",
        component: () => import("pages/AccountPage.vue"),
        beforeEnter: requireAuthEmpresas,
      },
      {
        path: "administracion",
        component: () => import("pages/AdminPage.vue"),
        beforeEnter: requireAuthEmpresas,
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
        beforeEnter: userPathHome,
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
    redirect: "/inicio-sesion",
  },
];

export default routes;
