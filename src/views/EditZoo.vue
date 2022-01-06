<template>
  <div>
    <b-card :title="'Edit zoo with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="location" placeholder="Enter location"></b-form-input>

      <b-button variant="success" @click="saveZoo">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      location: "",
      animalsum: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getZooById();
  },
  methods: {
    getZooById() {
      this.axios
        .get("https://localhost:5001/api/Zoos/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.location = response.data.location;
          this.animalsum = response.data.animalsum;
        })
        .catch(() => {
          alert("failed");
        });
    },
    zoo() {
      let params = {
        id: this.id,
        name: this.name,
        location: this.location,
        animalsum: this.animalsum
      }

      this.axios
        .put("https://localhost:5001/api/zoo/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/zoos");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>