<template>
  <div>
    <b-card title="Add champ model">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="health" placeholder="Enter health"></b-form-input>

      <b-button variant="success" @click="saveBrand">Save</b-button>
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
    saveBrand() {
      let params = {
        name: this.name,
        health: this.health
      }

      this.axios
        .post("https://localhost:5001/api/ChampModels", params)
        .then(() => {
          alert("success");
          this.$router.push("champModels");
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
