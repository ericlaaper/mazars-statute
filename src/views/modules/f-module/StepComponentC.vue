<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioGrade
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="sl_p"
      rules="required"
      :value="sl_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioGrade
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioGrade
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioGrade
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="sl_s"
      rules="required"
      :value="sl_s"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioGrade
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="sl_t"
      rules="required"
      :value="sl_t"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioGrade
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="sl_u"
      rules="required"
      :value="sl_u"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <RadioGrade
      v-if="visData.statement_22"
      :stat="statText.statement22"
      v-model="sl_v"
      rules="required"
      :value="sl_v"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioGrade
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="sl_w"
      rules="required"
      :value="sl_w"
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
    sl_p: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_p;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_p", value);
      },
    },
    sl_q: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_r", value);
      },
    },
    sl_s: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_s;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_s", value);
      },
    },
    sl_t: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_t;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_t", value);
      },
    },
    sl_u: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_u;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_u", value);
      },
    },
    sl_v: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_v;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_v", value);
      },
    },
    sl_w: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_w;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_w", value);
      },
    },
    ...mapGetters("visF", ["visData"]),
  },
};
</script>

<style scoped></style>
