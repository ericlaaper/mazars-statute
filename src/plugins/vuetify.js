import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  treeshake: true,
  options: {
    customProperties: true,
  },
  theme: {
    dark: false,
    themes: {
      light: {
        background: "#f5f5f5",
        base: "#E5E7EB",
        base_1: "#f3f4f6",
        base_2: "#9CA3AF",
        primary: "#003895",
        secondary: "#5CBBF6",
        accent: "#003895",
        stone: "#4b5563",
        stone_1: "#6b7280",
        stone_2: "#1E293B",
        error: "#d22630",
        info: "#FF0048",
        success: "#003895",
        textColor: "#000000",
      },
      dark: {
        background: "#1867C0",
        base: "#1E293B",
        base_1: "#293548",
        base_2: "#2C4257",
        primary: "#93c5fd",
        secondary: "#5CBBF6",
        accent: "#C3DDFD",
        stone: "#4b5563",
        stone_1: "#9ca3af",
        stone_2: "#E5E7EB",
        error: "#d22630",
        info: "#FF0048",
        success: "#003895",
        textColor: "#ffffff",
      },
    },
  },
});
