<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioGrade
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="sl_t"
      rules="required"
      :value="sl_t"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioGrade
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="sl_u"
      rules="required"
      :value="sl_u"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_v"
      rules="required"
      :value="sl_v"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <AreaValidation
      v-if="visData.statement_29"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_f"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentC",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_t: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_t;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_t", value);
      },
    },
    sl_u: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_u;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_u", value);
      },
    },
    sl_v: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_v;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_v", value);
      },
    },

    data_f: {
      get() {
        return this.$store.state.moduleD.moduleData.data_f;
      },
      set(value) {
        this.$store.commit("moduleD/update_data_f", value);
      },
    },
    ...mapGetters("visD", ["visData"]),
  },
};
</script>

<style scoped></style>
