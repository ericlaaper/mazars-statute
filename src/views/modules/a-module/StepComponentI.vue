<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement32"
      v-if="visData.statement_32"
    />
    <RadioRegular
      :label="statText.statement32.name"
      v-model="question_x"
      error-message="errors"
      rules="required"
      :stat="statText.statement32"
      v-if="visData.statement_32"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement33"
      v-if="visData.statement_33"
    />
    <RadioRegular
      :label="statText.statement33.name"
      v-model="question_y"
      error-message="errors"
      rules="required"
      :stat="statText.statement33"
      v-if="visData.statement_33"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentI",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_x: {
      get() {
        return this.$store.state.moduleA.moduleData.question_x;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_x", value);
      },
    },
    question_y: {
      get() {
        return this.$store.state.moduleA.moduleData.question_y;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_y", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
