<template>
  <div class="ml-3 mr-3 pt-10">
    <v-divider></v-divider>
    <StatementText :statText="statText.statement2" v-if="visData.statement_2" />
    <RadioRegular
      :label="statText.statement2.name"
      v-model="question_b"
      error-message="errors"
      rules="required"
      :stat="statText.statement2"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentB",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_b: {
      get() {
        return this.$store.state.moduleH.moduleData.question_b;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_b", value);
      },
    },
    ...mapGetters("visH", ["visData"]),
  },
};
</script>

<style scoped></style>
