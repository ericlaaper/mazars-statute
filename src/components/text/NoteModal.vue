<template>
  <v-dialog
    v-model="show"
    persistent
    max-width="600px"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Toelichting</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div class="ma-10">
        <div>{{ note_a }}</div>
        <div class="mt-1" v-if="note_b">{{ note_b }}</div>
        <div class="mt-1" v-if="note_c">{{ note_c }}</div>
      </div>
      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NoteModal",
  props: ["visible", "note_a", "note_b", "note_c"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style scoped></style>
