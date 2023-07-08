<template>
  <q-page class="row items-center flex">
    <div class="col-12 col-md-4">
      <img class="img-login" alt="Avaluo En Linea" src="../assets/img_login.png">
    </div>
    <div class="col-12 col-md-8 q-px-lg q-px-md-sm">
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
              <p><span class="text-primary cursor-pointer" @click="prompt = true">¿Olvidaste tu
                  contraseña?</span></p>
            </FormLogin>
            <p class="q-mt-md">¿No tienes cuenta? <span class="text-primary cursor-pointer"
                @click="router.push('/registro')"> Regístrate</span></p>
          </div>
        </section>
      </div>
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Ingresa tu email registrado</div>
          <div class="text-p6">Te enviaremos un correo electrónico con instrucciones para restablecer tu contraseña.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-pt-none">
          <q-input type="email" outlined v-model="email" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Enviar" @click="sendEmail" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="msjDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="text-dark-page" style="width: 100%; max-width: 400px">
        <q-card-section>
          <div class="text-h6 text-center">{{ message }}</div>
          <q-separator />
          <div class="text-p5 text-center q-pa-md">{{ message2 }}</div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-dark-page">
          <q-btn flat label="OK" @click="closePopup" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import FormLogin from 'src/components/Login/FormLogin.vue';
import { userDatabaseStore } from "../stores/database";
import { useUserStore } from "../stores/users";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { ref, watch, provide } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ClosePopup } from 'quasar';

const userDataInput = ref({})
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const useDataBase = userDatabaseStore();
const redirectPath = ref(route.query.redirect || '');
const userRegistered = ref('personas');
const prompt = ref(false);
const email = ref('');
const msjDialog = ref(false);
const message = ref('');
const message2 = ref('');

const sendEmail = () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      msjDialog.value = true;
      message.value = "Consulta tu correo electrónico";
      message2.value = "Revisa tu bandeja de entrada para obtener instrucciones para restablecer la contraseña. Si no ves el correo electrónico en tu bandeja de entrada, revisa la carpeta de correo no deseado (spam) o prueba con otra dirección de correo electrónico.";
    })
    .catch((error) => {
      msjDialog.value = true;
      message.value = "correo electrónico invalido";
      message2.value = "Revisa el correo electronico ingresado o prueba con otra dirección de correo electrónico.";
    });
}

const closePopup = () => {
  prompt.value = false;
  msjDialog.value = false;

}
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

@media (max-width: 992px) {
  .img-login {
    display: none;
  }

}
</style>


