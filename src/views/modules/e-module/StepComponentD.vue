<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement9" />
    <AreaValidation label="Familiewaarde" rules="max:150" v-model="data_g" />
    <v-divider />
    <StatementText :statText="statText.statement10" />
    <AreaValidation label="Definitie" rules="max:150" v-model="data_h" />
    <v-divider />
    <StatementText :statText="statText.statement11" />
    <AreaValidation
      label="Kenmerkend voor familie"
      rules="max:150"
      v-model="data_i"
    />
    <v-divider />
    <StatementText :statText="statText.statement12" />
    <AreaValidation
      label="Uitgedragen door familie"
      rules="max:150"
      v-model="data_j"
    />
    <v-divider />
    <StatementText :statText="statText.statement13" />
    <AreaValidation
      label="Vertalen nara omgeving"
      rules="max:150"
      v-model="data_k"
    />
    <v-divider />
    <StatementText :statText="statText.statement14" />
    <AreaValidation
      label="Toekomstbestendig"
      rules="max:150"
      v-model="data_l"
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
    data_g: {
      get() {
        return this.$store.state.moduleE.moduleData.data_g;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_g", value);
      },
    },
    data_h: {
      get() {
        return this.$store.state.moduleE.moduleData.data_h;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_h", value);
      },
    },
    data_i: {
      get() {
        return this.$store.state.moduleE.moduleData.data_i;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_i", value);
      },
    },
    data_j: {
      get() {
        return this.$store.state.moduleE.moduleData.data_j;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_j", value);
      },
    },
    data_k: {
      get() {
        return this.$store.state.moduleE.moduleData.data_k;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_k", value);
      },
    },
    data_l: {
      get() {
        return this.$store.state.moduleE.moduleData.data_l;
      },
      set(value) {
        this.$store.commit("moduleE/update_data_l", value);
      },
    },
  },
};
</script>

<style scoped></style>
