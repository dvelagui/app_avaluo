<template>
    <div class="q-pa-md container">
        <h2>Caracteristicas del Inmueble</h2>
        <div class="row">
            <div class="col-6 q-pa-sm">
                <label>Tipo de inmueble</label>
                <q-select outlined v-model="tipo" @update:model-value="getCities" :options="tipos" label="Selecciona..." />
            </div>
        </div>
        <div class="row">
            <div class="col-6 q-pa-sm">
                <label>Área construida:</label>
                <q-select outlined v-model="selectedDepartment" @update:model-value="getCities" :options="departaments"
                    label="Selecciona..." />
            </div>
            <div class="col-6 q-pa-sm">
                <label>Estrato</label>
                <q-select outlined v-model="selectedCity" @update:model-value="getAddress" :options="cities"
                    label="Selecciona..." />
            </div>
        </div>
        <div class="row">
            <div class="col-6 q-pa-sm">
                <label>¿En qué piso se ubica?</label>
                <q-select outlined v-model="selectedDepartment" @update:model-value="getCities" :options="departaments"
                    label="Selecciona..." />
            </div>
            <div class="col-6 q-pa-sm">
                <label>¿Cuántos niveles tiene?</label>
                <q-select outlined v-model="selectedCity" @update:model-value="getAddress" :options="cities"
                    label="Selecciona..." />
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