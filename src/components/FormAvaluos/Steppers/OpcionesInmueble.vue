<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="container">
    <h2>Caracteristicas del Inmueble</h2>
    <div class="row items-center justify-center q-mt-md">
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Balcón" @checkvalue="balcon = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Baño de servicio" @checkvalue="banoservicio = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Club house" @checkvalue="club = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Conjunto Cerrado" @checkvalue="conjunto = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Cuarto de Servicio" @checkvalue="cuartoservicio = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Depósito" @checkvalue="deposito = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Estudio" @checkvalue="estudio = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Garajes independientes" @checkvalue="garajesindependientes = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Hall de alcobas o estar" @checkvalue="hallalcobas = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Parqueadero de visitantes" @checkvalue="parqueaderovisitantes = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Portería" @checkvalue="porteria = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Remodelado" @checkvalue="remodelado = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Terraza, patio o jardín interno" @checkvalue="terrazapatiojardin = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Salón comunal" @checkvalue="saloncomunal = $event" />
      </div>
      <div class="col-4 q-pa-md qborder text-center">
        <RadioAvaluo labelName="Zona de lavandería" @checkvalue="lavanderia = $event" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-xl">
        <label>Tiempo de construido</label>
        <q-select outlined v-model="construido" :options="tiempoconstruido" label="Selecciona..." />
      </div>
      <div class="col-12 col-md-6 q-pa-xl">
        <label>Tipo de vista</label>
        <q-select outlined v-model="vista" :options="tipovista" label="Selecciona..." />
      </div>
    </div>
  </div>
</template>

<script setup>
import RadioAvaluo from '../FormComponents/RadioAvaluo.vue';
import { userFormAvaluoStore } from "../../../stores/FormAvaluo";
import { tiempoconstruido, tipovista, extras } from "../../../data/formData";
import { ref, watch } from "vue";

const useFormAvaluo = userFormAvaluoStore()
const construido = ref();
const vista = ref();
const balcon = ref('No');
const banoservicio = ref('No');
const club = ref('si');
const conjunto = ref('No');
const cuartoservicio = ref('No');
const deposito = ref('No');
const estudio = ref('No');
const garajesindependientes = ref('No');
const hallalcobas = ref('No');
const parqueaderovisitantes = ref('No');
const porteria = ref('No');
const remodelado = ref('No');
const terrazapatiojardin = ref('No');
const saloncomunal = ref('No');
const lavanderia = ref('No');

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
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #080808;
}

.qborder {
  border-bottom: 2px solid #6b708230;
}
</style>
