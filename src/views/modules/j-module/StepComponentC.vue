<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioRegular
      :label="statText.statement21.name"
      v-model="question_u"
      error-message="errors"
      rules="required"
      :stat="statText.statement21"
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
    question_u: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_u;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_u", value);
      },
    },

    ...mapGetters("visJ", ["visData"]),
  },
};
</script>

<style scoped></style>
