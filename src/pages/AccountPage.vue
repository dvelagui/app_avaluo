<template>
    <div class="row justify-center text-center bg-white">
        <q-splitter class="col-12 col-md-8 shadow-16 q-mt-xl" v-model="splitterModel" style="height: auto;">

            <template v-slot:before>
                <q-tabs v-model="tab" vertical class="text-left tabs-avaluo">
                    <q-tab name="profile" icon="mdi-account-circle" label="Perfil" />
                    <q-tab name="plan" icon="mdi-all-inclusive" label="Planes" />
                    <q-tab name="invoices" icon="mdi-badge-account-horizontal" label="Facturación" />
                </q-tabs>
            </template>
            <AccountPanel />
        </q-splitter>
    </div>
</template>
  
<script setup>
import AccountPanel from 'src/components/Account/AccountPanel.vue';
import { provide, ref } from 'vue';

const tab = ref('profile');
const splitterModel = ref(30);

provide('tab', tab);
</script>

<style lang="scss" scoped>
.tabs-avaluo {
    color: $primary;
}
</style>
  