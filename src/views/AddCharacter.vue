<template>
  <div>
    <b-card title="Add character">
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
      name: "",
      health: "",
    };
  },
  methods: {
    saveCharacter() {
      let params = {
        name: this.name,
        health: this.health
      }

      this.axios
        .post("https://localhost:5001/api/CharacterModels", params)
        .then(() => {
          alert("success");
          this.$router.push("CharacterModels");
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