<template>
  <div>
    <b-card :title="'Edit player with id of ' + id">
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
      id: null,
      name: "",
      jerseyNumber: "",
      age: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPlayerById();
  },
  methods: {
    getPlayerById() {
      this.axios
        .get("https://localhost:5001/api/NBAPlayer/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.jerseyNumber = response.data.jerseyNumber;
          this.age = response.data.age
        })
        .catch(() => {
          alert("failed");
        });
    },
    savePlayer() {
      let params = {
        id: this.id,
        name: this.name,
        jerseyNumber: this.jerseyNumber,
        age: this.age
      }

      this.axios
        .put("https://localhost:5001/api/NBAPlayer/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/nbaPlayer");
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