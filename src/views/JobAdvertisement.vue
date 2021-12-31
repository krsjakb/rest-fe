<template>
  <div>
    <a href="addJobAdvertisement">New jobAdvertisement</a>
    <b-list-group v-for="jobAdvertisement in jobAdvertisements" :key="jobAdvertisement.id">
      <b-list-group-item>
        Name: {{ jobAdvertisement.name }}
        <small class="text-secondary"> Text: {{ jobAdvertisement.text }} </small>
        <small class="text-secondary"> Location: {{ jobAdvertisement.location }} </small>
        <b-button variant="info" @click="editJobAdvertisement(jobAdvertisement.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deletejobAdvertisement(jobAdvertisement.id)">
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
      jobAdvertisements: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/JobAdvertisements")
        .then((response) => {
          this.jobAdvertisements = response.data;
        });
    },
    editJobAdvertisement(id) {
      this.$router.push("editJobAdvertisement/" + id)
    },
    deletejobAdvertisement(id) {
      this.axios
        .delete("https://localhost:5001/api/jobAdvertisements/" + id)
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