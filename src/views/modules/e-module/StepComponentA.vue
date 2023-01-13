<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="textExample[0]" />
    <AreaValidation
      label="Input"
      v-model="textExample[0].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[1]" />
    <AreaValidation
      label="Input"
      v-model="textExample[1].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[2]" />
    <AreaValidation
      label="Input"
      v-model="textExample[2].answer"
      disabled="true"
    />
    <StatementText :statText="textExample[3]" />
    <AreaValidation
      label="Input"
      v-model="textExample[3].answer"
      disabled="true"
    />
  </div>
</template>

<script>
import exampleText from "@/assets/modules/moduleE_example.json";
export default {
  name: "StepComponentA",
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
