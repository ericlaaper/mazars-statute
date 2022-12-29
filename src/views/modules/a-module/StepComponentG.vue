<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioJN
      :stat="statText.statement27"
      v-model="question_t"
      rules="required"
      :value="question_t"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <AreaValidation
      v-if="visData.statement_28"
      label="Anders:"
      rules="max:200"
      v-model="data_l"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentG",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_t: {
      get() {
        return this.$store.state.moduleA.moduleData.question_t;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_t", value);
      },
    },
    data_l: {
      get() {
        return this.$store.state.moduleA.moduleData.data_l;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_l", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
