<template>
    <div class="row items-center justify-center counter">
        <p class="col-2 btn" type="button" @click="handleMinus">-</p>
        <p class="col-8 count">{{ count }}</p>
        <p class="col-2 btn" type="button" @click="handlePlus">+</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const count = ref(0)

const handlePlus = () => {
    count.value++;
}
const handleMinus = () => {
    if (count.value === 0) {
        return
    }
    count.value--;
}
</script>
<style lang="scss" scoped>
.btn {
    font-size: 25px;
    font-weight: 800;
    color: #A6AEC2;
    cursor: pointer;
    margin: 0;
    text-align: center;
}

.btn:hover {
    color: $primary;
}

.count {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #282A33;
    text-align: center;
    margin: 0;
}

.counter {
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    padding: 9px;
}
</style>
