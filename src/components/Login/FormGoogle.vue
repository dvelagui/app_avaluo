<template>
    <q-btn outline class="q-my-sm" icon="mdi-gmail" color="info" :label="`${btnGoogle} con Google`" @click="accessGoogle" />
</template>

<script setup>
import { useUserStore } from 'src/stores/users';
import { userDatabaseStore } from "../../stores/database"
import { toRefs, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { QSpinnerPuff, useQuasar } from 'quasar'
const $q = useQuasar();

const userStore = useUserStore();
const useDataBase = userDatabaseStore();
const router = useRouter();
const route = useRoute();
const usertype = ref('');

const defineUSer = () => {
    usertype.value = route.matched[0].path.split('/')[1]
}

const props = defineProps({
    btnGoogle: String
});

const { btnGoogle } = toRefs(props);
const redirectPath = ref(route.query.redirect || '/')

const accessGoogle = async () => {
    if (!userStore.loadingUser) {
        defineUSer();
        $q.loading.show(
            {
                spinner: QSpinnerPuff,
                spinnerColor: 'primary',
                spinnerSize: 250,
                backgroundColor: 'black',
                message: 'Estas Ingresando a un mundo increible',
                messageColor: 'white'
            }
        )
        await userStore.registerGoogle(usertype.value);
        router.push(useDataBase.documents.typeUser + redirectPath.value)
        $q.loading.hide()
    }
}

</script>

<style lang="scss" scoped>
.q-btn {
    text-transform: uppercase;
    width: 100%;
    max-width: 300px;
    min-width: 300px;
}
</style>