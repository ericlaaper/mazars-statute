<template>
  <div>
    <ToolBarAuth />
    <v-container class="base_1" v-if="!loading">
      <v-row no-gutters>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pb-10 pt-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          Beste {{ moduleData.first_name }} {{ moduleData.last_name }},
        </v-col>

        <v-col
          cols="12"
          class="body-1 pl-2 pr-2"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          Welkom in de Familiestatuut App. Onderstaand treft u de modules aan
          voor het eerstvolgende familieoverleg. Lees eerst deze tekst, voordat
          u start met een module.
        </v-col>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pt-2"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          Doel van de Familiestatuut App is om uw mening over verschillende
          perspectieven op uw familiebedrijf te inventariseren. Iedere deelnemer
          aan het familieoverleg krijgt dezelfde informatie en vragen
          aangereikt.
        </v-col>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pt-2"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          De uitkomsten presenteren we in het familieoverleg, waarbij ieders
          inbreng zichtbaar wordt. Zo ontstaat een goed beeld welke onderwerpen
          draagvlak hebben en welke onderwerpen uitnodigen tot verdere
          discussie.
        </v-col>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pt-2 pb-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          Aan de discussie kan iedereen bijdragen en dat zorgt voor
          betrokkenheid en draagvlak in de besluitvorming. Deze besluitvorming
          vertalen wij vervolgens naar een concept Familiestatuut.
        </v-col>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pt-2 pb-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          <p class="primary--text">
            De volgende bijeenkomst is gepland voor {{ dateData.meeting_date }}.
            Wij willen u vragen om de onderstaande modules voor
            {{ dateData.handled_date }} af te ronden.
          </p>
        </v-col>

        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <ModuleStart
            v-if="visData.module_a"
            :header="moduleText.titleA"
            :text="moduleText.descA"
            :total="totalA"
            :finished="finishA"
            :onClick="goModuleA"
          />
          <ModuleStart
            v-if="visData.module_b"
            :header="moduleText.titleB"
            :text="moduleText.descB"
            :total="totalB"
            :finished="finishB"
            :onClick="goModuleB"
          />

          <ModuleStart
            v-if="visData.module_c"
            :header="moduleText.titleC"
            :text="moduleText.descC"
            :total="totalC"
            :finished="finishC"
            :onClick="goModuleC"
          />
          <ModuleStart
            v-if="visData.module_d"
            :header="moduleText.titleD"
            :text="moduleText.descD"
            :total="totalD"
            :finished="finishD"
            :onClick="goModuleD"
          />
          <ModuleStart
            v-if="visData.module_e"
            :header="moduleText.titleE"
            :text="moduleText.descE"
            :total="totalE"
            :finished="finishE"
            :onClick="goModuleE"
          />
          <ModuleStart
            v-if="visData.module_f"
            :header="moduleText.titleF"
            :text="moduleText.descF"
            :total="totalF"
            :finished="finishF"
            :onClick="goModuleF"
          />
          <ModuleStart
            v-if="visData.module_g"
            :header="moduleText.titleG"
            :text="moduleText.descG"
            :total="totalG"
            :finished="finishG"
            :onClick="goModuleG"
          />
          <ModuleStart
            v-if="visData.module_h"
            :header="moduleText.titleH"
            :text="moduleText.descH"
            :total="totalH"
            :finished="finishH"
            :onClick="goModuleH"
          />
          <ModuleStart
            v-if="visData.module_i"
            :header="moduleText.titleI"
            :text="moduleText.descI"
            :total="totalI"
            :finished="finishI"
            :onClick="goModuleI"
          />
          <ModuleStart
            v-if="visData.module_j"
            :header="moduleText.titleJ"
            :text="moduleText.descJ"
            :total="totalJ"
            :finished="finishJ"
            :onClick="goModuleJ"
          />
          <ModuleStart
            v-if="visData.module_k"
            :header="moduleText.titleK"
            :text="moduleText.descK"
            :total="totalK"
            :finished="finishK"
            :onClick="goModuleK"
          />

          <ModuleStart
            v-if="visData.module_l"
            :header="moduleText.titleL"
            :text="moduleText.descL"
            :total="totalL"
            :finished="finishL"
            :onClick="goModuleL"
          />

          <ModuleStart
            v-if="visData.module_m"
            :header="moduleText.titleM"
            :text="moduleText.descM"
            :total="totalM"
            :finished="finishM"
            :onClick="goModuleM"
          />
          <ModuleStart
            v-if="visData.module_n"
            :header="moduleText.titleN"
            :text="moduleText.descN"
            :total="totalN"
            :finished="finishN"
            :onClick="goModuleN"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="base_1 half-page">
      <div class="mt-16 mb-16"></div>
    </v-container>
  </div>
</template>

