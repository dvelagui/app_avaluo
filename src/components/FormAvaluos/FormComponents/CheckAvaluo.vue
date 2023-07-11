<template>
  <div class="row">
    <div class="col-12 col-md-6 q-pa-sm">
      <div class="row items-center justify-start checkbox-items">
        <q-radio v-model="check" val="Solo por información" label="Solo por información" />
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <div class="row items-center justify-start checkbox-items">
        <q-radio v-model="check" val="Estoy vendiendo mi inmueble" label="Estoy vendiendo mi inmueble" />
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <div class="row items-center justify-start checkbox-items">
        <q-radio v-model="check" val="Estoy comprando un inmueble" label="Estoy comprando un inmueble" />
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <div class="row items-center justify-start checkbox-items">
        <q-radio v-model="check" val="Estoy buscando un inquilino" label="Estoy buscando un inquilino" />
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <div class="row items-center justify-start checkbox-items">
        <q-radio v-model="check" val="Estoy buscando para arrendar" label="Estoy buscando para arrendar" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
const check = ref('informacion');
const { checkbox, setCheck } = inject('setCheck')

watch(check, () => {
  setCheck(check.value)
})

</script>

<style lang="scss" scoped>
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

.checkbox-items {
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 9px;
}

.checkbox-items.selected {
  border: 1px solid $primary;
}

div.q-checkbox__label.q-anchor--skip {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #282A33;
}
</style>
