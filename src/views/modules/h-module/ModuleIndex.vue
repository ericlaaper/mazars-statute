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
            :text="sectionData.sectionD"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 5"
            :text="sectionData.sectionE"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 6"
            :text="sectionData.sectionF"
          />
          <ModuleHeader
            v-else-if="moduleData.step === 7"
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
                <StepComponentD
                  v-else-if="moduleData.step === 4"
                  :statText="stats"
                />
                <StepComponentE
                  v-else-if="moduleData.step === 5"
                  :statText="stats"
                />
                <StepComponentF
                  v-else-if="moduleData.step === 6"
                  :statText="stats"
                />
                <div class="pt-15" v-else-if="moduleData.step === 7">
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
import sectionData from "@/assets/modules/sectionH.json";
import stats from "@/assets/modules/moduleH.json";
import vimeo from "@/assets/vimeo/vimeo.json";
import StepComponentStart from "@/views/modules/h-module/StepComponentStart.vue";
import StepComponentA from "@/views/modules/h-module/StepComponentA.vue";
import StepComponentB from "@/views/modules/h-module/StepComponentB.vue";
import StepComponentC from "@/views/modules/h-module/StepComponentC.vue";
import StepComponentD from "@/views/modules/h-module/StepComponentD.vue";
import StepComponentE from "@/views/modules/h-module/StepComponentE.vue";
import StepComponentF from "@/views/modules/h-module/StepComponentF.vue";
import { mapGetters } from "vuex";
import ReportService from "@/services/ReportService";
export default {
  name: "ModuleIndex",
  components: {
    StepComponentStart,
    StepComponentA,
    StepComponentB,
    StepComponentC,
    StepComponentD,
    StepComponentE,
    StepComponentF,
  },
  data() {
    return {
      totalSteps: 7,
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
      if (
        this.moduleData.step === 0 &&
        !this.visData.section_1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        !this.visData.section_6
      ) {
        await this.$store.commit("moduleH/stepUpNr", 7);
      } else if (
        this.moduleData.step === 0 &&
        !this.visData.section_1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        this.visData.section_6
      ) {
        await this.$store.commit("moduleH/stepUpNr", 6);
      } else if (
        this.moduleData.step === 0 &&
        !this.visData.section_1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        this.visData.section_5
      ) {
        await this.$store.commit("moduleH/stepUpNr", 5);
      } else if (
        this.moduleData.step === 0 &&
        !this.visData.section_1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        this.visData.section_4
      ) {
        await this.$store.commit("moduleH/stepUpNr", 4);
      } else if (
        this.moduleData.step === 0 &&
        !this.visData.section_1 &&
        !this.visData.section_2 &&
        this.visData.section_3
      ) {
        await this.$store.commit("moduleH/stepUpNr", 3);
      } else if (
        this.moduleData.step === 0 &&
        !this.visData.section_1 &&
        this.visData.section_2
      ) {
        await this.$store.commit("moduleH/stepUpNr", 2);
      } else if (this.moduleData.step === 0 && this.visData.section_1) {
        await this.$store.commit("moduleH/stepUpNr", 1);
      } else if (
        this.moduleData.step === 1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        !this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_a", true);
        await this.$store.commit("moduleH/stepUpNr", 6);
      } else if (
        this.moduleData.step === 1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_a", true);
        await this.$store.commit("moduleH/stepUpNr", 5);
      } else if (
        this.moduleData.step === 1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        this.visData.section_5
      ) {
        await this.$store.commit("moduleH/update_ready_a", true);
        await this.$store.commit("moduleH/stepUpNr", 4);
      } else if (
        this.moduleData.step === 1 &&
        !this.visData.section_2 &&
        !this.visData.section_3 &&
        this.visData.section_4
      ) {
        await this.$store.commit("moduleH/update_ready_a", true);
        await this.$store.commit("moduleH/stepUpNr", 3);
      } else if (
        this.moduleData.step === 1 &&
        !this.visData.section_2 &&
        this.visData.section_3
      ) {
        await this.$store.commit("moduleH/update_ready_a", true);
        await this.$store.commit("moduleH/stepUpNr", 2);
      } else if (this.moduleData.step === 1 && this.visData.section_2) {
        await this.$store.commit("moduleH/update_ready_a", true);
        await this.$store.commit("moduleH/stepUpNr", 1);
      } else if (
        this.moduleData.step === 2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        !this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_b", true);
        await this.$store.commit("moduleH/stepUpNr", 5);
      } else if (
        this.moduleData.step === 2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_b", true);
        await this.$store.commit("moduleH/stepUpNr", 4);
      } else if (
        this.moduleData.step === 2 &&
        !this.visData.section_3 &&
        !this.visData.section_4 &&
        this.visData.section_5
      ) {
        await this.$store.commit("moduleH/update_ready_b", true);
        await this.$store.commit("moduleH/stepUpNr", 3);
      } else if (
        this.moduleData.step === 2 &&
        !this.visData.section_3 &&
        this.visData.section_4
      ) {
        await this.$store.commit("moduleH/update_ready_b", true);
        await this.$store.commit("moduleH/stepUpNr", 2);
      } else if (this.moduleData.step === 2 && this.visData.section_3) {
        await this.$store.commit("moduleH/update_ready_b", true);
        await this.$store.commit("moduleH/stepUpNr", 1);
      } else if (
        this.moduleData.step === 3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        !this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_c", true);
        await this.$store.commit("moduleH/stepUpNr", 4);
      } else if (
        this.moduleData.step === 3 &&
        !this.visData.section_4 &&
        !this.visData.section_5 &&
        this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_c", true);
        await this.$store.commit("moduleH/stepUpNr", 3);
      } else if (
        this.moduleData.step === 3 &&
        !this.visData.section_4 &&
        this.visData.section_5
      ) {
        await this.$store.commit("moduleH/update_ready_c", true);
        await this.$store.commit("moduleH/stepUpNr", 2);
      } else if (this.moduleData.step === 3 && this.visData.section_4) {
        await this.$store.commit("moduleH/update_ready_c", true);
        await this.$store.commit("moduleH/stepUpNr", 1);
      } else if (
        this.moduleData.step === 4 &&
        !this.visData.section_5 &&
        !this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_d", true);
        await this.$store.commit("moduleH/stepUpNr", 3);
      } else if (
        this.moduleData.step === 4 &&
        !this.visData.section_5 &&
        this.visData.section_6
      ) {
        await this.$store.commit("moduleH/update_ready_d", true);
        await this.$store.commit("moduleH/stepUpNr", 2);
      } else if (this.moduleData.step === 4 && this.visData.section_5) {
        await this.$store.commit("moduleH/update_ready_d", true);
        await this.$store.commit("moduleH/stepUpNr", 1);
      } else if (this.moduleData.step === 5 && !this.visData.section_6) {
        await this.$store.commit("moduleH/update_ready_e", true);
        await this.$store.commit("moduleH/stepUpNr", 2);
      } else if (this.moduleData.step === 5 && this.visData.section_6) {
        await this.$store.commit("moduleH/update_ready_e", true);
        await this.$store.commit("moduleH/stepUpNr", 1);
      } else if (this.moduleData.step === 6) {
        await this.$store.commit("moduleH/update_ready_f", true);
        await this.$store.commit("moduleH/stepUpNr", 1);
      }
      await this.$store.dispatch("moduleH/setModulesData");
    },
    async stepBack() {
      await this.$vuetify.goTo(0);
      if (
        this.moduleData.step === 7 &&
        !this.visData.section_6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        !this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 7);
      } else if (
        this.moduleData.step === 7 &&
        !this.visData.section_6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 6);
      } else if (
        this.moduleData.step === 7 &&
        !this.visData.section_6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        this.visData.section_2
      ) {
        await this.$store.commit("moduleH/stepDownNr", 5);
      } else if (
        this.moduleData.step === 7 &&
        !this.visData.section_6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        this.visData.section_3
      ) {
        await this.$store.commit("moduleH/stepDownNr", 4);
      } else if (
        this.moduleData.step === 7 &&
        !this.visData.section_6 &&
        !this.visData.section_5 &&
        this.visData.section_4
      ) {
        await this.$store.commit("moduleH/stepDownNr", 3);
      } else if (
        this.moduleData.step === 7 &&
        !this.visData.section_6 &&
        this.visData.section_5
      ) {
        await this.$store.commit("moduleH/stepDownNr", 2);
      } else if (this.moduleData.step === 7 && this.visData.section_6) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      } else if (
        this.moduleData.step === 6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        !this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 6);
      } else if (
        this.moduleData.step === 6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 5);
      } else if (
        this.moduleData.step === 6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        this.visData.section_2
      ) {
        await this.$store.commit("moduleH/stepDownNr", 4);
      } else if (
        this.moduleData.step === 6 &&
        !this.visData.section_5 &&
        !this.visData.section_4 &&
        this.visData.section_3
      ) {
        await this.$store.commit("moduleH/stepDownNr", 3);
      } else if (
        this.moduleData.step === 6 &&
        !this.visData.section_5 &&
        this.visData.section_4
      ) {
        await this.$store.commit("moduleH/stepDownNr", 2);
      } else if (this.moduleData.step === 6 && this.visData.section_5) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      } else if (
        this.moduleData.step === 5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        !this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 5);
      } else if (
        this.moduleData.step === 5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 4);
      } else if (
        this.moduleData.step === 5 &&
        !this.visData.section_4 &&
        !this.visData.section_3 &&
        this.visData.section_2
      ) {
        await this.$store.commit("moduleH/stepDownNr", 3);
      } else if (
        this.moduleData.step === 5 &&
        !this.visData.section_4 &&
        this.visData.section_3
      ) {
        await this.$store.commit("moduleH/stepDownNr", 2);
      } else if (this.moduleData.step === 5 && this.visData.section_4) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      } else if (
        this.moduleData.step === 4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        !this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 4);
      } else if (
        this.moduleData.step === 4 &&
        !this.visData.section_3 &&
        !this.visData.section_2 &&
        this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 3);
      } else if (
        this.moduleData.step === 4 &&
        !this.visData.section_3 &&
        this.visData.section_2
      ) {
        await this.$store.commit("moduleH/stepDownNr", 2);
      } else if (this.moduleData.step === 4 && this.visData.section_3) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      } else if (
        this.moduleData.step === 3 &&
        !this.visData.section_2 &&
        !this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 3);
      } else if (
        this.moduleData.step === 3 &&
        !this.visData.section_2 &&
        this.visData.section_1
      ) {
        await this.$store.commit("moduleH/stepDownNr", 2);
      } else if (this.moduleData.step === 3 && this.visData.section_2) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      } else if (this.moduleData.step === 2 && !this.visData.section_1) {
        await this.$store.commit("moduleH/stepDownNr", 2);
      } else if (this.moduleData.step === 2 && this.visData.section_1) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      } else if (this.moduleData.step === 1) {
        await this.$store.commit("moduleH/stepDownNr", 1);
      }
    },
    stopThis() {
      this.dialogStop = true;
    },
    backStart() {
      this.$store.commit("moduleH/update_step", 0);
    },
    getReport() {
      const payload = {
        email: this.email,
      };
      this.activateEnd = true;
      // eslint-disable-next-line no-undef
      EventBus.$emit("report", true);
      ReportService.getReportH(payload)
        .then(() => {})
        .finally(() => {
          this.disableBtn = false;
        });
    },
  },
  computed: {
    ...mapGetters("auth", ["email"]),
    ...mapGetters("visH", ["visData"]),
    ...mapGetters("moduleH", ["moduleData"]),
  },
  async created() {
    const payload = {
      email: this.email,
    };

    await this.$store.dispatch("visH/getVisData", payload);
    await this.$store.dispatch("moduleH/getModulesData", payload);
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
