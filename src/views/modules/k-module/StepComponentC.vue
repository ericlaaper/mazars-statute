<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement8" v-if="visData.statement_8" />
    <RadioJN
      v-if="visData.statement_8"
      :stat="statText.statement8"
      v-model="question_b"
      rules="required"
      :value="question_b"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioJN
      v-if="visData.statement_9"
      :stat="statText.statement9"
      v-model="question_c"
      rules="required"
      :value="question_c"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioJN
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="question_d"
      rules="required"
      :value="question_d"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioJN
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="question_e"
      rules="required"
      :value="question_e"
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
    question_b: {
      get() {
        return this.$store.state.moduleK.moduleData.question_b;
      },
      set(value) {
        this.$store.commit("moduleK/update_question_b", value);
      },
    },
    question_c: {
      get() {
        return this.$store.state.moduleK.moduleData.question_c;
      },
      set(value) {
        this.$store.commit("moduleK/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.moduleK.moduleData.question_d;
      },
      set(value) {
        this.$store.commit("moduleK/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.moduleK.moduleData.question_e;
      },
      set(value) {
        this.$store.commit("moduleK/update_question_e", value);
      },
    },
    ...mapGetters("visK", ["visData"]),
  },
};
</script>

<style scoped></style>
