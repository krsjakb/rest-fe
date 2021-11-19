<template>
  <div>
    <b-card title="Add Couch">

        <b-form-input v-model="weight" placeholder="Enter Weight"></b-form-input>

        <b-form-input v-model="brandName" placeholder="Enter Brand Name"></b-form-input>

        <b-form-input v-model="material" placeholder="Enter Material"></b-form-input>

        <b-button variant="success" @click="saveBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: "",
      brandName: "",
      material: "",
    };
  },
  methods: {
    saveBrand() {
      let params = {
        weight: this.weight,
        brandName: this.brandName,
        material: this.material
      }
      this.axios
        .post("https://localhost:44328/api/Couches", params)
        .then(() => {
          alert("success");
          this.$router.push("Couches");
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