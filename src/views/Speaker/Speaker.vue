<template>
  <div>
    <a href="addSpeaker">New Speaker</a>
    <b-list-group v-for="Speaker in Speakers" :key="Speaker.id">
      <b-list-group-item>
        Name: {{ Speaker.name }}
        <small class="text-secondary"> RMS: {{ Speaker.rms }} </small>
        <b-button variant="info" @click="editSpeaker(Speaker.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteSpeaker(Speaker.id)">
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
        Speakers: []
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Speakers")
        .then((response) => {
          this.Speakers = response.data;
        });
    },
    editSpeaker(id) {
      this.$router.push("editSpeaker/" + id)
    },
    deleteSpeaker(id) {
      this.axios
        .delete("https://localhost:5001/api/Speakers/" + id)
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