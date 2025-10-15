import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages,
});

createApp(App).use(i18n).use(router).mount("#app");
