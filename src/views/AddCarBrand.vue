<template>
  <div>
    <b-card title="Add car brand">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="origin" placeholder="Enter origin"></b-form-input>

      <b-button variant="success" @click="saveBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      origin: "",
    };
  },
  methods: {
    saveBrand() {
      let params = {
        name: this.name,
        origin: this.origin
      }

      this.axios
        .post("https://localhost:5001/api/CarBrands", params)
        .then(() => {
          alert("success");
          this.$router.push("carBrands");
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