<template>
  <q-page class="row items-center flex">
    <div class="col-12 col-md-4">
      <img class="img-login" alt="Avaluo En Linea" src="../assets/img_login.png">
    </div>
    <div class="col-8">
      <div class="row justify-center items-start">
        <section class="col-6  self-center">
          <div class="text-center q-mb-xl">
            <a href="https://www.avaluoenlinea.com/" target="_blank">
              <img class="img-logo" alt="Avaluo En Linea" src="../assets/logo_avaluo.svg" />
            </a>
          </div>
          <h3 class="login-h3">Crear Cuenta</h3>
          <p class="login-p">Ingresa tus datos y crea tu cuenta</p>
          <div style="max-width: 400px">
            <FormLogin btnSubmit="Registrate" @user-data="userDataInput = $event">
            </FormLogin>
            <p class="q-mt-md">¿Ya tienes cuenta? <span class="text-primary cursor-pointer"
                @click="router.push(`${route.matched[0].path}inicio-sesion`)"> Inicia Sesión</span></p>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import FormLogin from 'src/components/Login/FormLogin.vue';
import { useUserStore } from "../stores/users";
import { userDatabaseStore } from "../stores/database";
import { auth } from 'src/firebaseConfig';
import { useRouter, useRoute } from 'vue-router';
import { provide, ref, watch } from 'vue';

const userDataInput = ref({});
const userStore = useUserStore();
const useDataBase = userDatabaseStore();
const router = useRouter();
const route = useRoute();
const usertype = ref('');
const userRegistered = ref('personas');
const userPlan = ref('free');
const redirectPath = ref(route.query.redirect || '/');




const defineUSer = () => {
  usertype.value = ref(route.matched[0].path != '/' ? route.matched[0].path.split('/')[1] : userRegistered.value)
}

const changeUserRegistered = (usertype) => {
  userRegistered.value = usertype
}

watch(userDataInput, async () => {
  defineUSer();
  await userStore.createUser(userDataInput.value.nickname, usertype.value._value, userPlan.value, userDataInput.value.email, userDataInput.value.password);
  router.push('/' + usertype.value._value + redirectPath.value);
})

provide('type', { userRegistered, changeUserRegistered })

</script>

<style lang="scss" scoped>
.login-h3 {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #282A33;
}

.login-p {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #6B7082;
}

.img-login {
  height: 100vh;
}
</style>


