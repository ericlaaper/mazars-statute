<template>
  <ValidationProvider :name="stat.name" :rules="rules" v-slot="{ errors }">
    <v-radio-group
      v-model="innerValue"
      :error-messages="errors"
      v-on="$listeners"
    >
      <v-row no-gutters>
        <v-col v-if="errors.length > 0" cols="12" md="6" class="error">
          <v-card
            value="ke1"
            outlined
            class="mx-auto ma-3"
            max-width="344"
            height="50"
            @click="updateA"
            :color="boolA ? 'accent' : 'base_2'"
          >
            <v-card-text
              class="text-center font-weight-bold"
              :class="boolA ? 'base--text' : 'stone_2--text'"
            >
              JA
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="errors.length < 1" cols="12" md="6">
          <v-card
            value="ke1"
            outlined
            class="mx-auto ma-3"
            max-width="344"
            height="50"
            @click="updateA"
            :color="boolA ? 'accent' : 'base_2'"
          >
            <v-card-text
              class="text-center font-weight-bold"
              :class="boolA ? 'base--text' : 'stone_2--text'"
            >
              JA
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="errors.length > 0" cols="12" md="6" class="error">
          <v-card
            value="ke2"
            outlined
            class="mx-auto ma-3"
            max-width="344"
            height="50"
            @click="updateB"
            :color="boolB ? 'accent' : 'base_2'"
          >
            <v-card-text
              class="text-center font-weight-bold"
              :class="boolB ? 'base--text' : 'stone_2--text'"
            >
              NEE
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="errors.length < 1" cols="12" md="6">
          <v-card
            value="ke2"
            outlined
            class="mx-auto ma-3"
            max-width="344"
            height="50"
            @click="updateB"
            :color="boolB ? 'accent' : 'base_2'"
          >
            <v-card-text
              class="text-center font-weight-bold"
              :class="boolB ? 'base--text' : 'stone_2--text'"
            >
              NEE
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-radio-group>
  </ValidationProvider>
</template>

<script>
export default {
  name: "RadioJN",
  components: {},
  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    value: {
      type: String,
      default: "ke12",
    },
    stat: {
      type: Object,
      default: null,
    },
    nrOptions: {
      default: 2,
    },
  },
  data: () => ({
    innerValue: "",
    boolA: false,
    boolB: false,
    errorsBool: true,
  }),
  methods: {
    updateA() {
      this.innerValue = "ke1";
      this.boolA = true;
      this.boolB = false;
    },
    updateB() {
      this.innerValue = "ke2";
      this.boolB = true;
      this.boolA = false;
    },
  },

  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
    if (this.value === "ke1") {
      this.boolA = true;
      this.boolB = false;
    }
    if (this.value === "ke2") {
      this.boolB = true;
      this.boolA = false;
    }
    if (this.value === "") {
      this.boolA = false;
      this.boolB = false;
    }
  },
};
</script>

<style scoped></style>
