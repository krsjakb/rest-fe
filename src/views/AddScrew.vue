<template>
  <div>
    <b-card title="Add Screw">
      <b-form-input v-model="name" placeholder="Enter Name"></b-form-input>

      <b-form-input
        v-model="material"
        placeholder="Enter Material"
      ></b-form-input>

      <b-form-input
        v-model="headType"
        placeholder="Enter HeadType"
      ></b-form-input>

      <b-form-input v-model="length" placeholder="Enter Length"></b-form-input>

      <b-form-input
        v-model="packageSize"
        placeholder="Enter PackageSize"
      ></b-form-input>

      <b-form-input v-model="weight" placeholder="Enter Weight"></b-form-input>

      <b-button variant="success" @click="saveScrew">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      material: "",
      headType: "",
      length: "",
      packageSize: "",
      weight: "",
    };
  },
  methods: {
    saveScrew() {
      let params = {
        name: this.name,
        material: this.material,
        headType: this.headType,
        length: this.length,
        packageSize: this.packageSize,
        weight: this.weight,
      };
      this.axios
        .post("https://localhost:5001/api/ScrewModel", params)
        .then(() => {
          alert("success");
          this.$router.push("Screws");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>