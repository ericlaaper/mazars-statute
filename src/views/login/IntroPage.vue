<template>
  <div>
    <ToolBar />
    <v-container class="base_1 full-page">
      <v-row no-gutters>
        <v-col
          cols="12"
          class="body-1 pl-2 pr-2 pb-10 pt-10"
          md="10"
          offset-md="1"
          lg="8"
          offset-lg="2"
        >
          <vimeo-player
            :video-id="vimeo.intro"
            class="embed-container"
            :options="{ responsive: true }"
          ></vimeo-player>
          <v-row class="mt-15 ml-3 mr-3">
            Beste betrokkene bij het maken van een familiestatuut voor de
            familie {{ family.data.family_name }}.<br /><br />

            Mijn naam is {{ family.data.user.first_name }}
            {{ family.data.user.last_name }} en namens Trusted Accountant
            begeleid ik de familie {{ family.data.family_name }} bij het
            beschrijven van het Familiestatuut.<br />
            <br />

            U bent uitgenodigd om aan de familiebijeenkomsten deel te nemen.
            Voorafgaand aan elke familiebijeenkomst vragen wij alle deelnemers
            om input over bepaalde perspectieven op het familiebedrijf.
            <br />

            <br />
            Met de Familiestatuut App bieden wij u de mogelijkheid om uw input
            te geven aan de hand van een gestructureerde vragenlijst. Uw input
            geeft ons een beter begrip van uw visie op de toekomst van het
            familiebedrijf en de rol van de familie hierbij. Samen met de visie
            van de andere deelnemers hebben we een compleet beeld van de wensen
            en verwachtingen. Hierdoor kunnen we in de familiebijeenkomsten
            gerichter toewerken naar het vastleggen van de afspraken die de
            familie wil maken.
            <br />
            Op de volgende pagina komt u in uw persoonlijke deel van de
            Familiestatuut App die wij voor u hebben klaargezet.
            <br />
            <br />

            U kunt de Familiestatuut App in uw eigen tijd en tempo doornemen en
            invullen. Voor elke volgende familiebijeenkomst zullen er nieuwe
            modules voor u worden klaargezet. Heeft u vragen of opmerkingen over
            de Familiestatuut App, dan kunt u mij bereiken op onderstaande
            contactgegevens. <br />
            <br />Alvast dank en tot de volgende familiebijeenkomst.<br />
            Met vriendelijke groet,<br />
            <br />
            <br />
            {{ family.data.user.first_name }} {{ family.data.user.last_name
            }}<br />
            <br />

            <h5>
              TrustedAccountant
              <br />

              {{ family.data.user.first_name }} {{ family.data.user.last_name
              }}<br />
              e-mail {{ family.data.user.email }}<br />
              telefoon: {{ family.data.user.telephone }} <br />
            </h5>
          </v-row>
          <v-row class="justify-end">
            <div class="text-end mr-15">
              <v-btn
                elevation="15"
                class="primary"
                @click="start"
                :disabled="!valid"
                :class="{ 'primary white--text': valid, disabled: !valid }"
                >Verder</v-btn
              >
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/toolbar/ToolBar.vue";
import vimeo from "@/assets/vimeo/vimeo.json";
import { mapGetters } from "vuex";
export default {
  name: "IntroPage",
  components: { ToolBar },
  data() {
    return {
      vimeo: vimeo,
      companyName: null,
      firstNameUser: null,
      lastNameUser: null,
      emailUser: null,
      telephoneUser: null,
      valid: true,
    };
  },
  methods: {
    start() {
      this.$vuetify.goTo(0);
      this.$router.push({ name: "login-email" });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.companyName = JSON.parse(localStorage.getItem("companyName"));
    this.emailUser = JSON.parse(localStorage.getItem("emailUser"));
    this.telephoneUser = JSON.parse(localStorage.getItem("telephoneUser"));
  },
  computed: {
    ...mapGetters("auth", ["family"]),
  },
};
</script>

<style scoped>
.full-page {
  height: 400vh;
}
</style>
