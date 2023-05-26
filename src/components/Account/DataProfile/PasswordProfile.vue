<template>
  <label>Contraseña</label>
  <q-input standout readonly outlined label="******">
    <template v-slot:after>
      <div class="cursor-pointer">
        <q-icon name="mdi-pencil" />
        <q-popup-edit v-model="newPassword" :validate="val => val.length > 5" v-slot="scope">
          <q-input autofocus dense filled v-model="scope.value" :model-value="scope.value" hint="Contraseña"
            :type="isPwd ? 'password' : 'text'" :rules="[
              val => scope.validate(val) || 'Por favor usar más de 5 caracteres'
            ]">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
            <template v-slot:after>
              <q-btn flat dense color="negative" icon="cancel" @click.stop.prevent="scope.cancel" />

              <q-btn flat dense color="positive" icon="check_circle" @click.stop.prevent="scope.set"
                :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value" />
            </template>
          </q-input>
        </q-popup-edit>
      </div>
    </template>
  </q-input>
</template>

<script setup>
import { ref, watch } from "vue";
import { updatePassword, sendEmailVerification } from "firebase/auth";
import { auth } from "src/firebaseConfig";

const user = auth.currentUser;

const newPassword = ref("******");
const isPwd = ref(true);
//const credential = promptForCredentials();

watch(newPassword, () => {
  updatePassword(user, newPassword.value).then(() => {
    console.log("actualizado", newPassword.value);
  }).catch((error) => {
    console.error(error);
  });
  //reauthenticateWithCredential(user, credential).then(() => {
  // User re-authenticated.
  //}).catch((error) => {
  // An error ocurred
  // ...
  // });
})




</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

label {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #6B7082;
  padding: 12px 0;
}
</style>