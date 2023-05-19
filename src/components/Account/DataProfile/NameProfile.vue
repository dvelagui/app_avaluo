<template>
    <section class="row justify-start items-center q-my-xl q-py-md shadow-1">
    <div class="col">
        <p>Nombre de Usuario:</p>
    </div>
    <div class="col">
        <p>{{ useDataBase.documents?.nickname }}</p>
    </div>
    <div class="col">
        <div class="cursor-pointer">
            <q-icon name="mdi-pencil" />
            <q-popup-edit v-model="nickname" :validate="val => val.length > 5" v-slot="scope">
                <q-input
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Su Nombre de Usuario"
                :rules="[
                    val => scope.validate(val) || 'Por favor usar más de 5 caracteres'
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

const nickname = ref("");
const useDataBase = userDatabaseStore();


watch(nickname, () => {
    useDataBase.UpdateUserData(useDataBase.documents?.nickname, nickname.value)
} )

</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>