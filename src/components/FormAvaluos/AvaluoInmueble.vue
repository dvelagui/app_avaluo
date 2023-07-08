<template>
  <div>
    <div class="q-pa-xl column items-start justify-start">
      <h4 class="title text-center">Avalúo Inmueble</h4>
    </div>
    <q-stepper class="q-pa-sm q-pa-md-xl" v-model="step" ref="stepper" color="primary" animated>
      <q-step class="q-px-sm q-px-md-xl" :name="1" title="Ubica el inmueble" icon="fa-solid fa-1" :done="step > 1">
        <ubicacion-mapa class="q-px-sm q-px-md-xl" />
      </q-step>

      <q-step class="q-px-sm q-px-md-xl" :name="2" title="Características del inmueble" icon="fa-solid fa-2"
        :done="step > 2">
        <caracteristicas-inmueble class="q-px-sm q-px-md-xl" />
      </q-step>

      <q-step class="q-px-sm q-px-md-xl" :name="3" title="Datos personales" icon="fa-solid fa-3" :done="step > 3">
        <datos-personales class="q-px-sm q-px-md-xl" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="text-right q-mr-xl">
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Volver" class="q-ml-sm" />
          <q-btn @click="continuar" color="primary" :label="step === 3 ? 'Finalizar' : 'Continuar'" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script setup>
import UbicacionMapa from './Steppers/UbicacionMapa.vue';
import CaracteristicasInmueble from './Steppers/CaracteristicasInmueble.vue';
import DatosPersonales from './Steppers/DatosPersonales.vue';
import TipoReporte from './Steppers/TipoReporte.vue';
import { userDatabaseStore } from "../../stores/database";
import { reportDatabaseStore } from "../../stores/reports";
import { useRouter, useRoute } from 'vue-router';
import { provide, ref } from 'vue'
import { nanoid } from "nanoid";

const useDatabase = userDatabaseStore();
const useReportDatabase = reportDatabaseStore()
const router = useRouter();
const stepper = ref()
const step = ref(1);
const date = new Date().toLocaleDateString();
const city = ref('');
const direccion = ref()
const direccion_formato = ref()
const dpto_ccdgo = ref()
const mpio_ccdgo = ref()
const latitud = ref()
const longitud = ref()
const tipoinmueble = ref()
const numerodepiso = ref()
const garajes = ref()
const estrato = ref()
const habitaciones = ref()
const banos = ref()
const area = ref()
const tiempodeconstruido = ref()
const halldealcobasoestar = ref()
const conjuntocerrado = ref()
const balcon = ref()
const numeroascensore = ref()
const saloncomunal = ref()
const zonadelavanderia = ref()
const estudioobiblioteca = ref()
const cuartodeservicio = ref()
const numerodeniveles = ref()
const terraza = ref()
const areaterraza = ref()
const vista = ref()
const depositoocuartoutil = ref()
const remodelado = ref()
const clubhouse = ref()
const porteria = ref()

const setCity = (citySelected) => {
  city.value = citySelected;
}
const setAddress = (addressSelected) => {
  direccion.value = addressSelected;
}

const setDireccion_formato = (value) => {
  direccion_formato.value = value
}
const setDpto_ccdgo = (value) => {
  dpto_ccdgo.value = value
}
const setMpio_ccdgo = (value) => {
  mpio_ccdgo.value = value
}
const setLatitud = (value) => {
  latitud.value = value
}
const setLongitud = (value) => {
  longitud.value = value
}
const setTipoinmueble = (val) => {
  tipoinmueble.value = val
}

const addReport = () => {
  useReportDatabase.createReport(nanoid(8), date, city.value, direccion.value, useDatabase.documents.nickname, useDatabase.documents.admin)
  router.push(`/${useDatabase.documents.typeUser}/vista-reporte`)
}
const continuar = () => {
  step.value === 3 ? addReport() : stepper.value.next()
}
provide('setcity', { city, setCity })
provide('setaddress', { direccion, setAddress })
provide('setdireccion_formato', { direccion_formato, setDireccion_formato })
provide('setdpto_ccdgo', { dpto_ccdgo, setDpto_ccdgo })
provide('setmpio_ccdgo', { mpio_ccdgo, setMpio_ccdgo })
provide('setlatitud', { latitud, setLatitud })
provide('setlongitud', { longitud, setLongitud })
provide('settipoinmueble', { tipoinmueble, setTipoinmueble })

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
