<template>
    <section class="row justify-start items-center q-my-xl q-py-md shadow-1">
    <div class="col">
        <p>Telefono Contacto:</p>
    </div>
    <div class="col">
        <p>{{ useDataBase.documents?.phone }}</p>
        <q-inner-loading v-if="useDataBase.loadingUser ? visible = true : visible = false"  
        :showing="visible"
        label-class="text-teal"
        label-style="font-size: 0.8em"
      />
    </div>
    <div class="col">
        <div class="cursor-pointer">
            <q-icon name="mdi-pencil" />
            <q-popup-edit v-model="phone" :validate="val => val.length == 10" v-slot="scope">
                <q-input
                type="tel"
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Su Telefono de Contacto"
                :rules="[
                    val => scope.validate(val) || 'Por favor ingrese celular valido'
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
            >
            
      </q-btn>
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

const useDataBase = userDatabaseStore();
const phone = ref("");

watch(phone, () => {
    useDataBase.UpdateUserData(useDataBase.documents?.phone, phone.value)
} )

</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>