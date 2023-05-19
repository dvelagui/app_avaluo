<template>
    <div class="row items-center justify-start checkbox-items" :class="check ? 'selected' : ''">
        <q-checkbox v-model="check" :label="checkLabel" />
    </div>
</template>
<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
    checkLabel: String,
});

const { checkLabel } = toRefs(props);

console.log(checkLabel);


const check = ref(false)

console.log(check.value);
</script>
<style lang="scss" scoped>
.checkbox-items {
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    padding: 9px;
}

.checkbox-items.selected {
    border: 1px solid $primary;
}

div.q-checkbox__label.q-anchor--skip {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #282A33;
}
</style>
