<template>
     <section class="row justify-center items-center q-my-xl q-py-md shadow-1">
        <div class="col">
            <p>Correo Electronico: </p>
        </div>
        <div class="col">
            <p>{{ userStore.userData?.email }}</p>
        </div>
        <div class="col"></div>
    </section>
</template>

<script setup>
import { useUserStore } from 'src/stores/users';

const userStore = useUserStore();

</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>