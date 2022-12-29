<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioRegular
      :label="statText.statement14.name"
      v-model="question_l"
      error-message="errors"
      rules="required"
      :stat="statText.statement14"
    />
    <v-divider></v-divider>
    <AreaValidation
      v-if="visData.statement_15"
      label="Toelichting"
      rules="max:200"
      v-model="data_b"
    />
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
    question_l: {
      get() {
        return this.$store.state.moduleA.moduleData.question_l;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_l", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleA.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_b", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
