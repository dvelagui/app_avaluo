<template>
    <div class="container">
        <h2 class="q-mb-xl">Datos Personales</h2>
        <div class="row">
            <div class="col-12 col-md-6 q-pa-sm">
                <label>Nombre completo</label>
                <q-input outlined v-model="address5" label="" />
            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <label>Email</label>
                <q-input outlined v-model="address5" label="" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 q-pa-sm">
                <label>Celular</label>
                <q-input outlined v-model="address5" label="" />
            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <label>¿Que quieres hacer con este inmueble?</label>
                <q-select outlined v-model="selectedCity" @update:model-value="getAddress" :options="cities"
                    label="Selecciona..." />
            </div>
        </div>
        <h2 class="q-my-xl">¿Para que necesitas este avalúo?</h2>
        <div class="row">
            <div class="col-12 col-md-6 q-pa-sm">
                <checkbox-avaluo check-label="Solo por información" />
            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <checkbox-avaluo check-label="Estoy vendiendo mi inmueble" />
            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <checkbox-avaluo check-label="Estoy comprando un inmueble" />
            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <checkbox-avaluo check-label="Estoy buscando un inquilino" />
            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <checkbox-avaluo check-label="Estoy buscando para arrendar" />
            </div>



        </div>
    </div>
</template>
  
<script setup>
import CheckboxAvaluo from '../FormComponents/CheckboxAvaluo.vue';
import CounterAvaluo from '../FormComponents/CounterAvaluo.vue';


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