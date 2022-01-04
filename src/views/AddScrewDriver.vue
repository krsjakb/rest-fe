<template>
  <div>
    <b-card title="Add screwdriver">
      <b-form-input v-model="brandname" placeholder="Enter brand name"></b-form-input>

      <b-form-input v-model="modelname" placeholder="Enter model name"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveScrewDriver">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandname: "",
      modelname: "",
      price: "",
    };
  },
  methods: {
    saveScrewDriver() {
      let params = {
        brandname: this.brandname,
        modelname: this.modelname,
        price: this.price
      }

      this.axios
        .post("https://localhost:5001/api/ScrewDrivers", params)
        .then(() => {
          alert("success");
          this.$router.push("screwDrivers");
        })
        .catch(() => {
          alert("failed to post");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>