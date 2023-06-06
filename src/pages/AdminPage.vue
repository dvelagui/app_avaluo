<template>
    <div class="q-pa-xl column items-start justify-start">
        <h4 class="title text-center">Administración</h4>
    </div>
    <div class="q-pa-md items-center justify-center">
        <div class="q-gutter-y-md">
            <q-card>
                <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
                    align="justify" narrow-indicator>
                    <q-tab name="usuarios" label="Gestionar usuarios" />
                    <q-tab name="facturacion" label="Facturación" />
                    <q-tab name="suscripcion" label="Suscripción" />
                    <q-tab name="personalizacion" label="Personalización" />
                    <q-tab name="estadisticas" label="Estadísticas de uso" />
                </q-tabs>

                <q-separator />
                <q-separator />
                <q-separator />

                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="usuarios">
                        <UsuariosAdmin />
                    </q-tab-panel>

                    <q-tab-panel name="facturacion">
                        <SuscripcionAdmin />
                    </q-tab-panel>

                    <q-tab-panel name="suscripcion">
                        <SuscripcionAdmin />

                    </q-tab-panel>
                    <q-tab-panel name="personalizacion">
                        <div class="text-h6">Personalización</div>
                        Contenido
                    </q-tab-panel>
                    <q-tab-panel name="estadisticas">
                        <div class="text-h6">Estadisticas</div>
                        Contenido
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>


        </div>
    </div>
</template>
  
<script setup>
import SuscripcionAdmin from 'src/components/Admin/SuscripcionAdmin.vue';
import UsuariosAdmin from 'src/components/Admin/UsuariosAdmin.vue';
import { ref } from 'vue'

const tab = ref('usuarios')

</script>
<style lang="scss" scoped>
.title {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #282A33;
}

.q-tab {
    text-transform: none;
}

.q-card {
    width: 100%;
}
</style>
  