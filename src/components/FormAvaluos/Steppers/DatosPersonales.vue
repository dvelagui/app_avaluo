<template>
  <div class="container">
    <h2 class="q-mb-xl">Datos Personales</h2>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Nombre completo</label>
        <q-input outlined v-model="name" label="" />
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Email</label>
        <q-input outlined v-model="email" label="" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Celular</label>
        <q-input outlined v-model="phone" label="" />
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
        <label>¿Que quieres hacer con este inmueble?</label>
        <q-select outlined v-model="action" :options="tipoNegocio" label="Selecciona..." />
      </div>
    </div>
    <h2 class="q-my-xl">¿Para que necesitas este avalúo?</h2>
    <div class="row">
      <CheckAvaluo />
    </div>
  </div>
</template>

<script setup>
import CheckAvaluo from "../FormComponents/CheckAvaluo.vue";
import { userDatabaseStore } from "../../../stores/database";
import { userFormAvaluoStore } from "../../../stores/FormAvaluo";
import { tipoNegocio } from "../../../data/formData";
import { provide, ref } from 'vue';

const useDataBase = userDatabaseStore();
const useFormAvaluo = userFormAvaluoStore()
const name = ref(useDataBase.documents?.nickname);
const email = ref(useDataBase.documents?.email);
const phone = ref(useDataBase.documents?.phone);
const action = ref();
const checkbox = ref();

const setCheck = (val) => {
  checkbox.value = val
}

const updateStepFinal = () => {
  useFormAvaluo.stepFinal(name.value, email.value, phone.value, action.value, checkbox.value);
}

defineExpose({ updateStepTwo })

provide("setCheck", { checkbox, setCheck })

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #282A33;
}

label {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #6B7082;
}

.checkbox-items {
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 9px;
}
</style>
