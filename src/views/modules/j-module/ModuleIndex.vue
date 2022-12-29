<template>
  <div>
    <ToolbarAuth />
    <v-container class="base_1">
      <v-row no-gutters>
        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <ModuleHeader
            v-if="moduleData.step === 0"
            :text="sectionData.sectionStart"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 1"
            :text="sectionData.sectionA"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 2"
            :text="sectionData.sectionB"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 3"
            :text="sectionData.sectionC"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 4"
            :text="sectionData.sectionEinde"
          />
        </v-col>
        <v-col
          cols="12"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
          class="pt-15"
        >
          <v-card rounded color="base_1 full-page" elevation="6">
            <ValidationObserver
              ref="obs"
              v-slot="{ handleSubmit, invalid, validated }"
            >
              <v-form @submit.prevent="onSubmit">
                <StepComponentStart
                  v-if="moduleData.step === 0"
                  :vimeo="vimeo"
                />
                <StepComponentA
                  v-else-if="moduleData.step === 1"
                  :statText="stats"
                />
                <StepComponentB
                  v-else-if="moduleData.step === 2"
                  :statText="stats"
                />
                <StepComponentC
                  v-else-if="moduleData.step === 3"
                  :statText="stats"
                />
                <div class="pt-15" v-else-if="moduleData.step === 4">
                  <ButtonReport @onClick="getReport" />
                  <EndElement v-if="activateEnd" />
                </div>
                <v-row class="mt-10 justify-center">
                  <ErrorMessage v-if="invalid && validated" />
                </v-row>
                <v-row class="mt-5">
                  <ButtonStop :on-click="stopThis" />
                  <v-spacer />
                  <ButtonBackStart
                    :on-click="backStart"
                    v-if="moduleData.step === totalSteps"
                  />
                  <ButtonBack :on-click="stepBack" v-if="moduleData.step > 0" />
                  <ButtonContinue
                    @onClick="handleSubmit(onSubmit)"
                    v-if="moduleData.step < totalSteps"
                  />
                </v-row>
              </v-form>
            </ValidationObserver>
          </v-card>
        </v-col>
        <StopElement v-model="dialogStop" />
      </v-row>
    </v-container>
    <v-container class="base_1 full-page">
      <div class="mt-16 mb-16"></div>
    </v-container>
  </div>
</template>

<script>
import sectionData from "@/assets/modules/sectionJ.json";
import stats from "@/assets/modules/moduleJ.json";
import vimeo from "@/assets/vimeo/vimeo.json";
import StepComponentStart from "@/views/modules/j-module/StepComponentStart.vue";
import StepComponentA from "@/views/modules/j-module/StepComponentA.vue";
import StepComponentB from "@/views/modules/j-module/StepComponentB.vue";
import StepComponentC from "@/views/modules/j-module/StepComponentC.vue";
import { mapGetters } from "vuex";
import ReportService from "@/services/ReportService";
export default {
  name: "ModuleIndex",
  components: {
    StepComponentStart,
    StepComponentA,
    StepComponentB,
    StepComponentC,
  },
  data() {
    return {
      totalSteps: 4,
      activateEnd: false,
      disableBtn: false,
      stats: stats,
      sectionData: sectionData,
      vimeo: vimeo,
      dialogStop: false,
    };
  },
  methods: {
    async onSubmit() {
      await this.$vuetify.goTo(0);
      if (this.moduleData.step === 0) {
        await this.$store.commit("moduleJ/stepUpNr", 1);
      } else if (
        this.moduleData.step === 1 &&
        !this.visData.section_2 &&
        !this.visData.section_3
      ) {
        await this.$store.commit("moduleJ/update_ready_a", true);
        await this.$store.commit("moduleJ/stepUpNr", 3);
      } else if (this.moduleData.step === 1 && !this.visData.section_2) {
        await this.$store.commit("moduleJ/update_ready_a", true);
        await this.$store.commit("moduleJ/stepUpNr", 2);
      } else if (this.moduleData.step === 1) {
        await this.$store.commit("moduleJ/update_ready_a", true);
        await this.$store.commit("moduleJ/stepUpNr", 1);
      } else if (this.moduleData.step === 2 && !this.visData.section_3) {
        await this.$store.commit("moduleJ/update_ready_b", true);
        await this.$store.commit("moduleJ/stepUpNr", 2);
      } else if (this.moduleData.step === 2) {
        await this.$store.commit("moduleJ/update_ready_b", true);
        await this.$store.commit("moduleJ/stepUpNr", 1);
      } else if (this.moduleData.step === 3) {
        await this.$store.commit("moduleJ/update_ready_c", true);
        await this.$store.commit("moduleJ/stepUpNr", 1);
      }
      await this.$store.dispatch("moduleJ/setModulesData");
    },
    async stepBack() {
      await this.$vuetify.goTo(0);
      if (
        this.moduleData.step === 4 &&
        !this.visData.section_2 &&
        !this.visData.section_3
      ) {
        await this.$store.commit("moduleJ/stepDownNr", 3);
      } else if (this.moduleData.step === 4 && !this.visData.section_3) {
        await this.$store.commit("moduleJ/stepDownNr", 2);
      } else if (this.moduleData.step) {
        await this.$store.commit("moduleJ/stepDownNr", 1);
      } else if (this.moduleData.step === 3 && !this.visData.section_2) {
        await this.$store.commit("moduleJ/stepDownNr", 2);
      } else if (this.moduleData.step === 3) {
        await this.$store.commit("moduleJ/stepDownNr", 1);
      } else if (this.moduleData.step === 2 && !this.visData.section_1) {
        await this.$store.commit("moduleJ/stepDownNr", 2);
      } else if (this.moduleData.step === 1) {
        await this.$store.commit("moduleJ/stepDownNr", 1);
      }
    },
    stopThis() {
      this.dialogStop = true;
    },
    backStart() {
      this.$store.commit("moduleJ/update_step", 0);
    },
    getReport() {
      const payload = {
        email: this.email,
      };
      this.activateEnd = true;
      // eslint-disable-next-line no-undef
      EventBus.$emit("report", true);
      ReportService.getReportJ(payload)
        .then(() => {})
        .finally(() => {
          this.disableBtn = false;
        });
    },
  },
  computed: {
    ...mapGetters("auth", ["email"]),
    ...mapGetters("visJ", ["visData"]),
    ...mapGetters("moduleJ", ["moduleData"]),
  },
  async created() {
    const payload = {
      email: this.email,
    };

    await this.$store.dispatch("visJ/getVisData", payload);
    await this.$store.dispatch("moduleJ/getModulesData", payload);
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
