<template>
  <div>
    <a href="addScrewDriver">New Screwdriver</a>
    <b-list-group v-for="screwDriver in screwDrivers" :key="screwDriver.id">
      <b-list-group-item>
        Brand Name: {{ screwDriver.brandname }}
        Model Name: {{ screwDriver.modelname }}
        <small class="text-secondary"> price: {{ screwDriver.price }} </small>
        <b-button variant="info" @click="editScrewDriver(screwDriver.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteScrewDriver(screwDriver.id)">
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
      screwDrivers: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/ScrewDrivers")
        .then((response) => {
          this.screwDrivers = response.data;
        });
    },
    editScrewDriver(id) {
      this.$router.push("editScrewDriver/" + id)
    },
    deleteScrewDriver(id) {
      this.axios
        .delete("https://localhost:5001/api/ScrewDrivers/" + id)
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => {
          alert("failed to delete");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>