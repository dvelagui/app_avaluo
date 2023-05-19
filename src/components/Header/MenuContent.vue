<template>
    <q-tabs class="tabs" v-if="!userStore.userData">
    </q-tabs>
    <q-btn round dense flat color="grey-8" icon="notifications" v-if="userStore.userData">
        <q-badge color="red" text-color="white" floating>
            2
        </q-badge>
        <q-tooltip>Notificaciones</q-tooltip>
    </q-btn>
    <q-btn round flat v-if="userStore.userData">
        <q-avatar size="26px">
            <AvatarImage />
        </q-avatar>
        <q-tooltip>Cuenta</q-tooltip>
    </q-btn>
    <q-btn class="btn-access" label="Regresar" href="https://www.avaluoenlinea.com/" v-if="!userStore.userData" />
    <q-btn label="Salir" color="primary" @click="logOut" v-if="userStore.userData" />
</template>

<script setup>
import AvatarImage from '../Account/Avatar/AvatarImage.vue';
import { useUserStore } from 'src/stores/users';
import { useRouter } from 'vue-router';
import { ref } from "vue";
const userStore = useUserStore();
const router = useRouter();
const userDataActive = ref(userStore.userData)

const logOut = () => {
    userStore.logOutSesion();
    router.push('/inicio-sesion');
}

</script>

<style lang="scss" scoped>
.tabs {
    align-items: center;
}
</style>