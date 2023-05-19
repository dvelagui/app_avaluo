<template>
    <section class="row justify-start items-center q-my-xl q-py-md shadow-1">
    <div class="col">
        <p>Direccion del Negocio:</p>
    </div>
    <div class="col">
        <p>{{ useDataBase.documents?.address }}</p>
    </div>
    <div class="col">
        <div class="cursor-pointer">
            <q-icon name="mdi-pencil" />
            <q-popup-edit v-model="address" :validate="val => val.length > 3" v-slot="scope">
                <q-input
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Dirección de la ubicación de su negocio principal"
                :rules="[
                    val => scope.validate(val) || 'Por favor ingresa una dirección valida'
                ]"
        >
        <template v-slot:after>
            <q-btn
              flat dense color="negative" icon="cancel"
              @click.stop.prevent="scope.cancel"
            />

            <q-btn
              flat dense color="positive" icon="check_circle"
              @click.stop.prevent="scope.set"
              :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"
            />
          </template>
        </q-input>
      </q-popup-edit>
    </div>
  </div>
</section>
</template>

<script setup>
import { userDatabaseStore } from 'src/stores/database';
import { ref, watch } from 'vue';

const address = ref("");
const useDataBase = userDatabaseStore();

watch(address, () => {
    useDataBase.UpdateUserData(useDataBase.documents?.address, address.value)
} )

</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>