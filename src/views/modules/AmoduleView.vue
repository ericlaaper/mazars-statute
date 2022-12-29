<template>
  <div>
    <ToolBarAuth />
    <v-container class="base_1">
      <v-row no-gutters>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pb-10 pt-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          <div>Introtekst module</div>
        </v-col>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pb-10 pt-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          en zp dan
          <SectionElement> en dan moet hier nog iets komen </SectionElement>
        </v-col>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pb-10 pt-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          <ValidationObserver
            ref="obs"
            v-slot="{ handleSubmit, invalid, validated }"
          >
            <v-form @submit.prevent="onSubmit">
              <StatementText :statText="stats.statement1" />

              <ErrorMessage v-if="invalid && validated" />

              <RadioRegular
                v-model="question_a"
                error-message="errors"
                rules="required"
                :stat="stats.statement1"
              />
              <RadioRegular
                :label="stats.statement1a.name"
                v-model="question_b"
                error-message="errors"
                rules="required"
                :stat="stats.statement1a"
              />
              <RadioJN
                :stat="stats.statement2"
                v-model="question_c"
                rules="required"
                :value="question_c"
              />
              <RadioThumb
                :stat="stats.statement3"
                v-model="question_d"
                rules="required"
                :value="question_d"
              />
              <RatingTen
                :stat="stats.statement6"
                v-model="question_e"
                rules="required"
                :value="question_e"
              />
              <ButtonContinue @onClick="handleSubmit(onSubmit)" />
            </v-form>
          </ValidationObserver>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="base_1 full-page">
      <div class="mt-16 mb-16"></div>
    </v-container>
  </div>
</template>

<script>
import ToolBarAuth from "@/components/toolbar/ToolBarAuth.vue";
import SectionElement from "@/views/modules/SectionElement.vue";
import stats from "@/assets/modules/moduleC.json";
import StatementText from "@/components/text/StatementText.vue";
import ButtonContinue from "@/components/buttons/ButtonContinue.vue";
import ErrorMessage from "@/components/form/ErrorMessage.vue";
import RadioRegular from "@/components/form/RadioRegular.vue";
import RadioJN from "@/components/form/RadioJN.vue";
import RadioThumb from "@/components/form/RadioThumb.vue";
import RatingTen from "@/components/form/RatingTen.vue";
export default {
  name: "AmoduleView",
  components: {
    ErrorMessage,
    ButtonContinue,
    StatementText,
    SectionElement,
    ToolBarAuth,
    RadioRegular,
    RadioJN,
    RadioThumb,
    RatingTen,
  },
  data() {
    return {
      stats: stats,
      question_a: "",
      question_b: "",
      question_c: "",
      question_d: null,
      question_e: 0,
    };
  },
  methods: {
    onSubmit() {
      console.log("form submitted");
    },
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
