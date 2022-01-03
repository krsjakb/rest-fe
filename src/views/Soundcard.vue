<template>
  <div>
    <a href="addSoundcard">New soundcard</a>
    <b-list-group v-for="soundcard in soundcards" :key="soundcard.id">
      <b-list-group-item>
        Name: {{ soundcards.Name }}
        <small class="text-secondary"> Price: {{ soundcards.Price }} </small>
        <b-button variant="info" @click="editSoundcard(soundcards.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteSoundcard(soundcards.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      soundcards: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Soundcards")
        .then((response) => {
          this.soundcards = response.data;
        });
    },
    editSoundcard(id) {
      this.$router.push("editSoundcard/" + id)
    },
    deleteSoundcard(id) {
      this.axios
        .delete("https://localhost:5001/api/Soundcards/" + id)
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>