<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="container">
    <h2>Caracteristicas del Inmueble</h2>

    <!--   <div class="row items-center justify-center q-mt-xl">
      <div class="col-4 q-pa-sm text-center">
        <label for="">Balcón</label>
        <div class="row justify-center items-center">
          <div class="col-6 col-md-6">
            <q-radio v-model="balcon" val="Si" label="Si" />
            <q-radio v-model="balcon" val="No" label="No" />
          </div>
        </div>
      </div>
      <div class="col-4 q-pa-sm text-center">
        <label for="">Baño de servicio</label>
        <div class="row justify-center items-center">
          <div class="col-6 col-md-6">
            <q-radio v-model="banoservicio" val="Si" label="Si" />
            <q-radio v-model="banoservicio" val="No" label="No" />
          </div>
        </div>
      </div>
      <div class="col-4 q-pa-sm text-center">
        <label for="">Club house</label>
        <div class="row justify-center items-center">
          <div class="col-6 col-md-6">
            <q-radio v-model="club" val="Si" label="Si" />
            <q-radio v-model="club" val="No" label="No" />
          </div>
        </div>
      </div>
    </div>
    <div class="row items-center justify-center q-mt-md">
      <div class="col-4 q-pa-sm text-center">
        <label for="">Conjunto Cerrado</label>
        <div class="row justify-center items-center">
          <div class="col-6 col-md-6">
            <q-radio v-model="conjunto" val="Si" label="Si" />
            <q-radio v-model="conjunto" val="No" label="No" />
          </div>
        </div>
      </div>
      <div class="col-4 q-pa-sm text-center">
        <label for="">Cuarto de Servicio</label>
        <div class="row justify-center items-center">
          <div class="col-6 col-md-6">
            <q-radio v-model="cuartoservicio" val="Si" label="Si" />
            <q-radio v-model="cuartoservicio" val="No" label="No" />
          </div>
        </div>
      </div>
      <div class="col-4 q-pa-sm text-center">
        <label for="">Depósito</label>
        <div class="row justify-center items-center">
          <div class="col-6 col-md-6">
            <q-radio v-model="deposito" val="Si" label="Si" />
            <q-radio v-model="deposito" val="No" label="No" />
          </div>
        </div>
      </div>
    </div> -->
    <div class="row items-center justify-center q-mt-md">
      <div class="col-4 q-pa-sm text-center" v-for="extra in extras" :key="extra.label">
        // eslint-disable-next-line vue/no-parsing-error
        <RadioAvaluo :labelName="extra.label" @checkvalue="extra.value = $event" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Tiempo de construido</label>
        <q-select outlined v-model="construido" :options="tiempoconstruido" label="Selecciona..." />
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
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

const variables = [balcon, banoservicio, club, conjunto, cuartoservicio]


//variables.indexOf(extra.value)


console.log(variables.balcon = 'si');



watch(club, () => {
  console.log(club.value);
})

//defineExpose({ updateStepTwo })

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
