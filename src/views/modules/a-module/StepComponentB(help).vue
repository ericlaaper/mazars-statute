<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement1" />
    <RadioGrade
      :stat="statText.statement1"
      v-model="sl_a"
      rules="required"
      :value="sl_a"
    />
    <RadioRegular
      :label="statText.statement1.name"
      v-model="question_a"
      error-message="errors"
      rules="required"
      :stat="statText.statement1"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement2" />
    <RadioJN
      :stat="statText.statement2"
      v-model="question_b"
      rules="required"
      :value="question_b"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement3" />
    <RadioThumb
      :stat="statText.statement3"
      v-model="question_c"
      rules="required"
      :value="question_c"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement4" />
    <RadioGrade
      :stat="statText.statement4"
      v-model="question_d"
      rules="required"
      :value="question_d"
    />
  </div>
</template>

<script>
export default {
  name: "StepComponentBhelp",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_a: {
      get() {
        return this.$store.state.moduleA.sl_a;
      },
      set(value) {
        this.$store.commit("moduleA/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleA.sl_b;
      },
      set(value) {
        this.$store.commit("moduleA/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleA.sl_c;
      },
      set(value) {
        this.$store.commit("moduleA/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleA.sl_d;
      },
      set(value) {
        this.$store.commit("moduleA/update_sl_d", value);
      },
    },
  },
};
</script>

<style scoped></style>
