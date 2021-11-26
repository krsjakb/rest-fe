<template>
  <div>
    <b-card title="Add Bed">

        <b-form-input v-model="height" placeholder="Enter Height"></b-form-input>

        <b-form-input v-model="width" placeholder="Enter Width"></b-form-input>

        <b-form-input v-model="length" placeholder="Enter Length"></b-form-input>

        <b-form-input v-model="brandName" placeholder="Enter Brand Name"></b-form-input>

        <b-button variant="success" @click="saveBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: "",
      length: "",
      height: "",
      brandName: "",
    };
  },
  methods: {
    saveBrand() {
      let params = {
        width: this.width,
        brandName: this.brandName,
        height: this.height,
        length: this.length
      }
      this.axios
        .post("https://localhost:5001/api/Beds", params)
        .then(() => {
          alert("success");
          this.$router.push("Beds");
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