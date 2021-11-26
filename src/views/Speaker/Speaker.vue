<template>
  <div>
    <a href="addSpeaker">New brand</a>
    <b-list-group v-for="Speaker in Speakers" :key="Speaker.id">
      <b-list-group-item>
        Name: {{ Speaker.name }}
        <small class="text-secondary"> RMS: {{ Speaker.rms }} </small>
        <b-button variant="info" @click="editBrand(Speaker.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(Speaker.id)">
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
        id: 0,
        name: "",
        rms: ""
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
    editBrand(id) {
      this.$router.push("editBrand/" + id)
    },
    deleteBrand(id) {
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