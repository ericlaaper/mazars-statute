<template>
  <v-container class="base_1 mt-16 pt-16 full-page">
    <v-row no-gutters>
      <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-row no-gutters class="justify-center align-center">
          <v-col cols="12" md="6" class="mt-2">
            <v-row no-gutters>
              <v-img
                :src="require(`@/assets/logo_wit.svg`)"
                contain
                max-height="200px"
              />
            </v-row>
            <v-row no-gutters class="justify-center align-center mt-6">
              <h4 class="stone_1--text">Welkom bij Trusted Accountant</h4>
            </v-row>
            <v-row class="justify-center mt-10">
              <h5 class="stone_1--text">
                Liever een ander kleurschema klik op de knop
              </h5></v-row
            >
            <v-row class="justify-center mt-10">
              <div class="text-center">
                <v-btn class="primary mb-10" @click="toggle_dark_mode">
                  <v-icon left>mdi-theme-light-dark</v-icon>
                  <span>Donker/Licht</span>
                </v-btn>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="mt-2">
            <v-row class="ml-15 mt-15 mr-15 stone_1--text">
              In uw email uitnodiging treft u een familiecode aan. Met deze code
              krijgt u toegang. <br />
              Controleer eventueel uw spambox.
            </v-row>
            <v-row class="ml-15 mt-15 mr-15">
              <v-text-field
                outlined
                shaped
                placeholder="Familiecode"
                v-model="familyCode"
                required
              />
            </v-row>
            <v-row class="ml-15 mt-15 mr-15">
              <FlashMessage :error="error" v-if="error" key="error" />
            </v-row>
            <div class="text-end mt-5 mr-15 mb-15">
              <v-btn
                elevation="15"
                class="primary"
                v-if="errorBtn"
                @click="login"
                >nogmaals</v-btn
              >
              <v-btn
                elevation="15"
                class="primary"
                v-if="!errorBtn"
                @click="login"
                >Verder</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getError } from "@/plugins/helpers";
import { mapGetters } from "vuex";
export default {
  name: "FamilyCode",
  data() {
    return {
      error: null,
      familyCode: null,
      valid: false,
      errorBtn: false,
    };
  },
  methods: {
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async login() {
      let data = {
        token: this.familyCode,
      };
      this.error = null;
      try {
        await this.$store.dispatch("auth/loginFam", data);
        if (this.stepFamily) {
          this.$vuetify.goTo(0);
          this.$router.push({ name: "intro-page" });
        } else {
          console.log("error");
          this.errorBtn = true;
          const error = Error(
            "Deze familiecode is onjuist of verlopen, probeer het a.u.b opnieuw. Mocht u problemen blijven ondervinden dan verzoeken we contact met ons op te nemen."
          );
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["stepFamily"]),
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
