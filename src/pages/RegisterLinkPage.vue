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
          <p class="login-p">Accederas a una cuenta premium de {{ company }}</p>
          <p class="login-p">Confirma tus Datos</p>
          <div style="max-width: 400px">
            <q-form @submit.prevent="onSubmit" class="q-gutter-md q-mt-sm">
              <q-input filled type="text" v-model="nickname" label="Nombre *" lazy-rules
                :rules="[val => val && val.length > 0 || 'Por favor, ingresa tu nombre']" />
              <q-input filled type="email" v-model="emailPrompt" label="Correo electrónico *" lazy-rules
                :rules="[val => val && val.length > 0 || 'Por favor, ingresa un email valido']" />

              <!--  <q-input filled type="password" v-model="password" label="Contraseña *" lazy-rules :rules="[
                val => val !== null && val !== '' || 'Por favor, ingresa una contraseña valida',
              ]" /> -->

              <div>
                <q-btn class="btn-simple" label="Confirmar" type="submit" />
              </div>
            </q-form>
          </div>
        </section>
      </div>
    </div>
  </q-page>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Configura una contraseña</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <q-input autofocus dense filled v-model="newPassword" hint="Contraseña" :type="isPwd ? 'password' : 'text'"
          :rules="[
            val => scope.validate(val) || 'Por favor usar más de 5 caracteres'
          ]">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Ingresar" @click="password" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useUserStore } from "../stores/users";
import { userDatabaseStore } from "../stores/database";
import { updatePassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter, useRoute } from 'vue-router';
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { ref } from 'vue';
import { useQuasar } from 'quasar'

const userStore = useUserStore();
const userDataInput = ref({});
const useDataBase = userDatabaseStore();
const router = useRouter();
const route = useRoute();
const nickname = ref(route.query.name)
const emailPrompt = ref(route.query.email)

const prompt = ref(false)
const user = ref();
const newPassword = ref("");
const isPwd = ref(true);
//const credential = promptForCredentials();


const cargarDatos = async () => {
  await useDataBase.getUserDataEmail(emailPrompt.value);
}
cargarDatos()


const onSubmit = () => {


  if (isSignInWithEmailLink(auth, window.location.href)) {
    console.log(useDataBase.documents);

    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {

      email = emailPrompt.value;

    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      }).then(() => {
        useDataBase.UpdateUserDataAgent(useDataBase.documents?.uid, auth.currentUser.uid)
      }).then(() => {
        console.log(useDataBase.documents);
        user.value = auth.currentUser;
        prompt.value = true

      })
      .catch((error) => {
        console.log(error);
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }

}


const password = () => {
  updatePassword(user.value, newPassword.value).then(() => {
  }).then(() => {
    router.push('/');
  }).catch((error) => {
    console.error(error);
  });
  //reauthenticateWithCredential(user, credential).then(() => {
  // User re-authenticated.
  //}).catch((error) => {
  // An error ocurred
  // ...
  // });

}




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


