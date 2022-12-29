<template>
  <div class="ml-3 mr-3 pt-10">
    <v-divider></v-divider>
    <StatementText :statText="statText.statement1" v-if="visData.statement_1" />
    <RadioRegular
      :label="statText.statement1.name"
      v-model="question_a"
      error-message="errors"
      rules="required"
      :stat="statText.statement1"
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
        return this.$store.state.moduleH.moduleData.question_a;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_a", value);
      },
    },
    ...mapGetters("visH", ["visData"]),
  },
};
</script>

<style scoped></style>