<script>
import ToolBarAuth from "@/components/toolbar/ToolBarAuth.vue";
import ModuleStart from "@/components/modules/ModuleStart.vue";
import moduleText from "@/assets/modules/modules.json";
import { mapGetters } from "vuex";
export default {
  name: "ModulesView",
  components: { ModuleStart, ToolBarAuth },
  data() {
    return {
      moduleText: moduleText,
      data: {
        id: 1,
        chart_id: 1,
        first_name: "Jan",
        last_name: "de Beer",
        gender: "1",
        language: "nl",
        charter: {
          a_module: true,
          b_module: true,
          c_module: false,
          d_module: true,
          e_module: true,
          f_module: true,
          g_module: true,
          h_module: true,
          i_module: true,
          j_module: true,
          k_module: true,
          l_module: true,
          m_module: true,
          n_module: true,
          o_module: true,
        },
        a_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: false,
        },
        b_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
        },
        c_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
          readyG: true,
          readyH: true,
          readyI: true,
        },
        d_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
        },
        e_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: 0,
          readyF: 0,
        },
        f_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
        },
        g_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
        },
        h_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
        },
        i_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
        },
        j_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
          readyG: true,
          readyH: true,
        },
        k_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
          readyG: true,
          readyH: true,
          readyI: true,
        },
        l_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
          readyG: true,
          readyH: true,
          readyI: true,
        },
        m_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
          readyF: true,
          readyG: true,
          readyH: true,
        },
        n_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
        },
        o_module: {
          readyA: true,
          readyB: true,
          readyC: true,
          readyD: true,
          readyE: true,
        },
      },
    };
  },
  methods: {
    test() {
      const payload = {
        email: this.email,
      };
      this.$store.dispatch("modules/getModulesData", payload);
      console.log("gelukt");
    },
    goModuleA() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_a" });
    },
    goModuleB() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_b" });
    },
    goModuleC() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_c" });
    },
    goModuleD() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_d" });
    },
    goModuleE() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_e" });
    },
    goModuleF() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_f" });
    },
    goModuleG() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_g" });
    },
    goModuleH() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_h" });
    },
    goModuleI() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_i" });
    },
    goModuleJ() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_j" });
    },
    goModuleK() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_k" });
    },
    goModuleL() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_l" });
    },
    goModuleM() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_m" });
    },
    goModuleN() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "module_n" });
    },
  },
  computed: {
    finishA() {
      return Object.values(this.moduleData.module_a).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishB() {
      return Object.values(this.moduleData.module_b).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishC() {
      return Object.values(this.moduleData.module_c).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishD() {
      return Object.values(this.moduleData.module_d).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishE() {
      return Object.values(this.moduleData.module_e).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishF() {
      return Object.values(this.moduleData.module_f).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishG() {
      return Object.values(this.moduleData.module_g).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishH() {
      return Object.values(this.moduleData.module_h).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishI() {
      return Object.values(this.moduleData.module_i).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishJ() {
      return Object.values(this.moduleData.module_j).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishK() {
      return Object.values(this.moduleData.module_k).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishL() {
      return Object.values(this.moduleData.module_l).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishM() {
      return Object.values(this.moduleData.module_m).reduce(
        (a, item) => a + item,
        0
      );
    },
    finishN() {
      return Object.values(this.moduleData.module_n).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalA() {
      return Object.values(this.visData.moduleA).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalB() {
      return Object.values(this.visData.moduleB).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalC() {
      return Object.values(this.visData.moduleC).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalD() {
      return Object.values(this.visData.moduleD).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalE() {
      return Object.values(this.visData.moduleE).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalF() {
      return Object.values(this.visData.moduleF).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalG() {
      return Object.values(this.visData.moduleG).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalH() {
      return Object.values(this.visData.moduleH).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalI() {
      return Object.values(this.visData.moduleI).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalJ() {
      return Object.values(this.visData.moduleJ).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalK() {
      return Object.values(this.visData.moduleK).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalL() {
      return Object.values(this.visData.moduleL).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalM() {
      return Object.values(this.visData.moduleM).reduce(
        (a, item) => a + item,
        0
      );
    },
    totalN() {
      return Object.values(this.visData.moduleN).reduce(
        (a, item) => a + item,
        0
      );
    },
    ...mapGetters("auth", ["email"]),
    ...mapGetters("modules", ["moduleData", "loading"]),
    ...mapGetters("visModules", ["visData"]),
    ...mapGetters("dateModules", ["dateData"]),
  },
  created() {
    const payload = {
      email: this.email,
    };
    this.$store.dispatch("modules/getModulesData", payload);
    this.$store.dispatch("visModules/getVisData", payload);
    this.$store.dispatch("dateModules/getDateData", payload);
  },
};
</script>
<style scoped>
.full-page {
  height: 100vh;
}
.half-page {
  height: 50vh;
}
</style>
