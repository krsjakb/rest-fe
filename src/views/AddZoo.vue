<template>
  <div>
    <b-card title="Add Zoo">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="location" placeholder="Enter location"></b-form-input>

      <b-form-input v-model="animalsum" placeholder="Enter sum of animals"></b-form-input>

      <b-button variant="success" @click="saveZoo">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      location: "",
      animalsum: null,
    };
  },
  methods: {
    saveZoo() {
      let params = {
        name: this.name,
        location: this.location
        animalsum: this.animalsum
      }

      this.axios
        .post("https://localhost:5001/api/Zoos", params)
        .then(() => {
          alert("success");
          this.$router.push("zoos");
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