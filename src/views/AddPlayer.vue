<template>
  <div>
    <b-card title="Add NBA Player">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="jerseyNumber" placeholder="Enter his jersey number"></b-form-input>

      <b-form-input v-model="age" placeholder="Enter his age"></b-form-input>

      <b-button variant="success" @click="savePlayer">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      jerseyNumber: "",
    };
  },
  methods: {
    savePlayer() {
      let params = {
        name: this.name,
        age: this.age,
        jerseyNumber: this.jerseyNumber
      }

      this.axios
        .post("https://localhost:5001/api/NBAPlayer", params)
        .then(() => {
          alert("success");
          this.$router.push("nbaPlayer");
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