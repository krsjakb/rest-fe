<template>
  <div>
    <b-card title="Add a blanket">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="brand" placeholder="Enter brand"></b-form-input>

      <b-form-input v-model="mainColor" placeholder="Enter main color"></b-form-input>

      <b-form-input v-model="mainMaterial" placeholder="Enter main material"></b-form-input>

      <b-form-input v-model="width" placeholder="Enter width"></b-form-input>

      <b-form-input v-model="length" placeholder="Enter length"></b-form-input>

      <b-button variant="success" @click="saveBlanket">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      brand: "",
      mainColor: "",
      mainMaterial: "",
      width: "",
      length: "",
    };
  },
  methods: {
    saveBlanket() {
      let params = {
        name: this.name,
        brand: this.brand,
        mainColor: this.mainColor,
        mainMaterial: this.mainMaterial,
        width: this.width,
        length: this.length
      }

      this.axios
        .post("https://localhost:5001/api/BlanketModels", params)
        .then(() => {
          alert("success");
          this.$router.push("blankets");
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