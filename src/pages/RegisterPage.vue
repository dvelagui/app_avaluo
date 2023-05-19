<template>
  <q-page class="row items-center flex">
    <div class="col-4">
      <img style="width: 100%" alt="Avaluo En Linea" src="../assets/img_login.png">
    </div>
    <div class="col-8">
      <div class="row justify-center items-start">
        <section class="col-6  self-center">
          <h3 class="login-h3">Crear Cuenta</h3>
          <p class="login-p">Ingresa tus datos y crea tu cuenta</p>
          <div style="max-width: 400px">
            <FormLogin btnSubmit="Registrate" @user-data="userDataInput = $event">
            </FormLogin>
            <p class="q-mt-md">¿Ya tienes cuenta?<span class="text-primary cursor-pointer"
                @click="router.push(`${route.matched[0].path}inicio-sesion`)">Inicia Sesión</span></p>
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
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const userDataInput = ref({})
const userStore = useUserStore();
const useDataBase = userDatabaseStore();
const router = useRouter()
const route = useRoute()
const usertype = ref('');
const redirectPath = ref(route.query.redirect || '/')

const defineUSer = () => {
  usertype.value = route.matched[0].path.split('/')[1]
}


watch(userDataInput, async () => {
  defineUSer();
  const userRegister = ({ ...userDataInput.value })
  await userStore.createUser(userRegister.nickname, usertype.value, userRegister.email, userRegister.password);
  router.push(redirectPath.value);
})

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
</style>


