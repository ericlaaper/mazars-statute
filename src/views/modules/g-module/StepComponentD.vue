<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioGrade
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />
    <v-divider></v-divider>
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
    <v-divider></v-divider>
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
    <v-divider></v-divider>

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
    <v-divider></v-divider>

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <AreaValidation
      v-if="visData.statement_24"
      label="Financieringsmogelijkheden"
      rules="max:150"
      v-model="data_d"
    />
    <v-divider></v-divider>
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
    sl_q: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_r", value);
      },
    },
    sl_s: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_s;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_s", value);
      },
    },
    sl_t: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_t;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_t", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleG.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleG/update_data_d", value);
      },
    },
    ...mapGetters("visG", ["visData"]),
  },
};
</script>

<style scoped></style>
