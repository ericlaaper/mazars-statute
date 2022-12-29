import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./vee-validate";
import vuetify from "./plugins/vuetify";
import vueVimeoPlayer from "vue-vimeo-player";
Vue.use(vueVimeoPlayer);
window.EventBus = new Vue();
Vue.config.productionTip = false;

import { ValidationObserver } from "vee-validate";
Vue.component("ValidationObserver", ValidationObserver);
import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
import ToolBarAuth from "@/components/toolbar/ToolBarAuth.vue";
Vue.component("ToolbarAuth", ToolBarAuth);
import ModuleHeader from "@/components/modules/ModuleHeader.vue";
Vue.component("ModuleHeader", ModuleHeader);
import ErrorMessage from "@/components/form/ErrorMessage.vue";
Vue.component("ErrorMessage", ErrorMessage);
import ButtonContinue from "@/components/buttons/ButtonContinue.vue";
Vue.component("ButtonContinue", ButtonContinue);
import ButtonBack from "@/components/buttons/ButtonBack.vue";
Vue.component("ButtonBack", ButtonBack);
import ButtonStop from "@/components/buttons/ButtonStop.vue";
Vue.component("ButtonStop", ButtonStop);
import ButtonBackStart from "@/components/buttons/ButtonBackStart.vue";
Vue.component("ButtonBackStart", ButtonBackStart);
import ButtonReport from "@/components/buttons/ButtonReport.vue";
Vue.component("ButtonReport", ButtonReport);
import StatementText from "@/components/text/StatementText.vue";
Vue.component("StatementText", StatementText);
import RadioRegular from "@/components/form/RadioRegular.vue";
Vue.component("RadioRegular", RadioRegular);
import RadioJN from "@/components/form/RadioJN.vue";
Vue.component("RadioJN", RadioJN);
import RadioThumb from "@/components/form/RadioThumb.vue";
Vue.component("RadioThumb", RadioThumb);
import RadioGrade from "@/components/form/RadioGrade.vue";
Vue.component("RadioGrade", RadioGrade);
import FlashMessage from "@/components/FlashMessage.vue";
Vue.component("FlashMessage", FlashMessage);
import InputValidation from "@/components/form/InputValidation.vue";
Vue.component("InputValidation", InputValidation);
import RadioEO from "@/components/form/RadioEO.vue";
Vue.component("RadioEO", RadioEO);
import AreaValidation from "@/components/form/AreaValidation.vue";
Vue.component("AreaValidation", AreaValidation);
import EndElement from "@/components/elements/EndElement.vue";
Vue.component("EndElement", EndElement);
import LoadingElement from "@/components/elements/LoadingElement.vue";
Vue.component("LoadingElement", LoadingElement);
import LogoutModalElement from "@/components/elements/LogoutModalElement.vue";
Vue.component("LogoutModalElement", LogoutModalElement);
import ReportElement from "@/components/elements/ReportElement.vue";
Vue.component("ReportElement", ReportElement);
import SavingElement from "@/components/elements/SavingElement.vue";
Vue.component("SavingElement", SavingElement);
import StopElement from "@/components/elements/StopElement.vue";
Vue.component("StopElement", StopElement);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
