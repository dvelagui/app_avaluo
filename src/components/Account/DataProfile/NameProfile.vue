<template>
  <label>Nombre completo</label>
  <q-input standout readonly outlined :label="useDataBase.documents?.nickname">
    <template v-slot:after>
      <div class="cursor-pointer">
        <q-icon name="mdi-pencil" />
        <q-popup-edit v-model="nickname" :validate="val => val.length > 5" v-slot="scope">
          <q-input autofocus dense v-model="scope.value" :model-value="scope.value" hint="Su Nombre de Usuario" :rules="[
            val => scope.validate(val) || 'Por favor usar más de 5 caracteres'
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

const nickname = ref("");
const useDataBase = userDatabaseStore();


watch(nickname, () => {
  useDataBase.UpdateUserData(useDataBase.documents?.nickname, nickname.value)
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