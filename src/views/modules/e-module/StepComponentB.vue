<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="textExample[4]" />
    <AreaValidation
      label="Input"
      v-model="textExample[4].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[4]" />
    <AreaValidation
      label="Input"
      v-model="textExample[5].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[5]" />
    <AreaValidation
      label="Input"
      v-model="textExample[5].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[6]" />
    <AreaValidation
      label="Input"
      v-model="textExample[6].answer"
      disabled="true"
    />
  </div>
</template>

<script>
import exampleText from "@/assets/modules/moduleE_example.json";
export default {
  name: "StepComponentB",
  props: ["statText"],
  components: {},
  data() {
    return {
      textExample: exampleText,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
