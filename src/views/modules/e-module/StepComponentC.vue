<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement9" />
    <AreaValidation label="Familiewaarde" rules="max:150" v-model="data_a" />
    <v-divider />
    <StatementText :statText="statText.statement10" />
    <AreaValidation label="Definitie" rules="max:150" v-model="data_b" />
    <v-divider />
    <StatementText :statText="statText.statement11" />
    <AreaValidation
      label="Kenmerkend voor familie"
      rules="max:150"
      v-model="data_c"
    />
    <v-divider />
    <StatementText :statText="statText.statement12" />
    <AreaValidation
      label="Uitgedragen door familie"
      rules="max:150"
      v-model="data_d"
    />
    <v-divider />
    <StatementText :statText="statText.statement13" />
    <AreaValidation
      label="Vertalen nara omgeving"
      rules="max:150"
      v-model="data_e"
    />
    <v-divider />
    <StatementText :statText="statText.statement14" />
    <AreaValidation
      label="Toekomstbestendig"
      rules="max:150"
      v-model="data_f"
    />
    <v-divider />
  </div>
</template>

<script>
export default {
  name: "StepComponentC",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    data_a: {
      get() {
        return this.$store.state.moduleE.moduleData.data_a;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_a", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleE.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_b", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleE.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_c", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleE.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_d", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleE.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_e", value);
      },
    },
    data_f: {
      get() {
        return this.$store.state.moduleE.moduleData.data_f;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_f", value);
      },
    },
  },
};
</script>

<style scoped></style>
