<template>
    <div class="q-pa-xl">
        <q-stepper v-model="step" vertical color="primary" animated>
            <q-step :name="1" title="Ubica el inmueble" icon="mdi-numeric-1" :done="step > 1">
                <div class="content-step">
                    <ubicacion-mapa />
                    <q-stepper-navigation class="text-end">
                        <q-btn @click="step = 2" color="primary" label="Continuar" />
                    </q-stepper-navigation>
                </div>
            </q-step>

            <q-step :name="2" title="Características del inmueble" icon="mdi-numeric-2" :done="step > 2">
                <div class="content-step">

                    <caracteristicas-inmueble />
                    <q-stepper-navigation>
                        <q-btn flat @click="step = 1" color="primary" label="Volver" class="q-ml-sm" />
                        <q-btn @click="step = 3" color="primary" label="Continuar" />
                    </q-stepper-navigation>
                </div>
            </q-step>

            <q-step :name="3" title="Datos personales" icon="mdi-numeric-3" :done="step > 3">
                <div class="content-step">

                    <datos-personales />


                    <q-stepper-navigation>
                        <q-btn flat @click="step = 2" color="primary" label="Volver" class="q-ml-sm" />
                        <q-btn @click="step = 4" color="primary" label="Continuar" />
                    </q-stepper-navigation>
                </div>
            </q-step>

            <q-step :name="4" title="Escoge tu reporte" icon="mdi-numeric-4">
                <div class="content-step">

                    <tipo-reporte />

                    <q-stepper-navigation>
                        <q-btn flat @click="step = 3" color="primary" label="Volver" class="q-ml-sm" />
                        <q-btn @click="addReport" color="primary" label="Finalizar" />
                    </q-stepper-navigation>
                </div>
            </q-step>
        </q-stepper>
    </div>
</template>
  
<script setup>
import { provide, ref } from 'vue'
import { reportDatabaseStore } from "../../stores/reports";
import UbicacionMapa from './Steppers/UbicacionMapa.vue';
import CaracteristicasInmueble from './Steppers/CaracteristicasInmueble.vue';
import DatosPersonales from './Steppers/DatosPersonales.vue';
import TipoReporte from './Steppers/TipoReporte.vue';
import { useRouter, useRoute } from 'vue-router';
import { nanoid } from "nanoid";

const useReportDatabase = reportDatabaseStore()
const router = useRouter();
const route = useRoute();
const step = ref(1);
const date = new Date().toLocaleDateString();
const city = ref('');
const addressReport = ref('');

const setCity = (citySelected) => {
    city.value = citySelected;
}
const setAddress = (addressSelected) => {
    addressReport.value = addressSelected;
}


const addReport = () => {
    useReportDatabase.createReport(nanoid(8), date, city.value, addressReport.value)
    router.push(`${route.matched[0].path}vista-reporte`)
    console.log(useReportDatabase);
}
provide('setcity', { city, setCity })
provide('setaddress', { addressReport, setAddress })

</script>


<style lang="scss" scoped>
.content-step {
    width: 70%;
}

.q-stepper__nav {
    text-align: right;
}
</style>