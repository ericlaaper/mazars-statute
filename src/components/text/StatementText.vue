<template>
  <div class="mt-5 mb-5">
    <p class="body-1--text">
      {{ statText.statement }}
      <v-icon
        v-if="statText.comment"
        color="primary"
        dark
        @click.stop="showNote = true"
        >mdi-chat</v-icon
      >
    </p>
    <NoteModal
      :note_a="statText.note_a"
      :note_b="statText.note_b"
      :note_c="statText.note_c"
      :visible="showNote"
      @close="showNote = false"
    />
  </div>
</template>

<script>
import NoteModal from "@/components/text/NoteModal.vue";
export default {
  name: "StatementText",
  components: { NoteModal },
  props: ["statText"],
  data() {
    return {
      showNote: false,
    };
  },
};
</script>

<style scoped></style>
