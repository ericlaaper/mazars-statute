<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="textExample[0]" />
    <AreaValidation
      label="Input"
      v-model="textExample[0].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[1]" />
    <AreaValidation
      label="Input"
      v-model="textExample[1].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[2]" />
    <AreaValidation
      label="Input"
      v-model="textExample[2].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[3]" />
    <AreaValidation
      label="Input"
      v-model="textExample[3].answer"
      disabled="true"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import exampleText from "@/assets/modules/moduleE_example.json";
export default {
  name: "StepComponentA",
  props: ["statText"],
  components: {},
  data() {
    return {
      textExample: exampleText,
    };
  },
  methods: {},
  computed: {
    sl_a: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_a;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_b;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_c;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_d;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_f", value);
      },
    },
    sl_g: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.moduleC.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleC/update_sl_i", value);
      },
    },
    data_a: {
      get() {
        return this.$store.state.moduleC.moduleData.data_a;
      },
      set(value) {
        this.$store.commit("moduleC/update_data_a", value);
      },
    },
    ...mapGetters("visC", ["visData"]),
  },
};
</script>

<style scoped></style>
