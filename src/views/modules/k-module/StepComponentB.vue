<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement7" v-if="visData.statement_7" />
    <RadioRegular
      :label="statText.statement7.name"
      v-model="question_a"
      error-message="errors"
      rules="required"
      :stat="statText.statement7"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentA",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_a: {
      get() {
        return this.$store.state.moduleK.moduleData.question_a;
      },
      set(value) {
        this.$store.commit("moduleK/update_question_a", value);
      },
    },
    ...mapGetters("visK", ["visData"]),
  },
};
</script>

<style scoped></style>
