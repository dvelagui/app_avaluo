import { defineStore } from "pinia";

export const userFormAvaluoStore = defineStore("formavaluo", {
  state: () => ({
    documents: null,
    loadingUser: false,
  }),
  actions: {
    stepOne(direccion, direccionFormato, dpto, mpio, lat, long) {
      this.documents.entrada = "formulario";
      this.documents.test = false;
      this.documents.direccion = direccion;
      this.documents.direccion_formato = direccionFormato;
      this.documents.dpto_ccdgo = dpto;
      this.documents.mpio_ccdgo = mpio;
      this.documents.latitud = lat;
      this.documents.longitud = long;
      console.log(this.documents);
    },
  },
});
