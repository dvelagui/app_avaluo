<template>
  <q-page class="row items-center flex">
    <div class="col-12 col-md-4">
      <img class="img-login" alt="Avaluo En Linea" src="../assets/img_login.png">
    </div>
    <div class="col-12 col-md-8">
      <div class="row justify-center items-start">
        <section class="col-12 col-md-6 self-center">
          <div class="text-center q-mb-xl">
            <a href="https://www.avaluoenlinea.com/" target="_blank">
              <img class="img-logo" alt="Avaluo En Linea" src="../assets/logo_avaluo.svg" />
            </a>
          </div>
          <h3 class="login-h3">Ingreso</h3>
          <p class="login-p">Ingresa a tu cuenta</p>
          <div style="max-width: 400px">
            <FormLogin btnSubmit="Iniciar Sesión" @user-data="userDataInput = $event">
            </FormLogin>
            <p class="q-mt-md">¿No tienes cuenta? <span class="text-primary cursor-pointer"
                @click="router.push('/registro')"> Regístrate</span></p>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import FormLogin from 'src/components/Login/FormLogin.vue';
import { ref, watch, provide } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from "../stores/users";
import { userDatabaseStore } from "../stores/database";

const userDataInput = ref({})
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const useDataBase = userDatabaseStore();
const redirectPath = ref(route.query.redirect || '');
const userRegistered = ref('personas');

const changeUserRegistered = (usertype) => {
  userRegistered.value = usertype
}

watch(userDataInput, async () => {
  const userRegister = ({ ...userDataInput.value })
  await userStore.loginUser(userRegister.email, userRegister.password);
  router.push('/' + useDataBase.documents.typeUser + redirectPath.value);
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
  margin-top: 8px;
}

.img-login {
  height: 100vh;
}
</style>


