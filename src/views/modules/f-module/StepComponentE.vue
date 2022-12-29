<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <RadioGrade
      v-if="visData.statement_30"
      :stat="statText.statement30"
      v-model="sl_zd"
      rules="required"
      :value="sl_zd"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <RadioGrade
      v-if="visData.statement_31"
      :stat="statText.statement31"
      v-model="sl_ze"
      rules="required"
      :value="sl_ze"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement32"
      v-if="visData.statement_32"
    />
    <RadioGrade
      v-if="visData.statement_32"
      :stat="statText.statement32"
      v-model="sl_zf"
      rules="required"
      :value="sl_zf"
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
    sl_zd: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_zd;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_zd", value);
      },
    },
    sl_ze: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_ze;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_ze", value);
      },
    },
    sl_zf: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_zf;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_zf", value);
      },
    },
    ...mapGetters("visF", ["visData"]),
  },
};
</script>

<style scoped></style>
