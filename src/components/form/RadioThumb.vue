<template>
  <ValidationProvider :name="stat.name" :rules="rules" v-slot="{ errors }">
    <v-radio-group
      v-model="innerValue"
      :error-messages="errors"
      v-on="$listeners"
    >
      <v-card v-if="errors.length < 1" outlined class="mt-3 mb-3 base_1">
        <v-row no-gutters justify="center" cols="10" class="pa-2">
          <v-col cols="1" @click="updateA" class="mr-2">
            <IconBase
              value="-3"
              width="40"
              height="40"
              icon-name="thumb"
              :class="boolA ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbDown />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateB" class="mr-2 ml-2">
            <IconBase
              value="-2"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolB ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbDown />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateC" class="mr-2 ml-2">
            <IconBase
              value="-1"
              width="20"
              height="20"
              icon-name="thumb"
              :class="boolC ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbDown />
            </IconBase>
          </v-col>
          <!--          <v-col cols="1" @click="updateD" class="mr-2 ml-2">-->
          <!--            <IconBase-->
          <!--              value="0"-->
          <!--              width="60"-->
          <!--              height="60"-->
          <!--              icon-name="thumb"-->
          <!--              :class="boolD ? 'accent&#45;&#45;text' : 'stone_1&#45;&#45;text'"-->
          <!--            >-->
          <!--              <ThumbNeutral />-->
          <!--            </IconBase>-->
          <!--          </v-col>-->
          <v-col cols="1" @click="updateE" class="mr-2 ml-2">
            <IconBase
              value="1"
              width="20"
              height="20"
              icon-name="thumb"
              :class="boolE ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbUp />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateF" class="mr-2 ml-2">
            <IconBase
              value="2"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolF ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbUp />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateG" class="ml-2">
            <IconBase
              value="3"
              width="40"
              height="40"
              icon-name="thumb"
              :class="boolG ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbUp />
            </IconBase>
          </v-col>
          <!--        <v-col cols="1">-->
          <!--          <v-img-->
          <!--            :src="require('@/assets/thumbs-up.svg')"-->
          <!--            color="primary"-->
          <!--            max-width="30px"-->
          <!--          ></v-img>-->
          <!--        </v-col>-->
          <!--        <v-col cols="1">-->
          <!--          <v-img-->
          <!--            :src="require('@/assets/thumbs-up.svg')"-->
          <!--            max-width="30px"-->
          <!--          ></v-img>-->
          <!--        </v-col>-->
        </v-row>
      </v-card>
      <v-card v-if="errors.length > 0" outlined class="mt-3 mb-3 error">
        <v-row no-gutters justify="center" cols="7" class="pt-2 pb-3">
          <v-col cols="1" @click="updateA" class="mr-2">
            <IconBase
              value="-3"
              width="40"
              height="40"
              icon-name="thumb"
              :class="boolA ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbDown />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateB" class="mr-2 ml-2">
            <IconBase
              value="-2"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolB ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbDown />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateC" class="mr-2 ml-2">
            <IconBase
              value="-1"
              width="20"
              height="20"
              icon-name="thumb"
              :class="boolC ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbDown />
            </IconBase>
          </v-col>
          <!--          <v-col cols="1" @click="updateD" class="mr-2 ml-2">-->
          <!--            <IconBase-->
          <!--              value="0"-->
          <!--              width="40"-->
          <!--              height="40"-->
          <!--              icon-name="thumb"-->
          <!--              :class="boolD ? 'accent&#45;&#45;text' : 'stone_1&#45;&#45;text'"-->
          <!--            >-->
          <!--              <ThumbNeutral />-->
          <!--            </IconBase>-->
          <!--          </v-col>-->
          <v-col cols="1" @click="updateE" class="mr-2 ml-2">
            <IconBase
              value="1"
              width="20"
              height="20"
              icon-name="thumb"
              :class="boolE ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbUp />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateF" class="mr-2 ml-2">
            <IconBase
              value="2"
              width="30"
              height="30"
              icon-name="thumb"
              :class="boolF ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbUp />
            </IconBase>
          </v-col>
          <v-col cols="1" @click="updateG" class="ml-2">
            <IconBase
              value="3"
              width="40"
              height="40"
              icon-name="thumb"
              :class="boolG ? 'accent--text' : 'stone_1--text'"
            >
              <ThumbUp />
            </IconBase>
          </v-col>
          <!--        <v-col cols="1">-->
          <!--          <v-img-->
          <!--            :src="require('@/assets/thumbs-up.svg')"-->
          <!--            color="primary"-->
          <!--            max-width="30px"-->
          <!--          ></v-img>-->
          <!--        </v-col>-->
          <!--        <v-col cols="1">-->
          <!--          <v-img-->
          <!--            :src="require('@/assets/thumbs-up.svg')"-->
          <!--            max-width="30px"-->
          <!--          ></v-img>-->
          <!--        </v-col>-->
        </v-row>
      </v-card>
    </v-radio-group>
  </ValidationProvider>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import ThumbDown from "@/components/icons/ThumbDown.vue";
import ThumbUp from "@/components/icons/ThumbUp.vue";
export default {
  name: "RadioThumb",
  components: {
    ThumbDown,
    ThumbUp,
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
    nrOptions: {
      default: 2,
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
    errorsBool: true,
  }),
  methods: {
    updateA() {
      this.innerValue = -3;
      this.boolA = true;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    },
    updateB() {
      this.innerValue = -2;
      this.boolA = false;
      this.boolB = true;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    },
    updateC() {
      this.innerValue = -1;
      this.boolA = false;
      this.boolB = false;
      this.boolC = true;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    },
    updateD() {
      this.innerValue = 0;
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = true;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    },
    updateE() {
      this.innerValue = 1;
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = true;
      this.boolF = false;
      this.boolG = false;
    },
    updateF() {
      this.innerValue = 2;
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = true;
      this.boolG = false;
    },
    updateG() {
      this.innerValue = 3;
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = true;
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
    if (this.value === -3) {
      this.boolA = true;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    }
    if (this.value === -2) {
      this.boolA = false;
      this.boolB = true;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    }
    if (this.value === -1) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = true;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    }
    if (this.value === 0) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = true;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    }
    if (this.value === 1) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = true;
      this.boolF = false;
      this.boolG = false;
    }
    if (this.value === 2) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = true;
      this.boolG = false;
    }
    if (this.value === 3) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = true;
    }
    if (this.value == null) {
      this.boolA = false;
      this.boolB = false;
      this.boolC = false;
      this.boolD = false;
      this.boolE = false;
      this.boolF = false;
      this.boolG = false;
    }
  },
};
</script>

<style scoped></style>
