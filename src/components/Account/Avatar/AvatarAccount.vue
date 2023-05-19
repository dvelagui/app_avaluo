<template>
    <q-card class="my-card">
        <q-img src="https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/user-default%2Fcover.png?alt=media&token=4d122d6b-30ca-42a1-acb7-9f010459b17b">
            <div class="absolute-bottom">
                <q-item-section avatar>
                <AvatarImage /> 
                    <AvatarName />
                </q-item-section>
            </div>
        </q-img>


    </q-card>
</template>

<script setup>
import AvatarImage from '../Avatar/AvatarImage.vue';
import AvatarName from '../Avatar/AvatarName.vue';

</script>

<style lang="scss" scoped>

</style>