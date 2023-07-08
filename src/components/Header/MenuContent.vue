<template>
    <q-tabs class="tabs" v-if="!userStore.userData">
    </q-tabs>
    <q-btn class="d-flex align-center" round flat v-if="userStore.userData">
        <avatar-name class="q-px-md" />
        <q-avatar size="26px">
            <avatar-image />
        </q-avatar>
        <q-tooltip>Mi Cuenta</q-tooltip>
    </q-btn>
</template>

<script setup>
import AvatarImage from '../Account/Avatar/AvatarImage.vue';
import { useUserStore } from 'src/stores/users';
import { useRouter } from 'vue-router';
import { ref } from "vue";
import AvatarName from '../Account/Avatar/AvatarName.vue';
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