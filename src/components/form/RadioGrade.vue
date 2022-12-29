<template>
  <ValidationProvider :name="stat.name" :rules="rules" v-slot="{ errors }">
    <v-radio-group
      v-model="innerValue"
      :error-messages="errors"
      v-on="$listeners"
    >
      <v-card v-if="errors.length < 1" outlined class="mt-3 mb-3 base_1">
        <v-row no-gutters justify="center" cols="10" class="pa-2">
          <v-col cols="1" @click="updateA" class="ml-1">
            <IconBase
              value="1"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolA ? 'accent--text' : 'stone_1--text'"
            >
              <NumberOne />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateB" class="ml-1">
            <IconBase
              value="2"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolB ? 'accent--text' : 'stone_1--text'"
            >
              <NumberTwo />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateC" class="ml-1">
            <IconBase
              value="3"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolC ? 'accent--text' : 'stone_1--text'"
            >
              <NumberThree />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateD" class="ml-1">
            <IconBase
              value="4"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolD ? 'accent--text' : 'stone_1--text'"
            >
              <NumberFour />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateE" class="ml-1">
            <IconBase
              value="5"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolE ? 'accent--text' : 'stone_1--text'"
            >
              <NumberFive />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateF" class="ml-1">
            <IconBase
              value="6"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolF ? 'accent--text' : 'stone_1--text'"
            >
              <NumberSix />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateG" class="ml-1">
            <IconBase
              value="7"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolG ? 'accent--text' : 'stone_1--text'"
            >
              <NumberSeven />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateH" class="ml-1">
            <IconBase
              value="8"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolH ? 'accent--text' : 'stone_1--text'"
            >
              <NumberEight />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateI" class="ml-1">
            <IconBase
              value="9"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolI ? 'accent--text' : 'stone_1--text'"
            >
              <NumberNine />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateJ" class="ml-1 mr-1">
            <IconBase
              value="10"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolJ ? 'accent--text' : 'stone_1--text'"
            >
              <NumberTen />
            </IconBase>
          </v-col>
        </v-row>
      </v-card>
      <v-card v-if="errors.length > 0" outlined class="mt-3 mb-3 error">
        <v-row no-gutters justify="center" cols="10" class="pa-2">
          <v-col cols="1" @click="updateA" class="ml-1">
            <IconBase
              value="1"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolA ? 'accent--text' : 'stone_1--text'"
            >
              <NumberOne />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateB" class="ml-1">
            <IconBase
              value="2"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolB ? 'accent--text' : 'stone_1--text'"
            >
              <NumberTwo />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateC" class="ml-1">
            <IconBase
              value="3"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolC ? 'accent--text' : 'stone_1--text'"
            >
              <NumberThree />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateD" class="ml-1">
            <IconBase
              value="4"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolD ? 'accent--text' : 'stone_1--text'"
            >
              <NumberFour />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateE" class="ml-1">
            <IconBase
              value="5"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolE ? 'accent--text' : 'stone_1--text'"
            >
              <NumberFive />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateF" class="ml-1">
            <IconBase
              value="6"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolF ? 'accent--text' : 'stone_1--text'"
            >
              <NumberSix />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateG" class="ml-1">
            <IconBase
              value="7"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolG ? 'accent--text' : 'stone_1--text'"
            >
              <NumberSeven />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateH" class="ml-1">
            <IconBase
              value="8"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolH ? 'accent--text' : 'stone_1--text'"
            >
              <NumberEight />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateI" class="ml-1">
            <IconBase
              value="9"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolI ? 'accent--text' : 'stone_1--text'"
            >
              <NumberNine />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateJ" class="ml-1 mr-1">
            <IconBase
              value="10"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolJ ? 'accent--text' : 'stone_1--text'"
            >
              <NumberTen />
            </IconBase>
          </v-col>
        </v-row>
      </v-card>
    </v-radio-group>
  </ValidationProvider>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import NumberOne from "@/components/icons/numbers/NumberOne.vue";
import NumberTwo from "@/components/icons/numbers/NumberTwo.vue";
import NumberThree from "@/components/icons/numbers/NumberThree.vue";
import NumberFour from "@/components/icons/numbers/NumberFour.vue";
import NumberFive from "@/components/icons/numbers/NumberFive.vue";
import NumberSix from "@/components/icons/numbers/NumberSix.vue";
import NumberSeven from "@/components/icons/numbers/NumberSeven.vue";
import NumberEight from "@/components/icons/numbers/NumberEight.vue";
import NumberNine from "@/components/icons/numbers/NumberNine.vue";
import NumberTen from "@/components/icons/numbers/NumberTen.vue";

export default {
  name: "RadioGrade",
  components: {
    NumberOne,
    NumberTwo,
    NumberThree,
    NumberFour,
    NumberFive,
    NumberSix,
    NumberSeven,
    NumberEight,
    NumberNine,
    NumberTen,
    IconBase,
  },
  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    stat: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    innerValue: "",
    boolA: false,
    boolB: false,
    boolC: false,
    boolD: false,
    boolE: false,
    boolF: false,
    boolG: false,
    boolH: false,
    boolI: false,
    boolJ: false,
    errorsBool: true,
  }),
  methods: {
    updateA() {
      this.innerValue = 1;
      this.boolA = true;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateB() {
      this.innerValue = 2;
      this.boolA = true;
      this.boolB = true;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateC() {
      this.innerValue = 3;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateD() {
      this.innerValue = 4;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateE() {
      this.innerValue = 5;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateF() {
      this.innerValue = 6;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateG() {
      this.innerValue = 7;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    },
    updateH() {
      this.innerValue = 8;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = true;
      this.boolI = false;
      this.boolJ = false;
    },
    updateI() {
      this.innerValue = 9;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = true;
      this.boolI = true;
      this.boolJ = false;
    },
    updateJ() {
      this.innerValue = 10;
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = true;
      this.boolI = true;
      this.boolJ = true;
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
    if (this.value === 1) {
      this.boolA = true;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 2) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 3) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 4) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 5) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 6) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 7) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 8) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = true;
      this.boolI = false;
      this.boolJ = false;
    }
    if (this.value === 9) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = true;
      this.boolI = true;
      this.boolJ = false;
    }
    if (this.value === 10) {
      this.boolA = true;
      this.boolB = true;
      this.boolC = true;
      this.boolD = true;
      this.boolE = true;
      this.boolF = true;
      this.boolG = true;
      this.boolH = true;
      this.boolI = true;
      this.boolJ = true;
    }
    if (this.value === 0) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
      this.boolH = false;
      this.boolI = false;
      this.boolJ = false;
    }
  },
};
</script>

<style scoped></style>
