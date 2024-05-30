import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Button from "@/components/Button.vue";

createApp(App).component("Button", Button).mount("#app");
