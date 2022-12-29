<template>
  <div>
    <ToolBar />
    <v-container class="base_1 full-page">
      <v-row no-gutters>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pb-10 pt-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          <v-row class="mt-15 ml-3 mr-3">
            U komt nu in uw persoonlijke omgeving. Om in te loggen vragen wij u
            om uw e-mailadres in te vullen.
          </v-row>
          <v-row no-gutters class="ma-15">
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validated, handleSubmit }"
              >
                <v-form ref="form">
                  <InputValidation
                    rules="required|email"
                    v-model.trim="email"
                    label="email"
                    @keyup="lowercase"
                  />

                  <div class="text-end mr-15">
                    <v-btn
                      v-if="!error"
                      elevation="15"
                      class="primary"
                      @click="handleSubmit(login)"
                      :disabled="invalid || !validated"
                    >
                      Verder</v-btn
                    >
                    <v-btn
                      v-if="error"
                      elevation="15"
                      class="error"
                      @click="clean"
                    >
                      Opnieuw</v-btn
                    >
                  </div>
                </v-form>
              </ValidationObserver>
              <FlashMessage :error="error" v-if="error" key="error" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/toolbar/ToolBar.vue";
import { getError } from "@/plugins/helpers";
import { mapGetters } from "vuex";
export default {
  name: "EmailPage",
  components: { ToolBar },
  data() {
    return {
      error: null,
      valid: false,
      theme: null,
      email: null,
      emailRules: [
        (v) => !!v || "E-mail is verplicht",
        // eslint-disable-next-line no-useless-escape
        (v) =>
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
            v
          ) || "Dit lijkt geen goed email adres",
      ],
    };
  },
  methods: {
    lowercase() {
      this.email = this.email.toLowerCase();
    },
    clean() {
      this.email = "";
      this.error = false;
    },
    async login() {
      let data = {
        email: this.email,
      };
      this.error = null;
      try {
        await this.$store.dispatch("auth/loginA", data);
        if (this.stepOne) {
          this.$store.commit("auth/SET_EMAIL", this.email);
          this.$vuetify.goTo(0);
          this.$router.push({ name: "login-code" });
        } else {
          console.log("error");
          const error = Error("Dit email adres lijkt niet geheel te kloppen");
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["stepOne"]),
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
