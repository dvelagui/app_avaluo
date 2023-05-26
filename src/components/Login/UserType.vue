<template>
    <div class="q-py-lg">
        <q-btn-toggle v-model="typeUser" @update:model-value="changeType" :options="[
            { label: 'Personas', value: 'personas' },
            { label: 'Empresas', value: 'empresas' }
        ]" />
    </div>
</template>
  
<script setup>
import { useRoute } from 'vue-router';
import { ref, inject } from 'vue'

const route = useRoute()
const { userRegistered, changeUserRegistered } = inject('type');

route.matched[0].path
const typeUser = ref('personas')

const changeType = () => {
    changeUserRegistered(typeUser.value);
}

</script>
  