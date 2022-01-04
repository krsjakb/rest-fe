<template>
  <div>
    <b-card title="Add screwdriver">
      <b-form-input v-model="brandName" placeholder="Enter brand name"></b-form-input>

      <b-form-input v-model="modelName" placeholder="Enter model name"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveScrewDriver">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandName: "",
      modelName: "",
      price: "",
    };
  },
  methods: {
    saveScrewDriver() {
      let params = {
        brandName: this.brandName,
        modelName: this.modelName,
        price: this.price
      }

      this.axios
        .post("https://localhost:5001/api/ScrewDriverModels", params)
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