import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// solid
import {
	faXmark,
	faPlus,
	faRotateRight,
	faChartSimple,
	faTruck,
	faScrewdriverWrench,
	faMagnifyingGlass,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

library.add(faXmark);
library.add(faPlus);
library.add(faRotateRight);
library.add(faChartSimple);
library.add(faTruck);
library.add(faScrewdriverWrench);
library.add(faMagnifyingGlass);

//regular
import {
	faXmarkCircle,
	faClipboard,
} from "@fortawesome/free-regular-svg-icons";
library.add(faXmarkCircle);
library.add(faClipboard);
library.add(faPencil)

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
