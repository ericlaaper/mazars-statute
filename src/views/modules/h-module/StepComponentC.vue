<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText :statText="statText.statement3" v-if="visData.statement_3" />
    <RadioGrade
      v-if="visData.statement_3"
      :stat="statText.statement3"
      v-model="sl_a"
      rules="required"
      :value="sl_a"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement4" v-if="visData.statement_4" />
    <RadioGrade
      v-if="visData.statement_4"
      :stat="statText.statement4"
      v-model="sl_b"
      rules="required"
      :value="sl_b"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement5" v-if="visData.statement_5" />
    <RadioGrade
      v-if="visData.statement_5"
      :stat="statText.statement5"
      v-model="sl_c"
      rules="required"
      :value="sl_c"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement6" v-if="visData.statement_6" />
    <RadioGrade
      v-if="visData.statement_6"
      :stat="statText.statement6"
      v-model="sl_d"
      rules="required"
      :value="sl_d"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement7" v-if="visData.statement_7" />
    <RadioGrade
      v-if="visData.statement_7"
      :stat="statText.statement7"
      v-model="sl_e"
      rules="required"
      :value="sl_e"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement8" v-if="visData.statement_8" />
    <RadioGrade
      v-if="visData.statement_8"
      :stat="statText.statement8"
      v-model="sl_f"
      rules="required"
      :value="sl_f"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <AreaValidation
      v-if="visData.statement_9"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_a"
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
    sl_a: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_a;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_b;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_c;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_d;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_f", value);
      },
    },
    data_a: {
      get() {
        return this.$store.state.moduleH.moduleData.data_a;
      },
      set(value) {
        this.$store.commit("moduleH/update_data_a", value);
      },
    },
    ...mapGetters("visH", ["visData"]),
  },
};
</script>

<style scoped></style>
