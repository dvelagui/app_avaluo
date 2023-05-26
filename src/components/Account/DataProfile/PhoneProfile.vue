<template>
  <label>Telefono Contacto</label>
  <q-input standout readonly outlined :label="useDataBase.documents?.phone">
    <template v-slot:after>
      <q-inner-loading v-if="useDataBase.loadingUser ? visible = true : visible = false" :showing="visible"
        label-class="text-teal" label-style="font-size: 0.8em" />
      <div class="cursor-pointer">
        <q-icon name="mdi-pencil" />
        <q-popup-edit v-model="phone" :validate="val => val.length > 9" v-slot="scope">
          <q-input type="tel" autofocus dense v-model="scope.value" :model-value="scope.value" hint="Telefono de Contacto"
            :rules="[
              val => scope.validate(val) || 'Por favor ingrese celular valido'
            ]">
            <template v-slot:after>
              <q-btn flat dense color="negative" icon="cancel" @click.stop.prevent="scope.cancel" />

              <q-btn flat dense color="positive" icon="check_circle" @click.stop.prevent="scope.set"
                :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value" />
            </template>
          </q-input>
        </q-popup-edit>
      </div>
    </template>
  </q-input>
</template>

<script setup>
import { userDatabaseStore } from 'src/stores/database';
import { ref, watch } from 'vue';

const useDataBase = userDatabaseStore();
const phone = ref("");

watch(phone, () => {
  useDataBase.UpdateUserData(useDataBase.documents?.phone, phone.value)
})

</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

label {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #6B7082;
  padding: 12px 0;
}
</style>