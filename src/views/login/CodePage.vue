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
            U ontvangt een e-mailbericht met een zescijferige code. Deze vult
            hieronder in. <br />
            Controleer eventueel uw spambox.
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
                    rules="required"
                    v-model.trim="password"
                    label="CODE"
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
                  </div>
                </v-form>
              </ValidationObserver>
              <FlashMessage :error="error" v-if="error" key="error" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <div class="text-end mt-5 mr-15 mb-15">
                <v-btn class="mr-8" v-if="errorBtn" @click="startOver"
                  >nw code</v-btn
                >
                <v-btn
                  elevation="15"
                  class="primary"
                  v-if="errorBtn"
                  @click="login"
                  >nogmaals</v-btn
                >
              </div>
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
      password: null,
      errorBtn: false,
    };
  },
  methods: {
    startOver() {
      this.$router.push({ name: "login-email" });
    },

    async login() {
      let data = {
        email: this.email,
        token: this.password,
      };
      this.error = null;
      try {
        await this.$store.dispatch("auth/loginB", data);
        if (this.stepTwo) {
          localStorage.setItem("email", this.email);
          this.$vuetify.goTo(0);
          this.$router.push({ name: "modules" });
        } else {
          console.log("error");
          this.errorBtn = true;
          const error = Error(
            "Dit wachtwoord is onjuist of verlopen, probeer het opnieuw of begin opnieuw U krijgt dan een een nieuw wachtwoord toegezonden."
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
    ...mapGetters("auth", ["stepTwo", "email"]),
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
