<template>
  <div>
    <b-card :title="'Edit Character with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="health" placeholder="Enter health"></b-form-input>

      <b-button variant="success" @click="saveCharacter">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      health: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getBradById() {
      this.axios
        .get("https://localhost:5001/api/CharacterModels/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.health = response.data.health;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveCharacter() {
      let params = {
        id: this.id,
        name: this.name,
        health: this.health
      }

      this.axios
        .put("https://localhost:5001/api/CharacterModels/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/characterModels");
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