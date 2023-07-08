<template>
  <div class="container">
    <h2>Caracteristicas del Inmueble</h2>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Tipo de inmueble</label>
        <q-select outlined v-model="tipo" :options="tipos" @update:model-value="setTipoinmueble(tipo)"
          label="Selecciona..." />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Área construida:</label>
        <q-input outlined v-model="area" label="" />
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Estrato</label>
        <q-select outlined v-model="estrato" :options="estratos" label="Selecciona..." />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>¿En qué piso se ubica?</label>
        <q-select outlined v-model="piso" :options="numerodepisos" label="Selecciona..." />
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
        <label>¿Cuántos niveles tiene?</label>
        <q-select outlined v-model="niveles" :options="numerodeniveles" label="Selecciona..." />
      </div>
    </div>
    <div class="row">
      <div class="col-6 q-pa-sm">
        <label>Habitaciones</label>
        <counter-avaluo />
      </div>
      <div class="col-6 q-pa-sm">
        <label>Baños</label>
        <counter-avaluo />
      </div>
    </div>
    <div class="row">
      <div class="col-6 q-pa-sm">
        <label>Garajes</label>
        <counter-avaluo />
      </div>
      <div class="col-6 q-pa-sm">
        <label>Ascensores</label>
        <counter-avaluo />
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterAvaluo from '../FormComponents/CounterAvaluo.vue';
import { tipos, estratos, numerodepisos, numerodeniveles } from "../../../data/formData";
import { inject, ref } from "vue";

const tipo = ref()
const estrato = ref()
const area = ref()
const piso = ref()
const niveles = ref()
const habitaciones = ref()

console.log(tipo.value);

const { tipoinmueble, setTipoinmueble } = inject('settipoinmueble');



/* const //
        "label": "Putumayo",
        "value": "86"
},
{
        "label": "Putumayo",
        "value": "86"
}
] */

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
</style>
