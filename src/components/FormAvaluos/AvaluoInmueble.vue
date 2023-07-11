<template>
  <div>
    <div class="q-pa-xl column items-start justify-start">
      <h4 class="title text-center">Avalúo Inmueble</h4>
    </div>
    <q-stepper class="q-pa-sm q-pa-md-xl" v-model="step" ref="stepper" color="primary" animated>
      <q-step class="q-px-sm q-px-md-xl" :name="1" title="Ubica el inmueble" icon="fa-solid fa-1" :done="step > 1">
        <ubicacion-mapa ref="dataUbicacion" class="q-px-sm q-px-md-xl" />
      </q-step>

      <q-step class="q-px-sm q-px-md-xl" :name="2" title="Características del inmueble" icon="fa-solid fa-2"
        :done="step > 2">
        <caracteristicas-inmueble ref="dataCaracteristicas" class="q-px-sm q-px-md-xl" />
      </q-step>

      <q-step class="q-px-sm q-px-md-xl" :name="3" title="Datos personales" icon="fa-solid fa-3" :done="step > 3">
        <datos-personales class="q-px-sm q-px-md-xl" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="text-right q-mr-xl">
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Volver" class="q-ml-sm" />
          <q-btn @click="stepperForm" color="primary" :label="step === 3 ? 'Finalizar' : 'Continuar'" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script setup>
import UbicacionMapa from './Steppers/UbicacionMapa.vue';
import CaracteristicasInmueble from './Steppers/CaracteristicasInmueble.vue';
import DatosPersonales from './Steppers/DatosPersonales.vue';
import { userDatabaseStore } from "../../stores/database";
import { reportDatabaseStore } from "../../stores/reports";
import { userFormAvaluoStore } from "../../stores/FormAvaluo";
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue'
import { nanoid } from "nanoid";

const useDatabase = userDatabaseStore();
const useReportDatabase = reportDatabaseStore()
const useFormAvaluo = userFormAvaluoStore()
const router = useRouter();
const dataUbicacion = ref(null)
const dataCaracteristicas = ref(null)
const stepper = ref()
const step = ref(1);
const date = new Date().toLocaleDateString();
const city = ref('');

const addReport = () => {
  useReportDatabase.createReport(nanoid(8), date, city.value, direccion.value, useDatabase.documents.nickname, useDatabase.documents.admin)
  router.push(`/${useDatabase.documents.typeUser}/vista-reporte`)
}
const stepperForm = () => {
  if (step.value === 1) {
    dataUbicacion.value.updateStepOne()
    stepper.value.next()
  } else if (step.value === 2) {
    dataCaracteristicas.value.updateStepTwo()
    stepper.value.next()
  }
  else {
    step.value = step.value + 1;
  }
}

</script>


<style lang="scss" scoped>
.title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #282A33;
}
</style>
