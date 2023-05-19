<template>
  <FormGoogle :btnGoogle="btnSubmit" />
  <FormPhone :btnGoogle="btnSubmit" />
  <article class="q-mt-lg">
    <p>ó {{ btnSubmit }} con tu Email</p>
  </article>
  <q-form @submit.prevent="onSubmit" class="q-gutter-md q-mt-sm">
    <q-input v-if="btnSubmit === 'Registrate'" filled type="text" v-model="nickname" label="Nombre *" lazy-rules
      :rules="[val => val && val.length > 0 || 'Por favor, ingresa tu nombre']" />
    <q-input filled type="email" v-model="email" label="Correo electrónico *" lazy-rules
      :rules="[val => val && val.length > 0 || 'Por favor, ingresa un email valido']" />

    <q-input filled type="password" v-model="password" label="Contraseña *" lazy-rules :rules="[
      val => val !== null && val !== '' || 'Por favor, ingresa una contraseña valida',
    ]" />
    <slot></slot>
    <div>
      <q-btn class="btn-simple" :label="btnSubmit" type="submit" :disable="userStore.loadingUser" />
    </div>
  </q-form>
</template>

<script setup>
import FormGoogle from "./FormGoogle.vue"
import FormPhone from "./FormPhone.vue";
import { ref, toRefs } from "vue";
import { useUserStore } from "src/stores/users";
import { useQuasar } from 'quasar'

const userStore = useUserStore();
const nickname = ref('');
const email = ref('');
const password = ref('');
const $q = useQuasar();



const props = defineProps({
  btnSubmit: String
})

const { btnSubmit } = toRefs(props);
const emit = defineEmits(["userData"]);

const onSubmit = () => {
  if (!userStore.loadingUser) {
    $q.loading.show()
    emit("userData", ({
      email: email.value,
      password: password.value,
      nickname: nickname.value,
    }))
    $q.loading.hide();
  }
}

</script>

<style lang="scss" scoped></style>