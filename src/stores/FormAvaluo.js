import { defineStore } from "pinia";

export const userFormAvaluoStore = defineStore("formavaluo", {
  state: () => ({
    documents: {
      entrada: "formulario",
      test: false,
      habitaciones: 0,
      banos: 0,
      garajes: 0,
      numeroascensor: 0,
    },
    loadingUser: false,
  }),
  actions: {
    stepOne(direccion, direccionFormato, dpto, mpio, lat, long) {
      this.documents.direccion = direccion;
      this.documents.direccion_formato = direccionFormato;
      this.documents.dpto_ccdgo = dpto;
      this.documents.mpio_ccdgo = mpio;
      this.documents.latitud = lat;
      this.documents.longitud = long;
      console.log(this.documents);
    },
    stepTwo(tipoinmueble, area, estrato, numerodepiso, numerodeniveles) {
      this.documents.tipoinmueble = tipoinmueble;
      this.documents.area = area;
      this.documents.estrato = estrato;
      this.documents.numerodepiso = numerodepiso;
      console.log(this.documents);
    },
    setHab(habitaciones) {
      this.documents.habitaciones = habitaciones;
    },
    setBanos(banos) {
      this.documents.banos = banos;
    },
    setGarajes(garajes) {
      this.documents.garajes = garajes;
    },
    setAscensor(ascensor) {
      this.documents.numeroascensor = ascensor;
    },
    stepFinal(name, email, phone, action, checkbox) {
      this.documents.name = name;
      this.documents.email = email;
      this.documents.phone = phone;
      this.documents.action = action;
      this.documents.checkbox = checkbox;
      console.log(this.documents);
    },
  },
});
/*
const direccion = ref()
const direccion_formato = ref()
const dpto_ccdgo = ref()
const mpio_ccdgo = ref()
const latitud = ref()
const longitud = ref()
const tipoinmueble = ref()
const numerodepiso = ref()
const garajes = ref()
const estrato = ref()
const habitaciones = ref()
const banos = ref()
const area = ref()
const tiempodeconstruido = ref()
const halldealcobasoestar = ref()
const conjuntocerrado = ref()
const balcon = ref()
const numeroascensore = ref()
const saloncomunal = ref()
const zonadelavanderia = ref()
const estudioobiblioteca = ref()
const cuartodeservicio = ref()
const numerodeniveles = ref()
const terraza = ref()
const areaterraza = ref()
const vista = ref()
const depositoocuartoutil = ref()
const remodelado = ref()
const clubhouse = ref()
const porteria = ref()
 */
