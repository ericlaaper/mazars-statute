<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioGrade
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <RadioGrade
      v-if="visData.statement_22"
      :stat="statText.statement22"
      v-model="sl_s"
      rules="required"
      :value="sl_s"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioGrade
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="sl_t"
      rules="required"
      :value="sl_t"
    />
    <v-divider />

    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioGrade
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="sl_u"
      rules="required"
      :value="sl_u"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioGrade
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="sl_v"
      rules="required"
      :value="sl_v"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioGrade
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="sl_w"
      rules="required"
      :value="sl_w"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <AreaValidation
      v-if="visData.statement_27"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_d"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentD",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_r: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_r", value);
      },
    },
    sl_s: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_s;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_s", value);
      },
    },
    sl_t: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_t;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_t", value);
      },
    },
    sl_u: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_u;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_u", value);
      },
    },
    sl_v: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_v;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_v", value);
      },
    },
    sl_w: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_w;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_w", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleM.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleM/update_data_d", value);
      },
    },
    ...mapGetters("visM", ["visData"]),
  },
};
</script>

<style scoped></style>
