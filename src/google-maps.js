import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDE3YLDQ6nKhdoWiykBIpJP3xZRr4j19Ak",
    },
  })
  .mount("#maps");
